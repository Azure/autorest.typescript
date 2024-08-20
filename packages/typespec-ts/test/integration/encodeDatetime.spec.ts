import { assert } from "chai";
import EncodeDatetimeClientFactory, {
  DatetimeClient
} from "./generated/encode/datetime/src/index.js";
import { buildCsvCollection } from "./generated/encode/datetime/src/serializeHelper.js";
describe("EncodeDatetimeClient Rest Client", () => {
  let client: DatetimeClient;

  beforeEach(() => {
    client = EncodeDatetimeClientFactory({
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  describe("query", () => {
    it(`should get default query`, async () => {
      try {
        const result = await client.path(`/encode/datetime/query/default`).get({
          queryParameters: {
            value: "2022-08-26T18:38:00.000Z"
          }
        });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get rfc3339 query`, async () => {
      try {
        const result = await client.path(`/encode/datetime/query/rfc3339`).get({
          queryParameters: {
            value: "2022-08-26T18:38:00.000Z"
          }
        });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get rfc7231 query`, async () => {
      try {
        const result = await client.path(`/encode/datetime/query/rfc7231`).get({
          queryParameters: {
            value: "Fri, 26 Aug 2022 14:38:00 GMT"
          }
        });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get unix-timestamp query`, async () => {
      try {
        const result = await client
          .path(`/encode/datetime/query/unix-timestamp`)
          .get({
            queryParameters: {
              value: 1686566864
            },
            skipUrlEncoding: true
          });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get unix-timestamp-array query`, async () => {
      try {
        const result = await client
          .path(`/encode/datetime/query/unix-timestamp-array`)
          .get({
            queryParameters: {
              value: [1686566864, 1686734256]
            }
          });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });
  });

  describe("property", () => {
    it(`should post default property`, async () => {
      try {
        const result = await client
          .path(`/encode/datetime/property/default`)
          .post({
            body: {
              value: "2022-08-26T18:38:00.000Z"
            }
          });
        assert.strictEqual(result.status, "200");
        assert.strictEqual(result.body.value, "2022-08-26T18:38:00.000Z");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should post rfc3339 property`, async () => {
      try {
        const result = await client
          .path(`/encode/datetime/property/rfc3339`)
          .post({
            body: {
              value: "2022-08-26T18:38:00.000Z"
            }
          });
        assert.strictEqual(result.status, "200");
        assert.strictEqual(result.body.value, "2022-08-26T18:38:00.000Z");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should post rfc7231 property`, async () => {
      try {
        const result = await client
          .path(`/encode/datetime/property/rfc7231`)
          .post({
            body: {
              value: "Fri, 26 Aug 2022 14:38:00 GMT"
            }
          });
        assert.strictEqual(result.status, "200");
        assert.strictEqual(result.body.value, "Fri, 26 Aug 2022 14:38:00 GMT");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should post unix-timestamp property`, async () => {
      try {
        const result = await client
          .path(`/encode/datetime/property/unix-timestamp`)
          .post({
            body: {
              value: 1686566864
            }
          });
        assert.strictEqual(result.status, "200");
        assert.strictEqual(result.body.value, 1686566864);
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should post unix-timestamp-array property`, async () => {
      try {
        const result = await client
          .path(`/encode/datetime/property/unix-timestamp-array`)
          .post({
            body: {
              value: [1686566864, 1686734256]
            }
          });
        assert.strictEqual(result.status, "200");
        assert.deepEqual(result.body.value, [1686566864, 1686734256]);
      } catch (err) {
        assert.fail(err as string);
      }
    });
  });

  describe("header", () => {
    it(`should get default header`, async () => {
      try {
        const result = await client
          .path(`/encode/datetime/header/default`)
          .get({
            headers: {
              value: "Fri, 26 Aug 2022 14:38:00 GMT"
            }
          });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get rfc3339 header`, async () => {
      try {
        const result = await client
          .path(`/encode/datetime/header/rfc3339`)
          .get({
            headers: {
              value: "2022-08-26T18:38:00.000Z"
            }
          });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get rfc7231 header`, async () => {
      try {
        const result = await client
          .path(`/encode/datetime/header/rfc7231`)
          .get({
            headers: {
              value: "Fri, 26 Aug 2022 14:38:00 GMT"
            }
          });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get unix-timestamp header`, async () => {
      try {
        const result = await client
          .path(`/encode/datetime/header/unix-timestamp`)
          .get({
            headers: {
              value: 1686566864
            }
          });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get unix-timestamp-array header`, async () => {
      try {
        const result = await client
          .path(`/encode/datetime/header/unix-timestamp-array`)
          .get({
            headers: {
              value: buildCsvCollection([1686566864, 1686734256])
            }
          });
        assert.strictEqual(result.status, "204");
      } catch (err) {
        assert.fail(err as string);
      }
    });
  });

  describe("response header", () => {
    it(`should get default header`, async () => {
      try {
        const result = await client
          .path(`/encode/datetime/responseheader/default`)
          .get();
        assert.strictEqual(result.status, "204");
        assert.strictEqual(
          result.headers.value,
          "Fri, 26 Aug 2022 14:38:00 GMT"
        );
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get rfc3339 header`, async () => {
      try {
        const result = await client
          .path(`/encode/datetime/responseheader/rfc3339`)
          .get();
        assert.strictEqual(result.status, "204");
        assert.strictEqual(result.headers.value, "2022-08-26T18:38:00.000Z");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get rfc7231 header`, async () => {
      try {
        const result = await client
          .path(`/encode/datetime/responseheader/rfc7231`)
          .get();
        assert.strictEqual(result.status, "204");
        assert.strictEqual(
          result.headers.value,
          "Fri, 26 Aug 2022 14:38:00 GMT"
        );
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get unix-timestamp header`, async () => {
      try {
        const result = await client
          .path(`/encode/datetime/responseheader/unix-timestamp`)
          .get();
        assert.strictEqual(result.status, "204");
        assert.strictEqual(result.headers.value, "1686566864");
      } catch (err) {
        assert.fail(err as string);
      }
    });
  });
});
