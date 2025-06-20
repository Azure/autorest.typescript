import { assert } from "chai";
import { DeserializeEmptyStringAsNullClient } from "./generated/azure/client-generator-core/deserialize-empty-string-as-null/src/index.js";
describe("Azure ClientGeneratorCore Usage Client", () => {
  let client: DeserializeEmptyStringAsNullClient;

  beforeEach(() => {
    client = new DeserializeEmptyStringAsNullClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true
    });
  });

  it("should get deserialize empty string as null", async () => {
    const result = await client.get();
    assert.strictEqual(result.sampleUrl, "");
  });
});
