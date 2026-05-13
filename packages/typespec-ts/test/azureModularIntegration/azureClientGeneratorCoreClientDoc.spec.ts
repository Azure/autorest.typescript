import { assert, describe, it, beforeEach } from "vitest";

import { ClientDocClient } from "./generated/azure/client-generator-core/client-doc/src/index.js";

describe("Azure ClientGeneratorCore ClientDoc Client", () => {
  let client: ClientDocClient;

  beforeEach(() => {
    client = new ClientDocClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it("should harvest a plant", async () => {
    const result = await client.documentation.harvest({
      name: "Rose",
      species: "Rosa"
    });
    assert.strictEqual(result.name, "Rose");
    assert.strictEqual(result.species, "Rosa");
  });
});
