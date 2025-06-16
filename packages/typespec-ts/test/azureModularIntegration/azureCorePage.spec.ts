import { PageClient, User } from "./generated/azure/core/page/src/index.js";
import { createPage } from "./generated/azure/core/page/src/api/index.js";
import {
  _withParameterizedNextLinkSend,
  _withParameterizedNextLinkDeserialize
} from "./generated/azure/core/page/src/api/operations.js";
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
    const result = client.listWithPage();
    const items: User[] = [];
    for await (const page of result) {
      items.push(page);
    }
    assert.strictEqual(items.length, 1);
    assert.strictEqual(items[0]?.name, validUser.name);
    assert.strictEqual(items[0]?.id, validUser.id);
    assert.strictEqual(items[0]?.etag, validUser.etag);
  });

  it("should list core page withParameters", async () => {
    const validBody = { inputName: "Madge" };
    const result = client.listWithParameters(validBody, {
      another: "Second"
    });
    const items: User[] = [];
    for await (const parameter of result) {
      items.push(parameter);
    }
    assert.strictEqual(items.length, 1);
    assert.strictEqual(items[0]?.name, validUser.name);
    assert.strictEqual(items[0]?.id, validUser.id);
    assert.strictEqual(items[0]?.etag, validUser.etag);
  });

  it("should get core page TwoModelsAsPageItem", async () => {
    const result1 = await client.listFirstItem();
    const firstItems = [];
    for await (const user of result1) {
      firstItems.push(user);
    }
    assert.strictEqual(firstItems.length, 1);
    assert.strictEqual(firstItems[0]?.id, 1);
    const result2 = await client.listSecondItem();
    const secondItems = [];
    for await (const user of result2) {
      secondItems.push(user);
    }
    assert.strictEqual(secondItems.length, 1);
    assert.deepStrictEqual(secondItems[0]?.name, "Madge");
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

  it.skip("should list core page withParameterizedNextLink", async () => {
    // This scenario tests the Azure.Core.Legacy.parameterizedNextLink decorator

    const context = createPage({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true
    });

    // Expected query parameters on initial request: includePending=true, select=name
    const firstPageCall = _withParameterizedNextLinkSend(context, "name", {
      includePending: true
    });
    const firstPageResponse = await firstPageCall;
    const firstPageResult =
      await _withParameterizedNextLinkDeserialize(firstPageResponse);

    const items: User[] = [];

    // Collect items from first page
    if (firstPageResult.values) {
      items.push(...firstPageResult.values);
    }

    // but select=name is preserved automatically in the nextLink
    if (firstPageResult.nextLink) {
      // Verify that select=name is preserved in nextLink automatically
      const nextUrl = new URL(firstPageResult.nextLink);
      assert.strictEqual(
        nextUrl.searchParams.get("select"),
        "name",
        "select parameter should be preserved in nextLink"
      );

      // Manually re-inject the includePending parameter as required by the specification
      nextUrl.searchParams.set("includePending", "true");

      const secondPageResponse = await context
        .pathUnchecked(nextUrl.pathname + nextUrl.search)
        .get();

      if (
        secondPageResponse.status === "200" &&
        secondPageResponse.body.values
      ) {
        items.push(...secondPageResponse.body.values);
      }
    }

    // Verify expected concatenation of paged items
    assert.strictEqual(items.length, 2);
    assert.strictEqual(items[0]?.id, 1);
    assert.strictEqual(items[0]?.name, "User1");
    assert.strictEqual(items[1]?.id, 2);
    assert.strictEqual(items[1]?.name, "User2");
  });
});
