// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import {
  getOperationsOperations,
  OperationsOperations,
} from "./classic/operations/index.js";
import {
  getLocationsOperations,
  LocationsOperations,
} from "./classic/locations/index.js";
import {
  getPrivateCloudsOperations,
  PrivateCloudsOperations,
} from "./classic/privateClouds/index.js";
import {
  getClustersOperations,
  ClustersOperations,
} from "./classic/clusters/index.js";
import {
  getDatastoresOperations,
  DatastoresOperations,
} from "./classic/datastores/index.js";
import {
  getHcxEnterpriseSitesOperations,
  HcxEnterpriseSitesOperations,
} from "./classic/hcxEnterpriseSites/index.js";
import {
  getAuthorizationsOperations,
  AuthorizationsOperations,
} from "./classic/authorizations/index.js";
import {
  getGlobalReachConnectionsOperations,
  GlobalReachConnectionsOperations,
} from "./classic/globalReachConnections/index.js";
import {
  getWorkloadNetworksOperations,
  WorkloadNetworksOperations,
} from "./classic/workloadNetworks/index.js";
import {
  getWorkloadNetworkSegmentsOperations,
  WorkloadNetworkSegmentsOperations,
} from "./classic/workloadNetworkSegments/index.js";
import {
  getWorkloadNetworkDhcpConfigurationsOperations,
  WorkloadNetworkDhcpConfigurationsOperations,
} from "./classic/workloadNetworkDhcpConfigurations/index.js";
import {
  getWorkloadNetworkGatewaysOperations,
  WorkloadNetworkGatewaysOperations,
} from "./classic/workloadNetworkGateways/index.js";
import {
  getWorkloadNetworkPortMirroringProfilesOperations,
  WorkloadNetworkPortMirroringProfilesOperations,
} from "./classic/workloadNetworkPortMirroringProfiles/index.js";
import {
  getWorkloadNetworkVmGroupsOperations,
  WorkloadNetworkVmGroupsOperations,
} from "./classic/workloadNetworkVmGroups/index.js";
import {
  getWorkloadNetworkVirtualMachinesOperations,
  WorkloadNetworkVirtualMachinesOperations,
} from "./classic/workloadNetworkVirtualMachines/index.js";
import {
  getWorkloadNetworkDnsServicesOperations,
  WorkloadNetworkDnsServicesOperations,
} from "./classic/workloadNetworkDnsServices/index.js";
import {
  getWorkloadNetworkDnsZonesOperations,
  WorkloadNetworkDnsZonesOperations,
} from "./classic/workloadNetworkDnsZones/index.js";
import {
  getWorkloadNetworkPublicIpsOperations,
  WorkloadNetworkPublicIpsOperations,
} from "./classic/workloadNetworkPublicIps/index.js";
import {
  getCloudLinksOperations,
  CloudLinksOperations,
} from "./classic/cloudLinks/index.js";
import {
  getAddonsOperations,
  AddonsOperations,
} from "./classic/addons/index.js";
import {
  getVirtualMachinesOperations,
  VirtualMachinesOperations,
} from "./classic/virtualMachines/index.js";
import {
  getPlacementPoliciesOperations,
  PlacementPoliciesOperations,
} from "./classic/placementPolicies/index.js";
import {
  getScriptPackagesOperations,
  ScriptPackagesOperations,
} from "./classic/scriptPackages/index.js";
import {
  getScriptCmdletsOperations,
  ScriptCmdletsOperations,
} from "./classic/scriptCmdlets/index.js";
import {
  getScriptExecutionsOperations,
  ScriptExecutionsOperations,
} from "./classic/scriptExecutions/index.js";
import {
  getIscsiPathsOperations,
  IscsiPathsOperations,
} from "./classic/iscsiPaths/index.js";
import { createAVS, AVSClientOptions, AVSContext } from "./api/index.js";

export { AVSClientOptions } from "./api/avsContext.js";

export class AVSClient {
  private _client: AVSContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Azure VMware Solution API */
  constructor(credential: TokenCredential, options: AVSClientOptions = {}) {
    this._client = createAVS(credential, options);
    this.pipeline = this._client.pipeline;
    this.operations = getOperationsOperations(this._client);
    this.locations = getLocationsOperations(this._client);
    this.privateClouds = getPrivateCloudsOperations(this._client);
    this.clusters = getClustersOperations(this._client);
    this.datastores = getDatastoresOperations(this._client);
    this.hcxEnterpriseSites = getHcxEnterpriseSitesOperations(this._client);
    this.authorizations = getAuthorizationsOperations(this._client);
    this.globalReachConnections = getGlobalReachConnectionsOperations(
      this._client,
    );
    this.workloadNetworks = getWorkloadNetworksOperations(this._client);
    this.workloadNetworkSegments = getWorkloadNetworkSegmentsOperations(
      this._client,
    );
    this.workloadNetworkDhcpConfigurations =
      getWorkloadNetworkDhcpConfigurationsOperations(this._client);
    this.workloadNetworkGateways = getWorkloadNetworkGatewaysOperations(
      this._client,
    );
    this.workloadNetworkPortMirroringProfiles =
      getWorkloadNetworkPortMirroringProfilesOperations(this._client);
    this.workloadNetworkVmGroups = getWorkloadNetworkVmGroupsOperations(
      this._client,
    );
    this.workloadNetworkVirtualMachines =
      getWorkloadNetworkVirtualMachinesOperations(this._client);
    this.workloadNetworkDnsServices = getWorkloadNetworkDnsServicesOperations(
      this._client,
    );
    this.workloadNetworkDnsZones = getWorkloadNetworkDnsZonesOperations(
      this._client,
    );
    this.workloadNetworkPublicIps = getWorkloadNetworkPublicIpsOperations(
      this._client,
    );
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
  public readonly operations: OperationsOperations;
  /** The operation groups for Locations */
  public readonly locations: LocationsOperations;
  /** The operation groups for PrivateClouds */
  public readonly privateClouds: PrivateCloudsOperations;
  /** The operation groups for Clusters */
  public readonly clusters: ClustersOperations;
  /** The operation groups for Datastores */
  public readonly datastores: DatastoresOperations;
  /** The operation groups for HcxEnterpriseSites */
  public readonly hcxEnterpriseSites: HcxEnterpriseSitesOperations;
  /** The operation groups for Authorizations */
  public readonly authorizations: AuthorizationsOperations;
  /** The operation groups for GlobalReachConnections */
  public readonly globalReachConnections: GlobalReachConnectionsOperations;
  /** The operation groups for WorkloadNetworks */
  public readonly workloadNetworks: WorkloadNetworksOperations;
  /** The operation groups for WorkloadNetworkSegments */
  public readonly workloadNetworkSegments: WorkloadNetworkSegmentsOperations;
  /** The operation groups for WorkloadNetworkDhcpConfigurations */
  public readonly workloadNetworkDhcpConfigurations: WorkloadNetworkDhcpConfigurationsOperations;
  /** The operation groups for WorkloadNetworkGateways */
  public readonly workloadNetworkGateways: WorkloadNetworkGatewaysOperations;
  /** The operation groups for WorkloadNetworkPortMirroringProfiles */
  public readonly workloadNetworkPortMirroringProfiles: WorkloadNetworkPortMirroringProfilesOperations;
  /** The operation groups for WorkloadNetworkVmGroups */
  public readonly workloadNetworkVmGroups: WorkloadNetworkVmGroupsOperations;
  /** The operation groups for WorkloadNetworkVirtualMachines */
  public readonly workloadNetworkVirtualMachines: WorkloadNetworkVirtualMachinesOperations;
  /** The operation groups for WorkloadNetworkDnsServices */
  public readonly workloadNetworkDnsServices: WorkloadNetworkDnsServicesOperations;
  /** The operation groups for WorkloadNetworkDnsZones */
  public readonly workloadNetworkDnsZones: WorkloadNetworkDnsZonesOperations;
  /** The operation groups for WorkloadNetworkPublicIps */
  public readonly workloadNetworkPublicIps: WorkloadNetworkPublicIpsOperations;
  /** The operation groups for CloudLinks */
  public readonly cloudLinks: CloudLinksOperations;
  /** The operation groups for Addons */
  public readonly addons: AddonsOperations;
  /** The operation groups for VirtualMachines */
  public readonly virtualMachines: VirtualMachinesOperations;
  /** The operation groups for PlacementPolicies */
  public readonly placementPolicies: PlacementPoliciesOperations;
  /** The operation groups for ScriptPackages */
  public readonly scriptPackages: ScriptPackagesOperations;
  /** The operation groups for ScriptCmdlets */
  public readonly scriptCmdlets: ScriptCmdletsOperations;
  /** The operation groups for ScriptExecutions */
  public readonly scriptExecutions: ScriptExecutionsOperations;
  /** The operation groups for IscsiPaths */
  public readonly iscsiPaths: IscsiPathsOperations;
}
