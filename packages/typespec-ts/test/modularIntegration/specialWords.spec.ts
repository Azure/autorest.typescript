import { assert } from "chai";
import { SpecialWordsClient } from "./generated/specialWords/src/SpecialWordsClient.js";
describe.only("Type Union Client", () => {
  let client: SpecialWordsClient;

  beforeEach(() => {
    client = new SpecialWordsClient({ allowInsecureConnection: true });
  });

  it("should send sameAsModel", async () => {
    try {
      const result = await client.modelProperties.sameAsModel({
        sameAsModel: "ok"
      });
      assert.equal(result , undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should send models withAnd", async () => {
    try {
      const result = await client.models.withAnd({
        name: "ok"
      });
      assert.equal(result , undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it.only("should get parameters withConstructor", async () => {
    try {
      const result = await client.parameters.withConstructor("ok");
      assert.equal(result , undefined);
    } catch (err) {
      assert.fail(err as string);
    }
  });
})
