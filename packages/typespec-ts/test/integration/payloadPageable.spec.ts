import { assert } from "chai";
import PageableClientFactory, {
  PageableClient,
  paginate
} from "./generated/payload/pageable/src/index.js";

describe("Pageable Client", () => {
  let client: PageableClient;

  beforeEach(() => {
    client = PageableClientFactory({
      allowInsecureConnection: true
    });
  });

  // Not support, pending on https://github.com/Azure/autorest.typescript/issues/3022
  it("should get pagable Server Driven Pagination link", async () => {
    const initialResponse = await client
      .path("/payload/pageable/server-driven-pagination/link")
      .get();

    const iter = paginate(client, initialResponse);

    let result = [];
    for await (const item of iter) {
      result.push(item);
    }
    assert.strictEqual(result.body.pets[0]?.id, "1");
    assert.strictEqual(result.body.pets[0]?.name, "dog");
    assert.strictEqual(result.body.pets[1]?.id, "2");
    assert.strictEqual(result.body.pets[1]?.name, "cat");
    assert.strictEqual(result.body.pets[2]?.id, "3");
    assert.strictEqual(result.body.pets[2]?.name, "bird");
    assert.strictEqual(result.body.pets[3]?.id, "4");
    assert.strictEqual(result.body.pets[3]?.name, "fish");
    assert.strictEqual(
      result.body.next,
      "http://localhost:3000/payload/pageable/server-driven-pagination/link/nextPage"
    );
  });
});
