import { PetStore as PetStoreClient } from "./generated/petstore/src";
import { status } from "./generated/petstore/src/models/parameters";
import { assert } from "chai";

describe("Integration tests for PetStore", () => {
  let client: PetStoreClient;

  it("should create a client successfully", async () => {
    client = new PetStoreClient();
    assert.notEqual(client, null);
  });

  it("should have correct defaultValue for Sequence Parameter", async () => {
    assert.equal(status.mapper.defaultValue, "available");
  });
});
