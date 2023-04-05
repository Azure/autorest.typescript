import {
  ClassDeclaration,
  FunctionDeclarationStructure,
  MethodDeclarationStructure,
  OptionalKind,
  Project,
  Scope,
  SourceFile,
  StructureKind
} from "ts-morph";
import { toCamelCase } from "../casingUtils.js";
import { getClientParameters } from "./helpers/clientHelpers.js";
import { getClientName } from "./helpers/namingHelpers.js";
import { getOperationFunction } from "./helpers/operationHelpers.js";
import { Client } from "./modularCodeModel.js";

export function buildClassicalClient(
  client: Client,
  project: Project,
  srcPath: string
) {
  const { description } = client;
  const modularClientName = getClientName(client);
  const classicalClientname = `${getClientName(client)}Client`;
  const params = getClientParameters(client);

  const clientFile = project.createSourceFile(
    `${srcPath}/src/${classicalClientname}.ts`
  );
  const clientClass = clientFile.addClass({
    isExported: true,
    name: `${classicalClientname}`
  });

  // Add the private client member. This will be the client context from /api
  clientClass.addProperty({
    name: "_client",
    type: `${modularClientName}Context`,
    scope: Scope.Private
  });

  // TODO: We may need to generate constructor overloads at some point. Here we'd do that.
  const constructor = clientClass.addConstructor({
    docs: [description],
    parameters: params
  });
  constructor.addStatements([
    `this._client = create${modularClientName}(${(params ?? [])
      .map((p) => p.name)
      .join(",")})`
  ]);
  importCredential(clientFile);
  buildClientOperationGroups(client, clientClass);
  importAllModels(clientFile, srcPath);
  clientFile.fixUnusedIdentifiers();
}

function importAllModels(clientFile: SourceFile, srcPath: string) {
  const project = clientFile.getProject();
  const apiModels = project.getSourceFile(`${srcPath}/src/api/index.ts`);

  if (!apiModels) {
    return;
  }

  const exported = [...apiModels.getExportedDeclarations().keys()];

  clientFile.addImportDeclaration({
    moduleSpecifier: `./api/index.js`,
    namedImports: exported
  });
}

function importCredential(clientSourceFile: SourceFile): void {
  clientSourceFile.addImportDeclaration({
    moduleSpecifier: "@azure/core-auth",
    namedImports: ["TokenCredential", "AzureKeyCredential"]
  });
}

function buildClientOperationGroups(
  client: Client,
  clientClass: ClassDeclaration
) {
  for (const operationGroup of client.operationGroups) {
    const operationGroupName = toCamelCase(operationGroup.propertyName);
    const operationDeclarations: OptionalKind<FunctionDeclarationStructure>[] =
      operationGroup.operations.map((operation) =>
        getOperationFunction(operation)
      );

    const tempfile = new Project().createSourceFile("temp.ts");

    const declarations = tempfile.addFunctions(operationDeclarations);

    if (operationGroupName) {
      clientClass.addProperty({
        name: operationGroupName,
        initializer: `
      {
        ${declarations.map((d) => {
          return `${d.getName()}: (${d
            .getParameters()
            .filter((p) => p.getName() !== "context")
            .map((p) => p.getText())
            .join(",")}): ${d
            .getReturnType()
            .getText()} => {return ${d.getName()}(${[
            "this._client",
            ...d.getParameters().map((p) => p.getName())
          ]
            .filter((p) => p !== "context")
            .join(",")})}`;
        })}
      }
      `
      });
    } else {
      clientClass.addMethods(
        declarations.map((d) => {
          const method: MethodDeclarationStructure = {
            name: d.getName() ?? "FIXME",
            kind: StructureKind.Method,
            returnType: d.getReturnType().getText(),
            parameters: d
              .getParameters()
              .filter((p) => p.getName() !== "context")
              .map((d) => d.getStructure()),
            statements: `return ${d.getName()}(${[
              "this._client",
              ...d.getParameters().map((p) => p.getName())
            ]
              .filter((p) => p !== "context")
              .join(",")})`
          };

          return method;
        })
      );
    }
  }
  // Import ClientOptions
  clientClass.getSourceFile().addImportDeclaration({
    moduleSpecifier: `./common/interfaces.js`,
    namedImports: ["ClientOptions"]
  });
}
