import { assert } from "chai";
import RepeatabilityClientFactory, {
  RepeatabilityClient
} from "./generated/special-headers/repeatability/src/index.js";
describe("RepeatabilityClient", () => {
  let client: RepeatabilityClient;

  beforeEach(() => {
    client = RepeatabilityClientFactory({
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it("should set repeatable headers correctly", async () => {
    const result = await client
      .path("/special-headers/repeatability/immediateSuccess")
      .post({
        headers: {
          "Repeatability-First-Sent": "Tue, 15 Nov 2022 12:45:26 GMT",
          "Repeatability-Request-ID": "2378d9bc-1726-11ee-be56-0242ac120002" // fake uuid
        }
      });
    assert.strictEqual(result.status, "204");
    assert.strictEqual(result.headers["repeatability-result"], "accepted");
  });
});
