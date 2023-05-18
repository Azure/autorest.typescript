import "@typespec/http";

using TypeSpec.Http;
@service({
    title: "Widget Service",
    version: "1.0.0",
})
namespace WidgetService;

model Widget {
    /**
     * The UUID of this widget. This is generated automatically by the service.
     */
    id: string;
    /**
     * The weight of the widget. This is an int32, but must be greater than zero.
     */
    weight: int32;
    /**
     * The color of the widget.
     */
    color: "red" | "blue";
}

model CreateWidget {
    /**
     * The weight of the widget. This is an int32, but must be greater than zero.
     */
    weight: int32;
    /**
     * The color of the widget.
     */
    color: "red" | "blue";
}

model UpdateWidget {
    /**
     * The UUID of this widget. This is generated automatically by the service.
     */
    @path
    id: string;
    /**
     * The weight of the widget. This is an int32, but must be greater than zero.
     */
    weight?: int32;
    /**
     * The color of the widget.
     */
    color?: "red" | "blue";
}

model AnalyzeResult {
    summary: string;
}

@error
model WidgetError {
    /**
     * The HTTP error code.
     */
    code: int32;
    /**
     * A human-readable message describing the error.
     */
    message: string;
}

@route("/widgets")
@tag("Widgets")
interface Widgets {
    /**
     * List all widgets in the system. This operation is not paginated, and returns a simple array of widgets.
     *
     * It does not accept any options or parameters.
     */
    @get listWidgets(): Widget[] | WidgetError;

    /**
     * Get a widget by ID.
     */
    @get getWidget(@path id: string): Widget | WidgetError;

    /**
     * Create a new widget.
     *
     * The widget ID is not required during creation, as it is automatically set by the server. Providing an ID will
     * result in an error.
     */
    @post createWidget(...CreateWidget): {
        @statusCode code: 201;
        @body widget: Widget;
    } | WidgetError;

    /**
     * Update the contents of the widget. The widget ID is required in the input, but cannot be changed. All other fields
     * are optional and will be updated within the widget if provided.
     */
    @patch updateWidget(...UpdateWidget): Widget | WidgetError;

    /**
     * Delete a widget by ID.
     */
    @delete deleteWidget(@path id: string): {
        @statusCode code: 204;
    } | WidgetError;

    /**
     * Analyze a widget. The only guarantee is that this method will return a string containing the results of the analysis.
     */
    @route("{id}/analyze") @post analyzeWidget(
        @path id: string
    ): AnalyzeResult | WidgetError;
}