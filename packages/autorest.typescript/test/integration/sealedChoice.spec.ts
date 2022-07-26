import { SealedChoiceClient } from "./generated/sealedchoice/src";
import { assert } from "chai";

describe("Integration tests for Sealed Choice", () => {
  let client: SealedChoiceClient;

  it("should create a client successfully", async () => {
    client = new SealedChoiceClient("host");
    assert.notEqual(client, null);
  });
});
