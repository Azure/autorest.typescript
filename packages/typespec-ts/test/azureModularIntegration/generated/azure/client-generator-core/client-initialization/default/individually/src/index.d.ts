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

export declare class IndividuallyClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: IndividuallyClientOptionalParams);
    readonly individuallyNestedWithMixedClient: IndividuallyNestedWithMixedClientOperations;
    readonly individuallyNestedWithMultipleClient: IndividuallyNestedWithMultipleClientOperations;
    readonly individuallyNestedWithHeaderClient: IndividuallyNestedWithHeaderClientOperations;
    readonly individuallyNestedWithQueryClient: IndividuallyNestedWithQueryClientOperations;
    readonly individuallyNestedWithPathClient: IndividuallyNestedWithPathClientOperations;
}

export declare interface IndividuallyClientOptionalParams extends ClientOptions {
}

export declare class IndividuallyHeaderParamClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(name: string, options?: IndividuallyHeaderParamClientOptionalParams);
    withBody(input: Input, options?: WithBodyOptionalParams): Promise<void>;
    withQuery(options?: IndividuallyHeaderParamClientWithQueryOptionalParams): Promise<void>;
}

export declare interface IndividuallyHeaderParamClientOptionalParams extends ClientOptions {
}

export declare interface IndividuallyHeaderParamClientWithQueryOptionalParams extends OperationOptions {
    id?: string;
}

export declare class IndividuallyMultipleParamsClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(name: string, region: string, options?: IndividuallyMultipleParamsClientOptionalParams);
    withBody(input: Input, options?: IndividuallyMultipleParamsClientWithBodyOptionalParams): Promise<void>;
    withQuery(options?: IndividuallyMultipleParamsClientWithQueryOptionalParams): Promise<void>;
}

export declare interface IndividuallyMultipleParamsClientOptionalParams extends ClientOptions {
}

export declare interface IndividuallyMultipleParamsClientWithBodyOptionalParams extends OperationOptions {
}

export declare interface IndividuallyMultipleParamsClientWithQueryOptionalParams extends OperationOptions {
    id?: string;
}

export declare interface IndividuallyNestedWithHeaderClientDeleteStandaloneOptionalParams extends OperationOptions {
}

export declare interface IndividuallyNestedWithHeaderClientGetStandaloneOptionalParams extends OperationOptions {
}

export declare interface IndividuallyNestedWithHeaderClientOperations {
    deleteStandalone: (options?: IndividuallyNestedWithHeaderClientDeleteStandaloneOptionalParams) => Promise<void>;
    getStandalone: (options?: IndividuallyNestedWithHeaderClientGetStandaloneOptionalParams) => Promise<void>;
    withQuery: (options?: IndividuallyNestedWithHeaderClientWithQueryOptionalParams) => Promise<void>;
}

export declare interface IndividuallyNestedWithHeaderClientWithQueryOptionalParams extends OperationOptions {
    format?: string;
}

export declare interface IndividuallyNestedWithMixedClientDeleteStandaloneOptionalParams extends OperationOptions {
}

export declare interface IndividuallyNestedWithMixedClientGetStandaloneOptionalParams extends OperationOptions {
}

export declare interface IndividuallyNestedWithMixedClientOperations {
    deleteStandalone: (region: string, options?: IndividuallyNestedWithMixedClientDeleteStandaloneOptionalParams) => Promise<void>;
    getStandalone: (region: string, options?: IndividuallyNestedWithMixedClientGetStandaloneOptionalParams) => Promise<void>;
    withQuery: (region: string, options?: IndividuallyNestedWithMixedClientWithQueryOptionalParams) => Promise<void>;
}

export declare interface IndividuallyNestedWithMixedClientWithQueryOptionalParams extends OperationOptions {
    format?: string;
}

export declare interface IndividuallyNestedWithMultipleClientDeleteStandaloneOptionalParams extends OperationOptions {
}

export declare interface IndividuallyNestedWithMultipleClientGetStandaloneOptionalParams extends OperationOptions {
}

export declare interface IndividuallyNestedWithMultipleClientOperations {
    deleteStandalone: (options?: IndividuallyNestedWithMultipleClientDeleteStandaloneOptionalParams) => Promise<void>;
    getStandalone: (options?: IndividuallyNestedWithMultipleClientGetStandaloneOptionalParams) => Promise<void>;
    withQuery: (options?: IndividuallyNestedWithMultipleClientWithQueryOptionalParams) => Promise<void>;
}

export declare interface IndividuallyNestedWithMultipleClientWithQueryOptionalParams extends OperationOptions {
    format?: string;
}

export declare interface IndividuallyNestedWithPathClientDeleteStandaloneOptionalParams extends OperationOptions {
}

export declare interface IndividuallyNestedWithPathClientGetStandaloneOptionalParams extends OperationOptions {
}

export declare interface IndividuallyNestedWithPathClientOperations {
    deleteStandalone: (options?: IndividuallyNestedWithPathClientDeleteStandaloneOptionalParams) => Promise<void>;
    getStandalone: (options?: IndividuallyNestedWithPathClientGetStandaloneOptionalParams) => Promise<BlobProperties>;
    withQuery: (options?: IndividuallyNestedWithPathClientWithQueryOptionalParams) => Promise<void>;
}

export declare interface IndividuallyNestedWithPathClientWithQueryOptionalParams extends OperationOptions {
    format?: string;
}

export declare interface IndividuallyNestedWithQueryClientDeleteStandaloneOptionalParams extends OperationOptions {
}

export declare interface IndividuallyNestedWithQueryClientGetStandaloneOptionalParams extends OperationOptions {
}

export declare interface IndividuallyNestedWithQueryClientOperations {
    deleteStandalone: (options?: IndividuallyNestedWithQueryClientDeleteStandaloneOptionalParams) => Promise<void>;
    getStandalone: (options?: IndividuallyNestedWithQueryClientGetStandaloneOptionalParams) => Promise<BlobProperties>;
    withQuery: (options?: IndividuallyNestedWithQueryClientWithQueryOptionalParams) => Promise<void>;
}

export declare interface IndividuallyNestedWithQueryClientWithQueryOptionalParams extends OperationOptions {
}

export declare class IndividuallyPathParamClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(blobName: string, options?: IndividuallyPathParamClientOptionalParams);
    deleteStandalone(options?: DeleteStandaloneOptionalParams): Promise<void>;
    getStandalone(options?: GetStandaloneOptionalParams): Promise<BlobProperties>;
    withQuery(options?: WithQueryOptionalParams): Promise<void>;
}

export declare interface IndividuallyPathParamClientOptionalParams extends ClientOptions {
}

export declare interface Input {
    name: string;
}

export declare interface WithBodyOptionalParams extends OperationOptions {
}

export declare interface WithQueryOptionalParams extends OperationOptions {
    format?: string;
}

export { }
