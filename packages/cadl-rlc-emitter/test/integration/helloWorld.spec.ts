import HelloClientFactory, {
  HelloClient
} from "./generated/hello/src/index.js";
import { assert } from "chai";
describe("HelloClient Rest Client", () => {
  let client: HelloClient;

  beforeEach(() => {
    client = HelloClientFactory({ allowInsecureConnection: true });
  });

  it("should return 200", async () => {
    try {
      const result = await client.path("/hello/world").get({});

      // TODO: why the function isUnexpected is missing
      assert.strictEqual(result.status, "200");
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
