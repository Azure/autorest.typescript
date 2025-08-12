import { QueryClient } from "./generated/azure/client-generator-core/api-version/query/src/index.js";

describe("Azure Client Generator Core - API Version Query (Modular)", () => {
  let client: QueryClient;

  beforeEach(() => {
    client = new QueryClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true
    });
  });

  it("should handle API version through query parameter", async () => {
    // The query API version is handled internally by the client
    await client.queryApiVersion();
  });
});
