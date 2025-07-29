import { PageableClient } from "./generated/azure/payload/pageable/src/index.js";
import { assert } from "chai";

describe("Azure PageableClient Classical Client", () => {
  let client: PageableClient;

  beforeEach(() => {
    client = new PageableClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true
    });
  });

  it("should throw exceptions if no maxpagesize set", async () => {
    try {
      await client.list();
      assert.fail("Should throw exception");
    } catch (err: any) {
      assert.strictEqual(
        err.message,
        "Expected query param maxpagesize=3 but got undefined"
      );
    }
  });

  it("should list all users if maxpagesize=3", async () => {
    const result = await client.list({
      maxpagesize: 3
    });
    console.log(result);
    assert.strictEqual(result.value.length, 3);
    assert.strictEqual(result.value[0]?.name, "user5");
    assert.strictEqual(result.value[1]?.name, "user6");
    assert.strictEqual(result.value[2]?.name, "user7");
  });

  //TODO: next link not working as it should include the base url
  it.skip("should list all users ", async () => {
    const result = await client.list({
      maxpagesize: 3
    });
    assert.strictEqual(result.value.length, 4);
  });
});
