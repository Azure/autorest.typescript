import { assert } from "chai";
import UsageClientFactory, {
  UsageClient
} from "./generated/azure/client-generator-core/usage/src/index.js";

describe("Usage Client", () => {
  let client: UsageClient;

  beforeEach(() => {
    client = UsageClientFactory({
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it("should post input usage model in operation", async () => {
    const result = await client
      .path("/azure/client-generator-core/usage/inputToInputOutput")
      .post({ body: { name: "Madge" } });
    assert.strictEqual(result.status, "204");
  });

  it("should get usage model in operation", async () => {
    const result = await client
      .path("/azure/client-generator-core/usage/outputToInputOutput")
      .get();
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.name, "Madge");
  });

  it("should put usage model in operation", async () => {
    const result = await client
      .path("/azure/client-generator-core/usage/modelInReadOnlyProperty")
      .put({ body: {} });
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.result.name, "Madge");
  });
});
