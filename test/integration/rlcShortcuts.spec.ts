import { assert } from "chai";
import MultipleInheritance from "./generated/multipleInheritanceRest/src";
import Url from "./generated/urlRest/src";

describe("Rest Client Shortcut methods", () => {
  it("should have a client level get method", async () => {
    const client = MultipleInheritance({ allowInsecureConnection: true });
    const result = await client.getFeline();

    if (result.status !== "200") {
      const error = `Unexpected status code ${result.status}`;
      assert.fail(error);
      throw error;
    }

    assert.isTrue(result.body.meows);
  });

  it("should handle client level method with request payload", async () => {
    const client = MultipleInheritance({ allowInsecureConnection: true });
    const result = await client.putCat({
      body: { name: "Boots", likesMilk: false, hisses: false, meows: true }
    });

    assert.equal(result.status, "200");
  });

  it("should have a get method within an operation group", async () => {
    const client = Url({ allowInsecureConnection: true });
    const result = await client.paths.getBooleanFalse(false);

    assert.equal(result.status, "200");
  });

  it("should handle a method within operation group with path parameters", async () => {
    const client = Url({ allowInsecureConnection: true });
    const result = await client.paths.doubleDecimalPositive(9999999.999);

    assert.equal(result.status, "200");
  });

  it("should handle a method with query parameters", async () => {
    const client = Url({ allowInsecureConnection: true });
    const result = await client.queries.doubleDecimalPositive({
      queryParameters: { doubleQuery: 9999999.999 }
    });

    assert.equal(result.status, "200");
  });
});
