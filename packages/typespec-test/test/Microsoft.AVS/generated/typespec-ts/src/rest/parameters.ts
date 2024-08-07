// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import {
  Sku,
  PrivateCloud,
  PrivateCloudUpdate,
  Cluster,
  ClusterUpdate,
  Datastore,
  HcxEnterpriseSite,
  ExpressRouteAuthorization,
  GlobalReachConnection,
  WorkloadNetworkSegment,
  WorkloadNetworkDhcp,
  WorkloadNetworkPortMirroring,
  WorkloadNetworkVMGroup,
  WorkloadNetworkDnsService,
  WorkloadNetworkDnsZone,
  WorkloadNetworkPublicIP,
  CloudLink,
  Addon,
  VirtualMachineRestrictMovement,
  PlacementPolicy,
  PlacementPolicyUpdate,
  ScriptExecution,
  ScriptOutputStreamType,
  IscsiPath,
} from "./models.js";

export type OperationsListParameters = RequestParameters;

export interface LocationsCheckTrialAvailabilityBodyParam {
  /** Optionally, check for a specific SKU */
  body?: Sku;
}

export type LocationsCheckTrialAvailabilityParameters =
  LocationsCheckTrialAvailabilityBodyParam & RequestParameters;
export type LocationsCheckQuotaAvailabilityParameters = RequestParameters;
export type PrivateCloudsListByResourceGroupParameters = RequestParameters;
export type PrivateCloudsListInSubscriptionParameters = RequestParameters;
export type PrivateCloudsGetParameters = RequestParameters;

export interface PrivateCloudsCreateOrUpdateBodyParam {
  /** Resource create parameters. */
  body: PrivateCloud;
}

export type PrivateCloudsCreateOrUpdateParameters =
  PrivateCloudsCreateOrUpdateBodyParam & RequestParameters;

export interface PrivateCloudsUpdateBodyParam {
  /** The private cloud properties to be updated. */
  body: PrivateCloudUpdate;
}

export type PrivateCloudsUpdateParameters = PrivateCloudsUpdateBodyParam &
  RequestParameters;
export type PrivateCloudsDeleteParameters = RequestParameters;
export type PrivateCloudsRotateVcenterPasswordParameters = RequestParameters;
export type PrivateCloudsRotateNsxtPasswordParameters = RequestParameters;
export type PrivateCloudsListAdminCredentialsParameters = RequestParameters;
export type ClustersListByPrivateCloudParameters = RequestParameters;
export type ClustersGetParameters = RequestParameters;

export interface ClustersCreateOrUpdateBodyParam {
  /** Resource create parameters. */
  body: Cluster;
}

export type ClustersCreateOrUpdateParameters = ClustersCreateOrUpdateBodyParam &
  RequestParameters;

export interface ClustersUpdateBodyParam {
  /** The cluster properties to be updated. */
  body: ClusterUpdate;
}

export type ClustersUpdateParameters = ClustersUpdateBodyParam &
  RequestParameters;
export type ClustersDeleteParameters = RequestParameters;
export type ClustersListZonesParameters = RequestParameters;
export type DatastoresListByClusterParameters = RequestParameters;
export type DatastoresGetParameters = RequestParameters;

export interface DatastoresCreateOrUpdateBodyParam {
  /** Resource create parameters. */
  body: Datastore;
}

export type DatastoresCreateOrUpdateParameters =
  DatastoresCreateOrUpdateBodyParam & RequestParameters;
export type DatastoresDeleteParameters = RequestParameters;
export type HcxEnterpriseSitesListByPrivateCloudParameters = RequestParameters;
export type HcxEnterpriseSitesGetParameters = RequestParameters;

export interface HcxEnterpriseSitesCreateOrUpdateBodyParam {
  /** Resource create parameters. */
  body: HcxEnterpriseSite;
}

export type HcxEnterpriseSitesCreateOrUpdateParameters =
  HcxEnterpriseSitesCreateOrUpdateBodyParam & RequestParameters;
export type HcxEnterpriseSitesDeleteParameters = RequestParameters;
export type AuthorizationsListByPrivateCloudParameters = RequestParameters;
export type AuthorizationsGetParameters = RequestParameters;

export interface AuthorizationsCreateOrUpdateBodyParam {
  /** Resource create parameters. */
  body: ExpressRouteAuthorization;
}

export type AuthorizationsCreateOrUpdateParameters =
  AuthorizationsCreateOrUpdateBodyParam & RequestParameters;
export type AuthorizationsDeleteParameters = RequestParameters;
export type GlobalReachConnectionsListByPrivateCloudParameters =
  RequestParameters;
export type GlobalReachConnectionsGetParameters = RequestParameters;

export interface GlobalReachConnectionsCreateOrUpdateBodyParam {
  /** Resource create parameters. */
  body: GlobalReachConnection;
}

export type GlobalReachConnectionsCreateOrUpdateParameters =
  GlobalReachConnectionsCreateOrUpdateBodyParam & RequestParameters;
export type GlobalReachConnectionsDeleteParameters = RequestParameters;
export type WorkloadNetworksGetParameters = RequestParameters;
export type WorkloadNetworksListByPrivateCloudParameters = RequestParameters;
export type WorkloadNetworkSegmentsListByWorkloadNetworkParameters =
  RequestParameters;
export type WorkloadNetworkSegmentsGetParameters = RequestParameters;

export interface WorkloadNetworkSegmentsCreateBodyParam {
  /** Resource create parameters. */
  body: WorkloadNetworkSegment;
}

export type WorkloadNetworkSegmentsCreateParameters =
  WorkloadNetworkSegmentsCreateBodyParam & RequestParameters;

export interface WorkloadNetworkSegmentsUpdateBodyParam {
  /** The resource properties to be updated. */
  body: WorkloadNetworkSegment;
}

export type WorkloadNetworkSegmentsUpdateParameters =
  WorkloadNetworkSegmentsUpdateBodyParam & RequestParameters;
export type WorkloadNetworkSegmentsDeleteSegmentParameters = RequestParameters;
export type WorkloadNetworkDhcpConfigurationsListByWorkloadNetworkParameters =
  RequestParameters;
export type WorkloadNetworkDhcpConfigurationsGetParameters = RequestParameters;

export interface WorkloadNetworkDhcpConfigurationsCreateBodyParam {
  /** Resource create parameters. */
  body: WorkloadNetworkDhcp;
}

export type WorkloadNetworkDhcpConfigurationsCreateParameters =
  WorkloadNetworkDhcpConfigurationsCreateBodyParam & RequestParameters;

export interface WorkloadNetworkDhcpConfigurationsUpdateBodyParam {
  /** The resource properties to be updated. */
  body: WorkloadNetworkDhcp;
}

export type WorkloadNetworkDhcpConfigurationsUpdateParameters =
  WorkloadNetworkDhcpConfigurationsUpdateBodyParam & RequestParameters;
export type WorkloadNetworkDhcpConfigurationsDeleteParameters =
  RequestParameters;
export type WorkloadNetworkGatewaysListByWorkloadNetworkParameters =
  RequestParameters;
export type WorkloadNetworkGatewaysGetParameters = RequestParameters;
export type WorkloadNetworkPortMirroringProfilesListByWorkloadNetworkParameters =
  RequestParameters;
export type WorkloadNetworkPortMirroringProfilesGetParameters =
  RequestParameters;

export interface WorkloadNetworkPortMirroringProfilesCreateBodyParam {
  /** Resource create parameters. */
  body: WorkloadNetworkPortMirroring;
}

export type WorkloadNetworkPortMirroringProfilesCreateParameters =
  WorkloadNetworkPortMirroringProfilesCreateBodyParam & RequestParameters;

export interface WorkloadNetworkPortMirroringProfilesUpdateBodyParam {
  /** The resource properties to be updated. */
  body: WorkloadNetworkPortMirroring;
}

export type WorkloadNetworkPortMirroringProfilesUpdateParameters =
  WorkloadNetworkPortMirroringProfilesUpdateBodyParam & RequestParameters;
export type WorkloadNetworkPortMirroringProfilesDeleteParameters =
  RequestParameters;
export type WorkloadNetworkVmGroupsListByWorkloadNetworkParameters =
  RequestParameters;
export type WorkloadNetworkVmGroupsGetParameters = RequestParameters;

export interface WorkloadNetworkVmGroupsCreateBodyParam {
  /** Resource create parameters. */
  body: WorkloadNetworkVMGroup;
}

export type WorkloadNetworkVmGroupsCreateParameters =
  WorkloadNetworkVmGroupsCreateBodyParam & RequestParameters;

export interface WorkloadNetworkVmGroupsUpdateBodyParam {
  /** The resource properties to be updated. */
  body: WorkloadNetworkVMGroup;
}

export type WorkloadNetworkVmGroupsUpdateParameters =
  WorkloadNetworkVmGroupsUpdateBodyParam & RequestParameters;
export type WorkloadNetworkVmGroupsDeleteParameters = RequestParameters;
export type WorkloadNetworkVirtualMachinesListByWorkloadNetworkParameters =
  RequestParameters;
export type WorkloadNetworkVirtualMachinesGetParameters = RequestParameters;
export type WorkloadNetworkDnsServicesListByWorkloadNetworkParameters =
  RequestParameters;
export type WorkloadNetworkDnsServicesGetParameters = RequestParameters;

export interface WorkloadNetworkDnsServicesCreateBodyParam {
  /** Resource create parameters. */
  body: WorkloadNetworkDnsService;
}

export type WorkloadNetworkDnsServicesCreateParameters =
  WorkloadNetworkDnsServicesCreateBodyParam & RequestParameters;

export interface WorkloadNetworkDnsServicesUpdateBodyParam {
  /** The resource properties to be updated. */
  body: WorkloadNetworkDnsService;
}

export type WorkloadNetworkDnsServicesUpdateParameters =
  WorkloadNetworkDnsServicesUpdateBodyParam & RequestParameters;
export type WorkloadNetworkDnsServicesDeleteParameters = RequestParameters;
export type WorkloadNetworkDnsZonesListByWorkloadNetworkParameters =
  RequestParameters;
export type WorkloadNetworkDnsZonesGetParameters = RequestParameters;

export interface WorkloadNetworkDnsZonesCreateBodyParam {
  /** Resource create parameters. */
  body: WorkloadNetworkDnsZone;
}

export type WorkloadNetworkDnsZonesCreateParameters =
  WorkloadNetworkDnsZonesCreateBodyParam & RequestParameters;

export interface WorkloadNetworkDnsZonesUpdateBodyParam {
  /** The resource properties to be updated. */
  body: WorkloadNetworkDnsZone;
}

export type WorkloadNetworkDnsZonesUpdateParameters =
  WorkloadNetworkDnsZonesUpdateBodyParam & RequestParameters;
export type WorkloadNetworkDnsZonesDeleteParameters = RequestParameters;
export type WorkloadNetworkPublicIpsListByWorkloadNetworkParameters =
  RequestParameters;
export type WorkloadNetworkPublicIpsGetParameters = RequestParameters;

export interface WorkloadNetworkPublicIpsCreateBodyParam {
  /** Resource create parameters. */
  body: WorkloadNetworkPublicIP;
}

export type WorkloadNetworkPublicIpsCreateParameters =
  WorkloadNetworkPublicIpsCreateBodyParam & RequestParameters;
export type WorkloadNetworkPublicIpsDeleteParameters = RequestParameters;
export type CloudLinksListByPrivateCloudParameters = RequestParameters;
export type CloudLinksGetParameters = RequestParameters;

export interface CloudLinksCreateOrUpdateBodyParam {
  /** Resource create parameters. */
  body: CloudLink;
}

export type CloudLinksCreateOrUpdateParameters =
  CloudLinksCreateOrUpdateBodyParam & RequestParameters;
export type CloudLinksDeleteParameters = RequestParameters;
export type AddonsListByPrivateCloudParameters = RequestParameters;
export type AddonsGetParameters = RequestParameters;

export interface AddonsCreateOrUpdateBodyParam {
  /** Resource create parameters. */
  body: Addon;
}

export type AddonsCreateOrUpdateParameters = AddonsCreateOrUpdateBodyParam &
  RequestParameters;
export type AddonsDeleteParameters = RequestParameters;
export type VirtualMachinesListByClusterParameters = RequestParameters;
export type VirtualMachinesGetParameters = RequestParameters;

export interface VirtualMachinesRestrictMovementBodyParam {
  /** The body type of the operation request. */
  body: VirtualMachineRestrictMovement;
}

export type VirtualMachinesRestrictMovementParameters =
  VirtualMachinesRestrictMovementBodyParam & RequestParameters;
export type PlacementPoliciesListByClusterParameters = RequestParameters;
export type PlacementPoliciesGetParameters = RequestParameters;

export interface PlacementPoliciesCreateOrUpdateBodyParam {
  /** Resource create parameters. */
  body: PlacementPolicy;
}

export type PlacementPoliciesCreateOrUpdateParameters =
  PlacementPoliciesCreateOrUpdateBodyParam & RequestParameters;

export interface PlacementPoliciesUpdateBodyParam {
  /** The placement policy properties to be updated. */
  body: PlacementPolicyUpdate;
}

export type PlacementPoliciesUpdateParameters =
  PlacementPoliciesUpdateBodyParam & RequestParameters;
export type PlacementPoliciesDeleteParameters = RequestParameters;
export type ScriptPackagesListByPrivateCloudParameters = RequestParameters;
export type ScriptPackagesGetParameters = RequestParameters;
export type ScriptCmdletsListByScriptPackageParameters = RequestParameters;
export type ScriptCmdletsGetParameters = RequestParameters;
export type ScriptExecutionsListByPrivateCloudParameters = RequestParameters;
export type ScriptExecutionsGetParameters = RequestParameters;

export interface ScriptExecutionsCreateOrUpdateBodyParam {
  /** Resource create parameters. */
  body: ScriptExecution;
}

export type ScriptExecutionsCreateOrUpdateParameters =
  ScriptExecutionsCreateOrUpdateBodyParam & RequestParameters;
export type ScriptExecutionsDeleteParameters = RequestParameters;

export interface ScriptExecutionsGetExecutionLogsBodyParam {
  /** Name of the desired output stream to return. If not provided, will return all. An empty array will return nothing. */
  body?: ScriptOutputStreamType[];
}

export type ScriptExecutionsGetExecutionLogsParameters =
  ScriptExecutionsGetExecutionLogsBodyParam & RequestParameters;
export type IscsiPathsListByPrivateCloudParameters = RequestParameters;
export type IscsiPathsGetParameters = RequestParameters;

export interface IscsiPathsCreateOrUpdateBodyParam {
  /** Resource create parameters. */
  body: IscsiPath;
}

export type IscsiPathsCreateOrUpdateParameters =
  IscsiPathsCreateOrUpdateBodyParam & RequestParameters;
export type IscsiPathsDeleteParameters = RequestParameters;
