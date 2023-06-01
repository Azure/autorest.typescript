import { assert } from "chai";
import EncodeDurationClientFactory, {
  EncodeDurationClient
} from "./generated/encode/src/index.js";
describe("EncodeDurationClient Rest Client", () => {
  let client: EncodeDurationClient;

  beforeEach(() => {
    client = EncodeDurationClientFactory({
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  describe("property", () => {
    it(`should post default property`, async () => {
      try {
        const result = await client
          .path(`/encode/duration/property/default`)
          .post({
            body: {
              value: "P40D"
            }
          });
        assert.strictEqual(result.status, "200");
        assert.strictEqual(result.body.value, "P40D");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should post float-seconds property`, async () => {
      try {
        const result = await client
          .path(`/encode/duration/property/float-seconds`)
          .post({
            body: {
              value: 35.621
            }
          });
        assert.strictEqual(result.status, "200");
        assert.strictEqual(result.body.value, 35.621);
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should post int32-seconds property`, async () => {
      try {
        const result = await client
          .path(`/encode/duration/property/int32-seconds`)
          .post({
            body: {
              value: 36
            }
          });
        assert.strictEqual(result.status, "200");
        assert.strictEqual(result.body.value, 36);
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should post iso8601 property`, async () => {
      try {
        const result = await client
          .path(`/encode/duration/property/iso8601`)
          .post({
            body: {
              value: "P40D"
            }
          });
        assert.strictEqual(result.status, "200");
        assert.strictEqual(result.body.value, "P40D");
      } catch (err) {
        assert.fail(err as string);
      }
    });
  });

  describe("query", () => {
    it(`should get default query`, async () => {
      try {
        const result = await client.path(`/encode/duration/query/default`).get({
          queryParameters: {
            input: "P40D"
          }
        });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get iso8601 query`, async () => {
      try {
        const result = await client.path(`/encode/duration/query/iso8601`).get({
          queryParameters: {
            input: "P40D"
          }
        });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get int32-seconds query`, async () => {
      try {
        const result = await client
          .path(`/encode/duration/query/int32-seconds`)
          .get({
            queryParameters: {
              input: 36
            }
          });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get float-seconds query`, async () => {
      try {
        const result = await client
          .path(`/encode/duration/query/float-seconds`)
          .get({
            queryParameters: {
              input: 35.621
            }
          });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });
  });
});
