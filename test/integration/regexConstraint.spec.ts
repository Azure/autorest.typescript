import { RegexConstraint } from "./generated/regexConstraint/src/regexConstraint";
import { assert } from "chai";
describe("Smoke test for regexConstraint", () => {
  it("should be able to instantiate a new client", () => {
    const client = new RegexConstraint("http://localhost:3000");
    assert.isDefined(client);
  });
});
