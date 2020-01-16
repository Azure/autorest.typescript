// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ParameterLocation, SchemaType } from "@azure-tools/codemodel";
import {
  Project,
  SourceFile,
  VariableDeclarationKind,
  Scope,
  ClassDeclaration,
  ParameterDeclarationStructure,
  OptionalKind,
  ExportDeclarationStructure
} from "ts-morph";
import { normalizeName, NameType } from "../utils/nameUtils";
import { ClientDetails } from "../models/clientDetails";
import { transformOperationSpec } from "../transforms/operationTransforms";
import { MapperType } from "@azure/core-http";
import {
  OperationGroupDetails,
  OperationSpecDetails,
  OperationDetails
} from "../models/operationDetails";
import { isString } from "util";
import { ParameterDetails } from "../models/parameterDetails";
import { filterOperationParameters } from "./utils/parameterUtils";
import { PropertyKind } from "../models/modelDetails";

/**
 * Function that writes the code for all the operations.
 * It will generate one file per operation group and each file contains:
 *    - A class definition for the operation group
 *    - Methods and overrides for each operation
 *    - OperationSpecs for each operation
 * @param clientDetails client details
 * @param project project for code generation
 */
export function generateOperations(
  clientDetails: ClientDetails,
  project: Project
): void {
  let fileNames: string[] = [];
  clientDetails.operationGroups.forEach(operationDetails => {
    fileNames.push(normalizeName(operationDetails.name, NameType.File));
    generateOperation(operationDetails, clientDetails, project);
  });

  const operationIndexFile = project.createSourceFile(
    "src/operations/index.ts",
    undefined,
    { overwrite: true }
  );

  operationIndexFile.addExportDeclarations(
    fileNames.map(fileName => {
      return {
        moduleSpecifier: `./${fileName}`
      } as ExportDeclarationStructure;
    })
  );
}

/**
 * This function creates a file for a given Operation Group
 */
function generateOperation(
  operationGroupDetails: OperationGroupDetails,
  clientDetails: ClientDetails,
  project: Project
): void {
  const name = normalizeName(operationGroupDetails.name, NameType.File);

  const operationGroupFile = project.createSourceFile(
    `src/operations/${name}.ts`,
    undefined,
    { overwrite: true }
  );

  addImports(operationGroupFile, clientDetails);
  addClass(operationGroupFile, operationGroupDetails, clientDetails);
  addOperationSpecs(
    operationGroupDetails,
    operationGroupFile,
    clientDetails.parameters
  );
}

/**
 * Generates a string representation of an Operation spec
 * the output is to be inserted in the Operation group file
 */
function buildSpec(spec: OperationSpecDetails): string {
  const responses = buildResponses(spec);
  const requestBody = buildRequestBody(spec);
  const queryParams = buildParameters(spec, "queryParameters");
  const urlParams = buildParameters(spec, "urlParameters");
  return `{ path: "${spec.path}", httpMethod: "${
    spec.httpMethod
  }", responses: {${responses.join(
    ", "
  )}},${requestBody}${queryParams}${urlParams}serializer
    }`;
}

/**
 * This function transforms the requestBody of OperationSpecDetails into its string representation
 * to insert in generated files
 */
function buildRequestBody({
  requestBody,
  httpMethod
}: OperationSpecDetails): string {
  if (!requestBody || httpMethod === "GET") {
    return "";
  }

  return `requestBody: Parameters.${requestBody.nameRef},`;
}

function buildParameters(
  operationSpec: OperationSpecDetails,
  parameterGroupName: string
): string {
  const parameterGroup: ParameterDetails[] | undefined = (operationSpec as any)[
    parameterGroupName
  ];
  if (!parameterGroup || !parameterGroup.length) {
    return "";
  }

  const parameters = parameterGroup.map(param => `Parameters.${param.nameRef}`);

  return `${parameterGroupName}: [${parameters.join()}],`;
}

/**
 * This function transforms the responses of OperationSpecDetails into their string representation
 * to insert in generated files
 */
function buildResponses({ responses }: OperationSpecDetails): string[] {
  const responseCodes = Object.keys(responses);
  let parsedResponses: string[] = [];
  responseCodes.forEach(code => {
    // Check whether we have an actual mapper or a string reference
    const bodyMapper = responses[code].bodyMapper;
    const isCompositeMapper =
      bodyMapper &&
      !isString(bodyMapper) &&
      bodyMapper.type.name === MapperType.Composite;

    if (isCompositeMapper) {
      parsedResponses.push(`${code}: ${JSON.stringify(responses[code])}`);
    } else if (bodyMapper) {
      // Mapper is a reference to an existing mapper in the Mappers file
      const bodyMapperString = `bodyMapper: ${
        isString(bodyMapper) ? bodyMapper : JSON.stringify(bodyMapper)
      }`;

      parsedResponses.push(`${code}: {
        ${bodyMapperString}
      }`);
    }
  });

  return parsedResponses;
}

function getOptionsParameter(
  operation: OperationDetails,
  parameters: ParameterDetails[],
  { isOptional = true } = {}
): ParameterWithDescription {
  const type = filterOperationParameters(parameters, operation, {
    includeOptional: true
  }).some(p => !p.required)
    ? `Models.${operation.typeDetails.typeName}OptionalParams`
    : "coreHttp.RequestOptionsBase";

  return {
    name: "options",
    type,
    hasQuestionToken: isOptional,
    description: "The options parameters."
  };
}

function getCallbackParameter({
  isOptional = true
} = {}): ParameterWithDescription {
  return {
    name: "callback",
    type: "coreHttp.ServiceCallback<any>", // TODO get the real type for callback
    hasQuestionToken: isOptional,
    description: "The callback."
  };
}

/**
 * Adds an Operation group class to the generated file
 */
function addClass(
  operationGroupFile: SourceFile,
  operationGroupDetails: OperationGroupDetails,
  clientDetails: ClientDetails
) {
  const className = normalizeName(operationGroupDetails.name, NameType.Class);
  const operationGroupClass = operationGroupFile.addClass({
    name: className,
    docs: [`Class representing a ${className}.`],
    isExported: true
  });
  operationGroupClass.addProperty({
    name: "client",
    isReadonly: true,
    scope: Scope.Private,
    type: clientDetails.className
  });
  const constructorDefinition = operationGroupClass.addConstructor({
    docs: [
      {
        description: `Initialize a new instance of the class ${className} class. \n@param client Reference to the service client`
      }
    ],
    parameters: [
      {
        name: "client",
        hasQuestionToken: false,
        type: clientDetails.className
      }
    ]
  });

  constructorDefinition.addStatements(["this.client = client"]);
  writeOperationOverrides(
    operationGroupDetails,
    operationGroupClass,
    clientDetails.parameters
  );
}

type ParameterWithDescription = OptionalKind<
  ParameterDeclarationStructure & { description: string }
>;

/**
 * Add all the required operations  whith their overloads,
 * extracted from OperationGroupDetails, to the generated file
 */
function writeOperationOverrides(
  operationGroupDetails: OperationGroupDetails,
  operationGroupClass: ClassDeclaration,
  parameters: ParameterDetails[]
) {
  operationGroupDetails.operations.forEach(operation => {
    const paramDeclarations = filterOperationParameters(
      parameters,
      operation
    ).map<ParameterWithDescription>(param => {
      const { typeName, kind } = param.typeDetails;
      const type =
        kind === PropertyKind.Primitive
          ? typeName
          : `Models.${normalizeName(typeName, NameType.Class)}`;

      return {
        name: param.name,
        description: param.description,
        type,
        hasQuestionToken: !param.required
      };
    });

    const optionalOptions = getOptionsParameter(operation, parameters);
    const requiredCallback = getCallbackParameter({ isOptional: false });

    const optionalOptionsParams = [...paramDeclarations, optionalOptions];
    const allParams = [
      ...paramDeclarations,
      optionalOptions,
      getCallbackParameter({ isOptional: true })
    ];
    const requiredCallbackParams = [...paramDeclarations, requiredCallback];
    const requiredOptionsAndCallbackParams = [
      ...paramDeclarations,
      getOptionsParameter(operation, parameters, { isOptional: false }),
      requiredCallback
    ];
    const operationMethod = operationGroupClass.addMethod({
      name: normalizeName(operation.name, NameType.Property),
      parameters: allParams,
      returnType: `Promise<${getResponseType(operation)}>`
    });

    const sendParams = paramDeclarations.map(p => p.name).join(",");
    operationMethod.addStatements(
      `return this.client.sendOperationRequest({${sendParams}${
        !!sendParams ? "," : ""
      } options}, ${operation.name}OperationSpec, callback)`
    );

    operationMethod.addOverloads([
      {
        parameters: optionalOptionsParams,
        docs: [
          generateOperationJSDoc(optionalOptionsParams, operation.description)
        ],
        returnType: "Promise<any>" // TODO: Add correct return type
      },
      {
        parameters: requiredCallbackParams,
        docs: [generateOperationJSDoc(requiredCallbackParams)],
        returnType: "void"
      },
      {
        parameters: requiredOptionsAndCallbackParams,
        docs: [generateOperationJSDoc(requiredOptionsAndCallbackParams)],
        returnType: "void"
      }
    ]);
  });
}

function getResponseType(operation: OperationDetails) {
  //TODO: Does this need to be updated to handle other success codes?
  // Maybe just finding something that is not default and does not have
  // x-ms-error-response extension?
  const successResponse = operation.responses.find(
    r => r.statusCodes.indexOf("200") > -1
  );

  const responseName = successResponse && successResponse.typeDetails.typeName;

  return !!responseName
    ? `Models.${normalizeName(responseName, NameType.Interface)}`
    : "coreHttp.RestResponse";
}

function generateOperationJSDoc(
  params: ParameterWithDescription[] = [],
  description: string = ""
): string {
  const paramJSDoc =
    !params || !params.length
      ? ""
      : params
          .map(param => {
            return `@param ${param.name} ${param.description}`;
          })
          .join("\n");

  return `${description ? description + "\n" : description}${paramJSDoc}`;
}

/**
 * Generates and inserts into the file the operation specs
 * for a given operation group
 */
function addOperationSpecs(
  operationGroupDetails: OperationGroupDetails,
  file: SourceFile,
  parameters: ParameterDetails[]
): void {
  file.addStatements("// Operation Specifications");
  file.addVariableStatement({
    declarationKind: VariableDeclarationKind.Const,
    declarations: [
      {
        name: "serializer",
        initializer: "new coreHttp.Serializer(Mappers);"
      }
    ]
  });

  operationGroupDetails.operations.forEach(operation => {
    const operationName = normalizeName(operation.name, NameType.Property);
    const operationSpec = transformOperationSpec(operation, parameters);
    file.addVariableStatement({
      declarationKind: VariableDeclarationKind.Const,
      declarations: [
        {
          name: `${operationName}OperationSpec`,
          type: "coreHttp.OperationSpec",
          initializer: buildSpec(operationSpec)
        }
      ]
    });
  });
}

/**
 * Adds required imports at the top of the file
 */
function addImports(
  operationGroupFile: SourceFile,
  { className, sourceFileName }: ClientDetails
) {
  operationGroupFile.addImportDeclaration({
    namespaceImport: "coreHttp",
    moduleSpecifier: "@azure/core-http"
  });

  operationGroupFile.addImportDeclaration({
    namespaceImport: "Models",
    moduleSpecifier: "../models"
  });

  operationGroupFile.addImportDeclaration({
    namespaceImport: "Mappers",
    moduleSpecifier: "../models/mappers"
  });

  operationGroupFile.addImportDeclaration({
    namespaceImport: "Parameters",
    moduleSpecifier: "../models/parameters"
  });

  operationGroupFile.addImportDeclaration({
    namedImports: [className],
    moduleSpecifier: `../${sourceFileName}`
  });
}
