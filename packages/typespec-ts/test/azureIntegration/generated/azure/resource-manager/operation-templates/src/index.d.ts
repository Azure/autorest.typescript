import type { AbortSignalLike } from '@azure/abort-controller';
import type { CancelOnProgress } from '@azure/core-lro';
import type { Client } from '@azure-rest/core-client';
import type { ClientOptions } from '@azure-rest/core-client';
import type { CreateHttpPollerOptions } from '@azure/core-lro';
import type { HttpResponse } from '@azure-rest/core-client';
import type { OperationState } from '@azure/core-lro';
import type { PathUncheckedResponse } from '@azure-rest/core-client';
import type { RawHttpHeaders } from '@azure/core-rest-pipeline';
import type { RequestParameters } from '@azure-rest/core-client';
import type { StreamableMethod } from '@azure-rest/core-client';

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

export declare interface ActionRequest {
    actionType?: string;
    parameters?: string;
}

export declare interface ActionResultOutput {
    result: string;
}

export declare type ActionTypeOutput = string;

export declare interface AzureEntityResource extends Resource {
}

export declare interface AzureEntityResourceOutput extends ResourceOutput {
    readonly etag?: string;
}

export declare interface ChangeAllowanceRequest {
    totalAllowed?: number;
    reason?: string;
}

export declare interface ChangeAllowanceResultOutput {
    totalAllowed: number;
    status: string;
}

export declare interface CheckGlobal {
    post(options: CheckGlobalParameters): StreamableMethod<CheckGlobal200Response | CheckGlobalDefaultResponse>;
}

export declare interface CheckGlobal200Response extends HttpResponse {
    status: "200";
    body: CheckNameAvailabilityResponseOutput;
}

export declare interface CheckGlobalBodyParam {
    body: CheckNameAvailabilityRequest;
}

export declare interface CheckGlobalDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare type CheckGlobalParameters = CheckGlobalBodyParam & RequestParameters;

export declare interface CheckLocal {
    post(options: CheckLocalParameters): StreamableMethod<CheckLocal200Response | CheckLocalDefaultResponse>;
}

export declare interface CheckLocal200Response extends HttpResponse {
    status: "200";
    body: CheckNameAvailabilityResponseOutput;
}

export declare interface CheckLocalBodyParam {
    body: CheckNameAvailabilityRequest;
}

export declare interface CheckLocalDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare type CheckLocalParameters = CheckLocalBodyParam & RequestParameters;

export declare type CheckNameAvailabilityReasonOutput = string;

export declare interface CheckNameAvailabilityRequest {
    name?: string;
    type?: string;
}

export declare interface CheckNameAvailabilityResponseOutput {
    nameAvailable?: boolean;
    reason?: CheckNameAvailabilityReasonOutput;
    message?: string;
}

declare function createClient({ apiVersion, ...options }?: OperationTemplatesClientOptions): OperationTemplatesClient;
export default createClient;

export declare type CreatedByType = string;

export declare type CreatedByTypeOutput = string;

export declare interface CreateOrReplace {
    put(options: CreateOrReplaceParameters): StreamableMethod<CreateOrReplace200Response | CreateOrReplace201Response | CreateOrReplaceDefaultResponse>;
    delete(options?: DeleteParameters): StreamableMethod<Delete202Response | Delete204Response | DeleteDefaultResponse>;
}

export declare interface CreateOrReplace200Response extends HttpResponse {
    status: "200";
    body: OrderOutput;
}

export declare interface CreateOrReplace201Headers {
    "azure-asyncoperation"?: string;
    "retry-after"?: number;
}

export declare interface CreateOrReplace201Response extends HttpResponse {
    status: "201";
    body: OrderOutput;
    headers: RawHttpHeaders & CreateOrReplace201Headers;
}

export declare interface CreateOrReplaceBodyParam {
    body: Order;
}

export declare interface CreateOrReplaceDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare interface CreateOrReplaceLogicalResponse extends HttpResponse {
    status: "200";
    body: OrderOutput;
}

export declare type CreateOrReplaceParameters = CreateOrReplaceBodyParam & RequestParameters;

export declare interface Delete202Headers {
    location?: string;
    "retry-after"?: number;
}

export declare interface Delete202Response extends HttpResponse {
    status: "202";
    headers: RawHttpHeaders & Delete202Headers;
}

export declare interface Delete204Response extends HttpResponse {
    status: "204";
}

export declare interface DeleteDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare interface DeleteLogicalResponse extends HttpResponse {
    status: "200";
}

export declare type DeleteParameters = RequestParameters;

export declare interface ErrorAdditionalInfoOutput {
    readonly type?: string;
    readonly info?: any;
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

export declare interface Export {
    post(options: ExportParameters): StreamableMethod<Export200Response | Export202Response | ExportDefaultResponse>;
}

export declare interface Export200Response extends HttpResponse {
    status: "200";
    body: ExportResultOutput;
}

export declare interface Export202Headers {
    "azure-asyncoperation"?: string;
    location?: string;
    "retry-after"?: number;
}

export declare interface Export202Response extends HttpResponse {
    status: "202";
    headers: RawHttpHeaders & Export202Headers;
}

export declare interface ExportBodyParam {
    body: ExportRequest;
}

export declare interface ExportDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare interface ExportLogicalResponse extends HttpResponse {
    status: "200";
    body: ExportResultOutput;
}

export declare type ExportParameters = ExportBodyParam & RequestParameters;

export declare interface ExportRequest {
    format: string;
}

export declare interface ExportResultOutput {
    content: string;
}

export declare interface ExtensionResource extends Resource {
}

export declare interface ExtensionResourceOutput extends ResourceOutput {
}

export declare interface Get {
    get(options?: GetParameters): StreamableMethod<Get200Response | GetDefaultResponse>;
    patch(options?: PatchParameters): StreamableMethod<Patch200Response | PatchDefaultResponse>;
}

export declare interface Get200Response extends HttpResponse {
    status: "200";
    body: WidgetOutput;
}

export declare type GetArrayType<T> = T extends Array<infer TData> ? TData : never;

export declare interface GetDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare function getLongRunningPoller<TResult extends CreateOrReplaceLogicalResponse | CreateOrReplaceDefaultResponse>(client: Client, initialResponse: CreateOrReplace200Response | CreateOrReplace201Response | CreateOrReplaceDefaultResponse, options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;

export declare function getLongRunningPoller<TResult extends DeleteLogicalResponse | DeleteDefaultResponse>(client: Client, initialResponse: Delete202Response | Delete204Response | DeleteDefaultResponse, options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;

export declare function getLongRunningPoller<TResult extends ExportLogicalResponse | ExportDefaultResponse>(client: Client, initialResponse: Export200Response | Export202Response | ExportDefaultResponse, options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;

export declare type GetPage<TPage> = (pageLink: string) => Promise<{
    page: TPage;
    nextPageLink?: string;
}>;

export declare type GetParameters = RequestParameters;

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

export declare function isUnexpected(response: List200Response | ListDefaultResponse): response is ListDefaultResponse;

export declare function isUnexpected(response: CheckGlobal200Response | CheckGlobalDefaultResponse): response is CheckGlobalDefaultResponse;

export declare function isUnexpected(response: CheckLocal200Response | CheckLocalDefaultResponse): response is CheckLocalDefaultResponse;

export declare function isUnexpected(response: CreateOrReplace200Response | CreateOrReplace201Response | CreateOrReplaceLogicalResponse | CreateOrReplaceDefaultResponse): response is CreateOrReplaceDefaultResponse;

export declare function isUnexpected(response: Delete202Response | Delete204Response | DeleteLogicalResponse | DeleteDefaultResponse): response is DeleteDefaultResponse;

export declare function isUnexpected(response: Export200Response | Export202Response | ExportLogicalResponse | ExportDefaultResponse): response is ExportDefaultResponse;

export declare function isUnexpected(response: Get200Response | GetDefaultResponse): response is GetDefaultResponse;

export declare function isUnexpected(response: Patch200Response | PatchDefaultResponse): response is PatchDefaultResponse;

export declare function isUnexpected(response: Post200Response | PostDefaultResponse): response is PostDefaultResponse;

export declare function isUnexpected(response: ProviderPost200Response | ProviderPostDefaultResponse): response is ProviderPostDefaultResponse;

export declare interface List {
    get(options?: ListParameters): StreamableMethod<List200Response | ListDefaultResponse>;
}

export declare interface List200Response extends HttpResponse {
    status: "200";
    body: OperationListResultOutput;
}

export declare interface ListDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare type ListParameters = RequestParameters;

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

export declare interface OperationDisplayOutput {
    readonly provider?: string;
    readonly resource?: string;
    readonly operation?: string;
    readonly description?: string;
}

export declare interface OperationListResultOutput {
    value: Array<OperationOutput>;
    nextLink?: string;
}

export declare interface OperationOutput {
    readonly name?: string;
    readonly isDataAction?: boolean;
    display?: OperationDisplayOutput;
    readonly origin?: OriginOutput;
    readonly actionType?: ActionTypeOutput;
}

export declare type OperationTemplatesClient = Client & {
    path: Routes;
};

export declare interface OperationTemplatesClientOptions extends ClientOptions {
    apiVersion?: string;
}

export declare interface Order extends TrackedResource {
    properties?: OrderProperties;
}

export declare interface OrderOutput extends TrackedResourceOutput {
    properties?: OrderPropertiesOutput;
}

export declare interface OrderProperties {
    productId: string;
    amount: number;
}

export declare interface OrderPropertiesOutput {
    productId: string;
    amount: number;
    readonly provisioningState?: string;
}

export declare type OriginOutput = string;

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

export declare interface Patch200Response extends HttpResponse {
    status: "200";
    body: WidgetOutput;
}

export declare interface PatchBodyParam {
    body?: Widget;
}

export declare interface PatchDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare type PatchParameters = PatchBodyParam & RequestParameters;

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

export declare interface Post {
    post(options?: PostParameters): StreamableMethod<Post200Response | PostDefaultResponse>;
}

export declare interface Post200Response extends HttpResponse {
    status: "200";
    body: ActionResultOutput;
}

export declare interface PostBodyParam {
    body?: ActionRequest;
}

export declare interface PostDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare type PostParameters = PostBodyParam & RequestParameters;

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

export declare interface ProviderPost {
    post(options?: ProviderPostParameters): StreamableMethod<ProviderPost200Response | ProviderPostDefaultResponse>;
}

export declare interface ProviderPost200Response extends HttpResponse {
    status: "200";
    body: ChangeAllowanceResultOutput;
}

export declare interface ProviderPostBodyParam {
    body?: ChangeAllowanceRequest;
}

export declare interface ProviderPostDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare type ProviderPostParameters = ProviderPostBodyParam & RequestParameters;

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
    readonly etag?: string;
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

export declare interface Routes {
    (path: "/providers/Azure.ResourceManager.OperationTemplates/operations"): List;
    (path: "/subscriptions/{subscriptionId}/providers/Azure.ResourceManager.OperationTemplates/checkNameAvailability", subscriptionId: string): CheckGlobal;
    (path: "/subscriptions/{subscriptionId}/providers/Azure.ResourceManager.OperationTemplates/locations/{location}/checkNameAvailability", subscriptionId: string, location: string): CheckLocal;
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.OperationTemplates/orders/{orderName}", subscriptionId: string, resourceGroupName: string, orderName: string): CreateOrReplace;
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.OperationTemplates/orders/{orderName}/export", subscriptionId: string, resourceGroupName: string, orderName: string): Export;
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.OperationTemplates/widgets/{widgetName}", subscriptionId: string, resourceGroupName: string, widgetName: string): Get;
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.OperationTemplates/widgets/{widgetName}/post", subscriptionId: string, resourceGroupName: string, widgetName: string): Post;
    (path: "/subscriptions/{subscriptionId}/providers/Azure.ResourceManager.OperationTemplates/providerPost", subscriptionId: string): ProviderPost;
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

export declare interface TrackedResource extends Resource {
    tags?: Record<string, string>;
    location: string;
}

export declare interface TrackedResourceOutput extends ResourceOutput {
    tags?: Record<string, string>;
    location: string;
}

export declare interface Widget extends TrackedResource {
    properties?: WidgetProperties;
}

export declare interface WidgetOutput extends TrackedResourceOutput {
    properties?: WidgetPropertiesOutput;
}

export declare interface WidgetProperties {
    name?: string;
    description?: string;
}

export declare interface WidgetPropertiesOutput {
    name?: string;
    description?: string;
    readonly provisioningState?: string;
}

export { }
