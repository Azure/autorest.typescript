# Should generate test for long running operation

Test generation should create test for long running operations with proper poller handling.

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
  createOrUpdate is ArmResourceCreateOrReplaceAsync<Employee>;
}
```

## Example and generated tests

Raw json files.

```json for Employees_CreateOrUpdate
{
  "title": "Employees_CreateOrUpdate",
  "operationId": "Employees_CreateOrUpdate",
  "parameters": {
    "api-version": "2021-10-01-preview",
    "subscriptionId": "11809CA1-E126-4017-945E-AA795CD5C5A9",
    "resourceGroupName": "rgopenapi",
    "employeeName": "testEmployee",
    "resource": {
      "location": "eastus",
      "properties": {
        "age": 25,
        "city": "Seattle",
        "profile": "developer"
      },
      "tags": {
        "environment": "test"
      }
    }
  },
  "responses": {
    "200": {
      "body": {
        "id": "/subscriptions/11809CA1-E126-4017-945E-AA795CD5C5A9/resourceGroups/rgopenapi/providers/Microsoft.Contoso/employees/testEmployee",
        "name": "testEmployee",
        "type": "Microsoft.Contoso/employees",
        "location": "eastus",
        "properties": {
          "age": 25,
          "city": "Seattle",
          "profile": "developer"
        },
        "tags": {
          "environment": "test"
        }
      }
    },
    "201": {
      "body": {
        "id": "/subscriptions/11809CA1-E126-4017-945E-AA795CD5C5A9/resourceGroups/rgopenapi/providers/Microsoft.Contoso/employees/testEmployee",
        "name": "testEmployee",
        "type": "Microsoft.Contoso/employees",
        "location": "eastus",
        "properties": {
          "age": 25,
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

```ts tests createOrUpdateTest
/** This file path is /test/generated/createOrUpdateTest.spec.ts */

import { Recorder, env } from "@azure-tools/test-recorder";
import { createRecorder } from "../public/utils/recordedClient.js";
import { createTestCredential } from "@azure-tools/test-credential";
import { assert, beforeEach, afterEach, it, describe } from "vitest";
import { ContosoClient } from "../../src/index.js";

describe("create a Employee", () => {
  let recorder: Recorder;
  let client: ContosoClient;
  let subscriptionId: string;

  beforeEach(async function (ctx) {
    recorder = await createRecorder(ctx);
    subscriptionId = env.SUBSCRIPTION_ID || "";
    client = new ContosoClient(
      createTestCredential(),
      subscriptionId,
      recorder.configureClientOptions({}),
    );
  });

  afterEach(async function () {
    await recorder.stop();
  });

  it("should create a Employee for employeesCreateOrUpdate", async function () {
    const result = await client.createOrUpdate("rgopenapi", "testEmployee", {
      location: "eastus",
      properties: { age: 25, city: "Seattle", profile: "developer" },
      tags: { environment: "test" },
    });
    assert.ok(result);
    assert.strictEqual(
      result.id,
      "/subscriptions/11809CA1-E126-4017-945E-AA795CD5C5A9/resourceGroups/rgopenapi/providers/Microsoft.Contoso/employees/testEmployee",
    );
    assert.strictEqual(result.name, "testEmployee");
    assert.strictEqual(result.type, "Microsoft.Contoso/employees");
    assert.strictEqual(result.location, "eastus");
    assert.strictEqual(result.properties.age, 25);
    assert.strictEqual(result.properties.city, "Seattle");
    assert.strictEqual(result.properties.profile, "developer");
  });
});
```
