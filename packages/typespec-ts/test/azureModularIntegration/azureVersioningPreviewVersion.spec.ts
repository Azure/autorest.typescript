import { assert } from "chai";
import { PreviewVersionClient } from "./generated/azure/versioning/previewVersion/src/index.js";

describe("PreviewVersionClient Rest Client", () => {
  let client: PreviewVersionClient;

  beforeEach(() => {
    client = new PreviewVersionClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true
    });
  });

  it("should get widget with preview version - includes color property", async () => {
    // Test @previewVersion with stable operations - should work across all versions
    // Color is expected in the response because we are using preview version client
    const result = await client.getWidget("widget-123");

    assert.strictEqual(result?.id, "widget-123");
    assert.strictEqual(result?.name, "Sample Widget");
    assert.strictEqual(result?.color, "blue");
  });

  it("should update widget color - preview-only operation", async () => {
    // Test @previewVersion with preview-only operations - only available in preview version
    // This operation can be called because the client uses preview api version
    const result = await client.updateWidgetColor("widget-123", {
      color: "red"
    });

    assert.strictEqual(result?.id, "widget-123");
    assert.strictEqual(result?.name, "Sample Widget");
    assert.strictEqual(result?.color, "red");
  });

  it("should list widgets with color filtering", async () => {
    // Test @previewVersion with preview-specific parameters
    // color parameter is only available in preview version
    const result = await client.listWidgets({
      name: "test",
      color: "blue"
    });

    assert.strictEqual(result.widgets.length, 1);
    assert.strictEqual(result.widgets[0]?.id, "widget-1");
    assert.strictEqual(result.widgets[0]?.name, "test");
  });
});
