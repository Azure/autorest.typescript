import { assert } from "chai";
import { ArrayClient } from "./generated/encode/array/src/index.js";

describe("EncodeArrayClient Rest Client", () => {
  let client: ArrayClient;

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
    it("should handle commaDelimited string array", async () => {
      const result = await client.property.commaDelimited({
        value: ["blue", "red", "green"]
      });
      assert.deepEqual(result.value, ["blue", "red", "green"]);
    });

    it("should handle spaceDelimited string array", async () => {
      const result = await client.property.spaceDelimited({
        value: ["blue", "red", "green"]
      });
      assert.deepEqual(result.value, ["blue", "red", "green"]);
    });

    it("should handle pipeDelimited string array", async () => {
      const result = await client.property.pipeDelimited({
        value: ["blue", "red", "green"]
      });
      assert.deepEqual(result.value, ["blue", "red", "green"]);
    });

    it("should handle newlineDelimited string array", async () => {
      const result = await client.property.newlineDelimited({
        value: ["blue", "red", "green"]
      });
      assert.deepEqual(result.value, ["blue", "red", "green"]);
    });

    it("should handle enumCommaDelimited array", async () => {
      const result = await client.property.enumCommaDelimited({
        value: ["blue", "red", "green"]
      });
      assert.deepEqual(result.value, ["blue", "red", "green"]);
    });

    it("should handle enumSpaceDelimited array", async () => {
      const result = await client.property.enumSpaceDelimited({
        value: ["blue", "red", "green"]
      });
      assert.deepEqual(result.value, ["blue", "red", "green"]);
    });

    it("should handle enumPipeDelimited array", async () => {
      const result = await client.property.enumPipeDelimited({
        value: ["blue", "red", "green"]
      });
      assert.deepEqual(result.value, ["blue", "red", "green"]);
    });

    it("should handle enumNewlineDelimited array", async () => {
      const result = await client.property.enumNewlineDelimited({
        value: ["blue", "red", "green"]
      });
      assert.deepEqual(result.value, ["blue", "red", "green"]);
    });

    it("should handle extensibleEnumCommaDelimited array", async () => {
      const result = await client.property.extensibleEnumCommaDelimited({
        value: ["blue", "red", "green"]
      });
      assert.deepEqual(result.value, ["blue", "red", "green"]);
    });

    it("should handle extensibleEnumSpaceDelimited array", async () => {
      const result = await client.property.extensibleEnumSpaceDelimited({
        value: ["blue", "red", "green"]
      });
      assert.deepEqual(result.value, ["blue", "red", "green"]);
    });

    it("should handle extensibleEnumPipeDelimited array", async () => {
      const result = await client.property.extensibleEnumPipeDelimited({
        value: ["blue", "red", "green"]
      });
      assert.deepEqual(result.value, ["blue", "red", "green"]);
    });

    it("should handle extensibleEnumNewlineDelimited array", async () => {
      const result = await client.property.extensibleEnumNewlineDelimited({
        value: ["blue", "red", "green"]
      });
      assert.deepEqual(result.value, ["blue", "red", "green"]);
    });
  });
});
