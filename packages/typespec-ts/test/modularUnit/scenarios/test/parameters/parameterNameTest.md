# Should generate tests for parameter name variations

Test generation should create tests for different parameter names, including client-side parameter name customization.

## TypeSpec

This is tsp definition.

```tsp
import "@azure-tools/typespec-client-generator-core";

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
using Azure.ClientGenerator.Core;

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
  @encode("base64url")
  profile?: bytes;

  /** The status of the last operation. */
  @visibility(Lifecycle.Read)
  provisioningState?: ProvisioningState;
}

/** The resource provisioning state. */
@lroStatus
union ProvisioningState {
  ResourceProvisioningState,

  /** The resource is being provisioned */
  Provisioning: "Provisioning",

  /** The resource is updating */
  Updating: "Updating",

  /** The resource is being deleted */
  Deleting: "Deleting",

  /** The resource create request has been accepted */
  Accepted: "Accepted",

  string,
}

@armResourceOperations
interface Employees {
  createOrUpdate is ArmResourceCreateOrReplaceAsync<Employee>;
}
@@clientName(Employees.createOrUpdate::parameters.resource, "foo");
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
    "employeeName": "9KF-f-8b",
    "foo": {
      "properties": {
        "age": 30,
        "city": "gydhnntudughbmxlkyzrskcdkotrxn",
        "profile": "ms"
      },
      "tags": {
        "key2913": "urperxmkkhhkp"
      },
      "location": "itajgxyqozseoygnl"
    }
  },
  "responses": {
    "200": {
      "body": {
        "id": "/subscriptions/11809CA1-E126-4017-945E-AA795CD5C5A9/resourceGroups/rgopenapi/providers/Microsoft.Contoso/employees/9KF-f-8b",
        "name": "9KF-f-8b",
        "type": "Microsoft.Contoso/employees",
        "location": "itajgxyqozseoygnl",
        "properties": {
          "age": 30,
          "city": "gydhnntudughbmxlkyzrskcdkotrxn",
          "profile": "ms",
          "provisioningState": "Succeeded"
        },
        "tags": {
          "key2913": "urperxmkkhhkp"
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

  it("should create a Employee for employeesCreateOrUpdate", async function () {
    const result = await client.createOrUpdate("rgopenapi", "9KF-f-8b", {
      properties: {
        age: 30,
        city: "gydhnntudughbmxlkyzrskcdkotrxn",
        profile: Buffer.from("ms", "base64url"),
      },
      tags: { key2913: "urperxmkkhhkp" },
      location: "itajgxyqozseoygnl",
    });
    assert.ok(result);
    assert.strictEqual(
      result.id,
      "/subscriptions/11809CA1-E126-4017-945E-AA795CD5C5A9/resourceGroups/rgopenapi/providers/Microsoft.Contoso/employees/9KF-f-8b",
    );
    assert.strictEqual(result.name, "9KF-f-8b");
    assert.strictEqual(result.type, "Microsoft.Contoso/employees");
    assert.strictEqual(result.location, "itajgxyqozseoygnl");
    assert.strictEqual(result.properties.age, 30);
    assert.strictEqual(
      result.properties.city,
      "gydhnntudughbmxlkyzrskcdkotrxn",
    );
    assert.strictEqual(result.properties.profile, "ms");
  });
});
```
