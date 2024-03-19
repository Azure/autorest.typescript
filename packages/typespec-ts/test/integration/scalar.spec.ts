import { assert } from "chai";
import ScalarClientFactory, {
  ScalarClient
} from "./generated/scalar/src/index.js";

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
    try {
      const result = await client.path("/type/scalar/string").get();
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body, "test");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put string value", async () => {
    try {
      const result = await client
        .path("/type/scalar/string")
        .put({ body: "test", headers: { "content-type": "text/plain" } });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get boolean value", async () => {
    try {
      const result = await client.path("/type/scalar/boolean").get();
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body, true);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put boolean value", async () => {
    try {
      const result = await client
        .path("/type/scalar/boolean")
        .put({ body: true });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get unknown value", async () => {
    try {
      const result = await client.path("/type/scalar/unknown").get();
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body, "test");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put unknown value", async () => {
    try {
      const result = await client
        .path("/type/scalar/unknown")
        .put({ body: "test", headers: { "content-type": "text/plain" } });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get decimal response body", async () => {
    try {
      const result = await client
        .path("/type/scalar/decimal/response_body")
        .get();
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body, 0.33333);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put decimal request body", async () => {
    try {
      const result = await client
        .path("/type/scalar/decimal/resquest_body")
        .put({ body: 0.33333 });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get decimal request parameter", async () => {
    try {
      const result = await client
        .path("/type/scalar/decimal/request_parameter")
        .get({ queryParameters: { value: 0.33333 } });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get decimal128 response body", async () => {
    try {
      const result = await client
        .path("/type/scalar/decimal128/response_body")
        .get();
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body, 0.33333);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put decimal128 request body", async () => {
    try {
      const result = await client
        .path("/type/scalar/decimal128/resquest_body")
        .put({ body: 0.33333 });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get decimal128 request parameter", async () => {
    try {
      const result = await client
        .path("/type/scalar/decimal128/request_parameter")
        .get({ queryParameters: { value: 0.33333 } });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should fail to post decimal verify", async () => {
    try {
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
        .post({ body: total });
      assert.strictEqual(result.status, "400");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should fail to post decimal128 verify", async () => {
    try {
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
        .post({ body: total });
      assert.strictEqual(result.status, "400");
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
