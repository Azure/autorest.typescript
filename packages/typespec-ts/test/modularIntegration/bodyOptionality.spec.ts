import { assert } from "chai";
import { BodyOptionalityClient } from "./generated/parameters/body-optionality/src/index.js";
describe("Body Optionality Client", () => {
  let client: BodyOptionalityClient;

  beforeEach(() => {
    client = new BodyOptionalityClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it("should support required-explicit body", async () => {
    try {
      const result = await client.requiredExplicit({ name: "foo" });
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should support optional-explicit body", async () => {
    try {
      const result = await client.optionalExplicit.set({ body: { name: "foo" } });
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should support optional-explicit omitted body", async () => {
    try {
      const result = await client.optionalExplicit.omit();
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should support required-implicit body", async () => {
    try {
      const result = await client.requiredImplicit("foo");
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
