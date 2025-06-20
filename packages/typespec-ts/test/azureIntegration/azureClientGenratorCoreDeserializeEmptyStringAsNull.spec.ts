import { assert } from "chai";
import DeserializeEmptyStringAsNullClientFactory, {
  DeserializeEmptyStringAsNullClient
} from "./generated/azure/client-generator-core/deserialize-empty-string-as-null/src/index.js";

describe("Usage Client", () => {
  let client: DeserializeEmptyStringAsNullClient;

  beforeEach(() => {
    client = DeserializeEmptyStringAsNullClientFactory({
      allowInsecureConnection: true
    });
  });

  it("should get deserialize empty string as null", async () => {
    const result = await client
      .path(
        "/azure/client-generator-core/deserialize-empty-string-as-null/responseModel"
      )
      .get();
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.sampleUrl, "");
  });
});
