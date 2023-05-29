import UnionsClientFactory, {
  UnionsClient
} from "./generated/unions/src/index.js";
import { assert } from "chai";
describe("UnionsClient Rest Client", () => {
  let client: UnionsClient;

  beforeEach(() => {
    client = UnionsClientFactory({ allowInsecureConnection: true });
  });

  it("should post input simple number union", async () => {
    try {
      const result = await client.path("/type/union/int").post({
        body: {
          simpleUnion: 1
        }
      });
      assert.strictEqual(result.status, "200");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post simple number array union", async () => {
    try {
      const result = await client.path("/type/union/int-array").post({
        body: {
          simpleUnion: [1, 2]
        }
      });
      assert.strictEqual(result.status, "200");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post named union model1", async () => {
    try {
      const result = await client.path("/type/union/model1").post({
        body: {
          namedUnion: {
            name: "model1",
            prop1: 1
          }
        }
      });
      assert.strictEqual(result.status, "200");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should post named union model2", async () => {
    try {
      const result = await client.path("/type/union/model2").post({
        body: {
          namedUnion: {
            name: "model2",
            prop2: 2
          }
        }
      });
      assert.strictEqual(result.status, "200");
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
