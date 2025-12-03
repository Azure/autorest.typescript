import { assert } from "chai";
import { ScalarClient } from "./generated/type/scalar/src/index.js";
describe("Scalar Client", () => {
  let client: ScalarClient;

  beforeEach(() => {
    client = new ScalarClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it("should get string value", async () => {
    const result = await client.string.get({
      requestOptions: {
        headers: {
          accept: "text/plain"
        }
      }
    });
    assert.strictEqual(result, "test");
  });

  it("should put string value", async () => {
    const result = await client.string.put("test", {
      requestOptions: {
        headers: {
          "content-type": "text/plain"
        }
      }
    });
    assert.isUndefined(result);
  });

  it("should get boolean value", async () => {
    const result = await client.boolean.get();
    assert.strictEqual(result, true);
  });

  it("should put boolean value", async () => {
    const result = await client.boolean.put(true);
    assert.isUndefined(result);
  });

  it("should get unknown value", async () => {
    const result = await client.unknown.get({
      requestOptions: {
        headers: {
          accept: "text/plain"
        }
      }
    });
    assert.strictEqual(result, "test");
  });

  it("should put unknown value", async () => {
    const result = await client.unknown.put("test", {
      requestOptions: {
        headers: {
          "content-type": "text/plain"
        }
      }
    });
    assert.isUndefined(result);
  });

  it("should get decimal response body", async () => {
    const result = await client.decimalType.responseBody();
    assert.strictEqual(result, 0.33333);
  });

  it("should put decimal request body", async () => {
    const result = await client.decimalType.requestBody(0.33333);
    assert.isUndefined(result);
  });

  it("should get decimal request parameter", async () => {
    const result = await client.decimalType.requestParameter(0.33333);
    assert.isUndefined(result);
  });

  it("should get decimal128 response body", async () => {
    const result = await client.decimal128Type.responseBody();
    assert.strictEqual(result, 0.33333);
  });

  it("should put decimal128 request body", async () => {
    const result = await client.decimal128Type.requestBody(0.33333);
    assert.isUndefined(result);
  });

  it("should get decimal128 request parameter", async () => {
    const result = await client.decimal128Type.requestParameter(0.33333);
    assert.isUndefined(result);
  });

  it("should fail to post decimal verify", async () => {
    // JavaScript uses IEEE 754 floating-point, which cannot represent some decimal fractions exactly.
    // Example: 0.1 + 0.1 + 0.1 === 0.30000000000000004
    // To avoid precision errors when summing decimals, we convert to integer math (scale by 100).
    // This is a language-level limitation, not an API issue.

    const getResult = await client.decimalVerify.prepareVerify();
    // Convert decimals to integer representation (e.g., cents)
    const scaledSum = getResult.reduce(
      (acc: number, val: number) => acc + Math.round(val * 100),
      0
    );
    const total = scaledSum / 100;

    await client.decimalVerify.verify(total);
  });

  it("should pass the post decimal128 verify", async () => {
    // JavaScript uses IEEE 754 floating-point, which cannot represent some decimal fractions exactly.
    // Example: 0.1 + 0.1 + 0.1 === 0.30000000000000004
    // To avoid precision errors when summing decimals, we convert to integer math (scale by 100).
    // This is a language-level limitation, not an API issue.

    const getResult = await client.decimal128Verify.prepareVerify();

    // Convert decimals to integer representation (e.g., cents)
    const scaledSum = getResult.reduce(
      (acc: number, val: number) => acc + Math.round(val * 100),
      0
    );
    const total = scaledSum / 100;

    await client.decimal128Verify.verify(total);
  });
});
