import { assert } from "chai";
import InternalClientFactory, {
  InternalClient
} from "./generated/internal/src/index.js";
describe("Internal Rest Client", () => {
  let client: InternalClient;

  beforeEach(() => {
    client = InternalClientFactory({
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it("should get internal only", async () => {
    try {
      const result = await client
        .path("/azure/client-generator-core/internal/internal")
        .get({
          queryParameters: {
            name: "any"
          }
        });
      assert.strictEqual(result.status, "200");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get internal", async () => {
    try {
      const result = await client
        .path("/azure/client-generator-core/internal/public")
        .get({
          queryParameters: {
            name: "any"
          }
        });
      assert.strictEqual(result.status, "200");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get shared public", async () => {
    try {
      const result = await client
        .path("/azure/client-generator-core/internal/shared/public")
        .get({
          queryParameters: {
            name: "any"
          }
        });
      assert.strictEqual(result.status, "200");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get shared internal", async () => {
    try {
      const result = await client
        .path("/azure/client-generator-core/internal/shared/internal")
        .get({
          queryParameters: {
            name: "any"
          }
        });
      assert.strictEqual(result.status, "200");
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
