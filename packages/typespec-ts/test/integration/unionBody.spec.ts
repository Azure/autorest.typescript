import UnionBodyClientFactory, {
  UnionBodyClient
} from "./generated/union-body/src/index.js";
import { assert } from "chai";
describe.only("UnionBodyClient Rest Client", () => {
  let client: UnionBodyClient;

  beforeEach(() => {
    client = UnionBodyClientFactory("fake-endpoint", {
      allowInsecureConnection: true
    });
  });

  it("should make the call successfully", async () => {
    try {
      const result = await client.path("/registration").post({
        body: {
          prop: "test"
        }
      });
      assert.strictEqual(result.status, "200");
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
