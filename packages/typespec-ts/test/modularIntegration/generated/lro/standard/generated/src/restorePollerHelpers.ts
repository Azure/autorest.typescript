import { HttpResponse, OperationOptions } from "@azure-rest/core-client";
import { StandardContext } from "./rest/clientDefinitions.js";
import { OperationState, PromisePollerLike } from "@azure/core-lro";
import { getLongRunningPoller } from "./api/pollingHelpers.js";
import { StandardClient } from "./StandardClient.js";

export interface RestorePollerOptions<
  TResult,
  TResponse extends HttpResponse = HttpResponse
> extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** Deserialization function for raw response body */
  processResponseBody?: (result: TResponse) => PromiseLike<TResult>;
}

/**
 * Creates a poller from the serialized state of another poller. This can be
 * useful when you want to create pollers on a different host or a poller
 * needs to be constructed after the original one is not in scope.
 */
export function restorePoller<TResult = void>(
  client: StandardContext | StandardClient,
  serializedState: string,
  _sourceOperation: (
    ...args: any[]
  ) => PromisePollerLike<OperationState<TResult>, TResult>,
  options?: RestorePollerOptions<TResult>
): PromisePollerLike<OperationState<TResult>, TResult> {
  return getLongRunningPoller(
    (client as any)["_client"] ?? client,
    () => void 0 as any,
    () => void 0 as any,
    {
      method: "GET",
      url: "/azure/core/lro/standard/users/{name}",
      updateIntervalInMs: options?.updateIntervalInMs,
      restoreFrom: serializedState
    }
  ) as PromisePollerLike<OperationState<TResult>, TResult>;
}
