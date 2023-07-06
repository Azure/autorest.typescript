import { StandardClient } from "../modularIntegration/generated/lro_modular/generated/src/index.js";
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
      const poller = await client.beginCreateOrReplace("contributor", "madge", {
        requestOptions: {
          allowInsecureConnection: true
        }
      });
      const result = await poller.pollUntilDone();
      console.log(result);
    } catch (err) {
      console.log(err);
      assert.fail(err as string);
    }
  });

  it("should delete LRO response", async () => {
    try {
      const poller = await client.beginDelete("madge", {
        requestOptions: {
          allowInsecureConnection: true
        }
      });
      const result = await poller.pollUntilDone();
      assert.equal(result.status, "Succeeded");
    } catch (err) {
      console.log(err);
      assert.fail(err as string);
    }
  });

  it("should export LRO response", async () => {
    try {
      const poller = await client.beginExport("madge", "json", {
        requestOptions: {
          allowInsecureConnection: true
        }
      });
      const result = await poller.pollUntilDone();
      assert.equal(result.name, "madge");
      assert.equal(result.resourceUri, "/users/madge");
    } catch (err) {
      console.log(err);
      assert.fail(err as string);
    }
  });
});
