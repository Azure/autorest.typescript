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
  PrivateCloudsCreateOrUpdate200Response,
  PrivateCloudsCreateOrUpdate201Response,
  PrivateCloudsCreateOrUpdateDefaultResponse,
  PrivateCloudsCreateOrUpdateLogicalResponse,
  PrivateCloudsDelete200Response,
  PrivateCloudsDelete202Response,
  PrivateCloudsDelete204Response,
  PrivateCloudsDeleteDefaultResponse,
  PrivateCloudsDeleteLogicalResponse,
  PrivateCloudsRotateVcenterPassword202Response,
  PrivateCloudsRotateVcenterPassword204Response,
  PrivateCloudsRotateVcenterPasswordDefaultResponse,
  PrivateCloudsRotateVcenterPasswordLogicalResponse,
  PrivateCloudsRotateNsxtPassword202Response,
  PrivateCloudsRotateNsxtPassword204Response,
  PrivateCloudsRotateNsxtPasswordDefaultResponse,
  PrivateCloudsRotateNsxtPasswordLogicalResponse,
  ClustersCreateOrUpdate200Response,
  ClustersCreateOrUpdate201Response,
  ClustersCreateOrUpdateDefaultResponse,
  ClustersCreateOrUpdateLogicalResponse,
  ClustersDelete200Response,
  ClustersDelete202Response,
  ClustersDelete204Response,
  ClustersDeleteDefaultResponse,
  ClustersDeleteLogicalResponse,
  DatastoresCreateOrUpdate200Response,
  DatastoresCreateOrUpdate201Response,
  DatastoresCreateOrUpdateDefaultResponse,
  DatastoresCreateOrUpdateLogicalResponse,
  DatastoresDelete200Response,
  DatastoresDelete202Response,
  DatastoresDelete204Response,
  DatastoresDeleteDefaultResponse,
  DatastoresDeleteLogicalResponse,
  AuthorizationsCreateOrUpdate200Response,
  AuthorizationsCreateOrUpdate201Response,
  AuthorizationsCreateOrUpdateDefaultResponse,
  AuthorizationsCreateOrUpdateLogicalResponse,
  AuthorizationsDelete200Response,
  AuthorizationsDelete202Response,
  AuthorizationsDelete204Response,
  AuthorizationsDeleteDefaultResponse,
  AuthorizationsDeleteLogicalResponse,
  GlobalReachConnectionsCreateOrUpdate200Response,
  GlobalReachConnectionsCreateOrUpdate201Response,
  GlobalReachConnectionsCreateOrUpdateDefaultResponse,
  GlobalReachConnectionsCreateOrUpdateLogicalResponse,
  GlobalReachConnectionsDelete200Response,
  GlobalReachConnectionsDelete202Response,
  GlobalReachConnectionsDelete204Response,
  GlobalReachConnectionsDeleteDefaultResponse,
  GlobalReachConnectionsDeleteLogicalResponse,
  WorkloadNetworkSegmentsCreate200Response,
  WorkloadNetworkSegmentsCreate201Response,
  WorkloadNetworkSegmentsCreateDefaultResponse,
  WorkloadNetworkSegmentsCreateLogicalResponse,
  WorkloadNetworkSegmentsUpdate200Response,
  WorkloadNetworkSegmentsUpdate202Response,
  WorkloadNetworkSegmentsUpdateDefaultResponse,
  WorkloadNetworkSegmentsUpdateLogicalResponse,
  WorkloadNetworkSegmentsDeleteSegment200Response,
  WorkloadNetworkSegmentsDeleteSegment202Response,
  WorkloadNetworkSegmentsDeleteSegment204Response,
  WorkloadNetworkSegmentsDeleteSegmentDefaultResponse,
  WorkloadNetworkSegmentsDeleteSegmentLogicalResponse,
  WorkloadNetworkDhcpConfigurationsCreate200Response,
  WorkloadNetworkDhcpConfigurationsCreate201Response,
  WorkloadNetworkDhcpConfigurationsCreateDefaultResponse,
  WorkloadNetworkDhcpConfigurationsCreateLogicalResponse,
  WorkloadNetworkDhcpConfigurationsUpdate200Response,
  WorkloadNetworkDhcpConfigurationsUpdate202Response,
  WorkloadNetworkDhcpConfigurationsUpdateDefaultResponse,
  WorkloadNetworkDhcpConfigurationsUpdateLogicalResponse,
  WorkloadNetworkDhcpConfigurationsDelete200Response,
  WorkloadNetworkDhcpConfigurationsDelete202Response,
  WorkloadNetworkDhcpConfigurationsDelete204Response,
  WorkloadNetworkDhcpConfigurationsDeleteDefaultResponse,
  WorkloadNetworkDhcpConfigurationsDeleteLogicalResponse,
  WorkloadNetworkPortMirroringProfilesCreate200Response,
  WorkloadNetworkPortMirroringProfilesCreate201Response,
  WorkloadNetworkPortMirroringProfilesCreateDefaultResponse,
  WorkloadNetworkPortMirroringProfilesCreateLogicalResponse,
  WorkloadNetworkPortMirroringProfilesUpdate200Response,
  WorkloadNetworkPortMirroringProfilesUpdate202Response,
  WorkloadNetworkPortMirroringProfilesUpdateDefaultResponse,
  WorkloadNetworkPortMirroringProfilesUpdateLogicalResponse,
  WorkloadNetworkPortMirroringProfilesDelete200Response,
  WorkloadNetworkPortMirroringProfilesDelete202Response,
  WorkloadNetworkPortMirroringProfilesDelete204Response,
  WorkloadNetworkPortMirroringProfilesDeleteDefaultResponse,
  WorkloadNetworkPortMirroringProfilesDeleteLogicalResponse,
  WorkloadNetworkVmGroupsCreate200Response,
  WorkloadNetworkVmGroupsCreate201Response,
  WorkloadNetworkVmGroupsCreateDefaultResponse,
  WorkloadNetworkVmGroupsCreateLogicalResponse,
  WorkloadNetworkVmGroupsUpdate200Response,
  WorkloadNetworkVmGroupsUpdate202Response,
  WorkloadNetworkVmGroupsUpdateDefaultResponse,
  WorkloadNetworkVmGroupsUpdateLogicalResponse,
  WorkloadNetworkVmGroupsDelete200Response,
  WorkloadNetworkVmGroupsDelete202Response,
  WorkloadNetworkVmGroupsDelete204Response,
  WorkloadNetworkVmGroupsDeleteDefaultResponse,
  WorkloadNetworkVmGroupsDeleteLogicalResponse,
  WorkloadNetworkDnsServicesCreate200Response,
  WorkloadNetworkDnsServicesCreate201Response,
  WorkloadNetworkDnsServicesCreateDefaultResponse,
  WorkloadNetworkDnsServicesCreateLogicalResponse,
  WorkloadNetworkDnsServicesUpdate200Response,
  WorkloadNetworkDnsServicesUpdate202Response,
  WorkloadNetworkDnsServicesUpdateDefaultResponse,
  WorkloadNetworkDnsServicesUpdateLogicalResponse,
  WorkloadNetworkDnsServicesDelete200Response,
  WorkloadNetworkDnsServicesDelete202Response,
  WorkloadNetworkDnsServicesDelete204Response,
  WorkloadNetworkDnsServicesDeleteDefaultResponse,
  WorkloadNetworkDnsServicesDeleteLogicalResponse,
  WorkloadNetworkDnsZonesCreate200Response,
  WorkloadNetworkDnsZonesCreate201Response,
  WorkloadNetworkDnsZonesCreateDefaultResponse,
  WorkloadNetworkDnsZonesCreateLogicalResponse,
  WorkloadNetworkDnsZonesUpdate200Response,
  WorkloadNetworkDnsZonesUpdate202Response,
  WorkloadNetworkDnsZonesUpdateDefaultResponse,
  WorkloadNetworkDnsZonesUpdateLogicalResponse,
  WorkloadNetworkDnsZonesDelete200Response,
  WorkloadNetworkDnsZonesDelete202Response,
  WorkloadNetworkDnsZonesDelete204Response,
  WorkloadNetworkDnsZonesDeleteDefaultResponse,
  WorkloadNetworkDnsZonesDeleteLogicalResponse,
  WorkloadNetworkPublicIpsCreate200Response,
  WorkloadNetworkPublicIpsCreate201Response,
  WorkloadNetworkPublicIpsCreateDefaultResponse,
  WorkloadNetworkPublicIpsCreateLogicalResponse,
  WorkloadNetworkPublicIpsDelete200Response,
  WorkloadNetworkPublicIpsDelete202Response,
  WorkloadNetworkPublicIpsDelete204Response,
  WorkloadNetworkPublicIpsDeleteDefaultResponse,
  WorkloadNetworkPublicIpsDeleteLogicalResponse,
  CloudLinksCreateOrUpdate200Response,
  CloudLinksCreateOrUpdate201Response,
  CloudLinksCreateOrUpdateDefaultResponse,
  CloudLinksCreateOrUpdateLogicalResponse,
  CloudLinksDelete200Response,
  CloudLinksDelete202Response,
  CloudLinksDelete204Response,
  CloudLinksDeleteDefaultResponse,
  CloudLinksDeleteLogicalResponse,
  AddonsCreateOrUpdate200Response,
  AddonsCreateOrUpdate201Response,
  AddonsCreateOrUpdateDefaultResponse,
  AddonsCreateOrUpdateLogicalResponse,
  AddonsDelete200Response,
  AddonsDelete202Response,
  AddonsDelete204Response,
  AddonsDeleteDefaultResponse,
  AddonsDeleteLogicalResponse,
  VirtualMachinesRestrictMovement202Response,
  VirtualMachinesRestrictMovementDefaultResponse,
  VirtualMachinesRestrictMovementLogicalResponse,
  PlacementPoliciesCreateOrUpdate200Response,
  PlacementPoliciesCreateOrUpdate201Response,
  PlacementPoliciesCreateOrUpdateDefaultResponse,
  PlacementPoliciesCreateOrUpdateLogicalResponse,
  PlacementPoliciesDelete200Response,
  PlacementPoliciesDelete202Response,
  PlacementPoliciesDelete204Response,
  PlacementPoliciesDeleteDefaultResponse,
  PlacementPoliciesDeleteLogicalResponse,
  ScriptExecutionsCreateOrUpdate200Response,
  ScriptExecutionsCreateOrUpdate201Response,
  ScriptExecutionsCreateOrUpdateDefaultResponse,
  ScriptExecutionsCreateOrUpdateLogicalResponse,
  ScriptExecutionsDelete200Response,
  ScriptExecutionsDelete202Response,
  ScriptExecutionsDelete204Response,
  ScriptExecutionsDeleteDefaultResponse,
  ScriptExecutionsDeleteLogicalResponse,
  IscsiPathsCreateOrUpdate200Response,
  IscsiPathsCreateOrUpdate201Response,
  IscsiPathsCreateOrUpdateDefaultResponse,
  IscsiPathsCreateOrUpdateLogicalResponse,
  IscsiPathsDelete200Response,
  IscsiPathsDelete202Response,
  IscsiPathsDelete204Response,
  IscsiPathsDeleteDefaultResponse,
  IscsiPathsDeleteLogicalResponse,
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
    | PrivateCloudsCreateOrUpdateLogicalResponse
    | PrivateCloudsCreateOrUpdateDefaultResponse,
>(
  client: Client,
  initialResponse:
    | PrivateCloudsCreateOrUpdate200Response
    | PrivateCloudsCreateOrUpdate201Response
    | PrivateCloudsCreateOrUpdateDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | PrivateCloudsDeleteLogicalResponse
    | PrivateCloudsDeleteDefaultResponse,
>(
  client: Client,
  initialResponse:
    | PrivateCloudsDelete200Response
    | PrivateCloudsDelete202Response
    | PrivateCloudsDelete204Response
    | PrivateCloudsDeleteDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | PrivateCloudsRotateVcenterPasswordLogicalResponse
    | PrivateCloudsRotateVcenterPasswordDefaultResponse,
>(
  client: Client,
  initialResponse:
    | PrivateCloudsRotateVcenterPassword202Response
    | PrivateCloudsRotateVcenterPassword204Response
    | PrivateCloudsRotateVcenterPasswordDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | PrivateCloudsRotateNsxtPasswordLogicalResponse
    | PrivateCloudsRotateNsxtPasswordDefaultResponse,
>(
  client: Client,
  initialResponse:
    | PrivateCloudsRotateNsxtPassword202Response
    | PrivateCloudsRotateNsxtPassword204Response
    | PrivateCloudsRotateNsxtPasswordDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | ClustersCreateOrUpdateLogicalResponse
    | ClustersCreateOrUpdateDefaultResponse,
>(
  client: Client,
  initialResponse:
    | ClustersCreateOrUpdate200Response
    | ClustersCreateOrUpdate201Response
    | ClustersCreateOrUpdateDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends ClustersDeleteLogicalResponse | ClustersDeleteDefaultResponse,
>(
  client: Client,
  initialResponse:
    | ClustersDelete200Response
    | ClustersDelete202Response
    | ClustersDelete204Response
    | ClustersDeleteDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | DatastoresCreateOrUpdateLogicalResponse
    | DatastoresCreateOrUpdateDefaultResponse,
>(
  client: Client,
  initialResponse:
    | DatastoresCreateOrUpdate200Response
    | DatastoresCreateOrUpdate201Response
    | DatastoresCreateOrUpdateDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | DatastoresDeleteLogicalResponse
    | DatastoresDeleteDefaultResponse,
>(
  client: Client,
  initialResponse:
    | DatastoresDelete200Response
    | DatastoresDelete202Response
    | DatastoresDelete204Response
    | DatastoresDeleteDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | AuthorizationsCreateOrUpdateLogicalResponse
    | AuthorizationsCreateOrUpdateDefaultResponse,
>(
  client: Client,
  initialResponse:
    | AuthorizationsCreateOrUpdate200Response
    | AuthorizationsCreateOrUpdate201Response
    | AuthorizationsCreateOrUpdateDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | AuthorizationsDeleteLogicalResponse
    | AuthorizationsDeleteDefaultResponse,
>(
  client: Client,
  initialResponse:
    | AuthorizationsDelete200Response
    | AuthorizationsDelete202Response
    | AuthorizationsDelete204Response
    | AuthorizationsDeleteDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | GlobalReachConnectionsCreateOrUpdateLogicalResponse
    | GlobalReachConnectionsCreateOrUpdateDefaultResponse,
>(
  client: Client,
  initialResponse:
    | GlobalReachConnectionsCreateOrUpdate200Response
    | GlobalReachConnectionsCreateOrUpdate201Response
    | GlobalReachConnectionsCreateOrUpdateDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | GlobalReachConnectionsDeleteLogicalResponse
    | GlobalReachConnectionsDeleteDefaultResponse,
>(
  client: Client,
  initialResponse:
    | GlobalReachConnectionsDelete200Response
    | GlobalReachConnectionsDelete202Response
    | GlobalReachConnectionsDelete204Response
    | GlobalReachConnectionsDeleteDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | WorkloadNetworkSegmentsCreateLogicalResponse
    | WorkloadNetworkSegmentsCreateDefaultResponse,
>(
  client: Client,
  initialResponse:
    | WorkloadNetworkSegmentsCreate200Response
    | WorkloadNetworkSegmentsCreate201Response
    | WorkloadNetworkSegmentsCreateDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | WorkloadNetworkSegmentsUpdateLogicalResponse
    | WorkloadNetworkSegmentsUpdateDefaultResponse,
>(
  client: Client,
  initialResponse:
    | WorkloadNetworkSegmentsUpdate200Response
    | WorkloadNetworkSegmentsUpdate202Response
    | WorkloadNetworkSegmentsUpdateDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | WorkloadNetworkSegmentsDeleteSegmentLogicalResponse
    | WorkloadNetworkSegmentsDeleteSegmentDefaultResponse,
>(
  client: Client,
  initialResponse:
    | WorkloadNetworkSegmentsDeleteSegment200Response
    | WorkloadNetworkSegmentsDeleteSegment202Response
    | WorkloadNetworkSegmentsDeleteSegment204Response
    | WorkloadNetworkSegmentsDeleteSegmentDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | WorkloadNetworkDhcpConfigurationsCreateLogicalResponse
    | WorkloadNetworkDhcpConfigurationsCreateDefaultResponse,
>(
  client: Client,
  initialResponse:
    | WorkloadNetworkDhcpConfigurationsCreate200Response
    | WorkloadNetworkDhcpConfigurationsCreate201Response
    | WorkloadNetworkDhcpConfigurationsCreateDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | WorkloadNetworkDhcpConfigurationsUpdateLogicalResponse
    | WorkloadNetworkDhcpConfigurationsUpdateDefaultResponse,
>(
  client: Client,
  initialResponse:
    | WorkloadNetworkDhcpConfigurationsUpdate200Response
    | WorkloadNetworkDhcpConfigurationsUpdate202Response
    | WorkloadNetworkDhcpConfigurationsUpdateDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | WorkloadNetworkDhcpConfigurationsDeleteLogicalResponse
    | WorkloadNetworkDhcpConfigurationsDeleteDefaultResponse,
>(
  client: Client,
  initialResponse:
    | WorkloadNetworkDhcpConfigurationsDelete200Response
    | WorkloadNetworkDhcpConfigurationsDelete202Response
    | WorkloadNetworkDhcpConfigurationsDelete204Response
    | WorkloadNetworkDhcpConfigurationsDeleteDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | WorkloadNetworkPortMirroringProfilesCreateLogicalResponse
    | WorkloadNetworkPortMirroringProfilesCreateDefaultResponse,
>(
  client: Client,
  initialResponse:
    | WorkloadNetworkPortMirroringProfilesCreate200Response
    | WorkloadNetworkPortMirroringProfilesCreate201Response
    | WorkloadNetworkPortMirroringProfilesCreateDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | WorkloadNetworkPortMirroringProfilesUpdateLogicalResponse
    | WorkloadNetworkPortMirroringProfilesUpdateDefaultResponse,
>(
  client: Client,
  initialResponse:
    | WorkloadNetworkPortMirroringProfilesUpdate200Response
    | WorkloadNetworkPortMirroringProfilesUpdate202Response
    | WorkloadNetworkPortMirroringProfilesUpdateDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | WorkloadNetworkPortMirroringProfilesDeleteLogicalResponse
    | WorkloadNetworkPortMirroringProfilesDeleteDefaultResponse,
>(
  client: Client,
  initialResponse:
    | WorkloadNetworkPortMirroringProfilesDelete200Response
    | WorkloadNetworkPortMirroringProfilesDelete202Response
    | WorkloadNetworkPortMirroringProfilesDelete204Response
    | WorkloadNetworkPortMirroringProfilesDeleteDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | WorkloadNetworkVmGroupsCreateLogicalResponse
    | WorkloadNetworkVmGroupsCreateDefaultResponse,
>(
  client: Client,
  initialResponse:
    | WorkloadNetworkVmGroupsCreate200Response
    | WorkloadNetworkVmGroupsCreate201Response
    | WorkloadNetworkVmGroupsCreateDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | WorkloadNetworkVmGroupsUpdateLogicalResponse
    | WorkloadNetworkVmGroupsUpdateDefaultResponse,
>(
  client: Client,
  initialResponse:
    | WorkloadNetworkVmGroupsUpdate200Response
    | WorkloadNetworkVmGroupsUpdate202Response
    | WorkloadNetworkVmGroupsUpdateDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | WorkloadNetworkVmGroupsDeleteLogicalResponse
    | WorkloadNetworkVmGroupsDeleteDefaultResponse,
>(
  client: Client,
  initialResponse:
    | WorkloadNetworkVmGroupsDelete200Response
    | WorkloadNetworkVmGroupsDelete202Response
    | WorkloadNetworkVmGroupsDelete204Response
    | WorkloadNetworkVmGroupsDeleteDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | WorkloadNetworkDnsServicesCreateLogicalResponse
    | WorkloadNetworkDnsServicesCreateDefaultResponse,
>(
  client: Client,
  initialResponse:
    | WorkloadNetworkDnsServicesCreate200Response
    | WorkloadNetworkDnsServicesCreate201Response
    | WorkloadNetworkDnsServicesCreateDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | WorkloadNetworkDnsServicesUpdateLogicalResponse
    | WorkloadNetworkDnsServicesUpdateDefaultResponse,
>(
  client: Client,
  initialResponse:
    | WorkloadNetworkDnsServicesUpdate200Response
    | WorkloadNetworkDnsServicesUpdate202Response
    | WorkloadNetworkDnsServicesUpdateDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | WorkloadNetworkDnsServicesDeleteLogicalResponse
    | WorkloadNetworkDnsServicesDeleteDefaultResponse,
>(
  client: Client,
  initialResponse:
    | WorkloadNetworkDnsServicesDelete200Response
    | WorkloadNetworkDnsServicesDelete202Response
    | WorkloadNetworkDnsServicesDelete204Response
    | WorkloadNetworkDnsServicesDeleteDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | WorkloadNetworkDnsZonesCreateLogicalResponse
    | WorkloadNetworkDnsZonesCreateDefaultResponse,
>(
  client: Client,
  initialResponse:
    | WorkloadNetworkDnsZonesCreate200Response
    | WorkloadNetworkDnsZonesCreate201Response
    | WorkloadNetworkDnsZonesCreateDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | WorkloadNetworkDnsZonesUpdateLogicalResponse
    | WorkloadNetworkDnsZonesUpdateDefaultResponse,
>(
  client: Client,
  initialResponse:
    | WorkloadNetworkDnsZonesUpdate200Response
    | WorkloadNetworkDnsZonesUpdate202Response
    | WorkloadNetworkDnsZonesUpdateDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | WorkloadNetworkDnsZonesDeleteLogicalResponse
    | WorkloadNetworkDnsZonesDeleteDefaultResponse,
>(
  client: Client,
  initialResponse:
    | WorkloadNetworkDnsZonesDelete200Response
    | WorkloadNetworkDnsZonesDelete202Response
    | WorkloadNetworkDnsZonesDelete204Response
    | WorkloadNetworkDnsZonesDeleteDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | WorkloadNetworkPublicIpsCreateLogicalResponse
    | WorkloadNetworkPublicIpsCreateDefaultResponse,
>(
  client: Client,
  initialResponse:
    | WorkloadNetworkPublicIpsCreate200Response
    | WorkloadNetworkPublicIpsCreate201Response
    | WorkloadNetworkPublicIpsCreateDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | WorkloadNetworkPublicIpsDeleteLogicalResponse
    | WorkloadNetworkPublicIpsDeleteDefaultResponse,
>(
  client: Client,
  initialResponse:
    | WorkloadNetworkPublicIpsDelete200Response
    | WorkloadNetworkPublicIpsDelete202Response
    | WorkloadNetworkPublicIpsDelete204Response
    | WorkloadNetworkPublicIpsDeleteDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | CloudLinksCreateOrUpdateLogicalResponse
    | CloudLinksCreateOrUpdateDefaultResponse,
>(
  client: Client,
  initialResponse:
    | CloudLinksCreateOrUpdate200Response
    | CloudLinksCreateOrUpdate201Response
    | CloudLinksCreateOrUpdateDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | CloudLinksDeleteLogicalResponse
    | CloudLinksDeleteDefaultResponse,
>(
  client: Client,
  initialResponse:
    | CloudLinksDelete200Response
    | CloudLinksDelete202Response
    | CloudLinksDelete204Response
    | CloudLinksDeleteDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | AddonsCreateOrUpdateLogicalResponse
    | AddonsCreateOrUpdateDefaultResponse,
>(
  client: Client,
  initialResponse:
    | AddonsCreateOrUpdate200Response
    | AddonsCreateOrUpdate201Response
    | AddonsCreateOrUpdateDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends AddonsDeleteLogicalResponse | AddonsDeleteDefaultResponse,
>(
  client: Client,
  initialResponse:
    | AddonsDelete200Response
    | AddonsDelete202Response
    | AddonsDelete204Response
    | AddonsDeleteDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | VirtualMachinesRestrictMovementLogicalResponse
    | VirtualMachinesRestrictMovementDefaultResponse,
>(
  client: Client,
  initialResponse:
    | VirtualMachinesRestrictMovement202Response
    | VirtualMachinesRestrictMovementDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | PlacementPoliciesCreateOrUpdateLogicalResponse
    | PlacementPoliciesCreateOrUpdateDefaultResponse,
>(
  client: Client,
  initialResponse:
    | PlacementPoliciesCreateOrUpdate200Response
    | PlacementPoliciesCreateOrUpdate201Response
    | PlacementPoliciesCreateOrUpdateDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | PlacementPoliciesDeleteLogicalResponse
    | PlacementPoliciesDeleteDefaultResponse,
>(
  client: Client,
  initialResponse:
    | PlacementPoliciesDelete200Response
    | PlacementPoliciesDelete202Response
    | PlacementPoliciesDelete204Response
    | PlacementPoliciesDeleteDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | ScriptExecutionsCreateOrUpdateLogicalResponse
    | ScriptExecutionsCreateOrUpdateDefaultResponse,
>(
  client: Client,
  initialResponse:
    | ScriptExecutionsCreateOrUpdate200Response
    | ScriptExecutionsCreateOrUpdate201Response
    | ScriptExecutionsCreateOrUpdateDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | ScriptExecutionsDeleteLogicalResponse
    | ScriptExecutionsDeleteDefaultResponse,
>(
  client: Client,
  initialResponse:
    | ScriptExecutionsDelete200Response
    | ScriptExecutionsDelete202Response
    | ScriptExecutionsDelete204Response
    | ScriptExecutionsDeleteDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | IscsiPathsCreateOrUpdateLogicalResponse
    | IscsiPathsCreateOrUpdateDefaultResponse,
>(
  client: Client,
  initialResponse:
    | IscsiPathsCreateOrUpdate200Response
    | IscsiPathsCreateOrUpdate201Response
    | IscsiPathsCreateOrUpdateDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | IscsiPathsDeleteLogicalResponse
    | IscsiPathsDeleteDefaultResponse,
>(
  client: Client,
  initialResponse:
    | IscsiPathsDelete200Response
    | IscsiPathsDelete202Response
    | IscsiPathsDelete204Response
    | IscsiPathsDeleteDefaultResponse,
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
      pollOptions?: { abortSignal?: AbortSignalLike },
    ) => {
      // This is the callback that is going to be called to poll the service
      // to get the latest status. We use the client provided and the polling path
      // which is an opaque URL provided by caller, the service sends this in one of the following headers: operation-location, azure-asyncoperation or location
      // depending on the lro pattern that the service implements. If non is provided we default to the initial path.
      function abortListener(): void {
        abortController.abort();
      }
      const inputAbortSignal = pollOptions?.abortSignal;
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
