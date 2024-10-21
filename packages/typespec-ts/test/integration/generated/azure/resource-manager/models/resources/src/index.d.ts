import { AbortSignalLike } from '@azure/abort-controller';
import { CancelOnProgress } from '@azure/core-lro';
import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { CreateHttpPollerOptions } from '@azure/core-lro';
import { HttpResponse } from '@azure-rest/core-client';
import { OperationState } from '@azure/core-lro';
import { PathUncheckedResponse } from '@azure-rest/core-client';
import { RawHttpHeaders } from '@azure/core-rest-pipeline';
import { RequestParameters } from '@azure-rest/core-client';
import { StreamableMethod } from '@azure-rest/core-client';

export declare interface AccessRule {
    name?: string;
    properties?: AccessRuleProperties;
}

export declare type AccessRuleDirection = string;

export declare type AccessRuleDirectionOutput = string;

export declare interface AccessRuleOutput {
    name?: string;
    properties?: AccessRulePropertiesOutput;
}

export declare interface AccessRuleProperties {
    direction?: AccessRuleDirection;
    addressPrefixes?: string[];
    subscriptions?: {
        id?: string;
    }[];
    networkSecurityPerimeters?: Array<NetworkSecurityPerimeter>;
    fullyQualifiedDomainNames?: string[];
    emailAddresses?: string[];
    phoneNumbers?: string[];
}

export declare interface AccessRulePropertiesOutput {
    direction?: AccessRuleDirectionOutput;
    addressPrefixes?: string[];
    subscriptions?: {
        id?: string;
    }[];
    networkSecurityPerimeters?: Array<NetworkSecurityPerimeterOutput>;
    fullyQualifiedDomainNames?: string[];
    emailAddresses?: string[];
    phoneNumbers?: string[];
}

export declare type AzureArmResourceClient = Client & {
    path: Routes;
};

export declare interface AzureArmResourceClientOptions extends ClientOptions {
    apiVersion?: string;
}

export declare interface AzureEntityResource extends Resource {
}

export declare interface AzureEntityResourceOutput extends ResourceOutput {
    readonly etag?: string;
}

declare function createClient({ apiVersion, ...options }?: AzureArmResourceClientOptions): AzureArmResourceClient;
export default createClient;

export declare type CreatedByType = string;

export declare type CreatedByTypeOutput = string;

export declare interface ErrorAdditionalInfoOutput {
    readonly type?: string;
    readonly info?: Record<string, any>;
}

export declare interface ErrorDetailOutput {
    readonly code?: string;
    readonly message?: string;
    readonly target?: string;
    readonly details?: Array<ErrorDetailOutput>;
    readonly additionalInfo?: Array<ErrorAdditionalInfoOutput>;
}

export declare interface ErrorResponseOutput {
    error?: ErrorDetailOutput;
}

export declare interface ExtensionResource extends Resource {
}

export declare interface ExtensionResourceOutput extends ResourceOutput {
}

export declare type GetArrayType<T> = T extends Array<infer TData> ? TData : never;

export declare function getLongRunningPoller<TResult extends TopLevelTrackedResourcesCreateOrReplaceLogicalResponse | TopLevelTrackedResourcesCreateOrReplaceDefaultResponse>(client: Client, initialResponse: TopLevelTrackedResourcesCreateOrReplace200Response | TopLevelTrackedResourcesCreateOrReplace201Response | TopLevelTrackedResourcesCreateOrReplaceDefaultResponse, options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;

export declare function getLongRunningPoller<TResult extends TopLevelTrackedResourcesUpdateLogicalResponse | TopLevelTrackedResourcesUpdateDefaultResponse>(client: Client, initialResponse: TopLevelTrackedResourcesUpdate200Response | TopLevelTrackedResourcesUpdate202Response | TopLevelTrackedResourcesUpdateDefaultResponse, options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;

export declare function getLongRunningPoller<TResult extends TopLevelTrackedResourcesDeleteLogicalResponse | TopLevelTrackedResourcesDeleteDefaultResponse>(client: Client, initialResponse: TopLevelTrackedResourcesDelete202Response | TopLevelTrackedResourcesDelete204Response | TopLevelTrackedResourcesDeleteDefaultResponse, options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;

export declare function getLongRunningPoller<TResult extends NestedProxyResourcesCreateOrReplaceLogicalResponse | NestedProxyResourcesCreateOrReplaceDefaultResponse>(client: Client, initialResponse: NestedProxyResourcesCreateOrReplace200Response | NestedProxyResourcesCreateOrReplace201Response | NestedProxyResourcesCreateOrReplaceDefaultResponse, options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;

export declare function getLongRunningPoller<TResult extends NestedProxyResourcesUpdateLogicalResponse | NestedProxyResourcesUpdateDefaultResponse>(client: Client, initialResponse: NestedProxyResourcesUpdate200Response | NestedProxyResourcesUpdate202Response | NestedProxyResourcesUpdateDefaultResponse, options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;

export declare function getLongRunningPoller<TResult extends NestedProxyResourcesDeleteLogicalResponse | NestedProxyResourcesDeleteDefaultResponse>(client: Client, initialResponse: NestedProxyResourcesDelete202Response | NestedProxyResourcesDelete204Response | NestedProxyResourcesDeleteDefaultResponse, options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;

export declare function getLongRunningPoller<TResult extends SingletonTrackedResourcesCreateOrUpdateLogicalResponse | SingletonTrackedResourcesCreateOrUpdateDefaultResponse>(client: Client, initialResponse: SingletonTrackedResourcesCreateOrUpdate200Response | SingletonTrackedResourcesCreateOrUpdate201Response | SingletonTrackedResourcesCreateOrUpdateDefaultResponse, options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;

export declare type GetPage<TPage> = (pageLink: string) => Promise<{
    page: TPage;
    nextPageLink?: string;
}>;

export declare interface Identity {
    type?: ResourceIdentityType;
}

export declare interface IdentityOutput {
    readonly principalId?: string;
    readonly tenantId?: string;
    type?: ResourceIdentityTypeOutput;
}

export declare type IssueType = string;

export declare type IssueTypeOutput = string;

export declare function isUnexpected(response: TopLevelTrackedResourcesGet200Response | TopLevelTrackedResourcesGetDefaultResponse): response is TopLevelTrackedResourcesGetDefaultResponse;

export declare function isUnexpected(response: TopLevelTrackedResourcesCreateOrReplace200Response | TopLevelTrackedResourcesCreateOrReplace201Response | TopLevelTrackedResourcesCreateOrReplaceLogicalResponse | TopLevelTrackedResourcesCreateOrReplaceDefaultResponse): response is TopLevelTrackedResourcesCreateOrReplaceDefaultResponse;

export declare function isUnexpected(response: TopLevelTrackedResourcesUpdate200Response | TopLevelTrackedResourcesUpdate202Response | TopLevelTrackedResourcesUpdateLogicalResponse | TopLevelTrackedResourcesUpdateDefaultResponse): response is TopLevelTrackedResourcesUpdateDefaultResponse;

export declare function isUnexpected(response: TopLevelTrackedResourcesDelete202Response | TopLevelTrackedResourcesDelete204Response | TopLevelTrackedResourcesDeleteLogicalResponse | TopLevelTrackedResourcesDeleteDefaultResponse): response is TopLevelTrackedResourcesDeleteDefaultResponse;

export declare function isUnexpected(response: TopLevelTrackedResourcesListByResourceGroup200Response | TopLevelTrackedResourcesListByResourceGroupDefaultResponse): response is TopLevelTrackedResourcesListByResourceGroupDefaultResponse;

export declare function isUnexpected(response: TopLevelTrackedResourcesListBySubscription200Response | TopLevelTrackedResourcesListBySubscriptionDefaultResponse): response is TopLevelTrackedResourcesListBySubscriptionDefaultResponse;

export declare function isUnexpected(response: TopLevelTrackedResourcesActionSync204Response | TopLevelTrackedResourcesActionSyncDefaultResponse): response is TopLevelTrackedResourcesActionSyncDefaultResponse;

export declare function isUnexpected(response: NestedProxyResourcesGet200Response | NestedProxyResourcesGetDefaultResponse): response is NestedProxyResourcesGetDefaultResponse;

export declare function isUnexpected(response: NestedProxyResourcesCreateOrReplace200Response | NestedProxyResourcesCreateOrReplace201Response | NestedProxyResourcesCreateOrReplaceLogicalResponse | NestedProxyResourcesCreateOrReplaceDefaultResponse): response is NestedProxyResourcesCreateOrReplaceDefaultResponse;

export declare function isUnexpected(response: NestedProxyResourcesUpdate200Response | NestedProxyResourcesUpdate202Response | NestedProxyResourcesUpdateLogicalResponse | NestedProxyResourcesUpdateDefaultResponse): response is NestedProxyResourcesUpdateDefaultResponse;

export declare function isUnexpected(response: NestedProxyResourcesDelete202Response | NestedProxyResourcesDelete204Response | NestedProxyResourcesDeleteLogicalResponse | NestedProxyResourcesDeleteDefaultResponse): response is NestedProxyResourcesDeleteDefaultResponse;

export declare function isUnexpected(response: NestedProxyResourcesListByTopLevelTrackedResource200Response | NestedProxyResourcesListByTopLevelTrackedResourceDefaultResponse): response is NestedProxyResourcesListByTopLevelTrackedResourceDefaultResponse;

export declare function isUnexpected(response: SingletonTrackedResourcesGetByResourceGroup200Response | SingletonTrackedResourcesGetByResourceGroupDefaultResponse): response is SingletonTrackedResourcesGetByResourceGroupDefaultResponse;

export declare function isUnexpected(response: SingletonTrackedResourcesCreateOrUpdate200Response | SingletonTrackedResourcesCreateOrUpdate201Response | SingletonTrackedResourcesCreateOrUpdateLogicalResponse | SingletonTrackedResourcesCreateOrUpdateDefaultResponse): response is SingletonTrackedResourcesCreateOrUpdateDefaultResponse;

export declare function isUnexpected(response: SingletonTrackedResourcesUpdate200Response | SingletonTrackedResourcesUpdateDefaultResponse): response is SingletonTrackedResourcesUpdateDefaultResponse;

export declare function isUnexpected(response: SingletonTrackedResourcesListByResourceGroup200Response | SingletonTrackedResourcesListByResourceGroupDefaultResponse): response is SingletonTrackedResourcesListByResourceGroupDefaultResponse;

export declare interface NestedProxyResource extends ProxyResource {
    properties?: NestedProxyResourceProperties;
}

export declare interface NestedProxyResourceListResultOutput {
    value: Array<NestedProxyResourceOutput>;
    nextLink?: string;
}

export declare interface NestedProxyResourceOutput extends ProxyResourceOutput {
    properties?: NestedProxyResourcePropertiesOutput;
}

export declare interface NestedProxyResourceProperties {
    description?: string;
}

export declare interface NestedProxyResourcePropertiesOutput {
    readonly provisioningState?: ProvisioningStateOutput;
    description?: string;
}

export declare interface NestedProxyResourcesCreateOrReplace200Response extends HttpResponse {
    status: "200";
    body: NestedProxyResourceOutput;
}

export declare interface NestedProxyResourcesCreateOrReplace201Headers {
    "azure-asyncoperation"?: string;
    "retry-after"?: number;
}

export declare interface NestedProxyResourcesCreateOrReplace201Response extends HttpResponse {
    status: "201";
    body: NestedProxyResourceOutput;
    headers: RawHttpHeaders & NestedProxyResourcesCreateOrReplace201Headers;
}

export declare interface NestedProxyResourcesCreateOrReplaceBodyParam {
    body: NestedProxyResource;
}

export declare interface NestedProxyResourcesCreateOrReplaceDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare interface NestedProxyResourcesCreateOrReplaceLogicalResponse extends HttpResponse {
    status: "200";
    body: NestedProxyResourceOutput;
}

export declare type NestedProxyResourcesCreateOrReplaceParameters = NestedProxyResourcesCreateOrReplaceBodyParam & RequestParameters;

export declare interface NestedProxyResourcesDelete202Headers {
    location?: string;
    "retry-after"?: number;
}

export declare interface NestedProxyResourcesDelete202Response extends HttpResponse {
    status: "202";
    headers: RawHttpHeaders & NestedProxyResourcesDelete202Headers;
}

export declare interface NestedProxyResourcesDelete204Response extends HttpResponse {
    status: "204";
}

export declare interface NestedProxyResourcesDeleteDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare interface NestedProxyResourcesDeleteLogicalResponse extends HttpResponse {
    status: "200";
}

export declare type NestedProxyResourcesDeleteParameters = RequestParameters;

export declare interface NestedProxyResourcesGet {
    get(options?: NestedProxyResourcesGetParameters): StreamableMethod<NestedProxyResourcesGet200Response | NestedProxyResourcesGetDefaultResponse>;
    put(options: NestedProxyResourcesCreateOrReplaceParameters): StreamableMethod<NestedProxyResourcesCreateOrReplace200Response | NestedProxyResourcesCreateOrReplace201Response | NestedProxyResourcesCreateOrReplaceDefaultResponse>;
    patch(options: NestedProxyResourcesUpdateParameters): StreamableMethod<NestedProxyResourcesUpdate200Response | NestedProxyResourcesUpdate202Response | NestedProxyResourcesUpdateDefaultResponse>;
    delete(options?: NestedProxyResourcesDeleteParameters): StreamableMethod<NestedProxyResourcesDelete202Response | NestedProxyResourcesDelete204Response | NestedProxyResourcesDeleteDefaultResponse>;
}

export declare interface NestedProxyResourcesGet200Response extends HttpResponse {
    status: "200";
    body: NestedProxyResourceOutput;
}

export declare interface NestedProxyResourcesGetDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare type NestedProxyResourcesGetParameters = RequestParameters;

export declare interface NestedProxyResourcesListByTopLevelTrackedResource {
    get(options?: NestedProxyResourcesListByTopLevelTrackedResourceParameters): StreamableMethod<NestedProxyResourcesListByTopLevelTrackedResource200Response | NestedProxyResourcesListByTopLevelTrackedResourceDefaultResponse>;
}

export declare interface NestedProxyResourcesListByTopLevelTrackedResource200Response extends HttpResponse {
    status: "200";
    body: NestedProxyResourceListResultOutput;
}

export declare interface NestedProxyResourcesListByTopLevelTrackedResourceDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare type NestedProxyResourcesListByTopLevelTrackedResourceParameters = RequestParameters;

export declare interface NestedProxyResourcesUpdate200Response extends HttpResponse {
    status: "200";
    body: NestedProxyResourceOutput;
}

export declare interface NestedProxyResourcesUpdate202Headers {
    location?: string;
    "retry-after"?: number;
}

export declare interface NestedProxyResourcesUpdate202Response extends HttpResponse {
    status: "202";
    headers: RawHttpHeaders & NestedProxyResourcesUpdate202Headers;
}

export declare interface NestedProxyResourcesUpdateBodyParam {
    body: NestedProxyResource;
}

export declare interface NestedProxyResourcesUpdateDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare interface NestedProxyResourcesUpdateLogicalResponse extends HttpResponse {
    status: "200";
    body: NestedProxyResourceOutput;
}

export declare type NestedProxyResourcesUpdateParameters = NestedProxyResourcesUpdateBodyParam & RequestParameters;

export declare interface NetworkSecurityPerimeter {
    id?: string;
    perimeterGuid?: string;
    location?: string;
}

export declare interface NetworkSecurityPerimeterConfiguration extends ProxyResource {
    properties?: NetworkSecurityPerimeterConfigurationProperties;
}

export declare interface NetworkSecurityPerimeterConfigurationOutput extends ProxyResourceOutput {
    properties?: NetworkSecurityPerimeterConfigurationPropertiesOutput;
}

export declare interface NetworkSecurityPerimeterConfigurationProperties {
    networkSecurityPerimeter?: NetworkSecurityPerimeter;
    resourceAssociation?: ResourceAssociation;
    profile?: NetworkSecurityProfile;
}

export declare interface NetworkSecurityPerimeterConfigurationPropertiesOutput {
    readonly provisioningState?: NetworkSecurityPerimeterConfigurationProvisioningStateOutput;
    readonly provisioningIssues?: Array<ProvisioningIssueOutput>;
    networkSecurityPerimeter?: NetworkSecurityPerimeterOutput;
    resourceAssociation?: ResourceAssociationOutput;
    profile?: NetworkSecurityProfileOutput;
}

export declare type NetworkSecurityPerimeterConfigurationProvisioningState = string;

export declare type NetworkSecurityPerimeterConfigurationProvisioningStateOutput = string;

export declare interface NetworkSecurityPerimeterOutput {
    id?: string;
    perimeterGuid?: string;
    location?: string;
}

export declare interface NetworkSecurityProfile {
    name?: string;
    accessRulesVersion?: number;
    accessRules?: Array<AccessRule>;
    diagnosticSettingsVersion?: number;
    enabledLogCategories?: string[];
}

export declare interface NetworkSecurityProfileOutput {
    name?: string;
    accessRulesVersion?: number;
    accessRules?: Array<AccessRuleOutput>;
    diagnosticSettingsVersion?: number;
    enabledLogCategories?: string[];
}

export declare interface NotificationDetails {
    message: string;
    urgent: boolean;
}

export declare interface PagedAsyncIterableIterator<TElement, TPage = TElement[], TPageSettings = PageSettings> {
    next(): Promise<IteratorResult<TElement>>;
    [Symbol.asyncIterator](): PagedAsyncIterableIterator<TElement, TPage, TPageSettings>;
    byPage: (settings?: TPageSettings) => AsyncIterableIterator<TPage>;
}

export declare interface PageSettings {
    continuationToken?: string;
}

export declare function paginate<TResponse extends PathUncheckedResponse>(client: Client, initialResponse: TResponse, options?: PagingOptions<TResponse>): PagedAsyncIterableIterator<PaginateReturn<TResponse>>;

export declare type PaginateReturn<TResult> = TResult extends {
    body: {
        value?: infer TPage;
    };
} ? GetArrayType<TPage> : Array<unknown>;

export declare interface PagingOptions<TResponse> {
    customGetPage?: GetPage<PaginateReturn<TResponse>[]>;
}

export declare interface Plan {
    name: string;
    publisher: string;
    product: string;
    promotionCode?: string;
    version?: string;
}

export declare interface PlanOutput {
    name: string;
    publisher: string;
    product: string;
    promotionCode?: string;
    version?: string;
}

export declare interface PrivateEndpoint {
}

export declare interface PrivateEndpointConnection extends Resource {
    properties?: PrivateEndpointConnectionProperties;
}

export declare interface PrivateEndpointConnectionOutput extends ResourceOutput {
    properties?: PrivateEndpointConnectionPropertiesOutput;
}

export declare interface PrivateEndpointConnectionProperties {
    privateEndpoint?: PrivateEndpoint;
    privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
}

export declare interface PrivateEndpointConnectionPropertiesOutput {
    readonly groupIds?: string[];
    privateEndpoint?: PrivateEndpointOutput;
    privateLinkServiceConnectionState: PrivateLinkServiceConnectionStateOutput;
    readonly provisioningState?: PrivateEndpointConnectionProvisioningStateOutput;
}

export declare type PrivateEndpointConnectionProvisioningState = string;

export declare type PrivateEndpointConnectionProvisioningStateOutput = string;

export declare interface PrivateEndpointOutput {
    readonly id?: string;
}

export declare type PrivateEndpointServiceConnectionStatus = string;

export declare type PrivateEndpointServiceConnectionStatusOutput = string;

export declare interface PrivateLinkResource extends Resource {
    properties?: PrivateLinkResourceProperties;
}

export declare interface PrivateLinkResourceOutput extends ResourceOutput {
    properties?: PrivateLinkResourcePropertiesOutput;
}

export declare interface PrivateLinkResourceProperties {
    requiredZoneNames?: string[];
}

export declare interface PrivateLinkResourcePropertiesOutput {
    readonly groupId?: string;
    readonly requiredMembers?: string[];
    requiredZoneNames?: string[];
}

export declare interface PrivateLinkServiceConnectionState {
    status?: PrivateEndpointServiceConnectionStatus;
    description?: string;
    actionsRequired?: string;
}

export declare interface PrivateLinkServiceConnectionStateOutput {
    status?: PrivateEndpointServiceConnectionStatusOutput;
    description?: string;
    actionsRequired?: string;
}

export declare interface ProvisioningIssue {
}

export declare interface ProvisioningIssueOutput {
    readonly name?: string;
    readonly properties?: ProvisioningIssuePropertiesOutput;
}

export declare interface ProvisioningIssueProperties {
}

export declare interface ProvisioningIssuePropertiesOutput {
    readonly issueType?: IssueTypeOutput;
    readonly severity?: SeverityOutput;
    readonly description?: string;
    readonly suggestedResourceIds?: string[];
    readonly suggestedAccessRules?: Array<AccessRuleOutput>;
}

export declare type ProvisioningState = string;

export declare type ProvisioningStateOutput = string;

export declare interface ProxyResource extends Resource {
}

export declare interface ProxyResourceOutput extends ResourceOutput {
}

export declare interface Resource {
}

export declare interface ResourceAssociation {
    name?: string;
    accessMode?: ResourceAssociationAccessMode;
}

export declare type ResourceAssociationAccessMode = string;

export declare type ResourceAssociationAccessModeOutput = string;

export declare interface ResourceAssociationOutput {
    name?: string;
    accessMode?: ResourceAssociationAccessModeOutput;
}

export declare type ResourceIdentityType = "SystemAssigned";

export declare type ResourceIdentityTypeOutput = "SystemAssigned";

export declare interface ResourceModelWithAllowedPropertySet extends TrackedResource {
    managedBy?: string;
    kind?: string;
    eTag?: string;
    identity?: Identity;
    sku?: Sku;
    plan?: Plan;
}

export declare interface ResourceModelWithAllowedPropertySetOutput extends TrackedResourceOutput {
    managedBy?: string;
    kind?: string;
    eTag?: string;
    identity?: IdentityOutput;
    sku?: SkuOutput;
    plan?: PlanOutput;
}

export declare interface ResourceOutput {
    readonly id?: string;
    readonly name?: string;
    readonly type?: string;
    readonly systemData?: SystemDataOutput;
}

export declare type ResourceProvisioningState = string;

export declare type ResourceProvisioningStateOutput = string;

export declare interface Routes {
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}", subscriptionId: string, resourceGroupName: string, topLevelTrackedResourceName: string): TopLevelTrackedResourcesGet;
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources", subscriptionId: string, resourceGroupName: string): TopLevelTrackedResourcesListByResourceGroup;
    (path: "/subscriptions/{subscriptionId}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources", subscriptionId: string): TopLevelTrackedResourcesListBySubscription;
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}/actionSync", subscriptionId: string, resourceGroupName: string, topLevelTrackedResourceName: string): TopLevelTrackedResourcesActionSync;
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}/nestedProxyResources/{nextedProxyResourceName}", subscriptionId: string, resourceGroupName: string, topLevelTrackedResourceName: string, nextedProxyResourceName: string): NestedProxyResourcesGet;
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}/nestedProxyResources", subscriptionId: string, resourceGroupName: string, topLevelTrackedResourceName: string): NestedProxyResourcesListByTopLevelTrackedResource;
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/singletonTrackedResources/default", subscriptionId: string, resourceGroupName: string): SingletonTrackedResourcesGetByResourceGroup;
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Models.Resources/singletonTrackedResources", subscriptionId: string, resourceGroupName: string): SingletonTrackedResourcesListByResourceGroup;
}

export declare type Severity = string;

export declare type SeverityOutput = string;

export declare interface SimplePollerLike<TState extends OperationState<TResult>, TResult> {
    isDone(): boolean;
    getOperationState(): TState;
    getResult(): TResult | undefined;
    poll(options?: {
        abortSignal?: AbortSignalLike;
    }): Promise<TState>;
    pollUntilDone(pollOptions?: {
        abortSignal?: AbortSignalLike;
    }): Promise<TResult>;
    onProgress(callback: (state: TState) => void): CancelOnProgress;
    serialize(): Promise<string>;
    submitted(): Promise<void>;
    toString(): string;
    stopPolling(): void;
    isStopped(): boolean;
}

export declare interface SingletonTrackedResource extends TrackedResource {
    properties?: SingletonTrackedResourceProperties;
}

export declare interface SingletonTrackedResourceListResultOutput {
    value: Array<SingletonTrackedResourceOutput>;
    nextLink?: string;
}

export declare interface SingletonTrackedResourceOutput extends TrackedResourceOutput {
    properties?: SingletonTrackedResourcePropertiesOutput;
}

export declare interface SingletonTrackedResourceProperties {
    description?: string;
}

export declare interface SingletonTrackedResourcePropertiesOutput {
    readonly provisioningState?: ProvisioningStateOutput;
    description?: string;
}

export declare interface SingletonTrackedResourcesCreateOrUpdate200Response extends HttpResponse {
    status: "200";
    body: SingletonTrackedResourceOutput;
}

export declare interface SingletonTrackedResourcesCreateOrUpdate201Headers {
    "azure-asyncoperation"?: string;
    "retry-after"?: number;
}

export declare interface SingletonTrackedResourcesCreateOrUpdate201Response extends HttpResponse {
    status: "201";
    body: SingletonTrackedResourceOutput;
    headers: RawHttpHeaders & SingletonTrackedResourcesCreateOrUpdate201Headers;
}

export declare interface SingletonTrackedResourcesCreateOrUpdateBodyParam {
    body: SingletonTrackedResource;
}

export declare interface SingletonTrackedResourcesCreateOrUpdateDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare interface SingletonTrackedResourcesCreateOrUpdateLogicalResponse extends HttpResponse {
    status: "200";
    body: SingletonTrackedResourceOutput;
}

export declare type SingletonTrackedResourcesCreateOrUpdateParameters = SingletonTrackedResourcesCreateOrUpdateBodyParam & RequestParameters;

export declare interface SingletonTrackedResourcesGetByResourceGroup {
    get(options?: SingletonTrackedResourcesGetByResourceGroupParameters): StreamableMethod<SingletonTrackedResourcesGetByResourceGroup200Response | SingletonTrackedResourcesGetByResourceGroupDefaultResponse>;
    put(options: SingletonTrackedResourcesCreateOrUpdateParameters): StreamableMethod<SingletonTrackedResourcesCreateOrUpdate200Response | SingletonTrackedResourcesCreateOrUpdate201Response | SingletonTrackedResourcesCreateOrUpdateDefaultResponse>;
    patch(options: SingletonTrackedResourcesUpdateParameters): StreamableMethod<SingletonTrackedResourcesUpdate200Response | SingletonTrackedResourcesUpdateDefaultResponse>;
}

export declare interface SingletonTrackedResourcesGetByResourceGroup200Response extends HttpResponse {
    status: "200";
    body: SingletonTrackedResourceOutput;
}

export declare interface SingletonTrackedResourcesGetByResourceGroupDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare type SingletonTrackedResourcesGetByResourceGroupParameters = RequestParameters;

export declare interface SingletonTrackedResourcesListByResourceGroup {
    get(options?: SingletonTrackedResourcesListByResourceGroupParameters): StreamableMethod<SingletonTrackedResourcesListByResourceGroup200Response | SingletonTrackedResourcesListByResourceGroupDefaultResponse>;
}

export declare interface SingletonTrackedResourcesListByResourceGroup200Response extends HttpResponse {
    status: "200";
    body: SingletonTrackedResourceListResultOutput;
}

export declare interface SingletonTrackedResourcesListByResourceGroupDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare type SingletonTrackedResourcesListByResourceGroupParameters = RequestParameters;

export declare interface SingletonTrackedResourcesUpdate200Response extends HttpResponse {
    status: "200";
    body: SingletonTrackedResourceOutput;
}

export declare interface SingletonTrackedResourcesUpdateBodyParam {
    body: SingletonTrackedResource;
}

export declare interface SingletonTrackedResourcesUpdateDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare type SingletonTrackedResourcesUpdateParameters = SingletonTrackedResourcesUpdateBodyParam & RequestParameters;

export declare interface Sku {
    name: string;
    tier?: SkuTier;
    size?: string;
    family?: string;
    capacity?: number;
}

export declare interface SkuOutput {
    name: string;
    tier?: SkuTierOutput;
    size?: string;
    family?: string;
    capacity?: number;
}

export declare type SkuTier = "Free" | "Basic" | "Standard" | "Premium";

export declare type SkuTierOutput = "Free" | "Basic" | "Standard" | "Premium";

export declare interface SystemData {
    createdBy?: string;
    createdByType?: CreatedByType;
    createdAt?: Date | string;
    lastModifiedBy?: string;
    lastModifiedByType?: CreatedByType;
    lastModifiedAt?: Date | string;
}

export declare interface SystemDataOutput {
    createdBy?: string;
    createdByType?: CreatedByTypeOutput;
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: CreatedByTypeOutput;
    lastModifiedAt?: string;
}

export declare interface TopLevelTrackedResource extends TrackedResource {
    properties?: TopLevelTrackedResourceProperties;
}

export declare interface TopLevelTrackedResourceListResultOutput {
    value: Array<TopLevelTrackedResourceOutput>;
    nextLink?: string;
}

export declare interface TopLevelTrackedResourceOutput extends TrackedResourceOutput {
    properties?: TopLevelTrackedResourcePropertiesOutput;
}

export declare interface TopLevelTrackedResourceProperties {
    description?: string;
}

export declare interface TopLevelTrackedResourcePropertiesOutput {
    readonly provisioningState?: ProvisioningStateOutput;
    description?: string;
}

export declare interface TopLevelTrackedResourcesActionSync {
    post(options: TopLevelTrackedResourcesActionSyncParameters): StreamableMethod<TopLevelTrackedResourcesActionSync204Response | TopLevelTrackedResourcesActionSyncDefaultResponse>;
}

export declare interface TopLevelTrackedResourcesActionSync204Response extends HttpResponse {
    status: "204";
}

export declare interface TopLevelTrackedResourcesActionSyncBodyParam {
    body: NotificationDetails;
}

export declare interface TopLevelTrackedResourcesActionSyncDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare type TopLevelTrackedResourcesActionSyncParameters = TopLevelTrackedResourcesActionSyncBodyParam & RequestParameters;

export declare interface TopLevelTrackedResourcesCreateOrReplace200Response extends HttpResponse {
    status: "200";
    body: TopLevelTrackedResourceOutput;
}

export declare interface TopLevelTrackedResourcesCreateOrReplace201Headers {
    "azure-asyncoperation"?: string;
    "retry-after"?: number;
}

export declare interface TopLevelTrackedResourcesCreateOrReplace201Response extends HttpResponse {
    status: "201";
    body: TopLevelTrackedResourceOutput;
    headers: RawHttpHeaders & TopLevelTrackedResourcesCreateOrReplace201Headers;
}

export declare interface TopLevelTrackedResourcesCreateOrReplaceBodyParam {
    body: TopLevelTrackedResource;
}

export declare interface TopLevelTrackedResourcesCreateOrReplaceDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare interface TopLevelTrackedResourcesCreateOrReplaceLogicalResponse extends HttpResponse {
    status: "200";
    body: TopLevelTrackedResourceOutput;
}

export declare type TopLevelTrackedResourcesCreateOrReplaceParameters = TopLevelTrackedResourcesCreateOrReplaceBodyParam & RequestParameters;

export declare interface TopLevelTrackedResourcesDelete202Headers {
    location?: string;
    "retry-after"?: number;
}

export declare interface TopLevelTrackedResourcesDelete202Response extends HttpResponse {
    status: "202";
    headers: RawHttpHeaders & TopLevelTrackedResourcesDelete202Headers;
}

export declare interface TopLevelTrackedResourcesDelete204Response extends HttpResponse {
    status: "204";
}

export declare interface TopLevelTrackedResourcesDeleteDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare interface TopLevelTrackedResourcesDeleteLogicalResponse extends HttpResponse {
    status: "200";
}

export declare type TopLevelTrackedResourcesDeleteParameters = RequestParameters;

export declare interface TopLevelTrackedResourcesGet {
    get(options?: TopLevelTrackedResourcesGetParameters): StreamableMethod<TopLevelTrackedResourcesGet200Response | TopLevelTrackedResourcesGetDefaultResponse>;
    put(options: TopLevelTrackedResourcesCreateOrReplaceParameters): StreamableMethod<TopLevelTrackedResourcesCreateOrReplace200Response | TopLevelTrackedResourcesCreateOrReplace201Response | TopLevelTrackedResourcesCreateOrReplaceDefaultResponse>;
    patch(options: TopLevelTrackedResourcesUpdateParameters): StreamableMethod<TopLevelTrackedResourcesUpdate200Response | TopLevelTrackedResourcesUpdate202Response | TopLevelTrackedResourcesUpdateDefaultResponse>;
    delete(options?: TopLevelTrackedResourcesDeleteParameters): StreamableMethod<TopLevelTrackedResourcesDelete202Response | TopLevelTrackedResourcesDelete204Response | TopLevelTrackedResourcesDeleteDefaultResponse>;
}

export declare interface TopLevelTrackedResourcesGet200Response extends HttpResponse {
    status: "200";
    body: TopLevelTrackedResourceOutput;
}

export declare interface TopLevelTrackedResourcesGetDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare type TopLevelTrackedResourcesGetParameters = RequestParameters;

export declare interface TopLevelTrackedResourcesListByResourceGroup {
    get(options?: TopLevelTrackedResourcesListByResourceGroupParameters): StreamableMethod<TopLevelTrackedResourcesListByResourceGroup200Response | TopLevelTrackedResourcesListByResourceGroupDefaultResponse>;
}

export declare interface TopLevelTrackedResourcesListByResourceGroup200Response extends HttpResponse {
    status: "200";
    body: TopLevelTrackedResourceListResultOutput;
}

export declare interface TopLevelTrackedResourcesListByResourceGroupDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare type TopLevelTrackedResourcesListByResourceGroupParameters = RequestParameters;

export declare interface TopLevelTrackedResourcesListBySubscription {
    get(options?: TopLevelTrackedResourcesListBySubscriptionParameters): StreamableMethod<TopLevelTrackedResourcesListBySubscription200Response | TopLevelTrackedResourcesListBySubscriptionDefaultResponse>;
}

export declare interface TopLevelTrackedResourcesListBySubscription200Response extends HttpResponse {
    status: "200";
    body: TopLevelTrackedResourceListResultOutput;
}

export declare interface TopLevelTrackedResourcesListBySubscriptionDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare type TopLevelTrackedResourcesListBySubscriptionParameters = RequestParameters;

export declare interface TopLevelTrackedResourcesUpdate200Response extends HttpResponse {
    status: "200";
    body: TopLevelTrackedResourceOutput;
}

export declare interface TopLevelTrackedResourcesUpdate202Headers {
    location?: string;
    "retry-after"?: number;
}

export declare interface TopLevelTrackedResourcesUpdate202Response extends HttpResponse {
    status: "202";
    headers: RawHttpHeaders & TopLevelTrackedResourcesUpdate202Headers;
}

export declare interface TopLevelTrackedResourcesUpdateBodyParam {
    body: TopLevelTrackedResource;
}

export declare interface TopLevelTrackedResourcesUpdateDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare interface TopLevelTrackedResourcesUpdateLogicalResponse extends HttpResponse {
    status: "200";
    body: TopLevelTrackedResourceOutput;
}

export declare type TopLevelTrackedResourcesUpdateParameters = TopLevelTrackedResourcesUpdateBodyParam & RequestParameters;

export declare interface TrackedResource extends Resource {
    tags?: Record<string, string>;
    location: string;
}

export declare interface TrackedResourceOutput extends ResourceOutput {
    tags?: Record<string, string>;
    location: string;
}

export { }
