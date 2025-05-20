import {
  ClassDeclaration,
  MethodDeclarationStructure,
  Scope,
  SourceFile,
  StructureKind
} from "ts-morph";
import { ModularEmitterOptions } from "./interfaces.js";
import { NameType, normalizeName } from "@azure-tools/rlc-common";
import {
  buildUserAgentOptions,
  getClientParametersDeclaration
} from "./helpers/clientHelpers.js";
import {
  getClassicalClientName,
  getClientName
} from "./helpers/namingHelpers.js";

import { SdkContext } from "../utils/interfaces.js";
import { getDocsFromDescription } from "./helpers/docsHelpers.js";
import { getOperationFunction } from "./helpers/operationHelpers.js";
import {
  getModularClientOptions,
  isRLCMultiEndpoint
} from "../utils/clientUtils.js";
import { resolveReference } from "../framework/reference.js";
import { useDependencies } from "../framework/hooks/useDependencies.js";
import {
  InitializedByFlags,
  SdkClientType,
  SdkServiceMethod,
  SdkServiceOperation
} from "@azure-tools/typespec-client-generator-core";
import { getMethodHierarchiesMap } from "../utils/operationUtil.js";
import { useContext } from "../contextManager.js";
import { refkey } from "../framework/refkey.js";

export function buildClassicalClient(
  dpgContext: SdkContext,
  clientMap: [string[], SdkClientType<SdkServiceOperation>],
  emitterOptions: ModularEmitterOptions
) {
  const project = useContext("outputProject");
  const [_hierarchy, client] = clientMap;
  const dependencies = useDependencies();
  const modularClientName = getClientName(client);
  const classicalClientName = `${getClassicalClientName(client)}`;
  const classicalParams = getClientParametersDeclaration(client, dpgContext, {
    requiredOnly: true
  });
  const contextParams = getClientParametersDeclaration(client, dpgContext, {
    onClientOnly: false,
    requiredOnly: true
  });
  const srcPath = emitterOptions.modularOptions.sourceRoot;
  const { subfolder, rlcClientName } = getModularClientOptions(clientMap);

  const clientFile = project.createSourceFile(
    `${srcPath}/${subfolder && subfolder !== "" ? subfolder + "/" : ""}${normalizeName(
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
      type: `Client.${rlcClientName}`,
      scope: Scope.Private
    });
  } else {
    clientClass.addProperty({
      name: "_client",
      type: `${rlcClientName}`,
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

  const hasChildClient =
    client.children &&
    client.children.some((childClient) => {
      return (
        childClient.clientInitialization.initializedBy &
        InitializedByFlags.Parent
      );
    });
  if (hasChildClient) {
    clientClass.addProperty({
      name: "_clientParams",
      type: `{${classicalParams.map((p) => {
        return `${p.name}: ${p.type}`;
      })}}`,
      scope: Scope.Private,
      docs: ["The parent client parameters that are used in the constructors."]
    });
  }

  // TODO: We may need to generate constructor overloads at some point. Here we'd do that.
  const constructor = clientClass.addConstructor({
    docs: getDocsFromDescription(client.doc),
    parameters: classicalParams
  });

  const paramNames = (contextParams ?? [])
    .map((p) => p.name)
    .map((x) => {
      if (x === "options") {
        return `{...options, userAgentOptions: ${buildUserAgentOptions(
          constructor,
          emitterOptions,
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

  if (hasChildClient && client.children) {
    constructor.addStatements(
      `this._clientParams = {${classicalParams.map((p) => p.name).join(",")}};`
    );
    for (const childClient of client.children) {
      const subfolder = normalizeName(
        childClient.name.replace("Client", ""),
        NameType.File
      );
      clientFile.addImportDeclaration({
        moduleSpecifier: `./${subfolder}/${normalizeName(childClient.name, NameType.File)}.js`,
        namedImports: [
          `${getClassicalClientName(childClient)}`,
          `${getClassicalClientName(childClient)}OptionalParams`
        ]
      });
    }
  }
  buildClientOperationGroups(clientMap, dpgContext, clientClass);
  if (client.children) {
    client.children
      .filter((childClient) => {
        return (
          childClient.clientInitialization.initializedBy &
          InitializedByFlags.Parent
        );
      })
      .forEach((childClient) => {
        addChildClient(dpgContext, clientClass, client, childClient);
      });
  }
  importAllApis(clientFile, srcPath, subfolder ?? "");
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
    `${srcPath}/${subfolder && subfolder !== "" ? subfolder + "/" : ""}api/index.ts`
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
  method: [string[], SdkServiceMethod<SdkServiceOperation>]
) {
  const declarations = getOperationFunction(context, method, clientType);
  const result: MethodDeclarationStructure = {
    docs: declarations.docs,
    name: declarations.propertyName ?? declarations.name ?? "FIXME",
    kind: StructureKind.Method,
    returnType: declarations.returnType,
    parameters: declarations.parameters?.filter((p) => p.name !== "context"),
    statements: `return ${resolveReference(refkey(method[1], "api"))}(${[
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
  clientMap: [string[], SdkClientType<SdkServiceOperation>],
  dpgContext: SdkContext,
  clientClass: ClassDeclaration
) {
  let clientType = "Client";
  const [_hierarchy, client] = clientMap;
  const { subfolder } = getModularClientOptions(clientMap);
  if (subfolder && subfolder !== "") {
    clientType = `Client.${clientClass.getName()}`;
  }
  const methodMap = getMethodHierarchiesMap(dpgContext, client);
  for (const [prefixKey, operations] of methodMap) {
    const prefixes = prefixKey.split("/");
    const layer = 0;
    if (prefixKey === "") {
      operations.forEach((op) => {
        const method = generateMethod(dpgContext, clientType, [prefixes, op]);
        clientClass.addMethod(method);
      });
    } else {
      // The `rawGroupName` is used to any places where we need normalized name twice so we need to keep the raw as PascalCase.
      const rawGroupName = normalizeName(prefixes[0] ?? "", NameType.Interface);
      const operationName = `_get${normalizeName(
        rawGroupName,
        NameType.OperationGroup
      )}Operations`;
      const propertyType = `${normalizeName(
        rawGroupName,
        NameType.OperationGroup
      )}Operations`;
      // The `groupName` is used to any places where we don't need normalized name again
      const groupName = normalizeName(rawGroupName, NameType.Property);
      const existProperty = clientClass.getProperties().filter((p) => {
        return p.getName() === normalizeName(groupName, NameType.Property);
      });
      if (!existProperty || existProperty.length === 0) {
        clientClass.addProperty({
          name: groupName,
          type: resolveReference(
            refkey(propertyType, layer, "classicOperations")
          ),
          scope: Scope.Public,
          isReadonly: true,
          docs: ["The operation groups for " + groupName]
        });
        clientClass
          .getConstructors()[0]
          ?.addStatements(
            `this.${groupName} = ${resolveReference(refkey(operationName, layer, "getClassicOperations"))}(this._client)`
          );
      }
    }
  }
}

function addChildClient(
  context: SdkContext,
  clientClass: ClassDeclaration,
  parentClient: SdkClientType<SdkServiceOperation>,
  client: SdkClientType<SdkServiceOperation>
) {
  const parentParams = getClientParametersDeclaration(parentClient, context, {
    requiredOnly: true
  });
  const clientParams = getClientParametersDeclaration(client, context, {
    requiredOnly: true
  });
  const diffParams = clientParams.filter((p) => {
    return !parentParams.some(
      (pp) => pp.name === p.name && pp.name !== "options"
    );
  });
  const name = getClassicalClientName(client);
  const getChildClientFunction = clientClass.addMethod({
    docs: getDocsFromDescription(client.doc),
    name: `get${name}`,
    returnType: `${getClassicalClientName(client)}`,
    parameters: diffParams
  });
  getChildClientFunction.addStatements(
    `return new ${getClassicalClientName(client)}(
      ${parentParams
      .filter((p) => !p.name.includes("options"))
      .map((p) => `this._clientParams.${p.name}`)
      .join(",")},
      ${diffParams
      .filter((p) => p.name !== "options")
      .map((p) => `${p.name}`)
      .join(
        ","
      )}${diffParams.filter((p) => p.name !== "options").length > 0 ? "," : ""}
      { ...this._clientParams.options, ...options }
    )`
  );
}
