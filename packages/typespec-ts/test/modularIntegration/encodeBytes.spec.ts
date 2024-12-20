import { assert } from "chai";
import { BytesClient } from "./generated/encode/bytes/src/index.js";
import { stringToUint8Array, uint8ArrayToString } from "@azure/core-util";
import { readFileSync } from "fs";
import { resolve } from "path";
// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

const port = process.env["PORT"] || "3000";
describe("EncodeBytesClient Modular Client", () => {
  let client: BytesClient;

  beforeEach(() => {
    client = new BytesClient({
      endpoint: `http://localhost:${port}`,
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  describe("query", () => {
    it(`should get bytes`, async () => {
      const result = await client.query.default(
        stringToUint8Array("dGVzdA==", "base64")
      );
      assert.isUndefined(result);
    });

    it(`should get bytes base64 encoding`, async () => {
      const result = await client.query.base64(
        stringToUint8Array("dGVzdA==", "base64")
      );
      assert.isUndefined(result);
    });

    it(`should get bytes base64url encoding`, async () => {
      const result = await client.query.base64url(
        stringToUint8Array("dGVzdA", "base64url")
      );
      assert.isUndefined(result);
    });

    it(`should get bytes base64url-array`, async () => {
      const result = await client.query.base64urlArray([
        stringToUint8Array("dGVzdA", "base64url"),
        stringToUint8Array("dGVzdA", "base64url")
      ]);
      assert.isUndefined(result);
    });
  });

  describe("property", () => {
    it(`should post bytes`, async () => {
      const result = await client.property.default({
        value: stringToUint8Array("dGVzdA==", "base64")
      });
      assert.deepEqual(
        result.value,
        stringToUint8Array("dGVzdA==", "base64")
      );
    });

    it(`should post bytes base64 encoding`, async () => {
      const result = await client.property.base64({
        value: stringToUint8Array("dGVzdA==", "base64")
      });
      assert.deepEqual(
        result.value,
        stringToUint8Array("dGVzdA==", "base64")
      );
    });

    it(`should post bytes base64url encoding`, async () => {
      const result = await client.property.base64url({
        value: stringToUint8Array("dGVzdA", "base64url")
      });
      assert.deepEqual(
        uint8ArrayToString(result.value, "base64url"),
        "dGVzdA"
      );
    });

    it(`should post bytes base64url array`, async () => {
      const result = await client.property.base64urlArray({
        value: [
          stringToUint8Array("dGVzdA", "base64url"),
          stringToUint8Array("dGVzdA", "base64url")
        ]
      });
      assert.deepEqual(result.value, [
        stringToUint8Array("dGVzdA", "base64url"),
        stringToUint8Array("dGVzdA", "base64url")
      ]);
    });
  });

  describe("header", () => {
    it(`should get bytes`, async () => {
      const result = await client.header.default(
        stringToUint8Array("dGVzdA==", "base64")
      );
      assert.isUndefined(result);
    });

    it(`should get bytes base64 encoding`, async () => {
      const result = await client.header.base64(
        stringToUint8Array("dGVzdA==", "base64")
      );
      assert.isUndefined(result);
    });

    it(`should get bytes base64url encoding`, async () => {
      const result = await client.header.base64url(
        stringToUint8Array("dGVzdA", "base64url")
      );
      assert.isUndefined(result);
    });

    it(`should get bytes  base64url-array`, async () => {
      const result = await client.header.base64urlArray([
        stringToUint8Array("dGVzdA", "base64url"),
        stringToUint8Array("dGVzdA", "base64url")
      ]);
      assert.isUndefined(result);
    });
  });

  describe("request body", () => {
    const pngFile = readFileSync(
      resolve("../../packages/typespec-ts/temp/assets/image.png")
    );
    it(`should post bytes`, async () => {
      try {
        const result = await client.requestBody.default(
          stringToUint8Array("dGVzdA==", "base64"),
          {
            requestOptions: { headers: { "content-type": "application/json" } }
          }
        );
        assert.isUndefined(result);
      } catch (err) {
        console.log(JSON.stringify(err));
        assert.fail(err as string);
      }
    });

    it(`should post bytes base64 encoding`, async () => {
      const result = await client.requestBody.base64(
        stringToUint8Array("dGVzdA==", "base64"),
        {
          requestOptions: { headers: { "content-type": "application/json" } }
        }
      );
      assert.isUndefined(result);
    });

    it(`should post bytes base64url encoding`, async () => {
      const result = await client.requestBody.base64url(
        stringToUint8Array("dGVzdA", "base64url"),
        {
          requestOptions: { headers: { "content-type": "application/json" } }
        }
      );
      assert.isUndefined(result);
    });

    it(`should post bytes with custom content type`, async () => {
      const result = await client.requestBody.customContentType(pngFile, {
        contentType: "image/png"
      });
      assert.isUndefined(result);
    }).timeout(10000);

    it(`should post bytes with custom content type`, async () => {
      const result = await client.requestBody.octetStream(pngFile, {
        contentType: "application/octet-stream"
      });
      assert.isUndefined(result);
    });
  });

  describe("response body", () => {
    const pngFile = readFileSync(
      resolve("../../packages/typespec-ts/temp/assets/image.png")
    ).toString("utf-8");
    it(`should get bytes with base64 encoding by default`, async () => {
      const result = await client.responseBody.default();
      assert.strictEqual(uint8ArrayToString(result, "base64"), "dGVzdA==");
    });

    it(`should get bytes base64 encoding`, async () => {
      const result = await client.responseBody.base64();
      assert.strictEqual(uint8ArrayToString(result, "base64"), "dGVzdA==");
    });

    it(`should get bytes base64url encoding`, async () => {
      const result = await client.responseBody.base64url();
      assert.strictEqual(uint8ArrayToString(result, "base64url"), "dGVzdA");
    });

    it(`should get bytes with custom content type`, async () => {
      const result = await client.responseBody.customContentType({
        onResponse: (res) => {
          res.headers.get("content-type") === "image/png";
        }
      });
      assert.strictEqual(uint8ArrayToString(result, "utf-8"), pngFile);
    });

    it(`should get bytes with octet-stream content type`, async () => {
      const result = await client.responseBody.octetStream({
        onResponse: (res) => {
          res.headers.get("content-type") === "application/octet-stream";
        }
      });
      assert.strictEqual(uint8ArrayToString(result, "utf-8"), pngFile);
    });
  });
});
