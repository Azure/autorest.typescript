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
        const result = client.serverDrivenPagination.link();
        const items = [];
        for await (const user of result) {
            items.push(user);
        }
        assert.strictEqual(items.length, 2);
        assert.strictEqual(items[0]?.id, '1');
        assert.strictEqual(items[0]?.name, 'dog');
        assert.strictEqual(items[1]?.id, '2');
        assert.strictEqual(items[1]?.name, 'cat');
    });

});