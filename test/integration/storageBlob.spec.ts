import { StorageBlob } from "./generated/storageBlob/src";
import { assert } from "chai";

describe("Integration tests for OData-Discriminator", () => {
  let client: StorageBlob;

  it("should create a client successfully", async () => {
    const url: string = "https://localhost:3000";
    client = new StorageBlob(url);
    assert.notEqual(client, null);
  });
});
