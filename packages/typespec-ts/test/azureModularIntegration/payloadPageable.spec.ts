import {
    PageableClient,
} from "./generated/payload/pageable/src/index.js";
import { assert } from "chai";

describe("PageableClient Classical Client", () => {
    let client: PageableClient;

    beforeEach(() => {
        client = new PageableClient({
            endpoint: "http://localhost:3002",
            allowInsecureConnection: true
        });
    });

    it("Payload Pageable ServerDriven Pagination link", async () => {
        const result = await client.serverDrivenPagination.link();
        assert.strictEqual(result.pets[0]?.id, '1');
        assert.strictEqual(result.pets[0]?.name, 'dog');
        assert.strictEqual(result.pets[1]?.id, '2');
        assert.strictEqual(result.pets[1]?.name, 'cat');
        assert.strictEqual(result.links.next, "http://localhost:3002/payload/pageable/server-driven-pagination/link/nextPage");
    });

});