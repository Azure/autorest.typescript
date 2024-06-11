import { describe, it, assert } from "vitest";
import {
  getRLCLroLogicalResponse,
  getRLCResponseType,
  getSendPrivateFunction
} from "../../src/modular/serialization/operationHelpers.js";
import {
  Imports as RuntimeImports,
  OperationResponse
} from "@azure-tools/rlc-common";
import { SerializerMap } from "../../src/modular/serialization/util.js";
import { Operation } from "../../src/modular/modularCodeModel.js";
import {
  SdkModelType,
  UsageFlags
} from "@azure-tools/typespec-client-generator-core";

describe("Operation Helpers", () => {
  describe("getRLCResponseType", () => {
    it("should return the response type for a given operation", () => {
      const operation: OperationResponse = {
        operationGroup: "MyOperationGroup",
        operationName: "MyOperation",
        path: "/my/operation",
        responses: [
          {
            statusCode: "200",
            predefinedName: "MyResponseType"
          }
        ]
      };

      const result = getRLCResponseType(operation as any);
      assert.equal(result, "MyResponseType");
    });

    it("should return the response type for a given operation that has no predefinedName", () => {
      const operation: OperationResponse = {
        operationGroup: "MyOperationGroup",
        operationName: "MyOperation",
        path: "/my/operation",
        responses: [
          {
            statusCode: "200"
          }
        ]
      };

      const result = getRLCResponseType(operation as any);
      assert.equal(result, "MyOperationGroupMyOperation200Response");
    });

    it("should return the response type when multiple responses", () => {
      const operation: OperationResponse = {
        operationGroup: "MyOperationGroup",
        operationName: "MyOperation",
        path: "/my/operation",
        responses: [
          {
            statusCode: "200"
          },
          {
            statusCode: "201"
          }
        ]
      };

      const result = getRLCResponseType(operation as any);
      assert.equal(
        result,
        "MyOperationGroupMyOperation200Response | MyOperationGroupMyOperation201Response"
      );
    });
  });

  describe("getRLCLroLogicalResponse", () => {
    it("should return the LRO logical response for a given operation", () => {
      const operation: OperationResponse = {
        operationGroup: "MyOperationGroup",
        operationName: "MyOperation",
        path: "/my/operation",
        responses: [
          {
            statusCode: "201",
            predefinedName: "MyLogicalResponse"
          }
        ]
      };

      const result = getRLCLroLogicalResponse(operation);
      assert.equal(result, "MyLogicalResponse");
    });

    it("should fallback to any if no LogicalResponse found", () => {
      const operation: OperationResponse = {
        operationGroup: "MyOperationGroup",
        operationName: "MyOperation",
        path: "/my/operation",
        responses: [
          {
            statusCode: "201"
          }
        ]
      };

      const result = getRLCLroLogicalResponse(operation);
      assert.equal(result, "any");
    });
  });

  describe("getSendPrivateFunction", () => {
    const mockOperation: Operation = {
      apiVersions: [],
      bodyParameter: undefined,
      description: "",
      discriminator: "",
      exceptions: [],
      groupName: "",
      isOverload: false,
      name: "MyOperation",
      method: "get",
      namespaceHierarchies: [],
      overloads: [],
      parameters: [],
      responses: [],
      url: "/my/operation",
      summary: "",
      rlcResponse: {
        operationGroup: "MyOperationGroup",
        operationName: "MyOperation",
        path: "/my/operation",
        responses: [
          {
            statusCode: "200"
          }
        ]
      }
    };

    it("should generate an operation with no parameters", () => {
      const dpgContext = {} as any;

      const operation = { ...mockOperation };
      const clientType = "";
      let serializerMap: SerializerMap | undefined;
      const runtimeImports: RuntimeImports = {} as any;

      const result = getSendPrivateFunction(
        dpgContext,
        operation,
        clientType,
        serializerMap,
        runtimeImports
      );

      assert.equal(result.name, "_myOperationSend");
      assert.equal(result.parameters?.length, 2);
      assert.equal(result.parameters?.[0].name, "context");
      assert.equal(result.parameters?.[1].name, "options");
      assert.equal(result.parameters?.[1].type, "MyOperationOptionalParams");
    });

    it("should generate an operation with parameters", () => {
      const operation: Operation = {
        ...mockOperation,
        parameters: [
          {
            clientName: "niceParam",
            description: "",
            implementation: "Method",
            inOverload: false,
            location: "query",
            optional: false,
            restApiName: "uglyName",
            type: { name: "uglyName", type: "model" } as any,
            tcgcType: {
              name: "niceParam",
              kind: "model",
              properties: [],
              apiVersions: [],
              crossLanguageDefinitionId: "",
              isGeneratedName: false,
              usage: UsageFlags.Input,
              isFormDataType: false,
              nullable: false,
              isError: false
            } as SdkModelType
          }
        ]
      };

      const result = getSendPrivateFunction(
        {} as any,
        operation,
        "",
        undefined,
        {} as any
      );

      assert.equal(result.name, "_myOperationSend");
      assert.equal(result.parameters?.[0].name, "context");
      assert.equal(result.parameters?.[1].name, "niceParam");
      assert.equal(result.parameters?.[2].name, "options");
      assert.equal(result.parameters?.[2].type, "MyOperationOptionalParams");
    });
  });
});

// {
//     name: "MyOperation",
//     parameters: {
//       name: "",
//       properties: createRekeyableMap(),
//       kind: "Model",
//       decorators: [],
//       derivedModels: [],
//       isFinished: true,
//       sourceModels: [],
//       projections: [],
//       projectionsByName: () => {
//         return {} as any;
//       }
//     },
//     decorators: [],
//     isFinished: true,
//     kind: "Operation",
//     node: {} as any,
//     projections: [],
//     projectionsByName: () => {
//       return {} as any;
//     },
//     returnType: {} as any,
//     instantiationParameters: []
//   };
