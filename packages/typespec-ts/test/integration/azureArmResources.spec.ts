import { assert } from "chai";
import AzureArmResourceClientFactory, {
  AzureArmResourceClient
} from "./generated/azure/arm/models/resources/src/index.js";
describe("Azure Arm Resources Rest Client", () => {
  let client: AzureArmResourceClient;

  beforeEach(() => {
    client = AzureArmResourceClientFactory({
      allowInsecureConnection: true
    });
  });
  const SUBSCRIPTION_ID_EXPECTED = "00000000-0000-0000-0000-000000000000";
  //   const RESOURCE_GROUP_EXPECTED = "test-rg";
  //   const validTopLevelResource = {
  //     id: `/subscriptions/${SUBSCRIPTION_ID_EXPECTED}/resourceGroups/${RESOURCE_GROUP_EXPECTED}/providers/Azure.Arm.Models.Resources/topLevelTrackedResources/top`,
  //     name: "top",
  //     type: "topLevel",
  //     location: "eastus",
  //     properties: {
  //       provisioningState: "Succeeded",
  //       description: "valid"
  //     },
  //     systemData: {
  //       createdBy: "AzureSDK",
  //       createdByType: "User",
  //       createdAt: new Date(),
  //       lastModifiedBy: "AzureSDK",
  //       lastModifiedAt: new Date(),
  //       lastModifiedByType: "User"
  //     }
  //   };
  it.only("should list top level tracked resources by subscription ", async () => {
    try {
      const result = await client
        .path(
          "/subscriptions/{subscriptionId}/providers/Azure.Arm.Models.Resources/topLevelTrackedResources",
          SUBSCRIPTION_ID_EXPECTED
        )
        .get({ queryParameters: { apiVersion: "2023-12-01-preview" } });
      console.log(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
