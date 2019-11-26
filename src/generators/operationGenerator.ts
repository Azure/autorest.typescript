import {
  CodeModel,
  OperationGroup,
  Language,
  ParameterLocation
} from "@azure-tools/codemodel";
import {
  Project,
  SourceFile,
  VariableDeclarationKind,
  Scope,
  ClassDeclaration,
  ParameterDeclarationStructure,
  StructureKind,
  OptionalKind,
  MethodDeclarationOverloadStructure,
  ExportDeclarationStructure
} from "ts-morph";
import { normalizeName, NameType } from "../utils/nameUtils";
import { ClientDetails } from "../models/clientDetails";
import {
  transformOperationSpec,
  transformOperationGroup
} from "../operationTransforms";
import { OperationSpec } from "@azure/core-http";
import { OperationGroupDetails } from "../models/operationDetails";

export function generateOperations(
  clientDetails: ClientDetails,
  project: Project
) {
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

function generateOperation(
  operationGroupDetails: OperationGroupDetails,
  clientDetails: ClientDetails,
  project: Project
) {
  const name = normalizeName(operationGroupDetails.name, NameType.File);

  const operationGroupFile = project.createSourceFile(
    `src/operations/${name}.ts`,
    undefined,
    { overwrite: true }
  );

  addImports(operationGroupFile, clientDetails);
  addClass(operationGroupFile, operationGroupDetails, clientDetails);
  addOperationSpecs(operationGroupDetails, operationGroupFile);
}

function addOperationSpecs(
  operationGroupDetails: OperationGroupDetails,
  file: SourceFile
) {
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
    const operationSpec = transformOperationSpec(operation);
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

function buildSpec(spec: OperationSpec) {
  const responses = buildResponses(spec);
  const requestBody = buildRequestBody(spec);
  return `{
        path: "${spec.path}",
        httpMethod: "${spec.httpMethod}",
        responses: {${responses.join(", ")}},
        ${requestBody}
        serializer
    }`;
}

function buildRequestBody({ requestBody }: OperationSpec) {
  if (!requestBody) {
    return "";
  }

  const mapper = !requestBody.mapper.type
    ? requestBody.mapper
    : JSON.stringify(requestBody.mapper);

  return `requestBody: {
      parameterPath: "${requestBody.parameterPath}",
      mapper: ${mapper}
    },`;
}

function buildResponses({ responses }: OperationSpec) {
  const responseCodes = Object.keys(responses);
  let parsedResponses: string[] = [];
  responseCodes.forEach(code => {
    if (
      responses[code] &&
      responses[code].bodyMapper &&
      (responses[code].bodyMapper as any).indexOf &&
      (responses[code].bodyMapper as any).indexOf("Mappers") > -1
    ) {
      // Complex
      parsedResponses.push(`${code}: {
          bodyMapper: ${responses[code].bodyMapper}
      }`);
    } else {
      // Simple
      parsedResponses.push(`${code}: ${JSON.stringify(responses[code])}`);
    }
  });

  return parsedResponses;
}

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
        description: `Initialize a new instance of the class ${className} class.`
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
  addOperations(operationGroupDetails, operationGroupClass);
}

function addOperations(
  operationGroupDetails: OperationGroupDetails,
  operationGroupClass: ClassDeclaration
) {
  const primitiveTypes = ["string", "boolean", "number", "any", "Int8Array"];
  operationGroupDetails.operations.forEach(operation => {
    const parameters = operation.request.parameters || [];
    const params = parameters
      .filter(param => param.location === ParameterLocation.Body)
      .map(param => {
        const typeName = param.modelType || "any";
        const type =
          primitiveTypes.indexOf(typeName) > -1
            ? typeName
            : `Models.${typeName}`;
        return {
          name: param.name,
          type,
          hasQuestionToken: !param.required
        };
      });
    const operationMethod = operationGroupClass.addMethod({
      name: normalizeName(operation.name, NameType.Property),
      docs: [operation.description],
      parameters: [
        ...params,
        getOptionsParameter(true),
        getCallbackParameter(true)
      ],
      returnType: "Promise<any>" // TODO: Add correct return type
    });

    const sendParams = params.map(p => p.name).join(",");
    operationMethod.addStatements(
      `return this.client.sendOperationRequest({${sendParams}${
        !!sendParams ? "," : ""
      } options}, ${operation.name}OperationSpec, callback)`
    );

    operationMethod.addOverloads([
      // Overload with optional options
      {
        parameters: [...params, getOptionsParameter(true)],
        returnType: "Promise<any>" // TODO: Add correct return type
      },
      // Overload with  required callback
      {
        parameters: [...params, getCallbackParameter(false)],
        returnType: "void"
      },
      // Overload with  required options and callback
      {
        parameters: [
          ...params,
          getOptionsParameter(false),
          getCallbackParameter(false)
        ],
        returnType: "void"
      }
    ]);
  });
}

function getOptionsParameter(
  isOptional = false
): OptionalKind<ParameterDeclarationStructure> {
  return {
    name: "options",
    type: "coreHttp.RequestOptionsBase",
    hasQuestionToken: isOptional
  };
}

function getCallbackParameter(
  isOptional = false
): OptionalKind<ParameterDeclarationStructure> {
  return {
    name: "callback",
    type: "coreHttp.ServiceCallback<any>", // TODO get the real type for callback
    hasQuestionToken: isOptional
  };
}

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
    namedImports: [className],
    moduleSpecifier: `../${sourceFileName}`
  });
}
