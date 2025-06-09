import { assert } from "chai";
import {
    NonResourceClient
} from "./generated/azure/resource-manager/non-resource/src/index.js";
describe("Azure Arm Non Resource Client", () => {
    let client: NonResourceClient;
    const SUBSCRIPTION_ID_EXPECTED = "00000000-0000-0000-0000-000000000000";
    const LOCATION_EXPECTED = "eastus";

    const nonResource = {
        id: "id",
        name: "hello",
        type: "nonResource",
    };

    beforeEach(() => {
        client = new NonResourceClient(SUBSCRIPTION_ID_EXPECTED, {
            endpoint: "http://localhost:3002",
            allowInsecureConnection: true
        });
    });

    it("should get Non Resource", async () => {
        const result = await client.nonResourceOperations.get(LOCATION_EXPECTED, "hello");
        assert.strictEqual(result.id, nonResource.id);
        assert.strictEqual(result.name, nonResource.name);
        assert.strictEqual(result.type, nonResource.type);
    });
    it("should create Non Resource", async () => {
        const result = await client.nonResourceOperations.create(LOCATION_EXPECTED, "hello", nonResource);
        assert.strictEqual(result.id, nonResource.id);
        assert.strictEqual(result.name, nonResource.name);
        assert.strictEqual(result.type, nonResource.type);
    });
});
