import BasicClientFactory, {
  BasicClient
} from "./generated/azure/example/basic/src/index.js";
import { assert } from "chai";
describe("Basic Rest Client", () => {
  let client: BasicClient;

  beforeEach(() => {
    client = BasicClientFactory({ allowInsecureConnection: true });
  });

  it.only("basic example client action", async () => {
    const result = await client
      .path("/azure/example/basic/azure/example/basic/basic")
      .post({
        queryParameters: {
          "query-param": "query",
          "api-version": "2022-12-01-preview"
        },
        headers: { "header-param": "header" },
        body: {
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
        }
      });
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.stringProperty, "text");
  });
});
