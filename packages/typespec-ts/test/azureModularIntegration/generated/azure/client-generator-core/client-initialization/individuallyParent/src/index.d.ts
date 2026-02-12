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

export declare class IndividuallyParentClient {
    private _client;
    readonly pipeline: Pipeline;
    private _clientParams;
    constructor(options?: IndividuallyParentClientOptionalParams);
    getIndividuallyParentNestedWithPathClient(blobName: string, options?: IndividuallyParentNestedWithPathClientOptionalParams): IndividuallyParentNestedWithPathClient;
    getIndividuallyParentNestedWithQueryClient(blobName: string, options?: IndividuallyParentNestedWithQueryClientOptionalParams): IndividuallyParentNestedWithQueryClient;
    getIndividuallyParentNestedWithHeaderClient(name: string, options?: IndividuallyParentNestedWithHeaderClientOptionalParams): IndividuallyParentNestedWithHeaderClient;
    getIndividuallyParentNestedWithMultipleClient(name: string, region: string, options?: IndividuallyParentNestedWithMultipleClientOptionalParams): IndividuallyParentNestedWithMultipleClient;
    getIndividuallyParentNestedWithMixedClient(name: string, options?: IndividuallyParentNestedWithMixedClientOptionalParams): IndividuallyParentNestedWithMixedClient;
    getIndividuallyParentNestedWithParamAliasClient(blobName: string, options?: IndividuallyParentNestedWithParamAliasClientOptionalParams): IndividuallyParentNestedWithParamAliasClient;
}

export declare interface IndividuallyParentClientOptionalParams extends ClientOptions {
}

export declare class IndividuallyParentNestedWithHeaderClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(name: string, options?: IndividuallyParentNestedWithHeaderClientOptionalParams);
    deleteStandalone(options?: IndividuallyParentNestedWithHeaderClientDeleteStandaloneOptionalParams): Promise<void>;
    getStandalone(options?: IndividuallyParentNestedWithHeaderClientGetStandaloneOptionalParams): Promise<void>;
    withQuery(options?: IndividuallyParentNestedWithHeaderClientWithQueryOptionalParams): Promise<void>;
}

export declare interface IndividuallyParentNestedWithHeaderClientDeleteStandaloneOptionalParams extends OperationOptions {
}

export declare interface IndividuallyParentNestedWithHeaderClientGetStandaloneOptionalParams extends OperationOptions {
}

export declare interface IndividuallyParentNestedWithHeaderClientOptionalParams extends ClientOptions {
}

export declare interface IndividuallyParentNestedWithHeaderClientWithQueryOptionalParams extends OperationOptions {
    format?: string;
}

export declare class IndividuallyParentNestedWithMixedClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(name: string, options?: IndividuallyParentNestedWithMixedClientOptionalParams);
    deleteStandalone(region: string, options?: IndividuallyParentNestedWithMixedClientDeleteStandaloneOptionalParams): Promise<void>;
    getStandalone(region: string, options?: IndividuallyParentNestedWithMixedClientGetStandaloneOptionalParams): Promise<void>;
    withQuery(region: string, options?: IndividuallyParentNestedWithMixedClientWithQueryOptionalParams): Promise<void>;
}

export declare interface IndividuallyParentNestedWithMixedClientDeleteStandaloneOptionalParams extends OperationOptions {
}

export declare interface IndividuallyParentNestedWithMixedClientGetStandaloneOptionalParams extends OperationOptions {
}

export declare interface IndividuallyParentNestedWithMixedClientOptionalParams extends ClientOptions {
}

export declare interface IndividuallyParentNestedWithMixedClientWithQueryOptionalParams extends OperationOptions {
    format?: string;
}

export declare class IndividuallyParentNestedWithMultipleClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(name: string, region: string, options?: IndividuallyParentNestedWithMultipleClientOptionalParams);
    deleteStandalone(options?: IndividuallyParentNestedWithMultipleClientDeleteStandaloneOptionalParams): Promise<void>;
    getStandalone(options?: IndividuallyParentNestedWithMultipleClientGetStandaloneOptionalParams): Promise<void>;
    withQuery(options?: IndividuallyParentNestedWithMultipleClientWithQueryOptionalParams): Promise<void>;
}

export declare interface IndividuallyParentNestedWithMultipleClientDeleteStandaloneOptionalParams extends OperationOptions {
}

export declare interface IndividuallyParentNestedWithMultipleClientGetStandaloneOptionalParams extends OperationOptions {
}

export declare interface IndividuallyParentNestedWithMultipleClientOptionalParams extends ClientOptions {
}

export declare interface IndividuallyParentNestedWithMultipleClientWithQueryOptionalParams extends OperationOptions {
    format?: string;
}

export declare class IndividuallyParentNestedWithParamAliasClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(blobName: string, options?: IndividuallyParentNestedWithParamAliasClientOptionalParams);
    withOriginalName(options?: WithOriginalNameOptionalParams): Promise<void>;
    withAliasedName(options?: WithAliasedNameOptionalParams): Promise<void>;
}

export declare interface IndividuallyParentNestedWithParamAliasClientOptionalParams extends ClientOptions {
}

export declare class IndividuallyParentNestedWithPathClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(blobName: string, options?: IndividuallyParentNestedWithPathClientOptionalParams);
    deleteStandalone(options?: DeleteStandaloneOptionalParams): Promise<void>;
    getStandalone(options?: GetStandaloneOptionalParams): Promise<BlobProperties>;
    withQuery(options?: WithQueryOptionalParams): Promise<void>;
}

export declare interface IndividuallyParentNestedWithPathClientOptionalParams extends ClientOptions {
}

export declare class IndividuallyParentNestedWithQueryClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(blobName: string, options?: IndividuallyParentNestedWithQueryClientOptionalParams);
    deleteStandalone(options?: IndividuallyParentNestedWithQueryClientDeleteStandaloneOptionalParams): Promise<void>;
    getStandalone(options?: IndividuallyParentNestedWithQueryClientGetStandaloneOptionalParams): Promise<BlobProperties>;
    withQuery(options?: IndividuallyParentNestedWithQueryClientWithQueryOptionalParams): Promise<void>;
}

export declare interface IndividuallyParentNestedWithQueryClientDeleteStandaloneOptionalParams extends OperationOptions {
}

export declare interface IndividuallyParentNestedWithQueryClientGetStandaloneOptionalParams extends OperationOptions {
}

export declare interface IndividuallyParentNestedWithQueryClientOptionalParams extends ClientOptions {
}

export declare interface IndividuallyParentNestedWithQueryClientWithQueryOptionalParams extends OperationOptions {
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
