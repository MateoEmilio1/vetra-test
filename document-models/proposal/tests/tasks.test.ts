import { generateMock } from "@powerhousedao/codegen";
import { describe, expect, it } from "vitest";
import {
  reducer,
  utils,
  isProposalDocument,
  addTaskToProposal,
  removeTaskFromProposal,
  AddTaskToProposalInputSchema,
  RemoveTaskFromProposalInputSchema,
} from "vetra-test/document-models/proposal";

describe("TasksOperations", () => {
  it("should handle addTaskToProposal operation", () => {
    const document = utils.createDocument();
    const input = generateMock(AddTaskToProposalInputSchema());

    const updatedDocument = reducer(document, addTaskToProposal(input));

    expect(isProposalDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "ADD_TASK_TO_PROPOSAL",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle removeTaskFromProposal operation", () => {
    const document = utils.createDocument();
    const input = generateMock(RemoveTaskFromProposalInputSchema());

    const updatedDocument = reducer(document, removeTaskFromProposal(input));

    expect(isProposalDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "REMOVE_TASK_FROM_PROPOSAL",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
