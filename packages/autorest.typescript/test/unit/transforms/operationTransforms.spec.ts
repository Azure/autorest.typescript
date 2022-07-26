import { assert } from "chai";
import {
  transformOperationSpec,
  getSpecType,
  transformOperation
} from "../../../src/transforms/operationTransforms";
import {
  Operation,
  SchemaResponse,
  SchemaType,
  Schema,
  ChoiceValue,
  ChoiceSchema,
  ObjectSchema,
  ParameterLocation,
  ConstantSchema,
  ConstantValue,
  Parameter,
  StringSchema,
  ImplementationLocation
} from "@autorest/codemodel";
import { KnownMediaType } from "@azure-tools/codegen";
import { Mapper } from "@azure/core-http";
import { OperationSpecDetails } from "../../../src/models/operationDetails";
import { PropertyKind } from "../../../src/models/modelDetails";
import { ParameterDetails } from "../../../dist/src/models/parameterDetails";
import * as sinon from "sinon";
import * as autorestSession from "../../../src/autorestSession";

const choice = new ChoiceSchema("mockChoice", "", {
  choices: [
    new ChoiceValue("red", "", "red color"),
    new ChoiceValue("green-color", "", "green-color"),
    new ChoiceValue("blue_color", "", "blue_color")
  ]
});

const constantSchema = new ConstantSchema(
  "paths·string-null·get·responses·200·content·application-json·schema",
  "",
  {
    value: new ConstantValue("Some constant value"),
    valueType: new StringSchema("string", "")
  }
);

const objectSchema = new ObjectSchema("RefColorConstant", "", {});
const errorSchema = new ObjectSchema("ErrorModel", "", {});

describe("OperationTransforms", () => {
  describe("getSpecType", () => {
    it("should return string when type is string", () => {
      assert.strictEqual(
        getSpecType(new StringSchema("string", "")).name,
        "String",
        "string"
      );
    });
    it("should return constant props when type is constant", () => {
      const constantType = getSpecType(
        {
          type: SchemaType.Constant,
          valueType: new StringSchema("string", ""),
          value: { value: "constantValue" }
        } as any,
        true
      );
      assert.strictEqual(constantType.name, "String", "constant");
      assert.deepEqual(constantType.constantProps, {
        isConstant: true,
        defaultValue: "constantValue"
      });
    });
    it("should return Base64Url when type is ByteArray", () => {
      assert.strictEqual(
        getSpecType({ type: SchemaType.ByteArray } as any).name,
        "Base64Url"
      );
    });
    it("should return the right Enum type for Choice", () => {
      const choiceType = getSpecType(choice);
      assert.strictEqual(choiceType.name, "Enum");
      assert.deepEqual(choiceType.allowedValues, [
        "red color",
        "green-color",
        "blue_color"
      ]);
    });
    it("should return a reference to a mapper when type is object", () => {
      const objectType = getSpecType(objectSchema);
      assert.strictEqual(objectType.reference, `Mappers.RefColorConstant`);
    });
  });

  describe("transformOperationSpec", () => {
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
    });

    afterEach(() => {
      sinon.restore();
    });
    describe("Simple get operation", () => {
      const operationPath = "/string/null";
      const getErrorResponseSchema = () => {
        const schema = errorSchema;
        const response = new SchemaResponse(schema);

        response.protocol = {
          http: {
            knownMediaType: KnownMediaType.Json,
            statusCodes: ["default"],
            mediaTypes: "application/json"
          } as any
        };

        return response;
      };
      const get200ResponseSchema = (schema: Schema) => {
        const response = new SchemaResponse(schema);

        response.protocol = {
          http: {
            knownMediaType: KnownMediaType.Json,
            statusCodes: [200],
            mediaTypes: "application/json"
          } as any
        };

        return response;
      };

      const getOperation = (
        responseSchema?: SchemaResponse,
        parameters: Parameter[] = []
      ) => {
        return new Operation("", "", {
          requests: [
            {
              parameters,
              signatureParameters: parameters,
              protocol: {
                http: {
                  path: operationPath,
                  method: "get",
                  url: "{$host}"
                }
              }
            }
          ],
          responses: [
            responseSchema ||
            new SchemaResponse(new StringSchema("string", ""), {
              protocol: { http: { statusCodes: ["200"] } }
            })
          ],
          exceptions: [getErrorResponseSchema()],
          language: {
            default: {
              name: "getNull",
              description: "Get null string value value"
            }
          }
        });
      };

      const checkHttpMethodAndPath = (operationSpec: OperationSpecDetails) => {
        assert.strictEqual(
          operationSpec.httpMethod,
          "GET",
          `expected HTTPMethod to be GET, actual ${operationSpec.httpMethod}`
        );

        assert.strictEqual(
          operationSpec.path,
          operationPath,
          `expected PATH to be ${operationPath}, actual ${operationSpec.path}`
        );
      };

      it("should create an operation spec  with correct http details", async () => {
        const okResponseSchema = get200ResponseSchema(constantSchema);
        const mockOperation = getOperation(okResponseSchema);
        const operationDetails = await transformOperation(
          mockOperation,
          { language: { default: { name: "MockOperationGroup" } } } as any,
          "ClientName"
        );
        const operationSpec = transformOperationSpec(operationDetails, [])[0];
        checkHttpMethodAndPath(operationSpec);
      });

      it("should create an operation spec with correct responses from a basic response", async () => {
        const mockOperation = getOperation();
        const operationDetails = transformOperation(
          mockOperation,
          { language: { default: { name: "MockOperationGroup" } } } as any,
          "ClientName"
        );
        const operationSpec = transformOperationSpec(
          await operationDetails,
          []
        )[0];
        checkHttpMethodAndPath(operationSpec);
        assert.notEqual(operationSpec.responses[200], undefined);
      });

      it("should create an operation spec with correct parameters", async () => {
        const parameter = new Parameter(
          "mockParam",
          "",
          new StringSchema("stringSchema", ""),
          {
            language: { default: { serializedName: "mockParameter" } },
            protocol: { http: { in: "body", style: "json" } }
          }
        );

        const mockOperation = getOperation(undefined, [parameter]);
        const operationDetails = await transformOperation(
          mockOperation,
          { language: { default: { name: "MockOperationGroup" } } } as any,
          "ClientName"
        );
        const operationSpec = transformOperationSpec(operationDetails, [
          {
            nameRef: "MockOperation",
            operationsIn: {
              ["MockOperationGroup_getNull"]: { description: "" }
            },
            parameterPath: "mockOperation",
            isGlobal: false,
            mapper: "",
            location: ParameterLocation.Body,
            serializedName: "",
            parameter,
            typeDetails: {
              typeName: "string",
              kind: PropertyKind.Primitive,
              usedModels: []
            },
            name: "MockOperation",
            description: "",
            schemaType: SchemaType.String,
            implementationLocation: ImplementationLocation.Method,
            isFlattened: false
          }
        ])[0];
        checkHttpMethodAndPath(operationSpec);
        assert.deepEqual(
          (operationSpec.requestBody as ParameterDetails)!.nameRef,
          "MockOperation"
        );
      });

      it("should create an operation spec with correct responses spec and cosntant schema response", async () => {
        const okResponseSchema = get200ResponseSchema(constantSchema);
        const mockOperation = getOperation(okResponseSchema);
        const operationDetails = await transformOperation(
          mockOperation,
          { language: { default: { name: "MockOperationGroup" } } } as any,
          "ClientName"
        );
        const operationSpec = transformOperationSpec(operationDetails, [])[0];
        checkHttpMethodAndPath(operationSpec);
        const okResponse = operationSpec.responses[200];
        assert.deepEqual((okResponse.bodyMapper as Mapper).type, {
          name: "String"
        });
        assert.deepEqual(
          operationSpec.responses.default.bodyMapper,
          "Mappers.ErrorModel"
        );
      });

      it("should create an operation spec with correct responses spec and choice schema response", async () => {
        const okResponseSchema = get200ResponseSchema(choice);
        const mockOperation = getOperation(okResponseSchema);
        const operationDetails = await transformOperation(
          mockOperation,
          { language: { default: { name: "MockOperationGroup" } } } as any,
          "ClientName"
        );
        const operationSpec = transformOperationSpec(operationDetails, [])[0];
        checkHttpMethodAndPath(operationSpec);
        const okResponse = operationSpec.responses[200];
        assert.deepEqual((okResponse.bodyMapper as Mapper).type, {
          name: "String"
        });
        assert.deepEqual(
          operationSpec.responses.default.bodyMapper,
          "Mappers.ErrorModel"
        );
      });
    });
  });
});
