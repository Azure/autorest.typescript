import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import { OperationsOperations } from "./classic/operations/index.js";
import { LocationsOperations } from "./classic/locations/index.js";
import { PrivateCloudsOperations } from "./classic/privateClouds/index.js";
import { ClustersOperations } from "./classic/clusters/index.js";
import { DatastoresOperations } from "./classic/datastores/index.js";
import { HcxEnterpriseSitesOperations } from "./classic/hcxEnterpriseSites/index.js";
import { AuthorizationsOperations } from "./classic/authorizations/index.js";
import { GlobalReachConnectionsOperations } from "./classic/globalReachConnections/index.js";
import { WorkloadNetworksOperations } from "./classic/workloadNetworks/index.js";
import { WorkloadNetworkSegmentsOperations } from "./classic/workloadNetworkSegments/index.js";
import { WorkloadNetworkDhcpConfigurationsOperations } from "./classic/workloadNetworkDhcpConfigurations/index.js";
import { WorkloadNetworkGatewaysOperations } from "./classic/workloadNetworkGateways/index.js";
import { WorkloadNetworkPortMirroringProfilesOperations } from "./classic/workloadNetworkPortMirroringProfiles/index.js";
import { WorkloadNetworkVmGroupsOperations } from "./classic/workloadNetworkVmGroups/index.js";
import { WorkloadNetworkVirtualMachinesOperations } from "./classic/workloadNetworkVirtualMachines/index.js";
import { WorkloadNetworkDnsServicesOperations } from "./classic/workloadNetworkDnsServices/index.js";
import { WorkloadNetworkDnsZonesOperations } from "./classic/workloadNetworkDnsZones/index.js";
import { WorkloadNetworkPublicIpsOperations } from "./classic/workloadNetworkPublicIps/index.js";
import { CloudLinksOperations } from "./classic/cloudLinks/index.js";
import { AddonsOperations } from "./classic/addons/index.js";
import { VirtualMachinesOperations } from "./classic/virtualMachines/index.js";
import { PlacementPoliciesOperations } from "./classic/placementPolicies/index.js";
import { ScriptPackagesOperations } from "./classic/scriptPackages/index.js";
import { ScriptCmdletsOperations } from "./classic/scriptCmdlets/index.js";
import { ScriptExecutionsOperations } from "./classic/scriptExecutions/index.js";
import { IscsiPathsOperations } from "./classic/iscsiPaths/index.js";
import { AVSClientOptions } from "./api/index.js";
export { AVSClientOptions } from "./api/avsContext.js";
export declare class AVSClient {
    private _client;
    /** The pipeline used by this client to make requests */
    readonly pipeline: Pipeline;
    /** Azure VMware Solution API */
    constructor(credential: TokenCredential, options?: AVSClientOptions);
    /** The operation groups for Operations */
    readonly operations: OperationsOperations;
    /** The operation groups for Locations */
    readonly locations: LocationsOperations;
    /** The operation groups for PrivateClouds */
    readonly privateClouds: PrivateCloudsOperations;
    /** The operation groups for Clusters */
    readonly clusters: ClustersOperations;
    /** The operation groups for Datastores */
    readonly datastores: DatastoresOperations;
    /** The operation groups for HcxEnterpriseSites */
    readonly hcxEnterpriseSites: HcxEnterpriseSitesOperations;
    /** The operation groups for Authorizations */
    readonly authorizations: AuthorizationsOperations;
    /** The operation groups for GlobalReachConnections */
    readonly globalReachConnections: GlobalReachConnectionsOperations;
    /** The operation groups for WorkloadNetworks */
    readonly workloadNetworks: WorkloadNetworksOperations;
    /** The operation groups for WorkloadNetworkSegments */
    readonly workloadNetworkSegments: WorkloadNetworkSegmentsOperations;
    /** The operation groups for WorkloadNetworkDhcpConfigurations */
    readonly workloadNetworkDhcpConfigurations: WorkloadNetworkDhcpConfigurationsOperations;
    /** The operation groups for WorkloadNetworkGateways */
    readonly workloadNetworkGateways: WorkloadNetworkGatewaysOperations;
    /** The operation groups for WorkloadNetworkPortMirroringProfiles */
    readonly workloadNetworkPortMirroringProfiles: WorkloadNetworkPortMirroringProfilesOperations;
    /** The operation groups for WorkloadNetworkVmGroups */
    readonly workloadNetworkVmGroups: WorkloadNetworkVmGroupsOperations;
    /** The operation groups for WorkloadNetworkVirtualMachines */
    readonly workloadNetworkVirtualMachines: WorkloadNetworkVirtualMachinesOperations;
    /** The operation groups for WorkloadNetworkDnsServices */
    readonly workloadNetworkDnsServices: WorkloadNetworkDnsServicesOperations;
    /** The operation groups for WorkloadNetworkDnsZones */
    readonly workloadNetworkDnsZones: WorkloadNetworkDnsZonesOperations;
    /** The operation groups for WorkloadNetworkPublicIps */
    readonly workloadNetworkPublicIps: WorkloadNetworkPublicIpsOperations;
    /** The operation groups for CloudLinks */
    readonly cloudLinks: CloudLinksOperations;
    /** The operation groups for Addons */
    readonly addons: AddonsOperations;
    /** The operation groups for VirtualMachines */
    readonly virtualMachines: VirtualMachinesOperations;
    /** The operation groups for PlacementPolicies */
    readonly placementPolicies: PlacementPoliciesOperations;
    /** The operation groups for ScriptPackages */
    readonly scriptPackages: ScriptPackagesOperations;
    /** The operation groups for ScriptCmdlets */
    readonly scriptCmdlets: ScriptCmdletsOperations;
    /** The operation groups for ScriptExecutions */
    readonly scriptExecutions: ScriptExecutionsOperations;
    /** The operation groups for IscsiPaths */
    readonly iscsiPaths: IscsiPathsOperations;
}
//# sourceMappingURL=aVSClient.d.ts.map