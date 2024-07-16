// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface OperationsListOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface LocationsCheckTrialAvailabilityOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface LocationsCheckQuotaAvailabilityOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface PrivateCloudsListByResourceGroupOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface PrivateCloudsListInSubscriptionOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface PrivateCloudsGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface PrivateCloudsCreateOrUpdateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface PrivateCloudsUpdateOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface PrivateCloudsDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface PrivateCloudsRotateVcenterPasswordOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface PrivateCloudsRotateNsxtPasswordOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface PrivateCloudsListAdminCredentialsOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface ClustersListByPrivateCloudOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface ClustersGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ClustersCreateOrUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ClustersUpdateOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ClustersDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ClustersListZonesOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface DatastoresListByClusterOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface DatastoresGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface DatastoresCreateOrUpdateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface DatastoresDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface HcxEnterpriseSitesListByPrivateCloudOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface HcxEnterpriseSitesGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface HcxEnterpriseSitesCreateOrUpdateOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface HcxEnterpriseSitesDeleteOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface AuthorizationsListByPrivateCloudOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface AuthorizationsGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface AuthorizationsCreateOrUpdateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface AuthorizationsDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface GlobalReachConnectionsListByPrivateCloudOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface GlobalReachConnectionsGetOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface GlobalReachConnectionsCreateOrUpdateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface GlobalReachConnectionsDeleteOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface WorkloadNetworksGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface WorkloadNetworksListByPrivateCloudOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface WorkloadNetworkSegmentsListByWorkloadNetworkOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface WorkloadNetworkSegmentsGetOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface WorkloadNetworkSegmentsCreateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface WorkloadNetworkSegmentsUpdateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface WorkloadNetworkSegmentsDeleteSegmentOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface WorkloadNetworkDhcpConfigurationsListByWorkloadNetworkOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface WorkloadNetworkDhcpConfigurationsGetOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface WorkloadNetworkDhcpConfigurationsCreateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface WorkloadNetworkDhcpConfigurationsUpdateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface WorkloadNetworkDhcpConfigurationsDeleteOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface WorkloadNetworkGatewaysListByWorkloadNetworkOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface WorkloadNetworkGatewaysGetOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface WorkloadNetworkPortMirroringProfilesListByWorkloadNetworkOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface WorkloadNetworkPortMirroringProfilesGetOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface WorkloadNetworkPortMirroringProfilesCreateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface WorkloadNetworkPortMirroringProfilesUpdateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface WorkloadNetworkPortMirroringProfilesDeleteOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface WorkloadNetworkVmGroupsListByWorkloadNetworkOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface WorkloadNetworkVmGroupsGetOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface WorkloadNetworkVmGroupsCreateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface WorkloadNetworkVmGroupsUpdateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface WorkloadNetworkVmGroupsDeleteOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface WorkloadNetworkVirtualMachinesListByWorkloadNetworkOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface WorkloadNetworkVirtualMachinesGetOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface WorkloadNetworkDnsServicesListByWorkloadNetworkOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface WorkloadNetworkDnsServicesGetOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface WorkloadNetworkDnsServicesCreateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface WorkloadNetworkDnsServicesUpdateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface WorkloadNetworkDnsServicesDeleteOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface WorkloadNetworkDnsZonesListByWorkloadNetworkOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface WorkloadNetworkDnsZonesGetOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface WorkloadNetworkDnsZonesCreateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface WorkloadNetworkDnsZonesUpdateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface WorkloadNetworkDnsZonesDeleteOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface WorkloadNetworkPublicIpsListByWorkloadNetworkOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface WorkloadNetworkPublicIpsGetOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface WorkloadNetworkPublicIpsCreateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface WorkloadNetworkPublicIpsDeleteOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface CloudLinksListByPrivateCloudOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface CloudLinksGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface CloudLinksCreateOrUpdateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface CloudLinksDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface AddonsListByPrivateCloudOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface AddonsGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface AddonsCreateOrUpdateOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface AddonsDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface VirtualMachinesListByClusterOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface VirtualMachinesGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface VirtualMachinesRestrictMovementOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface PlacementPoliciesListByClusterOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface PlacementPoliciesGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface PlacementPoliciesCreateOrUpdateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface PlacementPoliciesUpdateOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface PlacementPoliciesDeleteOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ScriptPackagesListByPrivateCloudOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface ScriptPackagesGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ScriptCmdletsListByScriptPackageOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface ScriptCmdletsGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ScriptExecutionsListByPrivateCloudOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface ScriptExecutionsGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface ScriptExecutionsCreateOrUpdateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ScriptExecutionsDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface ScriptExecutionsGetExecutionLogsOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface IscsiPathsListByPrivateCloudOptionalParams
  extends OperationOptions {}

/** Optional parameters. */
export interface IscsiPathsGetOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface IscsiPathsCreateOrUpdateOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}

/** Optional parameters. */
export interface IscsiPathsDeleteOptionalParams extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}
