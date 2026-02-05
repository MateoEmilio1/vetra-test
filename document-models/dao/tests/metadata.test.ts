import { generateMock } from "@powerhousedao/codegen";
import { describe, expect, it } from "vitest";
import {
  reducer,
  utils,
  isDaoDocument,
  createDao,
  updateDaoMetadata,
  updateDaoTreasury,
  CreateDaoInputSchema,
  UpdateDaoMetadataInputSchema,
  UpdateDaoTreasuryInputSchema,
} from "vetra-test/document-models/dao";

describe("MetadataOperations", () => {
  it("should handle createDao operation", () => {
    const document = utils.createDocument();
    const input = generateMock(CreateDaoInputSchema());

    const updatedDocument = reducer(document, createDao(input));

    expect(isDaoDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe("CREATE_DAO");
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle updateDaoMetadata operation", () => {
    const document = utils.createDocument();
    const input = generateMock(UpdateDaoMetadataInputSchema());

    const updatedDocument = reducer(document, updateDaoMetadata(input));

    expect(isDaoDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "UPDATE_DAO_METADATA",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle updateDaoTreasury operation", () => {
    const document = utils.createDocument();
    const input = generateMock(UpdateDaoTreasuryInputSchema());

    const updatedDocument = reducer(document, updateDaoTreasury(input));

    expect(isDaoDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "UPDATE_DAO_TREASURY",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
