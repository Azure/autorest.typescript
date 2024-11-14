import { assert } from "chai";
import { AccessClient } from "./generated/azure/client-generator-core/access/src/index.js";
describe("Azure ClientGeneratorCore Access Client", () => {
  let client: AccessClient;

  beforeEach(() => {
    client = new AccessClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it("should get no decorator in public operation", async () => {
    try {
      const result = await client.noDecoratorInPublic("sample");
      assert.equal(result.name, "sample");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get public decorator in public operation", async () => {
    try {
      const result = await client.publicDecoratorInPublic("sample");
      assert.equal(result.name, "sample");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get no decorator in internal operation", async () => {
    try {
      const result = await client.noDecoratorInInternal("sample");
      assert.equal(result.name, "sample");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get internal decorator in internal operation", async () => {
    try {
      const result = await client.internalDecoratorInInternal("sample");
      assert.equal(result.name, "sample");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get public decorator in internal operation", async () => {
    try {
      const result = await client.publicDecoratorInInternal("sample");
      assert.equal(result.name, "sample");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get public shared model in operation", async () => {
    try {
      const result = await client.public("sample");
      assert.equal(result.name, "sample");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get internal shared model in operation", async () => {
    try {
      const result = await client.internal("sample");
      assert.equal(result.name, "sample");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get relative model in operation", async () => {
    try {
      const result = await client.operation("Madge");
      assert.equal(result.name, "Madge");
      assert.equal(result.inner.name, "Madge");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get relative model in discriminator", async () => {
    try {
      const result = await client.discriminator("real");
      assert.equal(result.name, "Madge");
      assert.equal(result.kind, "real");
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
