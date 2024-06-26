// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { getOperationsOperations, } from "./classic/operations/index.js";
import { getLocationsOperations, } from "./classic/locations/index.js";
import { getPrivateCloudsOperations, } from "./classic/privateClouds/index.js";
import { getClustersOperations, } from "./classic/clusters/index.js";
import { getDatastoresOperations, } from "./classic/datastores/index.js";
import { getHcxEnterpriseSitesOperations, } from "./classic/hcxEnterpriseSites/index.js";
import { getAuthorizationsOperations, } from "./classic/authorizations/index.js";
import { getGlobalReachConnectionsOperations, } from "./classic/globalReachConnections/index.js";
import { getWorkloadNetworksOperations, } from "./classic/workloadNetworks/index.js";
import { getWorkloadNetworkSegmentsOperations, } from "./classic/workloadNetworkSegments/index.js";
import { getWorkloadNetworkDhcpConfigurationsOperations, } from "./classic/workloadNetworkDhcpConfigurations/index.js";
import { getWorkloadNetworkGatewaysOperations, } from "./classic/workloadNetworkGateways/index.js";
import { getWorkloadNetworkPortMirroringProfilesOperations, } from "./classic/workloadNetworkPortMirroringProfiles/index.js";
import { getWorkloadNetworkVmGroupsOperations, } from "./classic/workloadNetworkVmGroups/index.js";
import { getWorkloadNetworkVirtualMachinesOperations, } from "./classic/workloadNetworkVirtualMachines/index.js";
import { getWorkloadNetworkDnsServicesOperations, } from "./classic/workloadNetworkDnsServices/index.js";
import { getWorkloadNetworkDnsZonesOperations, } from "./classic/workloadNetworkDnsZones/index.js";
import { getWorkloadNetworkPublicIpsOperations, } from "./classic/workloadNetworkPublicIps/index.js";
import { getCloudLinksOperations, } from "./classic/cloudLinks/index.js";
import { getAddonsOperations, } from "./classic/addons/index.js";
import { getVirtualMachinesOperations, } from "./classic/virtualMachines/index.js";
import { getPlacementPoliciesOperations, } from "./classic/placementPolicies/index.js";
import { getScriptPackagesOperations, } from "./classic/scriptPackages/index.js";
import { getScriptCmdletsOperations, } from "./classic/scriptCmdlets/index.js";
import { getScriptExecutionsOperations, } from "./classic/scriptExecutions/index.js";
import { getIscsiPathsOperations, } from "./classic/iscsiPaths/index.js";
import { createAVS } from "./api/index.js";
export class AVSClient {
    _client;
    /** The pipeline used by this client to make requests */
    pipeline;
    /** Azure VMware Solution API */
    constructor(credential, options = {}) {
        this._client = createAVS(credential, options);
        this.pipeline = this._client.pipeline;
        this.operations = getOperationsOperations(this._client);
        this.locations = getLocationsOperations(this._client);
        this.privateClouds = getPrivateCloudsOperations(this._client);
        this.clusters = getClustersOperations(this._client);
        this.datastores = getDatastoresOperations(this._client);
        this.hcxEnterpriseSites = getHcxEnterpriseSitesOperations(this._client);
        this.authorizations = getAuthorizationsOperations(this._client);
        this.globalReachConnections = getGlobalReachConnectionsOperations(this._client);
        this.workloadNetworks = getWorkloadNetworksOperations(this._client);
        this.workloadNetworkSegments = getWorkloadNetworkSegmentsOperations(this._client);
        this.workloadNetworkDhcpConfigurations =
            getWorkloadNetworkDhcpConfigurationsOperations(this._client);
        this.workloadNetworkGateways = getWorkloadNetworkGatewaysOperations(this._client);
        this.workloadNetworkPortMirroringProfiles =
            getWorkloadNetworkPortMirroringProfilesOperations(this._client);
        this.workloadNetworkVmGroups = getWorkloadNetworkVmGroupsOperations(this._client);
        this.workloadNetworkVirtualMachines =
            getWorkloadNetworkVirtualMachinesOperations(this._client);
        this.workloadNetworkDnsServices = getWorkloadNetworkDnsServicesOperations(this._client);
        this.workloadNetworkDnsZones = getWorkloadNetworkDnsZonesOperations(this._client);
        this.workloadNetworkPublicIps = getWorkloadNetworkPublicIpsOperations(this._client);
        this.cloudLinks = getCloudLinksOperations(this._client);
        this.addons = getAddonsOperations(this._client);
        this.virtualMachines = getVirtualMachinesOperations(this._client);
        this.placementPolicies = getPlacementPoliciesOperations(this._client);
        this.scriptPackages = getScriptPackagesOperations(this._client);
        this.scriptCmdlets = getScriptCmdletsOperations(this._client);
        this.scriptExecutions = getScriptExecutionsOperations(this._client);
        this.iscsiPaths = getIscsiPathsOperations(this._client);
    }
    /** The operation groups for Operations */
    operations;
    /** The operation groups for Locations */
    locations;
    /** The operation groups for PrivateClouds */
    privateClouds;
    /** The operation groups for Clusters */
    clusters;
    /** The operation groups for Datastores */
    datastores;
    /** The operation groups for HcxEnterpriseSites */
    hcxEnterpriseSites;
    /** The operation groups for Authorizations */
    authorizations;
    /** The operation groups for GlobalReachConnections */
    globalReachConnections;
    /** The operation groups for WorkloadNetworks */
    workloadNetworks;
    /** The operation groups for WorkloadNetworkSegments */
    workloadNetworkSegments;
    /** The operation groups for WorkloadNetworkDhcpConfigurations */
    workloadNetworkDhcpConfigurations;
    /** The operation groups for WorkloadNetworkGateways */
    workloadNetworkGateways;
    /** The operation groups for WorkloadNetworkPortMirroringProfiles */
    workloadNetworkPortMirroringProfiles;
    /** The operation groups for WorkloadNetworkVmGroups */
    workloadNetworkVmGroups;
    /** The operation groups for WorkloadNetworkVirtualMachines */
    workloadNetworkVirtualMachines;
    /** The operation groups for WorkloadNetworkDnsServices */
    workloadNetworkDnsServices;
    /** The operation groups for WorkloadNetworkDnsZones */
    workloadNetworkDnsZones;
    /** The operation groups for WorkloadNetworkPublicIps */
    workloadNetworkPublicIps;
    /** The operation groups for CloudLinks */
    cloudLinks;
    /** The operation groups for Addons */
    addons;
    /** The operation groups for VirtualMachines */
    virtualMachines;
    /** The operation groups for PlacementPolicies */
    placementPolicies;
    /** The operation groups for ScriptPackages */
    scriptPackages;
    /** The operation groups for ScriptCmdlets */
    scriptCmdlets;
    /** The operation groups for ScriptExecutions */
    scriptExecutions;
    /** The operation groups for IscsiPaths */
    iscsiPaths;
}
//# sourceMappingURL=aVSClient.js.map