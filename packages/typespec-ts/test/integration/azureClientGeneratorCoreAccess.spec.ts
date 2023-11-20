import { assert } from "chai";
import AccessClientFactory, {
  AccessClient
} from "./generated/azure/clientGeneratorCore/access/src/index.js";

describe("Access Client", () => {
  let client: AccessClient;

  beforeEach(() => {
    client = AccessClientFactory({
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it("should get no decorator in public operation", async () => {
    try {
      const result = await client
        .path(
          "/azure/client-generator-core/access/publicOperation/noDecoratorInPublic"
        )
        .get({ queryParameters: { name: "myname" } });
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body.name, "myname");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get public decorator in public operation", async () => {
    try {
      const result = await client
        .path(
          "/azure/client-generator-core/access/publicOperation/publicDecoratorInPublic"
        )
        .get({ queryParameters: { name: "myname" } });
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body.name, "myname");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get no decorator in internal operation", async () => {
    try {
      const result = await client
        .path(
          "/azure/client-generator-core/access/internalOperation/noDecoratorInInternal"
        )
        .get({ queryParameters: { name: "myname" } });
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body.name, "myname");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get internal decorator in internal operation", async () => {
    try {
      const result = await client
        .path(
          "/azure/client-generator-core/access/internalOperation/internalDecoratorInInternal"
        )
        .get({ queryParameters: { name: "myname" } });
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body.name, "myname");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get internal decorator in internal operation", async () => {
    try {
      const result = await client
        .path(
          "/azure/client-generator-core/access/internalOperation/internalDecoratorInInternal"
        )
        .get({ queryParameters: { name: "myname" } });
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body.name, "myname");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get public decorator in internal operation", async () => {
    try {
      const result = await client
        .path(
          "/azure/client-generator-core/access/internalOperation/publicDecoratorInInternal"
        )
        .get({ queryParameters: { name: "myname" } });
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body.name, "myname");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get public shared model in operation", async () => {
    try {
      const result = await client
        .path(
          "/azure/client-generator-core/access/sharedModelInOperation/public"
        )
        .get({ queryParameters: { name: "myname" } });
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body.name, "myname");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get internal shared model in operation", async () => {
    try {
      const result = await client
        .path(
          "/azure/client-generator-core/access/sharedModelInOperation/internal"
        )
        .get({ queryParameters: { name: "myname" } });
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body.name, "myname");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get relative model in operation", async () => {
    try {
      const result = await client
        .path(
          "/azure/client-generator-core/access/relativeModelInOperation/operation"
        )
        .get({
          queryParameters: { name: "Madge", inner: { name: "Madge" } }
        });
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body.name, "Madge");
      assert.strictEqual(result.body.inner.name, "Madge");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get relative model in discriminator", async () => {
    try {
      const result = await client
        .path(
          "/azure/client-generator-core/access/relativeModelInOperation/discriminator"
        )
        .get({ queryParameters: { name: "Madge", kind: "real" } });
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body.name, "Madge");
      assert.strictEqual(result.body.kind, "real");
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
