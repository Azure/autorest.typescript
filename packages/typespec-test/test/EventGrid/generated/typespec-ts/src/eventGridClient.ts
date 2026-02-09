// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { createEventGrid, EventGridContext, EventGridClientOptionalParams } from "./api/index.js";
import {
  CaCertificatesOperations,
  _getCaCertificatesOperations,
} from "./classic/caCertificates/index.js";
import { ChannelsOperations, _getChannelsOperations } from "./classic/channels/index.js";
import {
  ClientGroupsOperations,
  _getClientGroupsOperations,
} from "./classic/clientGroups/index.js";
import { ClientsOperations, _getClientsOperations } from "./classic/clients/index.js";
import {
  DomainEventSubscriptionsOperations,
  _getDomainEventSubscriptionsOperations,
} from "./classic/domainEventSubscriptions/index.js";
import {
  DomainTopicEventSubscriptionsOperations,
  _getDomainTopicEventSubscriptionsOperations,
} from "./classic/domainTopicEventSubscriptions/index.js";
import {
  DomainTopicsOperations,
  _getDomainTopicsOperations,
} from "./classic/domainTopics/index.js";
import { DomainsOperations, _getDomainsOperations } from "./classic/domains/index.js";
import {
  EventSubscriptionsOperations,
  _getEventSubscriptionsOperations,
} from "./classic/eventSubscriptions/index.js";
import {
  ExtensionTopicsOperations,
  _getExtensionTopicsOperations,
} from "./classic/extensionTopics/index.js";
import {
  NamespaceTopicEventSubscriptionsOperations,
  _getNamespaceTopicEventSubscriptionsOperations,
} from "./classic/namespaceTopicEventSubscriptions/index.js";
import {
  NamespaceTopicsOperations,
  _getNamespaceTopicsOperations,
} from "./classic/namespaceTopics/index.js";
import { NamespacesOperations, _getNamespacesOperations } from "./classic/namespaces/index.js";
import {
  NetworkSecurityPerimeterConfigurationsOperations,
  _getNetworkSecurityPerimeterConfigurationsOperations,
} from "./classic/networkSecurityPerimeterConfigurations/index.js";
import { OperationsOperations, _getOperationsOperations } from "./classic/operations/index.js";
import {
  PartnerConfigurationsOperations,
  _getPartnerConfigurationsOperations,
} from "./classic/partnerConfigurations/index.js";
import {
  PartnerDestinationsOperations,
  _getPartnerDestinationsOperations,
} from "./classic/partnerDestinations/index.js";
import {
  PartnerNamespacesOperations,
  _getPartnerNamespacesOperations,
} from "./classic/partnerNamespaces/index.js";
import {
  PartnerRegistrationsOperations,
  _getPartnerRegistrationsOperations,
} from "./classic/partnerRegistrations/index.js";
import {
  PartnerTopicEventSubscriptionsOperations,
  _getPartnerTopicEventSubscriptionsOperations,
} from "./classic/partnerTopicEventSubscriptions/index.js";
import {
  PartnerTopicsOperations,
  _getPartnerTopicsOperations,
} from "./classic/partnerTopics/index.js";
import {
  PermissionBindingsOperations,
  _getPermissionBindingsOperations,
} from "./classic/permissionBindings/index.js";
import {
  PrivateEndpointConnectionsOperations,
  _getPrivateEndpointConnectionsOperations,
} from "./classic/privateEndpointConnections/index.js";
import {
  PrivateLinkResourcesOperations,
  _getPrivateLinkResourcesOperations,
} from "./classic/privateLinkResources/index.js";
import {
  SystemTopicEventSubscriptionsOperations,
  _getSystemTopicEventSubscriptionsOperations,
} from "./classic/systemTopicEventSubscriptions/index.js";
import {
  SystemTopicsOperations,
  _getSystemTopicsOperations,
} from "./classic/systemTopics/index.js";
import {
  TopicEventSubscriptionsOperations,
  _getTopicEventSubscriptionsOperations,
} from "./classic/topicEventSubscriptions/index.js";
import { TopicSpacesOperations, _getTopicSpacesOperations } from "./classic/topicSpaces/index.js";
import { TopicTypesOperations, _getTopicTypesOperations } from "./classic/topicTypes/index.js";
import { TopicsOperations, _getTopicsOperations } from "./classic/topics/index.js";
import {
  VerifiedPartnersOperations,
  _getVerifiedPartnersOperations,
} from "./classic/verifiedPartners/index.js";
import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";

export { EventGridClientOptionalParams } from "./api/eventGridContext.js";

export class EventGridClient {
  private _client: EventGridContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(credential: TokenCredential, options?: EventGridClientOptionalParams);
  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options?: EventGridClientOptionalParams,
  );
  /** Azure EventGrid Management Client */
  constructor(
    credential: TokenCredential,
    subscriptionIdOrOptions?: string | EventGridClientOptionalParams,
    options?: EventGridClientOptionalParams,
  ) {
    let subscriptionId: string | undefined;

    if (typeof subscriptionIdOrOptions === "string") {
      subscriptionId = subscriptionIdOrOptions;
    } else if (typeof subscriptionIdOrOptions === "object") {
      options = subscriptionIdOrOptions;
    }

    options = options ?? {};
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createEventGrid(credential, subscriptionId ?? "", {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.topicTypes = _getTopicTypesOperations(this._client);
    this.namespaceTopicEventSubscriptions = _getNamespaceTopicEventSubscriptionsOperations(
      this._client,
    );
    this.domainTopicEventSubscriptions = _getDomainTopicEventSubscriptionsOperations(this._client);
    this.verifiedPartners = _getVerifiedPartnersOperations(this._client);
    this.topicSpaces = _getTopicSpacesOperations(this._client);
    this.extensionTopics = _getExtensionTopicsOperations(this._client);
    this.topics = _getTopicsOperations(this._client);
    this.systemTopics = _getSystemTopicsOperations(this._client);
    this.privateLinkResources = _getPrivateLinkResourcesOperations(this._client);
    this.privateEndpointConnections = _getPrivateEndpointConnectionsOperations(this._client);
    this.permissionBindings = _getPermissionBindingsOperations(this._client);
    this.networkSecurityPerimeterConfigurations =
      _getNetworkSecurityPerimeterConfigurationsOperations(this._client);
    this.partnerTopics = _getPartnerTopicsOperations(this._client);
    this.partnerRegistrations = _getPartnerRegistrationsOperations(this._client);
    this.partnerDestinations = _getPartnerDestinationsOperations(this._client);
    this.partnerConfigurations = _getPartnerConfigurationsOperations(this._client);
    this.namespaceTopics = _getNamespaceTopicsOperations(this._client);
    this.partnerTopicEventSubscriptions = _getPartnerTopicEventSubscriptionsOperations(
      this._client,
    );
    this.systemTopicEventSubscriptions = _getSystemTopicEventSubscriptionsOperations(this._client);
    this.domainEventSubscriptions = _getDomainEventSubscriptionsOperations(this._client);
    this.topicEventSubscriptions = _getTopicEventSubscriptionsOperations(this._client);
    this.eventSubscriptions = _getEventSubscriptionsOperations(this._client);
    this.domainTopics = _getDomainTopicsOperations(this._client);
    this.domains = _getDomainsOperations(this._client);
    this.clients = _getClientsOperations(this._client);
    this.clientGroups = _getClientGroupsOperations(this._client);
    this.partnerNamespaces = _getPartnerNamespacesOperations(this._client);
    this.channels = _getChannelsOperations(this._client);
    this.namespaces = _getNamespacesOperations(this._client);
    this.caCertificates = _getCaCertificatesOperations(this._client);
    this.operations = _getOperationsOperations(this._client);
  }

  /** The operation groups for topicTypes */
  public readonly topicTypes: TopicTypesOperations;
  /** The operation groups for namespaceTopicEventSubscriptions */
  public readonly namespaceTopicEventSubscriptions: NamespaceTopicEventSubscriptionsOperations;
  /** The operation groups for domainTopicEventSubscriptions */
  public readonly domainTopicEventSubscriptions: DomainTopicEventSubscriptionsOperations;
  /** The operation groups for verifiedPartners */
  public readonly verifiedPartners: VerifiedPartnersOperations;
  /** The operation groups for topicSpaces */
  public readonly topicSpaces: TopicSpacesOperations;
  /** The operation groups for extensionTopics */
  public readonly extensionTopics: ExtensionTopicsOperations;
  /** The operation groups for topics */
  public readonly topics: TopicsOperations;
  /** The operation groups for systemTopics */
  public readonly systemTopics: SystemTopicsOperations;
  /** The operation groups for privateLinkResources */
  public readonly privateLinkResources: PrivateLinkResourcesOperations;
  /** The operation groups for privateEndpointConnections */
  public readonly privateEndpointConnections: PrivateEndpointConnectionsOperations;
  /** The operation groups for permissionBindings */
  public readonly permissionBindings: PermissionBindingsOperations;
  /** The operation groups for networkSecurityPerimeterConfigurations */
  public readonly networkSecurityPerimeterConfigurations: NetworkSecurityPerimeterConfigurationsOperations;
  /** The operation groups for partnerTopics */
  public readonly partnerTopics: PartnerTopicsOperations;
  /** The operation groups for partnerRegistrations */
  public readonly partnerRegistrations: PartnerRegistrationsOperations;
  /** The operation groups for partnerDestinations */
  public readonly partnerDestinations: PartnerDestinationsOperations;
  /** The operation groups for partnerConfigurations */
  public readonly partnerConfigurations: PartnerConfigurationsOperations;
  /** The operation groups for namespaceTopics */
  public readonly namespaceTopics: NamespaceTopicsOperations;
  /** The operation groups for partnerTopicEventSubscriptions */
  public readonly partnerTopicEventSubscriptions: PartnerTopicEventSubscriptionsOperations;
  /** The operation groups for systemTopicEventSubscriptions */
  public readonly systemTopicEventSubscriptions: SystemTopicEventSubscriptionsOperations;
  /** The operation groups for domainEventSubscriptions */
  public readonly domainEventSubscriptions: DomainEventSubscriptionsOperations;
  /** The operation groups for topicEventSubscriptions */
  public readonly topicEventSubscriptions: TopicEventSubscriptionsOperations;
  /** The operation groups for eventSubscriptions */
  public readonly eventSubscriptions: EventSubscriptionsOperations;
  /** The operation groups for domainTopics */
  public readonly domainTopics: DomainTopicsOperations;
  /** The operation groups for domains */
  public readonly domains: DomainsOperations;
  /** The operation groups for clients */
  public readonly clients: ClientsOperations;
  /** The operation groups for clientGroups */
  public readonly clientGroups: ClientGroupsOperations;
  /** The operation groups for partnerNamespaces */
  public readonly partnerNamespaces: PartnerNamespacesOperations;
  /** The operation groups for channels */
  public readonly channels: ChannelsOperations;
  /** The operation groups for namespaces */
  public readonly namespaces: NamespacesOperations;
  /** The operation groups for caCertificates */
  public readonly caCertificates: CaCertificatesOperations;
  /** The operation groups for operations */
  public readonly operations: OperationsOperations;
}
