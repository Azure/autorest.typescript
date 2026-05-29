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
    await client.contentTypeHeaderInResponse();
  });
});
