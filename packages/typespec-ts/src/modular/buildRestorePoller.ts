import { SourceFile } from "ts-morph";
import { isLroOnlyOperation } from "./helpers/operationHelpers.js";
import { ModularEmitterOptions } from "./modularCodeModel.js";
import path from "path";
import { buildLroDeserDetailMap } from "./buildOperations.js";
import { getClientName } from "./helpers/namingHelpers.js";
import { NameType, normalizeName } from "@azure-tools/rlc-common";
import { resolveReference } from "../framework/reference.js";
import { AzurePollingDependencies } from "./external-dependencies.js";
import { PollingHelpers } from "./static-helpers-metadata.js";
import {
  SdkClientType,
  SdkServiceOperation
} from "@azure-tools/typespec-client-generator-core";
import { getMethodHierarchiesMap } from "../utils/operationUtil.js";
import { getModularClientOptions } from "../utils/clientUtils.js";
import { SdkContext } from "../utils/interfaces.js";
import { useDependencies } from "../framework/hooks/useDependencies.js";

export function buildRestorePoller(
  context: SdkContext,
  client: SdkClientType<SdkServiceOperation>,
  emitterOptions: ModularEmitterOptions
) {
  const dependencies = useDependencies();
  const { subfolder } = getModularClientOptions(context, client);
  const methodMap = getMethodHierarchiesMap(context, client);
  const hasLro = Array.from(methodMap.values()).some((operations) => {
    return operations.some(isLroOnlyOperation);
  });
  if (!hasLro) {
    return;
  }
  const srcPath = emitterOptions.modularOptions.sourceRoot;
  const filePath = path.join(
    `${srcPath}/${
      subfolder && subfolder !== "" ? subfolder + "/" : ""
    }restorePollerHelpers.ts`
  );
  const restorePollerFile = emitterOptions.project.createSourceFile(
    filePath,
    undefined,
    {
      overwrite: true
    }
  );

  const clientNames = importClassicalClient(client, restorePollerFile);
  const deserializeMap = importDeserializeHelpers(
    context,
    client,
    restorePollerFile
  );
  const pathUncheckedReference = resolveReference(
    dependencies.PathUncheckedResponse
  );
  const pollerLikeReference = resolveReference(
    AzurePollingDependencies.PollerLike
  );
  const operationStateReference = resolveReference(
    AzurePollingDependencies.OperationState
  );
  const operationOptionsReference = resolveReference(
    dependencies.OperationOptions
  );
  const deserializeStateReference = resolveReference(
    AzurePollingDependencies.DeserializeState
  );
  const restorePollerHelperContent = `
    export interface RestorePollerOptions<
      TResult,
      TResponse extends ${pathUncheckedReference} = ${pathUncheckedReference}
    > extends ${operationOptionsReference} {
      /** Delay to wait until next poll, in milliseconds. */
      updateIntervalInMs?: number;
      /**
       * The signal which can be used to abort requests.
      */
      abortSignal?: ${resolveReference(dependencies.AbortSignalLike)};
      /** Deserialization function for raw response body */
      processResponseBody?: (result: TResponse) => Promise<TResult>;
    }
    
    /**
     * Creates a poller from the serialized state of another poller. This can be
     * useful when you want to create pollers on a different host or a poller
     * needs to be constructed after the original one is not in scope.
     */
    export function restorePoller<TResponse extends ${pathUncheckedReference}, TResult>(
      client: ${clientNames.join(" | ")},
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
        | ${resolveReference(AzurePollingDependencies.ResourceLocationConfig)}
        | undefined;
      const { deserializer, expectedStatuses = [] } =
        getDeserializationHelper(initialRequestUrl, requestMethod) ?? {};
      const deserializeHelper = options?.processResponseBody ?? deserializer;
      if (!deserializeHelper) {
        throw new Error(
          \`Please ensure the operation is in this client! We can't find its deserializeHelper for \${sourceOperation?.name}.\`
        );
      }
      return ${resolveReference(PollingHelpers.GetLongRunningPoller)}(
        (client as any)["_client"] ?? client,
        deserializeHelper as (result: TResponse) => Promise<TResult>,
        expectedStatuses,
        {
          updateIntervalInMs: options?.updateIntervalInMs,
          abortSignal: options?.abortSignal,
          resourceLocationConfig,
          restoreFrom: serializedState,
          initialRequestUrl
        }
      );
    }
    
    interface DeserializationHelper {
      deserializer: Function;
      expectedStatuses: string[];
    }

    const deserializeMap: Record<string, DeserializationHelper> = {
      ${deserializeMap.join(",\n")}
    };

    function getDeserializationHelper(
      urlStr: string,
      method: string
    ): DeserializationHelper | undefined {
      const path = new URL(urlStr).pathname;
      const pathParts = path.split("/");
    
      // Traverse list to match the longest candidate
      // matchedLen: the length of candidate path
      // matchedValue: the matched status code array
      let matchedLen = -1,
        matchedValue: DeserializationHelper | undefined;
    
      // Iterate the responseMap to find a match
      for (const [key, value] of Object.entries(deserializeMap)) {
        // Extracting the path from the map key which is in format
        // GET /path/foo
        if (!key.startsWith(method)) {
          continue;
        }
        const candidatePath = getPathFromMapKey(key);
        // Get each part of the url path
        const candidateParts = candidatePath.split("/");
    
        // track if we have found a match to return the values found.
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
            // If the current part of the candidate is a "template" part
            // Try to use the suffix of pattern to match the path
            // {guid} ==> $
            // {guid}:export ==> :export$
            const isMatched = new RegExp(
              \`\${candidateParts[i]?.slice(start, end)}\`
            ).test(pathParts[j] || "");
    
            if (!isMatched) {
              found = false;
              break;
            }
            continue;
          }
    
          // If the candidate part is not a template and
          // the parts don't match mark the candidate as not found
          // to move on with the next candidate path.
          if (candidateParts[i] !== pathParts[j]) {
            found = false;
            break;
          }
        }
    
        // We finished evaluating the current candidate parts
        // Update the matched value if and only if we found the longer pattern
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
  `;
  restorePollerFile.addStatements(restorePollerHelperContent);
}

function importDeserializeHelpers(
  context: SdkContext,
  client: SdkClientType<SdkServiceOperation>,
  sourceFile: SourceFile
) {
  const deserializeDetails = buildLroDeserDetailMap(context, client);
  const deserializeMap: string[] = [];
  for (const [key, value] of deserializeDetails.entries()) {
    sourceFile.addImportDeclaration({
      namedImports: value.map((detail) =>
        detail.renamedDeserName
          ? `${detail.deserName} as ${detail.renamedDeserName}`
          : detail.deserName
      ),
      moduleSpecifier: key
    });
    value.forEach((detail) => {
      deserializeMap.push(
        `"${detail.path}": { deserializer: ${
          detail.renamedDeserName ?? detail.deserName
        }, expectedStatuses: ${detail.expectedStatusesExpression} }`
      );
    });
  }
  return deserializeMap;
}

function importClassicalClient(
  client: SdkClientType<SdkServiceOperation>,
  sourceFile: SourceFile
): string[] {
  const classicalClientName = `${getClientName(client)}Client`;
  sourceFile.addImportDeclaration({
    namedImports: [`${classicalClientName}`],
    moduleSpecifier: `./${normalizeName(classicalClientName, NameType.File)}.js`
  });
  return [classicalClientName];
}
