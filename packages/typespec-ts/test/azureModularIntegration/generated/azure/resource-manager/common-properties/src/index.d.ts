import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare class CommonPropertiesClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(subscriptionId: string, options?: CommonPropertiesClientOptionalParams);
    updateWithUserAssignedAndSystemAssigned(resourceGroupName: string, managedIdentityTrackedResourceName: string, properties: ManagedIdentityTrackedResource, options?: UpdateWithUserAssignedAndSystemAssignedOptionalParams): Promise<ManagedIdentityTrackedResource>;
    createWithSystemAssigned(resourceGroupName: string, managedIdentityTrackedResourceName: string, resource: ManagedIdentityTrackedResource, options?: CreateWithSystemAssignedOptionalParams): Promise<ManagedIdentityTrackedResource>;
    get(resourceGroupName: string, managedIdentityTrackedResourceName: string, options?: GetOptionalParams): Promise<ManagedIdentityTrackedResource>;
}

export declare interface CommonPropertiesClientOptionalParams extends ClientOptions {
    apiVersion?: string;
}

declare type CreatedByType = string;

export declare interface CreateWithSystemAssignedOptionalParams extends OperationOptions {
}

export declare interface GetOptionalParams extends OperationOptions {
}

declare interface ManagedIdentityTrackedResource extends TrackedResource {
    properties?: ManagedIdentityTrackedResourceProperties;
    identity?: ManagedServiceIdentity;
}

declare interface ManagedIdentityTrackedResourceProperties {
    readonly provisioningState: string;
}

declare interface ManagedServiceIdentity {
    readonly principalId?: string;
    readonly tenantId?: string;
    type: ManagedServiceIdentityType;
    userAssignedIdentities?: Record<string, UserAssignedIdentity>;
}

declare type ManagedServiceIdentityType = string;

declare interface Resource {
    readonly id?: string;
    readonly name?: string;
    readonly type?: string;
    readonly systemData?: SystemData;
}

declare interface SystemData {
    createdBy?: string;
    createdByType?: CreatedByType;
    createdAt?: Date;
    lastModifiedBy?: string;
    lastModifiedByType?: CreatedByType;
    lastModifiedAt?: Date;
}

declare interface TrackedResource extends Resource {
    tags?: Record<string, string>;
    location: string;
}

export declare interface UpdateWithUserAssignedAndSystemAssignedOptionalParams extends OperationOptions {
}

declare interface UserAssignedIdentity {
    readonly principalId?: string;
    readonly clientId?: string;
}

export { }
