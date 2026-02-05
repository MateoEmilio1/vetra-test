import { type SignalDispatch } from "document-model";
import type {
  CreateTaskAction,
  UpdateTaskStatusAction,
  AssignTaskAction,
  UpdateTaskDetailsAction,
} from "./actions.js";
import type { TaskState } from "../types.js";

export interface TaskLifecycleOperations {
  createTaskOperation: (
    state: TaskState,
    action: CreateTaskAction,
    dispatch?: SignalDispatch,
  ) => void;
  updateTaskStatusOperation: (
    state: TaskState,
    action: UpdateTaskStatusAction,
    dispatch?: SignalDispatch,
  ) => void;
  assignTaskOperation: (
    state: TaskState,
    action: AssignTaskAction,
    dispatch?: SignalDispatch,
  ) => void;
  updateTaskDetailsOperation: (
    state: TaskState,
    action: UpdateTaskDetailsAction,
    dispatch?: SignalDispatch,
  ) => void;
}
