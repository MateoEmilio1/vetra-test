import { type SignalDispatch } from "document-model";
import type {
  CreateProposalAction,
  UpdateProposalStatusAction,
  UpdateProposalDetailsAction,
} from "./actions.js";
import type { ProposalState } from "../types.js";

export interface ProposalCoreOperations {
  createProposalOperation: (
    state: ProposalState,
    action: CreateProposalAction,
    dispatch?: SignalDispatch,
  ) => void;
  updateProposalStatusOperation: (
    state: ProposalState,
    action: UpdateProposalStatusAction,
    dispatch?: SignalDispatch,
  ) => void;
  updateProposalDetailsOperation: (
    state: ProposalState,
    action: UpdateProposalDetailsAction,
    dispatch?: SignalDispatch,
  ) => void;
}
