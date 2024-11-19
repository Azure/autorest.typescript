import { assert } from "chai";
import {
  CodeModel,
  Parameter,
  StringSchema,
  NumberSchema,
  SchemaType,
  OperationGroup,
  Request,
  ParameterLocation
} from "@autorest/codemodel";
import { transformParameters } from "../../../src/transforms/parameterTransforms";
import { ParameterDetails } from "../../../src/models/parameterDetails";
import { ClientOptions } from "../../../src/models/clientDetails";
import * as autorestSession from "../../../src/autorestSession";
import * as sinon from "sinon";

describe("parameterTransforms", () => {
  const getCodeModelWithOneParam = (paramOptions?: {
    location?: ParameterLocation;
    extensions?: { [key: string]: any };
  }) => {
    const location = paramOptions && paramOptions.location;
    const extensions = paramOptions && paramOptions.extensions;
    const codeModel = new CodeModel("testCodeModel");
    const param1 = new Parameter(
      "mockParam1",
      "",
      new StringSchema("mockStringSchema", ""),
      {
        language: {
          default: { name: "mockParam", serializedName: "Mock-Param" }
        },
        protocol: {
          http: {
            in: location || ParameterLocation.Path
          }
        },
        ...(extensions && { extensions })
      }
    );
    const request = { parameters: [param1], protocol: {} } as Request;
    const op1 = new OperationGroup("OperationGroup1", {
      operations: [
        {
          requests: [request],
          language: {
            default: {
              name: "operation1",
              serializedName: "Mock_Operation1"
            }
          }
        }
      ]
    });

    codeModel.operationGroups = [op1];
    return codeModel;
  };
  describe("transformParameters", () => {
    let clientOptions: ClientOptions;
    let optionsSpy: sinon.SinonSpy<[], autorestSession.AutorestOptions>;
    let optionsBag: autorestSession.AutorestOptions;
    // Backup the original getAutorestOptions before mocking;
    const originalOptions = autorestSession.getAutorestOptions;

    beforeEach(() => {
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
      clientOptions = { mediaTypes: new Set() };
    });

    afterEach(() => {
      sinon.restore();
      // optionsSpy.restore();
    });

    it("should set the correct parameter location", () => {
      const codeModel = getCodeModelWithOneParam({
        location: ParameterLocation.Path
      });
      const params = transformParameters(codeModel, clientOptions);
      assert.equal(params[0] && params[0].location, ParameterLocation.Path);
    });

    it("should mark as global parameter when x-ms-priority exists", () => {
      const codeModel = getCodeModelWithOneParam({
        extensions: { "x-ms-priority": 0 }
      });
      const params = transformParameters(codeModel, clientOptions);
      assert.equal(params[0] && params[0].isGlobal, true);
    });

    it("shouldn ot mark as global parameter when x-ms-priority does not exist", () => {
      const codeModel = getCodeModelWithOneParam();
      const params = transformParameters(codeModel, clientOptions);
      assert.equal(params[0] && params[0].isGlobal, false);
    });

    it("should return an empty set of global an operation parameters", () => {
      const codeModel = new CodeModel("testCodeModel");
      const parameters = transformParameters(codeModel, clientOptions);

      assert.deepEqual(parameters[0].name, "endpoint");
    });

    it("should extract all operation parameters, 2 different parameters same name", () => {
      const codeModel = new CodeModel("testCodeModel");
      const param1 = new Parameter(
        "mockParam1",
        "",
        new StringSchema("mockStringSchema", ""),
        {
          language: {
            default: { name: "mockParam", serializedName: "Mock-Param" }
          },
          protocol: {
            http: {
              in: ParameterLocation.Body
            }
          }
        }
      );

      const param2 = new Parameter(
        "mockParam1",
        "",
        new NumberSchema("mockNumberSchema", "", SchemaType.Integer, 32),
        {
          language: {
            default: { name: "mockParam", serializedName: "Mock-Param" }
          },
          protocol: {
            http: {
              in: ParameterLocation.Body
            }
          }
        }
      );

      const request = { parameters: [param1], protocol: {} } as Request;
      const request2 = { parameters: [param2], protocol: {} } as Request;

      const op1 = new OperationGroup("OperationGroup1", {
        operations: [
          {
            requests: [request],
            language: {
              default: {
                name: "operation1",
                serializedName: "Mock_Operation1"
              }
            }
          }
        ]
      });

      const op2 = new OperationGroup("OperationGroup2", {
        operations: [
          {
            requests: [request2],
            language: {
              default: {
                name: "operation2",
                serializedName: "Mock_Operation2"
              }
            }
          }
        ]
      });

      codeModel.operationGroups = [op1, op2];
      const parameters = transformParameters(codeModel, clientOptions);

      assert.equal(parameters.length, 3);
      assert.deepEqual(
        parameters.map(p => p.nameRef),
        ["mockParam", "mockParam1", "endpoint"]
      );

      const p1: ParameterDetails = parameters.find(
        p => p.nameRef === "mockParam"
      )!;

      const p2: ParameterDetails = parameters.find(
        p => p.nameRef === "mockParam1"
      )!;

      assert.deepEqual(p1.operationsIn, {
        OperationGroup1_operation1: { description: "" }
      });
      assert.deepEqual(p2.operationsIn, {
        OperationGroup2_operation2: { description: "" }
      });
      assert.equal(p1.parameter, param1);
      assert.equal(p2.parameter, param2);
    });

    it("should extract all operation parameters, same parameter in 2 operations", () => {
      const codeModel = new CodeModel("testCodeModel");
      const param1 = new Parameter(
        "mockParam1",
        "",
        new StringSchema("mockStringSchema", ""),
        {
          language: {
            default: { name: "mockParam1", serializedName: "Mock-Param1" }
          },
          protocol: {
            http: {
              in: ParameterLocation.Body
            }
          }
        }
      );
      const operationParameters = [param1];
      const request = {
        parameters: operationParameters,
        protocol: {}
      } as Request;
      const request2 = {
        parameters: operationParameters,
        protocol: {}
      } as Request;

      const op1 = new OperationGroup("OperationGroup1", {
        operations: [
          {
            requests: [request],
            language: {
              default: {
                name: "operation1",
                serializedName: "Mock_Operation1"
              }
            }
          }
        ]
      });

      const op2 = new OperationGroup("OperationGroup2", {
        operations: [
          {
            requests: [request2],
            language: {
              default: {
                name: "operation2",
                serializedName: "Mock_Operation2"
              }
            }
          }
        ]
      });

      codeModel.operationGroups = [op1, op2];
      const parameters = transformParameters(codeModel, clientOptions);

      assert.equal(parameters.length, 2);
      assert.deepEqual(
        parameters.map(p => p.nameRef),
        ["mockParam1", "endpoint"]
      );

      const p1: ParameterDetails = parameters.find(
        p => p.nameRef === "mockParam1"
      )!;

      assert.deepEqual(p1.operationsIn, {
        OperationGroup1_operation1: { description: "" },
        OperationGroup2_operation2: { description: "" }
      });
      assert.equal(p1.parameter, param1);
    });

    it("should extract all operation parameters", () => {
      const codeModel = new CodeModel("testCodeModel");
      const param1 = new Parameter(
        "mockParam1",
        "",
        new StringSchema("mockStringSchema", ""),
        {
          language: {
            default: { name: "mockParam1", serializedName: "Mock-Param1" }
          },
          protocol: {
            http: {
              in: ParameterLocation.Body
            }
          }
        }
      );
      const param2 = new Parameter(
        "mockParam2",
        "",
        new NumberSchema("mockIntSchema", "", SchemaType.Integer, 32),
        {
          language: {
            default: { name: "mockParam2", serializedName: "Mock_Param2" }
          },
          protocol: {
            http: {
              in: ParameterLocation.Body
            }
          }
        }
      );

      const operationParameters = [param1, param2];
      const request = {
        parameters: operationParameters,
        protocol: {}
      } as Request;

      codeModel.operationGroups = [
        new OperationGroup("OperationGroup1", {
          operations: [
            {
              requests: [request],
              language: {
                default: {
                  name: "operation1",
                  serializedName: "Mock_Operation2"
                }
              }
            }
          ]
        })
      ];
      const parameters = transformParameters(codeModel, clientOptions);

      assert.equal(parameters.length, 3);
      assert.deepEqual(
        parameters.map(p => p.nameRef),
        ["mockParam1", "mockParam2", "endpoint"]
      );

      const p1: ParameterDetails = parameters.find(
        p => p.nameRef === "mockParam1"
      )!;
      const p2: ParameterDetails = parameters.find(
        p => p.nameRef === "mockParam2"
      )!;

      assert.deepEqual(p1.operationsIn, {
        OperationGroup1_operation1: { description: "" }
      });
      assert.deepEqual(p2.operationsIn, {
        OperationGroup1_operation1: { description: "" }
      });

      assert.equal(p1.parameter, param1);
      assert.equal(p2.parameter, param2);
    });

    it("should guard required query parameters name", () => {
      const codeModel = new CodeModel("testCodeModel");
      const param1 = new Parameter(
        "type",
        "",
        new StringSchema("mockStringSchema", ""),
        {
          language: {
            default: { name: "type", serializedName: "type" }
          },
          protocol: {
            http: {
              in: ParameterLocation.Query
            }
          },
          required: true
        }
      );

      const operationParameters = [param1];
      const request = {
        parameters: operationParameters,
        protocol: {}
      } as Request;

      codeModel.operationGroups = [
        new OperationGroup("OperationGroup1", {
          operations: [
            {
              requests: [request],
              language: {
                default: {
                  name: "operation1",
                  serializedName: "Mock_Operation2"
                }
              }
            }
          ]
        })
      ];
      const parameters = transformParameters(codeModel, clientOptions);

      assert.equal(parameters.length, 2);
      assert.deepEqual(
        parameters.map(p => p.nameRef),
        ["typeParam", "endpoint"]
      );

      const p1: ParameterDetails = parameters.find(
        p => p.nameRef === "typeParam"
      )!;

      assert.deepEqual(p1.operationsIn, {
        OperationGroup1_operation1: { description: "" }
      });

      assert.equal(p1.parameter, param1);
    });

    it("should guard non-required query parameters name", () => {
      const codeModel = new CodeModel("testCodeModel");
      const param1 = new Parameter(
        "type",
        "",
        new StringSchema("mockStringSchema", ""),
        {
          language: {
            default: { name: "type", serializedName: "type" }
          },
          protocol: {
            http: {
              in: ParameterLocation.Query
            }
          },
          required: false
        }
      );

      const operationParameters = [param1];
      const request = {
        parameters: operationParameters,
        protocol: {}
      } as Request;

      codeModel.operationGroups = [
        new OperationGroup("OperationGroup1", {
          operations: [
            {
              requests: [request],
              language: {
                default: {
                  name: "operation1",
                  serializedName: "Mock_Operation2"
                }
              }
            }
          ]
        })
      ];
      const parameters = transformParameters(codeModel, clientOptions);

      assert.equal(parameters.length, 2);
      assert.deepEqual(
        parameters.map(p => p.nameRef),
        ["typeParam", "endpoint"]
      );
      assert.deepEqual(
        parameters.map(p => p.propertyName),
        ["type", "endpoint"]
      );
      const p1: ParameterDetails = parameters.find(
        p => p.nameRef === "typeParam"
      )!;

      assert.deepEqual(p1.operationsIn, {
        OperationGroup1_operation1: { description: "" }
      });

      assert.equal(p1.parameter, param1);
    });
  });
});
