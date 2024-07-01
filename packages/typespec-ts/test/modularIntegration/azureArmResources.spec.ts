import { assert } from "chai";
import { ResourcesClient } from "./generated/azure/arm/models/resources/src/index.js";
describe.only("Azure Arm Resources Rest Client", () => {
  let client: ResourcesClient;

  beforeEach(() => {
    client = new ResourcesClient("00000000-0000-0000-0000-000000000000", {
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true
    });
  });
  const SUBSCRIPTION_ID_EXPECTED = "00000000-0000-0000-0000-000000000000";
  const RESOURCE_GROUP_EXPECTED = "test-rg";
  const validTopLevelResource = {
    id: `/subscriptions/${SUBSCRIPTION_ID_EXPECTED}/resourceGroups/${RESOURCE_GROUP_EXPECTED}/providers/Azure.Arm.Models.Resources/topLevelTrackedResources/top`,
    name: "top",
    type: "topLevel",
    location: "eastus",
    properties: {
      provisioningState: "Succeeded",
      description: "valid"
    },
    systemData: {
      createdBy: "AzureSDK",
      createdByType: "User",
      createdAt: new Date(),
      lastModifiedBy: "AzureSDK",
      lastModifiedAt: new Date(),
      lastModifiedByType: "User"
    }
  };
  const validNestedResource = {
    id: `/subscriptions/${SUBSCRIPTION_ID_EXPECTED}/resourceGroups/${RESOURCE_GROUP_EXPECTED}/providers/Azure.Arm.Models.Resources/topLevelTrackedResources/top/nestedProxyResources/nested`,
    name: "nested",
    type: "nested",
    properties: {
      provisioningState: "Succeeded",
      description: "valid"
    },
    systemData: {
      createdBy: "AzureSDK",
      createdByType: "User",
      createdAt: new Date(),
      lastModifiedBy: "AzureSDK",
      lastModifiedAt: new Date(),
      lastModifiedByType: "User"
    }
  };
  it("should get top level tracked resources", async () => {
    const result = await client.topLevelTrackedResources.get("test-rg", "top");
    const body = JSON.parse(JSON.stringify(result));
    console.log(body);
    // assert.strictEqual(result, "200");
    // assert.strictEqual(body.id, validTopLevelResource.id);
    // assert.strictEqual(body.name, validTopLevelResource.name);
    // assert.strictEqual(body.type, validTopLevelResource.type);
  });

  it.skip("should create or replace top level tracked resources", async () => {
    const result = await client.topLevelTrackedResources.createOrReplace(
      "test-rg",
      "top",
      {
        location: "eastus",
        properties: {
          description: "valid"
        }
      }
    );
    console.log(result);
    //   const body = JSON.parse(JSON.stringify(result.body));
    //   assert.strictEqual(result.status, "200");
    //   assert.strictEqual(body.id, validTopLevelResource.id);
    //   assert.strictEqual(body.name, validTopLevelResource.name);
    //   assert.strictEqual(body.type, validTopLevelResource.type);
    //   assert.strictEqual(body.location, validTopLevelResource.location);
    //   assert.strictEqual(
    //     body.properties?.description,
    //     validTopLevelResource.properties?.description
    //   );
  });

  it("should update top level tracked resources", async () => {
    const result = await client.topLevelTrackedResources.update(
      "test-rg",
      "top",
      {
        properties: {
          description: "valid2"
        }
      }
    );
    console.log(result);
    // const body = JSON.parse(JSON.stringify(result.body));
    // assert.strictEqual(result.status, "200");
    // assert.strictEqual(body.id, validTopLevelResource.id);
    // assert.strictEqual(body.name, validTopLevelResource.name);
    // assert.strictEqual(body.type, validTopLevelResource.type);
    // assert.strictEqual(body.location, validTopLevelResource.location);
    // assert.strictEqual(body.properties?.description, "valid2");
  });

  it("should delete top level tracked resources", async () => {
    const result = await client.topLevelTrackedResources.delete(
      "test-rg",
      "top"
    );
    console.log(result);
    // assert.strictEqual(result.status, "204");
  });

  it("should list top level tracked resources by resourceGroup ", async () => {
    const result =
      await client.topLevelTrackedResources.listByResourceGroup("test-rg");
    console.log(result);
    // const body = JSON.parse(JSON.stringify(result.body));
    // assert.strictEqual(result.status, "200");
    // assert.strictEqual(body.value[0].id, validTopLevelResource.id);
    // assert.strictEqual(body.value[0].name, validTopLevelResource.name);
    // assert.strictEqual(body.value[0].type, validTopLevelResource.type);
    // assert.strictEqual(body.value[0].location, validTopLevelResource.location);
  });

  it("should list top level tracked resources by subscription ", async () => {
    const result = await client.topLevelTrackedResources.listBySubscription();
    console.log(result);
    // const body = JSON.parse(JSON.stringify(result.body));
    // assert.strictEqual(result.status, "200");
    // assert.strictEqual(body.value[0].id, validTopLevelResource.id);
    // assert.strictEqual(body.value[0].name, validTopLevelResource.name);
    // assert.strictEqual(body.value[0].type, validTopLevelResource.type);
    // assert.strictEqual(body.value[0].location, validTopLevelResource.location);
  });

  // nested proxy resource
  it("should get nested proxy resource", async () => {
    const result = await client.nestedProxyResources.get(
      "test-rg",
      "top",
      "nested"
    );
    console.log(result);
    // const body = JSON.parse(JSON.stringify(result.body));
    // assert.strictEqual(result.status, "200");
    // assert.strictEqual(body.id, validNestedResource.id);
    // assert.strictEqual(body.name, validNestedResource.name);
    // assert.strictEqual(body.type, validNestedResource.type);
  });

  it.skip("should create or replace nested proxy resource", async () => {
    const result = await client.nestedProxyResources.createOrReplace(
      "test-rg",
      "top",
      "nested",
      {
        properties: {
          description: "valid"
        }
      }
    );
    console.log(result);
    // const body = JSON.parse(JSON.stringify(result.body));
    // assert.strictEqual(result.status, "200");
    // assert.strictEqual(body.id, validNestedResource.id);
    // assert.strictEqual(body.name, validNestedResource.name);
    // assert.strictEqual(body.type, validNestedResource.type);
    // assert.strictEqual(
    //   body.properties?.description,
    //   validNestedResource.properties?.description
    // );
  });

  it("should update nested proxy resource", async () => {
    const result = await client.nestedProxyResources.update(
      "test-rg",
      "top",
      "nested",
      {
        properties: {
          description: "valid2"
        }
      }
    );
    console.log(result);
    // const body = JSON.parse(JSON.stringify(result.body));
    // assert.strictEqual(result.status, "200");
    // assert.strictEqual(body.id, validNestedResource.id);
    // assert.strictEqual(body.name, validNestedResource.name);
    // assert.strictEqual(body.type, validNestedResource.type);
    // assert.strictEqual(body.properties?.description, "valid2");
  });

  it("should delete nested proxy resource", async () => {
    const result = await client.nestedProxyResources.delete(
      "test-rg",
      "top",
      "nested"
    );
    console.log(result);
    // assert.strictEqual(result.status, "204");
  });

  it("should list nested proxy resource by TopLevelTrackedResource ", async () => {
    const result =
      await client.nestedProxyResources.listByTopLevelTrackedResource(
        "test-rg",
        "top",
        {}
      );

    const body = JSON.parse(JSON.stringify(result));
    console.log(body);
    // assert.strictEqual(result.status, "200");
    // assert.strictEqual(body.value[0].id, validNestedResource.id);
    // assert.strictEqual(body.value[0].name, validNestedResource.name);
    // assert.strictEqual(body.value[0].type, validNestedResource.type);
  });
});
