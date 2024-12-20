import { assert } from "chai";
import PageableClientFactory, {
  PageableClient,
} from "./generated/payload/pageable/src/index.js";
// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

const port = process.env["PORT"] || "3000";
describe("Pageable Client", () => {
  let client: PageableClient;

  beforeEach(() => {
    client = PageableClientFactory({
      endpoint: `http://localhost:${port}`,
      allowInsecureConnection: true
    });
  });

  it("should Payload_Pageable_ServerDrivenPagination_link", async () => {
    const result = await client
      .path("/payload/pageable/server-driven-pagination/link")
      .get();
    assert.strictEqual(result.status, "200");
    assert.strictEqual(result.body.pets[0]!.id, '1');
    assert.strictEqual(result.body.pets[0]!.name, 'dog');
    assert.strictEqual(result.body.pets[1]!.id, '2');
    assert.strictEqual(result.body.pets[1]!.name, 'cat');
    assert.strictEqual(
      result.body.links.next,
      `http://localhost:${port}/payload/pageable/server-driven-pagination/link/nextPage`
    );
  });
});
