import { createAction } from "document-model/core";
import {
  CreateDaoInputSchema,
  UpdateDaoMetadataInputSchema,
  UpdateDaoTreasuryInputSchema,
} from "../schema/zod.js";
import type {
  CreateDaoInput,
  UpdateDaoMetadataInput,
  UpdateDaoTreasuryInput,
} from "../types.js";
import type {
  CreateDaoAction,
  UpdateDaoMetadataAction,
  UpdateDaoTreasuryAction,
} from "./actions.js";

export const createDao = (input: CreateDaoInput) =>
  createAction<CreateDaoAction>(
    "CREATE_DAO",
    { ...input },
    undefined,
    CreateDaoInputSchema,
    "global",
  );

export const updateDaoMetadata = (input: UpdateDaoMetadataInput) =>
  createAction<UpdateDaoMetadataAction>(
    "UPDATE_DAO_METADATA",
    { ...input },
    undefined,
    UpdateDaoMetadataInputSchema,
    "global",
  );

export const updateDaoTreasury = (input: UpdateDaoTreasuryInput) =>
  createAction<UpdateDaoTreasuryAction>(
    "UPDATE_DAO_TREASURY",
    { ...input },
    undefined,
    UpdateDaoTreasuryInputSchema,
    "global",
  );
