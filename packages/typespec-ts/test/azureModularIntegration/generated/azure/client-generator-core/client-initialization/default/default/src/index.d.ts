import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare interface BlobProperties {
    name: string;
    size: number;
    contentType: string;
    createdOn: Date;
}

export declare interface DefaultNestedWithHeaderClientDeleteStandaloneOptionalParams extends OperationOptions {
}

export declare interface DefaultNestedWithHeaderClientGetStandaloneOptionalParams extends OperationOptions {
}

export declare interface DefaultNestedWithHeaderClientOperations {
    deleteStandalone: (options?: DefaultNestedWithHeaderClientDeleteStandaloneOptionalParams) => Promise<void>;
    getStandalone: (options?: DefaultNestedWithHeaderClientGetStandaloneOptionalParams) => Promise<void>;
    withQuery: (options?: DefaultNestedWithHeaderClientWithQueryOptionalParams) => Promise<void>;
}

export declare interface DefaultNestedWithHeaderClientWithQueryOptionalParams extends OperationOptions {
    format?: string;
}

export declare interface DefaultNestedWithMixedClientDeleteStandaloneOptionalParams extends OperationOptions {
}

export declare interface DefaultNestedWithMixedClientGetStandaloneOptionalParams extends OperationOptions {
}

export declare interface DefaultNestedWithMixedClientOperations {
    deleteStandalone: (region: string, options?: DefaultNestedWithMixedClientDeleteStandaloneOptionalParams) => Promise<void>;
    getStandalone: (region: string, options?: DefaultNestedWithMixedClientGetStandaloneOptionalParams) => Promise<void>;
    withQuery: (region: string, options?: DefaultNestedWithMixedClientWithQueryOptionalParams) => Promise<void>;
}

export declare interface DefaultNestedWithMixedClientWithQueryOptionalParams extends OperationOptions {
    format?: string;
}

export declare interface DefaultNestedWithMultipleClientDeleteStandaloneOptionalParams extends OperationOptions {
}

export declare interface DefaultNestedWithMultipleClientGetStandaloneOptionalParams extends OperationOptions {
}

export declare interface DefaultNestedWithMultipleClientOperations {
    deleteStandalone: (options?: DefaultNestedWithMultipleClientDeleteStandaloneOptionalParams) => Promise<void>;
    getStandalone: (options?: DefaultNestedWithMultipleClientGetStandaloneOptionalParams) => Promise<void>;
    withQuery: (options?: DefaultNestedWithMultipleClientWithQueryOptionalParams) => Promise<void>;
}

export declare interface DefaultNestedWithMultipleClientWithQueryOptionalParams extends OperationOptions {
    format?: string;
}

export declare interface DefaultNestedWithPathClientDeleteStandaloneOptionalParams extends OperationOptions {
}

export declare interface DefaultNestedWithPathClientGetStandaloneOptionalParams extends OperationOptions {
}

export declare interface DefaultNestedWithPathClientOperations {
    deleteStandalone: (options?: DefaultNestedWithPathClientDeleteStandaloneOptionalParams) => Promise<void>;
    getStandalone: (options?: DefaultNestedWithPathClientGetStandaloneOptionalParams) => Promise<BlobProperties>;
    withQuery: (options?: DefaultNestedWithPathClientWithQueryOptionalParams) => Promise<void>;
}

export declare interface DefaultNestedWithPathClientWithQueryOptionalParams extends OperationOptions {
    format?: string;
}

export declare interface DefaultNestedWithQueryClientDeleteStandaloneOptionalParams extends OperationOptions {
}

export declare interface DefaultNestedWithQueryClientGetStandaloneOptionalParams extends OperationOptions {
}

export declare interface DefaultNestedWithQueryClientOperations {
    deleteStandalone: (options?: DefaultNestedWithQueryClientDeleteStandaloneOptionalParams) => Promise<void>;
    getStandalone: (options?: DefaultNestedWithQueryClientGetStandaloneOptionalParams) => Promise<BlobProperties>;
    withQuery: (options?: DefaultNestedWithQueryClientWithQueryOptionalParams) => Promise<void>;
}

export declare interface DefaultNestedWithQueryClientWithQueryOptionalParams extends OperationOptions {
}

export declare class DefaultParentClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: DefaultParentClientOptionalParams);
    readonly defaultNestedWithMixedClient: DefaultNestedWithMixedClientOperations;
    readonly defaultNestedWithMultipleClient: DefaultNestedWithMultipleClientOperations;
    readonly defaultNestedWithHeaderClient: DefaultNestedWithHeaderClientOperations;
    readonly defaultNestedWithQueryClient: DefaultNestedWithQueryClientOperations;
    readonly defaultNestedWithPathClient: DefaultNestedWithPathClientOperations;
}

export declare interface DefaultParentClientOptionalParams extends ClientOptions {
}

export declare interface DeleteStandaloneOptionalParams extends OperationOptions {
}

export declare interface GetStandaloneOptionalParams extends OperationOptions {
}

export declare class HeaderParamClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(name: string, options?: HeaderParamClientOptionalParams);
    withBody(body: Input, options?: WithBodyOptionalParams): Promise<void>;
    withQuery(id: string, options?: WithQueryOptionalParams): Promise<void>;
}

export declare interface HeaderParamClientOptionalParams extends ClientOptions {
}

export declare interface Input {
    name: string;
}

export declare class MixedParamsClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(name: string, options?: MixedParamsClientOptionalParams);
    withBody(region: string, body: {
        name: string;
    }, options?: MixedParamsClientWithBodyOptionalParams): Promise<void>;
    withQuery(region: string, id: string, options?: MixedParamsClientWithQueryOptionalParams): Promise<void>;
}

export declare interface MixedParamsClientOptionalParams extends ClientOptions {
}

export declare interface MixedParamsClientWithBodyOptionalParams extends OperationOptions {
}

export declare interface MixedParamsClientWithQueryOptionalParams extends OperationOptions {
}

export declare class MultipleParamsClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(name: string, region: string, options?: MultipleParamsClientOptionalParams);
    withBody(body: Input, options?: MultipleParamsClientWithBodyOptionalParams): Promise<void>;
    withQuery(id: string, options?: MultipleParamsClientWithQueryOptionalParams): Promise<void>;
}

export declare interface MultipleParamsClientOptionalParams extends ClientOptions {
}

export declare interface MultipleParamsClientWithBodyOptionalParams extends OperationOptions {
}

export declare interface MultipleParamsClientWithQueryOptionalParams extends OperationOptions {
}

export declare class ParamAliasClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(blobName: string, options?: ParamAliasClientOptionalParams);
    withOriginalName(options?: WithOriginalNameOptionalParams): Promise<void>;
    withAliasedName(options?: WithAliasedNameOptionalParams): Promise<void>;
}

export declare interface ParamAliasClientOptionalParams extends ClientOptions {
}

export declare class PathParamClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(blobName: string, options?: PathParamClientOptionalParams);
    deleteStandalone(options?: DeleteStandaloneOptionalParams): Promise<void>;
    getStandalone(options?: GetStandaloneOptionalParams): Promise<BlobProperties>;
    withQuery(options?: PathParamClientWithQueryOptionalParams): Promise<void>;
}

export declare interface PathParamClientOptionalParams extends ClientOptions {
}

export declare interface PathParamClientWithQueryOptionalParams extends OperationOptions {
    format?: string;
}

export declare interface WithAliasedNameOptionalParams extends OperationOptions {
}

export declare interface WithBodyOptionalParams extends OperationOptions {
}

export declare interface WithOriginalNameOptionalParams extends OperationOptions {
}

export declare interface WithQueryOptionalParams extends OperationOptions {
}

export { }
