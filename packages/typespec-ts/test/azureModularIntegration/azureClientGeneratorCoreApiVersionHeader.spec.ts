import { HeaderClient } from "./generated/azure/client-generator-core/api-version/header/src/index.js";

describe("Azure Client Generator Core - API Version Header (Modular)", () => {
  let client: HeaderClient;

  beforeEach(() => {
    client = new HeaderClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true
    });
  });

  it("should handle API version through header parameter", async () => {
    // The header API version is handled internally by the client
    await client.headerApiVersion();
  });
});
