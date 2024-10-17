import { assert } from "chai";
import { RoutesClient } from "./generated/routes/src/index.js";

describe.only("Routes Client", () => {
  let client: RoutesClient;

  beforeEach(() => {
    client = new RoutesClient({
      allowInsecureConnection: true
    });
  });

  it("should work with Routes_InInterface", async () => {
    try {
      const result = await client.inInterface.fixed();
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
