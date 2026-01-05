import { assert } from "chai";
import { ArrayClient } from "./generated/encode/array/src/index.js";

describe("EncodeArrayClient Modular Client", () => {
  let client: ArrayClient;

  const colors = ["blue", "red", "green"];

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
        value: colors
      });
      assert.deepEqual(result.value, colors);
    });

    it("should handle space delimited array property", async () => {
      const result = await client.property.spaceDelimited({
        value: colors
      });
      assert.deepEqual(result.value, colors);
    });

    it("should handle pipe delimited array property", async () => {
      const result = await client.property.pipeDelimited({
        value: colors
      });
      assert.deepEqual(result.value, colors);
    });

    it("should handle newline delimited array property", async () => {
      const result = await client.property.newlineDelimited({
        value: colors
      });
      assert.deepEqual(result.value, colors);
    });
  });
});
