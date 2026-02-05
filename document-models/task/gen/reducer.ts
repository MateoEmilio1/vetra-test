// TODO: remove eslint-disable rules once refactor is done
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import type { StateReducer } from "document-model";
import { isDocumentAction, createReducer } from "document-model/core";
import type { TaskPHState } from "vetra-test/document-models/task";

import { taskLifecycleOperations } from "../src/reducers/lifecycle.js";

import {
  CreateTaskInputSchema,
  UpdateTaskStatusInputSchema,
  AssignTaskInputSchema,
  UpdateTaskDetailsInputSchema,
} from "./schema/zod.js";

const stateReducer: StateReducer<TaskPHState> = (state, action, dispatch) => {
  if (isDocumentAction(action)) {
    return state;
  }
  switch (action.type) {
    case "CREATE_TASK": {
      CreateTaskInputSchema().parse(action.input);

      taskLifecycleOperations.createTaskOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "UPDATE_TASK_STATUS": {
      UpdateTaskStatusInputSchema().parse(action.input);

      taskLifecycleOperations.updateTaskStatusOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "ASSIGN_TASK": {
      AssignTaskInputSchema().parse(action.input);

      taskLifecycleOperations.assignTaskOperation(
        (state as any)[action.scope],
        action as any,
        dispatch,
      );

      break;
    }

    case "UPDATE_TASK_DETAILS": {
      UpdateTaskDetailsInputSchema().parse(action.input);

      taskLifecycleOperations.updateTaskDetailsOperation(
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

export const reducer = createReducer<TaskPHState>(stateReducer);
