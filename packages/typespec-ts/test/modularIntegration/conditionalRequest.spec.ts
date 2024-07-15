import { ConditionalRequestClient } from "./generated/special-headers/conditional-request/generated/src/index.js";
import { assert } from "chai";
describe("ConditionalRequestClient Classical Client", () => {
  let client: ConditionalRequestClient;

  beforeEach(() => {
    client = new ConditionalRequestClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true
    });
  });

  it("should post special-headers conditional-request if-match", async () => {
    const result = await client.postIfMatch({ ifMatch: '"valid"' });
    assert.isUndefined(result);
  });
  it("should post special-headers conditional-request if-match", async () => {
    const result = await client.postIfNoneMatch({ ifNoneMatch: '"invalid"' });
    assert.isUndefined(result);
  });
});
