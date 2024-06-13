// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  OperationsListParameters,
  CloudExadataInfrastructuresListBySubscriptionParameters,
  CloudExadataInfrastructuresCreateOrUpdateParameters,
  CloudExadataInfrastructuresGetParameters,
  CloudExadataInfrastructuresUpdateParameters,
  CloudExadataInfrastructuresDeleteParameters,
  CloudExadataInfrastructuresListByResourceGroupParameters,
  CloudExadataInfrastructuresAddStorageCapacityParameters,
  DbServersGetParameters,
  DbServersListByCloudExadataInfrastructureParameters,
  CloudVmClustersListBySubscriptionParameters,
  CloudVmClustersCreateOrUpdateParameters,
  CloudVmClustersGetParameters,
  CloudVmClustersUpdateParameters,
  CloudVmClustersDeleteParameters,
  CloudVmClustersListByResourceGroupParameters,
  CloudVmClustersAddVmsParameters,
  CloudVmClustersRemoveVmsParameters,
  CloudVmClustersListPrivateIpAddressesParameters,
  VirtualNetworkAddressesCreateOrUpdateParameters,
  VirtualNetworkAddressesGetParameters,
  VirtualNetworkAddressesDeleteParameters,
  VirtualNetworkAddressesListByCloudVmClusterParameters,
  SystemVersionsGetParameters,
  SystemVersionsListByLocationParameters,
  OracleSubscriptionsListBySubscriptionParameters,
  OracleSubscriptionsCreateOrUpdateParameters,
  OracleSubscriptionsGetParameters,
  OracleSubscriptionsUpdateParameters,
  OracleSubscriptionsDeleteParameters,
  OracleSubscriptionsListCloudAccountDetailsParameters,
  OracleSubscriptionsListSaasSubscriptionDetailsParameters,
  OracleSubscriptionsListActivationLinksParameters,
  DbNodesGetParameters,
  DbNodesListByCloudVmClusterParameters,
  DbNodesActionParameters,
  GiVersionsGetParameters,
  GiVersionsListByLocationParameters,
  DbSystemShapesGetParameters,
  DbSystemShapesListByLocationParameters,
  DnsPrivateViewsGetParameters,
  DnsPrivateViewsListByLocationParameters,
  DnsPrivateZonesGetParameters,
  DnsPrivateZonesListByLocationParameters,
  AutonomousDatabasesListBySubscriptionParameters,
  AutonomousDatabasesCreateOrUpdateParameters,
  AutonomousDatabasesGetParameters,
  AutonomousDatabasesUpdateParameters,
  AutonomousDatabasesDeleteParameters,
  AutonomousDatabasesListByResourceGroupParameters,
  AutonomousDatabasesSwitchoverParameters,
  AutonomousDatabasesFailoverParameters,
  AutonomousDatabasesGenerateWalletParameters,
  AutonomousDatabasesRestoreParameters,
  AutonomousDatabasesShrinkParameters,
  AutonomousDatabaseBackupsCreateOrUpdateParameters,
  AutonomousDatabaseBackupsGetParameters,
  AutonomousDatabaseBackupsDeleteParameters,
  AutonomousDatabaseBackupsUpdateParameters,
  AutonomousDatabaseBackupsListByAutonomousDatabaseParameters,
  AutonomousDatabaseCharacterSetsGetParameters,
  AutonomousDatabaseCharacterSetsListByLocationParameters,
  AutonomousDatabaseNationalCharacterSetsGetParameters,
  AutonomousDatabaseNationalCharacterSetsListByLocationParameters,
  AutonomousDatabaseVersionsGetParameters,
  AutonomousDatabaseVersionsListByLocationParameters,
} from "./parameters.js";
import {
  OperationsList200Response,
  OperationsListDefaultResponse,
  CloudExadataInfrastructuresListBySubscription200Response,
  CloudExadataInfrastructuresListBySubscriptionDefaultResponse,
  CloudExadataInfrastructuresCreateOrUpdate200Response,
  CloudExadataInfrastructuresCreateOrUpdate201Response,
  CloudExadataInfrastructuresCreateOrUpdateDefaultResponse,
  CloudExadataInfrastructuresGet200Response,
  CloudExadataInfrastructuresGetDefaultResponse,
  CloudExadataInfrastructuresUpdate200Response,
  CloudExadataInfrastructuresUpdate202Response,
  CloudExadataInfrastructuresUpdateDefaultResponse,
  CloudExadataInfrastructuresDelete202Response,
  CloudExadataInfrastructuresDelete204Response,
  CloudExadataInfrastructuresDeleteDefaultResponse,
  CloudExadataInfrastructuresListByResourceGroup200Response,
  CloudExadataInfrastructuresListByResourceGroupDefaultResponse,
  CloudExadataInfrastructuresAddStorageCapacity200Response,
  CloudExadataInfrastructuresAddStorageCapacity202Response,
  CloudExadataInfrastructuresAddStorageCapacityDefaultResponse,
  DbServersGet200Response,
  DbServersGetDefaultResponse,
  DbServersListByCloudExadataInfrastructure200Response,
  DbServersListByCloudExadataInfrastructureDefaultResponse,
  CloudVmClustersListBySubscription200Response,
  CloudVmClustersListBySubscriptionDefaultResponse,
  CloudVmClustersCreateOrUpdate200Response,
  CloudVmClustersCreateOrUpdate201Response,
  CloudVmClustersCreateOrUpdateDefaultResponse,
  CloudVmClustersGet200Response,
  CloudVmClustersGetDefaultResponse,
  CloudVmClustersUpdate200Response,
  CloudVmClustersUpdate202Response,
  CloudVmClustersUpdateDefaultResponse,
  CloudVmClustersDelete202Response,
  CloudVmClustersDelete204Response,
  CloudVmClustersDeleteDefaultResponse,
  CloudVmClustersListByResourceGroup200Response,
  CloudVmClustersListByResourceGroupDefaultResponse,
  CloudVmClustersAddVms200Response,
  CloudVmClustersAddVms202Response,
  CloudVmClustersAddVmsDefaultResponse,
  CloudVmClustersRemoveVms200Response,
  CloudVmClustersRemoveVms202Response,
  CloudVmClustersRemoveVmsDefaultResponse,
  CloudVmClustersListPrivateIpAddresses200Response,
  CloudVmClustersListPrivateIpAddressesDefaultResponse,
  VirtualNetworkAddressesCreateOrUpdate200Response,
  VirtualNetworkAddressesCreateOrUpdate201Response,
  VirtualNetworkAddressesCreateOrUpdateDefaultResponse,
  VirtualNetworkAddressesGet200Response,
  VirtualNetworkAddressesGetDefaultResponse,
  VirtualNetworkAddressesDelete202Response,
  VirtualNetworkAddressesDelete204Response,
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
  OracleSubscriptionsCreateOrUpdateDefaultResponse,
  OracleSubscriptionsGet200Response,
  OracleSubscriptionsGetDefaultResponse,
  OracleSubscriptionsUpdate200Response,
  OracleSubscriptionsUpdate202Response,
  OracleSubscriptionsUpdateDefaultResponse,
  OracleSubscriptionsDelete202Response,
  OracleSubscriptionsDelete204Response,
  OracleSubscriptionsDeleteDefaultResponse,
  OracleSubscriptionsListCloudAccountDetails200Response,
  OracleSubscriptionsListCloudAccountDetails202Response,
  OracleSubscriptionsListCloudAccountDetailsDefaultResponse,
  OracleSubscriptionsListSaasSubscriptionDetails200Response,
  OracleSubscriptionsListSaasSubscriptionDetails202Response,
  OracleSubscriptionsListSaasSubscriptionDetailsDefaultResponse,
  OracleSubscriptionsListActivationLinks200Response,
  OracleSubscriptionsListActivationLinks202Response,
  OracleSubscriptionsListActivationLinksDefaultResponse,
  DbNodesGet200Response,
  DbNodesGetDefaultResponse,
  DbNodesListByCloudVmCluster200Response,
  DbNodesListByCloudVmClusterDefaultResponse,
  DbNodesAction200Response,
  DbNodesAction202Response,
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
  AutonomousDatabasesCreateOrUpdateDefaultResponse,
  AutonomousDatabasesGet200Response,
  AutonomousDatabasesGetDefaultResponse,
  AutonomousDatabasesUpdate200Response,
  AutonomousDatabasesUpdate202Response,
  AutonomousDatabasesUpdateDefaultResponse,
  AutonomousDatabasesDelete202Response,
  AutonomousDatabasesDelete204Response,
  AutonomousDatabasesDeleteDefaultResponse,
  AutonomousDatabasesListByResourceGroup200Response,
  AutonomousDatabasesListByResourceGroupDefaultResponse,
  AutonomousDatabasesSwitchover200Response,
  AutonomousDatabasesSwitchover202Response,
  AutonomousDatabasesSwitchoverDefaultResponse,
  AutonomousDatabasesFailover200Response,
  AutonomousDatabasesFailover202Response,
  AutonomousDatabasesFailoverDefaultResponse,
  AutonomousDatabasesGenerateWallet200Response,
  AutonomousDatabasesGenerateWalletDefaultResponse,
  AutonomousDatabasesRestore200Response,
  AutonomousDatabasesRestore202Response,
  AutonomousDatabasesRestoreDefaultResponse,
  AutonomousDatabasesShrink200Response,
  AutonomousDatabasesShrink202Response,
  AutonomousDatabasesShrinkDefaultResponse,
  AutonomousDatabaseBackupsCreateOrUpdate200Response,
  AutonomousDatabaseBackupsCreateOrUpdate201Response,
  AutonomousDatabaseBackupsCreateOrUpdateDefaultResponse,
  AutonomousDatabaseBackupsGet200Response,
  AutonomousDatabaseBackupsGetDefaultResponse,
  AutonomousDatabaseBackupsDelete202Response,
  AutonomousDatabaseBackupsDelete204Response,
  AutonomousDatabaseBackupsDeleteDefaultResponse,
  AutonomousDatabaseBackupsUpdate200Response,
  AutonomousDatabaseBackupsUpdate202Response,
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
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface OperationsList {
  /** List the operations for the provider */
  get(
    options?: OperationsListParameters,
  ): StreamableMethod<
    OperationsList200Response | OperationsListDefaultResponse
  >;
}

export interface CloudExadataInfrastructuresListBySubscription {
  /** List CloudExadataInfrastructure resources by subscription ID */
  get(
    options?: CloudExadataInfrastructuresListBySubscriptionParameters,
  ): StreamableMethod<
    | CloudExadataInfrastructuresListBySubscription200Response
    | CloudExadataInfrastructuresListBySubscriptionDefaultResponse
  >;
}

export interface CloudExadataInfrastructuresCreateOrUpdate {
  /** Create a CloudExadataInfrastructure */
  put(
    options: CloudExadataInfrastructuresCreateOrUpdateParameters,
  ): StreamableMethod<
    | CloudExadataInfrastructuresCreateOrUpdate200Response
    | CloudExadataInfrastructuresCreateOrUpdate201Response
    | CloudExadataInfrastructuresCreateOrUpdateDefaultResponse
  >;
  /** Get a CloudExadataInfrastructure */
  get(
    options?: CloudExadataInfrastructuresGetParameters,
  ): StreamableMethod<
    | CloudExadataInfrastructuresGet200Response
    | CloudExadataInfrastructuresGetDefaultResponse
  >;
  /** Update a CloudExadataInfrastructure */
  patch(
    options: CloudExadataInfrastructuresUpdateParameters,
  ): StreamableMethod<
    | CloudExadataInfrastructuresUpdate200Response
    | CloudExadataInfrastructuresUpdate202Response
    | CloudExadataInfrastructuresUpdateDefaultResponse
  >;
  /** Delete a CloudExadataInfrastructure */
  delete(
    options?: CloudExadataInfrastructuresDeleteParameters,
  ): StreamableMethod<
    | CloudExadataInfrastructuresDelete202Response
    | CloudExadataInfrastructuresDelete204Response
    | CloudExadataInfrastructuresDeleteDefaultResponse
  >;
}

export interface CloudExadataInfrastructuresListByResourceGroup {
  /** List CloudExadataInfrastructure resources by resource group */
  get(
    options?: CloudExadataInfrastructuresListByResourceGroupParameters,
  ): StreamableMethod<
    | CloudExadataInfrastructuresListByResourceGroup200Response
    | CloudExadataInfrastructuresListByResourceGroupDefaultResponse
  >;
}

export interface CloudExadataInfrastructuresAddStorageCapacity {
  /** Perform add storage capacity on exadata infra */
  post(
    options: CloudExadataInfrastructuresAddStorageCapacityParameters,
  ): StreamableMethod<
    | CloudExadataInfrastructuresAddStorageCapacity200Response
    | CloudExadataInfrastructuresAddStorageCapacity202Response
    | CloudExadataInfrastructuresAddStorageCapacityDefaultResponse
  >;
}

export interface DbServersGet {
  /** Get a DbServer */
  get(
    options?: DbServersGetParameters,
  ): StreamableMethod<DbServersGet200Response | DbServersGetDefaultResponse>;
}

export interface DbServersListByCloudExadataInfrastructure {
  /** List DbServer resources by CloudExadataInfrastructure */
  get(
    options?: DbServersListByCloudExadataInfrastructureParameters,
  ): StreamableMethod<
    | DbServersListByCloudExadataInfrastructure200Response
    | DbServersListByCloudExadataInfrastructureDefaultResponse
  >;
}

export interface CloudVmClustersListBySubscription {
  /** List CloudVmCluster resources by subscription ID */
  get(
    options?: CloudVmClustersListBySubscriptionParameters,
  ): StreamableMethod<
    | CloudVmClustersListBySubscription200Response
    | CloudVmClustersListBySubscriptionDefaultResponse
  >;
}

export interface CloudVmClustersCreateOrUpdate {
  /** Create a CloudVmCluster */
  put(
    options: CloudVmClustersCreateOrUpdateParameters,
  ): StreamableMethod<
    | CloudVmClustersCreateOrUpdate200Response
    | CloudVmClustersCreateOrUpdate201Response
    | CloudVmClustersCreateOrUpdateDefaultResponse
  >;
  /** Get a CloudVmCluster */
  get(
    options?: CloudVmClustersGetParameters,
  ): StreamableMethod<
    CloudVmClustersGet200Response | CloudVmClustersGetDefaultResponse
  >;
  /** Update a CloudVmCluster */
  patch(
    options: CloudVmClustersUpdateParameters,
  ): StreamableMethod<
    | CloudVmClustersUpdate200Response
    | CloudVmClustersUpdate202Response
    | CloudVmClustersUpdateDefaultResponse
  >;
  /** Delete a CloudVmCluster */
  delete(
    options?: CloudVmClustersDeleteParameters,
  ): StreamableMethod<
    | CloudVmClustersDelete202Response
    | CloudVmClustersDelete204Response
    | CloudVmClustersDeleteDefaultResponse
  >;
}

export interface CloudVmClustersListByResourceGroup {
  /** List CloudVmCluster resources by resource group */
  get(
    options?: CloudVmClustersListByResourceGroupParameters,
  ): StreamableMethod<
    | CloudVmClustersListByResourceGroup200Response
    | CloudVmClustersListByResourceGroupDefaultResponse
  >;
}

export interface CloudVmClustersAddVms {
  /** Add VMs to the VM Cluster */
  post(
    options: CloudVmClustersAddVmsParameters,
  ): StreamableMethod<
    | CloudVmClustersAddVms200Response
    | CloudVmClustersAddVms202Response
    | CloudVmClustersAddVmsDefaultResponse
  >;
}

export interface CloudVmClustersRemoveVms {
  /** Remove VMs from the VM Cluster */
  post(
    options: CloudVmClustersRemoveVmsParameters,
  ): StreamableMethod<
    | CloudVmClustersRemoveVms200Response
    | CloudVmClustersRemoveVms202Response
    | CloudVmClustersRemoveVmsDefaultResponse
  >;
}

export interface CloudVmClustersListPrivateIpAddresses {
  /** List Private IP Addresses by the provided filter */
  post(
    options: CloudVmClustersListPrivateIpAddressesParameters,
  ): StreamableMethod<
    | CloudVmClustersListPrivateIpAddresses200Response
    | CloudVmClustersListPrivateIpAddressesDefaultResponse
  >;
}

export interface VirtualNetworkAddressesCreateOrUpdate {
  /** Create a VirtualNetworkAddress */
  put(
    options: VirtualNetworkAddressesCreateOrUpdateParameters,
  ): StreamableMethod<
    | VirtualNetworkAddressesCreateOrUpdate200Response
    | VirtualNetworkAddressesCreateOrUpdate201Response
    | VirtualNetworkAddressesCreateOrUpdateDefaultResponse
  >;
  /** Get a VirtualNetworkAddress */
  get(
    options?: VirtualNetworkAddressesGetParameters,
  ): StreamableMethod<
    | VirtualNetworkAddressesGet200Response
    | VirtualNetworkAddressesGetDefaultResponse
  >;
  /** Delete a VirtualNetworkAddress */
  delete(
    options?: VirtualNetworkAddressesDeleteParameters,
  ): StreamableMethod<
    | VirtualNetworkAddressesDelete202Response
    | VirtualNetworkAddressesDelete204Response
    | VirtualNetworkAddressesDeleteDefaultResponse
  >;
}

export interface VirtualNetworkAddressesListByCloudVmCluster {
  /** List VirtualNetworkAddress resources by CloudVmCluster */
  get(
    options?: VirtualNetworkAddressesListByCloudVmClusterParameters,
  ): StreamableMethod<
    | VirtualNetworkAddressesListByCloudVmCluster200Response
    | VirtualNetworkAddressesListByCloudVmClusterDefaultResponse
  >;
}

export interface SystemVersionsGet {
  /** Get a SystemVersion */
  get(
    options?: SystemVersionsGetParameters,
  ): StreamableMethod<
    SystemVersionsGet200Response | SystemVersionsGetDefaultResponse
  >;
}

export interface SystemVersionsListByLocation {
  /** List SystemVersion resources by Location */
  get(
    options?: SystemVersionsListByLocationParameters,
  ): StreamableMethod<
    | SystemVersionsListByLocation200Response
    | SystemVersionsListByLocationDefaultResponse
  >;
}

export interface OracleSubscriptionsListBySubscription {
  /** List OracleSubscription resources by subscription ID */
  get(
    options?: OracleSubscriptionsListBySubscriptionParameters,
  ): StreamableMethod<
    | OracleSubscriptionsListBySubscription200Response
    | OracleSubscriptionsListBySubscriptionDefaultResponse
  >;
}

export interface OracleSubscriptionsCreateOrUpdate {
  /** Create a OracleSubscription */
  put(
    options: OracleSubscriptionsCreateOrUpdateParameters,
  ): StreamableMethod<
    | OracleSubscriptionsCreateOrUpdate200Response
    | OracleSubscriptionsCreateOrUpdate201Response
    | OracleSubscriptionsCreateOrUpdateDefaultResponse
  >;
  /** Get a OracleSubscription */
  get(
    options?: OracleSubscriptionsGetParameters,
  ): StreamableMethod<
    OracleSubscriptionsGet200Response | OracleSubscriptionsGetDefaultResponse
  >;
  /** Update a OracleSubscription */
  patch(
    options: OracleSubscriptionsUpdateParameters,
  ): StreamableMethod<
    | OracleSubscriptionsUpdate200Response
    | OracleSubscriptionsUpdate202Response
    | OracleSubscriptionsUpdateDefaultResponse
  >;
  /** Delete a OracleSubscription */
  delete(
    options?: OracleSubscriptionsDeleteParameters,
  ): StreamableMethod<
    | OracleSubscriptionsDelete202Response
    | OracleSubscriptionsDelete204Response
    | OracleSubscriptionsDeleteDefaultResponse
  >;
}

export interface OracleSubscriptionsListCloudAccountDetails {
  /** List Cloud Account Details */
  post(
    options?: OracleSubscriptionsListCloudAccountDetailsParameters,
  ): StreamableMethod<
    | OracleSubscriptionsListCloudAccountDetails200Response
    | OracleSubscriptionsListCloudAccountDetails202Response
    | OracleSubscriptionsListCloudAccountDetailsDefaultResponse
  >;
}

export interface OracleSubscriptionsListSaasSubscriptionDetails {
  /** List Saas Subscription Details */
  post(
    options?: OracleSubscriptionsListSaasSubscriptionDetailsParameters,
  ): StreamableMethod<
    | OracleSubscriptionsListSaasSubscriptionDetails200Response
    | OracleSubscriptionsListSaasSubscriptionDetails202Response
    | OracleSubscriptionsListSaasSubscriptionDetailsDefaultResponse
  >;
}

export interface OracleSubscriptionsListActivationLinks {
  /** List Activation Links */
  post(
    options?: OracleSubscriptionsListActivationLinksParameters,
  ): StreamableMethod<
    | OracleSubscriptionsListActivationLinks200Response
    | OracleSubscriptionsListActivationLinks202Response
    | OracleSubscriptionsListActivationLinksDefaultResponse
  >;
}

export interface DbNodesGet {
  /** Get a DbNode */
  get(
    options?: DbNodesGetParameters,
  ): StreamableMethod<DbNodesGet200Response | DbNodesGetDefaultResponse>;
}

export interface DbNodesListByCloudVmCluster {
  /** List DbNode resources by CloudVmCluster */
  get(
    options?: DbNodesListByCloudVmClusterParameters,
  ): StreamableMethod<
    | DbNodesListByCloudVmCluster200Response
    | DbNodesListByCloudVmClusterDefaultResponse
  >;
}

export interface DbNodesAction {
  /** VM actions on DbNode of VM Cluster by the provided filter */
  post(
    options: DbNodesActionParameters,
  ): StreamableMethod<
    | DbNodesAction200Response
    | DbNodesAction202Response
    | DbNodesActionDefaultResponse
  >;
}

export interface GiVersionsGet {
  /** Get a GiVersion */
  get(
    options?: GiVersionsGetParameters,
  ): StreamableMethod<GiVersionsGet200Response | GiVersionsGetDefaultResponse>;
}

export interface GiVersionsListByLocation {
  /** List GiVersion resources by Location */
  get(
    options?: GiVersionsListByLocationParameters,
  ): StreamableMethod<
    | GiVersionsListByLocation200Response
    | GiVersionsListByLocationDefaultResponse
  >;
}

export interface DbSystemShapesGet {
  /** Get a DbSystemShape */
  get(
    options?: DbSystemShapesGetParameters,
  ): StreamableMethod<
    DbSystemShapesGet200Response | DbSystemShapesGetDefaultResponse
  >;
}

export interface DbSystemShapesListByLocation {
  /** List DbSystemShape resources by Location */
  get(
    options?: DbSystemShapesListByLocationParameters,
  ): StreamableMethod<
    | DbSystemShapesListByLocation200Response
    | DbSystemShapesListByLocationDefaultResponse
  >;
}

export interface DnsPrivateViewsGet {
  /** Get a DnsPrivateView */
  get(
    options?: DnsPrivateViewsGetParameters,
  ): StreamableMethod<
    DnsPrivateViewsGet200Response | DnsPrivateViewsGetDefaultResponse
  >;
}

export interface DnsPrivateViewsListByLocation {
  /** List DnsPrivateView resources by Location */
  get(
    options?: DnsPrivateViewsListByLocationParameters,
  ): StreamableMethod<
    | DnsPrivateViewsListByLocation200Response
    | DnsPrivateViewsListByLocationDefaultResponse
  >;
}

export interface DnsPrivateZonesGet {
  /** Get a DnsPrivateZone */
  get(
    options?: DnsPrivateZonesGetParameters,
  ): StreamableMethod<
    DnsPrivateZonesGet200Response | DnsPrivateZonesGetDefaultResponse
  >;
}

export interface DnsPrivateZonesListByLocation {
  /** List DnsPrivateZone resources by Location */
  get(
    options?: DnsPrivateZonesListByLocationParameters,
  ): StreamableMethod<
    | DnsPrivateZonesListByLocation200Response
    | DnsPrivateZonesListByLocationDefaultResponse
  >;
}

export interface AutonomousDatabasesListBySubscription {
  /** List AutonomousDatabase resources by subscription ID */
  get(
    options?: AutonomousDatabasesListBySubscriptionParameters,
  ): StreamableMethod<
    | AutonomousDatabasesListBySubscription200Response
    | AutonomousDatabasesListBySubscriptionDefaultResponse
  >;
}

export interface AutonomousDatabasesCreateOrUpdate {
  /** Create a AutonomousDatabase */
  put(
    options: AutonomousDatabasesCreateOrUpdateParameters,
  ): StreamableMethod<
    | AutonomousDatabasesCreateOrUpdate200Response
    | AutonomousDatabasesCreateOrUpdate201Response
    | AutonomousDatabasesCreateOrUpdateDefaultResponse
  >;
  /** Get a AutonomousDatabase */
  get(
    options?: AutonomousDatabasesGetParameters,
  ): StreamableMethod<
    AutonomousDatabasesGet200Response | AutonomousDatabasesGetDefaultResponse
  >;
  /** Update a AutonomousDatabase */
  patch(
    options: AutonomousDatabasesUpdateParameters,
  ): StreamableMethod<
    | AutonomousDatabasesUpdate200Response
    | AutonomousDatabasesUpdate202Response
    | AutonomousDatabasesUpdateDefaultResponse
  >;
  /** Delete a AutonomousDatabase */
  delete(
    options?: AutonomousDatabasesDeleteParameters,
  ): StreamableMethod<
    | AutonomousDatabasesDelete202Response
    | AutonomousDatabasesDelete204Response
    | AutonomousDatabasesDeleteDefaultResponse
  >;
}

export interface AutonomousDatabasesListByResourceGroup {
  /** List AutonomousDatabase resources by resource group */
  get(
    options?: AutonomousDatabasesListByResourceGroupParameters,
  ): StreamableMethod<
    | AutonomousDatabasesListByResourceGroup200Response
    | AutonomousDatabasesListByResourceGroupDefaultResponse
  >;
}

export interface AutonomousDatabasesSwitchover {
  /** Perform switchover action on Autonomous Database */
  post(
    options: AutonomousDatabasesSwitchoverParameters,
  ): StreamableMethod<
    | AutonomousDatabasesSwitchover200Response
    | AutonomousDatabasesSwitchover202Response
    | AutonomousDatabasesSwitchoverDefaultResponse
  >;
}

export interface AutonomousDatabasesFailover {
  /** Perform failover action on Autonomous Database */
  post(
    options: AutonomousDatabasesFailoverParameters,
  ): StreamableMethod<
    | AutonomousDatabasesFailover200Response
    | AutonomousDatabasesFailover202Response
    | AutonomousDatabasesFailoverDefaultResponse
  >;
}

export interface AutonomousDatabasesGenerateWallet {
  /** Generate wallet action on Autonomous Database */
  post(
    options: AutonomousDatabasesGenerateWalletParameters,
  ): StreamableMethod<
    | AutonomousDatabasesGenerateWallet200Response
    | AutonomousDatabasesGenerateWalletDefaultResponse
  >;
}

export interface AutonomousDatabasesRestore {
  /** Restores an Autonomous Database based on the provided request parameters. */
  post(
    options: AutonomousDatabasesRestoreParameters,
  ): StreamableMethod<
    | AutonomousDatabasesRestore200Response
    | AutonomousDatabasesRestore202Response
    | AutonomousDatabasesRestoreDefaultResponse
  >;
}

export interface AutonomousDatabasesShrink {
  /** This operation shrinks the current allocated storage down to the current actual used data storage. */
  post(
    options: AutonomousDatabasesShrinkParameters,
  ): StreamableMethod<
    | AutonomousDatabasesShrink200Response
    | AutonomousDatabasesShrink202Response
    | AutonomousDatabasesShrinkDefaultResponse
  >;
}

export interface AutonomousDatabaseBackupsCreateOrUpdate {
  /** Create a AutonomousDatabaseBackup */
  put(
    options: AutonomousDatabaseBackupsCreateOrUpdateParameters,
  ): StreamableMethod<
    | AutonomousDatabaseBackupsCreateOrUpdate200Response
    | AutonomousDatabaseBackupsCreateOrUpdate201Response
    | AutonomousDatabaseBackupsCreateOrUpdateDefaultResponse
  >;
  /** Get a AutonomousDatabaseBackup */
  get(
    options?: AutonomousDatabaseBackupsGetParameters,
  ): StreamableMethod<
    | AutonomousDatabaseBackupsGet200Response
    | AutonomousDatabaseBackupsGetDefaultResponse
  >;
  /** Delete a AutonomousDatabaseBackup */
  delete(
    options?: AutonomousDatabaseBackupsDeleteParameters,
  ): StreamableMethod<
    | AutonomousDatabaseBackupsDelete202Response
    | AutonomousDatabaseBackupsDelete204Response
    | AutonomousDatabaseBackupsDeleteDefaultResponse
  >;
  /** Update a AutonomousDatabaseBackup */
  patch(
    options: AutonomousDatabaseBackupsUpdateParameters,
  ): StreamableMethod<
    | AutonomousDatabaseBackupsUpdate200Response
    | AutonomousDatabaseBackupsUpdate202Response
    | AutonomousDatabaseBackupsUpdateDefaultResponse
  >;
}

export interface AutonomousDatabaseBackupsListByAutonomousDatabase {
  /** List AutonomousDatabaseBackup resources by AutonomousDatabase */
  get(
    options?: AutonomousDatabaseBackupsListByAutonomousDatabaseParameters,
  ): StreamableMethod<
    | AutonomousDatabaseBackupsListByAutonomousDatabase200Response
    | AutonomousDatabaseBackupsListByAutonomousDatabaseDefaultResponse
  >;
}

export interface AutonomousDatabaseCharacterSetsGet {
  /** Get a AutonomousDatabaseCharacterSet */
  get(
    options?: AutonomousDatabaseCharacterSetsGetParameters,
  ): StreamableMethod<
    | AutonomousDatabaseCharacterSetsGet200Response
    | AutonomousDatabaseCharacterSetsGetDefaultResponse
  >;
}

export interface AutonomousDatabaseCharacterSetsListByLocation {
  /** List AutonomousDatabaseCharacterSet resources by Location */
  get(
    options?: AutonomousDatabaseCharacterSetsListByLocationParameters,
  ): StreamableMethod<
    | AutonomousDatabaseCharacterSetsListByLocation200Response
    | AutonomousDatabaseCharacterSetsListByLocationDefaultResponse
  >;
}

export interface AutonomousDatabaseNationalCharacterSetsGet {
  /** Get a AutonomousDatabaseNationalCharacterSet */
  get(
    options?: AutonomousDatabaseNationalCharacterSetsGetParameters,
  ): StreamableMethod<
    | AutonomousDatabaseNationalCharacterSetsGet200Response
    | AutonomousDatabaseNationalCharacterSetsGetDefaultResponse
  >;
}

export interface AutonomousDatabaseNationalCharacterSetsListByLocation {
  /** List AutonomousDatabaseNationalCharacterSet resources by Location */
  get(
    options?: AutonomousDatabaseNationalCharacterSetsListByLocationParameters,
  ): StreamableMethod<
    | AutonomousDatabaseNationalCharacterSetsListByLocation200Response
    | AutonomousDatabaseNationalCharacterSetsListByLocationDefaultResponse
  >;
}

export interface AutonomousDatabaseVersionsGet {
  /** Get a AutonomousDbVersion */
  get(
    options?: AutonomousDatabaseVersionsGetParameters,
  ): StreamableMethod<
    | AutonomousDatabaseVersionsGet200Response
    | AutonomousDatabaseVersionsGetDefaultResponse
  >;
}

export interface AutonomousDatabaseVersionsListByLocation {
  /** List AutonomousDbVersion resources by Location */
  get(
    options?: AutonomousDatabaseVersionsListByLocationParameters,
  ): StreamableMethod<
    | AutonomousDatabaseVersionsListByLocation200Response
    | AutonomousDatabaseVersionsListByLocationDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/providers/Oracle.Database/operations' has methods for the following verbs: get */
  (path: "/providers/Oracle.Database/operations"): OperationsList;
  /** Resource for '/subscriptions/\{subscriptionId\}/providers/Oracle.Database/cloudExadataInfrastructures' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/providers/Oracle.Database/cloudExadataInfrastructures",
    subscriptionId: string,
  ): CloudExadataInfrastructuresListBySubscription;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Oracle.Database/cloudExadataInfrastructures/\{cloudexadatainfrastructurename\}' has methods for the following verbs: put, get, patch, delete */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudExadataInfrastructures/{cloudexadatainfrastructurename}",
    subscriptionId: string,
    resourceGroupName: string,
    cloudexadatainfrastructurename: string,
  ): CloudExadataInfrastructuresCreateOrUpdate;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Oracle.Database/cloudExadataInfrastructures' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudExadataInfrastructures",
    subscriptionId: string,
    resourceGroupName: string,
  ): CloudExadataInfrastructuresListByResourceGroup;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Oracle.Database/cloudExadataInfrastructures/\{cloudexadatainfrastructurename\}/addStorageCapacity' has methods for the following verbs: post */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudExadataInfrastructures/{cloudexadatainfrastructurename}/addStorageCapacity",
    subscriptionId: string,
    resourceGroupName: string,
    cloudexadatainfrastructurename: string,
  ): CloudExadataInfrastructuresAddStorageCapacity;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Oracle.Database/cloudExadataInfrastructures/\{cloudexadatainfrastructurename\}/dbServers/\{dbserverocid\}' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudExadataInfrastructures/{cloudexadatainfrastructurename}/dbServers/{dbserverocid}",
    subscriptionId: string,
    resourceGroupName: string,
    cloudexadatainfrastructurename: string,
    dbserverocid: string,
  ): DbServersGet;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Oracle.Database/cloudExadataInfrastructures/\{cloudexadatainfrastructurename\}/dbServers' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudExadataInfrastructures/{cloudexadatainfrastructurename}/dbServers",
    subscriptionId: string,
    resourceGroupName: string,
    cloudexadatainfrastructurename: string,
  ): DbServersListByCloudExadataInfrastructure;
  /** Resource for '/subscriptions/\{subscriptionId\}/providers/Oracle.Database/cloudVmClusters' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/providers/Oracle.Database/cloudVmClusters",
    subscriptionId: string,
  ): CloudVmClustersListBySubscription;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Oracle.Database/cloudVmClusters/\{cloudvmclustername\}' has methods for the following verbs: put, get, patch, delete */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}",
    subscriptionId: string,
    resourceGroupName: string,
    cloudvmclustername: string,
  ): CloudVmClustersCreateOrUpdate;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Oracle.Database/cloudVmClusters' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters",
    subscriptionId: string,
    resourceGroupName: string,
  ): CloudVmClustersListByResourceGroup;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Oracle.Database/cloudVmClusters/\{cloudvmclustername\}/addVms' has methods for the following verbs: post */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/addVms",
    subscriptionId: string,
    resourceGroupName: string,
    cloudvmclustername: string,
  ): CloudVmClustersAddVms;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Oracle.Database/cloudVmClusters/\{cloudvmclustername\}/removeVms' has methods for the following verbs: post */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/removeVms",
    subscriptionId: string,
    resourceGroupName: string,
    cloudvmclustername: string,
  ): CloudVmClustersRemoveVms;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Oracle.Database/cloudVmClusters/\{cloudvmclustername\}/listPrivateIpAddresses' has methods for the following verbs: post */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/listPrivateIpAddresses",
    subscriptionId: string,
    resourceGroupName: string,
    cloudvmclustername: string,
  ): CloudVmClustersListPrivateIpAddresses;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Oracle.Database/cloudVmClusters/\{cloudvmclustername\}/virtualNetworkAddresses/\{virtualnetworkaddressname\}' has methods for the following verbs: put, get, delete */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/virtualNetworkAddresses/{virtualnetworkaddressname}",
    subscriptionId: string,
    resourceGroupName: string,
    cloudvmclustername: string,
    virtualnetworkaddressname: string,
  ): VirtualNetworkAddressesCreateOrUpdate;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Oracle.Database/cloudVmClusters/\{cloudvmclustername\}/virtualNetworkAddresses' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/virtualNetworkAddresses",
    subscriptionId: string,
    resourceGroupName: string,
    cloudvmclustername: string,
  ): VirtualNetworkAddressesListByCloudVmCluster;
  /** Resource for '/subscriptions/\{subscriptionId\}/providers/Oracle.Database/locations/\{location\}/systemVersions/\{systemversionname\}' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/systemVersions/{systemversionname}",
    subscriptionId: string,
    location: string,
    systemversionname: string,
  ): SystemVersionsGet;
  /** Resource for '/subscriptions/\{subscriptionId\}/providers/Oracle.Database/locations/\{location\}/systemVersions' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/systemVersions",
    subscriptionId: string,
    location: string,
  ): SystemVersionsListByLocation;
  /** Resource for '/subscriptions/\{subscriptionId\}/providers/Oracle.Database/oracleSubscriptions' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions",
    subscriptionId: string,
  ): OracleSubscriptionsListBySubscription;
  /** Resource for '/subscriptions/\{subscriptionId\}/providers/Oracle.Database/oracleSubscriptions/default' has methods for the following verbs: put, get, patch, delete */
  (
    path: "/subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions/default",
    subscriptionId: string,
  ): OracleSubscriptionsCreateOrUpdate;
  /** Resource for '/subscriptions/\{subscriptionId\}/providers/Oracle.Database/oracleSubscriptions/default/listCloudAccountDetails' has methods for the following verbs: post */
  (
    path: "/subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions/default/listCloudAccountDetails",
    subscriptionId: string,
  ): OracleSubscriptionsListCloudAccountDetails;
  /** Resource for '/subscriptions/\{subscriptionId\}/providers/Oracle.Database/oracleSubscriptions/default/listSaasSubscriptionDetails' has methods for the following verbs: post */
  (
    path: "/subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions/default/listSaasSubscriptionDetails",
    subscriptionId: string,
  ): OracleSubscriptionsListSaasSubscriptionDetails;
  /** Resource for '/subscriptions/\{subscriptionId\}/providers/Oracle.Database/oracleSubscriptions/default/listActivationLinks' has methods for the following verbs: post */
  (
    path: "/subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions/default/listActivationLinks",
    subscriptionId: string,
  ): OracleSubscriptionsListActivationLinks;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Oracle.Database/cloudVmClusters/\{cloudvmclustername\}/dbNodes/\{dbnodeocid\}' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/dbNodes/{dbnodeocid}",
    subscriptionId: string,
    resourceGroupName: string,
    cloudvmclustername: string,
    dbnodeocid: string,
  ): DbNodesGet;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Oracle.Database/cloudVmClusters/\{cloudvmclustername\}/dbNodes' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/dbNodes",
    subscriptionId: string,
    resourceGroupName: string,
    cloudvmclustername: string,
  ): DbNodesListByCloudVmCluster;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Oracle.Database/cloudVmClusters/\{cloudvmclustername\}/dbNodes/\{dbnodeocid\}/action' has methods for the following verbs: post */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudVmClusters/{cloudvmclustername}/dbNodes/{dbnodeocid}/action",
    subscriptionId: string,
    resourceGroupName: string,
    cloudvmclustername: string,
    dbnodeocid: string,
  ): DbNodesAction;
  /** Resource for '/subscriptions/\{subscriptionId\}/providers/Oracle.Database/locations/\{location\}/giVersions/\{giversionname\}' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/giVersions/{giversionname}",
    subscriptionId: string,
    location: string,
    giversionname: string,
  ): GiVersionsGet;
  /** Resource for '/subscriptions/\{subscriptionId\}/providers/Oracle.Database/locations/\{location\}/giVersions' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/giVersions",
    subscriptionId: string,
    location: string,
  ): GiVersionsListByLocation;
  /** Resource for '/subscriptions/\{subscriptionId\}/providers/Oracle.Database/locations/\{location\}/dbSystemShapes/\{dbsystemshapename\}' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/dbSystemShapes/{dbsystemshapename}",
    subscriptionId: string,
    location: string,
    dbsystemshapename: string,
  ): DbSystemShapesGet;
  /** Resource for '/subscriptions/\{subscriptionId\}/providers/Oracle.Database/locations/\{location\}/dbSystemShapes' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/dbSystemShapes",
    subscriptionId: string,
    location: string,
  ): DbSystemShapesListByLocation;
  /** Resource for '/subscriptions/\{subscriptionId\}/providers/Oracle.Database/locations/\{location\}/dnsPrivateViews/\{dnsprivateviewocid\}' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/dnsPrivateViews/{dnsprivateviewocid}",
    subscriptionId: string,
    location: string,
    dnsprivateviewocid: string,
  ): DnsPrivateViewsGet;
  /** Resource for '/subscriptions/\{subscriptionId\}/providers/Oracle.Database/locations/\{location\}/dnsPrivateViews' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/dnsPrivateViews",
    subscriptionId: string,
    location: string,
  ): DnsPrivateViewsListByLocation;
  /** Resource for '/subscriptions/\{subscriptionId\}/providers/Oracle.Database/locations/\{location\}/dnsPrivateZones/\{dnsprivatezonename\}' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/dnsPrivateZones/{dnsprivatezonename}",
    subscriptionId: string,
    location: string,
    dnsprivatezonename: string,
  ): DnsPrivateZonesGet;
  /** Resource for '/subscriptions/\{subscriptionId\}/providers/Oracle.Database/locations/\{location\}/dnsPrivateZones' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/dnsPrivateZones",
    subscriptionId: string,
    location: string,
  ): DnsPrivateZonesListByLocation;
  /** Resource for '/subscriptions/\{subscriptionId\}/providers/Oracle.Database/autonomousDatabases' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/providers/Oracle.Database/autonomousDatabases",
    subscriptionId: string,
  ): AutonomousDatabasesListBySubscription;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Oracle.Database/autonomousDatabases/\{autonomousdatabasename\}' has methods for the following verbs: put, get, patch, delete */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}",
    subscriptionId: string,
    resourceGroupName: string,
    autonomousdatabasename: string,
  ): AutonomousDatabasesCreateOrUpdate;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Oracle.Database/autonomousDatabases' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases",
    subscriptionId: string,
    resourceGroupName: string,
  ): AutonomousDatabasesListByResourceGroup;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Oracle.Database/autonomousDatabases/\{autonomousdatabasename\}/switchover' has methods for the following verbs: post */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}/switchover",
    subscriptionId: string,
    resourceGroupName: string,
    autonomousdatabasename: string,
  ): AutonomousDatabasesSwitchover;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Oracle.Database/autonomousDatabases/\{autonomousdatabasename\}/failover' has methods for the following verbs: post */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}/failover",
    subscriptionId: string,
    resourceGroupName: string,
    autonomousdatabasename: string,
  ): AutonomousDatabasesFailover;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Oracle.Database/autonomousDatabases/\{autonomousdatabasename\}/generateWallet' has methods for the following verbs: post */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}/generateWallet",
    subscriptionId: string,
    resourceGroupName: string,
    autonomousdatabasename: string,
  ): AutonomousDatabasesGenerateWallet;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Oracle.Database/autonomousDatabases/\{autonomousdatabasename\}/restore' has methods for the following verbs: post */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}/restore",
    subscriptionId: string,
    resourceGroupName: string,
    autonomousdatabasename: string,
  ): AutonomousDatabasesRestore;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Oracle.Database/autonomousDatabases/\{autonomousdatabasename\}/shrink' has methods for the following verbs: post */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}/shrink",
    subscriptionId: string,
    resourceGroupName: string,
    autonomousdatabasename: string,
  ): AutonomousDatabasesShrink;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Oracle.Database/autonomousDatabases/\{autonomousdatabasename\}/autonomousDatabaseBackups/\{adbbackupid\}' has methods for the following verbs: put, get, delete, patch */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}/autonomousDatabaseBackups/{adbbackupid}",
    subscriptionId: string,
    resourceGroupName: string,
    autonomousdatabasename: string,
    adbbackupid: string,
  ): AutonomousDatabaseBackupsCreateOrUpdate;
  /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Oracle.Database/autonomousDatabases/\{autonomousdatabasename\}/autonomousDatabaseBackups' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/autonomousDatabases/{autonomousdatabasename}/autonomousDatabaseBackups",
    subscriptionId: string,
    resourceGroupName: string,
    autonomousdatabasename: string,
  ): AutonomousDatabaseBackupsListByAutonomousDatabase;
  /** Resource for '/subscriptions/\{subscriptionId\}/providers/Oracle.Database/locations/\{location\}/autonomousDatabaseCharacterSets/\{adbscharsetname\}' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/autonomousDatabaseCharacterSets/{adbscharsetname}",
    subscriptionId: string,
    location: string,
    adbscharsetname: string,
  ): AutonomousDatabaseCharacterSetsGet;
  /** Resource for '/subscriptions/\{subscriptionId\}/providers/Oracle.Database/locations/\{location\}/autonomousDatabaseCharacterSets' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/autonomousDatabaseCharacterSets",
    subscriptionId: string,
    location: string,
  ): AutonomousDatabaseCharacterSetsListByLocation;
  /** Resource for '/subscriptions/\{subscriptionId\}/providers/Oracle.Database/locations/\{location\}/autonomousDatabaseNationalCharacterSets/\{adbsncharsetname\}' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/autonomousDatabaseNationalCharacterSets/{adbsncharsetname}",
    subscriptionId: string,
    location: string,
    adbsncharsetname: string,
  ): AutonomousDatabaseNationalCharacterSetsGet;
  /** Resource for '/subscriptions/\{subscriptionId\}/providers/Oracle.Database/locations/\{location\}/autonomousDatabaseNationalCharacterSets' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/autonomousDatabaseNationalCharacterSets",
    subscriptionId: string,
    location: string,
  ): AutonomousDatabaseNationalCharacterSetsListByLocation;
  /** Resource for '/subscriptions/\{subscriptionId\}/providers/Oracle.Database/locations/\{location\}/autonomousDbVersions/\{autonomousdbversionsname\}' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/autonomousDbVersions/{autonomousdbversionsname}",
    subscriptionId: string,
    location: string,
    autonomousdbversionsname: string,
  ): AutonomousDatabaseVersionsGet;
  /** Resource for '/subscriptions/\{subscriptionId\}/providers/Oracle.Database/locations/\{location\}/autonomousDbVersions' has methods for the following verbs: get */
  (
    path: "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/autonomousDbVersions",
    subscriptionId: string,
    location: string,
  ): AutonomousDatabaseVersionsListByLocation;
}

export type DatabaseContext = Client & {
  path: Routes;
};
