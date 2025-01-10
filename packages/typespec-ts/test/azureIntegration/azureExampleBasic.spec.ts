import BasicClientFactory, {
    BasicClient
} from "./generated/azure/example/basic/src/index.js";
import { assert } from "chai";
describe("Azure Example Basic Rest Client", () => {
    let client: BasicClient;

    beforeEach(() => {
        client = BasicClientFactory({ allowInsecureConnection: true });
    });

    it("should support azure example client", async () => {
        const result = await client
            .path("/azure/example/basic/basic")
            .post({
                queryParameters: { "query-param": "query" },
                body: {
                    stringProperty: "text",
                    modelProperty: {
                        int32Property: 1,
                        float32Property: 1.5,
                        enumProperty: "EnumValue1",
                    },
                    arrayProperty: ["item"],
                    recordProperty: {
                        record: "value",
                    }
                },
                headers: {
                    "header-param": "header",
                }
            });
        assert.strictEqual(result.status, "200");
        assert.strictEqual(result.body.stringProperty, "text");
    });

});
