import UnionBodyClientFactory, {
  UnionBodyClient
} from "./generated/union-body/src/index.js";
import { assert } from "chai";
describe("UnionBodyClient Rest Client", () => {
  let client: UnionBodyClient;

  beforeEach(() => {
    client = UnionBodyClientFactory("http://localhost:3005", {
      allowInsecureConnection: true
    });
  });

  it("should have no compile error for request body", async () => {
    const result = await client.path("/request-union-body").post({
      body: {
        prop: "test"
      }
    });
    assert.strictEqual(result.status, "404");
  });

  it("should have no compile error for response body", async () => {
    const result = await client.path("/response-union-body").get();
    assert.strictEqual(result.status, "404");
  });
});
