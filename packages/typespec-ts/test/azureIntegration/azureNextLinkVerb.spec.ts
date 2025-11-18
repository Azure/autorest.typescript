import { assert } from "chai";
import NextLinkVerbClientFactory, {
  NextLinkVerbClient,
  TestOutput,
  paginate
} from "./generated/azure/client-generator-core/next-link-verb/src/index.js";

describe("NextLinkVerb Rest Client", () => {
  let client: NextLinkVerbClient;

  beforeEach(() => {
    client = NextLinkVerbClientFactory({
      allowInsecureConnection: true
    });
  });

  it("should list items with POST method", async () => {
    const result = await client
      .path("/azure/client-generator-core/next-link-verb/items")
      .post();
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.items[0]?.id, "test1");
    assert.strictEqual(
      result.body.nextLink,
      "http://localhost:3000/azure/client-generator-core/next-link-verb/items/page/2"
    );
  });

  it("should paginate items using POST method with customGetPage", async () => {
    const initialResponse = await client
      .path("/azure/client-generator-core/next-link-verb/items")
      .post();

    const iter = paginate(client, initialResponse, {
      customGetPage: async (pageLink: string) => {
        const result = pageLink
          ? await client.pathUnchecked(pageLink).post()
          : initialResponse;

        return {
          page: result.body.items ?? [],
          nextPageLink: result.body.nextLink
        };
      }
    });

    const result: TestOutput[] = [];
    for await (const item of iter) {
      result.push(item);
    }

    assert.strictEqual(result.length, 2);
    assert.strictEqual(result[0]?.id, "test1");
    assert.strictEqual(result[1]?.id, "test2");
  });
});
