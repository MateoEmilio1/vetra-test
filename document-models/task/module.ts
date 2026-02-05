import type { DocumentModelModule } from "document-model";
import { createState } from "document-model";
import { defaultBaseState } from "document-model/core";
import type { TaskPHState } from "vetra-test/document-models/task";
import {
  actions,
  documentModel,
  reducer,
  utils,
} from "vetra-test/document-models/task";

/** Document model module for the Todo List document type */
export const Task: DocumentModelModule<TaskPHState> = {
  version: 1,
  reducer,
  actions,
  utils,
  documentModel: createState(defaultBaseState(), documentModel),
};
