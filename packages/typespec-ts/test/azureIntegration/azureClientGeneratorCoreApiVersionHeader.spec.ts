import { assert } from "chai";
import HeaderClientFactory, {
  HeaderClient
} from "./generated/azure/client-generator-core/api-version/header/src/index.js";

describe("Azure Client Generator Core - API Version Header", () => {
  let client: HeaderClient;

  beforeEach(() => {
    client = HeaderClientFactory({
      allowInsecureConnection: true
    });
  });

  it("should handle API version through header parameter", async () => {
    const result = await client
      .path("/azure/client-generator-core/api-version/header")
      .post({
        headers: {
          "x-ms-version": "2025-01-01"
        }
      });

    assert.strictEqual(result.status, "200");
  });
});
