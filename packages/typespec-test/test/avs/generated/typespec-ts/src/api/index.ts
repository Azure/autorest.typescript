// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export {
  createAzureVMwareSolutionAPI,
  AzureVMwareSolutionAPIContext,
  AzureVMwareSolutionAPIClientOptionalParams,
} from "./azureVMwareSolutionAPIContext.js";
export {
  WorkloadNetworksListOptionalParams,
  WorkloadNetworksGetOptionalParams,
  WorkloadNetworkVmGroupsDeleteOptionalParams,
  WorkloadNetworkVmGroupsUpdateOptionalParams,
  WorkloadNetworkVmGroupsCreateOptionalParams,
  WorkloadNetworkVmGroupsGetOptionalParams,
  WorkloadNetworkVmGroupsListOptionalParams,
  WorkloadNetworkVirtualMachinesGetOptionalParams,
  WorkloadNetworkVirtualMachinesListOptionalParams,
  WorkloadNetworkSegmentsDeleteSegmentOptionalParams,
  WorkloadNetworkSegmentsUpdateOptionalParams,
  WorkloadNetworkSegmentsCreateOptionalParams,
  WorkloadNetworkSegmentsGetOptionalParams,
  WorkloadNetworkSegmentsListOptionalParams,
  WorkloadNetworkPublicIpsDeleteOptionalParams,
  WorkloadNetworkPublicIpsCreateOptionalParams,
  WorkloadNetworkPublicIpsGetOptionalParams,
  WorkloadNetworkPublicIpsListOptionalParams,
  WorkloadNetworkPortMirroringProfilesDeleteOptionalParams,
  WorkloadNetworkPortMirroringProfilesUpdateOptionalParams,
  WorkloadNetworkPortMirroringProfilesCreateOptionalParams,
  WorkloadNetworkPortMirroringProfilesGetOptionalParams,
  WorkloadNetworkPortMirroringProfilesListOptionalParams,
  WorkloadNetworkGatewaysGetOptionalParams,
  WorkloadNetworkGatewaysListOptionalParams,
  WorkloadNetworkDnsZonesDeleteOptionalParams,
  WorkloadNetworkDnsZonesUpdateOptionalParams,
  WorkloadNetworkDnsZonesCreateOptionalParams,
  WorkloadNetworkDnsZonesGetOptionalParams,
  WorkloadNetworkDnsZonesListOptionalParams,
  WorkloadNetworkDnsServicesDeleteOptionalParams,
  WorkloadNetworkDnsServicesUpdateOptionalParams,
  WorkloadNetworkDnsServicesCreateOptionalParams,
  WorkloadNetworkDnsServicesGetOptionalParams,
  WorkloadNetworkDnsServicesListOptionalParams,
  WorkloadNetworkDhcpConfigurationsDeleteOptionalParams,
  WorkloadNetworkDhcpConfigurationsUpdateOptionalParams,
  WorkloadNetworkDhcpConfigurationsCreateOptionalParams,
  WorkloadNetworkDhcpConfigurationsGetOptionalParams,
  WorkloadNetworkDhcpConfigurationsListOptionalParams,
  VirtualMachinesRestrictMovementOptionalParams,
  VirtualMachinesGetOptionalParams,
  VirtualMachinesListOptionalParams,
  SkusListOptionalParams,
  ScriptPackagesGetOptionalParams,
  ScriptPackagesListOptionalParams,
  ScriptExecutionsGetExecutionLogsOptionalParams,
  ScriptExecutionsDeleteOptionalParams,
  ScriptExecutionsCreateOrUpdateOptionalParams,
  ScriptExecutionsGetOptionalParams,
  ScriptExecutionsListOptionalParams,
  ScriptCmdletsGetOptionalParams,
  ScriptCmdletsListOptionalParams,
  PureStoragePoliciesDeleteOptionalParams,
  PureStoragePoliciesCreateOrUpdateOptionalParams,
  PureStoragePoliciesGetOptionalParams,
  PureStoragePoliciesListOptionalParams,
  ProvisionedNetworksGetOptionalParams,
  ProvisionedNetworksListOptionalParams,
  PrivateCloudsListAdminCredentialsOptionalParams,
  PrivateCloudsRotateNsxtPasswordOptionalParams,
  PrivateCloudsRotateVcenterPasswordOptionalParams,
  PrivateCloudsDeleteOptionalParams,
  PrivateCloudsUpdateOptionalParams,
  PrivateCloudsCreateOrUpdateOptionalParams,
  PrivateCloudsGetOptionalParams,
  PrivateCloudsListInSubscriptionOptionalParams,
  PrivateCloudsListOptionalParams,
  PlacementPoliciesDeleteOptionalParams,
  PlacementPoliciesUpdateOptionalParams,
  PlacementPoliciesCreateOrUpdateOptionalParams,
  PlacementPoliciesGetOptionalParams,
  PlacementPoliciesListOptionalParams,
  LocationsCheckQuotaAvailabilityOptionalParams,
  LocationsCheckTrialAvailabilityOptionalParams,
  IscsiPathsDeleteOptionalParams,
  IscsiPathsCreateOrUpdateOptionalParams,
  IscsiPathsGetOptionalParams,
  IscsiPathsListByPrivateCloudOptionalParams,
  HostsGetOptionalParams,
  HostsListOptionalParams,
  HcxEnterpriseSitesDeleteOptionalParams,
  HcxEnterpriseSitesCreateOrUpdateOptionalParams,
  HcxEnterpriseSitesGetOptionalParams,
  HcxEnterpriseSitesListOptionalParams,
  GlobalReachConnectionsDeleteOptionalParams,
  GlobalReachConnectionsCreateOrUpdateOptionalParams,
  GlobalReachConnectionsGetOptionalParams,
  GlobalReachConnectionsListOptionalParams,
  DatastoresDeleteOptionalParams,
  DatastoresCreateOrUpdateOptionalParams,
  DatastoresGetOptionalParams,
  DatastoresListOptionalParams,
  ClustersListZonesOptionalParams,
  ClustersDeleteOptionalParams,
  ClustersUpdateOptionalParams,
  ClustersCreateOrUpdateOptionalParams,
  ClustersGetOptionalParams,
  ClustersListOptionalParams,
  CloudLinksDeleteOptionalParams,
  CloudLinksCreateOrUpdateOptionalParams,
  CloudLinksGetOptionalParams,
  CloudLinksListOptionalParams,
  AuthorizationsDeleteOptionalParams,
  AuthorizationsCreateOrUpdateOptionalParams,
  AuthorizationsGetOptionalParams,
  AuthorizationsListOptionalParams,
  AddonsDeleteOptionalParams,
  AddonsCreateOrUpdateOptionalParams,
  AddonsGetOptionalParams,
  AddonsListOptionalParams,
  OperationsListOptionalParams,
} from "./options.js";
export {
  addonsDelete,
  addonsCreateOrUpdate,
  addonsGet,
  addonsList,
} from "./addons/index.js";
export {
  authorizationsDelete,
  authorizationsCreateOrUpdate,
  authorizationsGet,
  authorizationsList,
} from "./authorizations/index.js";
export {
  cloudLinksDelete,
  cloudLinksCreateOrUpdate,
  cloudLinksGet,
  cloudLinksList,
} from "./cloudLinks/index.js";
export {
  clustersListZones,
  clustersDelete,
  clustersUpdate,
  clustersCreateOrUpdate,
  clustersGet,
  clustersList,
} from "./clusters/index.js";
export {
  datastoresDelete,
  datastoresCreateOrUpdate,
  datastoresGet,
  datastoresList,
} from "./datastores/index.js";
export {
  globalReachConnectionsDelete,
  globalReachConnectionsCreateOrUpdate,
  globalReachConnectionsGet,
  globalReachConnectionsList,
} from "./globalReachConnections/index.js";
export {
  hcxEnterpriseSitesDelete,
  hcxEnterpriseSitesCreateOrUpdate,
  hcxEnterpriseSitesGet,
  hcxEnterpriseSitesList,
} from "./hcxEnterpriseSites/index.js";
export { hostsGet, hostsList } from "./hosts/index.js";
export {
  iscsiPathsDelete,
  iscsiPathsCreateOrUpdate,
  iscsiPathsGet,
  iscsiPathsListByPrivateCloud,
} from "./iscsiPaths/index.js";
export {
  locationsCheckQuotaAvailability,
  locationsCheckTrialAvailability,
} from "./locations/index.js";
export { operationsList } from "./operations/index.js";
export {
  placementPoliciesDelete,
  placementPoliciesUpdate,
  placementPoliciesCreateOrUpdate,
  placementPoliciesGet,
  placementPoliciesList,
} from "./placementPolicies/index.js";
export {
  privateCloudsListAdminCredentials,
  privateCloudsRotateNsxtPassword,
  privateCloudsRotateVcenterPassword,
  privateCloudsDelete,
  privateCloudsUpdate,
  privateCloudsCreateOrUpdate,
  privateCloudsGet,
  privateCloudsListInSubscription,
  privateCloudsList,
} from "./privateClouds/index.js";
export {
  provisionedNetworksGet,
  provisionedNetworksList,
} from "./provisionedNetworks/index.js";
export {
  pureStoragePoliciesDelete,
  pureStoragePoliciesCreateOrUpdate,
  pureStoragePoliciesGet,
  pureStoragePoliciesList,
} from "./pureStoragePolicies/index.js";
export { scriptCmdletsGet, scriptCmdletsList } from "./scriptCmdlets/index.js";
export {
  scriptExecutionsGetExecutionLogs,
  scriptExecutionsDelete,
  scriptExecutionsCreateOrUpdate,
  scriptExecutionsGet,
  scriptExecutionsList,
} from "./scriptExecutions/index.js";
export {
  scriptPackagesGet,
  scriptPackagesList,
} from "./scriptPackages/index.js";
export { skusList } from "./skus/index.js";
export {
  virtualMachinesRestrictMovement,
  virtualMachinesGet,
  virtualMachinesList,
} from "./virtualMachines/index.js";
export {
  workloadNetworkDhcpConfigurationsDelete,
  workloadNetworkDhcpConfigurationsUpdate,
  workloadNetworkDhcpConfigurationsCreate,
  workloadNetworkDhcpConfigurationsGet,
  workloadNetworkDhcpConfigurationsList,
} from "./workloadNetworkDhcpConfigurations/index.js";
export {
  workloadNetworkDnsServicesDelete,
  workloadNetworkDnsServicesUpdate,
  workloadNetworkDnsServicesCreate,
  workloadNetworkDnsServicesGet,
  workloadNetworkDnsServicesList,
} from "./workloadNetworkDnsServices/index.js";
export {
  workloadNetworkDnsZonesDelete,
  workloadNetworkDnsZonesUpdate,
  workloadNetworkDnsZonesCreate,
  workloadNetworkDnsZonesGet,
  workloadNetworkDnsZonesList,
} from "./workloadNetworkDnsZones/index.js";
export {
  workloadNetworkGatewaysGet,
  workloadNetworkGatewaysList,
} from "./workloadNetworkGateways/index.js";
export {
  workloadNetworkPortMirroringProfilesDelete,
  workloadNetworkPortMirroringProfilesUpdate,
  workloadNetworkPortMirroringProfilesCreate,
  workloadNetworkPortMirroringProfilesGet,
  workloadNetworkPortMirroringProfilesList,
} from "./workloadNetworkPortMirroringProfiles/index.js";
export {
  workloadNetworkPublicIpsDelete,
  workloadNetworkPublicIpsCreate,
  workloadNetworkPublicIpsGet,
  workloadNetworkPublicIpsList,
} from "./workloadNetworkPublicIps/index.js";
export {
  workloadNetworksList,
  workloadNetworksGet,
} from "./workloadNetworks/index.js";
export {
  workloadNetworkSegmentsDeleteSegment,
  workloadNetworkSegmentsUpdate,
  workloadNetworkSegmentsCreate,
  workloadNetworkSegmentsGet,
  workloadNetworkSegmentsList,
} from "./workloadNetworkSegments/index.js";
export {
  workloadNetworkVirtualMachinesGet,
  workloadNetworkVirtualMachinesList,
} from "./workloadNetworkVirtualMachines/index.js";
export {
  workloadNetworkVmGroupsDelete,
  workloadNetworkVmGroupsUpdate,
  workloadNetworkVmGroupsCreate,
  workloadNetworkVmGroupsGet,
  workloadNetworkVmGroupsList,
} from "./workloadNetworkVmGroups/index.js";
