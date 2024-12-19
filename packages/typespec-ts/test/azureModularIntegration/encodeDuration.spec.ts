import { assert } from "chai";
import { DurationClient } from "./generated/encode/duration/src/index.js";
describe("EncodeDurationClient Rest Client", () => {
  let client: DurationClient;

  beforeEach(() => {
    client = new DurationClient({
      endpoint: "http://localhost:3006",
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  describe("query", () => {
    it(`should get default duration`, async () => {
      const result = await client.query.default("P40D");
      assert.isUndefined(result);
    });

    it(`should get iso8601 duration`, async () => {
      const result = await client.query.iso8601("P40D");
      assert.isUndefined(result);
    });

    it(`should get float seconds`, async () => {
      const result = await client.query.floatSeconds(35.625);
      assert.isUndefined(result);
    });

    it(`should get float64 seconds`, async () => {
      const result = await client.query.float64Seconds(35.625);
      assert.isUndefined(result);
    });

    it(`should get int32 seconds`, async () => {
      const result = await client.query.int32Seconds(36);
      assert.isUndefined(result);
    });

    it(`should get int32 seconds array`, async () => {
      const result = await client.query.int32SecondsArray([36, 47]);
      assert.isUndefined(result);
    });
  });

  describe("property", () => {
    it(`should get default duration`, async () => {
      const result = await client.property.default({ value: "P40D" });
      assert.deepEqual(result.value, "P40D");
    });

    it(`should get iso8601 duration`, async () => {
      const result = await client.property.iso8601({ value: "P40D" });
      assert.deepEqual(result.value, "P40D");
    });

    it(`should get float seconds`, async () => {
      const result = await client.property.floatSeconds({ value: 35.625 });
      assert.deepEqual(result.value, 35.625);
    });

    it(`should get float64 seconds`, async () => {
      const result = await client.property.float64Seconds({ value: 35.625 });
      assert.deepEqual(result.value, 35.625);
    });

    it(`should get int32 seconds`, async () => {
      const result = await client.property.int32Seconds({ value: 36 });
      assert.deepEqual(result.value, 36);
    });

    it(`should get float seconds array`, async () => {
      const result = await client.property.floatSecondsArray({
        value: [35.625, 46.75]
      });
      assert.deepEqual(result.value, [35.625, 46.75]);
    });
  });

  describe("header", () => {
    it(`should get default duration`, async () => {
      const result = await client.header.default("P40D");
      assert.isUndefined(result);
    });

    it(`should get iso8601 duration`, async () => {
      const result = await client.header.iso8601("P40D");
      assert.isUndefined(result);
    });

    it(`should get float seconds`, async () => {
      const result = await client.header.floatSeconds(35.625);
      assert.isUndefined(result);
    });

    it(`should get float64 seconds`, async () => {
      const result = await client.header.float64Seconds(35.625);
      assert.isUndefined(result);
    });

    it(`should get int32 seconds`, async () => {
      const result = await client.header.int32Seconds(36);
      assert.isUndefined(result);
    });

    it(`should get int32 seconds array`, async () => {
      const result = await client.header.iso8601Array(["P40D", "P50D"]);
      assert.isUndefined(result);
    });
  });
});
