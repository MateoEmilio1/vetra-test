import type { DocumentModelGlobalState } from "document-model";

export const documentModel: DocumentModelGlobalState = {
  author: {
    name: "Vetra Test",
    website: "https://powerhouse.inc",
  },
  description:
    "Task document model for tracking discrete work items within proposals with status and assignee tracking",
  extension: "phdtask",
  id: "vetra-test/task",
  name: "Task",
  specifications: [
    {
      changeLog: [],
      modules: [
        {
          description: "Task lifecycle operations",
          id: "lifecycle",
          name: "Lifecycle",
          operations: [
            {
              description: "Create a new task",
              errors: [],
              examples: [],
              id: "create-task",
              name: "CREATE_TASK",
              reducer:
                'state.id = action.input.id;\nstate.proposalId = action.input.proposalId;\nstate.title = action.input.title;\nstate.description = action.input.description || null;\nstate.status = "TODO";\nstate.createdAt = action.input.createdAt;',
              schema:
                "input CreateTaskInput {\n  id: OID!\n  proposalId: OID!\n  title: String!\n  description: String\n  createdAt: DateTime!\n}\n",
              scope: "global",
              template: "Create a new task",
            },
            {
              description: "Update task status",
              errors: [],
              examples: [],
              id: "update-task-status",
              name: "UPDATE_TASK_STATUS",
              reducer: "state.status = action.input.status;",
              schema:
                "input UpdateTaskStatusInput {\n  status: TaskStatus!\n}\n",
              scope: "global",
              template: "Update task status",
            },
            {
              description: "Assign task to a person",
              errors: [],
              examples: [],
              id: "assign-task",
              name: "ASSIGN_TASK",
              reducer: "state.assignee = action.input.assignee || null;",
              schema: "input AssignTaskInput {\n  assignee: String\n}\n",
              scope: "global",
              template: "Assign task to a person",
            },
            {
              description: "Update task details",
              errors: [],
              examples: [],
              id: "update-task-details",
              name: "UPDATE_TASK_DETAILS",
              reducer:
                "if (action.input.title !== undefined) state.title = action.input.title;\nif (action.input.description !== undefined) state.description = action.input.description || null;\nif (action.input.dueDate !== undefined) state.dueDate = action.input.dueDate || null;",
              schema:
                "input UpdateTaskDetailsInput {\n  title: String\n  description: String\n  dueDate: DateTime\n}\n",
              scope: "global",
              template: "Update task details",
            },
          ],
        },
      ],
      state: {
        global: {
          examples: [],
          initialValue:
            '{"id": null, "proposalId": null, "title": "", "description": null, "status": "TODO", "assignee": null, "createdAt": null, "dueDate": null}',
          schema:
            "enum TaskStatus {\n  TODO\n  IN_PROGRESS\n  DONE\n  BLOCKED\n}\n\ntype TaskState {\n  id: OID\n  proposalId: OID\n  title: String\n  description: String\n  status: TaskStatus\n  assignee: String\n  createdAt: DateTime\n  dueDate: DateTime\n}",
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
