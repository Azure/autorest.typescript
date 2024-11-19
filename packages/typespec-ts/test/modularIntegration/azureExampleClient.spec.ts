import { AzureExampleClient } from "./generated/azure/example/basic/src/index.js";
import { assert } from "chai";
describe("AzureExampleClient Client", () => {
  let client: AzureExampleClient;

  beforeEach(() => {
    client = new AzureExampleClient({
      allowInsecureConnection: true,
      endpoint: "http://localhost:3002"
    });
  });

  it("basic example client action", async () => {
    const result = await client.basicAction("query", "header", {
      stringProperty: "text",
      modelProperty: {
        int32Property: 1,
        float32Property: 1.5,
        enumProperty: "EnumValue1"
      },
      arrayProperty: ["item"],
      recordProperty: {
        record: "value"
      }
    });

    assert.strictEqual(result.stringProperty, "text");
  });
});
