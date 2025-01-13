import { TraitsClient } from "./generated/azure/core/traits/src/index.js";
import { assert } from "chai";

describe("Traits Client", () => {
  let client: TraitsClient;

  beforeEach(() => {
    client = new TraitsClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true
    });
  });

  it("client smoke test", async () => {
    const result = await client.smokeTest(1, "123", {
      ifNoneMatch: '"invalid"',
      ifMatch: '"valid"',
      ifUnmodifiedSince: new Date("Fri, 26 Aug 2022 14:38:00 GMT"),
      ifModifiedSince: new Date("Thu, 26 Aug 2021 14:38:00 GMT")
    });
    assert.isNotNull(result);
    assert.strictEqual(
      JSON.stringify(result),
      JSON.stringify({
        id: 1,
        name: "Madge"
      })
    );
  });

  it("client repeatable action", async () => {
    const result = await client.repeatableAction(
      1,
      { userActionValue: "test" },
      {
        repeatabilityRequestId: "86aede1f-96fa-4e7f-b1e1-bf8a947cb804",
        repeatabilityFirstSent: new Date("Wed, 15 Nov 2023 15:38:00 GMT")
      }
    );
    assert.isNotNull(result);
    assert.strictEqual(
      JSON.stringify(result),
      JSON.stringify({ userActionResult: "test" })
    );
  });
});
