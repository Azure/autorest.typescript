# Sample generation should generate required client-level parameters

## TypeSpec

This is tsp definition.

```tsp
import "@typespec/http";
import "@typespec/rest";
import "@typespec/versioning";
import "@azure-tools/typespec-azure-core";

using TypeSpec.Http;
using TypeSpec.Rest;
using TypeSpec.Versioning;
using Azure.Core;
using Azure.Core.Traits;

@useAuth(AadOauth2Auth<["https://contoso.azure.com/.default"]>)
@service(#{
  title: "Contoso Widget Manager",
})
@versioned(Contoso.WidgetManager.Versions)
namespace Azure.Contoso.WidgetManager;

@doc("Versions info.")
enum Versions {
  @doc("The 2021-10-01-preview version.")
  @useDependency(Azure.Core.Versions.v1_0_Preview_1)
  v2021_10_01_preview: "2021-10-01-preview",
}

@doc("A widget.")
@resource("widgets")
model WidgetSuite {
  @key("widgetName")
  @doc("The widget name.")
  @visibility(Lifecycle.Read)
  name: string;

  @doc("The ID of the widget's manufacturer.")
  manufacturerId: string;

}

interface Widgets {
  @doc("List Widget resources")
  listWidgets is ResourceList<
    WidgetSuite,
    ListQueryParametersTrait<StandardListQueryParameters & SelectQueryParameter>
  >;
}
```

## Example

Raw json files.

```json for Widgets_ListWidgets
{
  "title": "Widgets_ListWidgets",
  "operationId": "Widgets_ListWidgets",
  "parameters": {
    "top": 8,
    "skip": 15,
    "maxpagesize": 27,
    "api-version": "2021-10-01-preview"
  },
  "responses": {
    "200": {
      "body": {}
    }
  }
}
```

This is the tspconfig.yaml.

```yaml
hierarchy-client: true
enable-operation-group: false
```

## Generated tests

```ts tests
/** This file path is /test/generated/widgetsListWidgetsTest.spec.ts */

import { WidgetManagerClient } from "../../src/index.js";
import { createRecorder } from "./recordedClient.js";
import { createTestCredential } from "@azure-tools/test-credential";
import { Recorder } from "@azure-tools/test-recorder";
import { assert, beforeEach, afterEach, it, describe } from "vitest";

describe("list Widget resources", () => {
  let recorder: Recorder;
  let client: WidgetManagerClient;

  beforeEach(async function (ctx) {
    recorder = await createRecorder(ctx);
    const credential = createTestCredential();
    const clientOptions = recorder.configureClientOptions({});
    client = new WidgetManagerClient(credential, clientOptions);
  });

  afterEach(async function () {
    await recorder.stop();
  });

  it("should list Widget resources for widgetsListWidgets", async function () {
    const resArray = new Array();
    for await (const item of client.widgets.listWidgets({
      top: 8,
      skip: 15,
      maxpagesize: 27,
    })) {
      resArray.push(item);
    }
    assert.ok(resArray);
  });
});
```

# Sample generation should generate client-level subscriptionId for ARM clients

## TypeSpec

This is tsp definition.

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

```ts tests
/** This file path is /test/generated/getTest.spec.ts */

import { ContosoClient } from "../../src/index.js";
import { createRecorder } from "./recordedClient.js";
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
