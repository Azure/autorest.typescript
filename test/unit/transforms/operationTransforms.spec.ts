import * as assert from "assert";
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
  StringSchema
} from "@azure-tools/codemodel";
import { KnownMediaType } from "@azure-tools/codegen";
import { Mapper } from "@azure/core-http";
import { OperationSpecDetails } from "../../../src/models/operationDetails";

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
    valueType: { type: SchemaType.String }
  }
);

const objectSchema = new ObjectSchema("RefColorConstant", "", {});
const errorSchema = new ObjectSchema("ErrorModel", "", {});

describe("OperationTransforms", () => {
  describe("getSpecType", () => {
    it("should return string when type is string", () => {
      assert.strictEqual(
        getSpecType({ type: SchemaType.String } as any).name,
        "String",
        "string"
      );
    });
    it("should return constant props when type is constant", () => {
      const constantType = getSpecType(
        {
          type: SchemaType.Constant,
          valueType: { type: SchemaType.String } as any,
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
          request: {
            parameters,
            protocol: {
              http: {
                path: operationPath,
                method: "get",
                url: "{$host}"
              }
            }
          },
          responses: [
            responseSchema || { protocol: { http: { statusCodes: ["200"] } } }
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

      it("should create an operation spec  with correct http details", () => {
        const okResponseSchema = get200ResponseSchema(constantSchema);
        const mockOperation = getOperation(okResponseSchema);
        const operationDetails = transformOperation(
          mockOperation,
          "MockOperationGroup"
        );
        const operationSpec = transformOperationSpec(operationDetails, []);
        checkHttpMethodAndPath(operationSpec);
      });

      it("should create an operation spec with correct responses from a basic response", () => {
        const mockOperation = getOperation();
        const operationDetails = transformOperation(
          mockOperation,
          "MockOperationGroup"
        );
        const operationSpec = transformOperationSpec(operationDetails, []);
        checkHttpMethodAndPath(operationSpec);
        assert.deepEqual(operationSpec.responses[200], {});
      });

      it("should create an operation spec with correct parameters", () => {
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
        const operationDetails = transformOperation(
          mockOperation,
          "MockOperationGroup"
        );
        const operationSpec = transformOperationSpec(operationDetails, [
          {
            nameRef: "MockOperation",
            operationsIn: ["mockoperationgroup_getnull"],
            parameterPath: "mockOperation",
            isGlobal: false,
            mapper: "",
            location: ParameterLocation.Body,
            serializedName: "",
            parameter,
            modelType: "string",
            name: "MockOperation",
            description: ""
          }
        ]);
        checkHttpMethodAndPath(operationSpec);
        assert.deepEqual(operationSpec.requestBody!.nameRef, "MockOperation");
      });

      it("should create an operation spec with correct responses spec and cosntant schema response", () => {
        const okResponseSchema = get200ResponseSchema(constantSchema);
        const mockOperation = getOperation(okResponseSchema);
        const operationDetails = transformOperation(
          mockOperation,
          "MockOperationGroup"
        );
        const operationSpec = transformOperationSpec(operationDetails, []);
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

      it("should create an operation spec with correct responses spec and choice schema response", () => {
        const okResponseSchema = get200ResponseSchema(choice);
        const mockOperation = getOperation(okResponseSchema);
        const operationDetails = transformOperation(
          mockOperation,
          "MockOperationGroup"
        );
        const operationSpec = transformOperationSpec(operationDetails, []);
        checkHttpMethodAndPath(operationSpec);
        const okResponse = operationSpec.responses[200];
        assert.deepEqual((okResponse.bodyMapper as Mapper).type, {
          name: "Enum",
          allowedValues: ["red color", "green-color", "blue_color"]
        });
        assert.deepEqual(
          operationSpec.responses.default.bodyMapper,
          "Mappers.ErrorModel"
        );
      });
    });
  });
});
