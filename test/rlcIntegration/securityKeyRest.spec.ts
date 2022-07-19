import SecurityKeyRestClient from "./generated/securityKeyRest/src";
import { assert } from "chai";

describe("Security AAD Rest Client", () => {
  it("should be able to instantiate a new client without Typescript errors", () => {
    const client = SecurityKeyRestClient({
      key: "FakeToken"
    });
    assert.isDefined(client);
  });
});
