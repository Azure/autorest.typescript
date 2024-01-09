import { HttpResponse, OperationOptions } from "@azure-rest/core-client";
import { StandardContext } from "./rest/clientDefinitions.js";
import { OperationState, PollerLike } from "@azure/core-lro/next";
import { getLongRunningPoller } from "./api/pollingHelpers.js";
import { StandardClient } from "./StandardClient.js";
import {
  _createOrReplaceDeserialize,
  _deleteOperationDeserialize,
  _exportOperationDeserialize
} from "./api/operations.js";

export interface RestorePollerOptions<
  TResult,
  TResponse extends HttpResponse = HttpResponse
> extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** Deserialization function for raw response body */
  processResponseBody?: (result: TResponse) => PromiseLike<TResult>;
}

const deserializeMap: Record<string, Function> = {
  "GET /azure/core/lro/standard/users/{name}": _exportOperationDeserialize,
  "PUT /azure/core/lro/standard/users/{name}": _createOrReplaceDeserialize,
  "DELETE /azure/core/lro/standard/users/{name}": _deleteOperationDeserialize
};

/**
 * Creates a poller from the serialized state of another poller. This can be
 * useful when you want to create pollers on a different host or a poller
 * needs to be constructed after the original one is not in scope.
 */
export function restorePoller<TResponse extends HttpResponse, TResult>(
  client: StandardContext | StandardClient,
  serializedState: string,
  _sourceOperation: (
    ...args: any[]
  ) => PollerLike<OperationState<TResult>, TResult>,
  options?: RestorePollerOptions<TResult>
): PollerLike<OperationState<TResult>, TResult> {
  const requestUrl = JSON.parse(serializedState).state.config.initialUrl;
  const requestMethod =
    JSON.parse(serializedState).state.config.requestMethod.toUpperCase();
  const url = new URL(requestUrl);
  const deserializeHelper = getParametrizedPathSuccess(
    requestMethod,
    url.pathname
  );
  if (deserializeHelper === undefined) {
    throw new Error(
      `deserializeHelper is undefined for ${requestMethod} ${url.pathname}`
    );
  }
  console.log(requestUrl);
  return getLongRunningPoller(
    (client as any)["_client"] ?? client,
    () => void 0 as any,
    deserializeHelper as (result: TResponse) => PromiseLike<TResult>,
    {
      method: requestMethod,
      url: requestUrl,
      updateIntervalInMs: options?.updateIntervalInMs,
      restoreFrom: serializedState
    }
  ) as PollerLike<OperationState<TResult>, TResult>;
}

function getParametrizedPathSuccess(
  method: string,
  path: string
): Function | undefined {
  const pathParts = path.split("/");

  // Traverse list to match the longest candidate
  // matchedLen: the length of candidate path
  // matchedValue: the matched status code array
  let matchedLen = -1,
    matchedValue: Function | undefined;

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
          `${candidateParts[i]?.slice(start, end)}`
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
