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
      const result = await client.query.base64Url(
        stringToUint8Array("dGVzdA", "base64url")
      );
      assert.isUndefined(result);
    });

    it(`should get bytes base64url-array`, async () => {
      const result = await client.query.base64UrlArray([
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
      assert.deepEqual(result.value, stringToUint8Array("dGVzdA==", "base64"));
    });

    it(`should post bytes base64 encoding`, async () => {
      const result = await client.property.base64({
        value: stringToUint8Array("dGVzdA==", "base64")
      });
      assert.deepEqual(result.value, stringToUint8Array("dGVzdA==", "base64"));
    });

    it(`should post bytes base64url encoding`, async () => {
      const result = await client.property.base64Url({
        value: stringToUint8Array("dGVzdA", "base64url")
      });
      assert.deepEqual(uint8ArrayToString(result.value, "base64url"), "dGVzdA");
    });

    it(`should post bytes base64url array`, async () => {
      const result = await client.property.base64UrlArray({
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
      const result = await client.header.base64Url(
        stringToUint8Array("dGVzdA", "base64url")
      );
      assert.isUndefined(result);
    });

    it(`should get bytes  base64url-array`, async () => {
      const result = await client.header.base64UrlArray([
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
        const result = await client.requestBody.default(pngFile);
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
      const result = await client.requestBody.base64Url(
        stringToUint8Array("dGVzdA", "base64url"),
        {
          requestOptions: { headers: { "content-type": "application/json" } }
        }
      );
      assert.isUndefined(result);
    });

    it(`should post bytes with custom content type`, async () => {
      const result = await client.requestBody.customContentType(pngFile);
      assert.isUndefined(result);
    }).timeout(10000);

    it(`should post bytes with custom content type`, async () => {
      const result = await client.requestBody.octetStream(pngFile);
      assert.isUndefined(result);
    });
  });

  describe("response body", () => {
    const pngFile = readFileSync(
      resolve("../../packages/typespec-ts/temp/assets/image.png")
    );
    it(`should get bytes with base64 encoding by default`, async () => {
      const result = await client.responseBody.default({
        onResponse: (res) => {
          res.headers.get("content-type") === "application/octet-stream";
        }
      });
      assert.sameMembers([...result], [...pngFile]);
    });

    it(`should get bytes base64 encoding`, async () => {
      const result = await client.responseBody.base64();
      assert.strictEqual(uint8ArrayToString(result, "base64"), "dGVzdA==");
    });

    it(`should get bytes base64url encoding`, async () => {
      const result = await client.responseBody.base64Url();
      assert.strictEqual(uint8ArrayToString(result, "base64url"), "dGVzdA");
    });

    it(`should get bytes with custom content type`, async () => {
      const result = await client.responseBody.customContentType({
        onResponse: (res) => {
          res.headers.get("content-type") === "image/png";
        }
      });
      assert.sameMembers([...result], [...pngFile]);
    });

    it(`should get bytes with octet-stream content type`, async () => {
      const result = await client.responseBody.octetStream({
        onResponse: (res) => {
          res.headers.get("content-type") === "application/octet-stream";
        }
      });
      assert.sameMembers([...result], [...pngFile]);
    });
  });
});
