import { assert } from "chai";
import EncodeBytesClientFactory, {
  BytesClient
} from "./generated/encode/bytes/src/index.js";
import { buildCsvCollection } from "./generated/encode/bytes/src/serializeHelper.js";
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
        const result = await client.path(`/encode/bytes/property/default`).post({
          body: {
            value: "dGVzdA=="
          }
        });
        assert.strictEqual(result.status, "200");
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
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should post bytes base64url encoding`, async () => {
      try {
        const result = await client.path(`/encode/bytes/property/base64url`).post({
          body: {
            value: "dGVzdA"
          }
        });
        assert.strictEqual(result.status, "200");
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
});