import * as z from "zod";
import type {
  AssignTaskInput,
  CreateTaskInput,
  TaskState,
  TaskStatus,
  UpdateTaskDetailsInput,
  UpdateTaskStatusInput,
} from "./types.js";

type Properties<T> = Required<{
  [K in keyof T]: z.ZodType<T[K]>;
}>;

type definedNonNullAny = {};

export const isDefinedNonNullAny = (v: any): v is definedNonNullAny =>
  v !== undefined && v !== null;

export const definedNonNullAnySchema = z
  .any()
  .refine((v) => isDefinedNonNullAny(v));

export const TaskStatusSchema = z.enum([
  "BLOCKED",
  "DONE",
  "IN_PROGRESS",
  "TODO",
]);

export function AssignTaskInputSchema(): z.ZodObject<
  Properties<AssignTaskInput>
> {
  return z.object({
    assignee: z.string().nullish(),
  });
}

export function CreateTaskInputSchema(): z.ZodObject<
  Properties<CreateTaskInput>
> {
  return z.object({
    createdAt: z.iso.datetime(),
    description: z.string().nullish(),
    id: z.string(),
    proposalId: z.string(),
    title: z.string(),
  });
}

export function TaskStateSchema(): z.ZodObject<Properties<TaskState>> {
  return z.object({
    __typename: z.literal("TaskState").optional(),
    assignee: z.string().nullish(),
    createdAt: z.iso.datetime().nullish(),
    description: z.string().nullish(),
    dueDate: z.iso.datetime().nullish(),
    id: z.string().nullish(),
    proposalId: z.string().nullish(),
    status: TaskStatusSchema.nullish(),
    title: z.string().nullish(),
  });
}

export function UpdateTaskDetailsInputSchema(): z.ZodObject<
  Properties<UpdateTaskDetailsInput>
> {
  return z.object({
    description: z.string().nullish(),
    dueDate: z.iso.datetime().nullish(),
    title: z.string().nullish(),
  });
}

export function UpdateTaskStatusInputSchema(): z.ZodObject<
  Properties<UpdateTaskStatusInput>
> {
  return z.object({
    status: TaskStatusSchema,
  });
}
