import type { Client } from '@azure-rest/core-client';
import type { ClientOptions } from '@azure-rest/core-client';
import type { HttpResponse } from '@azure-rest/core-client';
import type { PathUncheckedResponse } from '@azure-rest/core-client';
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

export declare type ActionTypeOutput = string;

export declare type AzureArmMethodSubscriptionIdClient = Client & {
    path: Routes;
};

export declare interface AzureArmMethodSubscriptionIdClientOptions extends ClientOptions {
    apiVersion?: string;
}

export declare interface AzureEntityResource extends Resource {
}

export declare interface AzureEntityResourceOutput extends ResourceOutput {
    readonly etag?: string;
}

declare function createClient({ apiVersion, ...options }?: AzureArmMethodSubscriptionIdClientOptions): AzureArmMethodSubscriptionIdClient;
export default createClient;

export declare type CreatedByType = string;

export declare type CreatedByTypeOutput = string;

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

export declare interface ExtensionResource extends Resource {
}

export declare interface ExtensionResourceOutput extends ResourceOutput {
}

export declare type GetArrayType<T> = T extends Array<infer TData> ? TData : never;

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

export declare function isUnexpected(response: OperationsList200Response | OperationsListDefaultResponse): response is OperationsListDefaultResponse;

export declare function isUnexpected(response: TwoSubscriptionResourcesMethodLevelSubscriptionResource1OperationsGet200Response | TwoSubscriptionResourcesMethodLevelSubscriptionResource1OperationsGetDefaultResponse): response is TwoSubscriptionResourcesMethodLevelSubscriptionResource1OperationsGetDefaultResponse;

export declare function isUnexpected(response: TwoSubscriptionResourcesMethodLevelSubscriptionResource1OperationsPut200Response | TwoSubscriptionResourcesMethodLevelSubscriptionResource1OperationsPut201Response | TwoSubscriptionResourcesMethodLevelSubscriptionResource1OperationsPutDefaultResponse): response is TwoSubscriptionResourcesMethodLevelSubscriptionResource1OperationsPutDefaultResponse;

export declare function isUnexpected(response: TwoSubscriptionResourcesMethodLevelSubscriptionResource1OperationsDelete200Response | TwoSubscriptionResourcesMethodLevelSubscriptionResource1OperationsDelete204Response | TwoSubscriptionResourcesMethodLevelSubscriptionResource1OperationsDeleteDefaultResponse): response is TwoSubscriptionResourcesMethodLevelSubscriptionResource1OperationsDeleteDefaultResponse;

export declare function isUnexpected(response: TwoSubscriptionResourcesMethodLevelSubscriptionResource2OperationsGet200Response | TwoSubscriptionResourcesMethodLevelSubscriptionResource2OperationsGetDefaultResponse): response is TwoSubscriptionResourcesMethodLevelSubscriptionResource2OperationsGetDefaultResponse;

export declare function isUnexpected(response: TwoSubscriptionResourcesMethodLevelSubscriptionResource2OperationsPut200Response | TwoSubscriptionResourcesMethodLevelSubscriptionResource2OperationsPut201Response | TwoSubscriptionResourcesMethodLevelSubscriptionResource2OperationsPutDefaultResponse): response is TwoSubscriptionResourcesMethodLevelSubscriptionResource2OperationsPutDefaultResponse;

export declare function isUnexpected(response: TwoSubscriptionResourcesMethodLevelSubscriptionResource2OperationsDelete200Response | TwoSubscriptionResourcesMethodLevelSubscriptionResource2OperationsDelete204Response | TwoSubscriptionResourcesMethodLevelSubscriptionResource2OperationsDeleteDefaultResponse): response is TwoSubscriptionResourcesMethodLevelSubscriptionResource2OperationsDeleteDefaultResponse;

export declare function isUnexpected(response: MixedSubscriptionPlacementSubscriptionResourceOperationsGet200Response | MixedSubscriptionPlacementSubscriptionResourceOperationsGetDefaultResponse): response is MixedSubscriptionPlacementSubscriptionResourceOperationsGetDefaultResponse;

export declare function isUnexpected(response: MixedSubscriptionPlacementSubscriptionResourceOperationsPut200Response | MixedSubscriptionPlacementSubscriptionResourceOperationsPut201Response | MixedSubscriptionPlacementSubscriptionResourceOperationsPutDefaultResponse): response is MixedSubscriptionPlacementSubscriptionResourceOperationsPutDefaultResponse;

export declare function isUnexpected(response: MixedSubscriptionPlacementSubscriptionResourceOperationsDelete200Response | MixedSubscriptionPlacementSubscriptionResourceOperationsDelete204Response | MixedSubscriptionPlacementSubscriptionResourceOperationsDeleteDefaultResponse): response is MixedSubscriptionPlacementSubscriptionResourceOperationsDeleteDefaultResponse;

export declare function isUnexpected(response: MixedSubscriptionPlacementResourceGroupResourceOperationsGet200Response | MixedSubscriptionPlacementResourceGroupResourceOperationsGetDefaultResponse): response is MixedSubscriptionPlacementResourceGroupResourceOperationsGetDefaultResponse;

export declare function isUnexpected(response: MixedSubscriptionPlacementResourceGroupResourceOperationsPut200Response | MixedSubscriptionPlacementResourceGroupResourceOperationsPut201Response | MixedSubscriptionPlacementResourceGroupResourceOperationsPutDefaultResponse): response is MixedSubscriptionPlacementResourceGroupResourceOperationsPutDefaultResponse;

export declare function isUnexpected(response: MixedSubscriptionPlacementResourceGroupResourceOperationsDelete200Response | MixedSubscriptionPlacementResourceGroupResourceOperationsDelete204Response | MixedSubscriptionPlacementResourceGroupResourceOperationsDeleteDefaultResponse): response is MixedSubscriptionPlacementResourceGroupResourceOperationsDeleteDefaultResponse;

export declare interface MixedSubscriptionPlacementResourceGroupResourceOperationsDelete200Response extends HttpResponse {
    status: "200";
}

export declare interface MixedSubscriptionPlacementResourceGroupResourceOperationsDelete204Response extends HttpResponse {
    status: "204";
}

export declare interface MixedSubscriptionPlacementResourceGroupResourceOperationsDeleteDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare type MixedSubscriptionPlacementResourceGroupResourceOperationsDeleteParameters = RequestParameters;

export declare interface MixedSubscriptionPlacementResourceGroupResourceOperationsGet {
    get(options?: MixedSubscriptionPlacementResourceGroupResourceOperationsGetParameters): StreamableMethod<MixedSubscriptionPlacementResourceGroupResourceOperationsGet200Response | MixedSubscriptionPlacementResourceGroupResourceOperationsGetDefaultResponse>;
    put(options: MixedSubscriptionPlacementResourceGroupResourceOperationsPutParameters): StreamableMethod<MixedSubscriptionPlacementResourceGroupResourceOperationsPut200Response | MixedSubscriptionPlacementResourceGroupResourceOperationsPut201Response | MixedSubscriptionPlacementResourceGroupResourceOperationsPutDefaultResponse>;
    delete(options?: MixedSubscriptionPlacementResourceGroupResourceOperationsDeleteParameters): StreamableMethod<MixedSubscriptionPlacementResourceGroupResourceOperationsDelete200Response | MixedSubscriptionPlacementResourceGroupResourceOperationsDelete204Response | MixedSubscriptionPlacementResourceGroupResourceOperationsDeleteDefaultResponse>;
}

export declare interface MixedSubscriptionPlacementResourceGroupResourceOperationsGet200Response extends HttpResponse {
    status: "200";
    body: ResourceGroupResourceOutput;
}

export declare interface MixedSubscriptionPlacementResourceGroupResourceOperationsGetDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare type MixedSubscriptionPlacementResourceGroupResourceOperationsGetParameters = RequestParameters;

export declare interface MixedSubscriptionPlacementResourceGroupResourceOperationsPut200Response extends HttpResponse {
    status: "200";
    body: ResourceGroupResourceOutput;
}

export declare interface MixedSubscriptionPlacementResourceGroupResourceOperationsPut201Response extends HttpResponse {
    status: "201";
    body: ResourceGroupResourceOutput;
}

export declare interface MixedSubscriptionPlacementResourceGroupResourceOperationsPutBodyParam {
    body: ResourceGroupResource;
}

export declare interface MixedSubscriptionPlacementResourceGroupResourceOperationsPutDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare type MixedSubscriptionPlacementResourceGroupResourceOperationsPutParameters = MixedSubscriptionPlacementResourceGroupResourceOperationsPutBodyParam & RequestParameters;

export declare interface MixedSubscriptionPlacementSubscriptionResourceOperationsDelete200Response extends HttpResponse {
    status: "200";
}

export declare interface MixedSubscriptionPlacementSubscriptionResourceOperationsDelete204Response extends HttpResponse {
    status: "204";
}

export declare interface MixedSubscriptionPlacementSubscriptionResourceOperationsDeleteDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare type MixedSubscriptionPlacementSubscriptionResourceOperationsDeleteParameters = RequestParameters;

export declare interface MixedSubscriptionPlacementSubscriptionResourceOperationsGet {
    get(options?: MixedSubscriptionPlacementSubscriptionResourceOperationsGetParameters): StreamableMethod<MixedSubscriptionPlacementSubscriptionResourceOperationsGet200Response | MixedSubscriptionPlacementSubscriptionResourceOperationsGetDefaultResponse>;
    put(options: MixedSubscriptionPlacementSubscriptionResourceOperationsPutParameters): StreamableMethod<MixedSubscriptionPlacementSubscriptionResourceOperationsPut200Response | MixedSubscriptionPlacementSubscriptionResourceOperationsPut201Response | MixedSubscriptionPlacementSubscriptionResourceOperationsPutDefaultResponse>;
    delete(options?: MixedSubscriptionPlacementSubscriptionResourceOperationsDeleteParameters): StreamableMethod<MixedSubscriptionPlacementSubscriptionResourceOperationsDelete200Response | MixedSubscriptionPlacementSubscriptionResourceOperationsDelete204Response | MixedSubscriptionPlacementSubscriptionResourceOperationsDeleteDefaultResponse>;
}

export declare interface MixedSubscriptionPlacementSubscriptionResourceOperationsGet200Response extends HttpResponse {
    status: "200";
    body: SubscriptionResourceOutput;
}

export declare interface MixedSubscriptionPlacementSubscriptionResourceOperationsGetDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare type MixedSubscriptionPlacementSubscriptionResourceOperationsGetParameters = RequestParameters;

export declare interface MixedSubscriptionPlacementSubscriptionResourceOperationsPut200Response extends HttpResponse {
    status: "200";
    body: SubscriptionResourceOutput;
}

export declare interface MixedSubscriptionPlacementSubscriptionResourceOperationsPut201Response extends HttpResponse {
    status: "201";
    body: SubscriptionResourceOutput;
}

export declare interface MixedSubscriptionPlacementSubscriptionResourceOperationsPutBodyParam {
    body: SubscriptionResource;
}

export declare interface MixedSubscriptionPlacementSubscriptionResourceOperationsPutDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare type MixedSubscriptionPlacementSubscriptionResourceOperationsPutParameters = MixedSubscriptionPlacementSubscriptionResourceOperationsPutBodyParam & RequestParameters;

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

export declare interface OperationsList {
    get(options?: OperationsListParameters): StreamableMethod<OperationsList200Response | OperationsListDefaultResponse>;
}

export declare interface OperationsList200Response extends HttpResponse {
    status: "200";
    body: OperationListResultOutput;
}

export declare interface OperationsListDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare type OperationsListParameters = RequestParameters;

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

export declare interface ResourceGroupResource extends TrackedResource {
    properties?: ResourceGroupResourceProperties;
}

export declare interface ResourceGroupResourceOutput extends TrackedResourceOutput {
    properties?: ResourceGroupResourcePropertiesOutput;
}

export declare interface ResourceGroupResourceProperties {
    resourceGroupSetting?: string;
}

export declare interface ResourceGroupResourcePropertiesOutput {
    readonly provisioningState?: ResourceProvisioningStateOutput;
    resourceGroupSetting?: string;
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

export declare type ResourceProvisioningState = string;

export declare type ResourceProvisioningStateOutput = string;

export declare interface Routes {
    (path: "/providers/Azure.ResourceManager.MethodSubscriptionId/operations"): OperationsList;
    (path: "/subscriptions/{subscriptionId}/providers/Azure.ResourceManager.MethodSubscriptionId/subscriptionResource1s/{subscriptionResource1Name}", subscriptionId: string, subscriptionResource1Name: string): TwoSubscriptionResourcesMethodLevelSubscriptionResource1OperationsGet;
    (path: "/subscriptions/{subscriptionId}/providers/Azure.ResourceManager.MethodSubscriptionId/subscriptionResource2s/{subscriptionResource2Name}", subscriptionId: string, subscriptionResource2Name: string): TwoSubscriptionResourcesMethodLevelSubscriptionResource2OperationsGet;
    (path: "/subscriptions/{subscriptionId}/providers/Azure.ResourceManager.MethodSubscriptionId/subscriptionResources/{subscriptionResourceName}", subscriptionId: string, subscriptionResourceName: string): MixedSubscriptionPlacementSubscriptionResourceOperationsGet;
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.MethodSubscriptionId/resourceGroupResources/{resourceGroupResourceName}", subscriptionId: string, resourceGroupName: string, resourceGroupResourceName: string): MixedSubscriptionPlacementResourceGroupResourceOperationsGet;
}

export declare type Severity = string;

export declare type SeverityOutput = string;

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

export declare interface SubscriptionResource extends ProxyResource {
    properties?: SubscriptionResourceProperties;
}

export declare interface SubscriptionResource1 extends ProxyResource {
    properties?: SubscriptionResource1Properties;
}

export declare interface SubscriptionResource1Output extends ProxyResourceOutput {
    properties?: SubscriptionResource1PropertiesOutput;
}

export declare interface SubscriptionResource1Properties {
    description?: string;
}

export declare interface SubscriptionResource1PropertiesOutput {
    readonly provisioningState?: ResourceProvisioningStateOutput;
    description?: string;
}

export declare interface SubscriptionResource2 extends ProxyResource {
    properties?: SubscriptionResource2Properties;
}

export declare interface SubscriptionResource2Output extends ProxyResourceOutput {
    properties?: SubscriptionResource2PropertiesOutput;
}

export declare interface SubscriptionResource2Properties {
    configValue?: string;
}

export declare interface SubscriptionResource2PropertiesOutput {
    readonly provisioningState?: ResourceProvisioningStateOutput;
    configValue?: string;
}

export declare interface SubscriptionResourceOutput extends ProxyResourceOutput {
    properties?: SubscriptionResourcePropertiesOutput;
}

export declare interface SubscriptionResourceProperties {
    subscriptionSetting?: string;
}

export declare interface SubscriptionResourcePropertiesOutput {
    readonly provisioningState?: ResourceProvisioningStateOutput;
    subscriptionSetting?: string;
}

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

export declare interface TwoSubscriptionResourcesMethodLevelSubscriptionResource1OperationsDelete200Response extends HttpResponse {
    status: "200";
}

export declare interface TwoSubscriptionResourcesMethodLevelSubscriptionResource1OperationsDelete204Response extends HttpResponse {
    status: "204";
}

export declare interface TwoSubscriptionResourcesMethodLevelSubscriptionResource1OperationsDeleteDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare type TwoSubscriptionResourcesMethodLevelSubscriptionResource1OperationsDeleteParameters = RequestParameters;

export declare interface TwoSubscriptionResourcesMethodLevelSubscriptionResource1OperationsGet {
    get(options?: TwoSubscriptionResourcesMethodLevelSubscriptionResource1OperationsGetParameters): StreamableMethod<TwoSubscriptionResourcesMethodLevelSubscriptionResource1OperationsGet200Response | TwoSubscriptionResourcesMethodLevelSubscriptionResource1OperationsGetDefaultResponse>;
    put(options: TwoSubscriptionResourcesMethodLevelSubscriptionResource1OperationsPutParameters): StreamableMethod<TwoSubscriptionResourcesMethodLevelSubscriptionResource1OperationsPut200Response | TwoSubscriptionResourcesMethodLevelSubscriptionResource1OperationsPut201Response | TwoSubscriptionResourcesMethodLevelSubscriptionResource1OperationsPutDefaultResponse>;
    delete(options?: TwoSubscriptionResourcesMethodLevelSubscriptionResource1OperationsDeleteParameters): StreamableMethod<TwoSubscriptionResourcesMethodLevelSubscriptionResource1OperationsDelete200Response | TwoSubscriptionResourcesMethodLevelSubscriptionResource1OperationsDelete204Response | TwoSubscriptionResourcesMethodLevelSubscriptionResource1OperationsDeleteDefaultResponse>;
}

export declare interface TwoSubscriptionResourcesMethodLevelSubscriptionResource1OperationsGet200Response extends HttpResponse {
    status: "200";
    body: SubscriptionResource1Output;
}

export declare interface TwoSubscriptionResourcesMethodLevelSubscriptionResource1OperationsGetDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare type TwoSubscriptionResourcesMethodLevelSubscriptionResource1OperationsGetParameters = RequestParameters;

export declare interface TwoSubscriptionResourcesMethodLevelSubscriptionResource1OperationsPut200Response extends HttpResponse {
    status: "200";
    body: SubscriptionResource1Output;
}

export declare interface TwoSubscriptionResourcesMethodLevelSubscriptionResource1OperationsPut201Response extends HttpResponse {
    status: "201";
    body: SubscriptionResource1Output;
}

export declare interface TwoSubscriptionResourcesMethodLevelSubscriptionResource1OperationsPutBodyParam {
    body: SubscriptionResource1;
}

export declare interface TwoSubscriptionResourcesMethodLevelSubscriptionResource1OperationsPutDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare type TwoSubscriptionResourcesMethodLevelSubscriptionResource1OperationsPutParameters = TwoSubscriptionResourcesMethodLevelSubscriptionResource1OperationsPutBodyParam & RequestParameters;

export declare interface TwoSubscriptionResourcesMethodLevelSubscriptionResource2OperationsDelete200Response extends HttpResponse {
    status: "200";
}

export declare interface TwoSubscriptionResourcesMethodLevelSubscriptionResource2OperationsDelete204Response extends HttpResponse {
    status: "204";
}

export declare interface TwoSubscriptionResourcesMethodLevelSubscriptionResource2OperationsDeleteDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare type TwoSubscriptionResourcesMethodLevelSubscriptionResource2OperationsDeleteParameters = RequestParameters;

export declare interface TwoSubscriptionResourcesMethodLevelSubscriptionResource2OperationsGet {
    get(options?: TwoSubscriptionResourcesMethodLevelSubscriptionResource2OperationsGetParameters): StreamableMethod<TwoSubscriptionResourcesMethodLevelSubscriptionResource2OperationsGet200Response | TwoSubscriptionResourcesMethodLevelSubscriptionResource2OperationsGetDefaultResponse>;
    put(options: TwoSubscriptionResourcesMethodLevelSubscriptionResource2OperationsPutParameters): StreamableMethod<TwoSubscriptionResourcesMethodLevelSubscriptionResource2OperationsPut200Response | TwoSubscriptionResourcesMethodLevelSubscriptionResource2OperationsPut201Response | TwoSubscriptionResourcesMethodLevelSubscriptionResource2OperationsPutDefaultResponse>;
    delete(options?: TwoSubscriptionResourcesMethodLevelSubscriptionResource2OperationsDeleteParameters): StreamableMethod<TwoSubscriptionResourcesMethodLevelSubscriptionResource2OperationsDelete200Response | TwoSubscriptionResourcesMethodLevelSubscriptionResource2OperationsDelete204Response | TwoSubscriptionResourcesMethodLevelSubscriptionResource2OperationsDeleteDefaultResponse>;
}

export declare interface TwoSubscriptionResourcesMethodLevelSubscriptionResource2OperationsGet200Response extends HttpResponse {
    status: "200";
    body: SubscriptionResource2Output;
}

export declare interface TwoSubscriptionResourcesMethodLevelSubscriptionResource2OperationsGetDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare type TwoSubscriptionResourcesMethodLevelSubscriptionResource2OperationsGetParameters = RequestParameters;

export declare interface TwoSubscriptionResourcesMethodLevelSubscriptionResource2OperationsPut200Response extends HttpResponse {
    status: "200";
    body: SubscriptionResource2Output;
}

export declare interface TwoSubscriptionResourcesMethodLevelSubscriptionResource2OperationsPut201Response extends HttpResponse {
    status: "201";
    body: SubscriptionResource2Output;
}

export declare interface TwoSubscriptionResourcesMethodLevelSubscriptionResource2OperationsPutBodyParam {
    body: SubscriptionResource2;
}

export declare interface TwoSubscriptionResourcesMethodLevelSubscriptionResource2OperationsPutDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare type TwoSubscriptionResourcesMethodLevelSubscriptionResource2OperationsPutParameters = TwoSubscriptionResourcesMethodLevelSubscriptionResource2OperationsPutBodyParam & RequestParameters;

export { }
