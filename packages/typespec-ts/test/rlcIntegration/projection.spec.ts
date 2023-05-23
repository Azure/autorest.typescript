import { assert } from "chai";
import ProjectionClientFactory, {
  ProjectionClient
} from "./generated/projection/src/index.js";
describe("Projected Name Rest Client", () => {
  let client: ProjectionClient;

  beforeEach(() => {
    client = ProjectionClientFactory({
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it("should respect json projection", async () => {
    try {
      const result = await client
        .path("/projection/projected-name/property/json")
        .post({
          body: {
            wireName: true
          }
        });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should not respect client projection", async () => {
    try {
      const result = await client
        .path("/projection/projected-name/property/client")
        .post({
          body: {
            defaultName: true
          }
        });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should not respect language projection", async () => {
    try {
      const result = await client
        .path("/projection/projected-name/property/language")
        .post({
          body: {
            defaultName: true
          }
        });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should not respect language projection", async () => {
    try {
      const result = await client
        .path("/projection/projected-name/property/json-and-client")
        .post({
          body: {
            wireName: true
          }
        });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should not respect operation projection", async () => {
    try {
      const result = await client
        .path("/projection/projected-name/operation")
        .post();
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should not respect operation projection", async () => {
    try {
      const result = await client
        .path("/projection/projected-name/parameter")
        .post({
          queryParameters: {
            "default-name": "true"
          }
        });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
