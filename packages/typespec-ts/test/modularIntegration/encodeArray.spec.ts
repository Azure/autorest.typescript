import { assert } from "chai";
import { ArrayClient } from "./generated/encode/array/src/index.js";

describe("EncodeArrayClient Modular Client", () => {
  let client: ArrayClient;

  const colors = ["blue", "red", "green"] as const;

  beforeEach(() => {
    client = new ArrayClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  describe("property", () => {
    it("should handle comma delimited array property", async () => {
      const result = await client.property.commaDelimited({
        value: [...colors]
      });
      assert.deepEqual(result.value, [...colors]);
    });

    it("should handle space delimited array property", async () => {
      const result = await client.property.spaceDelimited({
        value: [...colors]
      });
      assert.deepEqual(result.value, [...colors]);
    });

    it("should handle pipe delimited array property", async () => {
      const result = await client.property.pipeDelimited({
        value: [...colors]
      });
      assert.deepEqual(result.value, [...colors]);
    });

    it("should handle newline delimited array property", async () => {
      const result = await client.property.newlineDelimited({
        value: [...colors]
      });
      assert.deepEqual(result.value, [...colors]);
    });

    it("should handle comma delimited enum array property", async () => {
      const result = await client.property.enumCommaDelimited({
        value: [...colors]
      });
      assert.deepEqual(result.value, [...colors]);
    });

    it("should handle space delimited enum array property", async () => {
      const result = await client.property.enumSpaceDelimited({
        value: [...colors]
      });
      assert.deepEqual(result.value, [...colors]);
    });

    it("should handle pipe delimited enum array property", async () => {
      const result = await client.property.enumPipeDelimited({
        value: [...colors]
      });
      assert.deepEqual(result.value, [...colors]);
    });

    it("should handle newline delimited enum array property", async () => {
      const result = await client.property.enumNewlineDelimited({
        value: [...colors]
      });
      assert.deepEqual(result.value, [...colors]);
    });

    it("should handle comma delimited extensible enum array property", async () => {
      const result = await client.property.extensibleEnumCommaDelimited({
        value: [...colors]
      });
      assert.deepEqual(result.value, [...colors]);
    });

    it("should handle space delimited extensible enum array property", async () => {
      const result = await client.property.extensibleEnumSpaceDelimited({
        value: [...colors]
      });
      assert.deepEqual(result.value, [...colors]);
    });

    it("should handle pipe delimited extensible enum array property", async () => {
      const result = await client.property.extensibleEnumPipeDelimited({
        value: [...colors]
      });
      assert.deepEqual(result.value, [...colors]);
    });

    it("should handle newline delimited extensible enum array property", async () => {
      const result = await client.property.extensibleEnumNewlineDelimited({
        value: [...colors]
      });
      assert.deepEqual(result.value, [...colors]);
    });
  });
});
