import {
  ClassDeclaration,
  MethodDeclarationStructure,
  Scope,
  SourceFile,
  StructureKind
} from "ts-morph";
import { Client, ModularCodeModel } from "./modularCodeModel.js";
import { NameType, normalizeName } from "@azure-tools/rlc-common";
import {
  buildUserAgentOptions,
  getClientParametersDeclaration
} from "./helpers/clientHelpers.js";
import {
  getClassicalClientName,
  getClassicalLayerPrefix,
  getClientName
} from "./helpers/namingHelpers.js";

import { SdkContext } from "../utils/interfaces.js";
import { getDocsFromDescription } from "./helpers/docsHelpers.js";
import { getOperationFunction } from "./helpers/operationHelpers.js";
import { isRLCMultiEndpoint } from "../utils/clientUtils.js";
import { resolveReference } from "../framework/reference.js";
import { shouldPromoteSubscriptionId } from "./helpers/classicalOperationHelpers.js";
import { useDependencies } from "../framework/hooks/useDependencies.js";
import {
  SdkClientType,
  SdkHttpOperation,
  SdkServiceMethod,
  SdkServiceOperation
} from "@azure-tools/typespec-client-generator-core";

export function buildClassicalClient(
  _client: Client,
  dpgContext: SdkContext,
  codeModel: ModularCodeModel
) {
  const { description, tcgcClient: client } = _client;
  const dependencies = useDependencies();
  const modularClientName = getClientName(client);
  const classicalClientName = `${getClassicalClientName(client)}`;
  const classicalParams = getClientParametersDeclaration(client, dpgContext, {
    requiredOnly: true
  });
  const contextParams = getClientParametersDeclaration(client, dpgContext, {
    onClientOnly: true,
    requiredOnly: true
  });
  const srcPath = codeModel.modularOptions.sourceRoot;
  const subfolder = _client.subfolder ?? "";

  const clientFile = codeModel.project.createSourceFile(
    `${srcPath}/${subfolder !== "" ? subfolder + "/" : ""}${normalizeName(
      classicalClientName,
      NameType.File
    )}.ts`
  );

  clientFile.addExportDeclaration({
    namedExports: [`${classicalClientName}OptionalParams`],
    moduleSpecifier: `./api/${normalizeName(
      modularClientName,
      NameType.File
    )}Context.js`
  });

  const clientClass = clientFile.addClass({
    isExported: true,
    name: `${classicalClientName}`
  });

  // Add the private client member. This will be the client context from /api
  if (isRLCMultiEndpoint(dpgContext)) {
    clientClass.addProperty({
      name: "_client",
      type: `Client.${_client.rlcClientName}`,
      scope: Scope.Private
    });
  } else {
    clientClass.addProperty({
      name: "_client",
      type: `${_client.rlcClientName}`,
      scope: Scope.Private
    });
  }
  // Add the pipeline member. This will be the pipeline from /api
  clientClass.addProperty({
    name: "pipeline",
    type: resolveReference(dependencies.Pipeline),
    scope: Scope.Public,
    isReadonly: true,
    docs: ["The pipeline used by this client to make requests"]
  });

  // TODO: We may need to generate constructor overloads at some point. Here we'd do that.
  const constructor = clientClass.addConstructor({
    docs: getDocsFromDescription(description),
    parameters: classicalParams
  });

  const paramNames = (contextParams ?? [])
    .map((p) => p.name)
    .map((x) => {
      if (x === "options") {
        return `{...options, userAgentOptions: ${buildUserAgentOptions(
          constructor,
          codeModel,
          "azsdk-js-client"
        )}}`;
      } else {
        return x;
      }
    });

  constructor.addStatements([
    `this._client = create${modularClientName}(${paramNames.join(",")})`
  ]);
  constructor.addStatements(`this.pipeline = this._client.pipeline`);

  buildClientOperationGroups(clientFile, _client, dpgContext, clientClass);
  importAllApis(clientFile, srcPath, subfolder);
  clientFile.fixUnusedIdentifiers();
  return clientFile;
}

function importAllApis(
  clientFile: SourceFile,
  srcPath: string,
  subfolder: string
) {
  const project = clientFile.getProject();
  const apiModels = project.getSourceFile(
    `${srcPath}/${subfolder !== "" ? subfolder + "/" : ""}api/index.ts`
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

function generateMethod(
  context: SdkContext,
  clientType: string,
  method: SdkServiceMethod<SdkServiceOperation>
) {
  const declarations = getOperationFunction(context, method, clientType);
  const result: MethodDeclarationStructure = {
    docs: declarations.docs,
    name: declarations.propertyName ?? declarations.name ?? "FIXME",
    kind: StructureKind.Method,
    returnType: declarations.returnType,
    parameters: declarations.parameters?.filter((p) => p.name !== "context"),
    statements: `return ${declarations.name}(${[
      "this._client",
      ...[
        declarations.parameters
          ?.map((p) => p.name)
          .filter((p) => p !== "context")
      ]
    ].join(",")})`
  };
  return result;
}
function buildClientOperationGroups(
  clientFile: SourceFile,
  client: Client,
  dpgContext: SdkContext,
  clientClass: ClassDeclaration
) {
  let clientType = "Client";
  const subfolder = client.subfolder ?? "";
  if (subfolder && subfolder !== "") {
    clientType = `Client.${clientClass.getName()}`;
  }
  const tcgcClient = client.tcgcClient;
  for (const operationOrGroup of tcgcClient.methods) {
    if (operationOrGroup.kind !== "clientaccessor") {
      const method = generateMethod(dpgContext, clientType, operationOrGroup);
      clientClass.addMethod(method);
      continue;
    } else {
      const groupName = operationOrGroup.name;
      const operationName = `get${normalizeName(
        groupName,
        NameType.OperationGroup
      )}Operations`;
      const propertyType = `${normalizeName(
        groupName,
        NameType.OperationGroup
      )}Operations`;
      const existProperty = clientClass.getProperties().filter((p) => {
        return p.getName() === groupName;
      });
      if (!existProperty || existProperty.length === 0) {
        clientFile.addImportDeclaration({
          namedImports: [operationName, propertyType],
          moduleSpecifier: `./classic/${normalizeName(
            groupName,
            NameType.File
          )}/index.js`
        });
        clientClass.addProperty({
          name: groupName,
          type: propertyType,
          scope: Scope.Public,
          isReadonly: true,
          docs: ["The operation groups for " + groupName]
        });
        clientClass
          .getConstructors()[0]
          ?.addStatements(
            `this.${groupName} = get${normalizeName(
              groupName,
              NameType.OperationGroup
            )}Operations(this._client)`
          );
      }
    }
  }
}
