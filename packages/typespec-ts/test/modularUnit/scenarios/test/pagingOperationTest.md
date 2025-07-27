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

```ts tests
/** This file path is /test/public/utils/recordedClient.ts */

import { Context } from "mocha";
import { Recorder, RecorderStartOptions } from "@azure-tools/test-recorder";

const replaceableVariables: Record<string, string> = {
  SUBSCRIPTION_ID: "azure_subscription_id",
};

const recorderEnvSetup: RecorderStartOptions = {
  envSetupForPlayback: replaceableVariables,
};

/**
 * creates the recorder and reads the environment variables from the `.env` file.
 * Should be called first in the test suite to make sure environment variables are
 * read before they are being used.
 */
export async function createRecorder(context: Context): Promise<Recorder> {
  const recorder = new Recorder(context.currentTest);
  await recorder.start(recorderEnvSetup);
  return recorder;
}

/** This file path is /test/generated/listByResourceGroupTest.spec.ts */

import { Recorder } from "@azure-tools/test-recorder";
import { createRecorder } from "../public/utils/recordedClient.js";
import { assert } from "chai";
import { Context } from "mocha";
import { ContosoClient } from "@azure/internal-test";
import { DefaultAzureCredential } from "@azure/identity";

describe("list Employee resources by resource group", () => {
  let recorder: Recorder;

  beforeEach(async function (this: Context) {
    recorder = await createRecorder(this);
  });

  afterEach(async function () {
    await recorder.stop();
  });

  it("should list Employee resources by resource group for employeesListByResourceGroup", async function () {
    const credential = new DefaultAzureCredential();
    const subscriptionId = "11809CA1-E126-4017-945E-AA795CD5C5A9";
    const client = new ContosoClient(credential, subscriptionId);
    const resArray = new Array();
    for await (const item of client.listByResourceGroup("rgopenapi")) {
      resArray.push(item);
    }
    assert.ok(resArray);
    assert.ok(Array.isArray(resArray[0].value));
    assert.strictEqual(resArray[0].value.length, 2);
  });
});
```
