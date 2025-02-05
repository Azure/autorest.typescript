import { assert } from "chai";
import ClientNamespaceClientFactory, {
    ClientNamespaceClient
} from "./generated/client/namespace/src/index.js";
describe("ClientNameSpaceClient Rest Client", () => {
    let client: ClientNamespaceClient;

    beforeEach(() => {
        client = ClientNamespaceClientFactory({
            allowInsecureConnection: true
        });
    });

    it("should get Client ClientNamespace first", async () => {
        const result = await client.path("/client/client-namespace/first").get();
        assert.strictEqual(result.status, "200");
        assert.strictEqual(result.body.name, "first");
    });

    it("should get Client ClientNamespace second", async () => {
        const result = await client.path("/client/client-namespace/second").get();
        assert.strictEqual(result.status, "200");
        assert.strictEqual(result.body.type, "second");
    });
});
