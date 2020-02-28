// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  Project,
  SourceFile,
  VariableDeclarationKind,
  Scope,
  ClassDeclaration,
  ExportDeclarationStructure
} from "ts-morph";
import { normalizeName, NameType } from "../utils/nameUtils";
import { ClientDetails } from "../models/clientDetails";
import { transformOperationSpec } from "../transforms/operationTransforms";
import {
  OperationGroupDetails,
  OperationSpecDetails,
  OperationResponseMapper
} from "../models/operationDetails";
import { isString } from "util";
import { ParameterDetails } from "../models/parameterDetails";
import { KnownMediaType } from "@azure-tools/codegen";
import { writeOperation } from "./utils/writeOperation";

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

  // Toplevel operations are inlined in the client
  const operationGroups = clientDetails.operationGroups.filter(
    og => !og.isTopLevel
  );

  operationGroups.forEach(operationDetails => {
    fileNames.push(normalizeName(operationDetails.name, NameType.File));
    generateOperation(operationDetails, clientDetails, project);
  });

  if (operationGroups.length) {
    const operationIndexFile = project.createSourceFile(
      `${clientDetails.srcPath}/operations/index.ts`,
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
    `${clientDetails.srcPath}/operations/${name}.ts`,
    undefined,
    { overwrite: true }
  );

  addImports(operationGroupFile, clientDetails, operationGroupDetails);
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
  const headerParams = buildParameters(spec, "headerParameters");
  const contentType = buildContentType(spec);
  const isXML = spec.isXML ? "isXML: true," : "";

  return `{ path: "${spec.path}", httpMethod: "${
    spec.httpMethod
  }", responses: {${responses.join(
    ", "
  )}},${requestBody}${queryParams}${urlParams}${headerParams}${isXML}${contentType}serializer
    }`;
}

function buildContentType({ requestBody, isXML }: OperationSpecDetails) {
  return requestBody && isXML
    ? "contentType: 'application/xml; charset=utf-8',"
    : "";
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
    const { bodyMapper, headersMapper } = responses[code];
    const bodyMapperString = buildMapper(bodyMapper, "bodyMapper");
    const headersMapperString = buildMapper(headersMapper, "headersMapper");
    parsedResponses.push(`${code}: {
        ${bodyMapperString}${headersMapperString}
      }`);
  });

  return parsedResponses;
}

function buildMapper(
  mapper: OperationResponseMapper | undefined,
  mapperName: string
) {
  if (!mapper) {
    return "";
  }

  // When mapper is a reference (string) we don't need to stringify the object
  let mapperString = isString(mapper) ? mapper : JSON.stringify(mapper);

  return `${mapperName}: ${mapperString},`;
}

// function getOptionsParameter(
//   operation: OperationDetails,
//   parameters: ParameterDetails[],
//   { isOptional = true } = {}
// ): ParameterWithDescription {
//   const type = filterOperationParameters(parameters, operation, {
//     includeOptional: true
//   }).some(p => !p.required)
//     ? `Models.${operation.typeDetails.typeName}OptionalParams`
//     : "coreHttp.OperationOptions";

//   return {
//     name: "options",
//     type,
//     hasQuestionToken: isOptional,
//     description: "The options parameters."
//   };
// }

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
  writeOperations(
    operationGroupDetails,
    operationGroupClass,
    clientDetails.parameters
  );
}

// type ParameterWithDescription = OptionalKind<
//   ParameterDeclarationStructure & { description: string }
// >;

/**
 * Write operations implementation, extracted from OperationGroupDetails, to the generated file
 */
export function writeOperations(
  operationGroupDetails: OperationGroupDetails,
  operationGroupClass: ClassDeclaration,
  parameters: ParameterDetails[],
  isClientOperation = false
) {
  operationGroupDetails.operations.forEach(operation => {
    writeOperation({
      operationGroupClass,
      operation,
      parameters,
      options: {
        isClientOperation
      }
    });
  });
}

// function getResponseType(operation: OperationDetails) {
//   const hasSuccessResponse = operation.responses.some(
//     ({ isError, mappers }) =>
//       !isError && (!!mappers.bodyMapper || !!mappers.headersMapper)
//   );

//   const responseName = hasSuccessResponse ? operation.typeDetails.typeName : "";

//   return !!responseName
//     ? `Models.${normalizeName(responseName, NameType.Interface)}Response`
//     : "coreHttp.RestResponse";
// }

// function generateOperationJSDoc(
//   params: ParameterWithDescription[] = [],
//   description: string = ""
// ): string {
//   const paramJSDoc =
//     !params || !params.length ? "" : formatJsDocParam(params).join("\n");

//   return `${
//     description ? wrapString(description) + "\n" : description
//   }${paramJSDoc}`;
// }

/**
 * Generates and inserts into the file the operation specs
 * for a given operation group
 */
export function addOperationSpecs(
  operationGroupDetails: OperationGroupDetails,
  file: SourceFile,
  parameters: ParameterDetails[]
): void {
  const isXml = operationGroupDetails.operations.some(o =>
    o.mediaTypes.has(KnownMediaType.Xml)
  );
  file.addStatements("// Operation Specifications");
  file.addVariableStatement({
    declarationKind: VariableDeclarationKind.Const,
    declarations: [
      {
        name: "serializer",
        initializer: `new coreHttp.Serializer(Mappers, /* isXml */ ${isXml});`
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
  { className, sourceFileName }: ClientDetails,
  { operations }: OperationGroupDetails
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

  // if (operations.some(operation => Boolean(operation.pagination))) {
  //   operationGroupFile.addImportDeclaration({
  //     namedImports: ["PagedAsyncIterableIterator"],
  //     moduleSpecifier: "@azure/core-paging"
  //   });
  // }
}
