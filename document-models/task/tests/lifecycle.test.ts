import { generateMock } from "@powerhousedao/codegen";
import { describe, expect, it } from "vitest";
import {
  reducer,
  utils,
  isTaskDocument,
  createTask,
  updateTaskStatus,
  assignTask,
  updateTaskDetails,
  CreateTaskInputSchema,
  UpdateTaskStatusInputSchema,
  AssignTaskInputSchema,
  UpdateTaskDetailsInputSchema,
} from "vetra-test/document-models/task";

describe("LifecycleOperations", () => {
  it("should handle createTask operation", () => {
    const document = utils.createDocument();
    const input = generateMock(CreateTaskInputSchema());

    const updatedDocument = reducer(document, createTask(input));

    expect(isTaskDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "CREATE_TASK",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle updateTaskStatus operation", () => {
    const document = utils.createDocument();
    const input = generateMock(UpdateTaskStatusInputSchema());

    const updatedDocument = reducer(document, updateTaskStatus(input));

    expect(isTaskDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "UPDATE_TASK_STATUS",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle assignTask operation", () => {
    const document = utils.createDocument();
    const input = generateMock(AssignTaskInputSchema());

    const updatedDocument = reducer(document, assignTask(input));

    expect(isTaskDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "ASSIGN_TASK",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });

  it("should handle updateTaskDetails operation", () => {
    const document = utils.createDocument();
    const input = generateMock(UpdateTaskDetailsInputSchema());

    const updatedDocument = reducer(document, updateTaskDetails(input));

    expect(isTaskDocument(updatedDocument)).toBe(true);
    expect(updatedDocument.operations.global).toHaveLength(1);
    expect(updatedDocument.operations.global[0].action.type).toBe(
      "UPDATE_TASK_DETAILS",
    );
    expect(updatedDocument.operations.global[0].action.input).toStrictEqual(
      input,
    );
    expect(updatedDocument.operations.global[0].index).toEqual(0);
  });
});
