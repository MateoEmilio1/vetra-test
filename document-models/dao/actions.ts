import { baseActions } from "document-model";
import { metadataActions } from "./gen/creators.js";

/** Actions for the Dao document model */

export const actions = { ...baseActions, ...metadataActions };
