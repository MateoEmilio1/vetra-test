import { createAction } from "document-model/core";
import {
  CreateTaskInputSchema,
  UpdateTaskStatusInputSchema,
  AssignTaskInputSchema,
  UpdateTaskDetailsInputSchema,
} from "../schema/zod.js";
import type {
  CreateTaskInput,
  UpdateTaskStatusInput,
  AssignTaskInput,
  UpdateTaskDetailsInput,
} from "../types.js";
import type {
  CreateTaskAction,
  UpdateTaskStatusAction,
  AssignTaskAction,
  UpdateTaskDetailsAction,
} from "./actions.js";

export const createTask = (input: CreateTaskInput) =>
  createAction<CreateTaskAction>(
    "CREATE_TASK",
    { ...input },
    undefined,
    CreateTaskInputSchema,
    "global",
  );

export const updateTaskStatus = (input: UpdateTaskStatusInput) =>
  createAction<UpdateTaskStatusAction>(
    "UPDATE_TASK_STATUS",
    { ...input },
    undefined,
    UpdateTaskStatusInputSchema,
    "global",
  );

export const assignTask = (input: AssignTaskInput) =>
  createAction<AssignTaskAction>(
    "ASSIGN_TASK",
    { ...input },
    undefined,
    AssignTaskInputSchema,
    "global",
  );

export const updateTaskDetails = (input: UpdateTaskDetailsInput) =>
  createAction<UpdateTaskDetailsAction>(
    "UPDATE_TASK_DETAILS",
    { ...input },
    undefined,
    UpdateTaskDetailsInputSchema,
    "global",
  );
