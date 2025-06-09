import { assert } from "chai";
import AzureArmNonResourceClientFactory, {
    AzureArmNonResourceClient,
    isUnexpected
} from "./generated/azure/resource-manager/non-resource/src/index.js";
describe("Azure Arm Non Resource Rest Client", () => {
    let client: AzureArmNonResourceClient;

    beforeEach(() => {
        client = AzureArmNonResourceClientFactory({
            endpoint: "http://localhost:3000",
            allowInsecureConnection: true
        });
    });

    const SUBSCRIPTION_ID_EXPECTED = "00000000-0000-0000-0000-000000000000";
    const LOCATION_EXPECTED = "eastus";

    const nonResource = {
        id: "id",
        name: "hello",
        type: "nonResource",
    };
    it("should get non resources", async () => {
        const result = await client.path("/subscriptions/{subscriptionId}/providers/Microsoft.NonResource/locations/{location}/otherParameters/{parameter}", SUBSCRIPTION_ID_EXPECTED, LOCATION_EXPECTED, "hello").get();
        assert.equal(result.status, "200");
        if (isUnexpected(result)) {
            throw Error("Unexpected status code");
        }
        assert.strictEqual(result.body.id, nonResource.id);
        assert.strictEqual(result.body.name, nonResource.name);
        assert.strictEqual(result.body.type, nonResource.type);
    });
    it("should create non resources", async () => {
        const result = await client.path("/subscriptions/{subscriptionId}/providers/Microsoft.NonResource/locations/{location}/otherParameters/{parameter}", SUBSCRIPTION_ID_EXPECTED, LOCATION_EXPECTED, "hello").put({
            body: nonResource
        });
        assert.equal(result.status, "200");
        if (isUnexpected(result)) {
            throw Error("Unexpected status code");
        }
        assert.strictEqual(result.body.id, nonResource.id);
        assert.strictEqual(result.body.name, nonResource.name);
        assert.strictEqual(result.body.type, nonResource.type);
    });
});
