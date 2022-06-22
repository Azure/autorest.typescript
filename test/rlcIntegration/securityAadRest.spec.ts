import SecurityAADRestClient from "./generated/securityAADRest/src";
import { assert } from "chai";

describe("Security AAD Rest Client", () => {
  it("should be able to instantiate a new client without Typescript errors", () => {
    const client = SecurityAADRestClient("subscriptionId" as any);
    assert.isDefined(client);
  });
});
