import * as coreAuth from '@azure/core-auth';
import * as coreClient from '@azure/core-client';
import { PagedAsyncIterableIterator } from '@azure/core-paging';
import { PollerLike } from '@azure/core-lro';
import { PollOperationState } from '@azure/core-lro';

/** AAD Vpn authentication type related parameters. */
export declare interface AadAuthenticationParameters {
    /** AAD Vpn authentication parameter AAD tenant. */
    aadTenant?: string;
    /** AAD Vpn authentication parameter AAD audience. */
    aadAudience?: string;
    /** AAD Vpn authentication parameter AAD issuer. */
    aadIssuer?: string;
}

/**
 * Defines values for Access. \
 * {@link KnownAccess} can be used interchangeably with Access,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Allow** \
 * **Deny**
 */
export declare type Access = string;

/** AddressSpace contains an array of IP address ranges that can be used by subnets of the virtual network. */
export declare interface AddressSpace {
    /** A list of address blocks reserved for this virtual network in CIDR notation. */
    addressPrefixes?: string[];
}

/** Application gateway resource. */
export declare type ApplicationGateway = Resource & {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /** A list of availability zones denoting where the resource needs to come from. */
    zones?: string[];
    /** The identity of the application gateway, if configured. */
    identity?: ManagedServiceIdentity;
    /** SKU of the application gateway resource. */
    sku?: ApplicationGatewaySku;
    /** SSL policy of the application gateway resource. */
    sslPolicy?: ApplicationGatewaySslPolicy;
    /**
     * Operational state of the application gateway resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly operationalState?: ApplicationGatewayOperationalState;
    /** Subnets of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits). */
    gatewayIPConfigurations?: ApplicationGatewayIPConfiguration[];
    /** Authentication certificates of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits). */
    authenticationCertificates?: ApplicationGatewayAuthenticationCertificate[];
    /** Trusted Root certificates of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits). */
    trustedRootCertificates?: ApplicationGatewayTrustedRootCertificate[];
    /** SSL certificates of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits). */
    sslCertificates?: ApplicationGatewaySslCertificate[];
    /** Frontend IP addresses of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits). */
    frontendIPConfigurations?: ApplicationGatewayFrontendIPConfiguration[];
    /** Frontend ports of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits). */
    frontendPorts?: ApplicationGatewayFrontendPort[];
    /** Probes of the application gateway resource. */
    probes?: ApplicationGatewayProbe[];
    /** Backend address pool of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits). */
    backendAddressPools?: ApplicationGatewayBackendAddressPool[];
    /** Backend http settings of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits). */
    backendHttpSettingsCollection?: ApplicationGatewayBackendHttpSettings[];
    /** Http listeners of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits). */
    httpListeners?: ApplicationGatewayHttpListener[];
    /** URL path map of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits). */
    urlPathMaps?: ApplicationGatewayUrlPathMap[];
    /** Request routing rules of the application gateway resource. */
    requestRoutingRules?: ApplicationGatewayRequestRoutingRule[];
    /** Rewrite rules for the application gateway resource. */
    rewriteRuleSets?: ApplicationGatewayRewriteRuleSet[];
    /** Redirect configurations of the application gateway resource. For default limits, see [Application Gateway limits](https://docs.microsoft.com/azure/azure-subscription-service-limits#application-gateway-limits). */
    redirectConfigurations?: ApplicationGatewayRedirectConfiguration[];
    /** Web application firewall configuration. */
    webApplicationFirewallConfiguration?: ApplicationGatewayWebApplicationFirewallConfiguration;
    /** Reference to the FirewallPolicy resource. */
    firewallPolicy?: SubResource;
    /** Whether HTTP2 is enabled on the application gateway resource. */
    enableHttp2?: boolean;
    /** Whether FIPS is enabled on the application gateway resource. */
    enableFips?: boolean;
    /** Autoscale Configuration. */
    autoscaleConfiguration?: ApplicationGatewayAutoscaleConfiguration;
    /**
     * The resource GUID property of the application gateway resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly resourceGuid?: string;
    /**
     * The provisioning state of the application gateway resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
    /** Custom error configurations of the application gateway resource. */
    customErrorConfigurations?: ApplicationGatewayCustomError[];
    /** If true, associates a firewall policy with an application gateway regardless whether the policy differs from the WAF Config. */
    forceFirewallPolicyAssociation?: boolean;
};

/** Authentication certificates of an application gateway. */
export declare type ApplicationGatewayAuthenticationCertificate = SubResource & {
    /** Name of the authentication certificate that is unique within an Application Gateway. */
    name?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /**
     * Type of the resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /** Certificate public data. */
    data?: string;
    /**
     * The provisioning state of the authentication certificate resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** Application Gateway autoscale configuration. */
export declare interface ApplicationGatewayAutoscaleConfiguration {
    /** Lower bound on number of Application Gateway capacity. */
    minCapacity: number;
    /** Upper bound on number of Application Gateway capacity. */
    maxCapacity?: number;
}

/** Response for ApplicationGatewayAvailableSslOptions API service call. */
export declare type ApplicationGatewayAvailableSslOptions = Resource & {
    /** List of available Ssl predefined policy. */
    predefinedPolicies?: SubResource[];
    /** Name of the Ssl predefined policy applied by default to application gateway. */
    defaultPolicy?: ApplicationGatewaySslPolicyName;
    /** List of available Ssl cipher suites. */
    availableCipherSuites?: ApplicationGatewaySslCipherSuite[];
    /** List of available Ssl protocols. */
    availableProtocols?: ApplicationGatewaySslProtocol[];
};

/** Response for ApplicationGatewayAvailableSslOptions API service call. */
export declare interface ApplicationGatewayAvailableSslPredefinedPolicies {
    /** List of available Ssl predefined policy. */
    value?: ApplicationGatewaySslPredefinedPolicy[];
    /** URL to get the next set of results. */
    nextLink?: string;
}

/** Response for ApplicationGatewayAvailableWafRuleSets API service call. */
export declare interface ApplicationGatewayAvailableWafRuleSetsResult {
    /** The list of application gateway rule sets. */
    value?: ApplicationGatewayFirewallRuleSet[];
}

/** Backend address of an application gateway. */
export declare interface ApplicationGatewayBackendAddress {
    /** Fully qualified domain name (FQDN). */
    fqdn?: string;
    /** IP address. */
    ipAddress?: string;
}

/** Backend Address Pool of an application gateway. */
export declare type ApplicationGatewayBackendAddressPool = SubResource & {
    /** Name of the backend address pool that is unique within an Application Gateway. */
    name?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /**
     * Type of the resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /**
     * Collection of references to IPs defined in network interfaces.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly backendIPConfigurations?: NetworkInterfaceIPConfiguration[];
    /** Backend addresses. */
    backendAddresses?: ApplicationGatewayBackendAddress[];
    /**
     * The provisioning state of the backend address pool resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** Response for ApplicationGatewayBackendHealth API service call. */
export declare interface ApplicationGatewayBackendHealth {
    /** A list of ApplicationGatewayBackendHealthPool resources. */
    backendAddressPools?: ApplicationGatewayBackendHealthPool[];
}

/** Application gateway BackendHealthHttp settings. */
export declare interface ApplicationGatewayBackendHealthHttpSettings {
    /** Reference to an ApplicationGatewayBackendHttpSettings resource. */
    backendHttpSettings?: ApplicationGatewayBackendHttpSettings;
    /** List of ApplicationGatewayBackendHealthServer resources. */
    servers?: ApplicationGatewayBackendHealthServer[];
}

/** Result of on demand test probe. */
export declare interface ApplicationGatewayBackendHealthOnDemand {
    /** Reference to an ApplicationGatewayBackendAddressPool resource. */
    backendAddressPool?: ApplicationGatewayBackendAddressPool;
    /** Application gateway BackendHealthHttp settings. */
    backendHealthHttpSettings?: ApplicationGatewayBackendHealthHttpSettings;
}

/** Application gateway BackendHealth pool. */
export declare interface ApplicationGatewayBackendHealthPool {
    /** Reference to an ApplicationGatewayBackendAddressPool resource. */
    backendAddressPool?: ApplicationGatewayBackendAddressPool;
    /** List of ApplicationGatewayBackendHealthHttpSettings resources. */
    backendHttpSettingsCollection?: ApplicationGatewayBackendHealthHttpSettings[];
}

/** Application gateway backendhealth http settings. */
export declare interface ApplicationGatewayBackendHealthServer {
    /** IP address or FQDN of backend server. */
    address?: string;
    /** Reference to IP configuration of backend server. */
    ipConfiguration?: NetworkInterfaceIPConfiguration;
    /** Health of backend server. */
    health?: ApplicationGatewayBackendHealthServerHealth;
    /** Health Probe Log. */
    healthProbeLog?: string;
}

/**
 * Defines values for ApplicationGatewayBackendHealthServerHealth. \
 * {@link KnownApplicationGatewayBackendHealthServerHealth} can be used interchangeably with ApplicationGatewayBackendHealthServerHealth,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown** \
 * **Up** \
 * **Down** \
 * **Partial** \
 * **Draining**
 */
export declare type ApplicationGatewayBackendHealthServerHealth = string;

/** Backend address pool settings of an application gateway. */
export declare type ApplicationGatewayBackendHttpSettings = SubResource & {
    /** Name of the backend http settings that is unique within an Application Gateway. */
    name?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /**
     * Type of the resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /** The destination port on the backend. */
    port?: number;
    /** The protocol used to communicate with the backend. */
    protocol?: ApplicationGatewayProtocol;
    /** Cookie based affinity. */
    cookieBasedAffinity?: ApplicationGatewayCookieBasedAffinity;
    /** Request timeout in seconds. Application Gateway will fail the request if response is not received within RequestTimeout. Acceptable values are from 1 second to 86400 seconds. */
    requestTimeout?: number;
    /** Probe resource of an application gateway. */
    probe?: SubResource;
    /** Array of references to application gateway authentication certificates. */
    authenticationCertificates?: SubResource[];
    /** Array of references to application gateway trusted root certificates. */
    trustedRootCertificates?: SubResource[];
    /** Connection draining of the backend http settings resource. */
    connectionDraining?: ApplicationGatewayConnectionDraining;
    /** Host header to be sent to the backend servers. */
    hostName?: string;
    /** Whether to pick host header should be picked from the host name of the backend server. Default value is false. */
    pickHostNameFromBackendAddress?: boolean;
    /** Cookie name to use for the affinity cookie. */
    affinityCookieName?: string;
    /** Whether the probe is enabled. Default value is false. */
    probeEnabled?: boolean;
    /** Path which should be used as a prefix for all HTTP requests. Null means no path will be prefixed. Default value is null. */
    path?: string;
    /**
     * The provisioning state of the backend HTTP settings resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** Connection draining allows open connections to a backend server to be active for a specified time after the backend server got removed from the configuration. */
export declare interface ApplicationGatewayConnectionDraining {
    /** Whether connection draining is enabled or not. */
    enabled: boolean;
    /** The number of seconds connection draining is active. Acceptable values are from 1 second to 3600 seconds. */
    drainTimeoutInSec: number;
}

/**
 * Defines values for ApplicationGatewayCookieBasedAffinity. \
 * {@link KnownApplicationGatewayCookieBasedAffinity} can be used interchangeably with ApplicationGatewayCookieBasedAffinity,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Enabled** \
 * **Disabled**
 */
export declare type ApplicationGatewayCookieBasedAffinity = string;

/** Customer error of an application gateway. */
export declare interface ApplicationGatewayCustomError {
    /** Status code of the application gateway customer error. */
    statusCode?: ApplicationGatewayCustomErrorStatusCode;
    /** Error page URL of the application gateway customer error. */
    customErrorPageUrl?: string;
}

/**
 * Defines values for ApplicationGatewayCustomErrorStatusCode. \
 * {@link KnownApplicationGatewayCustomErrorStatusCode} can be used interchangeably with ApplicationGatewayCustomErrorStatusCode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **HttpStatus403** \
 * **HttpStatus502**
 */
export declare type ApplicationGatewayCustomErrorStatusCode = string;

/** Allows to disable rules within a rule group or an entire rule group. */
export declare interface ApplicationGatewayFirewallDisabledRuleGroup {
    /** The name of the rule group that will be disabled. */
    ruleGroupName: string;
    /** The list of rules that will be disabled. If null, all rules of the rule group will be disabled. */
    rules?: number[];
}

/** Allow to exclude some variable satisfy the condition for the WAF check. */
export declare interface ApplicationGatewayFirewallExclusion {
    /** The variable to be excluded. */
    matchVariable: string;
    /** When matchVariable is a collection, operate on the selector to specify which elements in the collection this exclusion applies to. */
    selectorMatchOperator: string;
    /** When matchVariable is a collection, operator used to specify which elements in the collection this exclusion applies to. */
    selector: string;
}

/**
 * Defines values for ApplicationGatewayFirewallMode. \
 * {@link KnownApplicationGatewayFirewallMode} can be used interchangeably with ApplicationGatewayFirewallMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Detection** \
 * **Prevention**
 */
export declare type ApplicationGatewayFirewallMode = string;

/** A web application firewall rule. */
export declare interface ApplicationGatewayFirewallRule {
    /** The identifier of the web application firewall rule. */
    ruleId: number;
    /** The description of the web application firewall rule. */
    description?: string;
}

/** A web application firewall rule group. */
export declare interface ApplicationGatewayFirewallRuleGroup {
    /** The name of the web application firewall rule group. */
    ruleGroupName: string;
    /** The description of the web application firewall rule group. */
    description?: string;
    /** The rules of the web application firewall rule group. */
    rules: ApplicationGatewayFirewallRule[];
}

/** A web application firewall rule set. */
export declare type ApplicationGatewayFirewallRuleSet = Resource & {
    /**
     * The provisioning state of the web application firewall rule set.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
    /** The type of the web application firewall rule set. */
    ruleSetType?: string;
    /** The version of the web application firewall rule set type. */
    ruleSetVersion?: string;
    /** The rule groups of the web application firewall rule set. */
    ruleGroups?: ApplicationGatewayFirewallRuleGroup[];
};

/** Frontend IP configuration of an application gateway. */
export declare type ApplicationGatewayFrontendIPConfiguration = SubResource & {
    /** Name of the frontend IP configuration that is unique within an Application Gateway. */
    name?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /**
     * Type of the resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /** PrivateIPAddress of the network interface IP Configuration. */
    privateIPAddress?: string;
    /** The private IP address allocation method. */
    privateIPAllocationMethod?: IPAllocationMethod;
    /** Reference to the subnet resource. */
    subnet?: SubResource;
    /** Reference to the PublicIP resource. */
    publicIPAddress?: SubResource;
    /**
     * The provisioning state of the frontend IP configuration resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** Frontend port of an application gateway. */
export declare type ApplicationGatewayFrontendPort = SubResource & {
    /** Name of the frontend port that is unique within an Application Gateway. */
    name?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /**
     * Type of the resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /** Frontend port. */
    port?: number;
    /**
     * The provisioning state of the frontend port resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** Header configuration of the Actions set in Application Gateway. */
export declare interface ApplicationGatewayHeaderConfiguration {
    /** Header name of the header configuration. */
    headerName?: string;
    /** Header value of the header configuration. */
    headerValue?: string;
}

/** Http listener of an application gateway. */
export declare type ApplicationGatewayHttpListener = SubResource & {
    /** Name of the HTTP listener that is unique within an Application Gateway. */
    name?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /**
     * Type of the resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /** Frontend IP configuration resource of an application gateway. */
    frontendIPConfiguration?: SubResource;
    /** Frontend port resource of an application gateway. */
    frontendPort?: SubResource;
    /** Protocol of the HTTP listener. */
    protocol?: ApplicationGatewayProtocol;
    /** Host name of HTTP listener. */
    hostName?: string;
    /** SSL certificate resource of an application gateway. */
    sslCertificate?: SubResource;
    /** Applicable only if protocol is https. Enables SNI for multi-hosting. */
    requireServerNameIndication?: boolean;
    /**
     * The provisioning state of the HTTP listener resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
    /** Custom error configurations of the HTTP listener. */
    customErrorConfigurations?: ApplicationGatewayCustomError[];
    /** Reference to the FirewallPolicy resource. */
    firewallPolicy?: SubResource;
    /** List of Host names for HTTP Listener that allows special wildcard characters as well. */
    hostNames?: string[];
};

/** IP configuration of an application gateway. Currently 1 public and 1 private IP configuration is allowed. */
export declare type ApplicationGatewayIPConfiguration = SubResource & {
    /** Name of the IP configuration that is unique within an Application Gateway. */
    name?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /**
     * Type of the resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /** Reference to the subnet resource. A subnet from where application gateway gets its private address. */
    subnet?: SubResource;
    /**
     * The provisioning state of the application gateway IP configuration resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** Response for ListApplicationGateways API service call. */
export declare interface ApplicationGatewayListResult {
    /** List of an application gateways in a resource group. */
    value?: ApplicationGateway[];
    /** URL to get the next set of results. */
    nextLink?: string;
}

/** Details of on demand test probe request. */
export declare interface ApplicationGatewayOnDemandProbe {
    /** The protocol used for the probe. */
    protocol?: ApplicationGatewayProtocol;
    /** Host name to send the probe to. */
    host?: string;
    /** Relative path of probe. Valid path starts from '/'. Probe is sent to <Protocol>://<host>:<port><path>. */
    path?: string;
    /** The probe timeout in seconds. Probe marked as failed if valid response is not received with this timeout period. Acceptable values are from 1 second to 86400 seconds. */
    timeout?: number;
    /** Whether the host header should be picked from the backend http settings. Default value is false. */
    pickHostNameFromBackendHttpSettings?: boolean;
    /** Criterion for classifying a healthy probe response. */
    match?: ApplicationGatewayProbeHealthResponseMatch;
    /** Reference to backend pool of application gateway to which probe request will be sent. */
    backendAddressPool?: SubResource;
    /** Reference to backend http setting of application gateway to be used for test probe. */
    backendHttpSettings?: SubResource;
}

/**
 * Defines values for ApplicationGatewayOperationalState. \
 * {@link KnownApplicationGatewayOperationalState} can be used interchangeably with ApplicationGatewayOperationalState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Stopped** \
 * **Starting** \
 * **Running** \
 * **Stopping**
 */
export declare type ApplicationGatewayOperationalState = string;

/** Path rule of URL path map of an application gateway. */
export declare type ApplicationGatewayPathRule = SubResource & {
    /** Name of the path rule that is unique within an Application Gateway. */
    name?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /**
     * Type of the resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /** Path rules of URL path map. */
    paths?: string[];
    /** Backend address pool resource of URL path map path rule. */
    backendAddressPool?: SubResource;
    /** Backend http settings resource of URL path map path rule. */
    backendHttpSettings?: SubResource;
    /** Redirect configuration resource of URL path map path rule. */
    redirectConfiguration?: SubResource;
    /** Rewrite rule set resource of URL path map path rule. */
    rewriteRuleSet?: SubResource;
    /**
     * The provisioning state of the path rule resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
    /** Reference to the FirewallPolicy resource. */
    firewallPolicy?: SubResource;
};

/** Probe of the application gateway. */
export declare type ApplicationGatewayProbe = SubResource & {
    /** Name of the probe that is unique within an Application Gateway. */
    name?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /**
     * Type of the resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /** The protocol used for the probe. */
    protocol?: ApplicationGatewayProtocol;
    /** Host name to send the probe to. */
    host?: string;
    /** Relative path of probe. Valid path starts from '/'. Probe is sent to <Protocol>://<host>:<port><path>. */
    path?: string;
    /** The probing interval in seconds. This is the time interval between two consecutive probes. Acceptable values are from 1 second to 86400 seconds. */
    interval?: number;
    /** The probe timeout in seconds. Probe marked as failed if valid response is not received with this timeout period. Acceptable values are from 1 second to 86400 seconds. */
    timeout?: number;
    /** The probe retry count. Backend server is marked down after consecutive probe failure count reaches UnhealthyThreshold. Acceptable values are from 1 second to 20. */
    unhealthyThreshold?: number;
    /** Whether the host header should be picked from the backend http settings. Default value is false. */
    pickHostNameFromBackendHttpSettings?: boolean;
    /** Minimum number of servers that are always marked healthy. Default value is 0. */
    minServers?: number;
    /** Criterion for classifying a healthy probe response. */
    match?: ApplicationGatewayProbeHealthResponseMatch;
    /**
     * The provisioning state of the probe resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
    /** Custom port which will be used for probing the backend servers. The valid value ranges from 1 to 65535. In case not set, port from http settings will be used. This property is valid for Standard_v2 and WAF_v2 only. */
    port?: number;
};

/** Application gateway probe health response match. */
export declare interface ApplicationGatewayProbeHealthResponseMatch {
    /** Body that must be contained in the health response. Default value is empty. */
    body?: string;
    /** Allowed ranges of healthy status codes. Default range of healthy status codes is 200-399. */
    statusCodes?: string[];
}

/**
 * Defines values for ApplicationGatewayProtocol. \
 * {@link KnownApplicationGatewayProtocol} can be used interchangeably with ApplicationGatewayProtocol,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Http** \
 * **Https**
 */
export declare type ApplicationGatewayProtocol = string;

/** Redirect configuration of an application gateway. */
export declare type ApplicationGatewayRedirectConfiguration = SubResource & {
    /** Name of the redirect configuration that is unique within an Application Gateway. */
    name?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /**
     * Type of the resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /** HTTP redirection type. */
    redirectType?: ApplicationGatewayRedirectType;
    /** Reference to a listener to redirect the request to. */
    targetListener?: SubResource;
    /** Url to redirect the request to. */
    targetUrl?: string;
    /** Include path in the redirected url. */
    includePath?: boolean;
    /** Include query string in the redirected url. */
    includeQueryString?: boolean;
    /** Request routing specifying redirect configuration. */
    requestRoutingRules?: SubResource[];
    /** Url path maps specifying default redirect configuration. */
    urlPathMaps?: SubResource[];
    /** Path rules specifying redirect configuration. */
    pathRules?: SubResource[];
};

/**
 * Defines values for ApplicationGatewayRedirectType. \
 * {@link KnownApplicationGatewayRedirectType} can be used interchangeably with ApplicationGatewayRedirectType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Permanent** \
 * **Found** \
 * **SeeOther** \
 * **Temporary**
 */
export declare type ApplicationGatewayRedirectType = string;

/** Request routing rule of an application gateway. */
export declare type ApplicationGatewayRequestRoutingRule = SubResource & {
    /** Name of the request routing rule that is unique within an Application Gateway. */
    name?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /**
     * Type of the resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /** Rule type. */
    ruleType?: ApplicationGatewayRequestRoutingRuleType;
    /** Priority of the request routing rule. */
    priority?: number;
    /** Backend address pool resource of the application gateway. */
    backendAddressPool?: SubResource;
    /** Backend http settings resource of the application gateway. */
    backendHttpSettings?: SubResource;
    /** Http listener resource of the application gateway. */
    httpListener?: SubResource;
    /** URL path map resource of the application gateway. */
    urlPathMap?: SubResource;
    /** Rewrite Rule Set resource in Basic rule of the application gateway. */
    rewriteRuleSet?: SubResource;
    /** Redirect configuration resource of the application gateway. */
    redirectConfiguration?: SubResource;
    /**
     * The provisioning state of the request routing rule resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/**
 * Defines values for ApplicationGatewayRequestRoutingRuleType. \
 * {@link KnownApplicationGatewayRequestRoutingRuleType} can be used interchangeably with ApplicationGatewayRequestRoutingRuleType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Basic** \
 * **PathBasedRouting**
 */
export declare type ApplicationGatewayRequestRoutingRuleType = string;

/** Rewrite rule of an application gateway. */
export declare interface ApplicationGatewayRewriteRule {
    /** Name of the rewrite rule that is unique within an Application Gateway. */
    name?: string;
    /** Rule Sequence of the rewrite rule that determines the order of execution of a particular rule in a RewriteRuleSet. */
    ruleSequence?: number;
    /** Conditions based on which the action set execution will be evaluated. */
    conditions?: ApplicationGatewayRewriteRuleCondition[];
    /** Set of actions to be done as part of the rewrite Rule. */
    actionSet?: ApplicationGatewayRewriteRuleActionSet;
}

/** Set of actions in the Rewrite Rule in Application Gateway. */
export declare interface ApplicationGatewayRewriteRuleActionSet {
    /** Request Header Actions in the Action Set. */
    requestHeaderConfigurations?: ApplicationGatewayHeaderConfiguration[];
    /** Response Header Actions in the Action Set. */
    responseHeaderConfigurations?: ApplicationGatewayHeaderConfiguration[];
    /** Url Configuration Action in the Action Set. */
    urlConfiguration?: ApplicationGatewayUrlConfiguration;
}

/** Set of conditions in the Rewrite Rule in Application Gateway. */
export declare interface ApplicationGatewayRewriteRuleCondition {
    /** The condition parameter of the RewriteRuleCondition. */
    variable?: string;
    /** The pattern, either fixed string or regular expression, that evaluates the truthfulness of the condition. */
    pattern?: string;
    /** Setting this paramter to truth value with force the pattern to do a case in-sensitive comparison. */
    ignoreCase?: boolean;
    /** Setting this value as truth will force to check the negation of the condition given by the user. */
    negate?: boolean;
}

/** Rewrite rule set of an application gateway. */
export declare type ApplicationGatewayRewriteRuleSet = SubResource & {
    /** Name of the rewrite rule set that is unique within an Application Gateway. */
    name?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /** Rewrite rules in the rewrite rule set. */
    rewriteRules?: ApplicationGatewayRewriteRule[];
    /**
     * The provisioning state of the rewrite rule set resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** Interface representing a ApplicationGateways. */
export declare interface ApplicationGateways {
    /**
     * Lists all application gateways in a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, options?: ApplicationGatewaysListOptionalParams): PagedAsyncIterableIterator<ApplicationGateway>;
    /**
     * Gets all the application gateways in a subscription.
     * @param options The options parameters.
     */
    listAll(options?: ApplicationGatewaysListAllOptionalParams): PagedAsyncIterableIterator<ApplicationGateway>;
    /**
     * Lists all SSL predefined policies for configuring Ssl policy.
     * @param options The options parameters.
     */
    listAvailableSslPredefinedPolicies(options?: ApplicationGatewaysListAvailableSslPredefinedPoliciesOptionalParams): PagedAsyncIterableIterator<ApplicationGatewaySslPredefinedPolicy>;
    /**
     * Deletes the specified application gateway.
     * @param resourceGroupName The name of the resource group.
     * @param applicationGatewayName The name of the application gateway.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, applicationGatewayName: string, options?: ApplicationGatewaysDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the specified application gateway.
     * @param resourceGroupName The name of the resource group.
     * @param applicationGatewayName The name of the application gateway.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, applicationGatewayName: string, options?: ApplicationGatewaysDeleteOptionalParams): Promise<void>;
    /**
     * Gets the specified application gateway.
     * @param resourceGroupName The name of the resource group.
     * @param applicationGatewayName The name of the application gateway.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, applicationGatewayName: string, options?: ApplicationGatewaysGetOptionalParams): Promise<ApplicationGatewaysGetResponse>;
    /**
     * Creates or updates the specified application gateway.
     * @param resourceGroupName The name of the resource group.
     * @param applicationGatewayName The name of the application gateway.
     * @param parameters Parameters supplied to the create or update application gateway operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, applicationGatewayName: string, parameters: ApplicationGateway, options?: ApplicationGatewaysCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<ApplicationGatewaysCreateOrUpdateResponse>, ApplicationGatewaysCreateOrUpdateResponse>>;
    /**
     * Creates or updates the specified application gateway.
     * @param resourceGroupName The name of the resource group.
     * @param applicationGatewayName The name of the application gateway.
     * @param parameters Parameters supplied to the create or update application gateway operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, applicationGatewayName: string, parameters: ApplicationGateway, options?: ApplicationGatewaysCreateOrUpdateOptionalParams): Promise<ApplicationGatewaysCreateOrUpdateResponse>;
    /**
     * Updates the specified application gateway tags.
     * @param resourceGroupName The name of the resource group.
     * @param applicationGatewayName The name of the application gateway.
     * @param parameters Parameters supplied to update application gateway tags.
     * @param options The options parameters.
     */
    updateTags(resourceGroupName: string, applicationGatewayName: string, parameters: TagsObject, options?: ApplicationGatewaysUpdateTagsOptionalParams): Promise<ApplicationGatewaysUpdateTagsResponse>;
    /**
     * Starts the specified application gateway.
     * @param resourceGroupName The name of the resource group.
     * @param applicationGatewayName The name of the application gateway.
     * @param options The options parameters.
     */
    beginStart(resourceGroupName: string, applicationGatewayName: string, options?: ApplicationGatewaysStartOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Starts the specified application gateway.
     * @param resourceGroupName The name of the resource group.
     * @param applicationGatewayName The name of the application gateway.
     * @param options The options parameters.
     */
    beginStartAndWait(resourceGroupName: string, applicationGatewayName: string, options?: ApplicationGatewaysStartOptionalParams): Promise<void>;
    /**
     * Stops the specified application gateway in a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param applicationGatewayName The name of the application gateway.
     * @param options The options parameters.
     */
    beginStop(resourceGroupName: string, applicationGatewayName: string, options?: ApplicationGatewaysStopOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Stops the specified application gateway in a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param applicationGatewayName The name of the application gateway.
     * @param options The options parameters.
     */
    beginStopAndWait(resourceGroupName: string, applicationGatewayName: string, options?: ApplicationGatewaysStopOptionalParams): Promise<void>;
    /**
     * Gets the backend health of the specified application gateway in a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param applicationGatewayName The name of the application gateway.
     * @param options The options parameters.
     */
    beginBackendHealth(resourceGroupName: string, applicationGatewayName: string, options?: ApplicationGatewaysBackendHealthOptionalParams): Promise<PollerLike<PollOperationState<ApplicationGatewaysBackendHealthResponse>, ApplicationGatewaysBackendHealthResponse>>;
    /**
     * Gets the backend health of the specified application gateway in a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param applicationGatewayName The name of the application gateway.
     * @param options The options parameters.
     */
    beginBackendHealthAndWait(resourceGroupName: string, applicationGatewayName: string, options?: ApplicationGatewaysBackendHealthOptionalParams): Promise<ApplicationGatewaysBackendHealthResponse>;
    /**
     * Gets the backend health for given combination of backend pool and http setting of the specified
     * application gateway in a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param applicationGatewayName The name of the application gateway.
     * @param probeRequest Request body for on-demand test probe operation.
     * @param options The options parameters.
     */
    beginBackendHealthOnDemand(resourceGroupName: string, applicationGatewayName: string, probeRequest: ApplicationGatewayOnDemandProbe, options?: ApplicationGatewaysBackendHealthOnDemandOptionalParams): Promise<PollerLike<PollOperationState<ApplicationGatewaysBackendHealthOnDemandResponse>, ApplicationGatewaysBackendHealthOnDemandResponse>>;
    /**
     * Gets the backend health for given combination of backend pool and http setting of the specified
     * application gateway in a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param applicationGatewayName The name of the application gateway.
     * @param probeRequest Request body for on-demand test probe operation.
     * @param options The options parameters.
     */
    beginBackendHealthOnDemandAndWait(resourceGroupName: string, applicationGatewayName: string, probeRequest: ApplicationGatewayOnDemandProbe, options?: ApplicationGatewaysBackendHealthOnDemandOptionalParams): Promise<ApplicationGatewaysBackendHealthOnDemandResponse>;
    /**
     * Lists all available server variables.
     * @param options The options parameters.
     */
    listAvailableServerVariables(options?: ApplicationGatewaysListAvailableServerVariablesOptionalParams): Promise<ApplicationGatewaysListAvailableServerVariablesResponse>;
    /**
     * Lists all available request headers.
     * @param options The options parameters.
     */
    listAvailableRequestHeaders(options?: ApplicationGatewaysListAvailableRequestHeadersOptionalParams): Promise<ApplicationGatewaysListAvailableRequestHeadersResponse>;
    /**
     * Lists all available response headers.
     * @param options The options parameters.
     */
    listAvailableResponseHeaders(options?: ApplicationGatewaysListAvailableResponseHeadersOptionalParams): Promise<ApplicationGatewaysListAvailableResponseHeadersResponse>;
    /**
     * Lists all available web application firewall rule sets.
     * @param options The options parameters.
     */
    listAvailableWafRuleSets(options?: ApplicationGatewaysListAvailableWafRuleSetsOptionalParams): Promise<ApplicationGatewaysListAvailableWafRuleSetsResponse>;
    /**
     * Lists available Ssl options for configuring Ssl policy.
     * @param options The options parameters.
     */
    listAvailableSslOptions(options?: ApplicationGatewaysListAvailableSslOptionsOptionalParams): Promise<ApplicationGatewaysListAvailableSslOptionsResponse>;
    /**
     * Gets Ssl predefined policy with the specified policy name.
     * @param predefinedPolicyName Name of Ssl predefined policy.
     * @param options The options parameters.
     */
    getSslPredefinedPolicy(predefinedPolicyName: string, options?: ApplicationGatewaysGetSslPredefinedPolicyOptionalParams): Promise<ApplicationGatewaysGetSslPredefinedPolicyResponse>;
}

/** Optional parameters. */
export declare interface ApplicationGatewaysBackendHealthOnDemandOptionalParams extends coreClient.OperationOptions {
    /** Expands BackendAddressPool and BackendHttpSettings referenced in backend health. */
    expand?: string;
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the backendHealthOnDemand operation. */
export declare type ApplicationGatewaysBackendHealthOnDemandResponse = ApplicationGatewayBackendHealthOnDemand;

/** Optional parameters. */
export declare interface ApplicationGatewaysBackendHealthOptionalParams extends coreClient.OperationOptions {
    /** Expands BackendAddressPool and BackendHttpSettings referenced in backend health. */
    expand?: string;
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the backendHealth operation. */
export declare type ApplicationGatewaysBackendHealthResponse = ApplicationGatewayBackendHealth;

/** Optional parameters. */
export declare interface ApplicationGatewaysCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type ApplicationGatewaysCreateOrUpdateResponse = ApplicationGateway;

/** Optional parameters. */
export declare interface ApplicationGatewaysDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface ApplicationGatewaysGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type ApplicationGatewaysGetResponse = ApplicationGateway;

/** Optional parameters. */
export declare interface ApplicationGatewaysGetSslPredefinedPolicyOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getSslPredefinedPolicy operation. */
export declare type ApplicationGatewaysGetSslPredefinedPolicyResponse = ApplicationGatewaySslPredefinedPolicy;

/** SKU of an application gateway. */
export declare interface ApplicationGatewaySku {
    /** Name of an application gateway SKU. */
    name?: ApplicationGatewaySkuName;
    /** Tier of an application gateway. */
    tier?: ApplicationGatewayTier;
    /** Capacity (instance count) of an application gateway. */
    capacity?: number;
}

/**
 * Defines values for ApplicationGatewaySkuName. \
 * {@link KnownApplicationGatewaySkuName} can be used interchangeably with ApplicationGatewaySkuName,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Standard_Small** \
 * **Standard_Medium** \
 * **Standard_Large** \
 * **WAF_Medium** \
 * **WAF_Large** \
 * **Standard_v2** \
 * **WAF_v2**
 */
export declare type ApplicationGatewaySkuName = string;

/** Optional parameters. */
export declare interface ApplicationGatewaysListAllNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAllNext operation. */
export declare type ApplicationGatewaysListAllNextResponse = ApplicationGatewayListResult;

/** Optional parameters. */
export declare interface ApplicationGatewaysListAllOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAll operation. */
export declare type ApplicationGatewaysListAllResponse = ApplicationGatewayListResult;

/** Optional parameters. */
export declare interface ApplicationGatewaysListAvailableRequestHeadersOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAvailableRequestHeaders operation. */
export declare type ApplicationGatewaysListAvailableRequestHeadersResponse = {
    /** The parsed response body. */
    body: string[];
};

/** Optional parameters. */
export declare interface ApplicationGatewaysListAvailableResponseHeadersOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAvailableResponseHeaders operation. */
export declare type ApplicationGatewaysListAvailableResponseHeadersResponse = {
    /** The parsed response body. */
    body: string[];
};

/** Optional parameters. */
export declare interface ApplicationGatewaysListAvailableServerVariablesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAvailableServerVariables operation. */
export declare type ApplicationGatewaysListAvailableServerVariablesResponse = {
    /** The parsed response body. */
    body: string[];
};

/** Optional parameters. */
export declare interface ApplicationGatewaysListAvailableSslOptionsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAvailableSslOptions operation. */
export declare type ApplicationGatewaysListAvailableSslOptionsResponse = ApplicationGatewayAvailableSslOptions;

/** Optional parameters. */
export declare interface ApplicationGatewaysListAvailableSslPredefinedPoliciesNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAvailableSslPredefinedPoliciesNext operation. */
export declare type ApplicationGatewaysListAvailableSslPredefinedPoliciesNextResponse = ApplicationGatewayAvailableSslPredefinedPolicies;

/** Optional parameters. */
export declare interface ApplicationGatewaysListAvailableSslPredefinedPoliciesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAvailableSslPredefinedPolicies operation. */
export declare type ApplicationGatewaysListAvailableSslPredefinedPoliciesResponse = ApplicationGatewayAvailableSslPredefinedPolicies;

/** Optional parameters. */
export declare interface ApplicationGatewaysListAvailableWafRuleSetsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAvailableWafRuleSets operation. */
export declare type ApplicationGatewaysListAvailableWafRuleSetsResponse = ApplicationGatewayAvailableWafRuleSetsResult;

/** Optional parameters. */
export declare interface ApplicationGatewaysListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type ApplicationGatewaysListNextResponse = ApplicationGatewayListResult;

/** Optional parameters. */
export declare interface ApplicationGatewaysListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type ApplicationGatewaysListResponse = ApplicationGatewayListResult;

/** SSL certificates of an application gateway. */
export declare type ApplicationGatewaySslCertificate = SubResource & {
    /** Name of the SSL certificate that is unique within an Application Gateway. */
    name?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /**
     * Type of the resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /** Base-64 encoded pfx certificate. Only applicable in PUT Request. */
    data?: string;
    /** Password for the pfx file specified in data. Only applicable in PUT request. */
    password?: string;
    /**
     * Base-64 encoded Public cert data corresponding to pfx specified in data. Only applicable in GET request.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly publicCertData?: string;
    /** Secret Id of (base-64 encoded unencrypted pfx) 'Secret' or 'Certificate' object stored in KeyVault. */
    keyVaultSecretId?: string;
    /**
     * The provisioning state of the SSL certificate resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/**
 * Defines values for ApplicationGatewaySslCipherSuite. \
 * {@link KnownApplicationGatewaySslCipherSuite} can be used interchangeably with ApplicationGatewaySslCipherSuite,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384** \
 * **TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256** \
 * **TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA** \
 * **TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA** \
 * **TLS_DHE_RSA_WITH_AES_256_GCM_SHA384** \
 * **TLS_DHE_RSA_WITH_AES_128_GCM_SHA256** \
 * **TLS_DHE_RSA_WITH_AES_256_CBC_SHA** \
 * **TLS_DHE_RSA_WITH_AES_128_CBC_SHA** \
 * **TLS_RSA_WITH_AES_256_GCM_SHA384** \
 * **TLS_RSA_WITH_AES_128_GCM_SHA256** \
 * **TLS_RSA_WITH_AES_256_CBC_SHA256** \
 * **TLS_RSA_WITH_AES_128_CBC_SHA256** \
 * **TLS_RSA_WITH_AES_256_CBC_SHA** \
 * **TLS_RSA_WITH_AES_128_CBC_SHA** \
 * **TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384** \
 * **TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256** \
 * **TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384** \
 * **TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256** \
 * **TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA** \
 * **TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA** \
 * **TLS_DHE_DSS_WITH_AES_256_CBC_SHA256** \
 * **TLS_DHE_DSS_WITH_AES_128_CBC_SHA256** \
 * **TLS_DHE_DSS_WITH_AES_256_CBC_SHA** \
 * **TLS_DHE_DSS_WITH_AES_128_CBC_SHA** \
 * **TLS_RSA_WITH_3DES_EDE_CBC_SHA** \
 * **TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA** \
 * **TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256** \
 * **TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384**
 */
export declare type ApplicationGatewaySslCipherSuite = string;

/** Application Gateway Ssl policy. */
export declare interface ApplicationGatewaySslPolicy {
    /** Ssl protocols to be disabled on application gateway. */
    disabledSslProtocols?: ApplicationGatewaySslProtocol[];
    /** Type of Ssl Policy. */
    policyType?: ApplicationGatewaySslPolicyType;
    /** Name of Ssl predefined policy. */
    policyName?: ApplicationGatewaySslPolicyName;
    /** Ssl cipher suites to be enabled in the specified order to application gateway. */
    cipherSuites?: ApplicationGatewaySslCipherSuite[];
    /** Minimum version of Ssl protocol to be supported on application gateway. */
    minProtocolVersion?: ApplicationGatewaySslProtocol;
}

/**
 * Defines values for ApplicationGatewaySslPolicyName. \
 * {@link KnownApplicationGatewaySslPolicyName} can be used interchangeably with ApplicationGatewaySslPolicyName,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **AppGwSslPolicy20150501** \
 * **AppGwSslPolicy20170401** \
 * **AppGwSslPolicy20170401S**
 */
export declare type ApplicationGatewaySslPolicyName = string;

/**
 * Defines values for ApplicationGatewaySslPolicyType. \
 * {@link KnownApplicationGatewaySslPolicyType} can be used interchangeably with ApplicationGatewaySslPolicyType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Predefined** \
 * **Custom**
 */
export declare type ApplicationGatewaySslPolicyType = string;

/** An Ssl predefined policy. */
export declare type ApplicationGatewaySslPredefinedPolicy = SubResource & {
    /** Name of the Ssl predefined policy. */
    name?: string;
    /** Ssl cipher suites to be enabled in the specified order for application gateway. */
    cipherSuites?: ApplicationGatewaySslCipherSuite[];
    /** Minimum version of Ssl protocol to be supported on application gateway. */
    minProtocolVersion?: ApplicationGatewaySslProtocol;
};

/**
 * Defines values for ApplicationGatewaySslProtocol. \
 * {@link KnownApplicationGatewaySslProtocol} can be used interchangeably with ApplicationGatewaySslProtocol,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **TLSv1_0** \
 * **TLSv1_1** \
 * **TLSv1_2**
 */
export declare type ApplicationGatewaySslProtocol = string;

/** Optional parameters. */
export declare interface ApplicationGatewaysStartOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface ApplicationGatewaysStopOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface ApplicationGatewaysUpdateTagsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateTags operation. */
export declare type ApplicationGatewaysUpdateTagsResponse = ApplicationGateway;

/**
 * Defines values for ApplicationGatewayTier. \
 * {@link KnownApplicationGatewayTier} can be used interchangeably with ApplicationGatewayTier,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Standard** \
 * **WAF** \
 * **Standard_v2** \
 * **WAF_v2**
 */
export declare type ApplicationGatewayTier = string;

/** Trusted Root certificates of an application gateway. */
export declare type ApplicationGatewayTrustedRootCertificate = SubResource & {
    /** Name of the trusted root certificate that is unique within an Application Gateway. */
    name?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /**
     * Type of the resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /** Certificate public data. */
    data?: string;
    /** Secret Id of (base-64 encoded unencrypted pfx) 'Secret' or 'Certificate' object stored in KeyVault. */
    keyVaultSecretId?: string;
    /**
     * The provisioning state of the trusted root certificate resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** Url configuration of the Actions set in Application Gateway. */
export declare interface ApplicationGatewayUrlConfiguration {
    /** Url path which user has provided for url rewrite. Null means no path will be updated. Default value is null. */
    modifiedPath?: string;
    /** Query string which user has provided for url rewrite. Null means no query string will be updated. Default value is null. */
    modifiedQueryString?: string;
    /** If set as true, it will re-evaluate the url path map provided in path based request routing rules using modified path. Default value is false. */
    reroute?: boolean;
}

/** UrlPathMaps give a url path to the backend mapping information for PathBasedRouting. */
export declare type ApplicationGatewayUrlPathMap = SubResource & {
    /** Name of the URL path map that is unique within an Application Gateway. */
    name?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /**
     * Type of the resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /** Default backend address pool resource of URL path map. */
    defaultBackendAddressPool?: SubResource;
    /** Default backend http settings resource of URL path map. */
    defaultBackendHttpSettings?: SubResource;
    /** Default Rewrite rule set resource of URL path map. */
    defaultRewriteRuleSet?: SubResource;
    /** Default redirect configuration resource of URL path map. */
    defaultRedirectConfiguration?: SubResource;
    /** Path rule of URL path map resource. */
    pathRules?: ApplicationGatewayPathRule[];
    /**
     * The provisioning state of the URL path map resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** Application gateway web application firewall configuration. */
export declare interface ApplicationGatewayWebApplicationFirewallConfiguration {
    /** Whether the web application firewall is enabled or not. */
    enabled: boolean;
    /** Web application firewall mode. */
    firewallMode: ApplicationGatewayFirewallMode;
    /** The type of the web application firewall rule set. Possible values are: 'OWASP'. */
    ruleSetType: string;
    /** The version of the rule set type. */
    ruleSetVersion: string;
    /** The disabled rule groups. */
    disabledRuleGroups?: ApplicationGatewayFirewallDisabledRuleGroup[];
    /** Whether allow WAF to check request Body. */
    requestBodyCheck?: boolean;
    /** Maximum request body size for WAF. */
    maxRequestBodySize?: number;
    /** Maximum request body size in Kb for WAF. */
    maxRequestBodySizeInKb?: number;
    /** Maximum file upload size in Mb for WAF. */
    fileUploadLimitInMb?: number;
    /** The exclusion list. */
    exclusions?: ApplicationGatewayFirewallExclusion[];
}

/** Rule condition of type application. */
export declare type ApplicationRuleCondition = FirewallPolicyRuleCondition & {
    /** Polymorphic discriminator, which specifies the different types this object can be */
    ruleConditionType: "ApplicationRuleCondition";
    /** List of source IP addresses for this rule. */
    sourceAddresses?: string[];
    /** List of destination IP addresses or Service Tags. */
    destinationAddresses?: string[];
    /** Array of Application Protocols. */
    protocols?: FirewallPolicyRuleConditionApplicationProtocol[];
    /** List of Urls for this rule condition. */
    targetUrls?: string[];
    /** List of FQDNs for this rule condition. */
    targetFqdns?: string[];
    /** List of FQDN Tags for this rule condition. */
    fqdnTags?: string[];
    /** List of source IpGroups for this rule. */
    sourceIpGroups?: string[];
};

/** An application security group in a resource group. */
export declare type ApplicationSecurityGroup = Resource & {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /**
     * The resource GUID property of the application security group resource. It uniquely identifies a resource, even if the user changes its name or migrate the resource across subscriptions or resource groups.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly resourceGuid?: string;
    /**
     * The provisioning state of the application security group resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** A list of application security groups. */
export declare interface ApplicationSecurityGroupListResult {
    /** A list of application security groups. */
    value?: ApplicationSecurityGroup[];
    /**
     * The URL to get the next set of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Interface representing a ApplicationSecurityGroups. */
export declare interface ApplicationSecurityGroups {
    /**
     * Gets all application security groups in a subscription.
     * @param options The options parameters.
     */
    listAll(options?: ApplicationSecurityGroupsListAllOptionalParams): PagedAsyncIterableIterator<ApplicationSecurityGroup>;
    /**
     * Gets all the application security groups in a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, options?: ApplicationSecurityGroupsListOptionalParams): PagedAsyncIterableIterator<ApplicationSecurityGroup>;
    /**
     * Deletes the specified application security group.
     * @param resourceGroupName The name of the resource group.
     * @param applicationSecurityGroupName The name of the application security group.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, applicationSecurityGroupName: string, options?: ApplicationSecurityGroupsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the specified application security group.
     * @param resourceGroupName The name of the resource group.
     * @param applicationSecurityGroupName The name of the application security group.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, applicationSecurityGroupName: string, options?: ApplicationSecurityGroupsDeleteOptionalParams): Promise<void>;
    /**
     * Gets information about the specified application security group.
     * @param resourceGroupName The name of the resource group.
     * @param applicationSecurityGroupName The name of the application security group.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, applicationSecurityGroupName: string, options?: ApplicationSecurityGroupsGetOptionalParams): Promise<ApplicationSecurityGroupsGetResponse>;
    /**
     * Creates or updates an application security group.
     * @param resourceGroupName The name of the resource group.
     * @param applicationSecurityGroupName The name of the application security group.
     * @param parameters Parameters supplied to the create or update ApplicationSecurityGroup operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, applicationSecurityGroupName: string, parameters: ApplicationSecurityGroup, options?: ApplicationSecurityGroupsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<ApplicationSecurityGroupsCreateOrUpdateResponse>, ApplicationSecurityGroupsCreateOrUpdateResponse>>;
    /**
     * Creates or updates an application security group.
     * @param resourceGroupName The name of the resource group.
     * @param applicationSecurityGroupName The name of the application security group.
     * @param parameters Parameters supplied to the create or update ApplicationSecurityGroup operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, applicationSecurityGroupName: string, parameters: ApplicationSecurityGroup, options?: ApplicationSecurityGroupsCreateOrUpdateOptionalParams): Promise<ApplicationSecurityGroupsCreateOrUpdateResponse>;
    /**
     * Updates an application security group's tags.
     * @param resourceGroupName The name of the resource group.
     * @param applicationSecurityGroupName The name of the application security group.
     * @param parameters Parameters supplied to update application security group tags.
     * @param options The options parameters.
     */
    updateTags(resourceGroupName: string, applicationSecurityGroupName: string, parameters: TagsObject, options?: ApplicationSecurityGroupsUpdateTagsOptionalParams): Promise<ApplicationSecurityGroupsUpdateTagsResponse>;
}

/** Optional parameters. */
export declare interface ApplicationSecurityGroupsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type ApplicationSecurityGroupsCreateOrUpdateResponse = ApplicationSecurityGroup;

/** Optional parameters. */
export declare interface ApplicationSecurityGroupsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface ApplicationSecurityGroupsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type ApplicationSecurityGroupsGetResponse = ApplicationSecurityGroup;

/** Optional parameters. */
export declare interface ApplicationSecurityGroupsListAllNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAllNext operation. */
export declare type ApplicationSecurityGroupsListAllNextResponse = ApplicationSecurityGroupListResult;

/** Optional parameters. */
export declare interface ApplicationSecurityGroupsListAllOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAll operation. */
export declare type ApplicationSecurityGroupsListAllResponse = ApplicationSecurityGroupListResult;

/** Optional parameters. */
export declare interface ApplicationSecurityGroupsListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type ApplicationSecurityGroupsListNextResponse = ApplicationSecurityGroupListResult;

/** Optional parameters. */
export declare interface ApplicationSecurityGroupsListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type ApplicationSecurityGroupsListResponse = ApplicationSecurityGroupListResult;

/** Optional parameters. */
export declare interface ApplicationSecurityGroupsUpdateTagsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateTags operation. */
export declare type ApplicationSecurityGroupsUpdateTagsResponse = ApplicationSecurityGroup;

/**
 * Defines values for AssociationType. \
 * {@link KnownAssociationType} can be used interchangeably with AssociationType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Associated** \
 * **Contains**
 */
export declare type AssociationType = string;

/**
 * Defines values for AuthenticationMethod. \
 * {@link KnownAuthenticationMethod} can be used interchangeably with AuthenticationMethod,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **EAPTLS** \
 * **EAPMSCHAPv2**
 */
export declare type AuthenticationMethod = string;

/** Response for ListAuthorizations API service call retrieves all authorizations that belongs to an ExpressRouteCircuit. */
export declare interface AuthorizationListResult {
    /** The authorizations in an ExpressRoute Circuit. */
    value?: ExpressRouteCircuitAuthorization[];
    /** The URL to get the next set of results. */
    nextLink?: string;
}

/**
 * Defines values for AuthorizationUseStatus. \
 * {@link KnownAuthorizationUseStatus} can be used interchangeably with AuthorizationUseStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Available** \
 * **InUse**
 */
export declare type AuthorizationUseStatus = string;

/** The information of an AutoApprovedPrivateLinkService. */
export declare interface AutoApprovedPrivateLinkService {
    /** The id of the private link service resource. */
    privateLinkService?: string;
}

/** An array of private link service id that can be linked to a private end point with auto approved. */
export declare interface AutoApprovedPrivateLinkServicesResult {
    /** An array of auto approved private link service. */
    value?: AutoApprovedPrivateLinkService[];
    /**
     * The URL to get the next set of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Availability of the metric. */
export declare interface Availability {
    /** The time grain of the availability. */
    timeGrain?: string;
    /** The retention of the availability. */
    retention?: string;
    /** Duration of the availability blob. */
    blobDuration?: string;
}

/** The serviceName of an AvailableDelegation indicates a possible delegation for a subnet. */
export declare interface AvailableDelegation {
    /** The name of the AvailableDelegation resource. */
    name?: string;
    /** A unique identifier of the AvailableDelegation resource. */
    id?: string;
    /** Resource type. */
    type?: string;
    /** The name of the service and resource. */
    serviceName?: string;
    /** The actions permitted to the service upon delegation. */
    actions?: string[];
}

/** Interface representing a AvailableDelegations. */
export declare interface AvailableDelegations {
    /**
     * Gets all of the available subnet delegations for this subscription in this region.
     * @param location The location of the subnet.
     * @param options The options parameters.
     */
    list(location: string, options?: AvailableDelegationsListOptionalParams): PagedAsyncIterableIterator<AvailableDelegation>;
}

/** Optional parameters. */
export declare interface AvailableDelegationsListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type AvailableDelegationsListNextResponse = AvailableDelegationsResult;

/** Optional parameters. */
export declare interface AvailableDelegationsListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type AvailableDelegationsListResponse = AvailableDelegationsResult;

/** An array of available delegations. */
export declare interface AvailableDelegationsResult {
    /** An array of available delegations. */
    value?: AvailableDelegation[];
    /**
     * The URL to get the next set of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Interface representing a AvailableEndpointServices. */
export declare interface AvailableEndpointServices {
    /**
     * List what values of endpoint services are available for use.
     * @param location The location to check available endpoint services.
     * @param options The options parameters.
     */
    list(location: string, options?: AvailableEndpointServicesListOptionalParams): PagedAsyncIterableIterator<EndpointServiceResult>;
}

/** Optional parameters. */
export declare interface AvailableEndpointServicesListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type AvailableEndpointServicesListNextResponse = EndpointServicesListResult;

/** Optional parameters. */
export declare interface AvailableEndpointServicesListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type AvailableEndpointServicesListResponse = EndpointServicesListResult;

/** The information of an AvailablePrivateEndpointType. */
export declare interface AvailablePrivateEndpointType {
    /** The name of the service and resource. */
    name?: string;
    /** A unique identifier of the AvailablePrivateEndpoint Type resource. */
    id?: string;
    /** Resource type. */
    type?: string;
    /** The name of the service and resource. */
    resourceName?: string;
}

/** Interface representing a AvailablePrivateEndpointTypes. */
export declare interface AvailablePrivateEndpointTypes {
    /**
     * Returns all of the resource types that can be linked to a Private Endpoint in this subscription in
     * this region.
     * @param location The location of the domain name.
     * @param options The options parameters.
     */
    list(location: string, options?: AvailablePrivateEndpointTypesListOptionalParams): PagedAsyncIterableIterator<AvailablePrivateEndpointType>;
    /**
     * Returns all of the resource types that can be linked to a Private Endpoint in this subscription in
     * this region.
     * @param location The location of the domain name.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    listByResourceGroup(location: string, resourceGroupName: string, options?: AvailablePrivateEndpointTypesListByResourceGroupOptionalParams): PagedAsyncIterableIterator<AvailablePrivateEndpointType>;
}

/** Optional parameters. */
export declare interface AvailablePrivateEndpointTypesListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNext operation. */
export declare type AvailablePrivateEndpointTypesListByResourceGroupNextResponse = AvailablePrivateEndpointTypesResult;

/** Optional parameters. */
export declare interface AvailablePrivateEndpointTypesListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroup operation. */
export declare type AvailablePrivateEndpointTypesListByResourceGroupResponse = AvailablePrivateEndpointTypesResult;

/** Optional parameters. */
export declare interface AvailablePrivateEndpointTypesListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type AvailablePrivateEndpointTypesListNextResponse = AvailablePrivateEndpointTypesResult;

/** Optional parameters. */
export declare interface AvailablePrivateEndpointTypesListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type AvailablePrivateEndpointTypesListResponse = AvailablePrivateEndpointTypesResult;

/** An array of available PrivateEndpoint types. */
export declare interface AvailablePrivateEndpointTypesResult {
    /** An array of available privateEndpoint type. */
    value?: AvailablePrivateEndpointType[];
    /**
     * The URL to get the next set of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** List of available countries with details. */
export declare interface AvailableProvidersList {
    /** List of available countries. */
    countries: AvailableProvidersListCountry[];
}

/** City or town details. */
export declare interface AvailableProvidersListCity {
    /** The city or town name. */
    cityName?: string;
    /** A list of Internet service providers. */
    providers?: string[];
}

/** Country details. */
export declare interface AvailableProvidersListCountry {
    /** The country name. */
    countryName?: string;
    /** A list of Internet service providers. */
    providers?: string[];
    /** List of available states in the country. */
    states?: AvailableProvidersListState[];
}

/** Constraints that determine the list of available Internet service providers. */
export declare interface AvailableProvidersListParameters {
    /** A list of Azure regions. */
    azureLocations?: string[];
    /** The country for available providers list. */
    country?: string;
    /** The state for available providers list. */
    state?: string;
    /** The city or town for available providers list. */
    city?: string;
}

/** State details. */
export declare interface AvailableProvidersListState {
    /** The state name. */
    stateName?: string;
    /** A list of Internet service providers. */
    providers?: string[];
    /** List of available cities or towns in the state. */
    cities?: AvailableProvidersListCity[];
}

/** Interface representing a AvailableResourceGroupDelegations. */
export declare interface AvailableResourceGroupDelegations {
    /**
     * Gets all of the available subnet delegations for this resource group in this region.
     * @param location The location of the domain name.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    list(location: string, resourceGroupName: string, options?: AvailableResourceGroupDelegationsListOptionalParams): PagedAsyncIterableIterator<AvailableDelegation>;
}

/** Optional parameters. */
export declare interface AvailableResourceGroupDelegationsListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type AvailableResourceGroupDelegationsListNextResponse = AvailableDelegationsResult;

/** Optional parameters. */
export declare interface AvailableResourceGroupDelegationsListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type AvailableResourceGroupDelegationsListResponse = AvailableDelegationsResult;

/** The available service alias. */
export declare interface AvailableServiceAlias {
    /** The name of the service alias. */
    name?: string;
    /** The ID of the service alias. */
    id?: string;
    /** The type of the resource. */
    type?: string;
    /** The resource name of the service alias. */
    resourceName?: string;
}

/** Interface representing a AvailableServiceAliases. */
export declare interface AvailableServiceAliases {
    /**
     * Gets all available service aliases for this subscription in this region.
     * @param location The location.
     * @param options The options parameters.
     */
    list(location: string, options?: AvailableServiceAliasesListOptionalParams): PagedAsyncIterableIterator<AvailableServiceAlias>;
    /**
     * Gets all available service aliases for this resource group in this region.
     * @param resourceGroupName The name of the resource group.
     * @param location The location.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, location: string, options?: AvailableServiceAliasesListByResourceGroupOptionalParams): PagedAsyncIterableIterator<AvailableServiceAlias>;
}

/** Optional parameters. */
export declare interface AvailableServiceAliasesListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNext operation. */
export declare type AvailableServiceAliasesListByResourceGroupNextResponse = AvailableServiceAliasesResult;

/** Optional parameters. */
export declare interface AvailableServiceAliasesListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroup operation. */
export declare type AvailableServiceAliasesListByResourceGroupResponse = AvailableServiceAliasesResult;

/** Optional parameters. */
export declare interface AvailableServiceAliasesListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type AvailableServiceAliasesListNextResponse = AvailableServiceAliasesResult;

/** Optional parameters. */
export declare interface AvailableServiceAliasesListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type AvailableServiceAliasesListResponse = AvailableServiceAliasesResult;

/** An array of available service aliases. */
export declare interface AvailableServiceAliasesResult {
    /** An array of available service aliases. */
    value?: AvailableServiceAlias[];
    /**
     * The URL to get the next set of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** The response body contains the status of the specified asynchronous operation, indicating whether it has succeeded, is in progress, or has failed. Note that this status is distinct from the HTTP status code returned for the Get Operation Status operation itself. If the asynchronous operation succeeded, the response body includes the HTTP status code for the successful request. If the asynchronous operation failed, the response body includes the HTTP status code for the failed request and error information regarding the failure. */
export declare interface AzureAsyncOperationResult {
    /** Status of the Azure async operation. */
    status?: NetworkOperationStatus;
    /** Details of the error occurred during specified asynchronous operation. */
    error?: ErrorModel;
}

/** Azure Firewall resource. */
export declare type AzureFirewall = Resource & {
    /** A list of availability zones denoting where the resource needs to come from. */
    zones?: string[];
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /** Collection of application rule collections used by Azure Firewall. */
    applicationRuleCollections?: AzureFirewallApplicationRuleCollection[];
    /** Collection of NAT rule collections used by Azure Firewall. */
    natRuleCollections?: AzureFirewallNatRuleCollection[];
    /** Collection of network rule collections used by Azure Firewall. */
    networkRuleCollections?: AzureFirewallNetworkRuleCollection[];
    /** IP configuration of the Azure Firewall resource. */
    ipConfigurations?: AzureFirewallIPConfiguration[];
    /** IP configuration of the Azure Firewall used for management traffic. */
    managementIpConfiguration?: AzureFirewallIPConfiguration;
    /**
     * The provisioning state of the Azure firewall resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
    /** The operation mode for Threat Intelligence. */
    threatIntelMode?: AzureFirewallThreatIntelMode;
    /** The virtualHub to which the firewall belongs. */
    virtualHub?: SubResource;
    /** The firewallPolicy associated with this azure firewall. */
    firewallPolicy?: SubResource;
    /**
     * IP addresses associated with AzureFirewall.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly hubIpAddresses?: HubIPAddresses;
    /**
     * IpGroups associated with AzureFirewall.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly ipGroups?: AzureFirewallIpGroups[];
    /** The Azure Firewall Resource SKU. */
    sku?: AzureFirewallSku;
    /** The additional properties used to further config this azure firewall. */
    additionalProperties?: {
        [propertyName: string]: string;
    };
};

/** Properties of an application rule. */
export declare interface AzureFirewallApplicationRule {
    /** Name of the application rule. */
    name?: string;
    /** Description of the rule. */
    description?: string;
    /** List of source IP addresses for this rule. */
    sourceAddresses?: string[];
    /** Array of ApplicationRuleProtocols. */
    protocols?: AzureFirewallApplicationRuleProtocol[];
    /** List of FQDNs for this rule. */
    targetFqdns?: string[];
    /** List of FQDN Tags for this rule. */
    fqdnTags?: string[];
    /** List of source IpGroups for this rule. */
    sourceIpGroups?: string[];
}

/** Application rule collection resource. */
export declare type AzureFirewallApplicationRuleCollection = SubResource & {
    /** The name of the resource that is unique within the Azure firewall. This name can be used to access the resource. */
    name?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /** Priority of the application rule collection resource. */
    priority?: number;
    /** The action type of a rule collection. */
    action?: AzureFirewallRCAction;
    /** Collection of rules used by a application rule collection. */
    rules?: AzureFirewallApplicationRule[];
    /**
     * The provisioning state of the application rule collection resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** Properties of the application rule protocol. */
export declare interface AzureFirewallApplicationRuleProtocol {
    /** Protocol type. */
    protocolType?: AzureFirewallApplicationRuleProtocolType;
    /** Port number for the protocol, cannot be greater than 64000. This field is optional. */
    port?: number;
}

/**
 * Defines values for AzureFirewallApplicationRuleProtocolType. \
 * {@link KnownAzureFirewallApplicationRuleProtocolType} can be used interchangeably with AzureFirewallApplicationRuleProtocolType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Http** \
 * **Https** \
 * **Mssql**
 */
export declare type AzureFirewallApplicationRuleProtocolType = string;

/** Azure Firewall FQDN Tag Resource. */
export declare type AzureFirewallFqdnTag = Resource & {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /**
     * The provisioning state of the Azure firewall FQDN tag resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
    /**
     * The name of this FQDN Tag.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly fqdnTagName?: string;
};

/** Response for ListAzureFirewallFqdnTags API service call. */
export declare interface AzureFirewallFqdnTagListResult {
    /** List of Azure Firewall FQDN Tags in a resource group. */
    value?: AzureFirewallFqdnTag[];
    /** URL to get the next set of results. */
    nextLink?: string;
}

/** Interface representing a AzureFirewallFqdnTags. */
export declare interface AzureFirewallFqdnTags {
    /**
     * Gets all the Azure Firewall FQDN Tags in a subscription.
     * @param options The options parameters.
     */
    listAll(options?: AzureFirewallFqdnTagsListAllOptionalParams): PagedAsyncIterableIterator<AzureFirewallFqdnTag>;
}

/** Optional parameters. */
export declare interface AzureFirewallFqdnTagsListAllNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAllNext operation. */
export declare type AzureFirewallFqdnTagsListAllNextResponse = AzureFirewallFqdnTagListResult;

/** Optional parameters. */
export declare interface AzureFirewallFqdnTagsListAllOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAll operation. */
export declare type AzureFirewallFqdnTagsListAllResponse = AzureFirewallFqdnTagListResult;

/** IP configuration of an Azure Firewall. */
export declare type AzureFirewallIPConfiguration = SubResource & {
    /** Name of the resource that is unique within a resource group. This name can be used to access the resource. */
    name?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /**
     * Type of the resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /**
     * The Firewall Internal Load Balancer IP to be used as the next hop in User Defined Routes.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly privateIPAddress?: string;
    /** Reference to the subnet resource. This resource must be named 'AzureFirewallSubnet' or 'AzureFirewallManagementSubnet'. */
    subnet?: SubResource;
    /** Reference to the PublicIP resource. This field is a mandatory input if subnet is not null. */
    publicIPAddress?: SubResource;
    /**
     * The provisioning state of the Azure firewall IP configuration resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** IpGroups associated with azure firewall. */
export declare interface AzureFirewallIpGroups {
    /**
     * Resource ID.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
    /**
     * The iteration number.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly changeNumber?: string;
}

/** Response for ListAzureFirewalls API service call. */
export declare interface AzureFirewallListResult {
    /** List of Azure Firewalls in a resource group. */
    value?: AzureFirewall[];
    /** URL to get the next set of results. */
    nextLink?: string;
}

/** AzureFirewall NAT Rule Collection Action. */
export declare interface AzureFirewallNatRCAction {
    /** The type of action. */
    type?: AzureFirewallNatRCActionType;
}

/**
 * Defines values for AzureFirewallNatRCActionType. \
 * {@link KnownAzureFirewallNatRCActionType} can be used interchangeably with AzureFirewallNatRCActionType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Snat** \
 * **Dnat**
 */
export declare type AzureFirewallNatRCActionType = string;

/** Properties of a NAT rule. */
export declare interface AzureFirewallNatRule {
    /** Name of the NAT rule. */
    name?: string;
    /** Description of the rule. */
    description?: string;
    /** List of source IP addresses for this rule. */
    sourceAddresses?: string[];
    /** List of destination IP addresses for this rule. Supports IP ranges, prefixes, and service tags. */
    destinationAddresses?: string[];
    /** List of destination ports. */
    destinationPorts?: string[];
    /** Array of AzureFirewallNetworkRuleProtocols applicable to this NAT rule. */
    protocols?: AzureFirewallNetworkRuleProtocol[];
    /** The translated address for this NAT rule. */
    translatedAddress?: string;
    /** The translated port for this NAT rule. */
    translatedPort?: string;
    /** The translated FQDN for this NAT rule. */
    translatedFqdn?: string;
    /** List of source IpGroups for this rule. */
    sourceIpGroups?: string[];
}

/** NAT rule collection resource. */
export declare type AzureFirewallNatRuleCollection = SubResource & {
    /** The name of the resource that is unique within the Azure firewall. This name can be used to access the resource. */
    name?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /** Priority of the NAT rule collection resource. */
    priority?: number;
    /** The action type of a NAT rule collection. */
    action?: AzureFirewallNatRCAction;
    /** Collection of rules used by a NAT rule collection. */
    rules?: AzureFirewallNatRule[];
    /**
     * The provisioning state of the NAT rule collection resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** Properties of the network rule. */
export declare interface AzureFirewallNetworkRule {
    /** Name of the network rule. */
    name?: string;
    /** Description of the rule. */
    description?: string;
    /** Array of AzureFirewallNetworkRuleProtocols. */
    protocols?: AzureFirewallNetworkRuleProtocol[];
    /** List of source IP addresses for this rule. */
    sourceAddresses?: string[];
    /** List of destination IP addresses. */
    destinationAddresses?: string[];
    /** List of destination ports. */
    destinationPorts?: string[];
    /** List of destination FQDNs. */
    destinationFqdns?: string[];
    /** List of source IpGroups for this rule. */
    sourceIpGroups?: string[];
    /** List of destination IpGroups for this rule. */
    destinationIpGroups?: string[];
}

/** Network rule collection resource. */
export declare type AzureFirewallNetworkRuleCollection = SubResource & {
    /** The name of the resource that is unique within the Azure firewall. This name can be used to access the resource. */
    name?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /** Priority of the network rule collection resource. */
    priority?: number;
    /** The action type of a rule collection. */
    action?: AzureFirewallRCAction;
    /** Collection of rules used by a network rule collection. */
    rules?: AzureFirewallNetworkRule[];
    /**
     * The provisioning state of the network rule collection resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/**
 * Defines values for AzureFirewallNetworkRuleProtocol. \
 * {@link KnownAzureFirewallNetworkRuleProtocol} can be used interchangeably with AzureFirewallNetworkRuleProtocol,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **TCP** \
 * **UDP** \
 * **Any** \
 * **ICMP**
 */
export declare type AzureFirewallNetworkRuleProtocol = string;

/** Public IP Address associated with azure firewall. */
export declare interface AzureFirewallPublicIPAddress {
    /** Public IP Address value. */
    address?: string;
}

/** Properties of the AzureFirewallRCAction. */
export declare interface AzureFirewallRCAction {
    /** The type of action. */
    type?: AzureFirewallRCActionType;
}

/**
 * Defines values for AzureFirewallRCActionType. \
 * {@link KnownAzureFirewallRCActionType} can be used interchangeably with AzureFirewallRCActionType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Allow** \
 * **Deny**
 */
export declare type AzureFirewallRCActionType = string;

/** Interface representing a AzureFirewalls. */
export declare interface AzureFirewalls {
    /**
     * Lists all Azure Firewalls in a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, options?: AzureFirewallsListOptionalParams): PagedAsyncIterableIterator<AzureFirewall>;
    /**
     * Gets all the Azure Firewalls in a subscription.
     * @param options The options parameters.
     */
    listAll(options?: AzureFirewallsListAllOptionalParams): PagedAsyncIterableIterator<AzureFirewall>;
    /**
     * Deletes the specified Azure Firewall.
     * @param resourceGroupName The name of the resource group.
     * @param azureFirewallName The name of the Azure Firewall.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, azureFirewallName: string, options?: AzureFirewallsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the specified Azure Firewall.
     * @param resourceGroupName The name of the resource group.
     * @param azureFirewallName The name of the Azure Firewall.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, azureFirewallName: string, options?: AzureFirewallsDeleteOptionalParams): Promise<void>;
    /**
     * Gets the specified Azure Firewall.
     * @param resourceGroupName The name of the resource group.
     * @param azureFirewallName The name of the Azure Firewall.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, azureFirewallName: string, options?: AzureFirewallsGetOptionalParams): Promise<AzureFirewallsGetResponse>;
    /**
     * Creates or updates the specified Azure Firewall.
     * @param resourceGroupName The name of the resource group.
     * @param azureFirewallName The name of the Azure Firewall.
     * @param parameters Parameters supplied to the create or update Azure Firewall operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, azureFirewallName: string, parameters: AzureFirewall, options?: AzureFirewallsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<AzureFirewallsCreateOrUpdateResponse>, AzureFirewallsCreateOrUpdateResponse>>;
    /**
     * Creates or updates the specified Azure Firewall.
     * @param resourceGroupName The name of the resource group.
     * @param azureFirewallName The name of the Azure Firewall.
     * @param parameters Parameters supplied to the create or update Azure Firewall operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, azureFirewallName: string, parameters: AzureFirewall, options?: AzureFirewallsCreateOrUpdateOptionalParams): Promise<AzureFirewallsCreateOrUpdateResponse>;
    /**
     * Updates tags of an Azure Firewall resource.
     * @param resourceGroupName The name of the resource group.
     * @param azureFirewallName The name of the Azure Firewall.
     * @param parameters Parameters supplied to update azure firewall tags.
     * @param options The options parameters.
     */
    beginUpdateTags(resourceGroupName: string, azureFirewallName: string, parameters: TagsObject, options?: AzureFirewallsUpdateTagsOptionalParams): Promise<PollerLike<PollOperationState<AzureFirewallsUpdateTagsResponse>, AzureFirewallsUpdateTagsResponse>>;
    /**
     * Updates tags of an Azure Firewall resource.
     * @param resourceGroupName The name of the resource group.
     * @param azureFirewallName The name of the Azure Firewall.
     * @param parameters Parameters supplied to update azure firewall tags.
     * @param options The options parameters.
     */
    beginUpdateTagsAndWait(resourceGroupName: string, azureFirewallName: string, parameters: TagsObject, options?: AzureFirewallsUpdateTagsOptionalParams): Promise<AzureFirewallsUpdateTagsResponse>;
}

/** Optional parameters. */
export declare interface AzureFirewallsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type AzureFirewallsCreateOrUpdateResponse = AzureFirewall;

/** Optional parameters. */
export declare interface AzureFirewallsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface AzureFirewallsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type AzureFirewallsGetResponse = AzureFirewall;

/** SKU of an Azure Firewall. */
export declare interface AzureFirewallSku {
    /** Name of an Azure Firewall SKU. */
    name?: AzureFirewallSkuName;
    /** Tier of an Azure Firewall. */
    tier?: AzureFirewallSkuTier;
}

/**
 * Defines values for AzureFirewallSkuName. \
 * {@link KnownAzureFirewallSkuName} can be used interchangeably with AzureFirewallSkuName,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **AZFW_VNet** \
 * **AZFW_Hub**
 */
export declare type AzureFirewallSkuName = string;

/**
 * Defines values for AzureFirewallSkuTier. \
 * {@link KnownAzureFirewallSkuTier} can be used interchangeably with AzureFirewallSkuTier,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Standard** \
 * **Premium**
 */
export declare type AzureFirewallSkuTier = string;

/** Optional parameters. */
export declare interface AzureFirewallsListAllNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAllNext operation. */
export declare type AzureFirewallsListAllNextResponse = AzureFirewallListResult;

/** Optional parameters. */
export declare interface AzureFirewallsListAllOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAll operation. */
export declare type AzureFirewallsListAllResponse = AzureFirewallListResult;

/** Optional parameters. */
export declare interface AzureFirewallsListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type AzureFirewallsListNextResponse = AzureFirewallListResult;

/** Optional parameters. */
export declare interface AzureFirewallsListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type AzureFirewallsListResponse = AzureFirewallListResult;

/** Optional parameters. */
export declare interface AzureFirewallsUpdateTagsOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the updateTags operation. */
export declare type AzureFirewallsUpdateTagsResponse = AzureFirewall;

/**
 * Defines values for AzureFirewallThreatIntelMode. \
 * {@link KnownAzureFirewallThreatIntelMode} can be used interchangeably with AzureFirewallThreatIntelMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Alert** \
 * **Deny** \
 * **Off**
 */
export declare type AzureFirewallThreatIntelMode = string;

/** Azure reachability report details. */
export declare interface AzureReachabilityReport {
    /** The aggregation level of Azure reachability report. Can be Country, State or City. */
    aggregationLevel: string;
    /** Parameters that define a geographic location. */
    providerLocation: AzureReachabilityReportLocation;
    /** List of Azure reachability report items. */
    reachabilityReport: AzureReachabilityReportItem[];
}

/** Azure reachability report details for a given provider location. */
export declare interface AzureReachabilityReportItem {
    /** The Internet service provider. */
    provider?: string;
    /** The Azure region. */
    azureLocation?: string;
    /** List of latency details for each of the time series. */
    latencies?: AzureReachabilityReportLatencyInfo[];
}

/** Details on latency for a time series. */
export declare interface AzureReachabilityReportLatencyInfo {
    /** The time stamp. */
    timeStamp?: Date;
    /** The relative latency score between 1 and 100, higher values indicating a faster connection. */
    score?: number;
}

/** Parameters that define a geographic location. */
export declare interface AzureReachabilityReportLocation {
    /** The name of the country. */
    country: string;
    /** The name of the state. */
    state?: string;
    /** The name of the city or town. */
    city?: string;
}

/** Geographic and time constraints for Azure reachability report. */
export declare interface AzureReachabilityReportParameters {
    /** Parameters that define a geographic location. */
    providerLocation: AzureReachabilityReportLocation;
    /** List of Internet service providers. */
    providers?: string[];
    /** Optional Azure regions to scope the query to. */
    azureLocations?: string[];
    /** The start time for the Azure reachability report. */
    startTime: Date;
    /** The end time for the Azure reachability report. */
    endTime: Date;
}

/** Pool of backend IP addresses. */
export declare type BackendAddressPool = SubResource & {
    /** The name of the resource that is unique within the set of backend address pools used by the load balancer. This name can be used to access the resource. */
    name?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /**
     * Type of the resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /**
     * An array of references to IP addresses defined in network interfaces.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly backendIPConfigurations?: NetworkInterfaceIPConfiguration[];
    /** An array of backend addresses. */
    loadBalancerBackendAddresses?: LoadBalancerBackendAddress[];
    /**
     * An array of references to load balancing rules that use this backend address pool.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly loadBalancingRules?: SubResource[];
    /**
     * A reference to an outbound rule that uses this backend address pool.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly outboundRule?: SubResource;
    /**
     * An array of references to outbound rules that use this backend address pool.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly outboundRules?: SubResource[];
    /**
     * The provisioning state of the backend address pool resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** The session detail for a target. */
export declare interface BastionActiveSession {
    /**
     * A unique id for the session.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly sessionId?: string;
    /**
     * The time when the session started.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly startTime?: Record<string, unknown>;
    /**
     * The subscription id for the target virtual machine.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly targetSubscriptionId?: string;
    /**
     * The type of the resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly resourceType?: string;
    /**
     * The host name of the target.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly targetHostName?: string;
    /**
     * The resource group of the target.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly targetResourceGroup?: string;
    /**
     * The user name who is active on this session.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly userName?: string;
    /**
     * The IP Address of the target.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly targetIpAddress?: string;
    /**
     * The protocol used to connect to the target.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly protocol?: BastionConnectProtocol;
    /**
     * The resource id of the target.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly targetResourceId?: string;
    /**
     * Duration in mins the session has been active.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly sessionDurationInMins?: number;
}

/** Response for GetActiveSessions. */
export declare interface BastionActiveSessionListResult {
    /** List of active sessions on the bastion. */
    value?: BastionActiveSession[];
    /** The URL to get the next set of results. */
    nextLink?: string;
}

/**
 * Defines values for BastionConnectProtocol. \
 * {@link KnownBastionConnectProtocol} can be used interchangeably with BastionConnectProtocol,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **SSH** \
 * **RDP**
 */
export declare type BastionConnectProtocol = string;

/** Bastion Host resource. */
export declare type BastionHost = Resource & {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /** IP configuration of the Bastion Host resource. */
    ipConfigurations?: BastionHostIPConfiguration[];
    /** FQDN for the endpoint on which bastion host is accessible. */
    dnsName?: string;
    /**
     * The provisioning state of the bastion host resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** IP configuration of an Bastion Host. */
export declare type BastionHostIPConfiguration = SubResource & {
    /** Name of the resource that is unique within a resource group. This name can be used to access the resource. */
    name?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /**
     * Ip configuration type.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /** Reference of the subnet resource. */
    subnet?: SubResource;
    /** Reference of the PublicIP resource. */
    publicIPAddress?: SubResource;
    /**
     * The provisioning state of the bastion host IP configuration resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
    /** Private IP allocation method. */
    privateIPAllocationMethod?: IPAllocationMethod;
};

/** Response for ListBastionHosts API service call. */
export declare interface BastionHostListResult {
    /** List of Bastion Hosts in a resource group. */
    value?: BastionHost[];
    /** URL to get the next set of results. */
    nextLink?: string;
}

/** Interface representing a BastionHosts. */
export declare interface BastionHosts {
    /**
     * Lists all Bastion Hosts in a subscription.
     * @param options The options parameters.
     */
    list(options?: BastionHostsListOptionalParams): PagedAsyncIterableIterator<BastionHost>;
    /**
     * Lists all Bastion Hosts in a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: BastionHostsListByResourceGroupOptionalParams): PagedAsyncIterableIterator<BastionHost>;
    /**
     * Deletes the specified Bastion Host.
     * @param resourceGroupName The name of the resource group.
     * @param bastionHostName The name of the Bastion Host.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, bastionHostName: string, options?: BastionHostsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the specified Bastion Host.
     * @param resourceGroupName The name of the resource group.
     * @param bastionHostName The name of the Bastion Host.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, bastionHostName: string, options?: BastionHostsDeleteOptionalParams): Promise<void>;
    /**
     * Gets the specified Bastion Host.
     * @param resourceGroupName The name of the resource group.
     * @param bastionHostName The name of the Bastion Host.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, bastionHostName: string, options?: BastionHostsGetOptionalParams): Promise<BastionHostsGetResponse>;
    /**
     * Creates or updates the specified Bastion Host.
     * @param resourceGroupName The name of the resource group.
     * @param bastionHostName The name of the Bastion Host.
     * @param parameters Parameters supplied to the create or update Bastion Host operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, bastionHostName: string, parameters: BastionHost, options?: BastionHostsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<BastionHostsCreateOrUpdateResponse>, BastionHostsCreateOrUpdateResponse>>;
    /**
     * Creates or updates the specified Bastion Host.
     * @param resourceGroupName The name of the resource group.
     * @param bastionHostName The name of the Bastion Host.
     * @param parameters Parameters supplied to the create or update Bastion Host operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, bastionHostName: string, parameters: BastionHost, options?: BastionHostsCreateOrUpdateOptionalParams): Promise<BastionHostsCreateOrUpdateResponse>;
}

/** Optional parameters. */
export declare interface BastionHostsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type BastionHostsCreateOrUpdateResponse = BastionHost;

/** Optional parameters. */
export declare interface BastionHostsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface BastionHostsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type BastionHostsGetResponse = BastionHost;

/** Optional parameters. */
export declare interface BastionHostsListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNext operation. */
export declare type BastionHostsListByResourceGroupNextResponse = BastionHostListResult;

/** Optional parameters. */
export declare interface BastionHostsListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroup operation. */
export declare type BastionHostsListByResourceGroupResponse = BastionHostListResult;

/** Optional parameters. */
export declare interface BastionHostsListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type BastionHostsListNextResponse = BastionHostListResult;

/** Optional parameters. */
export declare interface BastionHostsListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type BastionHostsListResponse = BastionHostListResult;

/** Response for DisconnectActiveSessions. */
export declare interface BastionSessionDeleteResult {
    /** List of sessions with their corresponding state. */
    value?: BastionSessionState[];
    /** The URL to get the next set of results. */
    nextLink?: string;
}

/** The session state detail for a target. */
export declare interface BastionSessionState {
    /**
     * A unique id for the session.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly sessionId?: string;
    /**
     * Used for extra information.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly message?: string;
    /**
     * The state of the session. Disconnected/Failed/NotFound.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly state?: string;
}

/** Bastion Shareable Link. */
export declare interface BastionShareableLink {
    /** Reference of the virtual machine resource. */
    vm: VM;
    /**
     * The unique Bastion Shareable Link to the virtual machine.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly bsl?: string;
    /**
     * The time when the link was created.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly createdAt?: string;
    /**
     * Optional field indicating the warning or error message related to the vm in case of partial failure.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly message?: string;
}

/** Post request for all the Bastion Shareable Link endpoints. */
export declare interface BastionShareableLinkListRequest {
    /** List of VM references. */
    vms?: BastionShareableLink[];
}

/** Response for all the Bastion Shareable Link endpoints. */
export declare interface BastionShareableLinkListResult {
    /** List of Bastion Shareable Links for the request. */
    value?: BastionShareableLink[];
    /** The URL to get the next set of results. */
    nextLink?: string;
}

/** Contains bgp community information offered in Service Community resources. */
export declare interface BGPCommunity {
    /** The region which the service support. e.g. For O365, region is Global. */
    serviceSupportedRegion?: string;
    /** The name of the bgp community. e.g. Skype. */
    communityName?: string;
    /** The value of the bgp community. For more information: https://docs.microsoft.com/en-us/azure/expressroute/expressroute-routing. */
    communityValue?: string;
    /** The prefixes that the bgp community contains. */
    communityPrefixes?: string[];
    /** Customer is authorized to use bgp community or not. */
    isAuthorizedToUse?: boolean;
    /** The service group of the bgp community contains. */
    serviceGroup?: string;
}

/**
 * Defines values for BgpPeerState. \
 * {@link KnownBgpPeerState} can be used interchangeably with BgpPeerState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown** \
 * **Stopped** \
 * **Idle** \
 * **Connecting** \
 * **Connected**
 */
export declare type BgpPeerState = string;

/** BGP peer status details. */
export declare interface BgpPeerStatus {
    /**
     * The virtual network gateway's local address.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly localAddress?: string;
    /**
     * The remote BGP peer.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly neighbor?: string;
    /**
     * The autonomous system number of the remote BGP peer.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly asn?: number;
    /**
     * The BGP peer state.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly state?: BgpPeerState;
    /**
     * For how long the peering has been up.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly connectedDuration?: string;
    /**
     * The number of routes learned from this peer.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly routesReceived?: number;
    /**
     * The number of BGP messages sent.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly messagesSent?: number;
    /**
     * The number of BGP messages received.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly messagesReceived?: number;
}

/** Response for list BGP peer status API service call. */
export declare interface BgpPeerStatusListResult {
    /** List of BGP peers. */
    value?: BgpPeerStatus[];
}

/** Interface representing a BgpServiceCommunities. */
export declare interface BgpServiceCommunities {
    /**
     * Gets all the available bgp service communities.
     * @param options The options parameters.
     */
    list(options?: BgpServiceCommunitiesListOptionalParams): PagedAsyncIterableIterator<BgpServiceCommunity>;
}

/** Optional parameters. */
export declare interface BgpServiceCommunitiesListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type BgpServiceCommunitiesListNextResponse = BgpServiceCommunityListResult;

/** Optional parameters. */
export declare interface BgpServiceCommunitiesListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type BgpServiceCommunitiesListResponse = BgpServiceCommunityListResult;

/** Service Community Properties. */
export declare type BgpServiceCommunity = Resource & {
    /** The name of the bgp community. e.g. Skype. */
    serviceName?: string;
    /** A list of bgp communities. */
    bgpCommunities?: BGPCommunity[];
};

/** Response for the ListServiceCommunity API service call. */
export declare interface BgpServiceCommunityListResult {
    /** A list of service community resources. */
    value?: BgpServiceCommunity[];
    /** The URL to get the next set of results. */
    nextLink?: string;
}

/** BGP settings details. */
export declare interface BgpSettings {
    /** The BGP speaker's ASN. */
    asn?: number;
    /** The BGP peering address and BGP identifier of this BGP speaker. */
    bgpPeeringAddress?: string;
    /** The weight added to routes learned from this BGP speaker. */
    peerWeight?: number;
    /** BGP peering address with IP configuration ID for virtual network gateway. */
    bgpPeeringAddresses?: IPConfigurationBgpPeeringAddress[];
}

/** Optional parameters. */
export declare interface CheckDnsNameAvailabilityOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the checkDnsNameAvailability operation. */
export declare type CheckDnsNameAvailabilityResponse = DnsNameAvailabilityResult;

/** Request body of the CheckPrivateLinkServiceVisibility API service call. */
export declare interface CheckPrivateLinkServiceVisibilityRequest {
    /** The alias of the private link service. */
    privateLinkServiceAlias?: string;
}

/**
 * Defines values for CircuitConnectionStatus. \
 * {@link KnownCircuitConnectionStatus} can be used interchangeably with CircuitConnectionStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Connected** \
 * **Connecting** \
 * **Disconnected**
 */
export declare type CircuitConnectionStatus = string;

/** An error response from the service. */
export declare interface CloudError {
    /** Cloud error body. */
    error?: CloudErrorBody;
}

/** An error response from the service. */
export declare interface CloudErrorBody {
    /** An identifier for the error. Codes are invariant and are intended to be consumed programmatically. */
    code?: string;
    /** A message describing the error, intended to be suitable for display in a user interface. */
    message?: string;
    /** The target of the particular error. For example, the name of the property in error. */
    target?: string;
    /** A list of additional details about the error. */
    details?: CloudErrorBody[];
}

export declare interface Components1Jq1T4ISchemasManagedserviceidentityPropertiesUserassignedidentitiesAdditionalproperties {
    /**
     * The principal id of user assigned identity.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly principalId?: string;
    /**
     * The client id of user assigned identity.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly clientId?: string;
}

/** Parameters that define the operation to create a connection monitor. */
export declare interface ConnectionMonitor {
    /** Connection monitor location. */
    location?: string;
    /** Connection monitor tags. */
    tags?: {
        [propertyName: string]: string;
    };
    /** Describes the source of connection monitor. */
    source?: ConnectionMonitorSource;
    /** Describes the destination of connection monitor. */
    destination?: ConnectionMonitorDestination;
    /** Determines if the connection monitor will start automatically once created. */
    autoStart?: boolean;
    /** Monitoring interval in seconds. */
    monitoringIntervalInSeconds?: number;
    /** List of connection monitor endpoints. */
    endpoints?: ConnectionMonitorEndpoint[];
    /** List of connection monitor test configurations. */
    testConfigurations?: ConnectionMonitorTestConfiguration[];
    /** List of connection monitor test groups. */
    testGroups?: ConnectionMonitorTestGroup[];
    /** List of connection monitor outputs. */
    outputs?: ConnectionMonitorOutput[];
    /** Optional notes to be associated with the connection monitor. */
    notes?: string;
}

/** Describes the destination of connection monitor. */
export declare interface ConnectionMonitorDestination {
    /** The ID of the resource used as the destination by connection monitor. */
    resourceId?: string;
    /** Address of the connection monitor destination (IP or domain name). */
    address?: string;
    /** The destination port used by connection monitor. */
    port?: number;
}

/** Describes the connection monitor endpoint. */
export declare interface ConnectionMonitorEndpoint {
    /** The name of the connection monitor endpoint. */
    name: string;
    /** Resource ID of the connection monitor endpoint. */
    resourceId?: string;
    /** Address of the connection monitor endpoint (IP or domain name). */
    address?: string;
    /** Filter for sub-items within the endpoint. */
    filter?: ConnectionMonitorEndpointFilter;
}

/** Describes the connection monitor endpoint filter. */
export declare interface ConnectionMonitorEndpointFilter {
    /** The behavior of the endpoint filter. Currently only 'Include' is supported. */
    type?: ConnectionMonitorEndpointFilterType;
    /** List of items in the filter. */
    items?: ConnectionMonitorEndpointFilterItem[];
}

/** Describes the connection monitor endpoint filter item. */
export declare interface ConnectionMonitorEndpointFilterItem {
    /** The type of item included in the filter. Currently only 'AgentAddress' is supported. */
    type?: ConnectionMonitorEndpointFilterItemType;
    /** The address of the filter item. */
    address?: string;
}

/**
 * Defines values for ConnectionMonitorEndpointFilterItemType. \
 * {@link KnownConnectionMonitorEndpointFilterItemType} can be used interchangeably with ConnectionMonitorEndpointFilterItemType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **AgentAddress**
 */
export declare type ConnectionMonitorEndpointFilterItemType = string;

/**
 * Defines values for ConnectionMonitorEndpointFilterType. \
 * {@link KnownConnectionMonitorEndpointFilterType} can be used interchangeably with ConnectionMonitorEndpointFilterType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Include**
 */
export declare type ConnectionMonitorEndpointFilterType = string;

/** Describes the HTTP configuration. */
export declare interface ConnectionMonitorHttpConfiguration {
    /** The port to connect to. */
    port?: number;
    /** The HTTP method to use. */
    method?: HttpConfigurationMethod;
    /** The path component of the URI. For instance, "/dir1/dir2". */
    path?: string;
    /** The HTTP headers to transmit with the request. */
    requestHeaders?: HttpHeader[];
    /** HTTP status codes to consider successful. For instance, "2xx,301-304,418". */
    validStatusCodeRanges?: string[];
    /** Value indicating whether HTTPS is preferred over HTTP in cases where the choice is not explicit. */
    preferHttps?: boolean;
}

/** Describes the ICMP configuration. */
export declare interface ConnectionMonitorIcmpConfiguration {
    /** Value indicating whether path evaluation with trace route should be disabled. */
    disableTraceRoute?: boolean;
}

/** List of connection monitors. */
export declare interface ConnectionMonitorListResult {
    /** Information about connection monitors. */
    value?: ConnectionMonitorResult[];
}

/** Describes a connection monitor output destination. */
export declare interface ConnectionMonitorOutput {
    /** Connection monitor output destination type. Currently, only "Workspace" is supported. */
    type?: OutputType;
    /** Describes the settings for producing output into a log analytics workspace. */
    workspaceSettings?: ConnectionMonitorWorkspaceSettings;
}

/** Parameters that define the operation to create a connection monitor. */
export declare interface ConnectionMonitorParameters {
    /** Describes the source of connection monitor. */
    source?: ConnectionMonitorSource;
    /** Describes the destination of connection monitor. */
    destination?: ConnectionMonitorDestination;
    /** Determines if the connection monitor will start automatically once created. */
    autoStart?: boolean;
    /** Monitoring interval in seconds. */
    monitoringIntervalInSeconds?: number;
    /** List of connection monitor endpoints. */
    endpoints?: ConnectionMonitorEndpoint[];
    /** List of connection monitor test configurations. */
    testConfigurations?: ConnectionMonitorTestConfiguration[];
    /** List of connection monitor test groups. */
    testGroups?: ConnectionMonitorTestGroup[];
    /** List of connection monitor outputs. */
    outputs?: ConnectionMonitorOutput[];
    /** Optional notes to be associated with the connection monitor. */
    notes?: string;
}

/** List of connection states snapshots. */
export declare interface ConnectionMonitorQueryResult {
    /** Status of connection monitor source. */
    sourceStatus?: ConnectionMonitorSourceStatus;
    /** Information about connection states. */
    states?: ConnectionStateSnapshot[];
}

/** Information about the connection monitor. */
export declare interface ConnectionMonitorResult {
    /**
     * Name of the connection monitor.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * ID of the connection monitor.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /**
     * Connection monitor type.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /** Connection monitor location. */
    location?: string;
    /** Connection monitor tags. */
    tags?: {
        [propertyName: string]: string;
    };
    /** Describes the source of connection monitor. */
    source?: ConnectionMonitorSource;
    /** Describes the destination of connection monitor. */
    destination?: ConnectionMonitorDestination;
    /** Determines if the connection monitor will start automatically once created. */
    autoStart?: boolean;
    /** Monitoring interval in seconds. */
    monitoringIntervalInSeconds?: number;
    /** List of connection monitor endpoints. */
    endpoints?: ConnectionMonitorEndpoint[];
    /** List of connection monitor test configurations. */
    testConfigurations?: ConnectionMonitorTestConfiguration[];
    /** List of connection monitor test groups. */
    testGroups?: ConnectionMonitorTestGroup[];
    /** List of connection monitor outputs. */
    outputs?: ConnectionMonitorOutput[];
    /** Optional notes to be associated with the connection monitor. */
    notes?: string;
    /**
     * The provisioning state of the connection monitor.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
    /**
     * The date and time when the connection monitor was started.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly startTime?: Date;
    /**
     * The monitoring status of the connection monitor.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly monitoringStatus?: string;
    /**
     * Type of connection monitor.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly connectionMonitorType?: ConnectionMonitorType;
}

/** Describes the properties of a connection monitor. */
export declare type ConnectionMonitorResultProperties = ConnectionMonitorParameters & {
    /**
     * The provisioning state of the connection monitor.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
    /**
     * The date and time when the connection monitor was started.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly startTime?: Date;
    /**
     * The monitoring status of the connection monitor.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly monitoringStatus?: string;
    /**
     * Type of connection monitor.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly connectionMonitorType?: ConnectionMonitorType;
};

/** Interface representing a ConnectionMonitors. */
export declare interface ConnectionMonitors {
    /**
     * Lists all connection monitors for the specified Network Watcher.
     * @param resourceGroupName The name of the resource group containing Network Watcher.
     * @param networkWatcherName The name of the Network Watcher resource.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, networkWatcherName: string, options?: ConnectionMonitorsListOptionalParams): PagedAsyncIterableIterator<ConnectionMonitorResult>;
    /**
     * Create or update a connection monitor.
     * @param resourceGroupName The name of the resource group containing Network Watcher.
     * @param networkWatcherName The name of the Network Watcher resource.
     * @param connectionMonitorName The name of the connection monitor.
     * @param parameters Parameters that define the operation to create a connection monitor.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string, parameters: ConnectionMonitor, options?: ConnectionMonitorsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<ConnectionMonitorsCreateOrUpdateResponse>, ConnectionMonitorsCreateOrUpdateResponse>>;
    /**
     * Create or update a connection monitor.
     * @param resourceGroupName The name of the resource group containing Network Watcher.
     * @param networkWatcherName The name of the Network Watcher resource.
     * @param connectionMonitorName The name of the connection monitor.
     * @param parameters Parameters that define the operation to create a connection monitor.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string, parameters: ConnectionMonitor, options?: ConnectionMonitorsCreateOrUpdateOptionalParams): Promise<ConnectionMonitorsCreateOrUpdateResponse>;
    /**
     * Gets a connection monitor by name.
     * @param resourceGroupName The name of the resource group containing Network Watcher.
     * @param networkWatcherName The name of the Network Watcher resource.
     * @param connectionMonitorName The name of the connection monitor.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string, options?: ConnectionMonitorsGetOptionalParams): Promise<ConnectionMonitorsGetResponse>;
    /**
     * Deletes the specified connection monitor.
     * @param resourceGroupName The name of the resource group containing Network Watcher.
     * @param networkWatcherName The name of the Network Watcher resource.
     * @param connectionMonitorName The name of the connection monitor.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string, options?: ConnectionMonitorsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the specified connection monitor.
     * @param resourceGroupName The name of the resource group containing Network Watcher.
     * @param networkWatcherName The name of the Network Watcher resource.
     * @param connectionMonitorName The name of the connection monitor.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string, options?: ConnectionMonitorsDeleteOptionalParams): Promise<void>;
    /**
     * Update tags of the specified connection monitor.
     * @param resourceGroupName The name of the resource group.
     * @param networkWatcherName The name of the network watcher.
     * @param connectionMonitorName The name of the connection monitor.
     * @param parameters Parameters supplied to update connection monitor tags.
     * @param options The options parameters.
     */
    updateTags(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string, parameters: TagsObject, options?: ConnectionMonitorsUpdateTagsOptionalParams): Promise<ConnectionMonitorsUpdateTagsResponse>;
    /**
     * Stops the specified connection monitor.
     * @param resourceGroupName The name of the resource group containing Network Watcher.
     * @param networkWatcherName The name of the Network Watcher resource.
     * @param connectionMonitorName The name of the connection monitor.
     * @param options The options parameters.
     */
    beginStop(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string, options?: ConnectionMonitorsStopOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Stops the specified connection monitor.
     * @param resourceGroupName The name of the resource group containing Network Watcher.
     * @param networkWatcherName The name of the Network Watcher resource.
     * @param connectionMonitorName The name of the connection monitor.
     * @param options The options parameters.
     */
    beginStopAndWait(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string, options?: ConnectionMonitorsStopOptionalParams): Promise<void>;
    /**
     * Starts the specified connection monitor.
     * @param resourceGroupName The name of the resource group containing Network Watcher.
     * @param networkWatcherName The name of the Network Watcher resource.
     * @param connectionMonitorName The name of the connection monitor.
     * @param options The options parameters.
     */
    beginStart(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string, options?: ConnectionMonitorsStartOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Starts the specified connection monitor.
     * @param resourceGroupName The name of the resource group containing Network Watcher.
     * @param networkWatcherName The name of the Network Watcher resource.
     * @param connectionMonitorName The name of the connection monitor.
     * @param options The options parameters.
     */
    beginStartAndWait(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string, options?: ConnectionMonitorsStartOptionalParams): Promise<void>;
    /**
     * Query a snapshot of the most recent connection states.
     * @param resourceGroupName The name of the resource group containing Network Watcher.
     * @param networkWatcherName The name of the Network Watcher resource.
     * @param connectionMonitorName The name given to the connection monitor.
     * @param options The options parameters.
     */
    beginQuery(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string, options?: ConnectionMonitorsQueryOptionalParams): Promise<PollerLike<PollOperationState<ConnectionMonitorsQueryResponse>, ConnectionMonitorsQueryResponse>>;
    /**
     * Query a snapshot of the most recent connection states.
     * @param resourceGroupName The name of the resource group containing Network Watcher.
     * @param networkWatcherName The name of the Network Watcher resource.
     * @param connectionMonitorName The name given to the connection monitor.
     * @param options The options parameters.
     */
    beginQueryAndWait(resourceGroupName: string, networkWatcherName: string, connectionMonitorName: string, options?: ConnectionMonitorsQueryOptionalParams): Promise<ConnectionMonitorsQueryResponse>;
}

/** Optional parameters. */
export declare interface ConnectionMonitorsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type ConnectionMonitorsCreateOrUpdateResponse = ConnectionMonitorResult;

/** Optional parameters. */
export declare interface ConnectionMonitorsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface ConnectionMonitorsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type ConnectionMonitorsGetResponse = ConnectionMonitorResult;

/** Optional parameters. */
export declare interface ConnectionMonitorsListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type ConnectionMonitorsListResponse = ConnectionMonitorListResult;

/** Describes the source of connection monitor. */
export declare interface ConnectionMonitorSource {
    /** The ID of the resource used as the source by connection monitor. */
    resourceId: string;
    /** The source port used by connection monitor. */
    port?: number;
}

/**
 * Defines values for ConnectionMonitorSourceStatus. \
 * {@link KnownConnectionMonitorSourceStatus} can be used interchangeably with ConnectionMonitorSourceStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown** \
 * **Active** \
 * **Inactive**
 */
export declare type ConnectionMonitorSourceStatus = string;

/** Optional parameters. */
export declare interface ConnectionMonitorsQueryOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the query operation. */
export declare type ConnectionMonitorsQueryResponse = ConnectionMonitorQueryResult;

/** Optional parameters. */
export declare interface ConnectionMonitorsStartOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface ConnectionMonitorsStopOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Describes the threshold for declaring a test successful. */
export declare interface ConnectionMonitorSuccessThreshold {
    /** The maximum percentage of failed checks permitted for a test to evaluate as successful. */
    checksFailedPercent?: number;
    /** The maximum round-trip time in milliseconds permitted for a test to evaluate as successful. */
    roundTripTimeMs?: number;
}

/** Optional parameters. */
export declare interface ConnectionMonitorsUpdateTagsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateTags operation. */
export declare type ConnectionMonitorsUpdateTagsResponse = ConnectionMonitorResult;

/** Describes the TCP configuration. */
export declare interface ConnectionMonitorTcpConfiguration {
    /** The port to connect to. */
    port?: number;
    /** Value indicating whether path evaluation with trace route should be disabled. */
    disableTraceRoute?: boolean;
}

/** Describes a connection monitor test configuration. */
export declare interface ConnectionMonitorTestConfiguration {
    /** The name of the connection monitor test configuration. */
    name: string;
    /** The frequency of test evaluation, in seconds. */
    testFrequencySec?: number;
    /** The protocol to use in test evaluation. */
    protocol: ConnectionMonitorTestConfigurationProtocol;
    /** The preferred IP version to use in test evaluation. The connection monitor may choose to use a different version depending on other parameters. */
    preferredIPVersion?: PreferredIPVersion;
    /** The parameters used to perform test evaluation over HTTP. */
    httpConfiguration?: ConnectionMonitorHttpConfiguration;
    /** The parameters used to perform test evaluation over TCP. */
    tcpConfiguration?: ConnectionMonitorTcpConfiguration;
    /** The parameters used to perform test evaluation over ICMP. */
    icmpConfiguration?: ConnectionMonitorIcmpConfiguration;
    /** The threshold for declaring a test successful. */
    successThreshold?: ConnectionMonitorSuccessThreshold;
}

/**
 * Defines values for ConnectionMonitorTestConfigurationProtocol. \
 * {@link KnownConnectionMonitorTestConfigurationProtocol} can be used interchangeably with ConnectionMonitorTestConfigurationProtocol,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Tcp** \
 * **Http** \
 * **Icmp**
 */
export declare type ConnectionMonitorTestConfigurationProtocol = string;

/** Describes the connection monitor test group. */
export declare interface ConnectionMonitorTestGroup {
    /** The name of the connection monitor test group. */
    name: string;
    /** Value indicating whether test group is disabled. */
    disable?: boolean;
    /** List of test configuration names. */
    testConfigurations: string[];
    /** List of source endpoint names. */
    sources: string[];
    /** List of destination endpoint names. */
    destinations: string[];
}

/**
 * Defines values for ConnectionMonitorType. \
 * {@link KnownConnectionMonitorType} can be used interchangeably with ConnectionMonitorType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **MultiEndpoint** \
 * **SingleSourceDestination**
 */
export declare type ConnectionMonitorType = string;

/** Describes the settings for producing output into a log analytics workspace. */
export declare interface ConnectionMonitorWorkspaceSettings {
    /** Log analytics workspace resource ID. */
    workspaceResourceId?: string;
}

/** The virtual network connection reset shared key. */
export declare interface ConnectionResetSharedKey {
    /** The virtual network connection reset shared key length, should between 1 and 128. */
    keyLength: number;
}

/** Response for GetConnectionSharedKey API service call. */
export declare type ConnectionSharedKey = SubResource & {
    /** The virtual network connection shared key value. */
    value: string;
};

/**
 * Defines values for ConnectionState. \
 * {@link KnownConnectionState} can be used interchangeably with ConnectionState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Reachable** \
 * **Unreachable** \
 * **Unknown**
 */
export declare type ConnectionState = string;

/** Connection state snapshot. */
export declare interface ConnectionStateSnapshot {
    /** The connection state. */
    connectionState?: ConnectionState;
    /** The start time of the connection snapshot. */
    startTime?: Date;
    /** The end time of the connection snapshot. */
    endTime?: Date;
    /** Connectivity analysis evaluation state. */
    evaluationState?: EvaluationState;
    /** Average latency in ms. */
    avgLatencyInMs?: number;
    /** Minimum latency in ms. */
    minLatencyInMs?: number;
    /** Maximum latency in ms. */
    maxLatencyInMs?: number;
    /** The number of sent probes. */
    probesSent?: number;
    /** The number of failed probes. */
    probesFailed?: number;
    /**
     * List of hops between the source and the destination.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly hops?: ConnectivityHop[];
}

/**
 * Defines values for ConnectionStatus. \
 * {@link KnownConnectionStatus} can be used interchangeably with ConnectionStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown** \
 * **Connected** \
 * **Disconnected** \
 * **Degraded**
 */
export declare type ConnectionStatus = string;

/** Parameters that define destination of connection. */
export declare interface ConnectivityDestination {
    /** The ID of the resource to which a connection attempt will be made. */
    resourceId?: string;
    /** The IP address or URI the resource to which a connection attempt will be made. */
    address?: string;
    /** Port on which check connectivity will be performed. */
    port?: number;
}

/** Information about a hop between the source and the destination. */
export declare interface ConnectivityHop {
    /**
     * The type of the hop.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /**
     * The ID of the hop.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
    /**
     * The IP address of the hop.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly address?: string;
    /**
     * The ID of the resource corresponding to this hop.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly resourceId?: string;
    /**
     * List of next hop identifiers.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextHopIds?: string[];
    /**
     * List of issues.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly issues?: ConnectivityIssue[];
}

/** Information on the connectivity status. */
export declare interface ConnectivityInformation {
    /**
     * List of hops between the source and the destination.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly hops?: ConnectivityHop[];
    /**
     * The connection status.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly connectionStatus?: ConnectionStatus;
    /**
     * Average latency in milliseconds.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly avgLatencyInMs?: number;
    /**
     * Minimum latency in milliseconds.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly minLatencyInMs?: number;
    /**
     * Maximum latency in milliseconds.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly maxLatencyInMs?: number;
    /**
     * Total number of probes sent.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly probesSent?: number;
    /**
     * Number of failed probes.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly probesFailed?: number;
}

/** Information about an issue encountered in the process of checking for connectivity. */
export declare interface ConnectivityIssue {
    /**
     * The origin of the issue.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly origin?: Origin;
    /**
     * The severity of the issue.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly severity?: Severity;
    /**
     * The type of issue.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: IssueType;
    /**
     * Provides additional context on the issue.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly context?: {
        [propertyName: string]: string;
    }[];
}

/** Parameters that determine how the connectivity check will be performed. */
export declare interface ConnectivityParameters {
    /** The source of the connection. */
    source: ConnectivitySource;
    /** The destination of connection. */
    destination: ConnectivityDestination;
    /** Network protocol. */
    protocol?: Protocol;
    /** Configuration of the protocol. */
    protocolConfiguration?: ProtocolConfiguration;
    /** Preferred IP version of the connection. */
    preferredIPVersion?: IPVersion;
}

/** Parameters that define the source of the connection. */
export declare interface ConnectivitySource {
    /** The ID of the resource from which a connectivity check will be initiated. */
    resourceId: string;
    /** The source port from which a connectivity check will be performed. */
    port?: number;
}

/** Reference to container resource in remote resource provider. */
export declare type Container = SubResource & {};

/** Container network interface child resource. */
export declare type ContainerNetworkInterface = SubResource & {
    /** The name of the resource. This name can be used to access the resource. */
    name?: string;
    /**
     * Sub Resource type.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /**
     * Container network interface configuration from which this container network interface is created.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly containerNetworkInterfaceConfiguration?: ContainerNetworkInterfaceConfiguration;
    /** Reference to the container to which this container network interface is attached. */
    container?: Container;
    /**
     * Reference to the ip configuration on this container nic.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly ipConfigurations?: ContainerNetworkInterfaceIpConfiguration[];
    /**
     * The provisioning state of the container network interface resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** Container network interface configuration child resource. */
export declare type ContainerNetworkInterfaceConfiguration = SubResource & {
    /** The name of the resource. This name can be used to access the resource. */
    name?: string;
    /**
     * Sub Resource type.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /** A list of ip configurations of the container network interface configuration. */
    ipConfigurations?: IPConfigurationProfile[];
    /** A list of container network interfaces created from this container network interface configuration. */
    containerNetworkInterfaces?: SubResource[];
    /**
     * The provisioning state of the container network interface configuration resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** The ip configuration for a container network interface. */
export declare interface ContainerNetworkInterfaceIpConfiguration {
    /** The name of the resource. This name can be used to access the resource. */
    name?: string;
    /**
     * Sub Resource type.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /**
     * The provisioning state of the container network interface IP configuration resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
}

/** Contains custom Dns resolution configuration from customer. */
export declare interface CustomDnsConfigPropertiesFormat {
    /** Fqdn that resolves to private endpoint ip address. */
    fqdn?: string;
    /** A list of private ip addresses of the private endpoint. */
    ipAddresses?: string[];
}

/** Interface representing a DdosCustomPolicies. */
export declare interface DdosCustomPolicies {
    /**
     * Deletes the specified DDoS custom policy.
     * @param resourceGroupName The name of the resource group.
     * @param ddosCustomPolicyName The name of the DDoS custom policy.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, ddosCustomPolicyName: string, options?: DdosCustomPoliciesDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the specified DDoS custom policy.
     * @param resourceGroupName The name of the resource group.
     * @param ddosCustomPolicyName The name of the DDoS custom policy.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, ddosCustomPolicyName: string, options?: DdosCustomPoliciesDeleteOptionalParams): Promise<void>;
    /**
     * Gets information about the specified DDoS custom policy.
     * @param resourceGroupName The name of the resource group.
     * @param ddosCustomPolicyName The name of the DDoS custom policy.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, ddosCustomPolicyName: string, options?: DdosCustomPoliciesGetOptionalParams): Promise<DdosCustomPoliciesGetResponse>;
    /**
     * Creates or updates a DDoS custom policy.
     * @param resourceGroupName The name of the resource group.
     * @param ddosCustomPolicyName The name of the DDoS custom policy.
     * @param parameters Parameters supplied to the create or update operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, ddosCustomPolicyName: string, parameters: DdosCustomPolicy, options?: DdosCustomPoliciesCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<DdosCustomPoliciesCreateOrUpdateResponse>, DdosCustomPoliciesCreateOrUpdateResponse>>;
    /**
     * Creates or updates a DDoS custom policy.
     * @param resourceGroupName The name of the resource group.
     * @param ddosCustomPolicyName The name of the DDoS custom policy.
     * @param parameters Parameters supplied to the create or update operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, ddosCustomPolicyName: string, parameters: DdosCustomPolicy, options?: DdosCustomPoliciesCreateOrUpdateOptionalParams): Promise<DdosCustomPoliciesCreateOrUpdateResponse>;
    /**
     * Update a DDoS custom policy tags.
     * @param resourceGroupName The name of the resource group.
     * @param ddosCustomPolicyName The name of the DDoS custom policy.
     * @param parameters Parameters supplied to update DDoS custom policy resource tags.
     * @param options The options parameters.
     */
    updateTags(resourceGroupName: string, ddosCustomPolicyName: string, parameters: TagsObject, options?: DdosCustomPoliciesUpdateTagsOptionalParams): Promise<DdosCustomPoliciesUpdateTagsResponse>;
}

/** Optional parameters. */
export declare interface DdosCustomPoliciesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type DdosCustomPoliciesCreateOrUpdateResponse = DdosCustomPolicy;

/** Optional parameters. */
export declare interface DdosCustomPoliciesDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface DdosCustomPoliciesGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type DdosCustomPoliciesGetResponse = DdosCustomPolicy;

/** Optional parameters. */
export declare interface DdosCustomPoliciesUpdateTagsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateTags operation. */
export declare type DdosCustomPoliciesUpdateTagsResponse = DdosCustomPolicy;

/** A DDoS custom policy in a resource group. */
export declare type DdosCustomPolicy = Resource & {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /**
     * The resource GUID property of the DDoS custom policy resource. It uniquely identifies the resource, even if the user changes its name or migrate the resource across subscriptions or resource groups.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly resourceGuid?: string;
    /**
     * The provisioning state of the DDoS custom policy resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
    /**
     * The list of public IPs associated with the DDoS custom policy resource. This list is read-only.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly publicIPAddresses?: SubResource[];
    /** The protocol-specific DDoS policy customization parameters. */
    protocolCustomSettings?: ProtocolCustomSettingsFormat[];
};

/**
 * Defines values for DdosCustomPolicyProtocol. \
 * {@link KnownDdosCustomPolicyProtocol} can be used interchangeably with DdosCustomPolicyProtocol,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Tcp** \
 * **Udp** \
 * **Syn**
 */
export declare type DdosCustomPolicyProtocol = string;

/**
 * Defines values for DdosCustomPolicyTriggerSensitivityOverride. \
 * {@link KnownDdosCustomPolicyTriggerSensitivityOverride} can be used interchangeably with DdosCustomPolicyTriggerSensitivityOverride,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Relaxed** \
 * **Low** \
 * **Default** \
 * **High**
 */
export declare type DdosCustomPolicyTriggerSensitivityOverride = string;

/** A DDoS protection plan in a resource group. */
export declare interface DdosProtectionPlan {
    /**
     * Resource ID.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
    /**
     * Resource name.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * Resource type.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /** Resource location. */
    location?: string;
    /** Resource tags. */
    tags?: {
        [propertyName: string]: string;
    };
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /**
     * The resource GUID property of the DDoS protection plan resource. It uniquely identifies the resource, even if the user changes its name or migrate the resource across subscriptions or resource groups.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly resourceGuid?: string;
    /**
     * The provisioning state of the DDoS protection plan resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
    /**
     * The list of virtual networks associated with the DDoS protection plan resource. This list is read-only.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly virtualNetworks?: SubResource[];
}

/** A list of DDoS protection plans. */
export declare interface DdosProtectionPlanListResult {
    /** A list of DDoS protection plans. */
    value?: DdosProtectionPlan[];
    /**
     * The URL to get the next set of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Interface representing a DdosProtectionPlans. */
export declare interface DdosProtectionPlans {
    /**
     * Gets all DDoS protection plans in a subscription.
     * @param options The options parameters.
     */
    list(options?: DdosProtectionPlansListOptionalParams): PagedAsyncIterableIterator<DdosProtectionPlan>;
    /**
     * Gets all the DDoS protection plans in a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: DdosProtectionPlansListByResourceGroupOptionalParams): PagedAsyncIterableIterator<DdosProtectionPlan>;
    /**
     * Deletes the specified DDoS protection plan.
     * @param resourceGroupName The name of the resource group.
     * @param ddosProtectionPlanName The name of the DDoS protection plan.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, ddosProtectionPlanName: string, options?: DdosProtectionPlansDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the specified DDoS protection plan.
     * @param resourceGroupName The name of the resource group.
     * @param ddosProtectionPlanName The name of the DDoS protection plan.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, ddosProtectionPlanName: string, options?: DdosProtectionPlansDeleteOptionalParams): Promise<void>;
    /**
     * Gets information about the specified DDoS protection plan.
     * @param resourceGroupName The name of the resource group.
     * @param ddosProtectionPlanName The name of the DDoS protection plan.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, ddosProtectionPlanName: string, options?: DdosProtectionPlansGetOptionalParams): Promise<DdosProtectionPlansGetResponse>;
    /**
     * Creates or updates a DDoS protection plan.
     * @param resourceGroupName The name of the resource group.
     * @param ddosProtectionPlanName The name of the DDoS protection plan.
     * @param parameters Parameters supplied to the create or update operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, ddosProtectionPlanName: string, parameters: DdosProtectionPlan, options?: DdosProtectionPlansCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<DdosProtectionPlansCreateOrUpdateResponse>, DdosProtectionPlansCreateOrUpdateResponse>>;
    /**
     * Creates or updates a DDoS protection plan.
     * @param resourceGroupName The name of the resource group.
     * @param ddosProtectionPlanName The name of the DDoS protection plan.
     * @param parameters Parameters supplied to the create or update operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, ddosProtectionPlanName: string, parameters: DdosProtectionPlan, options?: DdosProtectionPlansCreateOrUpdateOptionalParams): Promise<DdosProtectionPlansCreateOrUpdateResponse>;
    /**
     * Update a DDoS protection plan tags.
     * @param resourceGroupName The name of the resource group.
     * @param ddosProtectionPlanName The name of the DDoS protection plan.
     * @param parameters Parameters supplied to the update DDoS protection plan resource tags.
     * @param options The options parameters.
     */
    updateTags(resourceGroupName: string, ddosProtectionPlanName: string, parameters: TagsObject, options?: DdosProtectionPlansUpdateTagsOptionalParams): Promise<DdosProtectionPlansUpdateTagsResponse>;
}

/** Optional parameters. */
export declare interface DdosProtectionPlansCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type DdosProtectionPlansCreateOrUpdateResponse = DdosProtectionPlan;

/** Optional parameters. */
export declare interface DdosProtectionPlansDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface DdosProtectionPlansGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type DdosProtectionPlansGetResponse = DdosProtectionPlan;

/** Optional parameters. */
export declare interface DdosProtectionPlansListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNext operation. */
export declare type DdosProtectionPlansListByResourceGroupNextResponse = DdosProtectionPlanListResult;

/** Optional parameters. */
export declare interface DdosProtectionPlansListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroup operation. */
export declare type DdosProtectionPlansListByResourceGroupResponse = DdosProtectionPlanListResult;

/** Optional parameters. */
export declare interface DdosProtectionPlansListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type DdosProtectionPlansListNextResponse = DdosProtectionPlanListResult;

/** Optional parameters. */
export declare interface DdosProtectionPlansListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type DdosProtectionPlansListResponse = DdosProtectionPlanListResult;

/** Optional parameters. */
export declare interface DdosProtectionPlansUpdateTagsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateTags operation. */
export declare type DdosProtectionPlansUpdateTagsResponse = DdosProtectionPlan;

/** Contains the DDoS protection settings of the public IP. */
export declare interface DdosSettings {
    /** The DDoS custom policy associated with the public IP. */
    ddosCustomPolicy?: SubResource;
    /** The DDoS protection policy customizability of the public IP. Only standard coverage will have the ability to be customized. */
    protectionCoverage?: DdosSettingsProtectionCoverage;
    /** Enables DDoS protection on the public IP. */
    protectedIP?: boolean;
}

/**
 * Defines values for DdosSettingsProtectionCoverage. \
 * {@link KnownDdosSettingsProtectionCoverage} can be used interchangeably with DdosSettingsProtectionCoverage,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Basic** \
 * **Standard**
 */
export declare type DdosSettingsProtectionCoverage = string;

/** Interface representing a DefaultSecurityRules. */
export declare interface DefaultSecurityRules {
    /**
     * Gets all default security rules in a network security group.
     * @param resourceGroupName The name of the resource group.
     * @param networkSecurityGroupName The name of the network security group.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, networkSecurityGroupName: string, options?: DefaultSecurityRulesListOptionalParams): PagedAsyncIterableIterator<SecurityRule>;
    /**
     * Get the specified default network security rule.
     * @param resourceGroupName The name of the resource group.
     * @param networkSecurityGroupName The name of the network security group.
     * @param defaultSecurityRuleName The name of the default security rule.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, networkSecurityGroupName: string, defaultSecurityRuleName: string, options?: DefaultSecurityRulesGetOptionalParams): Promise<DefaultSecurityRulesGetResponse>;
}

/** Optional parameters. */
export declare interface DefaultSecurityRulesGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type DefaultSecurityRulesGetResponse = SecurityRule;

/** Optional parameters. */
export declare interface DefaultSecurityRulesListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type DefaultSecurityRulesListNextResponse = SecurityRuleListResult;

/** Optional parameters. */
export declare interface DefaultSecurityRulesListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type DefaultSecurityRulesListResponse = SecurityRuleListResult;

/** Details the service to which the subnet is delegated. */
export declare type Delegation = SubResource & {
    /** The name of the resource that is unique within a subnet. This name can be used to access the resource. */
    name?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /** The name of the service to whom the subnet should be delegated (e.g. Microsoft.Sql/servers). */
    serviceName?: string;
    /**
     * The actions permitted to the service upon delegation.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly actions?: string[];
    /**
     * The provisioning state of the service delegation resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** Optional parameters. */
export declare interface DeleteBastionShareableLinkOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** List of properties of the device. */
export declare interface DeviceProperties {
    /** Name of the device Vendor. */
    deviceVendor?: string;
    /** Model of the device. */
    deviceModel?: string;
    /** Link speed. */
    linkSpeedInMbps?: number;
}

/** DhcpOptions contains an array of DNS servers available to VMs deployed in the virtual network. Standard DHCP option for a subnet overrides VNET DHCP options. */
export declare interface DhcpOptions {
    /** The list of DNS servers IP addresses. */
    dnsServers?: string[];
}

/**
 * Defines values for DhGroup. \
 * {@link KnownDhGroup} can be used interchangeably with DhGroup,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None** \
 * **DHGroup1** \
 * **DHGroup2** \
 * **DHGroup14** \
 * **DHGroup2048** \
 * **ECP256** \
 * **ECP384** \
 * **DHGroup24**
 */
export declare type DhGroup = string;

/** Dimension of the metric. */
export declare interface Dimension {
    /** The name of the dimension. */
    name?: string;
    /** The display name of the dimension. */
    displayName?: string;
    /** The internal name of the dimension. */
    internalName?: string;
}

/**
 * Defines values for Direction. \
 * {@link KnownDirection} can be used interchangeably with Direction,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Inbound** \
 * **Outbound**
 */
export declare type Direction = string;

/** Optional parameters. */
export declare interface DisconnectActiveSessionsNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the disconnectActiveSessionsNext operation. */
export declare type DisconnectActiveSessionsNextResponse = BastionSessionDeleteResult;

/** Optional parameters. */
export declare interface DisconnectActiveSessionsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the disconnectActiveSessions operation. */
export declare type DisconnectActiveSessionsResponse = BastionSessionDeleteResult;

/** Response for the CheckDnsNameAvailability API service call. */
export declare interface DnsNameAvailabilityResult {
    /** Domain availability (True/False). */
    available?: boolean;
}

/** Effective network security group. */
export declare interface EffectiveNetworkSecurityGroup {
    /** The ID of network security group that is applied. */
    networkSecurityGroup?: SubResource;
    /** Associated resources. */
    association?: EffectiveNetworkSecurityGroupAssociation;
    /** A collection of effective security rules. */
    effectiveSecurityRules?: EffectiveNetworkSecurityRule[];
    /** Mapping of tags to list of IP Addresses included within the tag. */
    tagMap?: string;
}

/** The effective network security group association. */
export declare interface EffectiveNetworkSecurityGroupAssociation {
    /** The ID of the subnet if assigned. */
    subnet?: SubResource;
    /** The ID of the network interface if assigned. */
    networkInterface?: SubResource;
}

/** Response for list effective network security groups API service call. */
export declare interface EffectiveNetworkSecurityGroupListResult {
    /** A list of effective network security groups. */
    value?: EffectiveNetworkSecurityGroup[];
    /**
     * The URL to get the next set of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Effective network security rules. */
export declare interface EffectiveNetworkSecurityRule {
    /** The name of the security rule specified by the user (if created by the user). */
    name?: string;
    /** The network protocol this rule applies to. */
    protocol?: EffectiveSecurityRuleProtocol;
    /** The source port or range. */
    sourcePortRange?: string;
    /** The destination port or range. */
    destinationPortRange?: string;
    /** The source port ranges. Expected values include a single integer between 0 and 65535, a range using '-' as separator (e.g. 100-400), or an asterisk (*). */
    sourcePortRanges?: string[];
    /** The destination port ranges. Expected values include a single integer between 0 and 65535, a range using '-' as separator (e.g. 100-400), or an asterisk (*). */
    destinationPortRanges?: string[];
    /** The source address prefix. */
    sourceAddressPrefix?: string;
    /** The destination address prefix. */
    destinationAddressPrefix?: string;
    /** The source address prefixes. Expected values include CIDR IP ranges, Default Tags (VirtualNetwork, AzureLoadBalancer, Internet), System Tags, and the asterisk (*). */
    sourceAddressPrefixes?: string[];
    /** The destination address prefixes. Expected values include CIDR IP ranges, Default Tags (VirtualNetwork, AzureLoadBalancer, Internet), System Tags, and the asterisk (*). */
    destinationAddressPrefixes?: string[];
    /** The expanded source address prefix. */
    expandedSourceAddressPrefix?: string[];
    /** Expanded destination address prefix. */
    expandedDestinationAddressPrefix?: string[];
    /** Whether network traffic is allowed or denied. */
    access?: SecurityRuleAccess;
    /** The priority of the rule. */
    priority?: number;
    /** The direction of the rule. */
    direction?: SecurityRuleDirection;
}

/** Effective Route. */
export declare interface EffectiveRoute {
    /** The name of the user defined route. This is optional. */
    name?: string;
    /** If true, on-premises routes are not propagated to the network interfaces in the subnet. */
    disableBgpRoutePropagation?: boolean;
    /** Who created the route. */
    source?: EffectiveRouteSource;
    /** The value of effective route. */
    state?: EffectiveRouteState;
    /** The address prefixes of the effective routes in CIDR notation. */
    addressPrefix?: string[];
    /** The IP address of the next hop of the effective route. */
    nextHopIpAddress?: string[];
    /** The type of Azure hop the packet should be sent to. */
    nextHopType?: RouteNextHopType;
}

/** Response for list effective route API service call. */
export declare interface EffectiveRouteListResult {
    /** A list of effective routes. */
    value?: EffectiveRoute[];
    /**
     * The URL to get the next set of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/**
 * Defines values for EffectiveRouteSource. \
 * {@link KnownEffectiveRouteSource} can be used interchangeably with EffectiveRouteSource,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown** \
 * **User** \
 * **VirtualNetworkGateway** \
 * **Default**
 */
export declare type EffectiveRouteSource = string;

/**
 * Defines values for EffectiveRouteState. \
 * {@link KnownEffectiveRouteState} can be used interchangeably with EffectiveRouteState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Active** \
 * **Invalid**
 */
export declare type EffectiveRouteState = string;

/**
 * Defines values for EffectiveSecurityRuleProtocol. \
 * {@link KnownEffectiveSecurityRuleProtocol} can be used interchangeably with EffectiveSecurityRuleProtocol,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Tcp** \
 * **Udp** \
 * **All**
 */
export declare type EffectiveSecurityRuleProtocol = string;

/** Endpoint service. */
export declare type EndpointServiceResult = SubResource & {
    /**
     * Name of the endpoint service.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * Type of the endpoint service.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
};

/** Response for the ListAvailableEndpointServices API service call. */
export declare interface EndpointServicesListResult {
    /** List of available endpoint services in a region. */
    value?: EndpointServiceResult[];
    /** The URL to get the next set of results. */
    nextLink?: string;
}

/** Common error details representation. */
export declare interface ErrorDetails {
    /** Error code. */
    code?: string;
    /** Error target. */
    target?: string;
    /** Error message. */
    message?: string;
}

/** Common error representation. */
export declare interface ErrorModel {
    /** Error code. */
    code?: string;
    /** Error message. */
    message?: string;
    /** Error target. */
    target?: string;
    /** Error details. */
    details?: ErrorDetails[];
    /** Inner error message. */
    innerError?: string;
}

/** The error object. */
export declare interface ErrorResponse {
    /** The error details object. */
    error?: ErrorDetails;
}

/** Results of network security group evaluation. */
export declare interface EvaluatedNetworkSecurityGroup {
    /** Network security group ID. */
    networkSecurityGroupId?: string;
    /** Resource ID of nic or subnet to which network security group is applied. */
    appliedTo?: string;
    /** Matched network security rule. */
    matchedRule?: MatchedRule;
    /**
     * List of network security rules evaluation results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly rulesEvaluationResult?: NetworkSecurityRulesEvaluationResult[];
}

/**
 * Defines values for EvaluationState. \
 * {@link KnownEvaluationState} can be used interchangeably with EvaluationState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **NotStarted** \
 * **InProgress** \
 * **Completed**
 */
export declare type EvaluationState = string;

/** ExpressRouteCircuit resource. */
export declare type ExpressRouteCircuit = Resource & {
    /** The SKU. */
    sku?: ExpressRouteCircuitSku;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /** Allow classic operations. */
    allowClassicOperations?: boolean;
    /** The CircuitProvisioningState state of the resource. */
    circuitProvisioningState?: string;
    /** The ServiceProviderProvisioningState state of the resource. */
    serviceProviderProvisioningState?: ServiceProviderProvisioningState;
    /** The list of authorizations. */
    authorizations?: ExpressRouteCircuitAuthorization[];
    /** The list of peerings. */
    peerings?: ExpressRouteCircuitPeering[];
    /** The ServiceKey. */
    serviceKey?: string;
    /** The ServiceProviderNotes. */
    serviceProviderNotes?: string;
    /** The ServiceProviderProperties. */
    serviceProviderProperties?: ExpressRouteCircuitServiceProviderProperties;
    /** The reference to the ExpressRoutePort resource when the circuit is provisioned on an ExpressRoutePort resource. */
    expressRoutePort?: SubResource;
    /** The bandwidth of the circuit when the circuit is provisioned on an ExpressRoutePort resource. */
    bandwidthInGbps?: number;
    /**
     * The identifier of the circuit traffic. Outer tag for QinQ encapsulation.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly stag?: number;
    /**
     * The provisioning state of the express route circuit resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
    /** The GatewayManager Etag. */
    gatewayManagerEtag?: string;
    /** Flag denoting global reach status. */
    globalReachEnabled?: boolean;
};

/** The ARP table associated with the ExpressRouteCircuit. */
export declare interface ExpressRouteCircuitArpTable {
    /** Entry age in minutes. */
    age?: number;
    /** Interface address. */
    interface?: string;
    /** The IP address. */
    ipAddress?: string;
    /** The MAC address. */
    macAddress?: string;
}

/** Authorization in an ExpressRouteCircuit resource. */
export declare type ExpressRouteCircuitAuthorization = SubResource & {
    /** The name of the resource that is unique within a resource group. This name can be used to access the resource. */
    name?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /**
     * Type of the resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /** The authorization key. */
    authorizationKey?: string;
    /** The authorization use status. */
    authorizationUseStatus?: AuthorizationUseStatus;
    /**
     * The provisioning state of the authorization resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** Interface representing a ExpressRouteCircuitAuthorizations. */
export declare interface ExpressRouteCircuitAuthorizations {
    /**
     * Gets all authorizations in an express route circuit.
     * @param resourceGroupName The name of the resource group.
     * @param circuitName The name of the circuit.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, circuitName: string, options?: ExpressRouteCircuitAuthorizationsListOptionalParams): PagedAsyncIterableIterator<ExpressRouteCircuitAuthorization>;
    /**
     * Deletes the specified authorization from the specified express route circuit.
     * @param resourceGroupName The name of the resource group.
     * @param circuitName The name of the express route circuit.
     * @param authorizationName The name of the authorization.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, circuitName: string, authorizationName: string, options?: ExpressRouteCircuitAuthorizationsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the specified authorization from the specified express route circuit.
     * @param resourceGroupName The name of the resource group.
     * @param circuitName The name of the express route circuit.
     * @param authorizationName The name of the authorization.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, circuitName: string, authorizationName: string, options?: ExpressRouteCircuitAuthorizationsDeleteOptionalParams): Promise<void>;
    /**
     * Gets the specified authorization from the specified express route circuit.
     * @param resourceGroupName The name of the resource group.
     * @param circuitName The name of the express route circuit.
     * @param authorizationName The name of the authorization.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, circuitName: string, authorizationName: string, options?: ExpressRouteCircuitAuthorizationsGetOptionalParams): Promise<ExpressRouteCircuitAuthorizationsGetResponse>;
    /**
     * Creates or updates an authorization in the specified express route circuit.
     * @param resourceGroupName The name of the resource group.
     * @param circuitName The name of the express route circuit.
     * @param authorizationName The name of the authorization.
     * @param authorizationParameters Parameters supplied to the create or update express route circuit
     *                                authorization operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, circuitName: string, authorizationName: string, authorizationParameters: ExpressRouteCircuitAuthorization, options?: ExpressRouteCircuitAuthorizationsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<ExpressRouteCircuitAuthorizationsCreateOrUpdateResponse>, ExpressRouteCircuitAuthorizationsCreateOrUpdateResponse>>;
    /**
     * Creates or updates an authorization in the specified express route circuit.
     * @param resourceGroupName The name of the resource group.
     * @param circuitName The name of the express route circuit.
     * @param authorizationName The name of the authorization.
     * @param authorizationParameters Parameters supplied to the create or update express route circuit
     *                                authorization operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, circuitName: string, authorizationName: string, authorizationParameters: ExpressRouteCircuitAuthorization, options?: ExpressRouteCircuitAuthorizationsCreateOrUpdateOptionalParams): Promise<ExpressRouteCircuitAuthorizationsCreateOrUpdateResponse>;
}

/** Optional parameters. */
export declare interface ExpressRouteCircuitAuthorizationsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type ExpressRouteCircuitAuthorizationsCreateOrUpdateResponse = ExpressRouteCircuitAuthorization;

/** Optional parameters. */
export declare interface ExpressRouteCircuitAuthorizationsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface ExpressRouteCircuitAuthorizationsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type ExpressRouteCircuitAuthorizationsGetResponse = ExpressRouteCircuitAuthorization;

/** Optional parameters. */
export declare interface ExpressRouteCircuitAuthorizationsListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type ExpressRouteCircuitAuthorizationsListNextResponse = AuthorizationListResult;

/** Optional parameters. */
export declare interface ExpressRouteCircuitAuthorizationsListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type ExpressRouteCircuitAuthorizationsListResponse = AuthorizationListResult;

/** Express Route Circuit Connection in an ExpressRouteCircuitPeering resource. */
export declare type ExpressRouteCircuitConnection = SubResource & {
    /** The name of the resource that is unique within a resource group. This name can be used to access the resource. */
    name?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /**
     * Type of the resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /** Reference to Express Route Circuit Private Peering Resource of the circuit initiating connection. */
    expressRouteCircuitPeering?: SubResource;
    /** Reference to Express Route Circuit Private Peering Resource of the peered circuit. */
    peerExpressRouteCircuitPeering?: SubResource;
    /** /29 IP address space to carve out Customer addresses for tunnels. */
    addressPrefix?: string;
    /** The authorization key. */
    authorizationKey?: string;
    /** IPv6 Address PrefixProperties of the express route circuit connection. */
    ipv6CircuitConnectionConfig?: Ipv6CircuitConnectionConfig;
    /**
     * Express Route Circuit connection state.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly circuitConnectionStatus?: CircuitConnectionStatus;
    /**
     * The provisioning state of the express route circuit connection resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** Response for ListConnections API service call retrieves all global reach connections that belongs to a Private Peering for an ExpressRouteCircuit. */
export declare interface ExpressRouteCircuitConnectionListResult {
    /** The global reach connection associated with Private Peering in an ExpressRoute Circuit. */
    value?: ExpressRouteCircuitConnection[];
    /** The URL to get the next set of results. */
    nextLink?: string;
}

/** Interface representing a ExpressRouteCircuitConnections. */
export declare interface ExpressRouteCircuitConnections {
    /**
     * Gets all global reach connections associated with a private peering in an express route circuit.
     * @param resourceGroupName The name of the resource group.
     * @param circuitName The name of the circuit.
     * @param peeringName The name of the peering.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, circuitName: string, peeringName: string, options?: ExpressRouteCircuitConnectionsListOptionalParams): PagedAsyncIterableIterator<ExpressRouteCircuitConnection>;
    /**
     * Deletes the specified Express Route Circuit Connection from the specified express route circuit.
     * @param resourceGroupName The name of the resource group.
     * @param circuitName The name of the express route circuit.
     * @param peeringName The name of the peering.
     * @param connectionName The name of the express route circuit connection.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, circuitName: string, peeringName: string, connectionName: string, options?: ExpressRouteCircuitConnectionsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the specified Express Route Circuit Connection from the specified express route circuit.
     * @param resourceGroupName The name of the resource group.
     * @param circuitName The name of the express route circuit.
     * @param peeringName The name of the peering.
     * @param connectionName The name of the express route circuit connection.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, circuitName: string, peeringName: string, connectionName: string, options?: ExpressRouteCircuitConnectionsDeleteOptionalParams): Promise<void>;
    /**
     * Gets the specified Express Route Circuit Connection from the specified express route circuit.
     * @param resourceGroupName The name of the resource group.
     * @param circuitName The name of the express route circuit.
     * @param peeringName The name of the peering.
     * @param connectionName The name of the express route circuit connection.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, circuitName: string, peeringName: string, connectionName: string, options?: ExpressRouteCircuitConnectionsGetOptionalParams): Promise<ExpressRouteCircuitConnectionsGetResponse>;
    /**
     * Creates or updates a Express Route Circuit Connection in the specified express route circuits.
     * @param resourceGroupName The name of the resource group.
     * @param circuitName The name of the express route circuit.
     * @param peeringName The name of the peering.
     * @param connectionName The name of the express route circuit connection.
     * @param expressRouteCircuitConnectionParameters Parameters supplied to the create or update express
     *                                                route circuit connection operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, circuitName: string, peeringName: string, connectionName: string, expressRouteCircuitConnectionParameters: ExpressRouteCircuitConnection, options?: ExpressRouteCircuitConnectionsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<ExpressRouteCircuitConnectionsCreateOrUpdateResponse>, ExpressRouteCircuitConnectionsCreateOrUpdateResponse>>;
    /**
     * Creates or updates a Express Route Circuit Connection in the specified express route circuits.
     * @param resourceGroupName The name of the resource group.
     * @param circuitName The name of the express route circuit.
     * @param peeringName The name of the peering.
     * @param connectionName The name of the express route circuit connection.
     * @param expressRouteCircuitConnectionParameters Parameters supplied to the create or update express
     *                                                route circuit connection operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, circuitName: string, peeringName: string, connectionName: string, expressRouteCircuitConnectionParameters: ExpressRouteCircuitConnection, options?: ExpressRouteCircuitConnectionsCreateOrUpdateOptionalParams): Promise<ExpressRouteCircuitConnectionsCreateOrUpdateResponse>;
}

/** Optional parameters. */
export declare interface ExpressRouteCircuitConnectionsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type ExpressRouteCircuitConnectionsCreateOrUpdateResponse = ExpressRouteCircuitConnection;

/** Optional parameters. */
export declare interface ExpressRouteCircuitConnectionsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface ExpressRouteCircuitConnectionsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type ExpressRouteCircuitConnectionsGetResponse = ExpressRouteCircuitConnection;

/** Optional parameters. */
export declare interface ExpressRouteCircuitConnectionsListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type ExpressRouteCircuitConnectionsListNextResponse = ExpressRouteCircuitConnectionListResult;

/** Optional parameters. */
export declare interface ExpressRouteCircuitConnectionsListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type ExpressRouteCircuitConnectionsListResponse = ExpressRouteCircuitConnectionListResult;

/** Response for ListExpressRouteCircuit API service call. */
export declare interface ExpressRouteCircuitListResult {
    /** A list of ExpressRouteCircuits in a resource group. */
    value?: ExpressRouteCircuit[];
    /** The URL to get the next set of results. */
    nextLink?: string;
}

/** Peering in an ExpressRouteCircuit resource. */
export declare type ExpressRouteCircuitPeering = SubResource & {
    /** The name of the resource that is unique within a resource group. This name can be used to access the resource. */
    name?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /**
     * Type of the resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /** The peering type. */
    peeringType?: ExpressRoutePeeringType;
    /** The peering state. */
    state?: ExpressRoutePeeringState;
    /** The Azure ASN. */
    azureASN?: number;
    /** The peer ASN. */
    peerASN?: number;
    /** The primary address prefix. */
    primaryPeerAddressPrefix?: string;
    /** The secondary address prefix. */
    secondaryPeerAddressPrefix?: string;
    /** The primary port. */
    primaryAzurePort?: string;
    /** The secondary port. */
    secondaryAzurePort?: string;
    /** The shared key. */
    sharedKey?: string;
    /** The VLAN ID. */
    vlanId?: number;
    /** The Microsoft peering configuration. */
    microsoftPeeringConfig?: ExpressRouteCircuitPeeringConfig;
    /** The peering stats of express route circuit. */
    stats?: ExpressRouteCircuitStats;
    /**
     * The provisioning state of the express route circuit peering resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
    /** The GatewayManager Etag. */
    gatewayManagerEtag?: string;
    /**
     * Who was the last to modify the peering.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly lastModifiedBy?: string;
    /** The reference to the RouteFilter resource. */
    routeFilter?: SubResource;
    /** The IPv6 peering configuration. */
    ipv6PeeringConfig?: Ipv6ExpressRouteCircuitPeeringConfig;
    /** The ExpressRoute connection. */
    expressRouteConnection?: ExpressRouteConnectionId;
    /** The list of circuit connections associated with Azure Private Peering for this circuit. */
    connections?: ExpressRouteCircuitConnection[];
    /**
     * The list of peered circuit connections associated with Azure Private Peering for this circuit.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly peeredConnections?: PeerExpressRouteCircuitConnection[];
};

/**
 * Defines values for ExpressRouteCircuitPeeringAdvertisedPublicPrefixState. \
 * {@link KnownExpressRouteCircuitPeeringAdvertisedPublicPrefixState} can be used interchangeably with ExpressRouteCircuitPeeringAdvertisedPublicPrefixState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **NotConfigured** \
 * **Configuring** \
 * **Configured** \
 * **ValidationNeeded**
 */
export declare type ExpressRouteCircuitPeeringAdvertisedPublicPrefixState = string;

/** Specifies the peering configuration. */
export declare interface ExpressRouteCircuitPeeringConfig {
    /** The reference to AdvertisedPublicPrefixes. */
    advertisedPublicPrefixes?: string[];
    /** The communities of bgp peering. Specified for microsoft peering. */
    advertisedCommunities?: string[];
    /**
     * The advertised public prefix state of the Peering resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly advertisedPublicPrefixesState?: ExpressRouteCircuitPeeringAdvertisedPublicPrefixState;
    /** The legacy mode of the peering. */
    legacyMode?: number;
    /** The CustomerASN of the peering. */
    customerASN?: number;
    /** The RoutingRegistryName of the configuration. */
    routingRegistryName?: string;
}

/** ExpressRoute circuit peering identifier. */
export declare interface ExpressRouteCircuitPeeringId {
    /** The ID of the ExpressRoute circuit peering. */
    id?: string;
}

/** Response for ListPeering API service call retrieves all peerings that belong to an ExpressRouteCircuit. */
export declare interface ExpressRouteCircuitPeeringListResult {
    /** The peerings in an express route circuit. */
    value?: ExpressRouteCircuitPeering[];
    /** The URL to get the next set of results. */
    nextLink?: string;
}

/** Interface representing a ExpressRouteCircuitPeerings. */
export declare interface ExpressRouteCircuitPeerings {
    /**
     * Gets all peerings in a specified express route circuit.
     * @param resourceGroupName The name of the resource group.
     * @param circuitName The name of the express route circuit.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, circuitName: string, options?: ExpressRouteCircuitPeeringsListOptionalParams): PagedAsyncIterableIterator<ExpressRouteCircuitPeering>;
    /**
     * Deletes the specified peering from the specified express route circuit.
     * @param resourceGroupName The name of the resource group.
     * @param circuitName The name of the express route circuit.
     * @param peeringName The name of the peering.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, circuitName: string, peeringName: string, options?: ExpressRouteCircuitPeeringsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the specified peering from the specified express route circuit.
     * @param resourceGroupName The name of the resource group.
     * @param circuitName The name of the express route circuit.
     * @param peeringName The name of the peering.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, circuitName: string, peeringName: string, options?: ExpressRouteCircuitPeeringsDeleteOptionalParams): Promise<void>;
    /**
     * Gets the specified peering for the express route circuit.
     * @param resourceGroupName The name of the resource group.
     * @param circuitName The name of the express route circuit.
     * @param peeringName The name of the peering.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, circuitName: string, peeringName: string, options?: ExpressRouteCircuitPeeringsGetOptionalParams): Promise<ExpressRouteCircuitPeeringsGetResponse>;
    /**
     * Creates or updates a peering in the specified express route circuits.
     * @param resourceGroupName The name of the resource group.
     * @param circuitName The name of the express route circuit.
     * @param peeringName The name of the peering.
     * @param peeringParameters Parameters supplied to the create or update express route circuit peering
     *                          operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, circuitName: string, peeringName: string, peeringParameters: ExpressRouteCircuitPeering, options?: ExpressRouteCircuitPeeringsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<ExpressRouteCircuitPeeringsCreateOrUpdateResponse>, ExpressRouteCircuitPeeringsCreateOrUpdateResponse>>;
    /**
     * Creates or updates a peering in the specified express route circuits.
     * @param resourceGroupName The name of the resource group.
     * @param circuitName The name of the express route circuit.
     * @param peeringName The name of the peering.
     * @param peeringParameters Parameters supplied to the create or update express route circuit peering
     *                          operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, circuitName: string, peeringName: string, peeringParameters: ExpressRouteCircuitPeering, options?: ExpressRouteCircuitPeeringsCreateOrUpdateOptionalParams): Promise<ExpressRouteCircuitPeeringsCreateOrUpdateResponse>;
}

/** Optional parameters. */
export declare interface ExpressRouteCircuitPeeringsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type ExpressRouteCircuitPeeringsCreateOrUpdateResponse = ExpressRouteCircuitPeering;

/** Optional parameters. */
export declare interface ExpressRouteCircuitPeeringsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface ExpressRouteCircuitPeeringsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type ExpressRouteCircuitPeeringsGetResponse = ExpressRouteCircuitPeering;

/** Optional parameters. */
export declare interface ExpressRouteCircuitPeeringsListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type ExpressRouteCircuitPeeringsListNextResponse = ExpressRouteCircuitPeeringListResult;

/** Optional parameters. */
export declare interface ExpressRouteCircuitPeeringsListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type ExpressRouteCircuitPeeringsListResponse = ExpressRouteCircuitPeeringListResult;

/**
 * Defines values for ExpressRouteCircuitPeeringState. \
 * {@link KnownExpressRouteCircuitPeeringState} can be used interchangeably with ExpressRouteCircuitPeeringState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Disabled** \
 * **Enabled**
 */
export declare type ExpressRouteCircuitPeeringState = string;

/** Reference to an express route circuit. */
export declare interface ExpressRouteCircuitReference {
    /** Corresponding Express Route Circuit Id. */
    id?: string;
}

/** The routes table associated with the ExpressRouteCircuit. */
export declare interface ExpressRouteCircuitRoutesTable {
    /** IP address of a network entity. */
    network?: string;
    /** NextHop address. */
    nextHop?: string;
    /** Local preference value as set with the set local-preference route-map configuration command. */
    locPrf?: string;
    /** Route Weight. */
    weight?: number;
    /** Autonomous system paths to the destination network. */
    path?: string;
}

/** The routes table associated with the ExpressRouteCircuit. */
export declare interface ExpressRouteCircuitRoutesTableSummary {
    /** IP address of the neighbor. */
    neighbor?: string;
    /** BGP version number spoken to the neighbor. */
    v?: number;
    /** Autonomous system number. */
    as?: number;
    /** The length of time that the BGP session has been in the Established state, or the current status if not in the Established state. */
    upDown?: string;
    /** Current state of the BGP session, and the number of prefixes that have been received from a neighbor or peer group. */
    statePfxRcd?: string;
}

/** Interface representing a ExpressRouteCircuits. */
export declare interface ExpressRouteCircuits {
    /**
     * Gets all the express route circuits in a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, options?: ExpressRouteCircuitsListOptionalParams): PagedAsyncIterableIterator<ExpressRouteCircuit>;
    /**
     * Gets all the express route circuits in a subscription.
     * @param options The options parameters.
     */
    listAll(options?: ExpressRouteCircuitsListAllOptionalParams): PagedAsyncIterableIterator<ExpressRouteCircuit>;
    /**
     * Deletes the specified express route circuit.
     * @param resourceGroupName The name of the resource group.
     * @param circuitName The name of the express route circuit.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, circuitName: string, options?: ExpressRouteCircuitsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the specified express route circuit.
     * @param resourceGroupName The name of the resource group.
     * @param circuitName The name of the express route circuit.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, circuitName: string, options?: ExpressRouteCircuitsDeleteOptionalParams): Promise<void>;
    /**
     * Gets information about the specified express route circuit.
     * @param resourceGroupName The name of the resource group.
     * @param circuitName The name of express route circuit.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, circuitName: string, options?: ExpressRouteCircuitsGetOptionalParams): Promise<ExpressRouteCircuitsGetResponse>;
    /**
     * Creates or updates an express route circuit.
     * @param resourceGroupName The name of the resource group.
     * @param circuitName The name of the circuit.
     * @param parameters Parameters supplied to the create or update express route circuit operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, circuitName: string, parameters: ExpressRouteCircuit, options?: ExpressRouteCircuitsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<ExpressRouteCircuitsCreateOrUpdateResponse>, ExpressRouteCircuitsCreateOrUpdateResponse>>;
    /**
     * Creates or updates an express route circuit.
     * @param resourceGroupName The name of the resource group.
     * @param circuitName The name of the circuit.
     * @param parameters Parameters supplied to the create or update express route circuit operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, circuitName: string, parameters: ExpressRouteCircuit, options?: ExpressRouteCircuitsCreateOrUpdateOptionalParams): Promise<ExpressRouteCircuitsCreateOrUpdateResponse>;
    /**
     * Updates an express route circuit tags.
     * @param resourceGroupName The name of the resource group.
     * @param circuitName The name of the circuit.
     * @param parameters Parameters supplied to update express route circuit tags.
     * @param options The options parameters.
     */
    updateTags(resourceGroupName: string, circuitName: string, parameters: TagsObject, options?: ExpressRouteCircuitsUpdateTagsOptionalParams): Promise<ExpressRouteCircuitsUpdateTagsResponse>;
    /**
     * Gets the currently advertised ARP table associated with the express route circuit in a resource
     * group.
     * @param resourceGroupName The name of the resource group.
     * @param circuitName The name of the express route circuit.
     * @param peeringName The name of the peering.
     * @param devicePath The path of the device.
     * @param options The options parameters.
     */
    beginListArpTable(resourceGroupName: string, circuitName: string, peeringName: string, devicePath: string, options?: ExpressRouteCircuitsListArpTableOptionalParams): Promise<PollerLike<PollOperationState<ExpressRouteCircuitsListArpTableResponse>, ExpressRouteCircuitsListArpTableResponse>>;
    /**
     * Gets the currently advertised ARP table associated with the express route circuit in a resource
     * group.
     * @param resourceGroupName The name of the resource group.
     * @param circuitName The name of the express route circuit.
     * @param peeringName The name of the peering.
     * @param devicePath The path of the device.
     * @param options The options parameters.
     */
    beginListArpTableAndWait(resourceGroupName: string, circuitName: string, peeringName: string, devicePath: string, options?: ExpressRouteCircuitsListArpTableOptionalParams): Promise<ExpressRouteCircuitsListArpTableResponse>;
    /**
     * Gets the currently advertised routes table associated with the express route circuit in a resource
     * group.
     * @param resourceGroupName The name of the resource group.
     * @param circuitName The name of the express route circuit.
     * @param peeringName The name of the peering.
     * @param devicePath The path of the device.
     * @param options The options parameters.
     */
    beginListRoutesTable(resourceGroupName: string, circuitName: string, peeringName: string, devicePath: string, options?: ExpressRouteCircuitsListRoutesTableOptionalParams): Promise<PollerLike<PollOperationState<ExpressRouteCircuitsListRoutesTableResponse>, ExpressRouteCircuitsListRoutesTableResponse>>;
    /**
     * Gets the currently advertised routes table associated with the express route circuit in a resource
     * group.
     * @param resourceGroupName The name of the resource group.
     * @param circuitName The name of the express route circuit.
     * @param peeringName The name of the peering.
     * @param devicePath The path of the device.
     * @param options The options parameters.
     */
    beginListRoutesTableAndWait(resourceGroupName: string, circuitName: string, peeringName: string, devicePath: string, options?: ExpressRouteCircuitsListRoutesTableOptionalParams): Promise<ExpressRouteCircuitsListRoutesTableResponse>;
    /**
     * Gets the currently advertised routes table summary associated with the express route circuit in a
     * resource group.
     * @param resourceGroupName The name of the resource group.
     * @param circuitName The name of the express route circuit.
     * @param peeringName The name of the peering.
     * @param devicePath The path of the device.
     * @param options The options parameters.
     */
    beginListRoutesTableSummary(resourceGroupName: string, circuitName: string, peeringName: string, devicePath: string, options?: ExpressRouteCircuitsListRoutesTableSummaryOptionalParams): Promise<PollerLike<PollOperationState<ExpressRouteCircuitsListRoutesTableSummaryResponse>, ExpressRouteCircuitsListRoutesTableSummaryResponse>>;
    /**
     * Gets the currently advertised routes table summary associated with the express route circuit in a
     * resource group.
     * @param resourceGroupName The name of the resource group.
     * @param circuitName The name of the express route circuit.
     * @param peeringName The name of the peering.
     * @param devicePath The path of the device.
     * @param options The options parameters.
     */
    beginListRoutesTableSummaryAndWait(resourceGroupName: string, circuitName: string, peeringName: string, devicePath: string, options?: ExpressRouteCircuitsListRoutesTableSummaryOptionalParams): Promise<ExpressRouteCircuitsListRoutesTableSummaryResponse>;
    /**
     * Gets all the stats from an express route circuit in a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param circuitName The name of the express route circuit.
     * @param options The options parameters.
     */
    getStats(resourceGroupName: string, circuitName: string, options?: ExpressRouteCircuitsGetStatsOptionalParams): Promise<ExpressRouteCircuitsGetStatsResponse>;
    /**
     * Gets all stats from an express route circuit in a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param circuitName The name of the express route circuit.
     * @param peeringName The name of the peering.
     * @param options The options parameters.
     */
    getPeeringStats(resourceGroupName: string, circuitName: string, peeringName: string, options?: ExpressRouteCircuitsGetPeeringStatsOptionalParams): Promise<ExpressRouteCircuitsGetPeeringStatsResponse>;
}

/** Response for ListArpTable associated with the Express Route Circuits API. */
export declare interface ExpressRouteCircuitsArpTableListResult {
    /** A list of the ARP tables. */
    value?: ExpressRouteCircuitArpTable[];
    /** The URL to get the next set of results. */
    nextLink?: string;
}

/** Optional parameters. */
export declare interface ExpressRouteCircuitsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type ExpressRouteCircuitsCreateOrUpdateResponse = ExpressRouteCircuit;

/** Optional parameters. */
export declare interface ExpressRouteCircuitsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains ServiceProviderProperties in an ExpressRouteCircuit. */
export declare interface ExpressRouteCircuitServiceProviderProperties {
    /** The serviceProviderName. */
    serviceProviderName?: string;
    /** The peering location. */
    peeringLocation?: string;
    /** The BandwidthInMbps. */
    bandwidthInMbps?: number;
}

/** Optional parameters. */
export declare interface ExpressRouteCircuitsGetOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface ExpressRouteCircuitsGetPeeringStatsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getPeeringStats operation. */
export declare type ExpressRouteCircuitsGetPeeringStatsResponse = ExpressRouteCircuitStats;

/** Contains response data for the get operation. */
export declare type ExpressRouteCircuitsGetResponse = ExpressRouteCircuit;

/** Optional parameters. */
export declare interface ExpressRouteCircuitsGetStatsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getStats operation. */
export declare type ExpressRouteCircuitsGetStatsResponse = ExpressRouteCircuitStats;

/** Contains SKU in an ExpressRouteCircuit. */
export declare interface ExpressRouteCircuitSku {
    /** The name of the SKU. */
    name?: string;
    /** The tier of the SKU. */
    tier?: ExpressRouteCircuitSkuTier;
    /** The family of the SKU. */
    family?: ExpressRouteCircuitSkuFamily;
}

/**
 * Defines values for ExpressRouteCircuitSkuFamily. \
 * {@link KnownExpressRouteCircuitSkuFamily} can be used interchangeably with ExpressRouteCircuitSkuFamily,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **UnlimitedData** \
 * **MeteredData**
 */
export declare type ExpressRouteCircuitSkuFamily = string;

/**
 * Defines values for ExpressRouteCircuitSkuTier. \
 * {@link KnownExpressRouteCircuitSkuTier} can be used interchangeably with ExpressRouteCircuitSkuTier,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Standard** \
 * **Premium** \
 * **Basic** \
 * **Local**
 */
export declare type ExpressRouteCircuitSkuTier = string;

/** Optional parameters. */
export declare interface ExpressRouteCircuitsListAllNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAllNext operation. */
export declare type ExpressRouteCircuitsListAllNextResponse = ExpressRouteCircuitListResult;

/** Optional parameters. */
export declare interface ExpressRouteCircuitsListAllOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAll operation. */
export declare type ExpressRouteCircuitsListAllResponse = ExpressRouteCircuitListResult;

/** Optional parameters. */
export declare interface ExpressRouteCircuitsListArpTableOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the listArpTable operation. */
export declare type ExpressRouteCircuitsListArpTableResponse = ExpressRouteCircuitsArpTableListResult;

/** Optional parameters. */
export declare interface ExpressRouteCircuitsListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type ExpressRouteCircuitsListNextResponse = ExpressRouteCircuitListResult;

/** Optional parameters. */
export declare interface ExpressRouteCircuitsListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type ExpressRouteCircuitsListResponse = ExpressRouteCircuitListResult;

/** Optional parameters. */
export declare interface ExpressRouteCircuitsListRoutesTableOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the listRoutesTable operation. */
export declare type ExpressRouteCircuitsListRoutesTableResponse = ExpressRouteCircuitsRoutesTableListResult;

/** Optional parameters. */
export declare interface ExpressRouteCircuitsListRoutesTableSummaryOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the listRoutesTableSummary operation. */
export declare type ExpressRouteCircuitsListRoutesTableSummaryResponse = ExpressRouteCircuitsRoutesTableSummaryListResult;

/** Response for ListRoutesTable associated with the Express Route Circuits API. */
export declare interface ExpressRouteCircuitsRoutesTableListResult {
    /** The list of routes table. */
    value?: ExpressRouteCircuitRoutesTable[];
    /** The URL to get the next set of results. */
    nextLink?: string;
}

/** Response for ListRoutesTable associated with the Express Route Circuits API. */
export declare interface ExpressRouteCircuitsRoutesTableSummaryListResult {
    /** A list of the routes table. */
    value?: ExpressRouteCircuitRoutesTableSummary[];
    /** The URL to get the next set of results. */
    nextLink?: string;
}

/** Contains stats associated with the peering. */
export declare interface ExpressRouteCircuitStats {
    /** The Primary BytesIn of the peering. */
    primarybytesIn?: number;
    /** The primary BytesOut of the peering. */
    primarybytesOut?: number;
    /** The secondary BytesIn of the peering. */
    secondarybytesIn?: number;
    /** The secondary BytesOut of the peering. */
    secondarybytesOut?: number;
}

/** Optional parameters. */
export declare interface ExpressRouteCircuitsUpdateTagsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateTags operation. */
export declare type ExpressRouteCircuitsUpdateTagsResponse = ExpressRouteCircuit;

/** ExpressRouteConnection resource. */
export declare type ExpressRouteConnection = SubResource & {
    /** The name of the resource. */
    name: string;
    /**
     * The provisioning state of the express route connection resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
    /** The ExpressRoute circuit peering. */
    expressRouteCircuitPeering?: ExpressRouteCircuitPeeringId;
    /** Authorization key to establish the connection. */
    authorizationKey?: string;
    /** The routing weight associated to the connection. */
    routingWeight?: number;
    /** Enable internet security. */
    enableInternetSecurity?: boolean;
    /** The Routing Configuration indicating the associated and propagated route tables on this connection. */
    routingConfiguration?: RoutingConfiguration;
};

/** The ID of the ExpressRouteConnection. */
export declare interface ExpressRouteConnectionId {
    /**
     * The ID of the ExpressRouteConnection.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
}

/** ExpressRouteConnection list. */
export declare interface ExpressRouteConnectionList {
    /** The list of ExpressRoute connections. */
    value?: ExpressRouteConnection[];
}

/** Interface representing a ExpressRouteConnections. */
export declare interface ExpressRouteConnections {
    /**
     * Creates a connection between an ExpressRoute gateway and an ExpressRoute circuit.
     * @param resourceGroupName The name of the resource group.
     * @param expressRouteGatewayName The name of the ExpressRoute gateway.
     * @param connectionName The name of the connection subresource.
     * @param putExpressRouteConnectionParameters Parameters required in an ExpressRouteConnection PUT
     *                                            operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, expressRouteGatewayName: string, connectionName: string, putExpressRouteConnectionParameters: ExpressRouteConnection, options?: ExpressRouteConnectionsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<ExpressRouteConnectionsCreateOrUpdateResponse>, ExpressRouteConnectionsCreateOrUpdateResponse>>;
    /**
     * Creates a connection between an ExpressRoute gateway and an ExpressRoute circuit.
     * @param resourceGroupName The name of the resource group.
     * @param expressRouteGatewayName The name of the ExpressRoute gateway.
     * @param connectionName The name of the connection subresource.
     * @param putExpressRouteConnectionParameters Parameters required in an ExpressRouteConnection PUT
     *                                            operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, expressRouteGatewayName: string, connectionName: string, putExpressRouteConnectionParameters: ExpressRouteConnection, options?: ExpressRouteConnectionsCreateOrUpdateOptionalParams): Promise<ExpressRouteConnectionsCreateOrUpdateResponse>;
    /**
     * Gets the specified ExpressRouteConnection.
     * @param resourceGroupName The name of the resource group.
     * @param expressRouteGatewayName The name of the ExpressRoute gateway.
     * @param connectionName The name of the ExpressRoute connection.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, expressRouteGatewayName: string, connectionName: string, options?: ExpressRouteConnectionsGetOptionalParams): Promise<ExpressRouteConnectionsGetResponse>;
    /**
     * Deletes a connection to a ExpressRoute circuit.
     * @param resourceGroupName The name of the resource group.
     * @param expressRouteGatewayName The name of the ExpressRoute gateway.
     * @param connectionName The name of the connection subresource.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, expressRouteGatewayName: string, connectionName: string, options?: ExpressRouteConnectionsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes a connection to a ExpressRoute circuit.
     * @param resourceGroupName The name of the resource group.
     * @param expressRouteGatewayName The name of the ExpressRoute gateway.
     * @param connectionName The name of the connection subresource.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, expressRouteGatewayName: string, connectionName: string, options?: ExpressRouteConnectionsDeleteOptionalParams): Promise<void>;
    /**
     * Lists ExpressRouteConnections.
     * @param resourceGroupName The name of the resource group.
     * @param expressRouteGatewayName The name of the ExpressRoute gateway.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, expressRouteGatewayName: string, options?: ExpressRouteConnectionsListOptionalParams): Promise<ExpressRouteConnectionsListResponse>;
}

/** Optional parameters. */
export declare interface ExpressRouteConnectionsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type ExpressRouteConnectionsCreateOrUpdateResponse = ExpressRouteConnection;

/** Optional parameters. */
export declare interface ExpressRouteConnectionsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface ExpressRouteConnectionsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type ExpressRouteConnectionsGetResponse = ExpressRouteConnection;

/** Optional parameters. */
export declare interface ExpressRouteConnectionsListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type ExpressRouteConnectionsListResponse = ExpressRouteConnectionList;

/** ExpressRouteCrossConnection resource. */
export declare type ExpressRouteCrossConnection = Resource & {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /**
     * The name of the primary port.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly primaryAzurePort?: string;
    /**
     * The name of the secondary port.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly secondaryAzurePort?: string;
    /**
     * The identifier of the circuit traffic.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly sTag?: number;
    /** The peering location of the ExpressRoute circuit. */
    peeringLocation?: string;
    /** The circuit bandwidth In Mbps. */
    bandwidthInMbps?: number;
    /** The ExpressRouteCircuit. */
    expressRouteCircuit?: ExpressRouteCircuitReference;
    /** The provisioning state of the circuit in the connectivity provider system. */
    serviceProviderProvisioningState?: ServiceProviderProvisioningState;
    /** Additional read only notes set by the connectivity provider. */
    serviceProviderNotes?: string;
    /**
     * The provisioning state of the express route cross connection resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
    /** The list of peerings. */
    peerings?: ExpressRouteCrossConnectionPeering[];
};

/** Response for ListExpressRouteCrossConnection API service call. */
export declare interface ExpressRouteCrossConnectionListResult {
    /** A list of ExpressRouteCrossConnection resources. */
    value?: ExpressRouteCrossConnection[];
    /**
     * The URL to get the next set of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Peering in an ExpressRoute Cross Connection resource. */
export declare type ExpressRouteCrossConnectionPeering = SubResource & {
    /** The name of the resource that is unique within a resource group. This name can be used to access the resource. */
    name?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /** The peering type. */
    peeringType?: ExpressRoutePeeringType;
    /** The peering state. */
    state?: ExpressRoutePeeringState;
    /**
     * The Azure ASN.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly azureASN?: number;
    /** The peer ASN. */
    peerASN?: number;
    /** The primary address prefix. */
    primaryPeerAddressPrefix?: string;
    /** The secondary address prefix. */
    secondaryPeerAddressPrefix?: string;
    /**
     * The primary port.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly primaryAzurePort?: string;
    /**
     * The secondary port.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly secondaryAzurePort?: string;
    /** The shared key. */
    sharedKey?: string;
    /** The VLAN ID. */
    vlanId?: number;
    /** The Microsoft peering configuration. */
    microsoftPeeringConfig?: ExpressRouteCircuitPeeringConfig;
    /**
     * The provisioning state of the express route cross connection peering resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
    /** The GatewayManager Etag. */
    gatewayManagerEtag?: string;
    /**
     * Who was the last to modify the peering.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly lastModifiedBy?: string;
    /** The IPv6 peering configuration. */
    ipv6PeeringConfig?: Ipv6ExpressRouteCircuitPeeringConfig;
};

/** Response for ListPeering API service call retrieves all peerings that belong to an ExpressRouteCrossConnection. */
export declare interface ExpressRouteCrossConnectionPeeringList {
    /** The peerings in an express route cross connection. */
    value?: ExpressRouteCrossConnectionPeering[];
    /**
     * The URL to get the next set of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Interface representing a ExpressRouteCrossConnectionPeerings. */
export declare interface ExpressRouteCrossConnectionPeerings {
    /**
     * Gets all peerings in a specified ExpressRouteCrossConnection.
     * @param resourceGroupName The name of the resource group.
     * @param crossConnectionName The name of the ExpressRouteCrossConnection.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, crossConnectionName: string, options?: ExpressRouteCrossConnectionPeeringsListOptionalParams): PagedAsyncIterableIterator<ExpressRouteCrossConnectionPeering>;
    /**
     * Deletes the specified peering from the ExpressRouteCrossConnection.
     * @param resourceGroupName The name of the resource group.
     * @param crossConnectionName The name of the ExpressRouteCrossConnection.
     * @param peeringName The name of the peering.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, crossConnectionName: string, peeringName: string, options?: ExpressRouteCrossConnectionPeeringsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the specified peering from the ExpressRouteCrossConnection.
     * @param resourceGroupName The name of the resource group.
     * @param crossConnectionName The name of the ExpressRouteCrossConnection.
     * @param peeringName The name of the peering.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, crossConnectionName: string, peeringName: string, options?: ExpressRouteCrossConnectionPeeringsDeleteOptionalParams): Promise<void>;
    /**
     * Gets the specified peering for the ExpressRouteCrossConnection.
     * @param resourceGroupName The name of the resource group.
     * @param crossConnectionName The name of the ExpressRouteCrossConnection.
     * @param peeringName The name of the peering.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, crossConnectionName: string, peeringName: string, options?: ExpressRouteCrossConnectionPeeringsGetOptionalParams): Promise<ExpressRouteCrossConnectionPeeringsGetResponse>;
    /**
     * Creates or updates a peering in the specified ExpressRouteCrossConnection.
     * @param resourceGroupName The name of the resource group.
     * @param crossConnectionName The name of the ExpressRouteCrossConnection.
     * @param peeringName The name of the peering.
     * @param peeringParameters Parameters supplied to the create or update ExpressRouteCrossConnection
     *                          peering operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, crossConnectionName: string, peeringName: string, peeringParameters: ExpressRouteCrossConnectionPeering, options?: ExpressRouteCrossConnectionPeeringsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<ExpressRouteCrossConnectionPeeringsCreateOrUpdateResponse>, ExpressRouteCrossConnectionPeeringsCreateOrUpdateResponse>>;
    /**
     * Creates or updates a peering in the specified ExpressRouteCrossConnection.
     * @param resourceGroupName The name of the resource group.
     * @param crossConnectionName The name of the ExpressRouteCrossConnection.
     * @param peeringName The name of the peering.
     * @param peeringParameters Parameters supplied to the create or update ExpressRouteCrossConnection
     *                          peering operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, crossConnectionName: string, peeringName: string, peeringParameters: ExpressRouteCrossConnectionPeering, options?: ExpressRouteCrossConnectionPeeringsCreateOrUpdateOptionalParams): Promise<ExpressRouteCrossConnectionPeeringsCreateOrUpdateResponse>;
}

/** Optional parameters. */
export declare interface ExpressRouteCrossConnectionPeeringsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type ExpressRouteCrossConnectionPeeringsCreateOrUpdateResponse = ExpressRouteCrossConnectionPeering;

/** Optional parameters. */
export declare interface ExpressRouteCrossConnectionPeeringsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface ExpressRouteCrossConnectionPeeringsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type ExpressRouteCrossConnectionPeeringsGetResponse = ExpressRouteCrossConnectionPeering;

/** Optional parameters. */
export declare interface ExpressRouteCrossConnectionPeeringsListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type ExpressRouteCrossConnectionPeeringsListNextResponse = ExpressRouteCrossConnectionPeeringList;

/** Optional parameters. */
export declare interface ExpressRouteCrossConnectionPeeringsListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type ExpressRouteCrossConnectionPeeringsListResponse = ExpressRouteCrossConnectionPeeringList;

/** The routes table associated with the ExpressRouteCircuit. */
export declare interface ExpressRouteCrossConnectionRoutesTableSummary {
    /** IP address of Neighbor router. */
    neighbor?: string;
    /** Autonomous system number. */
    asn?: number;
    /** The length of time that the BGP session has been in the Established state, or the current status if not in the Established state. */
    upDown?: string;
    /** Current state of the BGP session, and the number of prefixes that have been received from a neighbor or peer group. */
    stateOrPrefixesReceived?: string;
}

/** Interface representing a ExpressRouteCrossConnections. */
export declare interface ExpressRouteCrossConnections {
    /**
     * Retrieves all the ExpressRouteCrossConnections in a subscription.
     * @param options The options parameters.
     */
    list(options?: ExpressRouteCrossConnectionsListOptionalParams): PagedAsyncIterableIterator<ExpressRouteCrossConnection>;
    /**
     * Retrieves all the ExpressRouteCrossConnections in a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: ExpressRouteCrossConnectionsListByResourceGroupOptionalParams): PagedAsyncIterableIterator<ExpressRouteCrossConnection>;
    /**
     * Gets details about the specified ExpressRouteCrossConnection.
     * @param resourceGroupName The name of the resource group (peering location of the circuit).
     * @param crossConnectionName The name of the ExpressRouteCrossConnection (service key of the circuit).
     * @param options The options parameters.
     */
    get(resourceGroupName: string, crossConnectionName: string, options?: ExpressRouteCrossConnectionsGetOptionalParams): Promise<ExpressRouteCrossConnectionsGetResponse>;
    /**
     * Update the specified ExpressRouteCrossConnection.
     * @param resourceGroupName The name of the resource group.
     * @param crossConnectionName The name of the ExpressRouteCrossConnection.
     * @param parameters Parameters supplied to the update express route crossConnection operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, crossConnectionName: string, parameters: ExpressRouteCrossConnection, options?: ExpressRouteCrossConnectionsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<ExpressRouteCrossConnectionsCreateOrUpdateResponse>, ExpressRouteCrossConnectionsCreateOrUpdateResponse>>;
    /**
     * Update the specified ExpressRouteCrossConnection.
     * @param resourceGroupName The name of the resource group.
     * @param crossConnectionName The name of the ExpressRouteCrossConnection.
     * @param parameters Parameters supplied to the update express route crossConnection operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, crossConnectionName: string, parameters: ExpressRouteCrossConnection, options?: ExpressRouteCrossConnectionsCreateOrUpdateOptionalParams): Promise<ExpressRouteCrossConnectionsCreateOrUpdateResponse>;
    /**
     * Updates an express route cross connection tags.
     * @param resourceGroupName The name of the resource group.
     * @param crossConnectionName The name of the cross connection.
     * @param crossConnectionParameters Parameters supplied to update express route cross connection tags.
     * @param options The options parameters.
     */
    updateTags(resourceGroupName: string, crossConnectionName: string, crossConnectionParameters: TagsObject, options?: ExpressRouteCrossConnectionsUpdateTagsOptionalParams): Promise<ExpressRouteCrossConnectionsUpdateTagsResponse>;
    /**
     * Gets the currently advertised ARP table associated with the express route cross connection in a
     * resource group.
     * @param resourceGroupName The name of the resource group.
     * @param crossConnectionName The name of the ExpressRouteCrossConnection.
     * @param peeringName The name of the peering.
     * @param devicePath The path of the device.
     * @param options The options parameters.
     */
    beginListArpTable(resourceGroupName: string, crossConnectionName: string, peeringName: string, devicePath: string, options?: ExpressRouteCrossConnectionsListArpTableOptionalParams): Promise<PollerLike<PollOperationState<ExpressRouteCrossConnectionsListArpTableResponse>, ExpressRouteCrossConnectionsListArpTableResponse>>;
    /**
     * Gets the currently advertised ARP table associated with the express route cross connection in a
     * resource group.
     * @param resourceGroupName The name of the resource group.
     * @param crossConnectionName The name of the ExpressRouteCrossConnection.
     * @param peeringName The name of the peering.
     * @param devicePath The path of the device.
     * @param options The options parameters.
     */
    beginListArpTableAndWait(resourceGroupName: string, crossConnectionName: string, peeringName: string, devicePath: string, options?: ExpressRouteCrossConnectionsListArpTableOptionalParams): Promise<ExpressRouteCrossConnectionsListArpTableResponse>;
    /**
     * Gets the route table summary associated with the express route cross connection in a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param crossConnectionName The name of the ExpressRouteCrossConnection.
     * @param peeringName The name of the peering.
     * @param devicePath The path of the device.
     * @param options The options parameters.
     */
    beginListRoutesTableSummary(resourceGroupName: string, crossConnectionName: string, peeringName: string, devicePath: string, options?: ExpressRouteCrossConnectionsListRoutesTableSummaryOptionalParams): Promise<PollerLike<PollOperationState<ExpressRouteCrossConnectionsListRoutesTableSummaryResponse>, ExpressRouteCrossConnectionsListRoutesTableSummaryResponse>>;
    /**
     * Gets the route table summary associated with the express route cross connection in a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param crossConnectionName The name of the ExpressRouteCrossConnection.
     * @param peeringName The name of the peering.
     * @param devicePath The path of the device.
     * @param options The options parameters.
     */
    beginListRoutesTableSummaryAndWait(resourceGroupName: string, crossConnectionName: string, peeringName: string, devicePath: string, options?: ExpressRouteCrossConnectionsListRoutesTableSummaryOptionalParams): Promise<ExpressRouteCrossConnectionsListRoutesTableSummaryResponse>;
    /**
     * Gets the currently advertised routes table associated with the express route cross connection in a
     * resource group.
     * @param resourceGroupName The name of the resource group.
     * @param crossConnectionName The name of the ExpressRouteCrossConnection.
     * @param peeringName The name of the peering.
     * @param devicePath The path of the device.
     * @param options The options parameters.
     */
    beginListRoutesTable(resourceGroupName: string, crossConnectionName: string, peeringName: string, devicePath: string, options?: ExpressRouteCrossConnectionsListRoutesTableOptionalParams): Promise<PollerLike<PollOperationState<ExpressRouteCrossConnectionsListRoutesTableResponse>, ExpressRouteCrossConnectionsListRoutesTableResponse>>;
    /**
     * Gets the currently advertised routes table associated with the express route cross connection in a
     * resource group.
     * @param resourceGroupName The name of the resource group.
     * @param crossConnectionName The name of the ExpressRouteCrossConnection.
     * @param peeringName The name of the peering.
     * @param devicePath The path of the device.
     * @param options The options parameters.
     */
    beginListRoutesTableAndWait(resourceGroupName: string, crossConnectionName: string, peeringName: string, devicePath: string, options?: ExpressRouteCrossConnectionsListRoutesTableOptionalParams): Promise<ExpressRouteCrossConnectionsListRoutesTableResponse>;
}

/** Optional parameters. */
export declare interface ExpressRouteCrossConnectionsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type ExpressRouteCrossConnectionsCreateOrUpdateResponse = ExpressRouteCrossConnection;

/** Optional parameters. */
export declare interface ExpressRouteCrossConnectionsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type ExpressRouteCrossConnectionsGetResponse = ExpressRouteCrossConnection;

/** Optional parameters. */
export declare interface ExpressRouteCrossConnectionsListArpTableOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the listArpTable operation. */
export declare type ExpressRouteCrossConnectionsListArpTableResponse = ExpressRouteCircuitsArpTableListResult;

/** Optional parameters. */
export declare interface ExpressRouteCrossConnectionsListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNext operation. */
export declare type ExpressRouteCrossConnectionsListByResourceGroupNextResponse = ExpressRouteCrossConnectionListResult;

/** Optional parameters. */
export declare interface ExpressRouteCrossConnectionsListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroup operation. */
export declare type ExpressRouteCrossConnectionsListByResourceGroupResponse = ExpressRouteCrossConnectionListResult;

/** Optional parameters. */
export declare interface ExpressRouteCrossConnectionsListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type ExpressRouteCrossConnectionsListNextResponse = ExpressRouteCrossConnectionListResult;

/** Optional parameters. */
export declare interface ExpressRouteCrossConnectionsListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type ExpressRouteCrossConnectionsListResponse = ExpressRouteCrossConnectionListResult;

/** Optional parameters. */
export declare interface ExpressRouteCrossConnectionsListRoutesTableOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the listRoutesTable operation. */
export declare type ExpressRouteCrossConnectionsListRoutesTableResponse = ExpressRouteCircuitsRoutesTableListResult;

/** Optional parameters. */
export declare interface ExpressRouteCrossConnectionsListRoutesTableSummaryOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the listRoutesTableSummary operation. */
export declare type ExpressRouteCrossConnectionsListRoutesTableSummaryResponse = ExpressRouteCrossConnectionsRoutesTableSummaryListResult;

/** Response for ListRoutesTable associated with the Express Route Cross Connections. */
export declare interface ExpressRouteCrossConnectionsRoutesTableSummaryListResult {
    /** A list of the routes table. */
    value?: ExpressRouteCrossConnectionRoutesTableSummary[];
    /**
     * The URL to get the next set of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Optional parameters. */
export declare interface ExpressRouteCrossConnectionsUpdateTagsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateTags operation. */
export declare type ExpressRouteCrossConnectionsUpdateTagsResponse = ExpressRouteCrossConnection;

/** ExpressRoute gateway resource. */
export declare type ExpressRouteGateway = Resource & {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /** Configuration for auto scaling. */
    autoScaleConfiguration?: ExpressRouteGatewayPropertiesAutoScaleConfiguration;
    /**
     * List of ExpressRoute connections to the ExpressRoute gateway.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly expressRouteConnections?: ExpressRouteConnection[];
    /**
     * The provisioning state of the express route gateway resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
    /** The Virtual Hub where the ExpressRoute gateway is or will be deployed. */
    virtualHub?: VirtualHubId;
};

/** List of ExpressRoute gateways. */
export declare interface ExpressRouteGatewayList {
    /** List of ExpressRoute gateways. */
    value?: ExpressRouteGateway[];
}

/** Configuration for auto scaling. */
export declare interface ExpressRouteGatewayPropertiesAutoScaleConfiguration {
    /** Minimum and maximum number of scale units to deploy. */
    bounds?: ExpressRouteGatewayPropertiesAutoScaleConfigurationBounds;
}

/** Minimum and maximum number of scale units to deploy. */
export declare interface ExpressRouteGatewayPropertiesAutoScaleConfigurationBounds {
    /** Minimum number of scale units deployed for ExpressRoute gateway. */
    min?: number;
    /** Maximum number of scale units deployed for ExpressRoute gateway. */
    max?: number;
}

/** Interface representing a ExpressRouteGateways. */
export declare interface ExpressRouteGateways {
    /**
     * Lists ExpressRoute gateways under a given subscription.
     * @param options The options parameters.
     */
    listBySubscription(options?: ExpressRouteGatewaysListBySubscriptionOptionalParams): Promise<ExpressRouteGatewaysListBySubscriptionResponse>;
    /**
     * Lists ExpressRoute gateways in a given resource group.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: ExpressRouteGatewaysListByResourceGroupOptionalParams): Promise<ExpressRouteGatewaysListByResourceGroupResponse>;
    /**
     * Creates or updates a ExpressRoute gateway in a specified resource group.
     * @param resourceGroupName The name of the resource group.
     * @param expressRouteGatewayName The name of the ExpressRoute gateway.
     * @param putExpressRouteGatewayParameters Parameters required in an ExpressRoute gateway PUT
     *                                         operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, expressRouteGatewayName: string, putExpressRouteGatewayParameters: ExpressRouteGateway, options?: ExpressRouteGatewaysCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<ExpressRouteGatewaysCreateOrUpdateResponse>, ExpressRouteGatewaysCreateOrUpdateResponse>>;
    /**
     * Creates or updates a ExpressRoute gateway in a specified resource group.
     * @param resourceGroupName The name of the resource group.
     * @param expressRouteGatewayName The name of the ExpressRoute gateway.
     * @param putExpressRouteGatewayParameters Parameters required in an ExpressRoute gateway PUT
     *                                         operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, expressRouteGatewayName: string, putExpressRouteGatewayParameters: ExpressRouteGateway, options?: ExpressRouteGatewaysCreateOrUpdateOptionalParams): Promise<ExpressRouteGatewaysCreateOrUpdateResponse>;
    /**
     * Fetches the details of a ExpressRoute gateway in a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param expressRouteGatewayName The name of the ExpressRoute gateway.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, expressRouteGatewayName: string, options?: ExpressRouteGatewaysGetOptionalParams): Promise<ExpressRouteGatewaysGetResponse>;
    /**
     * Deletes the specified ExpressRoute gateway in a resource group. An ExpressRoute gateway resource can
     * only be deleted when there are no connection subresources.
     * @param resourceGroupName The name of the resource group.
     * @param expressRouteGatewayName The name of the ExpressRoute gateway.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, expressRouteGatewayName: string, options?: ExpressRouteGatewaysDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the specified ExpressRoute gateway in a resource group. An ExpressRoute gateway resource can
     * only be deleted when there are no connection subresources.
     * @param resourceGroupName The name of the resource group.
     * @param expressRouteGatewayName The name of the ExpressRoute gateway.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, expressRouteGatewayName: string, options?: ExpressRouteGatewaysDeleteOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface ExpressRouteGatewaysCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type ExpressRouteGatewaysCreateOrUpdateResponse = ExpressRouteGateway;

/** Optional parameters. */
export declare interface ExpressRouteGatewaysDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface ExpressRouteGatewaysGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type ExpressRouteGatewaysGetResponse = ExpressRouteGateway;

/** Optional parameters. */
export declare interface ExpressRouteGatewaysListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroup operation. */
export declare type ExpressRouteGatewaysListByResourceGroupResponse = ExpressRouteGatewayList;

/** Optional parameters. */
export declare interface ExpressRouteGatewaysListBySubscriptionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listBySubscription operation. */
export declare type ExpressRouteGatewaysListBySubscriptionResponse = ExpressRouteGatewayList;

/** ExpressRouteLink child resource definition. */
export declare type ExpressRouteLink = SubResource & {
    /** Name of child port resource that is unique among child port resources of the parent. */
    name?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /**
     * Name of Azure router associated with physical port.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly routerName?: string;
    /**
     * Name of Azure router interface.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly interfaceName?: string;
    /**
     * Mapping between physical port to patch panel port.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly patchPanelId?: string;
    /**
     * Mapping of physical patch panel to rack.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly rackId?: string;
    /**
     * Physical fiber port type.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly connectorType?: ExpressRouteLinkConnectorType;
    /** Administrative state of the physical port. */
    adminState?: ExpressRouteLinkAdminState;
    /**
     * The provisioning state of the express route link resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
    /** MacSec configuration. */
    macSecConfig?: ExpressRouteLinkMacSecConfig;
};

/**
 * Defines values for ExpressRouteLinkAdminState. \
 * {@link KnownExpressRouteLinkAdminState} can be used interchangeably with ExpressRouteLinkAdminState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Enabled** \
 * **Disabled**
 */
export declare type ExpressRouteLinkAdminState = string;

/**
 * Defines values for ExpressRouteLinkConnectorType. \
 * {@link KnownExpressRouteLinkConnectorType} can be used interchangeably with ExpressRouteLinkConnectorType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **LC** \
 * **SC**
 */
export declare type ExpressRouteLinkConnectorType = string;

/** Response for ListExpressRouteLinks API service call. */
export declare interface ExpressRouteLinkListResult {
    /** The list of ExpressRouteLink sub-resources. */
    value?: ExpressRouteLink[];
    /** The URL to get the next set of results. */
    nextLink?: string;
}

/**
 * Defines values for ExpressRouteLinkMacSecCipher. \
 * {@link KnownExpressRouteLinkMacSecCipher} can be used interchangeably with ExpressRouteLinkMacSecCipher,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **gcm-aes-128** \
 * **gcm-aes-256**
 */
export declare type ExpressRouteLinkMacSecCipher = string;

/** ExpressRouteLink Mac Security Configuration. */
export declare interface ExpressRouteLinkMacSecConfig {
    /** Keyvault Secret Identifier URL containing Mac security CKN key. */
    cknSecretIdentifier?: string;
    /** Keyvault Secret Identifier URL containing Mac security CAK key. */
    cakSecretIdentifier?: string;
    /** Mac security cipher. */
    cipher?: ExpressRouteLinkMacSecCipher;
}

/** Interface representing a ExpressRouteLinks. */
export declare interface ExpressRouteLinks {
    /**
     * Retrieve the ExpressRouteLink sub-resources of the specified ExpressRoutePort resource.
     * @param resourceGroupName The name of the resource group.
     * @param expressRoutePortName The name of the ExpressRoutePort resource.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, expressRoutePortName: string, options?: ExpressRouteLinksListOptionalParams): PagedAsyncIterableIterator<ExpressRouteLink>;
    /**
     * Retrieves the specified ExpressRouteLink resource.
     * @param resourceGroupName The name of the resource group.
     * @param expressRoutePortName The name of the ExpressRoutePort resource.
     * @param linkName The name of the ExpressRouteLink resource.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, expressRoutePortName: string, linkName: string, options?: ExpressRouteLinksGetOptionalParams): Promise<ExpressRouteLinksGetResponse>;
}

/** Optional parameters. */
export declare interface ExpressRouteLinksGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type ExpressRouteLinksGetResponse = ExpressRouteLink;

/** Optional parameters. */
export declare interface ExpressRouteLinksListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type ExpressRouteLinksListNextResponse = ExpressRouteLinkListResult;

/** Optional parameters. */
export declare interface ExpressRouteLinksListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type ExpressRouteLinksListResponse = ExpressRouteLinkListResult;

/**
 * Defines values for ExpressRoutePeeringState. \
 * {@link KnownExpressRoutePeeringState} can be used interchangeably with ExpressRoutePeeringState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Disabled** \
 * **Enabled**
 */
export declare type ExpressRoutePeeringState = string;

/**
 * Defines values for ExpressRoutePeeringType. \
 * {@link KnownExpressRoutePeeringType} can be used interchangeably with ExpressRoutePeeringType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **AzurePublicPeering** \
 * **AzurePrivatePeering** \
 * **MicrosoftPeering**
 */
export declare type ExpressRoutePeeringType = string;

/** ExpressRoutePort resource definition. */
export declare type ExpressRoutePort = Resource & {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /** The identity of ExpressRoutePort, if configured. */
    identity?: ManagedServiceIdentity;
    /** The name of the peering location that the ExpressRoutePort is mapped to physically. */
    peeringLocation?: string;
    /** Bandwidth of procured ports in Gbps. */
    bandwidthInGbps?: number;
    /**
     * Aggregate Gbps of associated circuit bandwidths.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisionedBandwidthInGbps?: number;
    /**
     * Maximum transmission unit of the physical port pair(s).
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly mtu?: string;
    /** Encapsulation method on physical ports. */
    encapsulation?: ExpressRoutePortsEncapsulation;
    /**
     * Ether type of the physical port.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etherType?: string;
    /**
     * Date of the physical port allocation to be used in Letter of Authorization.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly allocationDate?: string;
    /** The set of physical links of the ExpressRoutePort resource. */
    links?: ExpressRouteLink[];
    /**
     * Reference the ExpressRoute circuit(s) that are provisioned on this ExpressRoutePort resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly circuits?: SubResource[];
    /**
     * The provisioning state of the express route port resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
    /**
     * The resource GUID property of the express route port resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly resourceGuid?: string;
};

/** Response for ListExpressRoutePorts API service call. */
export declare interface ExpressRoutePortListResult {
    /** A list of ExpressRoutePort resources. */
    value?: ExpressRoutePort[];
    /** The URL to get the next set of results. */
    nextLink?: string;
}

/** Interface representing a ExpressRoutePorts. */
export declare interface ExpressRoutePorts {
    /**
     * List all the ExpressRoutePort resources in the specified resource group.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: ExpressRoutePortsListByResourceGroupOptionalParams): PagedAsyncIterableIterator<ExpressRoutePort>;
    /**
     * List all the ExpressRoutePort resources in the specified subscription.
     * @param options The options parameters.
     */
    list(options?: ExpressRoutePortsListOptionalParams): PagedAsyncIterableIterator<ExpressRoutePort>;
    /**
     * Deletes the specified ExpressRoutePort resource.
     * @param resourceGroupName The name of the resource group.
     * @param expressRoutePortName The name of the ExpressRoutePort resource.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, expressRoutePortName: string, options?: ExpressRoutePortsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the specified ExpressRoutePort resource.
     * @param resourceGroupName The name of the resource group.
     * @param expressRoutePortName The name of the ExpressRoutePort resource.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, expressRoutePortName: string, options?: ExpressRoutePortsDeleteOptionalParams): Promise<void>;
    /**
     * Retrieves the requested ExpressRoutePort resource.
     * @param resourceGroupName The name of the resource group.
     * @param expressRoutePortName The name of ExpressRoutePort.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, expressRoutePortName: string, options?: ExpressRoutePortsGetOptionalParams): Promise<ExpressRoutePortsGetResponse>;
    /**
     * Creates or updates the specified ExpressRoutePort resource.
     * @param resourceGroupName The name of the resource group.
     * @param expressRoutePortName The name of the ExpressRoutePort resource.
     * @param parameters Parameters supplied to the create ExpressRoutePort operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, expressRoutePortName: string, parameters: ExpressRoutePort, options?: ExpressRoutePortsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<ExpressRoutePortsCreateOrUpdateResponse>, ExpressRoutePortsCreateOrUpdateResponse>>;
    /**
     * Creates or updates the specified ExpressRoutePort resource.
     * @param resourceGroupName The name of the resource group.
     * @param expressRoutePortName The name of the ExpressRoutePort resource.
     * @param parameters Parameters supplied to the create ExpressRoutePort operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, expressRoutePortName: string, parameters: ExpressRoutePort, options?: ExpressRoutePortsCreateOrUpdateOptionalParams): Promise<ExpressRoutePortsCreateOrUpdateResponse>;
    /**
     * Update ExpressRoutePort tags.
     * @param resourceGroupName The name of the resource group.
     * @param expressRoutePortName The name of the ExpressRoutePort resource.
     * @param parameters Parameters supplied to update ExpressRoutePort resource tags.
     * @param options The options parameters.
     */
    updateTags(resourceGroupName: string, expressRoutePortName: string, parameters: TagsObject, options?: ExpressRoutePortsUpdateTagsOptionalParams): Promise<ExpressRoutePortsUpdateTagsResponse>;
}

/** Optional parameters. */
export declare interface ExpressRoutePortsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type ExpressRoutePortsCreateOrUpdateResponse = ExpressRoutePort;

/** Optional parameters. */
export declare interface ExpressRoutePortsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/**
 * Defines values for ExpressRoutePortsEncapsulation. \
 * {@link KnownExpressRoutePortsEncapsulation} can be used interchangeably with ExpressRoutePortsEncapsulation,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Dot1Q** \
 * **QinQ**
 */
export declare type ExpressRoutePortsEncapsulation = string;

/** Optional parameters. */
export declare interface ExpressRoutePortsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type ExpressRoutePortsGetResponse = ExpressRoutePort;

/** Optional parameters. */
export declare interface ExpressRoutePortsListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNext operation. */
export declare type ExpressRoutePortsListByResourceGroupNextResponse = ExpressRoutePortListResult;

/** Optional parameters. */
export declare interface ExpressRoutePortsListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroup operation. */
export declare type ExpressRoutePortsListByResourceGroupResponse = ExpressRoutePortListResult;

/** Optional parameters. */
export declare interface ExpressRoutePortsListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type ExpressRoutePortsListNextResponse = ExpressRoutePortListResult;

/** Optional parameters. */
export declare interface ExpressRoutePortsListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type ExpressRoutePortsListResponse = ExpressRoutePortListResult;

/** Definition of the ExpressRoutePorts peering location resource. */
export declare type ExpressRoutePortsLocation = Resource & {
    /**
     * Address of peering location.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly address?: string;
    /**
     * Contact details of peering locations.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly contact?: string;
    /** The inventory of available ExpressRoutePort bandwidths. */
    availableBandwidths?: ExpressRoutePortsLocationBandwidths[];
    /**
     * The provisioning state of the express route port location resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** Real-time inventory of available ExpressRoute port bandwidths. */
export declare interface ExpressRoutePortsLocationBandwidths {
    /**
     * Bandwidth descriptive name.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly offerName?: string;
    /**
     * Bandwidth value in Gbps.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly valueInGbps?: number;
}

/** Response for ListExpressRoutePortsLocations API service call. */
export declare interface ExpressRoutePortsLocationListResult {
    /** The list of all ExpressRoutePort peering locations. */
    value?: ExpressRoutePortsLocation[];
    /** The URL to get the next set of results. */
    nextLink?: string;
}

/** Interface representing a ExpressRoutePortsLocations. */
export declare interface ExpressRoutePortsLocations {
    /**
     * Retrieves all ExpressRoutePort peering locations. Does not return available bandwidths for each
     * location. Available bandwidths can only be obtained when retrieving a specific peering location.
     * @param options The options parameters.
     */
    list(options?: ExpressRoutePortsLocationsListOptionalParams): PagedAsyncIterableIterator<ExpressRoutePortsLocation>;
    /**
     * Retrieves a single ExpressRoutePort peering location, including the list of available bandwidths
     * available at said peering location.
     * @param locationName Name of the requested ExpressRoutePort peering location.
     * @param options The options parameters.
     */
    get(locationName: string, options?: ExpressRoutePortsLocationsGetOptionalParams): Promise<ExpressRoutePortsLocationsGetResponse>;
}

/** Optional parameters. */
export declare interface ExpressRoutePortsLocationsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type ExpressRoutePortsLocationsGetResponse = ExpressRoutePortsLocation;

/** Optional parameters. */
export declare interface ExpressRoutePortsLocationsListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type ExpressRoutePortsLocationsListNextResponse = ExpressRoutePortsLocationListResult;

/** Optional parameters. */
export declare interface ExpressRoutePortsLocationsListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type ExpressRoutePortsLocationsListResponse = ExpressRoutePortsLocationListResult;

/** Optional parameters. */
export declare interface ExpressRoutePortsUpdateTagsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateTags operation. */
export declare type ExpressRoutePortsUpdateTagsResponse = ExpressRoutePort;

/** A ExpressRouteResourceProvider object. */
export declare type ExpressRouteServiceProvider = Resource & {
    /** A list of peering locations. */
    peeringLocations?: string[];
    /** A list of bandwidths offered. */
    bandwidthsOffered?: ExpressRouteServiceProviderBandwidthsOffered[];
    /**
     * The provisioning state of the express route service provider resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** Contains bandwidths offered in ExpressRouteServiceProvider resources. */
export declare interface ExpressRouteServiceProviderBandwidthsOffered {
    /** The OfferName. */
    offerName?: string;
    /** The ValueInMbps. */
    valueInMbps?: number;
}

/** Response for the ListExpressRouteServiceProvider API service call. */
export declare interface ExpressRouteServiceProviderListResult {
    /** A list of ExpressRouteResourceProvider resources. */
    value?: ExpressRouteServiceProvider[];
    /** The URL to get the next set of results. */
    nextLink?: string;
}

/** Interface representing a ExpressRouteServiceProviders. */
export declare interface ExpressRouteServiceProviders {
    /**
     * Gets all the available express route service providers.
     * @param options The options parameters.
     */
    list(options?: ExpressRouteServiceProvidersListOptionalParams): PagedAsyncIterableIterator<ExpressRouteServiceProvider>;
}

/** Optional parameters. */
export declare interface ExpressRouteServiceProvidersListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type ExpressRouteServiceProvidersListNextResponse = ExpressRouteServiceProviderListResult;

/** Optional parameters. */
export declare interface ExpressRouteServiceProvidersListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type ExpressRouteServiceProvidersListResponse = ExpressRouteServiceProviderListResult;

/** Interface representing a FirewallPolicies. */
export declare interface FirewallPolicies {
    /**
     * Lists all Firewall Policies in a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, options?: FirewallPoliciesListOptionalParams): PagedAsyncIterableIterator<FirewallPolicy>;
    /**
     * Gets all the Firewall Policies in a subscription.
     * @param options The options parameters.
     */
    listAll(options?: FirewallPoliciesListAllOptionalParams): PagedAsyncIterableIterator<FirewallPolicy>;
    /**
     * Deletes the specified Firewall Policy.
     * @param resourceGroupName The name of the resource group.
     * @param firewallPolicyName The name of the Firewall Policy.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, firewallPolicyName: string, options?: FirewallPoliciesDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the specified Firewall Policy.
     * @param resourceGroupName The name of the resource group.
     * @param firewallPolicyName The name of the Firewall Policy.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, firewallPolicyName: string, options?: FirewallPoliciesDeleteOptionalParams): Promise<void>;
    /**
     * Gets the specified Firewall Policy.
     * @param resourceGroupName The name of the resource group.
     * @param firewallPolicyName The name of the Firewall Policy.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, firewallPolicyName: string, options?: FirewallPoliciesGetOptionalParams): Promise<FirewallPoliciesGetResponse>;
    /**
     * Creates or updates the specified Firewall Policy.
     * @param resourceGroupName The name of the resource group.
     * @param firewallPolicyName The name of the Firewall Policy.
     * @param parameters Parameters supplied to the create or update Firewall Policy operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, firewallPolicyName: string, parameters: FirewallPolicy, options?: FirewallPoliciesCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<FirewallPoliciesCreateOrUpdateResponse>, FirewallPoliciesCreateOrUpdateResponse>>;
    /**
     * Creates or updates the specified Firewall Policy.
     * @param resourceGroupName The name of the resource group.
     * @param firewallPolicyName The name of the Firewall Policy.
     * @param parameters Parameters supplied to the create or update Firewall Policy operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, firewallPolicyName: string, parameters: FirewallPolicy, options?: FirewallPoliciesCreateOrUpdateOptionalParams): Promise<FirewallPoliciesCreateOrUpdateResponse>;
}

/** Optional parameters. */
export declare interface FirewallPoliciesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type FirewallPoliciesCreateOrUpdateResponse = FirewallPolicy;

/** Optional parameters. */
export declare interface FirewallPoliciesDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface FirewallPoliciesGetOptionalParams extends coreClient.OperationOptions {
    /** Expands referenced resources. */
    expand?: string;
}

/** Contains response data for the get operation. */
export declare type FirewallPoliciesGetResponse = FirewallPolicy;

/** Optional parameters. */
export declare interface FirewallPoliciesListAllNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAllNext operation. */
export declare type FirewallPoliciesListAllNextResponse = FirewallPolicyListResult;

/** Optional parameters. */
export declare interface FirewallPoliciesListAllOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAll operation. */
export declare type FirewallPoliciesListAllResponse = FirewallPolicyListResult;

/** Optional parameters. */
export declare interface FirewallPoliciesListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type FirewallPoliciesListNextResponse = FirewallPolicyListResult;

/** Optional parameters. */
export declare interface FirewallPoliciesListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type FirewallPoliciesListResponse = FirewallPolicyListResult;

/** FirewallPolicy Resource. */
export declare type FirewallPolicy = Resource & {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /** The identity of the firewall policy. */
    identity?: ManagedServiceIdentity;
    /**
     * List of references to FirewallPolicyRuleGroups.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly ruleGroups?: SubResource[];
    /**
     * The provisioning state of the firewall policy resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
    /** The parent firewall policy from which rules are inherited. */
    basePolicy?: SubResource;
    /**
     * List of references to Azure Firewalls that this Firewall Policy is associated with.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly firewalls?: SubResource[];
    /**
     * List of references to Child Firewall Policies.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly childPolicies?: SubResource[];
    /** The operation mode for Threat Intelligence. */
    threatIntelMode?: AzureFirewallThreatIntelMode;
    /** ThreatIntel Whitelist for Firewall Policy. */
    threatIntelWhitelist?: FirewallPolicyThreatIntelWhitelist;
    /** The operation mode for Intrusion system. */
    intrusionSystemMode?: FirewallPolicyIntrusionSystemMode;
    /** TLS Configuration definition. */
    transportSecurity?: FirewallPolicyTransportSecurity;
};

/** Trusted Root certificates properties for tls. */
export declare interface FirewallPolicyCertificateAuthority {
    /** Name of the CA certificate. */
    name?: string;
    /** Secret Id of (base-64 encoded unencrypted pfx) 'Secret' or 'Certificate' object stored in KeyVault. */
    keyVaultSecretId?: string;
}

/** Firewall Policy Filter Rule. */
export declare type FirewallPolicyFilterRule = FirewallPolicyRule & {
    /** Polymorphic discriminator, which specifies the different types this object can be */
    ruleType: "FirewallPolicyFilterRule";
    /** The action type of a Filter rule. */
    action?: FirewallPolicyFilterRuleAction;
    /** Collection of rule conditions used by a rule. */
    ruleConditions?: FirewallPolicyRuleConditionUnion[];
};

/** Properties of the FirewallPolicyFilterRuleAction. */
export declare interface FirewallPolicyFilterRuleAction {
    /** The type of action. */
    type?: FirewallPolicyFilterRuleActionType;
}

/**
 * Defines values for FirewallPolicyFilterRuleActionType. \
 * {@link KnownFirewallPolicyFilterRuleActionType} can be used interchangeably with FirewallPolicyFilterRuleActionType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Allow** \
 * **Deny**
 */
export declare type FirewallPolicyFilterRuleActionType = string;

/**
 * Defines values for FirewallPolicyIntrusionSystemMode. \
 * {@link KnownFirewallPolicyIntrusionSystemMode} can be used interchangeably with FirewallPolicyIntrusionSystemMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Enabled** \
 * **Disabled**
 */
export declare type FirewallPolicyIntrusionSystemMode = string;

/** Response for ListFirewallPolicies API service call. */
export declare interface FirewallPolicyListResult {
    /** List of Firewall Policies in a resource group. */
    value?: FirewallPolicy[];
    /** URL to get the next set of results. */
    nextLink?: string;
}

/** Firewall Policy NAT Rule. */
export declare type FirewallPolicyNatRule = FirewallPolicyRule & {
    /** Polymorphic discriminator, which specifies the different types this object can be */
    ruleType: "FirewallPolicyNatRule";
    /** The action type of a Nat rule. */
    action?: FirewallPolicyNatRuleAction;
    /** The translated address for this NAT rule. */
    translatedAddress?: string;
    /** The translated port for this NAT rule. */
    translatedPort?: string;
    /** The match conditions for incoming traffic. */
    ruleCondition?: FirewallPolicyRuleConditionUnion;
};

/** Properties of the FirewallPolicyNatRuleAction. */
export declare interface FirewallPolicyNatRuleAction {
    /** The type of action. */
    type?: FirewallPolicyNatRuleActionType;
}

/**
 * Defines values for FirewallPolicyNatRuleActionType. \
 * {@link KnownFirewallPolicyNatRuleActionType} can be used interchangeably with FirewallPolicyNatRuleActionType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **DNAT**
 */
export declare type FirewallPolicyNatRuleActionType = string;

/** Properties of the rule. */
export declare interface FirewallPolicyRule {
    /** Polymorphic discriminator, which specifies the different types this object can be */
    ruleType: "FirewallPolicyNatRule" | "FirewallPolicyFilterRule";
    /** The name of the rule. */
    name?: string;
    /** Priority of the Firewall Policy Rule resource. */
    priority?: number;
}

/** Properties of a rule. */
export declare interface FirewallPolicyRuleCondition {
    /** Polymorphic discriminator, which specifies the different types this object can be */
    ruleConditionType: "ApplicationRuleCondition" | "NatRuleCondition" | "NetworkRuleCondition";
    /** Name of the rule condition. */
    name?: string;
    /** Description of the rule condition. */
    description?: string;
}

/** Properties of the application rule protocol. */
export declare interface FirewallPolicyRuleConditionApplicationProtocol {
    /** Protocol type. */
    protocolType?: FirewallPolicyRuleConditionApplicationProtocolType;
    /** Port number for the protocol, cannot be greater than 64000. */
    port?: number;
}

/**
 * Defines values for FirewallPolicyRuleConditionApplicationProtocolType. \
 * {@link KnownFirewallPolicyRuleConditionApplicationProtocolType} can be used interchangeably with FirewallPolicyRuleConditionApplicationProtocolType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Http** \
 * **Https**
 */
export declare type FirewallPolicyRuleConditionApplicationProtocolType = string;

/**
 * Defines values for FirewallPolicyRuleConditionNetworkProtocol. \
 * {@link KnownFirewallPolicyRuleConditionNetworkProtocol} can be used interchangeably with FirewallPolicyRuleConditionNetworkProtocol,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **TCP** \
 * **UDP** \
 * **Any** \
 * **ICMP**
 */
export declare type FirewallPolicyRuleConditionNetworkProtocol = string;

/**
 * Defines values for FirewallPolicyRuleConditionType. \
 * {@link KnownFirewallPolicyRuleConditionType} can be used interchangeably with FirewallPolicyRuleConditionType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **ApplicationRuleCondition** \
 * **NetworkRuleCondition** \
 * **NatRuleCondition**
 */
export declare type FirewallPolicyRuleConditionType = string;

export declare type FirewallPolicyRuleConditionUnion = FirewallPolicyRuleCondition | ApplicationRuleCondition | NatRuleCondition | NetworkRuleCondition;

/** Rule Group resource. */
export declare type FirewallPolicyRuleGroup = SubResource & {
    /** The name of the resource that is unique within a resource group. This name can be used to access the resource. */
    name?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /**
     * Rule Group type.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /** Priority of the Firewall Policy Rule Group resource. */
    priority?: number;
    /** Group of Firewall Policy rules. */
    rules?: FirewallPolicyRuleUnion[];
    /**
     * The provisioning state of the firewall policy rule group resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** Response for ListFirewallPolicyRuleGroups API service call. */
export declare interface FirewallPolicyRuleGroupListResult {
    /** List of FirewallPolicyRuleGroups in a FirewallPolicy. */
    value?: FirewallPolicyRuleGroup[];
    /** URL to get the next set of results. */
    nextLink?: string;
}

/** Interface representing a FirewallPolicyRuleGroups. */
export declare interface FirewallPolicyRuleGroups {
    /**
     * Lists all FirewallPolicyRuleGroups in a FirewallPolicy resource.
     * @param resourceGroupName The name of the resource group.
     * @param firewallPolicyName The name of the Firewall Policy.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, firewallPolicyName: string, options?: FirewallPolicyRuleGroupsListOptionalParams): PagedAsyncIterableIterator<FirewallPolicyRuleGroup>;
    /**
     * Deletes the specified FirewallPolicyRuleGroup.
     * @param resourceGroupName The name of the resource group.
     * @param firewallPolicyName The name of the Firewall Policy.
     * @param ruleGroupName The name of the FirewallPolicyRuleGroup.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, firewallPolicyName: string, ruleGroupName: string, options?: FirewallPolicyRuleGroupsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the specified FirewallPolicyRuleGroup.
     * @param resourceGroupName The name of the resource group.
     * @param firewallPolicyName The name of the Firewall Policy.
     * @param ruleGroupName The name of the FirewallPolicyRuleGroup.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, firewallPolicyName: string, ruleGroupName: string, options?: FirewallPolicyRuleGroupsDeleteOptionalParams): Promise<void>;
    /**
     * Gets the specified FirewallPolicyRuleGroup.
     * @param resourceGroupName The name of the resource group.
     * @param firewallPolicyName The name of the Firewall Policy.
     * @param ruleGroupName The name of the FirewallPolicyRuleGroup.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, firewallPolicyName: string, ruleGroupName: string, options?: FirewallPolicyRuleGroupsGetOptionalParams): Promise<FirewallPolicyRuleGroupsGetResponse>;
    /**
     * Creates or updates the specified FirewallPolicyRuleGroup.
     * @param resourceGroupName The name of the resource group.
     * @param firewallPolicyName The name of the Firewall Policy.
     * @param ruleGroupName The name of the FirewallPolicyRuleGroup.
     * @param parameters Parameters supplied to the create or update FirewallPolicyRuleGroup operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, firewallPolicyName: string, ruleGroupName: string, parameters: FirewallPolicyRuleGroup, options?: FirewallPolicyRuleGroupsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<FirewallPolicyRuleGroupsCreateOrUpdateResponse>, FirewallPolicyRuleGroupsCreateOrUpdateResponse>>;
    /**
     * Creates or updates the specified FirewallPolicyRuleGroup.
     * @param resourceGroupName The name of the resource group.
     * @param firewallPolicyName The name of the Firewall Policy.
     * @param ruleGroupName The name of the FirewallPolicyRuleGroup.
     * @param parameters Parameters supplied to the create or update FirewallPolicyRuleGroup operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, firewallPolicyName: string, ruleGroupName: string, parameters: FirewallPolicyRuleGroup, options?: FirewallPolicyRuleGroupsCreateOrUpdateOptionalParams): Promise<FirewallPolicyRuleGroupsCreateOrUpdateResponse>;
}

/** Optional parameters. */
export declare interface FirewallPolicyRuleGroupsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type FirewallPolicyRuleGroupsCreateOrUpdateResponse = FirewallPolicyRuleGroup;

/** Optional parameters. */
export declare interface FirewallPolicyRuleGroupsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface FirewallPolicyRuleGroupsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type FirewallPolicyRuleGroupsGetResponse = FirewallPolicyRuleGroup;

/** Optional parameters. */
export declare interface FirewallPolicyRuleGroupsListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type FirewallPolicyRuleGroupsListNextResponse = FirewallPolicyRuleGroupListResult;

/** Optional parameters. */
export declare interface FirewallPolicyRuleGroupsListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type FirewallPolicyRuleGroupsListResponse = FirewallPolicyRuleGroupListResult;

/**
 * Defines values for FirewallPolicyRuleType. \
 * {@link KnownFirewallPolicyRuleType} can be used interchangeably with FirewallPolicyRuleType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **FirewallPolicyNatRule** \
 * **FirewallPolicyFilterRule**
 */
export declare type FirewallPolicyRuleType = string;

export declare type FirewallPolicyRuleUnion = FirewallPolicyRule | FirewallPolicyNatRule | FirewallPolicyFilterRule;

/** ThreatIntel Whitelist for Firewall Policy. */
export declare interface FirewallPolicyThreatIntelWhitelist {
    /** List of IP addresses for the ThreatIntel Whitelist. */
    ipAddresses?: string[];
    /** List of FQDNs for the ThreatIntel Whitelist. */
    fqdns?: string[];
}

/** Configuration needed to perform TLS termination & initiation. */
export declare interface FirewallPolicyTransportSecurity {
    /** The CA used for intermediate CA generation. */
    certificateAuthority?: FirewallPolicyCertificateAuthority;
    /** List of domains which are excluded from TLS termination. */
    excludedDomains?: string[];
    /** Certificates which are to be trusted by the firewall. */
    trustedRootCertificates?: FirewallPolicyTrustedRootCertificate[];
}

/** Trusted Root certificates of a firewall policy. */
export declare interface FirewallPolicyTrustedRootCertificate {
    /** Name of the trusted root certificate that is unique within a firewall policy. */
    name?: string;
    /** Secret Id of (base-64 encoded unencrypted pfx) the public certificate data stored in KeyVault. */
    keyVaultSecretId?: string;
}

/** A flow log resource. */
export declare type FlowLog = Resource & {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /** ID of network security group to which flow log will be applied. */
    targetResourceId?: string;
    /**
     * Guid of network security group to which flow log will be applied.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly targetResourceGuid?: string;
    /** ID of the storage account which is used to store the flow log. */
    storageId?: string;
    /** Flag to enable/disable flow logging. */
    enabled?: boolean;
    /** Parameters that define the retention policy for flow log. */
    retentionPolicy?: RetentionPolicyParameters;
    /** Parameters that define the flow log format. */
    format?: FlowLogFormatParameters;
    /** Parameters that define the configuration of traffic analytics. */
    flowAnalyticsConfiguration?: TrafficAnalyticsProperties;
    /**
     * The provisioning state of the flow log.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** Parameters that define the flow log format. */
export declare interface FlowLogFormatParameters {
    /** The file type of flow log. */
    type?: FlowLogFormatType;
    /** The version (revision) of the flow log. */
    version?: number;
}

/**
 * Defines values for FlowLogFormatType. \
 * {@link KnownFlowLogFormatType} can be used interchangeably with FlowLogFormatType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **JSON**
 */
export declare type FlowLogFormatType = string;

/** Information on the configuration of flow log and traffic analytics (optional) . */
export declare interface FlowLogInformation {
    /** The ID of the resource to configure for flow log and traffic analytics (optional) . */
    targetResourceId: string;
    /** Parameters that define the configuration of traffic analytics. */
    flowAnalyticsConfiguration?: TrafficAnalyticsProperties;
    /** ID of the storage account which is used to store the flow log. */
    storageId: string;
    /** Flag to enable/disable flow logging. */
    enabled: boolean;
    /** Parameters that define the retention policy for flow log. */
    retentionPolicy?: RetentionPolicyParameters;
    /** Parameters that define the flow log format. */
    format?: FlowLogFormatParameters;
}

/** List of flow logs. */
export declare interface FlowLogListResult {
    /** Information about flow log resource. */
    value?: FlowLog[];
    /**
     * The URL to get the next set of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Interface representing a FlowLogs. */
export declare interface FlowLogs {
    /**
     * Lists all flow log resources for the specified Network Watcher.
     * @param resourceGroupName The name of the resource group containing Network Watcher.
     * @param networkWatcherName The name of the Network Watcher resource.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, networkWatcherName: string, options?: FlowLogsListOptionalParams): PagedAsyncIterableIterator<FlowLog>;
    /**
     * Create or update a flow log for the specified network security group.
     * @param resourceGroupName The name of the resource group.
     * @param networkWatcherName The name of the network watcher.
     * @param flowLogName The name of the flow log.
     * @param parameters Parameters that define the create or update flow log resource.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, networkWatcherName: string, flowLogName: string, parameters: FlowLog, options?: FlowLogsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<FlowLogsCreateOrUpdateResponse>, FlowLogsCreateOrUpdateResponse>>;
    /**
     * Create or update a flow log for the specified network security group.
     * @param resourceGroupName The name of the resource group.
     * @param networkWatcherName The name of the network watcher.
     * @param flowLogName The name of the flow log.
     * @param parameters Parameters that define the create or update flow log resource.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, networkWatcherName: string, flowLogName: string, parameters: FlowLog, options?: FlowLogsCreateOrUpdateOptionalParams): Promise<FlowLogsCreateOrUpdateResponse>;
    /**
     * Gets a flow log resource by name.
     * @param resourceGroupName The name of the resource group.
     * @param networkWatcherName The name of the network watcher.
     * @param flowLogName The name of the flow log resource.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, networkWatcherName: string, flowLogName: string, options?: FlowLogsGetOptionalParams): Promise<FlowLogsGetResponse>;
    /**
     * Deletes the specified flow log resource.
     * @param resourceGroupName The name of the resource group.
     * @param networkWatcherName The name of the network watcher.
     * @param flowLogName The name of the flow log resource.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, networkWatcherName: string, flowLogName: string, options?: FlowLogsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the specified flow log resource.
     * @param resourceGroupName The name of the resource group.
     * @param networkWatcherName The name of the network watcher.
     * @param flowLogName The name of the flow log resource.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, networkWatcherName: string, flowLogName: string, options?: FlowLogsDeleteOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface FlowLogsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type FlowLogsCreateOrUpdateResponse = FlowLog;

/** Optional parameters. */
export declare interface FlowLogsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface FlowLogsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type FlowLogsGetResponse = FlowLog;

/** Optional parameters. */
export declare interface FlowLogsListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type FlowLogsListNextResponse = FlowLogListResult;

/** Optional parameters. */
export declare interface FlowLogsListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type FlowLogsListResponse = FlowLogListResult;

/** Parameters that define a resource to query flow log and traffic analytics (optional) status. */
export declare interface FlowLogStatusParameters {
    /** The target resource where getting the flow log and traffic analytics (optional) status. */
    targetResourceId: string;
}

/** Frontend IP address of the load balancer. */
export declare type FrontendIPConfiguration = SubResource & {
    /** The name of the resource that is unique within the set of frontend IP configurations used by the load balancer. This name can be used to access the resource. */
    name?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /**
     * Type of the resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /** A list of availability zones denoting the IP allocated for the resource needs to come from. */
    zones?: string[];
    /**
     * An array of references to inbound rules that use this frontend IP.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly inboundNatRules?: SubResource[];
    /**
     * An array of references to inbound pools that use this frontend IP.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly inboundNatPools?: SubResource[];
    /**
     * An array of references to outbound rules that use this frontend IP.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly outboundRules?: SubResource[];
    /**
     * An array of references to load balancing rules that use this frontend IP.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly loadBalancingRules?: SubResource[];
    /** The private IP address of the IP configuration. */
    privateIPAddress?: string;
    /** The Private IP allocation method. */
    privateIPAllocationMethod?: IPAllocationMethod;
    /** Whether the specific ipconfiguration is IPv4 or IPv6. Default is taken as IPv4. */
    privateIPAddressVersion?: IPVersion;
    /** The reference to the subnet resource. */
    subnet?: Subnet;
    /** The reference to the Public IP resource. */
    publicIPAddress?: PublicIPAddress;
    /** The reference to the Public IP Prefix resource. */
    publicIPPrefix?: SubResource;
    /**
     * The provisioning state of the frontend IP configuration resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** Gateway routing details. */
export declare interface GatewayRoute {
    /**
     * The gateway's local address.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly localAddress?: string;
    /**
     * The route's network prefix.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly network?: string;
    /**
     * The route's next hop.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextHop?: string;
    /**
     * The peer this route was learned from.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly sourcePeer?: string;
    /**
     * The source this route was learned from.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly origin?: string;
    /**
     * The route's AS path sequence.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly asPath?: string;
    /**
     * The route's weight.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly weight?: number;
}

/** List of virtual network gateway routes. */
export declare interface GatewayRouteListResult {
    /** List of gateway routes. */
    value?: GatewayRoute[];
}

/** Optional parameters. */
export declare interface GeneratevirtualwanvpnserverconfigurationvpnprofileOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the generatevirtualwanvpnserverconfigurationvpnprofile operation. */
export declare type GeneratevirtualwanvpnserverconfigurationvpnprofileResponse = VpnProfileResponse;

/** Optional parameters. */
export declare interface GetActiveSessionsNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getActiveSessionsNext operation. */
export declare type GetActiveSessionsNextResponse = BastionActiveSessionListResult;

/** Optional parameters. */
export declare interface GetActiveSessionsOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the getActiveSessions operation. */
export declare type GetActiveSessionsResponse = BastionActiveSessionListResult;

/** Optional parameters. */
export declare interface GetBastionShareableLinkNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getBastionShareableLinkNext operation. */
export declare type GetBastionShareableLinkNextResponse = BastionShareableLinkListResult;

/** Optional parameters. */
export declare interface GetBastionShareableLinkOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getBastionShareableLink operation. */
export declare type GetBastionShareableLinkResponse = BastionShareableLinkListResult;

/** List of Vpn-Sites. */
export declare interface GetVpnSitesConfigurationRequest {
    /** List of resource-ids of the vpn-sites for which config is to be downloaded. */
    vpnSites?: string[];
    /** The sas-url to download the configurations for vpn-sites. */
    outputBlobSasUrl: string;
}

/** HTTP configuration of the connectivity check. */
export declare interface HttpConfiguration {
    /** HTTP method. */
    method?: HttpMethod;
    /** List of HTTP headers. */
    headers?: HttpHeader[];
    /** Valid status codes. */
    validStatusCodes?: number[];
}

/**
 * Defines values for HttpConfigurationMethod. \
 * {@link KnownHttpConfigurationMethod} can be used interchangeably with HttpConfigurationMethod,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Get** \
 * **Post**
 */
export declare type HttpConfigurationMethod = string;

/** The HTTP header. */
export declare interface HttpHeader {
    /** The name in HTTP header. */
    name?: string;
    /** The value in HTTP header. */
    value?: string;
}

/**
 * Defines values for HttpMethod. \
 * {@link KnownHttpMethod} can be used interchangeably with HttpMethod,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Get**
 */
export declare type HttpMethod = string;

/** IP addresses associated with azure firewall. */
export declare interface HubIPAddresses {
    /** List of Public IP addresses associated with azure firewall. */
    publicIPAddresses?: AzureFirewallPublicIPAddress[];
    /** Private IP Address associated with azure firewall. */
    privateIPAddress?: string;
}

/** RouteTable route. */
export declare interface HubRoute {
    /** The name of the Route that is unique within a RouteTable. This name can be used to access this route. */
    name: string;
    /** The type of destinations (eg: CIDR, ResourceId, Service). */
    destinationType: string;
    /** List of all destinations. */
    destinations: string[];
    /** The type of next hop (eg: ResourceId). */
    nextHopType: string;
    /** NextHop resource ID. */
    nextHop: string;
}

/** RouteTable resource in a virtual hub. */
export declare type HubRouteTable = SubResource & {
    /** The name of the resource that is unique within a resource group. This name can be used to access the resource. */
    name?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /**
     * Resource type.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /** List of all routes. */
    routes?: HubRoute[];
    /** List of labels associated with this route table. */
    labels?: string[];
    /**
     * List of all connections associated with this route table.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly associatedConnections?: SubResource[];
    /**
     * List of all connections that advertise to this route table.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly propagatingConnections?: SubResource[];
    /**
     * The provisioning state of the RouteTable resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** Interface representing a HubRouteTables. */
export declare interface HubRouteTables {
    /**
     * Retrieves the details of all RouteTables.
     * @param resourceGroupName The resource group name of the VirtualHub.
     * @param virtualHubName The name of the VirtualHub.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, virtualHubName: string, options?: HubRouteTablesListOptionalParams): PagedAsyncIterableIterator<HubRouteTable>;
    /**
     * Creates a RouteTable resource if it doesn't exist else updates the existing RouteTable.
     * @param resourceGroupName The resource group name of the VirtualHub.
     * @param virtualHubName The name of the VirtualHub.
     * @param routeTableName The name of the RouteTable.
     * @param routeTableParameters Parameters supplied to create or update RouteTable.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, virtualHubName: string, routeTableName: string, routeTableParameters: HubRouteTable, options?: HubRouteTablesCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<HubRouteTablesCreateOrUpdateResponse>, HubRouteTablesCreateOrUpdateResponse>>;
    /**
     * Creates a RouteTable resource if it doesn't exist else updates the existing RouteTable.
     * @param resourceGroupName The resource group name of the VirtualHub.
     * @param virtualHubName The name of the VirtualHub.
     * @param routeTableName The name of the RouteTable.
     * @param routeTableParameters Parameters supplied to create or update RouteTable.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, virtualHubName: string, routeTableName: string, routeTableParameters: HubRouteTable, options?: HubRouteTablesCreateOrUpdateOptionalParams): Promise<HubRouteTablesCreateOrUpdateResponse>;
    /**
     * Retrieves the details of a RouteTable.
     * @param resourceGroupName The resource group name of the VirtualHub.
     * @param virtualHubName The name of the VirtualHub.
     * @param routeTableName The name of the RouteTable.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, virtualHubName: string, routeTableName: string, options?: HubRouteTablesGetOptionalParams): Promise<HubRouteTablesGetResponse>;
    /**
     * Deletes a RouteTable.
     * @param resourceGroupName The resource group name of the RouteTable.
     * @param virtualHubName The name of the VirtualHub.
     * @param routeTableName The name of the RouteTable.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, virtualHubName: string, routeTableName: string, options?: HubRouteTablesDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes a RouteTable.
     * @param resourceGroupName The resource group name of the RouteTable.
     * @param virtualHubName The name of the VirtualHub.
     * @param routeTableName The name of the RouteTable.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, virtualHubName: string, routeTableName: string, options?: HubRouteTablesDeleteOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface HubRouteTablesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type HubRouteTablesCreateOrUpdateResponse = HubRouteTable;

/** Optional parameters. */
export declare interface HubRouteTablesDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface HubRouteTablesGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type HubRouteTablesGetResponse = HubRouteTable;

/** Optional parameters. */
export declare interface HubRouteTablesListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type HubRouteTablesListNextResponse = ListHubRouteTablesResult;

/** Optional parameters. */
export declare interface HubRouteTablesListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type HubRouteTablesListResponse = ListHubRouteTablesResult;

/** HubVirtualNetworkConnection Resource. */
export declare type HubVirtualNetworkConnection = SubResource & {
    /** The name of the resource that is unique within a resource group. This name can be used to access the resource. */
    name?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /** Reference to the remote virtual network. */
    remoteVirtualNetwork?: SubResource;
    /** VirtualHub to RemoteVnet transit to enabled or not. */
    allowHubToRemoteVnetTransit?: boolean;
    /** Allow RemoteVnet to use Virtual Hub's gateways. */
    allowRemoteVnetToUseHubVnetGateways?: boolean;
    /** Enable internet security. */
    enableInternetSecurity?: boolean;
    /** The Routing Configuration indicating the associated and propagated route tables on this connection. */
    routingConfiguration?: RoutingConfiguration;
    /**
     * The provisioning state of the hub virtual network connection resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** Interface representing a HubVirtualNetworkConnections. */
export declare interface HubVirtualNetworkConnections {
    /**
     * Retrieves the details of all HubVirtualNetworkConnections.
     * @param resourceGroupName The resource group name of the VirtualHub.
     * @param virtualHubName The name of the VirtualHub.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, virtualHubName: string, options?: HubVirtualNetworkConnectionsListOptionalParams): PagedAsyncIterableIterator<HubVirtualNetworkConnection>;
    /**
     * Retrieves the details of a HubVirtualNetworkConnection.
     * @param resourceGroupName The resource group name of the VirtualHub.
     * @param virtualHubName The name of the VirtualHub.
     * @param connectionName The name of the vpn connection.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, virtualHubName: string, connectionName: string, options?: HubVirtualNetworkConnectionsGetOptionalParams): Promise<HubVirtualNetworkConnectionsGetResponse>;
}

/** Optional parameters. */
export declare interface HubVirtualNetworkConnectionsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type HubVirtualNetworkConnectionsGetResponse = HubVirtualNetworkConnection;

/** Optional parameters. */
export declare interface HubVirtualNetworkConnectionsListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type HubVirtualNetworkConnectionsListNextResponse = ListHubVirtualNetworkConnectionsResult;

/** Optional parameters. */
export declare interface HubVirtualNetworkConnectionsListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type HubVirtualNetworkConnectionsListResponse = ListHubVirtualNetworkConnectionsResult;

/**
 * Defines values for HubVirtualNetworkConnectionStatus. \
 * {@link KnownHubVirtualNetworkConnectionStatus} can be used interchangeably with HubVirtualNetworkConnectionStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown** \
 * **Connecting** \
 * **Connected** \
 * **NotConnected**
 */
export declare type HubVirtualNetworkConnectionStatus = string;

/**
 * Defines values for IkeEncryption. \
 * {@link KnownIkeEncryption} can be used interchangeably with IkeEncryption,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **DES** \
 * **DES3** \
 * **AES128** \
 * **AES192** \
 * **AES256** \
 * **GCMAES256** \
 * **GCMAES128**
 */
export declare type IkeEncryption = string;

/**
 * Defines values for IkeIntegrity. \
 * {@link KnownIkeIntegrity} can be used interchangeably with IkeIntegrity,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **MD5** \
 * **SHA1** \
 * **SHA256** \
 * **SHA384** \
 * **GCMAES256** \
 * **GCMAES128**
 */
export declare type IkeIntegrity = string;

/** Inbound NAT pool of the load balancer. */
export declare type InboundNatPool = SubResource & {
    /** The name of the resource that is unique within the set of inbound NAT pools used by the load balancer. This name can be used to access the resource. */
    name?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /**
     * Type of the resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /** A reference to frontend IP addresses. */
    frontendIPConfiguration?: SubResource;
    /** The reference to the transport protocol used by the inbound NAT pool. */
    protocol?: TransportProtocol;
    /** The first port number in the range of external ports that will be used to provide Inbound Nat to NICs associated with a load balancer. Acceptable values range between 1 and 65534. */
    frontendPortRangeStart?: number;
    /** The last port number in the range of external ports that will be used to provide Inbound Nat to NICs associated with a load balancer. Acceptable values range between 1 and 65535. */
    frontendPortRangeEnd?: number;
    /** The port used for internal connections on the endpoint. Acceptable values are between 1 and 65535. */
    backendPort?: number;
    /** The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP. */
    idleTimeoutInMinutes?: number;
    /** Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint. */
    enableFloatingIP?: boolean;
    /** Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP. */
    enableTcpReset?: boolean;
    /**
     * The provisioning state of the inbound NAT pool resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** Inbound NAT rule of the load balancer. */
export declare type InboundNatRule = SubResource & {
    /** The name of the resource that is unique within the set of inbound NAT rules used by the load balancer. This name can be used to access the resource. */
    name?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /**
     * Type of the resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /** A reference to frontend IP addresses. */
    frontendIPConfiguration?: SubResource;
    /**
     * A reference to a private IP address defined on a network interface of a VM. Traffic sent to the frontend port of each of the frontend IP configurations is forwarded to the backend IP.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly backendIPConfiguration?: NetworkInterfaceIPConfiguration;
    /** The reference to the transport protocol used by the load balancing rule. */
    protocol?: TransportProtocol;
    /** The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values range from 1 to 65534. */
    frontendPort?: number;
    /** The port used for the internal endpoint. Acceptable values range from 1 to 65535. */
    backendPort?: number;
    /** The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP. */
    idleTimeoutInMinutes?: number;
    /** Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint. */
    enableFloatingIP?: boolean;
    /** Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP. */
    enableTcpReset?: boolean;
    /**
     * The provisioning state of the inbound NAT rule resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** Response for ListInboundNatRule API service call. */
export declare interface InboundNatRuleListResult {
    /** A list of inbound nat rules in a load balancer. */
    value?: InboundNatRule[];
    /**
     * The URL to get the next set of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Interface representing a InboundNatRules. */
export declare interface InboundNatRules {
    /**
     * Gets all the inbound nat rules in a load balancer.
     * @param resourceGroupName The name of the resource group.
     * @param loadBalancerName The name of the load balancer.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, loadBalancerName: string, options?: InboundNatRulesListOptionalParams): PagedAsyncIterableIterator<InboundNatRule>;
    /**
     * Deletes the specified load balancer inbound nat rule.
     * @param resourceGroupName The name of the resource group.
     * @param loadBalancerName The name of the load balancer.
     * @param inboundNatRuleName The name of the inbound nat rule.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, loadBalancerName: string, inboundNatRuleName: string, options?: InboundNatRulesDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the specified load balancer inbound nat rule.
     * @param resourceGroupName The name of the resource group.
     * @param loadBalancerName The name of the load balancer.
     * @param inboundNatRuleName The name of the inbound nat rule.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, loadBalancerName: string, inboundNatRuleName: string, options?: InboundNatRulesDeleteOptionalParams): Promise<void>;
    /**
     * Gets the specified load balancer inbound nat rule.
     * @param resourceGroupName The name of the resource group.
     * @param loadBalancerName The name of the load balancer.
     * @param inboundNatRuleName The name of the inbound nat rule.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, loadBalancerName: string, inboundNatRuleName: string, options?: InboundNatRulesGetOptionalParams): Promise<InboundNatRulesGetResponse>;
    /**
     * Creates or updates a load balancer inbound nat rule.
     * @param resourceGroupName The name of the resource group.
     * @param loadBalancerName The name of the load balancer.
     * @param inboundNatRuleName The name of the inbound nat rule.
     * @param inboundNatRuleParameters Parameters supplied to the create or update inbound nat rule
     *                                 operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, loadBalancerName: string, inboundNatRuleName: string, inboundNatRuleParameters: InboundNatRule, options?: InboundNatRulesCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<InboundNatRulesCreateOrUpdateResponse>, InboundNatRulesCreateOrUpdateResponse>>;
    /**
     * Creates or updates a load balancer inbound nat rule.
     * @param resourceGroupName The name of the resource group.
     * @param loadBalancerName The name of the load balancer.
     * @param inboundNatRuleName The name of the inbound nat rule.
     * @param inboundNatRuleParameters Parameters supplied to the create or update inbound nat rule
     *                                 operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, loadBalancerName: string, inboundNatRuleName: string, inboundNatRuleParameters: InboundNatRule, options?: InboundNatRulesCreateOrUpdateOptionalParams): Promise<InboundNatRulesCreateOrUpdateResponse>;
}

/** Optional parameters. */
export declare interface InboundNatRulesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type InboundNatRulesCreateOrUpdateResponse = InboundNatRule;

/** Optional parameters. */
export declare interface InboundNatRulesDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface InboundNatRulesGetOptionalParams extends coreClient.OperationOptions {
    /** Expands referenced resources. */
    expand?: string;
}

/** Contains response data for the get operation. */
export declare type InboundNatRulesGetResponse = InboundNatRule;

/** Optional parameters. */
export declare interface InboundNatRulesListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type InboundNatRulesListNextResponse = InboundNatRuleListResult;

/** Optional parameters. */
export declare interface InboundNatRulesListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type InboundNatRulesListResponse = InboundNatRuleListResult;

/** Response for CheckIPAddressAvailability API service call. */
export declare interface IPAddressAvailabilityResult {
    /** Private IP address availability. */
    available?: boolean;
    /** Contains other available private IP addresses if the asked for address is taken. */
    availableIPAddresses?: string[];
}

/** IpAllocation resource. */
export declare type IpAllocation = Resource & {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /**
     * The Subnet that using the prefix of this IpAllocation resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly subnet?: SubResource;
    /**
     * The VirtualNetwork that using the prefix of this IpAllocation resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly virtualNetwork?: SubResource;
    /** The type for the IpAllocation. */
    typePropertiesType?: IpAllocationType;
    /** The address prefix for the IpAllocation. */
    prefix?: string;
    /** The address prefix length for the IpAllocation. */
    prefixLength?: number;
    /** The address prefix Type for the IpAllocation. */
    prefixType?: IPVersion;
    /** The IPAM allocation ID. */
    ipamAllocationId?: string;
    /** IpAllocation tags. */
    allocationTags?: {
        [propertyName: string]: string;
    };
};

/** Response for the ListIpAllocations API service call. */
export declare interface IpAllocationListResult {
    /** A list of IpAllocation resources. */
    value?: IpAllocation[];
    /** The URL to get the next set of results. */
    nextLink?: string;
}

/**
 * Defines values for IPAllocationMethod. \
 * {@link KnownIPAllocationMethod} can be used interchangeably with IPAllocationMethod,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Static** \
 * **Dynamic**
 */
export declare type IPAllocationMethod = string;

/** Interface representing a IpAllocations. */
export declare interface IpAllocations {
    /**
     * Gets all IpAllocations in a subscription.
     * @param options The options parameters.
     */
    list(options?: IpAllocationsListOptionalParams): PagedAsyncIterableIterator<IpAllocation>;
    /**
     * Gets all IpAllocations in a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: IpAllocationsListByResourceGroupOptionalParams): PagedAsyncIterableIterator<IpAllocation>;
    /**
     * Deletes the specified IpAllocation.
     * @param resourceGroupName The name of the resource group.
     * @param ipAllocationName The name of the IpAllocation.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, ipAllocationName: string, options?: IpAllocationsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the specified IpAllocation.
     * @param resourceGroupName The name of the resource group.
     * @param ipAllocationName The name of the IpAllocation.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, ipAllocationName: string, options?: IpAllocationsDeleteOptionalParams): Promise<void>;
    /**
     * Gets the specified IpAllocation by resource group.
     * @param resourceGroupName The name of the resource group.
     * @param ipAllocationName The name of the IpAllocation.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, ipAllocationName: string, options?: IpAllocationsGetOptionalParams): Promise<IpAllocationsGetResponse>;
    /**
     * Creates or updates an IpAllocation in the specified resource group.
     * @param resourceGroupName The name of the resource group.
     * @param ipAllocationName The name of the IpAllocation.
     * @param parameters Parameters supplied to the create or update virtual network operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, ipAllocationName: string, parameters: IpAllocation, options?: IpAllocationsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<IpAllocationsCreateOrUpdateResponse>, IpAllocationsCreateOrUpdateResponse>>;
    /**
     * Creates or updates an IpAllocation in the specified resource group.
     * @param resourceGroupName The name of the resource group.
     * @param ipAllocationName The name of the IpAllocation.
     * @param parameters Parameters supplied to the create or update virtual network operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, ipAllocationName: string, parameters: IpAllocation, options?: IpAllocationsCreateOrUpdateOptionalParams): Promise<IpAllocationsCreateOrUpdateResponse>;
    /**
     * Updates a IpAllocation tags.
     * @param resourceGroupName The name of the resource group.
     * @param ipAllocationName The name of the IpAllocation.
     * @param parameters Parameters supplied to update IpAllocation tags.
     * @param options The options parameters.
     */
    updateTags(resourceGroupName: string, ipAllocationName: string, parameters: TagsObject, options?: IpAllocationsUpdateTagsOptionalParams): Promise<IpAllocationsUpdateTagsResponse>;
}

/** Optional parameters. */
export declare interface IpAllocationsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type IpAllocationsCreateOrUpdateResponse = IpAllocation;

/** Optional parameters. */
export declare interface IpAllocationsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface IpAllocationsGetOptionalParams extends coreClient.OperationOptions {
    /** Expands referenced resources. */
    expand?: string;
}

/** Contains response data for the get operation. */
export declare type IpAllocationsGetResponse = IpAllocation;

/** Optional parameters. */
export declare interface IpAllocationsListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNext operation. */
export declare type IpAllocationsListByResourceGroupNextResponse = IpAllocationListResult;

/** Optional parameters. */
export declare interface IpAllocationsListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroup operation. */
export declare type IpAllocationsListByResourceGroupResponse = IpAllocationListResult;

/** Optional parameters. */
export declare interface IpAllocationsListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type IpAllocationsListNextResponse = IpAllocationListResult;

/** Optional parameters. */
export declare interface IpAllocationsListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type IpAllocationsListResponse = IpAllocationListResult;

/** Optional parameters. */
export declare interface IpAllocationsUpdateTagsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateTags operation. */
export declare type IpAllocationsUpdateTagsResponse = IpAllocation;

/**
 * Defines values for IpAllocationType. \
 * {@link KnownIpAllocationType} can be used interchangeably with IpAllocationType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Undefined** \
 * **Hypernet**
 */
export declare type IpAllocationType = string;

/** IP configuration. */
export declare type IPConfiguration = SubResource & {
    /** The name of the resource that is unique within a resource group. This name can be used to access the resource. */
    name?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /** The private IP address of the IP configuration. */
    privateIPAddress?: string;
    /** The private IP address allocation method. */
    privateIPAllocationMethod?: IPAllocationMethod;
    /** The reference to the subnet resource. */
    subnet?: Subnet;
    /** The reference to the public IP resource. */
    publicIPAddress?: PublicIPAddress;
    /**
     * The provisioning state of the IP configuration resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** Properties of IPConfigurationBgpPeeringAddress. */
export declare interface IPConfigurationBgpPeeringAddress {
    /** The ID of IP configuration which belongs to gateway. */
    ipconfigurationId?: string;
    /**
     * The list of default BGP peering addresses which belong to IP configuration.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly defaultBgpIpAddresses?: string[];
    /** The list of custom BGP peering addresses which belong to IP configuration. */
    customBgpIpAddresses?: string[];
    /**
     * The list of tunnel public IP addresses which belong to IP configuration.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly tunnelIpAddresses?: string[];
}

/** IP configuration profile child resource. */
export declare type IPConfigurationProfile = SubResource & {
    /** The name of the resource. This name can be used to access the resource. */
    name?: string;
    /**
     * Sub Resource type.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /** The reference to the subnet resource to create a container network interface ip configuration. */
    subnet?: Subnet;
    /**
     * The provisioning state of the IP configuration profile resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/**
 * Defines values for IpFlowProtocol. \
 * {@link KnownIpFlowProtocol} can be used interchangeably with IpFlowProtocol,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **TCP** \
 * **UDP**
 */
export declare type IpFlowProtocol = string;

/** The IpGroups resource information. */
export declare type IpGroup = Resource & {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /**
     * The provisioning state of the IpGroups resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
    /** IpAddresses/IpAddressPrefixes in the IpGroups resource. */
    ipAddresses?: string[];
    /**
     * List of references to Azure resources that this IpGroups is associated with.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly firewalls?: SubResource[];
};

/** Response for the ListIpGroups API service call. */
export declare interface IpGroupListResult {
    /** The list of IpGroups information resources. */
    value?: IpGroup[];
    /** URL to get the next set of results. */
    nextLink?: string;
}

/** Interface representing a IpGroups. */
export declare interface IpGroups {
    /**
     * Gets all IpGroups in a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: IpGroupsListByResourceGroupOptionalParams): PagedAsyncIterableIterator<IpGroup>;
    /**
     * Gets all IpGroups in a subscription.
     * @param options The options parameters.
     */
    list(options?: IpGroupsListOptionalParams): PagedAsyncIterableIterator<IpGroup>;
    /**
     * Gets the specified ipGroups.
     * @param resourceGroupName The name of the resource group.
     * @param ipGroupsName The name of the ipGroups.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, ipGroupsName: string, options?: IpGroupsGetOptionalParams): Promise<IpGroupsGetResponse>;
    /**
     * Creates or updates an ipGroups in a specified resource group.
     * @param resourceGroupName The name of the resource group.
     * @param ipGroupsName The name of the ipGroups.
     * @param parameters Parameters supplied to the create or update IpGroups operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, ipGroupsName: string, parameters: IpGroup, options?: IpGroupsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<IpGroupsCreateOrUpdateResponse>, IpGroupsCreateOrUpdateResponse>>;
    /**
     * Creates or updates an ipGroups in a specified resource group.
     * @param resourceGroupName The name of the resource group.
     * @param ipGroupsName The name of the ipGroups.
     * @param parameters Parameters supplied to the create or update IpGroups operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, ipGroupsName: string, parameters: IpGroup, options?: IpGroupsCreateOrUpdateOptionalParams): Promise<IpGroupsCreateOrUpdateResponse>;
    /**
     * Updates tags of an IpGroups resource.
     * @param resourceGroupName The name of the resource group.
     * @param ipGroupsName The name of the ipGroups.
     * @param parameters Parameters supplied to the update ipGroups operation.
     * @param options The options parameters.
     */
    updateGroups(resourceGroupName: string, ipGroupsName: string, parameters: TagsObject, options?: IpGroupsUpdateGroupsOptionalParams): Promise<IpGroupsUpdateGroupsResponse>;
    /**
     * Deletes the specified ipGroups.
     * @param resourceGroupName The name of the resource group.
     * @param ipGroupsName The name of the ipGroups.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, ipGroupsName: string, options?: IpGroupsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the specified ipGroups.
     * @param resourceGroupName The name of the resource group.
     * @param ipGroupsName The name of the ipGroups.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, ipGroupsName: string, options?: IpGroupsDeleteOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface IpGroupsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type IpGroupsCreateOrUpdateResponse = IpGroup;

/** Optional parameters. */
export declare interface IpGroupsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface IpGroupsGetOptionalParams extends coreClient.OperationOptions {
    /** Expands resourceIds (of Firewalls/Network Security Groups etc.) back referenced by the IpGroups resource. */
    expand?: string;
}

/** Contains response data for the get operation. */
export declare type IpGroupsGetResponse = IpGroup;

/** Optional parameters. */
export declare interface IpGroupsListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNext operation. */
export declare type IpGroupsListByResourceGroupNextResponse = IpGroupListResult;

/** Optional parameters. */
export declare interface IpGroupsListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroup operation. */
export declare type IpGroupsListByResourceGroupResponse = IpGroupListResult;

/** Optional parameters. */
export declare interface IpGroupsListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type IpGroupsListNextResponse = IpGroupListResult;

/** Optional parameters. */
export declare interface IpGroupsListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type IpGroupsListResponse = IpGroupListResult;

/** Optional parameters. */
export declare interface IpGroupsUpdateGroupsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateGroups operation. */
export declare type IpGroupsUpdateGroupsResponse = IpGroup;

/**
 * Defines values for IpsecEncryption. \
 * {@link KnownIpsecEncryption} can be used interchangeably with IpsecEncryption,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None** \
 * **DES** \
 * **DES3** \
 * **AES128** \
 * **AES192** \
 * **AES256** \
 * **GCMAES128** \
 * **GCMAES192** \
 * **GCMAES256**
 */
export declare type IpsecEncryption = string;

/**
 * Defines values for IpsecIntegrity. \
 * {@link KnownIpsecIntegrity} can be used interchangeably with IpsecIntegrity,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **MD5** \
 * **SHA1** \
 * **SHA256** \
 * **GCMAES128** \
 * **GCMAES192** \
 * **GCMAES256**
 */
export declare type IpsecIntegrity = string;

/** An IPSec Policy configuration for a virtual network gateway connection. */
export declare interface IpsecPolicy {
    /** The IPSec Security Association (also called Quick Mode or Phase 2 SA) lifetime in seconds for a site to site VPN tunnel. */
    saLifeTimeSeconds: number;
    /** The IPSec Security Association (also called Quick Mode or Phase 2 SA) payload size in KB for a site to site VPN tunnel. */
    saDataSizeKilobytes: number;
    /** The IPSec encryption algorithm (IKE phase 1). */
    ipsecEncryption: IpsecEncryption;
    /** The IPSec integrity algorithm (IKE phase 1). */
    ipsecIntegrity: IpsecIntegrity;
    /** The IKE encryption algorithm (IKE phase 2). */
    ikeEncryption: IkeEncryption;
    /** The IKE integrity algorithm (IKE phase 2). */
    ikeIntegrity: IkeIntegrity;
    /** The DH Group used in IKE Phase 1 for initial SA. */
    dhGroup: DhGroup;
    /** The Pfs Group used in IKE Phase 2 for new child SA. */
    pfsGroup: PfsGroup;
}

/** Contains the IpTag associated with the object. */
export declare interface IpTag {
    /** The IP tag type. Example: FirstPartyUsage. */
    ipTagType?: string;
    /** The value of the IP tag associated with the public IP. Example: SQL. */
    tag?: string;
}

/** IPv6 Circuit Connection properties for global reach. */
export declare interface Ipv6CircuitConnectionConfig {
    /** /125 IP address space to carve out customer addresses for global reach. */
    addressPrefix?: string;
    /**
     * Express Route Circuit connection state.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly circuitConnectionStatus?: CircuitConnectionStatus;
}

/** Contains IPv6 peering config. */
export declare interface Ipv6ExpressRouteCircuitPeeringConfig {
    /** The primary address prefix. */
    primaryPeerAddressPrefix?: string;
    /** The secondary address prefix. */
    secondaryPeerAddressPrefix?: string;
    /** The Microsoft peering configuration. */
    microsoftPeeringConfig?: ExpressRouteCircuitPeeringConfig;
    /** The reference to the RouteFilter resource. */
    routeFilter?: SubResource;
    /** The state of peering. */
    state?: ExpressRouteCircuitPeeringState;
}

/**
 * Defines values for IPVersion. \
 * {@link KnownIPVersion} can be used interchangeably with IPVersion,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **IPv4** \
 * **IPv6**
 */
export declare type IPVersion = string;

/**
 * Defines values for IssueType. \
 * {@link KnownIssueType} can be used interchangeably with IssueType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown** \
 * **AgentStopped** \
 * **GuestFirewall** \
 * **DnsResolution** \
 * **SocketBind** \
 * **NetworkSecurityRule** \
 * **UserDefinedRoute** \
 * **PortThrottled** \
 * **Platform**
 */
export declare type IssueType = string;

/** Known values of {@link Access} that the service accepts. */
export declare enum KnownAccess {
    Allow = "Allow",
    Deny = "Deny"
}

/** Known values of {@link ApplicationGatewayBackendHealthServerHealth} that the service accepts. */
export declare enum KnownApplicationGatewayBackendHealthServerHealth {
    Unknown = "Unknown",
    Up = "Up",
    Down = "Down",
    Partial = "Partial",
    Draining = "Draining"
}

/** Known values of {@link ApplicationGatewayCookieBasedAffinity} that the service accepts. */
export declare enum KnownApplicationGatewayCookieBasedAffinity {
    Enabled = "Enabled",
    Disabled = "Disabled"
}

/** Known values of {@link ApplicationGatewayCustomErrorStatusCode} that the service accepts. */
export declare enum KnownApplicationGatewayCustomErrorStatusCode {
    HttpStatus403 = "HttpStatus403",
    HttpStatus502 = "HttpStatus502"
}

/** Known values of {@link ApplicationGatewayFirewallMode} that the service accepts. */
export declare enum KnownApplicationGatewayFirewallMode {
    Detection = "Detection",
    Prevention = "Prevention"
}

/** Known values of {@link ApplicationGatewayOperationalState} that the service accepts. */
export declare enum KnownApplicationGatewayOperationalState {
    Stopped = "Stopped",
    Starting = "Starting",
    Running = "Running",
    Stopping = "Stopping"
}

/** Known values of {@link ApplicationGatewayProtocol} that the service accepts. */
export declare enum KnownApplicationGatewayProtocol {
    Http = "Http",
    Https = "Https"
}

/** Known values of {@link ApplicationGatewayRedirectType} that the service accepts. */
export declare enum KnownApplicationGatewayRedirectType {
    Permanent = "Permanent",
    Found = "Found",
    SeeOther = "SeeOther",
    Temporary = "Temporary"
}

/** Known values of {@link ApplicationGatewayRequestRoutingRuleType} that the service accepts. */
export declare enum KnownApplicationGatewayRequestRoutingRuleType {
    Basic = "Basic",
    PathBasedRouting = "PathBasedRouting"
}

/** Known values of {@link ApplicationGatewaySkuName} that the service accepts. */
export declare enum KnownApplicationGatewaySkuName {
    StandardSmall = "Standard_Small",
    StandardMedium = "Standard_Medium",
    StandardLarge = "Standard_Large",
    WAFMedium = "WAF_Medium",
    WAFLarge = "WAF_Large",
    StandardV2 = "Standard_v2",
    WAFV2 = "WAF_v2"
}

/** Known values of {@link ApplicationGatewaySslCipherSuite} that the service accepts. */
export declare enum KnownApplicationGatewaySslCipherSuite {
    TLSEcdheRSAWithAES256CBCSHA384 = "TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384",
    TLSEcdheRSAWithAES128CBCSHA256 = "TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256",
    TLSEcdheRSAWithAES256CBCSHA = "TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA",
    TLSEcdheRSAWithAES128CBCSHA = "TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA",
    TLSDHERSAWithAES256GCMSHA384 = "TLS_DHE_RSA_WITH_AES_256_GCM_SHA384",
    TLSDHERSAWithAES128GCMSHA256 = "TLS_DHE_RSA_WITH_AES_128_GCM_SHA256",
    TLSDHERSAWithAES256CBCSHA = "TLS_DHE_RSA_WITH_AES_256_CBC_SHA",
    TLSDHERSAWithAES128CBCSHA = "TLS_DHE_RSA_WITH_AES_128_CBC_SHA",
    TLSRSAWithAES256GCMSHA384 = "TLS_RSA_WITH_AES_256_GCM_SHA384",
    TLSRSAWithAES128GCMSHA256 = "TLS_RSA_WITH_AES_128_GCM_SHA256",
    TLSRSAWithAES256CBCSHA256 = "TLS_RSA_WITH_AES_256_CBC_SHA256",
    TLSRSAWithAES128CBCSHA256 = "TLS_RSA_WITH_AES_128_CBC_SHA256",
    TLSRSAWithAES256CBCSHA = "TLS_RSA_WITH_AES_256_CBC_SHA",
    TLSRSAWithAES128CBCSHA = "TLS_RSA_WITH_AES_128_CBC_SHA",
    TLSEcdheEcdsaWithAES256GCMSHA384 = "TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384",
    TLSEcdheEcdsaWithAES128GCMSHA256 = "TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256",
    TLSEcdheEcdsaWithAES256CBCSHA384 = "TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384",
    TLSEcdheEcdsaWithAES128CBCSHA256 = "TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256",
    TLSEcdheEcdsaWithAES256CBCSHA = "TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA",
    TLSEcdheEcdsaWithAES128CBCSHA = "TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA",
    TLSDHEDSSWithAES256CBCSHA256 = "TLS_DHE_DSS_WITH_AES_256_CBC_SHA256",
    TLSDHEDSSWithAES128CBCSHA256 = "TLS_DHE_DSS_WITH_AES_128_CBC_SHA256",
    TLSDHEDSSWithAES256CBCSHA = "TLS_DHE_DSS_WITH_AES_256_CBC_SHA",
    TLSDHEDSSWithAES128CBCSHA = "TLS_DHE_DSS_WITH_AES_128_CBC_SHA",
    TLSRSAWith3DESEDECBCSHA = "TLS_RSA_WITH_3DES_EDE_CBC_SHA",
    TLSDHEDSSWith3DESEDECBCSHA = "TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA",
    TLSEcdheRSAWithAES128GCMSHA256 = "TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256",
    TLSEcdheRSAWithAES256GCMSHA384 = "TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384"
}

/** Known values of {@link ApplicationGatewaySslPolicyName} that the service accepts. */
export declare enum KnownApplicationGatewaySslPolicyName {
    AppGwSslPolicy20150501 = "AppGwSslPolicy20150501",
    AppGwSslPolicy20170401 = "AppGwSslPolicy20170401",
    AppGwSslPolicy20170401S = "AppGwSslPolicy20170401S"
}

/** Known values of {@link ApplicationGatewaySslPolicyType} that the service accepts. */
export declare enum KnownApplicationGatewaySslPolicyType {
    Predefined = "Predefined",
    Custom = "Custom"
}

/** Known values of {@link ApplicationGatewaySslProtocol} that the service accepts. */
export declare enum KnownApplicationGatewaySslProtocol {
    TLSv10 = "TLSv1_0",
    TLSv11 = "TLSv1_1",
    TLSv12 = "TLSv1_2"
}

/** Known values of {@link ApplicationGatewayTier} that the service accepts. */
export declare enum KnownApplicationGatewayTier {
    Standard = "Standard",
    WAF = "WAF",
    StandardV2 = "Standard_v2",
    WAFV2 = "WAF_v2"
}

/** Known values of {@link AssociationType} that the service accepts. */
export declare enum KnownAssociationType {
    Associated = "Associated",
    Contains = "Contains"
}

/** Known values of {@link AuthenticationMethod} that the service accepts. */
export declare enum KnownAuthenticationMethod {
    Eaptls = "EAPTLS",
    EapmschaPv2 = "EAPMSCHAPv2"
}

/** Known values of {@link AuthorizationUseStatus} that the service accepts. */
export declare enum KnownAuthorizationUseStatus {
    Available = "Available",
    InUse = "InUse"
}

/** Known values of {@link AzureFirewallApplicationRuleProtocolType} that the service accepts. */
export declare enum KnownAzureFirewallApplicationRuleProtocolType {
    Http = "Http",
    Https = "Https",
    Mssql = "Mssql"
}

/** Known values of {@link AzureFirewallNatRCActionType} that the service accepts. */
export declare enum KnownAzureFirewallNatRCActionType {
    Snat = "Snat",
    Dnat = "Dnat"
}

/** Known values of {@link AzureFirewallNetworkRuleProtocol} that the service accepts. */
export declare enum KnownAzureFirewallNetworkRuleProtocol {
    TCP = "TCP",
    UDP = "UDP",
    Any = "Any",
    Icmp = "ICMP"
}

/** Known values of {@link AzureFirewallRCActionType} that the service accepts. */
export declare enum KnownAzureFirewallRCActionType {
    Allow = "Allow",
    Deny = "Deny"
}

/** Known values of {@link AzureFirewallSkuName} that the service accepts. */
export declare enum KnownAzureFirewallSkuName {
    AzfwVnet = "AZFW_VNet",
    AzfwHub = "AZFW_Hub"
}

/** Known values of {@link AzureFirewallSkuTier} that the service accepts. */
export declare enum KnownAzureFirewallSkuTier {
    Standard = "Standard",
    Premium = "Premium"
}

/** Known values of {@link AzureFirewallThreatIntelMode} that the service accepts. */
export declare enum KnownAzureFirewallThreatIntelMode {
    Alert = "Alert",
    Deny = "Deny",
    Off = "Off"
}

/** Known values of {@link BastionConnectProtocol} that the service accepts. */
export declare enum KnownBastionConnectProtocol {
    SSH = "SSH",
    RDP = "RDP"
}

/** Known values of {@link BgpPeerState} that the service accepts. */
export declare enum KnownBgpPeerState {
    Unknown = "Unknown",
    Stopped = "Stopped",
    Idle = "Idle",
    Connecting = "Connecting",
    Connected = "Connected"
}

/** Known values of {@link CircuitConnectionStatus} that the service accepts. */
export declare enum KnownCircuitConnectionStatus {
    Connected = "Connected",
    Connecting = "Connecting",
    Disconnected = "Disconnected"
}

/** Known values of {@link ConnectionMonitorEndpointFilterItemType} that the service accepts. */
export declare enum KnownConnectionMonitorEndpointFilterItemType {
    AgentAddress = "AgentAddress"
}

/** Known values of {@link ConnectionMonitorEndpointFilterType} that the service accepts. */
export declare enum KnownConnectionMonitorEndpointFilterType {
    Include = "Include"
}

/** Known values of {@link ConnectionMonitorSourceStatus} that the service accepts. */
export declare enum KnownConnectionMonitorSourceStatus {
    Unknown = "Unknown",
    Active = "Active",
    Inactive = "Inactive"
}

/** Known values of {@link ConnectionMonitorTestConfigurationProtocol} that the service accepts. */
export declare enum KnownConnectionMonitorTestConfigurationProtocol {
    Tcp = "Tcp",
    Http = "Http",
    Icmp = "Icmp"
}

/** Known values of {@link ConnectionMonitorType} that the service accepts. */
export declare enum KnownConnectionMonitorType {
    MultiEndpoint = "MultiEndpoint",
    SingleSourceDestination = "SingleSourceDestination"
}

/** Known values of {@link ConnectionState} that the service accepts. */
export declare enum KnownConnectionState {
    Reachable = "Reachable",
    Unreachable = "Unreachable",
    Unknown = "Unknown"
}

/** Known values of {@link ConnectionStatus} that the service accepts. */
export declare enum KnownConnectionStatus {
    Unknown = "Unknown",
    Connected = "Connected",
    Disconnected = "Disconnected",
    Degraded = "Degraded"
}

/** Known values of {@link DdosCustomPolicyProtocol} that the service accepts. */
export declare enum KnownDdosCustomPolicyProtocol {
    Tcp = "Tcp",
    Udp = "Udp",
    Syn = "Syn"
}

/** Known values of {@link DdosCustomPolicyTriggerSensitivityOverride} that the service accepts. */
export declare enum KnownDdosCustomPolicyTriggerSensitivityOverride {
    Relaxed = "Relaxed",
    Low = "Low",
    Default = "Default",
    High = "High"
}

/** Known values of {@link DdosSettingsProtectionCoverage} that the service accepts. */
export declare enum KnownDdosSettingsProtectionCoverage {
    Basic = "Basic",
    Standard = "Standard"
}

/** Known values of {@link DhGroup} that the service accepts. */
export declare enum KnownDhGroup {
    None = "None",
    DHGroup1 = "DHGroup1",
    DHGroup2 = "DHGroup2",
    DHGroup14 = "DHGroup14",
    DHGroup2048 = "DHGroup2048",
    ECP256 = "ECP256",
    ECP384 = "ECP384",
    DHGroup24 = "DHGroup24"
}

/** Known values of {@link Direction} that the service accepts. */
export declare enum KnownDirection {
    Inbound = "Inbound",
    Outbound = "Outbound"
}

/** Known values of {@link EffectiveRouteSource} that the service accepts. */
export declare enum KnownEffectiveRouteSource {
    Unknown = "Unknown",
    User = "User",
    VirtualNetworkGateway = "VirtualNetworkGateway",
    Default = "Default"
}

/** Known values of {@link EffectiveRouteState} that the service accepts. */
export declare enum KnownEffectiveRouteState {
    Active = "Active",
    Invalid = "Invalid"
}

/** Known values of {@link EffectiveSecurityRuleProtocol} that the service accepts. */
export declare enum KnownEffectiveSecurityRuleProtocol {
    Tcp = "Tcp",
    Udp = "Udp",
    All = "All"
}

/** Known values of {@link EvaluationState} that the service accepts. */
export declare enum KnownEvaluationState {
    NotStarted = "NotStarted",
    InProgress = "InProgress",
    Completed = "Completed"
}

/** Known values of {@link ExpressRouteCircuitPeeringAdvertisedPublicPrefixState} that the service accepts. */
export declare enum KnownExpressRouteCircuitPeeringAdvertisedPublicPrefixState {
    NotConfigured = "NotConfigured",
    Configuring = "Configuring",
    Configured = "Configured",
    ValidationNeeded = "ValidationNeeded"
}

/** Known values of {@link ExpressRouteCircuitPeeringState} that the service accepts. */
export declare enum KnownExpressRouteCircuitPeeringState {
    Disabled = "Disabled",
    Enabled = "Enabled"
}

/** Known values of {@link ExpressRouteCircuitSkuFamily} that the service accepts. */
export declare enum KnownExpressRouteCircuitSkuFamily {
    UnlimitedData = "UnlimitedData",
    MeteredData = "MeteredData"
}

/** Known values of {@link ExpressRouteCircuitSkuTier} that the service accepts. */
export declare enum KnownExpressRouteCircuitSkuTier {
    Standard = "Standard",
    Premium = "Premium",
    Basic = "Basic",
    Local = "Local"
}

/** Known values of {@link ExpressRouteLinkAdminState} that the service accepts. */
export declare enum KnownExpressRouteLinkAdminState {
    Enabled = "Enabled",
    Disabled = "Disabled"
}

/** Known values of {@link ExpressRouteLinkConnectorType} that the service accepts. */
export declare enum KnownExpressRouteLinkConnectorType {
    LC = "LC",
    SC = "SC"
}

/** Known values of {@link ExpressRouteLinkMacSecCipher} that the service accepts. */
export declare enum KnownExpressRouteLinkMacSecCipher {
    GcmAes128 = "gcm-aes-128",
    GcmAes256 = "gcm-aes-256"
}

/** Known values of {@link ExpressRoutePeeringState} that the service accepts. */
export declare enum KnownExpressRoutePeeringState {
    Disabled = "Disabled",
    Enabled = "Enabled"
}

/** Known values of {@link ExpressRoutePeeringType} that the service accepts. */
export declare enum KnownExpressRoutePeeringType {
    AzurePublicPeering = "AzurePublicPeering",
    AzurePrivatePeering = "AzurePrivatePeering",
    MicrosoftPeering = "MicrosoftPeering"
}

/** Known values of {@link ExpressRoutePortsEncapsulation} that the service accepts. */
export declare enum KnownExpressRoutePortsEncapsulation {
    Dot1Q = "Dot1Q",
    QinQ = "QinQ"
}

/** Known values of {@link FirewallPolicyFilterRuleActionType} that the service accepts. */
export declare enum KnownFirewallPolicyFilterRuleActionType {
    Allow = "Allow",
    Deny = "Deny"
}

/** Known values of {@link FirewallPolicyIntrusionSystemMode} that the service accepts. */
export declare enum KnownFirewallPolicyIntrusionSystemMode {
    Enabled = "Enabled",
    Disabled = "Disabled"
}

/** Known values of {@link FirewallPolicyNatRuleActionType} that the service accepts. */
export declare enum KnownFirewallPolicyNatRuleActionType {
    Dnat = "DNAT"
}

/** Known values of {@link FirewallPolicyRuleConditionApplicationProtocolType} that the service accepts. */
export declare enum KnownFirewallPolicyRuleConditionApplicationProtocolType {
    Http = "Http",
    Https = "Https"
}

/** Known values of {@link FirewallPolicyRuleConditionNetworkProtocol} that the service accepts. */
export declare enum KnownFirewallPolicyRuleConditionNetworkProtocol {
    TCP = "TCP",
    UDP = "UDP",
    Any = "Any",
    Icmp = "ICMP"
}

/** Known values of {@link FirewallPolicyRuleConditionType} that the service accepts. */
export declare enum KnownFirewallPolicyRuleConditionType {
    ApplicationRuleCondition = "ApplicationRuleCondition",
    NetworkRuleCondition = "NetworkRuleCondition",
    NatRuleCondition = "NatRuleCondition"
}

/** Known values of {@link FirewallPolicyRuleType} that the service accepts. */
export declare enum KnownFirewallPolicyRuleType {
    FirewallPolicyNatRule = "FirewallPolicyNatRule",
    FirewallPolicyFilterRule = "FirewallPolicyFilterRule"
}

/** Known values of {@link FlowLogFormatType} that the service accepts. */
export declare enum KnownFlowLogFormatType {
    Json = "JSON"
}

/** Known values of {@link HttpConfigurationMethod} that the service accepts. */
export declare enum KnownHttpConfigurationMethod {
    Get = "Get",
    Post = "Post"
}

/** Known values of {@link HttpMethod} that the service accepts. */
export declare enum KnownHttpMethod {
    Get = "Get"
}

/** Known values of {@link HubVirtualNetworkConnectionStatus} that the service accepts. */
export declare enum KnownHubVirtualNetworkConnectionStatus {
    Unknown = "Unknown",
    Connecting = "Connecting",
    Connected = "Connected",
    NotConnected = "NotConnected"
}

/** Known values of {@link IkeEncryption} that the service accepts. */
export declare enum KnownIkeEncryption {
    DES = "DES",
    DES3 = "DES3",
    AES128 = "AES128",
    AES192 = "AES192",
    AES256 = "AES256",
    Gcmaes256 = "GCMAES256",
    Gcmaes128 = "GCMAES128"
}

/** Known values of {@link IkeIntegrity} that the service accepts. */
export declare enum KnownIkeIntegrity {
    MD5 = "MD5",
    SHA1 = "SHA1",
    SHA256 = "SHA256",
    SHA384 = "SHA384",
    Gcmaes256 = "GCMAES256",
    Gcmaes128 = "GCMAES128"
}

/** Known values of {@link IPAllocationMethod} that the service accepts. */
export declare enum KnownIPAllocationMethod {
    Static = "Static",
    Dynamic = "Dynamic"
}

/** Known values of {@link IpAllocationType} that the service accepts. */
export declare enum KnownIpAllocationType {
    Undefined = "Undefined",
    Hypernet = "Hypernet"
}

/** Known values of {@link IpFlowProtocol} that the service accepts. */
export declare enum KnownIpFlowProtocol {
    TCP = "TCP",
    UDP = "UDP"
}

/** Known values of {@link IpsecEncryption} that the service accepts. */
export declare enum KnownIpsecEncryption {
    None = "None",
    DES = "DES",
    DES3 = "DES3",
    AES128 = "AES128",
    AES192 = "AES192",
    AES256 = "AES256",
    Gcmaes128 = "GCMAES128",
    Gcmaes192 = "GCMAES192",
    Gcmaes256 = "GCMAES256"
}

/** Known values of {@link IpsecIntegrity} that the service accepts. */
export declare enum KnownIpsecIntegrity {
    MD5 = "MD5",
    SHA1 = "SHA1",
    SHA256 = "SHA256",
    Gcmaes128 = "GCMAES128",
    Gcmaes192 = "GCMAES192",
    Gcmaes256 = "GCMAES256"
}

/** Known values of {@link IPVersion} that the service accepts. */
export declare enum KnownIPVersion {
    IPv4 = "IPv4",
    IPv6 = "IPv6"
}

/** Known values of {@link IssueType} that the service accepts. */
export declare enum KnownIssueType {
    Unknown = "Unknown",
    AgentStopped = "AgentStopped",
    GuestFirewall = "GuestFirewall",
    DnsResolution = "DnsResolution",
    SocketBind = "SocketBind",
    NetworkSecurityRule = "NetworkSecurityRule",
    UserDefinedRoute = "UserDefinedRoute",
    PortThrottled = "PortThrottled",
    Platform = "Platform"
}

/** Known values of {@link LoadBalancerOutboundRuleProtocol} that the service accepts. */
export declare enum KnownLoadBalancerOutboundRuleProtocol {
    Tcp = "Tcp",
    Udp = "Udp",
    All = "All"
}

/** Known values of {@link LoadBalancerSkuName} that the service accepts. */
export declare enum KnownLoadBalancerSkuName {
    Basic = "Basic",
    Standard = "Standard"
}

/** Known values of {@link LoadDistribution} that the service accepts. */
export declare enum KnownLoadDistribution {
    Default = "Default",
    SourceIP = "SourceIP",
    SourceIPProtocol = "SourceIPProtocol"
}

/** Known values of {@link ManagedRuleEnabledState} that the service accepts. */
export declare enum KnownManagedRuleEnabledState {
    Disabled = "Disabled"
}

/** Known values of {@link NatGatewaySkuName} that the service accepts. */
export declare enum KnownNatGatewaySkuName {
    Standard = "Standard"
}

/** Known values of {@link NetworkOperationStatus} that the service accepts. */
export declare enum KnownNetworkOperationStatus {
    InProgress = "InProgress",
    Succeeded = "Succeeded",
    Failed = "Failed"
}

/** Known values of {@link NextHopType} that the service accepts. */
export declare enum KnownNextHopType {
    Internet = "Internet",
    VirtualAppliance = "VirtualAppliance",
    VirtualNetworkGateway = "VirtualNetworkGateway",
    VnetLocal = "VnetLocal",
    HyperNetGateway = "HyperNetGateway",
    None = "None"
}

/** Known values of {@link OfficeTrafficCategory} that the service accepts. */
export declare enum KnownOfficeTrafficCategory {
    Optimize = "Optimize",
    OptimizeAndAllow = "OptimizeAndAllow",
    All = "All",
    None = "None"
}

/** Known values of {@link Origin} that the service accepts. */
export declare enum KnownOrigin {
    Local = "Local",
    Inbound = "Inbound",
    Outbound = "Outbound"
}

/** Known values of {@link OutputType} that the service accepts. */
export declare enum KnownOutputType {
    Workspace = "Workspace"
}

/** Known values of {@link OwaspCrsExclusionEntryMatchVariable} that the service accepts. */
export declare enum KnownOwaspCrsExclusionEntryMatchVariable {
    RequestHeaderNames = "RequestHeaderNames",
    RequestCookieNames = "RequestCookieNames",
    RequestArgNames = "RequestArgNames"
}

/** Known values of {@link OwaspCrsExclusionEntrySelectorMatchOperator} that the service accepts. */
export declare enum KnownOwaspCrsExclusionEntrySelectorMatchOperator {
    Equals = "Equals",
    Contains = "Contains",
    StartsWith = "StartsWith",
    EndsWith = "EndsWith",
    EqualsAny = "EqualsAny"
}

/** Known values of {@link PcError} that the service accepts. */
export declare enum KnownPcError {
    InternalError = "InternalError",
    AgentStopped = "AgentStopped",
    CaptureFailed = "CaptureFailed",
    LocalFileFailed = "LocalFileFailed",
    StorageFailed = "StorageFailed"
}

/** Known values of {@link PcProtocol} that the service accepts. */
export declare enum KnownPcProtocol {
    TCP = "TCP",
    UDP = "UDP",
    Any = "Any"
}

/** Known values of {@link PcStatus} that the service accepts. */
export declare enum KnownPcStatus {
    NotStarted = "NotStarted",
    Running = "Running",
    Stopped = "Stopped",
    Error = "Error",
    Unknown = "Unknown"
}

/** Known values of {@link PfsGroup} that the service accepts. */
export declare enum KnownPfsGroup {
    None = "None",
    PFS1 = "PFS1",
    PFS2 = "PFS2",
    PFS2048 = "PFS2048",
    ECP256 = "ECP256",
    ECP384 = "ECP384",
    PFS24 = "PFS24",
    PFS14 = "PFS14",
    Pfsmm = "PFSMM"
}

/** Known values of {@link PreferredIPVersion} that the service accepts. */
export declare enum KnownPreferredIPVersion {
    IPv4 = "IPv4",
    IPv6 = "IPv6"
}

/** Known values of {@link ProbeProtocol} that the service accepts. */
export declare enum KnownProbeProtocol {
    Http = "Http",
    Tcp = "Tcp",
    Https = "Https"
}

/** Known values of {@link ProcessorArchitecture} that the service accepts. */
export declare enum KnownProcessorArchitecture {
    Amd64 = "Amd64",
    X86 = "X86"
}

/** Known values of {@link Protocol} that the service accepts. */
export declare enum KnownProtocol {
    Tcp = "Tcp",
    Http = "Http",
    Https = "Https",
    Icmp = "Icmp"
}

/** Known values of {@link ProvisioningState} that the service accepts. */
export declare enum KnownProvisioningState {
    Succeeded = "Succeeded",
    Updating = "Updating",
    Deleting = "Deleting",
    Failed = "Failed"
}

/** Known values of {@link PublicIPAddressSkuName} that the service accepts. */
export declare enum KnownPublicIPAddressSkuName {
    Basic = "Basic",
    Standard = "Standard"
}

/** Known values of {@link PublicIPPrefixSkuName} that the service accepts. */
export declare enum KnownPublicIPPrefixSkuName {
    Standard = "Standard"
}

/** Known values of {@link RouteFilterRuleType} that the service accepts. */
export declare enum KnownRouteFilterRuleType {
    Community = "Community"
}

/** Known values of {@link RouteNextHopType} that the service accepts. */
export declare enum KnownRouteNextHopType {
    VirtualNetworkGateway = "VirtualNetworkGateway",
    VnetLocal = "VnetLocal",
    Internet = "Internet",
    VirtualAppliance = "VirtualAppliance",
    None = "None"
}

/** Known values of {@link SecurityPartnerProviderConnectionStatus} that the service accepts. */
export declare enum KnownSecurityPartnerProviderConnectionStatus {
    Unknown = "Unknown",
    PartiallyConnected = "PartiallyConnected",
    Connected = "Connected",
    NotConnected = "NotConnected"
}

/** Known values of {@link SecurityProviderName} that the service accepts. */
export declare enum KnownSecurityProviderName {
    ZScaler = "ZScaler",
    IBoss = "IBoss",
    Checkpoint = "Checkpoint"
}

/** Known values of {@link SecurityRuleAccess} that the service accepts. */
export declare enum KnownSecurityRuleAccess {
    Allow = "Allow",
    Deny = "Deny"
}

/** Known values of {@link SecurityRuleDirection} that the service accepts. */
export declare enum KnownSecurityRuleDirection {
    Inbound = "Inbound",
    Outbound = "Outbound"
}

/** Known values of {@link SecurityRuleProtocol} that the service accepts. */
export declare enum KnownSecurityRuleProtocol {
    Tcp = "Tcp",
    Udp = "Udp",
    Icmp = "Icmp",
    Esp = "Esp",
    Asterisk = "*",
    Ah = "Ah"
}

/** Known values of {@link ServiceProviderProvisioningState} that the service accepts. */
export declare enum KnownServiceProviderProvisioningState {
    NotProvisioned = "NotProvisioned",
    Provisioning = "Provisioning",
    Provisioned = "Provisioned",
    Deprovisioning = "Deprovisioning"
}

/** Known values of {@link Severity} that the service accepts. */
export declare enum KnownSeverity {
    Error = "Error",
    Warning = "Warning"
}

/** Known values of {@link TransportProtocol} that the service accepts. */
export declare enum KnownTransportProtocol {
    Udp = "Udp",
    Tcp = "Tcp",
    All = "All"
}

/** Known values of {@link TunnelConnectionStatus} that the service accepts. */
export declare enum KnownTunnelConnectionStatus {
    Unknown = "Unknown",
    Connecting = "Connecting",
    Connected = "Connected",
    NotConnected = "NotConnected"
}

/** Known values of {@link UsageUnit} that the service accepts. */
export declare enum KnownUsageUnit {
    Count = "Count"
}

/** Known values of {@link VerbosityLevel} that the service accepts. */
export declare enum KnownVerbosityLevel {
    Normal = "Normal",
    Minimum = "Minimum",
    Full = "Full"
}

/** Known values of {@link VirtualNetworkGatewayConnectionProtocol} that the service accepts. */
export declare enum KnownVirtualNetworkGatewayConnectionProtocol {
    IKEv2 = "IKEv2",
    IKEv1 = "IKEv1"
}

/** Known values of {@link VirtualNetworkGatewayConnectionStatus} that the service accepts. */
export declare enum KnownVirtualNetworkGatewayConnectionStatus {
    Unknown = "Unknown",
    Connecting = "Connecting",
    Connected = "Connected",
    NotConnected = "NotConnected"
}

/** Known values of {@link VirtualNetworkGatewayConnectionType} that the service accepts. */
export declare enum KnownVirtualNetworkGatewayConnectionType {
    IPsec = "IPsec",
    Vnet2Vnet = "Vnet2Vnet",
    ExpressRoute = "ExpressRoute",
    VPNClient = "VPNClient"
}

/** Known values of {@link VirtualNetworkGatewaySkuName} that the service accepts. */
export declare enum KnownVirtualNetworkGatewaySkuName {
    Basic = "Basic",
    HighPerformance = "HighPerformance",
    Standard = "Standard",
    UltraPerformance = "UltraPerformance",
    VpnGw1 = "VpnGw1",
    VpnGw2 = "VpnGw2",
    VpnGw3 = "VpnGw3",
    VpnGw4 = "VpnGw4",
    VpnGw5 = "VpnGw5",
    VpnGw1AZ = "VpnGw1AZ",
    VpnGw2AZ = "VpnGw2AZ",
    VpnGw3AZ = "VpnGw3AZ",
    VpnGw4AZ = "VpnGw4AZ",
    VpnGw5AZ = "VpnGw5AZ",
    ErGw1AZ = "ErGw1AZ",
    ErGw2AZ = "ErGw2AZ",
    ErGw3AZ = "ErGw3AZ"
}

/** Known values of {@link VirtualNetworkGatewaySkuTier} that the service accepts. */
export declare enum KnownVirtualNetworkGatewaySkuTier {
    Basic = "Basic",
    HighPerformance = "HighPerformance",
    Standard = "Standard",
    UltraPerformance = "UltraPerformance",
    VpnGw1 = "VpnGw1",
    VpnGw2 = "VpnGw2",
    VpnGw3 = "VpnGw3",
    VpnGw4 = "VpnGw4",
    VpnGw5 = "VpnGw5",
    VpnGw1AZ = "VpnGw1AZ",
    VpnGw2AZ = "VpnGw2AZ",
    VpnGw3AZ = "VpnGw3AZ",
    VpnGw4AZ = "VpnGw4AZ",
    VpnGw5AZ = "VpnGw5AZ",
    ErGw1AZ = "ErGw1AZ",
    ErGw2AZ = "ErGw2AZ",
    ErGw3AZ = "ErGw3AZ"
}

/** Known values of {@link VirtualNetworkGatewayType} that the service accepts. */
export declare enum KnownVirtualNetworkGatewayType {
    Vpn = "Vpn",
    ExpressRoute = "ExpressRoute"
}

/** Known values of {@link VirtualNetworkPeeringState} that the service accepts. */
export declare enum KnownVirtualNetworkPeeringState {
    Initiated = "Initiated",
    Connected = "Connected",
    Disconnected = "Disconnected"
}

/** Known values of {@link VirtualWanSecurityProviderType} that the service accepts. */
export declare enum KnownVirtualWanSecurityProviderType {
    External = "External",
    Native = "Native"
}

/** Known values of {@link VpnAuthenticationType} that the service accepts. */
export declare enum KnownVpnAuthenticationType {
    Certificate = "Certificate",
    Radius = "Radius",
    AAD = "AAD"
}

/** Known values of {@link VpnClientProtocol} that the service accepts. */
export declare enum KnownVpnClientProtocol {
    IkeV2 = "IkeV2",
    Sstp = "SSTP",
    OpenVPN = "OpenVPN"
}

/** Known values of {@link VpnConnectionStatus} that the service accepts. */
export declare enum KnownVpnConnectionStatus {
    Unknown = "Unknown",
    Connecting = "Connecting",
    Connected = "Connected",
    NotConnected = "NotConnected"
}

/** Known values of {@link VpnGatewayGeneration} that the service accepts. */
export declare enum KnownVpnGatewayGeneration {
    None = "None",
    Generation1 = "Generation1",
    Generation2 = "Generation2"
}

/** Known values of {@link VpnGatewayTunnelingProtocol} that the service accepts. */
export declare enum KnownVpnGatewayTunnelingProtocol {
    IkeV2 = "IkeV2",
    OpenVPN = "OpenVPN"
}

/** Known values of {@link VpnType} that the service accepts. */
export declare enum KnownVpnType {
    PolicyBased = "PolicyBased",
    RouteBased = "RouteBased"
}

/** Known values of {@link WebApplicationFirewallAction} that the service accepts. */
export declare enum KnownWebApplicationFirewallAction {
    Allow = "Allow",
    Block = "Block",
    Log = "Log"
}

/** Known values of {@link WebApplicationFirewallEnabledState} that the service accepts. */
export declare enum KnownWebApplicationFirewallEnabledState {
    Disabled = "Disabled",
    Enabled = "Enabled"
}

/** Known values of {@link WebApplicationFirewallMatchVariable} that the service accepts. */
export declare enum KnownWebApplicationFirewallMatchVariable {
    RemoteAddr = "RemoteAddr",
    RequestMethod = "RequestMethod",
    QueryString = "QueryString",
    PostArgs = "PostArgs",
    RequestUri = "RequestUri",
    RequestHeaders = "RequestHeaders",
    RequestBody = "RequestBody",
    RequestCookies = "RequestCookies"
}

/** Known values of {@link WebApplicationFirewallMode} that the service accepts. */
export declare enum KnownWebApplicationFirewallMode {
    Prevention = "Prevention",
    Detection = "Detection"
}

/** Known values of {@link WebApplicationFirewallOperator} that the service accepts. */
export declare enum KnownWebApplicationFirewallOperator {
    IPMatch = "IPMatch",
    Equal = "Equal",
    Contains = "Contains",
    LessThan = "LessThan",
    GreaterThan = "GreaterThan",
    LessThanOrEqual = "LessThanOrEqual",
    GreaterThanOrEqual = "GreaterThanOrEqual",
    BeginsWith = "BeginsWith",
    EndsWith = "EndsWith",
    Regex = "Regex",
    GeoMatch = "GeoMatch"
}

/** Known values of {@link WebApplicationFirewallPolicyResourceState} that the service accepts. */
export declare enum KnownWebApplicationFirewallPolicyResourceState {
    Creating = "Creating",
    Enabling = "Enabling",
    Enabled = "Enabled",
    Disabling = "Disabling",
    Disabled = "Disabled",
    Deleting = "Deleting"
}

/** Known values of {@link WebApplicationFirewallRuleType} that the service accepts. */
export declare enum KnownWebApplicationFirewallRuleType {
    MatchRule = "MatchRule",
    Invalid = "Invalid"
}

/** Known values of {@link WebApplicationFirewallTransform} that the service accepts. */
export declare enum KnownWebApplicationFirewallTransform {
    Lowercase = "Lowercase",
    Trim = "Trim",
    UrlDecode = "UrlDecode",
    UrlEncode = "UrlEncode",
    RemoveNulls = "RemoveNulls",
    HtmlEntityDecode = "HtmlEntityDecode"
}

/** List of RouteTables and a URL nextLink to get the next set of results. */
export declare interface ListHubRouteTablesResult {
    /** List of RouteTables. */
    value?: HubRouteTable[];
    /** URL to get the next set of operation list results if there are any. */
    nextLink?: string;
}

/** List of HubVirtualNetworkConnections and a URL nextLink to get the next set of results. */
export declare interface ListHubVirtualNetworkConnectionsResult {
    /** List of HubVirtualNetworkConnections. */
    value?: HubVirtualNetworkConnection[];
    /** URL to get the next set of operation list results if there are any. */
    nextLink?: string;
}

/** Result of the request to list P2SVpnGateways. It contains a list of P2SVpnGateways and a URL nextLink to get the next set of results. */
export declare interface ListP2SVpnGatewaysResult {
    /** List of P2SVpnGateways. */
    value?: P2SVpnGateway[];
    /** URL to get the next set of operation list results if there are any. */
    nextLink?: string;
}

/** List of VirtualHubRouteTableV2s and a URL nextLink to get the next set of results. */
export declare interface ListVirtualHubRouteTableV2SResult {
    /** List of VirtualHubRouteTableV2s. */
    value?: VirtualHubRouteTableV2[];
    /** URL to get the next set of operation list results if there are any. */
    nextLink?: string;
}

/** Result of the request to list VirtualHubs. It contains a list of VirtualHubs and a URL nextLink to get the next set of results. */
export declare interface ListVirtualHubsResult {
    /** List of VirtualHubs. */
    value?: VirtualHub[];
    /** URL to get the next set of operation list results if there are any. */
    nextLink?: string;
}

/** Result of the request to list VirtualWANs. It contains a list of VirtualWANs and a URL nextLink to get the next set of results. */
export declare interface ListVirtualWANsResult {
    /** List of VirtualWANs. */
    value?: VirtualWAN[];
    /** URL to get the next set of operation list results if there are any. */
    nextLink?: string;
}

/** Result of the request to list all vpn connections to a virtual wan vpn gateway. It contains a list of Vpn Connections and a URL nextLink to get the next set of results. */
export declare interface ListVpnConnectionsResult {
    /** List of Vpn Connections. */
    value?: VpnConnection[];
    /** URL to get the next set of operation list results if there are any. */
    nextLink?: string;
}

/** Result of the request to list VpnGateways. It contains a list of VpnGateways and a URL nextLink to get the next set of results. */
export declare interface ListVpnGatewaysResult {
    /** List of VpnGateways. */
    value?: VpnGateway[];
    /** URL to get the next set of operation list results if there are any. */
    nextLink?: string;
}

/** Result of the request to list all VpnServerConfigurations. It contains a list of VpnServerConfigurations and a URL nextLink to get the next set of results. */
export declare interface ListVpnServerConfigurationsResult {
    /** List of VpnServerConfigurations. */
    value?: VpnServerConfiguration[];
    /** URL to get the next set of operation list results if there are any. */
    nextLink?: string;
}

/** Result of the request to list all vpn connections to a virtual wan vpn gateway. It contains a list of Vpn Connections and a URL nextLink to get the next set of results. */
export declare interface ListVpnSiteLinkConnectionsResult {
    /** List of VpnSiteLinkConnections. */
    value?: VpnSiteLinkConnection[];
    /** URL to get the next set of operation list results if there are any. */
    nextLink?: string;
}

/** Result of the request to list VpnSiteLinks. It contains a list of VpnSiteLinks and a URL nextLink to get the next set of results. */
export declare interface ListVpnSiteLinksResult {
    /** List of VpnSitesLinks. */
    value?: VpnSiteLink[];
    /** URL to get the next set of operation list results if there are any. */
    nextLink?: string;
}

/** Result of the request to list VpnSites. It contains a list of VpnSites and a URL nextLink to get the next set of results. */
export declare interface ListVpnSitesResult {
    /** List of VpnSites. */
    value?: VpnSite[];
    /** URL to get the next set of operation list results if there are any. */
    nextLink?: string;
}

/** LoadBalancer resource. */
export declare type LoadBalancer = Resource & {
    /** The load balancer SKU. */
    sku?: LoadBalancerSku;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /** Object representing the frontend IPs to be used for the load balancer. */
    frontendIPConfigurations?: FrontendIPConfiguration[];
    /** Collection of backend address pools used by a load balancer. */
    backendAddressPools?: BackendAddressPool[];
    /** Object collection representing the load balancing rules Gets the provisioning. */
    loadBalancingRules?: LoadBalancingRule[];
    /** Collection of probe objects used in the load balancer. */
    probes?: Probe[];
    /** Collection of inbound NAT Rules used by a load balancer. Defining inbound NAT rules on your load balancer is mutually exclusive with defining an inbound NAT pool. Inbound NAT pools are referenced from virtual machine scale sets. NICs that are associated with individual virtual machines cannot reference an Inbound NAT pool. They have to reference individual inbound NAT rules. */
    inboundNatRules?: InboundNatRule[];
    /** Defines an external port range for inbound NAT to a single backend port on NICs associated with a load balancer. Inbound NAT rules are created automatically for each NIC associated with the Load Balancer using an external port from this range. Defining an Inbound NAT pool on your Load Balancer is mutually exclusive with defining inbound Nat rules. Inbound NAT pools are referenced from virtual machine scale sets. NICs that are associated with individual virtual machines cannot reference an inbound NAT pool. They have to reference individual inbound NAT rules. */
    inboundNatPools?: InboundNatPool[];
    /** The outbound rules. */
    outboundRules?: OutboundRule[];
    /**
     * The resource GUID property of the load balancer resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly resourceGuid?: string;
    /**
     * The provisioning state of the load balancer resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** Load balancer backend addresses. */
export declare interface LoadBalancerBackendAddress {
    /** Name of the backend address. */
    name?: string;
    /** Reference to an existing virtual network. */
    virtualNetwork?: VirtualNetwork;
    /** IP Address belonging to the referenced virtual network. */
    ipAddress?: string;
    /** Reference to IP address defined in network interfaces. */
    networkInterfaceIPConfiguration?: NetworkInterfaceIPConfiguration;
}

/** Response for ListBackendAddressPool API service call. */
export declare interface LoadBalancerBackendAddressPoolListResult {
    /** A list of backend address pools in a load balancer. */
    value?: BackendAddressPool[];
    /**
     * The URL to get the next set of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Interface representing a LoadBalancerBackendAddressPools. */
export declare interface LoadBalancerBackendAddressPools {
    /**
     * Gets all the load balancer backed address pools.
     * @param resourceGroupName The name of the resource group.
     * @param loadBalancerName The name of the load balancer.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, loadBalancerName: string, options?: LoadBalancerBackendAddressPoolsListOptionalParams): PagedAsyncIterableIterator<BackendAddressPool>;
    /**
     * Gets load balancer backend address pool.
     * @param resourceGroupName The name of the resource group.
     * @param loadBalancerName The name of the load balancer.
     * @param backendAddressPoolName The name of the backend address pool.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, loadBalancerName: string, backendAddressPoolName: string, options?: LoadBalancerBackendAddressPoolsGetOptionalParams): Promise<LoadBalancerBackendAddressPoolsGetResponse>;
    /**
     * Creates or updates a load balancer backend address pool.
     * @param resourceGroupName The name of the resource group.
     * @param loadBalancerName The name of the load balancer.
     * @param backendAddressPoolName The name of the backend address pool.
     * @param parameters Parameters supplied to the create or update load balancer backend address pool
     *                   operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, loadBalancerName: string, backendAddressPoolName: string, parameters: BackendAddressPool, options?: LoadBalancerBackendAddressPoolsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<LoadBalancerBackendAddressPoolsCreateOrUpdateResponse>, LoadBalancerBackendAddressPoolsCreateOrUpdateResponse>>;
    /**
     * Creates or updates a load balancer backend address pool.
     * @param resourceGroupName The name of the resource group.
     * @param loadBalancerName The name of the load balancer.
     * @param backendAddressPoolName The name of the backend address pool.
     * @param parameters Parameters supplied to the create or update load balancer backend address pool
     *                   operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, loadBalancerName: string, backendAddressPoolName: string, parameters: BackendAddressPool, options?: LoadBalancerBackendAddressPoolsCreateOrUpdateOptionalParams): Promise<LoadBalancerBackendAddressPoolsCreateOrUpdateResponse>;
    /**
     * Deletes the specified load balancer backend address pool.
     * @param resourceGroupName The name of the resource group.
     * @param loadBalancerName The name of the load balancer.
     * @param backendAddressPoolName The name of the backend address pool.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, loadBalancerName: string, backendAddressPoolName: string, options?: LoadBalancerBackendAddressPoolsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the specified load balancer backend address pool.
     * @param resourceGroupName The name of the resource group.
     * @param loadBalancerName The name of the load balancer.
     * @param backendAddressPoolName The name of the backend address pool.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, loadBalancerName: string, backendAddressPoolName: string, options?: LoadBalancerBackendAddressPoolsDeleteOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface LoadBalancerBackendAddressPoolsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type LoadBalancerBackendAddressPoolsCreateOrUpdateResponse = BackendAddressPool;

/** Optional parameters. */
export declare interface LoadBalancerBackendAddressPoolsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface LoadBalancerBackendAddressPoolsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type LoadBalancerBackendAddressPoolsGetResponse = BackendAddressPool;

/** Optional parameters. */
export declare interface LoadBalancerBackendAddressPoolsListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type LoadBalancerBackendAddressPoolsListNextResponse = LoadBalancerBackendAddressPoolListResult;

/** Optional parameters. */
export declare interface LoadBalancerBackendAddressPoolsListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type LoadBalancerBackendAddressPoolsListResponse = LoadBalancerBackendAddressPoolListResult;

/** Response for ListFrontendIPConfiguration API service call. */
export declare interface LoadBalancerFrontendIPConfigurationListResult {
    /** A list of frontend IP configurations in a load balancer. */
    value?: FrontendIPConfiguration[];
    /**
     * The URL to get the next set of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Interface representing a LoadBalancerFrontendIPConfigurations. */
export declare interface LoadBalancerFrontendIPConfigurations {
    /**
     * Gets all the load balancer frontend IP configurations.
     * @param resourceGroupName The name of the resource group.
     * @param loadBalancerName The name of the load balancer.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, loadBalancerName: string, options?: LoadBalancerFrontendIPConfigurationsListOptionalParams): PagedAsyncIterableIterator<FrontendIPConfiguration>;
    /**
     * Gets load balancer frontend IP configuration.
     * @param resourceGroupName The name of the resource group.
     * @param loadBalancerName The name of the load balancer.
     * @param frontendIPConfigurationName The name of the frontend IP configuration.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, loadBalancerName: string, frontendIPConfigurationName: string, options?: LoadBalancerFrontendIPConfigurationsGetOptionalParams): Promise<LoadBalancerFrontendIPConfigurationsGetResponse>;
}

/** Optional parameters. */
export declare interface LoadBalancerFrontendIPConfigurationsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type LoadBalancerFrontendIPConfigurationsGetResponse = FrontendIPConfiguration;

/** Optional parameters. */
export declare interface LoadBalancerFrontendIPConfigurationsListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type LoadBalancerFrontendIPConfigurationsListNextResponse = LoadBalancerFrontendIPConfigurationListResult;

/** Optional parameters. */
export declare interface LoadBalancerFrontendIPConfigurationsListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type LoadBalancerFrontendIPConfigurationsListResponse = LoadBalancerFrontendIPConfigurationListResult;

/** Response for ListLoadBalancers API service call. */
export declare interface LoadBalancerListResult {
    /** A list of load balancers in a resource group. */
    value?: LoadBalancer[];
    /**
     * The URL to get the next set of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Response for ListLoadBalancingRule API service call. */
export declare interface LoadBalancerLoadBalancingRuleListResult {
    /** A list of load balancing rules in a load balancer. */
    value?: LoadBalancingRule[];
    /**
     * The URL to get the next set of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Interface representing a LoadBalancerLoadBalancingRules. */
export declare interface LoadBalancerLoadBalancingRules {
    /**
     * Gets all the load balancing rules in a load balancer.
     * @param resourceGroupName The name of the resource group.
     * @param loadBalancerName The name of the load balancer.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, loadBalancerName: string, options?: LoadBalancerLoadBalancingRulesListOptionalParams): PagedAsyncIterableIterator<LoadBalancingRule>;
    /**
     * Gets the specified load balancer load balancing rule.
     * @param resourceGroupName The name of the resource group.
     * @param loadBalancerName The name of the load balancer.
     * @param loadBalancingRuleName The name of the load balancing rule.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, loadBalancerName: string, loadBalancingRuleName: string, options?: LoadBalancerLoadBalancingRulesGetOptionalParams): Promise<LoadBalancerLoadBalancingRulesGetResponse>;
}

/** Optional parameters. */
export declare interface LoadBalancerLoadBalancingRulesGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type LoadBalancerLoadBalancingRulesGetResponse = LoadBalancingRule;

/** Optional parameters. */
export declare interface LoadBalancerLoadBalancingRulesListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type LoadBalancerLoadBalancingRulesListNextResponse = LoadBalancerLoadBalancingRuleListResult;

/** Optional parameters. */
export declare interface LoadBalancerLoadBalancingRulesListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type LoadBalancerLoadBalancingRulesListResponse = LoadBalancerLoadBalancingRuleListResult;

/** Interface representing a LoadBalancerNetworkInterfaces. */
export declare interface LoadBalancerNetworkInterfaces {
    /**
     * Gets associated load balancer network interfaces.
     * @param resourceGroupName The name of the resource group.
     * @param loadBalancerName The name of the load balancer.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, loadBalancerName: string, options?: LoadBalancerNetworkInterfacesListOptionalParams): PagedAsyncIterableIterator<NetworkInterface>;
}

/** Optional parameters. */
export declare interface LoadBalancerNetworkInterfacesListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type LoadBalancerNetworkInterfacesListNextResponse = NetworkInterfaceListResult;

/** Optional parameters. */
export declare interface LoadBalancerNetworkInterfacesListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type LoadBalancerNetworkInterfacesListResponse = NetworkInterfaceListResult;

/** Response for ListOutboundRule API service call. */
export declare interface LoadBalancerOutboundRuleListResult {
    /** A list of outbound rules in a load balancer. */
    value?: OutboundRule[];
    /**
     * The URL to get the next set of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/**
 * Defines values for LoadBalancerOutboundRuleProtocol. \
 * {@link KnownLoadBalancerOutboundRuleProtocol} can be used interchangeably with LoadBalancerOutboundRuleProtocol,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Tcp** \
 * **Udp** \
 * **All**
 */
export declare type LoadBalancerOutboundRuleProtocol = string;

/** Interface representing a LoadBalancerOutboundRules. */
export declare interface LoadBalancerOutboundRules {
    /**
     * Gets all the outbound rules in a load balancer.
     * @param resourceGroupName The name of the resource group.
     * @param loadBalancerName The name of the load balancer.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, loadBalancerName: string, options?: LoadBalancerOutboundRulesListOptionalParams): PagedAsyncIterableIterator<OutboundRule>;
    /**
     * Gets the specified load balancer outbound rule.
     * @param resourceGroupName The name of the resource group.
     * @param loadBalancerName The name of the load balancer.
     * @param outboundRuleName The name of the outbound rule.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, loadBalancerName: string, outboundRuleName: string, options?: LoadBalancerOutboundRulesGetOptionalParams): Promise<LoadBalancerOutboundRulesGetResponse>;
}

/** Optional parameters. */
export declare interface LoadBalancerOutboundRulesGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type LoadBalancerOutboundRulesGetResponse = OutboundRule;

/** Optional parameters. */
export declare interface LoadBalancerOutboundRulesListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type LoadBalancerOutboundRulesListNextResponse = LoadBalancerOutboundRuleListResult;

/** Optional parameters. */
export declare interface LoadBalancerOutboundRulesListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type LoadBalancerOutboundRulesListResponse = LoadBalancerOutboundRuleListResult;

/** Response for ListProbe API service call. */
export declare interface LoadBalancerProbeListResult {
    /** A list of probes in a load balancer. */
    value?: Probe[];
    /**
     * The URL to get the next set of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Interface representing a LoadBalancerProbes. */
export declare interface LoadBalancerProbes {
    /**
     * Gets all the load balancer probes.
     * @param resourceGroupName The name of the resource group.
     * @param loadBalancerName The name of the load balancer.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, loadBalancerName: string, options?: LoadBalancerProbesListOptionalParams): PagedAsyncIterableIterator<Probe>;
    /**
     * Gets load balancer probe.
     * @param resourceGroupName The name of the resource group.
     * @param loadBalancerName The name of the load balancer.
     * @param probeName The name of the probe.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, loadBalancerName: string, probeName: string, options?: LoadBalancerProbesGetOptionalParams): Promise<LoadBalancerProbesGetResponse>;
}

/** Optional parameters. */
export declare interface LoadBalancerProbesGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type LoadBalancerProbesGetResponse = Probe;

/** Optional parameters. */
export declare interface LoadBalancerProbesListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type LoadBalancerProbesListNextResponse = LoadBalancerProbeListResult;

/** Optional parameters. */
export declare interface LoadBalancerProbesListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type LoadBalancerProbesListResponse = LoadBalancerProbeListResult;

/** Interface representing a LoadBalancers. */
export declare interface LoadBalancers {
    /**
     * Gets all the load balancers in a subscription.
     * @param options The options parameters.
     */
    listAll(options?: LoadBalancersListAllOptionalParams): PagedAsyncIterableIterator<LoadBalancer>;
    /**
     * Gets all the load balancers in a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, options?: LoadBalancersListOptionalParams): PagedAsyncIterableIterator<LoadBalancer>;
    /**
     * Deletes the specified load balancer.
     * @param resourceGroupName The name of the resource group.
     * @param loadBalancerName The name of the load balancer.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, loadBalancerName: string, options?: LoadBalancersDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the specified load balancer.
     * @param resourceGroupName The name of the resource group.
     * @param loadBalancerName The name of the load balancer.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, loadBalancerName: string, options?: LoadBalancersDeleteOptionalParams): Promise<void>;
    /**
     * Gets the specified load balancer.
     * @param resourceGroupName The name of the resource group.
     * @param loadBalancerName The name of the load balancer.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, loadBalancerName: string, options?: LoadBalancersGetOptionalParams): Promise<LoadBalancersGetResponse>;
    /**
     * Creates or updates a load balancer.
     * @param resourceGroupName The name of the resource group.
     * @param loadBalancerName The name of the load balancer.
     * @param parameters Parameters supplied to the create or update load balancer operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, loadBalancerName: string, parameters: LoadBalancer, options?: LoadBalancersCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<LoadBalancersCreateOrUpdateResponse>, LoadBalancersCreateOrUpdateResponse>>;
    /**
     * Creates or updates a load balancer.
     * @param resourceGroupName The name of the resource group.
     * @param loadBalancerName The name of the load balancer.
     * @param parameters Parameters supplied to the create or update load balancer operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, loadBalancerName: string, parameters: LoadBalancer, options?: LoadBalancersCreateOrUpdateOptionalParams): Promise<LoadBalancersCreateOrUpdateResponse>;
    /**
     * Updates a load balancer tags.
     * @param resourceGroupName The name of the resource group.
     * @param loadBalancerName The name of the load balancer.
     * @param parameters Parameters supplied to update load balancer tags.
     * @param options The options parameters.
     */
    updateTags(resourceGroupName: string, loadBalancerName: string, parameters: TagsObject, options?: LoadBalancersUpdateTagsOptionalParams): Promise<LoadBalancersUpdateTagsResponse>;
}

/** Optional parameters. */
export declare interface LoadBalancersCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type LoadBalancersCreateOrUpdateResponse = LoadBalancer;

/** Optional parameters. */
export declare interface LoadBalancersDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface LoadBalancersGetOptionalParams extends coreClient.OperationOptions {
    /** Expands referenced resources. */
    expand?: string;
}

/** Contains response data for the get operation. */
export declare type LoadBalancersGetResponse = LoadBalancer;

/** SKU of a load balancer. */
export declare interface LoadBalancerSku {
    /** Name of a load balancer SKU. */
    name?: LoadBalancerSkuName;
}

/**
 * Defines values for LoadBalancerSkuName. \
 * {@link KnownLoadBalancerSkuName} can be used interchangeably with LoadBalancerSkuName,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Basic** \
 * **Standard**
 */
export declare type LoadBalancerSkuName = string;

/** Optional parameters. */
export declare interface LoadBalancersListAllNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAllNext operation. */
export declare type LoadBalancersListAllNextResponse = LoadBalancerListResult;

/** Optional parameters. */
export declare interface LoadBalancersListAllOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAll operation. */
export declare type LoadBalancersListAllResponse = LoadBalancerListResult;

/** Optional parameters. */
export declare interface LoadBalancersListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type LoadBalancersListNextResponse = LoadBalancerListResult;

/** Optional parameters. */
export declare interface LoadBalancersListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type LoadBalancersListResponse = LoadBalancerListResult;

/** Optional parameters. */
export declare interface LoadBalancersUpdateTagsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateTags operation. */
export declare type LoadBalancersUpdateTagsResponse = LoadBalancer;

/** A load balancing rule for a load balancer. */
export declare type LoadBalancingRule = SubResource & {
    /** The name of the resource that is unique within the set of load balancing rules used by the load balancer. This name can be used to access the resource. */
    name?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /**
     * Type of the resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /** A reference to frontend IP addresses. */
    frontendIPConfiguration?: SubResource;
    /** A reference to a pool of DIPs. Inbound traffic is randomly load balanced across IPs in the backend IPs. */
    backendAddressPool?: SubResource;
    /** The reference to the load balancer probe used by the load balancing rule. */
    probe?: SubResource;
    /** The reference to the transport protocol used by the load balancing rule. */
    protocol?: TransportProtocol;
    /** The load distribution policy for this rule. */
    loadDistribution?: LoadDistribution;
    /** The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values are between 0 and 65534. Note that value 0 enables "Any Port". */
    frontendPort?: number;
    /** The port used for internal connections on the endpoint. Acceptable values are between 0 and 65535. Note that value 0 enables "Any Port". */
    backendPort?: number;
    /** The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP. */
    idleTimeoutInMinutes?: number;
    /** Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint. */
    enableFloatingIP?: boolean;
    /** Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP. */
    enableTcpReset?: boolean;
    /** Configures SNAT for the VMs in the backend pool to use the publicIP address specified in the frontend of the load balancing rule. */
    disableOutboundSnat?: boolean;
    /**
     * The provisioning state of the load balancing rule resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/**
 * Defines values for LoadDistribution. \
 * {@link KnownLoadDistribution} can be used interchangeably with LoadDistribution,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Default** \
 * **SourceIP** \
 * **SourceIPProtocol**
 */
export declare type LoadDistribution = string;

/** A common class for general resource information. */
export declare type LocalNetworkGateway = Resource & {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /** Local network site address space. */
    localNetworkAddressSpace?: AddressSpace;
    /** IP address of local network gateway. */
    gatewayIpAddress?: string;
    /** FQDN of local network gateway. */
    fqdn?: string;
    /** Local network gateway's BGP speaker settings. */
    bgpSettings?: BgpSettings;
    /**
     * The resource GUID property of the local network gateway resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly resourceGuid?: string;
    /**
     * The provisioning state of the local network gateway resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** Response for ListLocalNetworkGateways API service call. */
export declare interface LocalNetworkGatewayListResult {
    /** A list of local network gateways that exists in a resource group. */
    value?: LocalNetworkGateway[];
    /**
     * The URL to get the next set of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Interface representing a LocalNetworkGateways. */
export declare interface LocalNetworkGateways {
    /**
     * Gets all the local network gateways in a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, options?: LocalNetworkGatewaysListOptionalParams): PagedAsyncIterableIterator<LocalNetworkGateway>;
    /**
     * Creates or updates a local network gateway in the specified resource group.
     * @param resourceGroupName The name of the resource group.
     * @param localNetworkGatewayName The name of the local network gateway.
     * @param parameters Parameters supplied to the create or update local network gateway operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, localNetworkGatewayName: string, parameters: LocalNetworkGateway, options?: LocalNetworkGatewaysCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<LocalNetworkGatewaysCreateOrUpdateResponse>, LocalNetworkGatewaysCreateOrUpdateResponse>>;
    /**
     * Creates or updates a local network gateway in the specified resource group.
     * @param resourceGroupName The name of the resource group.
     * @param localNetworkGatewayName The name of the local network gateway.
     * @param parameters Parameters supplied to the create or update local network gateway operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, localNetworkGatewayName: string, parameters: LocalNetworkGateway, options?: LocalNetworkGatewaysCreateOrUpdateOptionalParams): Promise<LocalNetworkGatewaysCreateOrUpdateResponse>;
    /**
     * Gets the specified local network gateway in a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param localNetworkGatewayName The name of the local network gateway.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, localNetworkGatewayName: string, options?: LocalNetworkGatewaysGetOptionalParams): Promise<LocalNetworkGatewaysGetResponse>;
    /**
     * Deletes the specified local network gateway.
     * @param resourceGroupName The name of the resource group.
     * @param localNetworkGatewayName The name of the local network gateway.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, localNetworkGatewayName: string, options?: LocalNetworkGatewaysDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the specified local network gateway.
     * @param resourceGroupName The name of the resource group.
     * @param localNetworkGatewayName The name of the local network gateway.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, localNetworkGatewayName: string, options?: LocalNetworkGatewaysDeleteOptionalParams): Promise<void>;
    /**
     * Updates a local network gateway tags.
     * @param resourceGroupName The name of the resource group.
     * @param localNetworkGatewayName The name of the local network gateway.
     * @param parameters Parameters supplied to update local network gateway tags.
     * @param options The options parameters.
     */
    updateTags(resourceGroupName: string, localNetworkGatewayName: string, parameters: TagsObject, options?: LocalNetworkGatewaysUpdateTagsOptionalParams): Promise<LocalNetworkGatewaysUpdateTagsResponse>;
}

/** Optional parameters. */
export declare interface LocalNetworkGatewaysCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type LocalNetworkGatewaysCreateOrUpdateResponse = LocalNetworkGateway;

/** Optional parameters. */
export declare interface LocalNetworkGatewaysDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface LocalNetworkGatewaysGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type LocalNetworkGatewaysGetResponse = LocalNetworkGateway;

/** Optional parameters. */
export declare interface LocalNetworkGatewaysListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type LocalNetworkGatewaysListNextResponse = LocalNetworkGatewayListResult;

/** Optional parameters. */
export declare interface LocalNetworkGatewaysListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type LocalNetworkGatewaysListResponse = LocalNetworkGatewayListResult;

/** Optional parameters. */
export declare interface LocalNetworkGatewaysUpdateTagsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateTags operation. */
export declare type LocalNetworkGatewaysUpdateTagsResponse = LocalNetworkGateway;

/** Description of logging specification. */
export declare interface LogSpecification {
    /** The name of the specification. */
    name?: string;
    /** The display name of the specification. */
    displayName?: string;
    /** Duration of the blob. */
    blobDuration?: string;
}

/**
 * Defines values for ManagedRuleEnabledState. \
 * {@link KnownManagedRuleEnabledState} can be used interchangeably with ManagedRuleEnabledState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Disabled**
 */
export declare type ManagedRuleEnabledState = string;

/** Defines a managed rule group override setting. */
export declare interface ManagedRuleGroupOverride {
    /** The managed rule group to override. */
    ruleGroupName: string;
    /** List of rules that will be disabled. If none specified, all rules in the group will be disabled. */
    rules?: ManagedRuleOverride[];
}

/** Defines a managed rule group override setting. */
export declare interface ManagedRuleOverride {
    /** Identifier for the managed rule. */
    ruleId: string;
    /** The state of the managed rule. Defaults to Disabled if not specified. */
    state?: ManagedRuleEnabledState;
}

/** Allow to exclude some variable satisfy the condition for the WAF check. */
export declare interface ManagedRulesDefinition {
    /** The Exclusions that are applied on the policy. */
    exclusions?: OwaspCrsExclusionEntry[];
    /** The managed rule sets that are associated with the policy. */
    managedRuleSets: ManagedRuleSet[];
}

/** Defines a managed rule set. */
export declare interface ManagedRuleSet {
    /** Defines the rule set type to use. */
    ruleSetType: string;
    /** Defines the version of the rule set to use. */
    ruleSetVersion: string;
    /** Defines the rule group overrides to apply to the rule set. */
    ruleGroupOverrides?: ManagedRuleGroupOverride[];
}

/** Identity for the resource. */
export declare interface ManagedServiceIdentity {
    /**
     * The principal id of the system assigned identity. This property will only be provided for a system assigned identity.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly principalId?: string;
    /**
     * The tenant id of the system assigned identity. This property will only be provided for a system assigned identity.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly tenantId?: string;
    /** The type of identity used for the resource. The type 'SystemAssigned, UserAssigned' includes both an implicitly created identity and a set of user assigned identities. The type 'None' will remove any identities from the virtual machine. */
    type?: ResourceIdentityType;
    /** The list of user identities associated with resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'. */
    userAssignedIdentities?: {
        [propertyName: string]: Components1Jq1T4ISchemasManagedserviceidentityPropertiesUserassignedidentitiesAdditionalproperties;
    };
}

/** Define match conditions. */
export declare interface MatchCondition {
    /** List of match variables. */
    matchVariables: MatchVariable[];
    /** The operator to be matched. */
    operator: WebApplicationFirewallOperator;
    /** Whether this is negate condition or not. */
    negationConditon?: boolean;
    /** Match value. */
    matchValues: string[];
    /** List of transforms. */
    transforms?: WebApplicationFirewallTransform[];
}

/** Matched rule. */
export declare interface MatchedRule {
    /** Name of the matched network security rule. */
    ruleName?: string;
    /** The network traffic is allowed or denied. Possible values are 'Allow' and 'Deny'. */
    action?: string;
}

/** Define match variables. */
export declare interface MatchVariable {
    /** Match Variable. */
    variableName: WebApplicationFirewallMatchVariable;
    /** The selector of match variable. */
    selector?: string;
}

/** Description of metrics specification. */
export declare interface MetricSpecification {
    /** The name of the metric. */
    name?: string;
    /** The display name of the metric. */
    displayName?: string;
    /** The description of the metric. */
    displayDescription?: string;
    /** Units the metric to be displayed in. */
    unit?: string;
    /** The aggregation type. */
    aggregationType?: string;
    /** List of availability. */
    availabilities?: Availability[];
    /** Whether regional MDM account enabled. */
    enableRegionalMdmAccount?: boolean;
    /** Whether gaps would be filled with zeros. */
    fillGapWithZero?: boolean;
    /** Pattern for the filter of the metric. */
    metricFilterPattern?: string;
    /** List of dimensions. */
    dimensions?: Dimension[];
    /** Whether the metric is internal. */
    isInternal?: boolean;
    /** The source MDM account. */
    sourceMdmAccount?: string;
    /** The source MDM namespace. */
    sourceMdmNamespace?: string;
    /** The resource Id dimension name override. */
    resourceIdDimensionNameOverride?: string;
}

/** Nat Gateway resource. */
export declare type NatGateway = Resource & {
    /** The nat gateway SKU. */
    sku?: NatGatewaySku;
    /** A list of availability zones denoting the zone in which Nat Gateway should be deployed. */
    zones?: string[];
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /** The idle timeout of the nat gateway. */
    idleTimeoutInMinutes?: number;
    /** An array of public ip addresses associated with the nat gateway resource. */
    publicIpAddresses?: SubResource[];
    /** An array of public ip prefixes associated with the nat gateway resource. */
    publicIpPrefixes?: SubResource[];
    /**
     * An array of references to the subnets using this nat gateway resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly subnets?: SubResource[];
    /**
     * The resource GUID property of the NAT gateway resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly resourceGuid?: string;
    /**
     * The provisioning state of the NAT gateway resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** Response for ListNatGateways API service call. */
export declare interface NatGatewayListResult {
    /** A list of Nat Gateways that exists in a resource group. */
    value?: NatGateway[];
    /** The URL to get the next set of results. */
    nextLink?: string;
}

/** Interface representing a NatGateways. */
export declare interface NatGateways {
    /**
     * Gets all the Nat Gateways in a subscription.
     * @param options The options parameters.
     */
    listAll(options?: NatGatewaysListAllOptionalParams): PagedAsyncIterableIterator<NatGateway>;
    /**
     * Gets all nat gateways in a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, options?: NatGatewaysListOptionalParams): PagedAsyncIterableIterator<NatGateway>;
    /**
     * Deletes the specified nat gateway.
     * @param resourceGroupName The name of the resource group.
     * @param natGatewayName The name of the nat gateway.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, natGatewayName: string, options?: NatGatewaysDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the specified nat gateway.
     * @param resourceGroupName The name of the resource group.
     * @param natGatewayName The name of the nat gateway.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, natGatewayName: string, options?: NatGatewaysDeleteOptionalParams): Promise<void>;
    /**
     * Gets the specified nat gateway in a specified resource group.
     * @param resourceGroupName The name of the resource group.
     * @param natGatewayName The name of the nat gateway.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, natGatewayName: string, options?: NatGatewaysGetOptionalParams): Promise<NatGatewaysGetResponse>;
    /**
     * Creates or updates a nat gateway.
     * @param resourceGroupName The name of the resource group.
     * @param natGatewayName The name of the nat gateway.
     * @param parameters Parameters supplied to the create or update nat gateway operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, natGatewayName: string, parameters: NatGateway, options?: NatGatewaysCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<NatGatewaysCreateOrUpdateResponse>, NatGatewaysCreateOrUpdateResponse>>;
    /**
     * Creates or updates a nat gateway.
     * @param resourceGroupName The name of the resource group.
     * @param natGatewayName The name of the nat gateway.
     * @param parameters Parameters supplied to the create or update nat gateway operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, natGatewayName: string, parameters: NatGateway, options?: NatGatewaysCreateOrUpdateOptionalParams): Promise<NatGatewaysCreateOrUpdateResponse>;
    /**
     * Updates nat gateway tags.
     * @param resourceGroupName The name of the resource group.
     * @param natGatewayName The name of the nat gateway.
     * @param parameters Parameters supplied to update nat gateway tags.
     * @param options The options parameters.
     */
    updateTags(resourceGroupName: string, natGatewayName: string, parameters: TagsObject, options?: NatGatewaysUpdateTagsOptionalParams): Promise<NatGatewaysUpdateTagsResponse>;
}

/** Optional parameters. */
export declare interface NatGatewaysCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type NatGatewaysCreateOrUpdateResponse = NatGateway;

/** Optional parameters. */
export declare interface NatGatewaysDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface NatGatewaysGetOptionalParams extends coreClient.OperationOptions {
    /** Expands referenced resources. */
    expand?: string;
}

/** Contains response data for the get operation. */
export declare type NatGatewaysGetResponse = NatGateway;

/** SKU of nat gateway. */
export declare interface NatGatewaySku {
    /** Name of Nat Gateway SKU. */
    name?: NatGatewaySkuName;
}

/**
 * Defines values for NatGatewaySkuName. \
 * {@link KnownNatGatewaySkuName} can be used interchangeably with NatGatewaySkuName,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Standard**
 */
export declare type NatGatewaySkuName = string;

/** Optional parameters. */
export declare interface NatGatewaysListAllNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAllNext operation. */
export declare type NatGatewaysListAllNextResponse = NatGatewayListResult;

/** Optional parameters. */
export declare interface NatGatewaysListAllOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAll operation. */
export declare type NatGatewaysListAllResponse = NatGatewayListResult;

/** Optional parameters. */
export declare interface NatGatewaysListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type NatGatewaysListNextResponse = NatGatewayListResult;

/** Optional parameters. */
export declare interface NatGatewaysListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type NatGatewaysListResponse = NatGatewayListResult;

/** Optional parameters. */
export declare interface NatGatewaysUpdateTagsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateTags operation. */
export declare type NatGatewaysUpdateTagsResponse = NatGateway;

/** Rule condition of type nat. */
export declare type NatRuleCondition = FirewallPolicyRuleCondition & {
    /** Polymorphic discriminator, which specifies the different types this object can be */
    ruleConditionType: "NatRuleCondition";
    /** Array of FirewallPolicyRuleConditionNetworkProtocols. */
    ipProtocols?: FirewallPolicyRuleConditionNetworkProtocol[];
    /** List of source IP addresses for this rule. */
    sourceAddresses?: string[];
    /** List of destination IP addresses or Service Tags. */
    destinationAddresses?: string[];
    /** List of destination ports. */
    destinationPorts?: string[];
    /** List of source IpGroups for this rule. */
    sourceIpGroups?: string[];
    /** Terminate TLS connections for this rule. */
    terminateTLS?: boolean;
};

/** Parameters to get network configuration diagnostic. */
export declare interface NetworkConfigurationDiagnosticParameters {
    /** The ID of the target resource to perform network configuration diagnostic. Valid options are VM, NetworkInterface, VMSS/NetworkInterface and Application Gateway. */
    targetResourceId: string;
    /** Verbosity level. */
    verbosityLevel?: VerbosityLevel;
    /** List of network configuration diagnostic profiles. */
    profiles: NetworkConfigurationDiagnosticProfile[];
}

/** Parameters to compare with network configuration. */
export declare interface NetworkConfigurationDiagnosticProfile {
    /** The direction of the traffic. */
    direction: Direction;
    /** Protocol to be verified on. Accepted values are '*', TCP, UDP. */
    protocol: string;
    /** Traffic source. Accepted values are '*', IP Address/CIDR, Service Tag. */
    source: string;
    /** Traffic destination. Accepted values are: '*', IP Address/CIDR, Service Tag. */
    destination: string;
    /** Traffic destination port. Accepted values are '*' and a single port in the range (0 - 65535). */
    destinationPort: string;
}

/** Results of network configuration diagnostic on the target resource. */
export declare interface NetworkConfigurationDiagnosticResponse {
    /**
     * List of network configuration diagnostic results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly results?: NetworkConfigurationDiagnosticResult[];
}

/** Network configuration diagnostic result corresponded to provided traffic query. */
export declare interface NetworkConfigurationDiagnosticResult {
    /** Network configuration diagnostic profile. */
    profile?: NetworkConfigurationDiagnosticProfile;
    /** Network security group result. */
    networkSecurityGroupResult?: NetworkSecurityGroupResult;
}

/** Network Intent Policy resource. */
export declare type NetworkIntentPolicy = Resource & {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
};

/** Details of NetworkIntentPolicyConfiguration for PrepareNetworkPoliciesRequest. */
export declare interface NetworkIntentPolicyConfiguration {
    /** The name of the Network Intent Policy for storing in target subscription. */
    networkIntentPolicyName?: string;
    /** Source network intent policy. */
    sourceNetworkIntentPolicy?: NetworkIntentPolicy;
}

/** A network interface in a resource group. */
export declare type NetworkInterface = Resource & {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /**
     * The reference to a virtual machine.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly virtualMachine?: SubResource;
    /** The reference to the NetworkSecurityGroup resource. */
    networkSecurityGroup?: NetworkSecurityGroup;
    /**
     * A reference to the private endpoint to which the network interface is linked.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly privateEndpoint?: PrivateEndpoint;
    /** A list of IPConfigurations of the network interface. */
    ipConfigurations?: NetworkInterfaceIPConfiguration[];
    /**
     * A list of TapConfigurations of the network interface.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly tapConfigurations?: NetworkInterfaceTapConfiguration[];
    /** The DNS settings in network interface. */
    dnsSettings?: NetworkInterfaceDnsSettings;
    /**
     * The MAC address of the network interface.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly macAddress?: string;
    /**
     * Whether this is a primary network interface on a virtual machine.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly primary?: boolean;
    /** If the network interface is accelerated networking enabled. */
    enableAcceleratedNetworking?: boolean;
    /** Indicates whether IP forwarding is enabled on this network interface. */
    enableIPForwarding?: boolean;
    /**
     * A list of references to linked BareMetal resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly hostedWorkloads?: string[];
    /**
     * The resource GUID property of the network interface resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly resourceGuid?: string;
    /**
     * The provisioning state of the network interface resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** Network interface and its custom security rules. */
export declare interface NetworkInterfaceAssociation {
    /**
     * Network interface ID.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
    /** Collection of custom security rules. */
    securityRules?: SecurityRule[];
}

/** DNS settings of a network interface. */
export declare interface NetworkInterfaceDnsSettings {
    /** List of DNS servers IP addresses. Use 'AzureProvidedDNS' to switch to azure provided DNS resolution. 'AzureProvidedDNS' value cannot be combined with other IPs, it must be the only value in dnsServers collection. */
    dnsServers?: string[];
    /**
     * If the VM that uses this NIC is part of an Availability Set, then this list will have the union of all DNS servers from all NICs that are part of the Availability Set. This property is what is configured on each of those VMs.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly appliedDnsServers?: string[];
    /** Relative DNS name for this NIC used for internal communications between VMs in the same virtual network. */
    internalDnsNameLabel?: string;
    /**
     * Fully qualified DNS name supporting internal communications between VMs in the same virtual network.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly internalFqdn?: string;
    /**
     * Even if internalDnsNameLabel is not specified, a DNS entry is created for the primary NIC of the VM. This DNS name can be constructed by concatenating the VM name with the value of internalDomainNameSuffix.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly internalDomainNameSuffix?: string;
}

/** IPConfiguration in a network interface. */
export declare type NetworkInterfaceIPConfiguration = SubResource & {
    /** The name of the resource that is unique within a resource group. This name can be used to access the resource. */
    name?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /** The reference to Virtual Network Taps. */
    virtualNetworkTaps?: VirtualNetworkTap[];
    /** The reference to ApplicationGatewayBackendAddressPool resource. */
    applicationGatewayBackendAddressPools?: ApplicationGatewayBackendAddressPool[];
    /** The reference to LoadBalancerBackendAddressPool resource. */
    loadBalancerBackendAddressPools?: BackendAddressPool[];
    /** A list of references of LoadBalancerInboundNatRules. */
    loadBalancerInboundNatRules?: InboundNatRule[];
    /** Private IP address of the IP configuration. */
    privateIPAddress?: string;
    /** The private IP address allocation method. */
    privateIPAllocationMethod?: IPAllocationMethod;
    /** Whether the specific IP configuration is IPv4 or IPv6. Default is IPv4. */
    privateIPAddressVersion?: IPVersion;
    /** Subnet bound to the IP configuration. */
    subnet?: Subnet;
    /** Whether this is a primary customer address on the network interface. */
    primary?: boolean;
    /** Public IP address bound to the IP configuration. */
    publicIPAddress?: PublicIPAddress;
    /** Application security groups in which the IP configuration is included. */
    applicationSecurityGroups?: ApplicationSecurityGroup[];
    /**
     * The provisioning state of the network interface IP configuration.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
    /**
     * PrivateLinkConnection properties for the network interface.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly privateLinkConnectionProperties?: NetworkInterfaceIPConfigurationPrivateLinkConnectionProperties;
};

/** Response for list ip configurations API service call. */
export declare interface NetworkInterfaceIPConfigurationListResult {
    /** A list of ip configurations. */
    value?: NetworkInterfaceIPConfiguration[];
    /**
     * The URL to get the next set of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** PrivateLinkConnection properties for the network interface. */
export declare interface NetworkInterfaceIPConfigurationPrivateLinkConnectionProperties {
    /**
     * The group ID for current private link connection.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly groupId?: string;
    /**
     * The required member name for current private link connection.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly requiredMemberName?: string;
    /**
     * List of FQDNs for current private link connection.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly fqdns?: string[];
}

/** Interface representing a NetworkInterfaceIPConfigurations. */
export declare interface NetworkInterfaceIPConfigurations {
    /**
     * Get all ip configurations in a network interface.
     * @param resourceGroupName The name of the resource group.
     * @param networkInterfaceName The name of the network interface.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, networkInterfaceName: string, options?: NetworkInterfaceIPConfigurationsListOptionalParams): PagedAsyncIterableIterator<NetworkInterfaceIPConfiguration>;
    /**
     * Gets the specified network interface ip configuration.
     * @param resourceGroupName The name of the resource group.
     * @param networkInterfaceName The name of the network interface.
     * @param ipConfigurationName The name of the ip configuration name.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, networkInterfaceName: string, ipConfigurationName: string, options?: NetworkInterfaceIPConfigurationsGetOptionalParams): Promise<NetworkInterfaceIPConfigurationsGetResponse>;
}

/** Optional parameters. */
export declare interface NetworkInterfaceIPConfigurationsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type NetworkInterfaceIPConfigurationsGetResponse = NetworkInterfaceIPConfiguration;

/** Optional parameters. */
export declare interface NetworkInterfaceIPConfigurationsListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type NetworkInterfaceIPConfigurationsListNextResponse = NetworkInterfaceIPConfigurationListResult;

/** Optional parameters. */
export declare interface NetworkInterfaceIPConfigurationsListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type NetworkInterfaceIPConfigurationsListResponse = NetworkInterfaceIPConfigurationListResult;

/** Response for the ListNetworkInterface API service call. */
export declare interface NetworkInterfaceListResult {
    /** A list of network interfaces in a resource group. */
    value?: NetworkInterface[];
    /**
     * The URL to get the next set of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Response for list ip configurations API service call. */
export declare interface NetworkInterfaceLoadBalancerListResult {
    /** A list of load balancers. */
    value?: LoadBalancer[];
    /**
     * The URL to get the next set of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Interface representing a NetworkInterfaceLoadBalancers. */
export declare interface NetworkInterfaceLoadBalancers {
    /**
     * List all load balancers in a network interface.
     * @param resourceGroupName The name of the resource group.
     * @param networkInterfaceName The name of the network interface.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, networkInterfaceName: string, options?: NetworkInterfaceLoadBalancersListOptionalParams): PagedAsyncIterableIterator<LoadBalancer>;
}

/** Optional parameters. */
export declare interface NetworkInterfaceLoadBalancersListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type NetworkInterfaceLoadBalancersListNextResponse = NetworkInterfaceLoadBalancerListResult;

/** Optional parameters. */
export declare interface NetworkInterfaceLoadBalancersListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type NetworkInterfaceLoadBalancersListResponse = NetworkInterfaceLoadBalancerListResult;

/** Interface representing a NetworkInterfaces. */
export declare interface NetworkInterfaces {
    /**
     * Gets all network interfaces in a subscription.
     * @param options The options parameters.
     */
    listAll(options?: NetworkInterfacesListAllOptionalParams): PagedAsyncIterableIterator<NetworkInterface>;
    /**
     * Gets all network interfaces in a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, options?: NetworkInterfacesListOptionalParams): PagedAsyncIterableIterator<NetworkInterface>;
    /**
     * Gets information about all network interfaces in a virtual machine in a virtual machine scale set.
     * @param resourceGroupName The name of the resource group.
     * @param virtualMachineScaleSetName The name of the virtual machine scale set.
     * @param virtualmachineIndex The virtual machine index.
     * @param options The options parameters.
     */
    listVirtualMachineScaleSetVMNetworkInterfaces(resourceGroupName: string, virtualMachineScaleSetName: string, virtualmachineIndex: string, options?: NetworkInterfacesListVirtualMachineScaleSetVMNetworkInterfacesOptionalParams): PagedAsyncIterableIterator<NetworkInterface>;
    /**
     * Gets all network interfaces in a virtual machine scale set.
     * @param resourceGroupName The name of the resource group.
     * @param virtualMachineScaleSetName The name of the virtual machine scale set.
     * @param options The options parameters.
     */
    listVirtualMachineScaleSetNetworkInterfaces(resourceGroupName: string, virtualMachineScaleSetName: string, options?: NetworkInterfacesListVirtualMachineScaleSetNetworkInterfacesOptionalParams): PagedAsyncIterableIterator<NetworkInterface>;
    /**
     * Get the specified network interface ip configuration in a virtual machine scale set.
     * @param resourceGroupName The name of the resource group.
     * @param virtualMachineScaleSetName The name of the virtual machine scale set.
     * @param virtualmachineIndex The virtual machine index.
     * @param networkInterfaceName The name of the network interface.
     * @param options The options parameters.
     */
    listVirtualMachineScaleSetIpConfigurations(resourceGroupName: string, virtualMachineScaleSetName: string, virtualmachineIndex: string, networkInterfaceName: string, options?: NetworkInterfacesListVirtualMachineScaleSetIpConfigurationsOptionalParams): PagedAsyncIterableIterator<NetworkInterfaceIPConfiguration>;
    /**
     * Deletes the specified network interface.
     * @param resourceGroupName The name of the resource group.
     * @param networkInterfaceName The name of the network interface.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, networkInterfaceName: string, options?: NetworkInterfacesDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the specified network interface.
     * @param resourceGroupName The name of the resource group.
     * @param networkInterfaceName The name of the network interface.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, networkInterfaceName: string, options?: NetworkInterfacesDeleteOptionalParams): Promise<void>;
    /**
     * Gets information about the specified network interface.
     * @param resourceGroupName The name of the resource group.
     * @param networkInterfaceName The name of the network interface.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, networkInterfaceName: string, options?: NetworkInterfacesGetOptionalParams): Promise<NetworkInterfacesGetResponse>;
    /**
     * Creates or updates a network interface.
     * @param resourceGroupName The name of the resource group.
     * @param networkInterfaceName The name of the network interface.
     * @param parameters Parameters supplied to the create or update network interface operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, networkInterfaceName: string, parameters: NetworkInterface, options?: NetworkInterfacesCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<NetworkInterfacesCreateOrUpdateResponse>, NetworkInterfacesCreateOrUpdateResponse>>;
    /**
     * Creates or updates a network interface.
     * @param resourceGroupName The name of the resource group.
     * @param networkInterfaceName The name of the network interface.
     * @param parameters Parameters supplied to the create or update network interface operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, networkInterfaceName: string, parameters: NetworkInterface, options?: NetworkInterfacesCreateOrUpdateOptionalParams): Promise<NetworkInterfacesCreateOrUpdateResponse>;
    /**
     * Updates a network interface tags.
     * @param resourceGroupName The name of the resource group.
     * @param networkInterfaceName The name of the network interface.
     * @param parameters Parameters supplied to update network interface tags.
     * @param options The options parameters.
     */
    updateTags(resourceGroupName: string, networkInterfaceName: string, parameters: TagsObject, options?: NetworkInterfacesUpdateTagsOptionalParams): Promise<NetworkInterfacesUpdateTagsResponse>;
    /**
     * Gets all route tables applied to a network interface.
     * @param resourceGroupName The name of the resource group.
     * @param networkInterfaceName The name of the network interface.
     * @param options The options parameters.
     */
    beginGetEffectiveRouteTable(resourceGroupName: string, networkInterfaceName: string, options?: NetworkInterfacesGetEffectiveRouteTableOptionalParams): Promise<PollerLike<PollOperationState<NetworkInterfacesGetEffectiveRouteTableResponse>, NetworkInterfacesGetEffectiveRouteTableResponse>>;
    /**
     * Gets all route tables applied to a network interface.
     * @param resourceGroupName The name of the resource group.
     * @param networkInterfaceName The name of the network interface.
     * @param options The options parameters.
     */
    beginGetEffectiveRouteTableAndWait(resourceGroupName: string, networkInterfaceName: string, options?: NetworkInterfacesGetEffectiveRouteTableOptionalParams): Promise<NetworkInterfacesGetEffectiveRouteTableResponse>;
    /**
     * Gets all network security groups applied to a network interface.
     * @param resourceGroupName The name of the resource group.
     * @param networkInterfaceName The name of the network interface.
     * @param options The options parameters.
     */
    beginListEffectiveNetworkSecurityGroups(resourceGroupName: string, networkInterfaceName: string, options?: NetworkInterfacesListEffectiveNetworkSecurityGroupsOptionalParams): Promise<PollerLike<PollOperationState<NetworkInterfacesListEffectiveNetworkSecurityGroupsResponse>, NetworkInterfacesListEffectiveNetworkSecurityGroupsResponse>>;
    /**
     * Gets all network security groups applied to a network interface.
     * @param resourceGroupName The name of the resource group.
     * @param networkInterfaceName The name of the network interface.
     * @param options The options parameters.
     */
    beginListEffectiveNetworkSecurityGroupsAndWait(resourceGroupName: string, networkInterfaceName: string, options?: NetworkInterfacesListEffectiveNetworkSecurityGroupsOptionalParams): Promise<NetworkInterfacesListEffectiveNetworkSecurityGroupsResponse>;
    /**
     * Get the specified network interface in a virtual machine scale set.
     * @param resourceGroupName The name of the resource group.
     * @param virtualMachineScaleSetName The name of the virtual machine scale set.
     * @param virtualmachineIndex The virtual machine index.
     * @param networkInterfaceName The name of the network interface.
     * @param options The options parameters.
     */
    getVirtualMachineScaleSetNetworkInterface(resourceGroupName: string, virtualMachineScaleSetName: string, virtualmachineIndex: string, networkInterfaceName: string, options?: NetworkInterfacesGetVirtualMachineScaleSetNetworkInterfaceOptionalParams): Promise<NetworkInterfacesGetVirtualMachineScaleSetNetworkInterfaceResponse>;
    /**
     * Get the specified network interface ip configuration in a virtual machine scale set.
     * @param resourceGroupName The name of the resource group.
     * @param virtualMachineScaleSetName The name of the virtual machine scale set.
     * @param virtualmachineIndex The virtual machine index.
     * @param networkInterfaceName The name of the network interface.
     * @param ipConfigurationName The name of the ip configuration.
     * @param options The options parameters.
     */
    getVirtualMachineScaleSetIpConfiguration(resourceGroupName: string, virtualMachineScaleSetName: string, virtualmachineIndex: string, networkInterfaceName: string, ipConfigurationName: string, options?: NetworkInterfacesGetVirtualMachineScaleSetIpConfigurationOptionalParams): Promise<NetworkInterfacesGetVirtualMachineScaleSetIpConfigurationResponse>;
}

/** Optional parameters. */
export declare interface NetworkInterfacesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type NetworkInterfacesCreateOrUpdateResponse = NetworkInterface;

/** Optional parameters. */
export declare interface NetworkInterfacesDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface NetworkInterfacesGetEffectiveRouteTableOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the getEffectiveRouteTable operation. */
export declare type NetworkInterfacesGetEffectiveRouteTableResponse = EffectiveRouteListResult;

/** Optional parameters. */
export declare interface NetworkInterfacesGetOptionalParams extends coreClient.OperationOptions {
    /** Expands referenced resources. */
    expand?: string;
}

/** Contains response data for the get operation. */
export declare type NetworkInterfacesGetResponse = NetworkInterface;

/** Optional parameters. */
export declare interface NetworkInterfacesGetVirtualMachineScaleSetIpConfigurationOptionalParams extends coreClient.OperationOptions {
    /** Expands referenced resources. */
    expand?: string;
}

/** Contains response data for the getVirtualMachineScaleSetIpConfiguration operation. */
export declare type NetworkInterfacesGetVirtualMachineScaleSetIpConfigurationResponse = NetworkInterfaceIPConfiguration;

/** Optional parameters. */
export declare interface NetworkInterfacesGetVirtualMachineScaleSetNetworkInterfaceOptionalParams extends coreClient.OperationOptions {
    /** Expands referenced resources. */
    expand?: string;
}

/** Contains response data for the getVirtualMachineScaleSetNetworkInterface operation. */
export declare type NetworkInterfacesGetVirtualMachineScaleSetNetworkInterfaceResponse = NetworkInterface;

/** Optional parameters. */
export declare interface NetworkInterfacesListAllNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAllNext operation. */
export declare type NetworkInterfacesListAllNextResponse = NetworkInterfaceListResult;

/** Optional parameters. */
export declare interface NetworkInterfacesListAllOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAll operation. */
export declare type NetworkInterfacesListAllResponse = NetworkInterfaceListResult;

/** Optional parameters. */
export declare interface NetworkInterfacesListEffectiveNetworkSecurityGroupsOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the listEffectiveNetworkSecurityGroups operation. */
export declare type NetworkInterfacesListEffectiveNetworkSecurityGroupsResponse = EffectiveNetworkSecurityGroupListResult;

/** Optional parameters. */
export declare interface NetworkInterfacesListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type NetworkInterfacesListNextResponse = NetworkInterfaceListResult;

/** Optional parameters. */
export declare interface NetworkInterfacesListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type NetworkInterfacesListResponse = NetworkInterfaceListResult;

/** Optional parameters. */
export declare interface NetworkInterfacesListVirtualMachineScaleSetIpConfigurationsNextOptionalParams extends coreClient.OperationOptions {
    /** Expands referenced resources. */
    expand?: string;
}

/** Contains response data for the listVirtualMachineScaleSetIpConfigurationsNext operation. */
export declare type NetworkInterfacesListVirtualMachineScaleSetIpConfigurationsNextResponse = NetworkInterfaceIPConfigurationListResult;

/** Optional parameters. */
export declare interface NetworkInterfacesListVirtualMachineScaleSetIpConfigurationsOptionalParams extends coreClient.OperationOptions {
    /** Expands referenced resources. */
    expand?: string;
}

/** Contains response data for the listVirtualMachineScaleSetIpConfigurations operation. */
export declare type NetworkInterfacesListVirtualMachineScaleSetIpConfigurationsResponse = NetworkInterfaceIPConfigurationListResult;

/** Optional parameters. */
export declare interface NetworkInterfacesListVirtualMachineScaleSetNetworkInterfacesNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listVirtualMachineScaleSetNetworkInterfacesNext operation. */
export declare type NetworkInterfacesListVirtualMachineScaleSetNetworkInterfacesNextResponse = NetworkInterfaceListResult;

/** Optional parameters. */
export declare interface NetworkInterfacesListVirtualMachineScaleSetNetworkInterfacesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listVirtualMachineScaleSetNetworkInterfaces operation. */
export declare type NetworkInterfacesListVirtualMachineScaleSetNetworkInterfacesResponse = NetworkInterfaceListResult;

/** Optional parameters. */
export declare interface NetworkInterfacesListVirtualMachineScaleSetVMNetworkInterfacesNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listVirtualMachineScaleSetVMNetworkInterfacesNext operation. */
export declare type NetworkInterfacesListVirtualMachineScaleSetVMNetworkInterfacesNextResponse = NetworkInterfaceListResult;

/** Optional parameters. */
export declare interface NetworkInterfacesListVirtualMachineScaleSetVMNetworkInterfacesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listVirtualMachineScaleSetVMNetworkInterfaces operation. */
export declare type NetworkInterfacesListVirtualMachineScaleSetVMNetworkInterfacesResponse = NetworkInterfaceListResult;

/** Optional parameters. */
export declare interface NetworkInterfacesUpdateTagsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateTags operation. */
export declare type NetworkInterfacesUpdateTagsResponse = NetworkInterface;

/** Tap configuration in a Network Interface. */
export declare type NetworkInterfaceTapConfiguration = SubResource & {
    /** The name of the resource that is unique within a resource group. This name can be used to access the resource. */
    name?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /**
     * Sub Resource type.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /** The reference to the Virtual Network Tap resource. */
    virtualNetworkTap?: VirtualNetworkTap;
    /**
     * The provisioning state of the network interface tap configuration resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** Response for list tap configurations API service call. */
export declare interface NetworkInterfaceTapConfigurationListResult {
    /** A list of tap configurations. */
    value?: NetworkInterfaceTapConfiguration[];
    /**
     * The URL to get the next set of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Interface representing a NetworkInterfaceTapConfigurations. */
export declare interface NetworkInterfaceTapConfigurations {
    /**
     * Get all Tap configurations in a network interface.
     * @param resourceGroupName The name of the resource group.
     * @param networkInterfaceName The name of the network interface.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, networkInterfaceName: string, options?: NetworkInterfaceTapConfigurationsListOptionalParams): PagedAsyncIterableIterator<NetworkInterfaceTapConfiguration>;
    /**
     * Deletes the specified tap configuration from the NetworkInterface.
     * @param resourceGroupName The name of the resource group.
     * @param networkInterfaceName The name of the network interface.
     * @param tapConfigurationName The name of the tap configuration.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, networkInterfaceName: string, tapConfigurationName: string, options?: NetworkInterfaceTapConfigurationsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the specified tap configuration from the NetworkInterface.
     * @param resourceGroupName The name of the resource group.
     * @param networkInterfaceName The name of the network interface.
     * @param tapConfigurationName The name of the tap configuration.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, networkInterfaceName: string, tapConfigurationName: string, options?: NetworkInterfaceTapConfigurationsDeleteOptionalParams): Promise<void>;
    /**
     * Get the specified tap configuration on a network interface.
     * @param resourceGroupName The name of the resource group.
     * @param networkInterfaceName The name of the network interface.
     * @param tapConfigurationName The name of the tap configuration.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, networkInterfaceName: string, tapConfigurationName: string, options?: NetworkInterfaceTapConfigurationsGetOptionalParams): Promise<NetworkInterfaceTapConfigurationsGetResponse>;
    /**
     * Creates or updates a Tap configuration in the specified NetworkInterface.
     * @param resourceGroupName The name of the resource group.
     * @param networkInterfaceName The name of the network interface.
     * @param tapConfigurationName The name of the tap configuration.
     * @param tapConfigurationParameters Parameters supplied to the create or update tap configuration
     *                                   operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, networkInterfaceName: string, tapConfigurationName: string, tapConfigurationParameters: NetworkInterfaceTapConfiguration, options?: NetworkInterfaceTapConfigurationsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<NetworkInterfaceTapConfigurationsCreateOrUpdateResponse>, NetworkInterfaceTapConfigurationsCreateOrUpdateResponse>>;
    /**
     * Creates or updates a Tap configuration in the specified NetworkInterface.
     * @param resourceGroupName The name of the resource group.
     * @param networkInterfaceName The name of the network interface.
     * @param tapConfigurationName The name of the tap configuration.
     * @param tapConfigurationParameters Parameters supplied to the create or update tap configuration
     *                                   operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, networkInterfaceName: string, tapConfigurationName: string, tapConfigurationParameters: NetworkInterfaceTapConfiguration, options?: NetworkInterfaceTapConfigurationsCreateOrUpdateOptionalParams): Promise<NetworkInterfaceTapConfigurationsCreateOrUpdateResponse>;
}

/** Optional parameters. */
export declare interface NetworkInterfaceTapConfigurationsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type NetworkInterfaceTapConfigurationsCreateOrUpdateResponse = NetworkInterfaceTapConfiguration;

/** Optional parameters. */
export declare interface NetworkInterfaceTapConfigurationsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface NetworkInterfaceTapConfigurationsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type NetworkInterfaceTapConfigurationsGetResponse = NetworkInterfaceTapConfiguration;

/** Optional parameters. */
export declare interface NetworkInterfaceTapConfigurationsListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type NetworkInterfaceTapConfigurationsListNextResponse = NetworkInterfaceTapConfigurationListResult;

/** Optional parameters. */
export declare interface NetworkInterfaceTapConfigurationsListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type NetworkInterfaceTapConfigurationsListResponse = NetworkInterfaceTapConfigurationListResult;

export declare class NetworkManagementClient extends coreClient.ServiceClient {
    $host: string;
    subscriptionId: string;
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
    beginListPutBastionShareableLinkAndWait(resourceGroupName: string, bastionHostName: string, bslRequest: BastionShareableLinkListRequest, options?: PutBastionShareableLinkOptionalParams): PagedAsyncIterableIterator<BastionShareableLink>;
    private putBastionShareableLinkPagingPage;
    private putBastionShareableLinkPagingAll;
    /**
     * Return the Bastion Shareable Links for all the VMs specified in the request.
     * @param resourceGroupName The name of the resource group.
     * @param bastionHostName The name of the Bastion Host.
     * @param bslRequest Post request for all the Bastion Shareable Link endpoints.
     * @param options The options parameters.
     */
    listBastionShareableLink(resourceGroupName: string, bastionHostName: string, bslRequest: BastionShareableLinkListRequest, options?: GetBastionShareableLinkOptionalParams): PagedAsyncIterableIterator<BastionShareableLink>;
    private getBastionShareableLinkPagingPage;
    private getBastionShareableLinkPagingAll;
    /**
     * Returns the list of currently active sessions on the Bastion.
     * @param resourceGroupName The name of the resource group.
     * @param bastionHostName The name of the Bastion Host.
     * @param options The options parameters.
     */
    beginListActiveSessionsAndWait(resourceGroupName: string, bastionHostName: string, options?: GetActiveSessionsOptionalParams): PagedAsyncIterableIterator<BastionActiveSession>;
    private getActiveSessionsPagingPage;
    private getActiveSessionsPagingAll;
    /**
     * Returns the list of currently active sessions on the Bastion.
     * @param resourceGroupName The name of the resource group.
     * @param bastionHostName The name of the Bastion Host.
     * @param sessionIds The list of sessionids to disconnect.
     * @param options The options parameters.
     */
    listDisconnectActiveSessions(resourceGroupName: string, bastionHostName: string, sessionIds: SessionIds, options?: DisconnectActiveSessionsOptionalParams): PagedAsyncIterableIterator<BastionSessionState>;
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
    beginDeleteBastionShareableLink(resourceGroupName: string, bastionHostName: string, bslRequest: BastionShareableLinkListRequest, options?: DeleteBastionShareableLinkOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the Bastion Shareable Links for all the VMs specified in the request.
     * @param resourceGroupName The name of the resource group.
     * @param bastionHostName The name of the Bastion Host.
     * @param bslRequest Post request for all the Bastion Shareable Link endpoints.
     * @param options The options parameters.
     */
    beginDeleteBastionShareableLinkAndWait(resourceGroupName: string, bastionHostName: string, bslRequest: BastionShareableLinkListRequest, options?: DeleteBastionShareableLinkOptionalParams): Promise<void>;
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
    checkDnsNameAvailability(location: string, domainNameLabel: string, options?: CheckDnsNameAvailabilityOptionalParams): Promise<CheckDnsNameAvailabilityResponse>;
    /**
     * Gives the supported security providers for the virtual wan.
     * @param resourceGroupName The resource group name.
     * @param virtualWANName The name of the VirtualWAN for which supported security providers are needed.
     * @param options The options parameters.
     */
    supportedSecurityProviders(resourceGroupName: string, virtualWANName: string, options?: SupportedSecurityProvidersOptionalParams): Promise<SupportedSecurityProvidersResponse>;
    /**
     * Generates a unique VPN profile for P2S clients for VirtualWan and associated VpnServerConfiguration
     * combination in the specified resource group.
     * @param resourceGroupName The resource group name.
     * @param virtualWANName The name of the VirtualWAN whose associated VpnServerConfigurations is needed.
     * @param vpnClientParams Parameters supplied to the generate VirtualWan VPN profile generation
     *                        operation.
     * @param options The options parameters.
     */
    beginGeneratevirtualwanvpnserverconfigurationvpnprofile(resourceGroupName: string, virtualWANName: string, vpnClientParams: VirtualWanVpnProfileParameters, options?: GeneratevirtualwanvpnserverconfigurationvpnprofileOptionalParams): Promise<PollerLike<PollOperationState<GeneratevirtualwanvpnserverconfigurationvpnprofileResponse>, GeneratevirtualwanvpnserverconfigurationvpnprofileResponse>>;
    /**
     * Generates a unique VPN profile for P2S clients for VirtualWan and associated VpnServerConfiguration
     * combination in the specified resource group.
     * @param resourceGroupName The resource group name.
     * @param virtualWANName The name of the VirtualWAN whose associated VpnServerConfigurations is needed.
     * @param vpnClientParams Parameters supplied to the generate VirtualWan VPN profile generation
     *                        operation.
     * @param options The options parameters.
     */
    beginGeneratevirtualwanvpnserverconfigurationvpnprofileAndWait(resourceGroupName: string, virtualWANName: string, vpnClientParams: VirtualWanVpnProfileParameters, options?: GeneratevirtualwanvpnserverconfigurationvpnprofileOptionalParams): Promise<GeneratevirtualwanvpnserverconfigurationvpnprofileResponse>;
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

/** Optional parameters. */
export declare interface NetworkManagementClientOptionalParams extends coreClient.ServiceClientOptions {
    /** server parameter */
    $host?: string;
    /** Overrides client endpoint. */
    endpoint?: string;
}

/**
 * Defines values for NetworkOperationStatus. \
 * {@link KnownNetworkOperationStatus} can be used interchangeably with NetworkOperationStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **InProgress** \
 * **Succeeded** \
 * **Failed**
 */
export declare type NetworkOperationStatus = string;

/** Network profile resource. */
export declare type NetworkProfile = Resource & {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /**
     * List of child container network interfaces.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly containerNetworkInterfaces?: ContainerNetworkInterface[];
    /** List of chid container network interface configurations. */
    containerNetworkInterfaceConfigurations?: ContainerNetworkInterfaceConfiguration[];
    /**
     * The resource GUID property of the network profile resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly resourceGuid?: string;
    /**
     * The provisioning state of the network profile resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** Response for ListNetworkProfiles API service call. */
export declare interface NetworkProfileListResult {
    /** A list of network profiles that exist in a resource group. */
    value?: NetworkProfile[];
    /** The URL to get the next set of results. */
    nextLink?: string;
}

/** Interface representing a NetworkProfiles. */
export declare interface NetworkProfiles {
    /**
     * Gets all the network profiles in a subscription.
     * @param options The options parameters.
     */
    listAll(options?: NetworkProfilesListAllOptionalParams): PagedAsyncIterableIterator<NetworkProfile>;
    /**
     * Gets all network profiles in a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, options?: NetworkProfilesListOptionalParams): PagedAsyncIterableIterator<NetworkProfile>;
    /**
     * Deletes the specified network profile.
     * @param resourceGroupName The name of the resource group.
     * @param networkProfileName The name of the NetworkProfile.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, networkProfileName: string, options?: NetworkProfilesDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the specified network profile.
     * @param resourceGroupName The name of the resource group.
     * @param networkProfileName The name of the NetworkProfile.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, networkProfileName: string, options?: NetworkProfilesDeleteOptionalParams): Promise<void>;
    /**
     * Gets the specified network profile in a specified resource group.
     * @param resourceGroupName The name of the resource group.
     * @param networkProfileName The name of the public IP prefix.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, networkProfileName: string, options?: NetworkProfilesGetOptionalParams): Promise<NetworkProfilesGetResponse>;
    /**
     * Creates or updates a network profile.
     * @param resourceGroupName The name of the resource group.
     * @param networkProfileName The name of the network profile.
     * @param parameters Parameters supplied to the create or update network profile operation.
     * @param options The options parameters.
     */
    createOrUpdate(resourceGroupName: string, networkProfileName: string, parameters: NetworkProfile, options?: NetworkProfilesCreateOrUpdateOptionalParams): Promise<NetworkProfilesCreateOrUpdateResponse>;
    /**
     * Updates network profile tags.
     * @param resourceGroupName The name of the resource group.
     * @param networkProfileName The name of the network profile.
     * @param parameters Parameters supplied to update network profile tags.
     * @param options The options parameters.
     */
    updateTags(resourceGroupName: string, networkProfileName: string, parameters: TagsObject, options?: NetworkProfilesUpdateTagsOptionalParams): Promise<NetworkProfilesUpdateTagsResponse>;
}

/** Optional parameters. */
export declare interface NetworkProfilesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdate operation. */
export declare type NetworkProfilesCreateOrUpdateResponse = NetworkProfile;

/** Optional parameters. */
export declare interface NetworkProfilesDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface NetworkProfilesGetOptionalParams extends coreClient.OperationOptions {
    /** Expands referenced resources. */
    expand?: string;
}

/** Contains response data for the get operation. */
export declare type NetworkProfilesGetResponse = NetworkProfile;

/** Optional parameters. */
export declare interface NetworkProfilesListAllNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAllNext operation. */
export declare type NetworkProfilesListAllNextResponse = NetworkProfileListResult;

/** Optional parameters. */
export declare interface NetworkProfilesListAllOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAll operation. */
export declare type NetworkProfilesListAllResponse = NetworkProfileListResult;

/** Optional parameters. */
export declare interface NetworkProfilesListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type NetworkProfilesListNextResponse = NetworkProfileListResult;

/** Optional parameters. */
export declare interface NetworkProfilesListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type NetworkProfilesListResponse = NetworkProfileListResult;

/** Optional parameters. */
export declare interface NetworkProfilesUpdateTagsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateTags operation. */
export declare type NetworkProfilesUpdateTagsResponse = NetworkProfile;

/** Rule condition of type network. */
export declare type NetworkRuleCondition = FirewallPolicyRuleCondition & {
    /** Polymorphic discriminator, which specifies the different types this object can be */
    ruleConditionType: "NetworkRuleCondition";
    /** Array of FirewallPolicyRuleConditionNetworkProtocols. */
    ipProtocols?: FirewallPolicyRuleConditionNetworkProtocol[];
    /** List of source IP addresses for this rule. */
    sourceAddresses?: string[];
    /** List of destination IP addresses or Service Tags. */
    destinationAddresses?: string[];
    /** List of destination ports. */
    destinationPorts?: string[];
    /** List of source IpGroups for this rule. */
    sourceIpGroups?: string[];
    /** List of destination IpGroups for this rule. */
    destinationIpGroups?: string[];
};

/** NetworkSecurityGroup resource. */
export declare type NetworkSecurityGroup = Resource & {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /** A collection of security rules of the network security group. */
    securityRules?: SecurityRule[];
    /**
     * The default security rules of network security group.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly defaultSecurityRules?: SecurityRule[];
    /**
     * A collection of references to network interfaces.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly networkInterfaces?: NetworkInterface[];
    /**
     * A collection of references to subnets.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly subnets?: Subnet[];
    /**
     * A collection of references to flow log resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly flowLogs?: FlowLog[];
    /**
     * The resource GUID property of the network security group resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly resourceGuid?: string;
    /**
     * The provisioning state of the network security group resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** Response for ListNetworkSecurityGroups API service call. */
export declare interface NetworkSecurityGroupListResult {
    /** A list of NetworkSecurityGroup resources. */
    value?: NetworkSecurityGroup[];
    /** The URL to get the next set of results. */
    nextLink?: string;
}

/** Network configuration diagnostic result corresponded provided traffic query. */
export declare interface NetworkSecurityGroupResult {
    /** The network traffic is allowed or denied. */
    securityRuleAccessResult?: SecurityRuleAccess;
    /**
     * List of results network security groups diagnostic.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly evaluatedNetworkSecurityGroups?: EvaluatedNetworkSecurityGroup[];
}

/** Interface representing a NetworkSecurityGroups. */
export declare interface NetworkSecurityGroups {
    /**
     * Gets all network security groups in a subscription.
     * @param options The options parameters.
     */
    listAll(options?: NetworkSecurityGroupsListAllOptionalParams): PagedAsyncIterableIterator<NetworkSecurityGroup>;
    /**
     * Gets all network security groups in a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, options?: NetworkSecurityGroupsListOptionalParams): PagedAsyncIterableIterator<NetworkSecurityGroup>;
    /**
     * Deletes the specified network security group.
     * @param resourceGroupName The name of the resource group.
     * @param networkSecurityGroupName The name of the network security group.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, networkSecurityGroupName: string, options?: NetworkSecurityGroupsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the specified network security group.
     * @param resourceGroupName The name of the resource group.
     * @param networkSecurityGroupName The name of the network security group.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, networkSecurityGroupName: string, options?: NetworkSecurityGroupsDeleteOptionalParams): Promise<void>;
    /**
     * Gets the specified network security group.
     * @param resourceGroupName The name of the resource group.
     * @param networkSecurityGroupName The name of the network security group.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, networkSecurityGroupName: string, options?: NetworkSecurityGroupsGetOptionalParams): Promise<NetworkSecurityGroupsGetResponse>;
    /**
     * Creates or updates a network security group in the specified resource group.
     * @param resourceGroupName The name of the resource group.
     * @param networkSecurityGroupName The name of the network security group.
     * @param parameters Parameters supplied to the create or update network security group operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, networkSecurityGroupName: string, parameters: NetworkSecurityGroup, options?: NetworkSecurityGroupsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<NetworkSecurityGroupsCreateOrUpdateResponse>, NetworkSecurityGroupsCreateOrUpdateResponse>>;
    /**
     * Creates or updates a network security group in the specified resource group.
     * @param resourceGroupName The name of the resource group.
     * @param networkSecurityGroupName The name of the network security group.
     * @param parameters Parameters supplied to the create or update network security group operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, networkSecurityGroupName: string, parameters: NetworkSecurityGroup, options?: NetworkSecurityGroupsCreateOrUpdateOptionalParams): Promise<NetworkSecurityGroupsCreateOrUpdateResponse>;
    /**
     * Updates a network security group tags.
     * @param resourceGroupName The name of the resource group.
     * @param networkSecurityGroupName The name of the network security group.
     * @param parameters Parameters supplied to update network security group tags.
     * @param options The options parameters.
     */
    updateTags(resourceGroupName: string, networkSecurityGroupName: string, parameters: TagsObject, options?: NetworkSecurityGroupsUpdateTagsOptionalParams): Promise<NetworkSecurityGroupsUpdateTagsResponse>;
}

/** Optional parameters. */
export declare interface NetworkSecurityGroupsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type NetworkSecurityGroupsCreateOrUpdateResponse = NetworkSecurityGroup;

/** Optional parameters. */
export declare interface NetworkSecurityGroupsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface NetworkSecurityGroupsGetOptionalParams extends coreClient.OperationOptions {
    /** Expands referenced resources. */
    expand?: string;
}

/** Contains response data for the get operation. */
export declare type NetworkSecurityGroupsGetResponse = NetworkSecurityGroup;

/** Optional parameters. */
export declare interface NetworkSecurityGroupsListAllNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAllNext operation. */
export declare type NetworkSecurityGroupsListAllNextResponse = NetworkSecurityGroupListResult;

/** Optional parameters. */
export declare interface NetworkSecurityGroupsListAllOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAll operation. */
export declare type NetworkSecurityGroupsListAllResponse = NetworkSecurityGroupListResult;

/** Optional parameters. */
export declare interface NetworkSecurityGroupsListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type NetworkSecurityGroupsListNextResponse = NetworkSecurityGroupListResult;

/** Optional parameters. */
export declare interface NetworkSecurityGroupsListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type NetworkSecurityGroupsListResponse = NetworkSecurityGroupListResult;

/** Optional parameters. */
export declare interface NetworkSecurityGroupsUpdateTagsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateTags operation. */
export declare type NetworkSecurityGroupsUpdateTagsResponse = NetworkSecurityGroup;

/** Network security rules evaluation result. */
export declare interface NetworkSecurityRulesEvaluationResult {
    /** Name of the network security rule. */
    name?: string;
    /** Value indicating whether protocol is matched. */
    protocolMatched?: boolean;
    /** Value indicating whether source is matched. */
    sourceMatched?: boolean;
    /** Value indicating whether source port is matched. */
    sourcePortMatched?: boolean;
    /** Value indicating whether destination is matched. */
    destinationMatched?: boolean;
    /** Value indicating whether destination port is matched. */
    destinationPortMatched?: boolean;
}

/** NetworkVirtualAppliance Resource. */
export declare type NetworkVirtualAppliance = Resource & {
    /** The service principal that has read access to cloud-init and config blob. */
    identity?: ManagedServiceIdentity;
    /** Network Virtual Appliance SKU. */
    sku?: VirtualApplianceSkuProperties;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /** BootStrapConfigurationBlob storage URLs. */
    bootStrapConfigurationBlob?: string[];
    /** The Virtual Hub where Network Virtual Appliance is being deployed. */
    virtualHub?: SubResource;
    /** CloudInitConfigurationBlob storage URLs. */
    cloudInitConfigurationBlob?: string[];
    /** VirtualAppliance ASN. */
    virtualApplianceAsn?: number;
    /**
     * List of Virtual Appliance Network Interfaces.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly virtualApplianceNics?: VirtualApplianceNicProperties[];
    /**
     * The provisioning state of the resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** Response for ListNetworkVirtualAppliances API service call. */
export declare interface NetworkVirtualApplianceListResult {
    /** List of Network Virtual Appliances. */
    value?: NetworkVirtualAppliance[];
    /** URL to get the next set of results. */
    nextLink?: string;
}

/** Interface representing a NetworkVirtualAppliances. */
export declare interface NetworkVirtualAppliances {
    /**
     * Lists all Network Virtual Appliances in a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: NetworkVirtualAppliancesListByResourceGroupOptionalParams): PagedAsyncIterableIterator<NetworkVirtualAppliance>;
    /**
     * Gets all Network Virtual Appliances in a subscription.
     * @param options The options parameters.
     */
    list(options?: NetworkVirtualAppliancesListOptionalParams): PagedAsyncIterableIterator<NetworkVirtualAppliance>;
    /**
     * Deletes the specified Network Virtual Appliance.
     * @param resourceGroupName The name of the resource group.
     * @param networkVirtualApplianceName The name of Network Virtual Appliance.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, networkVirtualApplianceName: string, options?: NetworkVirtualAppliancesDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the specified Network Virtual Appliance.
     * @param resourceGroupName The name of the resource group.
     * @param networkVirtualApplianceName The name of Network Virtual Appliance.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, networkVirtualApplianceName: string, options?: NetworkVirtualAppliancesDeleteOptionalParams): Promise<void>;
    /**
     * Gets the specified Network Virtual Appliance.
     * @param resourceGroupName The name of the resource group.
     * @param networkVirtualApplianceName The name of Network Virtual Appliance.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, networkVirtualApplianceName: string, options?: NetworkVirtualAppliancesGetOptionalParams): Promise<NetworkVirtualAppliancesGetResponse>;
    /**
     * Updates a Network Virtual Appliance.
     * @param resourceGroupName The resource group name of Network Virtual Appliance.
     * @param networkVirtualApplianceName The name of Network Virtual Appliance being updated.
     * @param parameters Parameters supplied to Update Network Virtual Appliance Tags.
     * @param options The options parameters.
     */
    updateTags(resourceGroupName: string, networkVirtualApplianceName: string, parameters: TagsObject, options?: NetworkVirtualAppliancesUpdateTagsOptionalParams): Promise<NetworkVirtualAppliancesUpdateTagsResponse>;
    /**
     * Creates or updates the specified Network Virtual Appliance.
     * @param resourceGroupName The name of the resource group.
     * @param networkVirtualApplianceName The name of Network Virtual Appliance.
     * @param parameters Parameters supplied to the create or update Network Virtual Appliance.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, networkVirtualApplianceName: string, parameters: NetworkVirtualAppliance, options?: NetworkVirtualAppliancesCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<NetworkVirtualAppliancesCreateOrUpdateResponse>, NetworkVirtualAppliancesCreateOrUpdateResponse>>;
    /**
     * Creates or updates the specified Network Virtual Appliance.
     * @param resourceGroupName The name of the resource group.
     * @param networkVirtualApplianceName The name of Network Virtual Appliance.
     * @param parameters Parameters supplied to the create or update Network Virtual Appliance.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, networkVirtualApplianceName: string, parameters: NetworkVirtualAppliance, options?: NetworkVirtualAppliancesCreateOrUpdateOptionalParams): Promise<NetworkVirtualAppliancesCreateOrUpdateResponse>;
}

/** Optional parameters. */
export declare interface NetworkVirtualAppliancesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type NetworkVirtualAppliancesCreateOrUpdateResponse = NetworkVirtualAppliance;

/** Optional parameters. */
export declare interface NetworkVirtualAppliancesDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface NetworkVirtualAppliancesGetOptionalParams extends coreClient.OperationOptions {
    /** Expands referenced resources. */
    expand?: string;
}

/** Contains response data for the get operation. */
export declare type NetworkVirtualAppliancesGetResponse = NetworkVirtualAppliance;

/** Optional parameters. */
export declare interface NetworkVirtualAppliancesListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNext operation. */
export declare type NetworkVirtualAppliancesListByResourceGroupNextResponse = NetworkVirtualApplianceListResult;

/** Optional parameters. */
export declare interface NetworkVirtualAppliancesListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroup operation. */
export declare type NetworkVirtualAppliancesListByResourceGroupResponse = NetworkVirtualApplianceListResult;

/** Optional parameters. */
export declare interface NetworkVirtualAppliancesListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type NetworkVirtualAppliancesListNextResponse = NetworkVirtualApplianceListResult;

/** Optional parameters. */
export declare interface NetworkVirtualAppliancesListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type NetworkVirtualAppliancesListResponse = NetworkVirtualApplianceListResult;

/** Optional parameters. */
export declare interface NetworkVirtualAppliancesUpdateTagsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateTags operation. */
export declare type NetworkVirtualAppliancesUpdateTagsResponse = NetworkVirtualAppliance;

/** Network watcher in a resource group. */
export declare type NetworkWatcher = Resource & {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /**
     * The provisioning state of the network watcher resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** Response for ListNetworkWatchers API service call. */
export declare interface NetworkWatcherListResult {
    /** List of network watcher resources. */
    value?: NetworkWatcher[];
}

/** Interface representing a NetworkWatchers. */
export declare interface NetworkWatchers {
    /**
     * Gets all network watchers by resource group.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, options?: NetworkWatchersListOptionalParams): PagedAsyncIterableIterator<NetworkWatcher>;
    /**
     * Gets all network watchers by subscription.
     * @param options The options parameters.
     */
    listAll(options?: NetworkWatchersListAllOptionalParams): PagedAsyncIterableIterator<NetworkWatcher>;
    /**
     * Creates or updates a network watcher in the specified resource group.
     * @param resourceGroupName The name of the resource group.
     * @param networkWatcherName The name of the network watcher.
     * @param parameters Parameters that define the network watcher resource.
     * @param options The options parameters.
     */
    createOrUpdate(resourceGroupName: string, networkWatcherName: string, parameters: NetworkWatcher, options?: NetworkWatchersCreateOrUpdateOptionalParams): Promise<NetworkWatchersCreateOrUpdateResponse>;
    /**
     * Gets the specified network watcher by resource group.
     * @param resourceGroupName The name of the resource group.
     * @param networkWatcherName The name of the network watcher.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, networkWatcherName: string, options?: NetworkWatchersGetOptionalParams): Promise<NetworkWatchersGetResponse>;
    /**
     * Deletes the specified network watcher resource.
     * @param resourceGroupName The name of the resource group.
     * @param networkWatcherName The name of the network watcher.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, networkWatcherName: string, options?: NetworkWatchersDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the specified network watcher resource.
     * @param resourceGroupName The name of the resource group.
     * @param networkWatcherName The name of the network watcher.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, networkWatcherName: string, options?: NetworkWatchersDeleteOptionalParams): Promise<void>;
    /**
     * Updates a network watcher tags.
     * @param resourceGroupName The name of the resource group.
     * @param networkWatcherName The name of the network watcher.
     * @param parameters Parameters supplied to update network watcher tags.
     * @param options The options parameters.
     */
    updateTags(resourceGroupName: string, networkWatcherName: string, parameters: TagsObject, options?: NetworkWatchersUpdateTagsOptionalParams): Promise<NetworkWatchersUpdateTagsResponse>;
    /**
     * Gets the current network topology by resource group.
     * @param resourceGroupName The name of the resource group.
     * @param networkWatcherName The name of the network watcher.
     * @param parameters Parameters that define the representation of topology.
     * @param options The options parameters.
     */
    getTopology(resourceGroupName: string, networkWatcherName: string, parameters: TopologyParameters, options?: NetworkWatchersGetTopologyOptionalParams): Promise<NetworkWatchersGetTopologyResponse>;
    /**
     * Verify IP flow from the specified VM to a location given the currently configured NSG rules.
     * @param resourceGroupName The name of the resource group.
     * @param networkWatcherName The name of the network watcher.
     * @param parameters Parameters that define the IP flow to be verified.
     * @param options The options parameters.
     */
    beginVerifyIPFlow(resourceGroupName: string, networkWatcherName: string, parameters: VerificationIPFlowParameters, options?: NetworkWatchersVerifyIPFlowOptionalParams): Promise<PollerLike<PollOperationState<NetworkWatchersVerifyIPFlowResponse>, NetworkWatchersVerifyIPFlowResponse>>;
    /**
     * Verify IP flow from the specified VM to a location given the currently configured NSG rules.
     * @param resourceGroupName The name of the resource group.
     * @param networkWatcherName The name of the network watcher.
     * @param parameters Parameters that define the IP flow to be verified.
     * @param options The options parameters.
     */
    beginVerifyIPFlowAndWait(resourceGroupName: string, networkWatcherName: string, parameters: VerificationIPFlowParameters, options?: NetworkWatchersVerifyIPFlowOptionalParams): Promise<NetworkWatchersVerifyIPFlowResponse>;
    /**
     * Gets the next hop from the specified VM.
     * @param resourceGroupName The name of the resource group.
     * @param networkWatcherName The name of the network watcher.
     * @param parameters Parameters that define the source and destination endpoint.
     * @param options The options parameters.
     */
    beginGetNextHop(resourceGroupName: string, networkWatcherName: string, parameters: NextHopParameters, options?: NetworkWatchersGetNextHopOptionalParams): Promise<PollerLike<PollOperationState<NetworkWatchersGetNextHopResponse>, NetworkWatchersGetNextHopResponse>>;
    /**
     * Gets the next hop from the specified VM.
     * @param resourceGroupName The name of the resource group.
     * @param networkWatcherName The name of the network watcher.
     * @param parameters Parameters that define the source and destination endpoint.
     * @param options The options parameters.
     */
    beginGetNextHopAndWait(resourceGroupName: string, networkWatcherName: string, parameters: NextHopParameters, options?: NetworkWatchersGetNextHopOptionalParams): Promise<NetworkWatchersGetNextHopResponse>;
    /**
     * Gets the configured and effective security group rules on the specified VM.
     * @param resourceGroupName The name of the resource group.
     * @param networkWatcherName The name of the network watcher.
     * @param parameters Parameters that define the VM to check security groups for.
     * @param options The options parameters.
     */
    beginGetVMSecurityRules(resourceGroupName: string, networkWatcherName: string, parameters: SecurityGroupViewParameters, options?: NetworkWatchersGetVMSecurityRulesOptionalParams): Promise<PollerLike<PollOperationState<NetworkWatchersGetVMSecurityRulesResponse>, NetworkWatchersGetVMSecurityRulesResponse>>;
    /**
     * Gets the configured and effective security group rules on the specified VM.
     * @param resourceGroupName The name of the resource group.
     * @param networkWatcherName The name of the network watcher.
     * @param parameters Parameters that define the VM to check security groups for.
     * @param options The options parameters.
     */
    beginGetVMSecurityRulesAndWait(resourceGroupName: string, networkWatcherName: string, parameters: SecurityGroupViewParameters, options?: NetworkWatchersGetVMSecurityRulesOptionalParams): Promise<NetworkWatchersGetVMSecurityRulesResponse>;
    /**
     * Initiate troubleshooting on a specified resource.
     * @param resourceGroupName The name of the resource group.
     * @param networkWatcherName The name of the network watcher resource.
     * @param parameters Parameters that define the resource to troubleshoot.
     * @param options The options parameters.
     */
    beginGetTroubleshooting(resourceGroupName: string, networkWatcherName: string, parameters: TroubleshootingParameters, options?: NetworkWatchersGetTroubleshootingOptionalParams): Promise<PollerLike<PollOperationState<NetworkWatchersGetTroubleshootingResponse>, NetworkWatchersGetTroubleshootingResponse>>;
    /**
     * Initiate troubleshooting on a specified resource.
     * @param resourceGroupName The name of the resource group.
     * @param networkWatcherName The name of the network watcher resource.
     * @param parameters Parameters that define the resource to troubleshoot.
     * @param options The options parameters.
     */
    beginGetTroubleshootingAndWait(resourceGroupName: string, networkWatcherName: string, parameters: TroubleshootingParameters, options?: NetworkWatchersGetTroubleshootingOptionalParams): Promise<NetworkWatchersGetTroubleshootingResponse>;
    /**
     * Get the last completed troubleshooting result on a specified resource.
     * @param resourceGroupName The name of the resource group.
     * @param networkWatcherName The name of the network watcher resource.
     * @param parameters Parameters that define the resource to query the troubleshooting result.
     * @param options The options parameters.
     */
    beginGetTroubleshootingResult(resourceGroupName: string, networkWatcherName: string, parameters: QueryTroubleshootingParameters, options?: NetworkWatchersGetTroubleshootingResultOptionalParams): Promise<PollerLike<PollOperationState<NetworkWatchersGetTroubleshootingResultResponse>, NetworkWatchersGetTroubleshootingResultResponse>>;
    /**
     * Get the last completed troubleshooting result on a specified resource.
     * @param resourceGroupName The name of the resource group.
     * @param networkWatcherName The name of the network watcher resource.
     * @param parameters Parameters that define the resource to query the troubleshooting result.
     * @param options The options parameters.
     */
    beginGetTroubleshootingResultAndWait(resourceGroupName: string, networkWatcherName: string, parameters: QueryTroubleshootingParameters, options?: NetworkWatchersGetTroubleshootingResultOptionalParams): Promise<NetworkWatchersGetTroubleshootingResultResponse>;
    /**
     * Configures flow log and traffic analytics (optional) on a specified resource.
     * @param resourceGroupName The name of the network watcher resource group.
     * @param networkWatcherName The name of the network watcher resource.
     * @param parameters Parameters that define the configuration of flow log.
     * @param options The options parameters.
     */
    beginSetFlowLogConfiguration(resourceGroupName: string, networkWatcherName: string, parameters: FlowLogInformation, options?: NetworkWatchersSetFlowLogConfigurationOptionalParams): Promise<PollerLike<PollOperationState<NetworkWatchersSetFlowLogConfigurationResponse>, NetworkWatchersSetFlowLogConfigurationResponse>>;
    /**
     * Configures flow log and traffic analytics (optional) on a specified resource.
     * @param resourceGroupName The name of the network watcher resource group.
     * @param networkWatcherName The name of the network watcher resource.
     * @param parameters Parameters that define the configuration of flow log.
     * @param options The options parameters.
     */
    beginSetFlowLogConfigurationAndWait(resourceGroupName: string, networkWatcherName: string, parameters: FlowLogInformation, options?: NetworkWatchersSetFlowLogConfigurationOptionalParams): Promise<NetworkWatchersSetFlowLogConfigurationResponse>;
    /**
     * Queries status of flow log and traffic analytics (optional) on a specified resource.
     * @param resourceGroupName The name of the network watcher resource group.
     * @param networkWatcherName The name of the network watcher resource.
     * @param parameters Parameters that define a resource to query flow log and traffic analytics
     *                   (optional) status.
     * @param options The options parameters.
     */
    beginGetFlowLogStatus(resourceGroupName: string, networkWatcherName: string, parameters: FlowLogStatusParameters, options?: NetworkWatchersGetFlowLogStatusOptionalParams): Promise<PollerLike<PollOperationState<NetworkWatchersGetFlowLogStatusResponse>, NetworkWatchersGetFlowLogStatusResponse>>;
    /**
     * Queries status of flow log and traffic analytics (optional) on a specified resource.
     * @param resourceGroupName The name of the network watcher resource group.
     * @param networkWatcherName The name of the network watcher resource.
     * @param parameters Parameters that define a resource to query flow log and traffic analytics
     *                   (optional) status.
     * @param options The options parameters.
     */
    beginGetFlowLogStatusAndWait(resourceGroupName: string, networkWatcherName: string, parameters: FlowLogStatusParameters, options?: NetworkWatchersGetFlowLogStatusOptionalParams): Promise<NetworkWatchersGetFlowLogStatusResponse>;
    /**
     * Verifies the possibility of establishing a direct TCP connection from a virtual machine to a given
     * endpoint including another VM or an arbitrary remote server.
     * @param resourceGroupName The name of the network watcher resource group.
     * @param networkWatcherName The name of the network watcher resource.
     * @param parameters Parameters that determine how the connectivity check will be performed.
     * @param options The options parameters.
     */
    beginCheckConnectivity(resourceGroupName: string, networkWatcherName: string, parameters: ConnectivityParameters, options?: NetworkWatchersCheckConnectivityOptionalParams): Promise<PollerLike<PollOperationState<NetworkWatchersCheckConnectivityResponse>, NetworkWatchersCheckConnectivityResponse>>;
    /**
     * Verifies the possibility of establishing a direct TCP connection from a virtual machine to a given
     * endpoint including another VM or an arbitrary remote server.
     * @param resourceGroupName The name of the network watcher resource group.
     * @param networkWatcherName The name of the network watcher resource.
     * @param parameters Parameters that determine how the connectivity check will be performed.
     * @param options The options parameters.
     */
    beginCheckConnectivityAndWait(resourceGroupName: string, networkWatcherName: string, parameters: ConnectivityParameters, options?: NetworkWatchersCheckConnectivityOptionalParams): Promise<NetworkWatchersCheckConnectivityResponse>;
    /**
     * NOTE: This feature is currently in preview and still being tested for stability. Gets the relative
     * latency score for internet service providers from a specified location to Azure regions.
     * @param resourceGroupName The name of the network watcher resource group.
     * @param networkWatcherName The name of the network watcher resource.
     * @param parameters Parameters that determine Azure reachability report configuration.
     * @param options The options parameters.
     */
    beginGetAzureReachabilityReport(resourceGroupName: string, networkWatcherName: string, parameters: AzureReachabilityReportParameters, options?: NetworkWatchersGetAzureReachabilityReportOptionalParams): Promise<PollerLike<PollOperationState<NetworkWatchersGetAzureReachabilityReportResponse>, NetworkWatchersGetAzureReachabilityReportResponse>>;
    /**
     * NOTE: This feature is currently in preview and still being tested for stability. Gets the relative
     * latency score for internet service providers from a specified location to Azure regions.
     * @param resourceGroupName The name of the network watcher resource group.
     * @param networkWatcherName The name of the network watcher resource.
     * @param parameters Parameters that determine Azure reachability report configuration.
     * @param options The options parameters.
     */
    beginGetAzureReachabilityReportAndWait(resourceGroupName: string, networkWatcherName: string, parameters: AzureReachabilityReportParameters, options?: NetworkWatchersGetAzureReachabilityReportOptionalParams): Promise<NetworkWatchersGetAzureReachabilityReportResponse>;
    /**
     * NOTE: This feature is currently in preview and still being tested for stability. Lists all available
     * internet service providers for a specified Azure region.
     * @param resourceGroupName The name of the network watcher resource group.
     * @param networkWatcherName The name of the network watcher resource.
     * @param parameters Parameters that scope the list of available providers.
     * @param options The options parameters.
     */
    beginListAvailableProviders(resourceGroupName: string, networkWatcherName: string, parameters: AvailableProvidersListParameters, options?: NetworkWatchersListAvailableProvidersOptionalParams): Promise<PollerLike<PollOperationState<NetworkWatchersListAvailableProvidersResponse>, NetworkWatchersListAvailableProvidersResponse>>;
    /**
     * NOTE: This feature is currently in preview and still being tested for stability. Lists all available
     * internet service providers for a specified Azure region.
     * @param resourceGroupName The name of the network watcher resource group.
     * @param networkWatcherName The name of the network watcher resource.
     * @param parameters Parameters that scope the list of available providers.
     * @param options The options parameters.
     */
    beginListAvailableProvidersAndWait(resourceGroupName: string, networkWatcherName: string, parameters: AvailableProvidersListParameters, options?: NetworkWatchersListAvailableProvidersOptionalParams): Promise<NetworkWatchersListAvailableProvidersResponse>;
    /**
     * Gets Network Configuration Diagnostic data to help customers understand and debug network behavior.
     * It provides detailed information on what security rules were applied to a specified traffic flow and
     * the result of evaluating these rules. Customers must provide details of a flow like source,
     * destination, protocol, etc. The API returns whether traffic was allowed or denied, the rules
     * evaluated for the specified flow and the evaluation results.
     * @param resourceGroupName The name of the resource group.
     * @param networkWatcherName The name of the network watcher.
     * @param parameters Parameters to get network configuration diagnostic.
     * @param options The options parameters.
     */
    beginGetNetworkConfigurationDiagnostic(resourceGroupName: string, networkWatcherName: string, parameters: NetworkConfigurationDiagnosticParameters, options?: NetworkWatchersGetNetworkConfigurationDiagnosticOptionalParams): Promise<PollerLike<PollOperationState<NetworkWatchersGetNetworkConfigurationDiagnosticResponse>, NetworkWatchersGetNetworkConfigurationDiagnosticResponse>>;
    /**
     * Gets Network Configuration Diagnostic data to help customers understand and debug network behavior.
     * It provides detailed information on what security rules were applied to a specified traffic flow and
     * the result of evaluating these rules. Customers must provide details of a flow like source,
     * destination, protocol, etc. The API returns whether traffic was allowed or denied, the rules
     * evaluated for the specified flow and the evaluation results.
     * @param resourceGroupName The name of the resource group.
     * @param networkWatcherName The name of the network watcher.
     * @param parameters Parameters to get network configuration diagnostic.
     * @param options The options parameters.
     */
    beginGetNetworkConfigurationDiagnosticAndWait(resourceGroupName: string, networkWatcherName: string, parameters: NetworkConfigurationDiagnosticParameters, options?: NetworkWatchersGetNetworkConfigurationDiagnosticOptionalParams): Promise<NetworkWatchersGetNetworkConfigurationDiagnosticResponse>;
}

/** Optional parameters. */
export declare interface NetworkWatchersCheckConnectivityOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the checkConnectivity operation. */
export declare type NetworkWatchersCheckConnectivityResponse = ConnectivityInformation;

/** Optional parameters. */
export declare interface NetworkWatchersCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdate operation. */
export declare type NetworkWatchersCreateOrUpdateResponse = NetworkWatcher;

/** Optional parameters. */
export declare interface NetworkWatchersDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface NetworkWatchersGetAzureReachabilityReportOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the getAzureReachabilityReport operation. */
export declare type NetworkWatchersGetAzureReachabilityReportResponse = AzureReachabilityReport;

/** Optional parameters. */
export declare interface NetworkWatchersGetFlowLogStatusOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the getFlowLogStatus operation. */
export declare type NetworkWatchersGetFlowLogStatusResponse = FlowLogInformation;

/** Optional parameters. */
export declare interface NetworkWatchersGetNetworkConfigurationDiagnosticOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the getNetworkConfigurationDiagnostic operation. */
export declare type NetworkWatchersGetNetworkConfigurationDiagnosticResponse = NetworkConfigurationDiagnosticResponse;

/** Optional parameters. */
export declare interface NetworkWatchersGetNextHopOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the getNextHop operation. */
export declare type NetworkWatchersGetNextHopResponse = NextHopResult;

/** Optional parameters. */
export declare interface NetworkWatchersGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type NetworkWatchersGetResponse = NetworkWatcher;

/** Optional parameters. */
export declare interface NetworkWatchersGetTopologyOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getTopology operation. */
export declare type NetworkWatchersGetTopologyResponse = Topology;

/** Optional parameters. */
export declare interface NetworkWatchersGetTroubleshootingOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the getTroubleshooting operation. */
export declare type NetworkWatchersGetTroubleshootingResponse = TroubleshootingResult;

/** Optional parameters. */
export declare interface NetworkWatchersGetTroubleshootingResultOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the getTroubleshootingResult operation. */
export declare type NetworkWatchersGetTroubleshootingResultResponse = TroubleshootingResult;

/** Optional parameters. */
export declare interface NetworkWatchersGetVMSecurityRulesOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the getVMSecurityRules operation. */
export declare type NetworkWatchersGetVMSecurityRulesResponse = SecurityGroupViewResult;

/** Optional parameters. */
export declare interface NetworkWatchersListAllOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAll operation. */
export declare type NetworkWatchersListAllResponse = NetworkWatcherListResult;

/** Optional parameters. */
export declare interface NetworkWatchersListAvailableProvidersOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the listAvailableProviders operation. */
export declare type NetworkWatchersListAvailableProvidersResponse = AvailableProvidersList;

/** Optional parameters. */
export declare interface NetworkWatchersListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type NetworkWatchersListResponse = NetworkWatcherListResult;

/** Optional parameters. */
export declare interface NetworkWatchersSetFlowLogConfigurationOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the setFlowLogConfiguration operation. */
export declare type NetworkWatchersSetFlowLogConfigurationResponse = FlowLogInformation;

/** Optional parameters. */
export declare interface NetworkWatchersUpdateTagsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateTags operation. */
export declare type NetworkWatchersUpdateTagsResponse = NetworkWatcher;

/** Optional parameters. */
export declare interface NetworkWatchersVerifyIPFlowOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the verifyIPFlow operation. */
export declare type NetworkWatchersVerifyIPFlowResponse = VerificationIPFlowResult;

/** Parameters that define the source and destination endpoint. */
export declare interface NextHopParameters {
    /** The resource identifier of the target resource against which the action is to be performed. */
    targetResourceId: string;
    /** The source IP address. */
    sourceIPAddress: string;
    /** The destination IP address. */
    destinationIPAddress: string;
    /** The NIC ID. (If VM has multiple NICs and IP forwarding is enabled on any of the nics, then this parameter must be specified. Otherwise optional). */
    targetNicResourceId?: string;
}

/** The information about next hop from the specified VM. */
export declare interface NextHopResult {
    /** Next hop type. */
    nextHopType?: NextHopType;
    /** Next hop IP Address. */
    nextHopIpAddress?: string;
    /** The resource identifier for the route table associated with the route being returned. If the route being returned does not correspond to any user created routes then this field will be the string 'System Route'. */
    routeTableId?: string;
}

/**
 * Defines values for NextHopType. \
 * {@link KnownNextHopType} can be used interchangeably with NextHopType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Internet** \
 * **VirtualAppliance** \
 * **VirtualNetworkGateway** \
 * **VnetLocal** \
 * **HyperNetGateway** \
 * **None**
 */
export declare type NextHopType = string;

/**
 * Defines values for OfficeTrafficCategory. \
 * {@link KnownOfficeTrafficCategory} can be used interchangeably with OfficeTrafficCategory,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Optimize** \
 * **OptimizeAndAllow** \
 * **All** \
 * **None**
 */
export declare type OfficeTrafficCategory = string;

/** Network REST API operation definition. */
export declare interface Operation {
    /** Operation name: {provider}/{resource}/{operation}. */
    name?: string;
    /** Display metadata associated with the operation. */
    display?: OperationDisplay;
    /** Origin of the operation. */
    origin?: string;
    /** Specification of the service. */
    serviceSpecification?: OperationPropertiesFormatServiceSpecification;
}

/** Display metadata associated with the operation. */
export declare interface OperationDisplay {
    /** Service provider: Microsoft Network. */
    provider?: string;
    /** Resource on which the operation is performed. */
    resource?: string;
    /** Type of the operation: get, read, delete, etc. */
    operation?: string;
    /** Description of the operation. */
    description?: string;
}

/** Result of the request to list Network operations. It contains a list of operations and a URL link to get the next set of results. */
export declare interface OperationListResult {
    /** List of Network operations supported by the Network resource provider. */
    value?: Operation[];
    /** URL to get the next set of operation list results if there are any. */
    nextLink?: string;
}

/** Specification of the service. */
export declare interface OperationPropertiesFormatServiceSpecification {
    /** Operation service specification. */
    metricSpecifications?: MetricSpecification[];
    /** Operation log specification. */
    logSpecifications?: LogSpecification[];
}

/** Interface representing a Operations. */
export declare interface Operations {
    /**
     * Lists all of the available Network Rest API operations.
     * @param options The options parameters.
     */
    list(options?: OperationsListOptionalParams): PagedAsyncIterableIterator<Operation>;
}

/** Optional parameters. */
export declare interface OperationsListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type OperationsListNextResponse = OperationListResult;

/** Optional parameters. */
export declare interface OperationsListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type OperationsListResponse = OperationListResult;

/**
 * Defines values for Origin. \
 * {@link KnownOrigin} can be used interchangeably with Origin,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Local** \
 * **Inbound** \
 * **Outbound**
 */
export declare type Origin = string;

/** Outbound rule of the load balancer. */
export declare type OutboundRule = SubResource & {
    /** The name of the resource that is unique within the set of outbound rules used by the load balancer. This name can be used to access the resource. */
    name?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /**
     * Type of the resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /** The number of outbound ports to be used for NAT. */
    allocatedOutboundPorts?: number;
    /** The Frontend IP addresses of the load balancer. */
    frontendIPConfigurations?: SubResource[];
    /** A reference to a pool of DIPs. Outbound traffic is randomly load balanced across IPs in the backend IPs. */
    backendAddressPool?: SubResource;
    /**
     * The provisioning state of the outbound rule resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
    /** The protocol for the outbound rule in load balancer. */
    protocol?: LoadBalancerOutboundRuleProtocol;
    /** Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP. */
    enableTcpReset?: boolean;
    /** The timeout for the TCP idle connection. */
    idleTimeoutInMinutes?: number;
};

/**
 * Defines values for OutputType. \
 * {@link KnownOutputType} can be used interchangeably with OutputType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Workspace**
 */
export declare type OutputType = string;

/** Allow to exclude some variable satisfy the condition for the WAF check. */
export declare interface OwaspCrsExclusionEntry {
    /** The variable to be excluded. */
    matchVariable: OwaspCrsExclusionEntryMatchVariable;
    /** When matchVariable is a collection, operate on the selector to specify which elements in the collection this exclusion applies to. */
    selectorMatchOperator: OwaspCrsExclusionEntrySelectorMatchOperator;
    /** When matchVariable is a collection, operator used to specify which elements in the collection this exclusion applies to. */
    selector: string;
}

/**
 * Defines values for OwaspCrsExclusionEntryMatchVariable. \
 * {@link KnownOwaspCrsExclusionEntryMatchVariable} can be used interchangeably with OwaspCrsExclusionEntryMatchVariable,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **RequestHeaderNames** \
 * **RequestCookieNames** \
 * **RequestArgNames**
 */
export declare type OwaspCrsExclusionEntryMatchVariable = string;

/**
 * Defines values for OwaspCrsExclusionEntrySelectorMatchOperator. \
 * {@link KnownOwaspCrsExclusionEntrySelectorMatchOperator} can be used interchangeably with OwaspCrsExclusionEntrySelectorMatchOperator,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Equals** \
 * **Contains** \
 * **StartsWith** \
 * **EndsWith** \
 * **EqualsAny**
 */
export declare type OwaspCrsExclusionEntrySelectorMatchOperator = string;

/** P2SConnectionConfiguration Resource. */
export declare type P2SConnectionConfiguration = SubResource & {
    /** The name of the resource that is unique within a resource group. This name can be used to access the resource. */
    name?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /** The reference to the address space resource which represents Address space for P2S VpnClient. */
    vpnClientAddressPool?: AddressSpace;
    /** The Routing Configuration indicating the associated and propagated route tables on this connection. */
    routingConfiguration?: RoutingConfiguration;
    /**
     * The provisioning state of the P2SConnectionConfiguration resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** P2S Vpn connection detailed health written to sas url. */
export declare interface P2SVpnConnectionHealth {
    /** Returned sas url of the blob to which the p2s vpn connection detailed health will be written. */
    sasUrl?: string;
}

/** List of P2S Vpn connection health request. */
export declare interface P2SVpnConnectionHealthRequest {
    /** The list of p2s vpn user names whose p2s vpn connection detailed health to retrieve for. */
    vpnUserNamesFilter?: string[];
    /** The sas-url to download the P2S Vpn connection health detail. */
    outputBlobSasUrl?: string;
}

/** List of p2s vpn connections to be disconnected. */
export declare interface P2SVpnConnectionRequest {
    /** List of p2s vpn connection Ids. */
    vpnConnectionIds?: string[];
}

/** P2SVpnGateway Resource. */
export declare type P2SVpnGateway = Resource & {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /** The VirtualHub to which the gateway belongs. */
    virtualHub?: SubResource;
    /** List of all p2s connection configurations of the gateway. */
    p2SConnectionConfigurations?: P2SConnectionConfiguration[];
    /**
     * The provisioning state of the P2S VPN gateway resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
    /** The scale unit for this p2s vpn gateway. */
    vpnGatewayScaleUnit?: number;
    /** The VpnServerConfiguration to which the p2sVpnGateway is attached to. */
    vpnServerConfiguration?: SubResource;
    /**
     * All P2S VPN clients' connection health status.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly vpnClientConnectionHealth?: VpnClientConnectionHealth;
};

/** Interface representing a P2SVpnGateways. */
export declare interface P2SVpnGateways {
    /**
     * Lists all the P2SVpnGateways in a resource group.
     * @param resourceGroupName The resource group name of the P2SVpnGateway.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: P2SVpnGatewaysListByResourceGroupOptionalParams): PagedAsyncIterableIterator<P2SVpnGateway>;
    /**
     * Lists all the P2SVpnGateways in a subscription.
     * @param options The options parameters.
     */
    list(options?: P2SVpnGatewaysListOptionalParams): PagedAsyncIterableIterator<P2SVpnGateway>;
    /**
     * Retrieves the details of a virtual wan p2s vpn gateway.
     * @param resourceGroupName The resource group name of the P2SVpnGateway.
     * @param gatewayName The name of the gateway.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, gatewayName: string, options?: P2SVpnGatewaysGetOptionalParams): Promise<P2SVpnGatewaysGetResponse>;
    /**
     * Creates a virtual wan p2s vpn gateway if it doesn't exist else updates the existing gateway.
     * @param resourceGroupName The resource group name of the P2SVpnGateway.
     * @param gatewayName The name of the gateway.
     * @param p2SVpnGatewayParameters Parameters supplied to create or Update a virtual wan p2s vpn
     *                                gateway.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, gatewayName: string, p2SVpnGatewayParameters: P2SVpnGateway, options?: P2SVpnGatewaysCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<P2SVpnGatewaysCreateOrUpdateResponse>, P2SVpnGatewaysCreateOrUpdateResponse>>;
    /**
     * Creates a virtual wan p2s vpn gateway if it doesn't exist else updates the existing gateway.
     * @param resourceGroupName The resource group name of the P2SVpnGateway.
     * @param gatewayName The name of the gateway.
     * @param p2SVpnGatewayParameters Parameters supplied to create or Update a virtual wan p2s vpn
     *                                gateway.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, gatewayName: string, p2SVpnGatewayParameters: P2SVpnGateway, options?: P2SVpnGatewaysCreateOrUpdateOptionalParams): Promise<P2SVpnGatewaysCreateOrUpdateResponse>;
    /**
     * Updates virtual wan p2s vpn gateway tags.
     * @param resourceGroupName The resource group name of the P2SVpnGateway.
     * @param gatewayName The name of the gateway.
     * @param p2SVpnGatewayParameters Parameters supplied to update a virtual wan p2s vpn gateway tags.
     * @param options The options parameters.
     */
    updateTags(resourceGroupName: string, gatewayName: string, p2SVpnGatewayParameters: TagsObject, options?: P2SVpnGatewaysUpdateTagsOptionalParams): Promise<P2SVpnGatewaysUpdateTagsResponse>;
    /**
     * Deletes a virtual wan p2s vpn gateway.
     * @param resourceGroupName The resource group name of the P2SVpnGateway.
     * @param gatewayName The name of the gateway.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, gatewayName: string, options?: P2SVpnGatewaysDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes a virtual wan p2s vpn gateway.
     * @param resourceGroupName The resource group name of the P2SVpnGateway.
     * @param gatewayName The name of the gateway.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, gatewayName: string, options?: P2SVpnGatewaysDeleteOptionalParams): Promise<void>;
    /**
     * Generates VPN profile for P2S client of the P2SVpnGateway in the specified resource group.
     * @param resourceGroupName The name of the resource group.
     * @param gatewayName The name of the P2SVpnGateway.
     * @param parameters Parameters supplied to the generate P2SVpnGateway VPN client package operation.
     * @param options The options parameters.
     */
    beginGenerateVpnProfile(resourceGroupName: string, gatewayName: string, parameters: P2SVpnProfileParameters, options?: P2SVpnGatewaysGenerateVpnProfileOptionalParams): Promise<PollerLike<PollOperationState<P2SVpnGatewaysGenerateVpnProfileResponse>, P2SVpnGatewaysGenerateVpnProfileResponse>>;
    /**
     * Generates VPN profile for P2S client of the P2SVpnGateway in the specified resource group.
     * @param resourceGroupName The name of the resource group.
     * @param gatewayName The name of the P2SVpnGateway.
     * @param parameters Parameters supplied to the generate P2SVpnGateway VPN client package operation.
     * @param options The options parameters.
     */
    beginGenerateVpnProfileAndWait(resourceGroupName: string, gatewayName: string, parameters: P2SVpnProfileParameters, options?: P2SVpnGatewaysGenerateVpnProfileOptionalParams): Promise<P2SVpnGatewaysGenerateVpnProfileResponse>;
    /**
     * Gets the connection health of P2S clients of the virtual wan P2SVpnGateway in the specified resource
     * group.
     * @param resourceGroupName The name of the resource group.
     * @param gatewayName The name of the P2SVpnGateway.
     * @param options The options parameters.
     */
    beginGetP2SVpnConnectionHealth(resourceGroupName: string, gatewayName: string, options?: P2SVpnGatewaysGetP2SVpnConnectionHealthOptionalParams): Promise<PollerLike<PollOperationState<P2SVpnGatewaysGetP2SVpnConnectionHealthResponse>, P2SVpnGatewaysGetP2SVpnConnectionHealthResponse>>;
    /**
     * Gets the connection health of P2S clients of the virtual wan P2SVpnGateway in the specified resource
     * group.
     * @param resourceGroupName The name of the resource group.
     * @param gatewayName The name of the P2SVpnGateway.
     * @param options The options parameters.
     */
    beginGetP2SVpnConnectionHealthAndWait(resourceGroupName: string, gatewayName: string, options?: P2SVpnGatewaysGetP2SVpnConnectionHealthOptionalParams): Promise<P2SVpnGatewaysGetP2SVpnConnectionHealthResponse>;
    /**
     * Gets the sas url to get the connection health detail of P2S clients of the virtual wan P2SVpnGateway
     * in the specified resource group.
     * @param resourceGroupName The name of the resource group.
     * @param gatewayName The name of the P2SVpnGateway.
     * @param request Request parameters supplied to get p2s vpn connections detailed health.
     * @param options The options parameters.
     */
    beginGetP2SVpnConnectionHealthDetailed(resourceGroupName: string, gatewayName: string, request: P2SVpnConnectionHealthRequest, options?: P2SVpnGatewaysGetP2SVpnConnectionHealthDetailedOptionalParams): Promise<PollerLike<PollOperationState<P2SVpnGatewaysGetP2SVpnConnectionHealthDetailedResponse>, P2SVpnGatewaysGetP2SVpnConnectionHealthDetailedResponse>>;
    /**
     * Gets the sas url to get the connection health detail of P2S clients of the virtual wan P2SVpnGateway
     * in the specified resource group.
     * @param resourceGroupName The name of the resource group.
     * @param gatewayName The name of the P2SVpnGateway.
     * @param request Request parameters supplied to get p2s vpn connections detailed health.
     * @param options The options parameters.
     */
    beginGetP2SVpnConnectionHealthDetailedAndWait(resourceGroupName: string, gatewayName: string, request: P2SVpnConnectionHealthRequest, options?: P2SVpnGatewaysGetP2SVpnConnectionHealthDetailedOptionalParams): Promise<P2SVpnGatewaysGetP2SVpnConnectionHealthDetailedResponse>;
    /**
     * Disconnect P2S vpn connections of the virtual wan P2SVpnGateway in the specified resource group.
     * @param resourceGroupName The name of the resource group.
     * @param p2SVpnGatewayName The name of the P2S Vpn Gateway.
     * @param request The parameters are supplied to disconnect p2s vpn connections.
     * @param options The options parameters.
     */
    beginDisconnectP2SVpnConnections(resourceGroupName: string, p2SVpnGatewayName: string, request: P2SVpnConnectionRequest, options?: P2SVpnGatewaysDisconnectP2SVpnConnectionsOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Disconnect P2S vpn connections of the virtual wan P2SVpnGateway in the specified resource group.
     * @param resourceGroupName The name of the resource group.
     * @param p2SVpnGatewayName The name of the P2S Vpn Gateway.
     * @param request The parameters are supplied to disconnect p2s vpn connections.
     * @param options The options parameters.
     */
    beginDisconnectP2SVpnConnectionsAndWait(resourceGroupName: string, p2SVpnGatewayName: string, request: P2SVpnConnectionRequest, options?: P2SVpnGatewaysDisconnectP2SVpnConnectionsOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface P2SVpnGatewaysCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type P2SVpnGatewaysCreateOrUpdateResponse = P2SVpnGateway;

/** Optional parameters. */
export declare interface P2SVpnGatewaysDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface P2SVpnGatewaysDisconnectP2SVpnConnectionsOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface P2SVpnGatewaysGenerateVpnProfileOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the generateVpnProfile operation. */
export declare type P2SVpnGatewaysGenerateVpnProfileResponse = VpnProfileResponse;

/** Optional parameters. */
export declare interface P2SVpnGatewaysGetOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface P2SVpnGatewaysGetP2SVpnConnectionHealthDetailedOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the getP2SVpnConnectionHealthDetailed operation. */
export declare type P2SVpnGatewaysGetP2SVpnConnectionHealthDetailedResponse = P2SVpnConnectionHealth;

/** Optional parameters. */
export declare interface P2SVpnGatewaysGetP2SVpnConnectionHealthOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the getP2SVpnConnectionHealth operation. */
export declare type P2SVpnGatewaysGetP2SVpnConnectionHealthResponse = P2SVpnGateway;

/** Contains response data for the get operation. */
export declare type P2SVpnGatewaysGetResponse = P2SVpnGateway;

/** Optional parameters. */
export declare interface P2SVpnGatewaysListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNext operation. */
export declare type P2SVpnGatewaysListByResourceGroupNextResponse = ListP2SVpnGatewaysResult;

/** Optional parameters. */
export declare interface P2SVpnGatewaysListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroup operation. */
export declare type P2SVpnGatewaysListByResourceGroupResponse = ListP2SVpnGatewaysResult;

/** Optional parameters. */
export declare interface P2SVpnGatewaysListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type P2SVpnGatewaysListNextResponse = ListP2SVpnGatewaysResult;

/** Optional parameters. */
export declare interface P2SVpnGatewaysListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type P2SVpnGatewaysListResponse = ListP2SVpnGatewaysResult;

/** Optional parameters. */
export declare interface P2SVpnGatewaysUpdateTagsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateTags operation. */
export declare type P2SVpnGatewaysUpdateTagsResponse = P2SVpnGateway;

/** Vpn Client Parameters for package generation. */
export declare interface P2SVpnProfileParameters {
    /** VPN client authentication method. */
    authenticationMethod?: AuthenticationMethod;
}

/** Parameters that define the create packet capture operation. */
export declare interface PacketCapture {
    /** The ID of the targeted resource, only VM is currently supported. */
    target: string;
    /** Number of bytes captured per packet, the remaining bytes are truncated. */
    bytesToCapturePerPacket?: number;
    /** Maximum size of the capture output. */
    totalBytesPerSession?: number;
    /** Maximum duration of the capture session in seconds. */
    timeLimitInSeconds?: number;
    /** The storage location for a packet capture session. */
    storageLocation: PacketCaptureStorageLocation;
    /** A list of packet capture filters. */
    filters?: PacketCaptureFilter[];
}

/** Filter that is applied to packet capture request. Multiple filters can be applied. */
export declare interface PacketCaptureFilter {
    /** Protocol to be filtered on. */
    protocol?: PcProtocol;
    /** Local IP Address to be filtered on. Notation: "127.0.0.1" for single address entry. "127.0.0.1-127.0.0.255" for range. "127.0.0.1;127.0.0.5"? for multiple entries. Multiple ranges not currently supported. Mixing ranges with multiple entries not currently supported. Default = null. */
    localIPAddress?: string;
    /** Local IP Address to be filtered on. Notation: "127.0.0.1" for single address entry. "127.0.0.1-127.0.0.255" for range. "127.0.0.1;127.0.0.5;" for multiple entries. Multiple ranges not currently supported. Mixing ranges with multiple entries not currently supported. Default = null. */
    remoteIPAddress?: string;
    /** Local port to be filtered on. Notation: "80" for single port entry."80-85" for range. "80;443;" for multiple entries. Multiple ranges not currently supported. Mixing ranges with multiple entries not currently supported. Default = null. */
    localPort?: string;
    /** Remote port to be filtered on. Notation: "80" for single port entry."80-85" for range. "80;443;" for multiple entries. Multiple ranges not currently supported. Mixing ranges with multiple entries not currently supported. Default = null. */
    remotePort?: string;
}

/** List of packet capture sessions. */
export declare interface PacketCaptureListResult {
    /** Information about packet capture sessions. */
    value?: PacketCaptureResult[];
}

/** Parameters that define the create packet capture operation. */
export declare interface PacketCaptureParameters {
    /** The ID of the targeted resource, only VM is currently supported. */
    target: string;
    /** Number of bytes captured per packet, the remaining bytes are truncated. */
    bytesToCapturePerPacket?: number;
    /** Maximum size of the capture output. */
    totalBytesPerSession?: number;
    /** Maximum duration of the capture session in seconds. */
    timeLimitInSeconds?: number;
    /** The storage location for a packet capture session. */
    storageLocation: PacketCaptureStorageLocation;
    /** A list of packet capture filters. */
    filters?: PacketCaptureFilter[];
}

/** Status of packet capture session. */
export declare interface PacketCaptureQueryStatusResult {
    /** The name of the packet capture resource. */
    name?: string;
    /** The ID of the packet capture resource. */
    id?: string;
    /** The start time of the packet capture session. */
    captureStartTime?: Date;
    /** The status of the packet capture session. */
    packetCaptureStatus?: PcStatus;
    /** The reason the current packet capture session was stopped. */
    stopReason?: string;
    /** List of errors of packet capture session. */
    packetCaptureError?: PcError[];
}

/** Information about packet capture session. */
export declare interface PacketCaptureResult {
    /**
     * Name of the packet capture session.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * ID of the packet capture operation.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /** The ID of the targeted resource, only VM is currently supported. */
    target?: string;
    /** Number of bytes captured per packet, the remaining bytes are truncated. */
    bytesToCapturePerPacket?: number;
    /** Maximum size of the capture output. */
    totalBytesPerSession?: number;
    /** Maximum duration of the capture session in seconds. */
    timeLimitInSeconds?: number;
    /** The storage location for a packet capture session. */
    storageLocation?: PacketCaptureStorageLocation;
    /** A list of packet capture filters. */
    filters?: PacketCaptureFilter[];
    /**
     * The provisioning state of the packet capture session.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
}

/** The properties of a packet capture session. */
export declare type PacketCaptureResultProperties = PacketCaptureParameters & {
    /**
     * The provisioning state of the packet capture session.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** Interface representing a PacketCaptures. */
export declare interface PacketCaptures {
    /**
     * Lists all packet capture sessions within the specified resource group.
     * @param resourceGroupName The name of the resource group.
     * @param networkWatcherName The name of the Network Watcher resource.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, networkWatcherName: string, options?: PacketCapturesListOptionalParams): PagedAsyncIterableIterator<PacketCaptureResult>;
    /**
     * Create and start a packet capture on the specified VM.
     * @param resourceGroupName The name of the resource group.
     * @param networkWatcherName The name of the network watcher.
     * @param packetCaptureName The name of the packet capture session.
     * @param parameters Parameters that define the create packet capture operation.
     * @param options The options parameters.
     */
    beginCreate(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string, parameters: PacketCapture, options?: PacketCapturesCreateOptionalParams): Promise<PollerLike<PollOperationState<PacketCapturesCreateResponse>, PacketCapturesCreateResponse>>;
    /**
     * Create and start a packet capture on the specified VM.
     * @param resourceGroupName The name of the resource group.
     * @param networkWatcherName The name of the network watcher.
     * @param packetCaptureName The name of the packet capture session.
     * @param parameters Parameters that define the create packet capture operation.
     * @param options The options parameters.
     */
    beginCreateAndWait(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string, parameters: PacketCapture, options?: PacketCapturesCreateOptionalParams): Promise<PacketCapturesCreateResponse>;
    /**
     * Gets a packet capture session by name.
     * @param resourceGroupName The name of the resource group.
     * @param networkWatcherName The name of the network watcher.
     * @param packetCaptureName The name of the packet capture session.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string, options?: PacketCapturesGetOptionalParams): Promise<PacketCapturesGetResponse>;
    /**
     * Deletes the specified packet capture session.
     * @param resourceGroupName The name of the resource group.
     * @param networkWatcherName The name of the network watcher.
     * @param packetCaptureName The name of the packet capture session.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string, options?: PacketCapturesDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the specified packet capture session.
     * @param resourceGroupName The name of the resource group.
     * @param networkWatcherName The name of the network watcher.
     * @param packetCaptureName The name of the packet capture session.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string, options?: PacketCapturesDeleteOptionalParams): Promise<void>;
    /**
     * Stops a specified packet capture session.
     * @param resourceGroupName The name of the resource group.
     * @param networkWatcherName The name of the network watcher.
     * @param packetCaptureName The name of the packet capture session.
     * @param options The options parameters.
     */
    beginStop(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string, options?: PacketCapturesStopOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Stops a specified packet capture session.
     * @param resourceGroupName The name of the resource group.
     * @param networkWatcherName The name of the network watcher.
     * @param packetCaptureName The name of the packet capture session.
     * @param options The options parameters.
     */
    beginStopAndWait(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string, options?: PacketCapturesStopOptionalParams): Promise<void>;
    /**
     * Query the status of a running packet capture session.
     * @param resourceGroupName The name of the resource group.
     * @param networkWatcherName The name of the Network Watcher resource.
     * @param packetCaptureName The name given to the packet capture session.
     * @param options The options parameters.
     */
    beginGetStatus(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string, options?: PacketCapturesGetStatusOptionalParams): Promise<PollerLike<PollOperationState<PacketCapturesGetStatusResponse>, PacketCapturesGetStatusResponse>>;
    /**
     * Query the status of a running packet capture session.
     * @param resourceGroupName The name of the resource group.
     * @param networkWatcherName The name of the Network Watcher resource.
     * @param packetCaptureName The name given to the packet capture session.
     * @param options The options parameters.
     */
    beginGetStatusAndWait(resourceGroupName: string, networkWatcherName: string, packetCaptureName: string, options?: PacketCapturesGetStatusOptionalParams): Promise<PacketCapturesGetStatusResponse>;
}

/** Optional parameters. */
export declare interface PacketCapturesCreateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the create operation. */
export declare type PacketCapturesCreateResponse = PacketCaptureResult;

/** Optional parameters. */
export declare interface PacketCapturesDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface PacketCapturesGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type PacketCapturesGetResponse = PacketCaptureResult;

/** Optional parameters. */
export declare interface PacketCapturesGetStatusOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the getStatus operation. */
export declare type PacketCapturesGetStatusResponse = PacketCaptureQueryStatusResult;

/** Optional parameters. */
export declare interface PacketCapturesListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type PacketCapturesListResponse = PacketCaptureListResult;

/** Optional parameters. */
export declare interface PacketCapturesStopOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** The storage location for a packet capture session. */
export declare interface PacketCaptureStorageLocation {
    /** The ID of the storage account to save the packet capture session. Required if no local file path is provided. */
    storageId?: string;
    /** The URI of the storage path to save the packet capture. Must be a well-formed URI describing the location to save the packet capture. */
    storagePath?: string;
    /** A valid local path on the targeting VM. Must include the name of the capture file (*.cap). For linux virtual machine it must start with /var/captures. Required if no storage ID is provided, otherwise optional. */
    filePath?: string;
}

/** Route Filter Resource. */
export declare type PatchRouteFilter = SubResource & {
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /**
     * Resource type.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /** Resource tags. */
    tags?: {
        [propertyName: string]: string;
    };
    /** Collection of RouteFilterRules contained within a route filter. */
    rules?: RouteFilterRule[];
    /**
     * A collection of references to express route circuit peerings.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly peerings?: ExpressRouteCircuitPeering[];
    /**
     * A collection of references to express route circuit ipv6 peerings.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly ipv6Peerings?: ExpressRouteCircuitPeering[];
    /**
     * The provisioning state of the route filter resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** Route Filter Rule Resource. */
export declare type PatchRouteFilterRule = SubResource & {
    /**
     * The name of the resource that is unique within a resource group. This name can be used to access the resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /** The access type of the rule. */
    access?: Access;
    /** The rule type of the rule. */
    routeFilterRuleType?: RouteFilterRuleType;
    /** The collection for bgp community values to filter on. e.g. ['12076:5010','12076:5020']. */
    communities?: string[];
    /**
     * The provisioning state of the route filter rule resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/**
 * Defines values for PcError. \
 * {@link KnownPcError} can be used interchangeably with PcError,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **InternalError** \
 * **AgentStopped** \
 * **CaptureFailed** \
 * **LocalFileFailed** \
 * **StorageFailed**
 */
export declare type PcError = string;

/**
 * Defines values for PcProtocol. \
 * {@link KnownPcProtocol} can be used interchangeably with PcProtocol,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **TCP** \
 * **UDP** \
 * **Any**
 */
export declare type PcProtocol = string;

/**
 * Defines values for PcStatus. \
 * {@link KnownPcStatus} can be used interchangeably with PcStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **NotStarted** \
 * **Running** \
 * **Stopped** \
 * **Error** \
 * **Unknown**
 */
export declare type PcStatus = string;

/** Peer Express Route Circuit Connection in an ExpressRouteCircuitPeering resource. */
export declare type PeerExpressRouteCircuitConnection = SubResource & {
    /** The name of the resource that is unique within a resource group. This name can be used to access the resource. */
    name?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /**
     * Type of the resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /** Reference to Express Route Circuit Private Peering Resource of the circuit. */
    expressRouteCircuitPeering?: SubResource;
    /** Reference to Express Route Circuit Private Peering Resource of the peered circuit. */
    peerExpressRouteCircuitPeering?: SubResource;
    /** /29 IP address space to carve out Customer addresses for tunnels. */
    addressPrefix?: string;
    /**
     * Express Route Circuit connection state.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly circuitConnectionStatus?: CircuitConnectionStatus;
    /** The name of the express route circuit connection resource. */
    connectionName?: string;
    /** The resource guid of the authorization used for the express route circuit connection. */
    authResourceGuid?: string;
    /**
     * The provisioning state of the peer express route circuit connection resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** Response for ListPeeredConnections API service call retrieves all global reach peer circuit connections that belongs to a Private Peering for an ExpressRouteCircuit. */
export declare interface PeerExpressRouteCircuitConnectionListResult {
    /** The global reach peer circuit connection associated with Private Peering in an ExpressRoute Circuit. */
    value?: PeerExpressRouteCircuitConnection[];
    /** The URL to get the next set of results. */
    nextLink?: string;
}

/** Interface representing a PeerExpressRouteCircuitConnections. */
export declare interface PeerExpressRouteCircuitConnections {
    /**
     * Gets all global reach peer connections associated with a private peering in an express route
     * circuit.
     * @param resourceGroupName The name of the resource group.
     * @param circuitName The name of the circuit.
     * @param peeringName The name of the peering.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, circuitName: string, peeringName: string, options?: PeerExpressRouteCircuitConnectionsListOptionalParams): PagedAsyncIterableIterator<PeerExpressRouteCircuitConnection>;
    /**
     * Gets the specified Peer Express Route Circuit Connection from the specified express route circuit.
     * @param resourceGroupName The name of the resource group.
     * @param circuitName The name of the express route circuit.
     * @param peeringName The name of the peering.
     * @param connectionName The name of the peer express route circuit connection.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, circuitName: string, peeringName: string, connectionName: string, options?: PeerExpressRouteCircuitConnectionsGetOptionalParams): Promise<PeerExpressRouteCircuitConnectionsGetResponse>;
}

/** Optional parameters. */
export declare interface PeerExpressRouteCircuitConnectionsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type PeerExpressRouteCircuitConnectionsGetResponse = PeerExpressRouteCircuitConnection;

/** Optional parameters. */
export declare interface PeerExpressRouteCircuitConnectionsListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type PeerExpressRouteCircuitConnectionsListNextResponse = PeerExpressRouteCircuitConnectionListResult;

/** Optional parameters. */
export declare interface PeerExpressRouteCircuitConnectionsListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type PeerExpressRouteCircuitConnectionsListResponse = PeerExpressRouteCircuitConnectionListResult;

/**
 * Defines values for PfsGroup. \
 * {@link KnownPfsGroup} can be used interchangeably with PfsGroup,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None** \
 * **PFS1** \
 * **PFS2** \
 * **PFS2048** \
 * **ECP256** \
 * **ECP384** \
 * **PFS24** \
 * **PFS14** \
 * **PFSMM**
 */
export declare type PfsGroup = string;

/** Defines contents of a web application firewall global configuration. */
export declare interface PolicySettings {
    /** The state of the policy. */
    state?: WebApplicationFirewallEnabledState;
    /** The mode of the policy. */
    mode?: WebApplicationFirewallMode;
    /** Whether to allow WAF to check request Body. */
    requestBodyCheck?: boolean;
    /** Maximum request body size in Kb for WAF. */
    maxRequestBodySizeInKb?: number;
    /** Maximum file upload size in Mb for WAF. */
    fileUploadLimitInMb?: number;
}

/**
 * Defines values for PreferredIPVersion. \
 * {@link KnownPreferredIPVersion} can be used interchangeably with PreferredIPVersion,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **IPv4** \
 * **IPv6**
 */
export declare type PreferredIPVersion = string;

/** Details of PrepareNetworkPolicies for Subnet. */
export declare interface PrepareNetworkPoliciesRequest {
    /** The name of the service for which subnet is being prepared for. */
    serviceName?: string;
    /** A list of NetworkIntentPolicyConfiguration. */
    networkIntentPolicyConfigurations?: NetworkIntentPolicyConfiguration[];
}

/** PrivateDnsZoneConfig resource. */
export declare interface PrivateDnsZoneConfig {
    /** Name of the resource that is unique within a resource group. This name can be used to access the resource. */
    name?: string;
    /** The resource id of the private dns zone. */
    privateDnsZoneId?: string;
    /**
     * A collection of information regarding a recordSet, holding information to identify private resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly recordSets?: RecordSet[];
}

/** Private dns zone group resource. */
export declare type PrivateDnsZoneGroup = SubResource & {
    /** Name of the resource that is unique within a resource group. This name can be used to access the resource. */
    name?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /**
     * The provisioning state of the private dns zone group resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
    /** A collection of private dns zone configurations of the private dns zone group. */
    privateDnsZoneConfigs?: PrivateDnsZoneConfig[];
};

/** Response for the ListPrivateDnsZoneGroups API service call. */
export declare interface PrivateDnsZoneGroupListResult {
    /** A list of private dns zone group resources in a private endpoint. */
    value?: PrivateDnsZoneGroup[];
    /**
     * The URL to get the next set of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Interface representing a PrivateDnsZoneGroups. */
export declare interface PrivateDnsZoneGroups {
    /**
     * Gets all private dns zone groups in a private endpoint.
     * @param privateEndpointName The name of the private endpoint.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    list(privateEndpointName: string, resourceGroupName: string, options?: PrivateDnsZoneGroupsListOptionalParams): PagedAsyncIterableIterator<PrivateDnsZoneGroup>;
    /**
     * Deletes the specified private dns zone group.
     * @param resourceGroupName The name of the resource group.
     * @param privateEndpointName The name of the private endpoint.
     * @param privateDnsZoneGroupName The name of the private dns zone group.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, privateEndpointName: string, privateDnsZoneGroupName: string, options?: PrivateDnsZoneGroupsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the specified private dns zone group.
     * @param resourceGroupName The name of the resource group.
     * @param privateEndpointName The name of the private endpoint.
     * @param privateDnsZoneGroupName The name of the private dns zone group.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, privateEndpointName: string, privateDnsZoneGroupName: string, options?: PrivateDnsZoneGroupsDeleteOptionalParams): Promise<void>;
    /**
     * Gets the private dns zone group resource by specified private dns zone group name.
     * @param resourceGroupName The name of the resource group.
     * @param privateEndpointName The name of the private endpoint.
     * @param privateDnsZoneGroupName The name of the private dns zone group.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, privateEndpointName: string, privateDnsZoneGroupName: string, options?: PrivateDnsZoneGroupsGetOptionalParams): Promise<PrivateDnsZoneGroupsGetResponse>;
    /**
     * Creates or updates a private dns zone group in the specified private endpoint.
     * @param resourceGroupName The name of the resource group.
     * @param privateEndpointName The name of the private endpoint.
     * @param privateDnsZoneGroupName The name of the private dns zone group.
     * @param parameters Parameters supplied to the create or update private dns zone group operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, privateEndpointName: string, privateDnsZoneGroupName: string, parameters: PrivateDnsZoneGroup, options?: PrivateDnsZoneGroupsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<PrivateDnsZoneGroupsCreateOrUpdateResponse>, PrivateDnsZoneGroupsCreateOrUpdateResponse>>;
    /**
     * Creates or updates a private dns zone group in the specified private endpoint.
     * @param resourceGroupName The name of the resource group.
     * @param privateEndpointName The name of the private endpoint.
     * @param privateDnsZoneGroupName The name of the private dns zone group.
     * @param parameters Parameters supplied to the create or update private dns zone group operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, privateEndpointName: string, privateDnsZoneGroupName: string, parameters: PrivateDnsZoneGroup, options?: PrivateDnsZoneGroupsCreateOrUpdateOptionalParams): Promise<PrivateDnsZoneGroupsCreateOrUpdateResponse>;
}

/** Optional parameters. */
export declare interface PrivateDnsZoneGroupsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type PrivateDnsZoneGroupsCreateOrUpdateResponse = PrivateDnsZoneGroup;

/** Optional parameters. */
export declare interface PrivateDnsZoneGroupsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface PrivateDnsZoneGroupsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type PrivateDnsZoneGroupsGetResponse = PrivateDnsZoneGroup;

/** Optional parameters. */
export declare interface PrivateDnsZoneGroupsListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type PrivateDnsZoneGroupsListNextResponse = PrivateDnsZoneGroupListResult;

/** Optional parameters. */
export declare interface PrivateDnsZoneGroupsListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type PrivateDnsZoneGroupsListResponse = PrivateDnsZoneGroupListResult;

/** Private endpoint resource. */
export declare type PrivateEndpoint = Resource & {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /** The ID of the subnet from which the private IP will be allocated. */
    subnet?: Subnet;
    /**
     * An array of references to the network interfaces created for this private endpoint.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly networkInterfaces?: NetworkInterface[];
    /**
     * The provisioning state of the private endpoint resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
    /** A grouping of information about the connection to the remote resource. */
    privateLinkServiceConnections?: PrivateLinkServiceConnection[];
    /** A grouping of information about the connection to the remote resource. Used when the network admin does not have access to approve connections to the remote resource. */
    manualPrivateLinkServiceConnections?: PrivateLinkServiceConnection[];
    /** An array of custom dns configurations. */
    customDnsConfigs?: CustomDnsConfigPropertiesFormat[];
};

/** PrivateEndpointConnection resource. */
export declare type PrivateEndpointConnection = SubResource & {
    /** The name of the resource that is unique within a resource group. This name can be used to access the resource. */
    name?: string;
    /**
     * The resource type.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /**
     * The resource of private end point.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly privateEndpoint?: PrivateEndpoint;
    /** A collection of information about the state of the connection between service consumer and provider. */
    privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState;
    /**
     * The provisioning state of the private endpoint connection resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
    /**
     * The consumer link id.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly linkIdentifier?: string;
};

/** Response for the ListPrivateEndpointConnection API service call. */
export declare interface PrivateEndpointConnectionListResult {
    /** A list of PrivateEndpointConnection resources for a specific private link service. */
    value?: PrivateEndpointConnection[];
    /**
     * The URL to get the next set of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Response for the ListPrivateEndpoints API service call. */
export declare interface PrivateEndpointListResult {
    /** A list of private endpoint resources in a resource group. */
    value?: PrivateEndpoint[];
    /**
     * The URL to get the next set of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Interface representing a PrivateEndpoints. */
export declare interface PrivateEndpoints {
    /**
     * Gets all private endpoints in a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, options?: PrivateEndpointsListOptionalParams): PagedAsyncIterableIterator<PrivateEndpoint>;
    /**
     * Gets all private endpoints in a subscription.
     * @param options The options parameters.
     */
    listBySubscription(options?: PrivateEndpointsListBySubscriptionOptionalParams): PagedAsyncIterableIterator<PrivateEndpoint>;
    /**
     * Deletes the specified private endpoint.
     * @param resourceGroupName The name of the resource group.
     * @param privateEndpointName The name of the private endpoint.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, privateEndpointName: string, options?: PrivateEndpointsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the specified private endpoint.
     * @param resourceGroupName The name of the resource group.
     * @param privateEndpointName The name of the private endpoint.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, privateEndpointName: string, options?: PrivateEndpointsDeleteOptionalParams): Promise<void>;
    /**
     * Gets the specified private endpoint by resource group.
     * @param resourceGroupName The name of the resource group.
     * @param privateEndpointName The name of the private endpoint.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, privateEndpointName: string, options?: PrivateEndpointsGetOptionalParams): Promise<PrivateEndpointsGetResponse>;
    /**
     * Creates or updates an private endpoint in the specified resource group.
     * @param resourceGroupName The name of the resource group.
     * @param privateEndpointName The name of the private endpoint.
     * @param parameters Parameters supplied to the create or update private endpoint operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, privateEndpointName: string, parameters: PrivateEndpoint, options?: PrivateEndpointsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<PrivateEndpointsCreateOrUpdateResponse>, PrivateEndpointsCreateOrUpdateResponse>>;
    /**
     * Creates or updates an private endpoint in the specified resource group.
     * @param resourceGroupName The name of the resource group.
     * @param privateEndpointName The name of the private endpoint.
     * @param parameters Parameters supplied to the create or update private endpoint operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, privateEndpointName: string, parameters: PrivateEndpoint, options?: PrivateEndpointsCreateOrUpdateOptionalParams): Promise<PrivateEndpointsCreateOrUpdateResponse>;
}

/** Optional parameters. */
export declare interface PrivateEndpointsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type PrivateEndpointsCreateOrUpdateResponse = PrivateEndpoint;

/** Optional parameters. */
export declare interface PrivateEndpointsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface PrivateEndpointsGetOptionalParams extends coreClient.OperationOptions {
    /** Expands referenced resources. */
    expand?: string;
}

/** Contains response data for the get operation. */
export declare type PrivateEndpointsGetResponse = PrivateEndpoint;

/** Optional parameters. */
export declare interface PrivateEndpointsListBySubscriptionNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listBySubscriptionNext operation. */
export declare type PrivateEndpointsListBySubscriptionNextResponse = PrivateEndpointListResult;

/** Optional parameters. */
export declare interface PrivateEndpointsListBySubscriptionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listBySubscription operation. */
export declare type PrivateEndpointsListBySubscriptionResponse = PrivateEndpointListResult;

/** Optional parameters. */
export declare interface PrivateEndpointsListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type PrivateEndpointsListNextResponse = PrivateEndpointListResult;

/** Optional parameters. */
export declare interface PrivateEndpointsListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type PrivateEndpointsListResponse = PrivateEndpointListResult;

/** Private link service resource. */
export declare type PrivateLinkService = Resource & {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /** An array of references to the load balancer IP configurations. */
    loadBalancerFrontendIpConfigurations?: FrontendIPConfiguration[];
    /** An array of private link service IP configurations. */
    ipConfigurations?: PrivateLinkServiceIpConfiguration[];
    /**
     * An array of references to the network interfaces created for this private link service.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly networkInterfaces?: NetworkInterface[];
    /**
     * The provisioning state of the private link service resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
    /**
     * An array of list about connections to the private endpoint.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly privateEndpointConnections?: PrivateEndpointConnection[];
    /** The visibility list of the private link service. */
    visibility?: PrivateLinkServicePropertiesVisibility;
    /** The auto-approval list of the private link service. */
    autoApproval?: PrivateLinkServicePropertiesAutoApproval;
    /** The list of Fqdn. */
    fqdns?: string[];
    /**
     * The alias of the private link service.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly alias?: string;
    /** Whether the private link service is enabled for proxy protocol or not. */
    enableProxyProtocol?: boolean;
};

/** PrivateLinkServiceConnection resource. */
export declare type PrivateLinkServiceConnection = SubResource & {
    /** The name of the resource that is unique within a resource group. This name can be used to access the resource. */
    name?: string;
    /**
     * The resource type.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /**
     * The provisioning state of the private link service connection resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
    /** The resource id of private link service. */
    privateLinkServiceId?: string;
    /** The ID(s) of the group(s) obtained from the remote resource that this private endpoint should connect to. */
    groupIds?: string[];
    /** A message passed to the owner of the remote resource with this connection request. Restricted to 140 chars. */
    requestMessage?: string;
    /** A collection of read-only information about the state of the connection to the remote resource. */
    privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState;
};

/** A collection of information about the state of the connection between service consumer and provider. */
export declare interface PrivateLinkServiceConnectionState {
    /** Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service. */
    status?: string;
    /** The reason for approval/rejection of the connection. */
    description?: string;
    /** A message indicating if changes on the service provider require any updates on the consumer. */
    actionsRequired?: string;
}

/** The private link service ip configuration. */
export declare type PrivateLinkServiceIpConfiguration = SubResource & {
    /** The name of private link service ip configuration. */
    name?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /**
     * The resource type.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /** The private IP address of the IP configuration. */
    privateIPAddress?: string;
    /** The private IP address allocation method. */
    privateIPAllocationMethod?: IPAllocationMethod;
    /** The reference to the subnet resource. */
    subnet?: Subnet;
    /** Whether the ip configuration is primary or not. */
    primary?: boolean;
    /**
     * The provisioning state of the private link service IP configuration resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
    /** Whether the specific IP configuration is IPv4 or IPv6. Default is IPv4. */
    privateIPAddressVersion?: IPVersion;
};

/** Response for the ListPrivateLinkService API service call. */
export declare interface PrivateLinkServiceListResult {
    /** A list of PrivateLinkService resources in a resource group. */
    value?: PrivateLinkService[];
    /**
     * The URL to get the next set of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** The auto-approval list of the private link service. */
export declare type PrivateLinkServicePropertiesAutoApproval = ResourceSet & {};

/** The visibility list of the private link service. */
export declare type PrivateLinkServicePropertiesVisibility = ResourceSet & {};

/** Interface representing a PrivateLinkServices. */
export declare interface PrivateLinkServices {
    /**
     * Gets all private link services in a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, options?: PrivateLinkServicesListOptionalParams): PagedAsyncIterableIterator<PrivateLinkService>;
    /**
     * Gets all private link service in a subscription.
     * @param options The options parameters.
     */
    listBySubscription(options?: PrivateLinkServicesListBySubscriptionOptionalParams): PagedAsyncIterableIterator<PrivateLinkService>;
    /**
     * Gets all private end point connections for a specific private link service.
     * @param resourceGroupName The name of the resource group.
     * @param serviceName The name of the private link service.
     * @param options The options parameters.
     */
    listPrivateEndpointConnections(resourceGroupName: string, serviceName: string, options?: PrivateLinkServicesListPrivateEndpointConnectionsOptionalParams): PagedAsyncIterableIterator<PrivateEndpointConnection>;
    /**
     * Returns all of the private link service ids that can be linked to a Private Endpoint with auto
     * approved in this subscription in this region.
     * @param location The location of the domain name.
     * @param options The options parameters.
     */
    listAutoApprovedPrivateLinkServices(location: string, options?: PrivateLinkServicesListAutoApprovedPrivateLinkServicesOptionalParams): PagedAsyncIterableIterator<AutoApprovedPrivateLinkService>;
    /**
     * Returns all of the private link service ids that can be linked to a Private Endpoint with auto
     * approved in this subscription in this region.
     * @param location The location of the domain name.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    listAutoApprovedPrivateLinkServicesByResourceGroup(location: string, resourceGroupName: string, options?: PrivateLinkServicesListAutoApprovedPrivateLinkServicesByResourceGroupOptionalParams): PagedAsyncIterableIterator<AutoApprovedPrivateLinkService>;
    /**
     * Deletes the specified private link service.
     * @param resourceGroupName The name of the resource group.
     * @param serviceName The name of the private link service.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, serviceName: string, options?: PrivateLinkServicesDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the specified private link service.
     * @param resourceGroupName The name of the resource group.
     * @param serviceName The name of the private link service.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, serviceName: string, options?: PrivateLinkServicesDeleteOptionalParams): Promise<void>;
    /**
     * Gets the specified private link service by resource group.
     * @param resourceGroupName The name of the resource group.
     * @param serviceName The name of the private link service.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, serviceName: string, options?: PrivateLinkServicesGetOptionalParams): Promise<PrivateLinkServicesGetResponse>;
    /**
     * Creates or updates an private link service in the specified resource group.
     * @param resourceGroupName The name of the resource group.
     * @param serviceName The name of the private link service.
     * @param parameters Parameters supplied to the create or update private link service operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, serviceName: string, parameters: PrivateLinkService, options?: PrivateLinkServicesCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<PrivateLinkServicesCreateOrUpdateResponse>, PrivateLinkServicesCreateOrUpdateResponse>>;
    /**
     * Creates or updates an private link service in the specified resource group.
     * @param resourceGroupName The name of the resource group.
     * @param serviceName The name of the private link service.
     * @param parameters Parameters supplied to the create or update private link service operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, serviceName: string, parameters: PrivateLinkService, options?: PrivateLinkServicesCreateOrUpdateOptionalParams): Promise<PrivateLinkServicesCreateOrUpdateResponse>;
    /**
     * Get the specific private end point connection by specific private link service in the resource
     * group.
     * @param resourceGroupName The name of the resource group.
     * @param serviceName The name of the private link service.
     * @param peConnectionName The name of the private end point connection.
     * @param options The options parameters.
     */
    getPrivateEndpointConnection(resourceGroupName: string, serviceName: string, peConnectionName: string, options?: PrivateLinkServicesGetPrivateEndpointConnectionOptionalParams): Promise<PrivateLinkServicesGetPrivateEndpointConnectionResponse>;
    /**
     * Approve or reject private end point connection for a private link service in a subscription.
     * @param resourceGroupName The name of the resource group.
     * @param serviceName The name of the private link service.
     * @param peConnectionName The name of the private end point connection.
     * @param parameters Parameters supplied to approve or reject the private end point connection.
     * @param options The options parameters.
     */
    updatePrivateEndpointConnection(resourceGroupName: string, serviceName: string, peConnectionName: string, parameters: PrivateEndpointConnection, options?: PrivateLinkServicesUpdatePrivateEndpointConnectionOptionalParams): Promise<PrivateLinkServicesUpdatePrivateEndpointConnectionResponse>;
    /**
     * Delete private end point connection for a private link service in a subscription.
     * @param resourceGroupName The name of the resource group.
     * @param serviceName The name of the private link service.
     * @param peConnectionName The name of the private end point connection.
     * @param options The options parameters.
     */
    beginDeletePrivateEndpointConnection(resourceGroupName: string, serviceName: string, peConnectionName: string, options?: PrivateLinkServicesDeletePrivateEndpointConnectionOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Delete private end point connection for a private link service in a subscription.
     * @param resourceGroupName The name of the resource group.
     * @param serviceName The name of the private link service.
     * @param peConnectionName The name of the private end point connection.
     * @param options The options parameters.
     */
    beginDeletePrivateEndpointConnectionAndWait(resourceGroupName: string, serviceName: string, peConnectionName: string, options?: PrivateLinkServicesDeletePrivateEndpointConnectionOptionalParams): Promise<void>;
    /**
     * Checks whether the subscription is visible to private link service.
     * @param location The location of the domain name.
     * @param parameters The request body of CheckPrivateLinkService API call.
     * @param options The options parameters.
     */
    checkPrivateLinkServiceVisibility(location: string, parameters: CheckPrivateLinkServiceVisibilityRequest, options?: PrivateLinkServicesCheckPrivateLinkServiceVisibilityOptionalParams): Promise<PrivateLinkServicesCheckPrivateLinkServiceVisibilityResponse>;
    /**
     * Checks whether the subscription is visible to private link service in the specified resource group.
     * @param location The location of the domain name.
     * @param resourceGroupName The name of the resource group.
     * @param parameters The request body of CheckPrivateLinkService API call.
     * @param options The options parameters.
     */
    checkPrivateLinkServiceVisibilityByResourceGroup(location: string, resourceGroupName: string, parameters: CheckPrivateLinkServiceVisibilityRequest, options?: PrivateLinkServicesCheckPrivateLinkServiceVisibilityByResourceGroupOptionalParams): Promise<PrivateLinkServicesCheckPrivateLinkServiceVisibilityByResourceGroupResponse>;
}

/** Optional parameters. */
export declare interface PrivateLinkServicesCheckPrivateLinkServiceVisibilityByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the checkPrivateLinkServiceVisibilityByResourceGroup operation. */
export declare type PrivateLinkServicesCheckPrivateLinkServiceVisibilityByResourceGroupResponse = PrivateLinkServiceVisibility;

/** Optional parameters. */
export declare interface PrivateLinkServicesCheckPrivateLinkServiceVisibilityOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the checkPrivateLinkServiceVisibility operation. */
export declare type PrivateLinkServicesCheckPrivateLinkServiceVisibilityResponse = PrivateLinkServiceVisibility;

/** Optional parameters. */
export declare interface PrivateLinkServicesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type PrivateLinkServicesCreateOrUpdateResponse = PrivateLinkService;

/** Optional parameters. */
export declare interface PrivateLinkServicesDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface PrivateLinkServicesDeletePrivateEndpointConnectionOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface PrivateLinkServicesGetOptionalParams extends coreClient.OperationOptions {
    /** Expands referenced resources. */
    expand?: string;
}

/** Optional parameters. */
export declare interface PrivateLinkServicesGetPrivateEndpointConnectionOptionalParams extends coreClient.OperationOptions {
    /** Expands referenced resources. */
    expand?: string;
}

/** Contains response data for the getPrivateEndpointConnection operation. */
export declare type PrivateLinkServicesGetPrivateEndpointConnectionResponse = PrivateEndpointConnection;

/** Contains response data for the get operation. */
export declare type PrivateLinkServicesGetResponse = PrivateLinkService;

/** Optional parameters. */
export declare interface PrivateLinkServicesListAutoApprovedPrivateLinkServicesByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAutoApprovedPrivateLinkServicesByResourceGroupNext operation. */
export declare type PrivateLinkServicesListAutoApprovedPrivateLinkServicesByResourceGroupNextResponse = AutoApprovedPrivateLinkServicesResult;

/** Optional parameters. */
export declare interface PrivateLinkServicesListAutoApprovedPrivateLinkServicesByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAutoApprovedPrivateLinkServicesByResourceGroup operation. */
export declare type PrivateLinkServicesListAutoApprovedPrivateLinkServicesByResourceGroupResponse = AutoApprovedPrivateLinkServicesResult;

/** Optional parameters. */
export declare interface PrivateLinkServicesListAutoApprovedPrivateLinkServicesNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAutoApprovedPrivateLinkServicesNext operation. */
export declare type PrivateLinkServicesListAutoApprovedPrivateLinkServicesNextResponse = AutoApprovedPrivateLinkServicesResult;

/** Optional parameters. */
export declare interface PrivateLinkServicesListAutoApprovedPrivateLinkServicesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAutoApprovedPrivateLinkServices operation. */
export declare type PrivateLinkServicesListAutoApprovedPrivateLinkServicesResponse = AutoApprovedPrivateLinkServicesResult;

/** Optional parameters. */
export declare interface PrivateLinkServicesListBySubscriptionNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listBySubscriptionNext operation. */
export declare type PrivateLinkServicesListBySubscriptionNextResponse = PrivateLinkServiceListResult;

/** Optional parameters. */
export declare interface PrivateLinkServicesListBySubscriptionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listBySubscription operation. */
export declare type PrivateLinkServicesListBySubscriptionResponse = PrivateLinkServiceListResult;

/** Optional parameters. */
export declare interface PrivateLinkServicesListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type PrivateLinkServicesListNextResponse = PrivateLinkServiceListResult;

/** Optional parameters. */
export declare interface PrivateLinkServicesListOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface PrivateLinkServicesListPrivateEndpointConnectionsNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listPrivateEndpointConnectionsNext operation. */
export declare type PrivateLinkServicesListPrivateEndpointConnectionsNextResponse = PrivateEndpointConnectionListResult;

/** Optional parameters. */
export declare interface PrivateLinkServicesListPrivateEndpointConnectionsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listPrivateEndpointConnections operation. */
export declare type PrivateLinkServicesListPrivateEndpointConnectionsResponse = PrivateEndpointConnectionListResult;

/** Contains response data for the list operation. */
export declare type PrivateLinkServicesListResponse = PrivateLinkServiceListResult;

/** Optional parameters. */
export declare interface PrivateLinkServicesUpdatePrivateEndpointConnectionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updatePrivateEndpointConnection operation. */
export declare type PrivateLinkServicesUpdatePrivateEndpointConnectionResponse = PrivateEndpointConnection;

/** Response for the CheckPrivateLinkServiceVisibility API service call. */
export declare interface PrivateLinkServiceVisibility {
    /** Private Link Service Visibility (True/False). */
    visible?: boolean;
}

/** A load balancer probe. */
export declare type Probe = SubResource & {
    /** The name of the resource that is unique within the set of probes used by the load balancer. This name can be used to access the resource. */
    name?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /**
     * Type of the resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /**
     * The load balancer rules that use this probe.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly loadBalancingRules?: SubResource[];
    /** The protocol of the end point. If 'Tcp' is specified, a received ACK is required for the probe to be successful. If 'Http' or 'Https' is specified, a 200 OK response from the specifies URI is required for the probe to be successful. */
    protocol?: ProbeProtocol;
    /** The port for communicating the probe. Possible values range from 1 to 65535, inclusive. */
    port?: number;
    /** The interval, in seconds, for how frequently to probe the endpoint for health status. Typically, the interval is slightly less than half the allocated timeout period (in seconds) which allows two full probes before taking the instance out of rotation. The default value is 15, the minimum value is 5. */
    intervalInSeconds?: number;
    /** The number of probes where if no response, will result in stopping further traffic from being delivered to the endpoint. This values allows endpoints to be taken out of rotation faster or slower than the typical times used in Azure. */
    numberOfProbes?: number;
    /** The URI used for requesting health status from the VM. Path is required if a protocol is set to http. Otherwise, it is not allowed. There is no default value. */
    requestPath?: string;
    /**
     * The provisioning state of the probe resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/**
 * Defines values for ProbeProtocol. \
 * {@link KnownProbeProtocol} can be used interchangeably with ProbeProtocol,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Http** \
 * **Tcp** \
 * **Https**
 */
export declare type ProbeProtocol = string;

/**
 * Defines values for ProcessorArchitecture. \
 * {@link KnownProcessorArchitecture} can be used interchangeably with ProcessorArchitecture,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Amd64** \
 * **X86**
 */
export declare type ProcessorArchitecture = string;

/** The list of RouteTables to advertise the routes to. */
export declare interface PropagatedRouteTable {
    /** The list of labels. */
    labels?: string[];
    /** The list of resource ids of all the RouteTables. */
    ids?: SubResource[];
}

/**
 * Defines values for Protocol. \
 * {@link KnownProtocol} can be used interchangeably with Protocol,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Tcp** \
 * **Http** \
 * **Https** \
 * **Icmp**
 */
export declare type Protocol = string;

/** Configuration of the protocol. */
export declare interface ProtocolConfiguration {
    /** HTTP configuration of the connectivity check. */
    httpConfiguration?: HttpConfiguration;
}

/** DDoS custom policy properties. */
export declare interface ProtocolCustomSettingsFormat {
    /** The protocol for which the DDoS protection policy is being customized. */
    protocol?: DdosCustomPolicyProtocol;
    /** The customized DDoS protection trigger rate. */
    triggerRateOverride?: string;
    /** The customized DDoS protection source rate. */
    sourceRateOverride?: string;
    /** The customized DDoS protection trigger rate sensitivity degrees. High: Trigger rate set with most sensitivity w.r.t. normal traffic. Default: Trigger rate set with moderate sensitivity w.r.t. normal traffic. Low: Trigger rate set with less sensitivity w.r.t. normal traffic. Relaxed: Trigger rate set with least sensitivity w.r.t. normal traffic. */
    triggerSensitivityOverride?: DdosCustomPolicyTriggerSensitivityOverride;
}

/**
 * Defines values for ProvisioningState. \
 * {@link KnownProvisioningState} can be used interchangeably with ProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded** \
 * **Updating** \
 * **Deleting** \
 * **Failed**
 */
export declare type ProvisioningState = string;

/** Public IP address resource. */
export declare type PublicIPAddress = Resource & {
    /** The public IP address SKU. */
    sku?: PublicIPAddressSku;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /** A list of availability zones denoting the IP allocated for the resource needs to come from. */
    zones?: string[];
    /** The public IP address allocation method. */
    publicIPAllocationMethod?: IPAllocationMethod;
    /** The public IP address version. */
    publicIPAddressVersion?: IPVersion;
    /**
     * The IP configuration associated with the public IP address.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly ipConfiguration?: IPConfiguration;
    /** The FQDN of the DNS record associated with the public IP address. */
    dnsSettings?: PublicIPAddressDnsSettings;
    /** The DDoS protection custom policy associated with the public IP address. */
    ddosSettings?: DdosSettings;
    /** The list of tags associated with the public IP address. */
    ipTags?: IpTag[];
    /** The IP address associated with the public IP address resource. */
    ipAddress?: string;
    /** The Public IP Prefix this Public IP Address should be allocated from. */
    publicIPPrefix?: SubResource;
    /** The idle timeout of the public IP address. */
    idleTimeoutInMinutes?: number;
    /**
     * The resource GUID property of the public IP address resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly resourceGuid?: string;
    /**
     * The provisioning state of the public IP address resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** Contains FQDN of the DNS record associated with the public IP address. */
export declare interface PublicIPAddressDnsSettings {
    /** The domain name label. The concatenation of the domain name label and the regionalized DNS zone make up the fully qualified domain name associated with the public IP address. If a domain name label is specified, an A DNS record is created for the public IP in the Microsoft Azure DNS system. */
    domainNameLabel?: string;
    /** The Fully Qualified Domain Name of the A DNS record associated with the public IP. This is the concatenation of the domainNameLabel and the regionalized DNS zone. */
    fqdn?: string;
    /** The reverse FQDN. A user-visible, fully qualified domain name that resolves to this public IP address. If the reverseFqdn is specified, then a PTR DNS record is created pointing from the IP address in the in-addr.arpa domain to the reverse FQDN. */
    reverseFqdn?: string;
}

/** Interface representing a PublicIPAddresses. */
export declare interface PublicIPAddresses {
    /**
     * Gets all the public IP addresses in a subscription.
     * @param options The options parameters.
     */
    listAll(options?: PublicIPAddressesListAllOptionalParams): PagedAsyncIterableIterator<PublicIPAddress>;
    /**
     * Gets all public IP addresses in a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, options?: PublicIPAddressesListOptionalParams): PagedAsyncIterableIterator<PublicIPAddress>;
    /**
     * Gets information about all public IP addresses on a virtual machine scale set level.
     * @param resourceGroupName The name of the resource group.
     * @param virtualMachineScaleSetName The name of the virtual machine scale set.
     * @param options The options parameters.
     */
    listVirtualMachineScaleSetPublicIPAddresses(resourceGroupName: string, virtualMachineScaleSetName: string, options?: PublicIPAddressesListVirtualMachineScaleSetPublicIPAddressesOptionalParams): PagedAsyncIterableIterator<PublicIPAddress>;
    /**
     * Gets information about all public IP addresses in a virtual machine IP configuration in a virtual
     * machine scale set.
     * @param resourceGroupName The name of the resource group.
     * @param virtualMachineScaleSetName The name of the virtual machine scale set.
     * @param virtualmachineIndex The virtual machine index.
     * @param networkInterfaceName The network interface name.
     * @param ipConfigurationName The IP configuration name.
     * @param options The options parameters.
     */
    listVirtualMachineScaleSetVMPublicIPAddresses(resourceGroupName: string, virtualMachineScaleSetName: string, virtualmachineIndex: string, networkInterfaceName: string, ipConfigurationName: string, options?: PublicIPAddressesListVirtualMachineScaleSetVMPublicIPAddressesOptionalParams): PagedAsyncIterableIterator<PublicIPAddress>;
    /**
     * Deletes the specified public IP address.
     * @param resourceGroupName The name of the resource group.
     * @param publicIpAddressName The name of the subnet.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, publicIpAddressName: string, options?: PublicIPAddressesDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the specified public IP address.
     * @param resourceGroupName The name of the resource group.
     * @param publicIpAddressName The name of the subnet.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, publicIpAddressName: string, options?: PublicIPAddressesDeleteOptionalParams): Promise<void>;
    /**
     * Gets the specified public IP address in a specified resource group.
     * @param resourceGroupName The name of the resource group.
     * @param publicIpAddressName The name of the subnet.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, publicIpAddressName: string, options?: PublicIPAddressesGetOptionalParams): Promise<PublicIPAddressesGetResponse>;
    /**
     * Creates or updates a static or dynamic public IP address.
     * @param resourceGroupName The name of the resource group.
     * @param publicIpAddressName The name of the public IP address.
     * @param parameters Parameters supplied to the create or update public IP address operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, publicIpAddressName: string, parameters: PublicIPAddress, options?: PublicIPAddressesCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<PublicIPAddressesCreateOrUpdateResponse>, PublicIPAddressesCreateOrUpdateResponse>>;
    /**
     * Creates or updates a static or dynamic public IP address.
     * @param resourceGroupName The name of the resource group.
     * @param publicIpAddressName The name of the public IP address.
     * @param parameters Parameters supplied to the create or update public IP address operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, publicIpAddressName: string, parameters: PublicIPAddress, options?: PublicIPAddressesCreateOrUpdateOptionalParams): Promise<PublicIPAddressesCreateOrUpdateResponse>;
    /**
     * Updates public IP address tags.
     * @param resourceGroupName The name of the resource group.
     * @param publicIpAddressName The name of the public IP address.
     * @param parameters Parameters supplied to update public IP address tags.
     * @param options The options parameters.
     */
    updateTags(resourceGroupName: string, publicIpAddressName: string, parameters: TagsObject, options?: PublicIPAddressesUpdateTagsOptionalParams): Promise<PublicIPAddressesUpdateTagsResponse>;
    /**
     * Get the specified public IP address in a virtual machine scale set.
     * @param resourceGroupName The name of the resource group.
     * @param virtualMachineScaleSetName The name of the virtual machine scale set.
     * @param virtualmachineIndex The virtual machine index.
     * @param networkInterfaceName The name of the network interface.
     * @param ipConfigurationName The name of the IP configuration.
     * @param publicIpAddressName The name of the public IP Address.
     * @param options The options parameters.
     */
    getVirtualMachineScaleSetPublicIPAddress(resourceGroupName: string, virtualMachineScaleSetName: string, virtualmachineIndex: string, networkInterfaceName: string, ipConfigurationName: string, publicIpAddressName: string, options?: PublicIPAddressesGetVirtualMachineScaleSetPublicIPAddressOptionalParams): Promise<PublicIPAddressesGetVirtualMachineScaleSetPublicIPAddressResponse>;
}

/** Optional parameters. */
export declare interface PublicIPAddressesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type PublicIPAddressesCreateOrUpdateResponse = PublicIPAddress;

/** Optional parameters. */
export declare interface PublicIPAddressesDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface PublicIPAddressesGetOptionalParams extends coreClient.OperationOptions {
    /** Expands referenced resources. */
    expand?: string;
}

/** Contains response data for the get operation. */
export declare type PublicIPAddressesGetResponse = PublicIPAddress;

/** Optional parameters. */
export declare interface PublicIPAddressesGetVirtualMachineScaleSetPublicIPAddressOptionalParams extends coreClient.OperationOptions {
    /** Expands referenced resources. */
    expand?: string;
}

/** Contains response data for the getVirtualMachineScaleSetPublicIPAddress operation. */
export declare type PublicIPAddressesGetVirtualMachineScaleSetPublicIPAddressResponse = PublicIPAddress;

/** Optional parameters. */
export declare interface PublicIPAddressesListAllNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAllNext operation. */
export declare type PublicIPAddressesListAllNextResponse = PublicIPAddressListResult;

/** Optional parameters. */
export declare interface PublicIPAddressesListAllOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAll operation. */
export declare type PublicIPAddressesListAllResponse = PublicIPAddressListResult;

/** Optional parameters. */
export declare interface PublicIPAddressesListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type PublicIPAddressesListNextResponse = PublicIPAddressListResult;

/** Optional parameters. */
export declare interface PublicIPAddressesListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type PublicIPAddressesListResponse = PublicIPAddressListResult;

/** Optional parameters. */
export declare interface PublicIPAddressesListVirtualMachineScaleSetPublicIPAddressesNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listVirtualMachineScaleSetPublicIPAddressesNext operation. */
export declare type PublicIPAddressesListVirtualMachineScaleSetPublicIPAddressesNextResponse = PublicIPAddressListResult;

/** Optional parameters. */
export declare interface PublicIPAddressesListVirtualMachineScaleSetPublicIPAddressesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listVirtualMachineScaleSetPublicIPAddresses operation. */
export declare type PublicIPAddressesListVirtualMachineScaleSetPublicIPAddressesResponse = PublicIPAddressListResult;

/** Optional parameters. */
export declare interface PublicIPAddressesListVirtualMachineScaleSetVMPublicIPAddressesNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listVirtualMachineScaleSetVMPublicIPAddressesNext operation. */
export declare type PublicIPAddressesListVirtualMachineScaleSetVMPublicIPAddressesNextResponse = PublicIPAddressListResult;

/** Optional parameters. */
export declare interface PublicIPAddressesListVirtualMachineScaleSetVMPublicIPAddressesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listVirtualMachineScaleSetVMPublicIPAddresses operation. */
export declare type PublicIPAddressesListVirtualMachineScaleSetVMPublicIPAddressesResponse = PublicIPAddressListResult;

/** Optional parameters. */
export declare interface PublicIPAddressesUpdateTagsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateTags operation. */
export declare type PublicIPAddressesUpdateTagsResponse = PublicIPAddress;

/** Response for ListPublicIpAddresses API service call. */
export declare interface PublicIPAddressListResult {
    /** A list of public IP addresses that exists in a resource group. */
    value?: PublicIPAddress[];
    /** The URL to get the next set of results. */
    nextLink?: string;
}

/** SKU of a public IP address. */
export declare interface PublicIPAddressSku {
    /** Name of a public IP address SKU. */
    name?: PublicIPAddressSkuName;
}

/**
 * Defines values for PublicIPAddressSkuName. \
 * {@link KnownPublicIPAddressSkuName} can be used interchangeably with PublicIPAddressSkuName,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Basic** \
 * **Standard**
 */
export declare type PublicIPAddressSkuName = string;

/** Public IP prefix resource. */
export declare type PublicIPPrefix = Resource & {
    /** The public IP prefix SKU. */
    sku?: PublicIPPrefixSku;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /** A list of availability zones denoting the IP allocated for the resource needs to come from. */
    zones?: string[];
    /** The public IP address version. */
    publicIPAddressVersion?: IPVersion;
    /** The list of tags associated with the public IP prefix. */
    ipTags?: IpTag[];
    /** The Length of the Public IP Prefix. */
    prefixLength?: number;
    /**
     * The allocated Prefix.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly ipPrefix?: string;
    /**
     * The list of all referenced PublicIPAddresses.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly publicIPAddresses?: ReferencedPublicIpAddress[];
    /**
     * The reference to load balancer frontend IP configuration associated with the public IP prefix.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly loadBalancerFrontendIpConfiguration?: SubResource;
    /**
     * The resource GUID property of the public IP prefix resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly resourceGuid?: string;
    /**
     * The provisioning state of the public IP prefix resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** Interface representing a PublicIPPrefixes. */
export declare interface PublicIPPrefixes {
    /**
     * Gets all the public IP prefixes in a subscription.
     * @param options The options parameters.
     */
    listAll(options?: PublicIPPrefixesListAllOptionalParams): PagedAsyncIterableIterator<PublicIPPrefix>;
    /**
     * Gets all public IP prefixes in a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, options?: PublicIPPrefixesListOptionalParams): PagedAsyncIterableIterator<PublicIPPrefix>;
    /**
     * Deletes the specified public IP prefix.
     * @param resourceGroupName The name of the resource group.
     * @param publicIpPrefixName The name of the PublicIpPrefix.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, publicIpPrefixName: string, options?: PublicIPPrefixesDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the specified public IP prefix.
     * @param resourceGroupName The name of the resource group.
     * @param publicIpPrefixName The name of the PublicIpPrefix.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, publicIpPrefixName: string, options?: PublicIPPrefixesDeleteOptionalParams): Promise<void>;
    /**
     * Gets the specified public IP prefix in a specified resource group.
     * @param resourceGroupName The name of the resource group.
     * @param publicIpPrefixName The name of the public IP prefix.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, publicIpPrefixName: string, options?: PublicIPPrefixesGetOptionalParams): Promise<PublicIPPrefixesGetResponse>;
    /**
     * Creates or updates a static or dynamic public IP prefix.
     * @param resourceGroupName The name of the resource group.
     * @param publicIpPrefixName The name of the public IP prefix.
     * @param parameters Parameters supplied to the create or update public IP prefix operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, publicIpPrefixName: string, parameters: PublicIPPrefix, options?: PublicIPPrefixesCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<PublicIPPrefixesCreateOrUpdateResponse>, PublicIPPrefixesCreateOrUpdateResponse>>;
    /**
     * Creates or updates a static or dynamic public IP prefix.
     * @param resourceGroupName The name of the resource group.
     * @param publicIpPrefixName The name of the public IP prefix.
     * @param parameters Parameters supplied to the create or update public IP prefix operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, publicIpPrefixName: string, parameters: PublicIPPrefix, options?: PublicIPPrefixesCreateOrUpdateOptionalParams): Promise<PublicIPPrefixesCreateOrUpdateResponse>;
    /**
     * Updates public IP prefix tags.
     * @param resourceGroupName The name of the resource group.
     * @param publicIpPrefixName The name of the public IP prefix.
     * @param parameters Parameters supplied to update public IP prefix tags.
     * @param options The options parameters.
     */
    updateTags(resourceGroupName: string, publicIpPrefixName: string, parameters: TagsObject, options?: PublicIPPrefixesUpdateTagsOptionalParams): Promise<PublicIPPrefixesUpdateTagsResponse>;
}

/** Optional parameters. */
export declare interface PublicIPPrefixesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type PublicIPPrefixesCreateOrUpdateResponse = PublicIPPrefix;

/** Optional parameters. */
export declare interface PublicIPPrefixesDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface PublicIPPrefixesGetOptionalParams extends coreClient.OperationOptions {
    /** Expands referenced resources. */
    expand?: string;
}

/** Contains response data for the get operation. */
export declare type PublicIPPrefixesGetResponse = PublicIPPrefix;

/** Optional parameters. */
export declare interface PublicIPPrefixesListAllNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAllNext operation. */
export declare type PublicIPPrefixesListAllNextResponse = PublicIPPrefixListResult;

/** Optional parameters. */
export declare interface PublicIPPrefixesListAllOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAll operation. */
export declare type PublicIPPrefixesListAllResponse = PublicIPPrefixListResult;

/** Optional parameters. */
export declare interface PublicIPPrefixesListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type PublicIPPrefixesListNextResponse = PublicIPPrefixListResult;

/** Optional parameters. */
export declare interface PublicIPPrefixesListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type PublicIPPrefixesListResponse = PublicIPPrefixListResult;

/** Optional parameters. */
export declare interface PublicIPPrefixesUpdateTagsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateTags operation. */
export declare type PublicIPPrefixesUpdateTagsResponse = PublicIPPrefix;

/** Response for ListPublicIpPrefixes API service call. */
export declare interface PublicIPPrefixListResult {
    /** A list of public IP prefixes that exists in a resource group. */
    value?: PublicIPPrefix[];
    /** The URL to get the next set of results. */
    nextLink?: string;
}

/** SKU of a public IP prefix. */
export declare interface PublicIPPrefixSku {
    /** Name of a public IP prefix SKU. */
    name?: PublicIPPrefixSkuName;
}

/**
 * Defines values for PublicIPPrefixSkuName. \
 * {@link KnownPublicIPPrefixSkuName} can be used interchangeably with PublicIPPrefixSkuName,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Standard**
 */
export declare type PublicIPPrefixSkuName = string;

/** Optional parameters. */
export declare interface PutBastionShareableLinkNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the putBastionShareableLinkNext operation. */
export declare type PutBastionShareableLinkNextResponse = BastionShareableLinkListResult;

/** Optional parameters. */
export declare interface PutBastionShareableLinkOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the putBastionShareableLink operation. */
export declare type PutBastionShareableLinkResponse = BastionShareableLinkListResult;

/** Parameters that define the resource to query the troubleshooting result. */
export declare interface QueryTroubleshootingParameters {
    /** The target resource ID to query the troubleshooting result. */
    targetResourceId: string;
}

/** Radius Server Settings. */
export declare interface RadiusServer {
    /** The address of this radius server. */
    radiusServerAddress: string;
    /** The initial score assigned to this radius server. */
    radiusServerScore?: number;
    /** The secret used for this radius server. */
    radiusServerSecret?: string;
}

/** A collective group of information about the record set information. */
export declare interface RecordSet {
    /** Resource record type. */
    recordType?: string;
    /** Recordset name. */
    recordSetName?: string;
    /** Fqdn that resolves to private endpoint ip address. */
    fqdn?: string;
    /**
     * The provisioning state of the recordset.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
    /** Recordset time to live. */
    ttl?: number;
    /** The private ip address of the private endpoint. */
    ipAddresses?: string[];
}

/** Reference to a public IP address. */
export declare interface ReferencedPublicIpAddress {
    /** The PublicIPAddress Reference. */
    id?: string;
}

/** Common resource representation. */
export declare interface Resource {
    /** Resource ID. */
    id?: string;
    /**
     * Resource name.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * Resource type.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /** Resource location. */
    location?: string;
    /** Resource tags. */
    tags?: {
        [propertyName: string]: string;
    };
}

/** Defines values for ResourceIdentityType. */
export declare type ResourceIdentityType = "SystemAssigned" | "UserAssigned" | "SystemAssigned, UserAssigned" | "None";

/** ResourceNavigationLink resource. */
export declare type ResourceNavigationLink = SubResource & {
    /** Name of the resource that is unique within a resource group. This name can be used to access the resource. */
    name?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /**
     * Resource type.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /** Resource type of the linked resource. */
    linkedResourceType?: string;
    /** Link to the external resource. */
    link?: string;
    /**
     * The provisioning state of the resource navigation link resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** Interface representing a ResourceNavigationLinks. */
export declare interface ResourceNavigationLinks {
    /**
     * Gets a list of resource navigation links for a subnet.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkName The name of the virtual network.
     * @param subnetName The name of the subnet.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, virtualNetworkName: string, subnetName: string, options?: ResourceNavigationLinksListOptionalParams): Promise<ResourceNavigationLinksListResponse>;
}

/** Optional parameters. */
export declare interface ResourceNavigationLinksListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type ResourceNavigationLinksListResponse = ResourceNavigationLinksListResult;

/** Response for ResourceNavigationLinks_List operation. */
export declare interface ResourceNavigationLinksListResult {
    /** The resource navigation links in a subnet. */
    value?: ResourceNavigationLink[];
    /**
     * The URL to get the next set of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** The base resource set for visibility and auto-approval. */
export declare interface ResourceSet {
    /** The list of subscriptions. */
    subscriptions?: string[];
}

/** Parameters that define the retention policy for flow log. */
export declare interface RetentionPolicyParameters {
    /** Number of days to retain flow log records. */
    days?: number;
    /** Flag to enable/disable retention. */
    enabled?: boolean;
}

/** Route resource. */
export declare type Route = SubResource & {
    /** The name of the resource that is unique within a resource group. This name can be used to access the resource. */
    name?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /** The destination CIDR to which the route applies. */
    addressPrefix?: string;
    /** The type of Azure hop the packet should be sent to. */
    nextHopType?: RouteNextHopType;
    /** The IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is VirtualAppliance. */
    nextHopIpAddress?: string;
    /**
     * The provisioning state of the route resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** Route Filter Resource. */
export declare type RouteFilter = Resource & {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /** Collection of RouteFilterRules contained within a route filter. */
    rules?: RouteFilterRule[];
    /**
     * A collection of references to express route circuit peerings.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly peerings?: ExpressRouteCircuitPeering[];
    /**
     * A collection of references to express route circuit ipv6 peerings.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly ipv6Peerings?: ExpressRouteCircuitPeering[];
    /**
     * The provisioning state of the route filter resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** Response for the ListRouteFilters API service call. */
export declare interface RouteFilterListResult {
    /** A list of route filters in a resource group. */
    value?: RouteFilter[];
    /** The URL to get the next set of results. */
    nextLink?: string;
}

/** Route Filter Rule Resource. */
export declare type RouteFilterRule = SubResource & {
    /** The name of the resource that is unique within a resource group. This name can be used to access the resource. */
    name?: string;
    /** Resource location. */
    location?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /** The access type of the rule. */
    access?: Access;
    /** The rule type of the rule. */
    routeFilterRuleType?: RouteFilterRuleType;
    /** The collection for bgp community values to filter on. e.g. ['12076:5010','12076:5020']. */
    communities?: string[];
    /**
     * The provisioning state of the route filter rule resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** Response for the ListRouteFilterRules API service call. */
export declare interface RouteFilterRuleListResult {
    /** A list of RouteFilterRules in a resource group. */
    value?: RouteFilterRule[];
    /** The URL to get the next set of results. */
    nextLink?: string;
}

/** Interface representing a RouteFilterRules. */
export declare interface RouteFilterRules {
    /**
     * Gets all RouteFilterRules in a route filter.
     * @param resourceGroupName The name of the resource group.
     * @param routeFilterName The name of the route filter.
     * @param options The options parameters.
     */
    listByRouteFilter(resourceGroupName: string, routeFilterName: string, options?: RouteFilterRulesListByRouteFilterOptionalParams): PagedAsyncIterableIterator<RouteFilterRule>;
    /**
     * Deletes the specified rule from a route filter.
     * @param resourceGroupName The name of the resource group.
     * @param routeFilterName The name of the route filter.
     * @param ruleName The name of the rule.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, routeFilterName: string, ruleName: string, options?: RouteFilterRulesDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the specified rule from a route filter.
     * @param resourceGroupName The name of the resource group.
     * @param routeFilterName The name of the route filter.
     * @param ruleName The name of the rule.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, routeFilterName: string, ruleName: string, options?: RouteFilterRulesDeleteOptionalParams): Promise<void>;
    /**
     * Gets the specified rule from a route filter.
     * @param resourceGroupName The name of the resource group.
     * @param routeFilterName The name of the route filter.
     * @param ruleName The name of the rule.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, routeFilterName: string, ruleName: string, options?: RouteFilterRulesGetOptionalParams): Promise<RouteFilterRulesGetResponse>;
    /**
     * Creates or updates a route in the specified route filter.
     * @param resourceGroupName The name of the resource group.
     * @param routeFilterName The name of the route filter.
     * @param ruleName The name of the route filter rule.
     * @param routeFilterRuleParameters Parameters supplied to the create or update route filter rule
     *                                  operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, routeFilterName: string, ruleName: string, routeFilterRuleParameters: RouteFilterRule, options?: RouteFilterRulesCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<RouteFilterRulesCreateOrUpdateResponse>, RouteFilterRulesCreateOrUpdateResponse>>;
    /**
     * Creates or updates a route in the specified route filter.
     * @param resourceGroupName The name of the resource group.
     * @param routeFilterName The name of the route filter.
     * @param ruleName The name of the route filter rule.
     * @param routeFilterRuleParameters Parameters supplied to the create or update route filter rule
     *                                  operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, routeFilterName: string, ruleName: string, routeFilterRuleParameters: RouteFilterRule, options?: RouteFilterRulesCreateOrUpdateOptionalParams): Promise<RouteFilterRulesCreateOrUpdateResponse>;
}

/** Optional parameters. */
export declare interface RouteFilterRulesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type RouteFilterRulesCreateOrUpdateResponse = RouteFilterRule;

/** Optional parameters. */
export declare interface RouteFilterRulesDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface RouteFilterRulesGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type RouteFilterRulesGetResponse = RouteFilterRule;

/** Optional parameters. */
export declare interface RouteFilterRulesListByRouteFilterNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByRouteFilterNext operation. */
export declare type RouteFilterRulesListByRouteFilterNextResponse = RouteFilterRuleListResult;

/** Optional parameters. */
export declare interface RouteFilterRulesListByRouteFilterOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByRouteFilter operation. */
export declare type RouteFilterRulesListByRouteFilterResponse = RouteFilterRuleListResult;

/**
 * Defines values for RouteFilterRuleType. \
 * {@link KnownRouteFilterRuleType} can be used interchangeably with RouteFilterRuleType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Community**
 */
export declare type RouteFilterRuleType = string;

/** Interface representing a RouteFilters. */
export declare interface RouteFilters {
    /**
     * Gets all route filters in a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: RouteFiltersListByResourceGroupOptionalParams): PagedAsyncIterableIterator<RouteFilter>;
    /**
     * Gets all route filters in a subscription.
     * @param options The options parameters.
     */
    list(options?: RouteFiltersListOptionalParams): PagedAsyncIterableIterator<RouteFilter>;
    /**
     * Deletes the specified route filter.
     * @param resourceGroupName The name of the resource group.
     * @param routeFilterName The name of the route filter.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, routeFilterName: string, options?: RouteFiltersDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the specified route filter.
     * @param resourceGroupName The name of the resource group.
     * @param routeFilterName The name of the route filter.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, routeFilterName: string, options?: RouteFiltersDeleteOptionalParams): Promise<void>;
    /**
     * Gets the specified route filter.
     * @param resourceGroupName The name of the resource group.
     * @param routeFilterName The name of the route filter.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, routeFilterName: string, options?: RouteFiltersGetOptionalParams): Promise<RouteFiltersGetResponse>;
    /**
     * Creates or updates a route filter in a specified resource group.
     * @param resourceGroupName The name of the resource group.
     * @param routeFilterName The name of the route filter.
     * @param routeFilterParameters Parameters supplied to the create or update route filter operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, routeFilterName: string, routeFilterParameters: RouteFilter, options?: RouteFiltersCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<RouteFiltersCreateOrUpdateResponse>, RouteFiltersCreateOrUpdateResponse>>;
    /**
     * Creates or updates a route filter in a specified resource group.
     * @param resourceGroupName The name of the resource group.
     * @param routeFilterName The name of the route filter.
     * @param routeFilterParameters Parameters supplied to the create or update route filter operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, routeFilterName: string, routeFilterParameters: RouteFilter, options?: RouteFiltersCreateOrUpdateOptionalParams): Promise<RouteFiltersCreateOrUpdateResponse>;
    /**
     * Updates tags of a route filter.
     * @param resourceGroupName The name of the resource group.
     * @param routeFilterName The name of the route filter.
     * @param parameters Parameters supplied to update route filter tags.
     * @param options The options parameters.
     */
    updateTags(resourceGroupName: string, routeFilterName: string, parameters: TagsObject, options?: RouteFiltersUpdateTagsOptionalParams): Promise<RouteFiltersUpdateTagsResponse>;
}

/** Optional parameters. */
export declare interface RouteFiltersCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type RouteFiltersCreateOrUpdateResponse = RouteFilter;

/** Optional parameters. */
export declare interface RouteFiltersDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface RouteFiltersGetOptionalParams extends coreClient.OperationOptions {
    /** Expands referenced express route bgp peering resources. */
    expand?: string;
}

/** Contains response data for the get operation. */
export declare type RouteFiltersGetResponse = RouteFilter;

/** Optional parameters. */
export declare interface RouteFiltersListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNext operation. */
export declare type RouteFiltersListByResourceGroupNextResponse = RouteFilterListResult;

/** Optional parameters. */
export declare interface RouteFiltersListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroup operation. */
export declare type RouteFiltersListByResourceGroupResponse = RouteFilterListResult;

/** Optional parameters. */
export declare interface RouteFiltersListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type RouteFiltersListNextResponse = RouteFilterListResult;

/** Optional parameters. */
export declare interface RouteFiltersListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type RouteFiltersListResponse = RouteFilterListResult;

/** Optional parameters. */
export declare interface RouteFiltersUpdateTagsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateTags operation. */
export declare type RouteFiltersUpdateTagsResponse = RouteFilter;

/** Response for the ListRoute API service call. */
export declare interface RouteListResult {
    /** A list of routes in a resource group. */
    value?: Route[];
    /** The URL to get the next set of results. */
    nextLink?: string;
}

/**
 * Defines values for RouteNextHopType. \
 * {@link KnownRouteNextHopType} can be used interchangeably with RouteNextHopType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **VirtualNetworkGateway** \
 * **VnetLocal** \
 * **Internet** \
 * **VirtualAppliance** \
 * **None**
 */
export declare type RouteNextHopType = string;

/** Interface representing a Routes. */
export declare interface Routes {
    /**
     * Gets all routes in a route table.
     * @param resourceGroupName The name of the resource group.
     * @param routeTableName The name of the route table.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, routeTableName: string, options?: RoutesListOptionalParams): PagedAsyncIterableIterator<Route>;
    /**
     * Deletes the specified route from a route table.
     * @param resourceGroupName The name of the resource group.
     * @param routeTableName The name of the route table.
     * @param routeName The name of the route.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, routeTableName: string, routeName: string, options?: RoutesDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the specified route from a route table.
     * @param resourceGroupName The name of the resource group.
     * @param routeTableName The name of the route table.
     * @param routeName The name of the route.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, routeTableName: string, routeName: string, options?: RoutesDeleteOptionalParams): Promise<void>;
    /**
     * Gets the specified route from a route table.
     * @param resourceGroupName The name of the resource group.
     * @param routeTableName The name of the route table.
     * @param routeName The name of the route.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, routeTableName: string, routeName: string, options?: RoutesGetOptionalParams): Promise<RoutesGetResponse>;
    /**
     * Creates or updates a route in the specified route table.
     * @param resourceGroupName The name of the resource group.
     * @param routeTableName The name of the route table.
     * @param routeName The name of the route.
     * @param routeParameters Parameters supplied to the create or update route operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, routeTableName: string, routeName: string, routeParameters: Route, options?: RoutesCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<RoutesCreateOrUpdateResponse>, RoutesCreateOrUpdateResponse>>;
    /**
     * Creates or updates a route in the specified route table.
     * @param resourceGroupName The name of the resource group.
     * @param routeTableName The name of the route table.
     * @param routeName The name of the route.
     * @param routeParameters Parameters supplied to the create or update route operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, routeTableName: string, routeName: string, routeParameters: Route, options?: RoutesCreateOrUpdateOptionalParams): Promise<RoutesCreateOrUpdateResponse>;
}

/** Optional parameters. */
export declare interface RoutesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type RoutesCreateOrUpdateResponse = Route;

/** Optional parameters. */
export declare interface RoutesDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface RoutesGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type RoutesGetResponse = Route;

/** Optional parameters. */
export declare interface RoutesListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type RoutesListNextResponse = RouteListResult;

/** Optional parameters. */
export declare interface RoutesListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type RoutesListResponse = RouteListResult;

/** Route table resource. */
export declare type RouteTable = Resource & {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /** Collection of routes contained within a route table. */
    routes?: Route[];
    /**
     * A collection of references to subnets.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly subnets?: Subnet[];
    /** Whether to disable the routes learned by BGP on that route table. True means disable. */
    disableBgpRoutePropagation?: boolean;
    /**
     * The provisioning state of the route table resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** Response for the ListRouteTable API service call. */
export declare interface RouteTableListResult {
    /** A list of route tables in a resource group. */
    value?: RouteTable[];
    /** The URL to get the next set of results. */
    nextLink?: string;
}

/** Interface representing a RouteTables. */
export declare interface RouteTables {
    /**
     * Gets all route tables in a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, options?: RouteTablesListOptionalParams): PagedAsyncIterableIterator<RouteTable>;
    /**
     * Gets all route tables in a subscription.
     * @param options The options parameters.
     */
    listAll(options?: RouteTablesListAllOptionalParams): PagedAsyncIterableIterator<RouteTable>;
    /**
     * Deletes the specified route table.
     * @param resourceGroupName The name of the resource group.
     * @param routeTableName The name of the route table.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, routeTableName: string, options?: RouteTablesDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the specified route table.
     * @param resourceGroupName The name of the resource group.
     * @param routeTableName The name of the route table.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, routeTableName: string, options?: RouteTablesDeleteOptionalParams): Promise<void>;
    /**
     * Gets the specified route table.
     * @param resourceGroupName The name of the resource group.
     * @param routeTableName The name of the route table.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, routeTableName: string, options?: RouteTablesGetOptionalParams): Promise<RouteTablesGetResponse>;
    /**
     * Create or updates a route table in a specified resource group.
     * @param resourceGroupName The name of the resource group.
     * @param routeTableName The name of the route table.
     * @param parameters Parameters supplied to the create or update route table operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, routeTableName: string, parameters: RouteTable, options?: RouteTablesCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<RouteTablesCreateOrUpdateResponse>, RouteTablesCreateOrUpdateResponse>>;
    /**
     * Create or updates a route table in a specified resource group.
     * @param resourceGroupName The name of the resource group.
     * @param routeTableName The name of the route table.
     * @param parameters Parameters supplied to the create or update route table operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, routeTableName: string, parameters: RouteTable, options?: RouteTablesCreateOrUpdateOptionalParams): Promise<RouteTablesCreateOrUpdateResponse>;
    /**
     * Updates a route table tags.
     * @param resourceGroupName The name of the resource group.
     * @param routeTableName The name of the route table.
     * @param parameters Parameters supplied to update route table tags.
     * @param options The options parameters.
     */
    updateTags(resourceGroupName: string, routeTableName: string, parameters: TagsObject, options?: RouteTablesUpdateTagsOptionalParams): Promise<RouteTablesUpdateTagsResponse>;
}

/** Optional parameters. */
export declare interface RouteTablesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type RouteTablesCreateOrUpdateResponse = RouteTable;

/** Optional parameters. */
export declare interface RouteTablesDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface RouteTablesGetOptionalParams extends coreClient.OperationOptions {
    /** Expands referenced resources. */
    expand?: string;
}

/** Contains response data for the get operation. */
export declare type RouteTablesGetResponse = RouteTable;

/** Optional parameters. */
export declare interface RouteTablesListAllNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAllNext operation. */
export declare type RouteTablesListAllNextResponse = RouteTableListResult;

/** Optional parameters. */
export declare interface RouteTablesListAllOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAll operation. */
export declare type RouteTablesListAllResponse = RouteTableListResult;

/** Optional parameters. */
export declare interface RouteTablesListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type RouteTablesListNextResponse = RouteTableListResult;

/** Optional parameters. */
export declare interface RouteTablesListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type RouteTablesListResponse = RouteTableListResult;

/** Optional parameters. */
export declare interface RouteTablesUpdateTagsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateTags operation. */
export declare type RouteTablesUpdateTagsResponse = RouteTable;

/** Routing Configuration indicating the associated and propagated route tables for this connection. */
export declare interface RoutingConfiguration {
    /** The resource id RouteTable associated with this RoutingConfiguration. */
    associatedRouteTable?: SubResource;
    /** The list of RouteTables to advertise the routes to. */
    propagatedRouteTables?: PropagatedRouteTable;
    /** List of routes that control routing from VirtualHub into a virtual network connection. */
    vnetRoutes?: VnetRoute;
}

/** Network interface and all its associated security rules. */
export declare interface SecurityGroupNetworkInterface {
    /** ID of the network interface. */
    id?: string;
    /** All security rules associated with the network interface. */
    securityRuleAssociations?: SecurityRuleAssociations;
}

/** Parameters that define the VM to check security groups for. */
export declare interface SecurityGroupViewParameters {
    /** ID of the target VM. */
    targetResourceId: string;
}

/** The information about security rules applied to the specified VM. */
export declare interface SecurityGroupViewResult {
    /** List of network interfaces on the specified VM. */
    networkInterfaces?: SecurityGroupNetworkInterface[];
}

/** Security Partner Provider resource. */
export declare type SecurityPartnerProvider = Resource & {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /**
     * The provisioning state of the Security Partner Provider resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
    /** The security provider name. */
    securityProviderName?: SecurityProviderName;
    /**
     * The connection status with the Security Partner Provider.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly connectionStatus?: SecurityPartnerProviderConnectionStatus;
    /** The virtualHub to which the Security Partner Provider belongs. */
    virtualHub?: SubResource;
};

/**
 * Defines values for SecurityPartnerProviderConnectionStatus. \
 * {@link KnownSecurityPartnerProviderConnectionStatus} can be used interchangeably with SecurityPartnerProviderConnectionStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown** \
 * **PartiallyConnected** \
 * **Connected** \
 * **NotConnected**
 */
export declare type SecurityPartnerProviderConnectionStatus = string;

/** Response for ListSecurityPartnerProviders API service call. */
export declare interface SecurityPartnerProviderListResult {
    /** List of Security Partner Providers in a resource group. */
    value?: SecurityPartnerProvider[];
    /** URL to get the next set of results. */
    nextLink?: string;
}

/** Interface representing a SecurityPartnerProviders. */
export declare interface SecurityPartnerProviders {
    /**
     * Lists all Security Partner Providers in a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: SecurityPartnerProvidersListByResourceGroupOptionalParams): PagedAsyncIterableIterator<SecurityPartnerProvider>;
    /**
     * Gets all the Security Partner Providers in a subscription.
     * @param options The options parameters.
     */
    list(options?: SecurityPartnerProvidersListOptionalParams): PagedAsyncIterableIterator<SecurityPartnerProvider>;
    /**
     * Deletes the specified Security Partner Provider.
     * @param resourceGroupName The name of the resource group.
     * @param securityPartnerProviderName The name of the Security Partner Provider.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, securityPartnerProviderName: string, options?: SecurityPartnerProvidersDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the specified Security Partner Provider.
     * @param resourceGroupName The name of the resource group.
     * @param securityPartnerProviderName The name of the Security Partner Provider.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, securityPartnerProviderName: string, options?: SecurityPartnerProvidersDeleteOptionalParams): Promise<void>;
    /**
     * Gets the specified Security Partner Provider.
     * @param resourceGroupName The name of the resource group.
     * @param securityPartnerProviderName The name of the Security Partner Provider.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, securityPartnerProviderName: string, options?: SecurityPartnerProvidersGetOptionalParams): Promise<SecurityPartnerProvidersGetResponse>;
    /**
     * Creates or updates the specified Security Partner Provider.
     * @param resourceGroupName The name of the resource group.
     * @param securityPartnerProviderName The name of the Security Partner Provider.
     * @param parameters Parameters supplied to the create or update Security Partner Provider operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, securityPartnerProviderName: string, parameters: SecurityPartnerProvider, options?: SecurityPartnerProvidersCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<SecurityPartnerProvidersCreateOrUpdateResponse>, SecurityPartnerProvidersCreateOrUpdateResponse>>;
    /**
     * Creates or updates the specified Security Partner Provider.
     * @param resourceGroupName The name of the resource group.
     * @param securityPartnerProviderName The name of the Security Partner Provider.
     * @param parameters Parameters supplied to the create or update Security Partner Provider operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, securityPartnerProviderName: string, parameters: SecurityPartnerProvider, options?: SecurityPartnerProvidersCreateOrUpdateOptionalParams): Promise<SecurityPartnerProvidersCreateOrUpdateResponse>;
    /**
     * Updates tags of a Security Partner Provider resource.
     * @param resourceGroupName The name of the resource group.
     * @param securityPartnerProviderName The name of the Security Partner Provider.
     * @param parameters Parameters supplied to update Security Partner Provider tags.
     * @param options The options parameters.
     */
    updateTags(resourceGroupName: string, securityPartnerProviderName: string, parameters: TagsObject, options?: SecurityPartnerProvidersUpdateTagsOptionalParams): Promise<SecurityPartnerProvidersUpdateTagsResponse>;
}

/** Optional parameters. */
export declare interface SecurityPartnerProvidersCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type SecurityPartnerProvidersCreateOrUpdateResponse = SecurityPartnerProvider;

/** Optional parameters. */
export declare interface SecurityPartnerProvidersDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface SecurityPartnerProvidersGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type SecurityPartnerProvidersGetResponse = SecurityPartnerProvider;

/** Optional parameters. */
export declare interface SecurityPartnerProvidersListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNext operation. */
export declare type SecurityPartnerProvidersListByResourceGroupNextResponse = SecurityPartnerProviderListResult;

/** Optional parameters. */
export declare interface SecurityPartnerProvidersListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroup operation. */
export declare type SecurityPartnerProvidersListByResourceGroupResponse = SecurityPartnerProviderListResult;

/** Optional parameters. */
export declare interface SecurityPartnerProvidersListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type SecurityPartnerProvidersListNextResponse = SecurityPartnerProviderListResult;

/** Optional parameters. */
export declare interface SecurityPartnerProvidersListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type SecurityPartnerProvidersListResponse = SecurityPartnerProviderListResult;

/** Optional parameters. */
export declare interface SecurityPartnerProvidersUpdateTagsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateTags operation. */
export declare type SecurityPartnerProvidersUpdateTagsResponse = SecurityPartnerProvider;

/**
 * Defines values for SecurityProviderName. \
 * {@link KnownSecurityProviderName} can be used interchangeably with SecurityProviderName,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **ZScaler** \
 * **IBoss** \
 * **Checkpoint**
 */
export declare type SecurityProviderName = string;

/** Network security rule. */
export declare type SecurityRule = SubResource & {
    /** The name of the resource that is unique within a resource group. This name can be used to access the resource. */
    name?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /** A description for this rule. Restricted to 140 chars. */
    description?: string;
    /** Network protocol this rule applies to. */
    protocol?: SecurityRuleProtocol;
    /** The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports. */
    sourcePortRange?: string;
    /** The destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports. */
    destinationPortRange?: string;
    /** The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from. */
    sourceAddressPrefix?: string;
    /** The CIDR or source IP ranges. */
    sourceAddressPrefixes?: string[];
    /** The application security group specified as source. */
    sourceApplicationSecurityGroups?: ApplicationSecurityGroup[];
    /** The destination address prefix. CIDR or destination IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. */
    destinationAddressPrefix?: string;
    /** The destination address prefixes. CIDR or destination IP ranges. */
    destinationAddressPrefixes?: string[];
    /** The application security group specified as destination. */
    destinationApplicationSecurityGroups?: ApplicationSecurityGroup[];
    /** The source port ranges. */
    sourcePortRanges?: string[];
    /** The destination port ranges. */
    destinationPortRanges?: string[];
    /** The network traffic is allowed or denied. */
    access?: SecurityRuleAccess;
    /** The priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule. */
    priority?: number;
    /** The direction of the rule. The direction specifies if rule will be evaluated on incoming or outgoing traffic. */
    direction?: SecurityRuleDirection;
    /**
     * The provisioning state of the security rule resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/**
 * Defines values for SecurityRuleAccess. \
 * {@link KnownSecurityRuleAccess} can be used interchangeably with SecurityRuleAccess,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Allow** \
 * **Deny**
 */
export declare type SecurityRuleAccess = string;

/** All security rules associated with the network interface. */
export declare interface SecurityRuleAssociations {
    /** Network interface and it's custom security rules. */
    networkInterfaceAssociation?: NetworkInterfaceAssociation;
    /** Subnet and it's custom security rules. */
    subnetAssociation?: SubnetAssociation;
    /** Collection of default security rules of the network security group. */
    defaultSecurityRules?: SecurityRule[];
    /** Collection of effective security rules. */
    effectiveSecurityRules?: EffectiveNetworkSecurityRule[];
}

/**
 * Defines values for SecurityRuleDirection. \
 * {@link KnownSecurityRuleDirection} can be used interchangeably with SecurityRuleDirection,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Inbound** \
 * **Outbound**
 */
export declare type SecurityRuleDirection = string;

/** Response for ListSecurityRule API service call. Retrieves all security rules that belongs to a network security group. */
export declare interface SecurityRuleListResult {
    /** The security rules in a network security group. */
    value?: SecurityRule[];
    /** The URL to get the next set of results. */
    nextLink?: string;
}

/**
 * Defines values for SecurityRuleProtocol. \
 * {@link KnownSecurityRuleProtocol} can be used interchangeably with SecurityRuleProtocol,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Tcp** \
 * **Udp** \
 * **Icmp** \
 * **Esp** \
 * ***** \
 * **Ah**
 */
export declare type SecurityRuleProtocol = string;

/** Interface representing a SecurityRules. */
export declare interface SecurityRules {
    /**
     * Gets all security rules in a network security group.
     * @param resourceGroupName The name of the resource group.
     * @param networkSecurityGroupName The name of the network security group.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, networkSecurityGroupName: string, options?: SecurityRulesListOptionalParams): PagedAsyncIterableIterator<SecurityRule>;
    /**
     * Deletes the specified network security rule.
     * @param resourceGroupName The name of the resource group.
     * @param networkSecurityGroupName The name of the network security group.
     * @param securityRuleName The name of the security rule.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, networkSecurityGroupName: string, securityRuleName: string, options?: SecurityRulesDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the specified network security rule.
     * @param resourceGroupName The name of the resource group.
     * @param networkSecurityGroupName The name of the network security group.
     * @param securityRuleName The name of the security rule.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, networkSecurityGroupName: string, securityRuleName: string, options?: SecurityRulesDeleteOptionalParams): Promise<void>;
    /**
     * Get the specified network security rule.
     * @param resourceGroupName The name of the resource group.
     * @param networkSecurityGroupName The name of the network security group.
     * @param securityRuleName The name of the security rule.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, networkSecurityGroupName: string, securityRuleName: string, options?: SecurityRulesGetOptionalParams): Promise<SecurityRulesGetResponse>;
    /**
     * Creates or updates a security rule in the specified network security group.
     * @param resourceGroupName The name of the resource group.
     * @param networkSecurityGroupName The name of the network security group.
     * @param securityRuleName The name of the security rule.
     * @param securityRuleParameters Parameters supplied to the create or update network security rule
     *                               operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, networkSecurityGroupName: string, securityRuleName: string, securityRuleParameters: SecurityRule, options?: SecurityRulesCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<SecurityRulesCreateOrUpdateResponse>, SecurityRulesCreateOrUpdateResponse>>;
    /**
     * Creates or updates a security rule in the specified network security group.
     * @param resourceGroupName The name of the resource group.
     * @param networkSecurityGroupName The name of the network security group.
     * @param securityRuleName The name of the security rule.
     * @param securityRuleParameters Parameters supplied to the create or update network security rule
     *                               operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, networkSecurityGroupName: string, securityRuleName: string, securityRuleParameters: SecurityRule, options?: SecurityRulesCreateOrUpdateOptionalParams): Promise<SecurityRulesCreateOrUpdateResponse>;
}

/** Optional parameters. */
export declare interface SecurityRulesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type SecurityRulesCreateOrUpdateResponse = SecurityRule;

/** Optional parameters. */
export declare interface SecurityRulesDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface SecurityRulesGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type SecurityRulesGetResponse = SecurityRule;

/** Optional parameters. */
export declare interface SecurityRulesListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type SecurityRulesListNextResponse = SecurityRuleListResult;

/** Optional parameters. */
export declare interface SecurityRulesListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type SecurityRulesListResponse = SecurityRuleListResult;

/** ServiceAssociationLink resource. */
export declare type ServiceAssociationLink = SubResource & {
    /** Name of the resource that is unique within a resource group. This name can be used to access the resource. */
    name?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /**
     * Resource type.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /** Resource type of the linked resource. */
    linkedResourceType?: string;
    /** Link to the external resource. */
    link?: string;
    /**
     * The provisioning state of the service association link resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
    /** If true, the resource can be deleted. */
    allowDelete?: boolean;
    /** A list of locations. */
    locations?: string[];
};

/** Interface representing a ServiceAssociationLinks. */
export declare interface ServiceAssociationLinks {
    /**
     * Gets a list of service association links for a subnet.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkName The name of the virtual network.
     * @param subnetName The name of the subnet.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, virtualNetworkName: string, subnetName: string, options?: ServiceAssociationLinksListOptionalParams): Promise<ServiceAssociationLinksListResponse>;
}

/** Optional parameters. */
export declare interface ServiceAssociationLinksListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type ServiceAssociationLinksListResponse = ServiceAssociationLinksListResult;

/** Response for ServiceAssociationLinks_List operation. */
export declare interface ServiceAssociationLinksListResult {
    /** The service association links in a subnet. */
    value?: ServiceAssociationLink[];
    /**
     * The URL to get the next set of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Interface representing a ServiceEndpointPolicies. */
export declare interface ServiceEndpointPolicies {
    /**
     * Gets all the service endpoint policies in a subscription.
     * @param options The options parameters.
     */
    list(options?: ServiceEndpointPoliciesListOptionalParams): PagedAsyncIterableIterator<ServiceEndpointPolicy>;
    /**
     * Gets all service endpoint Policies in a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: ServiceEndpointPoliciesListByResourceGroupOptionalParams): PagedAsyncIterableIterator<ServiceEndpointPolicy>;
    /**
     * Deletes the specified service endpoint policy.
     * @param resourceGroupName The name of the resource group.
     * @param serviceEndpointPolicyName The name of the service endpoint policy.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, serviceEndpointPolicyName: string, options?: ServiceEndpointPoliciesDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the specified service endpoint policy.
     * @param resourceGroupName The name of the resource group.
     * @param serviceEndpointPolicyName The name of the service endpoint policy.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, serviceEndpointPolicyName: string, options?: ServiceEndpointPoliciesDeleteOptionalParams): Promise<void>;
    /**
     * Gets the specified service Endpoint Policies in a specified resource group.
     * @param resourceGroupName The name of the resource group.
     * @param serviceEndpointPolicyName The name of the service endpoint policy.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, serviceEndpointPolicyName: string, options?: ServiceEndpointPoliciesGetOptionalParams): Promise<ServiceEndpointPoliciesGetResponse>;
    /**
     * Creates or updates a service Endpoint Policies.
     * @param resourceGroupName The name of the resource group.
     * @param serviceEndpointPolicyName The name of the service endpoint policy.
     * @param parameters Parameters supplied to the create or update service endpoint policy operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, serviceEndpointPolicyName: string, parameters: ServiceEndpointPolicy, options?: ServiceEndpointPoliciesCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<ServiceEndpointPoliciesCreateOrUpdateResponse>, ServiceEndpointPoliciesCreateOrUpdateResponse>>;
    /**
     * Creates or updates a service Endpoint Policies.
     * @param resourceGroupName The name of the resource group.
     * @param serviceEndpointPolicyName The name of the service endpoint policy.
     * @param parameters Parameters supplied to the create or update service endpoint policy operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, serviceEndpointPolicyName: string, parameters: ServiceEndpointPolicy, options?: ServiceEndpointPoliciesCreateOrUpdateOptionalParams): Promise<ServiceEndpointPoliciesCreateOrUpdateResponse>;
    /**
     * Updates tags of a service endpoint policy.
     * @param resourceGroupName The name of the resource group.
     * @param serviceEndpointPolicyName The name of the service endpoint policy.
     * @param parameters Parameters supplied to update service endpoint policy tags.
     * @param options The options parameters.
     */
    updateTags(resourceGroupName: string, serviceEndpointPolicyName: string, parameters: TagsObject, options?: ServiceEndpointPoliciesUpdateTagsOptionalParams): Promise<ServiceEndpointPoliciesUpdateTagsResponse>;
}

/** Optional parameters. */
export declare interface ServiceEndpointPoliciesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type ServiceEndpointPoliciesCreateOrUpdateResponse = ServiceEndpointPolicy;

/** Optional parameters. */
export declare interface ServiceEndpointPoliciesDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface ServiceEndpointPoliciesGetOptionalParams extends coreClient.OperationOptions {
    /** Expands referenced resources. */
    expand?: string;
}

/** Contains response data for the get operation. */
export declare type ServiceEndpointPoliciesGetResponse = ServiceEndpointPolicy;

/** Optional parameters. */
export declare interface ServiceEndpointPoliciesListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNext operation. */
export declare type ServiceEndpointPoliciesListByResourceGroupNextResponse = ServiceEndpointPolicyListResult;

/** Optional parameters. */
export declare interface ServiceEndpointPoliciesListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroup operation. */
export declare type ServiceEndpointPoliciesListByResourceGroupResponse = ServiceEndpointPolicyListResult;

/** Optional parameters. */
export declare interface ServiceEndpointPoliciesListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type ServiceEndpointPoliciesListNextResponse = ServiceEndpointPolicyListResult;

/** Optional parameters. */
export declare interface ServiceEndpointPoliciesListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type ServiceEndpointPoliciesListResponse = ServiceEndpointPolicyListResult;

/** Optional parameters. */
export declare interface ServiceEndpointPoliciesUpdateTagsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateTags operation. */
export declare type ServiceEndpointPoliciesUpdateTagsResponse = ServiceEndpointPolicy;

/** Service End point policy resource. */
export declare type ServiceEndpointPolicy = Resource & {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /** A collection of service endpoint policy definitions of the service endpoint policy. */
    serviceEndpointPolicyDefinitions?: ServiceEndpointPolicyDefinition[];
    /**
     * A collection of references to subnets.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly subnets?: Subnet[];
    /**
     * The resource GUID property of the service endpoint policy resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly resourceGuid?: string;
    /**
     * The provisioning state of the service endpoint policy resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** Service Endpoint policy definitions. */
export declare type ServiceEndpointPolicyDefinition = SubResource & {
    /** The name of the resource that is unique within a resource group. This name can be used to access the resource. */
    name?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /** A description for this rule. Restricted to 140 chars. */
    description?: string;
    /** Service endpoint name. */
    service?: string;
    /** A list of service resources. */
    serviceResources?: string[];
    /**
     * The provisioning state of the service endpoint policy definition resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** Response for ListServiceEndpointPolicyDefinition API service call. Retrieves all service endpoint policy definition that belongs to a service endpoint policy. */
export declare interface ServiceEndpointPolicyDefinitionListResult {
    /** The service endpoint policy definition in a service endpoint policy. */
    value?: ServiceEndpointPolicyDefinition[];
    /** The URL to get the next set of results. */
    nextLink?: string;
}

/** Interface representing a ServiceEndpointPolicyDefinitions. */
export declare interface ServiceEndpointPolicyDefinitions {
    /**
     * Gets all service endpoint policy definitions in a service end point policy.
     * @param resourceGroupName The name of the resource group.
     * @param serviceEndpointPolicyName The name of the service endpoint policy name.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, serviceEndpointPolicyName: string, options?: ServiceEndpointPolicyDefinitionsListByResourceGroupOptionalParams): PagedAsyncIterableIterator<ServiceEndpointPolicyDefinition>;
    /**
     * Deletes the specified ServiceEndpoint policy definitions.
     * @param resourceGroupName The name of the resource group.
     * @param serviceEndpointPolicyName The name of the Service Endpoint Policy.
     * @param serviceEndpointPolicyDefinitionName The name of the service endpoint policy definition.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, serviceEndpointPolicyName: string, serviceEndpointPolicyDefinitionName: string, options?: ServiceEndpointPolicyDefinitionsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the specified ServiceEndpoint policy definitions.
     * @param resourceGroupName The name of the resource group.
     * @param serviceEndpointPolicyName The name of the Service Endpoint Policy.
     * @param serviceEndpointPolicyDefinitionName The name of the service endpoint policy definition.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, serviceEndpointPolicyName: string, serviceEndpointPolicyDefinitionName: string, options?: ServiceEndpointPolicyDefinitionsDeleteOptionalParams): Promise<void>;
    /**
     * Get the specified service endpoint policy definitions from service endpoint policy.
     * @param resourceGroupName The name of the resource group.
     * @param serviceEndpointPolicyName The name of the service endpoint policy name.
     * @param serviceEndpointPolicyDefinitionName The name of the service endpoint policy definition name.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, serviceEndpointPolicyName: string, serviceEndpointPolicyDefinitionName: string, options?: ServiceEndpointPolicyDefinitionsGetOptionalParams): Promise<ServiceEndpointPolicyDefinitionsGetResponse>;
    /**
     * Creates or updates a service endpoint policy definition in the specified service endpoint policy.
     * @param resourceGroupName The name of the resource group.
     * @param serviceEndpointPolicyName The name of the service endpoint policy.
     * @param serviceEndpointPolicyDefinitionName The name of the service endpoint policy definition name.
     * @param serviceEndpointPolicyDefinitions Parameters supplied to the create or update service endpoint
     *                                         policy operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, serviceEndpointPolicyName: string, serviceEndpointPolicyDefinitionName: string, serviceEndpointPolicyDefinitions: ServiceEndpointPolicyDefinition, options?: ServiceEndpointPolicyDefinitionsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<ServiceEndpointPolicyDefinitionsCreateOrUpdateResponse>, ServiceEndpointPolicyDefinitionsCreateOrUpdateResponse>>;
    /**
     * Creates or updates a service endpoint policy definition in the specified service endpoint policy.
     * @param resourceGroupName The name of the resource group.
     * @param serviceEndpointPolicyName The name of the service endpoint policy.
     * @param serviceEndpointPolicyDefinitionName The name of the service endpoint policy definition name.
     * @param serviceEndpointPolicyDefinitions Parameters supplied to the create or update service endpoint
     *                                         policy operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, serviceEndpointPolicyName: string, serviceEndpointPolicyDefinitionName: string, serviceEndpointPolicyDefinitions: ServiceEndpointPolicyDefinition, options?: ServiceEndpointPolicyDefinitionsCreateOrUpdateOptionalParams): Promise<ServiceEndpointPolicyDefinitionsCreateOrUpdateResponse>;
}

/** Optional parameters. */
export declare interface ServiceEndpointPolicyDefinitionsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type ServiceEndpointPolicyDefinitionsCreateOrUpdateResponse = ServiceEndpointPolicyDefinition;

/** Optional parameters. */
export declare interface ServiceEndpointPolicyDefinitionsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface ServiceEndpointPolicyDefinitionsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type ServiceEndpointPolicyDefinitionsGetResponse = ServiceEndpointPolicyDefinition;

/** Optional parameters. */
export declare interface ServiceEndpointPolicyDefinitionsListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNext operation. */
export declare type ServiceEndpointPolicyDefinitionsListByResourceGroupNextResponse = ServiceEndpointPolicyDefinitionListResult;

/** Optional parameters. */
export declare interface ServiceEndpointPolicyDefinitionsListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroup operation. */
export declare type ServiceEndpointPolicyDefinitionsListByResourceGroupResponse = ServiceEndpointPolicyDefinitionListResult;

/** Response for ListServiceEndpointPolicies API service call. */
export declare interface ServiceEndpointPolicyListResult {
    /** A list of ServiceEndpointPolicy resources. */
    value?: ServiceEndpointPolicy[];
    /**
     * The URL to get the next set of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** The service endpoint properties. */
export declare interface ServiceEndpointPropertiesFormat {
    /** The type of the endpoint service. */
    service?: string;
    /** A list of locations. */
    locations?: string[];
    /**
     * The provisioning state of the service endpoint resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
}

/**
 * Defines values for ServiceProviderProvisioningState. \
 * {@link KnownServiceProviderProvisioningState} can be used interchangeably with ServiceProviderProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **NotProvisioned** \
 * **Provisioning** \
 * **Provisioned** \
 * **Deprovisioning**
 */
export declare type ServiceProviderProvisioningState = string;

/** The service tag information. */
export declare interface ServiceTagInformation {
    /**
     * Properties of the service tag information.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly properties?: ServiceTagInformationPropertiesFormat;
    /**
     * The name of service tag.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * The ID of service tag.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
}

/** Properties of the service tag information. */
export declare interface ServiceTagInformationPropertiesFormat {
    /**
     * The iteration number of service tag.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly changeNumber?: string;
    /**
     * The region of service tag.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly region?: string;
    /**
     * The name of system service.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly systemService?: string;
    /**
     * The list of IP address prefixes.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly addressPrefixes?: string[];
}

/** Interface representing a ServiceTags. */
export declare interface ServiceTags {
    /**
     * Gets a list of service tag information resources.
     * @param location The location that will be used as a reference for version (not as a filter based on
     *                 location, you will get the list of service tags with prefix details across all regions but limited
     *                 to the cloud that your subscription belongs to).
     * @param options The options parameters.
     */
    list(location: string, options?: ServiceTagsListOptionalParams): Promise<ServiceTagsListResponse>;
}

/** Optional parameters. */
export declare interface ServiceTagsListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type ServiceTagsListResponse = ServiceTagsListResult;

/** Response for the ListServiceTags API service call. */
export declare interface ServiceTagsListResult {
    /**
     * The name of the cloud.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * The ID of the cloud.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
    /**
     * The azure resource type.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /**
     * The iteration number.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly changeNumber?: string;
    /**
     * The name of the cloud.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly cloud?: string;
    /**
     * The list of service tag information resources.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly values?: ServiceTagInformation[];
}

/** List of session IDs. */
export declare interface SessionIds {
    /** List of session IDs. */
    sessionIds?: string[];
}

/**
 * Defines values for Severity. \
 * {@link KnownSeverity} can be used interchangeably with Severity,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Error** \
 * **Warning**
 */
export declare type Severity = string;

/** List of all Static Routes. */
export declare interface StaticRoute {
    /** The name of the StaticRoute that is unique within a VnetRoute. */
    name?: string;
    /** List of all address prefixes. */
    addressPrefixes?: string[];
    /** The ip address of the next hop. */
    nextHopIpAddress?: string;
}

/** Subnet in a virtual network resource. */
export declare type Subnet = SubResource & {
    /** The name of the resource that is unique within a resource group. This name can be used to access the resource. */
    name?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /** The address prefix for the subnet. */
    addressPrefix?: string;
    /** List of address prefixes for the subnet. */
    addressPrefixes?: string[];
    /** The reference to the NetworkSecurityGroup resource. */
    networkSecurityGroup?: NetworkSecurityGroup;
    /** The reference to the RouteTable resource. */
    routeTable?: RouteTable;
    /** Nat gateway associated with this subnet. */
    natGateway?: SubResource;
    /** An array of service endpoints. */
    serviceEndpoints?: ServiceEndpointPropertiesFormat[];
    /** An array of service endpoint policies. */
    serviceEndpointPolicies?: ServiceEndpointPolicy[];
    /**
     * An array of references to private endpoints.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly privateEndpoints?: PrivateEndpoint[];
    /**
     * An array of references to the network interface IP configurations using subnet.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly ipConfigurations?: IPConfiguration[];
    /**
     * Array of IP configuration profiles which reference this subnet.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly ipConfigurationProfiles?: IPConfigurationProfile[];
    /** Array of IpAllocation which reference this subnet. */
    ipAllocations?: SubResource[];
    /**
     * An array of references to the external resources using subnet.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly resourceNavigationLinks?: ResourceNavigationLink[];
    /**
     * An array of references to services injecting into this subnet.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly serviceAssociationLinks?: ServiceAssociationLink[];
    /** An array of references to the delegations on the subnet. */
    delegations?: Delegation[];
    /**
     * A read-only string identifying the intention of use for this subnet based on delegations and other user-defined properties.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly purpose?: string;
    /**
     * The provisioning state of the subnet resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
    /** Enable or Disable apply network policies on private end point in the subnet. */
    privateEndpointNetworkPolicies?: string;
    /** Enable or Disable apply network policies on private link service in the subnet. */
    privateLinkServiceNetworkPolicies?: string;
};

/** Subnet and it's custom security rules. */
export declare interface SubnetAssociation {
    /**
     * Subnet ID.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
    /** Collection of custom security rules. */
    securityRules?: SecurityRule[];
}

/** Response for ListSubnets API service callRetrieves all subnet that belongs to a virtual network. */
export declare interface SubnetListResult {
    /** The subnets in a virtual network. */
    value?: Subnet[];
    /** The URL to get the next set of results. */
    nextLink?: string;
}

/** Interface representing a Subnets. */
export declare interface Subnets {
    /**
     * Gets all subnets in a virtual network.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkName The name of the virtual network.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, virtualNetworkName: string, options?: SubnetsListOptionalParams): PagedAsyncIterableIterator<Subnet>;
    /**
     * Deletes the specified subnet.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkName The name of the virtual network.
     * @param subnetName The name of the subnet.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, virtualNetworkName: string, subnetName: string, options?: SubnetsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the specified subnet.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkName The name of the virtual network.
     * @param subnetName The name of the subnet.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, virtualNetworkName: string, subnetName: string, options?: SubnetsDeleteOptionalParams): Promise<void>;
    /**
     * Gets the specified subnet by virtual network and resource group.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkName The name of the virtual network.
     * @param subnetName The name of the subnet.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, virtualNetworkName: string, subnetName: string, options?: SubnetsGetOptionalParams): Promise<SubnetsGetResponse>;
    /**
     * Creates or updates a subnet in the specified virtual network.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkName The name of the virtual network.
     * @param subnetName The name of the subnet.
     * @param subnetParameters Parameters supplied to the create or update subnet operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, virtualNetworkName: string, subnetName: string, subnetParameters: Subnet, options?: SubnetsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<SubnetsCreateOrUpdateResponse>, SubnetsCreateOrUpdateResponse>>;
    /**
     * Creates or updates a subnet in the specified virtual network.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkName The name of the virtual network.
     * @param subnetName The name of the subnet.
     * @param subnetParameters Parameters supplied to the create or update subnet operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, virtualNetworkName: string, subnetName: string, subnetParameters: Subnet, options?: SubnetsCreateOrUpdateOptionalParams): Promise<SubnetsCreateOrUpdateResponse>;
    /**
     * Prepares a subnet by applying network intent policies.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkName The name of the virtual network.
     * @param subnetName The name of the subnet.
     * @param prepareNetworkPoliciesRequestParameters Parameters supplied to prepare subnet by applying
     *                                                network intent policies.
     * @param options The options parameters.
     */
    beginPrepareNetworkPolicies(resourceGroupName: string, virtualNetworkName: string, subnetName: string, prepareNetworkPoliciesRequestParameters: PrepareNetworkPoliciesRequest, options?: SubnetsPrepareNetworkPoliciesOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Prepares a subnet by applying network intent policies.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkName The name of the virtual network.
     * @param subnetName The name of the subnet.
     * @param prepareNetworkPoliciesRequestParameters Parameters supplied to prepare subnet by applying
     *                                                network intent policies.
     * @param options The options parameters.
     */
    beginPrepareNetworkPoliciesAndWait(resourceGroupName: string, virtualNetworkName: string, subnetName: string, prepareNetworkPoliciesRequestParameters: PrepareNetworkPoliciesRequest, options?: SubnetsPrepareNetworkPoliciesOptionalParams): Promise<void>;
    /**
     * Unprepares a subnet by removing network intent policies.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkName The name of the virtual network.
     * @param subnetName The name of the subnet.
     * @param unprepareNetworkPoliciesRequestParameters Parameters supplied to unprepare subnet to remove
     *                                                  network intent policies.
     * @param options The options parameters.
     */
    beginUnprepareNetworkPolicies(resourceGroupName: string, virtualNetworkName: string, subnetName: string, unprepareNetworkPoliciesRequestParameters: UnprepareNetworkPoliciesRequest, options?: SubnetsUnprepareNetworkPoliciesOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Unprepares a subnet by removing network intent policies.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkName The name of the virtual network.
     * @param subnetName The name of the subnet.
     * @param unprepareNetworkPoliciesRequestParameters Parameters supplied to unprepare subnet to remove
     *                                                  network intent policies.
     * @param options The options parameters.
     */
    beginUnprepareNetworkPoliciesAndWait(resourceGroupName: string, virtualNetworkName: string, subnetName: string, unprepareNetworkPoliciesRequestParameters: UnprepareNetworkPoliciesRequest, options?: SubnetsUnprepareNetworkPoliciesOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface SubnetsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type SubnetsCreateOrUpdateResponse = Subnet;

/** Optional parameters. */
export declare interface SubnetsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface SubnetsGetOptionalParams extends coreClient.OperationOptions {
    /** Expands referenced resources. */
    expand?: string;
}

/** Contains response data for the get operation. */
export declare type SubnetsGetResponse = Subnet;

/** Optional parameters. */
export declare interface SubnetsListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type SubnetsListNextResponse = SubnetListResult;

/** Optional parameters. */
export declare interface SubnetsListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type SubnetsListResponse = SubnetListResult;

/** Optional parameters. */
export declare interface SubnetsPrepareNetworkPoliciesOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface SubnetsUnprepareNetworkPoliciesOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Reference to another subresource. */
export declare interface SubResource {
    /** Resource ID. */
    id?: string;
}

/** Optional parameters. */
export declare interface SupportedSecurityProvidersOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the supportedSecurityProviders operation. */
export declare type SupportedSecurityProvidersResponse = VirtualWanSecurityProviders;

/** Tags object for patch operations. */
export declare interface TagsObject {
    /** Resource tags. */
    tags?: {
        [propertyName: string]: string;
    };
}

/** Topology of the specified resource group. */
export declare interface Topology {
    /**
     * GUID representing the operation id.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
    /**
     * The datetime when the topology was initially created for the resource group.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly createdDateTime?: Date;
    /**
     * The datetime when the topology was last modified.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly lastModified?: Date;
    /** A list of topology resources. */
    resources?: TopologyResource[];
}

/** Resources that have an association with the parent resource. */
export declare interface TopologyAssociation {
    /** The name of the resource that is associated with the parent resource. */
    name?: string;
    /** The ID of the resource that is associated with the parent resource. */
    resourceId?: string;
    /** The association type of the child resource to the parent resource. */
    associationType?: AssociationType;
}

/** Parameters that define the representation of topology. */
export declare interface TopologyParameters {
    /** The name of the target resource group to perform topology on. */
    targetResourceGroupName?: string;
    /** The reference to the Virtual Network resource. */
    targetVirtualNetwork?: SubResource;
    /** The reference to the Subnet resource. */
    targetSubnet?: SubResource;
}

/** The network resource topology information for the given resource group. */
export declare interface TopologyResource {
    /** Name of the resource. */
    name?: string;
    /** ID of the resource. */
    id?: string;
    /** Resource location. */
    location?: string;
    /** Holds the associations the resource has with other resources in the resource group. */
    associations?: TopologyAssociation[];
}

/** Parameters that define the configuration of traffic analytics. */
export declare interface TrafficAnalyticsConfigurationProperties {
    /** Flag to enable/disable traffic analytics. */
    enabled?: boolean;
    /** The resource guid of the attached workspace. */
    workspaceId?: string;
    /** The location of the attached workspace. */
    workspaceRegion?: string;
    /** Resource Id of the attached workspace. */
    workspaceResourceId?: string;
    /** The interval in minutes which would decide how frequently TA service should do flow analytics. */
    trafficAnalyticsInterval?: number;
}

/** Parameters that define the configuration of traffic analytics. */
export declare interface TrafficAnalyticsProperties {
    /** Parameters that define the configuration of traffic analytics. */
    networkWatcherFlowAnalyticsConfiguration?: TrafficAnalyticsConfigurationProperties;
}

/** An traffic selector policy for a virtual network gateway connection. */
export declare interface TrafficSelectorPolicy {
    /** A collection of local address spaces in CIDR format. */
    localAddressRanges: string[];
    /** A collection of remote address spaces in CIDR format. */
    remoteAddressRanges: string[];
}

/**
 * Defines values for TransportProtocol. \
 * {@link KnownTransportProtocol} can be used interchangeably with TransportProtocol,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Udp** \
 * **Tcp** \
 * **All**
 */
export declare type TransportProtocol = string;

/** Information gained from troubleshooting of specified resource. */
export declare interface TroubleshootingDetails {
    /** The id of the get troubleshoot operation. */
    id?: string;
    /** Reason type of failure. */
    reasonType?: string;
    /** A summary of troubleshooting. */
    summary?: string;
    /** Details on troubleshooting results. */
    detail?: string;
    /** List of recommended actions. */
    recommendedActions?: TroubleshootingRecommendedActions[];
}

/** Parameters that define the resource to troubleshoot. */
export declare interface TroubleshootingParameters {
    /** The target resource to troubleshoot. */
    targetResourceId: string;
    /** The ID for the storage account to save the troubleshoot result. */
    storageId: string;
    /** The path to the blob to save the troubleshoot result in. */
    storagePath: string;
}

/** Recommended actions based on discovered issues. */
export declare interface TroubleshootingRecommendedActions {
    /** ID of the recommended action. */
    actionId?: string;
    /** Description of recommended actions. */
    actionText?: string;
    /** The uri linking to a documentation for the recommended troubleshooting actions. */
    actionUri?: string;
    /** The information from the URI for the recommended troubleshooting actions. */
    actionUriText?: string;
}

/** Troubleshooting information gained from specified resource. */
export declare interface TroubleshootingResult {
    /** The start time of the troubleshooting. */
    startTime?: Date;
    /** The end time of the troubleshooting. */
    endTime?: Date;
    /** The result code of the troubleshooting. */
    code?: string;
    /** Information from troubleshooting. */
    results?: TroubleshootingDetails[];
}

/** VirtualNetworkGatewayConnection properties. */
export declare interface TunnelConnectionHealth {
    /**
     * Tunnel name.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly tunnel?: string;
    /**
     * Virtual Network Gateway connection status.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly connectionStatus?: VirtualNetworkGatewayConnectionStatus;
    /**
     * The Ingress Bytes Transferred in this connection.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly ingressBytesTransferred?: number;
    /**
     * The Egress Bytes Transferred in this connection.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly egressBytesTransferred?: number;
    /**
     * The time at which connection was established in Utc format.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly lastConnectionEstablishedUtcTime?: string;
}

/**
 * Defines values for TunnelConnectionStatus. \
 * {@link KnownTunnelConnectionStatus} can be used interchangeably with TunnelConnectionStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown** \
 * **Connecting** \
 * **Connected** \
 * **NotConnected**
 */
export declare type TunnelConnectionStatus = string;

/** Details of UnprepareNetworkPolicies for Subnet. */
export declare interface UnprepareNetworkPoliciesRequest {
    /** The name of the service for which subnet is being unprepared for. */
    serviceName?: string;
}

/** The network resource usage. */
export declare interface Usage {
    /**
     * Resource identifier.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
    /** An enum describing the unit of measurement. */
    unit: UsageUnit;
    /** The current value of the usage. */
    currentValue: number;
    /** The limit of usage. */
    limit: number;
    /** The name of the type of usage. */
    name: UsageName;
}

/** The usage names. */
export declare interface UsageName {
    /** A string describing the resource name. */
    value?: string;
    /** A localized string describing the resource name. */
    localizedValue?: string;
}

/** Interface representing a Usages. */
export declare interface Usages {
    /**
     * List network usages for a subscription.
     * @param location The location where resource usage is queried.
     * @param options The options parameters.
     */
    list(location: string, options?: UsagesListOptionalParams): PagedAsyncIterableIterator<Usage>;
}

/** Optional parameters. */
export declare interface UsagesListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type UsagesListNextResponse = UsagesListResult;

/** Optional parameters. */
export declare interface UsagesListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type UsagesListResponse = UsagesListResult;

/** The list usages operation response. */
export declare interface UsagesListResult {
    /** The list network resource usages. */
    value?: Usage[];
    /** URL to get the next set of results. */
    nextLink?: string;
}

/**
 * Defines values for UsageUnit. \
 * {@link KnownUsageUnit} can be used interchangeably with UsageUnit,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Count**
 */
export declare type UsageUnit = string;

/**
 * Defines values for VerbosityLevel. \
 * {@link KnownVerbosityLevel} can be used interchangeably with VerbosityLevel,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Normal** \
 * **Minimum** \
 * **Full**
 */
export declare type VerbosityLevel = string;

/** Parameters that define the IP flow to be verified. */
export declare interface VerificationIPFlowParameters {
    /** The ID of the target resource to perform next-hop on. */
    targetResourceId: string;
    /** The direction of the packet represented as a 5-tuple. */
    direction: Direction;
    /** Protocol to be verified on. */
    protocol: IpFlowProtocol;
    /** The local port. Acceptable values are a single integer in the range (0-65535). Support for * for the source port, which depends on the direction. */
    localPort: string;
    /** The remote port. Acceptable values are a single integer in the range (0-65535). Support for * for the source port, which depends on the direction. */
    remotePort: string;
    /** The local IP address. Acceptable values are valid IPv4 addresses. */
    localIPAddress: string;
    /** The remote IP address. Acceptable values are valid IPv4 addresses. */
    remoteIPAddress: string;
    /** The NIC ID. (If VM has multiple NICs and IP forwarding is enabled on any of them, then this parameter must be specified. Otherwise optional). */
    targetNicResourceId?: string;
}

/** Results of IP flow verification on the target resource. */
export declare interface VerificationIPFlowResult {
    /** Indicates whether the traffic is allowed or denied. */
    access?: Access;
    /** Name of the rule. If input is not matched against any security rule, it is not displayed. */
    ruleName?: string;
}

/** Network Virtual Appliance NIC properties. */
export declare interface VirtualApplianceNicProperties {
    /**
     * NIC name.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * Public IP address.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly publicIpAddress?: string;
    /**
     * Private IP address.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly privateIpAddress?: string;
}

/** Network Virtual Appliance Sku Properties. */
export declare interface VirtualApplianceSkuProperties {
    /** Virtual Appliance Vendor. */
    vendor?: string;
    /** Virtual Appliance Scale Unit. */
    bundledScaleUnit?: string;
    /** Virtual Appliance Version. */
    marketPlaceVersion?: string;
}

/** VirtualHub Resource. */
export declare type VirtualHub = Resource & {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /** The VirtualWAN to which the VirtualHub belongs. */
    virtualWan?: SubResource;
    /** The VpnGateway associated with this VirtualHub. */
    vpnGateway?: SubResource;
    /** The P2SVpnGateway associated with this VirtualHub. */
    p2SVpnGateway?: SubResource;
    /** The expressRouteGateway associated with this VirtualHub. */
    expressRouteGateway?: SubResource;
    /** The azureFirewall associated with this VirtualHub. */
    azureFirewall?: SubResource;
    /** The securityPartnerProvider associated with this VirtualHub. */
    securityPartnerProvider?: SubResource;
    /** List of all vnet connections with this VirtualHub. */
    virtualNetworkConnections?: HubVirtualNetworkConnection[];
    /** Address-prefix for this VirtualHub. */
    addressPrefix?: string;
    /** The routeTable associated with this virtual hub. */
    routeTable?: VirtualHubRouteTable;
    /**
     * The provisioning state of the virtual hub resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
    /** The Security Provider name. */
    securityProviderName?: string;
    /** List of all virtual hub route table v2s associated with this VirtualHub. */
    virtualHubRouteTableV2S?: VirtualHubRouteTableV2[];
    /** The sku of this VirtualHub. */
    sku?: string;
};

/** Virtual Hub identifier. */
export declare interface VirtualHubId {
    /** The resource URI for the Virtual Hub where the ExpressRoute gateway is or will be deployed. The Virtual Hub resource and the ExpressRoute gateway resource reside in the same subscription. */
    id?: string;
}

/** VirtualHub route. */
export declare interface VirtualHubRoute {
    /** List of all addressPrefixes. */
    addressPrefixes?: string[];
    /** NextHop ip address. */
    nextHopIpAddress?: string;
}

/** VirtualHub route table. */
export declare interface VirtualHubRouteTable {
    /** List of all routes. */
    routes?: VirtualHubRoute[];
}

/** VirtualHubRouteTableV2 Resource. */
export declare type VirtualHubRouteTableV2 = SubResource & {
    /** The name of the resource that is unique within a resource group. This name can be used to access the resource. */
    name?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /** List of all routes. */
    routes?: VirtualHubRouteV2[];
    /** List of all connections attached to this route table v2. */
    attachedConnections?: string[];
    /**
     * The provisioning state of the virtual hub route table v2 resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** Interface representing a VirtualHubRouteTableV2S. */
export declare interface VirtualHubRouteTableV2S {
    /**
     * Retrieves the details of all VirtualHubRouteTableV2s.
     * @param resourceGroupName The resource group name of the VirtualHub.
     * @param virtualHubName The name of the VirtualHub.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, virtualHubName: string, options?: VirtualHubRouteTableV2SListOptionalParams): PagedAsyncIterableIterator<VirtualHubRouteTableV2>;
    /**
     * Retrieves the details of a VirtualHubRouteTableV2.
     * @param resourceGroupName The resource group name of the VirtualHubRouteTableV2.
     * @param virtualHubName The name of the VirtualHub.
     * @param routeTableName The name of the VirtualHubRouteTableV2.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, virtualHubName: string, routeTableName: string, options?: VirtualHubRouteTableV2SGetOptionalParams): Promise<VirtualHubRouteTableV2SGetResponse>;
    /**
     * Creates a VirtualHubRouteTableV2 resource if it doesn't exist else updates the existing
     * VirtualHubRouteTableV2.
     * @param resourceGroupName The resource group name of the VirtualHub.
     * @param virtualHubName The name of the VirtualHub.
     * @param routeTableName The name of the VirtualHubRouteTableV2.
     * @param virtualHubRouteTableV2Parameters Parameters supplied to create or update
     *                                         VirtualHubRouteTableV2.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, virtualHubName: string, routeTableName: string, virtualHubRouteTableV2Parameters: VirtualHubRouteTableV2, options?: VirtualHubRouteTableV2SCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<VirtualHubRouteTableV2SCreateOrUpdateResponse>, VirtualHubRouteTableV2SCreateOrUpdateResponse>>;
    /**
     * Creates a VirtualHubRouteTableV2 resource if it doesn't exist else updates the existing
     * VirtualHubRouteTableV2.
     * @param resourceGroupName The resource group name of the VirtualHub.
     * @param virtualHubName The name of the VirtualHub.
     * @param routeTableName The name of the VirtualHubRouteTableV2.
     * @param virtualHubRouteTableV2Parameters Parameters supplied to create or update
     *                                         VirtualHubRouteTableV2.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, virtualHubName: string, routeTableName: string, virtualHubRouteTableV2Parameters: VirtualHubRouteTableV2, options?: VirtualHubRouteTableV2SCreateOrUpdateOptionalParams): Promise<VirtualHubRouteTableV2SCreateOrUpdateResponse>;
    /**
     * Deletes a VirtualHubRouteTableV2.
     * @param resourceGroupName The resource group name of the VirtualHubRouteTableV2.
     * @param virtualHubName The name of the VirtualHub.
     * @param routeTableName The name of the VirtualHubRouteTableV2.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, virtualHubName: string, routeTableName: string, options?: VirtualHubRouteTableV2SDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes a VirtualHubRouteTableV2.
     * @param resourceGroupName The resource group name of the VirtualHubRouteTableV2.
     * @param virtualHubName The name of the VirtualHub.
     * @param routeTableName The name of the VirtualHubRouteTableV2.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, virtualHubName: string, routeTableName: string, options?: VirtualHubRouteTableV2SDeleteOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface VirtualHubRouteTableV2SCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type VirtualHubRouteTableV2SCreateOrUpdateResponse = VirtualHubRouteTableV2;

/** Optional parameters. */
export declare interface VirtualHubRouteTableV2SDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface VirtualHubRouteTableV2SGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type VirtualHubRouteTableV2SGetResponse = VirtualHubRouteTableV2;

/** Optional parameters. */
export declare interface VirtualHubRouteTableV2SListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type VirtualHubRouteTableV2SListNextResponse = ListVirtualHubRouteTableV2SResult;

/** Optional parameters. */
export declare interface VirtualHubRouteTableV2SListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type VirtualHubRouteTableV2SListResponse = ListVirtualHubRouteTableV2SResult;

/** VirtualHubRouteTableV2 route. */
export declare interface VirtualHubRouteV2 {
    /** The type of destinations. */
    destinationType?: string;
    /** List of all destinations. */
    destinations?: string[];
    /** The type of next hops. */
    nextHopType?: string;
    /** NextHops ip address. */
    nextHops?: string[];
}

/** Interface representing a VirtualHubs. */
export declare interface VirtualHubs {
    /**
     * Lists all the VirtualHubs in a resource group.
     * @param resourceGroupName The resource group name of the VirtualHub.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: VirtualHubsListByResourceGroupOptionalParams): PagedAsyncIterableIterator<VirtualHub>;
    /**
     * Lists all the VirtualHubs in a subscription.
     * @param options The options parameters.
     */
    list(options?: VirtualHubsListOptionalParams): PagedAsyncIterableIterator<VirtualHub>;
    /**
     * Retrieves the details of a VirtualHub.
     * @param resourceGroupName The resource group name of the VirtualHub.
     * @param virtualHubName The name of the VirtualHub.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, virtualHubName: string, options?: VirtualHubsGetOptionalParams): Promise<VirtualHubsGetResponse>;
    /**
     * Creates a VirtualHub resource if it doesn't exist else updates the existing VirtualHub.
     * @param resourceGroupName The resource group name of the VirtualHub.
     * @param virtualHubName The name of the VirtualHub.
     * @param virtualHubParameters Parameters supplied to create or update VirtualHub.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, virtualHubName: string, virtualHubParameters: VirtualHub, options?: VirtualHubsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<VirtualHubsCreateOrUpdateResponse>, VirtualHubsCreateOrUpdateResponse>>;
    /**
     * Creates a VirtualHub resource if it doesn't exist else updates the existing VirtualHub.
     * @param resourceGroupName The resource group name of the VirtualHub.
     * @param virtualHubName The name of the VirtualHub.
     * @param virtualHubParameters Parameters supplied to create or update VirtualHub.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, virtualHubName: string, virtualHubParameters: VirtualHub, options?: VirtualHubsCreateOrUpdateOptionalParams): Promise<VirtualHubsCreateOrUpdateResponse>;
    /**
     * Updates VirtualHub tags.
     * @param resourceGroupName The resource group name of the VirtualHub.
     * @param virtualHubName The name of the VirtualHub.
     * @param virtualHubParameters Parameters supplied to update VirtualHub tags.
     * @param options The options parameters.
     */
    updateTags(resourceGroupName: string, virtualHubName: string, virtualHubParameters: TagsObject, options?: VirtualHubsUpdateTagsOptionalParams): Promise<VirtualHubsUpdateTagsResponse>;
    /**
     * Deletes a VirtualHub.
     * @param resourceGroupName The resource group name of the VirtualHub.
     * @param virtualHubName The name of the VirtualHub.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, virtualHubName: string, options?: VirtualHubsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes a VirtualHub.
     * @param resourceGroupName The resource group name of the VirtualHub.
     * @param virtualHubName The name of the VirtualHub.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, virtualHubName: string, options?: VirtualHubsDeleteOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface VirtualHubsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type VirtualHubsCreateOrUpdateResponse = VirtualHub;

/** Optional parameters. */
export declare interface VirtualHubsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface VirtualHubsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type VirtualHubsGetResponse = VirtualHub;

/** Optional parameters. */
export declare interface VirtualHubsListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNext operation. */
export declare type VirtualHubsListByResourceGroupNextResponse = ListVirtualHubsResult;

/** Optional parameters. */
export declare interface VirtualHubsListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroup operation. */
export declare type VirtualHubsListByResourceGroupResponse = ListVirtualHubsResult;

/** Optional parameters. */
export declare interface VirtualHubsListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type VirtualHubsListNextResponse = ListVirtualHubsResult;

/** Optional parameters. */
export declare interface VirtualHubsListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type VirtualHubsListResponse = ListVirtualHubsResult;

/** Optional parameters. */
export declare interface VirtualHubsUpdateTagsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateTags operation. */
export declare type VirtualHubsUpdateTagsResponse = VirtualHub;

/** Virtual Network resource. */
export declare type VirtualNetwork = Resource & {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /** The AddressSpace that contains an array of IP address ranges that can be used by subnets. */
    addressSpace?: AddressSpace;
    /** The dhcpOptions that contains an array of DNS servers available to VMs deployed in the virtual network. */
    dhcpOptions?: DhcpOptions;
    /** A list of subnets in a Virtual Network. */
    subnets?: Subnet[];
    /** A list of peerings in a Virtual Network. */
    virtualNetworkPeerings?: VirtualNetworkPeering[];
    /**
     * The resourceGuid property of the Virtual Network resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly resourceGuid?: string;
    /**
     * The provisioning state of the virtual network resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
    /** Indicates if DDoS protection is enabled for all the protected resources in the virtual network. It requires a DDoS protection plan associated with the resource. */
    enableDdosProtection?: boolean;
    /** Indicates if VM protection is enabled for all the subnets in the virtual network. */
    enableVmProtection?: boolean;
    /** The DDoS protection plan associated with the virtual network. */
    ddosProtectionPlan?: SubResource;
    /** Bgp Communities sent over ExpressRoute with each route corresponding to a prefix in this VNET. */
    bgpCommunities?: VirtualNetworkBgpCommunities;
    /** Array of IpAllocation which reference this VNET. */
    ipAllocations?: SubResource[];
};

/** Bgp Communities sent over ExpressRoute with each route corresponding to a prefix in this VNET. */
export declare interface VirtualNetworkBgpCommunities {
    /** The BGP community associated with the virtual network. */
    virtualNetworkCommunity: string;
    /**
     * The BGP community associated with the region of the virtual network.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly regionalCommunity?: string;
}

/** A reference to VirtualNetworkGateway or LocalNetworkGateway resource. */
export declare interface VirtualNetworkConnectionGatewayReference {
    /** The ID of VirtualNetworkGateway or LocalNetworkGateway resource. */
    id: string;
}

/** A common class for general resource information. */
export declare type VirtualNetworkGateway = Resource & {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /** IP configurations for virtual network gateway. */
    ipConfigurations?: VirtualNetworkGatewayIPConfiguration[];
    /** The type of this virtual network gateway. */
    gatewayType?: VirtualNetworkGatewayType;
    /** The type of this virtual network gateway. */
    vpnType?: VpnType;
    /** The generation for this VirtualNetworkGateway. Must be None if gatewayType is not VPN. */
    vpnGatewayGeneration?: VpnGatewayGeneration;
    /** Whether BGP is enabled for this virtual network gateway or not. */
    enableBgp?: boolean;
    /** Whether private IP needs to be enabled on this gateway for connections or not. */
    enablePrivateIpAddress?: boolean;
    /** ActiveActive flag. */
    active?: boolean;
    /** The reference to the LocalNetworkGateway resource which represents local network site having default routes. Assign Null value in case of removing existing default site setting. */
    gatewayDefaultSite?: SubResource;
    /** The reference to the VirtualNetworkGatewaySku resource which represents the SKU selected for Virtual network gateway. */
    sku?: VirtualNetworkGatewaySku;
    /** The reference to the VpnClientConfiguration resource which represents the P2S VpnClient configurations. */
    vpnClientConfiguration?: VpnClientConfiguration;
    /** Virtual network gateway's BGP speaker settings. */
    bgpSettings?: BgpSettings;
    /** The reference to the address space resource which represents the custom routes address space specified by the customer for virtual network gateway and VpnClient. */
    customRoutes?: AddressSpace;
    /**
     * The resource GUID property of the virtual network gateway resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly resourceGuid?: string;
    /**
     * The provisioning state of the virtual network gateway resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
    /** Whether dns forwarding is enabled or not. */
    enableDnsForwarding?: boolean;
    /**
     * The IP address allocated by the gateway to which dns requests can be sent.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly inboundDnsForwardingEndpoint?: string;
};

/** A common class for general resource information. */
export declare type VirtualNetworkGatewayConnection = Resource & {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /** The authorizationKey. */
    authorizationKey?: string;
    /** The reference to virtual network gateway resource. */
    virtualNetworkGateway1: VirtualNetworkGateway;
    /** The reference to virtual network gateway resource. */
    virtualNetworkGateway2?: VirtualNetworkGateway;
    /** The reference to local network gateway resource. */
    localNetworkGateway2?: LocalNetworkGateway;
    /** Gateway connection type. */
    connectionType: VirtualNetworkGatewayConnectionType;
    /** Connection protocol used for this connection. */
    connectionProtocol?: VirtualNetworkGatewayConnectionProtocol;
    /** The routing weight. */
    routingWeight?: number;
    /** The dead peer detection timeout of this connection in seconds. */
    dpdTimeoutSeconds?: number;
    /** The IPSec shared key. */
    sharedKey?: string;
    /**
     * Virtual Network Gateway connection status.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly connectionStatus?: VirtualNetworkGatewayConnectionStatus;
    /**
     * Collection of all tunnels' connection health status.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly tunnelConnectionStatus?: TunnelConnectionHealth[];
    /**
     * The egress bytes transferred in this connection.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly egressBytesTransferred?: number;
    /**
     * The ingress bytes transferred in this connection.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly ingressBytesTransferred?: number;
    /** The reference to peerings resource. */
    peer?: SubResource;
    /** EnableBgp flag. */
    enableBgp?: boolean;
    /** Use private local Azure IP for the connection. */
    useLocalAzureIpAddress?: boolean;
    /** Enable policy-based traffic selectors. */
    usePolicyBasedTrafficSelectors?: boolean;
    /** The IPSec Policies to be considered by this connection. */
    ipsecPolicies?: IpsecPolicy[];
    /** The Traffic Selector Policies to be considered by this connection. */
    trafficSelectorPolicies?: TrafficSelectorPolicy[];
    /**
     * The resource GUID property of the virtual network gateway connection resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly resourceGuid?: string;
    /**
     * The provisioning state of the virtual network gateway connection resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
    /** Bypass ExpressRoute Gateway for data forwarding. */
    expressRouteGatewayBypass?: boolean;
};

/** A common class for general resource information. */
export declare type VirtualNetworkGatewayConnectionListEntity = Resource & {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /** The authorizationKey. */
    authorizationKey?: string;
    /** The reference to virtual network gateway resource. */
    virtualNetworkGateway1: VirtualNetworkConnectionGatewayReference;
    /** The reference to virtual network gateway resource. */
    virtualNetworkGateway2?: VirtualNetworkConnectionGatewayReference;
    /** The reference to local network gateway resource. */
    localNetworkGateway2?: VirtualNetworkConnectionGatewayReference;
    /** Gateway connection type. */
    connectionType: VirtualNetworkGatewayConnectionType;
    /** Connection protocol used for this connection. */
    connectionProtocol?: VirtualNetworkGatewayConnectionProtocol;
    /** The routing weight. */
    routingWeight?: number;
    /** The IPSec shared key. */
    sharedKey?: string;
    /**
     * Virtual Network Gateway connection status.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly connectionStatus?: VirtualNetworkGatewayConnectionStatus;
    /**
     * Collection of all tunnels' connection health status.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly tunnelConnectionStatus?: TunnelConnectionHealth[];
    /**
     * The egress bytes transferred in this connection.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly egressBytesTransferred?: number;
    /**
     * The ingress bytes transferred in this connection.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly ingressBytesTransferred?: number;
    /** The reference to peerings resource. */
    peer?: SubResource;
    /** EnableBgp flag. */
    enableBgp?: boolean;
    /** Enable policy-based traffic selectors. */
    usePolicyBasedTrafficSelectors?: boolean;
    /** The IPSec Policies to be considered by this connection. */
    ipsecPolicies?: IpsecPolicy[];
    /** The Traffic Selector Policies to be considered by this connection. */
    trafficSelectorPolicies?: TrafficSelectorPolicy[];
    /**
     * The resource GUID property of the virtual network gateway connection resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly resourceGuid?: string;
    /**
     * The provisioning state of the virtual network gateway connection resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
    /** Bypass ExpressRoute Gateway for data forwarding. */
    expressRouteGatewayBypass?: boolean;
};

/** Response for the ListVirtualNetworkGatewayConnections API service call. */
export declare interface VirtualNetworkGatewayConnectionListResult {
    /** A list of VirtualNetworkGatewayConnection resources that exists in a resource group. */
    value?: VirtualNetworkGatewayConnection[];
    /**
     * The URL to get the next set of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/**
 * Defines values for VirtualNetworkGatewayConnectionProtocol. \
 * {@link KnownVirtualNetworkGatewayConnectionProtocol} can be used interchangeably with VirtualNetworkGatewayConnectionProtocol,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **IKEv2** \
 * **IKEv1**
 */
export declare type VirtualNetworkGatewayConnectionProtocol = string;

/** Interface representing a VirtualNetworkGatewayConnections. */
export declare interface VirtualNetworkGatewayConnections {
    /**
     * The List VirtualNetworkGatewayConnections operation retrieves all the virtual network gateways
     * connections created.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, options?: VirtualNetworkGatewayConnectionsListOptionalParams): PagedAsyncIterableIterator<VirtualNetworkGatewayConnection>;
    /**
     * Creates or updates a virtual network gateway connection in the specified resource group.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkGatewayConnectionName The name of the virtual network gateway connection.
     * @param parameters Parameters supplied to the create or update virtual network gateway connection
     *                   operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: VirtualNetworkGatewayConnection, options?: VirtualNetworkGatewayConnectionsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<VirtualNetworkGatewayConnectionsCreateOrUpdateResponse>, VirtualNetworkGatewayConnectionsCreateOrUpdateResponse>>;
    /**
     * Creates or updates a virtual network gateway connection in the specified resource group.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkGatewayConnectionName The name of the virtual network gateway connection.
     * @param parameters Parameters supplied to the create or update virtual network gateway connection
     *                   operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: VirtualNetworkGatewayConnection, options?: VirtualNetworkGatewayConnectionsCreateOrUpdateOptionalParams): Promise<VirtualNetworkGatewayConnectionsCreateOrUpdateResponse>;
    /**
     * Gets the specified virtual network gateway connection by resource group.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkGatewayConnectionName The name of the virtual network gateway connection.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, options?: VirtualNetworkGatewayConnectionsGetOptionalParams): Promise<VirtualNetworkGatewayConnectionsGetResponse>;
    /**
     * Deletes the specified virtual network Gateway connection.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkGatewayConnectionName The name of the virtual network gateway connection.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, options?: VirtualNetworkGatewayConnectionsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the specified virtual network Gateway connection.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkGatewayConnectionName The name of the virtual network gateway connection.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, options?: VirtualNetworkGatewayConnectionsDeleteOptionalParams): Promise<void>;
    /**
     * Updates a virtual network gateway connection tags.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkGatewayConnectionName The name of the virtual network gateway connection.
     * @param parameters Parameters supplied to update virtual network gateway connection tags.
     * @param options The options parameters.
     */
    beginUpdateTags(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: TagsObject, options?: VirtualNetworkGatewayConnectionsUpdateTagsOptionalParams): Promise<PollerLike<PollOperationState<VirtualNetworkGatewayConnectionsUpdateTagsResponse>, VirtualNetworkGatewayConnectionsUpdateTagsResponse>>;
    /**
     * Updates a virtual network gateway connection tags.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkGatewayConnectionName The name of the virtual network gateway connection.
     * @param parameters Parameters supplied to update virtual network gateway connection tags.
     * @param options The options parameters.
     */
    beginUpdateTagsAndWait(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: TagsObject, options?: VirtualNetworkGatewayConnectionsUpdateTagsOptionalParams): Promise<VirtualNetworkGatewayConnectionsUpdateTagsResponse>;
    /**
     * The Put VirtualNetworkGatewayConnectionSharedKey operation sets the virtual network gateway
     * connection shared key for passed virtual network gateway connection in the specified resource group
     * through Network resource provider.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkGatewayConnectionName The virtual network gateway connection name.
     * @param parameters Parameters supplied to the Begin Set Virtual Network Gateway connection Shared key
     *                   operation throughNetwork resource provider.
     * @param options The options parameters.
     */
    beginSetSharedKey(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: ConnectionSharedKey, options?: VirtualNetworkGatewayConnectionsSetSharedKeyOptionalParams): Promise<PollerLike<PollOperationState<VirtualNetworkGatewayConnectionsSetSharedKeyResponse>, VirtualNetworkGatewayConnectionsSetSharedKeyResponse>>;
    /**
     * The Put VirtualNetworkGatewayConnectionSharedKey operation sets the virtual network gateway
     * connection shared key for passed virtual network gateway connection in the specified resource group
     * through Network resource provider.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkGatewayConnectionName The virtual network gateway connection name.
     * @param parameters Parameters supplied to the Begin Set Virtual Network Gateway connection Shared key
     *                   operation throughNetwork resource provider.
     * @param options The options parameters.
     */
    beginSetSharedKeyAndWait(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: ConnectionSharedKey, options?: VirtualNetworkGatewayConnectionsSetSharedKeyOptionalParams): Promise<VirtualNetworkGatewayConnectionsSetSharedKeyResponse>;
    /**
     * The Get VirtualNetworkGatewayConnectionSharedKey operation retrieves information about the specified
     * virtual network gateway connection shared key through Network resource provider.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkGatewayConnectionName The virtual network gateway connection shared key name.
     * @param options The options parameters.
     */
    getSharedKey(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, options?: VirtualNetworkGatewayConnectionsGetSharedKeyOptionalParams): Promise<VirtualNetworkGatewayConnectionsGetSharedKeyResponse>;
    /**
     * The VirtualNetworkGatewayConnectionResetSharedKey operation resets the virtual network gateway
     * connection shared key for passed virtual network gateway connection in the specified resource group
     * through Network resource provider.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkGatewayConnectionName The virtual network gateway connection reset shared key
     *                                            Name.
     * @param parameters Parameters supplied to the begin reset virtual network gateway connection shared
     *                   key operation through network resource provider.
     * @param options The options parameters.
     */
    beginResetSharedKey(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: ConnectionResetSharedKey, options?: VirtualNetworkGatewayConnectionsResetSharedKeyOptionalParams): Promise<PollerLike<PollOperationState<VirtualNetworkGatewayConnectionsResetSharedKeyResponse>, VirtualNetworkGatewayConnectionsResetSharedKeyResponse>>;
    /**
     * The VirtualNetworkGatewayConnectionResetSharedKey operation resets the virtual network gateway
     * connection shared key for passed virtual network gateway connection in the specified resource group
     * through Network resource provider.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkGatewayConnectionName The virtual network gateway connection reset shared key
     *                                            Name.
     * @param parameters Parameters supplied to the begin reset virtual network gateway connection shared
     *                   key operation through network resource provider.
     * @param options The options parameters.
     */
    beginResetSharedKeyAndWait(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: ConnectionResetSharedKey, options?: VirtualNetworkGatewayConnectionsResetSharedKeyOptionalParams): Promise<VirtualNetworkGatewayConnectionsResetSharedKeyResponse>;
    /**
     * Starts packet capture on virtual network gateway connection in the specified resource group.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkGatewayConnectionName The name of the virtual network gateway connection.
     * @param options The options parameters.
     */
    beginStartPacketCapture(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, options?: VirtualNetworkGatewayConnectionsStartPacketCaptureOptionalParams): Promise<PollerLike<PollOperationState<VirtualNetworkGatewayConnectionsStartPacketCaptureResponse>, VirtualNetworkGatewayConnectionsStartPacketCaptureResponse>>;
    /**
     * Starts packet capture on virtual network gateway connection in the specified resource group.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkGatewayConnectionName The name of the virtual network gateway connection.
     * @param options The options parameters.
     */
    beginStartPacketCaptureAndWait(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, options?: VirtualNetworkGatewayConnectionsStartPacketCaptureOptionalParams): Promise<VirtualNetworkGatewayConnectionsStartPacketCaptureResponse>;
    /**
     * Stops packet capture on virtual network gateway connection in the specified resource group.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkGatewayConnectionName The name of the virtual network gateway Connection.
     * @param parameters Virtual network gateway packet capture parameters supplied to stop packet capture
     *                   on gateway connection.
     * @param options The options parameters.
     */
    beginStopPacketCapture(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: VpnPacketCaptureStopParameters, options?: VirtualNetworkGatewayConnectionsStopPacketCaptureOptionalParams): Promise<PollerLike<PollOperationState<VirtualNetworkGatewayConnectionsStopPacketCaptureResponse>, VirtualNetworkGatewayConnectionsStopPacketCaptureResponse>>;
    /**
     * Stops packet capture on virtual network gateway connection in the specified resource group.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkGatewayConnectionName The name of the virtual network gateway Connection.
     * @param parameters Virtual network gateway packet capture parameters supplied to stop packet capture
     *                   on gateway connection.
     * @param options The options parameters.
     */
    beginStopPacketCaptureAndWait(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: VpnPacketCaptureStopParameters, options?: VirtualNetworkGatewayConnectionsStopPacketCaptureOptionalParams): Promise<VirtualNetworkGatewayConnectionsStopPacketCaptureResponse>;
}

/** Optional parameters. */
export declare interface VirtualNetworkGatewayConnectionsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type VirtualNetworkGatewayConnectionsCreateOrUpdateResponse = VirtualNetworkGatewayConnection;

/** Optional parameters. */
export declare interface VirtualNetworkGatewayConnectionsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface VirtualNetworkGatewayConnectionsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type VirtualNetworkGatewayConnectionsGetResponse = VirtualNetworkGatewayConnection;

/** Optional parameters. */
export declare interface VirtualNetworkGatewayConnectionsGetSharedKeyOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the getSharedKey operation. */
export declare type VirtualNetworkGatewayConnectionsGetSharedKeyResponse = ConnectionSharedKey;

/** Optional parameters. */
export declare interface VirtualNetworkGatewayConnectionsListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type VirtualNetworkGatewayConnectionsListNextResponse = VirtualNetworkGatewayConnectionListResult;

/** Optional parameters. */
export declare interface VirtualNetworkGatewayConnectionsListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type VirtualNetworkGatewayConnectionsListResponse = VirtualNetworkGatewayConnectionListResult;

/** Optional parameters. */
export declare interface VirtualNetworkGatewayConnectionsResetSharedKeyOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the resetSharedKey operation. */
export declare type VirtualNetworkGatewayConnectionsResetSharedKeyResponse = ConnectionResetSharedKey;

/** Optional parameters. */
export declare interface VirtualNetworkGatewayConnectionsSetSharedKeyOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the setSharedKey operation. */
export declare type VirtualNetworkGatewayConnectionsSetSharedKeyResponse = ConnectionSharedKey;

/** Optional parameters. */
export declare interface VirtualNetworkGatewayConnectionsStartPacketCaptureOptionalParams extends coreClient.OperationOptions {
    /** Virtual network gateway packet capture parameters supplied to start packet capture on gateway connection. */
    parameters?: VpnPacketCaptureStartParameters;
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the startPacketCapture operation. */
export declare type VirtualNetworkGatewayConnectionsStartPacketCaptureResponse = {
    /** The parsed response body. */
    body: string;
};

/** Optional parameters. */
export declare interface VirtualNetworkGatewayConnectionsStopPacketCaptureOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the stopPacketCapture operation. */
export declare type VirtualNetworkGatewayConnectionsStopPacketCaptureResponse = {
    /** The parsed response body. */
    body: string;
};

/**
 * Defines values for VirtualNetworkGatewayConnectionStatus. \
 * {@link KnownVirtualNetworkGatewayConnectionStatus} can be used interchangeably with VirtualNetworkGatewayConnectionStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown** \
 * **Connecting** \
 * **Connected** \
 * **NotConnected**
 */
export declare type VirtualNetworkGatewayConnectionStatus = string;

/** Optional parameters. */
export declare interface VirtualNetworkGatewayConnectionsUpdateTagsOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the updateTags operation. */
export declare type VirtualNetworkGatewayConnectionsUpdateTagsResponse = VirtualNetworkGatewayConnection;

/**
 * Defines values for VirtualNetworkGatewayConnectionType. \
 * {@link KnownVirtualNetworkGatewayConnectionType} can be used interchangeably with VirtualNetworkGatewayConnectionType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **IPsec** \
 * **Vnet2Vnet** \
 * **ExpressRoute** \
 * **VPNClient**
 */
export declare type VirtualNetworkGatewayConnectionType = string;

/** IP configuration for virtual network gateway. */
export declare type VirtualNetworkGatewayIPConfiguration = SubResource & {
    /** The name of the resource that is unique within a resource group. This name can be used to access the resource. */
    name?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /** The private IP address allocation method. */
    privateIPAllocationMethod?: IPAllocationMethod;
    /** The reference to the subnet resource. */
    subnet?: SubResource;
    /** The reference to the public IP resource. */
    publicIPAddress?: SubResource;
    /**
     * Private IP Address for this gateway.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly privateIPAddress?: string;
    /**
     * The provisioning state of the virtual network gateway IP configuration resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** Response for the VirtualNetworkGatewayListConnections API service call. */
export declare interface VirtualNetworkGatewayListConnectionsResult {
    /** A list of VirtualNetworkGatewayConnection resources that exists in a resource group. */
    value?: VirtualNetworkGatewayConnectionListEntity[];
    /**
     * The URL to get the next set of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Response for the ListVirtualNetworkGateways API service call. */
export declare interface VirtualNetworkGatewayListResult {
    /** A list of VirtualNetworkGateway resources that exists in a resource group. */
    value?: VirtualNetworkGateway[];
    /**
     * The URL to get the next set of results.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/** Interface representing a VirtualNetworkGateways. */
export declare interface VirtualNetworkGateways {
    /**
     * Gets all virtual network gateways by resource group.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, options?: VirtualNetworkGatewaysListOptionalParams): PagedAsyncIterableIterator<VirtualNetworkGateway>;
    /**
     * Gets all the connections in a virtual network gateway.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkGatewayName The name of the virtual network gateway.
     * @param options The options parameters.
     */
    listConnections(resourceGroupName: string, virtualNetworkGatewayName: string, options?: VirtualNetworkGatewaysListConnectionsOptionalParams): PagedAsyncIterableIterator<VirtualNetworkGatewayConnectionListEntity>;
    /**
     * Creates or updates a virtual network gateway in the specified resource group.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkGatewayName The name of the virtual network gateway.
     * @param parameters Parameters supplied to create or update virtual network gateway operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, virtualNetworkGatewayName: string, parameters: VirtualNetworkGateway, options?: VirtualNetworkGatewaysCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<VirtualNetworkGatewaysCreateOrUpdateResponse>, VirtualNetworkGatewaysCreateOrUpdateResponse>>;
    /**
     * Creates or updates a virtual network gateway in the specified resource group.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkGatewayName The name of the virtual network gateway.
     * @param parameters Parameters supplied to create or update virtual network gateway operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, virtualNetworkGatewayName: string, parameters: VirtualNetworkGateway, options?: VirtualNetworkGatewaysCreateOrUpdateOptionalParams): Promise<VirtualNetworkGatewaysCreateOrUpdateResponse>;
    /**
     * Gets the specified virtual network gateway by resource group.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkGatewayName The name of the virtual network gateway.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, virtualNetworkGatewayName: string, options?: VirtualNetworkGatewaysGetOptionalParams): Promise<VirtualNetworkGatewaysGetResponse>;
    /**
     * Deletes the specified virtual network gateway.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkGatewayName The name of the virtual network gateway.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, virtualNetworkGatewayName: string, options?: VirtualNetworkGatewaysDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the specified virtual network gateway.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkGatewayName The name of the virtual network gateway.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, virtualNetworkGatewayName: string, options?: VirtualNetworkGatewaysDeleteOptionalParams): Promise<void>;
    /**
     * Updates a virtual network gateway tags.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkGatewayName The name of the virtual network gateway.
     * @param parameters Parameters supplied to update virtual network gateway tags.
     * @param options The options parameters.
     */
    beginUpdateTags(resourceGroupName: string, virtualNetworkGatewayName: string, parameters: TagsObject, options?: VirtualNetworkGatewaysUpdateTagsOptionalParams): Promise<PollerLike<PollOperationState<VirtualNetworkGatewaysUpdateTagsResponse>, VirtualNetworkGatewaysUpdateTagsResponse>>;
    /**
     * Updates a virtual network gateway tags.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkGatewayName The name of the virtual network gateway.
     * @param parameters Parameters supplied to update virtual network gateway tags.
     * @param options The options parameters.
     */
    beginUpdateTagsAndWait(resourceGroupName: string, virtualNetworkGatewayName: string, parameters: TagsObject, options?: VirtualNetworkGatewaysUpdateTagsOptionalParams): Promise<VirtualNetworkGatewaysUpdateTagsResponse>;
    /**
     * Resets the primary of the virtual network gateway in the specified resource group.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkGatewayName The name of the virtual network gateway.
     * @param options The options parameters.
     */
    beginReset(resourceGroupName: string, virtualNetworkGatewayName: string, options?: VirtualNetworkGatewaysResetOptionalParams): Promise<PollerLike<PollOperationState<VirtualNetworkGatewaysResetResponse>, VirtualNetworkGatewaysResetResponse>>;
    /**
     * Resets the primary of the virtual network gateway in the specified resource group.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkGatewayName The name of the virtual network gateway.
     * @param options The options parameters.
     */
    beginResetAndWait(resourceGroupName: string, virtualNetworkGatewayName: string, options?: VirtualNetworkGatewaysResetOptionalParams): Promise<VirtualNetworkGatewaysResetResponse>;
    /**
     * Resets the VPN client shared key of the virtual network gateway in the specified resource group.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkGatewayName The name of the virtual network gateway.
     * @param options The options parameters.
     */
    beginResetVpnClientSharedKey(resourceGroupName: string, virtualNetworkGatewayName: string, options?: VirtualNetworkGatewaysResetVpnClientSharedKeyOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Resets the VPN client shared key of the virtual network gateway in the specified resource group.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkGatewayName The name of the virtual network gateway.
     * @param options The options parameters.
     */
    beginResetVpnClientSharedKeyAndWait(resourceGroupName: string, virtualNetworkGatewayName: string, options?: VirtualNetworkGatewaysResetVpnClientSharedKeyOptionalParams): Promise<void>;
    /**
     * Generates VPN client package for P2S client of the virtual network gateway in the specified resource
     * group.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkGatewayName The name of the virtual network gateway.
     * @param parameters Parameters supplied to the generate virtual network gateway VPN client package
     *                   operation.
     * @param options The options parameters.
     */
    beginGeneratevpnclientpackage(resourceGroupName: string, virtualNetworkGatewayName: string, parameters: VpnClientParameters, options?: VirtualNetworkGatewaysGeneratevpnclientpackageOptionalParams): Promise<PollerLike<PollOperationState<VirtualNetworkGatewaysGeneratevpnclientpackageResponse>, VirtualNetworkGatewaysGeneratevpnclientpackageResponse>>;
    /**
     * Generates VPN client package for P2S client of the virtual network gateway in the specified resource
     * group.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkGatewayName The name of the virtual network gateway.
     * @param parameters Parameters supplied to the generate virtual network gateway VPN client package
     *                   operation.
     * @param options The options parameters.
     */
    beginGeneratevpnclientpackageAndWait(resourceGroupName: string, virtualNetworkGatewayName: string, parameters: VpnClientParameters, options?: VirtualNetworkGatewaysGeneratevpnclientpackageOptionalParams): Promise<VirtualNetworkGatewaysGeneratevpnclientpackageResponse>;
    /**
     * Generates VPN profile for P2S client of the virtual network gateway in the specified resource group.
     * Used for IKEV2 and radius based authentication.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkGatewayName The name of the virtual network gateway.
     * @param parameters Parameters supplied to the generate virtual network gateway VPN client package
     *                   operation.
     * @param options The options parameters.
     */
    beginGenerateVpnProfile(resourceGroupName: string, virtualNetworkGatewayName: string, parameters: VpnClientParameters, options?: VirtualNetworkGatewaysGenerateVpnProfileOptionalParams): Promise<PollerLike<PollOperationState<VirtualNetworkGatewaysGenerateVpnProfileResponse>, VirtualNetworkGatewaysGenerateVpnProfileResponse>>;
    /**
     * Generates VPN profile for P2S client of the virtual network gateway in the specified resource group.
     * Used for IKEV2 and radius based authentication.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkGatewayName The name of the virtual network gateway.
     * @param parameters Parameters supplied to the generate virtual network gateway VPN client package
     *                   operation.
     * @param options The options parameters.
     */
    beginGenerateVpnProfileAndWait(resourceGroupName: string, virtualNetworkGatewayName: string, parameters: VpnClientParameters, options?: VirtualNetworkGatewaysGenerateVpnProfileOptionalParams): Promise<VirtualNetworkGatewaysGenerateVpnProfileResponse>;
    /**
     * Gets pre-generated VPN profile for P2S client of the virtual network gateway in the specified
     * resource group. The profile needs to be generated first using generateVpnProfile.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkGatewayName The name of the virtual network gateway.
     * @param options The options parameters.
     */
    beginGetVpnProfilePackageUrl(resourceGroupName: string, virtualNetworkGatewayName: string, options?: VirtualNetworkGatewaysGetVpnProfilePackageUrlOptionalParams): Promise<PollerLike<PollOperationState<VirtualNetworkGatewaysGetVpnProfilePackageUrlResponse>, VirtualNetworkGatewaysGetVpnProfilePackageUrlResponse>>;
    /**
     * Gets pre-generated VPN profile for P2S client of the virtual network gateway in the specified
     * resource group. The profile needs to be generated first using generateVpnProfile.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkGatewayName The name of the virtual network gateway.
     * @param options The options parameters.
     */
    beginGetVpnProfilePackageUrlAndWait(resourceGroupName: string, virtualNetworkGatewayName: string, options?: VirtualNetworkGatewaysGetVpnProfilePackageUrlOptionalParams): Promise<VirtualNetworkGatewaysGetVpnProfilePackageUrlResponse>;
    /**
     * The GetBgpPeerStatus operation retrieves the status of all BGP peers.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkGatewayName The name of the virtual network gateway.
     * @param options The options parameters.
     */
    beginGetBgpPeerStatus(resourceGroupName: string, virtualNetworkGatewayName: string, options?: VirtualNetworkGatewaysGetBgpPeerStatusOptionalParams): Promise<PollerLike<PollOperationState<VirtualNetworkGatewaysGetBgpPeerStatusResponse>, VirtualNetworkGatewaysGetBgpPeerStatusResponse>>;
    /**
     * The GetBgpPeerStatus operation retrieves the status of all BGP peers.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkGatewayName The name of the virtual network gateway.
     * @param options The options parameters.
     */
    beginGetBgpPeerStatusAndWait(resourceGroupName: string, virtualNetworkGatewayName: string, options?: VirtualNetworkGatewaysGetBgpPeerStatusOptionalParams): Promise<VirtualNetworkGatewaysGetBgpPeerStatusResponse>;
    /**
     * Gets a xml format representation for supported vpn devices.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkGatewayName The name of the virtual network gateway.
     * @param options The options parameters.
     */
    supportedVpnDevices(resourceGroupName: string, virtualNetworkGatewayName: string, options?: VirtualNetworkGatewaysSupportedVpnDevicesOptionalParams): Promise<VirtualNetworkGatewaysSupportedVpnDevicesResponse>;
    /**
     * This operation retrieves a list of routes the virtual network gateway has learned, including routes
     * learned from BGP peers.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkGatewayName The name of the virtual network gateway.
     * @param options The options parameters.
     */
    beginGetLearnedRoutes(resourceGroupName: string, virtualNetworkGatewayName: string, options?: VirtualNetworkGatewaysGetLearnedRoutesOptionalParams): Promise<PollerLike<PollOperationState<VirtualNetworkGatewaysGetLearnedRoutesResponse>, VirtualNetworkGatewaysGetLearnedRoutesResponse>>;
    /**
     * This operation retrieves a list of routes the virtual network gateway has learned, including routes
     * learned from BGP peers.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkGatewayName The name of the virtual network gateway.
     * @param options The options parameters.
     */
    beginGetLearnedRoutesAndWait(resourceGroupName: string, virtualNetworkGatewayName: string, options?: VirtualNetworkGatewaysGetLearnedRoutesOptionalParams): Promise<VirtualNetworkGatewaysGetLearnedRoutesResponse>;
    /**
     * This operation retrieves a list of routes the virtual network gateway is advertising to the
     * specified peer.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkGatewayName The name of the virtual network gateway.
     * @param peer The IP address of the peer.
     * @param options The options parameters.
     */
    beginGetAdvertisedRoutes(resourceGroupName: string, virtualNetworkGatewayName: string, peer: string, options?: VirtualNetworkGatewaysGetAdvertisedRoutesOptionalParams): Promise<PollerLike<PollOperationState<VirtualNetworkGatewaysGetAdvertisedRoutesResponse>, VirtualNetworkGatewaysGetAdvertisedRoutesResponse>>;
    /**
     * This operation retrieves a list of routes the virtual network gateway is advertising to the
     * specified peer.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkGatewayName The name of the virtual network gateway.
     * @param peer The IP address of the peer.
     * @param options The options parameters.
     */
    beginGetAdvertisedRoutesAndWait(resourceGroupName: string, virtualNetworkGatewayName: string, peer: string, options?: VirtualNetworkGatewaysGetAdvertisedRoutesOptionalParams): Promise<VirtualNetworkGatewaysGetAdvertisedRoutesResponse>;
    /**
     * The Set VpnclientIpsecParameters operation sets the vpnclient ipsec policy for P2S client of virtual
     * network gateway in the specified resource group through Network resource provider.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkGatewayName The name of the virtual network gateway.
     * @param vpnclientIpsecParams Parameters supplied to the Begin Set vpnclient ipsec parameters of
     *                             Virtual Network Gateway P2S client operation through Network resource provider.
     * @param options The options parameters.
     */
    beginSetVpnclientIpsecParameters(resourceGroupName: string, virtualNetworkGatewayName: string, vpnclientIpsecParams: VpnClientIPsecParameters, options?: VirtualNetworkGatewaysSetVpnclientIpsecParametersOptionalParams): Promise<PollerLike<PollOperationState<VirtualNetworkGatewaysSetVpnclientIpsecParametersResponse>, VirtualNetworkGatewaysSetVpnclientIpsecParametersResponse>>;
    /**
     * The Set VpnclientIpsecParameters operation sets the vpnclient ipsec policy for P2S client of virtual
     * network gateway in the specified resource group through Network resource provider.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkGatewayName The name of the virtual network gateway.
     * @param vpnclientIpsecParams Parameters supplied to the Begin Set vpnclient ipsec parameters of
     *                             Virtual Network Gateway P2S client operation through Network resource provider.
     * @param options The options parameters.
     */
    beginSetVpnclientIpsecParametersAndWait(resourceGroupName: string, virtualNetworkGatewayName: string, vpnclientIpsecParams: VpnClientIPsecParameters, options?: VirtualNetworkGatewaysSetVpnclientIpsecParametersOptionalParams): Promise<VirtualNetworkGatewaysSetVpnclientIpsecParametersResponse>;
    /**
     * The Get VpnclientIpsecParameters operation retrieves information about the vpnclient ipsec policy
     * for P2S client of virtual network gateway in the specified resource group through Network resource
     * provider.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkGatewayName The virtual network gateway name.
     * @param options The options parameters.
     */
    beginGetVpnclientIpsecParameters(resourceGroupName: string, virtualNetworkGatewayName: string, options?: VirtualNetworkGatewaysGetVpnclientIpsecParametersOptionalParams): Promise<PollerLike<PollOperationState<VirtualNetworkGatewaysGetVpnclientIpsecParametersResponse>, VirtualNetworkGatewaysGetVpnclientIpsecParametersResponse>>;
    /**
     * The Get VpnclientIpsecParameters operation retrieves information about the vpnclient ipsec policy
     * for P2S client of virtual network gateway in the specified resource group through Network resource
     * provider.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkGatewayName The virtual network gateway name.
     * @param options The options parameters.
     */
    beginGetVpnclientIpsecParametersAndWait(resourceGroupName: string, virtualNetworkGatewayName: string, options?: VirtualNetworkGatewaysGetVpnclientIpsecParametersOptionalParams): Promise<VirtualNetworkGatewaysGetVpnclientIpsecParametersResponse>;
    /**
     * Gets a xml format representation for vpn device configuration script.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkGatewayConnectionName The name of the virtual network gateway connection for
     *                                            which the configuration script is generated.
     * @param parameters Parameters supplied to the generate vpn device script operation.
     * @param options The options parameters.
     */
    vpnDeviceConfigurationScript(resourceGroupName: string, virtualNetworkGatewayConnectionName: string, parameters: VpnDeviceScriptParameters, options?: VirtualNetworkGatewaysVpnDeviceConfigurationScriptOptionalParams): Promise<VirtualNetworkGatewaysVpnDeviceConfigurationScriptResponse>;
    /**
     * Starts packet capture on virtual network gateway in the specified resource group.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkGatewayName The name of the virtual network gateway.
     * @param options The options parameters.
     */
    beginStartPacketCapture(resourceGroupName: string, virtualNetworkGatewayName: string, options?: VirtualNetworkGatewaysStartPacketCaptureOptionalParams): Promise<PollerLike<PollOperationState<VirtualNetworkGatewaysStartPacketCaptureResponse>, VirtualNetworkGatewaysStartPacketCaptureResponse>>;
    /**
     * Starts packet capture on virtual network gateway in the specified resource group.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkGatewayName The name of the virtual network gateway.
     * @param options The options parameters.
     */
    beginStartPacketCaptureAndWait(resourceGroupName: string, virtualNetworkGatewayName: string, options?: VirtualNetworkGatewaysStartPacketCaptureOptionalParams): Promise<VirtualNetworkGatewaysStartPacketCaptureResponse>;
    /**
     * Stops packet capture on virtual network gateway in the specified resource group.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkGatewayName The name of the virtual network gateway.
     * @param parameters Virtual network gateway packet capture parameters supplied to stop packet capture
     *                   on gateway.
     * @param options The options parameters.
     */
    beginStopPacketCapture(resourceGroupName: string, virtualNetworkGatewayName: string, parameters: VpnPacketCaptureStopParameters, options?: VirtualNetworkGatewaysStopPacketCaptureOptionalParams): Promise<PollerLike<PollOperationState<VirtualNetworkGatewaysStopPacketCaptureResponse>, VirtualNetworkGatewaysStopPacketCaptureResponse>>;
    /**
     * Stops packet capture on virtual network gateway in the specified resource group.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkGatewayName The name of the virtual network gateway.
     * @param parameters Virtual network gateway packet capture parameters supplied to stop packet capture
     *                   on gateway.
     * @param options The options parameters.
     */
    beginStopPacketCaptureAndWait(resourceGroupName: string, virtualNetworkGatewayName: string, parameters: VpnPacketCaptureStopParameters, options?: VirtualNetworkGatewaysStopPacketCaptureOptionalParams): Promise<VirtualNetworkGatewaysStopPacketCaptureResponse>;
    /**
     * Get VPN client connection health detail per P2S client connection of the virtual network gateway in
     * the specified resource group.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkGatewayName The name of the virtual network gateway.
     * @param options The options parameters.
     */
    beginGetVpnclientConnectionHealth(resourceGroupName: string, virtualNetworkGatewayName: string, options?: VirtualNetworkGatewaysGetVpnclientConnectionHealthOptionalParams): Promise<PollerLike<PollOperationState<VirtualNetworkGatewaysGetVpnclientConnectionHealthResponse>, VirtualNetworkGatewaysGetVpnclientConnectionHealthResponse>>;
    /**
     * Get VPN client connection health detail per P2S client connection of the virtual network gateway in
     * the specified resource group.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkGatewayName The name of the virtual network gateway.
     * @param options The options parameters.
     */
    beginGetVpnclientConnectionHealthAndWait(resourceGroupName: string, virtualNetworkGatewayName: string, options?: VirtualNetworkGatewaysGetVpnclientConnectionHealthOptionalParams): Promise<VirtualNetworkGatewaysGetVpnclientConnectionHealthResponse>;
    /**
     * Disconnect vpn connections of virtual network gateway in the specified resource group.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkGatewayName The name of the virtual network gateway.
     * @param request The parameters are supplied to disconnect vpn connections.
     * @param options The options parameters.
     */
    beginDisconnectVirtualNetworkGatewayVpnConnections(resourceGroupName: string, virtualNetworkGatewayName: string, request: P2SVpnConnectionRequest, options?: VirtualNetworkGatewaysDisconnectVirtualNetworkGatewayVpnConnectionsOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Disconnect vpn connections of virtual network gateway in the specified resource group.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkGatewayName The name of the virtual network gateway.
     * @param request The parameters are supplied to disconnect vpn connections.
     * @param options The options parameters.
     */
    beginDisconnectVirtualNetworkGatewayVpnConnectionsAndWait(resourceGroupName: string, virtualNetworkGatewayName: string, request: P2SVpnConnectionRequest, options?: VirtualNetworkGatewaysDisconnectVirtualNetworkGatewayVpnConnectionsOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface VirtualNetworkGatewaysCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type VirtualNetworkGatewaysCreateOrUpdateResponse = VirtualNetworkGateway;

/** Optional parameters. */
export declare interface VirtualNetworkGatewaysDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface VirtualNetworkGatewaysDisconnectVirtualNetworkGatewayVpnConnectionsOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface VirtualNetworkGatewaysGeneratevpnclientpackageOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the generatevpnclientpackage operation. */
export declare type VirtualNetworkGatewaysGeneratevpnclientpackageResponse = {
    /** The parsed response body. */
    body: string;
};

/** Optional parameters. */
export declare interface VirtualNetworkGatewaysGenerateVpnProfileOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the generateVpnProfile operation. */
export declare type VirtualNetworkGatewaysGenerateVpnProfileResponse = {
    /** The parsed response body. */
    body: string;
};

/** Optional parameters. */
export declare interface VirtualNetworkGatewaysGetAdvertisedRoutesOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the getAdvertisedRoutes operation. */
export declare type VirtualNetworkGatewaysGetAdvertisedRoutesResponse = GatewayRouteListResult;

/** Optional parameters. */
export declare interface VirtualNetworkGatewaysGetBgpPeerStatusOptionalParams extends coreClient.OperationOptions {
    /** The IP address of the peer to retrieve the status of. */
    peer?: string;
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the getBgpPeerStatus operation. */
export declare type VirtualNetworkGatewaysGetBgpPeerStatusResponse = BgpPeerStatusListResult;

/** Optional parameters. */
export declare interface VirtualNetworkGatewaysGetLearnedRoutesOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the getLearnedRoutes operation. */
export declare type VirtualNetworkGatewaysGetLearnedRoutesResponse = GatewayRouteListResult;

/** Optional parameters. */
export declare interface VirtualNetworkGatewaysGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type VirtualNetworkGatewaysGetResponse = VirtualNetworkGateway;

/** Optional parameters. */
export declare interface VirtualNetworkGatewaysGetVpnclientConnectionHealthOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the getVpnclientConnectionHealth operation. */
export declare type VirtualNetworkGatewaysGetVpnclientConnectionHealthResponse = VpnClientConnectionHealthDetailListResult;

/** Optional parameters. */
export declare interface VirtualNetworkGatewaysGetVpnclientIpsecParametersOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the getVpnclientIpsecParameters operation. */
export declare type VirtualNetworkGatewaysGetVpnclientIpsecParametersResponse = VpnClientIPsecParameters;

/** Optional parameters. */
export declare interface VirtualNetworkGatewaysGetVpnProfilePackageUrlOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the getVpnProfilePackageUrl operation. */
export declare type VirtualNetworkGatewaysGetVpnProfilePackageUrlResponse = {
    /** The parsed response body. */
    body: string;
};

/** VirtualNetworkGatewaySku details. */
export declare interface VirtualNetworkGatewaySku {
    /** Gateway SKU name. */
    name?: VirtualNetworkGatewaySkuName;
    /** Gateway SKU tier. */
    tier?: VirtualNetworkGatewaySkuTier;
    /**
     * The capacity.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly capacity?: number;
}

/**
 * Defines values for VirtualNetworkGatewaySkuName. \
 * {@link KnownVirtualNetworkGatewaySkuName} can be used interchangeably with VirtualNetworkGatewaySkuName,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Basic** \
 * **HighPerformance** \
 * **Standard** \
 * **UltraPerformance** \
 * **VpnGw1** \
 * **VpnGw2** \
 * **VpnGw3** \
 * **VpnGw4** \
 * **VpnGw5** \
 * **VpnGw1AZ** \
 * **VpnGw2AZ** \
 * **VpnGw3AZ** \
 * **VpnGw4AZ** \
 * **VpnGw5AZ** \
 * **ErGw1AZ** \
 * **ErGw2AZ** \
 * **ErGw3AZ**
 */
export declare type VirtualNetworkGatewaySkuName = string;

/**
 * Defines values for VirtualNetworkGatewaySkuTier. \
 * {@link KnownVirtualNetworkGatewaySkuTier} can be used interchangeably with VirtualNetworkGatewaySkuTier,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Basic** \
 * **HighPerformance** \
 * **Standard** \
 * **UltraPerformance** \
 * **VpnGw1** \
 * **VpnGw2** \
 * **VpnGw3** \
 * **VpnGw4** \
 * **VpnGw5** \
 * **VpnGw1AZ** \
 * **VpnGw2AZ** \
 * **VpnGw3AZ** \
 * **VpnGw4AZ** \
 * **VpnGw5AZ** \
 * **ErGw1AZ** \
 * **ErGw2AZ** \
 * **ErGw3AZ**
 */
export declare type VirtualNetworkGatewaySkuTier = string;

/** Optional parameters. */
export declare interface VirtualNetworkGatewaysListConnectionsNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listConnectionsNext operation. */
export declare type VirtualNetworkGatewaysListConnectionsNextResponse = VirtualNetworkGatewayListConnectionsResult;

/** Optional parameters. */
export declare interface VirtualNetworkGatewaysListConnectionsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listConnections operation. */
export declare type VirtualNetworkGatewaysListConnectionsResponse = VirtualNetworkGatewayListConnectionsResult;

/** Optional parameters. */
export declare interface VirtualNetworkGatewaysListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type VirtualNetworkGatewaysListNextResponse = VirtualNetworkGatewayListResult;

/** Optional parameters. */
export declare interface VirtualNetworkGatewaysListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type VirtualNetworkGatewaysListResponse = VirtualNetworkGatewayListResult;

/** Optional parameters. */
export declare interface VirtualNetworkGatewaysResetOptionalParams extends coreClient.OperationOptions {
    /** Virtual network gateway vip address supplied to the begin reset of the active-active feature enabled gateway. */
    gatewayVip?: string;
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the reset operation. */
export declare type VirtualNetworkGatewaysResetResponse = VirtualNetworkGateway;

/** Optional parameters. */
export declare interface VirtualNetworkGatewaysResetVpnClientSharedKeyOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface VirtualNetworkGatewaysSetVpnclientIpsecParametersOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the setVpnclientIpsecParameters operation. */
export declare type VirtualNetworkGatewaysSetVpnclientIpsecParametersResponse = VpnClientIPsecParameters;

/** Optional parameters. */
export declare interface VirtualNetworkGatewaysStartPacketCaptureOptionalParams extends coreClient.OperationOptions {
    /** Virtual network gateway packet capture parameters supplied to start packet capture on gateway. */
    parameters?: VpnPacketCaptureStartParameters;
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the startPacketCapture operation. */
export declare type VirtualNetworkGatewaysStartPacketCaptureResponse = {
    /** The parsed response body. */
    body: string;
};

/** Optional parameters. */
export declare interface VirtualNetworkGatewaysStopPacketCaptureOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the stopPacketCapture operation. */
export declare type VirtualNetworkGatewaysStopPacketCaptureResponse = {
    /** The parsed response body. */
    body: string;
};

/** Optional parameters. */
export declare interface VirtualNetworkGatewaysSupportedVpnDevicesOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the supportedVpnDevices operation. */
export declare type VirtualNetworkGatewaysSupportedVpnDevicesResponse = {
    /** The parsed response body. */
    body: string;
};

/** Optional parameters. */
export declare interface VirtualNetworkGatewaysUpdateTagsOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the updateTags operation. */
export declare type VirtualNetworkGatewaysUpdateTagsResponse = VirtualNetworkGateway;

/** Optional parameters. */
export declare interface VirtualNetworkGatewaysVpnDeviceConfigurationScriptOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the vpnDeviceConfigurationScript operation. */
export declare type VirtualNetworkGatewaysVpnDeviceConfigurationScriptResponse = {
    /** The parsed response body. */
    body: string;
};

/**
 * Defines values for VirtualNetworkGatewayType. \
 * {@link KnownVirtualNetworkGatewayType} can be used interchangeably with VirtualNetworkGatewayType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Vpn** \
 * **ExpressRoute**
 */
export declare type VirtualNetworkGatewayType = string;

/** Response for the ListVirtualNetworks API service call. */
export declare interface VirtualNetworkListResult {
    /** A list of VirtualNetwork resources in a resource group. */
    value?: VirtualNetwork[];
    /** The URL to get the next set of results. */
    nextLink?: string;
}

/** Response for the virtual networks GetUsage API service call. */
export declare interface VirtualNetworkListUsageResult {
    /**
     * VirtualNetwork usage stats.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: VirtualNetworkUsage[];
    /** The URL to get the next set of results. */
    nextLink?: string;
}

/** Peerings in a virtual network resource. */
export declare type VirtualNetworkPeering = SubResource & {
    /** The name of the resource that is unique within a resource group. This name can be used to access the resource. */
    name?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /** Whether the VMs in the local virtual network space would be able to access the VMs in remote virtual network space. */
    allowVirtualNetworkAccess?: boolean;
    /** Whether the forwarded traffic from the VMs in the local virtual network will be allowed/disallowed in remote virtual network. */
    allowForwardedTraffic?: boolean;
    /** If gateway links can be used in remote virtual networking to link to this virtual network. */
    allowGatewayTransit?: boolean;
    /** If remote gateways can be used on this virtual network. If the flag is set to true, and allowGatewayTransit on remote peering is also true, virtual network will use gateways of remote virtual network for transit. Only one peering can have this flag set to true. This flag cannot be set if virtual network already has a gateway. */
    useRemoteGateways?: boolean;
    /** The reference to the remote virtual network. The remote virtual network can be in the same or different region (preview). See here to register for the preview and learn more (https://docs.microsoft.com/en-us/azure/virtual-network/virtual-network-create-peering). */
    remoteVirtualNetwork?: SubResource;
    /** The reference to the remote virtual network address space. */
    remoteAddressSpace?: AddressSpace;
    /** The status of the virtual network peering. */
    peeringState?: VirtualNetworkPeeringState;
    /**
     * The provisioning state of the virtual network peering resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** Response for ListSubnets API service call. Retrieves all subnets that belong to a virtual network. */
export declare interface VirtualNetworkPeeringListResult {
    /** The peerings in a virtual network. */
    value?: VirtualNetworkPeering[];
    /** The URL to get the next set of results. */
    nextLink?: string;
}

/** Interface representing a VirtualNetworkPeerings. */
export declare interface VirtualNetworkPeerings {
    /**
     * Gets all virtual network peerings in a virtual network.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkName The name of the virtual network.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, virtualNetworkName: string, options?: VirtualNetworkPeeringsListOptionalParams): PagedAsyncIterableIterator<VirtualNetworkPeering>;
    /**
     * Deletes the specified virtual network peering.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkName The name of the virtual network.
     * @param virtualNetworkPeeringName The name of the virtual network peering.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, virtualNetworkName: string, virtualNetworkPeeringName: string, options?: VirtualNetworkPeeringsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the specified virtual network peering.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkName The name of the virtual network.
     * @param virtualNetworkPeeringName The name of the virtual network peering.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, virtualNetworkName: string, virtualNetworkPeeringName: string, options?: VirtualNetworkPeeringsDeleteOptionalParams): Promise<void>;
    /**
     * Gets the specified virtual network peering.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkName The name of the virtual network.
     * @param virtualNetworkPeeringName The name of the virtual network peering.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, virtualNetworkName: string, virtualNetworkPeeringName: string, options?: VirtualNetworkPeeringsGetOptionalParams): Promise<VirtualNetworkPeeringsGetResponse>;
    /**
     * Creates or updates a peering in the specified virtual network.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkName The name of the virtual network.
     * @param virtualNetworkPeeringName The name of the peering.
     * @param virtualNetworkPeeringParameters Parameters supplied to the create or update virtual network
     *                                        peering operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, virtualNetworkName: string, virtualNetworkPeeringName: string, virtualNetworkPeeringParameters: VirtualNetworkPeering, options?: VirtualNetworkPeeringsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<VirtualNetworkPeeringsCreateOrUpdateResponse>, VirtualNetworkPeeringsCreateOrUpdateResponse>>;
    /**
     * Creates or updates a peering in the specified virtual network.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkName The name of the virtual network.
     * @param virtualNetworkPeeringName The name of the peering.
     * @param virtualNetworkPeeringParameters Parameters supplied to the create or update virtual network
     *                                        peering operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, virtualNetworkName: string, virtualNetworkPeeringName: string, virtualNetworkPeeringParameters: VirtualNetworkPeering, options?: VirtualNetworkPeeringsCreateOrUpdateOptionalParams): Promise<VirtualNetworkPeeringsCreateOrUpdateResponse>;
}

/** Optional parameters. */
export declare interface VirtualNetworkPeeringsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type VirtualNetworkPeeringsCreateOrUpdateResponse = VirtualNetworkPeering;

/** Optional parameters. */
export declare interface VirtualNetworkPeeringsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface VirtualNetworkPeeringsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type VirtualNetworkPeeringsGetResponse = VirtualNetworkPeering;

/** Optional parameters. */
export declare interface VirtualNetworkPeeringsListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type VirtualNetworkPeeringsListNextResponse = VirtualNetworkPeeringListResult;

/** Optional parameters. */
export declare interface VirtualNetworkPeeringsListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type VirtualNetworkPeeringsListResponse = VirtualNetworkPeeringListResult;

/**
 * Defines values for VirtualNetworkPeeringState. \
 * {@link KnownVirtualNetworkPeeringState} can be used interchangeably with VirtualNetworkPeeringState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Initiated** \
 * **Connected** \
 * **Disconnected**
 */
export declare type VirtualNetworkPeeringState = string;

/** Interface representing a VirtualNetworks. */
export declare interface VirtualNetworks {
    /**
     * Gets all virtual networks in a subscription.
     * @param options The options parameters.
     */
    listAll(options?: VirtualNetworksListAllOptionalParams): PagedAsyncIterableIterator<VirtualNetwork>;
    /**
     * Gets all virtual networks in a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, options?: VirtualNetworksListOptionalParams): PagedAsyncIterableIterator<VirtualNetwork>;
    /**
     * Lists usage stats.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkName The name of the virtual network.
     * @param options The options parameters.
     */
    listUsage(resourceGroupName: string, virtualNetworkName: string, options?: VirtualNetworksListUsageOptionalParams): PagedAsyncIterableIterator<VirtualNetworkUsage>;
    /**
     * Deletes the specified virtual network.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkName The name of the virtual network.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, virtualNetworkName: string, options?: VirtualNetworksDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the specified virtual network.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkName The name of the virtual network.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, virtualNetworkName: string, options?: VirtualNetworksDeleteOptionalParams): Promise<void>;
    /**
     * Gets the specified virtual network by resource group.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkName The name of the virtual network.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, virtualNetworkName: string, options?: VirtualNetworksGetOptionalParams): Promise<VirtualNetworksGetResponse>;
    /**
     * Creates or updates a virtual network in the specified resource group.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkName The name of the virtual network.
     * @param parameters Parameters supplied to the create or update virtual network operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, virtualNetworkName: string, parameters: VirtualNetwork, options?: VirtualNetworksCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<VirtualNetworksCreateOrUpdateResponse>, VirtualNetworksCreateOrUpdateResponse>>;
    /**
     * Creates or updates a virtual network in the specified resource group.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkName The name of the virtual network.
     * @param parameters Parameters supplied to the create or update virtual network operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, virtualNetworkName: string, parameters: VirtualNetwork, options?: VirtualNetworksCreateOrUpdateOptionalParams): Promise<VirtualNetworksCreateOrUpdateResponse>;
    /**
     * Updates a virtual network tags.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkName The name of the virtual network.
     * @param parameters Parameters supplied to update virtual network tags.
     * @param options The options parameters.
     */
    updateTags(resourceGroupName: string, virtualNetworkName: string, parameters: TagsObject, options?: VirtualNetworksUpdateTagsOptionalParams): Promise<VirtualNetworksUpdateTagsResponse>;
    /**
     * Checks whether a private IP address is available for use.
     * @param resourceGroupName The name of the resource group.
     * @param virtualNetworkName The name of the virtual network.
     * @param ipAddress The private IP address to be verified.
     * @param options The options parameters.
     */
    checkIPAddressAvailability(resourceGroupName: string, virtualNetworkName: string, ipAddress: string, options?: VirtualNetworksCheckIPAddressAvailabilityOptionalParams): Promise<VirtualNetworksCheckIPAddressAvailabilityResponse>;
}

/** Optional parameters. */
export declare interface VirtualNetworksCheckIPAddressAvailabilityOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the checkIPAddressAvailability operation. */
export declare type VirtualNetworksCheckIPAddressAvailabilityResponse = IPAddressAvailabilityResult;

/** Optional parameters. */
export declare interface VirtualNetworksCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type VirtualNetworksCreateOrUpdateResponse = VirtualNetwork;

/** Optional parameters. */
export declare interface VirtualNetworksDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface VirtualNetworksGetOptionalParams extends coreClient.OperationOptions {
    /** Expands referenced resources. */
    expand?: string;
}

/** Contains response data for the get operation. */
export declare type VirtualNetworksGetResponse = VirtualNetwork;

/** Optional parameters. */
export declare interface VirtualNetworksListAllNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAllNext operation. */
export declare type VirtualNetworksListAllNextResponse = VirtualNetworkListResult;

/** Optional parameters. */
export declare interface VirtualNetworksListAllOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAll operation. */
export declare type VirtualNetworksListAllResponse = VirtualNetworkListResult;

/** Optional parameters. */
export declare interface VirtualNetworksListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type VirtualNetworksListNextResponse = VirtualNetworkListResult;

/** Optional parameters. */
export declare interface VirtualNetworksListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type VirtualNetworksListResponse = VirtualNetworkListResult;

/** Optional parameters. */
export declare interface VirtualNetworksListUsageNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listUsageNext operation. */
export declare type VirtualNetworksListUsageNextResponse = VirtualNetworkListUsageResult;

/** Optional parameters. */
export declare interface VirtualNetworksListUsageOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listUsage operation. */
export declare type VirtualNetworksListUsageResponse = VirtualNetworkListUsageResult;

/** Optional parameters. */
export declare interface VirtualNetworksUpdateTagsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateTags operation. */
export declare type VirtualNetworksUpdateTagsResponse = VirtualNetwork;

/** Virtual Network Tap resource. */
export declare type VirtualNetworkTap = Resource & {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /**
     * Specifies the list of resource IDs for the network interface IP configuration that needs to be tapped.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly networkInterfaceTapConfigurations?: NetworkInterfaceTapConfiguration[];
    /**
     * The resource GUID property of the virtual network tap resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly resourceGuid?: string;
    /**
     * The provisioning state of the virtual network tap resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
    /** The reference to the private IP Address of the collector nic that will receive the tap. */
    destinationNetworkInterfaceIPConfiguration?: NetworkInterfaceIPConfiguration;
    /** The reference to the private IP address on the internal Load Balancer that will receive the tap. */
    destinationLoadBalancerFrontEndIPConfiguration?: FrontendIPConfiguration;
    /** The VXLAN destination port that will receive the tapped traffic. */
    destinationPort?: number;
};

/** Response for ListVirtualNetworkTap API service call. */
export declare interface VirtualNetworkTapListResult {
    /** A list of VirtualNetworkTaps in a resource group. */
    value?: VirtualNetworkTap[];
    /** The URL to get the next set of results. */
    nextLink?: string;
}

/** Interface representing a VirtualNetworkTaps. */
export declare interface VirtualNetworkTaps {
    /**
     * Gets all the VirtualNetworkTaps in a subscription.
     * @param options The options parameters.
     */
    listAll(options?: VirtualNetworkTapsListAllOptionalParams): PagedAsyncIterableIterator<VirtualNetworkTap>;
    /**
     * Gets all the VirtualNetworkTaps in a subscription.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: VirtualNetworkTapsListByResourceGroupOptionalParams): PagedAsyncIterableIterator<VirtualNetworkTap>;
    /**
     * Deletes the specified virtual network tap.
     * @param resourceGroupName The name of the resource group.
     * @param tapName The name of the virtual network tap.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, tapName: string, options?: VirtualNetworkTapsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the specified virtual network tap.
     * @param resourceGroupName The name of the resource group.
     * @param tapName The name of the virtual network tap.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, tapName: string, options?: VirtualNetworkTapsDeleteOptionalParams): Promise<void>;
    /**
     * Gets information about the specified virtual network tap.
     * @param resourceGroupName The name of the resource group.
     * @param tapName The name of virtual network tap.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, tapName: string, options?: VirtualNetworkTapsGetOptionalParams): Promise<VirtualNetworkTapsGetResponse>;
    /**
     * Creates or updates a Virtual Network Tap.
     * @param resourceGroupName The name of the resource group.
     * @param tapName The name of the virtual network tap.
     * @param parameters Parameters supplied to the create or update virtual network tap operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, tapName: string, parameters: VirtualNetworkTap, options?: VirtualNetworkTapsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<VirtualNetworkTapsCreateOrUpdateResponse>, VirtualNetworkTapsCreateOrUpdateResponse>>;
    /**
     * Creates or updates a Virtual Network Tap.
     * @param resourceGroupName The name of the resource group.
     * @param tapName The name of the virtual network tap.
     * @param parameters Parameters supplied to the create or update virtual network tap operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, tapName: string, parameters: VirtualNetworkTap, options?: VirtualNetworkTapsCreateOrUpdateOptionalParams): Promise<VirtualNetworkTapsCreateOrUpdateResponse>;
    /**
     * Updates an VirtualNetworkTap tags.
     * @param resourceGroupName The name of the resource group.
     * @param tapName The name of the tap.
     * @param tapParameters Parameters supplied to update VirtualNetworkTap tags.
     * @param options The options parameters.
     */
    updateTags(resourceGroupName: string, tapName: string, tapParameters: TagsObject, options?: VirtualNetworkTapsUpdateTagsOptionalParams): Promise<VirtualNetworkTapsUpdateTagsResponse>;
}

/** Optional parameters. */
export declare interface VirtualNetworkTapsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type VirtualNetworkTapsCreateOrUpdateResponse = VirtualNetworkTap;

/** Optional parameters. */
export declare interface VirtualNetworkTapsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface VirtualNetworkTapsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type VirtualNetworkTapsGetResponse = VirtualNetworkTap;

/** Optional parameters. */
export declare interface VirtualNetworkTapsListAllNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAllNext operation. */
export declare type VirtualNetworkTapsListAllNextResponse = VirtualNetworkTapListResult;

/** Optional parameters. */
export declare interface VirtualNetworkTapsListAllOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAll operation. */
export declare type VirtualNetworkTapsListAllResponse = VirtualNetworkTapListResult;

/** Optional parameters. */
export declare interface VirtualNetworkTapsListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNext operation. */
export declare type VirtualNetworkTapsListByResourceGroupNextResponse = VirtualNetworkTapListResult;

/** Optional parameters. */
export declare interface VirtualNetworkTapsListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroup operation. */
export declare type VirtualNetworkTapsListByResourceGroupResponse = VirtualNetworkTapListResult;

/** Optional parameters. */
export declare interface VirtualNetworkTapsUpdateTagsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateTags operation. */
export declare type VirtualNetworkTapsUpdateTagsResponse = VirtualNetworkTap;

/** Usage details for subnet. */
export declare interface VirtualNetworkUsage {
    /**
     * Indicates number of IPs used from the Subnet.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly currentValue?: number;
    /**
     * Subnet identifier.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
    /**
     * Indicates the size of the subnet.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly limit?: number;
    /**
     * The name containing common and localized value for usage.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: VirtualNetworkUsageName;
    /**
     * Usage units. Returns 'Count'.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly unit?: string;
}

/** Usage strings container. */
export declare interface VirtualNetworkUsageName {
    /**
     * Localized subnet size and usage string.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly localizedValue?: string;
    /**
     * Subnet size and usage string.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: string;
}

/** VirtualRouter Resource. */
export declare type VirtualRouter = Resource & {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /** VirtualRouter ASN. */
    virtualRouterAsn?: number;
    /** VirtualRouter IPs. */
    virtualRouterIps?: string[];
    /** The Subnet on which VirtualRouter is hosted. */
    hostedSubnet?: SubResource;
    /** The Gateway on which VirtualRouter is hosted. */
    hostedGateway?: SubResource;
    /**
     * List of references to VirtualRouterPeerings.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly peerings?: SubResource[];
    /**
     * The provisioning state of the resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** Response for ListVirtualRouters API service call. */
export declare interface VirtualRouterListResult {
    /** List of Virtual Routers. */
    value?: VirtualRouter[];
    /** URL to get the next set of results. */
    nextLink?: string;
}

/** Virtual Router Peering resource. */
export declare type VirtualRouterPeering = SubResource & {
    /** Name of the virtual router peering that is unique within a virtual router. */
    name?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /**
     * Peering type.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /** Peer ASN. */
    peerAsn?: number;
    /** Peer IP. */
    peerIp?: string;
    /**
     * The provisioning state of the resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** Response for ListVirtualRouterPeerings API service call. */
export declare interface VirtualRouterPeeringListResult {
    /** List of VirtualRouterPeerings in a VirtualRouter. */
    value?: VirtualRouterPeering[];
    /** URL to get the next set of results. */
    nextLink?: string;
}

/** Interface representing a VirtualRouterPeerings. */
export declare interface VirtualRouterPeerings {
    /**
     * Lists all Virtual Router Peerings in a Virtual Router resource.
     * @param resourceGroupName The name of the resource group.
     * @param virtualRouterName The name of the Virtual Router.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, virtualRouterName: string, options?: VirtualRouterPeeringsListOptionalParams): PagedAsyncIterableIterator<VirtualRouterPeering>;
    /**
     * Deletes the specified peering from a Virtual Router.
     * @param resourceGroupName The name of the resource group.
     * @param virtualRouterName The name of the Virtual Router.
     * @param peeringName The name of the peering.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, virtualRouterName: string, peeringName: string, options?: VirtualRouterPeeringsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the specified peering from a Virtual Router.
     * @param resourceGroupName The name of the resource group.
     * @param virtualRouterName The name of the Virtual Router.
     * @param peeringName The name of the peering.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, virtualRouterName: string, peeringName: string, options?: VirtualRouterPeeringsDeleteOptionalParams): Promise<void>;
    /**
     * Gets the specified Virtual Router Peering.
     * @param resourceGroupName The name of the resource group.
     * @param virtualRouterName The name of the Virtual Router.
     * @param peeringName The name of the Virtual Router Peering.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, virtualRouterName: string, peeringName: string, options?: VirtualRouterPeeringsGetOptionalParams): Promise<VirtualRouterPeeringsGetResponse>;
    /**
     * Creates or updates the specified Virtual Router Peering.
     * @param resourceGroupName The name of the resource group.
     * @param virtualRouterName The name of the Virtual Router.
     * @param peeringName The name of the Virtual Router Peering.
     * @param parameters Parameters supplied to the create or update Virtual Router Peering operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, virtualRouterName: string, peeringName: string, parameters: VirtualRouterPeering, options?: VirtualRouterPeeringsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<VirtualRouterPeeringsCreateOrUpdateResponse>, VirtualRouterPeeringsCreateOrUpdateResponse>>;
    /**
     * Creates or updates the specified Virtual Router Peering.
     * @param resourceGroupName The name of the resource group.
     * @param virtualRouterName The name of the Virtual Router.
     * @param peeringName The name of the Virtual Router Peering.
     * @param parameters Parameters supplied to the create or update Virtual Router Peering operation.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, virtualRouterName: string, peeringName: string, parameters: VirtualRouterPeering, options?: VirtualRouterPeeringsCreateOrUpdateOptionalParams): Promise<VirtualRouterPeeringsCreateOrUpdateResponse>;
}

/** Optional parameters. */
export declare interface VirtualRouterPeeringsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type VirtualRouterPeeringsCreateOrUpdateResponse = VirtualRouterPeering;

/** Optional parameters. */
export declare interface VirtualRouterPeeringsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface VirtualRouterPeeringsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type VirtualRouterPeeringsGetResponse = VirtualRouterPeering;

/** Optional parameters. */
export declare interface VirtualRouterPeeringsListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type VirtualRouterPeeringsListNextResponse = VirtualRouterPeeringListResult;

/** Optional parameters. */
export declare interface VirtualRouterPeeringsListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type VirtualRouterPeeringsListResponse = VirtualRouterPeeringListResult;

/** Interface representing a VirtualRouters. */
export declare interface VirtualRouters {
    /**
     * Lists all Virtual Routers in a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: VirtualRoutersListByResourceGroupOptionalParams): PagedAsyncIterableIterator<VirtualRouter>;
    /**
     * Gets all the Virtual Routers in a subscription.
     * @param options The options parameters.
     */
    list(options?: VirtualRoutersListOptionalParams): PagedAsyncIterableIterator<VirtualRouter>;
    /**
     * Deletes the specified Virtual Router.
     * @param resourceGroupName The name of the resource group.
     * @param virtualRouterName The name of the Virtual Router.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, virtualRouterName: string, options?: VirtualRoutersDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes the specified Virtual Router.
     * @param resourceGroupName The name of the resource group.
     * @param virtualRouterName The name of the Virtual Router.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, virtualRouterName: string, options?: VirtualRoutersDeleteOptionalParams): Promise<void>;
    /**
     * Gets the specified Virtual Router.
     * @param resourceGroupName The name of the resource group.
     * @param virtualRouterName The name of the Virtual Router.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, virtualRouterName: string, options?: VirtualRoutersGetOptionalParams): Promise<VirtualRoutersGetResponse>;
    /**
     * Creates or updates the specified Virtual Router.
     * @param resourceGroupName The name of the resource group.
     * @param virtualRouterName The name of the Virtual Router.
     * @param parameters Parameters supplied to the create or update Virtual Router.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, virtualRouterName: string, parameters: VirtualRouter, options?: VirtualRoutersCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<VirtualRoutersCreateOrUpdateResponse>, VirtualRoutersCreateOrUpdateResponse>>;
    /**
     * Creates or updates the specified Virtual Router.
     * @param resourceGroupName The name of the resource group.
     * @param virtualRouterName The name of the Virtual Router.
     * @param parameters Parameters supplied to the create or update Virtual Router.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, virtualRouterName: string, parameters: VirtualRouter, options?: VirtualRoutersCreateOrUpdateOptionalParams): Promise<VirtualRoutersCreateOrUpdateResponse>;
}

/** Optional parameters. */
export declare interface VirtualRoutersCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type VirtualRoutersCreateOrUpdateResponse = VirtualRouter;

/** Optional parameters. */
export declare interface VirtualRoutersDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface VirtualRoutersGetOptionalParams extends coreClient.OperationOptions {
    /** Expands referenced resources. */
    expand?: string;
}

/** Contains response data for the get operation. */
export declare type VirtualRoutersGetResponse = VirtualRouter;

/** Optional parameters. */
export declare interface VirtualRoutersListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNext operation. */
export declare type VirtualRoutersListByResourceGroupNextResponse = VirtualRouterListResult;

/** Optional parameters. */
export declare interface VirtualRoutersListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroup operation. */
export declare type VirtualRoutersListByResourceGroupResponse = VirtualRouterListResult;

/** Optional parameters. */
export declare interface VirtualRoutersListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type VirtualRoutersListNextResponse = VirtualRouterListResult;

/** Optional parameters. */
export declare interface VirtualRoutersListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type VirtualRoutersListResponse = VirtualRouterListResult;

/** VirtualWAN Resource. */
export declare type VirtualWAN = Resource & {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /** Vpn encryption to be disabled or not. */
    disableVpnEncryption?: boolean;
    /**
     * List of VirtualHubs in the VirtualWAN.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly virtualHubs?: SubResource[];
    /**
     * List of VpnSites in the VirtualWAN.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly vpnSites?: SubResource[];
    /** True if branch to branch traffic is allowed. */
    allowBranchToBranchTraffic?: boolean;
    /** True if Vnet to Vnet traffic is allowed. */
    allowVnetToVnetTraffic?: boolean;
    /**
     * The office local breakout category.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly office365LocalBreakoutCategory?: OfficeTrafficCategory;
    /**
     * The provisioning state of the virtual WAN resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
    /** The type of the VirtualWAN. */
    typePropertiesType?: string;
};

/** Interface representing a VirtualWans. */
export declare interface VirtualWans {
    /**
     * Lists all the VirtualWANs in a resource group.
     * @param resourceGroupName The resource group name of the VirtualWan.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: VirtualWansListByResourceGroupOptionalParams): PagedAsyncIterableIterator<VirtualWAN>;
    /**
     * Lists all the VirtualWANs in a subscription.
     * @param options The options parameters.
     */
    list(options?: VirtualWansListOptionalParams): PagedAsyncIterableIterator<VirtualWAN>;
    /**
     * Retrieves the details of a VirtualWAN.
     * @param resourceGroupName The resource group name of the VirtualWan.
     * @param virtualWANName The name of the VirtualWAN being retrieved.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, virtualWANName: string, options?: VirtualWansGetOptionalParams): Promise<VirtualWansGetResponse>;
    /**
     * Creates a VirtualWAN resource if it doesn't exist else updates the existing VirtualWAN.
     * @param resourceGroupName The resource group name of the VirtualWan.
     * @param virtualWANName The name of the VirtualWAN being created or updated.
     * @param WANParameters Parameters supplied to create or update VirtualWAN.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, virtualWANName: string, WANParameters: VirtualWAN, options?: VirtualWansCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<VirtualWansCreateOrUpdateResponse>, VirtualWansCreateOrUpdateResponse>>;
    /**
     * Creates a VirtualWAN resource if it doesn't exist else updates the existing VirtualWAN.
     * @param resourceGroupName The resource group name of the VirtualWan.
     * @param virtualWANName The name of the VirtualWAN being created or updated.
     * @param WANParameters Parameters supplied to create or update VirtualWAN.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, virtualWANName: string, WANParameters: VirtualWAN, options?: VirtualWansCreateOrUpdateOptionalParams): Promise<VirtualWansCreateOrUpdateResponse>;
    /**
     * Updates a VirtualWAN tags.
     * @param resourceGroupName The resource group name of the VirtualWan.
     * @param virtualWANName The name of the VirtualWAN being updated.
     * @param WANParameters Parameters supplied to Update VirtualWAN tags.
     * @param options The options parameters.
     */
    updateTags(resourceGroupName: string, virtualWANName: string, WANParameters: TagsObject, options?: VirtualWansUpdateTagsOptionalParams): Promise<VirtualWansUpdateTagsResponse>;
    /**
     * Deletes a VirtualWAN.
     * @param resourceGroupName The resource group name of the VirtualWan.
     * @param virtualWANName The name of the VirtualWAN being deleted.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, virtualWANName: string, options?: VirtualWansDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes a VirtualWAN.
     * @param resourceGroupName The resource group name of the VirtualWan.
     * @param virtualWANName The name of the VirtualWAN being deleted.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, virtualWANName: string, options?: VirtualWansDeleteOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface VirtualWansCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type VirtualWansCreateOrUpdateResponse = VirtualWAN;

/** Optional parameters. */
export declare interface VirtualWansDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Collection of SecurityProviders. */
export declare interface VirtualWanSecurityProvider {
    /** Name of the security provider. */
    name?: string;
    /** Url of the security provider. */
    url?: string;
    /**
     * Name of the security provider.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: VirtualWanSecurityProviderType;
}

/** Collection of SecurityProviders. */
export declare interface VirtualWanSecurityProviders {
    /** List of VirtualWAN security providers. */
    supportedProviders?: VirtualWanSecurityProvider[];
}

/**
 * Defines values for VirtualWanSecurityProviderType. \
 * {@link KnownVirtualWanSecurityProviderType} can be used interchangeably with VirtualWanSecurityProviderType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **External** \
 * **Native**
 */
export declare type VirtualWanSecurityProviderType = string;

/** Optional parameters. */
export declare interface VirtualWansGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type VirtualWansGetResponse = VirtualWAN;

/** Optional parameters. */
export declare interface VirtualWansListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNext operation. */
export declare type VirtualWansListByResourceGroupNextResponse = ListVirtualWANsResult;

/** Optional parameters. */
export declare interface VirtualWansListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroup operation. */
export declare type VirtualWansListByResourceGroupResponse = ListVirtualWANsResult;

/** Optional parameters. */
export declare interface VirtualWansListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type VirtualWansListNextResponse = ListVirtualWANsResult;

/** Optional parameters. */
export declare interface VirtualWansListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type VirtualWansListResponse = ListVirtualWANsResult;

/** Optional parameters. */
export declare interface VirtualWansUpdateTagsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateTags operation. */
export declare type VirtualWansUpdateTagsResponse = VirtualWAN;

/** Virtual Wan Vpn profile parameters Vpn profile generation. */
export declare interface VirtualWanVpnProfileParameters {
    /** VpnServerConfiguration partial resource uri with which VirtualWan is associated to. */
    vpnServerConfigurationResourceId?: string;
    /** VPN client authentication method. */
    authenticationMethod?: AuthenticationMethod;
}

/** Describes a Virtual Machine. */
export declare type VM = Resource & {};

/** List of routes that control routing from VirtualHub into a virtual network connection. */
export declare interface VnetRoute {
    /** List of all Static Routes. */
    staticRoutes?: StaticRoute[];
}

/**
 * Defines values for VpnAuthenticationType. \
 * {@link KnownVpnAuthenticationType} can be used interchangeably with VpnAuthenticationType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Certificate** \
 * **Radius** \
 * **AAD**
 */
export declare type VpnAuthenticationType = string;

/** VpnClientConfiguration for P2S client. */
export declare interface VpnClientConfiguration {
    /** The reference to the address space resource which represents Address space for P2S VpnClient. */
    vpnClientAddressPool?: AddressSpace;
    /** VpnClientRootCertificate for virtual network gateway. */
    vpnClientRootCertificates?: VpnClientRootCertificate[];
    /** VpnClientRevokedCertificate for Virtual network gateway. */
    vpnClientRevokedCertificates?: VpnClientRevokedCertificate[];
    /** VpnClientProtocols for Virtual network gateway. */
    vpnClientProtocols?: VpnClientProtocol[];
    /** VpnClientIpsecPolicies for virtual network gateway P2S client. */
    vpnClientIpsecPolicies?: IpsecPolicy[];
    /** The radius server address property of the VirtualNetworkGateway resource for vpn client connection. */
    radiusServerAddress?: string;
    /** The radius secret property of the VirtualNetworkGateway resource for vpn client connection. */
    radiusServerSecret?: string;
    /** The radiusServers property for multiple radius server configuration. */
    radiusServers?: RadiusServer[];
    /** The AADTenant property of the VirtualNetworkGateway resource for vpn client connection used for AAD authentication. */
    aadTenant?: string;
    /** The AADAudience property of the VirtualNetworkGateway resource for vpn client connection used for AAD authentication. */
    aadAudience?: string;
    /** The AADIssuer property of the VirtualNetworkGateway resource for vpn client connection used for AAD authentication. */
    aadIssuer?: string;
}

/** VpnClientConnectionHealth properties. */
export declare interface VpnClientConnectionHealth {
    /**
     * Total of the Ingress Bytes Transferred in this P2S Vpn connection.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly totalIngressBytesTransferred?: number;
    /**
     * Total of the Egress Bytes Transferred in this connection.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly totalEgressBytesTransferred?: number;
    /** The total of p2s vpn clients connected at this time to this P2SVpnGateway. */
    vpnClientConnectionsCount?: number;
    /** List of allocated ip addresses to the connected p2s vpn clients. */
    allocatedIpAddresses?: string[];
}

/** VPN client connection health detail. */
export declare interface VpnClientConnectionHealthDetail {
    /**
     * The vpn client Id.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly vpnConnectionId?: string;
    /**
     * The duration time of a connected vpn client.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly vpnConnectionDuration?: number;
    /**
     * The start time of a connected vpn client.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly vpnConnectionTime?: string;
    /**
     * The public Ip of a connected vpn client.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly publicIpAddress?: string;
    /**
     * The assigned private Ip of a connected vpn client.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly privateIpAddress?: string;
    /**
     * The user name of a connected vpn client.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly vpnUserName?: string;
    /**
     * The max band width.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly maxBandwidth?: number;
    /**
     * The egress packets per second.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly egressPacketsTransferred?: number;
    /**
     * The egress bytes per second.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly egressBytesTransferred?: number;
    /**
     * The ingress packets per second.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly ingressPacketsTransferred?: number;
    /**
     * The ingress bytes per second.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly ingressBytesTransferred?: number;
    /**
     * The max packets transferred per second.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly maxPacketsPerSecond?: number;
}

/** List of virtual network gateway vpn client connection health. */
export declare interface VpnClientConnectionHealthDetailListResult {
    /** List of vpn client connection health. */
    value?: VpnClientConnectionHealthDetail[];
}

/** An IPSec parameters for a virtual network gateway P2S connection. */
export declare interface VpnClientIPsecParameters {
    /** The IPSec Security Association (also called Quick Mode or Phase 2 SA) lifetime in seconds for P2S client. */
    saLifeTimeSeconds: number;
    /** The IPSec Security Association (also called Quick Mode or Phase 2 SA) payload size in KB for P2S client.. */
    saDataSizeKilobytes: number;
    /** The IPSec encryption algorithm (IKE phase 1). */
    ipsecEncryption: IpsecEncryption;
    /** The IPSec integrity algorithm (IKE phase 1). */
    ipsecIntegrity: IpsecIntegrity;
    /** The IKE encryption algorithm (IKE phase 2). */
    ikeEncryption: IkeEncryption;
    /** The IKE integrity algorithm (IKE phase 2). */
    ikeIntegrity: IkeIntegrity;
    /** The DH Group used in IKE Phase 1 for initial SA. */
    dhGroup: DhGroup;
    /** The Pfs Group used in IKE Phase 2 for new child SA. */
    pfsGroup: PfsGroup;
}

/** Vpn Client Parameters for package generation. */
export declare interface VpnClientParameters {
    /** VPN client Processor Architecture. */
    processorArchitecture?: ProcessorArchitecture;
    /** VPN client authentication method. */
    authenticationMethod?: AuthenticationMethod;
    /** The public certificate data for the radius server authentication certificate as a Base-64 encoded string. Required only if external radius authentication has been configured with EAPTLS authentication. */
    radiusServerAuthCertificate?: string;
    /** A list of client root certificates public certificate data encoded as Base-64 strings. Optional parameter for external radius based authentication with EAPTLS. */
    clientRootCertificates?: string[];
}

/**
 * Defines values for VpnClientProtocol. \
 * {@link KnownVpnClientProtocol} can be used interchangeably with VpnClientProtocol,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **IkeV2** \
 * **SSTP** \
 * **OpenVPN**
 */
export declare type VpnClientProtocol = string;

/** VPN client revoked certificate of virtual network gateway. */
export declare type VpnClientRevokedCertificate = SubResource & {
    /** The name of the resource that is unique within a resource group. This name can be used to access the resource. */
    name?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /** The revoked VPN client certificate thumbprint. */
    thumbprint?: string;
    /**
     * The provisioning state of the VPN client revoked certificate resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** VPN client root certificate of virtual network gateway. */
export declare type VpnClientRootCertificate = SubResource & {
    /** The name of the resource that is unique within a resource group. This name can be used to access the resource. */
    name?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /** The certificate public data. */
    publicCertData: string;
    /**
     * The provisioning state of the VPN client root certificate resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** VpnConnection Resource. */
export declare type VpnConnection = SubResource & {
    /** The name of the resource that is unique within a resource group. This name can be used to access the resource. */
    name?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /** Id of the connected vpn site. */
    remoteVpnSite?: SubResource;
    /** Routing weight for vpn connection. */
    routingWeight?: number;
    /** The dead peer detection timeout for a vpn connection in seconds. */
    dpdTimeoutSeconds?: number;
    /**
     * The connection status.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly connectionStatus?: VpnConnectionStatus;
    /** Connection protocol used for this connection. */
    vpnConnectionProtocolType?: VirtualNetworkGatewayConnectionProtocol;
    /**
     * Ingress bytes transferred.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly ingressBytesTransferred?: number;
    /**
     * Egress bytes transferred.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly egressBytesTransferred?: number;
    /** Expected bandwidth in MBPS. */
    connectionBandwidth?: number;
    /** SharedKey for the vpn connection. */
    sharedKey?: string;
    /** EnableBgp flag. */
    enableBgp?: boolean;
    /** Enable policy-based traffic selectors. */
    usePolicyBasedTrafficSelectors?: boolean;
    /** The IPSec Policies to be considered by this connection. */
    ipsecPolicies?: IpsecPolicy[];
    /** EnableBgp flag. */
    enableRateLimiting?: boolean;
    /** Enable internet security. */
    enableInternetSecurity?: boolean;
    /** Use local azure ip to initiate connection. */
    useLocalAzureIpAddress?: boolean;
    /**
     * The provisioning state of the VPN connection resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
    /** List of all vpn site link connections to the gateway. */
    vpnLinkConnections?: VpnSiteLinkConnection[];
    /** The Routing Configuration indicating the associated and propagated route tables on this connection. */
    routingConfiguration?: RoutingConfiguration;
};

/** Interface representing a VpnConnections. */
export declare interface VpnConnections {
    /**
     * Retrieves all vpn connections for a particular virtual wan vpn gateway.
     * @param resourceGroupName The resource group name of the VpnGateway.
     * @param gatewayName The name of the gateway.
     * @param options The options parameters.
     */
    listByVpnGateway(resourceGroupName: string, gatewayName: string, options?: VpnConnectionsListByVpnGatewayOptionalParams): PagedAsyncIterableIterator<VpnConnection>;
    /**
     * Retrieves the details of a vpn connection.
     * @param resourceGroupName The resource group name of the VpnGateway.
     * @param gatewayName The name of the gateway.
     * @param connectionName The name of the vpn connection.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, gatewayName: string, connectionName: string, options?: VpnConnectionsGetOptionalParams): Promise<VpnConnectionsGetResponse>;
    /**
     * Creates a vpn connection to a scalable vpn gateway if it doesn't exist else updates the existing
     * connection.
     * @param resourceGroupName The resource group name of the VpnGateway.
     * @param gatewayName The name of the gateway.
     * @param connectionName The name of the connection.
     * @param vpnConnectionParameters Parameters supplied to create or Update a VPN Connection.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, gatewayName: string, connectionName: string, vpnConnectionParameters: VpnConnection, options?: VpnConnectionsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<VpnConnectionsCreateOrUpdateResponse>, VpnConnectionsCreateOrUpdateResponse>>;
    /**
     * Creates a vpn connection to a scalable vpn gateway if it doesn't exist else updates the existing
     * connection.
     * @param resourceGroupName The resource group name of the VpnGateway.
     * @param gatewayName The name of the gateway.
     * @param connectionName The name of the connection.
     * @param vpnConnectionParameters Parameters supplied to create or Update a VPN Connection.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, gatewayName: string, connectionName: string, vpnConnectionParameters: VpnConnection, options?: VpnConnectionsCreateOrUpdateOptionalParams): Promise<VpnConnectionsCreateOrUpdateResponse>;
    /**
     * Deletes a vpn connection.
     * @param resourceGroupName The resource group name of the VpnGateway.
     * @param gatewayName The name of the gateway.
     * @param connectionName The name of the connection.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, gatewayName: string, connectionName: string, options?: VpnConnectionsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes a vpn connection.
     * @param resourceGroupName The resource group name of the VpnGateway.
     * @param gatewayName The name of the gateway.
     * @param connectionName The name of the connection.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, gatewayName: string, connectionName: string, options?: VpnConnectionsDeleteOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface VpnConnectionsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type VpnConnectionsCreateOrUpdateResponse = VpnConnection;

/** Optional parameters. */
export declare interface VpnConnectionsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface VpnConnectionsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type VpnConnectionsGetResponse = VpnConnection;

/** Optional parameters. */
export declare interface VpnConnectionsListByVpnGatewayNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByVpnGatewayNext operation. */
export declare type VpnConnectionsListByVpnGatewayNextResponse = ListVpnConnectionsResult;

/** Optional parameters. */
export declare interface VpnConnectionsListByVpnGatewayOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByVpnGateway operation. */
export declare type VpnConnectionsListByVpnGatewayResponse = ListVpnConnectionsResult;

/**
 * Defines values for VpnConnectionStatus. \
 * {@link KnownVpnConnectionStatus} can be used interchangeably with VpnConnectionStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown** \
 * **Connecting** \
 * **Connected** \
 * **NotConnected**
 */
export declare type VpnConnectionStatus = string;

/** Vpn device configuration script generation parameters. */
export declare interface VpnDeviceScriptParameters {
    /** The vendor for the vpn device. */
    vendor?: string;
    /** The device family for the vpn device. */
    deviceFamily?: string;
    /** The firmware version for the vpn device. */
    firmwareVersion?: string;
}

/** VpnGateway Resource. */
export declare type VpnGateway = Resource & {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /** The VirtualHub to which the gateway belongs. */
    virtualHub?: SubResource;
    /** List of all vpn connections to the gateway. */
    connections?: VpnConnection[];
    /** Local network gateway's BGP speaker settings. */
    bgpSettings?: BgpSettings;
    /**
     * The provisioning state of the VPN gateway resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
    /** The scale unit for this vpn gateway. */
    vpnGatewayScaleUnit?: number;
};

/**
 * Defines values for VpnGatewayGeneration. \
 * {@link KnownVpnGatewayGeneration} can be used interchangeably with VpnGatewayGeneration,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None** \
 * **Generation1** \
 * **Generation2**
 */
export declare type VpnGatewayGeneration = string;

/** Interface representing a VpnGateways. */
export declare interface VpnGateways {
    /**
     * Lists all the VpnGateways in a resource group.
     * @param resourceGroupName The resource group name of the VpnGateway.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: VpnGatewaysListByResourceGroupOptionalParams): PagedAsyncIterableIterator<VpnGateway>;
    /**
     * Lists all the VpnGateways in a subscription.
     * @param options The options parameters.
     */
    list(options?: VpnGatewaysListOptionalParams): PagedAsyncIterableIterator<VpnGateway>;
    /**
     * Retrieves the details of a virtual wan vpn gateway.
     * @param resourceGroupName The resource group name of the VpnGateway.
     * @param gatewayName The name of the gateway.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, gatewayName: string, options?: VpnGatewaysGetOptionalParams): Promise<VpnGatewaysGetResponse>;
    /**
     * Creates a virtual wan vpn gateway if it doesn't exist else updates the existing gateway.
     * @param resourceGroupName The resource group name of the VpnGateway.
     * @param gatewayName The name of the gateway.
     * @param vpnGatewayParameters Parameters supplied to create or Update a virtual wan vpn gateway.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, gatewayName: string, vpnGatewayParameters: VpnGateway, options?: VpnGatewaysCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<VpnGatewaysCreateOrUpdateResponse>, VpnGatewaysCreateOrUpdateResponse>>;
    /**
     * Creates a virtual wan vpn gateway if it doesn't exist else updates the existing gateway.
     * @param resourceGroupName The resource group name of the VpnGateway.
     * @param gatewayName The name of the gateway.
     * @param vpnGatewayParameters Parameters supplied to create or Update a virtual wan vpn gateway.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, gatewayName: string, vpnGatewayParameters: VpnGateway, options?: VpnGatewaysCreateOrUpdateOptionalParams): Promise<VpnGatewaysCreateOrUpdateResponse>;
    /**
     * Updates virtual wan vpn gateway tags.
     * @param resourceGroupName The resource group name of the VpnGateway.
     * @param gatewayName The name of the gateway.
     * @param vpnGatewayParameters Parameters supplied to update a virtual wan vpn gateway tags.
     * @param options The options parameters.
     */
    updateTags(resourceGroupName: string, gatewayName: string, vpnGatewayParameters: TagsObject, options?: VpnGatewaysUpdateTagsOptionalParams): Promise<VpnGatewaysUpdateTagsResponse>;
    /**
     * Deletes a virtual wan vpn gateway.
     * @param resourceGroupName The resource group name of the VpnGateway.
     * @param gatewayName The name of the gateway.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, gatewayName: string, options?: VpnGatewaysDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes a virtual wan vpn gateway.
     * @param resourceGroupName The resource group name of the VpnGateway.
     * @param gatewayName The name of the gateway.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, gatewayName: string, options?: VpnGatewaysDeleteOptionalParams): Promise<void>;
    /**
     * Resets the primary of the vpn gateway in the specified resource group.
     * @param resourceGroupName The resource group name of the VpnGateway.
     * @param gatewayName The name of the gateway.
     * @param options The options parameters.
     */
    beginReset(resourceGroupName: string, gatewayName: string, options?: VpnGatewaysResetOptionalParams): Promise<PollerLike<PollOperationState<VpnGatewaysResetResponse>, VpnGatewaysResetResponse>>;
    /**
     * Resets the primary of the vpn gateway in the specified resource group.
     * @param resourceGroupName The resource group name of the VpnGateway.
     * @param gatewayName The name of the gateway.
     * @param options The options parameters.
     */
    beginResetAndWait(resourceGroupName: string, gatewayName: string, options?: VpnGatewaysResetOptionalParams): Promise<VpnGatewaysResetResponse>;
}

/** Optional parameters. */
export declare interface VpnGatewaysCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type VpnGatewaysCreateOrUpdateResponse = VpnGateway;

/** Optional parameters. */
export declare interface VpnGatewaysDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface VpnGatewaysGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type VpnGatewaysGetResponse = VpnGateway;

/** Optional parameters. */
export declare interface VpnGatewaysListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNext operation. */
export declare type VpnGatewaysListByResourceGroupNextResponse = ListVpnGatewaysResult;

/** Optional parameters. */
export declare interface VpnGatewaysListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroup operation. */
export declare type VpnGatewaysListByResourceGroupResponse = ListVpnGatewaysResult;

/** Optional parameters. */
export declare interface VpnGatewaysListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type VpnGatewaysListNextResponse = ListVpnGatewaysResult;

/** Optional parameters. */
export declare interface VpnGatewaysListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type VpnGatewaysListResponse = ListVpnGatewaysResult;

/** Optional parameters. */
export declare interface VpnGatewaysResetOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the reset operation. */
export declare type VpnGatewaysResetResponse = VpnGateway;

/** Optional parameters. */
export declare interface VpnGatewaysUpdateTagsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateTags operation. */
export declare type VpnGatewaysUpdateTagsResponse = VpnGateway;

/**
 * Defines values for VpnGatewayTunnelingProtocol. \
 * {@link KnownVpnGatewayTunnelingProtocol} can be used interchangeably with VpnGatewayTunnelingProtocol,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **IkeV2** \
 * **OpenVPN**
 */
export declare type VpnGatewayTunnelingProtocol = string;

/** BGP settings details for a link. */
export declare interface VpnLinkBgpSettings {
    /** The BGP speaker's ASN. */
    asn?: number;
    /** The BGP peering address and BGP identifier of this BGP speaker. */
    bgpPeeringAddress?: string;
}

/** Interface representing a VpnLinkConnections. */
export declare interface VpnLinkConnections {
    /**
     * Retrieves all vpn site link connections for a particular virtual wan vpn gateway vpn connection.
     * @param resourceGroupName The resource group name of the VpnGateway.
     * @param gatewayName The name of the gateway.
     * @param connectionName The name of the vpn connection.
     * @param options The options parameters.
     */
    listByVpnConnection(resourceGroupName: string, gatewayName: string, connectionName: string, options?: VpnLinkConnectionsListByVpnConnectionOptionalParams): PagedAsyncIterableIterator<VpnSiteLinkConnection>;
}

/** Optional parameters. */
export declare interface VpnLinkConnectionsListByVpnConnectionNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByVpnConnectionNext operation. */
export declare type VpnLinkConnectionsListByVpnConnectionNextResponse = ListVpnSiteLinkConnectionsResult;

/** Optional parameters. */
export declare interface VpnLinkConnectionsListByVpnConnectionOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByVpnConnection operation. */
export declare type VpnLinkConnectionsListByVpnConnectionResponse = ListVpnSiteLinkConnectionsResult;

/** List of properties of a link provider. */
export declare interface VpnLinkProviderProperties {
    /** Name of the link provider. */
    linkProviderName?: string;
    /** Link speed. */
    linkSpeedInMbps?: number;
}

/** Start packet capture parameters on virtual network gateway. */
export declare interface VpnPacketCaptureStartParameters {
    /** Start Packet capture parameters. */
    filterData?: string;
}

/** Stop packet capture parameters. */
export declare interface VpnPacketCaptureStopParameters {
    /** SAS url for packet capture on virtual network gateway. */
    sasUrl?: string;
}

/** Vpn Profile Response for package generation. */
export declare interface VpnProfileResponse {
    /** URL to the VPN profile. */
    profileUrl?: string;
}

/** Properties of the Radius client root certificate of VpnServerConfiguration. */
export declare interface VpnServerConfigRadiusClientRootCertificate {
    /** The certificate name. */
    name?: string;
    /** The Radius client root certificate thumbprint. */
    thumbprint?: string;
}

/** Properties of Radius Server root certificate of VpnServerConfiguration. */
export declare interface VpnServerConfigRadiusServerRootCertificate {
    /** The certificate name. */
    name?: string;
    /** The certificate public data. */
    publicCertData?: string;
}

/** VpnServerConfiguration Resource. */
export declare type VpnServerConfiguration = Resource & {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /** The name of the VpnServerConfiguration that is unique within a resource group. */
    namePropertiesName?: string;
    /** VPN protocols for the VpnServerConfiguration. */
    vpnProtocols?: VpnGatewayTunnelingProtocol[];
    /** VPN authentication types for the VpnServerConfiguration. */
    vpnAuthenticationTypes?: VpnAuthenticationType[];
    /** VPN client root certificate of VpnServerConfiguration. */
    vpnClientRootCertificates?: VpnServerConfigVpnClientRootCertificate[];
    /** VPN client revoked certificate of VpnServerConfiguration. */
    vpnClientRevokedCertificates?: VpnServerConfigVpnClientRevokedCertificate[];
    /** Radius Server root certificate of VpnServerConfiguration. */
    radiusServerRootCertificates?: VpnServerConfigRadiusServerRootCertificate[];
    /** Radius client root certificate of VpnServerConfiguration. */
    radiusClientRootCertificates?: VpnServerConfigRadiusClientRootCertificate[];
    /** VpnClientIpsecPolicies for VpnServerConfiguration. */
    vpnClientIpsecPolicies?: IpsecPolicy[];
    /** The radius server address property of the VpnServerConfiguration resource for point to site client connection. */
    radiusServerAddress?: string;
    /** The radius secret property of the VpnServerConfiguration resource for point to site client connection. */
    radiusServerSecret?: string;
    /** Multiple Radius Server configuration for VpnServerConfiguration. */
    radiusServers?: RadiusServer[];
    /** The set of aad vpn authentication parameters. */
    aadAuthenticationParameters?: AadAuthenticationParameters;
    /**
     * The provisioning state of the VpnServerConfiguration resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: string;
    /**
     * List of references to P2SVpnGateways.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly p2SVpnGateways?: P2SVpnGateway[];
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etagPropertiesEtag?: string;
};

/** Interface representing a VpnServerConfigurations. */
export declare interface VpnServerConfigurations {
    /**
     * Lists all the vpnServerConfigurations in a resource group.
     * @param resourceGroupName The resource group name of the VpnServerConfiguration.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: VpnServerConfigurationsListByResourceGroupOptionalParams): PagedAsyncIterableIterator<VpnServerConfiguration>;
    /**
     * Lists all the VpnServerConfigurations in a subscription.
     * @param options The options parameters.
     */
    list(options?: VpnServerConfigurationsListOptionalParams): PagedAsyncIterableIterator<VpnServerConfiguration>;
    /**
     * Retrieves the details of a VpnServerConfiguration.
     * @param resourceGroupName The resource group name of the VpnServerConfiguration.
     * @param vpnServerConfigurationName The name of the VpnServerConfiguration being retrieved.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, vpnServerConfigurationName: string, options?: VpnServerConfigurationsGetOptionalParams): Promise<VpnServerConfigurationsGetResponse>;
    /**
     * Creates a VpnServerConfiguration resource if it doesn't exist else updates the existing
     * VpnServerConfiguration.
     * @param resourceGroupName The resource group name of the VpnServerConfiguration.
     * @param vpnServerConfigurationName The name of the VpnServerConfiguration being created or updated.
     * @param vpnServerConfigurationParameters Parameters supplied to create or update
     *                                         VpnServerConfiguration.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, vpnServerConfigurationName: string, vpnServerConfigurationParameters: VpnServerConfiguration, options?: VpnServerConfigurationsCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<VpnServerConfigurationsCreateOrUpdateResponse>, VpnServerConfigurationsCreateOrUpdateResponse>>;
    /**
     * Creates a VpnServerConfiguration resource if it doesn't exist else updates the existing
     * VpnServerConfiguration.
     * @param resourceGroupName The resource group name of the VpnServerConfiguration.
     * @param vpnServerConfigurationName The name of the VpnServerConfiguration being created or updated.
     * @param vpnServerConfigurationParameters Parameters supplied to create or update
     *                                         VpnServerConfiguration.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, vpnServerConfigurationName: string, vpnServerConfigurationParameters: VpnServerConfiguration, options?: VpnServerConfigurationsCreateOrUpdateOptionalParams): Promise<VpnServerConfigurationsCreateOrUpdateResponse>;
    /**
     * Updates VpnServerConfiguration tags.
     * @param resourceGroupName The resource group name of the VpnServerConfiguration.
     * @param vpnServerConfigurationName The name of the VpnServerConfiguration being updated.
     * @param vpnServerConfigurationParameters Parameters supplied to update VpnServerConfiguration tags.
     * @param options The options parameters.
     */
    updateTags(resourceGroupName: string, vpnServerConfigurationName: string, vpnServerConfigurationParameters: TagsObject, options?: VpnServerConfigurationsUpdateTagsOptionalParams): Promise<VpnServerConfigurationsUpdateTagsResponse>;
    /**
     * Deletes a VpnServerConfiguration.
     * @param resourceGroupName The resource group name of the VpnServerConfiguration.
     * @param vpnServerConfigurationName The name of the VpnServerConfiguration being deleted.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, vpnServerConfigurationName: string, options?: VpnServerConfigurationsDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes a VpnServerConfiguration.
     * @param resourceGroupName The resource group name of the VpnServerConfiguration.
     * @param vpnServerConfigurationName The name of the VpnServerConfiguration being deleted.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, vpnServerConfigurationName: string, options?: VpnServerConfigurationsDeleteOptionalParams): Promise<void>;
}

/** Interface representing a VpnServerConfigurationsAssociatedWithVirtualWan. */
export declare interface VpnServerConfigurationsAssociatedWithVirtualWan {
    /**
     * Gives the list of VpnServerConfigurations associated with Virtual Wan in a resource group.
     * @param resourceGroupName The resource group name.
     * @param virtualWANName The name of the VirtualWAN whose associated VpnServerConfigurations is needed.
     * @param options The options parameters.
     */
    beginList(resourceGroupName: string, virtualWANName: string, options?: VpnServerConfigurationsAssociatedWithVirtualWanListOptionalParams): Promise<PollerLike<PollOperationState<VpnServerConfigurationsAssociatedWithVirtualWanListResponse>, VpnServerConfigurationsAssociatedWithVirtualWanListResponse>>;
    /**
     * Gives the list of VpnServerConfigurations associated with Virtual Wan in a resource group.
     * @param resourceGroupName The resource group name.
     * @param virtualWANName The name of the VirtualWAN whose associated VpnServerConfigurations is needed.
     * @param options The options parameters.
     */
    beginListAndWait(resourceGroupName: string, virtualWANName: string, options?: VpnServerConfigurationsAssociatedWithVirtualWanListOptionalParams): Promise<VpnServerConfigurationsAssociatedWithVirtualWanListResponse>;
}

/** Optional parameters. */
export declare interface VpnServerConfigurationsAssociatedWithVirtualWanListOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the list operation. */
export declare type VpnServerConfigurationsAssociatedWithVirtualWanListResponse = VpnServerConfigurationsResponse;

/** Optional parameters. */
export declare interface VpnServerConfigurationsCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type VpnServerConfigurationsCreateOrUpdateResponse = VpnServerConfiguration;

/** Optional parameters. */
export declare interface VpnServerConfigurationsDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface VpnServerConfigurationsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type VpnServerConfigurationsGetResponse = VpnServerConfiguration;

/** Optional parameters. */
export declare interface VpnServerConfigurationsListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNext operation. */
export declare type VpnServerConfigurationsListByResourceGroupNextResponse = ListVpnServerConfigurationsResult;

/** Optional parameters. */
export declare interface VpnServerConfigurationsListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroup operation. */
export declare type VpnServerConfigurationsListByResourceGroupResponse = ListVpnServerConfigurationsResult;

/** Optional parameters. */
export declare interface VpnServerConfigurationsListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type VpnServerConfigurationsListNextResponse = ListVpnServerConfigurationsResult;

/** Optional parameters. */
export declare interface VpnServerConfigurationsListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type VpnServerConfigurationsListResponse = ListVpnServerConfigurationsResult;

/** VpnServerConfigurations list associated with VirtualWan Response. */
export declare interface VpnServerConfigurationsResponse {
    /** List of VpnServerConfigurations associated with VirtualWan. */
    vpnServerConfigurationResourceIds?: string[];
}

/** Optional parameters. */
export declare interface VpnServerConfigurationsUpdateTagsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateTags operation. */
export declare type VpnServerConfigurationsUpdateTagsResponse = VpnServerConfiguration;

/** Properties of the revoked VPN client certificate of VpnServerConfiguration. */
export declare interface VpnServerConfigVpnClientRevokedCertificate {
    /** The certificate name. */
    name?: string;
    /** The revoked VPN client certificate thumbprint. */
    thumbprint?: string;
}

/** Properties of VPN client root certificate of VpnServerConfiguration. */
export declare interface VpnServerConfigVpnClientRootCertificate {
    /** The certificate name. */
    name?: string;
    /** The certificate public data. */
    publicCertData?: string;
}

/** VpnSite Resource. */
export declare type VpnSite = Resource & {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /** The VirtualWAN to which the vpnSite belongs. */
    virtualWan?: SubResource;
    /** The device properties. */
    deviceProperties?: DeviceProperties;
    /** The ip-address for the vpn-site. */
    ipAddress?: string;
    /** The key for vpn-site that can be used for connections. */
    siteKey?: string;
    /** The AddressSpace that contains an array of IP address ranges. */
    addressSpace?: AddressSpace;
    /** The set of bgp properties. */
    bgpProperties?: BgpSettings;
    /**
     * The provisioning state of the VPN site resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
    /** IsSecuritySite flag. */
    isSecuritySite?: boolean;
    /** List of all vpn site links. */
    vpnSiteLinks?: VpnSiteLink[];
};

/** VpnSite Resource. */
export declare interface VpnSiteId {
    /**
     * The resource-uri of the vpn-site for which config is to be fetched.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly vpnSite?: string;
}

/** VpnSiteLink Resource. */
export declare type VpnSiteLink = SubResource & {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /** The name of the resource that is unique within a resource group. This name can be used to access the resource. */
    name?: string;
    /**
     * Resource type.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /** The link provider properties. */
    linkProperties?: VpnLinkProviderProperties;
    /** The ip-address for the vpn-site-link. */
    ipAddress?: string;
    /** FQDN of vpn-site-link. */
    fqdn?: string;
    /** The set of bgp properties. */
    bgpProperties?: VpnLinkBgpSettings;
    /**
     * The provisioning state of the VPN site link resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** VpnSiteLinkConnection Resource. */
export declare type VpnSiteLinkConnection = SubResource & {
    /** The name of the resource that is unique within a resource group. This name can be used to access the resource. */
    name?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /**
     * Resource type.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly type?: string;
    /** Id of the connected vpn site link. */
    vpnSiteLink?: SubResource;
    /** Routing weight for vpn connection. */
    routingWeight?: number;
    /**
     * The connection status.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly connectionStatus?: VpnConnectionStatus;
    /** Connection protocol used for this connection. */
    vpnConnectionProtocolType?: VirtualNetworkGatewayConnectionProtocol;
    /**
     * Ingress bytes transferred.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly ingressBytesTransferred?: number;
    /**
     * Egress bytes transferred.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly egressBytesTransferred?: number;
    /** Expected bandwidth in MBPS. */
    connectionBandwidth?: number;
    /** SharedKey for the vpn connection. */
    sharedKey?: string;
    /** EnableBgp flag. */
    enableBgp?: boolean;
    /** Enable policy-based traffic selectors. */
    usePolicyBasedTrafficSelectors?: boolean;
    /** The IPSec Policies to be considered by this connection. */
    ipsecPolicies?: IpsecPolicy[];
    /** EnableBgp flag. */
    enableRateLimiting?: boolean;
    /** Use local azure ip to initiate connection. */
    useLocalAzureIpAddress?: boolean;
    /**
     * The provisioning state of the VPN site link connection resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
};

/** Interface representing a VpnSiteLinkConnections. */
export declare interface VpnSiteLinkConnections {
    /**
     * Retrieves the details of a vpn site link connection.
     * @param resourceGroupName The resource group name of the VpnGateway.
     * @param gatewayName The name of the gateway.
     * @param connectionName The name of the vpn connection.
     * @param linkConnectionName The name of the vpn connection.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, gatewayName: string, connectionName: string, linkConnectionName: string, options?: VpnSiteLinkConnectionsGetOptionalParams): Promise<VpnSiteLinkConnectionsGetResponse>;
}

/** Optional parameters. */
export declare interface VpnSiteLinkConnectionsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type VpnSiteLinkConnectionsGetResponse = VpnSiteLinkConnection;

/** Interface representing a VpnSiteLinks. */
export declare interface VpnSiteLinks {
    /**
     * Lists all the vpnSiteLinks in a resource group for a vpn site.
     * @param resourceGroupName The resource group name of the VpnSite.
     * @param vpnSiteName The name of the VpnSite.
     * @param options The options parameters.
     */
    listByVpnSite(resourceGroupName: string, vpnSiteName: string, options?: VpnSiteLinksListByVpnSiteOptionalParams): PagedAsyncIterableIterator<VpnSiteLink>;
    /**
     * Retrieves the details of a VPN site link.
     * @param resourceGroupName The resource group name of the VpnSite.
     * @param vpnSiteName The name of the VpnSite.
     * @param vpnSiteLinkName The name of the VpnSiteLink being retrieved.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, vpnSiteName: string, vpnSiteLinkName: string, options?: VpnSiteLinksGetOptionalParams): Promise<VpnSiteLinksGetResponse>;
}

/** Optional parameters. */
export declare interface VpnSiteLinksGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type VpnSiteLinksGetResponse = VpnSiteLink;

/** Optional parameters. */
export declare interface VpnSiteLinksListByVpnSiteNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByVpnSiteNext operation. */
export declare type VpnSiteLinksListByVpnSiteNextResponse = ListVpnSiteLinksResult;

/** Optional parameters. */
export declare interface VpnSiteLinksListByVpnSiteOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByVpnSite operation. */
export declare type VpnSiteLinksListByVpnSiteResponse = ListVpnSiteLinksResult;

/** Interface representing a VpnSites. */
export declare interface VpnSites {
    /**
     * Lists all the vpnSites in a resource group.
     * @param resourceGroupName The resource group name of the VpnSite.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: VpnSitesListByResourceGroupOptionalParams): PagedAsyncIterableIterator<VpnSite>;
    /**
     * Lists all the VpnSites in a subscription.
     * @param options The options parameters.
     */
    list(options?: VpnSitesListOptionalParams): PagedAsyncIterableIterator<VpnSite>;
    /**
     * Retrieves the details of a VPN site.
     * @param resourceGroupName The resource group name of the VpnSite.
     * @param vpnSiteName The name of the VpnSite being retrieved.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, vpnSiteName: string, options?: VpnSitesGetOptionalParams): Promise<VpnSitesGetResponse>;
    /**
     * Creates a VpnSite resource if it doesn't exist else updates the existing VpnSite.
     * @param resourceGroupName The resource group name of the VpnSite.
     * @param vpnSiteName The name of the VpnSite being created or updated.
     * @param vpnSiteParameters Parameters supplied to create or update VpnSite.
     * @param options The options parameters.
     */
    beginCreateOrUpdate(resourceGroupName: string, vpnSiteName: string, vpnSiteParameters: VpnSite, options?: VpnSitesCreateOrUpdateOptionalParams): Promise<PollerLike<PollOperationState<VpnSitesCreateOrUpdateResponse>, VpnSitesCreateOrUpdateResponse>>;
    /**
     * Creates a VpnSite resource if it doesn't exist else updates the existing VpnSite.
     * @param resourceGroupName The resource group name of the VpnSite.
     * @param vpnSiteName The name of the VpnSite being created or updated.
     * @param vpnSiteParameters Parameters supplied to create or update VpnSite.
     * @param options The options parameters.
     */
    beginCreateOrUpdateAndWait(resourceGroupName: string, vpnSiteName: string, vpnSiteParameters: VpnSite, options?: VpnSitesCreateOrUpdateOptionalParams): Promise<VpnSitesCreateOrUpdateResponse>;
    /**
     * Updates VpnSite tags.
     * @param resourceGroupName The resource group name of the VpnSite.
     * @param vpnSiteName The name of the VpnSite being updated.
     * @param vpnSiteParameters Parameters supplied to update VpnSite tags.
     * @param options The options parameters.
     */
    updateTags(resourceGroupName: string, vpnSiteName: string, vpnSiteParameters: TagsObject, options?: VpnSitesUpdateTagsOptionalParams): Promise<VpnSitesUpdateTagsResponse>;
    /**
     * Deletes a VpnSite.
     * @param resourceGroupName The resource group name of the VpnSite.
     * @param vpnSiteName The name of the VpnSite being deleted.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, vpnSiteName: string, options?: VpnSitesDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes a VpnSite.
     * @param resourceGroupName The resource group name of the VpnSite.
     * @param vpnSiteName The name of the VpnSite being deleted.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, vpnSiteName: string, options?: VpnSitesDeleteOptionalParams): Promise<void>;
}

/** Interface representing a VpnSitesConfiguration. */
export declare interface VpnSitesConfiguration {
    /**
     * Gives the sas-url to download the configurations for vpn-sites in a resource group.
     * @param resourceGroupName The resource group name.
     * @param virtualWANName The name of the VirtualWAN for which configuration of all vpn-sites is needed.
     * @param request Parameters supplied to download vpn-sites configuration.
     * @param options The options parameters.
     */
    beginDownload(resourceGroupName: string, virtualWANName: string, request: GetVpnSitesConfigurationRequest, options?: VpnSitesConfigurationDownloadOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Gives the sas-url to download the configurations for vpn-sites in a resource group.
     * @param resourceGroupName The resource group name.
     * @param virtualWANName The name of the VirtualWAN for which configuration of all vpn-sites is needed.
     * @param request Parameters supplied to download vpn-sites configuration.
     * @param options The options parameters.
     */
    beginDownloadAndWait(resourceGroupName: string, virtualWANName: string, request: GetVpnSitesConfigurationRequest, options?: VpnSitesConfigurationDownloadOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface VpnSitesConfigurationDownloadOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface VpnSitesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export declare type VpnSitesCreateOrUpdateResponse = VpnSite;

/** Optional parameters. */
export declare interface VpnSitesDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface VpnSitesGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type VpnSitesGetResponse = VpnSite;

/** Optional parameters. */
export declare interface VpnSitesListByResourceGroupNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroupNext operation. */
export declare type VpnSitesListByResourceGroupNextResponse = ListVpnSitesResult;

/** Optional parameters. */
export declare interface VpnSitesListByResourceGroupOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listByResourceGroup operation. */
export declare type VpnSitesListByResourceGroupResponse = ListVpnSitesResult;

/** Optional parameters. */
export declare interface VpnSitesListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type VpnSitesListNextResponse = ListVpnSitesResult;

/** Optional parameters. */
export declare interface VpnSitesListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type VpnSitesListResponse = ListVpnSitesResult;

/** Optional parameters. */
export declare interface VpnSitesUpdateTagsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the updateTags operation. */
export declare type VpnSitesUpdateTagsResponse = VpnSite;

/**
 * Defines values for VpnType. \
 * {@link KnownVpnType} can be used interchangeably with VpnType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **PolicyBased** \
 * **RouteBased**
 */
export declare type VpnType = string;

/**
 * Defines values for WebApplicationFirewallAction. \
 * {@link KnownWebApplicationFirewallAction} can be used interchangeably with WebApplicationFirewallAction,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Allow** \
 * **Block** \
 * **Log**
 */
export declare type WebApplicationFirewallAction = string;

/** Defines contents of a web application rule. */
export declare interface WebApplicationFirewallCustomRule {
    /** The name of the resource that is unique within a policy. This name can be used to access the resource. */
    name?: string;
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /** Priority of the rule. Rules with a lower value will be evaluated before rules with a higher value. */
    priority: number;
    /** The rule type. */
    ruleType: WebApplicationFirewallRuleType;
    /** List of match conditions. */
    matchConditions: MatchCondition[];
    /** Type of Actions. */
    action: WebApplicationFirewallAction;
}

/**
 * Defines values for WebApplicationFirewallEnabledState. \
 * {@link KnownWebApplicationFirewallEnabledState} can be used interchangeably with WebApplicationFirewallEnabledState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Disabled** \
 * **Enabled**
 */
export declare type WebApplicationFirewallEnabledState = string;

/**
 * Defines values for WebApplicationFirewallMatchVariable. \
 * {@link KnownWebApplicationFirewallMatchVariable} can be used interchangeably with WebApplicationFirewallMatchVariable,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **RemoteAddr** \
 * **RequestMethod** \
 * **QueryString** \
 * **PostArgs** \
 * **RequestUri** \
 * **RequestHeaders** \
 * **RequestBody** \
 * **RequestCookies**
 */
export declare type WebApplicationFirewallMatchVariable = string;

/**
 * Defines values for WebApplicationFirewallMode. \
 * {@link KnownWebApplicationFirewallMode} can be used interchangeably with WebApplicationFirewallMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Prevention** \
 * **Detection**
 */
export declare type WebApplicationFirewallMode = string;

/**
 * Defines values for WebApplicationFirewallOperator. \
 * {@link KnownWebApplicationFirewallOperator} can be used interchangeably with WebApplicationFirewallOperator,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **IPMatch** \
 * **Equal** \
 * **Contains** \
 * **LessThan** \
 * **GreaterThan** \
 * **LessThanOrEqual** \
 * **GreaterThanOrEqual** \
 * **BeginsWith** \
 * **EndsWith** \
 * **Regex** \
 * **GeoMatch**
 */
export declare type WebApplicationFirewallOperator = string;

/** Interface representing a WebApplicationFirewallPolicies. */
export declare interface WebApplicationFirewallPolicies {
    /**
     * Lists all of the protection policies within a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, options?: WebApplicationFirewallPoliciesListOptionalParams): PagedAsyncIterableIterator<WebApplicationFirewallPolicy>;
    /**
     * Gets all the WAF policies in a subscription.
     * @param options The options parameters.
     */
    listAll(options?: WebApplicationFirewallPoliciesListAllOptionalParams): PagedAsyncIterableIterator<WebApplicationFirewallPolicy>;
    /**
     * Retrieve protection policy with specified name within a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param policyName The name of the policy.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, policyName: string, options?: WebApplicationFirewallPoliciesGetOptionalParams): Promise<WebApplicationFirewallPoliciesGetResponse>;
    /**
     * Creates or update policy with specified rule set name within a resource group.
     * @param resourceGroupName The name of the resource group.
     * @param policyName The name of the policy.
     * @param parameters Policy to be created.
     * @param options The options parameters.
     */
    createOrUpdate(resourceGroupName: string, policyName: string, parameters: WebApplicationFirewallPolicy, options?: WebApplicationFirewallPoliciesCreateOrUpdateOptionalParams): Promise<WebApplicationFirewallPoliciesCreateOrUpdateResponse>;
    /**
     * Deletes Policy.
     * @param resourceGroupName The name of the resource group.
     * @param policyName The name of the policy.
     * @param options The options parameters.
     */
    beginDelete(resourceGroupName: string, policyName: string, options?: WebApplicationFirewallPoliciesDeleteOptionalParams): Promise<PollerLike<PollOperationState<void>, void>>;
    /**
     * Deletes Policy.
     * @param resourceGroupName The name of the resource group.
     * @param policyName The name of the policy.
     * @param options The options parameters.
     */
    beginDeleteAndWait(resourceGroupName: string, policyName: string, options?: WebApplicationFirewallPoliciesDeleteOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface WebApplicationFirewallPoliciesCreateOrUpdateOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the createOrUpdate operation. */
export declare type WebApplicationFirewallPoliciesCreateOrUpdateResponse = WebApplicationFirewallPolicy;

/** Optional parameters. */
export declare interface WebApplicationFirewallPoliciesDeleteOptionalParams extends coreClient.OperationOptions {
    /** Delay to wait until next poll, in milliseconds. */
    updateIntervalInMs?: number;
    /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
    resumeFrom?: string;
}

/** Optional parameters. */
export declare interface WebApplicationFirewallPoliciesGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type WebApplicationFirewallPoliciesGetResponse = WebApplicationFirewallPolicy;

/** Optional parameters. */
export declare interface WebApplicationFirewallPoliciesListAllNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAllNext operation. */
export declare type WebApplicationFirewallPoliciesListAllNextResponse = WebApplicationFirewallPolicyListResult;

/** Optional parameters. */
export declare interface WebApplicationFirewallPoliciesListAllOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listAll operation. */
export declare type WebApplicationFirewallPoliciesListAllResponse = WebApplicationFirewallPolicyListResult;

/** Optional parameters. */
export declare interface WebApplicationFirewallPoliciesListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type WebApplicationFirewallPoliciesListNextResponse = WebApplicationFirewallPolicyListResult;

/** Optional parameters. */
export declare interface WebApplicationFirewallPoliciesListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type WebApplicationFirewallPoliciesListResponse = WebApplicationFirewallPolicyListResult;

/** Defines web application firewall policy. */
export declare type WebApplicationFirewallPolicy = Resource & {
    /**
     * A unique read-only string that changes whenever the resource is updated.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly etag?: string;
    /** The PolicySettings for policy. */
    policySettings?: PolicySettings;
    /** The custom rules inside the policy. */
    customRules?: WebApplicationFirewallCustomRule[];
    /**
     * A collection of references to application gateways.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly applicationGateways?: ApplicationGateway[];
    /**
     * The provisioning state of the web application firewall policy resource.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly provisioningState?: ProvisioningState;
    /**
     * Resource status of the policy.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly resourceState?: WebApplicationFirewallPolicyResourceState;
    /** Describes the managedRules structure. */
    managedRules?: ManagedRulesDefinition;
    /**
     * A collection of references to application gateway http listeners.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly httpListeners?: SubResource[];
    /**
     * A collection of references to application gateway path rules.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly pathBasedRules?: SubResource[];
};

/** Result of the request to list WebApplicationFirewallPolicies. It contains a list of WebApplicationFirewallPolicy objects and a URL link to get the next set of results. */
export declare interface WebApplicationFirewallPolicyListResult {
    /**
     * List of WebApplicationFirewallPolicies within a resource group.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly value?: WebApplicationFirewallPolicy[];
    /**
     * URL to get the next set of WebApplicationFirewallPolicy objects if there are any.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly nextLink?: string;
}

/**
 * Defines values for WebApplicationFirewallPolicyResourceState. \
 * {@link KnownWebApplicationFirewallPolicyResourceState} can be used interchangeably with WebApplicationFirewallPolicyResourceState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Creating** \
 * **Enabling** \
 * **Enabled** \
 * **Disabling** \
 * **Disabled** \
 * **Deleting**
 */
export declare type WebApplicationFirewallPolicyResourceState = string;

/**
 * Defines values for WebApplicationFirewallRuleType. \
 * {@link KnownWebApplicationFirewallRuleType} can be used interchangeably with WebApplicationFirewallRuleType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **MatchRule** \
 * **Invalid**
 */
export declare type WebApplicationFirewallRuleType = string;

/**
 * Defines values for WebApplicationFirewallTransform. \
 * {@link KnownWebApplicationFirewallTransform} can be used interchangeably with WebApplicationFirewallTransform,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Lowercase** \
 * **Trim** \
 * **UrlDecode** \
 * **UrlEncode** \
 * **RemoveNulls** \
 * **HtmlEntityDecode**
 */
export declare type WebApplicationFirewallTransform = string;

export { }
