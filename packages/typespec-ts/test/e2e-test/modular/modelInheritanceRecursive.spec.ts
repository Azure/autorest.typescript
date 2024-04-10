import { Extension, RecursiveClient } from "./generated/models/inheritance/recursive/generated/src/index.js";
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
    client = new RecursiveClient({
      allowInsecureConnection: true
    });
  });

  it("Inheritance Recursive put test", async () => {
    try {
      const result = await client.put(body);
      assert.isNotNull(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("Inheritance Recursive get test", async () => {
    try {
      const result = await client.get();
      assert.isNotNull(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

});
