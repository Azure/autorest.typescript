// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  OperationsList200Response,
  OperationsListDefaultResponse,
  CloudExadataInfrastructuresListBySubscription200Response,
  CloudExadataInfrastructuresListBySubscriptionDefaultResponse,
  CloudExadataInfrastructuresCreateOrUpdate200Response,
  CloudExadataInfrastructuresCreateOrUpdate201Response,
  CloudExadataInfrastructuresCreateOrUpdateLogicalResponse,
  CloudExadataInfrastructuresCreateOrUpdateDefaultResponse,
  CloudExadataInfrastructuresGet200Response,
  CloudExadataInfrastructuresGetDefaultResponse,
  CloudExadataInfrastructuresUpdate200Response,
  CloudExadataInfrastructuresUpdate202Response,
  CloudExadataInfrastructuresUpdateLogicalResponse,
  CloudExadataInfrastructuresUpdateDefaultResponse,
  CloudExadataInfrastructuresDelete202Response,
  CloudExadataInfrastructuresDelete204Response,
  CloudExadataInfrastructuresDeleteLogicalResponse,
  CloudExadataInfrastructuresDeleteDefaultResponse,
  CloudExadataInfrastructuresListByResourceGroup200Response,
  CloudExadataInfrastructuresListByResourceGroupDefaultResponse,
  CloudExadataInfrastructuresAddStorageCapacity200Response,
  CloudExadataInfrastructuresAddStorageCapacity202Response,
  CloudExadataInfrastructuresAddStorageCapacityLogicalResponse,
  CloudExadataInfrastructuresAddStorageCapacityDefaultResponse,
  DbServersGet200Response,
  DbServersGetDefaultResponse,
  DbServersListByCloudExadataInfrastructure200Response,
  DbServersListByCloudExadataInfrastructureDefaultResponse,
  CloudVmClustersListBySubscription200Response,
  CloudVmClustersListBySubscriptionDefaultResponse,
  CloudVmClustersCreateOrUpdate200Response,
  CloudVmClustersCreateOrUpdate201Response,
  CloudVmClustersCreateOrUpdateLogicalResponse,
  CloudVmClustersCreateOrUpdateDefaultResponse,
  CloudVmClustersGet200Response,
  CloudVmClustersGetDefaultResponse,
  CloudVmClustersUpdate200Response,
  CloudVmClustersUpdate202Response,
  CloudVmClustersUpdateLogicalResponse,
  CloudVmClustersUpdateDefaultResponse,
  CloudVmClustersDelete202Response,
  CloudVmClustersDelete204Response,
  CloudVmClustersDeleteLogicalResponse,
  CloudVmClustersDeleteDefaultResponse,
  CloudVmClustersListByResourceGroup200Response,
  CloudVmClustersListByResourceGroupDefaultResponse,
  CloudVmClustersAddVms200Response,
  CloudVmClustersAddVms202Response,
  CloudVmClustersAddVmsLogicalResponse,
  CloudVmClustersAddVmsDefaultResponse,
  CloudVmClustersRemoveVms200Response,
  CloudVmClustersRemoveVms202Response,
  CloudVmClustersRemoveVmsLogicalResponse,
  CloudVmClustersRemoveVmsDefaultResponse,
  CloudVmClustersListPrivateIpAddresses200Response,
  CloudVmClustersListPrivateIpAddressesDefaultResponse,
  VirtualNetworkAddressesCreateOrUpdate200Response,
  VirtualNetworkAddressesCreateOrUpdate201Response,
  VirtualNetworkAddressesCreateOrUpdateLogicalResponse,
  VirtualNetworkAddressesCreateOrUpdateDefaultResponse,
  VirtualNetworkAddressesGet200Response,
  VirtualNetworkAddressesGetDefaultResponse,
  VirtualNetworkAddressesDelete202Response,
  VirtualNetworkAddressesDelete204Response,
  VirtualNetworkAddressesDeleteLogicalResponse,
  VirtualNetworkAddressesDeleteDefaultResponse,
  VirtualNetworkAddressesListByCloudVmCluster200Response,
  VirtualNetworkAddressesListByCloudVmClusterDefaultResponse,
  SystemVersionsGet200Response,
  SystemVersionsGetDefaultResponse,
  SystemVersionsListByLocation200Response,
  SystemVersionsListByLocationDefaultResponse,
  OracleSubscriptionsListBySubscription200Response,
  OracleSubscriptionsListBySubscriptionDefaultResponse,
  OracleSubscriptionsCreateOrUpdate200Response,
  OracleSubscriptionsCreateOrUpdate201Response,
  OracleSubscriptionsCreateOrUpdateLogicalResponse,
  OracleSubscriptionsCreateOrUpdateDefaultResponse,
  OracleSubscriptionsGet200Response,
  OracleSubscriptionsGetDefaultResponse,
  OracleSubscriptionsUpdate200Response,
  OracleSubscriptionsUpdate202Response,
  OracleSubscriptionsUpdateLogicalResponse,
  OracleSubscriptionsUpdateDefaultResponse,
  OracleSubscriptionsDelete202Response,
  OracleSubscriptionsDelete204Response,
  OracleSubscriptionsDeleteLogicalResponse,
  OracleSubscriptionsDeleteDefaultResponse,
  OracleSubscriptionsListCloudAccountDetails200Response,
  OracleSubscriptionsListCloudAccountDetails202Response,
  OracleSubscriptionsListCloudAccountDetailsLogicalResponse,
  OracleSubscriptionsListCloudAccountDetailsDefaultResponse,
  OracleSubscriptionsListSaasSubscriptionDetails200Response,
  OracleSubscriptionsListSaasSubscriptionDetails202Response,
  OracleSubscriptionsListSaasSubscriptionDetailsLogicalResponse,
  OracleSubscriptionsListSaasSubscriptionDetailsDefaultResponse,
  OracleSubscriptionsListActivationLinks200Response,
  OracleSubscriptionsListActivationLinks202Response,
  OracleSubscriptionsListActivationLinksLogicalResponse,
  OracleSubscriptionsListActivationLinksDefaultResponse,
  DbNodesGet200Response,
  DbNodesGetDefaultResponse,
  DbNodesListByCloudVmCluster200Response,
  DbNodesListByCloudVmClusterDefaultResponse,
  DbNodesAction200Response,
  DbNodesAction202Response,
  DbNodesActionLogicalResponse,
  DbNodesActionDefaultResponse,
  GiVersionsGet200Response,
  GiVersionsGetDefaultResponse,
  GiVersionsListByLocation200Response,
  GiVersionsListByLocationDefaultResponse,
  DbSystemShapesGet200Response,
  DbSystemShapesGetDefaultResponse,
  DbSystemShapesListByLocation200Response,
  DbSystemShapesListByLocationDefaultResponse,
  DnsPrivateViewsGet200Response,
  DnsPrivateViewsGetDefaultResponse,
  DnsPrivateViewsListByLocation200Response,
  DnsPrivateViewsListByLocationDefaultResponse,
  DnsPrivateZonesGet200Response,
  DnsPrivateZonesGetDefaultResponse,
  DnsPrivateZonesListByLocation200Response,
  DnsPrivateZonesListByLocationDefaultResponse,
  AutonomousDatabasesListBySubscription200Response,
  AutonomousDatabasesListBySubscriptionDefaultResponse,
  AutonomousDatabasesCreateOrUpdate200Response,
  AutonomousDatabasesCreateOrUpdate201Response,
  AutonomousDatabasesCreateOrUpdateLogicalResponse,
  AutonomousDatabasesCreateOrUpdateDefaultResponse,
  AutonomousDatabasesGet200Response,
  AutonomousDatabasesGetDefaultResponse,
  AutonomousDatabasesUpdate200Response,
  AutonomousDatabasesUpdate202Response,
  AutonomousDatabasesUpdateLogicalResponse,
  AutonomousDatabasesUpdateDefaultResponse,
  AutonomousDatabasesDelete202Response,
  AutonomousDatabasesDelete204Response,
  AutonomousDatabasesDeleteLogicalResponse,
  AutonomousDatabasesDeleteDefaultResponse,
  AutonomousDatabasesListByResourceGroup200Response,
  AutonomousDatabasesListByResourceGroupDefaultResponse,
  AutonomousDatabasesSwitchover200Response,
  AutonomousDatabasesSwitchover202Response,
  AutonomousDatabasesSwitchoverLogicalResponse,
  AutonomousDatabasesSwitchoverDefaultResponse,
  AutonomousDatabasesFailover200Response,
  AutonomousDatabasesFailover202Response,
  AutonomousDatabasesFailoverLogicalResponse,
  AutonomousDatabasesFailoverDefaultResponse,
  AutonomousDatabasesGenerateWallet200Response,
  AutonomousDatabasesGenerateWalletDefaultResponse,
  AutonomousDatabasesRestore200Response,
  AutonomousDatabasesRestore202Response,
  AutonomousDatabasesRestoreLogicalResponse,
  AutonomousDatabasesRestoreDefaultResponse,
  AutonomousDatabasesShrink200Response,
  AutonomousDatabasesShrink202Response,
  AutonomousDatabasesShrinkLogicalResponse,
  AutonomousDatabasesShrinkDefaultResponse,
  AutonomousDatabaseBackupsCreateOrUpdate200Response,
  AutonomousDatabaseBackupsCreateOrUpdate201Response,
  AutonomousDatabaseBackupsCreateOrUpdateLogicalResponse,
  AutonomousDatabaseBackupsCreateOrUpdateDefaultResponse,
  AutonomousDatabaseBackupsGet200Response,
  AutonomousDatabaseBackupsGetDefaultResponse,
  AutonomousDatabaseBackupsDelete202Response,
  AutonomousDatabaseBackupsDelete204Response,
  AutonomousDatabaseBackupsDeleteLogicalResponse,
  AutonomousDatabaseBackupsDeleteDefaultResponse,
  AutonomousDatabaseBackupsUpdate200Response,
  AutonomousDatabaseBackupsUpdate202Response,
  AutonomousDatabaseBackupsUpdateLogicalResponse,
  AutonomousDatabaseBackupsUpdateDefaultResponse,
  AutonomousDatabaseBackupsListByAutonomousDatabase200Response,
  AutonomousDatabaseBackupsListByAutonomousDatabaseDefaultResponse,
  AutonomousDatabaseCharacterSetsGet200Response,
  AutonomousDatabaseCharacterSetsGetDefaultResponse,
  AutonomousDatabaseCharacterSetsListByLocation200Response,
  AutonomousDatabaseCharacterSetsListByLocationDefaultResponse,
  AutonomousDatabaseNationalCharacterSetsGet200Response,
  AutonomousDatabaseNationalCharacterSetsGetDefaultResponse,
  AutonomousDatabaseNationalCharacterSetsListByLocation200Response,
  AutonomousDatabaseNationalCharacterSetsListByLocationDefaultResponse,
  AutonomousDatabaseVersionsGet200Response,
  AutonomousDatabaseVersionsGetDefaultResponse,
  AutonomousDatabaseVersionsListByLocation200Response,
  AutonomousDatabaseVersionsListByLocationDefaultResponse,
} from "./responses.js";

const responseMap: Record<string, string[]> = {
  "GET /providers/Oracle.Database/operations": ["200"],
  "GET /subscriptions/{subscriptionId}/providers/Oracle.Database/cloudExadataInfrastructures":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudExadataInfrastructures/{cloudexadatainfrastructurename}":
    ["200"],
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudExadataInfrastructures/{cloudexadatainfrastructurename}":
    ["200", "201"],
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudExadataInfrastructures/{cloudexadatainfrastructurename}":
    ["200", "202"],
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudExadataInfrastructures/{cloudexadatainfrastructurename}":
    ["202", "204"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudExadataInfrastructures":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudExadataInfrastructures/{cloudexadatainfrastructurename}/addStorageCapacity":
    ["200", "202"],
  "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudExadataInfrastructures/{cloudexadatainfrastructurename}/addStorageCapacity":
    ["200", "202"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudExadataInfrastructures/{cloudexadatainfrastructurename}/dbServers/{dbserverocid}":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudExadataInfrastructures/{cloudexadatainfrastructurename}/dbServers":
    ["200"],
  "GET /subscriptions/{subscriptionId}/providers/Oracle.Database/cloudVmClusters":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}":
    ["200"],
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}":
    ["200", "201"],
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}":
    ["200", "202"],
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}":
    ["202", "204"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/addVms":
    ["200", "202"],
  "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/addVms":
    ["200", "202"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/removeVms":
    ["200", "202"],
  "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/removeVms":
    ["200", "202"],
  "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/listPrivateIpAddresses":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/virtualNetworkAddresses/{virtualnetworkaddressname}":
    ["200"],
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/virtualNetworkAddresses/{virtualnetworkaddressname}":
    ["200", "201"],
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/virtualNetworkAddresses/{virtualnetworkaddressname}":
    ["202", "204"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/virtualNetworkAddresses":
    ["200"],
  "GET /subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/systemVersions/{systemversionname}":
    ["200"],
  "GET /subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/systemVersions":
    ["200"],
  "GET /subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions":
    ["200"],
  "GET /subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions/default":
    ["200"],
  "PUT /subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions/default":
    ["200", "201"],
  "PATCH /subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions/default":
    ["200", "202"],
  "DELETE /subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions/default":
    ["202", "204"],
  "GET /subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions/default/listCloudAccountDetails":
    ["200", "202"],
  "POST /subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions/default/listCloudAccountDetails":
    ["200", "202"],
  "GET /subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions/default/listSaasSubscriptionDetails":
    ["200", "202"],
  "POST /subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions/default/listSaasSubscriptionDetails":
    ["200", "202"],
  "GET /subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions/default/listActivationLinks":
    ["200", "202"],
  "POST /subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions/default/listActivationLinks":
    ["200", "202"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/dbNodes/{dbnodeocid}":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/dbNodes":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/dbNodes/{dbnodeocid}/action":
    ["200", "202"],
  "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/dbNodes/{dbnodeocid}/action":
    ["200", "202"],
  "GET /subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/giVersions/{giversionname}":
    ["200"],
  "GET /subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/giVersions":
    ["200"],
  "GET /subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/dbSystemShapes/{dbsystemshapename}":
    ["200"],
  "GET /subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/dbSystemShapes":
    ["200"],
  "GET /subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/dnsPrivateViews/{dnsprivateviewocid}":
    ["200"],
  "GET /subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/dnsPrivateViews":
    ["200"],
  "GET /subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/dnsPrivateZones/{dnsprivatezonename}":
    ["200"],
  "GET /subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/dnsPrivateZones":
    ["200"],
  "GET /subscriptions/{subscriptionId}/providers/Oracle.Database/autonomousDatabases":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}":
    ["200"],
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}":
    ["200", "201"],
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}":
    ["200", "202"],
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}":
    ["202", "204"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}/switchover":
    ["200", "202"],
  "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}/switchover":
    ["200", "202"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}/failover":
    ["200", "202"],
  "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}/failover":
    ["200", "202"],
  "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}/generateWallet":
    ["200"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}/restore":
    ["200", "202"],
  "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}/restore":
    ["200", "202"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}/shrink":
    ["200", "202"],
  "POST /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}/shrink":
    ["200", "202"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}/autonomousDatabaseBackups/{adbbackupid}":
    ["200"],
  "PUT /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}/autonomousDatabaseBackups/{adbbackupid}":
    ["200", "201"],
  "DELETE /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}/autonomousDatabaseBackups/{adbbackupid}":
    ["202", "204"],
  "PATCH /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}/autonomousDatabaseBackups/{adbbackupid}":
    ["200", "202"],
  "GET /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}/autonomousDatabaseBackups":
    ["200"],
  "GET /subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/autonomousDatabaseCharacterSets/{adbscharsetname}":
    ["200"],
  "GET /subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/autonomousDatabaseCharacterSets":
    ["200"],
  "GET /subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/autonomousDatabaseNationalCharacterSets/{adbsncharsetname}":
    ["200"],
  "GET /subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/autonomousDatabaseNationalCharacterSets":
    ["200"],
  "GET /subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/autonomousDbVersions/{autonomousdbversionsname}":
    ["200"],
  "GET /subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/autonomousDbVersions":
    ["200"],
};

export function isUnexpected(
  response: OperationsList200Response | OperationsListDefaultResponse,
): response is OperationsListDefaultResponse;
export function isUnexpected(
  response:
    | CloudExadataInfrastructuresListBySubscription200Response
    | CloudExadataInfrastructuresListBySubscriptionDefaultResponse,
): response is CloudExadataInfrastructuresListBySubscriptionDefaultResponse;
export function isUnexpected(
  response:
    | CloudExadataInfrastructuresCreateOrUpdate200Response
    | CloudExadataInfrastructuresCreateOrUpdate201Response
    | CloudExadataInfrastructuresCreateOrUpdateLogicalResponse
    | CloudExadataInfrastructuresCreateOrUpdateDefaultResponse,
): response is CloudExadataInfrastructuresCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response:
    | CloudExadataInfrastructuresGet200Response
    | CloudExadataInfrastructuresGetDefaultResponse,
): response is CloudExadataInfrastructuresGetDefaultResponse;
export function isUnexpected(
  response:
    | CloudExadataInfrastructuresUpdate200Response
    | CloudExadataInfrastructuresUpdate202Response
    | CloudExadataInfrastructuresUpdateLogicalResponse
    | CloudExadataInfrastructuresUpdateDefaultResponse,
): response is CloudExadataInfrastructuresUpdateDefaultResponse;
export function isUnexpected(
  response:
    | CloudExadataInfrastructuresDelete202Response
    | CloudExadataInfrastructuresDelete204Response
    | CloudExadataInfrastructuresDeleteLogicalResponse
    | CloudExadataInfrastructuresDeleteDefaultResponse,
): response is CloudExadataInfrastructuresDeleteDefaultResponse;
export function isUnexpected(
  response:
    | CloudExadataInfrastructuresListByResourceGroup200Response
    | CloudExadataInfrastructuresListByResourceGroupDefaultResponse,
): response is CloudExadataInfrastructuresListByResourceGroupDefaultResponse;
export function isUnexpected(
  response:
    | CloudExadataInfrastructuresAddStorageCapacity200Response
    | CloudExadataInfrastructuresAddStorageCapacity202Response
    | CloudExadataInfrastructuresAddStorageCapacityLogicalResponse
    | CloudExadataInfrastructuresAddStorageCapacityDefaultResponse,
): response is CloudExadataInfrastructuresAddStorageCapacityDefaultResponse;
export function isUnexpected(
  response: DbServersGet200Response | DbServersGetDefaultResponse,
): response is DbServersGetDefaultResponse;
export function isUnexpected(
  response:
    | DbServersListByCloudExadataInfrastructure200Response
    | DbServersListByCloudExadataInfrastructureDefaultResponse,
): response is DbServersListByCloudExadataInfrastructureDefaultResponse;
export function isUnexpected(
  response:
    | CloudVmClustersListBySubscription200Response
    | CloudVmClustersListBySubscriptionDefaultResponse,
): response is CloudVmClustersListBySubscriptionDefaultResponse;
export function isUnexpected(
  response:
    | CloudVmClustersCreateOrUpdate200Response
    | CloudVmClustersCreateOrUpdate201Response
    | CloudVmClustersCreateOrUpdateLogicalResponse
    | CloudVmClustersCreateOrUpdateDefaultResponse,
): response is CloudVmClustersCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response: CloudVmClustersGet200Response | CloudVmClustersGetDefaultResponse,
): response is CloudVmClustersGetDefaultResponse;
export function isUnexpected(
  response:
    | CloudVmClustersUpdate200Response
    | CloudVmClustersUpdate202Response
    | CloudVmClustersUpdateLogicalResponse
    | CloudVmClustersUpdateDefaultResponse,
): response is CloudVmClustersUpdateDefaultResponse;
export function isUnexpected(
  response:
    | CloudVmClustersDelete202Response
    | CloudVmClustersDelete204Response
    | CloudVmClustersDeleteLogicalResponse
    | CloudVmClustersDeleteDefaultResponse,
): response is CloudVmClustersDeleteDefaultResponse;
export function isUnexpected(
  response:
    | CloudVmClustersListByResourceGroup200Response
    | CloudVmClustersListByResourceGroupDefaultResponse,
): response is CloudVmClustersListByResourceGroupDefaultResponse;
export function isUnexpected(
  response:
    | CloudVmClustersAddVms200Response
    | CloudVmClustersAddVms202Response
    | CloudVmClustersAddVmsLogicalResponse
    | CloudVmClustersAddVmsDefaultResponse,
): response is CloudVmClustersAddVmsDefaultResponse;
export function isUnexpected(
  response:
    | CloudVmClustersRemoveVms200Response
    | CloudVmClustersRemoveVms202Response
    | CloudVmClustersRemoveVmsLogicalResponse
    | CloudVmClustersRemoveVmsDefaultResponse,
): response is CloudVmClustersRemoveVmsDefaultResponse;
export function isUnexpected(
  response:
    | CloudVmClustersListPrivateIpAddresses200Response
    | CloudVmClustersListPrivateIpAddressesDefaultResponse,
): response is CloudVmClustersListPrivateIpAddressesDefaultResponse;
export function isUnexpected(
  response:
    | VirtualNetworkAddressesCreateOrUpdate200Response
    | VirtualNetworkAddressesCreateOrUpdate201Response
    | VirtualNetworkAddressesCreateOrUpdateLogicalResponse
    | VirtualNetworkAddressesCreateOrUpdateDefaultResponse,
): response is VirtualNetworkAddressesCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response:
    | VirtualNetworkAddressesGet200Response
    | VirtualNetworkAddressesGetDefaultResponse,
): response is VirtualNetworkAddressesGetDefaultResponse;
export function isUnexpected(
  response:
    | VirtualNetworkAddressesDelete202Response
    | VirtualNetworkAddressesDelete204Response
    | VirtualNetworkAddressesDeleteLogicalResponse
    | VirtualNetworkAddressesDeleteDefaultResponse,
): response is VirtualNetworkAddressesDeleteDefaultResponse;
export function isUnexpected(
  response:
    | VirtualNetworkAddressesListByCloudVmCluster200Response
    | VirtualNetworkAddressesListByCloudVmClusterDefaultResponse,
): response is VirtualNetworkAddressesListByCloudVmClusterDefaultResponse;
export function isUnexpected(
  response: SystemVersionsGet200Response | SystemVersionsGetDefaultResponse,
): response is SystemVersionsGetDefaultResponse;
export function isUnexpected(
  response:
    | SystemVersionsListByLocation200Response
    | SystemVersionsListByLocationDefaultResponse,
): response is SystemVersionsListByLocationDefaultResponse;
export function isUnexpected(
  response:
    | OracleSubscriptionsListBySubscription200Response
    | OracleSubscriptionsListBySubscriptionDefaultResponse,
): response is OracleSubscriptionsListBySubscriptionDefaultResponse;
export function isUnexpected(
  response:
    | OracleSubscriptionsCreateOrUpdate200Response
    | OracleSubscriptionsCreateOrUpdate201Response
    | OracleSubscriptionsCreateOrUpdateLogicalResponse
    | OracleSubscriptionsCreateOrUpdateDefaultResponse,
): response is OracleSubscriptionsCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response:
    | OracleSubscriptionsGet200Response
    | OracleSubscriptionsGetDefaultResponse,
): response is OracleSubscriptionsGetDefaultResponse;
export function isUnexpected(
  response:
    | OracleSubscriptionsUpdate200Response
    | OracleSubscriptionsUpdate202Response
    | OracleSubscriptionsUpdateLogicalResponse
    | OracleSubscriptionsUpdateDefaultResponse,
): response is OracleSubscriptionsUpdateDefaultResponse;
export function isUnexpected(
  response:
    | OracleSubscriptionsDelete202Response
    | OracleSubscriptionsDelete204Response
    | OracleSubscriptionsDeleteLogicalResponse
    | OracleSubscriptionsDeleteDefaultResponse,
): response is OracleSubscriptionsDeleteDefaultResponse;
export function isUnexpected(
  response:
    | OracleSubscriptionsListCloudAccountDetails200Response
    | OracleSubscriptionsListCloudAccountDetails202Response
    | OracleSubscriptionsListCloudAccountDetailsLogicalResponse
    | OracleSubscriptionsListCloudAccountDetailsDefaultResponse,
): response is OracleSubscriptionsListCloudAccountDetailsDefaultResponse;
export function isUnexpected(
  response:
    | OracleSubscriptionsListSaasSubscriptionDetails200Response
    | OracleSubscriptionsListSaasSubscriptionDetails202Response
    | OracleSubscriptionsListSaasSubscriptionDetailsLogicalResponse
    | OracleSubscriptionsListSaasSubscriptionDetailsDefaultResponse,
): response is OracleSubscriptionsListSaasSubscriptionDetailsDefaultResponse;
export function isUnexpected(
  response:
    | OracleSubscriptionsListActivationLinks200Response
    | OracleSubscriptionsListActivationLinks202Response
    | OracleSubscriptionsListActivationLinksLogicalResponse
    | OracleSubscriptionsListActivationLinksDefaultResponse,
): response is OracleSubscriptionsListActivationLinksDefaultResponse;
export function isUnexpected(
  response: DbNodesGet200Response | DbNodesGetDefaultResponse,
): response is DbNodesGetDefaultResponse;
export function isUnexpected(
  response:
    | DbNodesListByCloudVmCluster200Response
    | DbNodesListByCloudVmClusterDefaultResponse,
): response is DbNodesListByCloudVmClusterDefaultResponse;
export function isUnexpected(
  response:
    | DbNodesAction200Response
    | DbNodesAction202Response
    | DbNodesActionLogicalResponse
    | DbNodesActionDefaultResponse,
): response is DbNodesActionDefaultResponse;
export function isUnexpected(
  response: GiVersionsGet200Response | GiVersionsGetDefaultResponse,
): response is GiVersionsGetDefaultResponse;
export function isUnexpected(
  response:
    | GiVersionsListByLocation200Response
    | GiVersionsListByLocationDefaultResponse,
): response is GiVersionsListByLocationDefaultResponse;
export function isUnexpected(
  response: DbSystemShapesGet200Response | DbSystemShapesGetDefaultResponse,
): response is DbSystemShapesGetDefaultResponse;
export function isUnexpected(
  response:
    | DbSystemShapesListByLocation200Response
    | DbSystemShapesListByLocationDefaultResponse,
): response is DbSystemShapesListByLocationDefaultResponse;
export function isUnexpected(
  response: DnsPrivateViewsGet200Response | DnsPrivateViewsGetDefaultResponse,
): response is DnsPrivateViewsGetDefaultResponse;
export function isUnexpected(
  response:
    | DnsPrivateViewsListByLocation200Response
    | DnsPrivateViewsListByLocationDefaultResponse,
): response is DnsPrivateViewsListByLocationDefaultResponse;
export function isUnexpected(
  response: DnsPrivateZonesGet200Response | DnsPrivateZonesGetDefaultResponse,
): response is DnsPrivateZonesGetDefaultResponse;
export function isUnexpected(
  response:
    | DnsPrivateZonesListByLocation200Response
    | DnsPrivateZonesListByLocationDefaultResponse,
): response is DnsPrivateZonesListByLocationDefaultResponse;
export function isUnexpected(
  response:
    | AutonomousDatabasesListBySubscription200Response
    | AutonomousDatabasesListBySubscriptionDefaultResponse,
): response is AutonomousDatabasesListBySubscriptionDefaultResponse;
export function isUnexpected(
  response:
    | AutonomousDatabasesCreateOrUpdate200Response
    | AutonomousDatabasesCreateOrUpdate201Response
    | AutonomousDatabasesCreateOrUpdateLogicalResponse
    | AutonomousDatabasesCreateOrUpdateDefaultResponse,
): response is AutonomousDatabasesCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response:
    | AutonomousDatabasesGet200Response
    | AutonomousDatabasesGetDefaultResponse,
): response is AutonomousDatabasesGetDefaultResponse;
export function isUnexpected(
  response:
    | AutonomousDatabasesUpdate200Response
    | AutonomousDatabasesUpdate202Response
    | AutonomousDatabasesUpdateLogicalResponse
    | AutonomousDatabasesUpdateDefaultResponse,
): response is AutonomousDatabasesUpdateDefaultResponse;
export function isUnexpected(
  response:
    | AutonomousDatabasesDelete202Response
    | AutonomousDatabasesDelete204Response
    | AutonomousDatabasesDeleteLogicalResponse
    | AutonomousDatabasesDeleteDefaultResponse,
): response is AutonomousDatabasesDeleteDefaultResponse;
export function isUnexpected(
  response:
    | AutonomousDatabasesListByResourceGroup200Response
    | AutonomousDatabasesListByResourceGroupDefaultResponse,
): response is AutonomousDatabasesListByResourceGroupDefaultResponse;
export function isUnexpected(
  response:
    | AutonomousDatabasesSwitchover200Response
    | AutonomousDatabasesSwitchover202Response
    | AutonomousDatabasesSwitchoverLogicalResponse
    | AutonomousDatabasesSwitchoverDefaultResponse,
): response is AutonomousDatabasesSwitchoverDefaultResponse;
export function isUnexpected(
  response:
    | AutonomousDatabasesFailover200Response
    | AutonomousDatabasesFailover202Response
    | AutonomousDatabasesFailoverLogicalResponse
    | AutonomousDatabasesFailoverDefaultResponse,
): response is AutonomousDatabasesFailoverDefaultResponse;
export function isUnexpected(
  response:
    | AutonomousDatabasesGenerateWallet200Response
    | AutonomousDatabasesGenerateWalletDefaultResponse,
): response is AutonomousDatabasesGenerateWalletDefaultResponse;
export function isUnexpected(
  response:
    | AutonomousDatabasesRestore200Response
    | AutonomousDatabasesRestore202Response
    | AutonomousDatabasesRestoreLogicalResponse
    | AutonomousDatabasesRestoreDefaultResponse,
): response is AutonomousDatabasesRestoreDefaultResponse;
export function isUnexpected(
  response:
    | AutonomousDatabasesShrink200Response
    | AutonomousDatabasesShrink202Response
    | AutonomousDatabasesShrinkLogicalResponse
    | AutonomousDatabasesShrinkDefaultResponse,
): response is AutonomousDatabasesShrinkDefaultResponse;
export function isUnexpected(
  response:
    | AutonomousDatabaseBackupsCreateOrUpdate200Response
    | AutonomousDatabaseBackupsCreateOrUpdate201Response
    | AutonomousDatabaseBackupsCreateOrUpdateLogicalResponse
    | AutonomousDatabaseBackupsCreateOrUpdateDefaultResponse,
): response is AutonomousDatabaseBackupsCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response:
    | AutonomousDatabaseBackupsGet200Response
    | AutonomousDatabaseBackupsGetDefaultResponse,
): response is AutonomousDatabaseBackupsGetDefaultResponse;
export function isUnexpected(
  response:
    | AutonomousDatabaseBackupsDelete202Response
    | AutonomousDatabaseBackupsDelete204Response
    | AutonomousDatabaseBackupsDeleteLogicalResponse
    | AutonomousDatabaseBackupsDeleteDefaultResponse,
): response is AutonomousDatabaseBackupsDeleteDefaultResponse;
export function isUnexpected(
  response:
    | AutonomousDatabaseBackupsUpdate200Response
    | AutonomousDatabaseBackupsUpdate202Response
    | AutonomousDatabaseBackupsUpdateLogicalResponse
    | AutonomousDatabaseBackupsUpdateDefaultResponse,
): response is AutonomousDatabaseBackupsUpdateDefaultResponse;
export function isUnexpected(
  response:
    | AutonomousDatabaseBackupsListByAutonomousDatabase200Response
    | AutonomousDatabaseBackupsListByAutonomousDatabaseDefaultResponse,
): response is AutonomousDatabaseBackupsListByAutonomousDatabaseDefaultResponse;
export function isUnexpected(
  response:
    | AutonomousDatabaseCharacterSetsGet200Response
    | AutonomousDatabaseCharacterSetsGetDefaultResponse,
): response is AutonomousDatabaseCharacterSetsGetDefaultResponse;
export function isUnexpected(
  response:
    | AutonomousDatabaseCharacterSetsListByLocation200Response
    | AutonomousDatabaseCharacterSetsListByLocationDefaultResponse,
): response is AutonomousDatabaseCharacterSetsListByLocationDefaultResponse;
export function isUnexpected(
  response:
    | AutonomousDatabaseNationalCharacterSetsGet200Response
    | AutonomousDatabaseNationalCharacterSetsGetDefaultResponse,
): response is AutonomousDatabaseNationalCharacterSetsGetDefaultResponse;
export function isUnexpected(
  response:
    | AutonomousDatabaseNationalCharacterSetsListByLocation200Response
    | AutonomousDatabaseNationalCharacterSetsListByLocationDefaultResponse,
): response is AutonomousDatabaseNationalCharacterSetsListByLocationDefaultResponse;
export function isUnexpected(
  response:
    | AutonomousDatabaseVersionsGet200Response
    | AutonomousDatabaseVersionsGetDefaultResponse,
): response is AutonomousDatabaseVersionsGetDefaultResponse;
export function isUnexpected(
  response:
    | AutonomousDatabaseVersionsListByLocation200Response
    | AutonomousDatabaseVersionsListByLocationDefaultResponse,
): response is AutonomousDatabaseVersionsListByLocationDefaultResponse;
export function isUnexpected(
  response:
    | OperationsList200Response
    | OperationsListDefaultResponse
    | CloudExadataInfrastructuresListBySubscription200Response
    | CloudExadataInfrastructuresListBySubscriptionDefaultResponse
    | CloudExadataInfrastructuresCreateOrUpdate200Response
    | CloudExadataInfrastructuresCreateOrUpdate201Response
    | CloudExadataInfrastructuresCreateOrUpdateLogicalResponse
    | CloudExadataInfrastructuresCreateOrUpdateDefaultResponse
    | CloudExadataInfrastructuresGet200Response
    | CloudExadataInfrastructuresGetDefaultResponse
    | CloudExadataInfrastructuresUpdate200Response
    | CloudExadataInfrastructuresUpdate202Response
    | CloudExadataInfrastructuresUpdateLogicalResponse
    | CloudExadataInfrastructuresUpdateDefaultResponse
    | CloudExadataInfrastructuresDelete202Response
    | CloudExadataInfrastructuresDelete204Response
    | CloudExadataInfrastructuresDeleteLogicalResponse
    | CloudExadataInfrastructuresDeleteDefaultResponse
    | CloudExadataInfrastructuresListByResourceGroup200Response
    | CloudExadataInfrastructuresListByResourceGroupDefaultResponse
    | CloudExadataInfrastructuresAddStorageCapacity200Response
    | CloudExadataInfrastructuresAddStorageCapacity202Response
    | CloudExadataInfrastructuresAddStorageCapacityLogicalResponse
    | CloudExadataInfrastructuresAddStorageCapacityDefaultResponse
    | DbServersGet200Response
    | DbServersGetDefaultResponse
    | DbServersListByCloudExadataInfrastructure200Response
    | DbServersListByCloudExadataInfrastructureDefaultResponse
    | CloudVmClustersListBySubscription200Response
    | CloudVmClustersListBySubscriptionDefaultResponse
    | CloudVmClustersCreateOrUpdate200Response
    | CloudVmClustersCreateOrUpdate201Response
    | CloudVmClustersCreateOrUpdateLogicalResponse
    | CloudVmClustersCreateOrUpdateDefaultResponse
    | CloudVmClustersGet200Response
    | CloudVmClustersGetDefaultResponse
    | CloudVmClustersUpdate200Response
    | CloudVmClustersUpdate202Response
    | CloudVmClustersUpdateLogicalResponse
    | CloudVmClustersUpdateDefaultResponse
    | CloudVmClustersDelete202Response
    | CloudVmClustersDelete204Response
    | CloudVmClustersDeleteLogicalResponse
    | CloudVmClustersDeleteDefaultResponse
    | CloudVmClustersListByResourceGroup200Response
    | CloudVmClustersListByResourceGroupDefaultResponse
    | CloudVmClustersAddVms200Response
    | CloudVmClustersAddVms202Response
    | CloudVmClustersAddVmsLogicalResponse
    | CloudVmClustersAddVmsDefaultResponse
    | CloudVmClustersRemoveVms200Response
    | CloudVmClustersRemoveVms202Response
    | CloudVmClustersRemoveVmsLogicalResponse
    | CloudVmClustersRemoveVmsDefaultResponse
    | CloudVmClustersListPrivateIpAddresses200Response
    | CloudVmClustersListPrivateIpAddressesDefaultResponse
    | VirtualNetworkAddressesCreateOrUpdate200Response
    | VirtualNetworkAddressesCreateOrUpdate201Response
    | VirtualNetworkAddressesCreateOrUpdateLogicalResponse
    | VirtualNetworkAddressesCreateOrUpdateDefaultResponse
    | VirtualNetworkAddressesGet200Response
    | VirtualNetworkAddressesGetDefaultResponse
    | VirtualNetworkAddressesDelete202Response
    | VirtualNetworkAddressesDelete204Response
    | VirtualNetworkAddressesDeleteLogicalResponse
    | VirtualNetworkAddressesDeleteDefaultResponse
    | VirtualNetworkAddressesListByCloudVmCluster200Response
    | VirtualNetworkAddressesListByCloudVmClusterDefaultResponse
    | SystemVersionsGet200Response
    | SystemVersionsGetDefaultResponse
    | SystemVersionsListByLocation200Response
    | SystemVersionsListByLocationDefaultResponse
    | OracleSubscriptionsListBySubscription200Response
    | OracleSubscriptionsListBySubscriptionDefaultResponse
    | OracleSubscriptionsCreateOrUpdate200Response
    | OracleSubscriptionsCreateOrUpdate201Response
    | OracleSubscriptionsCreateOrUpdateLogicalResponse
    | OracleSubscriptionsCreateOrUpdateDefaultResponse
    | OracleSubscriptionsGet200Response
    | OracleSubscriptionsGetDefaultResponse
    | OracleSubscriptionsUpdate200Response
    | OracleSubscriptionsUpdate202Response
    | OracleSubscriptionsUpdateLogicalResponse
    | OracleSubscriptionsUpdateDefaultResponse
    | OracleSubscriptionsDelete202Response
    | OracleSubscriptionsDelete204Response
    | OracleSubscriptionsDeleteLogicalResponse
    | OracleSubscriptionsDeleteDefaultResponse
    | OracleSubscriptionsListCloudAccountDetails200Response
    | OracleSubscriptionsListCloudAccountDetails202Response
    | OracleSubscriptionsListCloudAccountDetailsLogicalResponse
    | OracleSubscriptionsListCloudAccountDetailsDefaultResponse
    | OracleSubscriptionsListSaasSubscriptionDetails200Response
    | OracleSubscriptionsListSaasSubscriptionDetails202Response
    | OracleSubscriptionsListSaasSubscriptionDetailsLogicalResponse
    | OracleSubscriptionsListSaasSubscriptionDetailsDefaultResponse
    | OracleSubscriptionsListActivationLinks200Response
    | OracleSubscriptionsListActivationLinks202Response
    | OracleSubscriptionsListActivationLinksLogicalResponse
    | OracleSubscriptionsListActivationLinksDefaultResponse
    | DbNodesGet200Response
    | DbNodesGetDefaultResponse
    | DbNodesListByCloudVmCluster200Response
    | DbNodesListByCloudVmClusterDefaultResponse
    | DbNodesAction200Response
    | DbNodesAction202Response
    | DbNodesActionLogicalResponse
    | DbNodesActionDefaultResponse
    | GiVersionsGet200Response
    | GiVersionsGetDefaultResponse
    | GiVersionsListByLocation200Response
    | GiVersionsListByLocationDefaultResponse
    | DbSystemShapesGet200Response
    | DbSystemShapesGetDefaultResponse
    | DbSystemShapesListByLocation200Response
    | DbSystemShapesListByLocationDefaultResponse
    | DnsPrivateViewsGet200Response
    | DnsPrivateViewsGetDefaultResponse
    | DnsPrivateViewsListByLocation200Response
    | DnsPrivateViewsListByLocationDefaultResponse
    | DnsPrivateZonesGet200Response
    | DnsPrivateZonesGetDefaultResponse
    | DnsPrivateZonesListByLocation200Response
    | DnsPrivateZonesListByLocationDefaultResponse
    | AutonomousDatabasesListBySubscription200Response
    | AutonomousDatabasesListBySubscriptionDefaultResponse
    | AutonomousDatabasesCreateOrUpdate200Response
    | AutonomousDatabasesCreateOrUpdate201Response
    | AutonomousDatabasesCreateOrUpdateLogicalResponse
    | AutonomousDatabasesCreateOrUpdateDefaultResponse
    | AutonomousDatabasesGet200Response
    | AutonomousDatabasesGetDefaultResponse
    | AutonomousDatabasesUpdate200Response
    | AutonomousDatabasesUpdate202Response
    | AutonomousDatabasesUpdateLogicalResponse
    | AutonomousDatabasesUpdateDefaultResponse
    | AutonomousDatabasesDelete202Response
    | AutonomousDatabasesDelete204Response
    | AutonomousDatabasesDeleteLogicalResponse
    | AutonomousDatabasesDeleteDefaultResponse
    | AutonomousDatabasesListByResourceGroup200Response
    | AutonomousDatabasesListByResourceGroupDefaultResponse
    | AutonomousDatabasesSwitchover200Response
    | AutonomousDatabasesSwitchover202Response
    | AutonomousDatabasesSwitchoverLogicalResponse
    | AutonomousDatabasesSwitchoverDefaultResponse
    | AutonomousDatabasesFailover200Response
    | AutonomousDatabasesFailover202Response
    | AutonomousDatabasesFailoverLogicalResponse
    | AutonomousDatabasesFailoverDefaultResponse
    | AutonomousDatabasesGenerateWallet200Response
    | AutonomousDatabasesGenerateWalletDefaultResponse
    | AutonomousDatabasesRestore200Response
    | AutonomousDatabasesRestore202Response
    | AutonomousDatabasesRestoreLogicalResponse
    | AutonomousDatabasesRestoreDefaultResponse
    | AutonomousDatabasesShrink200Response
    | AutonomousDatabasesShrink202Response
    | AutonomousDatabasesShrinkLogicalResponse
    | AutonomousDatabasesShrinkDefaultResponse
    | AutonomousDatabaseBackupsCreateOrUpdate200Response
    | AutonomousDatabaseBackupsCreateOrUpdate201Response
    | AutonomousDatabaseBackupsCreateOrUpdateLogicalResponse
    | AutonomousDatabaseBackupsCreateOrUpdateDefaultResponse
    | AutonomousDatabaseBackupsGet200Response
    | AutonomousDatabaseBackupsGetDefaultResponse
    | AutonomousDatabaseBackupsDelete202Response
    | AutonomousDatabaseBackupsDelete204Response
    | AutonomousDatabaseBackupsDeleteLogicalResponse
    | AutonomousDatabaseBackupsDeleteDefaultResponse
    | AutonomousDatabaseBackupsUpdate200Response
    | AutonomousDatabaseBackupsUpdate202Response
    | AutonomousDatabaseBackupsUpdateLogicalResponse
    | AutonomousDatabaseBackupsUpdateDefaultResponse
    | AutonomousDatabaseBackupsListByAutonomousDatabase200Response
    | AutonomousDatabaseBackupsListByAutonomousDatabaseDefaultResponse
    | AutonomousDatabaseCharacterSetsGet200Response
    | AutonomousDatabaseCharacterSetsGetDefaultResponse
    | AutonomousDatabaseCharacterSetsListByLocation200Response
    | AutonomousDatabaseCharacterSetsListByLocationDefaultResponse
    | AutonomousDatabaseNationalCharacterSetsGet200Response
    | AutonomousDatabaseNationalCharacterSetsGetDefaultResponse
    | AutonomousDatabaseNationalCharacterSetsListByLocation200Response
    | AutonomousDatabaseNationalCharacterSetsListByLocationDefaultResponse
    | AutonomousDatabaseVersionsGet200Response
    | AutonomousDatabaseVersionsGetDefaultResponse
    | AutonomousDatabaseVersionsListByLocation200Response
    | AutonomousDatabaseVersionsListByLocationDefaultResponse,
): response is
  | OperationsListDefaultResponse
  | CloudExadataInfrastructuresListBySubscriptionDefaultResponse
  | CloudExadataInfrastructuresCreateOrUpdateDefaultResponse
  | CloudExadataInfrastructuresGetDefaultResponse
  | CloudExadataInfrastructuresUpdateDefaultResponse
  | CloudExadataInfrastructuresDeleteDefaultResponse
  | CloudExadataInfrastructuresListByResourceGroupDefaultResponse
  | CloudExadataInfrastructuresAddStorageCapacityDefaultResponse
  | DbServersGetDefaultResponse
  | DbServersListByCloudExadataInfrastructureDefaultResponse
  | CloudVmClustersListBySubscriptionDefaultResponse
  | CloudVmClustersCreateOrUpdateDefaultResponse
  | CloudVmClustersGetDefaultResponse
  | CloudVmClustersUpdateDefaultResponse
  | CloudVmClustersDeleteDefaultResponse
  | CloudVmClustersListByResourceGroupDefaultResponse
  | CloudVmClustersAddVmsDefaultResponse
  | CloudVmClustersRemoveVmsDefaultResponse
  | CloudVmClustersListPrivateIpAddressesDefaultResponse
  | VirtualNetworkAddressesCreateOrUpdateDefaultResponse
  | VirtualNetworkAddressesGetDefaultResponse
  | VirtualNetworkAddressesDeleteDefaultResponse
  | VirtualNetworkAddressesListByCloudVmClusterDefaultResponse
  | SystemVersionsGetDefaultResponse
  | SystemVersionsListByLocationDefaultResponse
  | OracleSubscriptionsListBySubscriptionDefaultResponse
  | OracleSubscriptionsCreateOrUpdateDefaultResponse
  | OracleSubscriptionsGetDefaultResponse
  | OracleSubscriptionsUpdateDefaultResponse
  | OracleSubscriptionsDeleteDefaultResponse
  | OracleSubscriptionsListCloudAccountDetailsDefaultResponse
  | OracleSubscriptionsListSaasSubscriptionDetailsDefaultResponse
  | OracleSubscriptionsListActivationLinksDefaultResponse
  | DbNodesGetDefaultResponse
  | DbNodesListByCloudVmClusterDefaultResponse
  | DbNodesActionDefaultResponse
  | GiVersionsGetDefaultResponse
  | GiVersionsListByLocationDefaultResponse
  | DbSystemShapesGetDefaultResponse
  | DbSystemShapesListByLocationDefaultResponse
  | DnsPrivateViewsGetDefaultResponse
  | DnsPrivateViewsListByLocationDefaultResponse
  | DnsPrivateZonesGetDefaultResponse
  | DnsPrivateZonesListByLocationDefaultResponse
  | AutonomousDatabasesListBySubscriptionDefaultResponse
  | AutonomousDatabasesCreateOrUpdateDefaultResponse
  | AutonomousDatabasesGetDefaultResponse
  | AutonomousDatabasesUpdateDefaultResponse
  | AutonomousDatabasesDeleteDefaultResponse
  | AutonomousDatabasesListByResourceGroupDefaultResponse
  | AutonomousDatabasesSwitchoverDefaultResponse
  | AutonomousDatabasesFailoverDefaultResponse
  | AutonomousDatabasesGenerateWalletDefaultResponse
  | AutonomousDatabasesRestoreDefaultResponse
  | AutonomousDatabasesShrinkDefaultResponse
  | AutonomousDatabaseBackupsCreateOrUpdateDefaultResponse
  | AutonomousDatabaseBackupsGetDefaultResponse
  | AutonomousDatabaseBackupsDeleteDefaultResponse
  | AutonomousDatabaseBackupsUpdateDefaultResponse
  | AutonomousDatabaseBackupsListByAutonomousDatabaseDefaultResponse
  | AutonomousDatabaseCharacterSetsGetDefaultResponse
  | AutonomousDatabaseCharacterSetsListByLocationDefaultResponse
  | AutonomousDatabaseNationalCharacterSetsGetDefaultResponse
  | AutonomousDatabaseNationalCharacterSetsListByLocationDefaultResponse
  | AutonomousDatabaseVersionsGetDefaultResponse
  | AutonomousDatabaseVersionsListByLocationDefaultResponse {
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
