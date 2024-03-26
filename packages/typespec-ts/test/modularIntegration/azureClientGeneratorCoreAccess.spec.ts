import { assert } from "chai";
import { AccessClient } from "./generated/azure/clientGeneratorCore/access/src/index.js";
describe("Azure ClientGeneratorCore Access Client", () => {
  let client: AccessClient;

  beforeEach(() => {
    client = new AccessClient({
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it("should get no decorator in public operation", async () => {
    try {
      const result = await client.noDecoratorInPublic("myname");
      assert.equal(result.name, "myname");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get public decorator in public operation", async () => {
    try {
      const result = await client.publicDecoratorInPublic("myname");
      assert.equal(result.name, "myname");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get no decorator in internal operation", async () => {
    try {
      const result = await client.noDecoratorInInternal("myname");
      assert.equal(result.name, "myname");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get internal decorator in internal operation", async () => {
    try {
      const result = await client.internalDecoratorInInternal("myname");
      assert.equal(result.name, "myname");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get public decorator in internal operation", async () => {
    try {
      const result = await client.publicDecoratorInInternal("myname");
      assert.equal(result.name, "myname");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get public shared model in operation", async () => {
    try {
      const result = await client.publicOperation("myname");
      assert.equal(result.name, "myname");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get internal shared model in operation", async () => {
    try {
      const result = await client.internal("myname");
      assert.equal(result.name, "myname");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get relative model in operation", async () => {
    try {
      const result = await client.operation("myname");
      assert.equal(result.name, "Madge");
      assert.equal(result.inner.name, "Madge");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get relative model in discriminator", async () => {
    try {
      const result = await client.discriminator("myname");
      assert.equal(result.name, "Madge");
      assert.equal(result.kind, "real");
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
