import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { HttpResponse } from '@azure-rest/core-client';
import { RequestParameters } from '@azure-rest/core-client';
import { StreamableMethod } from '@azure-rest/core-client';

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

declare function createClient({ apiVersion, ...options }?: AzureArmModelsCommonTypesManagedIdentityClientOptions): AzureArmModelsCommonTypesManagedIdentityClient;
export default createClient;

export declare type CreatedByType = string;

export declare type CreatedByTypeOutput = string;

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

export declare type GetParameters = RequestParameters;

export declare interface Identity {
    type?: ResourceIdentityType;
}

export declare interface IdentityOutput {
    readonly principalId?: string;
    readonly tenantId?: string;
    type?: ResourceIdentityTypeOutput;
}

export declare function isUnexpected(response: Get200Response | GetDefaultResponse): response is GetDefaultResponse;

export declare function isUnexpected(response: CreateWithSystemAssigned200Response | CreateWithSystemAssigned201Response | CreateWithSystemAssignedDefaultResponse): response is CreateWithSystemAssignedDefaultResponse;

export declare function isUnexpected(response: UpdateWithUserAssignedAndSystemAssigned200Response | UpdateWithUserAssignedAndSystemAssignedDefaultResponse): response is UpdateWithUserAssignedAndSystemAssignedDefaultResponse;

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
    userAssignedIdentities?: Record<string, UserAssignedIdentity>;
}

export declare interface ManagedServiceIdentityOutput {
    readonly principalId?: string;
    readonly tenantId?: string;
    type: ManagedServiceIdentityTypeOutput;
    userAssignedIdentities?: Record<string, UserAssignedIdentityOutput>;
}

export declare type ManagedServiceIdentityType = string;

export declare type ManagedServiceIdentityTypeOutput = string;

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

export declare interface ProxyResource extends Resource {
}

export declare interface ProxyResourceOutput extends ResourceOutput {
}

export declare interface Resource {
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

export declare interface Routes {
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.CommonProperties/managedIdentityTrackedResources/{managedIdentityTrackedResourceName}", subscriptionId: string, resourceGroupName: string, managedIdentityTrackedResourceName: string): Get;
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
    readonly principalId?: string;
    readonly clientId?: string;
}

export { }
