import { DomainServicesClient } from "./generated/domainservices/src";
import { assert } from "chai";

describe("Domain Services Client", () => {
  it("should be able to instantiate a new client without Typescript errors", () => {
    const client = new DomainServicesClient("subscriptionId");
    assert.isDefined(client);
  });
});
