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
import { KnownMediaType } from "@azure-tools/codegen";
import { PropertyKind } from "../../../src/models/modelDetails";
import { SampleGroup, SampleDetails } from "../../../src/models/sampleDetails";

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

    it("should return empty list if no example groups", async () => {
        const codeModel = new CodeModel("testCodeModel");
        const client: ClientDetails = getMockClientWithoutDetail(codeModel);
        const samples: SampleGroup[] = await transformSamples(codeModel, client);
        assert.strictEqual(samples.length, 0);
    })

    it("should log error if no matched examples in client detail", async () => {
        const codeModel: CodeModel = getCodeModelGivenExampleGroup(getExampleGroupWithoutExample());
        const client: ClientDetails = getMockClientWithoutDetail(codeModel);
        const sampleGroups: SampleGroup[] = await transformSamples(codeModel, client);
        assert.strictEqual(sampleGroups.length, 0);
    })

    it("should group the samples together with same oepration_id ", async () => {
        const codeModel: CodeModel = getCodeModelGivenExampleGroup(getExampleGroupWithTwoExamples());
        const client: ClientDetails = getMockClientWithDetail(codeModel);
        const sampleGroups: SampleGroup[] = await transformSamples(codeModel, client);
        assert.strictEqual(sampleGroups.length, 1);
        const result = sampleGroups[0];
        assert.strictEqual(result.samples.length, 2);
        // validate the two examples details
        assert.strictEqual(result.clientClassName, codeModel.language.default.name);
        assert.strictEqual(result.clientPackageName, autorestSession.getAutorestOptions().packageDetails.name);
        assert.strictEqual(result.sampleFileName, "clustersGet"); // devired from operation_id
        assert.strictEqual(result.samples.length, 2);
        assert.strictEqual(result.samples[0].sampleFunctionName, "kustoClustersGet");
        assert.strictEqual(result.samples[0].originalFileLocation, "kustoClustersGet.json");
        assert.strictEqual(result.samples[1].sampleFunctionName, "kustoClustersGet2");
        assert.strictEqual(result.samples[1].originalFileLocation, "kustoClustersGet2.json");
        assert.strictEqual(result.samples[0].isPaging, false);
        assert.strictEqual(result.samples[1].isPaging, false);
        assert.strictEqual(result.samples[0].operationName, 'beginClustersGetAndWait');
        assert.strictEqual(result.samples[1].operationName, 'beginClustersGetAndWait');
    })

    // helper functions to mock test data
    const getMockOperation = () => new Operation('Get', 'Get a Kusto Cluster');
    const getMockOperationGroup = () => {
        const group: OperationGroup = new OperationGroup('Clusters');
        group.addOperation(getMockOperation());
        return group;
    };
    const getCodeModelGivenExampleGroup = (exampleGroup: any) => {
        const codeModel = new TestCodeModel("testCodeModel");
        codeModel.language.default.name = "KustoClientClass";
        codeModel['testModel'] = {
            mockTest: {
                exampleGroups: [
                    exampleGroup
                ]
            }
        };
        return codeModel;
    };
    const getMockClientWithoutDetail = (codeModel: CodeModel) => ({
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
        },
        allTypes: []
    } as ClientDetails);
    const getMockClientWithDetail = (codeModel: CodeModel) => (
        {
            name: "TestClient",
            className: "TestClient",
            info: codeModel.info,
            sourceFileName: "test.json",
            objects: [],
            mappers: [],
            unions: [],
            operationGroups: [
                {
                    key: "Clusters",
                    name: "Clusters",
                    originalKey: "Clusters",
                    mediaTypes: new Set<KnownMediaType>(),
                    isTopLevel: true,
                    operations: [
                        {
                            name: "ClustersGet",
                            namePrefix: "",
                            fullName: "Clusters_get",
                            description: "",
                            apiVersions: ["2022-02-21"],
                            parameters: [],
                            typeDetails: {
                                typeName: "",
                                kind: PropertyKind.Primitive,
                                usedModels: []
                            },
                            requests: [],
                            responses: [],
                            mediaTypes: new Set(),
                            isLro: true,
                        },
                        {
                            name: "ClustersUpdate",
                            namePrefix: "",
                            fullName: "Clusters_update",
                            description: "",
                            apiVersions: ["2022-02-21"],
                            parameters: [],
                            typeDetails: {
                                typeName: "",
                                kind: PropertyKind.Primitive,
                                usedModels: []
                            },
                            requests: [],
                            responses: [],
                            mediaTypes: new Set(),
                            isLro: true,
                        }
                    ]
                }
            ],
            parameters: [],
            options: {},
            endpoint: {
                isCustom: true
            },
            allTypes: []
        } as ClientDetails
    );
    const getExampleGroupWithoutExample = () => {
        const operation: Operation = getMockOperation();
        const group = getMockOperationGroup();
        const exModel: ExampleModel = new ExampleModel('KustoClustersGet', operation, group);
        exModel.originalFile = 'kustoClustersGet.json'
        const exampleGroup: ExampleGroup = new ExampleGroup(group, operation, 'Clusters_Get');
        exampleGroup.examples = [];
        return exampleGroup;
    };
    const getExampleGroupWithTwoExamples = () => ({
        "examples": [
            {
                "clientParameters": [],
                "methodParameters": [],
                "responses": {},
                "name": "KustoClustersGet",
                "operation": {
                    "language": {
                        "default": {
                            "name": "Get",
                            "description": "Get a Kusto Cluster"
                        }
                    },
                    "protocol": {}
                },
                "operationGroup": {
                    "language": {
                        "default": {
                            "name": "Clusters",
                            "description": ""
                        }
                    },
                    "protocol": {},
                    "$key": "Clusters",
                    "operations": [
                        {
                            "language": {
                                "default": {
                                    "name": "Get",
                                    "description": "Get a Kusto Cluster"
                                }
                            },
                            "protocol": {}
                        }
                    ]
                },
                "originalFile": "kustoClustersGet.json"
            },
            {
                "clientParameters": [],
                "methodParameters": [],
                "responses": {},
                "name": "KustoClustersGet2",
                "operation": {
                    "language": {
                        "default": {
                            "name": "Get",
                            "description": "Get a Kusto Cluster"
                        }
                    },
                    "protocol": {}
                },
                "operationGroup": {
                    "language": {
                        "default": {
                            "name": "Clusters",
                            "description": ""
                        }
                    },
                    "protocol": {},
                    "$key": "Clusters",
                    "operations": [
                        {
                            "language": {
                                "default": {
                                    "name": "Get",
                                    "description": "Get a Kusto Cluster"
                                }
                            },
                            "protocol": {}
                        }
                    ]
                },
                "originalFile": "kustoClustersGet2.json"
            }
        ],
        "operationGroup": {
            "language": {
                "default": {
                    "name": "Clusters",
                    "description": ""
                }
            },
            "protocol": {},
            "$key": "Clusters",
            "operations": [
                {
                    "language": {
                        "default": {
                            "name": "Get",
                            "description": "Get a Kusto Cluster"
                        }
                    },
                    "protocol": {}
                }
            ]
        },
        "operation": {
            "language": {
                "default": {
                    "name": "Get",
                    "description": "Get a Kusto Cluster"
                }
            },
            "protocol": {}
        },
        "operationId": "Clusters_Get"
    });
})