import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

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

export declare enum AzureClouds {
    AZURE_PUBLIC_CLOUD = "AZURE_PUBLIC_CLOUD",
    AZURE_CHINA_CLOUD = "AZURE_CHINA_CLOUD",
    AZURE_US_GOVERNMENT = "AZURE_US_GOVERNMENT"
}

export declare enum KnownVersions {
    V20231201Preview = "2023-12-01-preview"
}

export declare interface NonResource {
    id?: string;
    name?: string;
    type?: string;
}

export declare class NonResourceClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(subscriptionId: string, options?: NonResourceClientOptionalParams);
    readonly nonResourceOperations: NonResourceOperationsOperations;
}

export declare interface NonResourceClientOptionalParams extends ClientOptions {
    apiVersion?: string;
    cloudSetting?: AzureClouds;
}

export declare interface NonResourceOperationsCreateOptionalParams extends OperationOptions {
}

export declare interface NonResourceOperationsGetOptionalParams extends OperationOptions {
}

export declare interface NonResourceOperationsOperations {
    create: (location: string, parameter: string, body: NonResource, options?: NonResourceOperationsCreateOptionalParams) => Promise<NonResource>;
    get: (location: string, parameter: string, options?: NonResourceOperationsGetOptionalParams) => Promise<NonResource>;
}

export { }
