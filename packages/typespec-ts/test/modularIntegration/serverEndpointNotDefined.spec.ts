import { assert } from "chai";
import { NotDefinedClient } from "./generated/server/endpoint/not-defined/src/index.js";
// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

const port = process.env["PORT"] || "3000";
describe("NotDefined Server Endpoint Client", () => {
  let client: NotDefinedClient;

  beforeEach(() => {
    client = new NotDefinedClient("http://localhost:3000", {
      endpoint: `http://localhost:${port}`,
      allowInsecureConnection: true
    });
  });

  it("should work with not defined endpoint", async () => {
    const result = await client.valid();
    assert.isUndefined(result);
  });
});
