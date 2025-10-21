import { assert } from "chai";
import PreviewVersionClientFactory, {
  PreviewVersionClient,
  WidgetOutput
} from "./generated/azure/versioning/previewVersion/src/index.js";

describe("Azure Versioning Preview Version", () => {
  let client: PreviewVersionClient;

  beforeEach(() => {
    client = PreviewVersionClientFactory({
      allowInsecureConnection: true
    });
  });

  it("should get widget with preview version (includes color)", async () => {
    // Test @previewVersion with stable operations - should work across all versions
    // Color is expected in the response because we are passing api-version "2024-12-01-preview"
    const result = await client
      .path("/azure/versioning/previewVersion/widgets/{id}", "widget-123")
      .get();
    assert.strictEqual(result.status, "200");
    const body = result.body as WidgetOutput;
    assert.strictEqual(body.id, "widget-123");
    assert.strictEqual(body.name, "Sample Widget");
    assert.strictEqual(body.color, "blue");
  });

  it("should update widget color in preview version", async () => {
    // Test @previewVersion with preview-only operations - only available in preview version
    // This operation can be called because the request uses api-version "2024-12-01-preview"
    const result = await client
      .path("/azure/versioning/previewVersion/widgets/{id}/color", "widget-123")
      .patch({
        contentType: "application/merge-patch+json",
        body: {
          color: "red"
        }
      });

    assert.strictEqual(result.status, "200");
    const body = result.body as WidgetOutput;
    assert.strictEqual(body.id, "widget-123");
    assert.strictEqual(body.name, "Sample Widget");
    assert.strictEqual(body.color, "red");
  });

  it("should list widgets with stable version (no color)", async () => {
    // Test @previewVersion with version-specific query parameters
    // api-version "2024-06-01" is stable, so color is not expected in the response
    const clientStable = PreviewVersionClientFactory({
      apiVersion: "2024-06-01",
      allowInsecureConnection: true
    });

    const result = await clientStable
      .path("/azure/versioning/previewVersion/widgets")
      .get({
        queryParameters: {
          name: "test"
        }
      });

    assert.strictEqual(result.status, "200");
    assert.isArray(result.body.widgets);
    assert.strictEqual(result.body.widgets.length, 1);
    const widgets = result.body.widgets as Array<WidgetOutput>;
    assert.strictEqual(widgets[0]?.id, "widget-1");
    assert.strictEqual(widgets[0]?.name, "test");
    // Color should not be present in stable version response
    assert.isUndefined(widgets[0]?.color);
  });
});
