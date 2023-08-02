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
import { toCamelCase } from "../utils/casingUtils.js";
import { getClientParameters } from "./helpers/clientHelpers.js";
import { getClientName } from "./helpers/namingHelpers.js";
import { getOperationFunction } from "./helpers/operationHelpers.js";
import { Client } from "./modularCodeModel.js";
import { isRLCMultiEndpoint } from "../utils/clientUtils.js";
import { SdkContext } from "@azure-tools/typespec-client-generator-core";
import { getDocsFromDescription } from "./helpers/docsHelpers.js";

export function buildClassicalClient(
  dpgContext: SdkContext,
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
    `${srcPath}/src/${
      subfolder !== "" ? subfolder + "/" : ""
    }${classicalClientname}.ts`
  );

  clientFile.addExportDeclaration({
    namedExports: [`${classicalClientname}Options`],
    moduleSpecifier: `./api/${modularClientName}Context.js`
  });

  const clientClass = clientFile.addClass({
    isExported: true,
    name: `${classicalClientname}`
  });

  // Add the private client member. This will be the client context from /api
  if (isRLCMultiEndpoint(dpgContext)) {
    clientClass.addProperty({
      name: "_client",
      type: `Client.${client.rlcClientName}`,
      scope: Scope.Private
    });
  } else {
    clientClass.addProperty({
      name: "_client",
      type: `${client.rlcClientName}`,
      scope: Scope.Private
    });
  }

  // TODO: We may need to generate constructor overloads at some point. Here we'd do that.
  const constructor = clientClass.addConstructor({
    docs: getDocsFromDescription(description),
    parameters: params
  });
  constructor.addStatements([
    `this._client = create${modularClientName}(${(params ?? [])
      .map((p) => p.name)
      .join(",")})`
  ]);
  importCredential(clientFile);
  importAllModels(clientFile, srcPath, subfolder);
  buildClientOperationGroups(client, clientClass, subfolder);
  importAllApis(clientFile, srcPath, subfolder);
  clientFile.fixMissingImports();
  clientFile.fixUnusedIdentifiers();
}

function importAllApis(
  clientFile: SourceFile,
  srcPath: string,
  subfolder: string
) {
  const project = clientFile.getProject();
  const apiModels = project.getSourceFile(
    `${srcPath}/src/${subfolder !== "" ? subfolder + "/" : ""}api/index.ts`
  );

  if (!apiModels) {
    return;
  }

  const exported = [...apiModels.getExportedDeclarations().keys()];

  clientFile.addImportDeclaration({
    moduleSpecifier: `./api/index.js`,
    namedImports: exported
  });
}

function importAllModels(
  clientFile: SourceFile,
  srcPath: string,
  subfolder: string
) {
  const project = clientFile.getProject();
  const apiModels = project.getSourceFile(
    `${srcPath}/src/${subfolder !== "" ? subfolder + "/" : ""}models/models.ts`
  );

  if (!apiModels) {
    return;
  }

  const exported = [...apiModels.getExportedDeclarations().keys()];

  clientFile.addImportDeclaration({
    moduleSpecifier: `./models/models.js`,
    namedImports: exported
  });

  const apiModelsOptions = project.getSourceFile(
    `${srcPath}/src/${subfolder !== "" ? subfolder + "/" : ""}models/options.ts`
  );

  if (!apiModelsOptions) {
    return;
  }

  const exportedOptions = [
    ...apiModelsOptions.getExportedDeclarations().keys()
  ];

  clientFile.addImportDeclaration({
    moduleSpecifier: `./models/options.js`,
    namedImports: exportedOptions
  });
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
