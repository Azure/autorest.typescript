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
  srcPath: string,
  subfolder: string
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
  if (subfolder && subfolder !== "") {
    clientClass.addProperty({
      name: "_client",
      type: `Client.${modularClientName}Context`,
      scope: Scope.Private
    });
  } else {
    clientClass.addProperty({
      name: "_client",
      type: `${modularClientName}Context`,
      scope: Scope.Private
    });
  }

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
  buildClientOperationGroups(client, clientClass, subfolder);
  importAllModels(clientFile, srcPath, subfolder);
  clientFile.fixUnusedIdentifiers();
}

function importAllModels(
  clientFile: SourceFile,
  srcPath: string,
  subfolder: string
) {
  const project = clientFile.getProject();
  let apiModels;
  if (subfolder && subfolder !== "") {
    apiModels = project.getSourceFile(
      `${srcPath}/src/api/${subfolder}/index.ts`
    );
  } else {
    apiModels = project.getSourceFile(`${srcPath}/src/api/index.ts`);
  }

  if (!apiModels) {
    return;
  }

  const exported = [...apiModels.getExportedDeclarations().keys()];

  if (subfolder && subfolder !== "") {
    clientFile.addImportDeclaration({
      moduleSpecifier: `./api/${subfolder}/index.js`,
      namedImports: exported
    });
  } else {
    clientFile.addImportDeclaration({
      moduleSpecifier: `./api/index.js`,
      namedImports: exported
    });
  }
}

function importCredential(clientSourceFile: SourceFile): void {
  clientSourceFile.addImportDeclaration({
    moduleSpecifier: "@azure/core-auth",
    namedImports: ["TokenCredential", "KeyCredential"]
  });
}

function buildClientOperationGroups(
  client: Client,
  clientClass: ClassDeclaration,
  subfolder: string
) {
  for (const operationGroup of client.operationGroups) {
    const operationGroupName = toCamelCase(operationGroup.propertyName);
    let clientType = "Client";
    if (subfolder && subfolder !== "") {
      clientType = `Client.${clientClass.getName()}`;
    }
    const operationDeclarations: OptionalKind<FunctionDeclarationStructure>[] =
      operationGroup.operations.map((operation) =>
        getOperationFunction(operation, clientType)
      );

    if (operationGroupName && operationGroupName !== "") {
      clientClass.addProperty({
        name: operationGroupName,
        initializer: `
      {
        ${operationDeclarations.map((d) => {
          return `${d.name}: (${d.parameters
            ?.filter((p) => p.name !== "context")
            .map((p) => p.name + ": " + p.type)
            .join(",")}): ${d.returnType} => {return ${d.name}(${[
            "this._client",
            ...[d.parameters?.map((p) => p.name).filter((p) => p !== "context")]
          ].join(",")})}`;
        })}
      }
      `
      });
    } else {
      clientClass.addMethods(
        operationDeclarations.map((d) => {
          const method: MethodDeclarationStructure = {
            docs: d.docs,
            name: d.name ?? "FIXME",
            kind: StructureKind.Method,
            returnType: d.returnType,
            parameters: d.parameters?.filter((p) => p.name !== "context"),
            statements: `return ${d.name}(${[
              "this._client",
              ...[
                d.parameters?.map((p) => p.name).filter((p) => p !== "context")
              ]
            ].join(",")})`
          };

          return method;
        })
      );
    }
  }
}
