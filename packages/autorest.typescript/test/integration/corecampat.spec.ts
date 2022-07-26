import { PetStore as PetStoreClient } from "./generated/corecompattest/src";
import { assert } from "chai";

describe("Integration tests for Core Comapability", () => {
  let client: PetStoreClient;

  it("should create a client successfully", async () => {
    client = new PetStoreClient({
      keepAliveOptions: {
        enable: true
      },
      redirectOptions: {
        handleRedirects: true
      }
    });
    assert.notEqual(client, null);
  });
});
