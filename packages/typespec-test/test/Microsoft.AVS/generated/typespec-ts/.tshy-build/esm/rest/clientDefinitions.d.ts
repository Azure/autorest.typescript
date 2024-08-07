import { OperationsListParameters, LocationsCheckTrialAvailabilityParameters, LocationsCheckQuotaAvailabilityParameters, PrivateCloudsListByResourceGroupParameters, PrivateCloudsListInSubscriptionParameters, PrivateCloudsGetParameters, PrivateCloudsCreateOrUpdateParameters, PrivateCloudsUpdateParameters, PrivateCloudsDeleteParameters, PrivateCloudsRotateVcenterPasswordParameters, PrivateCloudsRotateNsxtPasswordParameters, PrivateCloudsListAdminCredentialsParameters, ClustersListByPrivateCloudParameters, ClustersGetParameters, ClustersCreateOrUpdateParameters, ClustersUpdateParameters, ClustersDeleteParameters, ClustersListZonesParameters, DatastoresListByClusterParameters, DatastoresGetParameters, DatastoresCreateOrUpdateParameters, DatastoresDeleteParameters, HcxEnterpriseSitesListByPrivateCloudParameters, HcxEnterpriseSitesGetParameters, HcxEnterpriseSitesCreateOrUpdateParameters, HcxEnterpriseSitesDeleteParameters, AuthorizationsListByPrivateCloudParameters, AuthorizationsGetParameters, AuthorizationsCreateOrUpdateParameters, AuthorizationsDeleteParameters, GlobalReachConnectionsListByPrivateCloudParameters, GlobalReachConnectionsGetParameters, GlobalReachConnectionsCreateOrUpdateParameters, GlobalReachConnectionsDeleteParameters, WorkloadNetworksGetParameters, WorkloadNetworksListByPrivateCloudParameters, WorkloadNetworkSegmentsListByWorkloadNetworkParameters, WorkloadNetworkSegmentsGetParameters, WorkloadNetworkSegmentsCreateParameters, WorkloadNetworkSegmentsUpdateParameters, WorkloadNetworkSegmentsDeleteSegmentParameters, WorkloadNetworkDhcpConfigurationsListByWorkloadNetworkParameters, WorkloadNetworkDhcpConfigurationsGetParameters, WorkloadNetworkDhcpConfigurationsCreateParameters, WorkloadNetworkDhcpConfigurationsUpdateParameters, WorkloadNetworkDhcpConfigurationsDeleteParameters, WorkloadNetworkGatewaysListByWorkloadNetworkParameters, WorkloadNetworkGatewaysGetParameters, WorkloadNetworkPortMirroringProfilesListByWorkloadNetworkParameters, WorkloadNetworkPortMirroringProfilesGetParameters, WorkloadNetworkPortMirroringProfilesCreateParameters, WorkloadNetworkPortMirroringProfilesUpdateParameters, WorkloadNetworkPortMirroringProfilesDeleteParameters, WorkloadNetworkVmGroupsListByWorkloadNetworkParameters, WorkloadNetworkVmGroupsGetParameters, WorkloadNetworkVmGroupsCreateParameters, WorkloadNetworkVmGroupsUpdateParameters, WorkloadNetworkVmGroupsDeleteParameters, WorkloadNetworkVirtualMachinesListByWorkloadNetworkParameters, WorkloadNetworkVirtualMachinesGetParameters, WorkloadNetworkDnsServicesListByWorkloadNetworkParameters, WorkloadNetworkDnsServicesGetParameters, WorkloadNetworkDnsServicesCreateParameters, WorkloadNetworkDnsServicesUpdateParameters, WorkloadNetworkDnsServicesDeleteParameters, WorkloadNetworkDnsZonesListByWorkloadNetworkParameters, WorkloadNetworkDnsZonesGetParameters, WorkloadNetworkDnsZonesCreateParameters, WorkloadNetworkDnsZonesUpdateParameters, WorkloadNetworkDnsZonesDeleteParameters, WorkloadNetworkPublicIpsListByWorkloadNetworkParameters, WorkloadNetworkPublicIpsGetParameters, WorkloadNetworkPublicIpsCreateParameters, WorkloadNetworkPublicIpsDeleteParameters, CloudLinksListByPrivateCloudParameters, CloudLinksGetParameters, CloudLinksCreateOrUpdateParameters, CloudLinksDeleteParameters, AddonsListByPrivateCloudParameters, AddonsGetParameters, AddonsCreateOrUpdateParameters, AddonsDeleteParameters, VirtualMachinesListByClusterParameters, VirtualMachinesGetParameters, VirtualMachinesRestrictMovementParameters, PlacementPoliciesListByClusterParameters, PlacementPoliciesGetParameters, PlacementPoliciesCreateOrUpdateParameters, PlacementPoliciesUpdateParameters, PlacementPoliciesDeleteParameters, ScriptPackagesListByPrivateCloudParameters, ScriptPackagesGetParameters, ScriptCmdletsListByScriptPackageParameters, ScriptCmdletsGetParameters, ScriptExecutionsListByPrivateCloudParameters, ScriptExecutionsGetParameters, ScriptExecutionsCreateOrUpdateParameters, ScriptExecutionsDeleteParameters, ScriptExecutionsGetExecutionLogsParameters, IscsiPathsListByPrivateCloudParameters, IscsiPathsGetParameters, IscsiPathsCreateOrUpdateParameters, IscsiPathsDeleteParameters } from "./parameters.js";
import { OperationsList200Response, OperationsListDefaultResponse, LocationsCheckTrialAvailability200Response, LocationsCheckTrialAvailabilityDefaultResponse, LocationsCheckQuotaAvailability200Response, LocationsCheckQuotaAvailabilityDefaultResponse, PrivateCloudsListByResourceGroup200Response, PrivateCloudsListByResourceGroupDefaultResponse, PrivateCloudsListInSubscription200Response, PrivateCloudsListInSubscriptionDefaultResponse, PrivateCloudsGet200Response, PrivateCloudsGetDefaultResponse, PrivateCloudsCreateOrUpdate200Response, PrivateCloudsCreateOrUpdate201Response, PrivateCloudsCreateOrUpdateDefaultResponse, PrivateCloudsUpdate200Response, PrivateCloudsUpdate201Response, PrivateCloudsUpdateDefaultResponse, PrivateCloudsDelete200Response, PrivateCloudsDelete202Response, PrivateCloudsDelete204Response, PrivateCloudsDeleteDefaultResponse, PrivateCloudsRotateVcenterPassword202Response, PrivateCloudsRotateVcenterPassword204Response, PrivateCloudsRotateVcenterPasswordDefaultResponse, PrivateCloudsRotateNsxtPassword202Response, PrivateCloudsRotateNsxtPassword204Response, PrivateCloudsRotateNsxtPasswordDefaultResponse, PrivateCloudsListAdminCredentials200Response, PrivateCloudsListAdminCredentialsDefaultResponse, ClustersListByPrivateCloud200Response, ClustersListByPrivateCloudDefaultResponse, ClustersGet200Response, ClustersGetDefaultResponse, ClustersCreateOrUpdate200Response, ClustersCreateOrUpdate201Response, ClustersCreateOrUpdateDefaultResponse, ClustersUpdate200Response, ClustersUpdate201Response, ClustersUpdateDefaultResponse, ClustersDelete200Response, ClustersDelete202Response, ClustersDelete204Response, ClustersDeleteDefaultResponse, ClustersListZones200Response, ClustersListZonesDefaultResponse, DatastoresListByCluster200Response, DatastoresListByClusterDefaultResponse, DatastoresGet200Response, DatastoresGetDefaultResponse, DatastoresCreateOrUpdate200Response, DatastoresCreateOrUpdate201Response, DatastoresCreateOrUpdateDefaultResponse, DatastoresDelete200Response, DatastoresDelete202Response, DatastoresDelete204Response, DatastoresDeleteDefaultResponse, HcxEnterpriseSitesListByPrivateCloud200Response, HcxEnterpriseSitesListByPrivateCloudDefaultResponse, HcxEnterpriseSitesGet200Response, HcxEnterpriseSitesGetDefaultResponse, HcxEnterpriseSitesCreateOrUpdate200Response, HcxEnterpriseSitesCreateOrUpdate201Response, HcxEnterpriseSitesCreateOrUpdateDefaultResponse, HcxEnterpriseSitesDelete200Response, HcxEnterpriseSitesDelete204Response, HcxEnterpriseSitesDeleteDefaultResponse, AuthorizationsListByPrivateCloud200Response, AuthorizationsListByPrivateCloudDefaultResponse, AuthorizationsGet200Response, AuthorizationsGetDefaultResponse, AuthorizationsCreateOrUpdate200Response, AuthorizationsCreateOrUpdate201Response, AuthorizationsCreateOrUpdateDefaultResponse, AuthorizationsDelete200Response, AuthorizationsDelete202Response, AuthorizationsDelete204Response, AuthorizationsDeleteDefaultResponse, GlobalReachConnectionsListByPrivateCloud200Response, GlobalReachConnectionsListByPrivateCloudDefaultResponse, GlobalReachConnectionsGet200Response, GlobalReachConnectionsGetDefaultResponse, GlobalReachConnectionsCreateOrUpdate200Response, GlobalReachConnectionsCreateOrUpdate201Response, GlobalReachConnectionsCreateOrUpdateDefaultResponse, GlobalReachConnectionsDelete200Response, GlobalReachConnectionsDelete202Response, GlobalReachConnectionsDelete204Response, GlobalReachConnectionsDeleteDefaultResponse, WorkloadNetworksGet200Response, WorkloadNetworksGetDefaultResponse, WorkloadNetworksListByPrivateCloud200Response, WorkloadNetworksListByPrivateCloudDefaultResponse, WorkloadNetworkSegmentsListByWorkloadNetwork200Response, WorkloadNetworkSegmentsListByWorkloadNetworkDefaultResponse, WorkloadNetworkSegmentsGet200Response, WorkloadNetworkSegmentsGetDefaultResponse, WorkloadNetworkSegmentsCreate200Response, WorkloadNetworkSegmentsCreate201Response, WorkloadNetworkSegmentsCreateDefaultResponse, WorkloadNetworkSegmentsUpdate200Response, WorkloadNetworkSegmentsUpdate202Response, WorkloadNetworkSegmentsUpdateDefaultResponse, WorkloadNetworkSegmentsDeleteSegment200Response, WorkloadNetworkSegmentsDeleteSegment202Response, WorkloadNetworkSegmentsDeleteSegment204Response, WorkloadNetworkSegmentsDeleteSegmentDefaultResponse, WorkloadNetworkDhcpConfigurationsListByWorkloadNetwork200Response, WorkloadNetworkDhcpConfigurationsListByWorkloadNetworkDefaultResponse, WorkloadNetworkDhcpConfigurationsGet200Response, WorkloadNetworkDhcpConfigurationsGetDefaultResponse, WorkloadNetworkDhcpConfigurationsCreate200Response, WorkloadNetworkDhcpConfigurationsCreate201Response, WorkloadNetworkDhcpConfigurationsCreateDefaultResponse, WorkloadNetworkDhcpConfigurationsUpdate200Response, WorkloadNetworkDhcpConfigurationsUpdate202Response, WorkloadNetworkDhcpConfigurationsUpdateDefaultResponse, WorkloadNetworkDhcpConfigurationsDelete200Response, WorkloadNetworkDhcpConfigurationsDelete202Response, WorkloadNetworkDhcpConfigurationsDelete204Response, WorkloadNetworkDhcpConfigurationsDeleteDefaultResponse, WorkloadNetworkGatewaysListByWorkloadNetwork200Response, WorkloadNetworkGatewaysListByWorkloadNetworkDefaultResponse, WorkloadNetworkGatewaysGet200Response, WorkloadNetworkGatewaysGetDefaultResponse, WorkloadNetworkPortMirroringProfilesListByWorkloadNetwork200Response, WorkloadNetworkPortMirroringProfilesListByWorkloadNetworkDefaultResponse, WorkloadNetworkPortMirroringProfilesGet200Response, WorkloadNetworkPortMirroringProfilesGetDefaultResponse, WorkloadNetworkPortMirroringProfilesCreate200Response, WorkloadNetworkPortMirroringProfilesCreate201Response, WorkloadNetworkPortMirroringProfilesCreateDefaultResponse, WorkloadNetworkPortMirroringProfilesUpdate200Response, WorkloadNetworkPortMirroringProfilesUpdate202Response, WorkloadNetworkPortMirroringProfilesUpdateDefaultResponse, WorkloadNetworkPortMirroringProfilesDelete200Response, WorkloadNetworkPortMirroringProfilesDelete202Response, WorkloadNetworkPortMirroringProfilesDelete204Response, WorkloadNetworkPortMirroringProfilesDeleteDefaultResponse, WorkloadNetworkVmGroupsListByWorkloadNetwork200Response, WorkloadNetworkVmGroupsListByWorkloadNetworkDefaultResponse, WorkloadNetworkVmGroupsGet200Response, WorkloadNetworkVmGroupsGetDefaultResponse, WorkloadNetworkVmGroupsCreate200Response, WorkloadNetworkVmGroupsCreate201Response, WorkloadNetworkVmGroupsCreateDefaultResponse, WorkloadNetworkVmGroupsUpdate200Response, WorkloadNetworkVmGroupsUpdate202Response, WorkloadNetworkVmGroupsUpdateDefaultResponse, WorkloadNetworkVmGroupsDelete200Response, WorkloadNetworkVmGroupsDelete202Response, WorkloadNetworkVmGroupsDelete204Response, WorkloadNetworkVmGroupsDeleteDefaultResponse, WorkloadNetworkVirtualMachinesListByWorkloadNetwork200Response, WorkloadNetworkVirtualMachinesListByWorkloadNetworkDefaultResponse, WorkloadNetworkVirtualMachinesGet200Response, WorkloadNetworkVirtualMachinesGetDefaultResponse, WorkloadNetworkDnsServicesListByWorkloadNetwork200Response, WorkloadNetworkDnsServicesListByWorkloadNetworkDefaultResponse, WorkloadNetworkDnsServicesGet200Response, WorkloadNetworkDnsServicesGetDefaultResponse, WorkloadNetworkDnsServicesCreate200Response, WorkloadNetworkDnsServicesCreate201Response, WorkloadNetworkDnsServicesCreateDefaultResponse, WorkloadNetworkDnsServicesUpdate200Response, WorkloadNetworkDnsServicesUpdate202Response, WorkloadNetworkDnsServicesUpdateDefaultResponse, WorkloadNetworkDnsServicesDelete200Response, WorkloadNetworkDnsServicesDelete202Response, WorkloadNetworkDnsServicesDelete204Response, WorkloadNetworkDnsServicesDeleteDefaultResponse, WorkloadNetworkDnsZonesListByWorkloadNetwork200Response, WorkloadNetworkDnsZonesListByWorkloadNetworkDefaultResponse, WorkloadNetworkDnsZonesGet200Response, WorkloadNetworkDnsZonesGetDefaultResponse, WorkloadNetworkDnsZonesCreate200Response, WorkloadNetworkDnsZonesCreate201Response, WorkloadNetworkDnsZonesCreateDefaultResponse, WorkloadNetworkDnsZonesUpdate200Response, WorkloadNetworkDnsZonesUpdate202Response, WorkloadNetworkDnsZonesUpdateDefaultResponse, WorkloadNetworkDnsZonesDelete200Response, WorkloadNetworkDnsZonesDelete202Response, WorkloadNetworkDnsZonesDelete204Response, WorkloadNetworkDnsZonesDeleteDefaultResponse, WorkloadNetworkPublicIpsListByWorkloadNetwork200Response, WorkloadNetworkPublicIpsListByWorkloadNetworkDefaultResponse, WorkloadNetworkPublicIpsGet200Response, WorkloadNetworkPublicIpsGetDefaultResponse, WorkloadNetworkPublicIpsCreate200Response, WorkloadNetworkPublicIpsCreate201Response, WorkloadNetworkPublicIpsCreateDefaultResponse, WorkloadNetworkPublicIpsDelete200Response, WorkloadNetworkPublicIpsDelete202Response, WorkloadNetworkPublicIpsDelete204Response, WorkloadNetworkPublicIpsDeleteDefaultResponse, CloudLinksListByPrivateCloud200Response, CloudLinksListByPrivateCloudDefaultResponse, CloudLinksGet200Response, CloudLinksGetDefaultResponse, CloudLinksCreateOrUpdate200Response, CloudLinksCreateOrUpdate201Response, CloudLinksCreateOrUpdateDefaultResponse, CloudLinksDelete200Response, CloudLinksDelete202Response, CloudLinksDelete204Response, CloudLinksDeleteDefaultResponse, AddonsListByPrivateCloud200Response, AddonsListByPrivateCloudDefaultResponse, AddonsGet200Response, AddonsGetDefaultResponse, AddonsCreateOrUpdate200Response, AddonsCreateOrUpdate201Response, AddonsCreateOrUpdateDefaultResponse, AddonsDelete200Response, AddonsDelete202Response, AddonsDelete204Response, AddonsDeleteDefaultResponse, VirtualMachinesListByCluster200Response, VirtualMachinesListByClusterDefaultResponse, VirtualMachinesGet200Response, VirtualMachinesGetDefaultResponse, VirtualMachinesRestrictMovement202Response, VirtualMachinesRestrictMovementDefaultResponse, PlacementPoliciesListByCluster200Response, PlacementPoliciesListByClusterDefaultResponse, PlacementPoliciesGet200Response, PlacementPoliciesGetDefaultResponse, PlacementPoliciesCreateOrUpdate200Response, PlacementPoliciesCreateOrUpdate201Response, PlacementPoliciesCreateOrUpdateDefaultResponse, PlacementPoliciesUpdate200Response, PlacementPoliciesUpdate202Response, PlacementPoliciesUpdateDefaultResponse, PlacementPoliciesDelete200Response, PlacementPoliciesDelete202Response, PlacementPoliciesDelete204Response, PlacementPoliciesDeleteDefaultResponse, ScriptPackagesListByPrivateCloud200Response, ScriptPackagesListByPrivateCloudDefaultResponse, ScriptPackagesGet200Response, ScriptPackagesGetDefaultResponse, ScriptCmdletsListByScriptPackage200Response, ScriptCmdletsListByScriptPackageDefaultResponse, ScriptCmdletsGet200Response, ScriptCmdletsGetDefaultResponse, ScriptExecutionsListByPrivateCloud200Response, ScriptExecutionsListByPrivateCloudDefaultResponse, ScriptExecutionsGet200Response, ScriptExecutionsGetDefaultResponse, ScriptExecutionsCreateOrUpdate200Response, ScriptExecutionsCreateOrUpdate201Response, ScriptExecutionsCreateOrUpdateDefaultResponse, ScriptExecutionsDelete200Response, ScriptExecutionsDelete202Response, ScriptExecutionsDelete204Response, ScriptExecutionsDeleteDefaultResponse, ScriptExecutionsGetExecutionLogs200Response, ScriptExecutionsGetExecutionLogsDefaultResponse, IscsiPathsListByPrivateCloud200Response, IscsiPathsListByPrivateCloudDefaultResponse, IscsiPathsGet200Response, IscsiPathsGetDefaultResponse, IscsiPathsCreateOrUpdate200Response, IscsiPathsCreateOrUpdate201Response, IscsiPathsCreateOrUpdateDefaultResponse, IscsiPathsDelete200Response, IscsiPathsDelete202Response, IscsiPathsDelete204Response, IscsiPathsDeleteDefaultResponse } from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";
export interface OperationsList {
    /** List the operations for the provider */
    get(options?: OperationsListParameters): StreamableMethod<OperationsList200Response | OperationsListDefaultResponse>;
}
export interface LocationsCheckTrialAvailability {
    /** Return trial status for subscription by region */
    post(options?: LocationsCheckTrialAvailabilityParameters): StreamableMethod<LocationsCheckTrialAvailability200Response | LocationsCheckTrialAvailabilityDefaultResponse>;
}
export interface LocationsCheckQuotaAvailability {
    /** Return quota for subscription by region */
    post(options?: LocationsCheckQuotaAvailabilityParameters): StreamableMethod<LocationsCheckQuotaAvailability200Response | LocationsCheckQuotaAvailabilityDefaultResponse>;
}
export interface PrivateCloudsListByResourceGroup {
    /** List PrivateCloud resources by resource group */
    get(options?: PrivateCloudsListByResourceGroupParameters): StreamableMethod<PrivateCloudsListByResourceGroup200Response | PrivateCloudsListByResourceGroupDefaultResponse>;
}
export interface PrivateCloudsListInSubscription {
    /** List PrivateCloud resources by subscription ID */
    get(options?: PrivateCloudsListInSubscriptionParameters): StreamableMethod<PrivateCloudsListInSubscription200Response | PrivateCloudsListInSubscriptionDefaultResponse>;
}
export interface PrivateCloudsGet {
    /** Get a PrivateCloud */
    get(options?: PrivateCloudsGetParameters): StreamableMethod<PrivateCloudsGet200Response | PrivateCloudsGetDefaultResponse>;
    /** Create a PrivateCloud */
    put(options: PrivateCloudsCreateOrUpdateParameters): StreamableMethod<PrivateCloudsCreateOrUpdate200Response | PrivateCloudsCreateOrUpdate201Response | PrivateCloudsCreateOrUpdateDefaultResponse>;
    /** Update a PrivateCloud */
    patch(options: PrivateCloudsUpdateParameters): StreamableMethod<PrivateCloudsUpdate200Response | PrivateCloudsUpdate201Response | PrivateCloudsUpdateDefaultResponse>;
    /** Delete a PrivateCloud */
    delete(options?: PrivateCloudsDeleteParameters): StreamableMethod<PrivateCloudsDelete200Response | PrivateCloudsDelete202Response | PrivateCloudsDelete204Response | PrivateCloudsDeleteDefaultResponse>;
}
export interface PrivateCloudsRotateVcenterPassword {
    /** Rotate the vCenter password */
    post(options?: PrivateCloudsRotateVcenterPasswordParameters): StreamableMethod<PrivateCloudsRotateVcenterPassword202Response | PrivateCloudsRotateVcenterPassword204Response | PrivateCloudsRotateVcenterPasswordDefaultResponse>;
}
export interface PrivateCloudsRotateNsxtPassword {
    /** Rotate the NSX-T Manager password */
    post(options?: PrivateCloudsRotateNsxtPasswordParameters): StreamableMethod<PrivateCloudsRotateNsxtPassword202Response | PrivateCloudsRotateNsxtPassword204Response | PrivateCloudsRotateNsxtPasswordDefaultResponse>;
}
export interface PrivateCloudsListAdminCredentials {
    /** List the admin credentials for the private cloud */
    post(options?: PrivateCloudsListAdminCredentialsParameters): StreamableMethod<PrivateCloudsListAdminCredentials200Response | PrivateCloudsListAdminCredentialsDefaultResponse>;
}
export interface ClustersListByPrivateCloud {
    /** List Cluster resources by PrivateCloud */
    get(options?: ClustersListByPrivateCloudParameters): StreamableMethod<ClustersListByPrivateCloud200Response | ClustersListByPrivateCloudDefaultResponse>;
}
export interface ClustersGet {
    /** Get a Cluster */
    get(options?: ClustersGetParameters): StreamableMethod<ClustersGet200Response | ClustersGetDefaultResponse>;
    /** Create a Cluster */
    put(options: ClustersCreateOrUpdateParameters): StreamableMethod<ClustersCreateOrUpdate200Response | ClustersCreateOrUpdate201Response | ClustersCreateOrUpdateDefaultResponse>;
    /** Update a Cluster */
    patch(options: ClustersUpdateParameters): StreamableMethod<ClustersUpdate200Response | ClustersUpdate201Response | ClustersUpdateDefaultResponse>;
    /** Delete a Cluster */
    delete(options?: ClustersDeleteParameters): StreamableMethod<ClustersDelete200Response | ClustersDelete202Response | ClustersDelete204Response | ClustersDeleteDefaultResponse>;
}
export interface ClustersListZones {
    /** List hosts by zone in a cluster */
    post(options?: ClustersListZonesParameters): StreamableMethod<ClustersListZones200Response | ClustersListZonesDefaultResponse>;
}
export interface DatastoresListByCluster {
    /** List Datastore resources by Cluster */
    get(options?: DatastoresListByClusterParameters): StreamableMethod<DatastoresListByCluster200Response | DatastoresListByClusterDefaultResponse>;
}
export interface DatastoresGet {
    /** Get a Datastore */
    get(options?: DatastoresGetParameters): StreamableMethod<DatastoresGet200Response | DatastoresGetDefaultResponse>;
    /** Create a Datastore */
    put(options: DatastoresCreateOrUpdateParameters): StreamableMethod<DatastoresCreateOrUpdate200Response | DatastoresCreateOrUpdate201Response | DatastoresCreateOrUpdateDefaultResponse>;
    /** Delete a Datastore */
    delete(options?: DatastoresDeleteParameters): StreamableMethod<DatastoresDelete200Response | DatastoresDelete202Response | DatastoresDelete204Response | DatastoresDeleteDefaultResponse>;
}
export interface HcxEnterpriseSitesListByPrivateCloud {
    /** List HcxEnterpriseSite resources by PrivateCloud */
    get(options?: HcxEnterpriseSitesListByPrivateCloudParameters): StreamableMethod<HcxEnterpriseSitesListByPrivateCloud200Response | HcxEnterpriseSitesListByPrivateCloudDefaultResponse>;
}
export interface HcxEnterpriseSitesGet {
    /** Get a HcxEnterpriseSite */
    get(options?: HcxEnterpriseSitesGetParameters): StreamableMethod<HcxEnterpriseSitesGet200Response | HcxEnterpriseSitesGetDefaultResponse>;
    /** Create a HcxEnterpriseSite */
    put(options: HcxEnterpriseSitesCreateOrUpdateParameters): StreamableMethod<HcxEnterpriseSitesCreateOrUpdate200Response | HcxEnterpriseSitesCreateOrUpdate201Response | HcxEnterpriseSitesCreateOrUpdateDefaultResponse>;
    /** Delete a HcxEnterpriseSite */
    delete(options?: HcxEnterpriseSitesDeleteParameters): StreamableMethod<HcxEnterpriseSitesDelete200Response | HcxEnterpriseSitesDelete204Response | HcxEnterpriseSitesDeleteDefaultResponse>;
}
export interface AuthorizationsListByPrivateCloud {
    /** List ExpressRouteAuthorization resources by PrivateCloud */
    get(options?: AuthorizationsListByPrivateCloudParameters): StreamableMethod<AuthorizationsListByPrivateCloud200Response | AuthorizationsListByPrivateCloudDefaultResponse>;
}
export interface AuthorizationsGet {
    /** Get a ExpressRouteAuthorization */
    get(options?: AuthorizationsGetParameters): StreamableMethod<AuthorizationsGet200Response | AuthorizationsGetDefaultResponse>;
    /** Create a ExpressRouteAuthorization */
    put(options: AuthorizationsCreateOrUpdateParameters): StreamableMethod<AuthorizationsCreateOrUpdate200Response | AuthorizationsCreateOrUpdate201Response | AuthorizationsCreateOrUpdateDefaultResponse>;
    /** Delete a ExpressRouteAuthorization */
    delete(options?: AuthorizationsDeleteParameters): StreamableMethod<AuthorizationsDelete200Response | AuthorizationsDelete202Response | AuthorizationsDelete204Response | AuthorizationsDeleteDefaultResponse>;
}
export interface GlobalReachConnectionsListByPrivateCloud {
    /** List GlobalReachConnection resources by PrivateCloud */
    get(options?: GlobalReachConnectionsListByPrivateCloudParameters): StreamableMethod<GlobalReachConnectionsListByPrivateCloud200Response | GlobalReachConnectionsListByPrivateCloudDefaultResponse>;
}
export interface GlobalReachConnectionsGet {
    /** Get a GlobalReachConnection */
    get(options?: GlobalReachConnectionsGetParameters): StreamableMethod<GlobalReachConnectionsGet200Response | GlobalReachConnectionsGetDefaultResponse>;
    /** Create a GlobalReachConnection */
    put(options: GlobalReachConnectionsCreateOrUpdateParameters): StreamableMethod<GlobalReachConnectionsCreateOrUpdate200Response | GlobalReachConnectionsCreateOrUpdate201Response | GlobalReachConnectionsCreateOrUpdateDefaultResponse>;
    /** Delete a GlobalReachConnection */
    delete(options?: GlobalReachConnectionsDeleteParameters): StreamableMethod<GlobalReachConnectionsDelete200Response | GlobalReachConnectionsDelete202Response | GlobalReachConnectionsDelete204Response | GlobalReachConnectionsDeleteDefaultResponse>;
}
export interface WorkloadNetworksGet {
    /** Get a WorkloadNetwork */
    get(options?: WorkloadNetworksGetParameters): StreamableMethod<WorkloadNetworksGet200Response | WorkloadNetworksGetDefaultResponse>;
}
export interface WorkloadNetworksListByPrivateCloud {
    /** List WorkloadNetwork resources by PrivateCloud */
    get(options?: WorkloadNetworksListByPrivateCloudParameters): StreamableMethod<WorkloadNetworksListByPrivateCloud200Response | WorkloadNetworksListByPrivateCloudDefaultResponse>;
}
export interface WorkloadNetworkSegmentsListByWorkloadNetwork {
    /** List WorkloadNetworkSegment resources by WorkloadNetwork */
    get(options?: WorkloadNetworkSegmentsListByWorkloadNetworkParameters): StreamableMethod<WorkloadNetworkSegmentsListByWorkloadNetwork200Response | WorkloadNetworkSegmentsListByWorkloadNetworkDefaultResponse>;
}
export interface WorkloadNetworkSegmentsGet {
    /** Get a WorkloadNetworkSegment */
    get(options?: WorkloadNetworkSegmentsGetParameters): StreamableMethod<WorkloadNetworkSegmentsGet200Response | WorkloadNetworkSegmentsGetDefaultResponse>;
    /** Create a WorkloadNetworkSegment */
    put(options: WorkloadNetworkSegmentsCreateParameters): StreamableMethod<WorkloadNetworkSegmentsCreate200Response | WorkloadNetworkSegmentsCreate201Response | WorkloadNetworkSegmentsCreateDefaultResponse>;
    /** Update a WorkloadNetworkSegment */
    patch(options: WorkloadNetworkSegmentsUpdateParameters): StreamableMethod<WorkloadNetworkSegmentsUpdate200Response | WorkloadNetworkSegmentsUpdate202Response | WorkloadNetworkSegmentsUpdateDefaultResponse>;
    /** Delete a WorkloadNetworkSegment */
    delete(options?: WorkloadNetworkSegmentsDeleteSegmentParameters): StreamableMethod<WorkloadNetworkSegmentsDeleteSegment200Response | WorkloadNetworkSegmentsDeleteSegment202Response | WorkloadNetworkSegmentsDeleteSegment204Response | WorkloadNetworkSegmentsDeleteSegmentDefaultResponse>;
}
export interface WorkloadNetworkDhcpConfigurationsListByWorkloadNetwork {
    /** List WorkloadNetworkDhcp resources by WorkloadNetwork */
    get(options?: WorkloadNetworkDhcpConfigurationsListByWorkloadNetworkParameters): StreamableMethod<WorkloadNetworkDhcpConfigurationsListByWorkloadNetwork200Response | WorkloadNetworkDhcpConfigurationsListByWorkloadNetworkDefaultResponse>;
}
export interface WorkloadNetworkDhcpConfigurationsGet {
    /** Get a WorkloadNetworkDhcp */
    get(options?: WorkloadNetworkDhcpConfigurationsGetParameters): StreamableMethod<WorkloadNetworkDhcpConfigurationsGet200Response | WorkloadNetworkDhcpConfigurationsGetDefaultResponse>;
    /** Create a WorkloadNetworkDhcp */
    put(options: WorkloadNetworkDhcpConfigurationsCreateParameters): StreamableMethod<WorkloadNetworkDhcpConfigurationsCreate200Response | WorkloadNetworkDhcpConfigurationsCreate201Response | WorkloadNetworkDhcpConfigurationsCreateDefaultResponse>;
    /** Update a WorkloadNetworkDhcp */
    patch(options: WorkloadNetworkDhcpConfigurationsUpdateParameters): StreamableMethod<WorkloadNetworkDhcpConfigurationsUpdate200Response | WorkloadNetworkDhcpConfigurationsUpdate202Response | WorkloadNetworkDhcpConfigurationsUpdateDefaultResponse>;
    /** Delete a WorkloadNetworkDhcp */
    delete(options?: WorkloadNetworkDhcpConfigurationsDeleteParameters): StreamableMethod<WorkloadNetworkDhcpConfigurationsDelete200Response | WorkloadNetworkDhcpConfigurationsDelete202Response | WorkloadNetworkDhcpConfigurationsDelete204Response | WorkloadNetworkDhcpConfigurationsDeleteDefaultResponse>;
}
export interface WorkloadNetworkGatewaysListByWorkloadNetwork {
    /** List WorkloadNetworkGateway resources by WorkloadNetwork */
    get(options?: WorkloadNetworkGatewaysListByWorkloadNetworkParameters): StreamableMethod<WorkloadNetworkGatewaysListByWorkloadNetwork200Response | WorkloadNetworkGatewaysListByWorkloadNetworkDefaultResponse>;
}
export interface WorkloadNetworkGatewaysGet {
    /** Get a WorkloadNetworkGateway */
    get(options?: WorkloadNetworkGatewaysGetParameters): StreamableMethod<WorkloadNetworkGatewaysGet200Response | WorkloadNetworkGatewaysGetDefaultResponse>;
}
export interface WorkloadNetworkPortMirroringProfilesListByWorkloadNetwork {
    /** List WorkloadNetworkPortMirroring resources by WorkloadNetwork */
    get(options?: WorkloadNetworkPortMirroringProfilesListByWorkloadNetworkParameters): StreamableMethod<WorkloadNetworkPortMirroringProfilesListByWorkloadNetwork200Response | WorkloadNetworkPortMirroringProfilesListByWorkloadNetworkDefaultResponse>;
}
export interface WorkloadNetworkPortMirroringProfilesGet {
    /** Get a WorkloadNetworkPortMirroring */
    get(options?: WorkloadNetworkPortMirroringProfilesGetParameters): StreamableMethod<WorkloadNetworkPortMirroringProfilesGet200Response | WorkloadNetworkPortMirroringProfilesGetDefaultResponse>;
    /** Create a WorkloadNetworkPortMirroring */
    put(options: WorkloadNetworkPortMirroringProfilesCreateParameters): StreamableMethod<WorkloadNetworkPortMirroringProfilesCreate200Response | WorkloadNetworkPortMirroringProfilesCreate201Response | WorkloadNetworkPortMirroringProfilesCreateDefaultResponse>;
    /** Update a WorkloadNetworkPortMirroring */
    patch(options: WorkloadNetworkPortMirroringProfilesUpdateParameters): StreamableMethod<WorkloadNetworkPortMirroringProfilesUpdate200Response | WorkloadNetworkPortMirroringProfilesUpdate202Response | WorkloadNetworkPortMirroringProfilesUpdateDefaultResponse>;
    /** Delete a WorkloadNetworkPortMirroring */
    delete(options?: WorkloadNetworkPortMirroringProfilesDeleteParameters): StreamableMethod<WorkloadNetworkPortMirroringProfilesDelete200Response | WorkloadNetworkPortMirroringProfilesDelete202Response | WorkloadNetworkPortMirroringProfilesDelete204Response | WorkloadNetworkPortMirroringProfilesDeleteDefaultResponse>;
}
export interface WorkloadNetworkVmGroupsListByWorkloadNetwork {
    /** List WorkloadNetworkVMGroup resources by WorkloadNetwork */
    get(options?: WorkloadNetworkVmGroupsListByWorkloadNetworkParameters): StreamableMethod<WorkloadNetworkVmGroupsListByWorkloadNetwork200Response | WorkloadNetworkVmGroupsListByWorkloadNetworkDefaultResponse>;
}
export interface WorkloadNetworkVmGroupsGet {
    /** Get a WorkloadNetworkVMGroup */
    get(options?: WorkloadNetworkVmGroupsGetParameters): StreamableMethod<WorkloadNetworkVmGroupsGet200Response | WorkloadNetworkVmGroupsGetDefaultResponse>;
    /** Create a WorkloadNetworkVMGroup */
    put(options: WorkloadNetworkVmGroupsCreateParameters): StreamableMethod<WorkloadNetworkVmGroupsCreate200Response | WorkloadNetworkVmGroupsCreate201Response | WorkloadNetworkVmGroupsCreateDefaultResponse>;
    /** Update a WorkloadNetworkVMGroup */
    patch(options: WorkloadNetworkVmGroupsUpdateParameters): StreamableMethod<WorkloadNetworkVmGroupsUpdate200Response | WorkloadNetworkVmGroupsUpdate202Response | WorkloadNetworkVmGroupsUpdateDefaultResponse>;
    /** Delete a WorkloadNetworkVMGroup */
    delete(options?: WorkloadNetworkVmGroupsDeleteParameters): StreamableMethod<WorkloadNetworkVmGroupsDelete200Response | WorkloadNetworkVmGroupsDelete202Response | WorkloadNetworkVmGroupsDelete204Response | WorkloadNetworkVmGroupsDeleteDefaultResponse>;
}
export interface WorkloadNetworkVirtualMachinesListByWorkloadNetwork {
    /** List WorkloadNetworkVirtualMachine resources by WorkloadNetwork */
    get(options?: WorkloadNetworkVirtualMachinesListByWorkloadNetworkParameters): StreamableMethod<WorkloadNetworkVirtualMachinesListByWorkloadNetwork200Response | WorkloadNetworkVirtualMachinesListByWorkloadNetworkDefaultResponse>;
}
export interface WorkloadNetworkVirtualMachinesGet {
    /** Get a WorkloadNetworkVirtualMachine */
    get(options?: WorkloadNetworkVirtualMachinesGetParameters): StreamableMethod<WorkloadNetworkVirtualMachinesGet200Response | WorkloadNetworkVirtualMachinesGetDefaultResponse>;
}
export interface WorkloadNetworkDnsServicesListByWorkloadNetwork {
    /** List WorkloadNetworkDnsService resources by WorkloadNetwork */
    get(options?: WorkloadNetworkDnsServicesListByWorkloadNetworkParameters): StreamableMethod<WorkloadNetworkDnsServicesListByWorkloadNetwork200Response | WorkloadNetworkDnsServicesListByWorkloadNetworkDefaultResponse>;
}
export interface WorkloadNetworkDnsServicesGet {
    /** Get a WorkloadNetworkDnsService */
    get(options?: WorkloadNetworkDnsServicesGetParameters): StreamableMethod<WorkloadNetworkDnsServicesGet200Response | WorkloadNetworkDnsServicesGetDefaultResponse>;
    /** Create a WorkloadNetworkDnsService */
    put(options: WorkloadNetworkDnsServicesCreateParameters): StreamableMethod<WorkloadNetworkDnsServicesCreate200Response | WorkloadNetworkDnsServicesCreate201Response | WorkloadNetworkDnsServicesCreateDefaultResponse>;
    /** Update a WorkloadNetworkDnsService */
    patch(options: WorkloadNetworkDnsServicesUpdateParameters): StreamableMethod<WorkloadNetworkDnsServicesUpdate200Response | WorkloadNetworkDnsServicesUpdate202Response | WorkloadNetworkDnsServicesUpdateDefaultResponse>;
    /** Delete a WorkloadNetworkDnsService */
    delete(options?: WorkloadNetworkDnsServicesDeleteParameters): StreamableMethod<WorkloadNetworkDnsServicesDelete200Response | WorkloadNetworkDnsServicesDelete202Response | WorkloadNetworkDnsServicesDelete204Response | WorkloadNetworkDnsServicesDeleteDefaultResponse>;
}
export interface WorkloadNetworkDnsZonesListByWorkloadNetwork {
    /** List WorkloadNetworkDnsZone resources by WorkloadNetwork */
    get(options?: WorkloadNetworkDnsZonesListByWorkloadNetworkParameters): StreamableMethod<WorkloadNetworkDnsZonesListByWorkloadNetwork200Response | WorkloadNetworkDnsZonesListByWorkloadNetworkDefaultResponse>;
}
export interface WorkloadNetworkDnsZonesGet {
    /** Get a WorkloadNetworkDnsZone */
    get(options?: WorkloadNetworkDnsZonesGetParameters): StreamableMethod<WorkloadNetworkDnsZonesGet200Response | WorkloadNetworkDnsZonesGetDefaultResponse>;
    /** Create a WorkloadNetworkDnsZone */
    put(options: WorkloadNetworkDnsZonesCreateParameters): StreamableMethod<WorkloadNetworkDnsZonesCreate200Response | WorkloadNetworkDnsZonesCreate201Response | WorkloadNetworkDnsZonesCreateDefaultResponse>;
    /** Update a WorkloadNetworkDnsZone */
    patch(options: WorkloadNetworkDnsZonesUpdateParameters): StreamableMethod<WorkloadNetworkDnsZonesUpdate200Response | WorkloadNetworkDnsZonesUpdate202Response | WorkloadNetworkDnsZonesUpdateDefaultResponse>;
    /** Delete a WorkloadNetworkDnsZone */
    delete(options?: WorkloadNetworkDnsZonesDeleteParameters): StreamableMethod<WorkloadNetworkDnsZonesDelete200Response | WorkloadNetworkDnsZonesDelete202Response | WorkloadNetworkDnsZonesDelete204Response | WorkloadNetworkDnsZonesDeleteDefaultResponse>;
}
export interface WorkloadNetworkPublicIpsListByWorkloadNetwork {
    /** List WorkloadNetworkPublicIP resources by WorkloadNetwork */
    get(options?: WorkloadNetworkPublicIpsListByWorkloadNetworkParameters): StreamableMethod<WorkloadNetworkPublicIpsListByWorkloadNetwork200Response | WorkloadNetworkPublicIpsListByWorkloadNetworkDefaultResponse>;
}
export interface WorkloadNetworkPublicIpsGet {
    /** Get a WorkloadNetworkPublicIP */
    get(options?: WorkloadNetworkPublicIpsGetParameters): StreamableMethod<WorkloadNetworkPublicIpsGet200Response | WorkloadNetworkPublicIpsGetDefaultResponse>;
    /** Create a WorkloadNetworkPublicIP */
    put(options: WorkloadNetworkPublicIpsCreateParameters): StreamableMethod<WorkloadNetworkPublicIpsCreate200Response | WorkloadNetworkPublicIpsCreate201Response | WorkloadNetworkPublicIpsCreateDefaultResponse>;
    /** Delete a WorkloadNetworkPublicIP */
    delete(options?: WorkloadNetworkPublicIpsDeleteParameters): StreamableMethod<WorkloadNetworkPublicIpsDelete200Response | WorkloadNetworkPublicIpsDelete202Response | WorkloadNetworkPublicIpsDelete204Response | WorkloadNetworkPublicIpsDeleteDefaultResponse>;
}
export interface CloudLinksListByPrivateCloud {
    /** List CloudLink resources by PrivateCloud */
    get(options?: CloudLinksListByPrivateCloudParameters): StreamableMethod<CloudLinksListByPrivateCloud200Response | CloudLinksListByPrivateCloudDefaultResponse>;
}
export interface CloudLinksGet {
    /** Get a CloudLink */
    get(options?: CloudLinksGetParameters): StreamableMethod<CloudLinksGet200Response | CloudLinksGetDefaultResponse>;
    /** Create a CloudLink */
    put(options: CloudLinksCreateOrUpdateParameters): StreamableMethod<CloudLinksCreateOrUpdate200Response | CloudLinksCreateOrUpdate201Response | CloudLinksCreateOrUpdateDefaultResponse>;
    /** Delete a CloudLink */
    delete(options?: CloudLinksDeleteParameters): StreamableMethod<CloudLinksDelete200Response | CloudLinksDelete202Response | CloudLinksDelete204Response | CloudLinksDeleteDefaultResponse>;
}
export interface AddonsListByPrivateCloud {
    /** List Addon resources by PrivateCloud */
    get(options?: AddonsListByPrivateCloudParameters): StreamableMethod<AddonsListByPrivateCloud200Response | AddonsListByPrivateCloudDefaultResponse>;
}
export interface AddonsGet {
    /** Get a Addon */
    get(options?: AddonsGetParameters): StreamableMethod<AddonsGet200Response | AddonsGetDefaultResponse>;
    /** Create a Addon */
    put(options: AddonsCreateOrUpdateParameters): StreamableMethod<AddonsCreateOrUpdate200Response | AddonsCreateOrUpdate201Response | AddonsCreateOrUpdateDefaultResponse>;
    /** Delete a Addon */
    delete(options?: AddonsDeleteParameters): StreamableMethod<AddonsDelete200Response | AddonsDelete202Response | AddonsDelete204Response | AddonsDeleteDefaultResponse>;
}
export interface VirtualMachinesListByCluster {
    /** List VirtualMachine resources by Cluster */
    get(options?: VirtualMachinesListByClusterParameters): StreamableMethod<VirtualMachinesListByCluster200Response | VirtualMachinesListByClusterDefaultResponse>;
}
export interface VirtualMachinesGet {
    /** Get a VirtualMachine */
    get(options?: VirtualMachinesGetParameters): StreamableMethod<VirtualMachinesGet200Response | VirtualMachinesGetDefaultResponse>;
}
export interface VirtualMachinesRestrictMovement {
    /** Enable or disable DRS-driven VM movement restriction */
    post(options: VirtualMachinesRestrictMovementParameters): StreamableMethod<VirtualMachinesRestrictMovement202Response | VirtualMachinesRestrictMovementDefaultResponse>;
}
export interface PlacementPoliciesListByCluster {
    /** List PlacementPolicy resources by Cluster */
    get(options?: PlacementPoliciesListByClusterParameters): StreamableMethod<PlacementPoliciesListByCluster200Response | PlacementPoliciesListByClusterDefaultResponse>;
}
export interface PlacementPoliciesGet {
    /** Get a PlacementPolicy */
    get(options?: PlacementPoliciesGetParameters): StreamableMethod<PlacementPoliciesGet200Response | PlacementPoliciesGetDefaultResponse>;
    /** Create a PlacementPolicy */
    put(options: PlacementPoliciesCreateOrUpdateParameters): StreamableMethod<PlacementPoliciesCreateOrUpdate200Response | PlacementPoliciesCreateOrUpdate201Response | PlacementPoliciesCreateOrUpdateDefaultResponse>;
    /** Update a PlacementPolicy */
    patch(options: PlacementPoliciesUpdateParameters): StreamableMethod<PlacementPoliciesUpdate200Response | PlacementPoliciesUpdate202Response | PlacementPoliciesUpdateDefaultResponse>;
    /** Delete a PlacementPolicy */
    delete(options?: PlacementPoliciesDeleteParameters): StreamableMethod<PlacementPoliciesDelete200Response | PlacementPoliciesDelete202Response | PlacementPoliciesDelete204Response | PlacementPoliciesDeleteDefaultResponse>;
}
export interface ScriptPackagesListByPrivateCloud {
    /** List ScriptPackage resources by PrivateCloud */
    get(options?: ScriptPackagesListByPrivateCloudParameters): StreamableMethod<ScriptPackagesListByPrivateCloud200Response | ScriptPackagesListByPrivateCloudDefaultResponse>;
}
export interface ScriptPackagesGet {
    /** Get a ScriptPackage */
    get(options?: ScriptPackagesGetParameters): StreamableMethod<ScriptPackagesGet200Response | ScriptPackagesGetDefaultResponse>;
}
export interface ScriptCmdletsListByScriptPackage {
    /** List ScriptCmdlet resources by ScriptPackage */
    get(options?: ScriptCmdletsListByScriptPackageParameters): StreamableMethod<ScriptCmdletsListByScriptPackage200Response | ScriptCmdletsListByScriptPackageDefaultResponse>;
}
export interface ScriptCmdletsGet {
    /** Get a ScriptCmdlet */
    get(options?: ScriptCmdletsGetParameters): StreamableMethod<ScriptCmdletsGet200Response | ScriptCmdletsGetDefaultResponse>;
}
export interface ScriptExecutionsListByPrivateCloud {
    /** List ScriptExecution resources by PrivateCloud */
    get(options?: ScriptExecutionsListByPrivateCloudParameters): StreamableMethod<ScriptExecutionsListByPrivateCloud200Response | ScriptExecutionsListByPrivateCloudDefaultResponse>;
}
export interface ScriptExecutionsGet {
    /** Get a ScriptExecution */
    get(options?: ScriptExecutionsGetParameters): StreamableMethod<ScriptExecutionsGet200Response | ScriptExecutionsGetDefaultResponse>;
    /** Create a ScriptExecution */
    put(options: ScriptExecutionsCreateOrUpdateParameters): StreamableMethod<ScriptExecutionsCreateOrUpdate200Response | ScriptExecutionsCreateOrUpdate201Response | ScriptExecutionsCreateOrUpdateDefaultResponse>;
    /** Delete a ScriptExecution */
    delete(options?: ScriptExecutionsDeleteParameters): StreamableMethod<ScriptExecutionsDelete200Response | ScriptExecutionsDelete202Response | ScriptExecutionsDelete204Response | ScriptExecutionsDeleteDefaultResponse>;
}
export interface ScriptExecutionsGetExecutionLogs {
    /** Return the logs for a script execution resource */
    post(options?: ScriptExecutionsGetExecutionLogsParameters): StreamableMethod<ScriptExecutionsGetExecutionLogs200Response | ScriptExecutionsGetExecutionLogsDefaultResponse>;
}
export interface IscsiPathsListByPrivateCloud {
    /** List IscsiPath resources by PrivateCloud */
    get(options?: IscsiPathsListByPrivateCloudParameters): StreamableMethod<IscsiPathsListByPrivateCloud200Response | IscsiPathsListByPrivateCloudDefaultResponse>;
}
export interface IscsiPathsGet {
    /** Get a IscsiPath */
    get(options?: IscsiPathsGetParameters): StreamableMethod<IscsiPathsGet200Response | IscsiPathsGetDefaultResponse>;
    /** Create a IscsiPath */
    put(options: IscsiPathsCreateOrUpdateParameters): StreamableMethod<IscsiPathsCreateOrUpdate200Response | IscsiPathsCreateOrUpdate201Response | IscsiPathsCreateOrUpdateDefaultResponse>;
    /** Delete a IscsiPath */
    delete(options?: IscsiPathsDeleteParameters): StreamableMethod<IscsiPathsDelete200Response | IscsiPathsDelete202Response | IscsiPathsDelete204Response | IscsiPathsDeleteDefaultResponse>;
}
export interface Routes {
    /** Resource for '/providers/Microsoft.AVS/operations' has methods for the following verbs: get */
    (path: "/providers/Microsoft.AVS/operations"): OperationsList;
    /** Resource for '/subscriptions/\{subscriptionId\}/providers/Microsoft.AVS/locations/\{location\}/checkTrialAvailability' has methods for the following verbs: post */
    (path: "/subscriptions/{subscriptionId}/providers/Microsoft.AVS/locations/{location}/checkTrialAvailability", subscriptionId: string, location: string): LocationsCheckTrialAvailability;
    /** Resource for '/subscriptions/\{subscriptionId\}/providers/Microsoft.AVS/locations/\{location\}/checkQuotaAvailability' has methods for the following verbs: post */
    (path: "/subscriptions/{subscriptionId}/providers/Microsoft.AVS/locations/{location}/checkQuotaAvailability", subscriptionId: string, location: string): LocationsCheckQuotaAvailability;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AVS/privateClouds' has methods for the following verbs: get */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds", subscriptionId: string, resourceGroupName: string): PrivateCloudsListByResourceGroup;
    /** Resource for '/subscriptions/\{subscriptionId\}/providers/Microsoft.AVS/privateClouds' has methods for the following verbs: get */
    (path: "/subscriptions/{subscriptionId}/providers/Microsoft.AVS/privateClouds", subscriptionId: string): PrivateCloudsListInSubscription;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AVS/privateClouds/\{privateCloudName\}' has methods for the following verbs: get, put, patch, delete */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}", subscriptionId: string, resourceGroupName: string, privateCloudName: string): PrivateCloudsGet;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AVS/privateClouds/\{privateCloudName\}/rotateVcenterPassword' has methods for the following verbs: post */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/rotateVcenterPassword", subscriptionId: string, resourceGroupName: string, privateCloudName: string): PrivateCloudsRotateVcenterPassword;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AVS/privateClouds/\{privateCloudName\}/rotateNsxtPassword' has methods for the following verbs: post */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/rotateNsxtPassword", subscriptionId: string, resourceGroupName: string, privateCloudName: string): PrivateCloudsRotateNsxtPassword;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AVS/privateClouds/\{privateCloudName\}/listAdminCredentials' has methods for the following verbs: post */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/listAdminCredentials", subscriptionId: string, resourceGroupName: string, privateCloudName: string): PrivateCloudsListAdminCredentials;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AVS/privateClouds/\{privateCloudName\}/clusters' has methods for the following verbs: get */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters", subscriptionId: string, resourceGroupName: string, privateCloudName: string): ClustersListByPrivateCloud;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AVS/privateClouds/\{privateCloudName\}/clusters/\{clusterName\}' has methods for the following verbs: get, put, patch, delete */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}", subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string): ClustersGet;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AVS/privateClouds/\{privateCloudName\}/clusters/\{clusterName\}/listZones' has methods for the following verbs: post */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/listZones", subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string): ClustersListZones;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AVS/privateClouds/\{privateCloudName\}/clusters/\{clusterName\}/datastores' has methods for the following verbs: get */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/datastores", subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string): DatastoresListByCluster;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AVS/privateClouds/\{privateCloudName\}/clusters/\{clusterName\}/datastores/\{datastoreName\}' has methods for the following verbs: get, put, delete */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/datastores/{datastoreName}", subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, datastoreName: string): DatastoresGet;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AVS/privateClouds/\{privateCloudName\}/hcxEnterpriseSites' has methods for the following verbs: get */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/hcxEnterpriseSites", subscriptionId: string, resourceGroupName: string, privateCloudName: string): HcxEnterpriseSitesListByPrivateCloud;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AVS/privateClouds/\{privateCloudName\}/hcxEnterpriseSites/\{hcxEnterpriseSiteName\}' has methods for the following verbs: get, put, delete */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/hcxEnterpriseSites/{hcxEnterpriseSiteName}", subscriptionId: string, resourceGroupName: string, privateCloudName: string, hcxEnterpriseSiteName: string): HcxEnterpriseSitesGet;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AVS/privateClouds/\{privateCloudName\}/authorizations' has methods for the following verbs: get */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/authorizations", subscriptionId: string, resourceGroupName: string, privateCloudName: string): AuthorizationsListByPrivateCloud;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AVS/privateClouds/\{privateCloudName\}/authorizations/\{authorizationName\}' has methods for the following verbs: get, put, delete */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/authorizations/{authorizationName}", subscriptionId: string, resourceGroupName: string, privateCloudName: string, authorizationName: string): AuthorizationsGet;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AVS/privateClouds/\{privateCloudName\}/globalReachConnections' has methods for the following verbs: get */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/globalReachConnections", subscriptionId: string, resourceGroupName: string, privateCloudName: string): GlobalReachConnectionsListByPrivateCloud;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AVS/privateClouds/\{privateCloudName\}/globalReachConnections/\{globalReachConnectionName\}' has methods for the following verbs: get, put, delete */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/globalReachConnections/{globalReachConnectionName}", subscriptionId: string, resourceGroupName: string, privateCloudName: string, globalReachConnectionName: string): GlobalReachConnectionsGet;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AVS/privateClouds/\{privateCloudName\}/workloadNetworks/default' has methods for the following verbs: get */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default", subscriptionId: string, resourceGroupName: string, privateCloudName: string): WorkloadNetworksGet;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AVS/privateClouds/\{privateCloudName\}/workloadNetworks' has methods for the following verbs: get */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks", subscriptionId: string, resourceGroupName: string, privateCloudName: string): WorkloadNetworksListByPrivateCloud;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AVS/privateClouds/\{privateCloudName\}/workloadNetworks/default/segments' has methods for the following verbs: get */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/segments", subscriptionId: string, resourceGroupName: string, privateCloudName: string): WorkloadNetworkSegmentsListByWorkloadNetwork;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AVS/privateClouds/\{privateCloudName\}/workloadNetworks/default/segments/\{segmentId\}' has methods for the following verbs: get, put, patch, delete */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/segments/{segmentId}", subscriptionId: string, resourceGroupName: string, privateCloudName: string, segmentId: string): WorkloadNetworkSegmentsGet;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AVS/privateClouds/\{privateCloudName\}/workloadNetworks/default/dhcpConfigurations' has methods for the following verbs: get */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dhcpConfigurations", subscriptionId: string, resourceGroupName: string, privateCloudName: string): WorkloadNetworkDhcpConfigurationsListByWorkloadNetwork;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AVS/privateClouds/\{privateCloudName\}/workloadNetworks/default/dhcpConfigurations/\{dhcpId\}' has methods for the following verbs: get, put, patch, delete */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dhcpConfigurations/{dhcpId}", subscriptionId: string, resourceGroupName: string, dhcpId: string, privateCloudName: string): WorkloadNetworkDhcpConfigurationsGet;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AVS/privateClouds/\{privateCloudName\}/workloadNetworks/default/gateways' has methods for the following verbs: get */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/gateways", subscriptionId: string, resourceGroupName: string, privateCloudName: string): WorkloadNetworkGatewaysListByWorkloadNetwork;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AVS/privateClouds/\{privateCloudName\}/workloadNetworks/default/gateways/\{gatewayId\}' has methods for the following verbs: get */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/gateways/{gatewayId}", subscriptionId: string, resourceGroupName: string, privateCloudName: string, gatewayId: string): WorkloadNetworkGatewaysGet;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AVS/privateClouds/\{privateCloudName\}/workloadNetworks/default/portMirroringProfiles' has methods for the following verbs: get */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/portMirroringProfiles", subscriptionId: string, resourceGroupName: string, privateCloudName: string): WorkloadNetworkPortMirroringProfilesListByWorkloadNetwork;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AVS/privateClouds/\{privateCloudName\}/workloadNetworks/default/portMirroringProfiles/\{portMirroringId\}' has methods for the following verbs: get, put, patch, delete */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/portMirroringProfiles/{portMirroringId}", subscriptionId: string, resourceGroupName: string, privateCloudName: string, portMirroringId: string): WorkloadNetworkPortMirroringProfilesGet;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AVS/privateClouds/\{privateCloudName\}/workloadNetworks/default/vmGroups' has methods for the following verbs: get */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/vmGroups", subscriptionId: string, resourceGroupName: string, privateCloudName: string): WorkloadNetworkVmGroupsListByWorkloadNetwork;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AVS/privateClouds/\{privateCloudName\}/workloadNetworks/default/vmGroups/\{vmGroupId\}' has methods for the following verbs: get, put, patch, delete */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/vmGroups/{vmGroupId}", subscriptionId: string, resourceGroupName: string, privateCloudName: string, vmGroupId: string): WorkloadNetworkVmGroupsGet;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AVS/privateClouds/\{privateCloudName\}/workloadNetworks/default/virtualMachines' has methods for the following verbs: get */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/virtualMachines", subscriptionId: string, resourceGroupName: string, privateCloudName: string): WorkloadNetworkVirtualMachinesListByWorkloadNetwork;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AVS/privateClouds/\{privateCloudName\}/workloadNetworks/default/virtualMachines/\{virtualMachineId\}' has methods for the following verbs: get */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/virtualMachines/{virtualMachineId}", subscriptionId: string, resourceGroupName: string, privateCloudName: string, virtualMachineId: string): WorkloadNetworkVirtualMachinesGet;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AVS/privateClouds/\{privateCloudName\}/workloadNetworks/default/dnsServices' has methods for the following verbs: get */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsServices", subscriptionId: string, resourceGroupName: string, privateCloudName: string): WorkloadNetworkDnsServicesListByWorkloadNetwork;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AVS/privateClouds/\{privateCloudName\}/workloadNetworks/default/dnsServices/\{dnsServiceId\}' has methods for the following verbs: get, put, patch, delete */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsServices/{dnsServiceId}", subscriptionId: string, resourceGroupName: string, privateCloudName: string, dnsServiceId: string): WorkloadNetworkDnsServicesGet;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AVS/privateClouds/\{privateCloudName\}/workloadNetworks/default/dnsZones' has methods for the following verbs: get */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsZones", subscriptionId: string, resourceGroupName: string, privateCloudName: string): WorkloadNetworkDnsZonesListByWorkloadNetwork;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AVS/privateClouds/\{privateCloudName\}/workloadNetworks/default/dnsZones/\{dnsZoneId\}' has methods for the following verbs: get, put, patch, delete */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/dnsZones/{dnsZoneId}", subscriptionId: string, resourceGroupName: string, privateCloudName: string, dnsZoneId: string): WorkloadNetworkDnsZonesGet;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AVS/privateClouds/\{privateCloudName\}/workloadNetworks/default/publicIPs' has methods for the following verbs: get */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/publicIPs", subscriptionId: string, resourceGroupName: string, privateCloudName: string): WorkloadNetworkPublicIpsListByWorkloadNetwork;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AVS/privateClouds/\{privateCloudName\}/workloadNetworks/default/publicIPs/\{publicIPId\}' has methods for the following verbs: get, put, delete */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/workloadNetworks/default/publicIPs/{publicIPId}", subscriptionId: string, resourceGroupName: string, privateCloudName: string, publicIPId: string): WorkloadNetworkPublicIpsGet;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AVS/privateClouds/\{privateCloudName\}/cloudLinks' has methods for the following verbs: get */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/cloudLinks", subscriptionId: string, resourceGroupName: string, privateCloudName: string): CloudLinksListByPrivateCloud;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AVS/privateClouds/\{privateCloudName\}/cloudLinks/\{cloudLinkName\}' has methods for the following verbs: get, put, delete */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/cloudLinks/{cloudLinkName}", subscriptionId: string, resourceGroupName: string, privateCloudName: string, cloudLinkName: string): CloudLinksGet;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AVS/privateClouds/\{privateCloudName\}/addons' has methods for the following verbs: get */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/addons", subscriptionId: string, resourceGroupName: string, privateCloudName: string): AddonsListByPrivateCloud;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AVS/privateClouds/\{privateCloudName\}/addons/\{addonName\}' has methods for the following verbs: get, put, delete */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/addons/{addonName}", subscriptionId: string, resourceGroupName: string, privateCloudName: string, addonName: string): AddonsGet;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AVS/privateClouds/\{privateCloudName\}/clusters/\{clusterName\}/virtualMachines' has methods for the following verbs: get */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/virtualMachines", subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string): VirtualMachinesListByCluster;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AVS/privateClouds/\{privateCloudName\}/clusters/\{clusterName\}/virtualMachines/\{virtualMachineId\}' has methods for the following verbs: get */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/virtualMachines/{virtualMachineId}", subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, virtualMachineId: string): VirtualMachinesGet;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AVS/privateClouds/\{privateCloudName\}/clusters/\{clusterName\}/virtualMachines/\{virtualMachineId\}/restrictMovement' has methods for the following verbs: post */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/virtualMachines/{virtualMachineId}/restrictMovement", subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, virtualMachineId: string): VirtualMachinesRestrictMovement;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AVS/privateClouds/\{privateCloudName\}/clusters/\{clusterName\}/placementPolicies' has methods for the following verbs: get */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/placementPolicies", subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string): PlacementPoliciesListByCluster;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AVS/privateClouds/\{privateCloudName\}/clusters/\{clusterName\}/placementPolicies/\{placementPolicyName\}' has methods for the following verbs: get, put, patch, delete */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/clusters/{clusterName}/placementPolicies/{placementPolicyName}", subscriptionId: string, resourceGroupName: string, privateCloudName: string, clusterName: string, placementPolicyName: string): PlacementPoliciesGet;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AVS/privateClouds/\{privateCloudName\}/scriptPackages' has methods for the following verbs: get */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptPackages", subscriptionId: string, resourceGroupName: string, privateCloudName: string): ScriptPackagesListByPrivateCloud;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AVS/privateClouds/\{privateCloudName\}/scriptPackages/\{scriptPackageName\}' has methods for the following verbs: get */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptPackages/{scriptPackageName}", subscriptionId: string, resourceGroupName: string, privateCloudName: string, scriptPackageName: string): ScriptPackagesGet;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AVS/privateClouds/\{privateCloudName\}/scriptPackages/\{scriptPackageName\}/scriptCmdlets' has methods for the following verbs: get */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptPackages/{scriptPackageName}/scriptCmdlets", subscriptionId: string, resourceGroupName: string, privateCloudName: string, scriptPackageName: string): ScriptCmdletsListByScriptPackage;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AVS/privateClouds/\{privateCloudName\}/scriptPackages/\{scriptPackageName\}/scriptCmdlets/\{scriptCmdletName\}' has methods for the following verbs: get */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptPackages/{scriptPackageName}/scriptCmdlets/{scriptCmdletName}", subscriptionId: string, resourceGroupName: string, privateCloudName: string, scriptPackageName: string, scriptCmdletName: string): ScriptCmdletsGet;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AVS/privateClouds/\{privateCloudName\}/scriptExecutions' has methods for the following verbs: get */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptExecutions", subscriptionId: string, resourceGroupName: string, privateCloudName: string): ScriptExecutionsListByPrivateCloud;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AVS/privateClouds/\{privateCloudName\}/scriptExecutions/\{scriptExecutionName\}' has methods for the following verbs: get, put, delete */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptExecutions/{scriptExecutionName}", subscriptionId: string, resourceGroupName: string, privateCloudName: string, scriptExecutionName: string): ScriptExecutionsGet;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AVS/privateClouds/\{privateCloudName\}/scriptExecutions/\{scriptExecutionName\}/getExecutionLogs' has methods for the following verbs: post */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptExecutions/{scriptExecutionName}/getExecutionLogs", subscriptionId: string, resourceGroupName: string, privateCloudName: string, scriptExecutionName: string): ScriptExecutionsGetExecutionLogs;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AVS/privateClouds/\{privateCloudName\}/iscsiPaths' has methods for the following verbs: get */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/iscsiPaths", subscriptionId: string, resourceGroupName: string, privateCloudName: string): IscsiPathsListByPrivateCloud;
    /** Resource for '/subscriptions/\{subscriptionId\}/resourceGroups/\{resourceGroupName\}/providers/Microsoft.AVS/privateClouds/\{privateCloudName\}/iscsiPaths/default' has methods for the following verbs: get, put, delete */
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/iscsiPaths/default", subscriptionId: string, resourceGroupName: string, privateCloudName: string): IscsiPathsGet;
}
export type AVSContext = Client & {
    path: Routes;
};
//# sourceMappingURL=clientDefinitions.d.ts.map