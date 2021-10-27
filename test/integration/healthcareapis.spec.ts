import { HealthCareApisClient } from "./generated/healthcareapis/src";
import { assert } from "chai";

describe("HealthCareApis Client", () => {
  it("should be able to instantiate a new client without Typescript errors", () => {
    const client = new HealthCareApisClient("subscriptionId");
    assert.isDefined(client);
  });
});
