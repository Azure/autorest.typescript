import {
  ClassDeclaration,
  MethodDeclarationStructure,
  Scope,
  SourceFile,
  StructureKind
} from "ts-morph";
import {
  getClientParameters,
  importCredential
} from "./helpers/clientHelpers.js";
import {
  getClassicalLayerPrefix,
  getClientName
} from "./helpers/namingHelpers.js";
import { Client, ModularCodeModel } from "./modularCodeModel.js";
import { isRLCMultiEndpoint } from "../utils/clientUtils.js";
import { getDocsFromDescription } from "./helpers/docsHelpers.js";
import { SdkContext } from "../utils/interfaces.js";
import { Imports as RuntimeImports } from "@azure-tools/rlc-common";
import { NameType, normalizeName } from "@azure-tools/rlc-common";
import { getOperationFunction } from "./helpers/operationHelpers.js";
import { getImportSpecifier } from "@azure-tools/rlc-common";

export function buildClassicalClient(
  dpgContext: SdkContext,
  codeModel: ModularCodeModel,
  client: Client
) {
  const { description } = client;
  const modularClientName = getClientName(client);
  const classicalClientname = `${getClientName(client)}Client`;
  const params = getClientParameters(client);
  const srcPath = codeModel.modularOptions.sourceRoot;
  const subfolder = client.subfolder ?? "";

  const clientFile = codeModel.project.createSourceFile(
    `${srcPath}/${
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
    parameters: params
  });
  constructor.addStatements([
    `this._client = create${modularClientName}(${(params ?? [])
      .map((p) => p.name)
      .join(",")})`
  ]);
  constructor.addStatements(`this.pipeline = this._client.pipeline`);
  importCredential(codeModel.runtimeImports, clientFile);
  importPipeline(codeModel.runtimeImports, clientFile);
  importAllModels(clientFile, srcPath, subfolder);
  buildClientOperationGroups(clientFile, client, clientClass);
  importAllApis(clientFile, srcPath, subfolder);
  clientFile.fixMissingImports();
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

  const exported = [...apiModels.getExportedDeclarations().keys()];

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
    )}`;
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
          )}Operations(this._client)`
        );
    }
  }
}
