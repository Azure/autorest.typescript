import { PetStore as PetStoreClient } from "./generated/petstore/src";
import { status } from "./generated/petstore/src/models/parameters";
import { assert } from "chai";

describe("Integration tests for PetStore", () => {
  let client: PetStoreClient;

  it("should create a client successfully", async () => {
    client = new PetStoreClient();
    assert.isNotNull(client);
  });

  it("should have correct defaultValue for Sequence Parameter", async () => {
    assert.deepEqual(status.mapper.defaultValue, ["available", "unavailable"]);
    client = new PetStoreClient();
    try {
      await client.findPetsByStatus();
      assert.fail("Should throw exception");
    } catch (err) {
      assert.match(err, /pet\/findByStatus\?status=available,unavailable/);
    }
  });
});
