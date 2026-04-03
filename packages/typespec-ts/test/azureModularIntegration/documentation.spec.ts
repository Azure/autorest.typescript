import { assert, describe, it, beforeEach } from "vitest";
import { DocumentationClient } from "./generated/documentation/src/index.js";

describe("Documentation Client", () => {
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

  it("should call Lists bulletPointsOp", async () => {
    const result = await client.lists.bulletPointsOp();
    assert.isUndefined(result);
  });

  it("should call Lists bulletPointsModel", async () => {
    const result = await client.lists.bulletPointsModel({ prop: "Simple" });
    assert.isUndefined(result);
  });

  it("should call Lists numbered", async () => {
    const result = await client.lists.numbered();
    assert.isUndefined(result);
  });

  it("should call TextFormatting boldText", async () => {
    const result = await client.textFormatting.boldText();
    assert.isUndefined(result);
  });

  it("should call TextFormatting italicText", async () => {
    const result = await client.textFormatting.italicText();
    assert.isUndefined(result);
  });

  it("should call TextFormatting combinedFormatting", async () => {
    const result = await client.textFormatting.combinedFormatting();
    assert.isUndefined(result);
  });
});
