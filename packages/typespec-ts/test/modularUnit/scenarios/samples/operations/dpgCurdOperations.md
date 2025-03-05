# Should generate samples for data-plane operations

Sample generation should dpg template and operations successfully.

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
@service({
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
  @visibility("read")
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

## Samples

Generate samples for dpg cases:

```ts samples
/** This file path is /samples-dev/widgetsListWidgetsSample.ts */
import { WidgetManagerClient } from "@azure/internal-test";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to list Widget resources
 *
 * @summary list Widget resources
 * x-ms-original-file: 2021-10-01-preview/json_for_Widgets_ListWidgets.json
 */
async function widgetsListWidgets(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const client = new WidgetManagerClient(credential);
  const resArray = new Array();
  for await (const item of client.widgets.listWidgets({
    top: 8,
    skip: 15,
    maxpagesize: 27,
  })) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await widgetsListWidgets();
}

main().catch(console.error);

/** This file path is /samples-dev/widgetsDeleteWidgetSample.ts */
import { WidgetManagerClient } from "@azure/internal-test";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to delete a Widget asynchronously.
 *
 * @summary delete a Widget asynchronously.
 * x-ms-original-file: 2021-10-01-preview/json_for_Widgets_DeleteWidget.json
 */
async function deleteWidgetByWidgetNameUsingLongRunningOperation(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const client = new WidgetManagerClient(credential);
  const result = await client.widgets.deleteWidget("searchbox");
  console.log(result);
}

async function main(): Promise<void> {
  await deleteWidgetByWidgetNameUsingLongRunningOperation();
}

main().catch(console.error);

/** This file path is /samples-dev/widgetsCreateOrUpdateWidgetSample.ts */
import { WidgetManagerClient } from "@azure/internal-test";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to creates or updates a Widget asynchronously.
 *
 * @summary creates or updates a Widget asynchronously.
 * x-ms-original-file: 2021-10-01-preview/json_for_Widgets_CreateOrUpdateWidget.json
 */
async function widgetsCreateOrUpdateWidget(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const client = new WidgetManagerClient(credential);
  const result = await client.widgets.createOrUpdateWidget("name1", {
    manufacturerId: "manufacturer id1",
  });
  console.log(result);
}

async function main(): Promise<void> {
  await widgetsCreateOrUpdateWidget();
}

main().catch(console.error);
```
