import { assert } from "chai";
import { ScalarClient } from "./generated/scalar/src/index.js";
describe("Scalar Client", () => {
  let client: ScalarClient;

  beforeEach(() => {
    client = new ScalarClient({
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it("should get string value", async () => {
    try {
      const result = await client.string.get();
      assert.strictEqual(result, "test");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put string value", async () => {
    try {
      const result = await client.string.put(JSON.stringify("test"));
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get boolean value", async () => {
    try {
      const result = await client.boolean.get();
      assert.strictEqual(result, true);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put boolean value", async () => {
    try {
      const result = await client.boolean.put(true);
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get unknown value", async () => {
    try {
      const result = await client.unknown.get();
      assert.strictEqual(result, "test");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put unknown value", async () => {
    try {
      const result = await client.unknown.put(JSON.stringify("test"));
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get decimal response body", async () => {
    try {
      const result = await client.decimalType.responseBody();
      assert.strictEqual(result, 0.33333);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put decimal request body", async () => {
    try {
      const result = await client.decimalType.requestBody(0.33333);
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get decimal request parameter", async () => {
    try {
      const result = await client.decimalType.requestParameter(0.33333);
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get decimal128 response body", async () => {
    try {
      const result = await client.decimal128Type.responseBody();
      assert.strictEqual(result, 0.33333);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should put decimal128 request body", async () => {
    try {
      const result = await client.decimal128Type.requestBody(0.33333);
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get decimal128 request parameter", async () => {
    try {
      const result = await client.decimal128Type.requestParameter(0.33333);
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get decima prepare_verify and post decimal verify", async () => {
    try {
      const getResult = await client.decimalVerify.prepareVerify();
      const result = await client.decimalVerify.verify(0.3);
      assert.deepEqual(getResult, [ 0.1, 0.1, 0.1 ]);
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get decimal128 prepare_verify and post decimal128 verify", async () => {
    try {
      const getResult = await client.decimal128Verify.prepareVerify();
      const result = await client.decimal128Verify.verify(0.3);
      assert.deepEqual(getResult, [ 0.1, 0.1, 0.1 ]);
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });
});

