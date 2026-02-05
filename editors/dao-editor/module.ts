
import type { EditorModule } from "document-model";
import { lazy } from "react";

/** Document editor module for the "["vetra-test/dao"]" document type */
export const DaoEditor: EditorModule = {
    Component: lazy(() => import("./editor.js")),
    documentTypes: ["vetra-test/dao"],
    config: {
        id: "dao-editor",
        name: "DAO Editor",
    },
};
