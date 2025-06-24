import { assert } from "chai";
import PageableClientFactory, {
  PageableClient,
  paginate,
  PetOutput
} from "./generated/payload/pageable/src/index.js";

describe("Pageable Client", () => {
  let client: PageableClient;

  beforeEach(() => {
    client = PageableClientFactory({
      allowInsecureConnection: true
    });
  });

  it("should get pagable Server Driven Pagination link", async () => {
    const initialResponse = await client
      .path("/payload/pageable/server-driven-pagination/link")
      .get();
    const iter = paginate(client, initialResponse);
    let result: PetOutput[] = [];
    for await (const item of iter) {
      result.push(item);
    }
    assert.strictEqual(result.length, 4);
    assert.strictEqual(result[0]?.id, "1");
    assert.strictEqual(result[0]?.name, "dog");
    assert.strictEqual(result[1]?.id, "2");
    assert.strictEqual(result[1]?.name, "cat");
    assert.strictEqual(result[2]?.name, "bird");
    assert.strictEqual(result[3]?.name, "fish");
  });
});
