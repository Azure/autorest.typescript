import { assert } from "chai";
import { DatetimeClient } from "./generated/encode/datetime/src/index";
describe("EncodeDatetimeClient Rest Client", () => {
  let client: DatetimeClient;

  beforeEach(() => {
    client = new DatetimeClient({
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  describe("query", () => {
    it(`should get default datetime`, async () => {
      try {
        const result = await client.query.default(
          new Date("2022-08-26T18:38:00.000Z")
        );
        assert.isUndefined(result);
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get rfc3339`, async () => {
      try {
        const result = await client.query.rfc3339(
          new Date("2022-08-26T18:38:00.000Z")
        );
        assert.isUndefined(result);
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get rfc7231`, async () => {
      try {
        const result = await client.query.rfc7231(
          new Date("Fri, 26 Aug 2022 14:38:00 GMT")
        );
        assert.isUndefined(result);
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get unix timestamp`, async () => {
      try {
        const result = await client.query.unixTimestamp(new Date(1686566864));
        assert.isUndefined(result);
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get unix timestamp-array`, async () => {
      try {
        const result = await client.query.unixTimestampArray([
          new Date(1686566864),
          new Date(1686734256)
        ]);
        assert.isUndefined(result);
      } catch (err) {
        assert.fail(err as string);
      }
    });
  });

  describe("property", () => {
    it(`should get default datetime`, async () => {
      try {
        const result = await client.property.default({
          value: new Date("2022-08-26T18:38:00.000Z")
        });
        assert.deepEqual(result.value, new Date("2022-08-26T18:38:00.000Z"));
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get rfc3339`, async () => {
      try {
        const result = await client.property.rfc3339({
          value: new Date("2022-08-26T18:38:00.000Z")
        });
        assert.deepEqual(result.value, new Date("2022-08-26T18:38:00.000Z"));
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get rfc7231`, async () => {
      try {
        const result = await client.property.rfc7231({
          value: new Date("Fri, 26 Aug 2022 14:38:00 GMT")
        });
        assert.deepEqual(
          result.value,
          new Date("Fri, 26 Aug 2022 14:38:00 GMT")
        );
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get unix timestamp`, async () => {
      try {
        const result = await client.property.unixTimestamp({
          value: new Date(1686566864)
        });
        assert.deepEqual(result.value, new Date(1686566864));
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get unix timestamp-array`, async () => {
      try {
        const result = await client.property.unixTimestampArray({
          value: [new Date(1686566864), new Date(1686734256)]
        });
        assert.deepEqual(result.value, [
          new Date(1686566864),
          new Date(1686734256)
        ]);
      } catch (err) {
        assert.fail(err as string);
      }
    });
  });

  describe("header", () => {
    it(`should get default datetime`, async () => {
      try {
        const result = await client.header.default(
          new Date("Fri, 26 Aug 2022 14:38:00 GMT")
        );
        assert.isUndefined(result);
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get rfc3339`, async () => {
      try {
        const result = await client.header.rfc3339(
          new Date("2022-08-26T18:38:00.000Z")
        );
        assert.isUndefined(result);
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get rfc7231`, async () => {
      try {
        const result = await client.header.rfc7231(
          new Date("Fri, 26 Aug 2022 14:38:00 GMT")
        );
        assert.isUndefined(result);
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get unix timestamp`, async () => {
      try {
        const result = await client.header.unixTimestamp(new Date(1686566864));
        assert.isUndefined(result);
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get unix timestamp-array`, async () => {
      try {
        const result = await client.header.unixTimestampArray([
          new Date(1686566864),
          new Date(1686734256)
        ]);
        assert.isUndefined(result);
      } catch (err) {
        assert.fail(err as string);
      }
    });
  });

  describe("response header", () => {
    it(`should get default header`, async () => {
      try {
        const result = await client.responseHeader.default({
          onResponse: (res) => {
            assert.strictEqual(
              res.headers.get("value"),
              "Fri, 26 Aug 2022 14:38:00 GMT"
            );
          }
        });
        assert.isUndefined(result);
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get rfc3339 header`, async () => {
      try {
        const result = await client.responseHeader.rfc3339({
          onResponse: (res) => {
            assert.strictEqual(
              res.headers.get("value"),
              "2022-08-26T18:38:00.000Z"
            );
          }
        });
        assert.isUndefined(result);
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get rfc7231 header`, async () => {
      try {
        const result = await client.responseHeader.rfc7231({
          onResponse: (res) => {
            assert.strictEqual(
              res.headers.get("value"),
              "Fri, 26 Aug 2022 14:38:00 GMT"
            );
          }
        });
        assert.isUndefined(result);
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get unix-timestamp header`, async () => {
      try {
        const result = await client.responseHeader.unixTimestamp({
          onResponse: (res) => {
            assert.strictEqual(res.headers.get("value"), "1686566864");
          }
        });
        assert.isUndefined(result);
      } catch (err) {
        assert.fail(err as string);
      }
    });
  });
});
