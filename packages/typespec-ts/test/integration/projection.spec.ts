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
      const result = await client.path("/projection/json").post({
        body: {
          codegen: "DPG"
        }
      });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should not respect client projection", async () => {
    try {
      const result = await client.path("/projection/client").post({
        body: {
          builtfrom: "DPG"
        }
      });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should not respect language projection", async () => {
    try {
      const result = await client.path("/projection/language").post({
        body: {
          wasMadeFor: "customers"
        }
      });
      assert.strictEqual(result.status, "204");
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
