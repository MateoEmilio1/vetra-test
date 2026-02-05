// MCP Client - Integrado con reactor-mcp (Vetra Backend)
// Usa GraphQL API del reactor-mcp en http://localhost:4001/graphql

const GRAPHQL_URL = "http://localhost:4001/graphql";

export interface Document {
  id: string;
  name?: string;
  description?: string;
  type?: string;
}

export interface MRPCError {
  code: number;
  message: string;
}

// Función para generar IDs en el cliente
function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}



// Llamar a GraphQL del reactor-mcp
async function callGraphQL(query: string, variables?: unknown): Promise<unknown> {
  try {
    const response = await fetch(GRAPHQL_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables }),
    });

    if (!response.ok) {
      console.warn(`GraphQL endpoint returned ${response.status}, using fallback data`);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = (await response.json()) as {
      data?: unknown;
      errors?: Array<{ message: string }>;
    };

    if (data.errors) {
      console.warn("GraphQL returned errors, using fallback:", data.errors);
      throw new Error(data.errors[0].message);
    }

    return data.data;
  } catch (error) {
    console.warn("GraphQL Call failed, will use local fallback:", error);
    throw error;
  }
}

export const mcpClient = {
  async getDrives(): Promise<Document[]> {
    const result = (await callGraphQL(`
      query {
        drives {
          id
          name
        }
      }
    `)) as {
      drives?: Array<{ id: string; name?: string }>;
    };
    return result.drives || [];
  },

  async getDocuments(driveId: string): Promise<Document[]> {
    const result = (await callGraphQL(`
      query GetDocuments($driveId: String!) {
        documents(driveId: $driveId) {
          id
          name
          description
          type
        }
      }
    `, { driveId })) as {
      documents?: Document[];
    };
    return result.documents || [];
  },

  async createDocument(
    driveId: string,
    data: { name: string; description?: string; type: string }
  ): Promise<Document> {
    const result = (await callGraphQL(`
      mutation CreateDocument($driveId: String!, $input: DocumentInput!) {
        createDocument(driveId: $driveId, input: $input) {
          id
          name
          description
          type
        }
      }
    `, { 
      driveId,
      input: data
    })) as {
      createDocument?: Document;
    };
    return result.createDocument || { id: generateId(), ...data };
  },

  async getProposals(): Promise<Document[]> {
    const result = (await callGraphQL(`
      query GetProposals {
        documents(driveId: "vetra-drive") {
          id
          name
          description
          type
        }
      }
    `)) as {
      documents?: Document[];
    };
    return result.documents?.filter((d) => d.type === "proposal") || [];
  },

  async getTasks(): Promise<Document[]> {
    const result = (await callGraphQL(`
      query GetTasks {
        documents(driveId: "vetra-drive") {
          id
          name
          description
          type
        }
      }
    `)) as {
      documents?: Document[];
    };
    return result.documents?.filter((d) => d.type === "task") || [];
  },

  async deleteDocument(id: string): Promise<void> {
    await callGraphQL(`
      mutation DeleteDocument($id: String!) {
        deleteDocument(id: $id)
      }
    `, { id });
  },

  async updateDocument(
    id: string,
    data: { name?: string; description?: string }
  ): Promise<Document> {
    const result = (await callGraphQL(`
      mutation UpdateDocument($id: String!, $input: DocumentUpdateInput!) {
        updateDocument(id: $id, input: $input) {
          id
          name
          description
          type
        }
      }
    `, { 
      id,
      input: data
    })) as {
      updateDocument?: Document;
    };
    return result.updateDocument || { id, ...data };
  },
};
