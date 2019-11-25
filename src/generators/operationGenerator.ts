import { CodeModel, OperationGroup, Language } from "@azure-tools/codemodel";
import { Project, SourceFile, VariableDeclarationKind, Scope } from "ts-morph";
import { getLanguageMetadata } from "../transforms";
import { normalizeName, NameType } from "../utils/nameUtils";
import { ClientDetails } from "../models/clientDetails";
import { transformOperationSpec } from "../operationTransforms";
import { OperationSpec } from "@azure/core-http";

export function generateOperations(
  codeModel: CodeModel,
  clientDetails: ClientDetails,
  project: Project
) {
  codeModel.operationGroups.forEach(operationGroup =>
    generateOperation(operationGroup, clientDetails, project)
  );
}

function generateOperation(
  operationGroup: OperationGroup,
  clientDetails: ClientDetails,
  project: Project
) {
  const namingMetadata = getLanguageMetadata(operationGroup.language);
  const name = normalizeName(namingMetadata.name, NameType.File);

  const operationGroupFile = project.createSourceFile(
    `src/operations/${name}.ts`,
    undefined,
    { overwrite: true }
  );

  addImports(operationGroupFile, clientDetails);
  addClass(operationGroupFile, namingMetadata, clientDetails);
  addOperationSchemas(operationGroup, operationGroupFile);
}

function addOperationSchemas(operationGroup: OperationGroup, file: SourceFile) {
  file.addVariableStatement({
    declarationKind: VariableDeclarationKind.Const,
    declarations: [
      {
        name: "serializer",
        initializer: "new coreHttp.Serializer(Mappers);"
      }
    ]
  });

  operationGroup.operations.forEach(operation => {
    const metadata = getLanguageMetadata(operation.language);
    const operationName = normalizeName(metadata.name, NameType.Property);
    const operationSpec = transformOperationSpec(operation);
    file.addVariableStatement({
      declarationKind: VariableDeclarationKind.Const,
      declarations: [
        {
          name: operationName,
          type: "coreHttp.OperationSpec",
          initializer: buildSpec(operationSpec)
        }
      ]
    });
  });
}

function buildSpec(spec: OperationSpec) {
  const responses = buildResponses(spec);
  return `{
        path: "${spec.path}",
        httpMethod: "${spec.httpMethod}",
        responses: {${responses.join(", ")}},
        serializer
    }`;
}

function buildResponses({ responses }: OperationSpec) {
  const x = "hola";
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
  namingMetadata: Language,
  clientDetails: ClientDetails
) {
  const className = normalizeName(namingMetadata.name, NameType.Class);
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
