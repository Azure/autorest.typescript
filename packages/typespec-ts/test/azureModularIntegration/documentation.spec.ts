import { assert, describe, it, beforeEach } from "vitest";

import { DocumentationClient } from "./generated/documentation/src/index.js";

describe("Documentation Client", () => {
  let client: DocumentationClient;

  beforeEach(() => {
    client = new DocumentationClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true,
      retryOptions: { maxRetries: 0 }
    });
  });

  describe("Lists", () => {
    it("should call bulletPointsOp", async () => {
      await client.lists.bulletPointsOp();
    });

    it("should call bulletPointsModel", async () => {
      await client.lists.bulletPointsModel({ prop: "Simple" });
    });

    it("should call numbered", async () => {
      await client.lists.numbered();
    });
  });

  describe("TextFormatting", () => {
    it("should call boldText", async () => {
      await client.textFormatting.boldText();
    });

    it("should call italicText", async () => {
      await client.textFormatting.italicText();
    });

    it("should call combinedFormatting", async () => {
      await client.textFormatting.combinedFormatting();
    });
  });
});
