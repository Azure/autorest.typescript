import { assert } from "chai";
import ConditionalRequestClientFactory, {
  ConditionalRequestClient
} from "./generated/special-headers/conditional-request/src/index.js";
describe("ConditionalRequestClient", () => {
  let client: ConditionalRequestClient;

  beforeEach(() => {
    client = ConditionalRequestClientFactory({
      allowInsecureConnection: true
    });
  });

  it("should post special-headers conditional-request if-match", async () => {
    const result = await client
      .path("/special-headers/conditional-request/if-match")
      .post({ headers: { "If-Match": '"valid"' } });
    assert.strictEqual(result.status, "204");
  });

  it("should post special-headers conditional-request if-none-match", async () => {
    const result = await client
      .path("/special-headers/conditional-request/if-none-match")
      .post({ headers: { "If-None-Match": '"invalid"' } });
    assert.strictEqual(result.status, "204");
  });
});
