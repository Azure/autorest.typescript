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
      console.log(result);
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
