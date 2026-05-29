import { describe, it, beforeEach } from "vitest";
import { HeadClient } from "./generated/payload/head/src/index.js";

describe("Payload Head Client", () => {
  let client: HeadClient;

  beforeEach(() => {
    client = new HeadClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it("should call contentTypeHeaderInResponse", async () => {
    // The generated client returns void for HEAD operations; response headers
    // (Content-Type and x-ms-meta) are validated by the mock server (returns 200
    // only when the request is correct). No header assertions can be made here
    // because the emitter does not expose response headers in the return type.
    await client.contentTypeHeaderInResponse();
  });
});
