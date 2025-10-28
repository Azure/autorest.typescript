import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare interface ApiError {
    details?: ApiErrorBase[];
    innererror?: InnerError;
    code?: string;
    target?: string;
    message?: string;
}

export declare interface ApiErrorBase {
    code?: string;
    target?: string;
    message?: string;
}

export declare enum AzureClouds {
    AZURE_PUBLIC_CLOUD = "AZURE_PUBLIC_CLOUD",
    AZURE_CHINA_CLOUD = "AZURE_CHINA_CLOUD",
    AZURE_US_GOVERNMENT = "AZURE_US_GOVERNMENT"
}

export declare type AzureSupportedClouds = `${AzureClouds}`;

export declare interface CloudError {
    error?: ApiError;
}

export declare class CommonPropertiesClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(subscriptionId: string, options?: CommonPropertiesClientOptionalParams);
    createForUserDefinedError(resourceGroupName: string, confidentialResourceName: string, resource: ConfidentialResource, options?: CreateForUserDefinedErrorOptionalParams): Promise<ConfidentialResource>;
    getForPredefinedError(resourceGroupName: string, confidentialResourceName: string, options?: GetForPredefinedErrorOptionalParams): Promise<ConfidentialResource>;
    updateWithUserAssignedAndSystemAssigned(resourceGroupName: string, managedIdentityTrackedResourceName: string, properties: ManagedIdentityTrackedResource, options?: UpdateWithUserAssignedAndSystemAssignedOptionalParams): Promise<ManagedIdentityTrackedResource>;
    createWithSystemAssigned(resourceGroupName: string, managedIdentityTrackedResourceName: string, resource: ManagedIdentityTrackedResource, options?: CreateWithSystemAssignedOptionalParams): Promise<ManagedIdentityTrackedResource>;
    get(resourceGroupName: string, managedIdentityTrackedResourceName: string, options?: GetOptionalParams): Promise<ManagedIdentityTrackedResource>;
}

export declare interface CommonPropertiesClientOptionalParams extends ClientOptions {
    apiVersion?: string;
    cloudSetting?: AzureSupportedClouds;
}

export declare interface ConfidentialResource extends TrackedResource {
    properties?: ConfidentialResourceProperties;
}

export declare interface ConfidentialResourceProperties {
    readonly provisioningState: string;
    username: string;
}

export declare type CreatedByType = string;

export declare interface CreateForUserDefinedErrorOptionalParams extends OperationOptions {
}

export declare interface CreateWithSystemAssignedOptionalParams extends OperationOptions {
}

export declare interface ErrorAdditionalInfo {
    readonly type?: string;
    readonly info?: any;
}

export declare interface ErrorDetail {
    readonly code?: string;
    readonly message?: string;
    readonly target?: string;
    readonly details?: ErrorDetail[];
    readonly additionalInfo?: ErrorAdditionalInfo[];
}

export declare interface ErrorResponse {
    error?: ErrorDetail;
}

export declare interface GetForPredefinedErrorOptionalParams extends OperationOptions {
}

export declare interface GetOptionalParams extends OperationOptions {
}

export declare interface InnerError {
    exceptiontype?: string;
    errordetail?: string;
}

export declare enum KnownCreatedByType {
    User = "User",
    Application = "Application",
    ManagedIdentity = "ManagedIdentity",
    Key = "Key"
}

export declare enum KnownManagedServiceIdentityType {
    None = "None",
    SystemAssigned = "SystemAssigned",
    UserAssigned = "UserAssigned",
    SystemAssignedUserAssigned = "SystemAssigned,UserAssigned"
}

export declare enum KnownVersions {
    V20231201Preview = "2023-12-01-preview"
}

export declare interface ManagedIdentityTrackedResource extends TrackedResource {
    properties?: ManagedIdentityTrackedResourceProperties;
    identity?: ManagedServiceIdentity;
}

export declare interface ManagedIdentityTrackedResourceProperties {
    readonly provisioningState: string;
}

export declare interface ManagedServiceIdentity {
    readonly principalId?: string;
    readonly tenantId?: string;
    type: ManagedServiceIdentityType;
    userAssignedIdentities?: Record<string, UserAssignedIdentity>;
}

export declare type ManagedServiceIdentityType = string;

export declare interface Resource {
    readonly id?: string;
    readonly name?: string;
    readonly type?: string;
    readonly systemData?: SystemData;
}

export declare interface SystemData {
    createdBy?: string;
    createdByType?: CreatedByType;
    createdAt?: Date;
    lastModifiedBy?: string;
    lastModifiedByType?: CreatedByType;
    lastModifiedAt?: Date;
}

export declare interface TrackedResource extends Resource {
    tags?: Record<string, string>;
    location: string;
}

export declare interface UpdateWithUserAssignedAndSystemAssignedOptionalParams extends OperationOptions {
}

export declare interface UserAssignedIdentity {
    readonly principalId?: string;
    readonly clientId?: string;
}

export { }
