import { assert } from "chai";
import AzureCorePageClientFactory, {
  AzureCorePageClient,
  isUnexpected
} from "./generated/azure/core/page/src/index.js";
describe("Azure Core Page Rest Client", () => {
  let client: AzureCorePageClient;

  beforeEach(() => {
    client = AzureCorePageClientFactory({
      allowInsecureConnection: true
    });
  });

  it("should list core page withPage", async () => {
    const result = await client.path("/azure/core/page/page").get();
    if (isUnexpected(result)) {
      const error = `Unexpected status code ${result.status}`;
      assert.fail(error);
    }
    assert.strictEqual(result.body.value.length, 1);
    assert.deepEqual(result.body.value[0]?.id, 1);
    assert.strictEqual(result.body.value[0]?.name, "Madge");
    assert.strictEqual(
      result.body.value[0]?.etag,
      "11bdc430-65e8-45ad-81d9-8ffa60d55b59"
    );
  });

  it("should list core page withParameters", async () => {
    const validBody = { inputName: "Madge" };
    const result = await client.path("/azure/core/page/parameters").post({
      body: validBody,
      queryParameters: {
        "api-version": "2022-12-01-preview",
        another: "Second"
      }
    });
    if (isUnexpected(result)) {
      const error = `Unexpected status code ${result.status}`;
      assert.fail(error);
    }
    assert.strictEqual(result.body.value.length, 1);
    assert.strictEqual(result.body.value[0]?.id, 1);
    assert.strictEqual(result.body.value[0]?.name, "Madge");
    assert.strictEqual(
      result.body.value[0]?.etag,
      "11bdc430-65e8-45ad-81d9-8ffa60d55b59"
    );
  });

  it("should get core page TwoModelsAsPageItem", async () => {
    const result1 = await client.path("/azure/core/page/first-item").get();

    if (isUnexpected(result1)) {
      const error = `Unexpected status code ${result1.status}`;
      assert.fail(error);
    }

    assert.strictEqual(result1.body.value[0]?.id, 1);

    const result2 = await client.path("/azure/core/page/second-item").get();

    if (isUnexpected(result2)) {
      const error = `Unexpected status code ${result2.status}`;
      assert.fail(error);
    }
    assert.strictEqual(result2.body.value[0]?.name, "Madge");
  });

  it("should list core page withCustomPageModel", async () => {
    const result = await client.path("/azure/core/page/custom-page").get();
    if (isUnexpected(result)) {
      const error = `Unexpected status code ${result.status}`;
      assert.fail(error);
    }
    assert.strictEqual(result.body.items.length, 1);
    assert.strictEqual(result.body.items[0]?.id, 1);
    assert.strictEqual(result.body.items[0]?.name, "Madge");
    assert.strictEqual(
      result.body.items[0]?.etag,
      "11bdc430-65e8-45ad-81d9-8ffa60d55b59"
    );
  });

  it("should list core page withParameterizedNextLink", async () => {
    // Expected query parameters on initial request: includePending=true, select=name
    // TODO: We can only get the first page data because the parameter re-injection is not implemented yet.
    const result = await client
      .path("/azure/core/page/with-parameterized-next-link")
      .get({
        queryParameters: {
          includePending: true,
          select: "name"
        }
      });
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.values.length, 1);
    assert.strictEqual(result.body.values[0]?.name, "User1");
    assert.strictEqual(
      result.body.nextLink,
      "http://localhost:3000/azure/core/page/with-parameterized-next-link/second-page?select=name"
    );
  });
});
