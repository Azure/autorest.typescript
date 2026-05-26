import {
  Project,
  StructureKind,
  TypeAliasDeclarationStructure
} from "ts-morph";
import type {
  TSClient,
  TSGenerationSettings,
  TSMethod,
  TSResponseTypeAlias
} from "../codemodel/index.js";
import { addDeclaration } from "../framework/declaration.js";
import { resolveReference } from "../framework/reference.js";
import { PlatformTypeHelpers } from "../modular/static-helpers-metadata.js";
import { getModelsPath } from "../modular/emitModels.js";

export function emitResponseTypes(
  project: Project,
  clients: TSClient[],
  settings: TSGenerationSettings
): void {
  const responseTypes = getAllMethods(clients)
    .map((method) => method.responseTypeAlias)
    .filter((alias): alias is TSResponseTypeAlias => alias !== undefined);

  if (responseTypes.length === 0) {
    return;
  }

  const modelsFile =
    project.getSourceFile(getModelsPath(settings.sourceRoot)) ??
    project.createSourceFile(getModelsPath(settings.sourceRoot));

  for (const responseType of responseTypes) {
    addDeclaration(
      modelsFile,
      buildResponseTypeDeclaration(responseType),
      responseType.refKey
    );
  }
}

function getAllMethods(clients: TSClient[]): TSMethod[] {
  return clients.flatMap((client) => [
    ...client.methods,
    ...client.operationGroups.flatMap((group) => group.methods),
    ...getAllMethods(client.children)
  ]);
}

function buildResponseTypeDeclaration(
  responseType: TSResponseTypeAlias
): TypeAliasDeclarationStructure {
  const typeBody =
    responseType.kind === "binary"
      ? `{
      /**
       * BROWSER ONLY
       *
       * The response body as a browser Blob.
       * Always \`undefined\` in node.js.
       */
      blobBody?: Promise<Blob>;
      /**
       * NODEJS ONLY
       *
       * The response body as a node.js Readable stream.
       * Always \`undefined\` in the browser.
       */
      readableStreamBody?: ${resolveReference(PlatformTypeHelpers.NodeReadableStream)};
  }`
      : `{ body: ${responseType.bodyType ?? "never"} }`;

  return {
    kind: StructureKind.TypeAlias,
    name: responseType.name,
    type: typeBody,
    isExported: true,
    leadingTrivia: "\n"
  };
}
