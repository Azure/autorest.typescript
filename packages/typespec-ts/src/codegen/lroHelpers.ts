// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NameType, normalizeName } from "@azure-tools/rlc-common";
import { Project, SourceFile } from "ts-morph";
import type { TSClient, TSGenerationSettings } from "../codemodel/index.js";
import { useDependencies } from "../framework/hooks/useDependencies.js";
import { resolveReference } from "../framework/reference.js";
import { AzurePollingDependencies } from "../modular/external-dependencies.js";
import { PollingHelpers } from "../modular/static-helpers-metadata.js";

export function emitLroHelpers(
  project: Project,
  client: TSClient,
  settings: TSGenerationSettings
): SourceFile | undefined {
  if (!client.lroConfig) {
    return undefined;
  }

  const dependencies = useDependencies();
  const subfolder = client.path.join("/");
  const file = project.createSourceFile(
    `${settings.sourceRoot}/${
      subfolder && subfolder !== "" ? subfolder + "/" : ""
    }restorePollerHelpers.ts`,
    "",
    { overwrite: true }
  );

  file.addImportDeclaration({
    namedImports: [client.lroConfig.clientName],
    moduleSpecifier: `./${normalizeName(client.name, NameType.File)}.js`
  });

  const groupedImports = new Map<
    string,
    Array<{ exportName: string; localName: string }>
  >();
  for (const deserializer of [...client.lroConfig.deserializers].sort(
    (left, right) => left.path.localeCompare(right.path)
  )) {
    const imports = groupedImports.get(deserializer.moduleSpecifier) ?? [];
    imports.push({
      exportName: deserializer.exportName,
      localName: deserializer.localName
    });
    groupedImports.set(deserializer.moduleSpecifier, imports);
  }

  for (const moduleSpecifier of [...groupedImports.keys()].sort((left, right) =>
    left.localeCompare(right)
  )) {
    const namedImports = groupedImports
      .get(moduleSpecifier)!
      .map((entry) =>
        entry.exportName === entry.localName
          ? entry.exportName
          : `${entry.exportName} as ${entry.localName}`
      );
    file.addImportDeclaration({
      namedImports,
      moduleSpecifier
    });
  }

  const pathUncheckedReference = resolveReference(
    dependencies.PathUncheckedResponse
  );
  const operationOptionsReference = resolveReference(
    dependencies.OperationOptions
  );
  const abortSignalLikeReference = resolveReference(
    dependencies.AbortSignalLike
  );
  const pollerLikeReference = resolveReference(
    AzurePollingDependencies.PollerLike
  );
  const operationStateReference = resolveReference(
    AzurePollingDependencies.OperationState
  );
  const deserializeStateReference = resolveReference(
    AzurePollingDependencies.DeserializeState
  );
  const resourceLocationConfigReference = resolveReference(
    AzurePollingDependencies.ResourceLocationConfig
  );
  const getLongRunningPollerReference = resolveReference(
    PollingHelpers.GetLongRunningPoller
  );
  const deserializeMapEntries = client.lroConfig.deserializers
    .map(
      (detail) =>
        `"${detail.path}": { deserializer: ${detail.localName}, expectedStatuses: ${detail.expectedStatusesExpression} }`
    )
    .join(",\n");

  file.addStatements(`
    export interface RestorePollerOptions<
      TResult,
      TResponse extends ${pathUncheckedReference} = ${pathUncheckedReference}
    > extends ${operationOptionsReference} {
      /** Delay to wait until next poll, in milliseconds. */
      updateIntervalInMs?: number;
      /**
       * The signal which can be used to abort requests.
      */
      abortSignal?: ${abortSignalLikeReference};
      /** Deserialization function for raw response body */
      processResponseBody?: (result: TResponse) => Promise<TResult>;
    }

    /**
     * Creates a poller from the serialized state of another poller. This can be
     * useful when you want to create pollers on a different host or a poller
     * needs to be constructed after the original one is not in scope.
     */
    export function restorePoller<TResponse extends ${pathUncheckedReference}, TResult>(
      client: ${client.lroConfig.clientName},
      serializedState: string,
      sourceOperation: (
        ...args: any[]
      ) => ${pollerLikeReference}<${operationStateReference}<TResult>, TResult>,
      options?: RestorePollerOptions<TResult>
    ): ${pollerLikeReference}<${operationStateReference}<TResult>, TResult> {
      const pollerConfig = ${deserializeStateReference}(serializedState).config;
      const { initialRequestUrl, requestMethod, metadata } = pollerConfig;
      if (!initialRequestUrl || !requestMethod) {
        throw new Error(
          \`Invalid serialized state: \${serializedState} for sourceOperation \${sourceOperation?.name}\`
        );
      }
      const resourceLocationConfig = metadata?.["resourceLocationConfig"] as
        | ${resourceLocationConfigReference}
        | undefined;
      const { deserializer, expectedStatuses = [] } =
        getDeserializationHelper(initialRequestUrl, requestMethod) ?? {};
      const deserializeHelper = options?.processResponseBody ?? deserializer;
      if (!deserializeHelper) {
        throw new Error(
          \`Please ensure the operation is in this client! We can't find its deserializeHelper for \${sourceOperation?.name}.\`
        );
      }
      const apiVersion = getApiVersionFromUrl(initialRequestUrl);
      return ${getLongRunningPollerReference}(
        (client as any)["_client"] ?? client,
        deserializeHelper as (result: TResponse) => Promise<TResult>,
        expectedStatuses,
        {
          updateIntervalInMs: options?.updateIntervalInMs,
          abortSignal: options?.abortSignal,
          resourceLocationConfig,
          restoreFrom: serializedState,
          initialRequestUrl,
          apiVersion,
        }
      );
    }

    interface DeserializationHelper {
      deserializer: (result: ${pathUncheckedReference}) => Promise<any>;
      expectedStatuses: string[];
    }

    const deserializeMap: Record<string, DeserializationHelper> = {
      ${deserializeMapEntries}
    };

    function getDeserializationHelper(
      urlStr: string,
      method: string
    ): DeserializationHelper | undefined {
      const path = new URL(urlStr).pathname;
      const pathParts = path.split("/");

      let matchedLen = -1,
        matchedValue: DeserializationHelper | undefined;

      for (const [key, value] of Object.entries(deserializeMap)) {
        if (!key.startsWith(method)) {
          continue;
        }
        const candidatePath = getPathFromMapKey(key);
        const candidateParts = candidatePath.split("/");

        let found = true;
        for (
          let i = candidateParts.length - 1, j = pathParts.length - 1;
          i >= 1 && j >= 1;
          i--, j--
        ) {
          if (
            candidateParts[i]?.startsWith("{") &&
            candidateParts[i]?.indexOf("}") !== -1
          ) {
            const start = candidateParts[i]!.indexOf("}") + 1,
              end = candidateParts[i]?.length;
            const isMatched = new RegExp(
              \`\${candidateParts[i]?.slice(start, end)}\`
            ).test(pathParts[j] || "");

            if (!isMatched) {
              found = false;
              break;
            }
            continue;
          }

          if (candidateParts[i] !== pathParts[j]) {
            found = false;
            break;
          }
        }

        if (found && candidatePath.length > matchedLen) {
          matchedLen = candidatePath.length;
          matchedValue = value;
        }
      }

      return matchedValue;
    }

    function getPathFromMapKey(mapKey: string): string {
      const pathStart = mapKey.indexOf("/");
      return mapKey.slice(pathStart);
    }

    function getApiVersionFromUrl(urlStr: string): string | undefined {
      const url = new URL(urlStr);
      return url.searchParams.get("api-version") ?? undefined;
    }
  `);

  file.fixMissingImports({}, { importModuleSpecifierEnding: "js" });
  file.fixUnusedIdentifiers();
  return file;
}
