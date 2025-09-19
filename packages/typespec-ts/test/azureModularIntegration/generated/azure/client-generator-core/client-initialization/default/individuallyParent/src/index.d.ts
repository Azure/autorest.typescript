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
}

export declare interface IndividuallyParentClientOptionalParams extends ClientOptions {
}

export declare class IndividuallyParentHeaderParamClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(name: string, options?: IndividuallyParentHeaderParamClientOptionalParams);
    withBody(input: Input, options?: WithBodyOptionalParams): Promise<void>;
    withQuery(options?: IndividuallyParentHeaderParamClientWithQueryOptionalParams): Promise<void>;
}

export declare interface IndividuallyParentHeaderParamClientOptionalParams extends ClientOptions {
}

export declare interface IndividuallyParentHeaderParamClientWithQueryOptionalParams extends OperationOptions {
    id?: string;
}

export declare class IndividuallyParentMultipleParamsClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(name: string, region: string, options?: IndividuallyParentMultipleParamsClientOptionalParams);
    withBody(input: Input, options?: IndividuallyParentMultipleParamsClientWithBodyOptionalParams): Promise<void>;
    withQuery(options?: IndividuallyParentMultipleParamsClientWithQueryOptionalParams): Promise<void>;
}

export declare interface IndividuallyParentMultipleParamsClientOptionalParams extends ClientOptions {
}

export declare interface IndividuallyParentMultipleParamsClientWithBodyOptionalParams extends OperationOptions {
}

export declare interface IndividuallyParentMultipleParamsClientWithQueryOptionalParams extends OperationOptions {
    id?: string;
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

export declare class IndividuallyParentNestedWithPathClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(blobName: string, options?: IndividuallyParentNestedWithPathClientOptionalParams);
    deleteStandalone(options?: IndividuallyParentNestedWithPathClientDeleteStandaloneOptionalParams): Promise<void>;
    getStandalone(options?: IndividuallyParentNestedWithPathClientGetStandaloneOptionalParams): Promise<BlobProperties>;
    withQuery(options?: IndividuallyParentNestedWithPathClientWithQueryOptionalParams): Promise<void>;
}

export declare interface IndividuallyParentNestedWithPathClientDeleteStandaloneOptionalParams extends OperationOptions {
}

export declare interface IndividuallyParentNestedWithPathClientGetStandaloneOptionalParams extends OperationOptions {
}

export declare interface IndividuallyParentNestedWithPathClientOptionalParams extends ClientOptions {
}

export declare interface IndividuallyParentNestedWithPathClientWithQueryOptionalParams extends OperationOptions {
    format?: string;
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
}

export declare class IndividuallyParentPathParamClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(blobName: string, options?: IndividuallyParentPathParamClientOptionalParams);
    deleteStandalone(options?: DeleteStandaloneOptionalParams): Promise<void>;
    getStandalone(options?: GetStandaloneOptionalParams): Promise<BlobProperties>;
    withQuery(options?: WithQueryOptionalParams): Promise<void>;
}

export declare interface IndividuallyParentPathParamClientOptionalParams extends ClientOptions {
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
