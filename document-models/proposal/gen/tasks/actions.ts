import type { Action } from "document-model";
import type {
  AddTaskToProposalInput,
  RemoveTaskFromProposalInput,
} from "../types.js";

export type AddTaskToProposalAction = Action & {
  type: "ADD_TASK_TO_PROPOSAL";
  input: AddTaskToProposalInput;
};
export type RemoveTaskFromProposalAction = Action & {
  type: "REMOVE_TASK_FROM_PROPOSAL";
  input: RemoveTaskFromProposalInput;
};

export type ProposalTasksAction =
  | AddTaskToProposalAction
  | RemoveTaskFromProposalAction;
