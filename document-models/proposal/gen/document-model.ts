import type { DocumentModelGlobalState } from "document-model";

export const documentModel: DocumentModelGlobalState = {
  author: {
    name: "Vetra Test",
    website: "https://powerhouse.inc",
  },
  description:
    "Proposal document model for DAO governance proposals with status tracking and linked tasks",
  extension: "phdprop",
  id: "vetra-test/proposal",
  name: "Proposal",
  specifications: [
    {
      changeLog: [],
      modules: [
        {
          description: "Core proposal operations",
          id: "core",
          name: "Core",
          operations: [
            {
              description: "Create a new proposal",
              errors: [],
              examples: [],
              id: "create-proposal",
              name: "CREATE_PROPOSAL",
              reducer:
                'state.id = action.input.id;\nstate.daoId = action.input.daoId;\nstate.title = action.input.title;\nstate.description = action.input.description;\nstate.status = "DRAFT";\nstate.createdAt = action.input.createdAt;\nstate.createdBy = action.input.createdBy;\nstate.tasks = [];',
              schema:
                "input CreateProposalInput {\n  id: OID!\n  daoId: OID!\n  title: String!\n  description: String!\n  createdAt: DateTime!\n  createdBy: String!\n}\n",
              scope: "global",
              template: "Create a new proposal",
            },
            {
              description: "Update proposal status",
              errors: [],
              examples: [],
              id: "update-proposal-status",
              name: "UPDATE_PROPOSAL_STATUS",
              reducer: "state.status = action.input.status;",
              schema:
                "input UpdateProposalStatusInput {\n  status: ProposalStatus!\n}\n",
              scope: "global",
              template: "Update proposal status",
            },
            {
              description: "Update proposal title and description",
              errors: [],
              examples: [],
              id: "update-proposal-details",
              name: "UPDATE_PROPOSAL_DETAILS",
              reducer:
                "if (action.input.title !== undefined) state.title = action.input.title;\nif (action.input.description !== undefined) state.description = action.input.description;",
              schema:
                "input UpdateProposalDetailsInput {\n  title: String\n  description: String\n}\n",
              scope: "global",
              template: "Update proposal title and description",
            },
          ],
        },
        {
          description: "Task management operations",
          id: "tasks",
          name: "Tasks",
          operations: [
            {
              description: "Add task reference to proposal",
              errors: [],
              examples: [],
              id: "add-task-to-proposal",
              name: "ADD_TASK_TO_PROPOSAL",
              reducer:
                "if (!state.tasks.includes(action.input.taskId)) state.tasks.push(action.input.taskId);",
              schema: "input AddTaskToProposalInput {\n  taskId: OID!\n}\n",
              scope: "global",
              template: "Add task reference to proposal",
            },
            {
              description: "Remove task reference from proposal",
              errors: [],
              examples: [],
              id: "remove-task-from-proposal",
              name: "REMOVE_TASK_FROM_PROPOSAL",
              reducer:
                "state.tasks = state.tasks.filter((id: OID) => id !== action.input.taskId);",
              schema:
                "input RemoveTaskFromProposalInput {\n  taskId: OID!\n}\n",
              scope: "global",
              template: "Remove task reference from proposal",
            },
          ],
        },
      ],
      state: {
        global: {
          examples: [],
          initialValue:
            '{"id": null, "daoId": null, "title": "", "description": "", "status": "DRAFT", "createdAt": null, "createdBy": "", "tasks": []}',
          schema:
            "enum ProposalStatus {\n  DRAFT\n  ACTIVE\n  APPROVED\n  REJECTED\n  EXECUTED\n}\n\ntype ProposalState {\n  id: OID\n  daoId: OID\n  title: String\n  description: String\n  status: ProposalStatus\n  createdAt: DateTime\n  createdBy: String\n  tasks: [OID!]\n}",
        },
        local: {
          examples: [],
          initialValue: "",
          schema: "",
        },
      },
      version: 1,
    },
  ],
};
