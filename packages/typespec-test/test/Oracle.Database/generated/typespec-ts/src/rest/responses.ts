// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse } from "@azure-rest/core-client";
import {
  PagedOperationOutput,
  ErrorResponseOutput,
  CloudExadataInfrastructureListResultOutput,
  CloudExadataInfrastructureOutput,
  DbServerOutput,
  DbServerListResultOutput,
  CloudVmClusterListResultOutput,
  CloudVmClusterOutput,
  PrivateIpAddressPropertiesOutput,
  VirtualNetworkAddressOutput,
  VirtualNetworkAddressListResultOutput,
  SystemVersionOutput,
  SystemVersionListResultOutput,
  OracleSubscriptionListResultOutput,
  OracleSubscriptionOutput,
  CloudAccountDetailsOutput,
  SaasSubscriptionDetailsOutput,
  ActivationLinksOutput,
  DbNodeOutput,
  DbNodeListResultOutput,
  GiVersionOutput,
  GiVersionListResultOutput,
  DbSystemShapeOutput,
  DbSystemShapeListResultOutput,
  DnsPrivateViewOutput,
  DnsPrivateViewListResultOutput,
  DnsPrivateZoneOutput,
  DnsPrivateZoneListResultOutput,
  AutonomousDatabaseListResultOutput,
  AutonomousDatabaseOutput,
  AutonomousDatabaseWalletFileOutput,
  AutonomousDatabaseBackupOutput,
  AutonomousDatabaseBackupListResultOutput,
  AutonomousDatabaseCharacterSetOutput,
  AutonomousDatabaseCharacterSetListResultOutput,
  AutonomousDatabaseNationalCharacterSetOutput,
  AutonomousDatabaseNationalCharacterSetListResultOutput,
  AutonomousDbVersionOutput,
  AutonomousDbVersionListResultOutput,
} from "./outputModels.js";

/** Azure operation completed successfully. */
export interface OperationsList200Response extends HttpResponse {
  status: "200";
  body: PagedOperationOutput;
}

export interface OperationsListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface CloudExadataInfrastructuresListBySubscription200Response
  extends HttpResponse {
  status: "200";
  body: CloudExadataInfrastructureListResultOutput;
}

export interface CloudExadataInfrastructuresListBySubscriptionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Resource 'CloudExadataInfrastructure' update operation succeeded */
export interface CloudExadataInfrastructuresCreateOrUpdate200Response
  extends HttpResponse {
  status: "200";
  body: CloudExadataInfrastructureOutput;
}

export interface CloudExadataInfrastructuresCreateOrUpdate201Headers {
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource 'CloudExadataInfrastructure' create operation succeeded */
export interface CloudExadataInfrastructuresCreateOrUpdate201Response
  extends HttpResponse {
  status: "201";
  body: CloudExadataInfrastructureOutput;
  headers: RawHttpHeaders & CloudExadataInfrastructuresCreateOrUpdate201Headers;
}

export interface CloudExadataInfrastructuresCreateOrUpdateDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running createOrUpdate operation */
export interface CloudExadataInfrastructuresCreateOrUpdateLogicalResponse
  extends HttpResponse {
  status: "200";
  body: CloudExadataInfrastructureOutput;
}

/** Azure operation completed successfully. */
export interface CloudExadataInfrastructuresGet200Response
  extends HttpResponse {
  status: "200";
  body: CloudExadataInfrastructureOutput;
}

export interface CloudExadataInfrastructuresGetDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface CloudExadataInfrastructuresUpdate200Response
  extends HttpResponse {
  status: "200";
  body: CloudExadataInfrastructureOutput;
}

export interface CloudExadataInfrastructuresUpdate202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource update request accepted. */
export interface CloudExadataInfrastructuresUpdate202Response
  extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & CloudExadataInfrastructuresUpdate202Headers;
}

export interface CloudExadataInfrastructuresUpdateDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running update operation */
export interface CloudExadataInfrastructuresUpdateLogicalResponse
  extends HttpResponse {
  status: "200";
  body: CloudExadataInfrastructureOutput;
}

export interface CloudExadataInfrastructuresDelete202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource deletion accepted. */
export interface CloudExadataInfrastructuresDelete202Response
  extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & CloudExadataInfrastructuresDelete202Headers;
}

/** Resource does not exist. */
export interface CloudExadataInfrastructuresDelete204Response
  extends HttpResponse {
  status: "204";
}

export interface CloudExadataInfrastructuresDeleteDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running delete operation */
export interface CloudExadataInfrastructuresDeleteLogicalResponse
  extends HttpResponse {
  status: "200";
}

/** Azure operation completed successfully. */
export interface CloudExadataInfrastructuresListByResourceGroup200Response
  extends HttpResponse {
  status: "200";
  body: CloudExadataInfrastructureListResultOutput;
}

export interface CloudExadataInfrastructuresListByResourceGroupDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface CloudExadataInfrastructuresAddStorageCapacity200Response
  extends HttpResponse {
  status: "200";
  body: CloudExadataInfrastructureOutput;
}

export interface CloudExadataInfrastructuresAddStorageCapacity202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource operation accepted. */
export interface CloudExadataInfrastructuresAddStorageCapacity202Response
  extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders &
    CloudExadataInfrastructuresAddStorageCapacity202Headers;
}

export interface CloudExadataInfrastructuresAddStorageCapacityDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running addStorageCapacity operation */
export interface CloudExadataInfrastructuresAddStorageCapacityLogicalResponse
  extends HttpResponse {
  status: "200";
  body: CloudExadataInfrastructureOutput;
}

/** Azure operation completed successfully. */
export interface DbServersGet200Response extends HttpResponse {
  status: "200";
  body: DbServerOutput;
}

export interface DbServersGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface DbServersListByCloudExadataInfrastructure200Response
  extends HttpResponse {
  status: "200";
  body: DbServerListResultOutput;
}

export interface DbServersListByCloudExadataInfrastructureDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface CloudVmClustersListBySubscription200Response
  extends HttpResponse {
  status: "200";
  body: CloudVmClusterListResultOutput;
}

export interface CloudVmClustersListBySubscriptionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Resource 'CloudVmCluster' update operation succeeded */
export interface CloudVmClustersCreateOrUpdate200Response extends HttpResponse {
  status: "200";
  body: CloudVmClusterOutput;
}

export interface CloudVmClustersCreateOrUpdate201Headers {
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource 'CloudVmCluster' create operation succeeded */
export interface CloudVmClustersCreateOrUpdate201Response extends HttpResponse {
  status: "201";
  body: CloudVmClusterOutput;
  headers: RawHttpHeaders & CloudVmClustersCreateOrUpdate201Headers;
}

export interface CloudVmClustersCreateOrUpdateDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running createOrUpdate operation */
export interface CloudVmClustersCreateOrUpdateLogicalResponse
  extends HttpResponse {
  status: "200";
  body: CloudVmClusterOutput;
}

/** Azure operation completed successfully. */
export interface CloudVmClustersGet200Response extends HttpResponse {
  status: "200";
  body: CloudVmClusterOutput;
}

export interface CloudVmClustersGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface CloudVmClustersUpdate200Response extends HttpResponse {
  status: "200";
  body: CloudVmClusterOutput;
}

export interface CloudVmClustersUpdate202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource update request accepted. */
export interface CloudVmClustersUpdate202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & CloudVmClustersUpdate202Headers;
}

export interface CloudVmClustersUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running update operation */
export interface CloudVmClustersUpdateLogicalResponse extends HttpResponse {
  status: "200";
  body: CloudVmClusterOutput;
}

export interface CloudVmClustersDelete202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource deletion accepted. */
export interface CloudVmClustersDelete202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & CloudVmClustersDelete202Headers;
}

/** Resource does not exist. */
export interface CloudVmClustersDelete204Response extends HttpResponse {
  status: "204";
}

export interface CloudVmClustersDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running delete operation */
export interface CloudVmClustersDeleteLogicalResponse extends HttpResponse {
  status: "200";
}

/** Azure operation completed successfully. */
export interface CloudVmClustersListByResourceGroup200Response
  extends HttpResponse {
  status: "200";
  body: CloudVmClusterListResultOutput;
}

export interface CloudVmClustersListByResourceGroupDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface CloudVmClustersAddVms200Response extends HttpResponse {
  status: "200";
  body: CloudVmClusterOutput;
}

export interface CloudVmClustersAddVms202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource operation accepted. */
export interface CloudVmClustersAddVms202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & CloudVmClustersAddVms202Headers;
}

export interface CloudVmClustersAddVmsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running addVms operation */
export interface CloudVmClustersAddVmsLogicalResponse extends HttpResponse {
  status: "200";
  body: CloudVmClusterOutput;
}

/** Azure operation completed successfully. */
export interface CloudVmClustersRemoveVms200Response extends HttpResponse {
  status: "200";
  body: CloudVmClusterOutput;
}

export interface CloudVmClustersRemoveVms202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource operation accepted. */
export interface CloudVmClustersRemoveVms202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & CloudVmClustersRemoveVms202Headers;
}

export interface CloudVmClustersRemoveVmsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running removeVms operation */
export interface CloudVmClustersRemoveVmsLogicalResponse extends HttpResponse {
  status: "200";
  body: CloudVmClusterOutput;
}

/** Azure operation completed successfully. */
export interface CloudVmClustersListPrivateIpAddresses200Response
  extends HttpResponse {
  status: "200";
  body: Array<PrivateIpAddressPropertiesOutput>;
}

export interface CloudVmClustersListPrivateIpAddressesDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Resource 'VirtualNetworkAddress' update operation succeeded */
export interface VirtualNetworkAddressesCreateOrUpdate200Response
  extends HttpResponse {
  status: "200";
  body: VirtualNetworkAddressOutput;
}

export interface VirtualNetworkAddressesCreateOrUpdate201Headers {
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource 'VirtualNetworkAddress' create operation succeeded */
export interface VirtualNetworkAddressesCreateOrUpdate201Response
  extends HttpResponse {
  status: "201";
  body: VirtualNetworkAddressOutput;
  headers: RawHttpHeaders & VirtualNetworkAddressesCreateOrUpdate201Headers;
}

export interface VirtualNetworkAddressesCreateOrUpdateDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running createOrUpdate operation */
export interface VirtualNetworkAddressesCreateOrUpdateLogicalResponse
  extends HttpResponse {
  status: "200";
  body: VirtualNetworkAddressOutput;
}

/** Azure operation completed successfully. */
export interface VirtualNetworkAddressesGet200Response extends HttpResponse {
  status: "200";
  body: VirtualNetworkAddressOutput;
}

export interface VirtualNetworkAddressesGetDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface VirtualNetworkAddressesDelete202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource deletion accepted. */
export interface VirtualNetworkAddressesDelete202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & VirtualNetworkAddressesDelete202Headers;
}

/** Resource does not exist. */
export interface VirtualNetworkAddressesDelete204Response extends HttpResponse {
  status: "204";
}

export interface VirtualNetworkAddressesDeleteDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running delete operation */
export interface VirtualNetworkAddressesDeleteLogicalResponse
  extends HttpResponse {
  status: "200";
}

/** Azure operation completed successfully. */
export interface VirtualNetworkAddressesListByCloudVmCluster200Response
  extends HttpResponse {
  status: "200";
  body: VirtualNetworkAddressListResultOutput;
}

export interface VirtualNetworkAddressesListByCloudVmClusterDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface SystemVersionsGet200Response extends HttpResponse {
  status: "200";
  body: SystemVersionOutput;
}

export interface SystemVersionsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface SystemVersionsListByLocation200Response extends HttpResponse {
  status: "200";
  body: SystemVersionListResultOutput;
}

export interface SystemVersionsListByLocationDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface OracleSubscriptionsListBySubscription200Response
  extends HttpResponse {
  status: "200";
  body: OracleSubscriptionListResultOutput;
}

export interface OracleSubscriptionsListBySubscriptionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Resource 'OracleSubscription' update operation succeeded */
export interface OracleSubscriptionsCreateOrUpdate200Response
  extends HttpResponse {
  status: "200";
  body: OracleSubscriptionOutput;
}

export interface OracleSubscriptionsCreateOrUpdate201Headers {
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource 'OracleSubscription' create operation succeeded */
export interface OracleSubscriptionsCreateOrUpdate201Response
  extends HttpResponse {
  status: "201";
  body: OracleSubscriptionOutput;
  headers: RawHttpHeaders & OracleSubscriptionsCreateOrUpdate201Headers;
}

export interface OracleSubscriptionsCreateOrUpdateDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running createOrUpdate operation */
export interface OracleSubscriptionsCreateOrUpdateLogicalResponse
  extends HttpResponse {
  status: "200";
  body: OracleSubscriptionOutput;
}

/** Azure operation completed successfully. */
export interface OracleSubscriptionsGet200Response extends HttpResponse {
  status: "200";
  body: OracleSubscriptionOutput;
}

export interface OracleSubscriptionsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface OracleSubscriptionsUpdate200Response extends HttpResponse {
  status: "200";
  body: OracleSubscriptionOutput;
}

export interface OracleSubscriptionsUpdate202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource update request accepted. */
export interface OracleSubscriptionsUpdate202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & OracleSubscriptionsUpdate202Headers;
}

export interface OracleSubscriptionsUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running update operation */
export interface OracleSubscriptionsUpdateLogicalResponse extends HttpResponse {
  status: "200";
  body: OracleSubscriptionOutput;
}

export interface OracleSubscriptionsDelete202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource deletion accepted. */
export interface OracleSubscriptionsDelete202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & OracleSubscriptionsDelete202Headers;
}

/** Resource does not exist. */
export interface OracleSubscriptionsDelete204Response extends HttpResponse {
  status: "204";
}

export interface OracleSubscriptionsDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running delete operation */
export interface OracleSubscriptionsDeleteLogicalResponse extends HttpResponse {
  status: "200";
}

/** Azure operation completed successfully. */
export interface OracleSubscriptionsListCloudAccountDetails200Response
  extends HttpResponse {
  status: "200";
  body: CloudAccountDetailsOutput;
}

export interface OracleSubscriptionsListCloudAccountDetails202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource operation accepted. */
export interface OracleSubscriptionsListCloudAccountDetails202Response
  extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders &
    OracleSubscriptionsListCloudAccountDetails202Headers;
}

export interface OracleSubscriptionsListCloudAccountDetailsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running listCloudAccountDetails operation */
export interface OracleSubscriptionsListCloudAccountDetailsLogicalResponse
  extends HttpResponse {
  status: "200";
  body: CloudAccountDetailsOutput;
}

/** Azure operation completed successfully. */
export interface OracleSubscriptionsListSaasSubscriptionDetails200Response
  extends HttpResponse {
  status: "200";
  body: SaasSubscriptionDetailsOutput;
}

export interface OracleSubscriptionsListSaasSubscriptionDetails202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource operation accepted. */
export interface OracleSubscriptionsListSaasSubscriptionDetails202Response
  extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders &
    OracleSubscriptionsListSaasSubscriptionDetails202Headers;
}

export interface OracleSubscriptionsListSaasSubscriptionDetailsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running listSaasSubscriptionDetails operation */
export interface OracleSubscriptionsListSaasSubscriptionDetailsLogicalResponse
  extends HttpResponse {
  status: "200";
  body: SaasSubscriptionDetailsOutput;
}

/** Azure operation completed successfully. */
export interface OracleSubscriptionsListActivationLinks200Response
  extends HttpResponse {
  status: "200";
  body: ActivationLinksOutput;
}

export interface OracleSubscriptionsListActivationLinks202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource operation accepted. */
export interface OracleSubscriptionsListActivationLinks202Response
  extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & OracleSubscriptionsListActivationLinks202Headers;
}

export interface OracleSubscriptionsListActivationLinksDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running listActivationLinks operation */
export interface OracleSubscriptionsListActivationLinksLogicalResponse
  extends HttpResponse {
  status: "200";
  body: ActivationLinksOutput;
}

/** Azure operation completed successfully. */
export interface DbNodesGet200Response extends HttpResponse {
  status: "200";
  body: DbNodeOutput;
}

export interface DbNodesGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface DbNodesListByCloudVmCluster200Response extends HttpResponse {
  status: "200";
  body: DbNodeListResultOutput;
}

export interface DbNodesListByCloudVmClusterDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface DbNodesAction200Response extends HttpResponse {
  status: "200";
  body: DbNodeOutput;
}

export interface DbNodesAction202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource operation accepted. */
export interface DbNodesAction202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & DbNodesAction202Headers;
}

export interface DbNodesActionDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running action operation */
export interface DbNodesActionLogicalResponse extends HttpResponse {
  status: "200";
  body: DbNodeOutput;
}

/** Azure operation completed successfully. */
export interface GiVersionsGet200Response extends HttpResponse {
  status: "200";
  body: GiVersionOutput;
}

export interface GiVersionsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface GiVersionsListByLocation200Response extends HttpResponse {
  status: "200";
  body: GiVersionListResultOutput;
}

export interface GiVersionsListByLocationDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface DbSystemShapesGet200Response extends HttpResponse {
  status: "200";
  body: DbSystemShapeOutput;
}

export interface DbSystemShapesGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface DbSystemShapesListByLocation200Response extends HttpResponse {
  status: "200";
  body: DbSystemShapeListResultOutput;
}

export interface DbSystemShapesListByLocationDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface DnsPrivateViewsGet200Response extends HttpResponse {
  status: "200";
  body: DnsPrivateViewOutput;
}

export interface DnsPrivateViewsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface DnsPrivateViewsListByLocation200Response extends HttpResponse {
  status: "200";
  body: DnsPrivateViewListResultOutput;
}

export interface DnsPrivateViewsListByLocationDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface DnsPrivateZonesGet200Response extends HttpResponse {
  status: "200";
  body: DnsPrivateZoneOutput;
}

export interface DnsPrivateZonesGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface DnsPrivateZonesListByLocation200Response extends HttpResponse {
  status: "200";
  body: DnsPrivateZoneListResultOutput;
}

export interface DnsPrivateZonesListByLocationDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface AutonomousDatabasesListBySubscription200Response
  extends HttpResponse {
  status: "200";
  body: AutonomousDatabaseListResultOutput;
}

export interface AutonomousDatabasesListBySubscriptionDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Resource 'AutonomousDatabase' update operation succeeded */
export interface AutonomousDatabasesCreateOrUpdate200Response
  extends HttpResponse {
  status: "200";
  body: AutonomousDatabaseOutput;
}

export interface AutonomousDatabasesCreateOrUpdate201Headers {
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource 'AutonomousDatabase' create operation succeeded */
export interface AutonomousDatabasesCreateOrUpdate201Response
  extends HttpResponse {
  status: "201";
  body: AutonomousDatabaseOutput;
  headers: RawHttpHeaders & AutonomousDatabasesCreateOrUpdate201Headers;
}

export interface AutonomousDatabasesCreateOrUpdateDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running createOrUpdate operation */
export interface AutonomousDatabasesCreateOrUpdateLogicalResponse
  extends HttpResponse {
  status: "200";
  body: AutonomousDatabaseOutput;
}

/** Azure operation completed successfully. */
export interface AutonomousDatabasesGet200Response extends HttpResponse {
  status: "200";
  body: AutonomousDatabaseOutput;
}

export interface AutonomousDatabasesGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface AutonomousDatabasesUpdate200Response extends HttpResponse {
  status: "200";
  body: AutonomousDatabaseOutput;
}

export interface AutonomousDatabasesUpdate202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource update request accepted. */
export interface AutonomousDatabasesUpdate202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & AutonomousDatabasesUpdate202Headers;
}

export interface AutonomousDatabasesUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running update operation */
export interface AutonomousDatabasesUpdateLogicalResponse extends HttpResponse {
  status: "200";
  body: AutonomousDatabaseOutput;
}

export interface AutonomousDatabasesDelete202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource deletion accepted. */
export interface AutonomousDatabasesDelete202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & AutonomousDatabasesDelete202Headers;
}

/** Resource does not exist. */
export interface AutonomousDatabasesDelete204Response extends HttpResponse {
  status: "204";
}

export interface AutonomousDatabasesDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running delete operation */
export interface AutonomousDatabasesDeleteLogicalResponse extends HttpResponse {
  status: "200";
}

/** Azure operation completed successfully. */
export interface AutonomousDatabasesListByResourceGroup200Response
  extends HttpResponse {
  status: "200";
  body: AutonomousDatabaseListResultOutput;
}

export interface AutonomousDatabasesListByResourceGroupDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface AutonomousDatabasesSwitchover200Response extends HttpResponse {
  status: "200";
  body: AutonomousDatabaseOutput;
}

export interface AutonomousDatabasesSwitchover202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource operation accepted. */
export interface AutonomousDatabasesSwitchover202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & AutonomousDatabasesSwitchover202Headers;
}

export interface AutonomousDatabasesSwitchoverDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running switchover operation */
export interface AutonomousDatabasesSwitchoverLogicalResponse
  extends HttpResponse {
  status: "200";
  body: AutonomousDatabaseOutput;
}

/** Azure operation completed successfully. */
export interface AutonomousDatabasesFailover200Response extends HttpResponse {
  status: "200";
  body: AutonomousDatabaseOutput;
}

export interface AutonomousDatabasesFailover202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource operation accepted. */
export interface AutonomousDatabasesFailover202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & AutonomousDatabasesFailover202Headers;
}

export interface AutonomousDatabasesFailoverDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running failover operation */
export interface AutonomousDatabasesFailoverLogicalResponse
  extends HttpResponse {
  status: "200";
  body: AutonomousDatabaseOutput;
}

/** Azure operation completed successfully. */
export interface AutonomousDatabasesGenerateWallet200Response
  extends HttpResponse {
  status: "200";
  body: AutonomousDatabaseWalletFileOutput;
}

export interface AutonomousDatabasesGenerateWalletDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface AutonomousDatabasesRestore200Response extends HttpResponse {
  status: "200";
  body: AutonomousDatabaseOutput;
}

export interface AutonomousDatabasesRestore202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource operation accepted. */
export interface AutonomousDatabasesRestore202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & AutonomousDatabasesRestore202Headers;
}

export interface AutonomousDatabasesRestoreDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running restore operation */
export interface AutonomousDatabasesRestoreLogicalResponse
  extends HttpResponse {
  status: "200";
  body: AutonomousDatabaseOutput;
}

/** Azure operation completed successfully. */
export interface AutonomousDatabasesShrink200Response extends HttpResponse {
  status: "200";
  body: AutonomousDatabaseOutput;
}

export interface AutonomousDatabasesShrink202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource operation accepted. */
export interface AutonomousDatabasesShrink202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & AutonomousDatabasesShrink202Headers;
}

export interface AutonomousDatabasesShrinkDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running shrink operation */
export interface AutonomousDatabasesShrinkLogicalResponse extends HttpResponse {
  status: "200";
  body: AutonomousDatabaseOutput;
}

/** Resource 'AutonomousDatabaseBackup' update operation succeeded */
export interface AutonomousDatabaseBackupsCreateOrUpdate200Response
  extends HttpResponse {
  status: "200";
  body: AutonomousDatabaseBackupOutput;
}

export interface AutonomousDatabaseBackupsCreateOrUpdate201Headers {
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource 'AutonomousDatabaseBackup' create operation succeeded */
export interface AutonomousDatabaseBackupsCreateOrUpdate201Response
  extends HttpResponse {
  status: "201";
  body: AutonomousDatabaseBackupOutput;
  headers: RawHttpHeaders & AutonomousDatabaseBackupsCreateOrUpdate201Headers;
}

export interface AutonomousDatabaseBackupsCreateOrUpdateDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running createOrUpdate operation */
export interface AutonomousDatabaseBackupsCreateOrUpdateLogicalResponse
  extends HttpResponse {
  status: "200";
  body: AutonomousDatabaseBackupOutput;
}

/** Azure operation completed successfully. */
export interface AutonomousDatabaseBackupsGet200Response extends HttpResponse {
  status: "200";
  body: AutonomousDatabaseBackupOutput;
}

export interface AutonomousDatabaseBackupsGetDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface AutonomousDatabaseBackupsDelete202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource deletion accepted. */
export interface AutonomousDatabaseBackupsDelete202Response
  extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & AutonomousDatabaseBackupsDelete202Headers;
}

/** Resource does not exist. */
export interface AutonomousDatabaseBackupsDelete204Response
  extends HttpResponse {
  status: "204";
}

export interface AutonomousDatabaseBackupsDeleteDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running delete operation */
export interface AutonomousDatabaseBackupsDeleteLogicalResponse
  extends HttpResponse {
  status: "200";
}

/** Azure operation completed successfully. */
export interface AutonomousDatabaseBackupsUpdate200Response
  extends HttpResponse {
  status: "200";
  body: AutonomousDatabaseBackupOutput;
}

export interface AutonomousDatabaseBackupsUpdate202Headers {
  /** The Location header contains the URL where the status of the long running operation can be checked. */
  location?: string;
  /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
  "retry-after"?: number;
}

/** Resource update request accepted. */
export interface AutonomousDatabaseBackupsUpdate202Response
  extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & AutonomousDatabaseBackupsUpdate202Headers;
}

export interface AutonomousDatabaseBackupsUpdateDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running update operation */
export interface AutonomousDatabaseBackupsUpdateLogicalResponse
  extends HttpResponse {
  status: "200";
  body: AutonomousDatabaseBackupOutput;
}

/** Azure operation completed successfully. */
export interface AutonomousDatabaseBackupsListByAutonomousDatabase200Response
  extends HttpResponse {
  status: "200";
  body: AutonomousDatabaseBackupListResultOutput;
}

export interface AutonomousDatabaseBackupsListByAutonomousDatabaseDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface AutonomousDatabaseCharacterSetsGet200Response
  extends HttpResponse {
  status: "200";
  body: AutonomousDatabaseCharacterSetOutput;
}

export interface AutonomousDatabaseCharacterSetsGetDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface AutonomousDatabaseCharacterSetsListByLocation200Response
  extends HttpResponse {
  status: "200";
  body: AutonomousDatabaseCharacterSetListResultOutput;
}

export interface AutonomousDatabaseCharacterSetsListByLocationDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface AutonomousDatabaseNationalCharacterSetsGet200Response
  extends HttpResponse {
  status: "200";
  body: AutonomousDatabaseNationalCharacterSetOutput;
}

export interface AutonomousDatabaseNationalCharacterSetsGetDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface AutonomousDatabaseNationalCharacterSetsListByLocation200Response
  extends HttpResponse {
  status: "200";
  body: AutonomousDatabaseNationalCharacterSetListResultOutput;
}

export interface AutonomousDatabaseNationalCharacterSetsListByLocationDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface AutonomousDatabaseVersionsGet200Response extends HttpResponse {
  status: "200";
  body: AutonomousDbVersionOutput;
}

export interface AutonomousDatabaseVersionsGetDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** Azure operation completed successfully. */
export interface AutonomousDatabaseVersionsListByLocation200Response
  extends HttpResponse {
  status: "200";
  body: AutonomousDbVersionListResultOutput;
}

export interface AutonomousDatabaseVersionsListByLocationDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}
