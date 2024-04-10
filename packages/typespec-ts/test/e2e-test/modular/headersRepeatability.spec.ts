import { RepeatabilityClient } from "./generated/headers/repeatability/generated/src/index.js";
import { assert } from "chai";

describe("Repeatability Client", () => {
  let client: RepeatabilityClient;

  beforeEach(() => {
    client = new RepeatabilityClient({
      allowInsecureConnection: true
    });
  });

  it("should add client-request-id and date in header", async () => {
    try {
      const requestID = "86aede1f-96fa-4e7f-b1e1-bf8a947cb804";
      const result = await client.immediateSuccess(
        requestID,
        new Date("Mon, 13 Nov 2023 14:38:00 GMT")
      );
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
