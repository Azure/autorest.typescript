import { StorageFileShareClient } from "./generated/storagefileshare/src";
import { assert } from "chai";

describe("Integration tests for StorageFileShare", () => {
  let client: StorageFileShareClient;

  it("should create a client successfully", async () => {
    const endpoint: string = "sampleEndPoint";
    client = new StorageFileShareClient(endpoint);
    assert.notEqual(client, null);
  });
});
