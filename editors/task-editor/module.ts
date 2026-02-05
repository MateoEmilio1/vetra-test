
import type { EditorModule } from "document-model";
import { lazy } from "react";

/** Document editor module for the "["vetra-test/task"]" document type */
export const TaskEditor: EditorModule = {
    Component: lazy(() => import("./editor.js")),
    documentTypes: ["vetra-test/task"],
    config: {
        id: "task-editor",
        name: "Task Editor",
    },
};
