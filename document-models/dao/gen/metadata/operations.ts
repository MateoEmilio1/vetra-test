import { type SignalDispatch } from "document-model";
import type {
  CreateDaoAction,
  UpdateDaoMetadataAction,
  UpdateDaoTreasuryAction,
} from "./actions.js";
import type { DaoState } from "../types.js";

export interface DaoMetadataOperations {
  createDaoOperation: (
    state: DaoState,
    action: CreateDaoAction,
    dispatch?: SignalDispatch,
  ) => void;
  updateDaoMetadataOperation: (
    state: DaoState,
    action: UpdateDaoMetadataAction,
    dispatch?: SignalDispatch,
  ) => void;
  updateDaoTreasuryOperation: (
    state: DaoState,
    action: UpdateDaoTreasuryAction,
    dispatch?: SignalDispatch,
  ) => void;
}
