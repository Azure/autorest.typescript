import { PatternTestClient } from "./generated/patterntest/src";
import { assert } from "chai";
describe("Integration test for PatternTestClient", () => {
  it("should be able to instantiate a new client", () => {
    const client = new PatternTestClient("http://localhost:3000");
    assert.isDefined(client);
  });
});
