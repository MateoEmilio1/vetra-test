// TODO: remove eslint-disable rules once refactor is done
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import type { StateReducer } from "document-model";
import { isDocumentAction, createReducer } from "document-model/core";
import type { DaoPHState } from "vetra-test/document-models/dao";

import { daoMetadataOperations } from "../src/reducers/metadata.js";

import {
  CreateDaoInputSchema,
  UpdateDaoMetadataInputSchema,
  UpdateDaoTreasuryInputSchema,
} from "./schema/zod.js";

const stateReducer: StateReducer<DaoPHState> = (state, action, dispatch) => {
  if (isDocumentAction(action)) {
    return state;
  }
  switch (action.type) {
    case "CREATE_DAO": {
      CreateDaoInputSchema().parse(action.input);

      daoMetadataOperations.createDaoOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "UPDATE_DAO_METADATA": {
      UpdateDaoMetadataInputSchema().parse(action.input);

      daoMetadataOperations.updateDaoMetadataOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "UPDATE_DAO_TREASURY": {
      UpdateDaoTreasuryInputSchema().parse(action.input);

      daoMetadataOperations.updateDaoTreasuryOperation(
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

export const reducer = createReducer<DaoPHState>(stateReducer);
