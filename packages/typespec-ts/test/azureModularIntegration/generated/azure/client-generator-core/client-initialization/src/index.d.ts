import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare interface BlobProperties {
    name: string;
    size: number;
    contentType: string;
    createdOn: Date;
}

export declare class ChildClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(blobName: string, options?: ChildClientOptionalParams);
    deleteStandalone(options?: ChildClientDeleteStandaloneOptionalParams): Promise<void>;
    getStandalone(options?: ChildClientGetStandaloneOptionalParams): Promise<BlobProperties>;
    withQuery(options?: ChildClientWithQueryOptionalParams): Promise<void>;
}

export declare interface ChildClientDeleteStandaloneOptionalParams extends OperationOptions {
}

export declare interface ChildClientGetStandaloneOptionalParams extends OperationOptions {
}

export declare interface ChildClientOptionalParams extends ClientOptions {
}

export declare interface ChildClientWithQueryOptionalParams extends OperationOptions {
    format?: string;
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

export declare class ParentClient {
    private _client;
    readonly pipeline: Pipeline;
    private _clientParams;
    constructor(options?: ParentClientOptionalParams);
    getChildClient(blobName: string, options?: ChildClientOptionalParams): ChildClient;
}

export declare interface ParentClientOptionalParams extends ClientOptions {
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
