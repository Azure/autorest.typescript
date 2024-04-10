import RecursiveClientFactory, { Extension, RecursiveClient } from "./generated/models/inheritance-recursive/src/index.js";
import { assert } from "chai";

const body : Extension= {
  level: 0,
  extension: [
    {
      level: 1,
      extension: [
        {
          level: 2,
        },
      ],
    },
    {
      level: 1,
    },
  ],
};
describe("Recursive Client", () => {
  let client: RecursiveClient;

  beforeEach(() => {
    client = RecursiveClientFactory({
        allowInsecureConnection: true
      });
  });

  it("Inheritance Recursive put test", async () => {
    try {
      const result = await client
      .path("/type/model/inheritance/recursive")
      .put({body});
      assert.equal(result.status,"204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("Inheritance Recursive get test", async () => {
    try {
        const result = await client
        .path("/type/model/inheritance/recursive")
        .get();
      assert.equal(result.status,"200");
    } catch (err) {
      assert.fail(err as string);
    }
  });

});
