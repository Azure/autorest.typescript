import { assert } from "chai";
import AzureCoreTraitsClientFactory, {
  AzureCoreTraitsClient,
  isUnexpected
} from "./generated/azure/core/traits/src/index.js";
describe("Azure Core Traits Rest Client", () => {
  let client: AzureCoreTraitsClient;

  beforeEach(() => {
    client = AzureCoreTraitsClientFactory({
      allowInsecureConnection: true,
      endpoint: "http://localhost:3003"
    });
  });

  it("should get user traits", async () => {
    const result = await client.path("/azure/core/traits/user/{id}", 1).get({
      headers: {
        foo: "123",
        "If-Match": '"valid"',
        "If-None-Match": '"invalid"',
        "If-Modified-Since": "Thu, 26 Aug 2021 14:38:00 GMT",
        "If-Unmodified-Since": "Fri, 26 Aug 2022 14:38:00 GMT"
      }
    });
    if (isUnexpected(result)) {
      throw Error("Unexpected status code");
    }
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.name, "Madge");
  });

  it("should post user traits", async () => {
    const result = await client
      .path("/azure/core/traits/user/{id}:repeatableAction", 1)
      .post({
        headers: {
          "Repeatability-Request-ID": "86aede1f-96fa-4e7f-b1e1-bf8a947cb804",
          "Repeatability-First-Sent": "Mon, 27 Nov 2023 11:58:00 GMT"
        },
        body: {
          userActionValue: "test"
        }
      });
    if (isUnexpected(result)) {
      throw Error("Unexpected status code");
    }
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.userActionResult, "test");
  });
});
