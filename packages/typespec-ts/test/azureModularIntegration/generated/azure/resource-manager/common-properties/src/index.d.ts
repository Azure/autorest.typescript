import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare class CommonPropertiesClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(subscriptionId: string, options?: CommonPropertiesClientOptionalParams);
    updateWithUserAssignedAndSystemAssigned(resourceGroupName: string, managedIdentityTrackedResourceName: string, properties: ResourceManagerCommonPropertiesManagedIdentityTrackedResource, options?: UpdateWithUserAssignedAndSystemAssignedOptionalParams): Promise<ResourceManagerCommonPropertiesManagedIdentityTrackedResource>;
    createWithSystemAssigned(resourceGroupName: string, managedIdentityTrackedResourceName: string, resource: ResourceManagerCommonPropertiesManagedIdentityTrackedResource, options?: CreateWithSystemAssignedOptionalParams): Promise<ResourceManagerCommonPropertiesManagedIdentityTrackedResource>;
    get(resourceGroupName: string, managedIdentityTrackedResourceName: string, options?: GetOptionalParams): Promise<ResourceManagerCommonPropertiesManagedIdentityTrackedResource>;
}

export declare interface CommonPropertiesClientOptionalParams extends ClientOptions {
    apiVersion?: string;
}

export declare interface CreateWithSystemAssignedOptionalParams extends OperationOptions {
}

export declare interface GetOptionalParams extends OperationOptions {
}

export declare enum KnownResourceManagerCommonPropertiesVersions {
    v2023_12_01_preview = "2023-12-01-preview"
}

export declare enum KnownResourceManagerCommonTypescreatedByType {
    User = "User",
    Application = "Application",
    ManagedIdentity = "ManagedIdentity",
    Key = "Key"
}

export declare enum KnownResourceManagerCommonTypesManagedServiceIdentityType {
    None = "None",
    SystemAssigned = "SystemAssigned",
    UserAssigned = "UserAssigned",
    "SystemAssigned,UserAssigned" = "SystemAssigned,UserAssigned"
}

export declare interface ResourceManagerCommonPropertiesManagedIdentityTrackedResource extends ResourceManagerCommonTypesTrackedResource {
    properties?: ResourceManagerCommonPropertiesManagedIdentityTrackedResourceProperties;
    identity?: ResourceManagerCommonTypesManagedServiceIdentity;
}

export declare interface ResourceManagerCommonPropertiesManagedIdentityTrackedResourceProperties {
    readonly provisioningState: string;
}

export declare type ResourceManagerCommonTypescreatedByType = string;

export declare interface ResourceManagerCommonTypesErrorAdditionalInfo {
    readonly type?: string;
    readonly info?: Record<string, any>;
}

export declare interface ResourceManagerCommonTypesErrorDetail {
    readonly code?: string;
    readonly message?: string;
    readonly target?: string;
    readonly details?: ResourceManagerCommonTypesErrorDetail[];
    readonly additionalInfo?: ResourceManagerCommonTypesErrorAdditionalInfo[];
}

export declare interface ResourceManagerCommonTypesErrorResponse {
    error?: ResourceManagerCommonTypesErrorDetail;
}

export declare interface ResourceManagerCommonTypesManagedServiceIdentity {
    readonly principalId?: string;
    readonly tenantId?: string;
    type: ResourceManagerCommonTypesManagedServiceIdentityType;
    userAssignedIdentities?: Record<string, ResourceManagerCommonTypesUserAssignedIdentity>;
}

export declare type ResourceManagerCommonTypesManagedServiceIdentityType = string;

export declare interface ResourceManagerCommonTypesResource {
    readonly id?: string;
    readonly name?: string;
    readonly type?: string;
    readonly systemData?: ResourceManagerCommonTypesSystemData;
}

export declare interface ResourceManagerCommonTypesSystemData {
    createdBy?: string;
    createdByType?: ResourceManagerCommonTypescreatedByType;
    createdAt?: Date;
    lastModifiedBy?: string;
    lastModifiedByType?: ResourceManagerCommonTypescreatedByType;
    lastModifiedAt?: Date;
}

export declare interface ResourceManagerCommonTypesTrackedResource extends ResourceManagerCommonTypesResource {
    tags?: Record<string, string>;
    location: string;
}

export declare interface ResourceManagerCommonTypesUserAssignedIdentity {
    readonly clientId?: string;
    readonly principalId?: string;
}

export declare interface UpdateWithUserAssignedAndSystemAssignedOptionalParams extends OperationOptions {
}

export { }
