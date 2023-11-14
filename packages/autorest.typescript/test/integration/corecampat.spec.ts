import { now } from "lodash";
import { PetStore as PetStoreClient } from "./generated/corecompattest/src";
import { assert } from "chai";

describe("Integration tests for Core Comapability", () => {
  let client: PetStoreClient;

  it("should create a client successfully", async () => {
    client = new PetStoreClient(
      {
        getToken: async () => {
          assert.equal(1, 1);
          return { token: "FakeToken", expiresOnTimestamp: now() };
        }
      },
      {
        keepAliveOptions: {
          enable: true
        },
        redirectOptions: {
          handleRedirects: true
        }
      }
    );
    assert.notEqual(client, null);
  });
});
