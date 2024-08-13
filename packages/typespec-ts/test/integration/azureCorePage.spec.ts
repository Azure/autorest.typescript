import { assert } from "chai";
import AzureCorePageClientFactory, {
  AzureCorePageClient
} from "./generated/azure/core/page/src/index.js";
describe("Azure Core Page Rest Client", () => {
  let client: AzureCorePageClient;

  beforeEach(() => {
    client = AzureCorePageClientFactory({
      allowInsecureConnection: true
    });
  });
  const validUser = {
    id: 1,
    name: "Madge",
    etag: "11bdc430-65e8-45ad-81d9-8ffa60d55b59"
  };
  it("should list core page withPage", async () => {
    const result = await client.path("/azure/core/page/page").get();
    const responseBody = {
      value: [validUser]
    };
    assert.strictEqual(result.status, "200");
    assert.deepStrictEqual(result.body, responseBody);
  });

  it("should list core page withParameters", async () => {
    const validBody = { inputName: "Madge" };
    const result = await client.path("/azure/core/page/parameters").get({
      body: validBody,
      queryParameters: {
        another: "Second"
      }
    });
    const responseBody = {
      value: [validUser]
    };
    assert.strictEqual(result.status, "200");
    assert.deepStrictEqual(result.body, responseBody);
  });

  it("should get core page TwoModelsAsPageItem", async () => {
    const responseBody1 = {
      value: [{ id: 1 }]
    };
    const result1 = await client.path("/azure/core/page/first-item").get();

    assert.strictEqual(result1.status, "200");
    assert.deepEqual(result1.body, responseBody1);
    const responseBody2 = {
      value: [{ name: "Madge" }]
    };
    const result2 = await client.path("/azure/core/page/second-item").get();

    assert.strictEqual(result2.status, "200");
    assert.deepEqual(result2.body, responseBody2);
  });

  it("should list core page withCustomPageModel", async () => {
    const result = await client.path("/azure/core/page/custom-page").get();
    const responseBody = {
      items: [validUser]
    };
    assert.strictEqual(result.status, "200");
    assert.deepEqual(result.body, responseBody);
  });
});
