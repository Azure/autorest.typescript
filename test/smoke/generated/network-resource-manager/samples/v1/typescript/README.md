# A generated TypeScript SDK samples for @msinternal/network-resource-manager

These sample programs show how to use the TypeScript client libraries for @msinternal/network-resource-manager in some common scenarios.

| **File Name**           | **Description**                      |
| ----------------------- | ------------------------------------ |
| [deleteApplicationGateway.ts][deleteApplicationGateway] | Deletes the specified application gateway. |  
| [getApplicationGateway.ts][getApplicationGateway] | Gets the specified application gateway. |  
| [createApplicationGateway.ts][createApplicationGateway] | Creates or updates the specified application gateway. |  
| [updateApplicationGatewayTags.ts][updateApplicationGatewayTags] | Updates the specified application gateway tags. |  
| [listsAllApplicationGatewaysInAResourceGroup.ts][listsAllApplicationGatewaysInAResourceGroup] | Lists all application gateways in a resource group. |  
| [listsAllApplicationGatewaysInASubscription.ts][listsAllApplicationGatewaysInASubscription] | Gets all the application gateways in a subscription. |  
| [startApplicationGateway.ts][startApplicationGateway] | Starts the specified application gateway. |  
| [stopApplicationGateway.ts][stopApplicationGateway] | Stops the specified application gateway in a resource group. |  
| [getBackendHealth.ts][getBackendHealth] | Gets the backend health of the specified application gateway in a resource group. |  
| [testBackendHealth.ts][testBackendHealth] | Gets the backend health for given combination of backend pool and http setting of the specified application gateway in a resource group. |  
| [getAvailableServerVariables.ts][getAvailableServerVariables] | Lists all available server variables. |  
| [getAvailableRequestHeaders.ts][getAvailableRequestHeaders] | Lists all available request headers. |  
| [getAvailableResponseHeaders.ts][getAvailableResponseHeaders] | Lists all available response headers. |  
| [getAvailableWafRuleSets.ts][getAvailableWafRuleSets] | Lists all available web application firewall rule sets. |  
| [getAvailableSslOptions.ts][getAvailableSslOptions] | Lists available Ssl options for configuring Ssl policy. |  
| [getAvailableSslPredefinedPolicies.ts][getAvailableSslPredefinedPolicies] | Lists all SSL predefined policies for configuring Ssl policy. |  
| [getAvailableSslPredefinedPolicyByName.ts][getAvailableSslPredefinedPolicyByName] | Gets Ssl predefined policy with the specified policy name. |  
| [deleteApplicationSecurityGroup.ts][deleteApplicationSecurityGroup] | Deletes the specified application security group. |  
| [getApplicationSecurityGroup.ts][getApplicationSecurityGroup] | Gets information about the specified application security group. |  
| [createApplicationSecurityGroup.ts][createApplicationSecurityGroup] | Creates or updates an application security group. |  
| [updateApplicationSecurityGroupTags.ts][updateApplicationSecurityGroupTags] | Updates an application security group's tags. |  
| [listAllApplicationSecurityGroups.ts][listAllApplicationSecurityGroups] | Gets all application security groups in a subscription. |  
| [listLoadBalancersInResourceGroup.ts][listLoadBalancersInResourceGroup] | Gets all the application security groups in a resource group. |  
| [getAvailableDelegations.ts][getAvailableDelegations] | Gets all of the available subnet delegations for this subscription in this region. |  
| [getAvailableDelegationsInTheResourceGroup.ts][getAvailableDelegationsInTheResourceGroup] | Gets all of the available subnet delegations for this resource group in this region. |  
| [getAvailableServiceAliases.ts][getAvailableServiceAliases] | Gets all available service aliases for this subscription in this region. |  
| [getAvailableServiceAliasesInTheResourceGroup.ts][getAvailableServiceAliasesInTheResourceGroup] | Gets all available service aliases for this resource group in this region. |  
| [deleteAzureFirewall.ts][deleteAzureFirewall] | Deletes the specified Azure Firewall. |  
| [getAzureFirewall.ts][getAzureFirewall] | Gets the specified Azure Firewall. |  
| [getAzureFirewallWithAdditionalProperties.ts][getAzureFirewallWithAdditionalProperties] | Gets the specified Azure Firewall. |  
| [getAzureFirewallWithIpGroups.ts][getAzureFirewallWithIpGroups] | Gets the specified Azure Firewall. |  
| [getAzureFirewallWithZones.ts][getAzureFirewallWithZones] | Gets the specified Azure Firewall. |  
| [getAzureFirewallWithManagementSubnet.ts][getAzureFirewallWithManagementSubnet] | Gets the specified Azure Firewall. |  
| [createAzureFirewall.ts][createAzureFirewall] | Creates or updates the specified Azure Firewall. |  
| [createAzureFirewallWithAdditionalProperties.ts][createAzureFirewallWithAdditionalProperties] | Creates or updates the specified Azure Firewall. |  
| [createAzureFirewallWithIpGroups.ts][createAzureFirewallWithIpGroups] | Creates or updates the specified Azure Firewall. |  
| [createAzureFirewallWithZones.ts][createAzureFirewallWithZones] | Creates or updates the specified Azure Firewall. |  
| [createAzureFirewallWithManagementSubnet.ts][createAzureFirewallWithManagementSubnet] | Creates or updates the specified Azure Firewall. |  
| [createAzureFirewallInVirtualHub.ts][createAzureFirewallInVirtualHub] | Creates or updates the specified Azure Firewall. |  
| [updateAzureFirewallTags.ts][updateAzureFirewallTags] | Updates tags of an Azure Firewall resource. |  
| [listAllAzureFirewallsForAGivenResourceGroup.ts][listAllAzureFirewallsForAGivenResourceGroup] | Lists all Azure Firewalls in a resource group. |  
| [listAllAzureFirewallsForAGivenSubscription.ts][listAllAzureFirewallsForAGivenSubscription] | Gets all the Azure Firewalls in a subscription. |  
| [listAllAzureFirewallFqdnTagsForAGivenSubscription.ts][listAllAzureFirewallFqdnTagsForAGivenSubscription] | Gets all the Azure Firewall FQDN Tags in a subscription. |  
| [deleteBastionHost.ts][deleteBastionHost] | Deletes the specified Bastion Host. |  
| [getBastionHost.ts][getBastionHost] | Gets the specified Bastion Host. |  
| [createBastionHost.ts][createBastionHost] | Creates or updates the specified Bastion Host. |  
| [listAllBastionHostsForAGivenSubscription.ts][listAllBastionHostsForAGivenSubscription] | Lists all Bastion Hosts in a subscription. |  
| [listAllBastionHostsForAGivenResourceGroup.ts][listAllBastionHostsForAGivenResourceGroup] | Lists all Bastion Hosts in a resource group. |  
| [createBastionShareableLinksForTheRequestVMs.ts][createBastionShareableLinksForTheRequestVMs] | Creates a Bastion Shareable Links for all the VMs specified in the request. |  
| [deleteBastionShareableLinksForTheRequestVMs.ts][deleteBastionShareableLinksForTheRequestVMs] | Deletes the Bastion Shareable Links for all the VMs specified in the request. |  
| [returnsTheBastionShareableLinksForTheRequestVMs.ts][returnsTheBastionShareableLinksForTheRequestVMs] | Return the Bastion Shareable Links for all the VMs specified in the request. |  
| [returnsAListOfCurrentlyActiveSessionsOnTheBastion.ts][returnsAListOfCurrentlyActiveSessionsOnTheBastion] | Returns the list of currently active sessions on the Bastion. |  
| [deletesTheSpecifiedActiveSession.ts][deletesTheSpecifiedActiveSession] | Returns the list of currently active sessions on the Bastion. |  
| [checkDnsNameAvailability.ts][checkDnsNameAvailability] | Checks whether a domain name in the cloudapp.azure.com zone is available for use. |  
| [supportedSecurityProviders.ts][supportedSecurityProviders] | Gives the supported security providers for the virtual wan. |  
| [generateVirtualWanVpnServerConfigurationVpnProfile.ts][generateVirtualWanVpnServerConfigurationVpnProfile] | Generates a unique VPN profile for P2S clients for VirtualWan and associated VpnServerConfiguration combination in the specified resource group. |  
| [deleteDDoSCustomPolicy.ts][deleteDDoSCustomPolicy] | Deletes the specified DDoS custom policy. |  
| [getDDoSCustomPolicy.ts][getDDoSCustomPolicy] | Gets information about the specified DDoS custom policy. |  
| [createDDoSCustomPolicy.ts][createDDoSCustomPolicy] | Creates or updates a DDoS custom policy. |  
| [dDoSCustomPolicyUpdateTags.ts][dDoSCustomPolicyUpdateTags] | Update a DDoS custom policy tags. |  
| [deleteDDoSProtectionPlan.ts][deleteDDoSProtectionPlan] | Deletes the specified DDoS protection plan. |  
| [getDDoSProtectionPlan.ts][getDDoSProtectionPlan] | Gets information about the specified DDoS protection plan. |  
| [createDDoSProtectionPlan.ts][createDDoSProtectionPlan] | Creates or updates a DDoS protection plan. |  
| [dDoSProtectionPlanUpdateTags.ts][dDoSProtectionPlanUpdateTags] | Update a DDoS protection plan tags. |  
| [listAllDDoSProtectionPlans.ts][listAllDDoSProtectionPlans] | Gets all DDoS protection plans in a subscription. |  
| [listDDoSProtectionPlansInResourceGroup.ts][listDDoSProtectionPlansInResourceGroup] | Gets all the DDoS protection plans in a resource group. |  
| [endpointServicesList.ts][endpointServicesList] | List what values of endpoint services are available for use. |  
| [deleteExpressRouteCircuitAuthorization.ts][deleteExpressRouteCircuitAuthorization] | Deletes the specified authorization from the specified express route circuit. |  
| [getExpressRouteCircuitAuthorization.ts][getExpressRouteCircuitAuthorization] | Gets the specified authorization from the specified express route circuit. |  
| [createExpressRouteCircuitAuthorization.ts][createExpressRouteCircuitAuthorization] | Creates or updates an authorization in the specified express route circuit. |  
| [listExpressRouteCircuitAuthorization.ts][listExpressRouteCircuitAuthorization] | Gets all authorizations in an express route circuit. |  
| [deleteExpressRouteCircuitPeerings.ts][deleteExpressRouteCircuitPeerings] | Deletes the specified peering from the specified express route circuit. |  
| [getExpressRouteCircuitPeering.ts][getExpressRouteCircuitPeering] | Gets the specified peering for the express route circuit. |  
| [createExpressRouteCircuitPeerings.ts][createExpressRouteCircuitPeerings] | Creates or updates a peering in the specified express route circuits. |  
| [listExpressRouteCircuitPeerings.ts][listExpressRouteCircuitPeerings] | Gets all peerings in a specified express route circuit. |  
| [deleteExpressRouteCircuit.ts][deleteExpressRouteCircuit] | Deletes the specified Express Route Circuit Connection from the specified express route circuit. |  
| [expressRouteCircuitConnectionGet.ts][expressRouteCircuitConnectionGet] | Gets the specified Express Route Circuit Connection from the specified express route circuit. |  
| [expressRouteCircuitConnectionCreate.ts][expressRouteCircuitConnectionCreate] | Creates or updates a Express Route Circuit Connection in the specified express route circuits. |  
| [listExpressRouteCircuitConnection.ts][listExpressRouteCircuitConnection] | Gets all global reach connections associated with a private peering in an express route circuit. |  
| [peerExpressRouteCircuitConnectionGet.ts][peerExpressRouteCircuitConnectionGet] | Gets the specified Peer Express Route Circuit Connection from the specified express route circuit. |  
| [listPeerExpressRouteCircuitConnection.ts][listPeerExpressRouteCircuitConnection] | Gets all global reach peer connections associated with a private peering in an express route circuit. |  
| [deleteExpressRouteCircuit.ts][deleteExpressRouteCircuit] | Deletes the specified express route circuit. |  
| [getExpressRouteCircuit.ts][getExpressRouteCircuit] | Gets information about the specified express route circuit. |  
| [createExpressRouteCircuit.ts][createExpressRouteCircuit] | Creates or updates an express route circuit. |  
| [createExpressRouteCircuitOnExpressRoutePort.ts][createExpressRouteCircuitOnExpressRoutePort] | Creates or updates an express route circuit. |  
| [updateExpressRouteCircuitTags.ts][updateExpressRouteCircuitTags] | Updates an express route circuit tags. |  
| [listArpTable.ts][listArpTable] | Gets the currently advertised ARP table associated with the express route circuit in a resource group. |  
| [listRouteTables.ts][listRouteTables] | Gets the currently advertised routes table associated with the express route circuit in a resource group. |  
| [listRouteTableSummary.ts][listRouteTableSummary] | Gets the currently advertised routes table summary associated with the express route circuit in a resource group. |  
| [getExpressRouteCircuitTrafficStats.ts][getExpressRouteCircuitTrafficStats] | Gets all the stats from an express route circuit in a resource group. |  
| [getExpressRouteCircuitPeeringTrafficStats.ts][getExpressRouteCircuitPeeringTrafficStats] | Gets all stats from an express route circuit in a resource group. |  
| [listExpressRouteCircuitsInAResourceGroup.ts][listExpressRouteCircuitsInAResourceGroup] | Gets all the express route circuits in a resource group. |  
| [listExpressRouteCircuitsInASubscription.ts][listExpressRouteCircuitsInASubscription] | Gets all the express route circuits in a subscription. |  
| [listExpressRouteProviders.ts][listExpressRouteProviders] | Gets all the available express route service providers. |  
| [expressRouteCrossConnectionList.ts][expressRouteCrossConnectionList] | Retrieves all the ExpressRouteCrossConnections in a subscription. |  
| [expressRouteCrossConnectionListByResourceGroup.ts][expressRouteCrossConnectionListByResourceGroup] | Retrieves all the ExpressRouteCrossConnections in a resource group. |  
| [getExpressRouteCrossConnection.ts][getExpressRouteCrossConnection] | Gets details about the specified ExpressRouteCrossConnection. |  
| [updateExpressRouteCrossConnection.ts][updateExpressRouteCrossConnection] | Update the specified ExpressRouteCrossConnection. |  
| [updateExpressRouteCrossConnectionTags.ts][updateExpressRouteCrossConnectionTags] | Updates an express route cross connection tags. |  
| [getExpressRouteCrossConnectionsArpTable.ts][getExpressRouteCrossConnectionsArpTable] | Gets the currently advertised ARP table associated with the express route cross connection in a resource group. |  
| [getExpressRouteCrossConnectionsRouteTableSummary.ts][getExpressRouteCrossConnectionsRouteTableSummary] | Gets the route table summary associated with the express route cross connection in a resource group. |  
| [getExpressRouteCrossConnectionsRouteTable.ts][getExpressRouteCrossConnectionsRouteTable] | Gets the currently advertised routes table associated with the express route cross connection in a resource group. |  
| [expressRouteCrossConnectionBgpPeeringList.ts][expressRouteCrossConnectionBgpPeeringList] | Gets all peerings in a specified ExpressRouteCrossConnection. |  
| [deleteExpressRouteCrossConnectionBgpPeering.ts][deleteExpressRouteCrossConnectionBgpPeering] | Deletes the specified peering from the ExpressRouteCrossConnection. |  
| [getExpressRouteCrossConnectionBgpPeering.ts][getExpressRouteCrossConnectionBgpPeering] | Gets the specified peering for the ExpressRouteCrossConnection. |  
| [expressRouteCrossConnectionBgpPeeringCreate.ts][expressRouteCrossConnectionBgpPeeringCreate] | Creates or updates a peering in the specified ExpressRouteCrossConnection. |  
| [expressRoutePortsLocationList.ts][expressRoutePortsLocationList] | Retrieves all ExpressRoutePort peering locations. Does not return available bandwidths for each location. Available bandwidths can only be obtained when retrieving a specific peering location. |  
| [expressRoutePortsLocationGet.ts][expressRoutePortsLocationGet] | Retrieves a single ExpressRoutePort peering location, including the list of available bandwidths available at said peering location. |  
| [expressRoutePortDelete.ts][expressRoutePortDelete] | Deletes the specified ExpressRoutePort resource. |  
| [expressRoutePortGet.ts][expressRoutePortGet] | Retrieves the requested ExpressRoutePort resource. |  
| [expressRoutePortCreate.ts][expressRoutePortCreate] | Creates or updates the specified ExpressRoutePort resource. |  
| [expressRoutePortUpdateLink.ts][expressRoutePortUpdateLink] | Creates or updates the specified ExpressRoutePort resource. |  
| [expressRoutePortUpdateTags.ts][expressRoutePortUpdateTags] | Update ExpressRoutePort tags. |  
| [expressRoutePortListByResourceGroup.ts][expressRoutePortListByResourceGroup] | List all the ExpressRoutePort resources in the specified resource group. |  
| [expressRoutePortList.ts][expressRoutePortList] | List all the ExpressRoutePort resources in the specified subscription. |  
| [expressRouteLinkGet.ts][expressRouteLinkGet] | Retrieves the specified ExpressRouteLink resource. |  
| [expressRouteLinkGet.ts][expressRouteLinkGet] | Retrieve the ExpressRouteLink sub-resources of the specified ExpressRoutePort resource. |  
| [deleteFirewallPolicy.ts][deleteFirewallPolicy] | Deletes the specified Firewall Policy. |  
| [getFirewallPolicy.ts][getFirewallPolicy] | Gets the specified Firewall Policy. |  
| [createFirewallPolicy.ts][createFirewallPolicy] | Creates or updates the specified Firewall Policy. |  
| [listAllFirewallPoliciesForAGivenResourceGroup.ts][listAllFirewallPoliciesForAGivenResourceGroup] | Lists all Firewall Policies in a resource group. |  
| [listAllFirewallPoliciesForAGivenSubscription.ts][listAllFirewallPoliciesForAGivenSubscription] | Gets all the Firewall Policies in a subscription. |  
| [deleteFirewallPolicyRuleGroup.ts][deleteFirewallPolicyRuleGroup] | Deletes the specified FirewallPolicyRuleGroup. |  
| [getFirewallPolicyRuleGroup.ts][getFirewallPolicyRuleGroup] | Gets the specified FirewallPolicyRuleGroup. |  
| [getFirewallPolicyRuleGroupWithIpGroups.ts][getFirewallPolicyRuleGroupWithIpGroups] | Gets the specified FirewallPolicyRuleGroup. |  
| [createFirewallPolicyRuleGroup.ts][createFirewallPolicyRuleGroup] | Creates or updates the specified FirewallPolicyRuleGroup. |  
| [createFirewallPolicyRuleGroupWithIpGroups.ts][createFirewallPolicyRuleGroupWithIpGroups] | Creates or updates the specified FirewallPolicyRuleGroup. |  
| [listAllFirewallPolicyRuleGroupsForAGivenFirewallPolicy.ts][listAllFirewallPolicyRuleGroupsForAGivenFirewallPolicy] | Lists all FirewallPolicyRuleGroups in a FirewallPolicy resource. |  
| [listAllFirewallPolicyRuleGroupsWithIpGroupsForAGivenFirewallPolicy.ts][listAllFirewallPolicyRuleGroupsWithIpGroupsForAGivenFirewallPolicy] | Lists all FirewallPolicyRuleGroups in a FirewallPolicy resource. |  
| [deleteIpAllocation.ts][deleteIpAllocation] | Deletes the specified IpAllocation. |  
| [getIpAllocation.ts][getIpAllocation] | Gets the specified IpAllocation by resource group. |  
| [createIpAllocation.ts][createIpAllocation] | Creates or updates an IpAllocation in the specified resource group. |  
| [updateVirtualNetworkTags.ts][updateVirtualNetworkTags] | Updates a IpAllocation tags. |  
| [listAllIpAllocations.ts][listAllIpAllocations] | Gets all IpAllocations in a subscription. |  
| [listIpAllocationsInResourceGroup.ts][listIpAllocationsInResourceGroup] | Gets all IpAllocations in a resource group. |  
| [getIpGroups.ts][getIpGroups] | Gets the specified ipGroups. |  
| [createOrUpdateIpGroups.ts][createOrUpdateIpGroups] | Creates or updates an ipGroups in a specified resource group. |  
| [updateIpGroups.ts][updateIpGroups] | Updates tags of an IpGroups resource. |  
| [deleteIpGroups.ts][deleteIpGroups] | Deletes the specified ipGroups. |  
| [listByResourceGroupIpGroups.ts][listByResourceGroupIpGroups] | Gets all IpGroups in a resource group. |  
| [listIpGroups.ts][listIpGroups] | Gets all IpGroups in a subscription. |  
| [deleteLoadBalancer.ts][deleteLoadBalancer] | Deletes the specified load balancer. |  
| [getLoadBalancer.ts][getLoadBalancer] | Gets the specified load balancer. |  
| [createLoadBalancer.ts][createLoadBalancer] | Creates or updates a load balancer. |  
| [createLoadBalancerWithFrontendIpInZone1.ts][createLoadBalancerWithFrontendIpInZone1] | Creates or updates a load balancer. |  
| [createLoadBalancerWithStandardSku.ts][createLoadBalancerWithStandardSku] | Creates or updates a load balancer. |  
| [createLoadBalancerWithInboundNatPool.ts][createLoadBalancerWithInboundNatPool] | Creates or updates a load balancer. |  
| [createLoadBalancerWithOutboundRules.ts][createLoadBalancerWithOutboundRules] | Creates or updates a load balancer. |  
| [updateLoadBalancerTags.ts][updateLoadBalancerTags] | Updates a load balancer tags. |  
| [listAllLoadBalancers.ts][listAllLoadBalancers] | Gets all the load balancers in a subscription. |  
| [listLoadBalancersInResourceGroup.ts][listLoadBalancersInResourceGroup] | Gets all the load balancers in a resource group. |  
| [loadBalancerWithBackendAddressPoolContainingBackendAddresses.ts][loadBalancerWithBackendAddressPoolContainingBackendAddresses] | Gets all the load balancer backed address pools. |  
| [loadBalancerBackendAddressPoolList.ts][loadBalancerBackendAddressPoolList] | Gets all the load balancer backed address pools. |  
| [loadBalancerWithBackendAddressPoolWithBackendAddresses.ts][loadBalancerWithBackendAddressPoolWithBackendAddresses] | Gets load balancer backend address pool. |  
| [loadBalancerBackendAddressPoolGet.ts][loadBalancerBackendAddressPoolGet] | Gets load balancer backend address pool. |  
| [updateLoadBalancerBackendPoolWithBackendAddressesContainingVirtualNetworkAndIpAddress.ts][updateLoadBalancerBackendPoolWithBackendAddressesContainingVirtualNetworkAndIpAddress] | Creates or updates a load balancer backend address pool. |  
| [updateLoadBalancerBackendPoolWithBackendAddressesContainingVirtualNetworkAndIpAddressDefinedInNetworkInterfaces.ts][updateLoadBalancerBackendPoolWithBackendAddressesContainingVirtualNetworkAndIpAddressDefinedInNetworkInterfaces] | Creates or updates a load balancer backend address pool. |  
| [backendAddressPoolDelete.ts][backendAddressPoolDelete] | Deletes the specified load balancer backend address pool. |  
| [loadBalancerFrontendIPConfigurationList.ts][loadBalancerFrontendIPConfigurationList] | Gets all the load balancer frontend IP configurations. |  
| [loadBalancerFrontendIPConfigurationGet.ts][loadBalancerFrontendIPConfigurationGet] | Gets load balancer frontend IP configuration. |  
| [inboundNatRuleList.ts][inboundNatRuleList] | Gets all the inbound nat rules in a load balancer. |  
| [inboundNatRuleDelete.ts][inboundNatRuleDelete] | Deletes the specified load balancer inbound nat rule. |  
| [inboundNatRuleGet.ts][inboundNatRuleGet] | Gets the specified load balancer inbound nat rule. |  
| [inboundNatRuleCreate.ts][inboundNatRuleCreate] | Creates or updates a load balancer inbound nat rule. |  
| [loadBalancerLoadBalancingRuleList.ts][loadBalancerLoadBalancingRuleList] | Gets all the load balancing rules in a load balancer. |  
| [loadBalancerLoadBalancingRuleGet.ts][loadBalancerLoadBalancingRuleGet] | Gets the specified load balancer load balancing rule. |  
| [loadBalancerOutboundRuleList.ts][loadBalancerOutboundRuleList] | Gets all the outbound rules in a load balancer. |  
| [loadBalancerOutboundRuleGet.ts][loadBalancerOutboundRuleGet] | Gets the specified load balancer outbound rule. |  
| [loadBalancerNetworkInterfaceListSimple.ts][loadBalancerNetworkInterfaceListSimple] | Gets associated load balancer network interfaces. |  
| [loadBalancerNetworkInterfaceListVmss.ts][loadBalancerNetworkInterfaceListVmss] | Gets associated load balancer network interfaces. |  
| [loadBalancerProbeList.ts][loadBalancerProbeList] | Gets all the load balancer probes. |  
| [loadBalancerProbeGet.ts][loadBalancerProbeGet] | Gets load balancer probe. |  
| [deleteNatGateway.ts][deleteNatGateway] | Deletes the specified nat gateway. |  
| [getNatGateway.ts][getNatGateway] | Gets the specified nat gateway in a specified resource group. |  
| [createNatGateway.ts][createNatGateway] | Creates or updates a nat gateway. |  
| [updateNatGatewayTags.ts][updateNatGatewayTags] | Updates nat gateway tags. |  
| [listAllNatGateways.ts][listAllNatGateways] | Gets all the Nat Gateways in a subscription. |  
| [listNatGatewaysInResourceGroup.ts][listNatGatewaysInResourceGroup] | Gets all nat gateways in a resource group. |  
| [deleteNetworkInterface.ts][deleteNetworkInterface] | Deletes the specified network interface. |  
| [getNetworkInterface.ts][getNetworkInterface] | Gets information about the specified network interface. |  
| [createNetworkInterface.ts][createNetworkInterface] | Creates or updates a network interface. |  
| [updateNetworkInterfaceTags.ts][updateNetworkInterfaceTags] | Updates a network interface tags. |  
| [listAllNetworkInterfaces.ts][listAllNetworkInterfaces] | Gets all network interfaces in a subscription. |  
| [listNetworkInterfacesInResourceGroup.ts][listNetworkInterfacesInResourceGroup] | Gets all network interfaces in a resource group. |  
| [showNetworkInterfaceEffectiveRouteTables.ts][showNetworkInterfaceEffectiveRouteTables] | Gets all route tables applied to a network interface. |  
| [listNetworkInterfaceEffectiveNetworkSecurityGroups.ts][listNetworkInterfaceEffectiveNetworkSecurityGroups] | Gets all network security groups applied to a network interface. |  
| [listVirtualMachineScaleSetVmNetworkInterfaces.ts][listVirtualMachineScaleSetVmNetworkInterfaces] | Gets information about all network interfaces in a virtual machine in a virtual machine scale set. |  
| [listVirtualMachineScaleSetNetworkInterfaces.ts][listVirtualMachineScaleSetNetworkInterfaces] | Gets all network interfaces in a virtual machine scale set. |  
| [getVirtualMachineScaleSetNetworkInterface.ts][getVirtualMachineScaleSetNetworkInterface] | Get the specified network interface in a virtual machine scale set. |  
| [listVirtualMachineScaleSetNetworkInterfaceIpConfigurations.ts][listVirtualMachineScaleSetNetworkInterfaceIpConfigurations] | Get the specified network interface ip configuration in a virtual machine scale set. |  
| [getVirtualMachineScaleSetNetworkInterface.ts][getVirtualMachineScaleSetNetworkInterface] | Get the specified network interface ip configuration in a virtual machine scale set. |  
| [networkInterfaceIPConfigurationList.ts][networkInterfaceIPConfigurationList] | Get all ip configurations in a network interface. |  
| [networkInterfaceIPConfigurationGet.ts][networkInterfaceIPConfigurationGet] | Gets the specified network interface ip configuration. |  
| [networkInterfaceLoadBalancerList.ts][networkInterfaceLoadBalancerList] | List all load balancers in a network interface. |  
| [deleteTapConfiguration.ts][deleteTapConfiguration] | Deletes the specified tap configuration from the NetworkInterface. |  
| [getNetworkInterfaceTapConfigurations.ts][getNetworkInterfaceTapConfigurations] | Get the specified tap configuration on a network interface. |  
| [createNetworkInterfaceTapConfigurations.ts][createNetworkInterfaceTapConfigurations] | Creates or updates a Tap configuration in the specified NetworkInterface. |  
| [listVirtualNetworkTapConfigurations.ts][listVirtualNetworkTapConfigurations] | Get all Tap configurations in a network interface. |  
| [deleteNetworkProfile.ts][deleteNetworkProfile] | Deletes the specified network profile. |  
| [getNetworkProfile.ts][getNetworkProfile] | Gets the specified network profile in a specified resource group. |  
| [getNetworkProfileWithContainerNetworkInterfaces.ts][getNetworkProfileWithContainerNetworkInterfaces] | Gets the specified network profile in a specified resource group. |  
| [createNetworkProfileDefaults.ts][createNetworkProfileDefaults] | Creates or updates a network profile. |  
| [updateNetworkProfileTags.ts][updateNetworkProfileTags] | Updates network profile tags. |  
| [listAllNetworkProfiles.ts][listAllNetworkProfiles] | Gets all the network profiles in a subscription. |  
| [listResourceGroupNetworkProfiles.ts][listResourceGroupNetworkProfiles] | Gets all network profiles in a resource group. |  
| [deleteNetworkSecurityGroup.ts][deleteNetworkSecurityGroup] | Deletes the specified network security group. |  
| [getNetworkSecurityGroup.ts][getNetworkSecurityGroup] | Gets the specified network security group. |  
| [createNetworkSecurityGroup.ts][createNetworkSecurityGroup] | Creates or updates a network security group in the specified resource group. |  
| [createNetworkSecurityGroupWithRule.ts][createNetworkSecurityGroupWithRule] | Creates or updates a network security group in the specified resource group. |  
| [updateNetworkSecurityGroupTags.ts][updateNetworkSecurityGroupTags] | Updates a network security group tags. |  
| [listAllNetworkSecurityGroups.ts][listAllNetworkSecurityGroups] | Gets all network security groups in a subscription. |  
| [listNetworkSecurityGroupsInResourceGroup.ts][listNetworkSecurityGroupsInResourceGroup] | Gets all network security groups in a resource group. |  
| [deleteNetworkSecurityRuleFromNetworkSecurityGroup.ts][deleteNetworkSecurityRuleFromNetworkSecurityGroup] | Deletes the specified network security rule. |  
| [getNetworkSecurityRuleInNetworkSecurityGroup.ts][getNetworkSecurityRuleInNetworkSecurityGroup] | Get the specified network security rule. |  
| [createSecurityRule.ts][createSecurityRule] | Creates or updates a security rule in the specified network security group. |  
| [listNetworkSecurityRulesInNetworkSecurityGroup.ts][listNetworkSecurityRulesInNetworkSecurityGroup] | Gets all security rules in a network security group. |  
| [defaultSecurityRuleList.ts][defaultSecurityRuleList] | Gets all default security rules in a network security group. |  
| [defaultSecurityRuleGet.ts][defaultSecurityRuleGet] | Get the specified default network security rule. |  
| [deleteNetworkVirtualAppliance.ts][deleteNetworkVirtualAppliance] | Deletes the specified Network Virtual Appliance. |  
| [getNetworkVirtualAppliance.ts][getNetworkVirtualAppliance] | Gets the specified Network Virtual Appliance. |  
| [updateNetworkVirtualAppliance.ts][updateNetworkVirtualAppliance] | Updates a Network Virtual Appliance. |  
| [createNetworkVirtualAppliance.ts][createNetworkVirtualAppliance] | Creates or updates the specified Network Virtual Appliance. |  
| [listAllNetworkVirtualApplianceForAGivenResourceGroup.ts][listAllNetworkVirtualApplianceForAGivenResourceGroup] | Lists all Network Virtual Appliances in a resource group. |  
| [listAllNetworkVirtualAppliancesForAGivenSubscription.ts][listAllNetworkVirtualAppliancesForAGivenSubscription] | Gets all Network Virtual Appliances in a subscription. |  
| [createNetworkWatcher.ts][createNetworkWatcher] | Creates or updates a network watcher in the specified resource group. |  
| [getNetworkWatcher.ts][getNetworkWatcher] | Gets the specified network watcher by resource group. |  
| [deleteNetworkWatcher.ts][deleteNetworkWatcher] | Deletes the specified network watcher resource. |  
| [updateNetworkWatcherTags.ts][updateNetworkWatcherTags] | Updates a network watcher tags. |  
| [listNetworkWatchers.ts][listNetworkWatchers] | Gets all network watchers by resource group. |  
| [listAllNetworkWatchers.ts][listAllNetworkWatchers] | Gets all network watchers by subscription. |  
| [getTopology.ts][getTopology] | Gets the current network topology by resource group. |  
| [ipFlowVerify.ts][ipFlowVerify] | Verify IP flow from the specified VM to a location given the currently configured NSG rules. |  
| [getNextHop.ts][getNextHop] | Gets the next hop from the specified VM. |  
| [getSecurityGroupView.ts][getSecurityGroupView] | Gets the configured and effective security group rules on the specified VM. |  
| [getTroubleshooting.ts][getTroubleshooting] | Initiate troubleshooting on a specified resource. |  
| [getTroubleshootResult.ts][getTroubleshootResult] | Get the last completed troubleshooting result on a specified resource. |  
| [configureFlowLog.ts][configureFlowLog] | Configures flow log and traffic analytics (optional) on a specified resource. |  
| [getFlowLogStatus.ts][getFlowLogStatus] | Queries status of flow log and traffic analytics (optional) on a specified resource. |  
| [checkConnectivity.ts][checkConnectivity] | Verifies the possibility of establishing a direct TCP connection from a virtual machine to a given endpoint including another VM or an arbitrary remote server. |  
| [getAzureReachabilityReport.ts][getAzureReachabilityReport] | NOTE: This feature is currently in preview and still being tested for stability. Gets the relative latency score for internet service providers from a specified location to Azure regions. |  
| [getAvailableProvidersList.ts][getAvailableProvidersList] | NOTE: This feature is currently in preview and still being tested for stability. Lists all available internet service providers for a specified Azure region. |  
| [networkConfigurationDiagnostic.ts][networkConfigurationDiagnostic] | Gets Network Configuration Diagnostic data to help customers understand and debug network behavior. It provides detailed information on what security rules were applied to a specified traffic flow and the result of evaluating these rules. Customers must provide details of a flow like source, destination, protocol, etc. The API returns whether traffic was allowed or denied, the rules evaluated for the specified flow and the evaluation results. |  
| [createPacketCapture.ts][createPacketCapture] | Create and start a packet capture on the specified VM. |  
| [getPacketCapture.ts][getPacketCapture] | Gets a packet capture session by name. |  
| [deletePacketCapture.ts][deletePacketCapture] | Deletes the specified packet capture session. |  
| [stopPacketCapture.ts][stopPacketCapture] | Stops a specified packet capture session. |  
| [queryPacketCaptureStatus.ts][queryPacketCaptureStatus] | Query the status of a running packet capture session. |  
| [listPacketCaptures.ts][listPacketCaptures] | Lists all packet capture sessions within the specified resource group. |  
| [createConnectionMonitorV1.ts][createConnectionMonitorV1] | Create or update a connection monitor. |  
| [createConnectionMonitorV2.ts][createConnectionMonitorV2] | Create or update a connection monitor. |  
| [getConnectionMonitor.ts][getConnectionMonitor] | Gets a connection monitor by name. |  
| [deleteConnectionMonitor.ts][deleteConnectionMonitor] | Deletes the specified connection monitor. |  
| [updateConnectionMonitorTags.ts][updateConnectionMonitorTags] | Update tags of the specified connection monitor. |  
| [stopConnectionMonitor.ts][stopConnectionMonitor] | Stops the specified connection monitor. |  
| [startConnectionMonitor.ts][startConnectionMonitor] | Starts the specified connection monitor. |  
| [queryConnectionMonitor.ts][queryConnectionMonitor] | Query a snapshot of the most recent connection states. |  
| [listConnectionMonitors.ts][listConnectionMonitors] | Lists all connection monitors for the specified Network Watcher. |  
| [createOrUpdateFlowLog.ts][createOrUpdateFlowLog] | Create or update a flow log for the specified network security group. |  
| [getFlowLog.ts][getFlowLog] | Gets a flow log resource by name. |  
| [deleteFlowLog.ts][deleteFlowLog] | Deletes the specified flow log resource. |  
| [listConnectionMonitors.ts][listConnectionMonitors] | Lists all flow log resources for the specified Network Watcher. |  
| [getAListOfOperationsForAResourceProvider.ts][getAListOfOperationsForAResourceProvider] | Lists all of the available Network Rest API operations. |  
| [deletePrivateEndpoint.ts][deletePrivateEndpoint] | Deletes the specified private endpoint. |  
| [getPrivateEndpoint.ts][getPrivateEndpoint] | Gets the specified private endpoint by resource group. |  
| [getPrivateEndpointWithManualApprovalConnection.ts][getPrivateEndpointWithManualApprovalConnection] | Gets the specified private endpoint by resource group. |  
| [createPrivateEndpoint.ts][createPrivateEndpoint] | Creates or updates an private endpoint in the specified resource group. |  
| [createPrivateEndpointWithManualApprovalConnection.ts][createPrivateEndpointWithManualApprovalConnection] | Creates or updates an private endpoint in the specified resource group. |  
| [listPrivateEndpointsInResourceGroup.ts][listPrivateEndpointsInResourceGroup] | Gets all private endpoints in a resource group. |  
| [listAllPrivateEndpoints.ts][listAllPrivateEndpoints] | Gets all private endpoints in a subscription. |  
| [getAvailablePrivateEndpointTypes.ts][getAvailablePrivateEndpointTypes] | Returns all of the resource types that can be linked to a Private Endpoint in this subscription in this region. |  
| [getAvailablePrivateEndpointTypesInTheResourceGroup.ts][getAvailablePrivateEndpointTypesInTheResourceGroup] | Returns all of the resource types that can be linked to a Private Endpoint in this subscription in this region. |  
| [deletePrivateDnsZoneGroup.ts][deletePrivateDnsZoneGroup] | Deletes the specified private dns zone group. |  
| [getPrivateDnsZoneGroup.ts][getPrivateDnsZoneGroup] | Gets the private dns zone group resource by specified private dns zone group name. |  
| [createPrivateDnsZoneGroup.ts][createPrivateDnsZoneGroup] | Creates or updates a private dns zone group in the specified private endpoint. |  
| [listPrivateEndpointsInResourceGroup.ts][listPrivateEndpointsInResourceGroup] | Gets all private dns zone groups in a private endpoint. |  
| [deletePrivateLinkService.ts][deletePrivateLinkService] | Deletes the specified private link service. |  
| [getPrivateLinkService.ts][getPrivateLinkService] | Gets the specified private link service by resource group. |  
| [createPrivateLinkService.ts][createPrivateLinkService] | Creates or updates an private link service in the specified resource group. |  
| [listPrivateLinkServiceInResourceGroup.ts][listPrivateLinkServiceInResourceGroup] | Gets all private link services in a resource group. |  
| [listAllPrivateListService.ts][listAllPrivateListService] | Gets all private link service in a subscription. |  
| [getPrivateEndPointConnection.ts][getPrivateEndPointConnection] | Get the specific private end point connection by specific private link service in the resource group. |  
| [approveOrRejectPrivateEndPointConnectionForAPrivateLinkService.ts][approveOrRejectPrivateEndPointConnectionForAPrivateLinkService] | Approve or reject private end point connection for a private link service in a subscription. |  
| [deletePrivateEndPointConnectionForAPrivateLinkService.ts][deletePrivateEndPointConnectionForAPrivateLinkService] | Delete private end point connection for a private link service in a subscription. |  
| [listPrivateLinkServiceInResourceGroup.ts][listPrivateLinkServiceInResourceGroup] | Gets all private end point connections for a specific private link service. |  
| [checkPrivateLinkServiceVisibility.ts][checkPrivateLinkServiceVisibility] | Checks whether the subscription is visible to private link service. |  
| [checkPrivateLinkServiceVisibility.ts][checkPrivateLinkServiceVisibility] | Checks whether the subscription is visible to private link service in the specified resource group. |  
| [getListOfPrivateLinkServiceIdThatCanBeLinkedToAPrivateEndPointWithAutoApproved.ts][getListOfPrivateLinkServiceIdThatCanBeLinkedToAPrivateEndPointWithAutoApproved] | Returns all of the private link service ids that can be linked to a Private Endpoint with auto approved in this subscription in this region. |  
| [getListOfPrivateLinkServiceIdThatCanBeLinkedToAPrivateEndPointWithAutoApproved.ts][getListOfPrivateLinkServiceIdThatCanBeLinkedToAPrivateEndPointWithAutoApproved] | Returns all of the private link service ids that can be linked to a Private Endpoint with auto approved in this subscription in this region. |  
| [deletePublicIpAddress.ts][deletePublicIpAddress] | Deletes the specified public IP address. |  
| [getPublicIpAddress.ts][getPublicIpAddress] | Gets the specified public IP address in a specified resource group. |  
| [createPublicIpAddressDns.ts][createPublicIpAddressDns] | Creates or updates a static or dynamic public IP address. |  
| [createPublicIpAddressAllocationMethod.ts][createPublicIpAddressAllocationMethod] | Creates or updates a static or dynamic public IP address. |  
| [createPublicIpAddressDefaults.ts][createPublicIpAddressDefaults] | Creates or updates a static or dynamic public IP address. |  
| [updatePublicIpAddressTags.ts][updatePublicIpAddressTags] | Updates public IP address tags. |  
| [listAllPublicIpAddresses.ts][listAllPublicIpAddresses] | Gets all the public IP addresses in a subscription. |  
| [listResourceGroupPublicIpAddresses.ts][listResourceGroupPublicIpAddresses] | Gets all public IP addresses in a resource group. |  
| [listVMSSPublicIP.ts][listVMSSPublicIP] | Gets information about all public IP addresses on a virtual machine scale set level. |  
| [listVMSSVMPublicIP.ts][listVMSSVMPublicIP] | Gets information about all public IP addresses in a virtual machine IP configuration in a virtual machine scale set. |  
| [getVMSSPublicIP.ts][getVMSSPublicIP] | Get the specified public IP address in a virtual machine scale set. |  
| [deletePublicIpPrefix.ts][deletePublicIpPrefix] | Deletes the specified public IP prefix. |  
| [getPublicIpPrefix.ts][getPublicIpPrefix] | Gets the specified public IP prefix in a specified resource group. |  
| [createPublicIpPrefixAllocationMethod.ts][createPublicIpPrefixAllocationMethod] | Creates or updates a static or dynamic public IP prefix. |  
| [createPublicIpPrefixDefaults.ts][createPublicIpPrefixDefaults] | Creates or updates a static or dynamic public IP prefix. |  
| [updatePublicIpPrefixTags.ts][updatePublicIpPrefixTags] | Updates public IP prefix tags. |  
| [listAllPublicIpPrefixes.ts][listAllPublicIpPrefixes] | Gets all the public IP prefixes in a subscription. |  
| [listResourceGroupPublicIpPrefixes.ts][listResourceGroupPublicIpPrefixes] | Gets all public IP prefixes in a resource group. |  
| [routeFilterDelete.ts][routeFilterDelete] | Deletes the specified route filter. |  
| [routeFilterGet.ts][routeFilterGet] | Gets the specified route filter. |  
| [routeFilterCreate.ts][routeFilterCreate] | Creates or updates a route filter in a specified resource group. |  
| [updateRouteFilterTags.ts][updateRouteFilterTags] | Updates tags of a route filter. |  
| [routeFilterListByResourceGroup.ts][routeFilterListByResourceGroup] | Gets all route filters in a resource group. |  
| [routeFilterList.ts][routeFilterList] | Gets all route filters in a subscription. |  
| [routeFilterRuleDelete.ts][routeFilterRuleDelete] | Deletes the specified rule from a route filter. |  
| [routeFilterRuleGet.ts][routeFilterRuleGet] | Gets the specified rule from a route filter. |  
| [routeFilterRuleCreate.ts][routeFilterRuleCreate] | Creates or updates a route in the specified route filter. |  
| [routeFilterRuleListByRouteFilter.ts][routeFilterRuleListByRouteFilter] | Gets all RouteFilterRules in a route filter. |  
| [deleteRouteTable.ts][deleteRouteTable] | Deletes the specified route table. |  
| [getRouteTable.ts][getRouteTable] | Gets the specified route table. |  
| [createRouteTable.ts][createRouteTable] | Create or updates a route table in a specified resource group. |  
| [createRouteTableWithRoute.ts][createRouteTableWithRoute] | Create or updates a route table in a specified resource group. |  
| [updateRouteTableTags.ts][updateRouteTableTags] | Updates a route table tags. |  
| [listRouteTablesInResourceGroup.ts][listRouteTablesInResourceGroup] | Gets all route tables in a resource group. |  
| [listAllRouteTables.ts][listAllRouteTables] | Gets all route tables in a subscription. |  
| [deleteRoute.ts][deleteRoute] | Deletes the specified route from a route table. |  
| [getRoute.ts][getRoute] | Gets the specified route from a route table. |  
| [createRoute.ts][createRoute] | Creates or updates a route in the specified route table. |  
| [listRoutes.ts][listRoutes] | Gets all routes in a route table. |  
| [deleteSecurityPartnerProvider.ts][deleteSecurityPartnerProvider] | Deletes the specified Security Partner Provider. |  
| [getSecurityPartnerProvider.ts][getSecurityPartnerProvider] | Gets the specified Security Partner Provider. |  
| [createSecurityPartnerProvider.ts][createSecurityPartnerProvider] | Creates or updates the specified Security Partner Provider. |  
| [updateSecurityPartnerProviderTags.ts][updateSecurityPartnerProviderTags] | Updates tags of a Security Partner Provider resource. |  
| [listAllSecurityPartnerProvidersForAGivenResourceGroup.ts][listAllSecurityPartnerProvidersForAGivenResourceGroup] | Lists all Security Partner Providers in a resource group. |  
| [listAllSecurityPartnerProvidersForAGivenSubscription.ts][listAllSecurityPartnerProvidersForAGivenSubscription] | Gets all the Security Partner Providers in a subscription. |  
| [serviceCommunityList.ts][serviceCommunityList] | Gets all the available bgp service communities. |  
| [deleteServiceEndpointPolicy.ts][deleteServiceEndpointPolicy] | Deletes the specified service endpoint policy. |  
| [getServiceEndPointPolicy.ts][getServiceEndPointPolicy] | Gets the specified service Endpoint Policies in a specified resource group. |  
| [createServiceEndpointPolicy.ts][createServiceEndpointPolicy] | Creates or updates a service Endpoint Policies. |  
| [createServiceEndpointPolicyWithDefinition.ts][createServiceEndpointPolicyWithDefinition] | Creates or updates a service Endpoint Policies. |  
| [updateServiceEndpointPolicyTags.ts][updateServiceEndpointPolicyTags] | Updates tags of a service endpoint policy. |  
| [listAllServiceEndpointPolicy.ts][listAllServiceEndpointPolicy] | Gets all the service endpoint policies in a subscription. |  
| [listResourceGroupServiceEndpointPolicies.ts][listResourceGroupServiceEndpointPolicies] | Gets all service endpoint Policies in a resource group. |  
| [deleteServiceEndpointPolicyDefinitionsFromServiceEndpointPolicy.ts][deleteServiceEndpointPolicyDefinitionsFromServiceEndpointPolicy] | Deletes the specified ServiceEndpoint policy definitions. |  
| [getServiceEndpointDefinitionInServiceEndpointPolicy.ts][getServiceEndpointDefinitionInServiceEndpointPolicy] | Get the specified service endpoint policy definitions from service endpoint policy. |  
| [createServiceEndpointPolicyDefinition.ts][createServiceEndpointPolicyDefinition] | Creates or updates a service endpoint policy definition in the specified service endpoint policy. |  
| [listServiceEndpointDefinitionsInServiceEndPointPolicy.ts][listServiceEndpointDefinitionsInServiceEndPointPolicy] | Gets all service endpoint policy definitions in a service end point policy. |  
| [getListOfServiceTags.ts][getListOfServiceTags] | Gets a list of service tag information resources. |  
| [listUsages.ts][listUsages] | List network usages for a subscription. |  
| [listUsagesSpacedLocation.ts][listUsagesSpacedLocation] | List network usages for a subscription. |  
| [deleteVirtualNetwork.ts][deleteVirtualNetwork] | Deletes the specified virtual network. |  
| [getVirtualNetwork.ts][getVirtualNetwork] | Gets the specified virtual network by resource group. |  
| [getVirtualNetworkWithADelegatedSubnet.ts][getVirtualNetworkWithADelegatedSubnet] | Gets the specified virtual network by resource group. |  
| [getVirtualNetworkWithServiceAssociationLinks.ts][getVirtualNetworkWithServiceAssociationLinks] | Gets the specified virtual network by resource group. |  
| [createVirtualNetwork.ts][createVirtualNetwork] | Creates or updates a virtual network in the specified resource group. |  
| [createVirtualNetworkWithBgpCommunities.ts][createVirtualNetworkWithBgpCommunities] | Creates or updates a virtual network in the specified resource group. |  
| [createVirtualNetworkWithDelegatedSubnets.ts][createVirtualNetworkWithDelegatedSubnets] | Creates or updates a virtual network in the specified resource group. |  
| [createVirtualNetworkWithServiceEndpoints.ts][createVirtualNetworkWithServiceEndpoints] | Creates or updates a virtual network in the specified resource group. |  
| [createVirtualNetworkWithServiceEndpointsAndServiceEndpointPolicy.ts][createVirtualNetworkWithServiceEndpointsAndServiceEndpointPolicy] | Creates or updates a virtual network in the specified resource group. |  
| [createVirtualNetworkWithSubnet.ts][createVirtualNetworkWithSubnet] | Creates or updates a virtual network in the specified resource group. |  
| [createVirtualNetworkWithSubnetContainingAddressPrefixes.ts][createVirtualNetworkWithSubnetContainingAddressPrefixes] | Creates or updates a virtual network in the specified resource group. |  
| [updateVirtualNetworkTags.ts][updateVirtualNetworkTags] | Updates a virtual network tags. |  
| [listAllVirtualNetworks.ts][listAllVirtualNetworks] | Gets all virtual networks in a subscription. |  
| [listVirtualNetworksInResourceGroup.ts][listVirtualNetworksInResourceGroup] | Gets all virtual networks in a resource group. |  
| [checkIpAddressAvailability.ts][checkIpAddressAvailability] | Checks whether a private IP address is available for use. |  
| [vnetGetUsage.ts][vnetGetUsage] | Lists usage stats. |  
| [deleteSubnet.ts][deleteSubnet] | Deletes the specified subnet. |  
| [getSubnet.ts][getSubnet] | Gets the specified subnet by virtual network and resource group. |  
| [getSubnetWithADelegation.ts][getSubnetWithADelegation] | Gets the specified subnet by virtual network and resource group. |  
| [createSubnet.ts][createSubnet] | Creates or updates a subnet in the specified virtual network. |  
| [createSubnetWithADelegation.ts][createSubnetWithADelegation] | Creates or updates a subnet in the specified virtual network. |  
| [createSubnetWithServiceEndpoints.ts][createSubnetWithServiceEndpoints] | Creates or updates a subnet in the specified virtual network. |  
| [prepareNetworkPolicies.ts][prepareNetworkPolicies] | Prepares a subnet by applying network intent policies. |  
| [unprepareNetworkPolicies.ts][unprepareNetworkPolicies] | Unprepares a subnet by removing network intent policies. |  
| [listSubnets.ts][listSubnets] | Gets all subnets in a virtual network. |  
| [getResourceNavigationLinks.ts][getResourceNavigationLinks] | Gets a list of resource navigation links for a subnet. |  
| [getServiceAssociationLinks.ts][getServiceAssociationLinks] | Gets a list of service association links for a subnet. |  
| [deletePeering.ts][deletePeering] | Deletes the specified virtual network peering. |  
| [getPeering.ts][getPeering] | Gets the specified virtual network peering. |  
| [createPeering.ts][createPeering] | Creates or updates a peering in the specified virtual network. |  
| [listPeerings.ts][listPeerings] | Gets all virtual network peerings in a virtual network. |  
| [updateVirtualNetworkGateway.ts][updateVirtualNetworkGateway] | Creates or updates a virtual network gateway in the specified resource group. |  
| [getVirtualNetworkGateway.ts][getVirtualNetworkGateway] | Gets the specified virtual network gateway by resource group. |  
| [deleteVirtualNetworkGateway.ts][deleteVirtualNetworkGateway] | Deletes the specified virtual network gateway. |  
| [updateVirtualNetworkGatewayTags.ts][updateVirtualNetworkGatewayTags] | Updates a virtual network gateway tags. |  
| [listVirtualNetworkGatewaysinResourceGroup.ts][listVirtualNetworkGatewaysinResourceGroup] | Gets all virtual network gateways by resource group. |  
| [virtualNetworkGatewaysListConnections.ts][virtualNetworkGatewaysListConnections] | Gets all the connections in a virtual network gateway. |  
| [resetVirtualNetworkGateway.ts][resetVirtualNetworkGateway] | Resets the primary of the virtual network gateway in the specified resource group. |  
| [resetVpnClientSharedKey.ts][resetVpnClientSharedKey] | Resets the VPN client shared key of the virtual network gateway in the specified resource group. |  
| [generateVPNClientPackage.ts][generateVPNClientPackage] | Generates VPN client package for P2S client of the virtual network gateway in the specified resource group. |  
| [generateVirtualNetworkGatewayVPNProfile.ts][generateVirtualNetworkGatewayVPNProfile] | Generates VPN profile for P2S client of the virtual network gateway in the specified resource group. Used for IKEV2 and radius based authentication. |  
| [getVirtualNetworkGatewayVPNProfilePackageURL.ts][getVirtualNetworkGatewayVPNProfilePackageURL] | Gets pre-generated VPN profile for P2S client of the virtual network gateway in the specified resource group. The profile needs to be generated first using generateVpnProfile. |  
| [getVirtualNetworkGatewayBGPPeerStatus.ts][getVirtualNetworkGatewayBGPPeerStatus] | The GetBgpPeerStatus operation retrieves the status of all BGP peers. |  
| [listVirtualNetworkGatewaySupportedVPNDevices.ts][listVirtualNetworkGatewaySupportedVPNDevices] | Gets a xml format representation for supported vpn devices. |  
| [getVirtualNetworkGatewayLearnedRoutes.ts][getVirtualNetworkGatewayLearnedRoutes] | This operation retrieves a list of routes the virtual network gateway has learned, including routes learned from BGP peers. |  
| [getVirtualNetworkGatewayAdvertisedRoutes.ts][getVirtualNetworkGatewayAdvertisedRoutes] | This operation retrieves a list of routes the virtual network gateway is advertising to the specified peer. |  
| [setVirtualNetworkGatewayVpnClientIpsecParameters.ts][setVirtualNetworkGatewayVpnClientIpsecParameters] | The Set VpnclientIpsecParameters operation sets the vpnclient ipsec policy for P2S client of virtual network gateway in the specified resource group through Network resource provider. |  
| [getVirtualNetworkGatewayVpnClientIpsecParameters.ts][getVirtualNetworkGatewayVpnClientIpsecParameters] | The Get VpnclientIpsecParameters operation retrieves information about the vpnclient ipsec policy for P2S client of virtual network gateway in the specified resource group through Network resource provider. |  
| [getVPNDeviceConfigurationScript.ts][getVPNDeviceConfigurationScript] | Gets a xml format representation for vpn device configuration script. |  
| [startPacketCaptureOnVirtualNetworkGatewayWithFilter.ts][startPacketCaptureOnVirtualNetworkGatewayWithFilter] | Starts packet capture on virtual network gateway in the specified resource group. |  
| [startPacketCaptureOnVirtualNetworkGatewayWithoutFilter.ts][startPacketCaptureOnVirtualNetworkGatewayWithoutFilter] | Starts packet capture on virtual network gateway in the specified resource group. |  
| [stopPacketCaptureOnVirtualNetworkGateway.ts][stopPacketCaptureOnVirtualNetworkGateway] | Stops packet capture on virtual network gateway in the specified resource group. |  
| [getVirtualNetworkGatewayVpnclientConnectionHealth.ts][getVirtualNetworkGatewayVpnclientConnectionHealth] | Get VPN client connection health detail per P2S client connection of the virtual network gateway in the specified resource group. |  
| [disconnectVpnConnectionsFromVirtualNetworkGateway.ts][disconnectVpnConnectionsFromVirtualNetworkGateway] | Disconnect vpn connections of virtual network gateway in the specified resource group. |  
| [createVirtualNetworkGatewayConnectionS2s.ts][createVirtualNetworkGatewayConnectionS2s] | Creates or updates a virtual network gateway connection in the specified resource group. |  
| [getVirtualNetworkGatewayConnection.ts][getVirtualNetworkGatewayConnection] | Gets the specified virtual network gateway connection by resource group. |  
| [deleteVirtualNetworkGatewayConnection.ts][deleteVirtualNetworkGatewayConnection] | Deletes the specified virtual network Gateway connection. |  
| [updateVirtualNetworkGatewayConnectionTags.ts][updateVirtualNetworkGatewayConnectionTags] | Updates a virtual network gateway connection tags. |  
| [setVirtualNetworkGatewayConnectionSharedKey.ts][setVirtualNetworkGatewayConnectionSharedKey] | The Put VirtualNetworkGatewayConnectionSharedKey operation sets the virtual network gateway connection shared key for passed virtual network gateway connection in the specified resource group through Network resource provider. |  
| [getVirtualNetworkGatewayConnectionSharedKey.ts][getVirtualNetworkGatewayConnectionSharedKey] | The Get VirtualNetworkGatewayConnectionSharedKey operation retrieves information about the specified virtual network gateway connection shared key through Network resource provider. |  
| [listVirtualNetworkGatewayConnectionsinResourceGroup.ts][listVirtualNetworkGatewayConnectionsinResourceGroup] | The List VirtualNetworkGatewayConnections operation retrieves all the virtual network gateways connections created. |  
| [resetVirtualNetworkGatewayConnectionSharedKey.ts][resetVirtualNetworkGatewayConnectionSharedKey] | The VirtualNetworkGatewayConnectionResetSharedKey operation resets the virtual network gateway connection shared key for passed virtual network gateway connection in the specified resource group through Network resource provider. |  
| [startPacketCaptureOnVirtualNetworkGatewayConnectionWithFilter.ts][startPacketCaptureOnVirtualNetworkGatewayConnectionWithFilter] | Starts packet capture on virtual network gateway connection in the specified resource group. |  
| [startPacketCaptureOnVirtualNetworkGatewayConnectionWithoutFilter.ts][startPacketCaptureOnVirtualNetworkGatewayConnectionWithoutFilter] | Starts packet capture on virtual network gateway connection in the specified resource group. |  
| [stopPacketCaptureOnVirtualNetworkGatewayConnection.ts][stopPacketCaptureOnVirtualNetworkGatewayConnection] | Stops packet capture on virtual network gateway connection in the specified resource group. |  
| [createLocalNetworkGateway.ts][createLocalNetworkGateway] | Creates or updates a local network gateway in the specified resource group. |  
| [getLocalNetworkGateway.ts][getLocalNetworkGateway] | Gets the specified local network gateway in a resource group. |  
| [deleteLocalNetworkGateway.ts][deleteLocalNetworkGateway] | Deletes the specified local network gateway. |  
| [updateLocalNetworkGatewayTags.ts][updateLocalNetworkGatewayTags] | Updates a local network gateway tags. |  
| [listLocalNetworkGateways.ts][listLocalNetworkGateways] | Gets all the local network gateways in a resource group. |  
| [deleteVirtualNetworkTapResource.ts][deleteVirtualNetworkTapResource] | Deletes the specified virtual network tap. |  
| [getVirtualNetworkTap.ts][getVirtualNetworkTap] | Gets information about the specified virtual network tap. |  
| [createVirtualNetworkTap.ts][createVirtualNetworkTap] | Creates or updates a Virtual Network Tap. |  
| [updateVirtualNetworkTapTags.ts][updateVirtualNetworkTapTags] | Updates an VirtualNetworkTap tags. |  
| [listAllVirtualNetworkTaps.ts][listAllVirtualNetworkTaps] | Gets all the VirtualNetworkTaps in a subscription. |  
| [listVirtualNetworkTapsInResourceGroup.ts][listVirtualNetworkTapsInResourceGroup] | Gets all the VirtualNetworkTaps in a subscription. |  
| [deleteVirtualRouter.ts][deleteVirtualRouter] | Deletes the specified Virtual Router. |  
| [getVirtualRouter.ts][getVirtualRouter] | Gets the specified Virtual Router. |  
| [createVirtualRouter.ts][createVirtualRouter] | Creates or updates the specified Virtual Router. |  
| [listAllVirtualRouterForAGivenResourceGroup.ts][listAllVirtualRouterForAGivenResourceGroup] | Lists all Virtual Routers in a resource group. |  
| [listAllVirtualRoutersForAGivenSubscription.ts][listAllVirtualRoutersForAGivenSubscription] | Gets all the Virtual Routers in a subscription. |  
| [deleteVirtualRouterPeering.ts][deleteVirtualRouterPeering] | Deletes the specified peering from a Virtual Router. |  
| [getVirtualRouterPeering.ts][getVirtualRouterPeering] | Gets the specified Virtual Router Peering. |  
| [createVirtualRouterPeering.ts][createVirtualRouterPeering] | Creates or updates the specified Virtual Router Peering. |  
| [listAllVirtualRouterPeeringsForAGivenVirtualRouter.ts][listAllVirtualRouterPeeringsForAGivenVirtualRouter] | Lists all Virtual Router Peerings in a Virtual Router resource. |  
| [virtualWANGet.ts][virtualWANGet] | Retrieves the details of a VirtualWAN. |  
| [virtualWANCreate.ts][virtualWANCreate] | Creates a VirtualWAN resource if it doesn't exist else updates the existing VirtualWAN. |  
| [virtualWANUpdate.ts][virtualWANUpdate] | Updates a VirtualWAN tags. |  
| [virtualWANDelete.ts][virtualWANDelete] | Deletes a VirtualWAN. |  
| [virtualWANListByResourceGroup.ts][virtualWANListByResourceGroup] | Lists all the VirtualWANs in a resource group. |  
| [virtualWANList.ts][virtualWANList] | Lists all the VirtualWANs in a subscription. |  
| [vpnSiteGet.ts][vpnSiteGet] | Retrieves the details of a VPN site. |  
| [vpnSiteCreate.ts][vpnSiteCreate] | Creates a VpnSite resource if it doesn't exist else updates the existing VpnSite. |  
| [vpnSiteUpdate.ts][vpnSiteUpdate] | Updates VpnSite tags. |  
| [vpnSiteDelete.ts][vpnSiteDelete] | Deletes a VpnSite. |  
| [vpnSiteListByResourceGroup.ts][vpnSiteListByResourceGroup] | Lists all the vpnSites in a resource group. |  
| [vpnSiteList.ts][vpnSiteList] | Lists all the VpnSites in a subscription. |  
| [vpnSiteGet.ts][vpnSiteGet] | Retrieves the details of a VPN site link. |  
| [vpnSiteLinkListByVpnSite.ts][vpnSiteLinkListByVpnSite] | Lists all the vpnSiteLinks in a resource group for a vpn site. |  
| [vpnSitesConfigurationDownload.ts][vpnSitesConfigurationDownload] | Gives the sas-url to download the configurations for vpn-sites in a resource group. |  
| [vpnServerConfigurationGet.ts][vpnServerConfigurationGet] | Retrieves the details of a VpnServerConfiguration. |  
| [vpnServerConfigurationCreate.ts][vpnServerConfigurationCreate] | Creates a VpnServerConfiguration resource if it doesn't exist else updates the existing VpnServerConfiguration. |  
| [vpnServerConfigurationUpdate.ts][vpnServerConfigurationUpdate] | Updates VpnServerConfiguration tags. |  
| [vpnServerConfigurationDelete.ts][vpnServerConfigurationDelete] | Deletes a VpnServerConfiguration. |  
| [vpnServerConfigurationListByResourceGroup.ts][vpnServerConfigurationListByResourceGroup] | Lists all the vpnServerConfigurations in a resource group. |  
| [vpnServerConfigurationList.ts][vpnServerConfigurationList] | Lists all the VpnServerConfigurations in a subscription. |  
| [virtualHubGet.ts][virtualHubGet] | Retrieves the details of a VirtualHub. |  
| [virtualHubPut.ts][virtualHubPut] | Creates a VirtualHub resource if it doesn't exist else updates the existing VirtualHub. |  
| [virtualHubUpdate.ts][virtualHubUpdate] | Updates VirtualHub tags. |  
| [virtualHubDelete.ts][virtualHubDelete] | Deletes a VirtualHub. |  
| [virtualHubListByResourceGroup.ts][virtualHubListByResourceGroup] | Lists all the VirtualHubs in a resource group. |  
| [virtualHubList.ts][virtualHubList] | Lists all the VirtualHubs in a subscription. |  
| [hubVirtualNetworkConnectionGet.ts][hubVirtualNetworkConnectionGet] | Retrieves the details of a HubVirtualNetworkConnection. |  
| [hubVirtualNetworkConnectionList.ts][hubVirtualNetworkConnectionList] | Retrieves the details of all HubVirtualNetworkConnections. |  
| [vpnGatewayGet.ts][vpnGatewayGet] | Retrieves the details of a virtual wan vpn gateway. |  
| [vpnGatewayPut.ts][vpnGatewayPut] | Creates a virtual wan vpn gateway if it doesn't exist else updates the existing gateway. |  
| [vpnGatewayUpdate.ts][vpnGatewayUpdate] | Updates virtual wan vpn gateway tags. |  
| [vpnGatewayDelete.ts][vpnGatewayDelete] | Deletes a virtual wan vpn gateway. |  
| [resetVpnGateway.ts][resetVpnGateway] | Resets the primary of the vpn gateway in the specified resource group. |  
| [vpnGatewayListByResourceGroup.ts][vpnGatewayListByResourceGroup] | Lists all the VpnGateways in a resource group. |  
| [vpnGatewayListBySubscription.ts][vpnGatewayListBySubscription] | Lists all the VpnGateways in a subscription. |  
| [vpnConnectionGet.ts][vpnConnectionGet] | Retrieves the details of a vpn connection. |  
| [vpnConnectionPut.ts][vpnConnectionPut] | Creates a vpn connection to a scalable vpn gateway if it doesn't exist else updates the existing connection. |  
| [vpnConnectionDelete.ts][vpnConnectionDelete] | Deletes a vpn connection. |  
| [vpnConnectionList.ts][vpnConnectionList] | Retrieves all vpn connections for a particular virtual wan vpn gateway. |  
| [vpnSiteLinkConnectionGet.ts][vpnSiteLinkConnectionGet] | Retrieves the details of a vpn site link connection. |  
| [vpnSiteLinkConnectionList.ts][vpnSiteLinkConnectionList] | Retrieves all vpn site link connections for a particular virtual wan vpn gateway vpn connection. |  
| [p2SVpnGatewayGet.ts][p2SVpnGatewayGet] | Retrieves the details of a virtual wan p2s vpn gateway. |  
| [p2SVpnGatewayPut.ts][p2SVpnGatewayPut] | Creates a virtual wan p2s vpn gateway if it doesn't exist else updates the existing gateway. |  
| [p2SVpnGatewayUpdate.ts][p2SVpnGatewayUpdate] | Updates virtual wan p2s vpn gateway tags. |  
| [p2SVpnGatewayDelete.ts][p2SVpnGatewayDelete] | Deletes a virtual wan p2s vpn gateway. |  
| [p2SVpnGatewayListByResourceGroup.ts][p2SVpnGatewayListByResourceGroup] | Lists all the P2SVpnGateways in a resource group. |  
| [p2SVpnGatewayListBySubscription.ts][p2SVpnGatewayListBySubscription] | Lists all the P2SVpnGateways in a subscription. |  
| [generateP2SVpnGatewayVPNProfile.ts][generateP2SVpnGatewayVPNProfile] | Generates VPN profile for P2S client of the P2SVpnGateway in the specified resource group. |  
| [p2SVpnGatewayGetConnectionHealth.ts][p2SVpnGatewayGetConnectionHealth] | Gets the connection health of P2S clients of the virtual wan P2SVpnGateway in the specified resource group. |  
| [p2SVpnGatewayGetConnectionHealthDetailed.ts][p2SVpnGatewayGetConnectionHealthDetailed] | Gets the sas url to get the connection health detail of P2S clients of the virtual wan P2SVpnGateway in the specified resource group. |  
| [disconnectVpnConnectionsFromP2sVpnGateway.ts][disconnectVpnConnectionsFromP2sVpnGateway] | Disconnect P2S vpn connections of the virtual wan P2SVpnGateway in the specified resource group. |  
| [getVirtualWanVpnServerConfigurations.ts][getVirtualWanVpnServerConfigurations] | Gives the list of VpnServerConfigurations associated with Virtual Wan in a resource group. |  
| [virtualHubVirtualHubRouteTableV2Get.ts][virtualHubVirtualHubRouteTableV2Get] | Retrieves the details of a VirtualHubRouteTableV2. |  
| [virtualHubRouteTableV2Put.ts][virtualHubRouteTableV2Put] | Creates a VirtualHubRouteTableV2 resource if it doesn't exist else updates the existing VirtualHubRouteTableV2. |  
| [virtualHubRouteTableV2Delete.ts][virtualHubRouteTableV2Delete] | Deletes a VirtualHubRouteTableV2. |  
| [virtualHubRouteTableV2List.ts][virtualHubRouteTableV2List] | Retrieves the details of all VirtualHubRouteTableV2s. |  
| [expressRouteGatewayListBySubscription.ts][expressRouteGatewayListBySubscription] | Lists ExpressRoute gateways under a given subscription. |  
| [expressRouteGatewayListByResourceGroup.ts][expressRouteGatewayListByResourceGroup] | Lists ExpressRoute gateways in a given resource group. |  
| [expressRouteGatewayCreate.ts][expressRouteGatewayCreate] | Creates or updates a ExpressRoute gateway in a specified resource group. |  
| [expressRouteGatewayGet.ts][expressRouteGatewayGet] | Fetches the details of a ExpressRoute gateway in a resource group. |  
| [expressRouteGatewayDelete.ts][expressRouteGatewayDelete] | Deletes the specified ExpressRoute gateway in a resource group. An ExpressRoute gateway resource can only be deleted when there are no connection subresources. |  
| [expressRouteConnectionCreate.ts][expressRouteConnectionCreate] | Creates a connection between an ExpressRoute gateway and an ExpressRoute circuit. |  
| [expressRouteConnectionGet.ts][expressRouteConnectionGet] | Gets the specified ExpressRouteConnection. |  
| [expressRouteConnectionDelete.ts][expressRouteConnectionDelete] | Deletes a connection to a ExpressRoute circuit. |  
| [expressRouteConnectionList.ts][expressRouteConnectionList] | Lists ExpressRouteConnections. |  
| [routeTablePut.ts][routeTablePut] | Creates a RouteTable resource if it doesn't exist else updates the existing RouteTable. |  
| [routeTableGet.ts][routeTableGet] | Retrieves the details of a RouteTable. |  
| [routeTableDelete.ts][routeTableDelete] | Deletes a RouteTable. |  
| [routeTableList.ts][routeTableList] | Retrieves the details of all RouteTables. |  
| [listsAllWafPoliciesInAResourceGroup.ts][listsAllWafPoliciesInAResourceGroup] | Lists all of the protection policies within a resource group. |  
| [listsAllWafPoliciesInASubscription.ts][listsAllWafPoliciesInASubscription] | Gets all the WAF policies in a subscription. |  
| [getsAWafPolicyWithinAResourceGroup.ts][getsAWafPolicyWithinAResourceGroup] | Retrieve protection policy with specified name within a resource group. |  
| [createsOrUpdatesAWafPolicyWithinAResourceGroup.ts][createsOrUpdatesAWafPolicyWithinAResourceGroup] | Creates or update policy with specified rule set name within a resource group. |  
| [deletesAWafPolicyWithinAResourceGroup.ts][deletesAWafPolicyWithinAResourceGroup] | Deletes Policy. |  

## Prerequisites

The sample programs are compatible with [LTS versions of Node.js](https://nodejs.org/about/releases/).

Before running the samples in Node, they must be compiled to JavaScript using the TypeScript compiler. For more information on TypeScript, see the [TypeScript documentation][typescript]. Install the TypeScript compiler using:

```bash
npm install -g typescript
```

You need [an Azure subscription][freesub] to run these sample programs:


Samples retrieve credentials to access the service endpoint from environment variables. Alternatively, edit the source code to include the appropriate credentials. See each individual sample for details on which environment variables/credentials it requires to function.

Adapting the samples to run in the browser may require some additional consideration. For details, please see the [package README][package].

## Setup

To run the samples using the published version of the package:

1. Install the dependencies using `npm`:

```bash
npm install
```

2. Compile the samples:

```bash
npm run build
```

3. Edit the file `sample.env`, adding the correct credentials to access the Azure service and run the samples. Then rename the file from `sample.env` to just `.env`. The sample programs will read this file automatically.

4. Run whichever samples you like (note that some samples may require additional setup, see the table above):

```bash
node dist/deleteApplicationGateway.js
```

## Next Steps

Take a look at our [API Documentation][apiref] for more information about the APIs that are available in the clients.  

[deleteApplicationGateway]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteApplicationGateway.ts  
[getApplicationGateway]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getApplicationGateway.ts  
[createApplicationGateway]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createApplicationGateway.ts  
[updateApplicationGatewayTags]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateApplicationGatewayTags.ts  
[listsAllApplicationGatewaysInAResourceGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listsAllApplicationGatewaysInAResourceGroup.ts  
[listsAllApplicationGatewaysInASubscription]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listsAllApplicationGatewaysInASubscription.ts  
[startApplicationGateway]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/startApplicationGateway.ts  
[stopApplicationGateway]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/stopApplicationGateway.ts  
[getBackendHealth]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getBackendHealth.ts  
[testBackendHealth]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/testBackendHealth.ts  
[getAvailableServerVariables]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAvailableServerVariables.ts  
[getAvailableRequestHeaders]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAvailableRequestHeaders.ts  
[getAvailableResponseHeaders]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAvailableResponseHeaders.ts  
[getAvailableWafRuleSets]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAvailableWafRuleSets.ts  
[getAvailableSslOptions]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAvailableSslOptions.ts  
[getAvailableSslPredefinedPolicies]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAvailableSslPredefinedPolicies.ts  
[getAvailableSslPredefinedPolicyByName]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAvailableSslPredefinedPolicyByName.ts  
[deleteApplicationSecurityGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteApplicationSecurityGroup.ts  
[getApplicationSecurityGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getApplicationSecurityGroup.ts  
[createApplicationSecurityGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createApplicationSecurityGroup.ts  
[updateApplicationSecurityGroupTags]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateApplicationSecurityGroupTags.ts  
[listAllApplicationSecurityGroups]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listAllApplicationSecurityGroups.ts  
[listLoadBalancersInResourceGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listLoadBalancersInResourceGroup.ts  
[getAvailableDelegations]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAvailableDelegations.ts  
[getAvailableDelegationsInTheResourceGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAvailableDelegationsInTheResourceGroup.ts  
[getAvailableServiceAliases]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAvailableServiceAliases.ts  
[getAvailableServiceAliasesInTheResourceGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAvailableServiceAliasesInTheResourceGroup.ts  
[deleteAzureFirewall]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteAzureFirewall.ts  
[getAzureFirewall]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAzureFirewall.ts  
[getAzureFirewallWithAdditionalProperties]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAzureFirewallWithAdditionalProperties.ts  
[getAzureFirewallWithIpGroups]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAzureFirewallWithIpGroups.ts  
[getAzureFirewallWithZones]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAzureFirewallWithZones.ts  
[getAzureFirewallWithManagementSubnet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAzureFirewallWithManagementSubnet.ts  
[createAzureFirewall]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAzureFirewall.ts  
[createAzureFirewallWithAdditionalProperties]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAzureFirewallWithAdditionalProperties.ts  
[createAzureFirewallWithIpGroups]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAzureFirewallWithIpGroups.ts  
[createAzureFirewallWithZones]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAzureFirewallWithZones.ts  
[createAzureFirewallWithManagementSubnet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAzureFirewallWithManagementSubnet.ts  
[createAzureFirewallInVirtualHub]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createAzureFirewallInVirtualHub.ts  
[updateAzureFirewallTags]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateAzureFirewallTags.ts  
[listAllAzureFirewallsForAGivenResourceGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listAllAzureFirewallsForAGivenResourceGroup.ts  
[listAllAzureFirewallsForAGivenSubscription]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listAllAzureFirewallsForAGivenSubscription.ts  
[listAllAzureFirewallFqdnTagsForAGivenSubscription]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listAllAzureFirewallFqdnTagsForAGivenSubscription.ts  
[deleteBastionHost]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteBastionHost.ts  
[getBastionHost]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getBastionHost.ts  
[createBastionHost]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createBastionHost.ts  
[listAllBastionHostsForAGivenSubscription]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listAllBastionHostsForAGivenSubscription.ts  
[listAllBastionHostsForAGivenResourceGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listAllBastionHostsForAGivenResourceGroup.ts  
[createBastionShareableLinksForTheRequestVMs]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createBastionShareableLinksForTheRequestVMs.ts  
[deleteBastionShareableLinksForTheRequestVMs]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteBastionShareableLinksForTheRequestVMs.ts  
[returnsTheBastionShareableLinksForTheRequestVMs]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/returnsTheBastionShareableLinksForTheRequestVMs.ts  
[returnsAListOfCurrentlyActiveSessionsOnTheBastion]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/returnsAListOfCurrentlyActiveSessionsOnTheBastion.ts  
[deletesTheSpecifiedActiveSession]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deletesTheSpecifiedActiveSession.ts  
[checkDnsNameAvailability]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/checkDnsNameAvailability.ts  
[supportedSecurityProviders]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/supportedSecurityProviders.ts  
[generateVirtualWanVpnServerConfigurationVpnProfile]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/generateVirtualWanVpnServerConfigurationVpnProfile.ts  
[deleteDDoSCustomPolicy]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteDDoSCustomPolicy.ts  
[getDDoSCustomPolicy]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getDDoSCustomPolicy.ts  
[createDDoSCustomPolicy]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createDDoSCustomPolicy.ts  
[dDoSCustomPolicyUpdateTags]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/dDoSCustomPolicyUpdateTags.ts  
[deleteDDoSProtectionPlan]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteDDoSProtectionPlan.ts  
[getDDoSProtectionPlan]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getDDoSProtectionPlan.ts  
[createDDoSProtectionPlan]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createDDoSProtectionPlan.ts  
[dDoSProtectionPlanUpdateTags]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/dDoSProtectionPlanUpdateTags.ts  
[listAllDDoSProtectionPlans]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listAllDDoSProtectionPlans.ts  
[listDDoSProtectionPlansInResourceGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listDDoSProtectionPlansInResourceGroup.ts  
[endpointServicesList]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/endpointServicesList.ts  
[deleteExpressRouteCircuitAuthorization]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteExpressRouteCircuitAuthorization.ts  
[getExpressRouteCircuitAuthorization]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getExpressRouteCircuitAuthorization.ts  
[createExpressRouteCircuitAuthorization]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createExpressRouteCircuitAuthorization.ts  
[listExpressRouteCircuitAuthorization]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listExpressRouteCircuitAuthorization.ts  
[deleteExpressRouteCircuitPeerings]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteExpressRouteCircuitPeerings.ts  
[getExpressRouteCircuitPeering]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getExpressRouteCircuitPeering.ts  
[createExpressRouteCircuitPeerings]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createExpressRouteCircuitPeerings.ts  
[listExpressRouteCircuitPeerings]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listExpressRouteCircuitPeerings.ts  
[deleteExpressRouteCircuit]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteExpressRouteCircuit.ts  
[expressRouteCircuitConnectionGet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/expressRouteCircuitConnectionGet.ts  
[expressRouteCircuitConnectionCreate]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/expressRouteCircuitConnectionCreate.ts  
[listExpressRouteCircuitConnection]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listExpressRouteCircuitConnection.ts  
[peerExpressRouteCircuitConnectionGet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/peerExpressRouteCircuitConnectionGet.ts  
[listPeerExpressRouteCircuitConnection]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listPeerExpressRouteCircuitConnection.ts  
[deleteExpressRouteCircuit]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteExpressRouteCircuit.ts  
[getExpressRouteCircuit]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getExpressRouteCircuit.ts  
[createExpressRouteCircuit]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createExpressRouteCircuit.ts  
[createExpressRouteCircuitOnExpressRoutePort]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createExpressRouteCircuitOnExpressRoutePort.ts  
[updateExpressRouteCircuitTags]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateExpressRouteCircuitTags.ts  
[listArpTable]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listArpTable.ts  
[listRouteTables]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listRouteTables.ts  
[listRouteTableSummary]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listRouteTableSummary.ts  
[getExpressRouteCircuitTrafficStats]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getExpressRouteCircuitTrafficStats.ts  
[getExpressRouteCircuitPeeringTrafficStats]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getExpressRouteCircuitPeeringTrafficStats.ts  
[listExpressRouteCircuitsInAResourceGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listExpressRouteCircuitsInAResourceGroup.ts  
[listExpressRouteCircuitsInASubscription]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listExpressRouteCircuitsInASubscription.ts  
[listExpressRouteProviders]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listExpressRouteProviders.ts  
[expressRouteCrossConnectionList]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/expressRouteCrossConnectionList.ts  
[expressRouteCrossConnectionListByResourceGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/expressRouteCrossConnectionListByResourceGroup.ts  
[getExpressRouteCrossConnection]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getExpressRouteCrossConnection.ts  
[updateExpressRouteCrossConnection]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateExpressRouteCrossConnection.ts  
[updateExpressRouteCrossConnectionTags]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateExpressRouteCrossConnectionTags.ts  
[getExpressRouteCrossConnectionsArpTable]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getExpressRouteCrossConnectionsArpTable.ts  
[getExpressRouteCrossConnectionsRouteTableSummary]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getExpressRouteCrossConnectionsRouteTableSummary.ts  
[getExpressRouteCrossConnectionsRouteTable]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getExpressRouteCrossConnectionsRouteTable.ts  
[expressRouteCrossConnectionBgpPeeringList]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/expressRouteCrossConnectionBgpPeeringList.ts  
[deleteExpressRouteCrossConnectionBgpPeering]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteExpressRouteCrossConnectionBgpPeering.ts  
[getExpressRouteCrossConnectionBgpPeering]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getExpressRouteCrossConnectionBgpPeering.ts  
[expressRouteCrossConnectionBgpPeeringCreate]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/expressRouteCrossConnectionBgpPeeringCreate.ts  
[expressRoutePortsLocationList]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/expressRoutePortsLocationList.ts  
[expressRoutePortsLocationGet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/expressRoutePortsLocationGet.ts  
[expressRoutePortDelete]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/expressRoutePortDelete.ts  
[expressRoutePortGet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/expressRoutePortGet.ts  
[expressRoutePortCreate]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/expressRoutePortCreate.ts  
[expressRoutePortUpdateLink]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/expressRoutePortUpdateLink.ts  
[expressRoutePortUpdateTags]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/expressRoutePortUpdateTags.ts  
[expressRoutePortListByResourceGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/expressRoutePortListByResourceGroup.ts  
[expressRoutePortList]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/expressRoutePortList.ts  
[expressRouteLinkGet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/expressRouteLinkGet.ts  
[expressRouteLinkGet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/expressRouteLinkGet.ts  
[deleteFirewallPolicy]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteFirewallPolicy.ts  
[getFirewallPolicy]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getFirewallPolicy.ts  
[createFirewallPolicy]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createFirewallPolicy.ts  
[listAllFirewallPoliciesForAGivenResourceGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listAllFirewallPoliciesForAGivenResourceGroup.ts  
[listAllFirewallPoliciesForAGivenSubscription]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listAllFirewallPoliciesForAGivenSubscription.ts  
[deleteFirewallPolicyRuleGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteFirewallPolicyRuleGroup.ts  
[getFirewallPolicyRuleGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getFirewallPolicyRuleGroup.ts  
[getFirewallPolicyRuleGroupWithIpGroups]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getFirewallPolicyRuleGroupWithIpGroups.ts  
[createFirewallPolicyRuleGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createFirewallPolicyRuleGroup.ts  
[createFirewallPolicyRuleGroupWithIpGroups]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createFirewallPolicyRuleGroupWithIpGroups.ts  
[listAllFirewallPolicyRuleGroupsForAGivenFirewallPolicy]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listAllFirewallPolicyRuleGroupsForAGivenFirewallPolicy.ts  
[listAllFirewallPolicyRuleGroupsWithIpGroupsForAGivenFirewallPolicy]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listAllFirewallPolicyRuleGroupsWithIpGroupsForAGivenFirewallPolicy.ts  
[deleteIpAllocation]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteIpAllocation.ts  
[getIpAllocation]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getIpAllocation.ts  
[createIpAllocation]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createIpAllocation.ts  
[updateVirtualNetworkTags]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateVirtualNetworkTags.ts  
[listAllIpAllocations]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listAllIpAllocations.ts  
[listIpAllocationsInResourceGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listIpAllocationsInResourceGroup.ts  
[getIpGroups]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getIpGroups.ts  
[createOrUpdateIpGroups]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createOrUpdateIpGroups.ts  
[updateIpGroups]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateIpGroups.ts  
[deleteIpGroups]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteIpGroups.ts  
[listByResourceGroupIpGroups]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listByResourceGroupIpGroups.ts  
[listIpGroups]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listIpGroups.ts  
[deleteLoadBalancer]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteLoadBalancer.ts  
[getLoadBalancer]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getLoadBalancer.ts  
[createLoadBalancer]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createLoadBalancer.ts  
[createLoadBalancerWithFrontendIpInZone1]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createLoadBalancerWithFrontendIpInZone1.ts  
[createLoadBalancerWithStandardSku]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createLoadBalancerWithStandardSku.ts  
[createLoadBalancerWithInboundNatPool]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createLoadBalancerWithInboundNatPool.ts  
[createLoadBalancerWithOutboundRules]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createLoadBalancerWithOutboundRules.ts  
[updateLoadBalancerTags]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateLoadBalancerTags.ts  
[listAllLoadBalancers]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listAllLoadBalancers.ts  
[listLoadBalancersInResourceGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listLoadBalancersInResourceGroup.ts  
[loadBalancerWithBackendAddressPoolContainingBackendAddresses]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/loadBalancerWithBackendAddressPoolContainingBackendAddresses.ts  
[loadBalancerBackendAddressPoolList]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/loadBalancerBackendAddressPoolList.ts  
[loadBalancerWithBackendAddressPoolWithBackendAddresses]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/loadBalancerWithBackendAddressPoolWithBackendAddresses.ts  
[loadBalancerBackendAddressPoolGet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/loadBalancerBackendAddressPoolGet.ts  
[updateLoadBalancerBackendPoolWithBackendAddressesContainingVirtualNetworkAndIpAddress]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateLoadBalancerBackendPoolWithBackendAddressesContainingVirtualNetworkAndIpAddress.ts  
[updateLoadBalancerBackendPoolWithBackendAddressesContainingVirtualNetworkAndIpAddressDefinedInNetworkInterfaces]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateLoadBalancerBackendPoolWithBackendAddressesContainingVirtualNetworkAndIpAddressDefinedInNetworkInterfaces.ts  
[backendAddressPoolDelete]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/backendAddressPoolDelete.ts  
[loadBalancerFrontendIPConfigurationList]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/loadBalancerFrontendIPConfigurationList.ts  
[loadBalancerFrontendIPConfigurationGet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/loadBalancerFrontendIPConfigurationGet.ts  
[inboundNatRuleList]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/inboundNatRuleList.ts  
[inboundNatRuleDelete]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/inboundNatRuleDelete.ts  
[inboundNatRuleGet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/inboundNatRuleGet.ts  
[inboundNatRuleCreate]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/inboundNatRuleCreate.ts  
[loadBalancerLoadBalancingRuleList]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/loadBalancerLoadBalancingRuleList.ts  
[loadBalancerLoadBalancingRuleGet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/loadBalancerLoadBalancingRuleGet.ts  
[loadBalancerOutboundRuleList]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/loadBalancerOutboundRuleList.ts  
[loadBalancerOutboundRuleGet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/loadBalancerOutboundRuleGet.ts  
[loadBalancerNetworkInterfaceListSimple]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/loadBalancerNetworkInterfaceListSimple.ts  
[loadBalancerNetworkInterfaceListVmss]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/loadBalancerNetworkInterfaceListVmss.ts  
[loadBalancerProbeList]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/loadBalancerProbeList.ts  
[loadBalancerProbeGet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/loadBalancerProbeGet.ts  
[deleteNatGateway]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteNatGateway.ts  
[getNatGateway]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getNatGateway.ts  
[createNatGateway]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createNatGateway.ts  
[updateNatGatewayTags]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateNatGatewayTags.ts  
[listAllNatGateways]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listAllNatGateways.ts  
[listNatGatewaysInResourceGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listNatGatewaysInResourceGroup.ts  
[deleteNetworkInterface]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteNetworkInterface.ts  
[getNetworkInterface]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getNetworkInterface.ts  
[createNetworkInterface]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createNetworkInterface.ts  
[updateNetworkInterfaceTags]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateNetworkInterfaceTags.ts  
[listAllNetworkInterfaces]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listAllNetworkInterfaces.ts  
[listNetworkInterfacesInResourceGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listNetworkInterfacesInResourceGroup.ts  
[showNetworkInterfaceEffectiveRouteTables]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/showNetworkInterfaceEffectiveRouteTables.ts  
[listNetworkInterfaceEffectiveNetworkSecurityGroups]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listNetworkInterfaceEffectiveNetworkSecurityGroups.ts  
[listVirtualMachineScaleSetVmNetworkInterfaces]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listVirtualMachineScaleSetVmNetworkInterfaces.ts  
[listVirtualMachineScaleSetNetworkInterfaces]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listVirtualMachineScaleSetNetworkInterfaces.ts  
[getVirtualMachineScaleSetNetworkInterface]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getVirtualMachineScaleSetNetworkInterface.ts  
[listVirtualMachineScaleSetNetworkInterfaceIpConfigurations]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listVirtualMachineScaleSetNetworkInterfaceIpConfigurations.ts  
[getVirtualMachineScaleSetNetworkInterface]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getVirtualMachineScaleSetNetworkInterface.ts  
[networkInterfaceIPConfigurationList]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/networkInterfaceIPConfigurationList.ts  
[networkInterfaceIPConfigurationGet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/networkInterfaceIPConfigurationGet.ts  
[networkInterfaceLoadBalancerList]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/networkInterfaceLoadBalancerList.ts  
[deleteTapConfiguration]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteTapConfiguration.ts  
[getNetworkInterfaceTapConfigurations]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getNetworkInterfaceTapConfigurations.ts  
[createNetworkInterfaceTapConfigurations]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createNetworkInterfaceTapConfigurations.ts  
[listVirtualNetworkTapConfigurations]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listVirtualNetworkTapConfigurations.ts  
[deleteNetworkProfile]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteNetworkProfile.ts  
[getNetworkProfile]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getNetworkProfile.ts  
[getNetworkProfileWithContainerNetworkInterfaces]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getNetworkProfileWithContainerNetworkInterfaces.ts  
[createNetworkProfileDefaults]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createNetworkProfileDefaults.ts  
[updateNetworkProfileTags]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateNetworkProfileTags.ts  
[listAllNetworkProfiles]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listAllNetworkProfiles.ts  
[listResourceGroupNetworkProfiles]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listResourceGroupNetworkProfiles.ts  
[deleteNetworkSecurityGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteNetworkSecurityGroup.ts  
[getNetworkSecurityGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getNetworkSecurityGroup.ts  
[createNetworkSecurityGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createNetworkSecurityGroup.ts  
[createNetworkSecurityGroupWithRule]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createNetworkSecurityGroupWithRule.ts  
[updateNetworkSecurityGroupTags]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateNetworkSecurityGroupTags.ts  
[listAllNetworkSecurityGroups]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listAllNetworkSecurityGroups.ts  
[listNetworkSecurityGroupsInResourceGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listNetworkSecurityGroupsInResourceGroup.ts  
[deleteNetworkSecurityRuleFromNetworkSecurityGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteNetworkSecurityRuleFromNetworkSecurityGroup.ts  
[getNetworkSecurityRuleInNetworkSecurityGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getNetworkSecurityRuleInNetworkSecurityGroup.ts  
[createSecurityRule]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createSecurityRule.ts  
[listNetworkSecurityRulesInNetworkSecurityGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listNetworkSecurityRulesInNetworkSecurityGroup.ts  
[defaultSecurityRuleList]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/defaultSecurityRuleList.ts  
[defaultSecurityRuleGet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/defaultSecurityRuleGet.ts  
[deleteNetworkVirtualAppliance]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteNetworkVirtualAppliance.ts  
[getNetworkVirtualAppliance]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getNetworkVirtualAppliance.ts  
[updateNetworkVirtualAppliance]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateNetworkVirtualAppliance.ts  
[createNetworkVirtualAppliance]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createNetworkVirtualAppliance.ts  
[listAllNetworkVirtualApplianceForAGivenResourceGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listAllNetworkVirtualApplianceForAGivenResourceGroup.ts  
[listAllNetworkVirtualAppliancesForAGivenSubscription]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listAllNetworkVirtualAppliancesForAGivenSubscription.ts  
[createNetworkWatcher]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createNetworkWatcher.ts  
[getNetworkWatcher]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getNetworkWatcher.ts  
[deleteNetworkWatcher]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteNetworkWatcher.ts  
[updateNetworkWatcherTags]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateNetworkWatcherTags.ts  
[listNetworkWatchers]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listNetworkWatchers.ts  
[listAllNetworkWatchers]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listAllNetworkWatchers.ts  
[getTopology]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getTopology.ts  
[ipFlowVerify]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/ipFlowVerify.ts  
[getNextHop]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getNextHop.ts  
[getSecurityGroupView]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getSecurityGroupView.ts  
[getTroubleshooting]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getTroubleshooting.ts  
[getTroubleshootResult]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getTroubleshootResult.ts  
[configureFlowLog]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/configureFlowLog.ts  
[getFlowLogStatus]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getFlowLogStatus.ts  
[checkConnectivity]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/checkConnectivity.ts  
[getAzureReachabilityReport]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAzureReachabilityReport.ts  
[getAvailableProvidersList]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAvailableProvidersList.ts  
[networkConfigurationDiagnostic]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/networkConfigurationDiagnostic.ts  
[createPacketCapture]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createPacketCapture.ts  
[getPacketCapture]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getPacketCapture.ts  
[deletePacketCapture]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deletePacketCapture.ts  
[stopPacketCapture]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/stopPacketCapture.ts  
[queryPacketCaptureStatus]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/queryPacketCaptureStatus.ts  
[listPacketCaptures]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listPacketCaptures.ts  
[createConnectionMonitorV1]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createConnectionMonitorV1.ts  
[createConnectionMonitorV2]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createConnectionMonitorV2.ts  
[getConnectionMonitor]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getConnectionMonitor.ts  
[deleteConnectionMonitor]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteConnectionMonitor.ts  
[updateConnectionMonitorTags]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateConnectionMonitorTags.ts  
[stopConnectionMonitor]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/stopConnectionMonitor.ts  
[startConnectionMonitor]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/startConnectionMonitor.ts  
[queryConnectionMonitor]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/queryConnectionMonitor.ts  
[listConnectionMonitors]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listConnectionMonitors.ts  
[createOrUpdateFlowLog]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createOrUpdateFlowLog.ts  
[getFlowLog]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getFlowLog.ts  
[deleteFlowLog]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteFlowLog.ts  
[listConnectionMonitors]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listConnectionMonitors.ts  
[getAListOfOperationsForAResourceProvider]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAListOfOperationsForAResourceProvider.ts  
[deletePrivateEndpoint]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deletePrivateEndpoint.ts  
[getPrivateEndpoint]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getPrivateEndpoint.ts  
[getPrivateEndpointWithManualApprovalConnection]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getPrivateEndpointWithManualApprovalConnection.ts  
[createPrivateEndpoint]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createPrivateEndpoint.ts  
[createPrivateEndpointWithManualApprovalConnection]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createPrivateEndpointWithManualApprovalConnection.ts  
[listPrivateEndpointsInResourceGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listPrivateEndpointsInResourceGroup.ts  
[listAllPrivateEndpoints]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listAllPrivateEndpoints.ts  
[getAvailablePrivateEndpointTypes]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAvailablePrivateEndpointTypes.ts  
[getAvailablePrivateEndpointTypesInTheResourceGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getAvailablePrivateEndpointTypesInTheResourceGroup.ts  
[deletePrivateDnsZoneGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deletePrivateDnsZoneGroup.ts  
[getPrivateDnsZoneGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getPrivateDnsZoneGroup.ts  
[createPrivateDnsZoneGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createPrivateDnsZoneGroup.ts  
[listPrivateEndpointsInResourceGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listPrivateEndpointsInResourceGroup.ts  
[deletePrivateLinkService]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deletePrivateLinkService.ts  
[getPrivateLinkService]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getPrivateLinkService.ts  
[createPrivateLinkService]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createPrivateLinkService.ts  
[listPrivateLinkServiceInResourceGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listPrivateLinkServiceInResourceGroup.ts  
[listAllPrivateListService]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listAllPrivateListService.ts  
[getPrivateEndPointConnection]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getPrivateEndPointConnection.ts  
[approveOrRejectPrivateEndPointConnectionForAPrivateLinkService]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/approveOrRejectPrivateEndPointConnectionForAPrivateLinkService.ts  
[deletePrivateEndPointConnectionForAPrivateLinkService]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deletePrivateEndPointConnectionForAPrivateLinkService.ts  
[listPrivateLinkServiceInResourceGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listPrivateLinkServiceInResourceGroup.ts  
[checkPrivateLinkServiceVisibility]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/checkPrivateLinkServiceVisibility.ts  
[checkPrivateLinkServiceVisibility]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/checkPrivateLinkServiceVisibility.ts  
[getListOfPrivateLinkServiceIdThatCanBeLinkedToAPrivateEndPointWithAutoApproved]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getListOfPrivateLinkServiceIdThatCanBeLinkedToAPrivateEndPointWithAutoApproved.ts  
[getListOfPrivateLinkServiceIdThatCanBeLinkedToAPrivateEndPointWithAutoApproved]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getListOfPrivateLinkServiceIdThatCanBeLinkedToAPrivateEndPointWithAutoApproved.ts  
[deletePublicIpAddress]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deletePublicIpAddress.ts  
[getPublicIpAddress]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getPublicIpAddress.ts  
[createPublicIpAddressDns]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createPublicIpAddressDns.ts  
[createPublicIpAddressAllocationMethod]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createPublicIpAddressAllocationMethod.ts  
[createPublicIpAddressDefaults]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createPublicIpAddressDefaults.ts  
[updatePublicIpAddressTags]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updatePublicIpAddressTags.ts  
[listAllPublicIpAddresses]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listAllPublicIpAddresses.ts  
[listResourceGroupPublicIpAddresses]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listResourceGroupPublicIpAddresses.ts  
[listVMSSPublicIP]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listVMSSPublicIP.ts  
[listVMSSVMPublicIP]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listVMSSVMPublicIP.ts  
[getVMSSPublicIP]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getVMSSPublicIP.ts  
[deletePublicIpPrefix]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deletePublicIpPrefix.ts  
[getPublicIpPrefix]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getPublicIpPrefix.ts  
[createPublicIpPrefixAllocationMethod]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createPublicIpPrefixAllocationMethod.ts  
[createPublicIpPrefixDefaults]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createPublicIpPrefixDefaults.ts  
[updatePublicIpPrefixTags]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updatePublicIpPrefixTags.ts  
[listAllPublicIpPrefixes]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listAllPublicIpPrefixes.ts  
[listResourceGroupPublicIpPrefixes]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listResourceGroupPublicIpPrefixes.ts  
[routeFilterDelete]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/routeFilterDelete.ts  
[routeFilterGet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/routeFilterGet.ts  
[routeFilterCreate]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/routeFilterCreate.ts  
[updateRouteFilterTags]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateRouteFilterTags.ts  
[routeFilterListByResourceGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/routeFilterListByResourceGroup.ts  
[routeFilterList]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/routeFilterList.ts  
[routeFilterRuleDelete]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/routeFilterRuleDelete.ts  
[routeFilterRuleGet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/routeFilterRuleGet.ts  
[routeFilterRuleCreate]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/routeFilterRuleCreate.ts  
[routeFilterRuleListByRouteFilter]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/routeFilterRuleListByRouteFilter.ts  
[deleteRouteTable]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteRouteTable.ts  
[getRouteTable]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getRouteTable.ts  
[createRouteTable]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createRouteTable.ts  
[createRouteTableWithRoute]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createRouteTableWithRoute.ts  
[updateRouteTableTags]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateRouteTableTags.ts  
[listRouteTablesInResourceGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listRouteTablesInResourceGroup.ts  
[listAllRouteTables]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listAllRouteTables.ts  
[deleteRoute]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteRoute.ts  
[getRoute]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getRoute.ts  
[createRoute]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createRoute.ts  
[listRoutes]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listRoutes.ts  
[deleteSecurityPartnerProvider]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteSecurityPartnerProvider.ts  
[getSecurityPartnerProvider]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getSecurityPartnerProvider.ts  
[createSecurityPartnerProvider]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createSecurityPartnerProvider.ts  
[updateSecurityPartnerProviderTags]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateSecurityPartnerProviderTags.ts  
[listAllSecurityPartnerProvidersForAGivenResourceGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listAllSecurityPartnerProvidersForAGivenResourceGroup.ts  
[listAllSecurityPartnerProvidersForAGivenSubscription]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listAllSecurityPartnerProvidersForAGivenSubscription.ts  
[serviceCommunityList]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/serviceCommunityList.ts  
[deleteServiceEndpointPolicy]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteServiceEndpointPolicy.ts  
[getServiceEndPointPolicy]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getServiceEndPointPolicy.ts  
[createServiceEndpointPolicy]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createServiceEndpointPolicy.ts  
[createServiceEndpointPolicyWithDefinition]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createServiceEndpointPolicyWithDefinition.ts  
[updateServiceEndpointPolicyTags]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateServiceEndpointPolicyTags.ts  
[listAllServiceEndpointPolicy]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listAllServiceEndpointPolicy.ts  
[listResourceGroupServiceEndpointPolicies]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listResourceGroupServiceEndpointPolicies.ts  
[deleteServiceEndpointPolicyDefinitionsFromServiceEndpointPolicy]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteServiceEndpointPolicyDefinitionsFromServiceEndpointPolicy.ts  
[getServiceEndpointDefinitionInServiceEndpointPolicy]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getServiceEndpointDefinitionInServiceEndpointPolicy.ts  
[createServiceEndpointPolicyDefinition]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createServiceEndpointPolicyDefinition.ts  
[listServiceEndpointDefinitionsInServiceEndPointPolicy]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listServiceEndpointDefinitionsInServiceEndPointPolicy.ts  
[getListOfServiceTags]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getListOfServiceTags.ts  
[listUsages]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listUsages.ts  
[listUsagesSpacedLocation]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listUsagesSpacedLocation.ts  
[deleteVirtualNetwork]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteVirtualNetwork.ts  
[getVirtualNetwork]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getVirtualNetwork.ts  
[getVirtualNetworkWithADelegatedSubnet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getVirtualNetworkWithADelegatedSubnet.ts  
[getVirtualNetworkWithServiceAssociationLinks]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getVirtualNetworkWithServiceAssociationLinks.ts  
[createVirtualNetwork]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createVirtualNetwork.ts  
[createVirtualNetworkWithBgpCommunities]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createVirtualNetworkWithBgpCommunities.ts  
[createVirtualNetworkWithDelegatedSubnets]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createVirtualNetworkWithDelegatedSubnets.ts  
[createVirtualNetworkWithServiceEndpoints]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createVirtualNetworkWithServiceEndpoints.ts  
[createVirtualNetworkWithServiceEndpointsAndServiceEndpointPolicy]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createVirtualNetworkWithServiceEndpointsAndServiceEndpointPolicy.ts  
[createVirtualNetworkWithSubnet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createVirtualNetworkWithSubnet.ts  
[createVirtualNetworkWithSubnetContainingAddressPrefixes]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createVirtualNetworkWithSubnetContainingAddressPrefixes.ts  
[updateVirtualNetworkTags]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateVirtualNetworkTags.ts  
[listAllVirtualNetworks]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listAllVirtualNetworks.ts  
[listVirtualNetworksInResourceGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listVirtualNetworksInResourceGroup.ts  
[checkIpAddressAvailability]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/checkIpAddressAvailability.ts  
[vnetGetUsage]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/vnetGetUsage.ts  
[deleteSubnet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteSubnet.ts  
[getSubnet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getSubnet.ts  
[getSubnetWithADelegation]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getSubnetWithADelegation.ts  
[createSubnet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createSubnet.ts  
[createSubnetWithADelegation]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createSubnetWithADelegation.ts  
[createSubnetWithServiceEndpoints]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createSubnetWithServiceEndpoints.ts  
[prepareNetworkPolicies]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/prepareNetworkPolicies.ts  
[unprepareNetworkPolicies]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/unprepareNetworkPolicies.ts  
[listSubnets]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listSubnets.ts  
[getResourceNavigationLinks]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getResourceNavigationLinks.ts  
[getServiceAssociationLinks]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getServiceAssociationLinks.ts  
[deletePeering]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deletePeering.ts  
[getPeering]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getPeering.ts  
[createPeering]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createPeering.ts  
[listPeerings]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listPeerings.ts  
[updateVirtualNetworkGateway]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateVirtualNetworkGateway.ts  
[getVirtualNetworkGateway]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getVirtualNetworkGateway.ts  
[deleteVirtualNetworkGateway]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteVirtualNetworkGateway.ts  
[updateVirtualNetworkGatewayTags]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateVirtualNetworkGatewayTags.ts  
[listVirtualNetworkGatewaysinResourceGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listVirtualNetworkGatewaysinResourceGroup.ts  
[virtualNetworkGatewaysListConnections]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/virtualNetworkGatewaysListConnections.ts  
[resetVirtualNetworkGateway]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/resetVirtualNetworkGateway.ts  
[resetVpnClientSharedKey]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/resetVpnClientSharedKey.ts  
[generateVPNClientPackage]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/generateVPNClientPackage.ts  
[generateVirtualNetworkGatewayVPNProfile]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/generateVirtualNetworkGatewayVPNProfile.ts  
[getVirtualNetworkGatewayVPNProfilePackageURL]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getVirtualNetworkGatewayVPNProfilePackageURL.ts  
[getVirtualNetworkGatewayBGPPeerStatus]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getVirtualNetworkGatewayBGPPeerStatus.ts  
[listVirtualNetworkGatewaySupportedVPNDevices]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listVirtualNetworkGatewaySupportedVPNDevices.ts  
[getVirtualNetworkGatewayLearnedRoutes]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getVirtualNetworkGatewayLearnedRoutes.ts  
[getVirtualNetworkGatewayAdvertisedRoutes]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getVirtualNetworkGatewayAdvertisedRoutes.ts  
[setVirtualNetworkGatewayVpnClientIpsecParameters]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/setVirtualNetworkGatewayVpnClientIpsecParameters.ts  
[getVirtualNetworkGatewayVpnClientIpsecParameters]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getVirtualNetworkGatewayVpnClientIpsecParameters.ts  
[getVPNDeviceConfigurationScript]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getVPNDeviceConfigurationScript.ts  
[startPacketCaptureOnVirtualNetworkGatewayWithFilter]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/startPacketCaptureOnVirtualNetworkGatewayWithFilter.ts  
[startPacketCaptureOnVirtualNetworkGatewayWithoutFilter]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/startPacketCaptureOnVirtualNetworkGatewayWithoutFilter.ts  
[stopPacketCaptureOnVirtualNetworkGateway]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/stopPacketCaptureOnVirtualNetworkGateway.ts  
[getVirtualNetworkGatewayVpnclientConnectionHealth]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getVirtualNetworkGatewayVpnclientConnectionHealth.ts  
[disconnectVpnConnectionsFromVirtualNetworkGateway]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/disconnectVpnConnectionsFromVirtualNetworkGateway.ts  
[createVirtualNetworkGatewayConnectionS2s]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createVirtualNetworkGatewayConnectionS2s.ts  
[getVirtualNetworkGatewayConnection]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getVirtualNetworkGatewayConnection.ts  
[deleteVirtualNetworkGatewayConnection]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteVirtualNetworkGatewayConnection.ts  
[updateVirtualNetworkGatewayConnectionTags]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateVirtualNetworkGatewayConnectionTags.ts  
[setVirtualNetworkGatewayConnectionSharedKey]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/setVirtualNetworkGatewayConnectionSharedKey.ts  
[getVirtualNetworkGatewayConnectionSharedKey]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getVirtualNetworkGatewayConnectionSharedKey.ts  
[listVirtualNetworkGatewayConnectionsinResourceGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listVirtualNetworkGatewayConnectionsinResourceGroup.ts  
[resetVirtualNetworkGatewayConnectionSharedKey]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/resetVirtualNetworkGatewayConnectionSharedKey.ts  
[startPacketCaptureOnVirtualNetworkGatewayConnectionWithFilter]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/startPacketCaptureOnVirtualNetworkGatewayConnectionWithFilter.ts  
[startPacketCaptureOnVirtualNetworkGatewayConnectionWithoutFilter]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/startPacketCaptureOnVirtualNetworkGatewayConnectionWithoutFilter.ts  
[stopPacketCaptureOnVirtualNetworkGatewayConnection]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/stopPacketCaptureOnVirtualNetworkGatewayConnection.ts  
[createLocalNetworkGateway]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createLocalNetworkGateway.ts  
[getLocalNetworkGateway]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getLocalNetworkGateway.ts  
[deleteLocalNetworkGateway]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteLocalNetworkGateway.ts  
[updateLocalNetworkGatewayTags]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateLocalNetworkGatewayTags.ts  
[listLocalNetworkGateways]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listLocalNetworkGateways.ts  
[deleteVirtualNetworkTapResource]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteVirtualNetworkTapResource.ts  
[getVirtualNetworkTap]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getVirtualNetworkTap.ts  
[createVirtualNetworkTap]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createVirtualNetworkTap.ts  
[updateVirtualNetworkTapTags]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/updateVirtualNetworkTapTags.ts  
[listAllVirtualNetworkTaps]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listAllVirtualNetworkTaps.ts  
[listVirtualNetworkTapsInResourceGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listVirtualNetworkTapsInResourceGroup.ts  
[deleteVirtualRouter]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteVirtualRouter.ts  
[getVirtualRouter]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getVirtualRouter.ts  
[createVirtualRouter]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createVirtualRouter.ts  
[listAllVirtualRouterForAGivenResourceGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listAllVirtualRouterForAGivenResourceGroup.ts  
[listAllVirtualRoutersForAGivenSubscription]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listAllVirtualRoutersForAGivenSubscription.ts  
[deleteVirtualRouterPeering]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deleteVirtualRouterPeering.ts  
[getVirtualRouterPeering]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getVirtualRouterPeering.ts  
[createVirtualRouterPeering]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createVirtualRouterPeering.ts  
[listAllVirtualRouterPeeringsForAGivenVirtualRouter]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listAllVirtualRouterPeeringsForAGivenVirtualRouter.ts  
[virtualWANGet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/virtualWANGet.ts  
[virtualWANCreate]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/virtualWANCreate.ts  
[virtualWANUpdate]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/virtualWANUpdate.ts  
[virtualWANDelete]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/virtualWANDelete.ts  
[virtualWANListByResourceGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/virtualWANListByResourceGroup.ts  
[virtualWANList]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/virtualWANList.ts  
[vpnSiteGet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/vpnSiteGet.ts  
[vpnSiteCreate]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/vpnSiteCreate.ts  
[vpnSiteUpdate]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/vpnSiteUpdate.ts  
[vpnSiteDelete]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/vpnSiteDelete.ts  
[vpnSiteListByResourceGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/vpnSiteListByResourceGroup.ts  
[vpnSiteList]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/vpnSiteList.ts  
[vpnSiteGet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/vpnSiteGet.ts  
[vpnSiteLinkListByVpnSite]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/vpnSiteLinkListByVpnSite.ts  
[vpnSitesConfigurationDownload]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/vpnSitesConfigurationDownload.ts  
[vpnServerConfigurationGet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/vpnServerConfigurationGet.ts  
[vpnServerConfigurationCreate]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/vpnServerConfigurationCreate.ts  
[vpnServerConfigurationUpdate]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/vpnServerConfigurationUpdate.ts  
[vpnServerConfigurationDelete]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/vpnServerConfigurationDelete.ts  
[vpnServerConfigurationListByResourceGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/vpnServerConfigurationListByResourceGroup.ts  
[vpnServerConfigurationList]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/vpnServerConfigurationList.ts  
[virtualHubGet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/virtualHubGet.ts  
[virtualHubPut]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/virtualHubPut.ts  
[virtualHubUpdate]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/virtualHubUpdate.ts  
[virtualHubDelete]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/virtualHubDelete.ts  
[virtualHubListByResourceGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/virtualHubListByResourceGroup.ts  
[virtualHubList]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/virtualHubList.ts  
[hubVirtualNetworkConnectionGet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/hubVirtualNetworkConnectionGet.ts  
[hubVirtualNetworkConnectionList]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/hubVirtualNetworkConnectionList.ts  
[vpnGatewayGet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/vpnGatewayGet.ts  
[vpnGatewayPut]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/vpnGatewayPut.ts  
[vpnGatewayUpdate]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/vpnGatewayUpdate.ts  
[vpnGatewayDelete]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/vpnGatewayDelete.ts  
[resetVpnGateway]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/resetVpnGateway.ts  
[vpnGatewayListByResourceGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/vpnGatewayListByResourceGroup.ts  
[vpnGatewayListBySubscription]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/vpnGatewayListBySubscription.ts  
[vpnConnectionGet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/vpnConnectionGet.ts  
[vpnConnectionPut]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/vpnConnectionPut.ts  
[vpnConnectionDelete]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/vpnConnectionDelete.ts  
[vpnConnectionList]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/vpnConnectionList.ts  
[vpnSiteLinkConnectionGet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/vpnSiteLinkConnectionGet.ts  
[vpnSiteLinkConnectionList]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/vpnSiteLinkConnectionList.ts  
[p2SVpnGatewayGet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/p2SVpnGatewayGet.ts  
[p2SVpnGatewayPut]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/p2SVpnGatewayPut.ts  
[p2SVpnGatewayUpdate]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/p2SVpnGatewayUpdate.ts  
[p2SVpnGatewayDelete]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/p2SVpnGatewayDelete.ts  
[p2SVpnGatewayListByResourceGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/p2SVpnGatewayListByResourceGroup.ts  
[p2SVpnGatewayListBySubscription]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/p2SVpnGatewayListBySubscription.ts  
[generateP2SVpnGatewayVPNProfile]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/generateP2SVpnGatewayVPNProfile.ts  
[p2SVpnGatewayGetConnectionHealth]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/p2SVpnGatewayGetConnectionHealth.ts  
[p2SVpnGatewayGetConnectionHealthDetailed]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/p2SVpnGatewayGetConnectionHealthDetailed.ts  
[disconnectVpnConnectionsFromP2sVpnGateway]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/disconnectVpnConnectionsFromP2sVpnGateway.ts  
[getVirtualWanVpnServerConfigurations]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getVirtualWanVpnServerConfigurations.ts  
[virtualHubVirtualHubRouteTableV2Get]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/virtualHubVirtualHubRouteTableV2Get.ts  
[virtualHubRouteTableV2Put]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/virtualHubRouteTableV2Put.ts  
[virtualHubRouteTableV2Delete]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/virtualHubRouteTableV2Delete.ts  
[virtualHubRouteTableV2List]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/virtualHubRouteTableV2List.ts  
[expressRouteGatewayListBySubscription]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/expressRouteGatewayListBySubscription.ts  
[expressRouteGatewayListByResourceGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/expressRouteGatewayListByResourceGroup.ts  
[expressRouteGatewayCreate]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/expressRouteGatewayCreate.ts  
[expressRouteGatewayGet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/expressRouteGatewayGet.ts  
[expressRouteGatewayDelete]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/expressRouteGatewayDelete.ts  
[expressRouteConnectionCreate]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/expressRouteConnectionCreate.ts  
[expressRouteConnectionGet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/expressRouteConnectionGet.ts  
[expressRouteConnectionDelete]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/expressRouteConnectionDelete.ts  
[expressRouteConnectionList]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/expressRouteConnectionList.ts  
[routeTablePut]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/routeTablePut.ts  
[routeTableGet]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/routeTableGet.ts  
[routeTableDelete]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/routeTableDelete.ts  
[routeTableList]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/routeTableList.ts  
[listsAllWafPoliciesInAResourceGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listsAllWafPoliciesInAResourceGroup.ts  
[listsAllWafPoliciesInASubscription]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/listsAllWafPoliciesInASubscription.ts  
[getsAWafPolicyWithinAResourceGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/getsAWafPolicyWithinAResourceGroup.ts  
[createsOrUpdatesAWafPolicyWithinAResourceGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/createsOrUpdatesAWafPolicyWithinAResourceGroup.ts  
[deletesAWafPolicyWithinAResourceGroup]: https://github.com/Azure/azure-sdk-for-js/blob/main//samples/v1/typescript/src/deletesAWafPolicyWithinAResourceGroup.ts  
[apiref]: https://docs.microsoft.com/javascript/api/@msinternal/network-resource-manager  
[freesub]: https://azure.microsoft.com/free/  
[package]: https://github.com/Azure/azure-sdk-for-js/tree/main//README.md  
[typescript]: https://www.typescriptlang.org/docs/home.html  
