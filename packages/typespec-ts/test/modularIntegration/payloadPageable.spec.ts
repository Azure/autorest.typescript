import {
  PageableClient,
} from "./generated/payload/pageable/src/index.js";
import { assert } from "chai";
// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

const port = process.env["PORT"] || "3000";
describe("PageableClient Classical Client", () => {
  let client: PageableClient;

  beforeEach(() => {
    client = new PageableClient({
      endpoint: `http://localhost:${port}`,
      allowInsecureConnection: true
    });
  });

  it("should Payload_Pageable_ServerDrivenPagination_link", async () => {
    const iter = await client.serverDrivenPagination.link();
    assert.strictEqual(iter.pets.length, 2);
    assert.strictEqual(iter.pets[0]!.id, '1');
    assert.strictEqual(iter.pets[0]!.name, 'dog');
    assert.strictEqual(iter.pets[1]!.id, '2');
    assert.strictEqual(iter.pets[1]!.name, 'cat');
    assert.strictEqual(iter.links.next, `http://localhost:${port}/payload/pageable/server-driven-pagination/link/nextPage`);
  });
});
