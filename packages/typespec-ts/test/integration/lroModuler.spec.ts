import { StandardClient } from "./generated/lroModuler/moduler/src/index.js";
import { assert } from "chai";
describe.only("LroModulerClient Rest Client", () => {
  let client: StandardClient;

  beforeEach(() => {});

  it("should put LRO with beginCreateOrReplace", async () => {
    client = new StandardClient({
      allowInsecureConnection: true
    });
    const poller = await client.beginCreateOrReplace("contributor", "madge", {
      requestOptions: {
        allowInsecureConnection: true
      }
    });
    const result = await poller.pollUntilDone();
    assert.equal(result.name, "madge");
    assert.equal(result.role, "contributor");
  });

  it("should put LRO with beginCreateOrReplaceAndWait", async () => {
    client = new StandardClient({
      allowInsecureConnection: true
    });
    const result = await client.beginCreateOrReplaceAndWait(
      "contributor",
      "madge",
      {
        requestOptions: {
          allowInsecureConnection: true
        }
      }
    );
    assert.equal(result.name, "madge");
    assert.equal(result.role, "contributor");
  });
});
