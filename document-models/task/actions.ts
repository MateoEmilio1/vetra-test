import { baseActions } from "document-model";
import { lifecycleActions } from "./gen/creators.js";

/** Actions for the Task document model */

export const actions = { ...baseActions, ...lifecycleActions };
