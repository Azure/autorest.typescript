import { assert } from "chai";
import ConditionalRequestClientFactory, {
  ConditionalRequestClient
} from "./generated/headers/conditionalRequest/src/index.js";
describe("ConditionalRequestClient", () => {
  let client: ConditionalRequestClient;

  beforeEach(() => {
    client = ConditionalRequestClientFactory({
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it("should post if match conditional request", async () => {
    try {
      const result = await client
        .path("/special-headers/conditional-request/if-match")
        .post({ headers: { "If-Match": '"valid"' } });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post if none match conditional request", async () => {
    try {
      const result = await client
        .path("/special-headers/conditional-request/if-none-match")
        .post({ headers: { "if-none-match": '"invalid"' } });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
