import "@typespec/http";
import "@azure-tools/typespec-azure-core";

using TypeSpec.Http;
using Azure.Core;
using TypeSpec.Rest;
using TypeSpec.Versioning;
using global.Azure.Core.Traits;
@versioned(WidgetService.Versions)
@service({
    title: "Widget Service"
})
@useAuth(BearerAuth | ApiKeyAuth<ApiKeyLocation.cookie, "session-id">)
namespace WidgetService;

/** The Contoso Widget Manager service version. */
enum Versions {
    /** Version 2022-08-31 */
    @useDependency(Azure.Core.Versions.v1_0_Preview_2)
    `1.0.0`,
  }

alias ResourceOperations = global.Azure.Core.ResourceOperations<NoConditionalRequests &
  NoRepeatableRequests &
  NoClientRequestId>;

model Widget {
    @doc("The UUID of this widget. This is generated automatically by the service.")
    id: string;
    @doc("The weight of the widget. This is an int32, but must be greater than zero.")
    weight: int32;
    @doc("The color of the widget.")
    color: "red" | "blue";
}

model CreateWidget {
    @doc("The weight of the widget. This is an int32, but must be greater than zero.")
    weight: int32;
    @doc("The color of the widget.")
    color: "red" | "blue";
}

model NonReferencedModel {
    @doc("The weight of the widget. This is an int32, but must be greater than zero.")
    prop1: int32;
    @doc("The color of the widget.")
    prop2: string;
}

model UpdateWidget {
    @doc("The UUID of this widget. This is generated automatically by the service.")
    @path
    id: string;
    @doc("The weight of the widget. This is an int32, but must be greater than zero.")
    weight?: int32;
    @doc("The color of the widget.")
    color?: "red" | "blue";
}

model AnalyzeResult {
    summary: string;
}

@encode(BytesKnownEncoding.base64url)
scalar base64urlBytes extends bytes;

@error
model WidgetError {
    @doc("The HTTP error code.")
    code: int32;
    @doc("A human-readable message describing the error.")
    message: string;
}

@pagedResult
model ListWidgetsPagesResults {
    @doc("The current page of results.")
    @items
    results: Widget[];
    @doc("The URL to get the next set of results.")
    @TypeSpec.nextLink
    `odata.nextLink`?: string;
}

@resource("users")
@doc("Details about a user.")
model User {
  @key
  @visibility("read")
  @doc("The name of user.")
  name: string;

  @doc("The role of user")
  role: string;

  @doc("The UUID of this widget. This is generated automatically by the service.")
  id: string;
}

@route("/widgets")
@tag("Widgets")
interface Widgets {
    @doc("""
List all widgets in the system. This operation is not paginated, and returns a simple array of widgets.

It does not accept any options or parameters.
""")

    @get listWidgets(
        @header requiredHeader: string, 
        @header optionalHeader?: string,  
        @header nullableOptionalHeader?: string | null,
        @header bytesHeader: bytes,
        @header @encode(BytesKnownEncoding.base64) value: bytes,
        @header({
          format: "csv",
        })
        csvArrayHeader: base64urlBytes[],
        @header utcDateHeader: utcDateTime,
        @header optionalDateHeader?: utcDateTime,
        @header nullableDateHeader?: utcDateTime | null,
    ): Widget[] | WidgetError;

    @get
    @route("/widgets/pages") 
    listWidgetsPages(
        @query page: int32,
        @query pageSize: int32,
    ): ListWidgetsPagesResults | WidgetError;

    @post
    @route("/widgets/pages") 
    queryWidgetsPages(
        @query page: int32,
        @query pageSize: int32,
    ): ListWidgetsPagesResults | WidgetError;

    @doc("Get a widget by ID.")
    @get getWidget(@path id: string): Widget | WidgetError;

    @doc("""
Create a new widget.

The widget ID is not required during creation, as it is automatically set by the server. Providing an ID will
result in an error.
""")

    @post createWidget(...CreateWidget): {
        @statusCode code: 201;
        @body widget: Widget;
    } | WidgetError;

    @route("/widgets/createOrReplace")
    op createOrReplace is ResourceOperations.LongRunningResourceCreateOrReplace<User>;

    @doc("""
Update the contents of the widget. The widget ID is required in the input, but cannot be changed. All other fields
are optional and will be updated within the widget if provided.
""")

    @patch updateWidget(...UpdateWidget): Widget | WidgetError;

    @doc("Delete a widget by ID.")
    @delete deleteWidget(@path id: string): {
        @statusCode code: 204;
    } | WidgetError;

    @doc("Analyze a widget. The only guarantee is that this method will return a string containing the results of the analysis.")
    @route("{id}/analyze") @post analyzeWidget(
        @path id: string
    ): AnalyzeResult | WidgetError;
}

@route("/budgets")
@tag("Widgets")
interface Budgets { 
    // the same name as Widgets.createOrReplace
    @route("/widgets/createOrReplace")
    op createOrReplace is ResourceOperations.LongRunningResourceCreateOrReplace<User>;
}
