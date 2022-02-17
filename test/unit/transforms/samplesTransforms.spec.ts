import { CodeModel, Operation, Schema, SchemaType, OperationGroup } from "@autorest/codemodel";
import * as assert from "assert";
import { ClientDetails } from "../../../src/models/clientDetails";
import {
    transformSamples
} from "../../../src/transforms/samplesTransforms";
import * as sinon from "sinon";
import * as autorestSession from "../../../src/autorestSession";
import {
    Session
} from "@autorest/extension-base";
import { ExampleGroup, ExampleModel, ExampleValue } from "@autorest/testmodeler";

class TestCodeModel extends CodeModel {
    testModel?: any;
}

describe("transformSamples", () => {
    beforeEach(() => {
        sinon.replace(autorestSession, "getSession", () => ({
            error: console.error
        } as Session<CodeModel>));
        sinon.replace(autorestSession, "getAutorestOptions", () => ({
            srcPath: ".",
            packageDetails: {
                name: "test",
                nameWithoutScope: "test",
                version: "1.0.0"
            },
            licenseHeader: false,
            hideClients: true,
            azureArm: false,
            ignoreNullableOnOptional: false,
            useCoreV2: true,
            allowInsecureConnection: true
        }));
    });

    afterEach(() => {
        sinon.restore();
    });

    const getMockOperation = () => new Operation('Get', 'Get a Kusto Cluster');
    const getMockOperationGroup = () => {
        const group: OperationGroup = new OperationGroup('Clusters');
        group.addOperation(getMockOperation());
        return group;
    }
    const getKustoExampleGroup = () => {
        const operation: Operation = getMockOperation();
        const group = getMockOperationGroup();
        const exModel: ExampleModel = new ExampleModel('KustoClustersGet', operation, group);
        exModel.originalFile = 'kustoClustersGet.json'
        const exampleGroup: ExampleGroup = new ExampleGroup(group, operation, 'Clusters_Get');
        exampleGroup.examples = [exModel];
        return exampleGroup;
    };
    const getMockClientDetail = (codeModel: CodeModel) => ({
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
    });

    it("should return empty list if no example groups", async () => {
        const codeModel = new CodeModel("testCodeModel");
        const client: ClientDetails = getMockClientDetail(codeModel);
        const samples = await transformSamples(codeModel, client);
        assert.strictEqual(samples.length, 0);
    })

    it("should log error if no matched group detail in client side", async () => {
        const codeModel = new TestCodeModel("testCodeModel");
        codeModel['testModel'] = {
            mockTest: {
                exampleGroups: [
                    getKustoExampleGroup()
                ]
            }
        };
        const client: ClientDetails = getMockClientDetail(codeModel);
        try {
            await transformSamples(codeModel, client);
        } catch (err) {
            // expected error
        }
    })
})