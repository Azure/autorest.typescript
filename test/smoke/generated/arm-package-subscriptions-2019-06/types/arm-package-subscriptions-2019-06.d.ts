import * as coreAuth from '@azure/core-auth';
import * as coreClient from '@azure/core-client';
import { PagedAsyncIterableIterator } from '@azure/core-paging';

/** Optional parameters. */
export declare interface CheckResourceNameOptionalParams extends coreClient.OperationOptions {
    /** Resource object with values for resource name and resource type */
    resourceNameDefinition?: ResourceName;
}

/** Contains response data for the checkResourceName operation. */
export declare type CheckResourceNameResponse = CheckResourceNameResult;

/** Resource Name valid if not a reserved word, does not contain a reserved word and does not start with a reserved word */
export declare interface CheckResourceNameResult {
    /** Name of Resource */
    name?: string;
    /** Type of Resource */
    type?: string;
    /** Is the resource name Allowed or Reserved */
    status?: ResourceNameStatus;
}

/** Error description and code explaining why resource name is invalid. */
export declare interface ErrorDefinition {
    /** Description of the error. */
    message?: string;
    /** Code of the error. */
    code?: string;
}

/** Error response. */
export declare interface ErrorResponse {
    /** The error details. */
    error?: ErrorDefinition;
}

/** Known values of {@link ResourceNameStatus} that the service accepts. */
export declare enum KnownResourceNameStatus {
    Allowed = "Allowed",
    Reserved = "Reserved"
}

/** Location information. */
declare interface Location_2 {
    /**
     * The fully qualified ID of the location. For example, /subscriptions/00000000-0000-0000-0000-000000000000/locations/westus.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
    /**
     * The subscription ID.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly subscriptionId?: string;
    /**
     * The location name.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly name?: string;
    /**
     * The display name of the location.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly displayName?: string;
    /**
     * The latitude of the location.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly latitude?: string;
    /**
     * The longitude of the location.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly longitude?: string;
}
export { Location_2 as Location }

/** Location list operation response. */
export declare interface LocationListResult {
    /** An array of locations. */
    value?: Location_2[];
}

/** Information about a tenant managing the subscription. */
export declare interface ManagedByTenant {
    /**
     * The tenant ID of the managing tenant. This is a GUID.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly tenantId?: string;
}

/** Microsoft.Resources operation */
export declare interface Operation {
    /** Operation name: {provider}/{resource}/{operation} */
    name?: string;
    /** The object that represents the operation. */
    display?: OperationDisplay;
}

/** The object that represents the operation. */
export declare interface OperationDisplay {
    /** Service provider: Microsoft.Resources */
    provider?: string;
    /** Resource on which the operation is performed: Profile, endpoint, etc. */
    resource?: string;
    /** Operation type: Read, write, delete, etc. */
    operation?: string;
    /** Description of the operation. */
    description?: string;
}

/** Result of the request to list Microsoft.Resources operations. It contains a list of operations and a URL link to get the next set of results. */
export declare interface OperationListResult {
    /** List of Microsoft.Resources operations. */
    value?: Operation[];
    /** URL to get the next set of operation list results if there are any. */
    nextLink?: string;
}

/** Interface representing a Operations. */
export declare interface Operations {
    /**
     * Lists all of the available Microsoft.Resources REST API operations.
     * @param options The options parameters.
     */
    list(options?: OperationsListOptionalParams): PagedAsyncIterableIterator<Operation>;
    /**
     * ListNext
     * @param nextLink The nextLink from the previous successful call to the List method.
     * @param options The options parameters.
     */
    listNext(nextLink: string, options?: OperationsListNextOptionalParams): PagedAsyncIterableIterator<Operation>;
    /**
     * ListNextNext
     * @param nextLink The nextLink from the previous successful call to the ListNext method.
     * @param options The options parameters.
     */
    listNextNext(nextLink: string, options?: OperationsListNextNextOptionalParams): PagedAsyncIterableIterator<Operation>;
    /**
     * ListNextNextNext
     * @param nextLink The nextLink from the previous successful call to the ListNextNext method.
     * @param options The options parameters.
     */
    listNextNextNext(nextLink: string, options?: OperationsListNextNextNextOptionalParams): PagedAsyncIterableIterator<Operation>;
    /**
     * ListNextNextNextNext
     * @param nextLink The nextLink from the previous successful call to the ListNextNextNext method.
     * @param options The options parameters.
     */
    listNextNextNextNext(nextLink: string, options?: OperationsListNextNextNextNextOptionalParams): PagedAsyncIterableIterator<Operation>;
    /**
     * ListNextNextNextNextNext
     * @param nextLink The nextLink from the previous successful call to the ListNextNextNextNext method.
     * @param options The options parameters.
     */
    listNextNextNextNextNext(nextLink: string, options?: OperationsListNextNextNextNextNextOptionalParams): PagedAsyncIterableIterator<Operation>;
    /**
     * ListNextNextNextNextNextNext
     * @param nextLink The nextLink from the previous successful call to the ListNextNextNextNextNext
     *                 method.
     * @param options The options parameters.
     */
    listNextNextNextNextNextNext(nextLink: string, options?: OperationsListNextNextNextNextNextNextOptionalParams): PagedAsyncIterableIterator<Operation>;
    /**
     * ListNextNextNextNextNextNextNext
     * @param nextLink The nextLink from the previous successful call to the ListNextNextNextNextNextNext
     *                 method.
     * @param options The options parameters.
     */
    listNextNextNextNextNextNextNext(nextLink: string, options?: OperationsListNextNextNextNextNextNextNextOptionalParams): PagedAsyncIterableIterator<Operation>;
}

/** Optional parameters. */
export declare interface OperationsListNextNextNextNextNextNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNextNextNextNextNextNextNextNext operation. */
export declare type OperationsListNextNextNextNextNextNextNextNextResponse = OperationListResult;

/** Optional parameters. */
export declare interface OperationsListNextNextNextNextNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNextNextNextNextNextNextNext operation. */
export declare type OperationsListNextNextNextNextNextNextNextResponse = OperationListResult;

/** Optional parameters. */
export declare interface OperationsListNextNextNextNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNextNextNextNextNextNext operation. */
export declare type OperationsListNextNextNextNextNextNextResponse = OperationListResult;

/** Optional parameters. */
export declare interface OperationsListNextNextNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNextNextNextNextNext operation. */
export declare type OperationsListNextNextNextNextNextResponse = OperationListResult;

/** Optional parameters. */
export declare interface OperationsListNextNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNextNextNextNext operation. */
export declare type OperationsListNextNextNextNextResponse = OperationListResult;

/** Optional parameters. */
export declare interface OperationsListNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNextNextNext operation. */
export declare type OperationsListNextNextNextResponse = OperationListResult;

/** Optional parameters. */
export declare interface OperationsListNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNextNext operation. */
export declare type OperationsListNextNextResponse = OperationListResult;

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

/** Name and Type of the Resource */
export declare interface ResourceName {
    /** Name of the resource */
    name: string;
    /** The type of the resource */
    type: string;
}

/**
 * Defines values for ResourceNameStatus. \
 * {@link KnownResourceNameStatus} can be used interchangeably with ResourceNameStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Allowed** \
 * **Reserved**
 */
export declare type ResourceNameStatus = string;

/** Defines values for SpendingLimit. */
export declare type SpendingLimit = "On" | "Off" | "CurrentPeriodOff";

/** Subscription information. */
export declare interface Subscription {
    /**
     * The fully qualified ID for the subscription. For example, /subscriptions/00000000-0000-0000-0000-000000000000.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
    /**
     * The subscription ID.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly subscriptionId?: string;
    /**
     * The subscription display name.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly displayName?: string;
    /**
     * The subscription tenant ID.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly tenantId?: string;
    /**
     * The subscription state. Possible values are Enabled, Warned, PastDue, Disabled, and Deleted.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly state?: SubscriptionState;
    /** The subscription policies. */
    subscriptionPolicies?: SubscriptionPolicies;
    /** The authorization source of the request. Valid values are one or more combinations of Legacy, RoleBased, Bypassed, Direct and Management. For example, 'Legacy, RoleBased'. */
    authorizationSource?: string;
    /** An array containing the tenants managing the subscription. */
    managedByTenants?: ManagedByTenant[];
}

export declare class SubscriptionClient extends coreClient.ServiceClient {
    $host: string;
    apiVersion: string;
    /**
     * Initializes a new instance of the SubscriptionClient class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, options?: SubscriptionClientOptionalParams);
    /**
     * A resource name is valid if it is not a reserved word, does not contains a reserved word and does
     * not start with a reserved word
     * @param options The options parameters.
     */
    checkResourceName(options?: CheckResourceNameOptionalParams): Promise<CheckResourceNameResponse>;
    operations: Operations;
    subscriptions: Subscriptions;
    tenants: Tenants;
}

/** Optional parameters. */
export declare interface SubscriptionClientOptionalParams extends coreClient.ServiceClientOptions {
    /** server parameter */
    $host?: string;
    /** Api Version */
    apiVersion?: string;
    /** Overrides client endpoint. */
    endpoint?: string;
}

/** Subscription list operation response. */
export declare interface SubscriptionListResult {
    /** An array of subscriptions. */
    value?: Subscription[];
    /** The URL to get the next set of results. */
    nextLink: string;
}

/** Subscription policies. */
export declare interface SubscriptionPolicies {
    /**
     * The subscription location placement ID. The ID indicates which regions are visible for a subscription. For example, a subscription with a location placement Id of Public_2014-09-01 has access to Azure public regions.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly locationPlacementId?: string;
    /**
     * The subscription quota ID.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly quotaId?: string;
    /**
     * The subscription spending limit.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly spendingLimit?: SpendingLimit;
}

/** Interface representing a Subscriptions. */
export declare interface Subscriptions {
    /**
     * This operation provides all the locations that are available for resource providers; however, each
     * resource provider may support a subset of this list.
     * @param subscriptionId The ID of the target subscription.
     * @param options The options parameters.
     */
    listLocations(subscriptionId: string, options?: SubscriptionsListLocationsOptionalParams): PagedAsyncIterableIterator<Location_2>;
    /**
     * Gets all subscriptions for a tenant.
     * @param options The options parameters.
     */
    list(options?: SubscriptionsListOptionalParams): PagedAsyncIterableIterator<Subscription>;
    /**
     * ListNext
     * @param nextLink The nextLink from the previous successful call to the List method.
     * @param options The options parameters.
     */
    listNext(nextLink: string, options?: SubscriptionsListNextOptionalParams): PagedAsyncIterableIterator<Subscription>;
    /**
     * ListNextNext
     * @param nextLink The nextLink from the previous successful call to the ListNext method.
     * @param options The options parameters.
     */
    listNextNext(nextLink: string, options?: SubscriptionsListNextNextOptionalParams): PagedAsyncIterableIterator<Subscription>;
    /**
     * ListNextNextNext
     * @param nextLink The nextLink from the previous successful call to the ListNextNext method.
     * @param options The options parameters.
     */
    listNextNextNext(nextLink: string, options?: SubscriptionsListNextNextNextOptionalParams): PagedAsyncIterableIterator<Subscription>;
    /**
     * ListNextNextNextNext
     * @param nextLink The nextLink from the previous successful call to the ListNextNextNext method.
     * @param options The options parameters.
     */
    listNextNextNextNext(nextLink: string, options?: SubscriptionsListNextNextNextNextOptionalParams): PagedAsyncIterableIterator<Subscription>;
    /**
     * ListNextNextNextNextNext
     * @param nextLink The nextLink from the previous successful call to the ListNextNextNextNext method.
     * @param options The options parameters.
     */
    listNextNextNextNextNext(nextLink: string, options?: SubscriptionsListNextNextNextNextNextOptionalParams): PagedAsyncIterableIterator<Subscription>;
    /**
     * ListNextNextNextNextNextNext
     * @param nextLink The nextLink from the previous successful call to the ListNextNextNextNextNext
     *                 method.
     * @param options The options parameters.
     */
    listNextNextNextNextNextNext(nextLink: string, options?: SubscriptionsListNextNextNextNextNextNextOptionalParams): PagedAsyncIterableIterator<Subscription>;
    /**
     * ListNextNextNextNextNextNextNext
     * @param nextLink The nextLink from the previous successful call to the ListNextNextNextNextNextNext
     *                 method.
     * @param options The options parameters.
     */
    listNextNextNextNextNextNextNext(nextLink: string, options?: SubscriptionsListNextNextNextNextNextNextNextOptionalParams): PagedAsyncIterableIterator<Subscription>;
    /**
     * Gets details about a specified subscription.
     * @param subscriptionId The ID of the target subscription.
     * @param options The options parameters.
     */
    get(subscriptionId: string, options?: SubscriptionsGetOptionalParams): Promise<SubscriptionsGetResponse>;
}

/** Optional parameters. */
export declare interface SubscriptionsGetOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the get operation. */
export declare type SubscriptionsGetResponse = Subscription;

/** Optional parameters. */
export declare interface SubscriptionsListLocationsOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listLocations operation. */
export declare type SubscriptionsListLocationsResponse = LocationListResult;

/** Optional parameters. */
export declare interface SubscriptionsListNextNextNextNextNextNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNextNextNextNextNextNextNextNext operation. */
export declare type SubscriptionsListNextNextNextNextNextNextNextNextResponse = SubscriptionListResult;

/** Optional parameters. */
export declare interface SubscriptionsListNextNextNextNextNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNextNextNextNextNextNextNext operation. */
export declare type SubscriptionsListNextNextNextNextNextNextNextResponse = SubscriptionListResult;

/** Optional parameters. */
export declare interface SubscriptionsListNextNextNextNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNextNextNextNextNextNext operation. */
export declare type SubscriptionsListNextNextNextNextNextNextResponse = SubscriptionListResult;

/** Optional parameters. */
export declare interface SubscriptionsListNextNextNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNextNextNextNextNext operation. */
export declare type SubscriptionsListNextNextNextNextNextResponse = SubscriptionListResult;

/** Optional parameters. */
export declare interface SubscriptionsListNextNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNextNextNextNext operation. */
export declare type SubscriptionsListNextNextNextNextResponse = SubscriptionListResult;

/** Optional parameters. */
export declare interface SubscriptionsListNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNextNextNext operation. */
export declare type SubscriptionsListNextNextNextResponse = SubscriptionListResult;

/** Optional parameters. */
export declare interface SubscriptionsListNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNextNext operation. */
export declare type SubscriptionsListNextNextResponse = SubscriptionListResult;

/** Optional parameters. */
export declare interface SubscriptionsListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type SubscriptionsListNextResponse = SubscriptionListResult;

/** Optional parameters. */
export declare interface SubscriptionsListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type SubscriptionsListResponse = SubscriptionListResult;

/** Defines values for SubscriptionState. */
export declare type SubscriptionState = "Enabled" | "Warned" | "PastDue" | "Disabled" | "Deleted";

/** Defines values for TenantCategory. */
export declare type TenantCategory = "Home" | "ProjectedBy" | "ManagedBy";

/** Tenant Id information. */
export declare interface TenantIdDescription {
    /**
     * The fully qualified ID of the tenant. For example, /tenants/00000000-0000-0000-0000-000000000000.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly id?: string;
    /**
     * The tenant ID. For example, 00000000-0000-0000-0000-000000000000.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly tenantId?: string;
    /**
     * The tenant category.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly tenantCategory?: TenantCategory;
    /**
     * Country/region name of the address for the tenant.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly country?: string;
    /**
     * Country/region abbreviation for the tenant.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly countryCode?: string;
    /**
     * The display name of the tenant.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly displayName?: string;
    /**
     * The list of domains for the tenant.
     * NOTE: This property will not be serialized. It can only be populated by the server.
     */
    readonly domains?: string[];
}

/** Tenant Ids information. */
export declare interface TenantListResult {
    /** An array of tenants. */
    value?: TenantIdDescription[];
    /** The URL to use for getting the next set of results. */
    nextLink: string;
}

/** Interface representing a Tenants. */
export declare interface Tenants {
    /**
     * Gets the tenants for your account.
     * @param options The options parameters.
     */
    list(options?: TenantsListOptionalParams): PagedAsyncIterableIterator<TenantIdDescription>;
    /**
     * ListNext
     * @param nextLink The nextLink from the previous successful call to the List method.
     * @param options The options parameters.
     */
    listNext(nextLink: string, options?: TenantsListNextOptionalParams): PagedAsyncIterableIterator<TenantIdDescription>;
    /**
     * ListNextNext
     * @param nextLink The nextLink from the previous successful call to the ListNext method.
     * @param options The options parameters.
     */
    listNextNext(nextLink: string, options?: TenantsListNextNextOptionalParams): PagedAsyncIterableIterator<TenantIdDescription>;
    /**
     * ListNextNextNext
     * @param nextLink The nextLink from the previous successful call to the ListNextNext method.
     * @param options The options parameters.
     */
    listNextNextNext(nextLink: string, options?: TenantsListNextNextNextOptionalParams): PagedAsyncIterableIterator<TenantIdDescription>;
    /**
     * ListNextNextNextNext
     * @param nextLink The nextLink from the previous successful call to the ListNextNextNext method.
     * @param options The options parameters.
     */
    listNextNextNextNext(nextLink: string, options?: TenantsListNextNextNextNextOptionalParams): PagedAsyncIterableIterator<TenantIdDescription>;
    /**
     * ListNextNextNextNextNext
     * @param nextLink The nextLink from the previous successful call to the ListNextNextNextNext method.
     * @param options The options parameters.
     */
    listNextNextNextNextNext(nextLink: string, options?: TenantsListNextNextNextNextNextOptionalParams): PagedAsyncIterableIterator<TenantIdDescription>;
    /**
     * ListNextNextNextNextNextNext
     * @param nextLink The nextLink from the previous successful call to the ListNextNextNextNextNext
     *                 method.
     * @param options The options parameters.
     */
    listNextNextNextNextNextNext(nextLink: string, options?: TenantsListNextNextNextNextNextNextOptionalParams): PagedAsyncIterableIterator<TenantIdDescription>;
    /**
     * ListNextNextNextNextNextNextNext
     * @param nextLink The nextLink from the previous successful call to the ListNextNextNextNextNextNext
     *                 method.
     * @param options The options parameters.
     */
    listNextNextNextNextNextNextNext(nextLink: string, options?: TenantsListNextNextNextNextNextNextNextOptionalParams): PagedAsyncIterableIterator<TenantIdDescription>;
}

/** Optional parameters. */
export declare interface TenantsListNextNextNextNextNextNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNextNextNextNextNextNextNextNext operation. */
export declare type TenantsListNextNextNextNextNextNextNextNextResponse = TenantListResult;

/** Optional parameters. */
export declare interface TenantsListNextNextNextNextNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNextNextNextNextNextNextNext operation. */
export declare type TenantsListNextNextNextNextNextNextNextResponse = TenantListResult;

/** Optional parameters. */
export declare interface TenantsListNextNextNextNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNextNextNextNextNextNext operation. */
export declare type TenantsListNextNextNextNextNextNextResponse = TenantListResult;

/** Optional parameters. */
export declare interface TenantsListNextNextNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNextNextNextNextNext operation. */
export declare type TenantsListNextNextNextNextNextResponse = TenantListResult;

/** Optional parameters. */
export declare interface TenantsListNextNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNextNextNextNext operation. */
export declare type TenantsListNextNextNextNextResponse = TenantListResult;

/** Optional parameters. */
export declare interface TenantsListNextNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNextNextNext operation. */
export declare type TenantsListNextNextNextResponse = TenantListResult;

/** Optional parameters. */
export declare interface TenantsListNextNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNextNext operation. */
export declare type TenantsListNextNextResponse = TenantListResult;

/** Optional parameters. */
export declare interface TenantsListNextOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the listNext operation. */
export declare type TenantsListNextResponse = TenantListResult;

/** Optional parameters. */
export declare interface TenantsListOptionalParams extends coreClient.OperationOptions {
}

/** Contains response data for the list operation. */
export declare type TenantsListResponse = TenantListResult;

export { }
