import { AppConfigurationClient } from "./generated/appconfigurationexport/src";
import * as fs from "fs";
import { assert } from "chai";

describe("Check Hidden Header", () => {
    let client: AppConfigurationClient;

    beforeEach(()=>{
        const endpoint: string = "sampleEndPoint";
        client = new AppConfigurationClient(endpoint);
        assert.notEqual(client, null);
    })

    it("Client Class File must have Hidden Header", async() => {
        const content: string = fs.readFileSync(
            "./test/integration/generated/appconfigurationexport/src/appConfigurationClient.ts",
            "utf-8"
        );

        const containsHidden = content.includes(
            "/** @hidden */\nexport class AppConfigurationClient extends AppConfigurationClientContext {"
        );

        assert.equal(containsHidden, true, "Expected hidden Header missing");
    });

    it("Client Context Class File must have Hidden Header", async() => {
        const content: string = fs.readFileSync(
            "./test/integration/generated/appconfigurationexport/src/appConfigurationClientContext.ts",
            "utf-8"
        );

        const containsHidden = content.includes(
            "/** @hidden */\nexport class AppConfigurationClientContext extends coreHttp.ServiceClient {"
        );

        assert.equal(containsHidden, true, "Expected hidden Header missing");
    });
});
