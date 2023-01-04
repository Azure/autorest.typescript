import { assert } from "chai";
import EnumsFixedClientFactory, {
  EnumsFixedClient
} from "./generated/enums/fixed/src/index.js";
describe("FixedEnums Rest Client", () => {
  let client: EnumsFixedClient;

  beforeEach(() => {
    client = EnumsFixedClientFactory({ allowInsecureConnection: true });
  });

  it("should get known value", async () => {
    try {
      const result = await client.path("/enums/fixed/string/known-value").get();
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body, "Monday");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  // FIXME core-client can't JSON.stringfy this value
  it.skip("should put known value", async () => {
    try {
      const result = await client.path("/enums/fixed/string/known-value").put({
        body: "Monday"
      });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  // FIXME core-client can't JSON.stringfy this value
  it.skip("should put unknown value and receives 500", async () => {
    try {
      const result = await client
        .path("/enums/fixed/string/unknown-value")
        .put({
          body: "Weekend" as any
        });
      assert.strictEqual(result.status, "500");
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
