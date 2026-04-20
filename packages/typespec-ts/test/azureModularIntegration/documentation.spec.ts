import { assert, describe, it, beforeEach } from "vitest";
import { DocumentationClient } from "./generated/documentation/src/index.js";

describe("Documentation Client", () => {
  let client: DocumentationClient;

  beforeEach(() => {
    client = new DocumentationClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  describe("Lists", () => {
    it("should call bulletPointsOp correctly", async () => {
      const result = await client.lists.bulletPointsOp();
      assert.isUndefined(result);
    });

    it("should call bulletPointsModel correctly", async () => {
      const result = await client.lists.bulletPointsModel({ prop: "Simple" });
      assert.isUndefined(result);
    });

    it("should call numbered correctly", async () => {
      const result = await client.lists.numbered();
      assert.isUndefined(result);
    });
  });

  describe("TextFormatting", () => {
    it("should call boldText correctly", async () => {
      const result = await client.textFormatting.boldText();
      assert.isUndefined(result);
    });

    it("should call italicText correctly", async () => {
      const result = await client.textFormatting.italicText();
      assert.isUndefined(result);
    });

    it("should call combinedFormatting correctly", async () => {
      const result = await client.textFormatting.combinedFormatting();
      assert.isUndefined(result);
    });
  });
});
