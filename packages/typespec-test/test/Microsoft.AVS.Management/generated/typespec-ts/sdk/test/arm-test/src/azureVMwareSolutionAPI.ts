// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createAzureVMwareSolutionAPI,
  AzureVMwareSolutionAPIContext,
  AzureVMwareSolutionAPIOptionalParams,
} from "./api/index.js";
import {
  WorkloadNetworksOperations,
  _getWorkloadNetworksOperations,
} from "./classic/workloadNetworks/index.js";
import {
  WorkloadNetworkVmGroupsOperations,
  _getWorkloadNetworkVmGroupsOperations,
} from "./classic/workloadNetworkVmGroups/index.js";
import {
  WorkloadNetworkVirtualMachinesOperations,
  _getWorkloadNetworkVirtualMachinesOperations,
} from "./classic/workloadNetworkVirtualMachines/index.js";
import {
  WorkloadNetworkSegmentsOperations,
  _getWorkloadNetworkSegmentsOperations,
} from "./classic/workloadNetworkSegments/index.js";
import {
  WorkloadNetworkPublicIpsOperations,
  _getWorkloadNetworkPublicIpsOperations,
} from "./classic/workloadNetworkPublicIps/index.js";
import {
  WorkloadNetworkPortMirroringProfilesOperations,
  _getWorkloadNetworkPortMirroringProfilesOperations,
} from "./classic/workloadNetworkPortMirroringProfiles/index.js";
import {
  WorkloadNetworkGatewaysOperations,
  _getWorkloadNetworkGatewaysOperations,
} from "./classic/workloadNetworkGateways/index.js";
import {
  WorkloadNetworkDnsZonesOperations,
  _getWorkloadNetworkDnsZonesOperations,
} from "./classic/workloadNetworkDnsZones/index.js";
import {
  WorkloadNetworkDnsServicesOperations,
  _getWorkloadNetworkDnsServicesOperations,
} from "./classic/workloadNetworkDnsServices/index.js";
import {
  WorkloadNetworkDhcpConfigurationsOperations,
  _getWorkloadNetworkDhcpConfigurationsOperations,
} from "./classic/workloadNetworkDhcpConfigurations/index.js";
import {
  VirtualMachinesOperations,
  _getVirtualMachinesOperations,
} from "./classic/virtualMachines/index.js";
import { SkusOperations, _getSkusOperations } from "./classic/skus/index.js";
import {
  ScriptPackagesOperations,
  _getScriptPackagesOperations,
} from "./classic/scriptPackages/index.js";
import {
  ScriptExecutionsOperations,
  _getScriptExecutionsOperations,
} from "./classic/scriptExecutions/index.js";
import {
  ScriptCmdletsOperations,
  _getScriptCmdletsOperations,
} from "./classic/scriptCmdlets/index.js";
import {
  PureStoragePoliciesOperations,
  _getPureStoragePoliciesOperations,
} from "./classic/pureStoragePolicies/index.js";
import {
  ProvisionedNetworksOperations,
  _getProvisionedNetworksOperations,
} from "./classic/provisionedNetworks/index.js";
import {
  PrivateCloudsOperations,
  _getPrivateCloudsOperations,
} from "./classic/privateClouds/index.js";
import {
  PlacementPoliciesOperations,
  _getPlacementPoliciesOperations,
} from "./classic/placementPolicies/index.js";
import {
  LocationsOperations,
  _getLocationsOperations,
} from "./classic/locations/index.js";
import {
  IscsiPathsOperations,
  _getIscsiPathsOperations,
} from "./classic/iscsiPaths/index.js";
import { HostsOperations, _getHostsOperations } from "./classic/hosts/index.js";
import {
  HcxEnterpriseSitesOperations,
  _getHcxEnterpriseSitesOperations,
} from "./classic/hcxEnterpriseSites/index.js";
import {
  GlobalReachConnectionsOperations,
  _getGlobalReachConnectionsOperations,
} from "./classic/globalReachConnections/index.js";
import {
  DatastoresOperations,
  _getDatastoresOperations,
} from "./classic/datastores/index.js";
import {
  ClustersOperations,
  _getClustersOperations,
} from "./classic/clusters/index.js";
import {
  CloudLinksOperations,
  _getCloudLinksOperations,
} from "./classic/cloudLinks/index.js";
import {
  AuthorizationsOperations,
  _getAuthorizationsOperations,
} from "./classic/authorizations/index.js";
import {
  AddonsOperations,
  _getAddonsOperations,
} from "./classic/addons/index.js";
import {
  OperationsOperations,
  _getOperationsOperations,
} from "./classic/operations/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { TokenCredential } from "@azure/core-auth";

export { AzureVMwareSolutionAPIOptionalParams } from "./api/azureVMwareSolutionAPIContext.js";

export class AzureVMwareSolutionAPI {
  private _client: AzureVMwareSolutionAPIContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Azure VMware Solution API */
  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: AzureVMwareSolutionAPIOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createAzureVMwareSolutionAPI(credential, subscriptionId, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.workloadNetworks = _getWorkloadNetworksOperations(this._client);
    this.workloadNetworkVmGroups = _getWorkloadNetworkVmGroupsOperations(
      this._client,
    );
    this.workloadNetworkVirtualMachines =
      _getWorkloadNetworkVirtualMachinesOperations(this._client);
    this.workloadNetworkSegments = _getWorkloadNetworkSegmentsOperations(
      this._client,
    );
    this.workloadNetworkPublicIps = _getWorkloadNetworkPublicIpsOperations(
      this._client,
    );
    this.workloadNetworkPortMirroringProfiles =
      _getWorkloadNetworkPortMirroringProfilesOperations(this._client);
    this.workloadNetworkGateways = _getWorkloadNetworkGatewaysOperations(
      this._client,
    );
    this.workloadNetworkDnsZones = _getWorkloadNetworkDnsZonesOperations(
      this._client,
    );
    this.workloadNetworkDnsServices = _getWorkloadNetworkDnsServicesOperations(
      this._client,
    );
    this.workloadNetworkDhcpConfigurations =
      _getWorkloadNetworkDhcpConfigurationsOperations(this._client);
    this.virtualMachines = _getVirtualMachinesOperations(this._client);
    this.skus = _getSkusOperations(this._client);
    this.scriptPackages = _getScriptPackagesOperations(this._client);
    this.scriptExecutions = _getScriptExecutionsOperations(this._client);
    this.scriptCmdlets = _getScriptCmdletsOperations(this._client);
    this.pureStoragePolicies = _getPureStoragePoliciesOperations(this._client);
    this.provisionedNetworks = _getProvisionedNetworksOperations(this._client);
    this.privateClouds = _getPrivateCloudsOperations(this._client);
    this.placementPolicies = _getPlacementPoliciesOperations(this._client);
    this.locations = _getLocationsOperations(this._client);
    this.iscsiPaths = _getIscsiPathsOperations(this._client);
    this.hosts = _getHostsOperations(this._client);
    this.hcxEnterpriseSites = _getHcxEnterpriseSitesOperations(this._client);
    this.globalReachConnections = _getGlobalReachConnectionsOperations(
      this._client,
    );
    this.datastores = _getDatastoresOperations(this._client);
    this.clusters = _getClustersOperations(this._client);
    this.cloudLinks = _getCloudLinksOperations(this._client);
    this.authorizations = _getAuthorizationsOperations(this._client);
    this.addons = _getAddonsOperations(this._client);
    this.operations = _getOperationsOperations(this._client);
  }

  /** The operation groups for workloadNetworks */
  public readonly workloadNetworks: WorkloadNetworksOperations;
  /** The operation groups for workloadNetworkVmGroups */
  public readonly workloadNetworkVmGroups: WorkloadNetworkVmGroupsOperations;
  /** The operation groups for workloadNetworkVirtualMachines */
  public readonly workloadNetworkVirtualMachines: WorkloadNetworkVirtualMachinesOperations;
  /** The operation groups for workloadNetworkSegments */
  public readonly workloadNetworkSegments: WorkloadNetworkSegmentsOperations;
  /** The operation groups for workloadNetworkPublicIps */
  public readonly workloadNetworkPublicIps: WorkloadNetworkPublicIpsOperations;
  /** The operation groups for workloadNetworkPortMirroringProfiles */
  public readonly workloadNetworkPortMirroringProfiles: WorkloadNetworkPortMirroringProfilesOperations;
  /** The operation groups for workloadNetworkGateways */
  public readonly workloadNetworkGateways: WorkloadNetworkGatewaysOperations;
  /** The operation groups for workloadNetworkDnsZones */
  public readonly workloadNetworkDnsZones: WorkloadNetworkDnsZonesOperations;
  /** The operation groups for workloadNetworkDnsServices */
  public readonly workloadNetworkDnsServices: WorkloadNetworkDnsServicesOperations;
  /** The operation groups for workloadNetworkDhcpConfigurations */
  public readonly workloadNetworkDhcpConfigurations: WorkloadNetworkDhcpConfigurationsOperations;
  /** The operation groups for virtualMachines */
  public readonly virtualMachines: VirtualMachinesOperations;
  /** The operation groups for skus */
  public readonly skus: SkusOperations;
  /** The operation groups for scriptPackages */
  public readonly scriptPackages: ScriptPackagesOperations;
  /** The operation groups for scriptExecutions */
  public readonly scriptExecutions: ScriptExecutionsOperations;
  /** The operation groups for scriptCmdlets */
  public readonly scriptCmdlets: ScriptCmdletsOperations;
  /** The operation groups for pureStoragePolicies */
  public readonly pureStoragePolicies: PureStoragePoliciesOperations;
  /** The operation groups for provisionedNetworks */
  public readonly provisionedNetworks: ProvisionedNetworksOperations;
  /** The operation groups for privateClouds */
  public readonly privateClouds: PrivateCloudsOperations;
  /** The operation groups for placementPolicies */
  public readonly placementPolicies: PlacementPoliciesOperations;
  /** The operation groups for locations */
  public readonly locations: LocationsOperations;
  /** The operation groups for iscsiPaths */
  public readonly iscsiPaths: IscsiPathsOperations;
  /** The operation groups for hosts */
  public readonly hosts: HostsOperations;
  /** The operation groups for hcxEnterpriseSites */
  public readonly hcxEnterpriseSites: HcxEnterpriseSitesOperations;
  /** The operation groups for globalReachConnections */
  public readonly globalReachConnections: GlobalReachConnectionsOperations;
  /** The operation groups for datastores */
  public readonly datastores: DatastoresOperations;
  /** The operation groups for clusters */
  public readonly clusters: ClustersOperations;
  /** The operation groups for cloudLinks */
  public readonly cloudLinks: CloudLinksOperations;
  /** The operation groups for authorizations */
  public readonly authorizations: AuthorizationsOperations;
  /** The operation groups for addons */
  public readonly addons: AddonsOperations;
  /** The operation groups for operations */
  public readonly operations: OperationsOperations;
}
