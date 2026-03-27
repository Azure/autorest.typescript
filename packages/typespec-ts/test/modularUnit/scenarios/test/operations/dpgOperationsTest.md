# Should generate tests for dpg operations

Test generation should handle dpg template and operations successfully.

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
  @doc("Fetch a Widget by name.")
  getWidget is ResourceRead<WidgetSuite>;

  @doc("Gets status of a Widget operation.")
  getWidgetOperationStatus is GetResourceOperationStatus<WidgetSuite>;

  @doc("Creates or updates a Widget asynchronously.")
  @pollingOperation(Widgets.getWidgetOperationStatus)
  createOrUpdateWidget is StandardResourceOperations.LongRunningResourceCreateOrUpdate<WidgetSuite>;

  @doc("Delete a Widget asynchronously.")
  @pollingOperation(Widgets.getWidgetOperationStatus)
  deleteWidget is LongRunningResourceDelete<WidgetSuite>;

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

```json for Widgets_CreateOrUpdateWidget
{
  "title": "Widgets_CreateOrUpdateWidget",
  "operationId": "Widgets_CreateOrUpdateWidget",
  "parameters": {
    "widgetName": "name1",
    "api-version": "2021-10-01-preview",
    "resource": {
      "manufacturerId": "manufacturer id1"
    }
  },
  "responses": {
    "200": {}
  }
}
```

```json for Widgets_DeleteWidget
{
  "operationId": "Widgets_DeleteWidget",
  "title": "Delete widget by widget name using long-running operation.",
  "parameters": {
    "api-version": "2021-10-01-preview",
    "widgetName": "searchbox"
  },
  "responses": {
    "202": {}
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
import { createRecorder } from "./util/recordedClient.js";
import { createTestCredential } from "@azure-tools/test-credential";
import { Recorder } from "@azure-tools/test-recorder";
import { assert, beforeEach, afterEach, it, describe } from "vitest";

describe("list Widget resources", () => {
  let recorder: Recorder;
  let client: WidgetManagerClient;

  beforeEach(async function (ctx) {
    recorder = await createRecorder(ctx);
    const endpoint = process.env.WIDGET_MANAGER_ENDPOINT || "";
    const credential = createTestCredential();
    const clientOptions = recorder.configureClientOptions({});
    client = new WidgetManagerClient(endpoint, credential, clientOptions);
  });

  afterEach(async function () {
    await recorder.stop();
  });

  it("should list Widget resources for widgetsListWidgets", async function () {
    const resArray = new Array();
    for await (const item of client.widgets.listWidgets({ top: 8, skip: 15, maxpagesize: 27 })) {
      resArray.push(item);
    }
    assert.ok(resArray);
  });
});
```
