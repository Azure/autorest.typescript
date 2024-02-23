import { assert } from "chai";
import { NameAndEncodedNameClient } from "./generated/projection/client-encoded-name/src/index.js";
describe.only("NameAndEncodedName Client", () => {
  let client: NameAndEncodedNameClient;

  beforeEach(() => {
    client = new NameAndEncodedNameClient({
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it.only("should work with property json", async () => {
    try {
      const result = await client.property.json({ defaultName: true });
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it.skip("should work with property client", async () => {
    try {
      const result = await client.property.client({ defaultName: true });
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it.skip("should work with property language", async () => {
    try {
      const result = await client.property.language({ defaultName: true });
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it.skip("should work with property jsonAndClient", async () => {
    try {
      const result = await client.property.jsonAndClient({ defaultName: true });
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it.skip("should work with operation", async () => {
    try {
      const result = await client.operation();
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it.skip("should work with parameter", async () => {
    try {
      const result = await client.parameter("true");
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it.skip("should work with header", async () => {
    try {
      const result = await client.header("true");
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it.skip("should work with model client", async () => {
    try {
      const result = await client.model.client({ defaultName: true });
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it.skip("should work with model language", async () => {
    try {
      const result = await client.model.language({ defaultName: true });
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
