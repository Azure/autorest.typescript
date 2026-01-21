import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare interface BlobProperties {
    name: string;
    size: number;
    contentType: string;
    createdOn: Date;
}

export declare interface DeleteStandaloneOptionalParams extends OperationOptions {
}

export declare interface GetStandaloneOptionalParams extends OperationOptions {
}

export declare class IndividuallyNestedWithHeaderClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(name: string, options?: IndividuallyNestedWithHeaderClientOptionalParams);
    deleteStandalone(options?: IndividuallyNestedWithHeaderClientDeleteStandaloneOptionalParams): Promise<void>;
    getStandalone(options?: IndividuallyNestedWithHeaderClientGetStandaloneOptionalParams): Promise<void>;
    withQuery(options?: IndividuallyNestedWithHeaderClientWithQueryOptionalParams): Promise<void>;
}

export declare interface IndividuallyNestedWithHeaderClientDeleteStandaloneOptionalParams extends OperationOptions {
}

export declare interface IndividuallyNestedWithHeaderClientGetStandaloneOptionalParams extends OperationOptions {
}

export declare interface IndividuallyNestedWithHeaderClientOptionalParams extends ClientOptions {
}

export declare interface IndividuallyNestedWithHeaderClientWithQueryOptionalParams extends OperationOptions {
    format?: string;
}

export declare class IndividuallyNestedWithMixedClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(name: string, options?: IndividuallyNestedWithMixedClientOptionalParams);
    deleteStandalone(region: string, options?: IndividuallyNestedWithMixedClientDeleteStandaloneOptionalParams): Promise<void>;
    getStandalone(region: string, options?: IndividuallyNestedWithMixedClientGetStandaloneOptionalParams): Promise<void>;
    withQuery(region: string, options?: IndividuallyNestedWithMixedClientWithQueryOptionalParams): Promise<void>;
}

export declare interface IndividuallyNestedWithMixedClientDeleteStandaloneOptionalParams extends OperationOptions {
}

export declare interface IndividuallyNestedWithMixedClientGetStandaloneOptionalParams extends OperationOptions {
}

export declare interface IndividuallyNestedWithMixedClientOptionalParams extends ClientOptions {
}

export declare interface IndividuallyNestedWithMixedClientWithQueryOptionalParams extends OperationOptions {
    format?: string;
}

export declare class IndividuallyNestedWithMultipleClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(name: string, region: string, options?: IndividuallyNestedWithMultipleClientOptionalParams);
    deleteStandalone(options?: IndividuallyNestedWithMultipleClientDeleteStandaloneOptionalParams): Promise<void>;
    getStandalone(options?: IndividuallyNestedWithMultipleClientGetStandaloneOptionalParams): Promise<void>;
    withQuery(options?: IndividuallyNestedWithMultipleClientWithQueryOptionalParams): Promise<void>;
}

export declare interface IndividuallyNestedWithMultipleClientDeleteStandaloneOptionalParams extends OperationOptions {
}

export declare interface IndividuallyNestedWithMultipleClientGetStandaloneOptionalParams extends OperationOptions {
}

export declare interface IndividuallyNestedWithMultipleClientOptionalParams extends ClientOptions {
}

export declare interface IndividuallyNestedWithMultipleClientWithQueryOptionalParams extends OperationOptions {
    format?: string;
}

export declare class IndividuallyNestedWithParamAliasClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(blobName: string, options?: IndividuallyNestedWithParamAliasClientOptionalParams);
    withOriginalName(options?: WithOriginalNameOptionalParams): Promise<void>;
    withAliasedName(options?: WithAliasedNameOptionalParams): Promise<void>;
}

export declare interface IndividuallyNestedWithParamAliasClientOptionalParams extends ClientOptions {
}

export declare class IndividuallyNestedWithPathClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(blobName: string, options?: IndividuallyNestedWithPathClientOptionalParams);
    deleteStandalone(options?: DeleteStandaloneOptionalParams): Promise<void>;
    getStandalone(options?: GetStandaloneOptionalParams): Promise<BlobProperties>;
    withQuery(options?: WithQueryOptionalParams): Promise<void>;
}

export declare interface IndividuallyNestedWithPathClientOptionalParams extends ClientOptions {
}

export declare class IndividuallyNestedWithQueryClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(blobName: string, options?: IndividuallyNestedWithQueryClientOptionalParams);
    deleteStandalone(options?: IndividuallyNestedWithQueryClientDeleteStandaloneOptionalParams): Promise<void>;
    getStandalone(options?: IndividuallyNestedWithQueryClientGetStandaloneOptionalParams): Promise<BlobProperties>;
    withQuery(options?: IndividuallyNestedWithQueryClientWithQueryOptionalParams): Promise<void>;
}

export declare interface IndividuallyNestedWithQueryClientDeleteStandaloneOptionalParams extends OperationOptions {
}

export declare interface IndividuallyNestedWithQueryClientGetStandaloneOptionalParams extends OperationOptions {
}

export declare interface IndividuallyNestedWithQueryClientOptionalParams extends ClientOptions {
}

export declare interface IndividuallyNestedWithQueryClientWithQueryOptionalParams extends OperationOptions {
    format?: string;
}

export declare interface WithAliasedNameOptionalParams extends OperationOptions {
}

export declare interface WithOriginalNameOptionalParams extends OperationOptions {
}

export declare interface WithQueryOptionalParams extends OperationOptions {
    format?: string;
}

export { }
