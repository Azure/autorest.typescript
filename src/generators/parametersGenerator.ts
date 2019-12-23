import { ParameterLocation } from "@azure-tools/codemodel";
import { Project, VariableDeclarationKind } from "ts-morph";
import { ClientDetails } from "../models/clientDetails";
import { ParameterDetails } from "../models/parameterDetails";

export function generateParameters(
  clientDetails: ClientDetails,
  project: Project
): void {
  const parametersFile = project.createSourceFile(
    "src/models/parameters.ts",
    undefined,
    { overwrite: true }
  );

  parametersFile.addImportDeclaration({
    namespaceImport: "coreHttp",
    moduleSpecifier: "@azure/core-http"
  });

  clientDetails.parameters.forEach(param => {
    parametersFile.addVariableStatement({
      isExported: true,
      declarations: [buildParameterInitializer(param)],
      declarationKind: VariableDeclarationKind.Const,
      leadingTrivia: writer => writer.blankLine()
    });
  });
}

function buildParameterInitializer({
  parameterPath,
  nameRef,
  mapper,
  location
}: ParameterDetails) {
  const type = getParameterType(location);
  const initializer = JSON.stringify({
    parameterPath,
    mapper
  });
  return {
    name: nameRef,
    type,
    initializer
  };
}

function getParameterType(location: ParameterLocation) {
  switch (location) {
    case ParameterLocation.Path:
      return "coreHttp.OperationURLParameter";
    case ParameterLocation.Query:
      return "coreHttp.OperationQueryParameter";
    default:
      return "coreHttp.OperationParameter";
  }
}
