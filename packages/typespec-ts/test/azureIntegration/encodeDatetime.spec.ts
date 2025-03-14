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
      const result = await client.path(`/encode/datetime/query/default`).get({
        queryParameters: {
          value: "2022-08-26T18:38:00.000Z"
        }
      });
      assert.strictEqual(result.status, "204");
    });

    it(`should get rfc3339 query`, async () => {
      const result = await client.path(`/encode/datetime/query/rfc3339`).get({
        queryParameters: {
          value: "2022-08-26T18:38:00.000Z"
        }
      });
      assert.strictEqual(result.status, "204");
    });

    it(`should get rfc7231 query`, async () => {
      const result = await client.path(`/encode/datetime/query/rfc7231`).get({
        queryParameters: {
          value: "Fri, 26 Aug 2022 14:38:00 GMT"
        }
      });
      assert.strictEqual(result.status, "204");
    });

    it(`should get unix-timestamp query`, async () => {
      const result = await client
        .path(`/encode/datetime/query/unix-timestamp`)
        .get({
          queryParameters: {
            value: 1686566864
          },
          skipUrlEncoding: true
        });
      assert.strictEqual(result.status, "204");
    });

    it(`should get unix-timestamp-array query`, async () => {
      const result = await client
        .path(`/encode/datetime/query/unix-timestamp-array`)
        .get({
          queryParameters: {
            value: [1686566864, 1686734256]
          }
        });
      assert.strictEqual(result.status, "204");
    });
  });

  describe("property", () => {
    it(`should post default property`, async () => {
      const result = await client
        .path(`/encode/datetime/property/default`)
        .post({
          body: {
            value: "2022-08-26T18:38:00.000Z"
          }
        });
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body.value, "2022-08-26T18:38:00.000Z");
    });

    it(`should post rfc3339 property`, async () => {
      const result = await client
        .path(`/encode/datetime/property/rfc3339`)
        .post({
          body: {
            value: "2022-08-26T18:38:00.000Z"
          }
        });
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body.value, "2022-08-26T18:38:00.000Z");
    });

    it(`should post rfc7231 property`, async () => {
      const result = await client
        .path(`/encode/datetime/property/rfc7231`)
        .post({
          body: {
            value: "Fri, 26 Aug 2022 14:38:00 GMT"
          }
        });
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body.value, "Fri, 26 Aug 2022 14:38:00 GMT");
    });

    it(`should post unix-timestamp property`, async () => {
      const result = await client
        .path(`/encode/datetime/property/unix-timestamp`)
        .post({
          body: {
            value: 1686566864
          }
        });
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body.value, 1686566864);
    });

    it(`should post unix-timestamp-array property`, async () => {
      const result = await client
        .path(`/encode/datetime/property/unix-timestamp-array`)
        .post({
          body: {
            value: [1686566864, 1686734256]
          }
        });
      assert.strictEqual(result.status, "200");
      assert.deepEqual(result.body.value, [1686566864, 1686734256]);
    });
  });

  describe("header", () => {
    it(`should get default header`, async () => {
      const result = await client.path(`/encode/datetime/header/default`).get({
        headers: {
          value: "Fri, 26 Aug 2022 14:38:00 GMT"
        }
      });
      assert.strictEqual(result.status, "204");
    });

    it(`should get rfc3339 header`, async () => {
      const result = await client.path(`/encode/datetime/header/rfc3339`).get({
        headers: {
          value: "2022-08-26T18:38:00.000Z"
        }
      });
      assert.strictEqual(result.status, "204");
    });

    it(`should get rfc7231 header`, async () => {
      const result = await client.path(`/encode/datetime/header/rfc7231`).get({
        headers: {
          value: "Fri, 26 Aug 2022 14:38:00 GMT"
        }
      });
      assert.strictEqual(result.status, "204");
    });

    it(`should get unix-timestamp header`, async () => {
      const result = await client
        .path(`/encode/datetime/header/unix-timestamp`)
        .get({
          headers: {
            value: 1686566864
          }
        });
      assert.strictEqual(result.status, "204");
    });

    it(`should get unix-timestamp-array header`, async () => {
      const result = await client
        .path(`/encode/datetime/header/unix-timestamp-array`)
        .get({
          headers: {
            value: buildCsvCollection([1686566864, 1686734256])
          }
        });
      assert.strictEqual(result.status, "204");
    });
  });

  describe("response header", () => {
    it(`should get default header`, async () => {
      const result = await client
        .path(`/encode/datetime/responseheader/default`)
        .get();
      assert.strictEqual(result.status, "204");
      assert.strictEqual(result.headers.value, "Fri, 26 Aug 2022 14:38:00 GMT");
    });

    it(`should get rfc3339 header`, async () => {
      const result = await client
        .path(`/encode/datetime/responseheader/rfc3339`)
        .get();
      assert.strictEqual(result.status, "204");
      assert.strictEqual(result.headers.value, "2022-08-26T18:38:00.000Z");
    });

    it(`should get rfc7231 header`, async () => {
      const result = await client
        .path(`/encode/datetime/responseheader/rfc7231`)
        .get();
      assert.strictEqual(result.status, "204");
      assert.strictEqual(result.headers.value, "Fri, 26 Aug 2022 14:38:00 GMT");
    });

    //TODO revert this skipped case after merging https://github.com/microsoft/typespec/pull/6423 
    it.skip(`should get unix-timestamp header`, async () => {
      const result = await client
        .path(`/encode/datetime/responseheader/unix-timestamp`)
        .get();
      assert.strictEqual(result.status, "204");
      assert.strictEqual(result.headers.value, 1686566864);
    });
  });
});
