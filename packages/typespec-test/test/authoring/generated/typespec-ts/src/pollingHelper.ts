// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Client, HttpResponse } from "@azure-rest/core-client";
import {
  CreateHttpPollerOptions,
  LongRunningOperation,
  LroResponse,
  OperationState,
  SimplePollerLike,
  createHttpPoller,
} from "@azure/core-lro";
import {
  CreateOrUpdate200Response,
  CreateOrUpdate201Response,
  CreateOrUpdateDefaultResponse,
  CreateOrUpdateLogicalResponse,
  DeleteOperation202Response,
  DeleteOperationDefaultResponse,
  DeleteLogicalResponse,
  ExportOperation202Response,
  ExportOperationDefaultResponse,
  ExportLogicalResponse,
  Importx202Response,
  ImportxDefaultResponse,
  ImportxLogicalResponse,
  Train202Response,
  TrainDefaultResponse,
  TrainLogicalResponse,
  DeployProject200Response,
  DeployProject201Response,
  DeployProjectDefaultResponse,
  DeployProjectLogicalResponse,
  DeleteDeployment202Response,
  DeleteDeploymentDefaultResponse,
  DeleteDeploymentLogicalResponse,
  SwapDeployments202Response,
  SwapDeploymentsDefaultResponse,
  SwapDeploymentsLogicalResponse,
} from "./responses";
/**
 * Helper function that builds a Poller object to help polling a long running operation.
 * @param client - Client to use for sending the request to get additional pages.
 * @param initialResponse - The initial response.
 * @param options - Options to set a resume state or custom polling interval.
 * @returns - A poller object to poll for operation state updates and eventually get the final response.
 */
export async function getLongRunningPoller<
  TResult extends CreateOrUpdateLogicalResponse | CreateOrUpdateDefaultResponse,
>(
  client: Client,
  initialResponse:
    | CreateOrUpdate200Response
    | CreateOrUpdate201Response
    | CreateOrUpdateDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends DeleteLogicalResponse | DeleteOperationDefaultResponse,
>(
  client: Client,
  initialResponse: DeleteOperation202Response | DeleteOperationDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends ExportLogicalResponse | ExportOperationDefaultResponse,
>(
  client: Client,
  initialResponse: ExportOperation202Response | ExportOperationDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends ImportxLogicalResponse | ImportxDefaultResponse,
>(
  client: Client,
  initialResponse: Importx202Response | ImportxDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends TrainLogicalResponse | TrainDefaultResponse,
>(
  client: Client,
  initialResponse: Train202Response | TrainDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends DeployProjectLogicalResponse | DeployProjectDefaultResponse,
>(
  client: Client,
  initialResponse:
    | DeployProject200Response
    | DeployProject201Response
    | DeployProjectDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | DeleteDeploymentLogicalResponse
    | DeleteDeploymentDefaultResponse,
>(
  client: Client,
  initialResponse:
    | DeleteDeployment202Response
    | DeleteDeploymentDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | SwapDeploymentsLogicalResponse
    | SwapDeploymentsDefaultResponse,
>(
  client: Client,
  initialResponse: SwapDeployments202Response | SwapDeploymentsDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<TResult extends HttpResponse>(
  client: Client,
  initialResponse: TResult,
  options: CreateHttpPollerOptions<TResult, OperationState<TResult>> = {},
): Promise<SimplePollerLike<OperationState<TResult>, TResult>> {
  const poller: LongRunningOperation<TResult> = {
    requestMethod: initialResponse.request.method,
    requestPath: initialResponse.request.url,
    sendInitialRequest: async () => {
      // In the case of Rest Clients we are building the LRO poller object from a response that's the reason
      // we are not triggering the initial request here, just extracting the information from the
      // response we were provided.
      return getLroResponse(initialResponse);
    },
    sendPollRequest: async (path) => {
      // This is the callback that is going to be called to poll the service
      // to get the latest status. We use the client provided and the polling path
      // which is an opaque URL provided by caller, the service sends this in one of the following headers: operation-location, azure-asyncoperation or location
      // depending on the lro pattern that the service implements. If non is provided we default to the initial path.
      const response = await client
        .pathUnchecked(path ?? initialResponse.request.url)
        .get();
      const lroResponse = getLroResponse(response as TResult);
      lroResponse.rawResponse.headers["x-ms-original-url"] =
        initialResponse.request.url;
      return lroResponse;
    },
  };

  options.resolveOnUnsuccessful = options.resolveOnUnsuccessful ?? true;
  return createHttpPoller(poller, options);
}

/**
 * Converts a Rest Client response to a response that the LRO implementation understands
 * @param response - a rest client http response
 * @returns - An LRO response that the LRO implementation understands
 */
function getLroResponse<TResult extends HttpResponse>(
  response: TResult,
): LroResponse<TResult> {
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
