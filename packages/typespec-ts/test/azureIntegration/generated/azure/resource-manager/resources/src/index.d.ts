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

export declare function getLongRunningPoller<TResult extends TopLevelCreateOrReplaceLogicalResponse | TopLevelCreateOrReplaceDefaultResponse>(client: Client, initialResponse: TopLevelCreateOrReplace200Response | TopLevelCreateOrReplace201Response | TopLevelCreateOrReplaceDefaultResponse, options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;

export declare function getLongRunningPoller<TResult extends TopLevelUpdateLogicalResponse | TopLevelUpdateDefaultResponse>(client: Client, initialResponse: TopLevelUpdate200Response | TopLevelUpdate202Response | TopLevelUpdateDefaultResponse, options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;

export declare function getLongRunningPoller<TResult extends TopLevelDeleteLogicalResponse | TopLevelDeleteDefaultResponse>(client: Client, initialResponse: TopLevelDelete202Response | TopLevelDelete204Response | TopLevelDeleteDefaultResponse, options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;

export declare function getLongRunningPoller<TResult extends NestedCreateOrReplaceLogicalResponse | NestedCreateOrReplaceDefaultResponse>(client: Client, initialResponse: NestedCreateOrReplace200Response | NestedCreateOrReplace201Response | NestedCreateOrReplaceDefaultResponse, options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;

export declare function getLongRunningPoller<TResult extends NestedUpdateLogicalResponse | NestedUpdateDefaultResponse>(client: Client, initialResponse: NestedUpdate200Response | NestedUpdate202Response | NestedUpdateDefaultResponse, options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;

export declare function getLongRunningPoller<TResult extends NestedDeleteLogicalResponse | NestedDeleteDefaultResponse>(client: Client, initialResponse: NestedDelete202Response | NestedDelete204Response | NestedDeleteDefaultResponse, options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;

export declare function getLongRunningPoller<TResult extends SingletonCreateOrUpdateLogicalResponse | SingletonCreateOrUpdateDefaultResponse>(client: Client, initialResponse: SingletonCreateOrUpdate200Response | SingletonCreateOrUpdate201Response | SingletonCreateOrUpdateDefaultResponse, options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;

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

export declare function isUnexpected(response: TopLevelGet200Response | TopLevelGetDefaultResponse): response is TopLevelGetDefaultResponse;

export declare function isUnexpected(response: TopLevelCreateOrReplace200Response | TopLevelCreateOrReplace201Response | TopLevelCreateOrReplaceLogicalResponse | TopLevelCreateOrReplaceDefaultResponse): response is TopLevelCreateOrReplaceDefaultResponse;

export declare function isUnexpected(response: TopLevelUpdate200Response | TopLevelUpdate202Response | TopLevelUpdateLogicalResponse | TopLevelUpdateDefaultResponse): response is TopLevelUpdateDefaultResponse;

export declare function isUnexpected(response: TopLevelDelete202Response | TopLevelDelete204Response | TopLevelDeleteLogicalResponse | TopLevelDeleteDefaultResponse): response is TopLevelDeleteDefaultResponse;

export declare function isUnexpected(response: TopLevelListByResourceGroup200Response | TopLevelListByResourceGroupDefaultResponse): response is TopLevelListByResourceGroupDefaultResponse;

export declare function isUnexpected(response: TopLevelListBySubscription200Response | TopLevelListBySubscriptionDefaultResponse): response is TopLevelListBySubscriptionDefaultResponse;

export declare function isUnexpected(response: TopLevelActionSync204Response | TopLevelActionSyncDefaultResponse): response is TopLevelActionSyncDefaultResponse;

export declare function isUnexpected(response: NestedGet200Response | NestedGetDefaultResponse): response is NestedGetDefaultResponse;

export declare function isUnexpected(response: NestedCreateOrReplace200Response | NestedCreateOrReplace201Response | NestedCreateOrReplaceLogicalResponse | NestedCreateOrReplaceDefaultResponse): response is NestedCreateOrReplaceDefaultResponse;

export declare function isUnexpected(response: NestedUpdate200Response | NestedUpdate202Response | NestedUpdateLogicalResponse | NestedUpdateDefaultResponse): response is NestedUpdateDefaultResponse;

export declare function isUnexpected(response: NestedDelete202Response | NestedDelete204Response | NestedDeleteLogicalResponse | NestedDeleteDefaultResponse): response is NestedDeleteDefaultResponse;

export declare function isUnexpected(response: NestedListByTopLevelTrackedResource200Response | NestedListByTopLevelTrackedResourceDefaultResponse): response is NestedListByTopLevelTrackedResourceDefaultResponse;

export declare function isUnexpected(response: SingletonGetByResourceGroup200Response | SingletonGetByResourceGroupDefaultResponse): response is SingletonGetByResourceGroupDefaultResponse;

export declare function isUnexpected(response: SingletonCreateOrUpdate200Response | SingletonCreateOrUpdate201Response | SingletonCreateOrUpdateLogicalResponse | SingletonCreateOrUpdateDefaultResponse): response is SingletonCreateOrUpdateDefaultResponse;

export declare function isUnexpected(response: SingletonUpdate200Response | SingletonUpdateDefaultResponse): response is SingletonUpdateDefaultResponse;

export declare function isUnexpected(response: SingletonListByResourceGroup200Response | SingletonListByResourceGroupDefaultResponse): response is SingletonListByResourceGroupDefaultResponse;

export declare interface NestedCreateOrReplace200Response extends HttpResponse {
    status: "200";
    body: NestedProxyResourceOutput;
}

export declare interface NestedCreateOrReplace201Headers {
    "azure-asyncoperation"?: string;
    "retry-after"?: number;
}

export declare interface NestedCreateOrReplace201Response extends HttpResponse {
    status: "201";
    body: NestedProxyResourceOutput;
    headers: RawHttpHeaders & NestedCreateOrReplace201Headers;
}

export declare interface NestedCreateOrReplaceBodyParam {
    body: NestedProxyResource;
}

export declare interface NestedCreateOrReplaceDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare interface NestedCreateOrReplaceLogicalResponse extends HttpResponse {
    status: "200";
    body: NestedProxyResourceOutput;
}

export declare type NestedCreateOrReplaceParameters = NestedCreateOrReplaceBodyParam & RequestParameters;

export declare interface NestedDelete202Headers {
    location?: string;
    "retry-after"?: number;
}

export declare interface NestedDelete202Response extends HttpResponse {
    status: "202";
    headers: RawHttpHeaders & NestedDelete202Headers;
}

export declare interface NestedDelete204Response extends HttpResponse {
    status: "204";
}

export declare interface NestedDeleteDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare interface NestedDeleteLogicalResponse extends HttpResponse {
    status: "200";
}

export declare type NestedDeleteParameters = RequestParameters;

export declare interface NestedGet {
    get(options?: NestedGetParameters): StreamableMethod<NestedGet200Response | NestedGetDefaultResponse>;
    put(options: NestedCreateOrReplaceParameters): StreamableMethod<NestedCreateOrReplace200Response | NestedCreateOrReplace201Response | NestedCreateOrReplaceDefaultResponse>;
    patch(options: NestedUpdateParameters): StreamableMethod<NestedUpdate200Response | NestedUpdate202Response | NestedUpdateDefaultResponse>;
    delete(options?: NestedDeleteParameters): StreamableMethod<NestedDelete202Response | NestedDelete204Response | NestedDeleteDefaultResponse>;
}

export declare interface NestedGet200Response extends HttpResponse {
    status: "200";
    body: NestedProxyResourceOutput;
}

export declare interface NestedGetDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare type NestedGetParameters = RequestParameters;

export declare interface NestedListByTopLevelTrackedResource {
    get(options?: NestedListByTopLevelTrackedResourceParameters): StreamableMethod<NestedListByTopLevelTrackedResource200Response | NestedListByTopLevelTrackedResourceDefaultResponse>;
}

export declare interface NestedListByTopLevelTrackedResource200Response extends HttpResponse {
    status: "200";
    body: NestedProxyResourceListResultOutput;
}

export declare interface NestedListByTopLevelTrackedResourceDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare type NestedListByTopLevelTrackedResourceParameters = RequestParameters;

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

export declare interface NestedUpdate200Response extends HttpResponse {
    status: "200";
    body: NestedProxyResourceOutput;
}

export declare interface NestedUpdate202Headers {
    location?: string;
    "retry-after"?: number;
}

export declare interface NestedUpdate202Response extends HttpResponse {
    status: "202";
    headers: RawHttpHeaders & NestedUpdate202Headers;
}

export declare interface NestedUpdateBodyParam {
    body: NestedProxyResource;
}

export declare interface NestedUpdateDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare interface NestedUpdateLogicalResponse extends HttpResponse {
    status: "200";
    body: NestedProxyResourceOutput;
}

export declare type NestedUpdateParameters = NestedUpdateBodyParam & RequestParameters;

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
    identity?: Identity;
    sku?: Sku;
    plan?: Plan;
}

export declare interface ResourceModelWithAllowedPropertySetOutput extends TrackedResourceOutput {
    managedBy?: string;
    kind?: string;
    readonly eTag?: string;
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
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}", subscriptionId: string, resourceGroupName: string, topLevelTrackedResourceName: string): TopLevelGet;
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Resources/topLevelTrackedResources", subscriptionId: string, resourceGroupName: string): TopLevelListByResourceGroup;
    (path: "/subscriptions/{subscriptionId}/providers/Azure.ResourceManager.Resources/topLevelTrackedResources", subscriptionId: string): TopLevelListBySubscription;
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}/actionSync", subscriptionId: string, resourceGroupName: string, topLevelTrackedResourceName: string): TopLevelActionSync;
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}/nestedProxyResources/{nextedProxyResourceName}", subscriptionId: string, resourceGroupName: string, topLevelTrackedResourceName: string, nextedProxyResourceName: string): NestedGet;
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Resources/topLevelTrackedResources/{topLevelTrackedResourceName}/nestedProxyResources", subscriptionId: string, resourceGroupName: string, topLevelTrackedResourceName: string): NestedListByTopLevelTrackedResource;
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Resources/singletonTrackedResources/default", subscriptionId: string, resourceGroupName: string): SingletonGetByResourceGroup;
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.Resources/singletonTrackedResources", subscriptionId: string, resourceGroupName: string): SingletonListByResourceGroup;
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

export declare interface SingletonCreateOrUpdate200Response extends HttpResponse {
    status: "200";
    body: SingletonTrackedResourceOutput;
}

export declare interface SingletonCreateOrUpdate201Headers {
    "azure-asyncoperation"?: string;
    "retry-after"?: number;
}

export declare interface SingletonCreateOrUpdate201Response extends HttpResponse {
    status: "201";
    body: SingletonTrackedResourceOutput;
    headers: RawHttpHeaders & SingletonCreateOrUpdate201Headers;
}

export declare interface SingletonCreateOrUpdateBodyParam {
    body: SingletonTrackedResource;
}

export declare interface SingletonCreateOrUpdateDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare interface SingletonCreateOrUpdateLogicalResponse extends HttpResponse {
    status: "200";
    body: SingletonTrackedResourceOutput;
}

export declare type SingletonCreateOrUpdateParameters = SingletonCreateOrUpdateBodyParam & RequestParameters;

export declare interface SingletonGetByResourceGroup {
    get(options?: SingletonGetByResourceGroupParameters): StreamableMethod<SingletonGetByResourceGroup200Response | SingletonGetByResourceGroupDefaultResponse>;
    put(options: SingletonCreateOrUpdateParameters): StreamableMethod<SingletonCreateOrUpdate200Response | SingletonCreateOrUpdate201Response | SingletonCreateOrUpdateDefaultResponse>;
    patch(options: SingletonUpdateParameters): StreamableMethod<SingletonUpdate200Response | SingletonUpdateDefaultResponse>;
}

export declare interface SingletonGetByResourceGroup200Response extends HttpResponse {
    status: "200";
    body: SingletonTrackedResourceOutput;
}

export declare interface SingletonGetByResourceGroupDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare type SingletonGetByResourceGroupParameters = RequestParameters;

export declare interface SingletonListByResourceGroup {
    get(options?: SingletonListByResourceGroupParameters): StreamableMethod<SingletonListByResourceGroup200Response | SingletonListByResourceGroupDefaultResponse>;
}

export declare interface SingletonListByResourceGroup200Response extends HttpResponse {
    status: "200";
    body: SingletonTrackedResourceListResultOutput;
}

export declare interface SingletonListByResourceGroupDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare type SingletonListByResourceGroupParameters = RequestParameters;

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

export declare interface SingletonUpdate200Response extends HttpResponse {
    status: "200";
    body: SingletonTrackedResourceOutput;
}

export declare interface SingletonUpdateBodyParam {
    body: SingletonTrackedResource;
}

export declare interface SingletonUpdateDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare type SingletonUpdateParameters = SingletonUpdateBodyParam & RequestParameters;

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

export declare interface TopLevelActionSync {
    post(options: TopLevelActionSyncParameters): StreamableMethod<TopLevelActionSync204Response | TopLevelActionSyncDefaultResponse>;
}

export declare interface TopLevelActionSync204Response extends HttpResponse {
    status: "204";
}

export declare interface TopLevelActionSyncBodyParam {
    body: NotificationDetails;
}

export declare interface TopLevelActionSyncDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare type TopLevelActionSyncParameters = TopLevelActionSyncBodyParam & RequestParameters;

export declare interface TopLevelCreateOrReplace200Response extends HttpResponse {
    status: "200";
    body: TopLevelTrackedResourceOutput;
}

export declare interface TopLevelCreateOrReplace201Headers {
    "azure-asyncoperation"?: string;
    "retry-after"?: number;
}

export declare interface TopLevelCreateOrReplace201Response extends HttpResponse {
    status: "201";
    body: TopLevelTrackedResourceOutput;
    headers: RawHttpHeaders & TopLevelCreateOrReplace201Headers;
}

export declare interface TopLevelCreateOrReplaceBodyParam {
    body: TopLevelTrackedResource;
}

export declare interface TopLevelCreateOrReplaceDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare interface TopLevelCreateOrReplaceLogicalResponse extends HttpResponse {
    status: "200";
    body: TopLevelTrackedResourceOutput;
}

export declare type TopLevelCreateOrReplaceParameters = TopLevelCreateOrReplaceBodyParam & RequestParameters;

export declare interface TopLevelDelete202Headers {
    location?: string;
    "retry-after"?: number;
}

export declare interface TopLevelDelete202Response extends HttpResponse {
    status: "202";
    headers: RawHttpHeaders & TopLevelDelete202Headers;
}

export declare interface TopLevelDelete204Response extends HttpResponse {
    status: "204";
}

export declare interface TopLevelDeleteDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare interface TopLevelDeleteLogicalResponse extends HttpResponse {
    status: "200";
}

export declare type TopLevelDeleteParameters = RequestParameters;

export declare interface TopLevelGet {
    get(options?: TopLevelGetParameters): StreamableMethod<TopLevelGet200Response | TopLevelGetDefaultResponse>;
    put(options: TopLevelCreateOrReplaceParameters): StreamableMethod<TopLevelCreateOrReplace200Response | TopLevelCreateOrReplace201Response | TopLevelCreateOrReplaceDefaultResponse>;
    patch(options: TopLevelUpdateParameters): StreamableMethod<TopLevelUpdate200Response | TopLevelUpdate202Response | TopLevelUpdateDefaultResponse>;
    delete(options?: TopLevelDeleteParameters): StreamableMethod<TopLevelDelete202Response | TopLevelDelete204Response | TopLevelDeleteDefaultResponse>;
}

export declare interface TopLevelGet200Response extends HttpResponse {
    status: "200";
    body: TopLevelTrackedResourceOutput;
}

export declare interface TopLevelGetDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare type TopLevelGetParameters = RequestParameters;

export declare interface TopLevelListByResourceGroup {
    get(options?: TopLevelListByResourceGroupParameters): StreamableMethod<TopLevelListByResourceGroup200Response | TopLevelListByResourceGroupDefaultResponse>;
}

export declare interface TopLevelListByResourceGroup200Response extends HttpResponse {
    status: "200";
    body: TopLevelTrackedResourceListResultOutput;
}

export declare interface TopLevelListByResourceGroupDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare type TopLevelListByResourceGroupParameters = RequestParameters;

export declare interface TopLevelListBySubscription {
    get(options?: TopLevelListBySubscriptionParameters): StreamableMethod<TopLevelListBySubscription200Response | TopLevelListBySubscriptionDefaultResponse>;
}

export declare interface TopLevelListBySubscription200Response extends HttpResponse {
    status: "200";
    body: TopLevelTrackedResourceListResultOutput;
}

export declare interface TopLevelListBySubscriptionDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare type TopLevelListBySubscriptionParameters = RequestParameters;

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

export declare interface TopLevelUpdate200Response extends HttpResponse {
    status: "200";
    body: TopLevelTrackedResourceOutput;
}

export declare interface TopLevelUpdate202Headers {
    location?: string;
    "retry-after"?: number;
}

export declare interface TopLevelUpdate202Response extends HttpResponse {
    status: "202";
    headers: RawHttpHeaders & TopLevelUpdate202Headers;
}

export declare interface TopLevelUpdateBodyParam {
    body: TopLevelTrackedResource;
}

export declare interface TopLevelUpdateDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare interface TopLevelUpdateLogicalResponse extends HttpResponse {
    status: "200";
    body: TopLevelTrackedResourceOutput;
}

export declare type TopLevelUpdateParameters = TopLevelUpdateBodyParam & RequestParameters;

export declare interface TrackedResource extends Resource {
    tags?: Record<string, string>;
    location: string;
}

export declare interface TrackedResourceOutput extends ResourceOutput {
    tags?: Record<string, string>;
    location: string;
}

export { }
