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

## Samples

Generate samples for dpg cases:

```ts samples
```
