import { describe, it, assert } from "vitest";
import { format } from "prettier";
import {
  buildLroReturnType,
  getDeserializePrivateFunction,
  getOperationFunction,
  getOperationSignatureParameters,
  getPagingOnlyOperationFunction,
  getRLCLroLogicalResponse,
  getRLCResponseType,
  getSendPrivateFunction
} from "../../src/modular/serialization/operationHelpers.js";
import {
  Imports as RuntimeImports,
  OperationResponse
} from "@azure-tools/rlc-common";
import { SerializerMap } from "../../src/modular/serialization/util.js";
import {
  Operation,
  Parameter,
  Response
} from "../../src/modular/modularCodeModel.js";
import {
  SdkModelType,
  SdkType,
  UsageFlags
} from "@azure-tools/typespec-client-generator-core";
import { a } from "vitest/dist/suite-IbNSsUWN.js";

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
    it("should generate an operation with no parameters", () => {
      const dpgContext = {} as any;

      const operation: Operation = { ...mockOperation, parameters: [] };
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
        ...mockOperation
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
      assert.isTrue(
        (result.statements as string[])
          .join("\n")
          .includes(`return context.path("/my/operation"`)
      );
    });
  });

  describe("getDeserializePrivateFunction", () => {
    it("should generate a deserialize function", () => {
      const dpgContext = {} as any;
      const operation: Operation = {
        ...mockOperation,
        parameters: []
      };
      const runtimeImports: RuntimeImports = {} as any;

      const result = getDeserializePrivateFunction(
        dpgContext,
        operation,
        false,
        false,
        runtimeImports,
        {} as any
      );

      assert.equal(result.name, "_myOperationDeserialize");
      assert.equal(result.parameters?.length, 1);
      assert.equal(result.parameters?.[0].name, "result");
    });

    it("should generate a deserialize function when only error response is provided", () => {
      const dpgContext = {} as any;
      const operation: Operation = {
        ...mockOperation,
        parameters: [],
        responses: [
          {
            statusCodes: ["default"],
            type: { name: "MyErrorType", type: "model" },
            discriminator: "error",
            headers: []
          }
        ]
      };
      const runtimeImports: RuntimeImports = {} as any;

      const result = getDeserializePrivateFunction(
        dpgContext,
        operation,
        false,
        false,
        runtimeImports,
        {} as any
      );

      assert.deepEqual(result.statements, ["return result.body"]);
    });

    it("should generate a deserialize function when both success and error response is provided", () => {
      const dpgContext = {} as any;
      const operation: Operation = {
        ...mockOperation,
        parameters: [],
        responses: [
          {
            statusCodes: [201],
            type: { name: "MyGoodType", type: "model" },
            discriminator: "",
            headers: []
          },
          {
            statusCodes: ["default"],
            type: { name: "MyErrorType", type: "model" },
            discriminator: "error",
            headers: []
          }
        ]
      };
      const runtimeImports: RuntimeImports = {} as any;

      const result = getDeserializePrivateFunction(
        dpgContext,
        operation,
        false,
        false,
        runtimeImports,
        {} as any
      );

      assert.deepEqual(result.statements, [
        'if(result.status !== "201"){',
        "throw createRestError(result);",
        "}",
        "return result.body"
      ]);
    });

    it("should generate a deserialize function when only success response is provided", () => {
      const dpgContext = {} as any;
      const operation: Operation = {
        ...mockOperation,
        parameters: [],
        responses: [
          {
            statusCodes: [200],
            type: { name: "MyGoodType", type: "model" },
            discriminator: "",
            headers: []
          }
        ]
      };
      const runtimeImports: RuntimeImports = {} as any;

      const result = getDeserializePrivateFunction(
        dpgContext,
        operation,
        false,
        false,
        runtimeImports,
        {} as any
      );

      assert.deepEqual(result.statements, [
        'if(result.status !== "200"){',
        "throw createRestError(result);",
        "}",
        "return result.body"
      ]);
    });

    it("should generate a deserialize function when there is no response", () => {
      const dpgContext = {} as any;
      const operation: Operation = {
        ...mockOperation,
        parameters: [],
        responses: []
      };
      const runtimeImports: RuntimeImports = {} as any;

      const result = getDeserializePrivateFunction(
        dpgContext,
        operation,
        false,
        false,
        runtimeImports,
        {} as any
      );

      assert.equal(result.name, "_myOperationDeserialize");
      assert.equal(result.parameters?.length, 1);
      assert.equal(result.parameters?.[0].name, "result");
      assert.equal(result.returnType, "Promise<void>");

      // There is nothing to deserialize, so return?
      assert.deepEqual(result.statements, ["return"]);
    });

    // This is for the scenario where there is more than one client and need to use the
    // right isUnexpected helper
    it("should generate a deserialize function that needs subclient", () => {
      const dpgContext = {} as any;
      const operation: Operation = {
        ...mockOperation,
        parameters: []
      };
      const runtimeImports: RuntimeImports = {} as any;

      const result = getDeserializePrivateFunction(
        dpgContext,
        operation,
        true,
        true,
        runtimeImports,
        {} as any
      );

      assert.equal(result.name, "_myOperationDeserialize");
      assert.equal(result.parameters?.length, 1);
      assert.equal(result.parameters?.[0].name, "result");
      assert.isTrue(
        (result.statements as string[]).some((s) =>
          s.includes("if(UnexpectedHelper.isUnexpected(result))")
        )
      );
    });

    it("should generate a deserialize function that needs isUnexpected", () => {
      const dpgContext = {} as any;
      const operation: Operation = {
        ...mockOperation,
        parameters: []
      };
      const runtimeImports: RuntimeImports = {} as any;

      const result = getDeserializePrivateFunction(
        dpgContext,
        operation,
        false,
        true,
        runtimeImports,
        {} as any
      );

      assert.equal(result.name, "_myOperationDeserialize");
      assert.equal(result.parameters?.length, 1);
      assert.equal(result.parameters?.[0].name, "result");
      assert.deepEqual(result.statements, [
        "if(isUnexpected(result)){",
        "throw createRestError(result);",
        "}",
        //TODO: Update when this is implemented
        'return (()=>{throw Error("Not implemented.")})()'
      ]);
    });

    it("should generate a deserialize when operation is lroOnly and non-patch and no finalResultPath", () => {
      const dpgContext = {} as any;
      const operation: Operation = {
        ...mockOperation,
        parameters: [mockParameter],
        discriminator: "lro",
        method: "get",
        lroMetadata: {
          finalResultPath: undefined
        }
      };
      const runtimeImports: RuntimeImports = {} as any;

      const result = getDeserializePrivateFunction(
        dpgContext,
        operation,
        false,
        false,
        runtimeImports,
        {} as any
      );

      // Not enough information to figure out the type so falling back to any
      assert.deepEqual(result.statements, [
        'if(result.status !== "200"){',
        "throw createRestError(result);",
        "}",
        "result = result as any;",
        "return"
      ]);

      assert.equal(result.name, "_myOperationDeserialize");
      assert.equal(result.returnType, "Promise<void>");
    });

    it("should generate a deserialize when operation is lroOnly and non-patch and has finalResultPath", () => {
      const dpgContext = {} as any;
      const operation: Operation = {
        ...mockOperation,
        parameters: [mockParameter],
        discriminator: "lro",
        method: "get",
        lroMetadata: {
          finalResultPath: "result"
        }
      };
      const runtimeImports: RuntimeImports = {} as any;

      const result = getDeserializePrivateFunction(
        dpgContext,
        operation,
        false,
        false,
        runtimeImports,
        {} as any
      );

      assert.equal(result.name, "_myOperationDeserialize");
      assert.equal(result.returnType, "Promise<void>");
      assert.deepEqual(result.statements, [
        'if(result.status !== "200"){',
        "throw createRestError(result);",
        "}",
        "result = result as any;",
        `if(result?.body?.result === undefined) {
          throw createRestError(\`Expected a result in the response at position \"result.body.result\"\`, result);
        }
        `,
        "return"
      ]);
    });

    it("should generate a deserialize when operation is lroOnly and non-patch and no finalResultPath", () => {
      const dpgContext = {} as any;
      const operation: Operation = {
        ...mockOperation,
        parameters: [mockParameter],
        discriminator: "lro",
        method: "get",
        lroMetadata: {
          finalResultPath: undefined
        }
      };
      const runtimeImports: RuntimeImports = {} as any;

      const result = getDeserializePrivateFunction(
        dpgContext,
        operation,
        false,
        false,
        runtimeImports,
        {} as any
      );

      assert.equal(result.name, "_myOperationDeserialize");
      assert.equal(result.returnType, "Promise<void>");
      assert.deepEqual(result.statements, [
        'if(result.status !== "200"){',
        "throw createRestError(result);",
        "}",
        "result = result as any;",
        "return"
      ]);
    });

    it("should generate a deserialize when operation is lroOnly and patch", () => {
      const dpgContext = {} as any;
      const operation: Operation = {
        ...mockOperation,
        parameters: [mockParameter],
        discriminator: "lro",
        method: "patch"
      };
      const runtimeImports: RuntimeImports = {} as any;

      const result = getDeserializePrivateFunction(
        dpgContext,
        operation,
        false,
        false,
        runtimeImports,
        {} as any
      );

      assert.equal(result.name, "_myOperationDeserialize");
      assert.equal(result.returnType, "Promise<MyResponseType>");
    });
  });
  describe("getOperationSignatureParameters", () => {
    it("should return default params context and options", () => {
      const operation = { ...mockOperation, parameters: [] };
      const result = getOperationSignatureParameters(
        operation,
        "MyClientContext"
      );
      assert.equal(result.length, 2);
      assert.equal(result[0].name, "context");
      assert.equal(Boolean(result[0].hasQuestionToken), false);
      assert.equal(result[0].type, "MyClientContext");
      assert.equal(result[1].name, "options");
      assert.equal(result[1].type, "MyOperationOptionalParams");
      assert.equal(result[1].initializer, `{ requestOptions: {} }`);
    });

    it("should return the the default params plus the operation param", () => {
      const operation: Operation = {
        ...mockOperation,
        parameters: [
          {
            ...mockParameter,
            clientName: "operationParam",
            restApiName: "uglyName"
          }
        ]
      };
      const result = getOperationSignatureParameters(
        operation,
        "MyClientContext"
      );
      assert.equal(result.length, 3);
      assert.equal(result[0].name, "context");
      assert.equal(Boolean(result[0].hasQuestionToken), false);
      assert.equal(result[0].type, "MyClientContext");
      assert.equal(result[1].name, "operationParam");
      assert.equal(result[2].name, "options");
      assert.equal(result[2].type, "MyOperationOptionalParams");
      assert.equal(result[2].initializer, `{ requestOptions: {} }`);
    });

    it("should not include non-method level params", () => {
      const operation: Operation = {
        ...mockOperation,
        parameters: [
          {
            ...mockParameter,
            clientName: "operationParam",
            restApiName: "uglyName",
            implementation: "Client"
          }
        ]
      };
      const result = getOperationSignatureParameters(
        operation,
        "MyClientContext"
      );
      assert.equal(result.length, 2);
      assert.equal(result[0].name, "context");
      assert.equal(Boolean(result[0].hasQuestionToken), false);
      assert.equal(result[0].type, "MyClientContext");
      assert.equal(result[1].name, "options");
      assert.equal(result[1].type, "MyOperationOptionalParams");
      assert.equal(result[1].initializer, `{ requestOptions: {} }`);
    });

    it("should not include constant params", () => {
      const operation: Operation = {
        ...mockOperation,
        parameters: [
          {
            ...mockParameter,
            clientName: "operationParam",
            restApiName: "uglyName",
            type: { type: "constant", value: "constantValue" }
          }
        ]
      };
      const result = getOperationSignatureParameters(
        operation,
        "MyClientContext"
      );
      assert.equal(result.length, 2);
      assert.equal(result[0].name, "context");
      assert.equal(Boolean(result[0].hasQuestionToken), false);
      assert.isFalse(result.some((p) => p.name === "operationParam"));
      assert.equal(result[0].type, "MyClientContext");
      assert.equal(result[1].name, "options");
      assert.equal(result[1].type, "MyOperationOptionalParams");
      assert.equal(result[1].initializer, `{ requestOptions: {} }`);
    });

    it("should include the body parameter", () => {
      const operation: Operation = {
        ...mockOperation,
        parameters: [],
        bodyParameter: {
          clientName: "niceBodyName",
          restApiName: "uglyBodyName",
          contentTypes: ["application/json"],
          description: "",
          inOverload: false,
          isBinaryPayload: false,
          location: "body",
          optional: false,
          tcgcType: {
            apiVersions: [],
            contentTypes: ["application/json"],
            kind: "body",
            name: "MyBodyType",
            nullable: false,
            optional: false,
            defaultContentType: "application/json",
            correspondingMethodParams: [],
            type: {} as any,
            nameInClient: "niceBodyName",
            isApiVersionParam: false,
            isGeneratedName: false,
            onClient: false
          },
          type: { type: "model", name: "MyBodyType" }
        }
      };
      const result = getOperationSignatureParameters(
        operation,
        "MyClientContext"
      );
      assert.equal(result.length, 3);
      assert.equal(result[0].name, "context");
      assert.equal(Boolean(result[0].hasQuestionToken), false);
      assert.equal(result[0].type, "MyClientContext");

      assert.equal(result[1].name, "niceBodyName");
      assert.equal(result[1].type, "MyBodyType");

      assert.equal(result[2].name, "options");
      assert.equal(result[2].type, "MyOperationOptionalParams");
      assert.equal(result[2].initializer, `{ requestOptions: {} }`);
    });
  });

  describe("getOperationFunction", () => {
    it("should generate a simple operation function", () => {
      const operation: Operation = {
        ...mockOperation,
        parameters: []
      };

      const result = getOperationFunction(operation, "MyClient");

      assert.equal(result.name, "myOperation");
      // Only context and options
      assert.equal(result.parameters?.length, 2);
      assert.equal(result.parameters?.[0].name, "context");
      assert.equal(result.parameters?.[1].name, "options");
      assert.equal(result.parameters?.[1].type, "MyOperationOptionalParams");
      assert.deepEqual(result.statements, [
        "const result = await _myOperationSend(context, options);",
        "return _myOperationDeserialize(result);"
      ]);
    });

    it("should generate a function for a pageable operation", async () => {
      const operation: Operation = {
        ...mockOperation,
        discriminator: "paging",
        parameters: []
      };
      const result = getOperationFunction(operation, "MyClient");

      assert.equal(result.name, "myOperation");
      // Only context and options
      assert.equal(result.parameters?.length, 2);
      assert.equal(result.parameters?.[0].name, "context");
      assert.equal(result.parameters?.[1].name, "options");
      assert.equal(result.parameters?.[1].type, "MyOperationOptionalParams");

      const formattedExpected =
        await reformatString(`return buildPagedAsyncIterator(
        context, 
        () => _myOperationSend(context, options), 
        _myOperationDeserialize,);`);

      const formattedActual = await Promise.all(
        (result.statements as string[]).map(
          async (s) => await reformatString(s)
        )
      );

      assert.deepEqual(formattedActual, [formattedExpected]);
      assert.equal(
        result.returnType,
        "PagedAsyncIterableIterator<MyResponseType>"
      );
    });

    it("should generate a function for an lro operation", async () => {
      const operation: Operation = {
        ...mockOperation,
        discriminator: "lro",
        parameters: []
      };
      const result = getOperationFunction(operation, "MyClient");

      assert.equal(result.name, "myOperation");
      // Only context and options
      assert.equal(result.parameters?.length, 2);
      assert.equal(result.parameters?.[0].name, "context");
      assert.equal(result.parameters?.[1].name, "options");
      assert.equal(result.parameters?.[1].type, "MyOperationOptionalParams");

      const formattedExpected = await reformatString(`
          return getLongRunningPoller(
            context, 
            _myOperationDeserialize, {
              updateIntervalInMs: options?.updateIntervalInMs,
              abortSignal: options?.abortSignal,
              getInitialResponse: () => _myOperationSend(context, options)}
          ) as PollerLike<OperationState<void>, void>;`);

      const formattedActual = await Promise.all(
        (result.statements as string[]).map(
          async (s) => await reformatString(s)
        )
      );

      assert.deepEqual(formattedActual, [formattedExpected]);
      assert.equal(result.returnType, "PollerLike<OperationState<void>, void>");
    });
  });

  describe("buildLroReturnType", () => {
    it("should return the correct return type for an lro operation without extra metadata", () => {
      const operation: Operation = { ...mockOperation, discriminator: "lro" };
      const result = buildLroReturnType(operation);

      assert.equal(result.type, "void");
    });

    it("should return the correct return type for an lro operation with extra metadata", () => {
      const operation: Operation = {
        ...mockOperation,
        discriminator: "lro",
        lroMetadata: {
          finalResultPath: "result",
          finalResult: { type: "string", name: "resourceName" }
        }
      };
      const result = buildLroReturnType(operation);

      assert.equal(result.type, "string");
      assert.equal(result.name, "resourceName");
    });
  });

  describe("getPagingOnlyOperationFunction", () => {
    it("should generate a function for a pageable operation when there are no responses", async () => {
      const operation: Operation = {
        ...mockOperation,
        parameters: [],
        responses: [],
        discriminator: "paging"
      };
      const result = getPagingOnlyOperationFunction(operation, "MyClient");
      assert.equal(result.returnType, "PagedAsyncIterableIterator<void>");

      const formattedActualStatements = await reformatString(
        result.statements.join("\n")
      );
      const formattedExpectedStatements = await reformatString(`
        return buildPagedAsyncIterator(
          context,
          () => _myOperationSend(context, options),
          _myOperationDeserialize
        )`);

      assert.equal(formattedActualStatements, formattedExpectedStatements);
    });

    it("should generate a function for a pageable operation", async () => {
      const operation: Operation = {
        ...mockOperation,
        parameters: [],
        discriminator: "paging"
      };
      const result = getPagingOnlyOperationFunction(operation, "MyClient");
      assert.equal(
        result.returnType,
        "PagedAsyncIterableIterator<MyResponseType>"
      );

      const formattedActualStatements = await reformatString(
        result.statements.join("\n")
      );
      const formattedExpectedStatements = await reformatString(`
        return buildPagedAsyncIterator(
          context,
          () => _myOperationSend(context, options),
          _myOperationDeserialize
        )`);

      assert.equal(formattedActualStatements, formattedExpectedStatements);
    });

    it("should generate a function for a pageable operation when itemName is present", async () => {
      const operation: Operation = {
        ...mockOperation,
        parameters: [],
        discriminator: "paging",
        itemName: "myValues"
      };
      const result = getPagingOnlyOperationFunction(operation, "MyClient");
      assert.equal(
        result.returnType,
        "PagedAsyncIterableIterator<MyResponseType>"
      );

      const formattedActualStatements = await reformatString(
        result.statements.join("\n")
      );
      const formattedExpectedStatements = await reformatString(`
        return buildPagedAsyncIterator(
          context,
          () => _myOperationSend(context, options),
          _myOperationDeserialize,
          { itemName: "myValues" },
        )`);

      assert.equal(formattedActualStatements, formattedExpectedStatements);
    });

    it("should generate a function for a pageable operation when continuationTokenName is present", async () => {
      const operation: Operation = {
        ...mockOperation,
        parameters: [],
        discriminator: "paging",
        continuationTokenName: "foo"
      };
      const result = getPagingOnlyOperationFunction(operation, "MyClient");
      assert.equal(
        result.returnType,
        "PagedAsyncIterableIterator<MyResponseType>"
      );

      const formattedActualStatements = await reformatString(
        result.statements.join("\n")
      );
      const formattedExpectedStatements = await reformatString(`
        return buildPagedAsyncIterator(
          context,
          () => _myOperationSend(context, options),
          _myOperationDeserialize,
          { nextLinkName: "foo" },
        )`);

      assert.equal(formattedActualStatements, formattedExpectedStatements);
    });
  });
});

const mockResponse: Response = {
  discriminator: "",
  headers: [],
  statusCodes: [200],
  type: {
    name: "MyResponseType",
    type: "model",
    tcgcType: {
      apiVersions: [],
      crossLanguageDefinitionId: "",
      isError: false,
      isGeneratedName: false,
      isFormDataType: false,
      kind: "model",
      name: "MyResponseType",
      nullable: false,
      properties: [],
      usage: UsageFlags.Output
    } as SdkModelType
  }
};

const mockParameter: Parameter = {
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
};

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
  parameters: [mockParameter],
  responses: [mockResponse],
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

async function reformatString(str: string) {
  return format(str, { parser: "typescript" });
}
