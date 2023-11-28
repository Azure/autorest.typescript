import { assert } from "chai";
import EncodeBytesClientFactory, {
  BytesClient
} from "./generated/encode/bytes/src/index.js";
import { buildCsvCollection } from "./generated/encode/bytes/src/serializeHelper.js";
import { readFileSync } from "fs";
import { resolve } from "path";

describe("EncodeDatetimeClient Rest Client", () => {
  let client: BytesClient;
  beforeEach(() => {
    client = EncodeBytesClientFactory({
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  describe("query", () => {
    it(`should get bytes`, async () => {
      try {
        const result = await client.path(`/encode/bytes/query/default`).get({
          queryParameters: {
            value: "dGVzdA=="
          }
        });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get bytes base64 encoding`, async () => {
      try {
        const result = await client.path(`/encode/bytes/query/base64`).get({
          queryParameters: {
            value: "dGVzdA=="
          }
        });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get bytes base64url encoding`, async () => {
      try {
        const result = await client.path(`/encode/bytes/query/base64url`).get({
          queryParameters: {
            value: "dGVzdA"
          }
        });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get bytes base64url-array`, async () => {
      try {
        const result = await client
          .path(`/encode/bytes/query/base64url-array`)
          .get({
            queryParameters: {
              value: ["dGVzdA", "dGVzdA"]
            }
          });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });
  });

  describe("property", () => {
    it(`should post bytes`, async () => {
      try {
        const result = await client
          .path(`/encode/bytes/property/default`)
          .post({
            body: {
              value: "dGVzdA=="
            }
          });
        assert.strictEqual(result.status, "200");
        assert.strictEqual(result.body.value, "dGVzdA==");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should post bytes base64 encoding`, async () => {
      try {
        const result = await client.path(`/encode/bytes/property/base64`).post({
          body: {
            value: "dGVzdA=="
          }
        });
        assert.strictEqual(result.status, "200");
        assert.strictEqual(result.body.value, "dGVzdA==");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should post bytes base64url encoding`, async () => {
      try {
        const result = await client
          .path(`/encode/bytes/property/base64url`)
          .post({
            body: {
              value: "dGVzdA"
            }
          });
        assert.strictEqual(result.status, "200");
        assert.strictEqual(result.body.value, "dGVzdA");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should post bytes base64url array`, async () => {
      try {
        const result = await client
          .path(`/encode/bytes/property/base64url-array`)
          .post({
            body: {
              value: ["dGVzdA", "dGVzdA"]
            }
          });
        assert.strictEqual(result.status, "200");
        assert.deepEqual(result.body.value, ["dGVzdA", "dGVzdA"]);
      } catch (err) {
        assert.fail(err as string);
      }
    });
  });

  describe("header", () => {
    it(`should get bytes`, async () => {
      try {
        const result = await client.path(`/encode/bytes/header/default`).get({
          headers: {
            value: "dGVzdA=="
          }
        });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get bytes base64 encoding`, async () => {
      try {
        const result = await client.path(`/encode/bytes/header/base64`).get({
          headers: {
            value: "dGVzdA=="
          }
        });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get bytes base64url encoding`, async () => {
      try {
        const result = await client.path(`/encode/bytes/header/base64url`).get({
          headers: {
            value: "dGVzdA"
          }
        });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get bytes  base64url-array`, async () => {
      try {
        const result = await client
          .path(`/encode/bytes/header/base64url-array`)
          .get({
            headers: {
              value: buildCsvCollection(["dGVzdA", "dGVzdA"])
            }
          });
        assert.strictEqual(result.status, "204");
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
        const result = await client
          .path(`/encode/bytes/body/request/default`)
          .post({
            contentType: "application/json",
            body: "dGVzdA=="
          });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should post bytes base64 encoding`, async () => {
      try {
        const result = await client
          .path(`/encode/bytes/body/request/base64`)
          .post({
            contentType: "application/json",
            body: "dGVzdA=="
          });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should post bytes base64url encoding`, async () => {
      try {
        const result = await client
          .path(`/encode/bytes/body/request/base64url`)
          .post({
            contentType: "application/json",
            body: "dGVzdA"
          });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should post bytes with custom content type`, async () => {
      try {
        const result = await client
          .path(`/encode/bytes/body/request/custom-content-type`)
          .post({
            contentType: "image/png",
            body: pngFile
          });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    }).timeout(10000);

    it(`should post bytes with octet-stream content type`, async () => {
      try {
        const result = await client
          .path(`/encode/bytes/body/request/octet-stream`)
          .post({
            contentType: "application/octet-stream",
            body: pngFile
          });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });
  });

  describe("response body", () => {
    const pngFile = readFileSync(
      resolve("../../packages/typespec-ts/temp/assets/image.png")
    );
    it(`should get bytes with base64 encoding by default`, async () => {
      try {
        const result = await client
          .path(`/encode/bytes/body/response/default`)
          .get();
        assert.strictEqual(result.status, "200");
        assert.strictEqual(result.body, "dGVzdA==");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get bytes base64 encoding`, async () => {
      try {
        const result = await client
          .path(`/encode/bytes/body/response/base64`)
          .get();
        assert.strictEqual(result.status, "200");
        assert.strictEqual(result.body, "dGVzdA==");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get bytes base64url encoding`, async () => {
      try {
        const result = await client
          .path(`/encode/bytes/body/response/base64url`)
          .get();
        assert.strictEqual(result.status, "200");
        assert.strictEqual(result.body, "dGVzdA");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get bytes with custom content type`, async () => {
      try {
        const result = await client
          .path(`/encode/bytes/body/response/custom-content-type`)
          .get({
            contentType: "image/png"
          });
        assert.strictEqual(result.status, "200");
        assert.strictEqual(Buffer.from(result.body), pngFile);
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get bytes with octet-stream content type`, async () => {
      try {
        const result = await client
          .path(`/encode/bytes/body/response/octet-stream`)
          .get({
            contentType: "application/octet-stream"
          });
        assert.strictEqual(result.status, "200");
        assert.strictEqual(Buffer.from(result.body), pngFile);
      } catch (err) {
        assert.fail(err as string);
      }
    });
  });
});
