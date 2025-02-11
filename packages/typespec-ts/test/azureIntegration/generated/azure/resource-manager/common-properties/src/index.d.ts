import type { Client } from '@azure-rest/core-client';
import type { ClientOptions } from '@azure-rest/core-client';
import type { HttpResponse } from '@azure-rest/core-client';
import type { RequestParameters } from '@azure-rest/core-client';
import type { StreamableMethod } from '@azure-rest/core-client';

export declare type AzureArmModelsCommonTypesManagedIdentityClient = Client & {
    path: Routes;
};

export declare interface AzureArmModelsCommonTypesManagedIdentityClientOptions extends ClientOptions {
    apiVersion?: string;
}

export declare interface AzureResourceManagerCommonTypesAzureEntityResource extends AzureResourceManagerCommonTypesResource {
}

export declare interface AzureResourceManagerCommonTypesAzureEntityResourceOutput extends AzureResourceManagerCommonTypesResourceOutput {
    readonly etag?: string;
}

export declare interface AzureResourceManagerCommonTypesErrorAdditionalInfoOutput {
    readonly type?: string;
    readonly info?: Record<string, any>;
}

export declare interface AzureResourceManagerCommonTypesErrorDetailOutput {
    readonly code?: string;
    readonly message?: string;
    readonly target?: string;
    readonly details?: Array<AzureResourceManagerCommonTypesErrorDetailOutput>;
    readonly additionalInfo?: Array<AzureResourceManagerCommonTypesErrorAdditionalInfoOutput>;
}

export declare interface AzureResourceManagerCommonTypesErrorResponseOutput {
    error?: AzureResourceManagerCommonTypesErrorDetailOutput;
}

export declare interface AzureResourceManagerCommonTypesExtensionResource extends AzureResourceManagerCommonTypesResource {
}

export declare interface AzureResourceManagerCommonTypesExtensionResourceOutput extends AzureResourceManagerCommonTypesResourceOutput {
}

export declare interface AzureResourceManagerCommonTypesIdentity {
    type?: ResourceIdentityType;
}

export declare interface AzureResourceManagerCommonTypesIdentityOutput {
    readonly principalId?: string;
    readonly tenantId?: string;
    type?: ResourceIdentityTypeOutput;
}

export declare interface AzureResourceManagerCommonTypesManagedServiceIdentity {
    type: ManagedServiceIdentityType;
    userAssignedIdentities?: Record<string, AzureResourceManagerCommonTypesUserAssignedIdentity>;
}

export declare interface AzureResourceManagerCommonTypesManagedServiceIdentityOutput {
    readonly principalId?: string;
    readonly tenantId?: string;
    type: ManagedServiceIdentityTypeOutput;
    userAssignedIdentities?: Record<string, AzureResourceManagerCommonTypesUserAssignedIdentityOutput>;
}

export declare interface AzureResourceManagerCommonTypesPlan {
    name: string;
    publisher: string;
    product: string;
    promotionCode?: string;
    version?: string;
}

export declare interface AzureResourceManagerCommonTypesPlanOutput {
    name: string;
    publisher: string;
    product: string;
    promotionCode?: string;
    version?: string;
}

export declare interface AzureResourceManagerCommonTypesPrivateEndpoint {
}

export declare interface AzureResourceManagerCommonTypesPrivateEndpointConnection extends AzureResourceManagerCommonTypesResource {
    properties?: AzureResourceManagerCommonTypesPrivateEndpointConnectionProperties;
}

export declare interface AzureResourceManagerCommonTypesPrivateEndpointConnectionOutput extends AzureResourceManagerCommonTypesResourceOutput {
    properties?: AzureResourceManagerCommonTypesPrivateEndpointConnectionPropertiesOutput;
}

export declare interface AzureResourceManagerCommonTypesPrivateEndpointConnectionProperties {
    privateEndpoint?: AzureResourceManagerCommonTypesPrivateEndpoint;
    privateLinkServiceConnectionState: AzureResourceManagerCommonTypesPrivateLinkServiceConnectionState;
}

export declare interface AzureResourceManagerCommonTypesPrivateEndpointConnectionPropertiesOutput {
    privateEndpoint?: AzureResourceManagerCommonTypesPrivateEndpointOutput;
    privateLinkServiceConnectionState: AzureResourceManagerCommonTypesPrivateLinkServiceConnectionStateOutput;
    readonly provisioningState?: PrivateEndpointConnectionProvisioningStateOutput;
}

export declare interface AzureResourceManagerCommonTypesPrivateEndpointOutput {
    readonly id?: string;
}

export declare interface AzureResourceManagerCommonTypesPrivateLinkResource extends AzureResourceManagerCommonTypesResource {
    properties?: AzureResourceManagerCommonTypesPrivateLinkResourceProperties;
}

export declare interface AzureResourceManagerCommonTypesPrivateLinkResourceOutput extends AzureResourceManagerCommonTypesResourceOutput {
    properties?: AzureResourceManagerCommonTypesPrivateLinkResourcePropertiesOutput;
}

export declare interface AzureResourceManagerCommonTypesPrivateLinkResourceProperties {
    requiredZoneNames?: string[];
}

export declare interface AzureResourceManagerCommonTypesPrivateLinkResourcePropertiesOutput {
    readonly groupId?: string;
    readonly requiredMembers?: string[];
    requiredZoneNames?: string[];
}

export declare interface AzureResourceManagerCommonTypesPrivateLinkServiceConnectionState {
    status?: PrivateEndpointServiceConnectionStatus;
    description?: string;
    actionsRequired?: string;
}

export declare interface AzureResourceManagerCommonTypesPrivateLinkServiceConnectionStateOutput {
    status?: PrivateEndpointServiceConnectionStatusOutput;
    description?: string;
    actionsRequired?: string;
}

export declare interface AzureResourceManagerCommonTypesProxyResource extends AzureResourceManagerCommonTypesResource {
}

export declare interface AzureResourceManagerCommonTypesProxyResourceOutput extends AzureResourceManagerCommonTypesResourceOutput {
}

export declare interface AzureResourceManagerCommonTypesResource {
}

export declare interface AzureResourceManagerCommonTypesResourceModelWithAllowedPropertySet extends AzureResourceManagerCommonTypesTrackedResource {
    managedBy?: string;
    kind?: string;
    identity?: AzureResourceManagerCommonTypesIdentity;
    sku?: AzureResourceManagerCommonTypesSku;
    plan?: AzureResourceManagerCommonTypesPlan;
}

export declare interface AzureResourceManagerCommonTypesResourceModelWithAllowedPropertySetOutput extends AzureResourceManagerCommonTypesTrackedResourceOutput {
    managedBy?: string;
    kind?: string;
    readonly etag?: string;
    identity?: AzureResourceManagerCommonTypesIdentityOutput;
    sku?: AzureResourceManagerCommonTypesSkuOutput;
    plan?: AzureResourceManagerCommonTypesPlanOutput;
}

export declare interface AzureResourceManagerCommonTypesResourceOutput {
    readonly id?: string;
    readonly name?: string;
    readonly type?: string;
    readonly systemData?: AzureResourceManagerCommonTypesSystemDataOutput;
}

export declare interface AzureResourceManagerCommonTypesSku {
    name: string;
    tier?: SkuTier;
    size?: string;
    family?: string;
    capacity?: number;
}

export declare interface AzureResourceManagerCommonTypesSkuOutput {
    name: string;
    tier?: SkuTierOutput;
    size?: string;
    family?: string;
    capacity?: number;
}

export declare interface AzureResourceManagerCommonTypesSystemData {
    createdBy?: string;
    createdByType?: CreatedByType;
    createdAt?: Date | string;
    lastModifiedBy?: string;
    lastModifiedByType?: CreatedByType;
    lastModifiedAt?: Date | string;
}

export declare interface AzureResourceManagerCommonTypesSystemDataOutput {
    createdBy?: string;
    createdByType?: CreatedByTypeOutput;
    createdAt?: string;
    lastModifiedBy?: string;
    lastModifiedByType?: CreatedByTypeOutput;
    lastModifiedAt?: string;
}

export declare interface AzureResourceManagerCommonTypesTrackedResource extends AzureResourceManagerCommonTypesResource {
    tags?: Record<string, string>;
    location: string;
}

export declare interface AzureResourceManagerCommonTypesTrackedResourceOutput extends AzureResourceManagerCommonTypesResourceOutput {
    tags?: Record<string, string>;
    location: string;
}

export declare interface AzureResourceManagerCommonTypesUserAssignedIdentity {
}

export declare interface AzureResourceManagerCommonTypesUserAssignedIdentityOutput {
    readonly clientId?: string;
    readonly principalId?: string;
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
    body: AzureResourceManagerCommonTypesErrorResponseOutput;
}

export declare type CreateWithSystemAssignedParameters = CreateWithSystemAssignedBodyParam & RequestParameters;

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
    body: AzureResourceManagerCommonTypesErrorResponseOutput;
}

export declare type GetParameters = RequestParameters;

export declare function isUnexpected(response: Get200Response | GetDefaultResponse): response is GetDefaultResponse;

export declare function isUnexpected(response: CreateWithSystemAssigned200Response | CreateWithSystemAssigned201Response | CreateWithSystemAssignedDefaultResponse): response is CreateWithSystemAssignedDefaultResponse;

export declare function isUnexpected(response: UpdateWithUserAssignedAndSystemAssigned200Response | UpdateWithUserAssignedAndSystemAssignedDefaultResponse): response is UpdateWithUserAssignedAndSystemAssignedDefaultResponse;

export declare interface ManagedIdentityTrackedResource extends AzureResourceManagerCommonTypesTrackedResource {
    properties?: ManagedIdentityTrackedResourceProperties;
    identity?: AzureResourceManagerCommonTypesManagedServiceIdentity;
}

export declare interface ManagedIdentityTrackedResourceOutput extends AzureResourceManagerCommonTypesTrackedResourceOutput {
    properties?: ManagedIdentityTrackedResourcePropertiesOutput;
    identity?: AzureResourceManagerCommonTypesManagedServiceIdentityOutput;
}

export declare interface ManagedIdentityTrackedResourceProperties {
}

export declare interface ManagedIdentityTrackedResourcePropertiesOutput {
    readonly provisioningState: string;
}

export declare type ManagedServiceIdentityType = string;

export declare type ManagedServiceIdentityTypeOutput = string;

export declare type PrivateEndpointConnectionProvisioningState = string;

export declare type PrivateEndpointConnectionProvisioningStateOutput = string;

export declare type PrivateEndpointServiceConnectionStatus = string;

export declare type PrivateEndpointServiceConnectionStatusOutput = string;

export declare type ResourceIdentityType = "SystemAssigned";

export declare type ResourceIdentityTypeOutput = "SystemAssigned";

export declare interface Routes {
    (path: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Azure.ResourceManager.CommonProperties/managedIdentityTrackedResources/{managedIdentityTrackedResourceName}", subscriptionId: string, resourceGroupName: string, managedIdentityTrackedResourceName: string): Get;
}

export declare type SkuTier = "Free" | "Basic" | "Standard" | "Premium";

export declare type SkuTierOutput = "Free" | "Basic" | "Standard" | "Premium";

export declare interface UpdateWithUserAssignedAndSystemAssigned200Response extends HttpResponse {
    status: "200";
    body: ManagedIdentityTrackedResourceOutput;
}

export declare interface UpdateWithUserAssignedAndSystemAssignedBodyParam {
    body: ManagedIdentityTrackedResource;
}

export declare interface UpdateWithUserAssignedAndSystemAssignedDefaultResponse extends HttpResponse {
    status: string;
    body: AzureResourceManagerCommonTypesErrorResponseOutput;
}

export declare type UpdateWithUserAssignedAndSystemAssignedParameters = UpdateWithUserAssignedAndSystemAssignedBodyParam & RequestParameters;

export { }
