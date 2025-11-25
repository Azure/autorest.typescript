import { assert } from "chai";
import { HeaderClient } from "./generated/azure/client-generator-core/api-version/header/src/index.js";
import { PathClient } from "./generated/azure/client-generator-core/api-version/path/src/index.js";
import { QueryClient } from "./generated/azure/client-generator-core/api-version/query/src/index.js";

/**
 * These tests are skipped because the TCGC @apiVersion feature is not yet implemented.
 * Once implemented, these tests should be enabled to ensure proper functionality.
 * Issue: https://github.com/Azure/autorest.typescript/issues/3304
 */
describe.skip("NameAndEncodedName Client", () => {
  it("should send the api-version in the header", async () => {
    const headerClient = new HeaderClient({
      apiVersion: "2025-01-01",
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
    await headerClient.headerApiVersion();
    assert.ok(true);
  });

  it("should send the api-version in the path", async () => {
    const pathClient = new PathClient({
      apiVersion: "2025-01-01",
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
    await pathClient.pathApiVersion();
    assert.ok(true);
  });

  it("should send the api-version in the query", async () => {
    const queryClient = new QueryClient({
      apiVersion: "2025-01-01",
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
    await queryClient.queryApiVersion();
    assert.ok(true);
  });
});
