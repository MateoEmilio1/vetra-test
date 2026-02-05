
import type { EditorModule } from "document-model";
import { lazy } from "react";

/** Document editor module for the "["vetra-test/proposal"]" document type */
export const ProposalEditor: EditorModule = {
    Component: lazy(() => import("./editor.js")),
    documentTypes: ["vetra-test/proposal"],
    config: {
        id: "proposal-editor",
        name: "Proposal Editor",
    },
};
