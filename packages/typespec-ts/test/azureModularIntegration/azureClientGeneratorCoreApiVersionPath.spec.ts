import { PathClient } from "./generated/azure/client-generator-core/api-version/path/src/index.js";

describe("Azure Client Generator Core - API Version Path (Modular)", () => {
  let client: PathClient;

  beforeEach(() => {
    client = new PathClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true
    });
  });

  it("should handle API version through path parameter", async () => {
    // The path API version is handled internally by the client
    await client.pathApiVersion();
  });
});
