import type { Client } from '@azure-rest/core-client';
import type { ClientOptions } from '@azure-rest/core-client';
import type { HttpResponse } from '@azure-rest/core-client';
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

export declare interface ApiErrorBaseOutput {
    code?: string;
    target?: string;
    message?: string;
}

export declare interface ApiErrorOutput {
    details?: Array<ApiErrorBaseOutput>;
    innererror?: InnerErrorOutput;
    code?: string;
    target?: string;
    message?: string;
}

export declare type AzureArmModelsCommonTypesManagedIdentityClient = Client & {
    path: Routes;
};

export declare interface AzureArmModelsCommonTypesManagedIdentityClientOptions extends ClientOptions {
    apiVersion?: string;
}

export declare interface AzureEntityResource extends Resource {
}

export declare interface AzureEntityResourceOutput extends ResourceOutput {
    readonly etag?: string;
}

export declare interface CloudErrorOutput {
    error?: ApiErrorOutput;
}

export declare interface ConfidentialResource extends TrackedResource {
    properties?: ConfidentialResourceProperties;
}

export declare interface ConfidentialResourceOutput extends TrackedResourceOutput {
    properties?: ConfidentialResourcePropertiesOutput;
}

export declare interface ConfidentialResourceProperties {
    username: string;
}

export declare interface ConfidentialResourcePropertiesOutput {
    readonly provisioningState: string;
    username: string;
}

declare function createClient({ apiVersion, ...options }?: AzureArmModelsCommonTypesManagedIdentityClientOptions): AzureArmModelsCommonTypesManagedIdentityClient;
export default createClient;

export declare type CreatedByType = string;

export declare type CreatedByTypeOutput = string;

export declare interface CreateForUserDefinedError200Response extends HttpResponse {
    status: "200";
    body: ConfidentialResourceOutput;
}

export declare interface CreateForUserDefinedError201Response extends HttpResponse {
    status: "201";
    body: ConfidentialResourceOutput;
}

export declare interface CreateForUserDefinedErrorBodyParam {
    body: ConfidentialResource;
}

export declare interface CreateForUserDefinedErrorDefaultResponse extends HttpResponse {
    status: string;
    body: CloudErrorOutput;
}

export declare type CreateForUserDefinedErrorParameters = CreateForUserDefinedErrorBodyParam & RequestParameters;

export declare interface CreateWithSystemAssigned200Response extends HttpResponse {
    status: "200";
    body: ManagedIdentityTrackedResourceOutput;
}

export declare interface CreateWithSystemAssigned201Response extends HttpResponse {
    status: "201";
    body: ManagedIdentityTrackedResourceOutput;
}

export declare interface CreateWithSystemAssignedBodyParam {
    body: ManagedIdentityTrackedResource;
}

export declare interface CreateWithSystemAssignedDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare type CreateWithSystemAssignedParameters = CreateWithSystemAssignedBodyParam & RequestParameters;

export declare interface DelegatedResource {
    resourceId?: string;
    tenantId?: string;
    referralResource?: string;
    location?: string;
}

export declare interface DelegatedResourceOutput {
    resourceId?: string;
    tenantId?: string;
    referralResource?: string;
    location?: string;
}

export declare interface DelegatedResources extends Record<string, DelegatedResource> {
}

export declare interface DelegatedResourcesOutput extends Record<string, DelegatedResourceOutput> {
}

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

export declare interface Get {
    get(options?: GetParameters): StreamableMethod<Get200Response | GetDefaultResponse>;
    put(options: CreateWithSystemAssignedParameters): StreamableMethod<CreateWithSystemAssigned200Response | CreateWithSystemAssigned201Response | CreateWithSystemAssignedDefaultResponse>;
    patch(options: UpdateWithUserAssignedAndSystemAssignedParameters): StreamableMethod<UpdateWithUserAssignedAndSystemAssigned200Response | UpdateWithUserAssignedAndSystemAssignedDefaultResponse>;
}

export declare interface Get200Response extends HttpResponse {
    status: "200";
    body: ManagedIdentityTrackedResourceOutput;
}

export declare interface GetDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare interface GetForPredefinedError {
    get(options?: GetForPredefinedErrorParameters): StreamableMethod<GetForPredefinedError200Response | GetForPredefinedErrorDefaultResponse>;
    put(options: CreateForUserDefinedErrorParameters): StreamableMethod<CreateForUserDefinedError200Response | CreateForUserDefinedError201Response | CreateForUserDefinedErrorDefaultResponse>;
}

export declare interface GetForPredefinedError200Response extends HttpResponse {
    status: "200";
    body: ConfidentialResourceOutput;
}

export declare interface GetForPredefinedErrorDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare type GetForPredefinedErrorParameters = RequestParameters;

export declare type GetParameters = RequestParameters;

export declare interface InnerErrorOutput {
    exceptiontype?: string;
    errordetail?: string;
}

export declare type IssueType = string;

export declare type IssueTypeOutput = string;

export declare function isUnexpected(response: Get200Response | GetDefaultResponse): response is GetDefaultResponse;

export declare function isUnexpected(response: CreateWithSystemAssigned200Response | CreateWithSystemAssigned201Response | CreateWithSystemAssignedDefaultResponse): response is CreateWithSystemAssignedDefaultResponse;

export declare function isUnexpected(response: UpdateWithUserAssignedAndSystemAssigned200Response | UpdateWithUserAssignedAndSystemAssignedDefaultResponse): response is UpdateWithUserAssignedAndSystemAssignedDefaultResponse;

export declare function isUnexpected(response: GetForPredefinedError200Response | GetForPredefinedErrorDefaultResponse): response is GetForPredefinedErrorDefaultResponse;

export declare function isUnexpected(response: CreateForUserDefinedError200Response | CreateForUserDefinedError201Response | CreateForUserDefinedErrorDefaultResponse): response is CreateForUserDefinedErrorDefaultResponse;

export declare interface ManagedIdentityTrackedResource extends TrackedResource {
    properties?: ManagedIdentityTrackedResourceProperties;
    identity?: ManagedServiceIdentity;
}

export declare interface ManagedIdentityTrackedResourceOutput extends TrackedResourceOutput {
    properties?: ManagedIdentityTrackedResourcePropertiesOutput;
    identity?: ManagedServiceIdentityOutput;
}

export declare interface ManagedIdentityTrackedResourceProperties {
}

export declare interface ManagedIdentityTrackedResourcePropertiesOutput {
    readonly provisioningState: string;
}

export declare interface ManagedServiceIdentity {
    type: ManagedServiceIdentityType;
    userAssignedIdentities?: Record<string, UserAssignedIdentity | null>;
}

export declare interface ManagedServiceIdentityOutput {
    readonly principalId?: string;
    readonly tenantId?: string;
    type: ManagedServiceIdentityTypeOutput;
    userAssignedIdentities?: Record<string, UserAssignedIdentityOutput | null>;
}

export declare type ManagedServiceIdentityType = string;

export declare type ManagedServiceIdentityTypeOutput = string;

export declare interface ManagedServiceIdentityWithDelegation extends ManagedServiceIdentity {
    delegatedResources?: DelegatedResources;
}

export declare interface ManagedServiceIdentityWithDelegationOutput extends ManagedServiceIdentityOutput {
    delegatedResources?: DelegatedResourcesOutput;
}

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

export declare interface ResourceModelWithAllowedPropertySet extends TrackedResource {
    managedBy?: string;
    kind?: string;
    identity?: ManagedServiceIdentity;
    sku?: Sku;
    plan?: Plan;
}

export declare interface ResourceModelWithAllowedPropertySetOutput extends TrackedResourceOutput {
    managedBy?: string;
    kind?: string;
    readonly etag?: string;
    identity?: ManagedServiceIdentityOutput;
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
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.CommonProperties/managedIdentityTrackedResources/{managedIdentityTrackedResourceName}", subscriptionId: string, resourceGroupName: string, managedIdentityTrackedResourceName: string): Get;
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.CommonProperties/confidentialResources/{confidentialResourceName}", subscriptionId: string, resourceGroupName: string, confidentialResourceName: string): GetForPredefinedError;
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

export declare interface UpdateWithUserAssignedAndSystemAssigned200Response extends HttpResponse {
    status: "200";
    body: ManagedIdentityTrackedResourceOutput;
}

export declare interface UpdateWithUserAssignedAndSystemAssignedBodyParam {
    body: ManagedIdentityTrackedResource;
}

export declare interface UpdateWithUserAssignedAndSystemAssignedDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare type UpdateWithUserAssignedAndSystemAssignedParameters = UpdateWithUserAssignedAndSystemAssignedBodyParam & RequestParameters;

export declare interface UserAssignedIdentity {
}

export declare interface UserAssignedIdentityOutput {
    readonly clientId?: string;
    readonly principalId?: string;
}

export { }
