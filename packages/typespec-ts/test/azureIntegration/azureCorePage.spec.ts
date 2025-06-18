import { assert } from "chai";
import AzureCorePageClientFactory, {
  AzureCorePageClient,
  FirstItemOutput,
  SecondItemOutput,
  UserOutput,
  isUnexpected,
  paginate
} from "./generated/azure/core/page/src/index.js";
describe("Azure Core Page Rest Client", () => {
  let client: AzureCorePageClient;

  beforeEach(() => {
    client = AzureCorePageClientFactory({
      allowInsecureConnection: true
    });
  });

  it("should list core page withPage", async () => {
    const initialResponse = await client.path("/azure/core/page/page").get();
    if (isUnexpected(initialResponse)) {
      const error = `Unexpected status code ${initialResponse.status}`;
      assert.fail(error);
    }

    const iter = paginate(client, initialResponse);
    let result: UserOutput[] = [];
    for await (const item of iter) {
      result.push(item);
    }
    assert.strictEqual(result.length, 1);
    assert.deepEqual(result[0]?.id, 1);
    assert.strictEqual(result[0]?.name, "Madge");
    assert.strictEqual(result[0]?.etag, "11bdc430-65e8-45ad-81d9-8ffa60d55b59");
  });

  it("should list core page withParameters", async () => {
    const validBody = { inputName: "Madge" };
    const initialResponse = await client
      .path("/azure/core/page/parameters")
      .post({
        body: validBody,
        queryParameters: {
          "api-version": "2022-12-01-preview",
          another: "Second"
        }
      });
    if (isUnexpected(initialResponse)) {
      const error = `Unexpected status code ${initialResponse.status}`;
      assert.fail(error);
    }

    const iter = paginate(client, initialResponse);
    let result: UserOutput[] = [];
    for await (const item of iter) {
      result.push(item);
    }
    assert.strictEqual(result.length, 1);
    assert.strictEqual(result[0]?.id, 1);
    assert.strictEqual(result[0]?.name, "Madge");
    assert.strictEqual(result[0]?.etag, "11bdc430-65e8-45ad-81d9-8ffa60d55b59");
  });

  it("should get core page TwoModelsAsPageItem", async () => {
    const initialResponse1 = await client
      .path("/azure/core/page/first-item")
      .get();

    if (isUnexpected(initialResponse1)) {
      const error = `Unexpected status code ${initialResponse1.status}`;
      assert.fail(error);
    }

    const iter1 = paginate(client, initialResponse1);
    let result1: FirstItemOutput[] = [];
    for await (const item of iter1) {
      result1.push(item);
    }
    assert.strictEqual(result1[0]?.id, 1);

    const initialResponse2 = await client
      .path("/azure/core/page/second-item")
      .get();

    if (isUnexpected(initialResponse2)) {
      const error = `Unexpected status code ${initialResponse2.status}`;
      assert.fail(error);
    }

    const iter2 = paginate(client, initialResponse2);
    let result2: SecondItemOutput[] = [];
    for await (const item of iter2) {
      result2.push(item);
    }
    assert.strictEqual(result2[0]?.name, "Madge");
  });

  it("should list core page withCustomPageModel", async () => {
    const initialResponse = await client
      .path("/azure/core/page/custom-page")
      .get();
    if (isUnexpected(initialResponse)) {
      const error = `Unexpected status code ${initialResponse.status}`;
      assert.fail(error);
    }

    const iter = paginate(client, initialResponse);
    let result: UserOutput[] = [];
    for await (const item of iter) {
      result.push(item);
    }
    assert.strictEqual(result.length, 1);
    assert.strictEqual(result[0]?.id, 1);
    assert.strictEqual(result[0]?.name, "Madge");
    assert.strictEqual(result[0]?.etag, "11bdc430-65e8-45ad-81d9-8ffa60d55b59");
  });

  it.skip("should list core page withParameterizedNextLink", async () => {
    // Expected query parameters on initial request: includePending=true, select=name
    // To Do: Implement the pagination logic to handle the next link with parameters
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
