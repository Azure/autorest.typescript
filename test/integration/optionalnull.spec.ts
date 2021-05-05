import { OptionalNullClient } from "./generated/optionalnull/src";
import { assert } from "chai";

describe("Integration tests for OptionalNull", () => {
  let client: OptionalNullClient;

  it("should create a client successfully", async () => {
    client = new OptionalNullClient("SampleHost");
    assert.notEqual(client, null);
  });
});
