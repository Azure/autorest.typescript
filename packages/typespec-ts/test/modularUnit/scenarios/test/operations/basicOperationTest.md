# Should generate basic test for simple operation

Test generation should create basic test for a simple operation with examples.

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
  get is ArmResourceRead<Employee>;
  createOrUpdate is ArmResourceCreateOrReplaceAsync<Employee>;
  delete is ArmResourceDeleteWithoutOkAsync<Employee>;
  listByResourceGroup is ArmResourceListByParent<Employee>;
}
```

## Example

Raw json files.

```json for Employees_Get
{
  "title": "Employees_Get",
  "operationId": "Employees_Get",
  "parameters": {
    "api-version": "2021-10-01-preview",
    "subscriptionId": "11809CA1-E126-4017-945E-AA795CD5C5A9",
    "resourceGroupName": "rgopenapi",
    "employeeName": "testEmployee"
  },
  "responses": {
    "200": {
      "body": {
        "id": "/subscriptions/11809CA1-E126-4017-945E-AA795CD5C5A9/resourceGroups/rgopenapi/providers/Microsoft.Contoso/employees/testEmployee",
        "name": "testEmployee",
        "type": "Microsoft.Contoso/employees",
        "location": "eastus",
        "properties": {
          "age": 30,
          "city": "Seattle",
          "profile": "developer"
        },
        "tags": {
          "environment": "test"
        }
      }
    }
  }
}
```

## Generated tests

```ts tests getTest
/** This file path is /test/generated/getTest.spec.ts */

import { ContosoClient } from "../../src/index.js";
import { createRecorder } from "./util/recordedClient.js";
import { createTestCredential } from "@azure-tools/test-credential";
import { Recorder, env } from "@azure-tools/test-recorder";
import { assert, beforeEach, afterEach, it, describe } from "vitest";

describe("get a Employee", () => {
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

  it("should get a Employee for employeesGet", async function () {
    const result = await client.get("rgopenapi", "testEmployee");
    assert.ok(result);
    assert.strictEqual(
      result.id,
      "/subscriptions/11809CA1-E126-4017-945E-AA795CD5C5A9/resourceGroups/rgopenapi/providers/Microsoft.Contoso/employees/testEmployee",
    );
    assert.strictEqual(result.name, "testEmployee");
    assert.strictEqual(result.type, "Microsoft.Contoso/employees");
    assert.strictEqual(result.location, "eastus");
    assert.strictEqual(result.properties.age, 30);
    assert.strictEqual(result.properties.city, "Seattle");
    assert.strictEqual(result.properties.profile, "developer");
    assert.strictEqual(result.tags.environment, "test");
  });
});
```
