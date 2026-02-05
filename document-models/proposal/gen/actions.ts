import type { ProposalCoreAction } from "./core/actions.js";
import type { ProposalTasksAction } from "./tasks/actions.js";

export * from "./core/actions.js";
export * from "./tasks/actions.js";

export type ProposalAction = ProposalCoreAction | ProposalTasksAction;
