import UnionBodyClientFactory, {
  UnionBodyClient
} from "./generated/union-body/src/index.js";
import { assert } from "chai";
describe("UnionBodyClient Rest Client", () => {
  let client: UnionBodyClient;

  beforeEach(() => {
    client = UnionBodyClientFactory("http://localhost:3000", {
      allowInsecureConnection: true
    });
  });

  it("should have no compile error for request body", async () => {
    try {
      const result = await client.path("/request-union-body").post({
        body: {
          prop: "test"
        }
      });
      assert.strictEqual(result.status, "404");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should have no compile error for response body", async () => {
    try {
      const result = await client.path("/response-union-body").get();
      assert.strictEqual(result.status, "404");
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
