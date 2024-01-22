import { getOperationName } from "./helpers/namingHelpers.js";
import { isLROOperation } from "./helpers/operationHelpers.js";
import { ModularCodeModel, Client } from "./modularCodeModel.js";
import path from "path";

// Generate `restorePollerHelper.ts` file
export function buildRestorePollerHelper(
  codeModel: ModularCodeModel,
  client: Client
) {
  const lroOperstions = client.operationGroups
    .flatMap((op) => op.operations)
    .filter(isLROOperation);
  if (lroOperstions.length === 0) {
    return;
  }
  const deserializeMap: string[] = [],
    deserializedFunctions: string[] = [];
  lroOperstions.forEach((op) => {
    const { name } = getOperationName(op);
    deserializedFunctions.push(`_${name}Deserialize`);
    deserializeMap.push(
      `"${op.method.toUpperCase()} ${op.url}": _${name}Deserialize`
    );
  });
  // const { name, fixme = [] } = getOperationName(operation);
  // TODO: add real deserialize function
  // TODO: add real client type
  // TODO: add pollingHelper import
  const restorePollerHelperContent = `
      import {
        PathUncheckedResponse,
        OperationOptions
      } from "@azure-rest/core-client";
      import { Next } from "@azure/core-lro";
      import { StandardContext } from "./rest/clientDefinitions.js";
      import { getLongRunningPoller } from "./api/pollingHelpers.js";
      import { StandardClient } from "./StandardClient.js";
      import {
        ${deserializedFunctions.join(",\n")}
      } from "./api/operations.js";
      
      export interface RestorePollerOptions<
        TResult,
        TResponse extends PathUncheckedResponse = PathUncheckedResponse
      > extends OperationOptions {
        /** Delay to wait until next poll, in milliseconds. */
        updateIntervalInMs?: number;
        /** Deserialization function for raw response body */
        processResponseBody?: (result: TResponse) => PromiseLike<TResult>;
      }
      
      const deserializeMap: Record<string, Function> = {
        ${deserializeMap.join(",\n")}
      };
      
      /**
       * Creates a poller from the serialized state of another poller. This can be
       * useful when you want to create pollers on a different host or a poller
       * needs to be constructed after the original one is not in scope.
       */
      export function restorePoller<TResponse extends PathUncheckedResponse, TResult>(
        client: StandardContext | StandardClient,
        serializedState: string,
        sourceOperation: (
          ...args: any[]
        ) => Next.PollerLike<Next.OperationState<TResult>, TResult>,
        options?: RestorePollerOptions<TResult>
      ): Next.PollerLike<Next.OperationState<TResult>, TResult> {
        const pollerConfig = Next.deserializeState(serializedState).config;
        const initialUri = pollerConfig.initialUri;
        const requestMethod = pollerConfig.requestMethod;
        if (!initialUri || !requestMethod) {
          throw new Error(
            \`Invalid serialized state: \${serializedState} for sourceOperation \${sourceOperation?.name}\`
          );
        }
        const resourceLocationConfig = pollerConfig?.metadata?.[
          "resourceLocationConfig"
        ] as Next.ResourceLocationConfig | undefined;
        const deserializeHelper =
          options?.processResponseBody ??
          getDeserializationHelper(initialUri, requestMethod);
        if (!deserializeHelper) {
          throw new Error(
            \`Please ensure the operation is in this client! We can't find its deserializeHelper for \${sourceOperation?.name}.\`
          );
        }
        return getLongRunningPoller(
          (client as any)["_client"] ?? client,
          deserializeHelper as (result: TResponse) => PromiseLike<TResult>,
          {
            updateIntervalInMs: options?.updateIntervalInMs,
            resourceLocationConfig,
            restoreFrom: serializedState,
            initialUri: initialUri
          }
        );
      }
      
      function getDeserializationHelper(
        urlStr: string,
        method: string
      ): ((result: unknown) => PromiseLike<unknown>) | undefined {
        const path = new URL(urlStr).pathname;
        const pathParts = path.split("/");
      
        // Traverse list to match the longest candidate
        // matchedLen: the length of candidate path
        // matchedValue: the matched status code array
        let matchedLen = -1,
          matchedValue: ((result: unknown) => PromiseLike<unknown>) | undefined;
      
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
            matchedValue = value as (result: unknown) => PromiseLike<unknown>;
          }
        }
      
        return matchedValue;
      }
      
      function getPathFromMapKey(mapKey: string): string {
        const pathStart = mapKey.indexOf("/");
        return mapKey.slice(pathStart);
      }      
    `;

  const srcPath = codeModel.modularOptions.sourceRoot;
  const subfolder = client.subfolder ?? "";
  const filePath = path.join(
    `${srcPath}/${
      subfolder !== "" ? subfolder + "/" : ""
    }restorePollerHelpers.ts`
  );
  const fileContent = codeModel.project.createSourceFile(filePath, undefined, {
    overwrite: true
  });
  fileContent.addStatements(restorePollerHelperContent);
}

// Generate `api/pollingHelper.ts` file
export function buildGetPollerHelper(
  codeModel: ModularCodeModel,
  client: Client,
  needUnexpectedHelper: boolean = true,
  isMultiClients: boolean = false
) {
  const lroOperstions = client.operationGroups
    .flatMap((op) => op.operations)
    .filter(isLROOperation);
  if (lroOperstions.length === 0) {
    return;
  }
  const checkResponseStatus = needUnexpectedHelper
    ? `if (isUnexpected(response as PathUncheckedResponse)) {
        createRestError(
          \`Status code of the response is not a number. Value: \${response.status}\`,
          response
        );
      }`
    : `if (Number.isNaN(response.status)) {
        createRestError(
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
  import { Next } from "@azure/core-lro";
  import {
    Client,
    PathUncheckedResponse,
    createRestError
  } from "@azure-rest/core-client";
  import { isUnexpected } from "../rest/index.js";
  ${unexpectedHelperImport}
  
  export interface GetLongRunningPollerOptions<TResponse> {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /**
     * The potential location of the result of the LRO if specified by the LRO extension in the swagger.
     */
    resourceLocationConfig?: Next.ResourceLocationConfig;
    /**
     * The original url of the LRO
     * Should be set when restoreFrom is set
     */
    initialUri?: string;
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
    processResponseBody: (result: TResponse) => PromiseLike<TResult>,
    options: GetLongRunningPollerOptions<TResponse>
  ): Next.PollerLike<Next.OperationState<TResult>, TResult> {
    const { restoreFrom, getInitialResponse } = options;
    if (!restoreFrom && !getInitialResponse) {
      throw new Error(
        "Either restoreFrom or getInitialResponse must be specified"
      );
    }
    let initialResponse: TResponse | undefined = undefined;
    const poller: Next.LongRunningOperation<TResponse> = {
      sendInitialRequest: async () => {
        if (!getInitialResponse) {
          throw new Error("getInitialResponse is required if init a new poller");
        }
        initialResponse = await getInitialResponse();
        return getLroResponse(initialResponse);
      },
      sendPollRequest: async (path: string) => {
        const response = await client.pathUnchecked(path).get();
        if (options.initialUri || initialResponse) {
          response.headers["x-ms-original-url"] =
            options.initialUri ?? initialResponse!.request.url;
        }
  
        return getLroResponse(response as TResponse);
      }
    };
    return Next.createHttpPoller(poller, {
      intervalInMs: options?.updateIntervalInMs,
      resourceLocationConfig: options?.resourceLocationConfig,
      restoreFrom: options?.restoreFrom,
      processResult: (result: unknown) => {
        return processResponseBody(result as TResponse) as TResult;
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
  ): Next.OperationResponse<TResponse> {
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
  fileContent.addStatements(getLroPollerContent);
}
