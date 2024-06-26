import { NameType, normalizeName } from "@azure-tools/rlc-common";
import path from "path";
import { SourceFile } from "ts-morph";
import { buildLroDeserDetailMap } from "./buildOperations.js";
import { getClientName } from "./helpers/namingHelpers.js";
import { isLroOnlyOperation } from "./helpers/operationHelpers.js";
import { Client, ModularCodeModel } from "./modularCodeModel.js";

/**
 * Always import LRO dependencies and remember to remove if unused.
 * @param clientFile - The file to add the imports to.
 */
export function importLroCoreDependencies(clientFile: SourceFile) {
  clientFile.addImportDeclaration({
    moduleSpecifier: `@azure/core-lro`,
    namedImports: [
      "PollerLike",
      "OperationState",
      "deserializeState",
      "ResourceLocationConfig",
      "RunningOperation",
      "createHttpPoller",
      "OperationResponse"
    ]
  });
}

/**
 * Generate `restorePollerHelpers.ts` file
 * @param codeModel - The code model.
 * @param client - The client.
 * @returns
 */
export function buildRestorePollerHelper(
  codeModel: ModularCodeModel,
  client: Client
) {
  const lros = client.operationGroups
    .flatMap((op) => op.operations)
    .filter(isLroOnlyOperation);
  if (lros.length === 0) {
    return;
  }
  const srcPath = codeModel.modularOptions.sourceRoot;
  const subfolder = client.subfolder ?? "";
  const filePath = path.join(
    `${srcPath}/${
      subfolder !== "" ? subfolder + "/" : ""
    }restorePollerHelpers.ts`
  );
  const restorePollerFile = codeModel.project.createSourceFile(
    filePath,
    undefined,
    {
      overwrite: true
    }
  );

  importLroCoreDependencies(restorePollerFile);
  const clientNames = importClassicalClient(client, restorePollerFile);
  importGetPollerHelper(restorePollerFile);
  const deserializeMap = importDeserializeHelpers(client, restorePollerFile);
  const restorePollerHelperContent = `import {
        PathUncheckedResponse,
        OperationOptions
      } from "@azure-rest/core-client";
      import { AbortSignalLike } from "@azure/abort-controller";

      export interface RestorePollerOptions<
        TResult,
        TResponse extends PathUncheckedResponse = PathUncheckedResponse
      > extends OperationOptions {
        /** Delay to wait until next poll, in milliseconds. */
        updateIntervalInMs?: number;
        /**
         * The signal which can be used to abort requests.
        */
        abortSignal?: AbortSignalLike;
        /** Deserialization function for raw response body */
        processResponseBody?: (result: TResponse) => Promise<TResult>;
      }
      
      /**
       * Creates a poller from the serialized state of another poller. This can be
       * useful when you want to create pollers on a different host or a poller
       * needs to be constructed after the original one is not in scope.
       */
      export function restorePoller<TResponse extends PathUncheckedResponse, TResult>(
        client: ${clientNames.join(" | ")},
        serializedState: string,
        sourceOperation: (
          ...args: any[]
        ) => PollerLike<OperationState<TResult>, TResult>,
        options?: RestorePollerOptions<TResult>
      ): PollerLike<OperationState<TResult>, TResult> {
        const pollerConfig = deserializeState(serializedState).config;
        const { initialRequestUrl, requestMethod, metadata } = pollerConfig;
        if (!initialRequestUrl || !requestMethod) {
          throw new Error(
            \`Invalid serialized state: \${serializedState} for sourceOperation \${sourceOperation?.name}\`
          );
        }
        const resourceLocationConfig = metadata?.["resourceLocationConfig"] as
          | ResourceLocationConfig
          | undefined;
        const deserializeHelper =
          options?.processResponseBody ??
          getDeserializationHelper(initialRequestUrl, requestMethod);
        if (!deserializeHelper) {
          throw new Error(
            \`Please ensure the operation is in this client! We can't find its deserializeHelper for \${sourceOperation?.name}.\`
          );
        }
        return getLongRunningPoller(
          (client as any)["_client"] ?? client,
          deserializeHelper as (result: TResponse) => Promise<TResult>,
          {
            updateIntervalInMs: options?.updateIntervalInMs,
            abortSignal: options?.abortSignal,
            resourceLocationConfig,
            restoreFrom: serializedState,
            initialRequestUrl
          }
        );
      }
      
      const deserializeMap: Record<string, Function> = {
        ${deserializeMap.join(",\n")}
      };

      function getDeserializationHelper(
        urlStr: string,
        method: string
      ): ((result: unknown) => Promise<unknown>) | undefined {
        const path = new URL(urlStr).pathname;
        const pathParts = path.split("/");
      
        // Traverse list to match the longest candidate
        // matchedLen: the length of candidate path
        // matchedValue: the matched status code array
        let matchedLen = -1,
          matchedValue: ((result: unknown) => Promise<unknown>) | undefined;
      
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
            matchedValue = value as (result: unknown) => Promise<unknown>;
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
  restorePollerFile.fixMissingImports();
  restorePollerFile.fixUnusedIdentifiers();
}

function importClassicalClient(
  client: Client,
  sourceFile: SourceFile
): string[] {
  const classicalClientName = `${getClientName(client)}Client`;
  sourceFile.addImportDeclaration({
    namedImports: [`${classicalClientName}`],
    moduleSpecifier: `./${normalizeName(classicalClientName, NameType.File)}.js`
  });
  return [classicalClientName];
}

function importGetPollerHelper(sourceFile: SourceFile) {
  sourceFile.addImportDeclaration({
    namedImports: [`getLongRunningPoller`],
    moduleSpecifier: `./api/pollingHelpers.js`
  });
}

function importDeserializeHelpers(client: Client, sourceFile: SourceFile) {
  const deserializeDetails = buildLroDeserDetailMap(client);
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
        `"${detail.path}": ${detail.renamedDeserName ?? detail.deserName}`
      );
    });
  }
  return deserializeMap;
}

/**
 * Generate `api/pollingHelpers.ts` file
 * @param codeModel - The code model.
 * @param client - The client.
 * @param needUnexpectedHelper - Whether need to import unexpected helper.
 * @param isMultiClients - Whether the client is multi-clients.
 * @returns
 */
export function buildGetPollerHelper(
  codeModel: ModularCodeModel,
  client: Client,
  needUnexpectedHelper: boolean = true,
  isMultiClients: boolean = false
) {
  const lroOperstions = client.operationGroups
    .flatMap((op) => op.operations)
    .filter(isLroOnlyOperation);
  if (lroOperstions.length === 0) {
    return;
  }
  const checkResponseStatus = needUnexpectedHelper
    ? `if (isUnexpected(response as PathUncheckedResponse)) {
        throw createRestError(response);
      }`
    : `if (Number.isNaN(response.status)) {
        throw createRestError(
          \`Status code of the response is not a number. Value: \${response.status}\`,
          response
        );
      }`;

  const unexpectedHelperImport = needUnexpectedHelper
    ? `import { isUnexpected } from "${
        isMultiClients ? "../" : ""
      }../rest/index.js";`
    : "";
  const getLroPollerContent = `
  import {
    Client,
    PathUncheckedResponse,
    createRestError
  } from "@azure-rest/core-client";
  import { AbortSignalLike } from "@azure/abort-controller";
  ${unexpectedHelperImport}
  
  export interface GetLongRunningPollerOptions<TResponse> {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /**
     * The signal which can be used to abort requests.
     */
    abortSignal?: AbortSignalLike;
    /**
     * The potential location of the result of the LRO if specified by the LRO extension in the swagger.
     */
    resourceLocationConfig?: ResourceLocationConfig;
    /**
     * The original url of the LRO
     * Should not be null when restoreFrom is set
     */
    initialRequestUrl?: string;
    /**
     * A serialized poller which can be used to resume an existing paused Long-Running-Operation.
     */
    restoreFrom?: string;
    /**
     * The function to get the initial response
     */
    getInitialResponse?: () => PromiseLike<TResponse>;
  }
  export function getLongRunningPoller<
    TResponse extends PathUncheckedResponse,
    TResult = void
  >(
    client: Client,
    processResponseBody: (result: TResponse) => Promise<TResult>,
    options: GetLongRunningPollerOptions<TResponse>
  ): PollerLike<OperationState<TResult>, TResult> {
    const { restoreFrom, getInitialResponse } = options;
    if (!restoreFrom && !getInitialResponse) {
      throw new Error(
        "Either restoreFrom or getInitialResponse must be specified"
      );
    }
    let initialResponse: TResponse | undefined = undefined;
    const pollAbortController = new AbortController();
    const poller: RunningOperation<TResponse> = {
      sendInitialRequest: async () => {
        if (!getInitialResponse) {
          throw new Error(
            "getInitialResponse is required when initializing a new poller"
          );
        }
        initialResponse = await getInitialResponse();
        return getLroResponse(initialResponse);
      },
      sendPollRequest: async (
        path: string,
        pollOptions?: {
          abortSignal?: AbortSignalLike;
        }
      ) => {
        // The poll request would both listen to the user provided abort signal and the poller's own abort signal
        function abortListener(): void {
          pollAbortController.abort();
        }
        const abortSignal = pollAbortController.signal;
        if (options.abortSignal?.aborted) {
          pollAbortController.abort();
        } else if (pollOptions?.abortSignal?.aborted) {
          pollAbortController.abort();
        } else if (!abortSignal.aborted) {
          options.abortSignal?.addEventListener("abort", abortListener, {
            once: true
          });
          pollOptions?.abortSignal?.addEventListener("abort", abortListener, {
            once: true
          });
        }
        let response;
        try {
          response = await client.pathUnchecked(path).get({ abortSignal });
        } finally {
          options.abortSignal?.removeEventListener("abort", abortListener);
          pollOptions?.abortSignal?.removeEventListener("abort", abortListener);
        }
        if (options.initialRequestUrl || initialResponse) {
          response.headers["x-ms-original-url"] =
            options.initialRequestUrl ?? initialResponse!.request.url;
        }

        return getLroResponse(response as TResponse);
      }
    };
    return createHttpPoller(poller, {
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: options?.resourceLocationConfig,
      restoreFrom: options?.restoreFrom,
      processResult: (result: unknown) => {
        return processResponseBody(result as TResponse);
      }
    });
  }
  /**
   * Converts a Rest Client response to a response that the LRO implementation understands
   * @param response - a rest client http response
   * @param deserializeFn - deserialize function to convert Rest response to modular output
   * @returns - An LRO response that the LRO implementation understands
   */
  function getLroResponse<TResponse extends PathUncheckedResponse>(
    response: TResponse
  ): OperationResponse<TResponse> {
    ${checkResponseStatus}
    return {
      flatResponse: response,
      rawResponse: {
        ...response,
        statusCode: Number.parseInt(response.status),
        body: response.body
      }
    };
  }  
  `;
  const filePath = path.join(
    codeModel.modularOptions.sourceRoot,
    client.subfolder ?? "",
    `api/pollingHelpers.ts`
  );

  const fileContent = codeModel.project.createSourceFile(filePath, undefined, {
    overwrite: true
  });
  importLroCoreDependencies(fileContent);
  fileContent.addStatements(getLroPollerContent);
  fileContent.fixMissingImports();
  fileContent.fixUnusedIdentifiers();
}
