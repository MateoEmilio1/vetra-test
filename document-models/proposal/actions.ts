import { baseActions } from "document-model";
import { coreActions, tasksActions } from "./gen/creators.js";

/** Actions for the Proposal document model */

export const actions = { ...baseActions, ...coreActions, ...tasksActions };
