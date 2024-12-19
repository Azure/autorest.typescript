import { assert } from "chai";
import AzureCoreScalarClientFactory, {
  AzureCoreScalarClient
} from "./generated/azure/core/scalar/src/index.js";
describe("Azure Core Saclar Rest Client", () => {
  let client: AzureCoreScalarClient;

  beforeEach(() => {
    client = AzureCoreScalarClientFactory({
      allowInsecureConnection: true,
      endpoint: "http://localhost:3005"
    });
  });

  it("should get an Azure Location value", async () => {
    const result = await client
      .path("/azure/core/scalar/azureLocation")
      .get();
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body, "eastus");
  });

  it("should put an Azure Location value", async () => {
    const result = await client.path("/azure/core/scalar/azureLocation").put({
      body: "eastus",
      headers: {
        "content-type": "text/plain"
      }
    });
    assert.strictEqual(result.status, "204");
  });

  it("should post an Azure Location value", async () => {
    const result = await client
      .path("/azure/core/scalar/azureLocation")
      .post({
        body: { location: "eastus" }
      });
    assert.strictEqual(result.status, "200");
    assert.deepEqual(result.body, { location: "eastus" });
  });

  it("should post an Azure Location value with header", async () => {
    const result = await client
      .path("/azure/core/scalar/azureLocation/header")
      .post({ headers: { region: "eastus" } });
    assert.strictEqual(result.status, "204");
  });

  it("should post an Azure Location with query", async () => {
    const result = await client
      .path("/azure/core/scalar/azureLocation/query")
      .post({ queryParameters: { region: "eastus" } });
    assert.strictEqual(result.status, "204");
  });
});
