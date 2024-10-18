import { assert } from "chai";
import { RoutesClient } from "./generated/routes/src/index.js";

describe("Routes Client", () => {
  let client: RoutesClient;

  beforeEach(() => {
    client = new RoutesClient({
      allowInsecureConnection: true,
      endpoint: "http://localhost:3002"
    });
  });

  it("should work with Routes_PathParameters_ReservedExpansion_annotation", async () => {
    try {
      const result =
        await client.pathParameters.reservedExpansion.annotation(
          "foo/bar%20baz"
        );
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });
  it("should work with Routes_PathParameters_ReservedExpansion_template", async () => {
    try {
      const result =
        await client.pathParameters.reservedExpansion.template("foo/bar%20baz");
      assert.isUndefined(result);
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
