import { PageClient, User } from "./generated/azure/core/page/src/index.js";
import { assert } from "chai";

describe("Page Client", () => {
  let client: PageClient;

  beforeEach(() => {
    client = new PageClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true
    });
  });
  const validUser = {
    id: 1,
    name: "Madge",
    etag: "11bdc430-65e8-45ad-81d9-8ffa60d55b59"
  };

  it("should list core page withPage", async () => {
    const result = await client.listWithPage();

    assert.strictEqual(result.value.length, 1);
    assert.strictEqual(result.value[0]?.name, validUser.name);
    assert.strictEqual(result.value[0]?.id, validUser.id);
    assert.strictEqual(result.value[0]?.etag, validUser.etag);
  });

  it("should list core page withParameters", async () => {
    const validBody = { inputName: "Madge" };
    const result = await client.listWithParameters(validBody, {
      another: "Second"
    });
    assert.strictEqual(result.value.length, 1);
    assert.strictEqual(result.value[0]?.name, validUser.name);
    assert.strictEqual(result.value[0]?.id, validUser.id);
    assert.strictEqual(result.value[0]?.etag, validUser.etag);
  });

  it("should get core page TwoModelsAsPageItem", async () => {
    const result1 = await client.listFirstItem();
    assert.strictEqual(result1.value.length, 1);
    assert.strictEqual(result1.value[0]?.id, 1);
    const result2 = await client.listSecondItem();
    assert.strictEqual(result2.value.length, 1);
    assert.deepStrictEqual(result2.value[0]?.name, "Madge");
  });

  it("should list core page withCustomPageModel", async () => {
    const result = client.listWithCustomPageModel();
    const items: User[] = [];
    for await (const model of result) {
      items.push(model);
    }
    assert.strictEqual(items.length, 1);
    assert.strictEqual(items[0]?.name, validUser.name);
    assert.strictEqual(items[0]?.id, validUser.id);
    assert.strictEqual(items[0]?.etag, validUser.etag);
  });

  it("should list core page withParameterizedNextLink", async () => {
    // TODO: We can only get the first page data because the parameter re-injection is not implemented yet.
    const result = await client
      .withParameterizedNextLink("name", { includePending: true })
      .next();
    assert.strictEqual(result.value.name, "User1");
  });
});
