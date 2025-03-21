import { assert } from "chai";
import ScalarClientFactory, {
  ScalarClient
} from "./generated/type/scalar/src/index.js";

describe("Scalar Client", () => {
  let client: ScalarClient;

  beforeEach(() => {
    client = ScalarClientFactory({
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it("should get string value", async () => {
    const result = await client.path("/type/scalar/string").get();
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body, "test");
  });

  it("should put string value", async () => {
    const result = await client
      .path("/type/scalar/string")
      .put({ contentType: "application/json", body: "test" });
    assert.strictEqual(result.status, "204");
  });

  it("should get boolean value", async () => {
    const result = await client.path("/type/scalar/boolean").get();
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body, true);
  });

  it("should put boolean value", async () => {
    const result = await client
      .path("/type/scalar/boolean")
      .put({ contentType: "application/json", body: true });
    assert.strictEqual(result.status, "204");
  });

  it("should get unknown value", async () => {
    const result = await client.path("/type/scalar/unknown").get();
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body, "test");
  });

  it("should put unknown value", async () => {
    const result = await client
      .path("/type/scalar/unknown")
      .put({ contentType: "application/json", body: "test" });
    assert.strictEqual(result.status, "204");
  });

  it("should get decimal response body", async () => {
    const result = await client
      .path("/type/scalar/decimal/response_body")
      .get();
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body, 0.33333);
  });

  it("should put decimal request body", async () => {
    const result = await client
      .path("/type/scalar/decimal/resquest_body")
      .put({ contentType: "application/json", body: 0.33333 });
    assert.strictEqual(result.status, "204");
  });

  it("should get decimal request parameter", async () => {
    const result = await client
      .path("/type/scalar/decimal/request_parameter")
      .get({ queryParameters: { value: 0.33333 } });
    assert.strictEqual(result.status, "204");
  });

  it("should get decimal128 response body", async () => {
    const result = await client
      .path("/type/scalar/decimal128/response_body")
      .get();
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body, 0.33333);
  });

  it("should put decimal128 request body", async () => {
    const result = await client
      .path("/type/scalar/decimal128/resquest_body")
      .put({ contentType: "application/json", body: 0.33333 });
    assert.strictEqual(result.status, "204");
  });

  it("should get decimal128 request parameter", async () => {
    const result = await client
      .path("/type/scalar/decimal128/request_parameter")
      .get({ queryParameters: { value: 0.33333 } });
    assert.strictEqual(result.status, "204");
  });

  it("should fail to post decimal verify", async () => {
    // prepare the verification
    const getResult = await client
      .path("/type/scalar/decimal/prepare_verify")
      .get();
    // do any calculation based on numbers
    let total = 0;
    getResult.body.forEach((decimal: number) => {
      total += decimal;
    });
    const result = await client
      .path("/type/scalar/decimal/verify")
      .post({ contentType: "application/json", body: total });
    assert.strictEqual(result.status, "400");
  });

  it("should fail to post decimal128 verify", async () => {
    const getResult = await client
      .path("/type/scalar/decimal128/prepare_verify")
      .get();
    // do any calculation based on numbers
    let total = 0;
    getResult.body.forEach((decimal: number) => {
      total += decimal;
    });
    const result = await client
      .path("/type/scalar/decimal128/verify")
      .post({ contentType: "application/json", body: total });
    assert.strictEqual(result.status, "400");
  });
});
