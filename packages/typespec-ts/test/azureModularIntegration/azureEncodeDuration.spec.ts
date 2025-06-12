import { assert } from "chai";
import { DurationClient } from "./generated/azure/encode/duration/src/index.js";

describe("Azure Encode Duration Client", () => {
    let client: DurationClient;

    beforeEach(() => {
        client = new DurationClient({
            endpoint: "http://localhost:3002",
            allowInsecureConnection: true
        });
    });

    describe("durationConstant", () => {
        it("should handle duration constant with azure specific encoding", async () => {
            const result = await client.durationConstant({
                input: "1.02:59:59.5000000"
            });
            assert.isUndefined(result);
        });
    });
});