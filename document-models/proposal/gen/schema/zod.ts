import * as z from "zod";
import type {
  AddTaskToProposalInput,
  CreateProposalInput,
  ProposalState,
  ProposalStatus,
  RemoveTaskFromProposalInput,
  UpdateProposalDetailsInput,
  UpdateProposalStatusInput,
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

export const ProposalStatusSchema = z.enum([
  "ACTIVE",
  "APPROVED",
  "DRAFT",
  "EXECUTED",
  "REJECTED",
]);

export function AddTaskToProposalInputSchema(): z.ZodObject<
  Properties<AddTaskToProposalInput>
> {
  return z.object({
    taskId: z.string(),
  });
}

export function CreateProposalInputSchema(): z.ZodObject<
  Properties<CreateProposalInput>
> {
  return z.object({
    createdAt: z.iso.datetime(),
    createdBy: z.string(),
    daoId: z.string(),
    description: z.string(),
    id: z.string(),
    title: z.string(),
  });
}

export function ProposalStateSchema(): z.ZodObject<Properties<ProposalState>> {
  return z.object({
    __typename: z.literal("ProposalState").optional(),
    createdAt: z.iso.datetime().nullish(),
    createdBy: z.string().nullish(),
    daoId: z.string().nullish(),
    description: z.string().nullish(),
    id: z.string().nullish(),
    status: ProposalStatusSchema.nullish(),
    tasks: z.array(z.string()).nullish(),
    title: z.string().nullish(),
  });
}

export function RemoveTaskFromProposalInputSchema(): z.ZodObject<
  Properties<RemoveTaskFromProposalInput>
> {
  return z.object({
    taskId: z.string(),
  });
}

export function UpdateProposalDetailsInputSchema(): z.ZodObject<
  Properties<UpdateProposalDetailsInput>
> {
  return z.object({
    description: z.string().nullish(),
    title: z.string().nullish(),
  });
}

export function UpdateProposalStatusInputSchema(): z.ZodObject<
  Properties<UpdateProposalStatusInput>
> {
  return z.object({
    status: ProposalStatusSchema,
  });
}
