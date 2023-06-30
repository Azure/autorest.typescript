import { assert } from "chai";
import EncodeDurationClientFactory, {
  DurationClient
} from "./generated/encode/duration/src/index.js";
import { buildCsvCollection } from "./generated/encode/duration/src/serializeHelper.js";
describe("EncodeDurationClient Rest Client", () => {
  let client: DurationClient;

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

    it(`should post float-seconds-array property`, async () => {
      try {
        const result = await client
          .path(`/encode/duration/property/float-seconds-array`)
          .post({
            body: {
              value: [35.621, 46.781]
            }
          });
        assert.strictEqual(result.status, "200");
        assert.deepEqual(result.body.value, [35.621, 46.781]);
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

    it(`should get int32-seconds-array query`, async () => {
      try {
        const result = await client
          .path(`/encode/duration/query/int32-seconds-array`)
          .get({
            queryParameters: {
              input: [36, 47]
            },
            skipUrlEncoding: true
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

  describe("header", () => {
    it(`should get default header`, async () => {
      try {
        const result = await client
          .path(`/encode/duration/header/default`)
          .get({
            headers: {
              duration: "P40D"
            }
          });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get iso8601 header`, async () => {
      try {
        const result = await client
          .path(`/encode/duration/header/iso8601`)
          .get({
            headers: {
              duration: "P40D"
            }
          });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get iso8601-array header`, async () => {
      try {
        const result = await client
          .path(`/encode/duration/header/iso8601-array`)
          .get({
            headers: {
              duration: buildCsvCollection(["P40D", "P50D"])
            }
          });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get int32-seconds header`, async () => {
      try {
        const result = await client
          .path(`/encode/duration/header/int32-seconds`)
          .get({
            headers: {
              duration: 36
            }
          });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get float-seconds header`, async () => {
      try {
        const result = await client
          .path(`/encode/duration/header/float-seconds`)
          .get({
            headers: {
              duration: 35.621
            }
          });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });
  });
});
