# Should generate test with complex nested response assertions

Test generation should create proper response assertions for complex nested objects.

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
  /** Department information */
  department?: DepartmentInfo;
  /** Skills array */
  skills?: string[];
  /** Projects map */
  projects?: Record<ProjectDetails>;
  /** Active status */
  isActive?: boolean;
}

/** Department information */
model DepartmentInfo {
  /** Department name */
  name?: string;
  /** Manager info */
  manager?: ManagerInfo;
  /** Budget */
  budget?: int32;
}

/** Manager information */
model ManagerInfo {
  /** Manager name */
  name?: string;
  /** Manager email */
  email?: string;
}

/** Project details */
model ProjectDetails {
  /** Project name */
  title?: string;
  /** Project status */
  status?: string;
}

@armResourceOperations
interface Employees {
  get is ArmResourceRead<Employee>;
}
```

## Example and generated tests

Raw json files.

```json for Employees_Get
{
  "title": "Employees_Get",
  "operationId": "Employees_Get",
  "parameters": {
    "api-version": "2021-10-01-preview",
    "subscriptionId": "11809CA1-E126-4017-945E-AA795CD5C5A9",
    "resourceGroupName": "rgopenapi",
    "employeeName": "complexEmployee"
  },
  "responses": {
    "200": {
      "body": {
        "id": "/subscriptions/11809CA1-E126-4017-945E-AA795CD5C5A9/resourceGroups/rgopenapi/providers/Microsoft.Contoso/employees/complexEmployee",
        "name": "complexEmployee",
        "type": "Microsoft.Contoso/employees",
        "location": "eastus",
        "properties": {
          "department": {
            "name": "Engineering",
            "manager": {
              "name": "John Doe",
              "email": "john.doe@contoso.com"
            },
            "budget": 500000
          },
          "skills": ["TypeScript", "Azure", "REST"],
          "projects": {
            "project1": {
              "title": "Cloud Migration",
              "status": "active"
            },
            "project2": {
              "title": "API Modernization", 
              "status": "completed"
            }
          },
          "isActive": true
        }
      }
    }
  }
}
```

```ts tests getTest
/** This file path is /test/generated/getTest.spec.ts */

import { createRecorder } from "../public/utils/recordedClient.js";
import { ContosoClient } from "../../src/index.js";
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
    const result = await client.get("rgopenapi", "complexEmployee");
    assert.ok(result);
    assert.strictEqual(
      result.id,
      "/subscriptions/11809CA1-E126-4017-945E-AA795CD5C5A9/resourceGroups/rgopenapi/providers/Microsoft.Contoso/employees/complexEmployee",
    );
    assert.strictEqual(result.name, "complexEmployee");
    assert.strictEqual(result.type, "Microsoft.Contoso/employees");
    assert.strictEqual(result.location, "eastus");
    assert.ok(Array.isArray(result.properties.skills));
    assert.strictEqual(result.properties.skills.length, 3);
    assert.strictEqual(result.properties.isActive, true);
  });
});
```
