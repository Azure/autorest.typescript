import SecurityAADRestClient from "./generated/securityAADRest/src";
import { assert } from "chai";
import { now } from "lodash";

describe("Security AAD Rest Client", () => {
  it("should be able to instantiate a new client without Typescript errors", () => {
    const client = SecurityAADRestClient({
      getToken: async () => {
        assert.equal(1, 1);
        return { token: "FakeToken", expiresOnTimestamp: now() };
      }
    });
    assert.isDefined(client);
  });
});
