import { assert } from "chai";
import { DatetimeClient } from "./generated/encode/datetime/src/index.js";
describe("EncodeDatetimeClient Rest Client", () => {
  let client: DatetimeClient;

  beforeEach(() => {
    client = new DatetimeClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  describe("query", () => {
    it(`should get default datetime`, async () => {
      const result = await client.query.default(
        new Date("2022-08-26T18:38:00.000Z")
      );
      assert.isUndefined(result);
    });

    it(`should get rfc3339`, async () => {
      const result = await client.query.rfc3339(
        new Date("2022-08-26T18:38:00.000Z")
      );
      assert.isUndefined(result);
    });

    it(`should get rfc7231`, async () => {
      const result = await client.query.rfc7231(
        new Date("Fri, 26 Aug 2022 14:38:00 GMT")
      );
      assert.isUndefined(result);
    });

    it(`should get unix timestamp`, async () => {
      const result = await client.query.unixTimestamp(new Date("2023-06-12T10:47:44.000Z"));
      assert.isUndefined(result);
    });

    it(`should get unix timestamp-array`, async () => {
      const result = await client.query.unixTimestampArray([
        new Date("2023-06-12T10:47:44.000Z"),
        new Date("2023-06-14T09:17:36.000Z"),
      ]);
      assert.isUndefined(result);
    });
  });

  describe("property", () => {
    it(`should get default datetime`, async () => {
      const result = await client.property.default({
        value: new Date("2022-08-26T18:38:00.000Z")
      });
      assert.deepEqual(result.value, new Date("2022-08-26T18:38:00.000Z"));
    });

    it(`should get rfc3339`, async () => {
      const result = await client.property.rfc3339({
        value: new Date("2022-08-26T18:38:00.000Z")
      });
      assert.deepEqual(result.value, new Date("2022-08-26T18:38:00.000Z"));
    });

    it(`should get rfc7231`, async () => {
      const result = await client.property.rfc7231({
        value: new Date("Fri, 26 Aug 2022 14:38:00 GMT")
      });
      assert.deepEqual(
        result.value,
        new Date("Fri, 26 Aug 2022 14:38:00 GMT")
      );
    });

    it(`should get unix timestamp`, async () => {
      const result = await client.property.unixTimestamp({
        value: new Date("2023-06-12T10:47:44.000Z")
      });
      assert.deepEqual(result.value, new Date("2023-06-12T10:47:44.000Z"));
    });

    it(`should get unix timestamp-array`, async () => {
      const result = await client.property.unixTimestampArray({
        value: [new Date("2023-06-12T10:47:44.000Z"), new Date("2023-06-14T09:17:36.000Z")]
      });
      assert.deepEqual(result.value, [
        new Date("2023-06-12T10:47:44.000Z"),
        new Date("2023-06-14T09:17:36.000Z")
      ]);
    });
  });

  describe("header", () => {
    it(`should get default datetime`, async () => {
      const result = await client.header.default(
        new Date("Fri, 26 Aug 2022 14:38:00 GMT")
      );
      assert.isUndefined(result);
    });

    it(`should get rfc3339`, async () => {
      const result = await client.header.rfc3339(
        new Date("2022-08-26T18:38:00.000Z")
      );
      assert.isUndefined(result);
    });

    it(`should get rfc7231`, async () => {
      const result = await client.header.rfc7231(
        new Date("Fri, 26 Aug 2022 14:38:00 GMT")
      );
      assert.isUndefined(result);
    });

    it(`should get unix timestamp`, async () => {
      const result = await client.header.unixTimestamp(new Date("2023-06-12T10:47:44.000Z"));
      assert.isUndefined(result);
    });

    it(`should get unix timestamp-array`, async () => {
      const result = await client.header.unixTimestampArray([
        new Date("2023-06-12T10:47:44.000Z"),
        new Date("2023-06-14T09:17:36.000Z")
      ]);
      assert.isUndefined(result);
    });
  });

  describe("response header", () => {
    it(`should get default header`, async () => {
      const result = await client.responseHeader.default({
        onResponse: (res) => {
          assert.strictEqual(
            res.headers.get("value"),
            "Fri, 26 Aug 2022 14:38:00 GMT"
          );
        }
      });
      assert.isUndefined(result);
    });

    it(`should get rfc3339 header`, async () => {
      const result = await client.responseHeader.rfc3339({
        onResponse: (res) => {
          assert.strictEqual(
            res.headers.get("value"),
            "2022-08-26T18:38:00.000Z"
          );
        }
      });
      assert.isUndefined(result);
    });

    it(`should get rfc7231 header`, async () => {
      const result = await client.responseHeader.rfc7231({
        onResponse: (res) => {
          assert.strictEqual(
            res.headers.get("value"),
            "Fri, 26 Aug 2022 14:38:00 GMT"
          );
        }
      });
      assert.isUndefined(result);
    });

    it(`should get unix-timestamp header`, async () => {
      const result = await client.responseHeader.unixTimestamp({
        onResponse: (res) => {
          assert.strictEqual(res.headers.get("value"), "1686566864");
        }
      });
      assert.isUndefined(result);
    });
  });
});
