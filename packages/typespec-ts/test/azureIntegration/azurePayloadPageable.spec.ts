import { assert } from "chai";
import PageableClientFactory, {
  PageableClient
} from "./generated/azure/payload/pageable/src/index.js";

describe("Azure Pageable Client", () => {
  let client: PageableClient;

  beforeEach(() => {
    client = PageableClientFactory({
      allowInsecureConnection: true
    });
  });

  it("should get pagable list without skiptoken", async () => {
    const result = await client
      .path("/azure/payload/pageable")
      .get({ queryParameters: { maxpagesize: 3 } });
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.value[0]?.name, "user5");
    assert.strictEqual(result.body.value[1]?.name, "user6");
    assert.strictEqual(result.body.value[2]?.name, "user7");
    assert.strictEqual(
      result.body.nextLink,
      "http://localhost:3000/azure/payload/pageable?skipToken=name-user7&maxpagesize=3"
    );
  });

  it("should get pagable list with skiptoken", async () => {
    const result = await client
      .path("/azure/payload/pageable")
      .get({ queryParameters: { maxpagesize: 3, skipToken: "name-user7" } });
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.value[0]?.name, "user8");
  });

  it("should get pagable list with wrong skiptoken", async () => {
    const result = await client
      .path("/azure/payload/pageable")
      .get({ queryParameters: { maxpagesize: 3, skipToken: "wrong value" } });
    assert.strictEqual(result.status, "400");
    assert.strictEqual(
      (result.body as any).message,
      "Unsupported skipToken query parameter"
    );
    assert.strictEqual(
      (result.body as any).expected,
      `Not provided for first page, "name-user7" for second page`
    );
    assert.strictEqual((result.body as any).actual, "wrong value");
  });

  it("should get pagable list", async () => {
    const result = await client
      .path("/azure/payload/pageable")
      .get({ queryParameters: { maxpagesize: 3 } });

    assert.deepEqual(result.body.value, [
      { name: "user5" },
      { name: "user6" },
      { name: "user7" }
    ]);
  });
});
