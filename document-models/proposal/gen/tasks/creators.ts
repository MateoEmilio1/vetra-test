import { createAction } from "document-model/core";
import {
  AddTaskToProposalInputSchema,
  RemoveTaskFromProposalInputSchema,
} from "../schema/zod.js";
import type {
  AddTaskToProposalInput,
  RemoveTaskFromProposalInput,
} from "../types.js";
import type {
  AddTaskToProposalAction,
  RemoveTaskFromProposalAction,
} from "./actions.js";

export const addTaskToProposal = (input: AddTaskToProposalInput) =>
  createAction<AddTaskToProposalAction>(
    "ADD_TASK_TO_PROPOSAL",
    { ...input },
    undefined,
    AddTaskToProposalInputSchema,
    "global",
  );

export const removeTaskFromProposal = (input: RemoveTaskFromProposalInput) =>
  createAction<RemoveTaskFromProposalAction>(
    "REMOVE_TASK_FROM_PROPOSAL",
    { ...input },
    undefined,
    RemoveTaskFromProposalInputSchema,
    "global",
  );
