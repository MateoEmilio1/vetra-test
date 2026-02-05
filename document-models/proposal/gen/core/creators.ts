import { createAction } from "document-model/core";
import {
  CreateProposalInputSchema,
  UpdateProposalStatusInputSchema,
  UpdateProposalDetailsInputSchema,
} from "../schema/zod.js";
import type {
  CreateProposalInput,
  UpdateProposalStatusInput,
  UpdateProposalDetailsInput,
} from "../types.js";
import type {
  CreateProposalAction,
  UpdateProposalStatusAction,
  UpdateProposalDetailsAction,
} from "./actions.js";

export const createProposal = (input: CreateProposalInput) =>
  createAction<CreateProposalAction>(
    "CREATE_PROPOSAL",
    { ...input },
    undefined,
    CreateProposalInputSchema,
    "global",
  );

export const updateProposalStatus = (input: UpdateProposalStatusInput) =>
  createAction<UpdateProposalStatusAction>(
    "UPDATE_PROPOSAL_STATUS",
    { ...input },
    undefined,
    UpdateProposalStatusInputSchema,
    "global",
  );

export const updateProposalDetails = (input: UpdateProposalDetailsInput) =>
  createAction<UpdateProposalDetailsAction>(
    "UPDATE_PROPOSAL_DETAILS",
    { ...input },
    undefined,
    UpdateProposalDetailsInputSchema,
    "global",
  );
