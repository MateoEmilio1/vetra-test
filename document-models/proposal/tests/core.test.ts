import { generateMock } from "@powerhousedao/codegen";
import { describe, expect, it } from "vitest";
import {
  reducer,
  utils,
  isProposalDocument,
  createProposal,
  updateProposalStatus,
  updateProposalDetails,
  CreateProposalInputSchema,
  UpdateProposalStatusInputSchema,
  UpdateProposalDetailsInputSchema,
} from "vetra-test/document-models/proposal";

describe("CoreOperations", () => {
  it("should handle createProposal operation", () => {
    const document = utils.createDocument();
    const input = generateMock(CreateProposalInputSchema());

    const updatedDocument = reducer(document, createProposal(input));

    expect(isProposalDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "CREATE_PROPOSAL",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle updateProposalStatus operation", () => {
    const document = utils.createDocument();
    const input = generateMock(UpdateProposalStatusInputSchema());

    const updatedDocument = reducer(document, updateProposalStatus(input));

    expect(isProposalDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "UPDATE_PROPOSAL_STATUS",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle updateProposalDetails operation", () => {
    const document = utils.createDocument();
    const input = generateMock(UpdateProposalDetailsInputSchema());

    const updatedDocument = reducer(document, updateProposalDetails(input));

    expect(isProposalDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "UPDATE_PROPOSAL_DETAILS",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
