import { filterOperationParameters } from "../../../../src/generators/utils/parameterUtils";
import { ParameterDetails } from "../../../../src/models/parameterDetails";
import { OperationDetails } from "../../../../src/models/operationDetails";
import { assert } from "chai";
import {
  ParameterLocation,
  Parameter,
  StringSchema,
  SchemaType,
  ImplementationLocation
} from "@autorest/codemodel";
import { PropertyKind } from "../../../../src/models/modelDetails";

describe("parameterUtils", () => {
  describe("filterParameters", () => {
    let operation: OperationDetails;
    beforeEach(() => {
      operation = {
        name: "mockOperation",
        fullName: "mockgroup_mockoperation",
        description: "some mock operation",
        apiVersions: ["1.0.0"]
      } as OperationDetails;
    });

    it("should include optional parameters", () => {
      const operationsIn = { [operation.fullName]: { description: "" } };
      const parameters = [
        getParameter({ name: "requiredParam", operationsIn, required: true }),
        getParameter({
          name: "optionalParameter",
          operationsIn,
          required: false
        })
      ];

      const result = filterOperationParameters(parameters, operation, {
        includeOptional: true
      });

      assert.equal(result.length, 2);
    });

    it("should not include optional parameters", () => {
      const operationsIn = { [operation.fullName]: { description: "" } };
      const parameters = [
        getParameter({ name: "requiredParam", operationsIn, required: true }),
        getParameter({
          name: "optionalParameter",
          operationsIn,
          required: false
        })
      ];

      const result = filterOperationParameters(parameters, operation, {
        includeOptional: false
      });

      assert.equal(result.length, 1);
      assert.equal(result[0], parameters[0]);
    });

    it("should honor includeConstant option", () => {
      const operationsIn = { [operation.fullName]: { description: "" } };
      const parameters = [
        getParameter({
          name: "constantParameter",
          operationsIn,
          schemaType: SchemaType.Constant
        })
      ];

      let result = filterOperationParameters(parameters, operation, {
        includeConstantParameters: true
      });

      assert.equal(result.length, 1);
      assert.equal(result[0], parameters[0]);

      result = filterOperationParameters(parameters, operation, {
        includeConstantParameters: false
      });

      assert.equal(result.length, 0);
    });
    it("should include honor incluideClientParmeter options", () => {
      const operationsIn = { [operation.fullName]: { description: "" } };
      const parameters = [
        getParameter({
          name: "clientParameter",
          operationsIn,
          implementationLocation: ImplementationLocation.Client
        })
      ];

      let result = filterOperationParameters(parameters, operation, {
        includeClientParams: true
      });

      assert.equal(result.length, 1);
      assert.equal(result[0], parameters[0]);

      result = filterOperationParameters(parameters, operation, {
        includeClientParams: false
      });

      assert.equal(result.length, 0);
    });

    it("should honor includeGlobalParameters", () => {
      const operationsIn = { [operation.fullName]: { description: "" } };
      const parameters = [
        getParameter({
          name: "globalParameter",
          operationsIn,
          isGlobal: true
        })
      ];

      let result = filterOperationParameters(parameters, operation, {
        includeGlobalParameters: true
      });

      assert.equal(result.length, 1);
      assert.equal(result[0], parameters[0]);

      result = filterOperationParameters(parameters, operation, {
        includeGlobalParameters: false
      });

      assert.equal(result.length, 0);
    });
    it("should include only parameters used by the operation", () => {
      const parameters = [
        getParameter({
          name: "foreignParameter",
          operationsIn: { ["some_other_operation"]: { description: "" } }
        }),
        getParameter({
          name: "goodParameter",
          operationsIn: { [operation.fullName]: { description: "" } }
        })
      ];

      let result = filterOperationParameters(parameters, operation);

      assert.equal(result.length, 1);
      assert.equal(result[0], parameters[1]);
    });
  });
});

const getParameter = ({
  name,
  description,
  nameRef,
  location,
  parameterPath,
  mapper,
  collectionFormat,
  typeDetails,
  schemaType,
  sufix = "",
  isGlobal = false,
  required = true,
  parameter = new Parameter(
    "mockParameter",
    "",
    new StringSchema("mock_string", "")
  ),
  operationsIn = {},
  implementationLocation = ImplementationLocation.Method,
  isFlattened = false
}: Partial<ParameterDetails & { sufix: string }>): ParameterDetails => ({
  nameRef: nameRef || `MockParameter${sufix}`,
  description: description || `mock parameter description${sufix}`,
  name: name || `mockParameter${sufix}`,
  propertyName: `mockParameter${sufix}`,
  serializedName: `mock_parameter${sufix}`,
  location: location || ParameterLocation.Body,
  parameterPath: parameterPath || `MockParameter${sufix}`,
  mapper: mapper || "MockMapper",
  typeDetails: typeDetails || {
    typeName: "MockModel",
    kind: PropertyKind.Composite,
    usedModels: []
  },
  schemaType: schemaType || SchemaType.String,
  parameter,
  isGlobal,
  required,
  operationsIn,
  collectionFormat,
  implementationLocation,
  isFlattened
});
