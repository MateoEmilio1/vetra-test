import { type SignalDispatch } from "document-model";
import type {
  AddTaskToProposalAction,
  RemoveTaskFromProposalAction,
} from "./actions.js";
import type { ProposalState } from "../types.js";

export interface ProposalTasksOperations {
  addTaskToProposalOperation: (
    state: ProposalState,
    action: AddTaskToProposalAction,
    dispatch?: SignalDispatch,
  ) => void;
  removeTaskFromProposalOperation: (
    state: ProposalState,
    action: RemoveTaskFromProposalAction,
    dispatch?: SignalDispatch,
  ) => void;
}
