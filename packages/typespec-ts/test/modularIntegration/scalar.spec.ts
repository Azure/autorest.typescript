import { assert } from "chai";
import { ScalarClient } from "./generated/type/scalar/src/index.js";
// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

const port = process.env["PORT"] || "3000";
describe("Scalar Client", () => {
  let client: ScalarClient;

  beforeEach(() => {
    client = new ScalarClient({
      endpoint: `http://localhost:${port}`,
      allowInsecureConnection: true
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
    try {
      const getResult = await client.decimalVerify.prepareVerify();
      let total = 0;
      getResult.forEach((decimal: number) => {
        total += decimal;
      });
      await client.decimalVerify.verify(total);
      assert.fail("Expected an exception to be thrown.");
    } catch (err) {
      assert.strictEqual(JSON.parse(JSON.stringify(err)).statusCode, 400);
    }
  });

  it("should fail to post decimal128 verify", async () => {
    try {
      const getResult = await client.decimal128Verify.prepareVerify();
      let total = 0;
      getResult.forEach((decimal: number) => {
        total += decimal;
      });
      await client.decimal128Verify.verify(total);
      assert.fail("Expected an exception to be thrown.");
    } catch (err) {
      assert.strictEqual(JSON.parse(JSON.stringify(err)).statusCode, 400);
    }
  });
});
