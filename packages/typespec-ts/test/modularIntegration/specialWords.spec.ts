import { assert } from "chai";
import { SpecialWordsClient } from "./generated/specialWords/src/SpecialWordsClient.js";
describe.only("Type Union Client", () => {
  let client: SpecialWordsClient;
  let body:{
    sameAsModel: "string"
  };

  beforeEach(() => {
    client = new SpecialWordsClient({});
  });

  it("should send sameAsModel", async () => {
    try {
      const result = await client.modelProperties.sameAsModel(body);
      console.log(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });
})
