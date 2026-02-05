import type { Action } from "document-model";
import type {
  CreateTaskInput,
  UpdateTaskStatusInput,
  AssignTaskInput,
  UpdateTaskDetailsInput,
} from "../types.js";

export type CreateTaskAction = Action & {
  type: "CREATE_TASK";
  input: CreateTaskInput;
};
export type UpdateTaskStatusAction = Action & {
  type: "UPDATE_TASK_STATUS";
  input: UpdateTaskStatusInput;
};
export type AssignTaskAction = Action & {
  type: "ASSIGN_TASK";
  input: AssignTaskInput;
};
export type UpdateTaskDetailsAction = Action & {
  type: "UPDATE_TASK_DETAILS";
  input: UpdateTaskDetailsInput;
};

export type TaskLifecycleAction =
  | CreateTaskAction
  | UpdateTaskStatusAction
  | AssignTaskAction
  | UpdateTaskDetailsAction;
