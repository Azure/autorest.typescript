// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  createHybridNetworkManagement,
  HybridNetworkManagementContext,
  HybridNetworkManagementClientOptionalParams,
} from "./api/index.js";
import {
  ArtifactManifestsOperations,
  _getArtifactManifestsOperations,
} from "./classic/artifactManifests/index.js";
import {
  ArtifactStoresOperations,
  _getArtifactStoresOperations,
} from "./classic/artifactStores/index.js";
import { ComponentsOperations, _getComponentsOperations } from "./classic/components/index.js";
import {
  ConfigurationGroupSchemasOperations,
  _getConfigurationGroupSchemasOperations,
} from "./classic/configurationGroupSchemas/index.js";
import {
  ConfigurationGroupValuesOperations,
  _getConfigurationGroupValuesOperations,
} from "./classic/configurationGroupValues/index.js";
import {
  NetworkFunctionDefinitionGroupsOperations,
  _getNetworkFunctionDefinitionGroupsOperations,
} from "./classic/networkFunctionDefinitionGroups/index.js";
import {
  NetworkFunctionDefinitionVersionsOperations,
  _getNetworkFunctionDefinitionVersionsOperations,
} from "./classic/networkFunctionDefinitionVersions/index.js";
import {
  NetworkFunctionsOperations,
  _getNetworkFunctionsOperations,
} from "./classic/networkFunctions/index.js";
import {
  NetworkServiceDesignGroupsOperations,
  _getNetworkServiceDesignGroupsOperations,
} from "./classic/networkServiceDesignGroups/index.js";
import {
  NetworkServiceDesignVersionsOperations,
  _getNetworkServiceDesignVersionsOperations,
} from "./classic/networkServiceDesignVersions/index.js";
import { OperationsOperations, _getOperationsOperations } from "./classic/operations/index.js";
import {
  ProxyArtifactOperations,
  _getProxyArtifactOperations,
} from "./classic/proxyArtifact/index.js";
import { PublishersOperations, _getPublishersOperations } from "./classic/publishers/index.js";
import {
  SiteNetworkServicesOperations,
  _getSiteNetworkServicesOperations,
} from "./classic/siteNetworkServices/index.js";
import { SitesOperations, _getSitesOperations } from "./classic/sites/index.js";
import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { HybridNetworkManagementClientOptionalParams } from "./api/hybridNetworkManagementContext.js";

export class HybridNetworkManagementClient {
  private _client: HybridNetworkManagementContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: HybridNetworkManagementClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createHybridNetworkManagement(credential, subscriptionId, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.siteNetworkServices = _getSiteNetworkServicesOperations(this._client);
    this.sites = _getSitesOperations(this._client);
    this.artifactManifests = _getArtifactManifestsOperations(this._client);
    this.proxyArtifact = _getProxyArtifactOperations(this._client);
    this.artifactStores = _getArtifactStoresOperations(this._client);
    this.networkServiceDesignVersions = _getNetworkServiceDesignVersionsOperations(this._client);
    this.networkServiceDesignGroups = _getNetworkServiceDesignGroupsOperations(this._client);
    this.networkFunctionDefinitionVersions = _getNetworkFunctionDefinitionVersionsOperations(
      this._client,
    );
    this.networkFunctionDefinitionGroups = _getNetworkFunctionDefinitionGroupsOperations(
      this._client,
    );
    this.components = _getComponentsOperations(this._client);
    this.networkFunctions = _getNetworkFunctionsOperations(this._client);
    this.configurationGroupValues = _getConfigurationGroupValuesOperations(this._client);
    this.publishers = _getPublishersOperations(this._client);
    this.configurationGroupSchemas = _getConfigurationGroupSchemasOperations(this._client);
    this.operations = _getOperationsOperations(this._client);
  }

  /** The operation groups for siteNetworkServices */
  public readonly siteNetworkServices: SiteNetworkServicesOperations;
  /** The operation groups for sites */
  public readonly sites: SitesOperations;
  /** The operation groups for artifactManifests */
  public readonly artifactManifests: ArtifactManifestsOperations;
  /** The operation groups for proxyArtifact */
  public readonly proxyArtifact: ProxyArtifactOperations;
  /** The operation groups for artifactStores */
  public readonly artifactStores: ArtifactStoresOperations;
  /** The operation groups for networkServiceDesignVersions */
  public readonly networkServiceDesignVersions: NetworkServiceDesignVersionsOperations;
  /** The operation groups for networkServiceDesignGroups */
  public readonly networkServiceDesignGroups: NetworkServiceDesignGroupsOperations;
  /** The operation groups for networkFunctionDefinitionVersions */
  public readonly networkFunctionDefinitionVersions: NetworkFunctionDefinitionVersionsOperations;
  /** The operation groups for networkFunctionDefinitionGroups */
  public readonly networkFunctionDefinitionGroups: NetworkFunctionDefinitionGroupsOperations;
  /** The operation groups for components */
  public readonly components: ComponentsOperations;
  /** The operation groups for networkFunctions */
  public readonly networkFunctions: NetworkFunctionsOperations;
  /** The operation groups for configurationGroupValues */
  public readonly configurationGroupValues: ConfigurationGroupValuesOperations;
  /** The operation groups for publishers */
  public readonly publishers: PublishersOperations;
  /** The operation groups for configurationGroupSchemas */
  public readonly configurationGroupSchemas: ConfigurationGroupSchemasOperations;
  /** The operation groups for operations */
  public readonly operations: OperationsOperations;
}
