import { assert } from "chai";
import { DurationClient } from "./generated/encode/duration/src/index";
describe("EncodeDurationClient Rest Client", () => {
  let client: DurationClient;

  beforeEach(() => {
    client = new DurationClient({
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  describe("query", () => {
    it(`should get default duration`, async () => {
      try {
        const result = await client.query.default("P40D");
        assert.isUndefined(result);
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get iso8601 duration`, async () => {
      try {
        const result = await client.query.iso8601("P40D");
        assert.isUndefined(result);
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get float seconds`, async () => {
      try {
        const result = await client.query.floatSeconds(35.621);
        assert.isUndefined(result);
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get int32 seconds`, async () => {
      try {
        const result = await client.query.int32Seconds(36);
        assert.isUndefined(result);
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get int32 seconds array`, async () => {
      try {
        const result = await client.query.int32SecondsArray([36, 47]);
        assert.isUndefined(result);
      } catch (err) {
        assert.fail(err as string);
      }
    });
  });

  describe("property", () => {
    it(`should get default duration`, async () => {
      try {
        const result = await client.property.default({value: "P40D"});
        assert.deepEqual(result.value, "P40D");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get iso8601 duration`, async () => {
      try {
        const result = await client.property.iso8601({value: "P40D"});
        assert.deepEqual(result.value, "P40D");
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get float seconds`, async () => {
      try {
        const result = await client.property.floatSeconds({value: 35.621});
        assert.deepEqual(result.value, 35.621);
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get int32 seconds`, async () => {
      try {
        const result = await client.property.int32Seconds({value: 36});
        assert.deepEqual(result.value, 36);
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get int32 seconds array`, async () => {
      try {
        const result = await client.property.floatSecondsArray({
          value: [
          35.621, 46.781
        ]});
        assert.deepEqual(result.value, [35.621, 46.781]);
      } catch (err) {
        assert.fail(err as string);
      }
    });
  });

  describe("header", () => {
    it(`should get default duration`, async () => {
      try {
        const result = await client.header.default("P40D");
        assert.isUndefined(result);
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get iso8601 duration`, async () => {
      try {
        const result = await client.header.iso8601("P40D");
        assert.isUndefined(result);
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get float seconds`, async () => {
      try {
        const result = await client.header.floatSeconds(35.621);
        assert.isUndefined(result);
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get int32 seconds`, async () => {
      try {
        const result = await client.header.int32Seconds(36);
        assert.isUndefined(result);
      } catch (err) {
        assert.fail(err as string);
      }
    });

    it(`should get int32 seconds array`, async () => {
      try {
        const result = await client.header.iso8601Array(["P40D", "P50D"]);
        assert.isUndefined(result);
      } catch (err) {
        assert.fail(err as string);
      }
    });
  });
});
