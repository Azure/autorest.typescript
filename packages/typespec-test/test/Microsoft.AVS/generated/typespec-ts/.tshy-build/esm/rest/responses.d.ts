import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse } from "@azure-rest/core-client";
import { OperationListResultOutput, ErrorResponseOutput, TrialOutput, QuotaOutput, PrivateCloudListOutput, PrivateCloudOutput, AdminCredentialsOutput, ClusterListOutput, ClusterOutput, ClusterZoneListOutput, DatastoreListOutput, DatastoreOutput, HcxEnterpriseSiteListOutput, HcxEnterpriseSiteOutput, ExpressRouteAuthorizationListOutput, ExpressRouteAuthorizationOutput, GlobalReachConnectionListOutput, GlobalReachConnectionOutput, WorkloadNetworkOutput, WorkloadNetworkListOutput, WorkloadNetworkSegmentsListOutput, WorkloadNetworkSegmentOutput, WorkloadNetworkDhcpListOutput, WorkloadNetworkDhcpOutput, WorkloadNetworkGatewayListOutput, WorkloadNetworkGatewayOutput, WorkloadNetworkPortMirroringListOutput, WorkloadNetworkPortMirroringOutput, WorkloadNetworkVMGroupsListOutput, WorkloadNetworkVMGroupOutput, WorkloadNetworkVirtualMachinesListOutput, WorkloadNetworkVirtualMachineOutput, WorkloadNetworkDnsServicesListOutput, WorkloadNetworkDnsServiceOutput, WorkloadNetworkDnsZonesListOutput, WorkloadNetworkDnsZoneOutput, WorkloadNetworkPublicIPsListOutput, WorkloadNetworkPublicIPOutput, CloudLinkListOutput, CloudLinkOutput, AddonListOutput, AddonOutput, VirtualMachinesListOutput, VirtualMachineOutput, PlacementPoliciesListOutput, PlacementPolicyOutput, ScriptPackagesListOutput, ScriptPackageOutput, ScriptCmdletsListOutput, ScriptCmdletOutput, ScriptExecutionsListOutput, ScriptExecutionOutput, IscsiPathListResultOutput, IscsiPathOutput } from "./outputModels.js";
/** Azure operation completed successfully. */
export interface OperationsList200Response extends HttpResponse {
    status: "200";
    body: OperationListResultOutput;
}
export interface OperationsListDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** Azure operation completed successfully. */
export interface LocationsCheckTrialAvailability200Response extends HttpResponse {
    status: "200";
    body: TrialOutput;
}
export interface LocationsCheckTrialAvailabilityDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** Azure operation completed successfully. */
export interface LocationsCheckQuotaAvailability200Response extends HttpResponse {
    status: "200";
    body: QuotaOutput;
}
export interface LocationsCheckQuotaAvailabilityDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** Azure operation completed successfully. */
export interface PrivateCloudsListByResourceGroup200Response extends HttpResponse {
    status: "200";
    body: PrivateCloudListOutput;
}
export interface PrivateCloudsListByResourceGroupDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** Azure operation completed successfully. */
export interface PrivateCloudsListInSubscription200Response extends HttpResponse {
    status: "200";
    body: PrivateCloudListOutput;
}
export interface PrivateCloudsListInSubscriptionDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** Azure operation completed successfully. */
export interface PrivateCloudsGet200Response extends HttpResponse {
    status: "200";
    body: PrivateCloudOutput;
}
export interface PrivateCloudsGetDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** Resource 'PrivateCloud' update operation succeeded */
export interface PrivateCloudsCreateOrUpdate200Response extends HttpResponse {
    status: "200";
    body: PrivateCloudOutput;
}
export interface PrivateCloudsCreateOrUpdate201Headers {
    /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
    "retry-after"?: number;
}
/** Resource 'PrivateCloud' create operation succeeded */
export interface PrivateCloudsCreateOrUpdate201Response extends HttpResponse {
    status: "201";
    body: PrivateCloudOutput;
    headers: RawHttpHeaders & PrivateCloudsCreateOrUpdate201Headers;
}
export interface PrivateCloudsCreateOrUpdateDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** The final response for long-running createOrUpdate operation */
export interface PrivateCloudsCreateOrUpdateLogicalResponse extends HttpResponse {
    status: "200";
    body: PrivateCloudOutput;
}
/** Azure operation completed successfully. */
export interface PrivateCloudsUpdate200Response extends HttpResponse {
    status: "200";
    body: PrivateCloudOutput;
}
export interface PrivateCloudsUpdate201Headers {
    /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
    "retry-after"?: number;
    /** The Location header contains the URL where the status of the long running operation can be checked. */
    location?: string;
}
/** The request has succeeded and a new resource has been created as a result. */
export interface PrivateCloudsUpdate201Response extends HttpResponse {
    status: "201";
    body: PrivateCloudOutput;
    headers: RawHttpHeaders & PrivateCloudsUpdate201Headers;
}
export interface PrivateCloudsUpdateDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** Resource deleted successfully. */
export interface PrivateCloudsDelete200Response extends HttpResponse {
    status: "200";
}
export interface PrivateCloudsDelete202Headers {
    /** The Location header contains the URL where the status of the long running operation can be checked. */
    location?: string;
    /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
    "retry-after"?: number;
}
/** Resource deletion accepted. */
export interface PrivateCloudsDelete202Response extends HttpResponse {
    status: "202";
    headers: RawHttpHeaders & PrivateCloudsDelete202Headers;
}
/** Resource does not exist. */
export interface PrivateCloudsDelete204Response extends HttpResponse {
    status: "204";
}
export interface PrivateCloudsDeleteDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** The final response for long-running delete operation */
export interface PrivateCloudsDeleteLogicalResponse extends HttpResponse {
    status: "200";
}
export interface PrivateCloudsRotateVcenterPassword202Headers {
    /** The Location header contains the URL where the status of the long running operation can be checked. */
    location?: string;
    /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
    "retry-after"?: number;
}
/** Resource operation accepted. */
export interface PrivateCloudsRotateVcenterPassword202Response extends HttpResponse {
    status: "202";
    headers: RawHttpHeaders & PrivateCloudsRotateVcenterPassword202Headers;
}
/** Action completed successfully. */
export interface PrivateCloudsRotateVcenterPassword204Response extends HttpResponse {
    status: "204";
}
export interface PrivateCloudsRotateVcenterPasswordDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** The final response for long-running rotateVcenterPassword operation */
export interface PrivateCloudsRotateVcenterPasswordLogicalResponse extends HttpResponse {
    status: "200";
}
export interface PrivateCloudsRotateNsxtPassword202Headers {
    /** The Location header contains the URL where the status of the long running operation can be checked. */
    location?: string;
    /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
    "retry-after"?: number;
}
/** Resource operation accepted. */
export interface PrivateCloudsRotateNsxtPassword202Response extends HttpResponse {
    status: "202";
    headers: RawHttpHeaders & PrivateCloudsRotateNsxtPassword202Headers;
}
/** Action completed successfully. */
export interface PrivateCloudsRotateNsxtPassword204Response extends HttpResponse {
    status: "204";
}
export interface PrivateCloudsRotateNsxtPasswordDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** The final response for long-running rotateNsxtPassword operation */
export interface PrivateCloudsRotateNsxtPasswordLogicalResponse extends HttpResponse {
    status: "200";
}
/** Azure operation completed successfully. */
export interface PrivateCloudsListAdminCredentials200Response extends HttpResponse {
    status: "200";
    body: AdminCredentialsOutput;
}
export interface PrivateCloudsListAdminCredentialsDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** Azure operation completed successfully. */
export interface ClustersListByPrivateCloud200Response extends HttpResponse {
    status: "200";
    body: ClusterListOutput;
}
export interface ClustersListByPrivateCloudDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** Azure operation completed successfully. */
export interface ClustersGet200Response extends HttpResponse {
    status: "200";
    body: ClusterOutput;
}
export interface ClustersGetDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** Resource 'Cluster' update operation succeeded */
export interface ClustersCreateOrUpdate200Response extends HttpResponse {
    status: "200";
    body: ClusterOutput;
}
export interface ClustersCreateOrUpdate201Headers {
    /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
    "retry-after"?: number;
}
/** Resource 'Cluster' create operation succeeded */
export interface ClustersCreateOrUpdate201Response extends HttpResponse {
    status: "201";
    body: ClusterOutput;
    headers: RawHttpHeaders & ClustersCreateOrUpdate201Headers;
}
export interface ClustersCreateOrUpdateDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** The final response for long-running createOrUpdate operation */
export interface ClustersCreateOrUpdateLogicalResponse extends HttpResponse {
    status: "200";
    body: ClusterOutput;
}
/** Azure operation completed successfully. */
export interface ClustersUpdate200Response extends HttpResponse {
    status: "200";
    body: ClusterOutput;
}
export interface ClustersUpdate201Headers {
    /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
    "retry-after"?: number;
    /** The Location header contains the URL where the status of the long running operation can be checked. */
    location?: string;
}
/** The request has succeeded and a new resource has been created as a result. */
export interface ClustersUpdate201Response extends HttpResponse {
    status: "201";
    body: ClusterOutput;
    headers: RawHttpHeaders & ClustersUpdate201Headers;
}
export interface ClustersUpdateDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** Resource deleted successfully. */
export interface ClustersDelete200Response extends HttpResponse {
    status: "200";
}
export interface ClustersDelete202Headers {
    /** The Location header contains the URL where the status of the long running operation can be checked. */
    location?: string;
    /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
    "retry-after"?: number;
}
/** Resource deletion accepted. */
export interface ClustersDelete202Response extends HttpResponse {
    status: "202";
    headers: RawHttpHeaders & ClustersDelete202Headers;
}
/** Resource does not exist. */
export interface ClustersDelete204Response extends HttpResponse {
    status: "204";
}
export interface ClustersDeleteDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** The final response for long-running delete operation */
export interface ClustersDeleteLogicalResponse extends HttpResponse {
    status: "200";
}
/** Azure operation completed successfully. */
export interface ClustersListZones200Response extends HttpResponse {
    status: "200";
    body: ClusterZoneListOutput;
}
export interface ClustersListZonesDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** Azure operation completed successfully. */
export interface DatastoresListByCluster200Response extends HttpResponse {
    status: "200";
    body: DatastoreListOutput;
}
export interface DatastoresListByClusterDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** Azure operation completed successfully. */
export interface DatastoresGet200Response extends HttpResponse {
    status: "200";
    body: DatastoreOutput;
}
export interface DatastoresGetDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** Resource 'Datastore' update operation succeeded */
export interface DatastoresCreateOrUpdate200Response extends HttpResponse {
    status: "200";
    body: DatastoreOutput;
}
export interface DatastoresCreateOrUpdate201Headers {
    /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
    "retry-after"?: number;
}
/** Resource 'Datastore' create operation succeeded */
export interface DatastoresCreateOrUpdate201Response extends HttpResponse {
    status: "201";
    body: DatastoreOutput;
    headers: RawHttpHeaders & DatastoresCreateOrUpdate201Headers;
}
export interface DatastoresCreateOrUpdateDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** The final response for long-running createOrUpdate operation */
export interface DatastoresCreateOrUpdateLogicalResponse extends HttpResponse {
    status: "200";
    body: DatastoreOutput;
}
/** Resource deleted successfully. */
export interface DatastoresDelete200Response extends HttpResponse {
    status: "200";
}
export interface DatastoresDelete202Headers {
    /** The Location header contains the URL where the status of the long running operation can be checked. */
    location?: string;
    /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
    "retry-after"?: number;
}
/** Resource deletion accepted. */
export interface DatastoresDelete202Response extends HttpResponse {
    status: "202";
    headers: RawHttpHeaders & DatastoresDelete202Headers;
}
/** Resource does not exist. */
export interface DatastoresDelete204Response extends HttpResponse {
    status: "204";
}
export interface DatastoresDeleteDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** The final response for long-running delete operation */
export interface DatastoresDeleteLogicalResponse extends HttpResponse {
    status: "200";
}
/** Azure operation completed successfully. */
export interface HcxEnterpriseSitesListByPrivateCloud200Response extends HttpResponse {
    status: "200";
    body: HcxEnterpriseSiteListOutput;
}
export interface HcxEnterpriseSitesListByPrivateCloudDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** Azure operation completed successfully. */
export interface HcxEnterpriseSitesGet200Response extends HttpResponse {
    status: "200";
    body: HcxEnterpriseSiteOutput;
}
export interface HcxEnterpriseSitesGetDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** Resource 'HcxEnterpriseSite' update operation succeeded */
export interface HcxEnterpriseSitesCreateOrUpdate200Response extends HttpResponse {
    status: "200";
    body: HcxEnterpriseSiteOutput;
}
/** Resource 'HcxEnterpriseSite' create operation succeeded */
export interface HcxEnterpriseSitesCreateOrUpdate201Response extends HttpResponse {
    status: "201";
    body: HcxEnterpriseSiteOutput;
}
export interface HcxEnterpriseSitesCreateOrUpdateDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** Resource deleted successfully. */
export interface HcxEnterpriseSitesDelete200Response extends HttpResponse {
    status: "200";
}
/** Resource does not exist. */
export interface HcxEnterpriseSitesDelete204Response extends HttpResponse {
    status: "204";
}
export interface HcxEnterpriseSitesDeleteDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** Azure operation completed successfully. */
export interface AuthorizationsListByPrivateCloud200Response extends HttpResponse {
    status: "200";
    body: ExpressRouteAuthorizationListOutput;
}
export interface AuthorizationsListByPrivateCloudDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** Azure operation completed successfully. */
export interface AuthorizationsGet200Response extends HttpResponse {
    status: "200";
    body: ExpressRouteAuthorizationOutput;
}
export interface AuthorizationsGetDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** Resource 'ExpressRouteAuthorization' update operation succeeded */
export interface AuthorizationsCreateOrUpdate200Response extends HttpResponse {
    status: "200";
    body: ExpressRouteAuthorizationOutput;
}
export interface AuthorizationsCreateOrUpdate201Headers {
    /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
    "retry-after"?: number;
}
/** Resource 'ExpressRouteAuthorization' create operation succeeded */
export interface AuthorizationsCreateOrUpdate201Response extends HttpResponse {
    status: "201";
    body: ExpressRouteAuthorizationOutput;
    headers: RawHttpHeaders & AuthorizationsCreateOrUpdate201Headers;
}
export interface AuthorizationsCreateOrUpdateDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** The final response for long-running createOrUpdate operation */
export interface AuthorizationsCreateOrUpdateLogicalResponse extends HttpResponse {
    status: "200";
    body: ExpressRouteAuthorizationOutput;
}
/** Resource deleted successfully. */
export interface AuthorizationsDelete200Response extends HttpResponse {
    status: "200";
}
export interface AuthorizationsDelete202Headers {
    /** The Location header contains the URL where the status of the long running operation can be checked. */
    location?: string;
    /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
    "retry-after"?: number;
}
/** Resource deletion accepted. */
export interface AuthorizationsDelete202Response extends HttpResponse {
    status: "202";
    headers: RawHttpHeaders & AuthorizationsDelete202Headers;
}
/** Resource does not exist. */
export interface AuthorizationsDelete204Response extends HttpResponse {
    status: "204";
}
export interface AuthorizationsDeleteDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** The final response for long-running delete operation */
export interface AuthorizationsDeleteLogicalResponse extends HttpResponse {
    status: "200";
}
/** Azure operation completed successfully. */
export interface GlobalReachConnectionsListByPrivateCloud200Response extends HttpResponse {
    status: "200";
    body: GlobalReachConnectionListOutput;
}
export interface GlobalReachConnectionsListByPrivateCloudDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** Azure operation completed successfully. */
export interface GlobalReachConnectionsGet200Response extends HttpResponse {
    status: "200";
    body: GlobalReachConnectionOutput;
}
export interface GlobalReachConnectionsGetDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** Resource 'GlobalReachConnection' update operation succeeded */
export interface GlobalReachConnectionsCreateOrUpdate200Response extends HttpResponse {
    status: "200";
    body: GlobalReachConnectionOutput;
}
export interface GlobalReachConnectionsCreateOrUpdate201Headers {
    /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
    "retry-after"?: number;
}
/** Resource 'GlobalReachConnection' create operation succeeded */
export interface GlobalReachConnectionsCreateOrUpdate201Response extends HttpResponse {
    status: "201";
    body: GlobalReachConnectionOutput;
    headers: RawHttpHeaders & GlobalReachConnectionsCreateOrUpdate201Headers;
}
export interface GlobalReachConnectionsCreateOrUpdateDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** The final response for long-running createOrUpdate operation */
export interface GlobalReachConnectionsCreateOrUpdateLogicalResponse extends HttpResponse {
    status: "200";
    body: GlobalReachConnectionOutput;
}
/** Resource deleted successfully. */
export interface GlobalReachConnectionsDelete200Response extends HttpResponse {
    status: "200";
}
export interface GlobalReachConnectionsDelete202Headers {
    /** The Location header contains the URL where the status of the long running operation can be checked. */
    location?: string;
    /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
    "retry-after"?: number;
}
/** Resource deletion accepted. */
export interface GlobalReachConnectionsDelete202Response extends HttpResponse {
    status: "202";
    headers: RawHttpHeaders & GlobalReachConnectionsDelete202Headers;
}
/** Resource does not exist. */
export interface GlobalReachConnectionsDelete204Response extends HttpResponse {
    status: "204";
}
export interface GlobalReachConnectionsDeleteDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** The final response for long-running delete operation */
export interface GlobalReachConnectionsDeleteLogicalResponse extends HttpResponse {
    status: "200";
}
/** Azure operation completed successfully. */
export interface WorkloadNetworksGet200Response extends HttpResponse {
    status: "200";
    body: WorkloadNetworkOutput;
}
export interface WorkloadNetworksGetDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** Azure operation completed successfully. */
export interface WorkloadNetworksListByPrivateCloud200Response extends HttpResponse {
    status: "200";
    body: WorkloadNetworkListOutput;
}
export interface WorkloadNetworksListByPrivateCloudDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** Azure operation completed successfully. */
export interface WorkloadNetworkSegmentsListByWorkloadNetwork200Response extends HttpResponse {
    status: "200";
    body: WorkloadNetworkSegmentsListOutput;
}
export interface WorkloadNetworkSegmentsListByWorkloadNetworkDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** Azure operation completed successfully. */
export interface WorkloadNetworkSegmentsGet200Response extends HttpResponse {
    status: "200";
    body: WorkloadNetworkSegmentOutput;
}
export interface WorkloadNetworkSegmentsGetDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** Resource 'WorkloadNetworkSegment' update operation succeeded */
export interface WorkloadNetworkSegmentsCreate200Response extends HttpResponse {
    status: "200";
    body: WorkloadNetworkSegmentOutput;
}
export interface WorkloadNetworkSegmentsCreate201Headers {
    /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
    "retry-after"?: number;
}
/** Resource 'WorkloadNetworkSegment' create operation succeeded */
export interface WorkloadNetworkSegmentsCreate201Response extends HttpResponse {
    status: "201";
    body: WorkloadNetworkSegmentOutput;
    headers: RawHttpHeaders & WorkloadNetworkSegmentsCreate201Headers;
}
export interface WorkloadNetworkSegmentsCreateDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** The final response for long-running create operation */
export interface WorkloadNetworkSegmentsCreateLogicalResponse extends HttpResponse {
    status: "200";
    body: WorkloadNetworkSegmentOutput;
}
/** Azure operation completed successfully. */
export interface WorkloadNetworkSegmentsUpdate200Response extends HttpResponse {
    status: "200";
    body: WorkloadNetworkSegmentOutput;
}
export interface WorkloadNetworkSegmentsUpdate202Headers {
    /** The Location header contains the URL where the status of the long running operation can be checked. */
    location?: string;
    /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
    "retry-after"?: number;
}
/** Resource update request accepted. */
export interface WorkloadNetworkSegmentsUpdate202Response extends HttpResponse {
    status: "202";
    headers: RawHttpHeaders & WorkloadNetworkSegmentsUpdate202Headers;
}
export interface WorkloadNetworkSegmentsUpdateDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** The final response for long-running update operation */
export interface WorkloadNetworkSegmentsUpdateLogicalResponse extends HttpResponse {
    status: "200";
    body: WorkloadNetworkSegmentOutput;
}
/** Resource deleted successfully. */
export interface WorkloadNetworkSegmentsDeleteSegment200Response extends HttpResponse {
    status: "200";
}
export interface WorkloadNetworkSegmentsDeleteSegment202Headers {
    /** The Location header contains the URL where the status of the long running operation can be checked. */
    location?: string;
    /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
    "retry-after"?: number;
}
/** Resource deletion accepted. */
export interface WorkloadNetworkSegmentsDeleteSegment202Response extends HttpResponse {
    status: "202";
    headers: RawHttpHeaders & WorkloadNetworkSegmentsDeleteSegment202Headers;
}
/** Resource does not exist. */
export interface WorkloadNetworkSegmentsDeleteSegment204Response extends HttpResponse {
    status: "204";
}
export interface WorkloadNetworkSegmentsDeleteSegmentDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** The final response for long-running deleteSegment operation */
export interface WorkloadNetworkSegmentsDeleteSegmentLogicalResponse extends HttpResponse {
    status: "200";
}
/** Azure operation completed successfully. */
export interface WorkloadNetworkDhcpConfigurationsListByWorkloadNetwork200Response extends HttpResponse {
    status: "200";
    body: WorkloadNetworkDhcpListOutput;
}
export interface WorkloadNetworkDhcpConfigurationsListByWorkloadNetworkDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** Azure operation completed successfully. */
export interface WorkloadNetworkDhcpConfigurationsGet200Response extends HttpResponse {
    status: "200";
    body: WorkloadNetworkDhcpOutput;
}
export interface WorkloadNetworkDhcpConfigurationsGetDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** Resource 'WorkloadNetworkDhcp' update operation succeeded */
export interface WorkloadNetworkDhcpConfigurationsCreate200Response extends HttpResponse {
    status: "200";
    body: WorkloadNetworkDhcpOutput;
}
export interface WorkloadNetworkDhcpConfigurationsCreate201Headers {
    /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
    "retry-after"?: number;
}
/** Resource 'WorkloadNetworkDhcp' create operation succeeded */
export interface WorkloadNetworkDhcpConfigurationsCreate201Response extends HttpResponse {
    status: "201";
    body: WorkloadNetworkDhcpOutput;
    headers: RawHttpHeaders & WorkloadNetworkDhcpConfigurationsCreate201Headers;
}
export interface WorkloadNetworkDhcpConfigurationsCreateDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** The final response for long-running create operation */
export interface WorkloadNetworkDhcpConfigurationsCreateLogicalResponse extends HttpResponse {
    status: "200";
    body: WorkloadNetworkDhcpOutput;
}
/** Azure operation completed successfully. */
export interface WorkloadNetworkDhcpConfigurationsUpdate200Response extends HttpResponse {
    status: "200";
    body: WorkloadNetworkDhcpOutput;
}
export interface WorkloadNetworkDhcpConfigurationsUpdate202Headers {
    /** The Location header contains the URL where the status of the long running operation can be checked. */
    location?: string;
    /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
    "retry-after"?: number;
}
/** Resource update request accepted. */
export interface WorkloadNetworkDhcpConfigurationsUpdate202Response extends HttpResponse {
    status: "202";
    headers: RawHttpHeaders & WorkloadNetworkDhcpConfigurationsUpdate202Headers;
}
export interface WorkloadNetworkDhcpConfigurationsUpdateDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** The final response for long-running update operation */
export interface WorkloadNetworkDhcpConfigurationsUpdateLogicalResponse extends HttpResponse {
    status: "200";
    body: WorkloadNetworkDhcpOutput;
}
/** Resource deleted successfully. */
export interface WorkloadNetworkDhcpConfigurationsDelete200Response extends HttpResponse {
    status: "200";
}
export interface WorkloadNetworkDhcpConfigurationsDelete202Headers {
    /** The Location header contains the URL where the status of the long running operation can be checked. */
    location?: string;
    /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
    "retry-after"?: number;
}
/** Resource deletion accepted. */
export interface WorkloadNetworkDhcpConfigurationsDelete202Response extends HttpResponse {
    status: "202";
    headers: RawHttpHeaders & WorkloadNetworkDhcpConfigurationsDelete202Headers;
}
/** Resource does not exist. */
export interface WorkloadNetworkDhcpConfigurationsDelete204Response extends HttpResponse {
    status: "204";
}
export interface WorkloadNetworkDhcpConfigurationsDeleteDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** The final response for long-running delete operation */
export interface WorkloadNetworkDhcpConfigurationsDeleteLogicalResponse extends HttpResponse {
    status: "200";
}
/** Azure operation completed successfully. */
export interface WorkloadNetworkGatewaysListByWorkloadNetwork200Response extends HttpResponse {
    status: "200";
    body: WorkloadNetworkGatewayListOutput;
}
export interface WorkloadNetworkGatewaysListByWorkloadNetworkDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** Azure operation completed successfully. */
export interface WorkloadNetworkGatewaysGet200Response extends HttpResponse {
    status: "200";
    body: WorkloadNetworkGatewayOutput;
}
export interface WorkloadNetworkGatewaysGetDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** Azure operation completed successfully. */
export interface WorkloadNetworkPortMirroringProfilesListByWorkloadNetwork200Response extends HttpResponse {
    status: "200";
    body: WorkloadNetworkPortMirroringListOutput;
}
export interface WorkloadNetworkPortMirroringProfilesListByWorkloadNetworkDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** Azure operation completed successfully. */
export interface WorkloadNetworkPortMirroringProfilesGet200Response extends HttpResponse {
    status: "200";
    body: WorkloadNetworkPortMirroringOutput;
}
export interface WorkloadNetworkPortMirroringProfilesGetDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** Resource 'WorkloadNetworkPortMirroring' update operation succeeded */
export interface WorkloadNetworkPortMirroringProfilesCreate200Response extends HttpResponse {
    status: "200";
    body: WorkloadNetworkPortMirroringOutput;
}
export interface WorkloadNetworkPortMirroringProfilesCreate201Headers {
    /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
    "retry-after"?: number;
}
/** Resource 'WorkloadNetworkPortMirroring' create operation succeeded */
export interface WorkloadNetworkPortMirroringProfilesCreate201Response extends HttpResponse {
    status: "201";
    body: WorkloadNetworkPortMirroringOutput;
    headers: RawHttpHeaders & WorkloadNetworkPortMirroringProfilesCreate201Headers;
}
export interface WorkloadNetworkPortMirroringProfilesCreateDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** The final response for long-running create operation */
export interface WorkloadNetworkPortMirroringProfilesCreateLogicalResponse extends HttpResponse {
    status: "200";
    body: WorkloadNetworkPortMirroringOutput;
}
/** Azure operation completed successfully. */
export interface WorkloadNetworkPortMirroringProfilesUpdate200Response extends HttpResponse {
    status: "200";
    body: WorkloadNetworkPortMirroringOutput;
}
export interface WorkloadNetworkPortMirroringProfilesUpdate202Headers {
    /** The Location header contains the URL where the status of the long running operation can be checked. */
    location?: string;
    /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
    "retry-after"?: number;
}
/** Resource update request accepted. */
export interface WorkloadNetworkPortMirroringProfilesUpdate202Response extends HttpResponse {
    status: "202";
    headers: RawHttpHeaders & WorkloadNetworkPortMirroringProfilesUpdate202Headers;
}
export interface WorkloadNetworkPortMirroringProfilesUpdateDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** The final response for long-running update operation */
export interface WorkloadNetworkPortMirroringProfilesUpdateLogicalResponse extends HttpResponse {
    status: "200";
    body: WorkloadNetworkPortMirroringOutput;
}
/** Resource deleted successfully. */
export interface WorkloadNetworkPortMirroringProfilesDelete200Response extends HttpResponse {
    status: "200";
}
export interface WorkloadNetworkPortMirroringProfilesDelete202Headers {
    /** The Location header contains the URL where the status of the long running operation can be checked. */
    location?: string;
    /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
    "retry-after"?: number;
}
/** Resource deletion accepted. */
export interface WorkloadNetworkPortMirroringProfilesDelete202Response extends HttpResponse {
    status: "202";
    headers: RawHttpHeaders & WorkloadNetworkPortMirroringProfilesDelete202Headers;
}
/** Resource does not exist. */
export interface WorkloadNetworkPortMirroringProfilesDelete204Response extends HttpResponse {
    status: "204";
}
export interface WorkloadNetworkPortMirroringProfilesDeleteDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** The final response for long-running delete operation */
export interface WorkloadNetworkPortMirroringProfilesDeleteLogicalResponse extends HttpResponse {
    status: "200";
}
/** Azure operation completed successfully. */
export interface WorkloadNetworkVmGroupsListByWorkloadNetwork200Response extends HttpResponse {
    status: "200";
    body: WorkloadNetworkVMGroupsListOutput;
}
export interface WorkloadNetworkVmGroupsListByWorkloadNetworkDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** Azure operation completed successfully. */
export interface WorkloadNetworkVmGroupsGet200Response extends HttpResponse {
    status: "200";
    body: WorkloadNetworkVMGroupOutput;
}
export interface WorkloadNetworkVmGroupsGetDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** Resource 'WorkloadNetworkVMGroup' update operation succeeded */
export interface WorkloadNetworkVmGroupsCreate200Response extends HttpResponse {
    status: "200";
    body: WorkloadNetworkVMGroupOutput;
}
export interface WorkloadNetworkVmGroupsCreate201Headers {
    /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
    "retry-after"?: number;
}
/** Resource 'WorkloadNetworkVMGroup' create operation succeeded */
export interface WorkloadNetworkVmGroupsCreate201Response extends HttpResponse {
    status: "201";
    body: WorkloadNetworkVMGroupOutput;
    headers: RawHttpHeaders & WorkloadNetworkVmGroupsCreate201Headers;
}
export interface WorkloadNetworkVmGroupsCreateDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** The final response for long-running create operation */
export interface WorkloadNetworkVmGroupsCreateLogicalResponse extends HttpResponse {
    status: "200";
    body: WorkloadNetworkVMGroupOutput;
}
/** Azure operation completed successfully. */
export interface WorkloadNetworkVmGroupsUpdate200Response extends HttpResponse {
    status: "200";
    body: WorkloadNetworkVMGroupOutput;
}
export interface WorkloadNetworkVmGroupsUpdate202Headers {
    /** The Location header contains the URL where the status of the long running operation can be checked. */
    location?: string;
    /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
    "retry-after"?: number;
}
/** Resource update request accepted. */
export interface WorkloadNetworkVmGroupsUpdate202Response extends HttpResponse {
    status: "202";
    headers: RawHttpHeaders & WorkloadNetworkVmGroupsUpdate202Headers;
}
export interface WorkloadNetworkVmGroupsUpdateDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** The final response for long-running update operation */
export interface WorkloadNetworkVmGroupsUpdateLogicalResponse extends HttpResponse {
    status: "200";
    body: WorkloadNetworkVMGroupOutput;
}
/** Resource deleted successfully. */
export interface WorkloadNetworkVmGroupsDelete200Response extends HttpResponse {
    status: "200";
}
export interface WorkloadNetworkVmGroupsDelete202Headers {
    /** The Location header contains the URL where the status of the long running operation can be checked. */
    location?: string;
    /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
    "retry-after"?: number;
}
/** Resource deletion accepted. */
export interface WorkloadNetworkVmGroupsDelete202Response extends HttpResponse {
    status: "202";
    headers: RawHttpHeaders & WorkloadNetworkVmGroupsDelete202Headers;
}
/** Resource does not exist. */
export interface WorkloadNetworkVmGroupsDelete204Response extends HttpResponse {
    status: "204";
}
export interface WorkloadNetworkVmGroupsDeleteDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** The final response for long-running delete operation */
export interface WorkloadNetworkVmGroupsDeleteLogicalResponse extends HttpResponse {
    status: "200";
}
/** Azure operation completed successfully. */
export interface WorkloadNetworkVirtualMachinesListByWorkloadNetwork200Response extends HttpResponse {
    status: "200";
    body: WorkloadNetworkVirtualMachinesListOutput;
}
export interface WorkloadNetworkVirtualMachinesListByWorkloadNetworkDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** Azure operation completed successfully. */
export interface WorkloadNetworkVirtualMachinesGet200Response extends HttpResponse {
    status: "200";
    body: WorkloadNetworkVirtualMachineOutput;
}
export interface WorkloadNetworkVirtualMachinesGetDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** Azure operation completed successfully. */
export interface WorkloadNetworkDnsServicesListByWorkloadNetwork200Response extends HttpResponse {
    status: "200";
    body: WorkloadNetworkDnsServicesListOutput;
}
export interface WorkloadNetworkDnsServicesListByWorkloadNetworkDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** Azure operation completed successfully. */
export interface WorkloadNetworkDnsServicesGet200Response extends HttpResponse {
    status: "200";
    body: WorkloadNetworkDnsServiceOutput;
}
export interface WorkloadNetworkDnsServicesGetDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** Resource 'WorkloadNetworkDnsService' update operation succeeded */
export interface WorkloadNetworkDnsServicesCreate200Response extends HttpResponse {
    status: "200";
    body: WorkloadNetworkDnsServiceOutput;
}
export interface WorkloadNetworkDnsServicesCreate201Headers {
    /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
    "retry-after"?: number;
}
/** Resource 'WorkloadNetworkDnsService' create operation succeeded */
export interface WorkloadNetworkDnsServicesCreate201Response extends HttpResponse {
    status: "201";
    body: WorkloadNetworkDnsServiceOutput;
    headers: RawHttpHeaders & WorkloadNetworkDnsServicesCreate201Headers;
}
export interface WorkloadNetworkDnsServicesCreateDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** The final response for long-running create operation */
export interface WorkloadNetworkDnsServicesCreateLogicalResponse extends HttpResponse {
    status: "200";
    body: WorkloadNetworkDnsServiceOutput;
}
/** Azure operation completed successfully. */
export interface WorkloadNetworkDnsServicesUpdate200Response extends HttpResponse {
    status: "200";
    body: WorkloadNetworkDnsServiceOutput;
}
export interface WorkloadNetworkDnsServicesUpdate202Headers {
    /** The Location header contains the URL where the status of the long running operation can be checked. */
    location?: string;
    /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
    "retry-after"?: number;
}
/** Resource update request accepted. */
export interface WorkloadNetworkDnsServicesUpdate202Response extends HttpResponse {
    status: "202";
    headers: RawHttpHeaders & WorkloadNetworkDnsServicesUpdate202Headers;
}
export interface WorkloadNetworkDnsServicesUpdateDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** The final response for long-running update operation */
export interface WorkloadNetworkDnsServicesUpdateLogicalResponse extends HttpResponse {
    status: "200";
    body: WorkloadNetworkDnsServiceOutput;
}
/** Resource deleted successfully. */
export interface WorkloadNetworkDnsServicesDelete200Response extends HttpResponse {
    status: "200";
}
export interface WorkloadNetworkDnsServicesDelete202Headers {
    /** The Location header contains the URL where the status of the long running operation can be checked. */
    location?: string;
    /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
    "retry-after"?: number;
}
/** Resource deletion accepted. */
export interface WorkloadNetworkDnsServicesDelete202Response extends HttpResponse {
    status: "202";
    headers: RawHttpHeaders & WorkloadNetworkDnsServicesDelete202Headers;
}
/** Resource does not exist. */
export interface WorkloadNetworkDnsServicesDelete204Response extends HttpResponse {
    status: "204";
}
export interface WorkloadNetworkDnsServicesDeleteDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** The final response for long-running delete operation */
export interface WorkloadNetworkDnsServicesDeleteLogicalResponse extends HttpResponse {
    status: "200";
}
/** Azure operation completed successfully. */
export interface WorkloadNetworkDnsZonesListByWorkloadNetwork200Response extends HttpResponse {
    status: "200";
    body: WorkloadNetworkDnsZonesListOutput;
}
export interface WorkloadNetworkDnsZonesListByWorkloadNetworkDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** Azure operation completed successfully. */
export interface WorkloadNetworkDnsZonesGet200Response extends HttpResponse {
    status: "200";
    body: WorkloadNetworkDnsZoneOutput;
}
export interface WorkloadNetworkDnsZonesGetDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** Resource 'WorkloadNetworkDnsZone' update operation succeeded */
export interface WorkloadNetworkDnsZonesCreate200Response extends HttpResponse {
    status: "200";
    body: WorkloadNetworkDnsZoneOutput;
}
export interface WorkloadNetworkDnsZonesCreate201Headers {
    /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
    "retry-after"?: number;
}
/** Resource 'WorkloadNetworkDnsZone' create operation succeeded */
export interface WorkloadNetworkDnsZonesCreate201Response extends HttpResponse {
    status: "201";
    body: WorkloadNetworkDnsZoneOutput;
    headers: RawHttpHeaders & WorkloadNetworkDnsZonesCreate201Headers;
}
export interface WorkloadNetworkDnsZonesCreateDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** The final response for long-running create operation */
export interface WorkloadNetworkDnsZonesCreateLogicalResponse extends HttpResponse {
    status: "200";
    body: WorkloadNetworkDnsZoneOutput;
}
/** Azure operation completed successfully. */
export interface WorkloadNetworkDnsZonesUpdate200Response extends HttpResponse {
    status: "200";
    body: WorkloadNetworkDnsZoneOutput;
}
export interface WorkloadNetworkDnsZonesUpdate202Headers {
    /** The Location header contains the URL where the status of the long running operation can be checked. */
    location?: string;
    /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
    "retry-after"?: number;
}
/** Resource update request accepted. */
export interface WorkloadNetworkDnsZonesUpdate202Response extends HttpResponse {
    status: "202";
    headers: RawHttpHeaders & WorkloadNetworkDnsZonesUpdate202Headers;
}
export interface WorkloadNetworkDnsZonesUpdateDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** The final response for long-running update operation */
export interface WorkloadNetworkDnsZonesUpdateLogicalResponse extends HttpResponse {
    status: "200";
    body: WorkloadNetworkDnsZoneOutput;
}
/** Resource deleted successfully. */
export interface WorkloadNetworkDnsZonesDelete200Response extends HttpResponse {
    status: "200";
}
export interface WorkloadNetworkDnsZonesDelete202Headers {
    /** The Location header contains the URL where the status of the long running operation can be checked. */
    location?: string;
    /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
    "retry-after"?: number;
}
/** Resource deletion accepted. */
export interface WorkloadNetworkDnsZonesDelete202Response extends HttpResponse {
    status: "202";
    headers: RawHttpHeaders & WorkloadNetworkDnsZonesDelete202Headers;
}
/** Resource does not exist. */
export interface WorkloadNetworkDnsZonesDelete204Response extends HttpResponse {
    status: "204";
}
export interface WorkloadNetworkDnsZonesDeleteDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** The final response for long-running delete operation */
export interface WorkloadNetworkDnsZonesDeleteLogicalResponse extends HttpResponse {
    status: "200";
}
/** Azure operation completed successfully. */
export interface WorkloadNetworkPublicIpsListByWorkloadNetwork200Response extends HttpResponse {
    status: "200";
    body: WorkloadNetworkPublicIPsListOutput;
}
export interface WorkloadNetworkPublicIpsListByWorkloadNetworkDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** Azure operation completed successfully. */
export interface WorkloadNetworkPublicIpsGet200Response extends HttpResponse {
    status: "200";
    body: WorkloadNetworkPublicIPOutput;
}
export interface WorkloadNetworkPublicIpsGetDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** Resource 'WorkloadNetworkPublicIP' update operation succeeded */
export interface WorkloadNetworkPublicIpsCreate200Response extends HttpResponse {
    status: "200";
    body: WorkloadNetworkPublicIPOutput;
}
export interface WorkloadNetworkPublicIpsCreate201Headers {
    /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
    "retry-after"?: number;
}
/** Resource 'WorkloadNetworkPublicIP' create operation succeeded */
export interface WorkloadNetworkPublicIpsCreate201Response extends HttpResponse {
    status: "201";
    body: WorkloadNetworkPublicIPOutput;
    headers: RawHttpHeaders & WorkloadNetworkPublicIpsCreate201Headers;
}
export interface WorkloadNetworkPublicIpsCreateDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** The final response for long-running create operation */
export interface WorkloadNetworkPublicIpsCreateLogicalResponse extends HttpResponse {
    status: "200";
    body: WorkloadNetworkPublicIPOutput;
}
/** Resource deleted successfully. */
export interface WorkloadNetworkPublicIpsDelete200Response extends HttpResponse {
    status: "200";
}
export interface WorkloadNetworkPublicIpsDelete202Headers {
    /** The Location header contains the URL where the status of the long running operation can be checked. */
    location?: string;
    /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
    "retry-after"?: number;
}
/** Resource deletion accepted. */
export interface WorkloadNetworkPublicIpsDelete202Response extends HttpResponse {
    status: "202";
    headers: RawHttpHeaders & WorkloadNetworkPublicIpsDelete202Headers;
}
/** Resource does not exist. */
export interface WorkloadNetworkPublicIpsDelete204Response extends HttpResponse {
    status: "204";
}
export interface WorkloadNetworkPublicIpsDeleteDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** The final response for long-running delete operation */
export interface WorkloadNetworkPublicIpsDeleteLogicalResponse extends HttpResponse {
    status: "200";
}
/** Azure operation completed successfully. */
export interface CloudLinksListByPrivateCloud200Response extends HttpResponse {
    status: "200";
    body: CloudLinkListOutput;
}
export interface CloudLinksListByPrivateCloudDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** Azure operation completed successfully. */
export interface CloudLinksGet200Response extends HttpResponse {
    status: "200";
    body: CloudLinkOutput;
}
export interface CloudLinksGetDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** Resource 'CloudLink' update operation succeeded */
export interface CloudLinksCreateOrUpdate200Response extends HttpResponse {
    status: "200";
    body: CloudLinkOutput;
}
export interface CloudLinksCreateOrUpdate201Headers {
    /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
    "retry-after"?: number;
}
/** Resource 'CloudLink' create operation succeeded */
export interface CloudLinksCreateOrUpdate201Response extends HttpResponse {
    status: "201";
    body: CloudLinkOutput;
    headers: RawHttpHeaders & CloudLinksCreateOrUpdate201Headers;
}
export interface CloudLinksCreateOrUpdateDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** The final response for long-running createOrUpdate operation */
export interface CloudLinksCreateOrUpdateLogicalResponse extends HttpResponse {
    status: "200";
    body: CloudLinkOutput;
}
/** Resource deleted successfully. */
export interface CloudLinksDelete200Response extends HttpResponse {
    status: "200";
}
export interface CloudLinksDelete202Headers {
    /** The Location header contains the URL where the status of the long running operation can be checked. */
    location?: string;
    /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
    "retry-after"?: number;
}
/** Resource deletion accepted. */
export interface CloudLinksDelete202Response extends HttpResponse {
    status: "202";
    headers: RawHttpHeaders & CloudLinksDelete202Headers;
}
/** Resource does not exist. */
export interface CloudLinksDelete204Response extends HttpResponse {
    status: "204";
}
export interface CloudLinksDeleteDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** The final response for long-running delete operation */
export interface CloudLinksDeleteLogicalResponse extends HttpResponse {
    status: "200";
}
/** Azure operation completed successfully. */
export interface AddonsListByPrivateCloud200Response extends HttpResponse {
    status: "200";
    body: AddonListOutput;
}
export interface AddonsListByPrivateCloudDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** Azure operation completed successfully. */
export interface AddonsGet200Response extends HttpResponse {
    status: "200";
    body: AddonOutput;
}
export interface AddonsGetDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** Resource 'Addon' update operation succeeded */
export interface AddonsCreateOrUpdate200Response extends HttpResponse {
    status: "200";
    body: AddonOutput;
}
export interface AddonsCreateOrUpdate201Headers {
    /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
    "retry-after"?: number;
}
/** Resource 'Addon' create operation succeeded */
export interface AddonsCreateOrUpdate201Response extends HttpResponse {
    status: "201";
    body: AddonOutput;
    headers: RawHttpHeaders & AddonsCreateOrUpdate201Headers;
}
export interface AddonsCreateOrUpdateDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** The final response for long-running createOrUpdate operation */
export interface AddonsCreateOrUpdateLogicalResponse extends HttpResponse {
    status: "200";
    body: AddonOutput;
}
/** Resource deleted successfully. */
export interface AddonsDelete200Response extends HttpResponse {
    status: "200";
}
export interface AddonsDelete202Headers {
    /** The Location header contains the URL where the status of the long running operation can be checked. */
    location?: string;
    /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
    "retry-after"?: number;
}
/** Resource deletion accepted. */
export interface AddonsDelete202Response extends HttpResponse {
    status: "202";
    headers: RawHttpHeaders & AddonsDelete202Headers;
}
/** Resource does not exist. */
export interface AddonsDelete204Response extends HttpResponse {
    status: "204";
}
export interface AddonsDeleteDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** The final response for long-running delete operation */
export interface AddonsDeleteLogicalResponse extends HttpResponse {
    status: "200";
}
/** Azure operation completed successfully. */
export interface VirtualMachinesListByCluster200Response extends HttpResponse {
    status: "200";
    body: VirtualMachinesListOutput;
}
export interface VirtualMachinesListByClusterDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** Azure operation completed successfully. */
export interface VirtualMachinesGet200Response extends HttpResponse {
    status: "200";
    body: VirtualMachineOutput;
}
export interface VirtualMachinesGetDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
export interface VirtualMachinesRestrictMovement202Headers {
    /** The Location header contains the URL where the status of the long running operation can be checked. */
    location?: string;
    /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
    "retry-after"?: number;
}
/** Resource operation accepted. */
export interface VirtualMachinesRestrictMovement202Response extends HttpResponse {
    status: "202";
    headers: RawHttpHeaders & VirtualMachinesRestrictMovement202Headers;
}
export interface VirtualMachinesRestrictMovementDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** The final response for long-running restrictMovement operation */
export interface VirtualMachinesRestrictMovementLogicalResponse extends HttpResponse {
    status: "200";
}
/** Azure operation completed successfully. */
export interface PlacementPoliciesListByCluster200Response extends HttpResponse {
    status: "200";
    body: PlacementPoliciesListOutput;
}
export interface PlacementPoliciesListByClusterDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** Azure operation completed successfully. */
export interface PlacementPoliciesGet200Response extends HttpResponse {
    status: "200";
    body: PlacementPolicyOutput;
}
export interface PlacementPoliciesGetDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** Resource 'PlacementPolicy' update operation succeeded */
export interface PlacementPoliciesCreateOrUpdate200Response extends HttpResponse {
    status: "200";
    body: PlacementPolicyOutput;
}
export interface PlacementPoliciesCreateOrUpdate201Headers {
    /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
    "retry-after"?: number;
}
/** Resource 'PlacementPolicy' create operation succeeded */
export interface PlacementPoliciesCreateOrUpdate201Response extends HttpResponse {
    status: "201";
    body: PlacementPolicyOutput;
    headers: RawHttpHeaders & PlacementPoliciesCreateOrUpdate201Headers;
}
export interface PlacementPoliciesCreateOrUpdateDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** The final response for long-running createOrUpdate operation */
export interface PlacementPoliciesCreateOrUpdateLogicalResponse extends HttpResponse {
    status: "200";
    body: PlacementPolicyOutput;
}
/** Azure operation completed successfully. */
export interface PlacementPoliciesUpdate200Response extends HttpResponse {
    status: "200";
    body: PlacementPolicyOutput;
}
export interface PlacementPoliciesUpdate202Headers {
    /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
    "retry-after"?: number;
    /** The Location header contains the URL where the status of the long running operation can be checked. */
    location?: string;
}
/** The request has been accepted for processing, but processing has not yet completed. */
export interface PlacementPoliciesUpdate202Response extends HttpResponse {
    status: "202";
    body: PlacementPolicyOutput;
    headers: RawHttpHeaders & PlacementPoliciesUpdate202Headers;
}
export interface PlacementPoliciesUpdateDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** Resource deleted successfully. */
export interface PlacementPoliciesDelete200Response extends HttpResponse {
    status: "200";
}
export interface PlacementPoliciesDelete202Headers {
    /** The Location header contains the URL where the status of the long running operation can be checked. */
    location?: string;
    /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
    "retry-after"?: number;
}
/** Resource deletion accepted. */
export interface PlacementPoliciesDelete202Response extends HttpResponse {
    status: "202";
    headers: RawHttpHeaders & PlacementPoliciesDelete202Headers;
}
/** Resource does not exist. */
export interface PlacementPoliciesDelete204Response extends HttpResponse {
    status: "204";
}
export interface PlacementPoliciesDeleteDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** The final response for long-running delete operation */
export interface PlacementPoliciesDeleteLogicalResponse extends HttpResponse {
    status: "200";
}
/** Azure operation completed successfully. */
export interface ScriptPackagesListByPrivateCloud200Response extends HttpResponse {
    status: "200";
    body: ScriptPackagesListOutput;
}
export interface ScriptPackagesListByPrivateCloudDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** Azure operation completed successfully. */
export interface ScriptPackagesGet200Response extends HttpResponse {
    status: "200";
    body: ScriptPackageOutput;
}
export interface ScriptPackagesGetDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** Azure operation completed successfully. */
export interface ScriptCmdletsListByScriptPackage200Response extends HttpResponse {
    status: "200";
    body: ScriptCmdletsListOutput;
}
export interface ScriptCmdletsListByScriptPackageDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** Azure operation completed successfully. */
export interface ScriptCmdletsGet200Response extends HttpResponse {
    status: "200";
    body: ScriptCmdletOutput;
}
export interface ScriptCmdletsGetDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** Azure operation completed successfully. */
export interface ScriptExecutionsListByPrivateCloud200Response extends HttpResponse {
    status: "200";
    body: ScriptExecutionsListOutput;
}
export interface ScriptExecutionsListByPrivateCloudDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** Azure operation completed successfully. */
export interface ScriptExecutionsGet200Response extends HttpResponse {
    status: "200";
    body: ScriptExecutionOutput;
}
export interface ScriptExecutionsGetDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** Resource 'ScriptExecution' update operation succeeded */
export interface ScriptExecutionsCreateOrUpdate200Response extends HttpResponse {
    status: "200";
    body: ScriptExecutionOutput;
}
export interface ScriptExecutionsCreateOrUpdate201Headers {
    /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
    "retry-after"?: number;
}
/** Resource 'ScriptExecution' create operation succeeded */
export interface ScriptExecutionsCreateOrUpdate201Response extends HttpResponse {
    status: "201";
    body: ScriptExecutionOutput;
    headers: RawHttpHeaders & ScriptExecutionsCreateOrUpdate201Headers;
}
export interface ScriptExecutionsCreateOrUpdateDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** The final response for long-running createOrUpdate operation */
export interface ScriptExecutionsCreateOrUpdateLogicalResponse extends HttpResponse {
    status: "200";
    body: ScriptExecutionOutput;
}
/** Resource deleted successfully. */
export interface ScriptExecutionsDelete200Response extends HttpResponse {
    status: "200";
}
export interface ScriptExecutionsDelete202Headers {
    /** The Location header contains the URL where the status of the long running operation can be checked. */
    location?: string;
    /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
    "retry-after"?: number;
}
/** Resource deletion accepted. */
export interface ScriptExecutionsDelete202Response extends HttpResponse {
    status: "202";
    headers: RawHttpHeaders & ScriptExecutionsDelete202Headers;
}
/** Resource does not exist. */
export interface ScriptExecutionsDelete204Response extends HttpResponse {
    status: "204";
}
export interface ScriptExecutionsDeleteDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** The final response for long-running delete operation */
export interface ScriptExecutionsDeleteLogicalResponse extends HttpResponse {
    status: "200";
}
/** Azure operation completed successfully. */
export interface ScriptExecutionsGetExecutionLogs200Response extends HttpResponse {
    status: "200";
    body: ScriptExecutionOutput;
}
export interface ScriptExecutionsGetExecutionLogsDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** Azure operation completed successfully. */
export interface IscsiPathsListByPrivateCloud200Response extends HttpResponse {
    status: "200";
    body: IscsiPathListResultOutput;
}
export interface IscsiPathsListByPrivateCloudDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** Azure operation completed successfully. */
export interface IscsiPathsGet200Response extends HttpResponse {
    status: "200";
    body: IscsiPathOutput;
}
export interface IscsiPathsGetDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** Resource 'IscsiPath' update operation succeeded */
export interface IscsiPathsCreateOrUpdate200Response extends HttpResponse {
    status: "200";
    body: IscsiPathOutput;
}
export interface IscsiPathsCreateOrUpdate201Headers {
    /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
    "retry-after"?: number;
}
/** Resource 'IscsiPath' create operation succeeded */
export interface IscsiPathsCreateOrUpdate201Response extends HttpResponse {
    status: "201";
    body: IscsiPathOutput;
    headers: RawHttpHeaders & IscsiPathsCreateOrUpdate201Headers;
}
export interface IscsiPathsCreateOrUpdateDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** The final response for long-running createOrUpdate operation */
export interface IscsiPathsCreateOrUpdateLogicalResponse extends HttpResponse {
    status: "200";
    body: IscsiPathOutput;
}
/** Resource deleted successfully. */
export interface IscsiPathsDelete200Response extends HttpResponse {
    status: "200";
}
export interface IscsiPathsDelete202Headers {
    /** The Location header contains the URL where the status of the long running operation can be checked. */
    location?: string;
    /** The Retry-After header can indicate how long the client should wait before polling the operation status. */
    "retry-after"?: number;
}
/** Resource deletion accepted. */
export interface IscsiPathsDelete202Response extends HttpResponse {
    status: "202";
    headers: RawHttpHeaders & IscsiPathsDelete202Headers;
}
/** Resource does not exist. */
export interface IscsiPathsDelete204Response extends HttpResponse {
    status: "204";
}
export interface IscsiPathsDeleteDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}
/** The final response for long-running delete operation */
export interface IscsiPathsDeleteLogicalResponse extends HttpResponse {
    status: "200";
}
//# sourceMappingURL=responses.d.ts.map