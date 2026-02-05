import type { Action } from "document-model";
import type {
  CreateProposalInput,
  UpdateProposalStatusInput,
  UpdateProposalDetailsInput,
} from "../types.js";

export type CreateProposalAction = Action & {
  type: "CREATE_PROPOSAL";
  input: CreateProposalInput;
};
export type UpdateProposalStatusAction = Action & {
  type: "UPDATE_PROPOSAL_STATUS";
  input: UpdateProposalStatusInput;
};
export type UpdateProposalDetailsAction = Action & {
  type: "UPDATE_PROPOSAL_DETAILS";
  input: UpdateProposalDetailsInput;
};

export type ProposalCoreAction =
  | CreateProposalAction
  | UpdateProposalStatusAction
  | UpdateProposalDetailsAction;
