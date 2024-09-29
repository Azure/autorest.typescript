import { assert } from "chai";
import { BytesClient } from "./generated/encode/bytes/src/index.js";
import { stringToUint8Array, uint8ArrayToString } from "@azure/core-util";
import { readFileSync } from "fs";
import { resolve } from "path";
describe("EncodeBytesClient Modular Client", () => {
  let client: BytesClient;

  beforeEach(() => {
    client = new BytesClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  describe("query", () => {
    it(`should get bytes`, async () => {
      try {
        const result = await client.query.default(
          stringToUint8Array("dGVzdA==", "base64")
        );
        assert.isUndefined(result);
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get bytes base64 encoding`, async () => {
      try {
        const result = await client.query.base64(
          stringToUint8Array("dGVzdA==", "base64")
        );
        assert.isUndefined(result);
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get bytes base64url encoding`, async () => {
      try {
        const result = await client.query.base64url(
          stringToUint8Array("dGVzdA", "base64url")
        );
        assert.isUndefined(result);
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get bytes base64url-array`, async () => {
      try {
        const result = await client.query.base64urlArray([
          stringToUint8Array("dGVzdA", "base64url"),
          stringToUint8Array("dGVzdA", "base64url")
        ]);
        assert.isUndefined(result);
      } catch (err) {
        assert.fail(err as string);
      }
    });
  });

  describe("property", () => {
    it(`should post bytes`, async () => {
      try {
        const result = await client.property.default({
          value: stringToUint8Array("dGVzdA==", "base64")
        });
        assert.deepEqual(
          result.value,
          stringToUint8Array("dGVzdA==", "base64")
        );
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should post bytes base64 encoding`, async () => {
      try {
        const result = await client.property.base64({
          value: stringToUint8Array("dGVzdA==", "base64")
        });
        assert.deepEqual(
          result.value,
          stringToUint8Array("dGVzdA==", "base64")
        );
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should post bytes base64url encoding`, async () => {
      try {
        const result = await client.property.base64url({
          value: stringToUint8Array("dGVzdA", "base64url")
        });
        assert.deepEqual(
          uint8ArrayToString(result.value, "base64url"),
          "dGVzdA"
        );
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should post bytes base64url array`, async () => {
      try {
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
      } catch (err) {
        assert.fail(err as string);
      }
    });
  });

  describe("header", () => {
    it(`should get bytes`, async () => {
      try {
        const result = await client.header.default(
          stringToUint8Array("dGVzdA==", "base64")
        );
        assert.isUndefined(result);
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get bytes base64 encoding`, async () => {
      try {
        const result = await client.header.base64(
          stringToUint8Array("dGVzdA==", "base64")
        );
        assert.isUndefined(result);
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get bytes base64url encoding`, async () => {
      try {
        const result = await client.header.base64url(
          stringToUint8Array("dGVzdA", "base64url")
        );
        assert.isUndefined(result);
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get bytes  base64url-array`, async () => {
      try {
        const result = await client.header.base64urlArray([
          stringToUint8Array("dGVzdA", "base64url"),
          stringToUint8Array("dGVzdA", "base64url")
        ]);
        assert.isUndefined(result);
      } catch (err) {
        assert.fail(err as string);
      }
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
      try {
        const result = await client.requestBody.base64(
          stringToUint8Array("dGVzdA==", "base64"),
          {
            requestOptions: { headers: { "content-type": "application/json" } }
          }
        );
        assert.isUndefined(result);
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should post bytes base64url encoding`, async () => {
      try {
        const result = await client.requestBody.base64url(
          stringToUint8Array("dGVzdA", "base64url"),
          {
            requestOptions: { headers: { "content-type": "application/json" } }
          }
        );
        assert.isUndefined(result);
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should post bytes with custom content type`, async () => {
      try {
        const result = await client.requestBody.customContentType(pngFile, {
          contentType: "image/png"
        });
        assert.isUndefined(result);
      } catch (err) {
        assert.fail(err as string);
      }
    }).timeout(10000);

    it(`should post bytes with custom content type`, async () => {
      try {
        const result = await client.requestBody.octetStream(pngFile, {
          contentType: "application/octet-stream"
        });
        assert.isUndefined(result);
      } catch (err) {
        assert.fail(err as string);
      }
    });
  });

  describe("response body", () => {
    const pngFile = readFileSync(
      resolve("../../packages/typespec-ts/temp/assets/image.png")
    ).toString("utf-8");
    it(`should get bytes with base64 encoding by default`, async () => {
      try {
        const result = await client.responseBody.default();
        assert.strictEqual(uint8ArrayToString(result, "base64"), "dGVzdA==");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get bytes base64 encoding`, async () => {
      try {
        const result = await client.responseBody.base64();
        assert.strictEqual(uint8ArrayToString(result, "base64"), "dGVzdA==");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get bytes base64url encoding`, async () => {
      try {
        const result = await client.responseBody.base64url();
        assert.strictEqual(uint8ArrayToString(result, "base64url"), "dGVzdA");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get bytes with custom content type`, async () => {
      try {
        const result = await client.responseBody.customContentType({
          onResponse: (res) => {
            res.headers.get("content-type") === "image/png";
          }
        });
        assert.strictEqual(uint8ArrayToString(result, "utf-8"), pngFile);
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get bytes with octet-stream content type`, async () => {
      try {
        const result = await client.responseBody.octetStream({
          onResponse: (res) => {
            res.headers.get("content-type") === "application/octet-stream";
          }
        });
        assert.strictEqual(uint8ArrayToString(result, "utf-8"), pngFile);
      } catch (err) {
        assert.fail(err as string);
      }
    });
  });
});
