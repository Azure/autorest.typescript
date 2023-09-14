import { assert } from "chai";
import { BytesClient } from "./generated/encode/bytes/src/index";
import { stringToUint8Array } from "@azure/core-util";
describe("EncodeBytesClient Rest Client", () => {
  let client: BytesClient;

  beforeEach(() => {
    client = new BytesClient({
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
        const result = await client.property.default(
          stringToUint8Array("dGVzdA==", "base64")
        );
        assert.deepEqual(result.value, stringToUint8Array("dGVzdA==", "base64"));
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should post bytes base64 encoding`, async () => {
      try {
        const result = await client.property.base64(
          stringToUint8Array("dGVzdA==", "base64")
        );
        assert.deepEqual(result.value, stringToUint8Array("dGVzdA==", "base64"));
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should post bytes base64url encoding`, async () => {
      try {
        const result = await client.property.base64url(
          stringToUint8Array("dGVzdA", "base64url")
        );
        assert.deepEqual(result.value, stringToUint8Array("dGVzdA", "base64url"));
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should post bytes base64url array`, async () => {
      try {
        const result = await client.property.base64urlArray([
          stringToUint8Array("dGVzdA", "base64url"),
          stringToUint8Array("dGVzdA", "base64url")
        ]);
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
});
