import RecursiveClientFactory, {
  RecursiveClient
} from "./generated/models/inheritance-recursive/src/index.js";
import { assert } from "chai";

describe("RecursiveClient Rest Client", () => {
  let client: RecursiveClient;

  beforeEach(() => {
    client = RecursiveClientFactory({
      allowInsecureConnection: true
    });
  });

  const validBody = {
    level: 0,
    extension: [
      {
        level: 1,
        extension: [
          {
            level: 2
          }
        ]
      },
      {
        level: 1
      }
    ]
  };

  it("should put inheritance recursive", async () => {
    try {
      const result = await client
        .path("/type/model/inheritance/recursive")
        .put({ body: validBody });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get inheritance recursive", async () => {
    try {
      const result = await client
        .path("/type/model/inheritance/recursive")
        .get();
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body.level, 0);
      assert.strictEqual(result.body.extension![0]?.level, 1);
      assert.strictEqual(result.body.extension![0]?.extension![0]?.level, 2);
      assert.strictEqual(result.body.extension![1]?.level, 1);
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
