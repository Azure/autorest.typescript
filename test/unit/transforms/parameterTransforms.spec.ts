import * as assert from "assert";
import {
  CodeModel,
  Parameter,
  StringSchema,
  NumberSchema,
  SchemaType,
  Languages,
  OperationGroup,
  Request
} from "@azure-tools/codemodel";
import { transformParameters } from "../../../src/transforms/parameterTransforms";
import {
  ParameterDetails,
  ModelParameters
} from "../../../src/models/parameterDetails";
describe("parameterTransforms", () => {
  describe("transformParameters", () => {
    it("should return an empty set of global an operation parameters", () => {
      const codeModel = new CodeModel("testCodeModel");
      const parameters = transformParameters(codeModel);

      assert.deepEqual(parameters, {
        operationParameters: [],
        globalParameters: []
      } as ModelParameters);
    });

    it("should extract all global parameters", () => {
      const codeModel = new CodeModel("testCodeModel");
      const param1 = new Parameter(
        "mockParam1",
        "",
        new StringSchema("mockStringSchema", ""),
        {
          language: {
            default: { name: "mockParam1", serializedName: "Mock-Param1" }
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
          }
        }
      );

      const globalParameters = [param1, param2];

      codeModel.globalParameters = globalParameters;
      const parameters = transformParameters(codeModel);

      assert.equal(parameters.globalParameters.length, 2);
      assert.deepEqual(
        parameters.globalParameters.map(p => p.nameRef),
        ["mockParam1", "mockParam2"]
      );

      assert.deepEqual(
        parameters.globalParameters.map(p => p.parameter),
        globalParameters
      );
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
          }
        }
      );

      const request = { parameters: [param1] } as Request;
      const request2 = { parameters: [param2] } as Request;

      const op1 = new OperationGroup("Operation1", {
        operations: [
          {
            request,
            language: {
              default: {
                name: "operation1",
                serializedName: "Mock_Operation1"
              }
            }
          }
        ]
      });

      const op2 = new OperationGroup("Operation2", {
        operations: [
          {
            request: request2,
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
      const parameters = transformParameters(codeModel);

      assert.equal(parameters.operationParameters.length, 2);
      assert.deepEqual(
        parameters.operationParameters.map(p => p.nameRef),
        ["mockParam", "mockParam1"]
      );

      const p1: ParameterDetails = parameters.operationParameters.find(
        p => p.nameRef === "mockParam"
      )!;

      const p2: ParameterDetails = parameters.operationParameters.find(
        p => p.nameRef === "mockParam1"
      )!;

      assert.deepEqual(p1.operationsIn, ["operation1"]);
      assert.deepEqual(p2.operationsIn, ["operation2"]);
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
          }
        }
      );
      const operationParameters = [param1];
      const request = { parameters: operationParameters } as Request;
      const request2 = { parameters: operationParameters } as Request;

      const op1 = new OperationGroup("Operation1", {
        operations: [
          {
            request,
            language: {
              default: {
                name: "operation1",
                serializedName: "Mock_Operation1"
              }
            }
          }
        ]
      });

      const op2 = new OperationGroup("Operation2", {
        operations: [
          {
            request: request2,
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
      const parameters = transformParameters(codeModel);

      assert.equal(parameters.operationParameters.length, 1);
      assert.deepEqual(
        parameters.operationParameters.map(p => p.nameRef),
        ["mockParam1"]
      );

      const p1: ParameterDetails = parameters.operationParameters.find(
        p => p.nameRef === "mockParam1"
      )!;

      assert.deepEqual(p1.operationsIn, ["operation1", "operation2"]);
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
          }
        }
      );

      const operationParameters = [param1, param2];
      const request = { parameters: operationParameters } as Request;

      codeModel.operationGroups = [
        new OperationGroup("Operation1", {
          operations: [
            {
              request,
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
      const parameters = transformParameters(codeModel);

      assert.equal(parameters.operationParameters.length, 2);
      assert.deepEqual(
        parameters.operationParameters.map(p => p.nameRef),
        ["mockParam1", "mockParam2"]
      );

      const p1: ParameterDetails = parameters.operationParameters.find(
        p => p.nameRef === "mockParam1"
      )!;
      const p2: ParameterDetails = parameters.operationParameters.find(
        p => p.nameRef === "mockParam2"
      )!;

      assert.deepEqual(p1.operationsIn, ["operation1"]);
      assert.deepEqual(p2.operationsIn, ["operation1"]);

      assert.equal(p1.parameter, param1);
      assert.equal(p2.parameter, param2);
    });
  });
});
