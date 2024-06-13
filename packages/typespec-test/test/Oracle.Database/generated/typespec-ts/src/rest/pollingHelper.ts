// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Client, HttpResponse } from "@azure-rest/core-client";
import { AbortSignalLike } from "@azure/abort-controller";
import {
  CancelOnProgress,
  CreateHttpPollerOptions,
  RunningOperation,
  OperationResponse,
  OperationState,
  createHttpPoller,
} from "@azure/core-lro";
import {
  CloudExadataInfrastructuresCreateOrUpdate200Response,
  CloudExadataInfrastructuresCreateOrUpdate201Response,
  CloudExadataInfrastructuresCreateOrUpdateDefaultResponse,
  CloudExadataInfrastructuresCreateOrUpdateLogicalResponse,
  CloudExadataInfrastructuresUpdate200Response,
  CloudExadataInfrastructuresUpdate202Response,
  CloudExadataInfrastructuresUpdateDefaultResponse,
  CloudExadataInfrastructuresUpdateLogicalResponse,
  CloudExadataInfrastructuresDelete202Response,
  CloudExadataInfrastructuresDelete204Response,
  CloudExadataInfrastructuresDeleteDefaultResponse,
  CloudExadataInfrastructuresDeleteLogicalResponse,
  CloudExadataInfrastructuresAddStorageCapacity200Response,
  CloudExadataInfrastructuresAddStorageCapacity202Response,
  CloudExadataInfrastructuresAddStorageCapacityDefaultResponse,
  CloudExadataInfrastructuresAddStorageCapacityLogicalResponse,
  CloudVmClustersCreateOrUpdate200Response,
  CloudVmClustersCreateOrUpdate201Response,
  CloudVmClustersCreateOrUpdateDefaultResponse,
  CloudVmClustersCreateOrUpdateLogicalResponse,
  CloudVmClustersUpdate200Response,
  CloudVmClustersUpdate202Response,
  CloudVmClustersUpdateDefaultResponse,
  CloudVmClustersUpdateLogicalResponse,
  CloudVmClustersDelete202Response,
  CloudVmClustersDelete204Response,
  CloudVmClustersDeleteDefaultResponse,
  CloudVmClustersDeleteLogicalResponse,
  CloudVmClustersAddVms200Response,
  CloudVmClustersAddVms202Response,
  CloudVmClustersAddVmsDefaultResponse,
  CloudVmClustersAddVmsLogicalResponse,
  CloudVmClustersRemoveVms200Response,
  CloudVmClustersRemoveVms202Response,
  CloudVmClustersRemoveVmsDefaultResponse,
  CloudVmClustersRemoveVmsLogicalResponse,
  VirtualNetworkAddressesCreateOrUpdate200Response,
  VirtualNetworkAddressesCreateOrUpdate201Response,
  VirtualNetworkAddressesCreateOrUpdateDefaultResponse,
  VirtualNetworkAddressesCreateOrUpdateLogicalResponse,
  VirtualNetworkAddressesDelete202Response,
  VirtualNetworkAddressesDelete204Response,
  VirtualNetworkAddressesDeleteDefaultResponse,
  VirtualNetworkAddressesDeleteLogicalResponse,
  OracleSubscriptionsCreateOrUpdate200Response,
  OracleSubscriptionsCreateOrUpdate201Response,
  OracleSubscriptionsCreateOrUpdateDefaultResponse,
  OracleSubscriptionsCreateOrUpdateLogicalResponse,
  OracleSubscriptionsUpdate200Response,
  OracleSubscriptionsUpdate202Response,
  OracleSubscriptionsUpdateDefaultResponse,
  OracleSubscriptionsUpdateLogicalResponse,
  OracleSubscriptionsDelete202Response,
  OracleSubscriptionsDelete204Response,
  OracleSubscriptionsDeleteDefaultResponse,
  OracleSubscriptionsDeleteLogicalResponse,
  OracleSubscriptionsListCloudAccountDetails200Response,
  OracleSubscriptionsListCloudAccountDetails202Response,
  OracleSubscriptionsListCloudAccountDetailsDefaultResponse,
  OracleSubscriptionsListCloudAccountDetailsLogicalResponse,
  OracleSubscriptionsListSaasSubscriptionDetails200Response,
  OracleSubscriptionsListSaasSubscriptionDetails202Response,
  OracleSubscriptionsListSaasSubscriptionDetailsDefaultResponse,
  OracleSubscriptionsListSaasSubscriptionDetailsLogicalResponse,
  OracleSubscriptionsListActivationLinks200Response,
  OracleSubscriptionsListActivationLinks202Response,
  OracleSubscriptionsListActivationLinksDefaultResponse,
  OracleSubscriptionsListActivationLinksLogicalResponse,
  DbNodesAction200Response,
  DbNodesAction202Response,
  DbNodesActionDefaultResponse,
  DbNodesActionLogicalResponse,
  AutonomousDatabasesCreateOrUpdate200Response,
  AutonomousDatabasesCreateOrUpdate201Response,
  AutonomousDatabasesCreateOrUpdateDefaultResponse,
  AutonomousDatabasesCreateOrUpdateLogicalResponse,
  AutonomousDatabasesUpdate200Response,
  AutonomousDatabasesUpdate202Response,
  AutonomousDatabasesUpdateDefaultResponse,
  AutonomousDatabasesUpdateLogicalResponse,
  AutonomousDatabasesDelete202Response,
  AutonomousDatabasesDelete204Response,
  AutonomousDatabasesDeleteDefaultResponse,
  AutonomousDatabasesDeleteLogicalResponse,
  AutonomousDatabasesSwitchover200Response,
  AutonomousDatabasesSwitchover202Response,
  AutonomousDatabasesSwitchoverDefaultResponse,
  AutonomousDatabasesSwitchoverLogicalResponse,
  AutonomousDatabasesFailover200Response,
  AutonomousDatabasesFailover202Response,
  AutonomousDatabasesFailoverDefaultResponse,
  AutonomousDatabasesFailoverLogicalResponse,
  AutonomousDatabasesRestore200Response,
  AutonomousDatabasesRestore202Response,
  AutonomousDatabasesRestoreDefaultResponse,
  AutonomousDatabasesRestoreLogicalResponse,
  AutonomousDatabasesShrink200Response,
  AutonomousDatabasesShrink202Response,
  AutonomousDatabasesShrinkDefaultResponse,
  AutonomousDatabasesShrinkLogicalResponse,
  AutonomousDatabaseBackupsCreateOrUpdate200Response,
  AutonomousDatabaseBackupsCreateOrUpdate201Response,
  AutonomousDatabaseBackupsCreateOrUpdateDefaultResponse,
  AutonomousDatabaseBackupsCreateOrUpdateLogicalResponse,
  AutonomousDatabaseBackupsDelete202Response,
  AutonomousDatabaseBackupsDelete204Response,
  AutonomousDatabaseBackupsDeleteDefaultResponse,
  AutonomousDatabaseBackupsDeleteLogicalResponse,
  AutonomousDatabaseBackupsUpdate200Response,
  AutonomousDatabaseBackupsUpdate202Response,
  AutonomousDatabaseBackupsUpdateDefaultResponse,
  AutonomousDatabaseBackupsUpdateLogicalResponse,
} from "./responses.js";

/**
 * A simple poller that can be used to poll a long running operation.
 */
export interface SimplePollerLike<
  TState extends OperationState<TResult>,
  TResult,
> {
  /**
   * Returns true if the poller has finished polling.
   */
  isDone(): boolean;
  /**
   * Returns the state of the operation.
   */
  getOperationState(): TState;
  /**
   * Returns the result value of the operation,
   * regardless of the state of the poller.
   * It can return undefined or an incomplete form of the final TResult value
   * depending on the implementation.
   */
  getResult(): TResult | undefined;
  /**
   * Returns a promise that will resolve once a single polling request finishes.
   * It does this by calling the update method of the Poller's operation.
   */
  poll(options?: { abortSignal?: AbortSignalLike }): Promise<TState>;
  /**
   * Returns a promise that will resolve once the underlying operation is completed.
   */
  pollUntilDone(pollOptions?: {
    abortSignal?: AbortSignalLike;
  }): Promise<TResult>;
  /**
   * Invokes the provided callback after each polling is completed,
   * sending the current state of the poller's operation.
   *
   * It returns a method that can be used to stop receiving updates on the given callback function.
   */
  onProgress(callback: (state: TState) => void): CancelOnProgress;

  /**
   * Returns a promise that could be used for serialized version of the poller's operation
   * by invoking the operation's serialize method.
   */
  serialize(): Promise<string>;

  /**
   * Wait the poller to be submitted.
   */
  submitted(): Promise<void>;

  /**
   * Returns a string representation of the poller's operation. Similar to serialize but returns a string.
   * @deprecated Use serialize() instead.
   */
  toString(): string;

  /**
   * Stops the poller from continuing to poll. Please note this will only stop the client-side polling
   * @deprecated Use abortSignal to stop polling instead.
   */
  stopPolling(): void;

  /**
   * Returns true if the poller is stopped.
   * @deprecated Use abortSignal status to track this instead.
   */
  isStopped(): boolean;
}

/**
 * Helper function that builds a Poller object to help polling a long running operation.
 * @param client - Client to use for sending the request to get additional pages.
 * @param initialResponse - The initial response.
 * @param options - Options to set a resume state or custom polling interval.
 * @returns - A poller object to poll for operation state updates and eventually get the final response.
 */
export async function getLongRunningPoller<
  TResult extends
    | CloudExadataInfrastructuresCreateOrUpdateLogicalResponse
    | CloudExadataInfrastructuresCreateOrUpdateDefaultResponse,
>(
  client: Client,
  initialResponse:
    | CloudExadataInfrastructuresCreateOrUpdate200Response
    | CloudExadataInfrastructuresCreateOrUpdate201Response
    | CloudExadataInfrastructuresCreateOrUpdateDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | CloudExadataInfrastructuresUpdateLogicalResponse
    | CloudExadataInfrastructuresUpdateDefaultResponse,
>(
  client: Client,
  initialResponse:
    | CloudExadataInfrastructuresUpdate200Response
    | CloudExadataInfrastructuresUpdate202Response
    | CloudExadataInfrastructuresUpdateDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | CloudExadataInfrastructuresDeleteLogicalResponse
    | CloudExadataInfrastructuresDeleteDefaultResponse,
>(
  client: Client,
  initialResponse:
    | CloudExadataInfrastructuresDelete202Response
    | CloudExadataInfrastructuresDelete204Response
    | CloudExadataInfrastructuresDeleteDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | CloudExadataInfrastructuresAddStorageCapacityLogicalResponse
    | CloudExadataInfrastructuresAddStorageCapacityDefaultResponse,
>(
  client: Client,
  initialResponse:
    | CloudExadataInfrastructuresAddStorageCapacity200Response
    | CloudExadataInfrastructuresAddStorageCapacity202Response
    | CloudExadataInfrastructuresAddStorageCapacityDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | CloudVmClustersCreateOrUpdateLogicalResponse
    | CloudVmClustersCreateOrUpdateDefaultResponse,
>(
  client: Client,
  initialResponse:
    | CloudVmClustersCreateOrUpdate200Response
    | CloudVmClustersCreateOrUpdate201Response
    | CloudVmClustersCreateOrUpdateDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | CloudVmClustersUpdateLogicalResponse
    | CloudVmClustersUpdateDefaultResponse,
>(
  client: Client,
  initialResponse:
    | CloudVmClustersUpdate200Response
    | CloudVmClustersUpdate202Response
    | CloudVmClustersUpdateDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | CloudVmClustersDeleteLogicalResponse
    | CloudVmClustersDeleteDefaultResponse,
>(
  client: Client,
  initialResponse:
    | CloudVmClustersDelete202Response
    | CloudVmClustersDelete204Response
    | CloudVmClustersDeleteDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | CloudVmClustersAddVmsLogicalResponse
    | CloudVmClustersAddVmsDefaultResponse,
>(
  client: Client,
  initialResponse:
    | CloudVmClustersAddVms200Response
    | CloudVmClustersAddVms202Response
    | CloudVmClustersAddVmsDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | CloudVmClustersRemoveVmsLogicalResponse
    | CloudVmClustersRemoveVmsDefaultResponse,
>(
  client: Client,
  initialResponse:
    | CloudVmClustersRemoveVms200Response
    | CloudVmClustersRemoveVms202Response
    | CloudVmClustersRemoveVmsDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | VirtualNetworkAddressesCreateOrUpdateLogicalResponse
    | VirtualNetworkAddressesCreateOrUpdateDefaultResponse,
>(
  client: Client,
  initialResponse:
    | VirtualNetworkAddressesCreateOrUpdate200Response
    | VirtualNetworkAddressesCreateOrUpdate201Response
    | VirtualNetworkAddressesCreateOrUpdateDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | VirtualNetworkAddressesDeleteLogicalResponse
    | VirtualNetworkAddressesDeleteDefaultResponse,
>(
  client: Client,
  initialResponse:
    | VirtualNetworkAddressesDelete202Response
    | VirtualNetworkAddressesDelete204Response
    | VirtualNetworkAddressesDeleteDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | OracleSubscriptionsCreateOrUpdateLogicalResponse
    | OracleSubscriptionsCreateOrUpdateDefaultResponse,
>(
  client: Client,
  initialResponse:
    | OracleSubscriptionsCreateOrUpdate200Response
    | OracleSubscriptionsCreateOrUpdate201Response
    | OracleSubscriptionsCreateOrUpdateDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | OracleSubscriptionsUpdateLogicalResponse
    | OracleSubscriptionsUpdateDefaultResponse,
>(
  client: Client,
  initialResponse:
    | OracleSubscriptionsUpdate200Response
    | OracleSubscriptionsUpdate202Response
    | OracleSubscriptionsUpdateDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | OracleSubscriptionsDeleteLogicalResponse
    | OracleSubscriptionsDeleteDefaultResponse,
>(
  client: Client,
  initialResponse:
    | OracleSubscriptionsDelete202Response
    | OracleSubscriptionsDelete204Response
    | OracleSubscriptionsDeleteDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | OracleSubscriptionsListCloudAccountDetailsLogicalResponse
    | OracleSubscriptionsListCloudAccountDetailsDefaultResponse,
>(
  client: Client,
  initialResponse:
    | OracleSubscriptionsListCloudAccountDetails200Response
    | OracleSubscriptionsListCloudAccountDetails202Response
    | OracleSubscriptionsListCloudAccountDetailsDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | OracleSubscriptionsListSaasSubscriptionDetailsLogicalResponse
    | OracleSubscriptionsListSaasSubscriptionDetailsDefaultResponse,
>(
  client: Client,
  initialResponse:
    | OracleSubscriptionsListSaasSubscriptionDetails200Response
    | OracleSubscriptionsListSaasSubscriptionDetails202Response
    | OracleSubscriptionsListSaasSubscriptionDetailsDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | OracleSubscriptionsListActivationLinksLogicalResponse
    | OracleSubscriptionsListActivationLinksDefaultResponse,
>(
  client: Client,
  initialResponse:
    | OracleSubscriptionsListActivationLinks200Response
    | OracleSubscriptionsListActivationLinks202Response
    | OracleSubscriptionsListActivationLinksDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends DbNodesActionLogicalResponse | DbNodesActionDefaultResponse,
>(
  client: Client,
  initialResponse:
    | DbNodesAction200Response
    | DbNodesAction202Response
    | DbNodesActionDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | AutonomousDatabasesCreateOrUpdateLogicalResponse
    | AutonomousDatabasesCreateOrUpdateDefaultResponse,
>(
  client: Client,
  initialResponse:
    | AutonomousDatabasesCreateOrUpdate200Response
    | AutonomousDatabasesCreateOrUpdate201Response
    | AutonomousDatabasesCreateOrUpdateDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | AutonomousDatabasesUpdateLogicalResponse
    | AutonomousDatabasesUpdateDefaultResponse,
>(
  client: Client,
  initialResponse:
    | AutonomousDatabasesUpdate200Response
    | AutonomousDatabasesUpdate202Response
    | AutonomousDatabasesUpdateDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | AutonomousDatabasesDeleteLogicalResponse
    | AutonomousDatabasesDeleteDefaultResponse,
>(
  client: Client,
  initialResponse:
    | AutonomousDatabasesDelete202Response
    | AutonomousDatabasesDelete204Response
    | AutonomousDatabasesDeleteDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | AutonomousDatabasesSwitchoverLogicalResponse
    | AutonomousDatabasesSwitchoverDefaultResponse,
>(
  client: Client,
  initialResponse:
    | AutonomousDatabasesSwitchover200Response
    | AutonomousDatabasesSwitchover202Response
    | AutonomousDatabasesSwitchoverDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | AutonomousDatabasesFailoverLogicalResponse
    | AutonomousDatabasesFailoverDefaultResponse,
>(
  client: Client,
  initialResponse:
    | AutonomousDatabasesFailover200Response
    | AutonomousDatabasesFailover202Response
    | AutonomousDatabasesFailoverDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | AutonomousDatabasesRestoreLogicalResponse
    | AutonomousDatabasesRestoreDefaultResponse,
>(
  client: Client,
  initialResponse:
    | AutonomousDatabasesRestore200Response
    | AutonomousDatabasesRestore202Response
    | AutonomousDatabasesRestoreDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | AutonomousDatabasesShrinkLogicalResponse
    | AutonomousDatabasesShrinkDefaultResponse,
>(
  client: Client,
  initialResponse:
    | AutonomousDatabasesShrink200Response
    | AutonomousDatabasesShrink202Response
    | AutonomousDatabasesShrinkDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | AutonomousDatabaseBackupsCreateOrUpdateLogicalResponse
    | AutonomousDatabaseBackupsCreateOrUpdateDefaultResponse,
>(
  client: Client,
  initialResponse:
    | AutonomousDatabaseBackupsCreateOrUpdate200Response
    | AutonomousDatabaseBackupsCreateOrUpdate201Response
    | AutonomousDatabaseBackupsCreateOrUpdateDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | AutonomousDatabaseBackupsDeleteLogicalResponse
    | AutonomousDatabaseBackupsDeleteDefaultResponse,
>(
  client: Client,
  initialResponse:
    | AutonomousDatabaseBackupsDelete202Response
    | AutonomousDatabaseBackupsDelete204Response
    | AutonomousDatabaseBackupsDeleteDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | AutonomousDatabaseBackupsUpdateLogicalResponse
    | AutonomousDatabaseBackupsUpdateDefaultResponse,
>(
  client: Client,
  initialResponse:
    | AutonomousDatabaseBackupsUpdate200Response
    | AutonomousDatabaseBackupsUpdate202Response
    | AutonomousDatabaseBackupsUpdateDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<TResult extends HttpResponse>(
  client: Client,
  initialResponse: TResult,
  options: CreateHttpPollerOptions<TResult, OperationState<TResult>> = {},
): Promise<SimplePollerLike<OperationState<TResult>, TResult>> {
  const abortController = new AbortController();
  const poller: RunningOperation<TResult> = {
    sendInitialRequest: async () => {
      // In the case of Rest Clients we are building the LRO poller object from a response that's the reason
      // we are not triggering the initial request here, just extracting the information from the
      // response we were provided.
      return getLroResponse(initialResponse);
    },
    sendPollRequest: async (
      path: string,
      options?: { abortSignal?: AbortSignalLike },
    ) => {
      // This is the callback that is going to be called to poll the service
      // to get the latest status. We use the client provided and the polling path
      // which is an opaque URL provided by caller, the service sends this in one of the following headers: operation-location, azure-asyncoperation or location
      // depending on the lro pattern that the service implements. If non is provided we default to the initial path.
      function abortListener(): void {
        abortController.abort();
      }
      const inputAbortSignal = options?.abortSignal;
      const abortSignal = abortController.signal;
      if (inputAbortSignal?.aborted) {
        abortController.abort();
      } else if (!abortSignal.aborted) {
        inputAbortSignal?.addEventListener("abort", abortListener, {
          once: true,
        });
      }
      let response;
      try {
        response = await client
          .pathUnchecked(path ?? initialResponse.request.url)
          .get({ abortSignal });
      } finally {
        inputAbortSignal?.removeEventListener("abort", abortListener);
      }
      const lroResponse = getLroResponse(response as TResult);
      lroResponse.rawResponse.headers["x-ms-original-url"] =
        initialResponse.request.url;
      return lroResponse;
    },
  };

  options.resolveOnUnsuccessful = options.resolveOnUnsuccessful ?? true;
  const httpPoller = createHttpPoller(poller, options);
  const simplePoller: SimplePollerLike<OperationState<TResult>, TResult> = {
    isDone() {
      return httpPoller.isDone;
    },
    isStopped() {
      return abortController.signal.aborted;
    },
    getOperationState() {
      if (!httpPoller.operationState) {
        throw new Error(
          "Operation state is not available. The poller may not have been started and you could await submitted() before calling getOperationState().",
        );
      }
      return httpPoller.operationState;
    },
    getResult() {
      return httpPoller.result;
    },
    toString() {
      if (!httpPoller.operationState) {
        throw new Error(
          "Operation state is not available. The poller may not have been started and you could await submitted() before calling getOperationState().",
        );
      }
      return JSON.stringify({
        state: httpPoller.operationState,
      });
    },
    stopPolling() {
      abortController.abort();
    },
    onProgress: httpPoller.onProgress,
    poll: httpPoller.poll,
    pollUntilDone: httpPoller.pollUntilDone,
    serialize: httpPoller.serialize,
    submitted: httpPoller.submitted,
  };
  return simplePoller;
}

/**
 * Converts a Rest Client response to a response that the LRO implementation understands
 * @param response - a rest client http response
 * @returns - An LRO response that the LRO implementation understands
 */
function getLroResponse<TResult extends HttpResponse>(
  response: TResult,
): OperationResponse<TResult> {
  if (Number.isNaN(response.status)) {
    throw new TypeError(
      `Status code of the response is not a number. Value: ${response.status}`,
    );
  }

  return {
    flatResponse: response,
    rawResponse: {
      ...response,
      statusCode: Number.parseInt(response.status),
      body: response.body,
    },
  };
}
