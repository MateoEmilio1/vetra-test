import type { Action } from "document-model";
import type {
  CreateDaoInput,
  UpdateDaoMetadataInput,
  UpdateDaoTreasuryInput,
} from "../types.js";

export type CreateDaoAction = Action & {
  type: "CREATE_DAO";
  input: CreateDaoInput;
};
export type UpdateDaoMetadataAction = Action & {
  type: "UPDATE_DAO_METADATA";
  input: UpdateDaoMetadataInput;
};
export type UpdateDaoTreasuryAction = Action & {
  type: "UPDATE_DAO_TREASURY";
  input: UpdateDaoTreasuryInput;
};

export type DaoMetadataAction =
  | CreateDaoAction
  | UpdateDaoMetadataAction
  | UpdateDaoTreasuryAction;
