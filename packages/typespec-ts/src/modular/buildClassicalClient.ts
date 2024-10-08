import {
  getImportSpecifier,
  Imports as RuntimeImports,
  NameType,
  normalizeName
} from "@azure-tools/rlc-common";
import {
  ClassDeclaration,
  MethodDeclarationStructure,
  Scope,
  SourceFile,
  StructureKind
} from "ts-morph";
import { isRLCMultiEndpoint } from "../utils/clientUtils.js";
import { SdkContext } from "../utils/interfaces.js";
import {
  buildUserAgentOptions,
  getClientParameters,
  importCredential
} from "./helpers/clientHelpers.js";
import { getDocsFromDescription } from "./helpers/docsHelpers.js";
import {
  getClassicalLayerPrefix,
  getClientName
} from "./helpers/namingHelpers.js";
import { getOperationFunction } from "./helpers/operationHelpers.js";
import { Client, ModularCodeModel } from "./modularCodeModel.js";
import { shouldPromoteSubscriptionId } from "./helpers/classicalOperationHelpers.js";

export function buildClassicalClient(
  client: Client,
  dpgContext: SdkContext,
  codeModel: ModularCodeModel
) {
  const { description } = client;
  const modularClientName = getClientName(client);
  const classicalClientName = `${getClientName(client)}Client`;
  const classicalParams = getClientParameters(client, dpgContext, true);
  const contextParams = getClientParameters(client, dpgContext, false);
  const srcPath = codeModel.modularOptions.sourceRoot;
  const subfolder = client.subfolder ?? "";

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

  // Add the pipeline member. This will be the pipeline from /api
  clientClass.addProperty({
    name: "pipeline",
    type: "Pipeline",
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
  importCredential(codeModel.runtimeImports, clientFile);
  importPipeline(codeModel.runtimeImports, clientFile);
  importAllModels(clientFile, srcPath, subfolder);
  buildClientOperationGroups(clientFile, client, dpgContext, clientClass);
  importAllApis(clientFile, srcPath, subfolder);
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

function importAllModels(
  clientFile: SourceFile,
  srcPath: string,
  subfolder: string
) {
  const project = clientFile.getProject();
  const apiModels = project.getSourceFile(
    `${srcPath}/${subfolder !== "" ? subfolder + "/" : ""}models/models.ts`
  );

  if (!apiModels) {
    return;
  }

  const exported = [...apiModels.getExportedDeclarations().keys()].filter(
    (e) => {
      return !e.startsWith("_");
    }
  );

  if (exported.length > 0) {
    clientFile.addImportDeclaration({
      moduleSpecifier: `./models/models.js`,
      namedImports: exported
    });
  }

  const apiModelsOptions = project.getSourceFile(
    `${srcPath}/${subfolder !== "" ? subfolder + "/" : ""}models/options.ts`
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

  const pagingTypes = project.getSourceFile(
    `${srcPath}/${subfolder !== "" ? subfolder + "/" : ""}models/pagingTypes.ts`
  );

  if (!pagingTypes) {
    return;
  }

  const exportedPaingTypes = [...pagingTypes.getExportedDeclarations().keys()];

  clientFile.addImportDeclaration({
    moduleSpecifier: `./models/pagingTypes.js`,
    namedImports: exportedPaingTypes
  });
}

function importPipeline(
  runtimeImports: RuntimeImports,
  clientSourceFile: SourceFile
): void {
  clientSourceFile.addImportDeclaration({
    moduleSpecifier: getImportSpecifier("restPipeline", runtimeImports),
    namedImports: ["Pipeline"]
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
        const declarations = getOperationFunction(op, clientType);
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
