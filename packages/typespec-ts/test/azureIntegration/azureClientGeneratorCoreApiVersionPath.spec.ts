import { assert } from "chai";
import PathClientFactory, {
  PathClient
} from "./generated/azure/client-generator-core/api-version/path/src/index.js";

describe("Azure Client Generator Core - API Version Path", () => {
  let client: PathClient;

  beforeEach(() => {
    client = PathClientFactory({
      allowInsecureConnection: true
    });
  });

  it("should handle API version through path parameter", async () => {
    const result = await client
      .path(
        "/azure/client-generator-core/api-version/path/{version}",
        "2025-01-01"
      )
      .post();

    assert.strictEqual(result.status, "200");
  });
});
