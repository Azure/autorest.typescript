import { assert } from "chai";
import PageableClientFactory, {
  PageableClient,
  UserOutput,
  paginate
} from "./generated/payload/pageable/src/index.js";

describe("Pageable Client", () => {
  let client: PageableClient;

  beforeEach(() => {
    client = PageableClientFactory({
      allowInsecureConnection: true,
      retryOptions: {
        maxRetries: 0
      }
    });
  });

  it("should get pagable list without skiptoken", async () => {
    try {
      const result = await client
        .path("/payload/pageable")
        .get({ queryParameters: { maxpagesize: 3 } });
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body.value[0]?.name, "user5");
      assert.strictEqual(result.body.value[1]?.name, "user6");
      assert.strictEqual(result.body.value[2]?.name, "user7");
      assert.strictEqual(
        result.body.nextLink,
        "http://localhost:3000/payload/pageable?skipToken=name-user7&maxpagesize=3"
      );
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get pagable list with skiptoken", async () => {
    try {
      const result = await client
        .path("/payload/pageable")
        .get({ queryParameters: { maxpagesize: 3, skipToken: "name-user7" } });
      assert.strictEqual(result.status, "200");
      assert.strictEqual(result.body.value[0]?.name, "user8");
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get pagable list with wrong skiptoken", async () => {
    try {
      const result = await client
        .path("/payload/pageable")
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
    } catch (err) {
      assert.fail(err as string);
    }
  });

  it("should get pagable list", async () => {
    try {
      const initialResponse = await client
        .path("/payload/pageable")
        .get({ queryParameters: { maxpagesize: 3 } });

      const iter = paginate(client, initialResponse);

      let result: UserOutput[] = [];
      for await (const item of iter) {
        result.push(item);
      }

      assert.deepEqual(result, [
        { name: "user5" },
        { name: "user6" },
        { name: "user7" },
        { name: "user8" }
      ]);
    } catch (err) {
      assert.fail(err as string);
    }
  });
});
