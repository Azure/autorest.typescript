import { assert } from "chai";
import InternalClientFactory, {
  InternalClient
} from "./generated/internal/src/index.js";
describe("Internal Rest Client", () => {
  let client: InternalClient;

  beforeEach(() => {
    client = InternalClientFactory({
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it("should get internal", async () => {
    try {
      const result = await client.path("/azure/client-generator-core/internal/getInternal").get({
        queryParameters: {
          name: "get internal"
        }
      });
      assert.strictEqual(result.status, "200");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post internal", async () => {
    try {
      const result = await client.path("/azure/client-generator-core/internal/postInternal").post({
        body: {
          id: 1 as any,
          name: "post internal name"
        }
      });
      assert.strictEqual(result.status, "200");
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
