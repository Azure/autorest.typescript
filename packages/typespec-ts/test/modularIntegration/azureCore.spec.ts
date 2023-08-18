import { BasicClient } from "./generated/azure/core/src/index.js";
import { assert } from "chai";

describe.only("BasicClient Classical Client", () => {
  let client: BasicClient;

  beforeEach(() => {
    client = new BasicClient({
      allowInsecureConnection: true
    });
  });

  it("should list items with paging", async () => {
    try {
      const iter = client.listWithPage();
      const resArray = new Array();
      for await (let item of iter) {
        resArray.push(item);
      }
      assert.strictEqual(resArray.length, 1);
    } catch (err) {
      console.log(err);
      assert.fail(err as string);
    }
  });
});
