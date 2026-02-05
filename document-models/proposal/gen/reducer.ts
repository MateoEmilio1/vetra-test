// TODO: remove eslint-disable rules once refactor is done
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import type { StateReducer } from "document-model";
import { isDocumentAction, createReducer } from "document-model/core";
import type { ProposalPHState } from "vetra-test/document-models/proposal";

import { proposalCoreOperations } from "../src/reducers/core.js";
import { proposalTasksOperations } from "../src/reducers/tasks.js";

import {
  CreateProposalInputSchema,
  UpdateProposalStatusInputSchema,
  UpdateProposalDetailsInputSchema,
  AddTaskToProposalInputSchema,
  RemoveTaskFromProposalInputSchema,
} from "./schema/zod.js";

const stateReducer: StateReducer<ProposalPHState> = (
  state,
  action,
  dispatch,
) => {
  if (isDocumentAction(action)) {
    return state;
  }
  switch (action.type) {
    case "CREATE_PROPOSAL": {
      CreateProposalInputSchema().parse(action.input);

      proposalCoreOperations.createProposalOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "UPDATE_PROPOSAL_STATUS": {
      UpdateProposalStatusInputSchema().parse(action.input);

      proposalCoreOperations.updateProposalStatusOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "UPDATE_PROPOSAL_DETAILS": {
      UpdateProposalDetailsInputSchema().parse(action.input);

      proposalCoreOperations.updateProposalDetailsOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "ADD_TASK_TO_PROPOSAL": {
      AddTaskToProposalInputSchema().parse(action.input);

      proposalTasksOperations.addTaskToProposalOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "REMOVE_TASK_FROM_PROPOSAL": {
      RemoveTaskFromProposalInputSchema().parse(action.input);

      proposalTasksOperations.removeTaskFromProposalOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    default:
      return state;
  }
};

export const reducer = createReducer<ProposalPHState>(stateReducer);
