// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import {
  CloudExadataInfrastructure,
  CloudExadataInfrastructureUpdate,
  CloudVmCluster,
  CloudVmClusterUpdate,
  AddRemoveDbNode,
  PrivateIpAddressesFilter,
  VirtualNetworkAddress,
  OracleSubscription,
  OracleSubscriptionUpdate,
  DbNodeAction,
  AutonomousDatabase,
  AutonomousDatabaseUpdate,
  PeerDbDetails,
  GenerateAutonomousDatabaseWalletDetails,
  RestoreAutonomousDatabaseDetails,
  AutonomousDatabaseBackup,
  AutonomousDatabaseBackupUpdate,
} from "./models.js";

export type OperationsListParameters = RequestParameters;
export type CloudExadataInfrastructuresListBySubscriptionParameters =
  RequestParameters;

export interface CloudExadataInfrastructuresCreateOrUpdateBodyParam {
  /** Resource create parameters. */
  body: CloudExadataInfrastructure;
}

export type CloudExadataInfrastructuresCreateOrUpdateParameters =
  CloudExadataInfrastructuresCreateOrUpdateBodyParam & RequestParameters;
export type CloudExadataInfrastructuresGetParameters = RequestParameters;

export interface CloudExadataInfrastructuresUpdateBodyParam {
  /** The resource properties to be updated. */
  body: CloudExadataInfrastructureUpdate;
}

export type CloudExadataInfrastructuresUpdateParameters =
  CloudExadataInfrastructuresUpdateBodyParam & RequestParameters;
export type CloudExadataInfrastructuresDeleteParameters = RequestParameters;
export type CloudExadataInfrastructuresListByResourceGroupParameters =
  RequestParameters;
export type CloudExadataInfrastructuresAddStorageCapacityParameters =
  RequestParameters;
export type DbServersGetParameters = RequestParameters;
export type DbServersListByCloudExadataInfrastructureParameters =
  RequestParameters;
export type CloudVmClustersListBySubscriptionParameters = RequestParameters;

export interface CloudVmClustersCreateOrUpdateBodyParam {
  /** Resource create parameters. */
  body: CloudVmCluster;
}

export type CloudVmClustersCreateOrUpdateParameters =
  CloudVmClustersCreateOrUpdateBodyParam & RequestParameters;
export type CloudVmClustersGetParameters = RequestParameters;

export interface CloudVmClustersUpdateBodyParam {
  /** The resource properties to be updated. */
  body: CloudVmClusterUpdate;
}

export type CloudVmClustersUpdateParameters = CloudVmClustersUpdateBodyParam &
  RequestParameters;
export type CloudVmClustersDeleteParameters = RequestParameters;
export type CloudVmClustersListByResourceGroupParameters = RequestParameters;

export interface CloudVmClustersAddVmsBodyParam {
  /** The content of the action request */
  body: AddRemoveDbNode;
}

export type CloudVmClustersAddVmsParameters = CloudVmClustersAddVmsBodyParam &
  RequestParameters;

export interface CloudVmClustersRemoveVmsBodyParam {
  /** The content of the action request */
  body: AddRemoveDbNode;
}

export type CloudVmClustersRemoveVmsParameters =
  CloudVmClustersRemoveVmsBodyParam & RequestParameters;

export interface CloudVmClustersListPrivateIpAddressesBodyParam {
  /** The content of the action request */
  body: PrivateIpAddressesFilter;
}

export type CloudVmClustersListPrivateIpAddressesParameters =
  CloudVmClustersListPrivateIpAddressesBodyParam & RequestParameters;

export interface VirtualNetworkAddressesCreateOrUpdateBodyParam {
  /** Resource create parameters. */
  body: VirtualNetworkAddress;
}

export type VirtualNetworkAddressesCreateOrUpdateParameters =
  VirtualNetworkAddressesCreateOrUpdateBodyParam & RequestParameters;
export type VirtualNetworkAddressesGetParameters = RequestParameters;
export type VirtualNetworkAddressesDeleteParameters = RequestParameters;
export type VirtualNetworkAddressesListByCloudVmClusterParameters =
  RequestParameters;
export type SystemVersionsGetParameters = RequestParameters;
export type SystemVersionsListByLocationParameters = RequestParameters;
export type OracleSubscriptionsListBySubscriptionParameters = RequestParameters;

export interface OracleSubscriptionsCreateOrUpdateBodyParam {
  /** Resource create parameters. */
  body: OracleSubscription;
}

export type OracleSubscriptionsCreateOrUpdateParameters =
  OracleSubscriptionsCreateOrUpdateBodyParam & RequestParameters;
export type OracleSubscriptionsGetParameters = RequestParameters;

export interface OracleSubscriptionsUpdateBodyParam {
  /** The resource properties to be updated. */
  body: OracleSubscriptionUpdate;
}

export type OracleSubscriptionsUpdateParameters =
  OracleSubscriptionsUpdateBodyParam & RequestParameters;
export type OracleSubscriptionsDeleteParameters = RequestParameters;
export type OracleSubscriptionsListCloudAccountDetailsParameters =
  RequestParameters;
export type OracleSubscriptionsListSaasSubscriptionDetailsParameters =
  RequestParameters;
export type OracleSubscriptionsListActivationLinksParameters =
  RequestParameters;
export type DbNodesGetParameters = RequestParameters;
export type DbNodesListByCloudVmClusterParameters = RequestParameters;

export interface DbNodesActionBodyParam {
  /** The content of the action request */
  body: DbNodeAction;
}

export type DbNodesActionParameters = DbNodesActionBodyParam &
  RequestParameters;
export type GiVersionsGetParameters = RequestParameters;
export type GiVersionsListByLocationParameters = RequestParameters;
export type DbSystemShapesGetParameters = RequestParameters;
export type DbSystemShapesListByLocationParameters = RequestParameters;
export type DnsPrivateViewsGetParameters = RequestParameters;
export type DnsPrivateViewsListByLocationParameters = RequestParameters;
export type DnsPrivateZonesGetParameters = RequestParameters;
export type DnsPrivateZonesListByLocationParameters = RequestParameters;
export type AutonomousDatabasesListBySubscriptionParameters = RequestParameters;

export interface AutonomousDatabasesCreateOrUpdateBodyParam {
  /** Resource create parameters. */
  body: AutonomousDatabase;
}

export type AutonomousDatabasesCreateOrUpdateParameters =
  AutonomousDatabasesCreateOrUpdateBodyParam & RequestParameters;
export type AutonomousDatabasesGetParameters = RequestParameters;

export interface AutonomousDatabasesUpdateBodyParam {
  /** The resource properties to be updated. */
  body: AutonomousDatabaseUpdate;
}

export type AutonomousDatabasesUpdateParameters =
  AutonomousDatabasesUpdateBodyParam & RequestParameters;
export type AutonomousDatabasesDeleteParameters = RequestParameters;
export type AutonomousDatabasesListByResourceGroupParameters =
  RequestParameters;

export interface AutonomousDatabasesSwitchoverBodyParam {
  /** The content of the action request */
  body: PeerDbDetails;
}

export type AutonomousDatabasesSwitchoverParameters =
  AutonomousDatabasesSwitchoverBodyParam & RequestParameters;

export interface AutonomousDatabasesFailoverBodyParam {
  /** The content of the action request */
  body: PeerDbDetails;
}

export type AutonomousDatabasesFailoverParameters =
  AutonomousDatabasesFailoverBodyParam & RequestParameters;

export interface AutonomousDatabasesGenerateWalletBodyParam {
  /** The content of the action request */
  body: GenerateAutonomousDatabaseWalletDetails;
}

export type AutonomousDatabasesGenerateWalletParameters =
  AutonomousDatabasesGenerateWalletBodyParam & RequestParameters;

export interface AutonomousDatabasesRestoreBodyParam {
  /** The content of the action request */
  body: RestoreAutonomousDatabaseDetails;
}

export type AutonomousDatabasesRestoreParameters =
  AutonomousDatabasesRestoreBodyParam & RequestParameters;
export type AutonomousDatabasesShrinkParameters = RequestParameters;

export interface AutonomousDatabaseBackupsCreateOrUpdateBodyParam {
  /** Resource create parameters. */
  body: AutonomousDatabaseBackup;
}

export type AutonomousDatabaseBackupsCreateOrUpdateParameters =
  AutonomousDatabaseBackupsCreateOrUpdateBodyParam & RequestParameters;
export type AutonomousDatabaseBackupsGetParameters = RequestParameters;
export type AutonomousDatabaseBackupsDeleteParameters = RequestParameters;

export interface AutonomousDatabaseBackupsUpdateBodyParam {
  /** The resource properties to be updated. */
  body: AutonomousDatabaseBackupUpdate;
}

export type AutonomousDatabaseBackupsUpdateParameters =
  AutonomousDatabaseBackupsUpdateBodyParam & RequestParameters;
export type AutonomousDatabaseBackupsListByAutonomousDatabaseParameters =
  RequestParameters;
export type AutonomousDatabaseCharacterSetsGetParameters = RequestParameters;
export type AutonomousDatabaseCharacterSetsListByLocationParameters =
  RequestParameters;
export type AutonomousDatabaseNationalCharacterSetsGetParameters =
  RequestParameters;
export type AutonomousDatabaseNationalCharacterSetsListByLocationParameters =
  RequestParameters;
export type AutonomousDatabaseVersionsGetParameters = RequestParameters;
export type AutonomousDatabaseVersionsListByLocationParameters =
  RequestParameters;
