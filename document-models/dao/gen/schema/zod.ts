import * as z from "zod";
import type {
  CreateDaoInput,
  Dao,
  DaoState,
  UpdateDaoMetadataInput,
  UpdateDaoTreasuryInput,
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

export function CreateDaoInputSchema(): z.ZodObject<
  Properties<CreateDaoInput>
> {
  return z.object({
    createdAt: z.iso.datetime(),
    description: z.string().nullish(),
    id: z.string(),
    name: z.string(),
  });
}

export function DaoSchema(): z.ZodObject<Properties<Dao>> {
  return z.object({
    __typename: z.literal("DAO").optional(),
    createdAt: z.iso.datetime(),
    description: z.string().nullish(),
    id: z.string(),
    name: z.string(),
    treasury: z.number().nullish(),
  });
}

export function DaoStateSchema(): z.ZodObject<Properties<DaoState>> {
  return z.object({
    __typename: z.literal("DaoState").optional(),
    createdAt: z.iso.datetime().nullish(),
    description: z.string().nullish(),
    id: z.string().nullish(),
    name: z.string().nullish(),
    treasury: z.number().nullish(),
  });
}

export function UpdateDaoMetadataInputSchema(): z.ZodObject<
  Properties<UpdateDaoMetadataInput>
> {
  return z.object({
    description: z.string().nullish(),
    name: z.string().nullish(),
  });
}

export function UpdateDaoTreasuryInputSchema(): z.ZodObject<
  Properties<UpdateDaoTreasuryInput>
> {
  return z.object({
    treasury: z.number().nullish(),
  });
}
