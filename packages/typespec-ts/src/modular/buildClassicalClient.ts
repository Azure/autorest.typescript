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

export function buildClassicalClient(
  _client: Client,
  dpgContext: SdkContext,
  codeModel: ModularCodeModel
) {
  const { description, tcgcClient: client } = _client;
  const dependencies = useDependencies();
  const modularClientName = getClientName(client);
  const classicalClientName = `${getClassicalClientName(client)}`;
  const classicalParams = getClientParametersDeclaration(_client, dpgContext, {
    requiredOnly: true
  });
  const contextParams = getClientParametersDeclaration(_client, dpgContext, {
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
    `this._client = create${modularClientName}(${paramNames.join(",")});`
  ]);
  constructor.addStatements(`this.pipeline = this._client.pipeline;`);

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
  for (const operationGroup of client.operationGroups) {
    const groupName = normalizeName(
      operationGroup.namespaceHierarchies[0] ?? operationGroup.propertyName,
      NameType.Property
    );
    // TODO: remove this logic once client-level parameter design is finalized
    // https://github.com/Azure/autorest.typescript/issues/2618
    const hasSubscriptionIdPromoted = shouldPromoteSubscriptionId(
      dpgContext,
      operationGroup
    );
    if (groupName === "") {
      operationGroup.operations.forEach((op) => {
        const declarations = getOperationFunction(dpgContext, op, clientType);
        const method: MethodDeclarationStructure = {
          docs: declarations.docs,
          name: declarations.propertyName ?? declarations.name ?? "FIXME",
          kind: StructureKind.Method,
          returnType: declarations.returnType,
          parameters: declarations.parameters?.filter(
            (p) => p.name !== "context"
          ),
          statements: `return ${declarations.name}(${[
            "this._client",
            ...[
              declarations.parameters
                ?.map((p) => p.name)
                .filter((p) => p !== "context")
            ]
          ].join(",")})`
        };
        clientClass.addMethod(method);
      });
      continue;
    }
    const operationName = `get${getClassicalLayerPrefix(
      operationGroup,
      NameType.Interface,
      "",
      0
    )}Operations`;
    const propertyType = `${getClassicalLayerPrefix(
      operationGroup,
      NameType.Interface,
      "",
      0
    )}Operations`;
    const existProperty = clientClass.getProperties().filter((p) => {
      return p.getName() === groupName;
    });
    if (!existProperty || existProperty.length === 0) {
      clientFile.addImportDeclaration({
        namedImports: [operationName, propertyType],
        moduleSpecifier: `./classic/${getClassicalLayerPrefix(
          operationGroup,
          NameType.File,
          "/",
          0
        )}/index.js`
      });
      clientClass.addProperty({
        name: groupName,
        type: propertyType,
        scope: Scope.Public,
        isReadonly: true,
        docs: ["The operation groups for " + operationGroup.propertyName]
      });
      clientClass
        .getConstructors()[0]
        ?.addStatements(
          `this.${groupName} = get${getClassicalLayerPrefix(
            operationGroup,
            NameType.Interface,
            "",
            0
          )}Operations(this._client${
            hasSubscriptionIdPromoted ? ", subscriptionId" : ""
          })`
        );
    }
  }
}
