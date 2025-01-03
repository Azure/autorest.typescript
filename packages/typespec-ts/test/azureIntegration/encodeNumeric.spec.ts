import { assert } from "chai";
import EncodeNumericClientFactory, {
  NumericClient
} from "./generated/encode/numeric/src/index.js";
describe("EncodeNumericClient Rest Client", () => {
  let client: NumericClient;

  beforeEach(() => {
    client = EncodeNumericClientFactory({
      allowInsecureConnection: true
    });
  });

  describe("property", () => {
    it(`should post safeint property`, async () => {
      const result = await client
        .path(`/encode/numeric/property/safeint`)
        .post({
          body: {
            value: "10000000000"
          }
        });
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body.value, "10000000000");
    });

    it(`should post uint32 property`, async () => {
      const result = await client.path(`/encode/numeric/property/uint32`).post({
        body: {
          value: "1"
        }
      });
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body.value, "1");
    });

    it(`should post uint8 property`, async () => {
      const result = await client.path(`/encode/numeric/property/uint8`).post({
        body: {
          value: "255"
        }
      });
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body.value, "255");
    });
  });
});
