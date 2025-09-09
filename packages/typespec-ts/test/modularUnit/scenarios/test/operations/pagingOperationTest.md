# Should generate test with response assertions for paging operation

Test generation should create test with proper response assertions for paging operations.

## TypeSpec

This is tsp definition.

```tsp
import "@typespec/http";
import "@typespec/rest";
import "@typespec/versioning";
import "@azure-tools/typespec-azure-core";
import "@azure-tools/typespec-azure-resource-manager";

using TypeSpec.Http;
using TypeSpec.Rest;
using TypeSpec.Versioning;
using Azure.Core;
using Azure.ResourceManager;

/** Microsoft.Contoso Resource Provider management API. */
@armProviderNamespace
@service(#{
  title: "Microsoft.Contoso management service",
})
@versioned(Microsoft.Contoso.Versions)
namespace Microsoft.Contoso;

/** The available API versions. */
enum Versions {
  /** 2021-10-01-preview version */
  @useDependency(Azure.ResourceManager.Versions.v1_0_Preview_1)
  @useDependency(Azure.Core.Versions.v1_0_Preview_2)
  @armCommonTypesVersion(Azure.ResourceManager.CommonTypes.Versions.v5)
  v2021_10_01_preview: "2021-10-01-preview",
}

interface Operations extends Azure.ResourceManager.Operations {}

/** Employee resource */
model Employee is TrackedResource<EmployeeProperties> {
  ...ResourceNameParameter<Employee>;
}

/** Employee properties */
model EmployeeProperties {
  /** Age of employee */
  age?: int32;
  /** City of employee */  
  city?: string;
  /** Profile of employee */
  profile?: string,
}

@armResourceOperations
interface Employees {
  listByResourceGroup is ArmResourceListByParent<Employee>;
}
```

## Example and generated tests

Raw json files.

```json for Employees_ListByResourceGroup
{
  "title": "Employees_ListByResourceGroup",
  "operationId": "Employees_ListByResourceGroup",
  "parameters": {
    "api-version": "2021-10-01-preview",
    "subscriptionId": "11809CA1-E126-4017-945E-AA795CD5C5A9",
    "resourceGroupName": "rgopenapi"
  },
  "responses": {
    "200": {
      "body": {
        "value": [
          {
            "id": "/subscriptions/11809CA1-E126-4017-945E-AA795CD5C5A9/resourceGroups/rgopenapi/providers/Microsoft.Contoso/employees/emp1",
            "name": "emp1",
            "type": "Microsoft.Contoso/employees",
            "location": "eastus",
            "properties": {
              "age": 25,
              "city": "Boston",
              "profile": "designer"
            }
          },
          {
            "id": "/subscriptions/11809CA1-E126-4017-945E-AA795CD5C5A9/resourceGroups/rgopenapi/providers/Microsoft.Contoso/employees/emp2",
            "name": "emp2", 
            "type": "Microsoft.Contoso/employees",
            "location": "westus",
            "properties": {
              "age": 35,
              "city": "Portland",
              "profile": "manager"
            }
          }
        ]
      }
    }
  }
}
```

```ts tests listByResourceGroupTest
/** This file path is /test/generated/listByResourceGroupTest.spec.ts */

import { ContosoClient } from "../../src/index.js";
import { createRecorder } from "./recordedClient.js";
import { createTestCredential } from "@azure-tools/test-credential";
import { Recorder, env } from "@azure-tools/test-recorder";
import { assert, beforeEach, afterEach, it, describe } from "vitest";

describe("list Employee resources by resource group", () => {
  let recorder: Recorder;
  let client: ContosoClient;

  beforeEach(async function (ctx) {
    recorder = await createRecorder(ctx);
    const credential = createTestCredential();
    const subscriptionId = env.SUBSCRIPTION_ID || "<SUBSCRIPTION_ID>";
    const clientOptions = recorder.configureClientOptions({});
    client = new ContosoClient(credential, subscriptionId, clientOptions);
  });

  afterEach(async function () {
    await recorder.stop();
  });

  it("should list Employee resources by resource group for employeesListByResourceGroup", async function () {
    const resArray = new Array();
    for await (const item of client.listByResourceGroup("rgopenapi")) {
      resArray.push(item);
    }
    assert.ok(resArray);
    assert.strictEqual(resArray.length, 2);
    assert.strictEqual(
      resArray[0].id,
      "/subscriptions/11809CA1-E126-4017-945E-AA795CD5C5A9/resourceGroups/rgopenapi/providers/Microsoft.Contoso/employees/emp1",
    );
    assert.strictEqual(resArray[0].name, "emp1");
    assert.strictEqual(resArray[0].type, "Microsoft.Contoso/employees");
    assert.strictEqual(resArray[0].location, "eastus");
  });
});
```
