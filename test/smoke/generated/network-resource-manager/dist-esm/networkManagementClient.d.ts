import * as coreAuth from "@azure/core-auth";
import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import { ApplicationGateways, ApplicationSecurityGroups, AvailableDelegations, AvailableResourceGroupDelegations, AvailableServiceAliases, AzureFirewalls, AzureFirewallFqdnTags, BastionHosts, DdosCustomPolicies, DdosProtectionPlans, AvailableEndpointServices, ExpressRouteCircuitAuthorizations, ExpressRouteCircuitPeerings, ExpressRouteCircuitConnections, PeerExpressRouteCircuitConnections, ExpressRouteCircuits, ExpressRouteServiceProviders, ExpressRouteCrossConnections, ExpressRouteCrossConnectionPeerings, ExpressRoutePortsLocations, ExpressRoutePorts, ExpressRouteLinks, FirewallPolicies, FirewallPolicyRuleGroups, IpAllocations, IpGroups, LoadBalancers, LoadBalancerBackendAddressPools, LoadBalancerFrontendIPConfigurations, InboundNatRules, LoadBalancerLoadBalancingRules, LoadBalancerOutboundRules, LoadBalancerNetworkInterfaces, LoadBalancerProbes, NatGateways, NetworkInterfaces, NetworkInterfaceIPConfigurations, NetworkInterfaceLoadBalancers, NetworkInterfaceTapConfigurations, NetworkProfiles, NetworkSecurityGroups, SecurityRules, DefaultSecurityRules, NetworkVirtualAppliances, NetworkWatchers, PacketCaptures, ConnectionMonitors, FlowLogs, Operations, PrivateEndpoints, AvailablePrivateEndpointTypes, PrivateDnsZoneGroups, PrivateLinkServices, PublicIPAddresses, PublicIPPrefixes, RouteFilters, RouteFilterRules, RouteTables, Routes, SecurityPartnerProviders, BgpServiceCommunities, ServiceEndpointPolicies, ServiceEndpointPolicyDefinitions, ServiceTags, Usages, VirtualNetworks, Subnets, ResourceNavigationLinks, ServiceAssociationLinks, VirtualNetworkPeerings, VirtualNetworkGateways, VirtualNetworkGatewayConnections, LocalNetworkGateways, VirtualNetworkTaps, VirtualRouters, VirtualRouterPeerings, VirtualWans, VpnSites, VpnSiteLinks, VpnSitesConfiguration, VpnServerConfigurations, VirtualHubs, HubVirtualNetworkConnections, VpnGateways, VpnConnections, VpnSiteLinkConnections, VpnLinkConnections, P2SVpnGateways, VpnServerConfigurationsAssociatedWithVirtualWan, VirtualHubRouteTableV2S, ExpressRouteGateways, ExpressRouteConnections, HubRouteTables, WebApplicationFirewallPolicies } from "./operationsInterfaces";
import { NetworkManagementClientContext } from "./networkManagementClientContext";
import { NetworkManagementClientOptionalParams, BastionShareableLink, BastionShareableLinkListRequest, NetworkManagementClientPutBastionShareableLinkOptionalParams, NetworkManagementClientGetBastionShareableLinkOptionalParams, BastionActiveSession, NetworkManagementClientGetActiveSessionsOptionalParams, BastionSessionState, SessionIds, NetworkManagementClientDisconnectActiveSessionsOptionalParams, NetworkManagementClientDeleteBastionShareableLinkOptionalParams, NetworkManagementClientCheckDnsNameAvailabilityOptionalParams, NetworkManagementClientCheckDnsNameAvailabilityResponse, NetworkManagementClientSupportedSecurityProvidersOptionalParams, NetworkManagementClientSupportedSecurityProvidersResponse, VirtualWanVpnProfileParameters, NetworkManagementClientGeneratevirtualwanvpnserverconfigurationvpnprofileOptionalParams, NetworkManagementClientGeneratevirtualwanvpnserverconfigurationvpnprofileResponse } from "./models";
export declare class NetworkManagementClient extends NetworkManagementClientContext {
    /**
     * Initializes a new instance of the NetworkManagementClient class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param subscriptionId The subscription credentials which uniquely identify the Microsoft Azure
     *                       subscription. The subscription ID forms part of the URI for every service call.
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, subscriptionId: string, options?: NetworkManagementClientOptionalParams);
    /**
     * Creates a Bastion Shareable Links for all the VMs specified in the request.
     * @param resourceGroupName The name of the resource group.
     * @param bastionHostName The name of the Bastion Host.
     * @param bslRequest Post request for all the Bastion Shareable Link endpoints.
     * @param options The options parameters.
     */
    beginListPutBastionShareableLinkAndWait(resourceGroupName: string, bastionHostName: string, bslRequest: BastionShareableLinkListRequest, options?: NetworkManagementClientPutBastionShareableLinkOptionalParams): PagedAsyncIterableIterator<BastionShareableLink>;
    private putBastionShareableLinkPagingPage;
    private putBastionShareableLinkPagingAll;
    /**
     * Return the Bastion Shareable Links for all the VMs specified in the request.
     * @param resourceGroupName The name of the resource group.
     * @param bastionHostName The name of the Bastion Host.
     * @param bslRequest Post request for all the Bastion Shareable Link endpoints.
     * @param options The options parameters.
     */
    listBastionShareableLink(resourceGroupName: string, bastionHostName: string, bslRequest: BastionShareableLinkListRequest, options?: NetworkManagementClientGetBastionShareableLinkOptionalParams): PagedAsyncIterableIterator<BastionShareableLink>;
    private getBastionShareableLinkPagingPage;
    private getBastionShareableLinkPagingAll;
    /**
     * Returns the list of currently active sessions on the Bastion.
     * @param resourceGroupName The name of the resource group.
     * @param bastionHostName The name of the Bastion Host.
     * @param options The options parameters.
     */
    beginListActiveSessionsAndWait(resourceGroupName: string, bastionHostName: string, options?: NetworkManagementClientGetActiveSessionsOptionalParams): PagedAsyncIterableIterator<BastionActiveSession>;
    private getActiveSessionsPagingPage;
    private getActiveSessionsPagingAll;
    /**
     * Returns the list of currently active sessions on the Bastion.
     * @param resourceGroupName The name of the resource group.
     * @param bastionHostName The name of the Bastion Host.
     * @param sessionIds The list of sessionids to disconnect.
     * @param options The options parameters.
     */
    listDisconnectActiveSessions(resourceGroupName: string, bastionHostName: string, sessionIds: SessionIds, options?: NetworkManagementClientDisconnectActiveSessionsOptionalParams): PagedAsyncIterableIterator<BastionSessionState>;
    private disconnectActiveSessionsPagingPage;
    private disconnectActiveSessionsPagingAll;
    /**
     * Creates a Bastion Shareable Links for all the VMs specified in the request.
     * @param resourceGroupName The name of the resource group.
     * @param bastionHostName The name of the Bastion Host.
     * @param bslRequest Post request for all the Bastion Shareable Link endpoints.
     * @param options The options parameters.
     */
    private _putBastionShareableLink;
    /**
     * Deletes the Bastion Shareable Links for all the VMs specified in the request.
     * @param resourceGroupName The name of the resource group.
     * @param bastionHostName The name of the Bastion Host.
     * @param bslRequest Post request for all the Bastion Shareable Link endpoints.
     * @param options The options parameters.
     */
    beginDeleteBastionShareableLink(resourceGroupName: string, bastionHostName: string, bslRequest: BastionShareableLinkListRequest, options?: NetworkManagementClientDeleteBastionShareableLinkOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the Bastion Shareable Links for all the VMs specified in the request.
     * @param resourceGroupName The name of the resource group.
     * @param bastionHostName The name of the Bastion Host.
     * @param bslRequest Post request for all the Bastion Shareable Link endpoints.
     * @param options The options parameters.
     */
    beginDeleteBastionShareableLinkAndWait(resourceGroupName: string, bastionHostName: string, bslRequest: BastionShareableLinkListRequest, options?: NetworkManagementClientDeleteBastionShareableLinkOptionalParams): Promise<void>;
    /**
     * Return the Bastion Shareable Links for all the VMs specified in the request.
     * @param resourceGroupName The name of the resource group.
     * @param bastionHostName The name of the Bastion Host.
     * @param bslRequest Post request for all the Bastion Shareable Link endpoints.
     * @param options The options parameters.
     */
    private _getBastionShareableLink;
    /**
     * Returns the list of currently active sessions on the Bastion.
     * @param resourceGroupName The name of the resource group.
     * @param bastionHostName The name of the Bastion Host.
     * @param options The options parameters.
     */
    private _getActiveSessions;
    /**
     * Returns the list of currently active sessions on the Bastion.
     * @param resourceGroupName The name of the resource group.
     * @param bastionHostName The name of the Bastion Host.
     * @param sessionIds The list of sessionids to disconnect.
     * @param options The options parameters.
     */
    private _disconnectActiveSessions;
    /**
     * Checks whether a domain name in the cloudapp.azure.com zone is available for use.
     * @param location The location of the domain name.
     * @param domainNameLabel The domain name to be verified. It must conform to the following regular
     *                        expression: ^[a-z][a-z0-9-]{1,61}[a-z0-9]$.
     * @param options The options parameters.
     */
    checkDnsNameAvailability(location: string, domainNameLabel: string, options?: NetworkManagementClientCheckDnsNameAvailabilityOptionalParams): Promise<NetworkManagementClientCheckDnsNameAvailabilityResponse>;
    /**
     * Gives the supported security providers for the virtual wan.
     * @param resourceGroupName The resource group name.
     * @param virtualWANName The name of the VirtualWAN for which supported security providers are needed.
     * @param options The options parameters.
     */
    supportedSecurityProviders(resourceGroupName: string, virtualWANName: string, options?: NetworkManagementClientSupportedSecurityProvidersOptionalParams): Promise<NetworkManagementClientSupportedSecurityProvidersResponse>;
    /**
     * Generates a unique VPN profile for P2S clients for VirtualWan and associated VpnServerConfiguration
     * combination in the specified resource group.
     * @param resourceGroupName The resource group name.
     * @param virtualWANName The name of the VirtualWAN whose associated VpnServerConfigurations is needed.
     * @param vpnClientParams Parameters supplied to the generate VirtualWan VPN profile generation
     *                        operation.
     * @param options The options parameters.
     */
    beginGeneratevirtualwanvpnserverconfigurationvpnprofile(resourceGroupName: string, virtualWANName: string, vpnClientParams: VirtualWanVpnProfileParameters, options?: NetworkManagementClientGeneratevirtualwanvpnserverconfigurationvpnprofileOptionalParams): Promise<PollerLike<PollOperationState<NetworkManagementClientGeneratevirtualwanvpnserverconfigurationvpnprofileResponse>, NetworkManagementClientGeneratevirtualwanvpnserverconfigurationvpnprofileResponse>>;
    /**
     * Generates a unique VPN profile for P2S clients for VirtualWan and associated VpnServerConfiguration
     * combination in the specified resource group.
     * @param resourceGroupName The resource group name.
     * @param virtualWANName The name of the VirtualWAN whose associated VpnServerConfigurations is needed.
     * @param vpnClientParams Parameters supplied to the generate VirtualWan VPN profile generation
     *                        operation.
     * @param options The options parameters.
     */
    beginGeneratevirtualwanvpnserverconfigurationvpnprofileAndWait(resourceGroupName: string, virtualWANName: string, vpnClientParams: VirtualWanVpnProfileParameters, options?: NetworkManagementClientGeneratevirtualwanvpnserverconfigurationvpnprofileOptionalParams): Promise<NetworkManagementClientGeneratevirtualwanvpnserverconfigurationvpnprofileResponse>;
    /**
     * PutBastionShareableLinkNext
     * @param resourceGroupName The name of the resource group.
     * @param bastionHostName The name of the Bastion Host.
     * @param bslRequest Post request for all the Bastion Shareable Link endpoints.
     * @param nextLink The nextLink from the previous successful call to the PutBastionShareableLink
     *                 method.
     * @param options The options parameters.
     */
    private _putBastionShareableLinkNext;
    /**
     * GetBastionShareableLinkNext
     * @param resourceGroupName The name of the resource group.
     * @param bastionHostName The name of the Bastion Host.
     * @param bslRequest Post request for all the Bastion Shareable Link endpoints.
     * @param nextLink The nextLink from the previous successful call to the GetBastionShareableLink
     *                 method.
     * @param options The options parameters.
     */
    private _getBastionShareableLinkNext;
    /**
     * GetActiveSessionsNext
     * @param resourceGroupName The name of the resource group.
     * @param bastionHostName The name of the Bastion Host.
     * @param nextLink The nextLink from the previous successful call to the GetActiveSessions method.
     * @param options The options parameters.
     */
    private _getActiveSessionsNext;
    /**
     * DisconnectActiveSessionsNext
     * @param resourceGroupName The name of the resource group.
     * @param bastionHostName The name of the Bastion Host.
     * @param sessionIds The list of sessionids to disconnect.
     * @param nextLink The nextLink from the previous successful call to the DisconnectActiveSessions
     *                 method.
     * @param options The options parameters.
     */
    private _disconnectActiveSessionsNext;
    applicationGateways: ApplicationGateways;
    applicationSecurityGroups: ApplicationSecurityGroups;
    availableDelegations: AvailableDelegations;
    availableResourceGroupDelegations: AvailableResourceGroupDelegations;
    availableServiceAliases: AvailableServiceAliases;
    azureFirewalls: AzureFirewalls;
    azureFirewallFqdnTags: AzureFirewallFqdnTags;
    bastionHosts: BastionHosts;
    ddosCustomPolicies: DdosCustomPolicies;
    ddosProtectionPlans: DdosProtectionPlans;
    availableEndpointServices: AvailableEndpointServices;
    expressRouteCircuitAuthorizations: ExpressRouteCircuitAuthorizations;
    expressRouteCircuitPeerings: ExpressRouteCircuitPeerings;
    expressRouteCircuitConnections: ExpressRouteCircuitConnections;
    peerExpressRouteCircuitConnections: PeerExpressRouteCircuitConnections;
    expressRouteCircuits: ExpressRouteCircuits;
    expressRouteServiceProviders: ExpressRouteServiceProviders;
    expressRouteCrossConnections: ExpressRouteCrossConnections;
    expressRouteCrossConnectionPeerings: ExpressRouteCrossConnectionPeerings;
    expressRoutePortsLocations: ExpressRoutePortsLocations;
    expressRoutePorts: ExpressRoutePorts;
    expressRouteLinks: ExpressRouteLinks;
    firewallPolicies: FirewallPolicies;
    firewallPolicyRuleGroups: FirewallPolicyRuleGroups;
    ipAllocations: IpAllocations;
    ipGroups: IpGroups;
    loadBalancers: LoadBalancers;
    loadBalancerBackendAddressPools: LoadBalancerBackendAddressPools;
    loadBalancerFrontendIPConfigurations: LoadBalancerFrontendIPConfigurations;
    inboundNatRules: InboundNatRules;
    loadBalancerLoadBalancingRules: LoadBalancerLoadBalancingRules;
    loadBalancerOutboundRules: LoadBalancerOutboundRules;
    loadBalancerNetworkInterfaces: LoadBalancerNetworkInterfaces;
    loadBalancerProbes: LoadBalancerProbes;
    natGateways: NatGateways;
    networkInterfaces: NetworkInterfaces;
    networkInterfaceIPConfigurations: NetworkInterfaceIPConfigurations;
    networkInterfaceLoadBalancers: NetworkInterfaceLoadBalancers;
    networkInterfaceTapConfigurations: NetworkInterfaceTapConfigurations;
    networkProfiles: NetworkProfiles;
    networkSecurityGroups: NetworkSecurityGroups;
    securityRules: SecurityRules;
    defaultSecurityRules: DefaultSecurityRules;
    networkVirtualAppliances: NetworkVirtualAppliances;
    networkWatchers: NetworkWatchers;
    packetCaptures: PacketCaptures;
    connectionMonitors: ConnectionMonitors;
    flowLogs: FlowLogs;
    operations: Operations;
    privateEndpoints: PrivateEndpoints;
    availablePrivateEndpointTypes: AvailablePrivateEndpointTypes;
    privateDnsZoneGroups: PrivateDnsZoneGroups;
    privateLinkServices: PrivateLinkServices;
    publicIPAddresses: PublicIPAddresses;
    publicIPPrefixes: PublicIPPrefixes;
    routeFilters: RouteFilters;
    routeFilterRules: RouteFilterRules;
    routeTables: RouteTables;
    routes: Routes;
    securityPartnerProviders: SecurityPartnerProviders;
    bgpServiceCommunities: BgpServiceCommunities;
    serviceEndpointPolicies: ServiceEndpointPolicies;
    serviceEndpointPolicyDefinitions: ServiceEndpointPolicyDefinitions;
    serviceTags: ServiceTags;
    usages: Usages;
    virtualNetworks: VirtualNetworks;
    subnets: Subnets;
    resourceNavigationLinks: ResourceNavigationLinks;
    serviceAssociationLinks: ServiceAssociationLinks;
    virtualNetworkPeerings: VirtualNetworkPeerings;
    virtualNetworkGateways: VirtualNetworkGateways;
    virtualNetworkGatewayConnections: VirtualNetworkGatewayConnections;
    localNetworkGateways: LocalNetworkGateways;
    virtualNetworkTaps: VirtualNetworkTaps;
    virtualRouters: VirtualRouters;
    virtualRouterPeerings: VirtualRouterPeerings;
    virtualWans: VirtualWans;
    vpnSites: VpnSites;
    vpnSiteLinks: VpnSiteLinks;
    vpnSitesConfiguration: VpnSitesConfiguration;
    vpnServerConfigurations: VpnServerConfigurations;
    virtualHubs: VirtualHubs;
    hubVirtualNetworkConnections: HubVirtualNetworkConnections;
    vpnGateways: VpnGateways;
    vpnConnections: VpnConnections;
    vpnSiteLinkConnections: VpnSiteLinkConnections;
    vpnLinkConnections: VpnLinkConnections;
    p2SVpnGateways: P2SVpnGateways;
    vpnServerConfigurationsAssociatedWithVirtualWan: VpnServerConfigurationsAssociatedWithVirtualWan;
    virtualHubRouteTableV2S: VirtualHubRouteTableV2S;
    expressRouteGateways: ExpressRouteGateways;
    expressRouteConnections: ExpressRouteConnections;
    hubRouteTables: HubRouteTables;
    webApplicationFirewallPolicies: WebApplicationFirewallPolicies;
}
//# sourceMappingURL=networkManagementClient.d.ts.map