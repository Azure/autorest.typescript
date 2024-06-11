// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  OperationsList200Response,
  OperationsListDefaultResponse,
  LocationsCheckTrialAvailability200Response,
  LocationsCheckTrialAvailabilityDefaultResponse,
  LocationsCheckQuotaAvailability200Response,
  LocationsCheckQuotaAvailabilityDefaultResponse,
  PrivateCloudsListByResourceGroup200Response,
  PrivateCloudsListByResourceGroupDefaultResponse,
  PrivateCloudsListInSubscription200Response,
  PrivateCloudsListInSubscriptionDefaultResponse,
  PrivateCloudsGet200Response,
  PrivateCloudsGetDefaultResponse,
  PrivateCloudsCreateOrUpdate200Response,
  PrivateCloudsCreateOrUpdate201Response,
  PrivateCloudsCreateOrUpdateLogicalResponse,
  PrivateCloudsCreateOrUpdateDefaultResponse,
  PrivateCloudsUpdate200Response,
  PrivateCloudsUpdate201Response,
  PrivateCloudsUpdateDefaultResponse,
  PrivateCloudsDelete200Response,
  PrivateCloudsDelete202Response,
  PrivateCloudsDelete204Response,
  PrivateCloudsDeleteLogicalResponse,
  PrivateCloudsDeleteDefaultResponse,
  PrivateCloudsRotateVcenterPassword202Response,
  PrivateCloudsRotateVcenterPassword204Response,
  PrivateCloudsRotateVcenterPasswordLogicalResponse,
  PrivateCloudsRotateVcenterPasswordDefaultResponse,
  PrivateCloudsRotateNsxtPassword202Response,
  PrivateCloudsRotateNsxtPassword204Response,
  PrivateCloudsRotateNsxtPasswordLogicalResponse,
  PrivateCloudsRotateNsxtPasswordDefaultResponse,
  PrivateCloudsListAdminCredentials200Response,
  PrivateCloudsListAdminCredentialsDefaultResponse,
  ClustersListByPrivateCloud200Response,
  ClustersListByPrivateCloudDefaultResponse,
  ClustersGet200Response,
  ClustersGetDefaultResponse,
  ClustersCreateOrUpdate200Response,
  ClustersCreateOrUpdate201Response,
  ClustersCreateOrUpdateLogicalResponse,
  ClustersCreateOrUpdateDefaultResponse,
  ClustersUpdate200Response,
  ClustersUpdate201Response,
  ClustersUpdateDefaultResponse,
  ClustersDelete200Response,
  ClustersDelete202Response,
  ClustersDelete204Response,
  ClustersDeleteLogicalResponse,
  ClustersDeleteDefaultResponse,
  ClustersListZones200Response,
  ClustersListZonesDefaultResponse,
  DatastoresListByCluster200Response,
  DatastoresListByClusterDefaultResponse,
  DatastoresGet200Response,
  DatastoresGetDefaultResponse,
  DatastoresCreateOrUpdate200Response,
  DatastoresCreateOrUpdate201Response,
  DatastoresCreateOrUpdateLogicalResponse,
  DatastoresCreateOrUpdateDefaultResponse,
  DatastoresDelete200Response,
  DatastoresDelete202Response,
  DatastoresDelete204Response,
  DatastoresDeleteLogicalResponse,
  DatastoresDeleteDefaultResponse,
  HcxEnterpriseSitesListByPrivateCloud200Response,
  HcxEnterpriseSitesListByPrivateCloudDefaultResponse,
  HcxEnterpriseSitesGet200Response,
  HcxEnterpriseSitesGetDefaultResponse,
  HcxEnterpriseSitesCreateOrUpdate200Response,
  HcxEnterpriseSitesCreateOrUpdate201Response,
  HcxEnterpriseSitesCreateOrUpdateDefaultResponse,
  HcxEnterpriseSitesDelete200Response,
  HcxEnterpriseSitesDelete204Response,
  HcxEnterpriseSitesDeleteDefaultResponse,
  AuthorizationsListByPrivateCloud200Response,
  AuthorizationsListByPrivateCloudDefaultResponse,
  AuthorizationsGet200Response,
  AuthorizationsGetDefaultResponse,
  AuthorizationsCreateOrUpdate200Response,
  AuthorizationsCreateOrUpdate201Response,
  AuthorizationsCreateOrUpdateLogicalResponse,
  AuthorizationsCreateOrUpdateDefaultResponse,
  AuthorizationsDelete200Response,
  AuthorizationsDelete202Response,
  AuthorizationsDelete204Response,
  AuthorizationsDeleteLogicalResponse,
  AuthorizationsDeleteDefaultResponse,
  GlobalReachConnectionsListByPrivateCloud200Response,
  GlobalReachConnectionsListByPrivateCloudDefaultResponse,
  GlobalReachConnectionsGet200Response,
  GlobalReachConnectionsGetDefaultResponse,
  GlobalReachConnectionsCreateOrUpdate200Response,
  GlobalReachConnectionsCreateOrUpdate201Response,
  GlobalReachConnectionsCreateOrUpdateLogicalResponse,
  GlobalReachConnectionsCreateOrUpdateDefaultResponse,
  GlobalReachConnectionsDelete200Response,
  GlobalReachConnectionsDelete202Response,
  GlobalReachConnectionsDelete204Response,
  GlobalReachConnectionsDeleteLogicalResponse,
  GlobalReachConnectionsDeleteDefaultResponse,
  WorkloadNetworksGet200Response,
  WorkloadNetworksGetDefaultResponse,
  WorkloadNetworksListByPrivateCloud200Response,
  WorkloadNetworksListByPrivateCloudDefaultResponse,
  WorkloadNetworkSegmentsListByWorkloadNetwork200Response,
  WorkloadNetworkSegmentsListByWorkloadNetworkDefaultResponse,
  WorkloadNetworkSegmentsGet200Response,
  WorkloadNetworkSegmentsGetDefaultResponse,
  WorkloadNetworkSegmentsCreate200Response,
  WorkloadNetworkSegmentsCreate201Response,
  WorkloadNetworkSegmentsCreateLogicalResponse,
  WorkloadNetworkSegmentsCreateDefaultResponse,
  WorkloadNetworkSegmentsUpdate200Response,
  WorkloadNetworkSegmentsUpdate202Response,
  WorkloadNetworkSegmentsUpdateLogicalResponse,
  WorkloadNetworkSegmentsUpdateDefaultResponse,
  WorkloadNetworkSegmentsDeleteSegment200Response,
  WorkloadNetworkSegmentsDeleteSegment202Response,
  WorkloadNetworkSegmentsDeleteSegment204Response,
  WorkloadNetworkSegmentsDeleteSegmentLogicalResponse,
  WorkloadNetworkSegmentsDeleteSegmentDefaultResponse,
  WorkloadNetworkDhcpConfigurationsListByWorkloadNetwork200Response,
  WorkloadNetworkDhcpConfigurationsListByWorkloadNetworkDefaultResponse,
  WorkloadNetworkDhcpConfigurationsGet200Response,
  WorkloadNetworkDhcpConfigurationsGetDefaultResponse,
  WorkloadNetworkDhcpConfigurationsCreate200Response,
  WorkloadNetworkDhcpConfigurationsCreate201Response,
  WorkloadNetworkDhcpConfigurationsCreateLogicalResponse,
  WorkloadNetworkDhcpConfigurationsCreateDefaultResponse,
  WorkloadNetworkDhcpConfigurationsUpdate200Response,
  WorkloadNetworkDhcpConfigurationsUpdate202Response,
  WorkloadNetworkDhcpConfigurationsUpdateLogicalResponse,
  WorkloadNetworkDhcpConfigurationsUpdateDefaultResponse,
  WorkloadNetworkDhcpConfigurationsDelete200Response,
  WorkloadNetworkDhcpConfigurationsDelete202Response,
  WorkloadNetworkDhcpConfigurationsDelete204Response,
  WorkloadNetworkDhcpConfigurationsDeleteLogicalResponse,
  WorkloadNetworkDhcpConfigurationsDeleteDefaultResponse,
  WorkloadNetworkGatewaysListByWorkloadNetwork200Response,
  WorkloadNetworkGatewaysListByWorkloadNetworkDefaultResponse,
  WorkloadNetworkGatewaysGet200Response,
  WorkloadNetworkGatewaysGetDefaultResponse,
  WorkloadNetworkPortMirroringProfilesListByWorkloadNetwork200Response,
  WorkloadNetworkPortMirroringProfilesListByWorkloadNetworkDefaultResponse,
  WorkloadNetworkPortMirroringProfilesGet200Response,
  WorkloadNetworkPortMirroringProfilesGetDefaultResponse,
  WorkloadNetworkPortMirroringProfilesCreate200Response,
  WorkloadNetworkPortMirroringProfilesCreate201Response,
  WorkloadNetworkPortMirroringProfilesCreateLogicalResponse,
  WorkloadNetworkPortMirroringProfilesCreateDefaultResponse,
  WorkloadNetworkPortMirroringProfilesUpdate200Response,
  WorkloadNetworkPortMirroringProfilesUpdate202Response,
  WorkloadNetworkPortMirroringProfilesUpdateLogicalResponse,
  WorkloadNetworkPortMirroringProfilesUpdateDefaultResponse,
  WorkloadNetworkPortMirroringProfilesDelete200Response,
  WorkloadNetworkPortMirroringProfilesDelete202Response,
  WorkloadNetworkPortMirroringProfilesDelete204Response,
  WorkloadNetworkPortMirroringProfilesDeleteLogicalResponse,
  WorkloadNetworkPortMirroringProfilesDeleteDefaultResponse,
  WorkloadNetworkVmGroupsListByWorkloadNetwork200Response,
  WorkloadNetworkVmGroupsListByWorkloadNetworkDefaultResponse,
  WorkloadNetworkVmGroupsGet200Response,
  WorkloadNetworkVmGroupsGetDefaultResponse,
  WorkloadNetworkVmGroupsCreate200Response,
  WorkloadNetworkVmGroupsCreate201Response,
  WorkloadNetworkVmGroupsCreateLogicalResponse,
  WorkloadNetworkVmGroupsCreateDefaultResponse,
  WorkloadNetworkVmGroupsUpdate200Response,
  WorkloadNetworkVmGroupsUpdate202Response,
  WorkloadNetworkVmGroupsUpdateLogicalResponse,
  WorkloadNetworkVmGroupsUpdateDefaultResponse,
  WorkloadNetworkVmGroupsDelete200Response,
  WorkloadNetworkVmGroupsDelete202Response,
  WorkloadNetworkVmGroupsDelete204Response,
  WorkloadNetworkVmGroupsDeleteLogicalResponse,
  WorkloadNetworkVmGroupsDeleteDefaultResponse,
  WorkloadNetworkVirtualMachinesListByWorkloadNetwork200Response,
  WorkloadNetworkVirtualMachinesListByWorkloadNetworkDefaultResponse,
  WorkloadNetworkVirtualMachinesGet200Response,
  WorkloadNetworkVirtualMachinesGetDefaultResponse,
  WorkloadNetworkDnsServicesListByWorkloadNetwork200Response,
  WorkloadNetworkDnsServicesListByWorkloadNetworkDefaultResponse,
  WorkloadNetworkDnsServicesGet200Response,
  WorkloadNetworkDnsServicesGetDefaultResponse,
  WorkloadNetworkDnsServicesCreate200Response,
  WorkloadNetworkDnsServicesCreate201Response,
  WorkloadNetworkDnsServicesCreateLogicalResponse,
  WorkloadNetworkDnsServicesCreateDefaultResponse,
  WorkloadNetworkDnsServicesUpdate200Response,
  WorkloadNetworkDnsServicesUpdate202Response,
  WorkloadNetworkDnsServicesUpdateLogicalResponse,
  WorkloadNetworkDnsServicesUpdateDefaultResponse,
  WorkloadNetworkDnsServicesDelete200Response,
  WorkloadNetworkDnsServicesDelete202Response,
  WorkloadNetworkDnsServicesDelete204Response,
  WorkloadNetworkDnsServicesDeleteLogicalResponse,
  WorkloadNetworkDnsServicesDeleteDefaultResponse,
  WorkloadNetworkDnsZonesListByWorkloadNetwork200Response,
  WorkloadNetworkDnsZonesListByWorkloadNetworkDefaultResponse,
  WorkloadNetworkDnsZonesGet200Response,
  WorkloadNetworkDnsZonesGetDefaultResponse,
  WorkloadNetworkDnsZonesCreate200Response,
  WorkloadNetworkDnsZonesCreate201Response,
  WorkloadNetworkDnsZonesCreateLogicalResponse,
  WorkloadNetworkDnsZonesCreateDefaultResponse,
  WorkloadNetworkDnsZonesUpdate200Response,
  WorkloadNetworkDnsZonesUpdate202Response,
  WorkloadNetworkDnsZonesUpdateLogicalResponse,
  WorkloadNetworkDnsZonesUpdateDefaultResponse,
  WorkloadNetworkDnsZonesDelete200Response,
  WorkloadNetworkDnsZonesDelete202Response,
  WorkloadNetworkDnsZonesDelete204Response,
  WorkloadNetworkDnsZonesDeleteLogicalResponse,
  WorkloadNetworkDnsZonesDeleteDefaultResponse,
  WorkloadNetworkPublicIpsListByWorkloadNetwork200Response,
  WorkloadNetworkPublicIpsListByWorkloadNetworkDefaultResponse,
  WorkloadNetworkPublicIpsGet200Response,
  WorkloadNetworkPublicIpsGetDefaultResponse,
  WorkloadNetworkPublicIpsCreate200Response,
  WorkloadNetworkPublicIpsCreate201Response,
  WorkloadNetworkPublicIpsCreateLogicalResponse,
  WorkloadNetworkPublicIpsCreateDefaultResponse,
  WorkloadNetworkPublicIpsDelete200Response,
  WorkloadNetworkPublicIpsDelete202Response,
  WorkloadNetworkPublicIpsDelete204Response,
  WorkloadNetworkPublicIpsDeleteLogicalResponse,
  WorkloadNetworkPublicIpsDeleteDefaultResponse,
  CloudLinksListByPrivateCloud200Response,
  CloudLinksListByPrivateCloudDefaultResponse,
  CloudLinksGet200Response,
  CloudLinksGetDefaultResponse,
  CloudLinksCreateOrUpdate200Response,
  CloudLinksCreateOrUpdate201Response,
  CloudLinksCreateOrUpdateLogicalResponse,
  CloudLinksCreateOrUpdateDefaultResponse,
  CloudLinksDelete200Response,
  CloudLinksDelete202Response,
  CloudLinksDelete204Response,
  CloudLinksDeleteLogicalResponse,
  CloudLinksDeleteDefaultResponse,
  AddonsListByPrivateCloud200Response,
  AddonsListByPrivateCloudDefaultResponse,
  AddonsGet200Response,
  AddonsGetDefaultResponse,
  AddonsCreateOrUpdate200Response,
  AddonsCreateOrUpdate201Response,
  AddonsCreateOrUpdateLogicalResponse,
  AddonsCreateOrUpdateDefaultResponse,
  AddonsDelete200Response,
  AddonsDelete202Response,
  AddonsDelete204Response,
  AddonsDeleteLogicalResponse,
  AddonsDeleteDefaultResponse,
  VirtualMachinesListByCluster200Response,
  VirtualMachinesListByClusterDefaultResponse,
  VirtualMachinesGet200Response,
  VirtualMachinesGetDefaultResponse,
  VirtualMachinesRestrictMovement202Response,
  VirtualMachinesRestrictMovementLogicalResponse,
  VirtualMachinesRestrictMovementDefaultResponse,
  PlacementPoliciesListByCluster200Response,
  PlacementPoliciesListByClusterDefaultResponse,
  PlacementPoliciesGet200Response,
  PlacementPoliciesGetDefaultResponse,
  PlacementPoliciesCreateOrUpdate200Response,
  PlacementPoliciesCreateOrUpdate201Response,
  PlacementPoliciesCreateOrUpdateLogicalResponse,
  PlacementPoliciesCreateOrUpdateDefaultResponse,
  PlacementPoliciesUpdate200Response,
  PlacementPoliciesUpdate202Response,
  PlacementPoliciesUpdateDefaultResponse,
  PlacementPoliciesDelete200Response,
  PlacementPoliciesDelete202Response,
  PlacementPoliciesDelete204Response,
  PlacementPoliciesDeleteLogicalResponse,
  PlacementPoliciesDeleteDefaultResponse,
  ScriptPackagesListByPrivateCloud200Response,
  ScriptPackagesListByPrivateCloudDefaultResponse,
  ScriptPackagesGet200Response,
  ScriptPackagesGetDefaultResponse,
  ScriptCmdletsListByScriptPackage200Response,
  ScriptCmdletsListByScriptPackageDefaultResponse,
  ScriptCmdletsGet200Response,
  ScriptCmdletsGetDefaultResponse,
  ScriptExecutionsListByPrivateCloud200Response,
  ScriptExecutionsListByPrivateCloudDefaultResponse,
  ScriptExecutionsGet200Response,
  ScriptExecutionsGetDefaultResponse,
  ScriptExecutionsCreateOrUpdate200Response,
  ScriptExecutionsCreateOrUpdate201Response,
  ScriptExecutionsCreateOrUpdateLogicalResponse,
  ScriptExecutionsCreateOrUpdateDefaultResponse,
  ScriptExecutionsDelete200Response,
  ScriptExecutionsDelete202Response,
  ScriptExecutionsDelete204Response,
  ScriptExecutionsDeleteLogicalResponse,
  ScriptExecutionsDeleteDefaultResponse,
  ScriptExecutionsGetExecutionLogs200Response,
  ScriptExecutionsGetExecutionLogsDefaultResponse,
  IscsiPathsListByPrivateCloud200Response,
  IscsiPathsListByPrivateCloudDefaultResponse,
  IscsiPathsGet200Response,
  IscsiPathsGetDefaultResponse,
  IscsiPathsCreateOrUpdate200Response,
  IscsiPathsCreateOrUpdate201Response,
  IscsiPathsCreateOrUpdateLogicalResponse,
  IscsiPathsCreateOrUpdateDefaultResponse,
  IscsiPathsDelete200Response,
  IscsiPathsDelete202Response,
  IscsiPathsDelete204Response,
  IscsiPathsDeleteLogicalResponse,
  IscsiPathsDeleteDefaultResponse,
} from "./responses.js";

const responseMap: Record<string, string[]> = {
  "GET /providers/Microsoft.AVS/operations": ["200"],
  "POST /subscriptions/{subscriptionId}/providers/Microsoft.AVS/locations/{location}/checkTrialAvailability":
    ["200"],
  "POST /subscriptions/{subscriptionId}/providers/Microsoft.AVS/locations/{location}/checkQuotaAvailability":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds":
    ["200"],
  "GET /subscriptions/{subscriptionId}/providers/Microsoft.AVS/privateClouds": [
    "200",
  ],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}":
    ["200"],
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}":
    ["200", "201"],
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}":
    ["200", "201"],
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}":
    ["200", "202", "204"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/rotateVcenterPassword":
    ["200", "202", "204"],
  "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/rotateVcenterPassword":
    ["202", "204"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/rotateNsxtPassword":
    ["200", "202", "204"],
  "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/rotateNsxtPassword":
    ["202", "204"],
  "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/listAdminCredentials":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}":
    ["200"],
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}":
    ["200", "201"],
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}":
    ["200", "201"],
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}":
    ["200", "202", "204"],
  "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/listZones":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/datastores":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/datastores/{datastoreName}":
    ["200"],
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/datastores/{datastoreName}":
    ["200", "201"],
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/datastores/{datastoreName}":
    ["200", "202", "204"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/hcxEnterpriseSites":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/hcxEnterpriseSites/{hcxEnterpriseSiteName}":
    ["200"],
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/hcxEnterpriseSites/{hcxEnterpriseSiteName}":
    ["200", "201"],
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/hcxEnterpriseSites/{hcxEnterpriseSiteName}":
    ["200", "204"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/authorizations":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/authorizations/{authorizationName}":
    ["200"],
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/authorizations/{authorizationName}":
    ["200", "201"],
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/authorizations/{authorizationName}":
    ["200", "202", "204"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/globalReachConnections":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/globalReachConnections/{globalReachConnectionName}":
    ["200"],
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/globalReachConnections/{globalReachConnectionName}":
    ["200", "201"],
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/globalReachConnections/{globalReachConnectionName}":
    ["200", "202", "204"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/segments":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/segments/{segmentId}":
    ["200"],
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/segments/{segmentId}":
    ["200", "201"],
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/segments/{segmentId}":
    ["200", "202"],
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/segments/{segmentId}":
    ["200", "202", "204"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dhcpConfigurations":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dhcpConfigurations/{dhcpId}":
    ["200"],
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dhcpConfigurations/{dhcpId}":
    ["200", "201"],
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dhcpConfigurations/{dhcpId}":
    ["200", "202"],
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dhcpConfigurations/{dhcpId}":
    ["200", "202", "204"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/gateways":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/gateways/{gatewayId}":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/portMirroringProfiles":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/portMirroringProfiles/{portMirroringId}":
    ["200"],
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/portMirroringProfiles/{portMirroringId}":
    ["200", "201"],
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/portMirroringProfiles/{portMirroringId}":
    ["200", "202"],
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/portMirroringProfiles/{portMirroringId}":
    ["200", "202", "204"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/vmGroups":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/vmGroups/{vmGroupId}":
    ["200"],
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/vmGroups/{vmGroupId}":
    ["200", "201"],
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/vmGroups/{vmGroupId}":
    ["200", "202"],
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/vmGroups/{vmGroupId}":
    ["200", "202", "204"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/virtualMachines":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/virtualMachines/{virtualMachineId}":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsServices":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsServices/{dnsServiceId}":
    ["200"],
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsServices/{dnsServiceId}":
    ["200", "201"],
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsServices/{dnsServiceId}":
    ["200", "202"],
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsServices/{dnsServiceId}":
    ["200", "202", "204"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsZones":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsZones/{dnsZoneId}":
    ["200"],
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsZones/{dnsZoneId}":
    ["200", "201"],
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsZones/{dnsZoneId}":
    ["200", "202"],
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsZones/{dnsZoneId}":
    ["200", "202", "204"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/publicIPs":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/publicIPs/{publicIPId}":
    ["200"],
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/publicIPs/{publicIPId}":
    ["200", "201"],
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/publicIPs/{publicIPId}":
    ["200", "202", "204"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/cloudLinks":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/cloudLinks/{cloudLinkName}":
    ["200"],
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/cloudLinks/{cloudLinkName}":
    ["200", "201"],
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/cloudLinks/{cloudLinkName}":
    ["200", "202", "204"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/addons":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/addons/{addonName}":
    ["200"],
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/addons/{addonName}":
    ["200", "201"],
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/addons/{addonName}":
    ["200", "202", "204"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/virtualMachines":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/virtualMachines/{virtualMachineId}":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/virtualMachines/{virtualMachineId}/restrictMovement":
    ["200", "202"],
  "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/virtualMachines/{virtualMachineId}/restrictMovement":
    ["202"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/placementPolicies":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/placementPolicies/{placementPolicyName}":
    ["200"],
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/placementPolicies/{placementPolicyName}":
    ["200", "201"],
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/placementPolicies/{placementPolicyName}":
    ["200", "202"],
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/placementPolicies/{placementPolicyName}":
    ["200", "202", "204"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptPackages":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptPackages/{scriptPackageName}":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptPackages/{scriptPackageName}/scriptCmdlets":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptPackages/{scriptPackageName}/scriptCmdlets/{scriptCmdletName}":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptExecutions":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptExecutions/{scriptExecutionName}":
    ["200"],
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptExecutions/{scriptExecutionName}":
    ["200", "201"],
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptExecutions/{scriptExecutionName}":
    ["200", "202", "204"],
  "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptExecutions/{scriptExecutionName}/getExecutionLogs":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/iscsiPaths":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/iscsiPaths/default":
    ["200"],
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/iscsiPaths/default":
    ["200", "201"],
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/iscsiPaths/default":
    ["200", "202", "204"],
};

export function isUnexpected(
  response: OperationsList200Response | OperationsListDefaultResponse,
): response is OperationsListDefaultResponse;
export function isUnexpected(
  response:
    | LocationsCheckTrialAvailability200Response
    | LocationsCheckTrialAvailabilityDefaultResponse,
): response is LocationsCheckTrialAvailabilityDefaultResponse;
export function isUnexpected(
  response:
    | LocationsCheckQuotaAvailability200Response
    | LocationsCheckQuotaAvailabilityDefaultResponse,
): response is LocationsCheckQuotaAvailabilityDefaultResponse;
export function isUnexpected(
  response:
    | PrivateCloudsListByResourceGroup200Response
    | PrivateCloudsListByResourceGroupDefaultResponse,
): response is PrivateCloudsListByResourceGroupDefaultResponse;
export function isUnexpected(
  response:
    | PrivateCloudsListInSubscription200Response
    | PrivateCloudsListInSubscriptionDefaultResponse,
): response is PrivateCloudsListInSubscriptionDefaultResponse;
export function isUnexpected(
  response: PrivateCloudsGet200Response | PrivateCloudsGetDefaultResponse,
): response is PrivateCloudsGetDefaultResponse;
export function isUnexpected(
  response:
    | PrivateCloudsCreateOrUpdate200Response
    | PrivateCloudsCreateOrUpdate201Response
    | PrivateCloudsCreateOrUpdateLogicalResponse
    | PrivateCloudsCreateOrUpdateDefaultResponse,
): response is PrivateCloudsCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response:
    | PrivateCloudsUpdate200Response
    | PrivateCloudsUpdate201Response
    | PrivateCloudsUpdateDefaultResponse,
): response is PrivateCloudsUpdateDefaultResponse;
export function isUnexpected(
  response:
    | PrivateCloudsDelete200Response
    | PrivateCloudsDelete202Response
    | PrivateCloudsDelete204Response
    | PrivateCloudsDeleteLogicalResponse
    | PrivateCloudsDeleteDefaultResponse,
): response is PrivateCloudsDeleteDefaultResponse;
export function isUnexpected(
  response:
    | PrivateCloudsRotateVcenterPassword202Response
    | PrivateCloudsRotateVcenterPassword204Response
    | PrivateCloudsRotateVcenterPasswordLogicalResponse
    | PrivateCloudsRotateVcenterPasswordDefaultResponse,
): response is PrivateCloudsRotateVcenterPasswordDefaultResponse;
export function isUnexpected(
  response:
    | PrivateCloudsRotateNsxtPassword202Response
    | PrivateCloudsRotateNsxtPassword204Response
    | PrivateCloudsRotateNsxtPasswordLogicalResponse
    | PrivateCloudsRotateNsxtPasswordDefaultResponse,
): response is PrivateCloudsRotateNsxtPasswordDefaultResponse;
export function isUnexpected(
  response:
    | PrivateCloudsListAdminCredentials200Response
    | PrivateCloudsListAdminCredentialsDefaultResponse,
): response is PrivateCloudsListAdminCredentialsDefaultResponse;
export function isUnexpected(
  response:
    | ClustersListByPrivateCloud200Response
    | ClustersListByPrivateCloudDefaultResponse,
): response is ClustersListByPrivateCloudDefaultResponse;
export function isUnexpected(
  response: ClustersGet200Response | ClustersGetDefaultResponse,
): response is ClustersGetDefaultResponse;
export function isUnexpected(
  response:
    | ClustersCreateOrUpdate200Response
    | ClustersCreateOrUpdate201Response
    | ClustersCreateOrUpdateLogicalResponse
    | ClustersCreateOrUpdateDefaultResponse,
): response is ClustersCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response:
    | ClustersUpdate200Response
    | ClustersUpdate201Response
    | ClustersUpdateDefaultResponse,
): response is ClustersUpdateDefaultResponse;
export function isUnexpected(
  response:
    | ClustersDelete200Response
    | ClustersDelete202Response
    | ClustersDelete204Response
    | ClustersDeleteLogicalResponse
    | ClustersDeleteDefaultResponse,
): response is ClustersDeleteDefaultResponse;
export function isUnexpected(
  response: ClustersListZones200Response | ClustersListZonesDefaultResponse,
): response is ClustersListZonesDefaultResponse;
export function isUnexpected(
  response:
    | DatastoresListByCluster200Response
    | DatastoresListByClusterDefaultResponse,
): response is DatastoresListByClusterDefaultResponse;
export function isUnexpected(
  response: DatastoresGet200Response | DatastoresGetDefaultResponse,
): response is DatastoresGetDefaultResponse;
export function isUnexpected(
  response:
    | DatastoresCreateOrUpdate200Response
    | DatastoresCreateOrUpdate201Response
    | DatastoresCreateOrUpdateLogicalResponse
    | DatastoresCreateOrUpdateDefaultResponse,
): response is DatastoresCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response:
    | DatastoresDelete200Response
    | DatastoresDelete202Response
    | DatastoresDelete204Response
    | DatastoresDeleteLogicalResponse
    | DatastoresDeleteDefaultResponse,
): response is DatastoresDeleteDefaultResponse;
export function isUnexpected(
  response:
    | HcxEnterpriseSitesListByPrivateCloud200Response
    | HcxEnterpriseSitesListByPrivateCloudDefaultResponse,
): response is HcxEnterpriseSitesListByPrivateCloudDefaultResponse;
export function isUnexpected(
  response:
    | HcxEnterpriseSitesGet200Response
    | HcxEnterpriseSitesGetDefaultResponse,
): response is HcxEnterpriseSitesGetDefaultResponse;
export function isUnexpected(
  response:
    | HcxEnterpriseSitesCreateOrUpdate200Response
    | HcxEnterpriseSitesCreateOrUpdate201Response
    | HcxEnterpriseSitesCreateOrUpdateDefaultResponse,
): response is HcxEnterpriseSitesCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response:
    | HcxEnterpriseSitesDelete200Response
    | HcxEnterpriseSitesDelete204Response
    | HcxEnterpriseSitesDeleteDefaultResponse,
): response is HcxEnterpriseSitesDeleteDefaultResponse;
export function isUnexpected(
  response:
    | AuthorizationsListByPrivateCloud200Response
    | AuthorizationsListByPrivateCloudDefaultResponse,
): response is AuthorizationsListByPrivateCloudDefaultResponse;
export function isUnexpected(
  response: AuthorizationsGet200Response | AuthorizationsGetDefaultResponse,
): response is AuthorizationsGetDefaultResponse;
export function isUnexpected(
  response:
    | AuthorizationsCreateOrUpdate200Response
    | AuthorizationsCreateOrUpdate201Response
    | AuthorizationsCreateOrUpdateLogicalResponse
    | AuthorizationsCreateOrUpdateDefaultResponse,
): response is AuthorizationsCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response:
    | AuthorizationsDelete200Response
    | AuthorizationsDelete202Response
    | AuthorizationsDelete204Response
    | AuthorizationsDeleteLogicalResponse
    | AuthorizationsDeleteDefaultResponse,
): response is AuthorizationsDeleteDefaultResponse;
export function isUnexpected(
  response:
    | GlobalReachConnectionsListByPrivateCloud200Response
    | GlobalReachConnectionsListByPrivateCloudDefaultResponse,
): response is GlobalReachConnectionsListByPrivateCloudDefaultResponse;
export function isUnexpected(
  response:
    | GlobalReachConnectionsGet200Response
    | GlobalReachConnectionsGetDefaultResponse,
): response is GlobalReachConnectionsGetDefaultResponse;
export function isUnexpected(
  response:
    | GlobalReachConnectionsCreateOrUpdate200Response
    | GlobalReachConnectionsCreateOrUpdate201Response
    | GlobalReachConnectionsCreateOrUpdateLogicalResponse
    | GlobalReachConnectionsCreateOrUpdateDefaultResponse,
): response is GlobalReachConnectionsCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response:
    | GlobalReachConnectionsDelete200Response
    | GlobalReachConnectionsDelete202Response
    | GlobalReachConnectionsDelete204Response
    | GlobalReachConnectionsDeleteLogicalResponse
    | GlobalReachConnectionsDeleteDefaultResponse,
): response is GlobalReachConnectionsDeleteDefaultResponse;
export function isUnexpected(
  response: WorkloadNetworksGet200Response | WorkloadNetworksGetDefaultResponse,
): response is WorkloadNetworksGetDefaultResponse;
export function isUnexpected(
  response:
    | WorkloadNetworksListByPrivateCloud200Response
    | WorkloadNetworksListByPrivateCloudDefaultResponse,
): response is WorkloadNetworksListByPrivateCloudDefaultResponse;
export function isUnexpected(
  response:
    | WorkloadNetworkSegmentsListByWorkloadNetwork200Response
    | WorkloadNetworkSegmentsListByWorkloadNetworkDefaultResponse,
): response is WorkloadNetworkSegmentsListByWorkloadNetworkDefaultResponse;
export function isUnexpected(
  response:
    | WorkloadNetworkSegmentsGet200Response
    | WorkloadNetworkSegmentsGetDefaultResponse,
): response is WorkloadNetworkSegmentsGetDefaultResponse;
export function isUnexpected(
  response:
    | WorkloadNetworkSegmentsCreate200Response
    | WorkloadNetworkSegmentsCreate201Response
    | WorkloadNetworkSegmentsCreateLogicalResponse
    | WorkloadNetworkSegmentsCreateDefaultResponse,
): response is WorkloadNetworkSegmentsCreateDefaultResponse;
export function isUnexpected(
  response:
    | WorkloadNetworkSegmentsUpdate200Response
    | WorkloadNetworkSegmentsUpdate202Response
    | WorkloadNetworkSegmentsUpdateLogicalResponse
    | WorkloadNetworkSegmentsUpdateDefaultResponse,
): response is WorkloadNetworkSegmentsUpdateDefaultResponse;
export function isUnexpected(
  response:
    | WorkloadNetworkSegmentsDeleteSegment200Response
    | WorkloadNetworkSegmentsDeleteSegment202Response
    | WorkloadNetworkSegmentsDeleteSegment204Response
    | WorkloadNetworkSegmentsDeleteSegmentLogicalResponse
    | WorkloadNetworkSegmentsDeleteSegmentDefaultResponse,
): response is WorkloadNetworkSegmentsDeleteSegmentDefaultResponse;
export function isUnexpected(
  response:
    | WorkloadNetworkDhcpConfigurationsListByWorkloadNetwork200Response
    | WorkloadNetworkDhcpConfigurationsListByWorkloadNetworkDefaultResponse,
): response is WorkloadNetworkDhcpConfigurationsListByWorkloadNetworkDefaultResponse;
export function isUnexpected(
  response:
    | WorkloadNetworkDhcpConfigurationsGet200Response
    | WorkloadNetworkDhcpConfigurationsGetDefaultResponse,
): response is WorkloadNetworkDhcpConfigurationsGetDefaultResponse;
export function isUnexpected(
  response:
    | WorkloadNetworkDhcpConfigurationsCreate200Response
    | WorkloadNetworkDhcpConfigurationsCreate201Response
    | WorkloadNetworkDhcpConfigurationsCreateLogicalResponse
    | WorkloadNetworkDhcpConfigurationsCreateDefaultResponse,
): response is WorkloadNetworkDhcpConfigurationsCreateDefaultResponse;
export function isUnexpected(
  response:
    | WorkloadNetworkDhcpConfigurationsUpdate200Response
    | WorkloadNetworkDhcpConfigurationsUpdate202Response
    | WorkloadNetworkDhcpConfigurationsUpdateLogicalResponse
    | WorkloadNetworkDhcpConfigurationsUpdateDefaultResponse,
): response is WorkloadNetworkDhcpConfigurationsUpdateDefaultResponse;
export function isUnexpected(
  response:
    | WorkloadNetworkDhcpConfigurationsDelete200Response
    | WorkloadNetworkDhcpConfigurationsDelete202Response
    | WorkloadNetworkDhcpConfigurationsDelete204Response
    | WorkloadNetworkDhcpConfigurationsDeleteLogicalResponse
    | WorkloadNetworkDhcpConfigurationsDeleteDefaultResponse,
): response is WorkloadNetworkDhcpConfigurationsDeleteDefaultResponse;
export function isUnexpected(
  response:
    | WorkloadNetworkGatewaysListByWorkloadNetwork200Response
    | WorkloadNetworkGatewaysListByWorkloadNetworkDefaultResponse,
): response is WorkloadNetworkGatewaysListByWorkloadNetworkDefaultResponse;
export function isUnexpected(
  response:
    | WorkloadNetworkGatewaysGet200Response
    | WorkloadNetworkGatewaysGetDefaultResponse,
): response is WorkloadNetworkGatewaysGetDefaultResponse;
export function isUnexpected(
  response:
    | WorkloadNetworkPortMirroringProfilesListByWorkloadNetwork200Response
    | WorkloadNetworkPortMirroringProfilesListByWorkloadNetworkDefaultResponse,
): response is WorkloadNetworkPortMirroringProfilesListByWorkloadNetworkDefaultResponse;
export function isUnexpected(
  response:
    | WorkloadNetworkPortMirroringProfilesGet200Response
    | WorkloadNetworkPortMirroringProfilesGetDefaultResponse,
): response is WorkloadNetworkPortMirroringProfilesGetDefaultResponse;
export function isUnexpected(
  response:
    | WorkloadNetworkPortMirroringProfilesCreate200Response
    | WorkloadNetworkPortMirroringProfilesCreate201Response
    | WorkloadNetworkPortMirroringProfilesCreateLogicalResponse
    | WorkloadNetworkPortMirroringProfilesCreateDefaultResponse,
): response is WorkloadNetworkPortMirroringProfilesCreateDefaultResponse;
export function isUnexpected(
  response:
    | WorkloadNetworkPortMirroringProfilesUpdate200Response
    | WorkloadNetworkPortMirroringProfilesUpdate202Response
    | WorkloadNetworkPortMirroringProfilesUpdateLogicalResponse
    | WorkloadNetworkPortMirroringProfilesUpdateDefaultResponse,
): response is WorkloadNetworkPortMirroringProfilesUpdateDefaultResponse;
export function isUnexpected(
  response:
    | WorkloadNetworkPortMirroringProfilesDelete200Response
    | WorkloadNetworkPortMirroringProfilesDelete202Response
    | WorkloadNetworkPortMirroringProfilesDelete204Response
    | WorkloadNetworkPortMirroringProfilesDeleteLogicalResponse
    | WorkloadNetworkPortMirroringProfilesDeleteDefaultResponse,
): response is WorkloadNetworkPortMirroringProfilesDeleteDefaultResponse;
export function isUnexpected(
  response:
    | WorkloadNetworkVmGroupsListByWorkloadNetwork200Response
    | WorkloadNetworkVmGroupsListByWorkloadNetworkDefaultResponse,
): response is WorkloadNetworkVmGroupsListByWorkloadNetworkDefaultResponse;
export function isUnexpected(
  response:
    | WorkloadNetworkVmGroupsGet200Response
    | WorkloadNetworkVmGroupsGetDefaultResponse,
): response is WorkloadNetworkVmGroupsGetDefaultResponse;
export function isUnexpected(
  response:
    | WorkloadNetworkVmGroupsCreate200Response
    | WorkloadNetworkVmGroupsCreate201Response
    | WorkloadNetworkVmGroupsCreateLogicalResponse
    | WorkloadNetworkVmGroupsCreateDefaultResponse,
): response is WorkloadNetworkVmGroupsCreateDefaultResponse;
export function isUnexpected(
  response:
    | WorkloadNetworkVmGroupsUpdate200Response
    | WorkloadNetworkVmGroupsUpdate202Response
    | WorkloadNetworkVmGroupsUpdateLogicalResponse
    | WorkloadNetworkVmGroupsUpdateDefaultResponse,
): response is WorkloadNetworkVmGroupsUpdateDefaultResponse;
export function isUnexpected(
  response:
    | WorkloadNetworkVmGroupsDelete200Response
    | WorkloadNetworkVmGroupsDelete202Response
    | WorkloadNetworkVmGroupsDelete204Response
    | WorkloadNetworkVmGroupsDeleteLogicalResponse
    | WorkloadNetworkVmGroupsDeleteDefaultResponse,
): response is WorkloadNetworkVmGroupsDeleteDefaultResponse;
export function isUnexpected(
  response:
    | WorkloadNetworkVirtualMachinesListByWorkloadNetwork200Response
    | WorkloadNetworkVirtualMachinesListByWorkloadNetworkDefaultResponse,
): response is WorkloadNetworkVirtualMachinesListByWorkloadNetworkDefaultResponse;
export function isUnexpected(
  response:
    | WorkloadNetworkVirtualMachinesGet200Response
    | WorkloadNetworkVirtualMachinesGetDefaultResponse,
): response is WorkloadNetworkVirtualMachinesGetDefaultResponse;
export function isUnexpected(
  response:
    | WorkloadNetworkDnsServicesListByWorkloadNetwork200Response
    | WorkloadNetworkDnsServicesListByWorkloadNetworkDefaultResponse,
): response is WorkloadNetworkDnsServicesListByWorkloadNetworkDefaultResponse;
export function isUnexpected(
  response:
    | WorkloadNetworkDnsServicesGet200Response
    | WorkloadNetworkDnsServicesGetDefaultResponse,
): response is WorkloadNetworkDnsServicesGetDefaultResponse;
export function isUnexpected(
  response:
    | WorkloadNetworkDnsServicesCreate200Response
    | WorkloadNetworkDnsServicesCreate201Response
    | WorkloadNetworkDnsServicesCreateLogicalResponse
    | WorkloadNetworkDnsServicesCreateDefaultResponse,
): response is WorkloadNetworkDnsServicesCreateDefaultResponse;
export function isUnexpected(
  response:
    | WorkloadNetworkDnsServicesUpdate200Response
    | WorkloadNetworkDnsServicesUpdate202Response
    | WorkloadNetworkDnsServicesUpdateLogicalResponse
    | WorkloadNetworkDnsServicesUpdateDefaultResponse,
): response is WorkloadNetworkDnsServicesUpdateDefaultResponse;
export function isUnexpected(
  response:
    | WorkloadNetworkDnsServicesDelete200Response
    | WorkloadNetworkDnsServicesDelete202Response
    | WorkloadNetworkDnsServicesDelete204Response
    | WorkloadNetworkDnsServicesDeleteLogicalResponse
    | WorkloadNetworkDnsServicesDeleteDefaultResponse,
): response is WorkloadNetworkDnsServicesDeleteDefaultResponse;
export function isUnexpected(
  response:
    | WorkloadNetworkDnsZonesListByWorkloadNetwork200Response
    | WorkloadNetworkDnsZonesListByWorkloadNetworkDefaultResponse,
): response is WorkloadNetworkDnsZonesListByWorkloadNetworkDefaultResponse;
export function isUnexpected(
  response:
    | WorkloadNetworkDnsZonesGet200Response
    | WorkloadNetworkDnsZonesGetDefaultResponse,
): response is WorkloadNetworkDnsZonesGetDefaultResponse;
export function isUnexpected(
  response:
    | WorkloadNetworkDnsZonesCreate200Response
    | WorkloadNetworkDnsZonesCreate201Response
    | WorkloadNetworkDnsZonesCreateLogicalResponse
    | WorkloadNetworkDnsZonesCreateDefaultResponse,
): response is WorkloadNetworkDnsZonesCreateDefaultResponse;
export function isUnexpected(
  response:
    | WorkloadNetworkDnsZonesUpdate200Response
    | WorkloadNetworkDnsZonesUpdate202Response
    | WorkloadNetworkDnsZonesUpdateLogicalResponse
    | WorkloadNetworkDnsZonesUpdateDefaultResponse,
): response is WorkloadNetworkDnsZonesUpdateDefaultResponse;
export function isUnexpected(
  response:
    | WorkloadNetworkDnsZonesDelete200Response
    | WorkloadNetworkDnsZonesDelete202Response
    | WorkloadNetworkDnsZonesDelete204Response
    | WorkloadNetworkDnsZonesDeleteLogicalResponse
    | WorkloadNetworkDnsZonesDeleteDefaultResponse,
): response is WorkloadNetworkDnsZonesDeleteDefaultResponse;
export function isUnexpected(
  response:
    | WorkloadNetworkPublicIpsListByWorkloadNetwork200Response
    | WorkloadNetworkPublicIpsListByWorkloadNetworkDefaultResponse,
): response is WorkloadNetworkPublicIpsListByWorkloadNetworkDefaultResponse;
export function isUnexpected(
  response:
    | WorkloadNetworkPublicIpsGet200Response
    | WorkloadNetworkPublicIpsGetDefaultResponse,
): response is WorkloadNetworkPublicIpsGetDefaultResponse;
export function isUnexpected(
  response:
    | WorkloadNetworkPublicIpsCreate200Response
    | WorkloadNetworkPublicIpsCreate201Response
    | WorkloadNetworkPublicIpsCreateLogicalResponse
    | WorkloadNetworkPublicIpsCreateDefaultResponse,
): response is WorkloadNetworkPublicIpsCreateDefaultResponse;
export function isUnexpected(
  response:
    | WorkloadNetworkPublicIpsDelete200Response
    | WorkloadNetworkPublicIpsDelete202Response
    | WorkloadNetworkPublicIpsDelete204Response
    | WorkloadNetworkPublicIpsDeleteLogicalResponse
    | WorkloadNetworkPublicIpsDeleteDefaultResponse,
): response is WorkloadNetworkPublicIpsDeleteDefaultResponse;
export function isUnexpected(
  response:
    | CloudLinksListByPrivateCloud200Response
    | CloudLinksListByPrivateCloudDefaultResponse,
): response is CloudLinksListByPrivateCloudDefaultResponse;
export function isUnexpected(
  response: CloudLinksGet200Response | CloudLinksGetDefaultResponse,
): response is CloudLinksGetDefaultResponse;
export function isUnexpected(
  response:
    | CloudLinksCreateOrUpdate200Response
    | CloudLinksCreateOrUpdate201Response
    | CloudLinksCreateOrUpdateLogicalResponse
    | CloudLinksCreateOrUpdateDefaultResponse,
): response is CloudLinksCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response:
    | CloudLinksDelete200Response
    | CloudLinksDelete202Response
    | CloudLinksDelete204Response
    | CloudLinksDeleteLogicalResponse
    | CloudLinksDeleteDefaultResponse,
): response is CloudLinksDeleteDefaultResponse;
export function isUnexpected(
  response:
    | AddonsListByPrivateCloud200Response
    | AddonsListByPrivateCloudDefaultResponse,
): response is AddonsListByPrivateCloudDefaultResponse;
export function isUnexpected(
  response: AddonsGet200Response | AddonsGetDefaultResponse,
): response is AddonsGetDefaultResponse;
export function isUnexpected(
  response:
    | AddonsCreateOrUpdate200Response
    | AddonsCreateOrUpdate201Response
    | AddonsCreateOrUpdateLogicalResponse
    | AddonsCreateOrUpdateDefaultResponse,
): response is AddonsCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response:
    | AddonsDelete200Response
    | AddonsDelete202Response
    | AddonsDelete204Response
    | AddonsDeleteLogicalResponse
    | AddonsDeleteDefaultResponse,
): response is AddonsDeleteDefaultResponse;
export function isUnexpected(
  response:
    | VirtualMachinesListByCluster200Response
    | VirtualMachinesListByClusterDefaultResponse,
): response is VirtualMachinesListByClusterDefaultResponse;
export function isUnexpected(
  response: VirtualMachinesGet200Response | VirtualMachinesGetDefaultResponse,
): response is VirtualMachinesGetDefaultResponse;
export function isUnexpected(
  response:
    | VirtualMachinesRestrictMovement202Response
    | VirtualMachinesRestrictMovementLogicalResponse
    | VirtualMachinesRestrictMovementDefaultResponse,
): response is VirtualMachinesRestrictMovementDefaultResponse;
export function isUnexpected(
  response:
    | PlacementPoliciesListByCluster200Response
    | PlacementPoliciesListByClusterDefaultResponse,
): response is PlacementPoliciesListByClusterDefaultResponse;
export function isUnexpected(
  response:
    | PlacementPoliciesGet200Response
    | PlacementPoliciesGetDefaultResponse,
): response is PlacementPoliciesGetDefaultResponse;
export function isUnexpected(
  response:
    | PlacementPoliciesCreateOrUpdate200Response
    | PlacementPoliciesCreateOrUpdate201Response
    | PlacementPoliciesCreateOrUpdateLogicalResponse
    | PlacementPoliciesCreateOrUpdateDefaultResponse,
): response is PlacementPoliciesCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response:
    | PlacementPoliciesUpdate200Response
    | PlacementPoliciesUpdate202Response
    | PlacementPoliciesUpdateDefaultResponse,
): response is PlacementPoliciesUpdateDefaultResponse;
export function isUnexpected(
  response:
    | PlacementPoliciesDelete200Response
    | PlacementPoliciesDelete202Response
    | PlacementPoliciesDelete204Response
    | PlacementPoliciesDeleteLogicalResponse
    | PlacementPoliciesDeleteDefaultResponse,
): response is PlacementPoliciesDeleteDefaultResponse;
export function isUnexpected(
  response:
    | ScriptPackagesListByPrivateCloud200Response
    | ScriptPackagesListByPrivateCloudDefaultResponse,
): response is ScriptPackagesListByPrivateCloudDefaultResponse;
export function isUnexpected(
  response: ScriptPackagesGet200Response | ScriptPackagesGetDefaultResponse,
): response is ScriptPackagesGetDefaultResponse;
export function isUnexpected(
  response:
    | ScriptCmdletsListByScriptPackage200Response
    | ScriptCmdletsListByScriptPackageDefaultResponse,
): response is ScriptCmdletsListByScriptPackageDefaultResponse;
export function isUnexpected(
  response: ScriptCmdletsGet200Response | ScriptCmdletsGetDefaultResponse,
): response is ScriptCmdletsGetDefaultResponse;
export function isUnexpected(
  response:
    | ScriptExecutionsListByPrivateCloud200Response
    | ScriptExecutionsListByPrivateCloudDefaultResponse,
): response is ScriptExecutionsListByPrivateCloudDefaultResponse;
export function isUnexpected(
  response: ScriptExecutionsGet200Response | ScriptExecutionsGetDefaultResponse,
): response is ScriptExecutionsGetDefaultResponse;
export function isUnexpected(
  response:
    | ScriptExecutionsCreateOrUpdate200Response
    | ScriptExecutionsCreateOrUpdate201Response
    | ScriptExecutionsCreateOrUpdateLogicalResponse
    | ScriptExecutionsCreateOrUpdateDefaultResponse,
): response is ScriptExecutionsCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response:
    | ScriptExecutionsDelete200Response
    | ScriptExecutionsDelete202Response
    | ScriptExecutionsDelete204Response
    | ScriptExecutionsDeleteLogicalResponse
    | ScriptExecutionsDeleteDefaultResponse,
): response is ScriptExecutionsDeleteDefaultResponse;
export function isUnexpected(
  response:
    | ScriptExecutionsGetExecutionLogs200Response
    | ScriptExecutionsGetExecutionLogsDefaultResponse,
): response is ScriptExecutionsGetExecutionLogsDefaultResponse;
export function isUnexpected(
  response:
    | IscsiPathsListByPrivateCloud200Response
    | IscsiPathsListByPrivateCloudDefaultResponse,
): response is IscsiPathsListByPrivateCloudDefaultResponse;
export function isUnexpected(
  response: IscsiPathsGet200Response | IscsiPathsGetDefaultResponse,
): response is IscsiPathsGetDefaultResponse;
export function isUnexpected(
  response:
    | IscsiPathsCreateOrUpdate200Response
    | IscsiPathsCreateOrUpdate201Response
    | IscsiPathsCreateOrUpdateLogicalResponse
    | IscsiPathsCreateOrUpdateDefaultResponse,
): response is IscsiPathsCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response:
    | IscsiPathsDelete200Response
    | IscsiPathsDelete202Response
    | IscsiPathsDelete204Response
    | IscsiPathsDeleteLogicalResponse
    | IscsiPathsDeleteDefaultResponse,
): response is IscsiPathsDeleteDefaultResponse;
export function isUnexpected(
  response:
    | OperationsList200Response
    | OperationsListDefaultResponse
    | LocationsCheckTrialAvailability200Response
    | LocationsCheckTrialAvailabilityDefaultResponse
    | LocationsCheckQuotaAvailability200Response
    | LocationsCheckQuotaAvailabilityDefaultResponse
    | PrivateCloudsListByResourceGroup200Response
    | PrivateCloudsListByResourceGroupDefaultResponse
    | PrivateCloudsListInSubscription200Response
    | PrivateCloudsListInSubscriptionDefaultResponse
    | PrivateCloudsGet200Response
    | PrivateCloudsGetDefaultResponse
    | PrivateCloudsCreateOrUpdate200Response
    | PrivateCloudsCreateOrUpdate201Response
    | PrivateCloudsCreateOrUpdateLogicalResponse
    | PrivateCloudsCreateOrUpdateDefaultResponse
    | PrivateCloudsUpdate200Response
    | PrivateCloudsUpdate201Response
    | PrivateCloudsUpdateDefaultResponse
    | PrivateCloudsDelete200Response
    | PrivateCloudsDelete202Response
    | PrivateCloudsDelete204Response
    | PrivateCloudsDeleteLogicalResponse
    | PrivateCloudsDeleteDefaultResponse
    | PrivateCloudsRotateVcenterPassword202Response
    | PrivateCloudsRotateVcenterPassword204Response
    | PrivateCloudsRotateVcenterPasswordLogicalResponse
    | PrivateCloudsRotateVcenterPasswordDefaultResponse
    | PrivateCloudsRotateNsxtPassword202Response
    | PrivateCloudsRotateNsxtPassword204Response
    | PrivateCloudsRotateNsxtPasswordLogicalResponse
    | PrivateCloudsRotateNsxtPasswordDefaultResponse
    | PrivateCloudsListAdminCredentials200Response
    | PrivateCloudsListAdminCredentialsDefaultResponse
    | ClustersListByPrivateCloud200Response
    | ClustersListByPrivateCloudDefaultResponse
    | ClustersGet200Response
    | ClustersGetDefaultResponse
    | ClustersCreateOrUpdate200Response
    | ClustersCreateOrUpdate201Response
    | ClustersCreateOrUpdateLogicalResponse
    | ClustersCreateOrUpdateDefaultResponse
    | ClustersUpdate200Response
    | ClustersUpdate201Response
    | ClustersUpdateDefaultResponse
    | ClustersDelete200Response
    | ClustersDelete202Response
    | ClustersDelete204Response
    | ClustersDeleteLogicalResponse
    | ClustersDeleteDefaultResponse
    | ClustersListZones200Response
    | ClustersListZonesDefaultResponse
    | DatastoresListByCluster200Response
    | DatastoresListByClusterDefaultResponse
    | DatastoresGet200Response
    | DatastoresGetDefaultResponse
    | DatastoresCreateOrUpdate200Response
    | DatastoresCreateOrUpdate201Response
    | DatastoresCreateOrUpdateLogicalResponse
    | DatastoresCreateOrUpdateDefaultResponse
    | DatastoresDelete200Response
    | DatastoresDelete202Response
    | DatastoresDelete204Response
    | DatastoresDeleteLogicalResponse
    | DatastoresDeleteDefaultResponse
    | HcxEnterpriseSitesListByPrivateCloud200Response
    | HcxEnterpriseSitesListByPrivateCloudDefaultResponse
    | HcxEnterpriseSitesGet200Response
    | HcxEnterpriseSitesGetDefaultResponse
    | HcxEnterpriseSitesCreateOrUpdate200Response
    | HcxEnterpriseSitesCreateOrUpdate201Response
    | HcxEnterpriseSitesCreateOrUpdateDefaultResponse
    | HcxEnterpriseSitesDelete200Response
    | HcxEnterpriseSitesDelete204Response
    | HcxEnterpriseSitesDeleteDefaultResponse
    | AuthorizationsListByPrivateCloud200Response
    | AuthorizationsListByPrivateCloudDefaultResponse
    | AuthorizationsGet200Response
    | AuthorizationsGetDefaultResponse
    | AuthorizationsCreateOrUpdate200Response
    | AuthorizationsCreateOrUpdate201Response
    | AuthorizationsCreateOrUpdateLogicalResponse
    | AuthorizationsCreateOrUpdateDefaultResponse
    | AuthorizationsDelete200Response
    | AuthorizationsDelete202Response
    | AuthorizationsDelete204Response
    | AuthorizationsDeleteLogicalResponse
    | AuthorizationsDeleteDefaultResponse
    | GlobalReachConnectionsListByPrivateCloud200Response
    | GlobalReachConnectionsListByPrivateCloudDefaultResponse
    | GlobalReachConnectionsGet200Response
    | GlobalReachConnectionsGetDefaultResponse
    | GlobalReachConnectionsCreateOrUpdate200Response
    | GlobalReachConnectionsCreateOrUpdate201Response
    | GlobalReachConnectionsCreateOrUpdateLogicalResponse
    | GlobalReachConnectionsCreateOrUpdateDefaultResponse
    | GlobalReachConnectionsDelete200Response
    | GlobalReachConnectionsDelete202Response
    | GlobalReachConnectionsDelete204Response
    | GlobalReachConnectionsDeleteLogicalResponse
    | GlobalReachConnectionsDeleteDefaultResponse
    | WorkloadNetworksGet200Response
    | WorkloadNetworksGetDefaultResponse
    | WorkloadNetworksListByPrivateCloud200Response
    | WorkloadNetworksListByPrivateCloudDefaultResponse
    | WorkloadNetworkSegmentsListByWorkloadNetwork200Response
    | WorkloadNetworkSegmentsListByWorkloadNetworkDefaultResponse
    | WorkloadNetworkSegmentsGet200Response
    | WorkloadNetworkSegmentsGetDefaultResponse
    | WorkloadNetworkSegmentsCreate200Response
    | WorkloadNetworkSegmentsCreate201Response
    | WorkloadNetworkSegmentsCreateLogicalResponse
    | WorkloadNetworkSegmentsCreateDefaultResponse
    | WorkloadNetworkSegmentsUpdate200Response
    | WorkloadNetworkSegmentsUpdate202Response
    | WorkloadNetworkSegmentsUpdateLogicalResponse
    | WorkloadNetworkSegmentsUpdateDefaultResponse
    | WorkloadNetworkSegmentsDeleteSegment200Response
    | WorkloadNetworkSegmentsDeleteSegment202Response
    | WorkloadNetworkSegmentsDeleteSegment204Response
    | WorkloadNetworkSegmentsDeleteSegmentLogicalResponse
    | WorkloadNetworkSegmentsDeleteSegmentDefaultResponse
    | WorkloadNetworkDhcpConfigurationsListByWorkloadNetwork200Response
    | WorkloadNetworkDhcpConfigurationsListByWorkloadNetworkDefaultResponse
    | WorkloadNetworkDhcpConfigurationsGet200Response
    | WorkloadNetworkDhcpConfigurationsGetDefaultResponse
    | WorkloadNetworkDhcpConfigurationsCreate200Response
    | WorkloadNetworkDhcpConfigurationsCreate201Response
    | WorkloadNetworkDhcpConfigurationsCreateLogicalResponse
    | WorkloadNetworkDhcpConfigurationsCreateDefaultResponse
    | WorkloadNetworkDhcpConfigurationsUpdate200Response
    | WorkloadNetworkDhcpConfigurationsUpdate202Response
    | WorkloadNetworkDhcpConfigurationsUpdateLogicalResponse
    | WorkloadNetworkDhcpConfigurationsUpdateDefaultResponse
    | WorkloadNetworkDhcpConfigurationsDelete200Response
    | WorkloadNetworkDhcpConfigurationsDelete202Response
    | WorkloadNetworkDhcpConfigurationsDelete204Response
    | WorkloadNetworkDhcpConfigurationsDeleteLogicalResponse
    | WorkloadNetworkDhcpConfigurationsDeleteDefaultResponse
    | WorkloadNetworkGatewaysListByWorkloadNetwork200Response
    | WorkloadNetworkGatewaysListByWorkloadNetworkDefaultResponse
    | WorkloadNetworkGatewaysGet200Response
    | WorkloadNetworkGatewaysGetDefaultResponse
    | WorkloadNetworkPortMirroringProfilesListByWorkloadNetwork200Response
    | WorkloadNetworkPortMirroringProfilesListByWorkloadNetworkDefaultResponse
    | WorkloadNetworkPortMirroringProfilesGet200Response
    | WorkloadNetworkPortMirroringProfilesGetDefaultResponse
    | WorkloadNetworkPortMirroringProfilesCreate200Response
    | WorkloadNetworkPortMirroringProfilesCreate201Response
    | WorkloadNetworkPortMirroringProfilesCreateLogicalResponse
    | WorkloadNetworkPortMirroringProfilesCreateDefaultResponse
    | WorkloadNetworkPortMirroringProfilesUpdate200Response
    | WorkloadNetworkPortMirroringProfilesUpdate202Response
    | WorkloadNetworkPortMirroringProfilesUpdateLogicalResponse
    | WorkloadNetworkPortMirroringProfilesUpdateDefaultResponse
    | WorkloadNetworkPortMirroringProfilesDelete200Response
    | WorkloadNetworkPortMirroringProfilesDelete202Response
    | WorkloadNetworkPortMirroringProfilesDelete204Response
    | WorkloadNetworkPortMirroringProfilesDeleteLogicalResponse
    | WorkloadNetworkPortMirroringProfilesDeleteDefaultResponse
    | WorkloadNetworkVmGroupsListByWorkloadNetwork200Response
    | WorkloadNetworkVmGroupsListByWorkloadNetworkDefaultResponse
    | WorkloadNetworkVmGroupsGet200Response
    | WorkloadNetworkVmGroupsGetDefaultResponse
    | WorkloadNetworkVmGroupsCreate200Response
    | WorkloadNetworkVmGroupsCreate201Response
    | WorkloadNetworkVmGroupsCreateLogicalResponse
    | WorkloadNetworkVmGroupsCreateDefaultResponse
    | WorkloadNetworkVmGroupsUpdate200Response
    | WorkloadNetworkVmGroupsUpdate202Response
    | WorkloadNetworkVmGroupsUpdateLogicalResponse
    | WorkloadNetworkVmGroupsUpdateDefaultResponse
    | WorkloadNetworkVmGroupsDelete200Response
    | WorkloadNetworkVmGroupsDelete202Response
    | WorkloadNetworkVmGroupsDelete204Response
    | WorkloadNetworkVmGroupsDeleteLogicalResponse
    | WorkloadNetworkVmGroupsDeleteDefaultResponse
    | WorkloadNetworkVirtualMachinesListByWorkloadNetwork200Response
    | WorkloadNetworkVirtualMachinesListByWorkloadNetworkDefaultResponse
    | WorkloadNetworkVirtualMachinesGet200Response
    | WorkloadNetworkVirtualMachinesGetDefaultResponse
    | WorkloadNetworkDnsServicesListByWorkloadNetwork200Response
    | WorkloadNetworkDnsServicesListByWorkloadNetworkDefaultResponse
    | WorkloadNetworkDnsServicesGet200Response
    | WorkloadNetworkDnsServicesGetDefaultResponse
    | WorkloadNetworkDnsServicesCreate200Response
    | WorkloadNetworkDnsServicesCreate201Response
    | WorkloadNetworkDnsServicesCreateLogicalResponse
    | WorkloadNetworkDnsServicesCreateDefaultResponse
    | WorkloadNetworkDnsServicesUpdate200Response
    | WorkloadNetworkDnsServicesUpdate202Response
    | WorkloadNetworkDnsServicesUpdateLogicalResponse
    | WorkloadNetworkDnsServicesUpdateDefaultResponse
    | WorkloadNetworkDnsServicesDelete200Response
    | WorkloadNetworkDnsServicesDelete202Response
    | WorkloadNetworkDnsServicesDelete204Response
    | WorkloadNetworkDnsServicesDeleteLogicalResponse
    | WorkloadNetworkDnsServicesDeleteDefaultResponse
    | WorkloadNetworkDnsZonesListByWorkloadNetwork200Response
    | WorkloadNetworkDnsZonesListByWorkloadNetworkDefaultResponse
    | WorkloadNetworkDnsZonesGet200Response
    | WorkloadNetworkDnsZonesGetDefaultResponse
    | WorkloadNetworkDnsZonesCreate200Response
    | WorkloadNetworkDnsZonesCreate201Response
    | WorkloadNetworkDnsZonesCreateLogicalResponse
    | WorkloadNetworkDnsZonesCreateDefaultResponse
    | WorkloadNetworkDnsZonesUpdate200Response
    | WorkloadNetworkDnsZonesUpdate202Response
    | WorkloadNetworkDnsZonesUpdateLogicalResponse
    | WorkloadNetworkDnsZonesUpdateDefaultResponse
    | WorkloadNetworkDnsZonesDelete200Response
    | WorkloadNetworkDnsZonesDelete202Response
    | WorkloadNetworkDnsZonesDelete204Response
    | WorkloadNetworkDnsZonesDeleteLogicalResponse
    | WorkloadNetworkDnsZonesDeleteDefaultResponse
    | WorkloadNetworkPublicIpsListByWorkloadNetwork200Response
    | WorkloadNetworkPublicIpsListByWorkloadNetworkDefaultResponse
    | WorkloadNetworkPublicIpsGet200Response
    | WorkloadNetworkPublicIpsGetDefaultResponse
    | WorkloadNetworkPublicIpsCreate200Response
    | WorkloadNetworkPublicIpsCreate201Response
    | WorkloadNetworkPublicIpsCreateLogicalResponse
    | WorkloadNetworkPublicIpsCreateDefaultResponse
    | WorkloadNetworkPublicIpsDelete200Response
    | WorkloadNetworkPublicIpsDelete202Response
    | WorkloadNetworkPublicIpsDelete204Response
    | WorkloadNetworkPublicIpsDeleteLogicalResponse
    | WorkloadNetworkPublicIpsDeleteDefaultResponse
    | CloudLinksListByPrivateCloud200Response
    | CloudLinksListByPrivateCloudDefaultResponse
    | CloudLinksGet200Response
    | CloudLinksGetDefaultResponse
    | CloudLinksCreateOrUpdate200Response
    | CloudLinksCreateOrUpdate201Response
    | CloudLinksCreateOrUpdateLogicalResponse
    | CloudLinksCreateOrUpdateDefaultResponse
    | CloudLinksDelete200Response
    | CloudLinksDelete202Response
    | CloudLinksDelete204Response
    | CloudLinksDeleteLogicalResponse
    | CloudLinksDeleteDefaultResponse
    | AddonsListByPrivateCloud200Response
    | AddonsListByPrivateCloudDefaultResponse
    | AddonsGet200Response
    | AddonsGetDefaultResponse
    | AddonsCreateOrUpdate200Response
    | AddonsCreateOrUpdate201Response
    | AddonsCreateOrUpdateLogicalResponse
    | AddonsCreateOrUpdateDefaultResponse
    | AddonsDelete200Response
    | AddonsDelete202Response
    | AddonsDelete204Response
    | AddonsDeleteLogicalResponse
    | AddonsDeleteDefaultResponse
    | VirtualMachinesListByCluster200Response
    | VirtualMachinesListByClusterDefaultResponse
    | VirtualMachinesGet200Response
    | VirtualMachinesGetDefaultResponse
    | VirtualMachinesRestrictMovement202Response
    | VirtualMachinesRestrictMovementLogicalResponse
    | VirtualMachinesRestrictMovementDefaultResponse
    | PlacementPoliciesListByCluster200Response
    | PlacementPoliciesListByClusterDefaultResponse
    | PlacementPoliciesGet200Response
    | PlacementPoliciesGetDefaultResponse
    | PlacementPoliciesCreateOrUpdate200Response
    | PlacementPoliciesCreateOrUpdate201Response
    | PlacementPoliciesCreateOrUpdateLogicalResponse
    | PlacementPoliciesCreateOrUpdateDefaultResponse
    | PlacementPoliciesUpdate200Response
    | PlacementPoliciesUpdate202Response
    | PlacementPoliciesUpdateDefaultResponse
    | PlacementPoliciesDelete200Response
    | PlacementPoliciesDelete202Response
    | PlacementPoliciesDelete204Response
    | PlacementPoliciesDeleteLogicalResponse
    | PlacementPoliciesDeleteDefaultResponse
    | ScriptPackagesListByPrivateCloud200Response
    | ScriptPackagesListByPrivateCloudDefaultResponse
    | ScriptPackagesGet200Response
    | ScriptPackagesGetDefaultResponse
    | ScriptCmdletsListByScriptPackage200Response
    | ScriptCmdletsListByScriptPackageDefaultResponse
    | ScriptCmdletsGet200Response
    | ScriptCmdletsGetDefaultResponse
    | ScriptExecutionsListByPrivateCloud200Response
    | ScriptExecutionsListByPrivateCloudDefaultResponse
    | ScriptExecutionsGet200Response
    | ScriptExecutionsGetDefaultResponse
    | ScriptExecutionsCreateOrUpdate200Response
    | ScriptExecutionsCreateOrUpdate201Response
    | ScriptExecutionsCreateOrUpdateLogicalResponse
    | ScriptExecutionsCreateOrUpdateDefaultResponse
    | ScriptExecutionsDelete200Response
    | ScriptExecutionsDelete202Response
    | ScriptExecutionsDelete204Response
    | ScriptExecutionsDeleteLogicalResponse
    | ScriptExecutionsDeleteDefaultResponse
    | ScriptExecutionsGetExecutionLogs200Response
    | ScriptExecutionsGetExecutionLogsDefaultResponse
    | IscsiPathsListByPrivateCloud200Response
    | IscsiPathsListByPrivateCloudDefaultResponse
    | IscsiPathsGet200Response
    | IscsiPathsGetDefaultResponse
    | IscsiPathsCreateOrUpdate200Response
    | IscsiPathsCreateOrUpdate201Response
    | IscsiPathsCreateOrUpdateLogicalResponse
    | IscsiPathsCreateOrUpdateDefaultResponse
    | IscsiPathsDelete200Response
    | IscsiPathsDelete202Response
    | IscsiPathsDelete204Response
    | IscsiPathsDeleteLogicalResponse
    | IscsiPathsDeleteDefaultResponse,
): response is
  | OperationsListDefaultResponse
  | LocationsCheckTrialAvailabilityDefaultResponse
  | LocationsCheckQuotaAvailabilityDefaultResponse
  | PrivateCloudsListByResourceGroupDefaultResponse
  | PrivateCloudsListInSubscriptionDefaultResponse
  | PrivateCloudsGetDefaultResponse
  | PrivateCloudsCreateOrUpdateDefaultResponse
  | PrivateCloudsUpdateDefaultResponse
  | PrivateCloudsDeleteDefaultResponse
  | PrivateCloudsRotateVcenterPasswordDefaultResponse
  | PrivateCloudsRotateNsxtPasswordDefaultResponse
  | PrivateCloudsListAdminCredentialsDefaultResponse
  | ClustersListByPrivateCloudDefaultResponse
  | ClustersGetDefaultResponse
  | ClustersCreateOrUpdateDefaultResponse
  | ClustersUpdateDefaultResponse
  | ClustersDeleteDefaultResponse
  | ClustersListZonesDefaultResponse
  | DatastoresListByClusterDefaultResponse
  | DatastoresGetDefaultResponse
  | DatastoresCreateOrUpdateDefaultResponse
  | DatastoresDeleteDefaultResponse
  | HcxEnterpriseSitesListByPrivateCloudDefaultResponse
  | HcxEnterpriseSitesGetDefaultResponse
  | HcxEnterpriseSitesCreateOrUpdateDefaultResponse
  | HcxEnterpriseSitesDeleteDefaultResponse
  | AuthorizationsListByPrivateCloudDefaultResponse
  | AuthorizationsGetDefaultResponse
  | AuthorizationsCreateOrUpdateDefaultResponse
  | AuthorizationsDeleteDefaultResponse
  | GlobalReachConnectionsListByPrivateCloudDefaultResponse
  | GlobalReachConnectionsGetDefaultResponse
  | GlobalReachConnectionsCreateOrUpdateDefaultResponse
  | GlobalReachConnectionsDeleteDefaultResponse
  | WorkloadNetworksGetDefaultResponse
  | WorkloadNetworksListByPrivateCloudDefaultResponse
  | WorkloadNetworkSegmentsListByWorkloadNetworkDefaultResponse
  | WorkloadNetworkSegmentsGetDefaultResponse
  | WorkloadNetworkSegmentsCreateDefaultResponse
  | WorkloadNetworkSegmentsUpdateDefaultResponse
  | WorkloadNetworkSegmentsDeleteSegmentDefaultResponse
  | WorkloadNetworkDhcpConfigurationsListByWorkloadNetworkDefaultResponse
  | WorkloadNetworkDhcpConfigurationsGetDefaultResponse
  | WorkloadNetworkDhcpConfigurationsCreateDefaultResponse
  | WorkloadNetworkDhcpConfigurationsUpdateDefaultResponse
  | WorkloadNetworkDhcpConfigurationsDeleteDefaultResponse
  | WorkloadNetworkGatewaysListByWorkloadNetworkDefaultResponse
  | WorkloadNetworkGatewaysGetDefaultResponse
  | WorkloadNetworkPortMirroringProfilesListByWorkloadNetworkDefaultResponse
  | WorkloadNetworkPortMirroringProfilesGetDefaultResponse
  | WorkloadNetworkPortMirroringProfilesCreateDefaultResponse
  | WorkloadNetworkPortMirroringProfilesUpdateDefaultResponse
  | WorkloadNetworkPortMirroringProfilesDeleteDefaultResponse
  | WorkloadNetworkVmGroupsListByWorkloadNetworkDefaultResponse
  | WorkloadNetworkVmGroupsGetDefaultResponse
  | WorkloadNetworkVmGroupsCreateDefaultResponse
  | WorkloadNetworkVmGroupsUpdateDefaultResponse
  | WorkloadNetworkVmGroupsDeleteDefaultResponse
  | WorkloadNetworkVirtualMachinesListByWorkloadNetworkDefaultResponse
  | WorkloadNetworkVirtualMachinesGetDefaultResponse
  | WorkloadNetworkDnsServicesListByWorkloadNetworkDefaultResponse
  | WorkloadNetworkDnsServicesGetDefaultResponse
  | WorkloadNetworkDnsServicesCreateDefaultResponse
  | WorkloadNetworkDnsServicesUpdateDefaultResponse
  | WorkloadNetworkDnsServicesDeleteDefaultResponse
  | WorkloadNetworkDnsZonesListByWorkloadNetworkDefaultResponse
  | WorkloadNetworkDnsZonesGetDefaultResponse
  | WorkloadNetworkDnsZonesCreateDefaultResponse
  | WorkloadNetworkDnsZonesUpdateDefaultResponse
  | WorkloadNetworkDnsZonesDeleteDefaultResponse
  | WorkloadNetworkPublicIpsListByWorkloadNetworkDefaultResponse
  | WorkloadNetworkPublicIpsGetDefaultResponse
  | WorkloadNetworkPublicIpsCreateDefaultResponse
  | WorkloadNetworkPublicIpsDeleteDefaultResponse
  | CloudLinksListByPrivateCloudDefaultResponse
  | CloudLinksGetDefaultResponse
  | CloudLinksCreateOrUpdateDefaultResponse
  | CloudLinksDeleteDefaultResponse
  | AddonsListByPrivateCloudDefaultResponse
  | AddonsGetDefaultResponse
  | AddonsCreateOrUpdateDefaultResponse
  | AddonsDeleteDefaultResponse
  | VirtualMachinesListByClusterDefaultResponse
  | VirtualMachinesGetDefaultResponse
  | VirtualMachinesRestrictMovementDefaultResponse
  | PlacementPoliciesListByClusterDefaultResponse
  | PlacementPoliciesGetDefaultResponse
  | PlacementPoliciesCreateOrUpdateDefaultResponse
  | PlacementPoliciesUpdateDefaultResponse
  | PlacementPoliciesDeleteDefaultResponse
  | ScriptPackagesListByPrivateCloudDefaultResponse
  | ScriptPackagesGetDefaultResponse
  | ScriptCmdletsListByScriptPackageDefaultResponse
  | ScriptCmdletsGetDefaultResponse
  | ScriptExecutionsListByPrivateCloudDefaultResponse
  | ScriptExecutionsGetDefaultResponse
  | ScriptExecutionsCreateOrUpdateDefaultResponse
  | ScriptExecutionsDeleteDefaultResponse
  | ScriptExecutionsGetExecutionLogsDefaultResponse
  | IscsiPathsListByPrivateCloudDefaultResponse
  | IscsiPathsGetDefaultResponse
  | IscsiPathsCreateOrUpdateDefaultResponse
  | IscsiPathsDeleteDefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  let pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    pathDetails = getParametrizedPathSuccess(method, url.pathname);
  }
  return !pathDetails.includes(response.status);
}

function getParametrizedPathSuccess(method: string, path: string): string[] {
  const pathParts = path.split("/");

  // Traverse list to match the longest candidate
  // matchedLen: the length of candidate path
  // matchedValue: the matched status code array
  let matchedLen = -1,
    matchedValue: string[] = [];

  // Iterate the responseMap to find a match
  for (const [key, value] of Object.entries(responseMap)) {
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
          `${candidateParts[i]?.slice(start, end)}`,
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
