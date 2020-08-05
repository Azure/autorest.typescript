import { expect } from "chai";
import { SubscriptionIdApiVersionClient } from "./generated/subscriptionIdApiVersion/src/subscriptionIdApiVersionClient";
import { GroupGetSampleResourceGroupResponse } from "./generated/subscriptionIdApiVersion/src/models/index";
import { subscriptionId } from "./generated/subscriptionIdApiVersion/src/models/parameters";

describe("Integration tests for SubscriptionId-ApiVersion", () => {
  let client: SubscriptionIdApiVersionClient;

  it("should handle a string subscriptionid without failure", async () => {
    const subscriptionId: string = "sampleSubscriptionId";
    client = new SubscriptionIdApiVersionClient(subscriptionId);
    const result: GroupGetSampleResourceGroupResponse = await client.group.getSampleResourceGroup(
      "testgroup101"
    );
    expect(result.name).to.equal(
      "testgroup101",
      "Unexpected resource group name"
    );
    expect(result.location).to.equal(
      "West US",
      "Unexpected resource group location"
    );
  });
});
