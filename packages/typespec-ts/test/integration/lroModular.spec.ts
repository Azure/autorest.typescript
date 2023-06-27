import { StandardClient } from "./generated/lro_modular/src/index.js";
import { assert } from "chai";
describe("AzureLroCoreClient Rest Client", () => {
  let client: StandardClient;

  beforeEach(() => {
    client = new StandardClient({
      allowInsecureConnection: true
    });
  });

  it("should put LRO response", async () => {
    try {
      const result = await client.beginCreateOrReplace("contributor", "madge", {
        requestOptions: {
          allowInsecureConnection: true
        }
      });
      console.log(result);
    } catch (err) {
      console.log(err);
      assert.fail(err as string);
    }
  });

  it("should export LRO response", async () => {
    try {
      const result = await client.beginExport("contributor", "madge", {
        requestOptions: {
          allowInsecureConnection: true
        }
      });
      console.log(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
