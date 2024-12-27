import { assert } from "chai";
import { BodyOptionalityClient } from "./generated/parameters/body-optionality/src/index.js";
// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

const port = process.env["PORT"] || "3000";
describe("Body Optionality Client", () => {
  let client: BodyOptionalityClient;

  beforeEach(() => {
    client = new BodyOptionalityClient({
      endpoint: `http://localhost:${port}`,
      allowInsecureConnection: true
    });
  });

  it("should support required-explicit body", async () => {
    const result = await client.requiredExplicit({ name: "foo" });
    assert.isUndefined(result);
  });

  it("should support optional-explicit body", async () => {
    const result = await client.optionalExplicit.set({ body: { name: "foo" } });
    assert.isUndefined(result);
  });

  it("should support optional-explicit omitted body", async () => {
    const result = await client.optionalExplicit.omit();
    assert.isUndefined(result);
  });

  it("should support required-implicit body", async () => {
    const result = await client.requiredImplicit("foo");
    assert.isUndefined(result);
  });
});
