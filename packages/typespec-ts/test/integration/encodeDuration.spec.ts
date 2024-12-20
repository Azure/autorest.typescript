import { assert } from "chai";
import EncodeDurationClientFactory, {
  DurationClient
} from "./generated/encode/duration/src/index.js";
import { buildCsvCollection } from "./generated/encode/duration/src/serializeHelper.js";
// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

const port = process.env["PORT"] || "3000";
describe("EncodeDurationClient Rest Client", () => {
  let client: DurationClient;

  beforeEach(() => {
    client = EncodeDurationClientFactory({
      endpoint: `http://localhost:${port}`,
      allowInsecureConnection: true
    });
  });

  describe("property", () => {
    it(`should post default property`, async () => {
      const result = await client
        .path(`/encode/duration/property/default`)
        .post({
          body: {
            value: "P40D"
          }
        });
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body.value, "P40D");
    });

    it(`should post float-seconds property`, async () => {
      const result = await client
        .path(`/encode/duration/property/float-seconds`)
        .post({
          body: {
            value: 35.625
          }
        });
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body.value, 35.625);
    });

    it(`should post float64-seconds property`, async () => {
      const result = await client
        .path(`/encode/duration/property/float64-seconds`)
        .post({
          body: {
            value: 35.625
          }
        });
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body.value, 35.625);
    });

    it(`should post int32-seconds property`, async () => {
      const result = await client
        .path(`/encode/duration/property/int32-seconds`)
        .post({
          body: {
            value: 36
          }
        });
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body.value, 36);
    });

    it(`should post iso8601 property`, async () => {
      const result = await client
        .path(`/encode/duration/property/iso8601`)
        .post({
          body: {
            value: "P40D"
          }
        });
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body.value, "P40D");
    });

    it(`should post float-seconds-array property`, async () => {
      const result = await client
        .path(`/encode/duration/property/float-seconds-array`)
        .post({
          body: {
            value: [35.625, 46.75]
          }
        });
      assert.strictEqual(result.status, "200");
      assert.deepEqual(result.body.value, [35.625, 46.75]);
    });
  });

  describe("query", () => {
    it(`should get default query`, async () => {
      const result = await client.path(`/encode/duration/query/default`).get({
        queryParameters: {
          input: "P40D"
        }
      });
      assert.strictEqual(result.status, "204");
    });

    it(`should get iso8601 query`, async () => {
      const result = await client.path(`/encode/duration/query/iso8601`).get({
        queryParameters: {
          input: "P40D"
        }
      });
      assert.strictEqual(result.status, "204");
    });

    it(`should get int32-seconds query`, async () => {
      const result = await client
        .path(`/encode/duration/query/int32-seconds`)
        .get({
          queryParameters: {
            input: 36
          }
        });
      assert.strictEqual(result.status, "204");
    });

    it(`should get int32-seconds-array query`, async () => {
      const result = await client
        .path(`/encode/duration/query/int32-seconds-array`)
        .get({
          queryParameters: {
            input: [36, 47]
          },
          skipUrlEncoding: true
        });
      assert.strictEqual(result.status, "204");
    });

    it(`should get float-seconds query`, async () => {
      const result = await client
        .path(`/encode/duration/query/float-seconds`)
        .get({
          queryParameters: {
            input: 35.625
          }
        });
      assert.strictEqual(result.status, "204");
    });

    it(`should get float64-seconds query`, async () => {
      const result = await client
        .path(`/encode/duration/query/float64-seconds`)
        .get({
          queryParameters: {
            input: 35.625
          }
        });
      assert.strictEqual(result.status, "204");
    });
  });

  describe("header", () => {
    it(`should get default header`, async () => {
      const result = await client
        .path(`/encode/duration/header/default`)
        .get({
          headers: {
            duration: "P40D"
          }
        });
      assert.strictEqual(result.status, "204");
    });

    it(`should get iso8601 header`, async () => {
      const result = await client
        .path(`/encode/duration/header/iso8601`)
        .get({
          headers: {
            duration: "P40D"
          }
        });
      assert.strictEqual(result.status, "204");
    });

    it(`should get iso8601-array header`, async () => {
      const result = await client
        .path(`/encode/duration/header/iso8601-array`)
        .get({
          headers: {
            duration: buildCsvCollection(["P40D", "P50D"])
          }
        });
      assert.strictEqual(result.status, "204");
    });

    it(`should get int32-seconds header`, async () => {
      const result = await client
        .path(`/encode/duration/header/int32-seconds`)
        .get({
          headers: {
            duration: 36
          }
        });
      assert.strictEqual(result.status, "204");
    });

    it(`should get float-seconds header`, async () => {
      const result = await client
        .path(`/encode/duration/header/float-seconds`)
        .get({
          headers: {
            duration: 35.625
          }
        });
      assert.strictEqual(result.status, "204");
    });

    it(`should get float64-seconds header`, async () => {
      const result = await client
        .path(`/encode/duration/header/float64-seconds`)
        .get({
          headers: {
            duration: 35.625
          }
        });
      assert.strictEqual(result.status, "204");
    });
  });
});
