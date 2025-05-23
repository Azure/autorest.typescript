import "@typespec/rest";
import "@typespec/versioning";
import "@azure-tools/typespec-azure-core";
import "./shared";

using TypeSpec.Http;
using TypeSpec.Rest;
using TypeSpec.Versioning;
using Azure.Core;

@service(#{
    title: "Contoso Widget Manager",
  })
@versioned(Contoso.WidgetManager.Versions)
namespace Azure.Contoso.WidgetManager;

enum Versions {
  @useDependency(Azure.Core.Versions.v1_0_Preview_1)
  v2022_11_01_Preview: "2022-11-01-preview",
}

@doc("A widget.")
@resource("widgets")
model Widget {
  @key("widgetName")
  @doc("The widget name.")
  @visibility(Lifecycle.Read)
  name: string;

  @doc("The ID of the widget's manufacturer.")
  manufacturerId: string;

  @doc("The faked shared model.")
  sharedModel?: FakedSharedModel;
}

interface Widgets {
  @doc("Fetch a Widget by name.")
  getWidget is ResourceRead<Widget>;

  @doc("Gets status of a Widget operation.")
  getWidgetOperationStatus is GetResourceOperationStatus<Widget>;

  @doc("Creates or updates a Widget asynchronously.")
  @pollingOperation(Widgets.getWidgetOperationStatus)
  createOrUpdateWidget is LongRunningResourceCreateOrUpdate<Widget>;

  @doc("Delete a Widget asynchronously.")
  @pollingOperation(Widgets.getWidgetOperationStatus)
  deleteWidget is LongRunningResourceDelete<Widget>;

  @doc("List Widget resources")
  listWidgets is ResourceList<
    Widget,
    {
      parameters: StandardListQueryParameters & SelectQueryParameter;
    }
  >;
}