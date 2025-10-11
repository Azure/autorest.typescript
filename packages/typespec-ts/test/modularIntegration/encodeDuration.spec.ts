import { assert } from "chai";
import { DurationClient } from "./generated/encode/duration/src/index.js";
describe("EncodeDurationClient Rest Client", () => {
  let client: DurationClient;

  beforeEach(() => {
    client = new DurationClient({
      endpoint: "http://localhost:3002",
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

    it(`should get int32 milliseconds`, async () => {
      const result = await client.query.int32Milliseconds(36000);
      assert.isUndefined(result);
    });

    it(`should get float milliseconds`, async () => {
      const result = await client.query.floatMilliseconds(35625);
      assert.isUndefined(result);
    });

    it(`should get float64 milliseconds`, async () => {
      const result = await client.query.float64Milliseconds(35625);
      assert.isUndefined(result);
    });

    it(`should get int32 milliseconds array`, async () => {
      const result = await client.query.int32MillisecondsArray([36000, 47000]);
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

    it(`should get int32 milliseconds`, async () => {
      const result = await client.property.int32Milliseconds({ value: 36000 });
      assert.deepEqual(result.value, 36000);
    });

    it(`should get float milliseconds`, async () => {
      const result = await client.property.floatMilliseconds({ value: 35625 });
      assert.deepEqual(result.value, 35625);
    });

    it(`should get float64 milliseconds`, async () => {
      const result = await client.property.float64Milliseconds({
        value: 35625
      });
      assert.deepEqual(result.value, 35625);
    });

    it(`should get float milliseconds array`, async () => {
      const result = await client.property.floatMillisecondsArray({
        value: [35625, 46750]
      });
      assert.deepEqual(result.value, [35625, 46750]);
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

    it(`should get iso8601 array`, async () => {
      const result = await client.header.iso8601Array(["P40D", "P50D"]);
      assert.isUndefined(result);
    });

    it(`should get int32 milliseconds`, async () => {
      const result = await client.header.int32Milliseconds(36000);
      assert.isUndefined(result);
    });

    it(`should get float milliseconds`, async () => {
      const result = await client.header.floatMilliseconds(35625);
      assert.isUndefined(result);
    });

    it(`should get float64 milliseconds`, async () => {
      const result = await client.header.float64Milliseconds(35625);
      assert.isUndefined(result);
    });

    it(`should get int32 milliseconds array`, async () => {
      const result = await client.header.int32MillisecondsArray([36000, 47000]);
      assert.isUndefined(result);
    });
  });
});
