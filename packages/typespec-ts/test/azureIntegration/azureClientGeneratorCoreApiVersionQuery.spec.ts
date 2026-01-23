import { assert } from "chai";
import QueryClientFactory, {
  QueryClient
} from "./generated/azure/client-generator-core/api-version/query/src/index.js";

describe("Azure Client Generator Core - API Version Query", () => {
  let client: QueryClient;

  beforeEach(() => {
    client = QueryClientFactory({
      allowInsecureConnection: true
    });
  });

  it("should handle API version through query parameter", async () => {
    const result = await client
      .path("/azure/client-generator-core/api-version/query")
      .post({
        queryParameters: {
          version: "2025-01-01"
        }
      });

    assert.strictEqual(result.status, "200");
  });
});
