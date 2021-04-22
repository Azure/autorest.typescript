import { StorageBlobClient } from "./generated/storageblob/src";
import { assert } from "chai";

describe("Integration tests for StorageBlob", () => {
  let client: StorageBlobClient;

  it("should create a client successfully", async () => {
    const endpoint: string = "sampleEndPoint";
    client = new StorageBlobClient(endpoint);
    assert.notEqual(client, null);
  });
});
