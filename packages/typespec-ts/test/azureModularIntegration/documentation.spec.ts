import { assert, describe, it, beforeEach } from "vitest";
import { DocumentationClient } from "./generated/documentation/src/index.js";

describe("Documentation", () => {
  let client: DocumentationClient;

  beforeEach(() => {
    client = new DocumentationClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0,
      },
    });
  });

  describe("Lists", () => {
    it("should get bullet points op", async () => {
      const result = await client.lists.bulletPointsOp();
      assert.isUndefined(result);
    });

    it("should post bullet points model", async () => {
      const result = await client.lists.bulletPointsModel({ prop: "Simple" });
      assert.isUndefined(result);
    });

    it("should get numbered", async () => {
      const result = await client.lists.numbered();
      assert.isUndefined(result);
    });
  });

  describe("TextFormatting", () => {
    it("should get bold text", async () => {
      const result = await client.textFormatting.boldText();
      assert.isUndefined(result);
    });

    it("should get italic text", async () => {
      const result = await client.textFormatting.italicText();
      assert.isUndefined(result);
    });

    it("should get combined formatting", async () => {
      const result = await client.textFormatting.combinedFormatting();
      assert.isUndefined(result);
    });
  });
});
