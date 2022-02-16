import { CodeModel } from "@autorest/codemodel";
import * as assert from "assert";
import { ClientDetails } from "../../../src/models/clientDetails";
import {
    transformSamples
} from "../../../src/transforms/samplesTransforms";

describe("transformSamples", () => {
    it("should return empty list if null input", async () => {
        const codeModel = new CodeModel("testCodeModel");
        const client: ClientDetails = {
            name: "TestClient",
            className: "TestClient",
            info: codeModel.info,
            sourceFileName: "test.json",
            objects: [],
            mappers: [],
            unions: [],
            operationGroups: [],
            parameters: [],
            options: {},
            endpoint: {
                isCustom: true
            }
        };
        const samples = await transformSamples(codeModel, client);
        assert.strictEqual(samples.length, 0);
    })
})