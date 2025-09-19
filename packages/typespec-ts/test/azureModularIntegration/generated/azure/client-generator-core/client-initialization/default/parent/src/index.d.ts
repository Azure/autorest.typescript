import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { ParentNestedWithHeaderClient } from './parentNestedWithHeader/parentNestedWithHeaderClient.js';
import { ParentNestedWithHeaderClientOptionalParams } from './parentNestedWithHeader/parentNestedWithHeaderClient.js';
import { ParentNestedWithMixedClient } from './parentNestedWithMixed/parentNestedWithMixedClient.js';
import { ParentNestedWithMixedClientOptionalParams } from './parentNestedWithMixed/parentNestedWithMixedClient.js';
import { ParentNestedWithMultipleClient } from './parentNestedWithMultiple/parentNestedWithMultipleClient.js';
import { ParentNestedWithMultipleClientOptionalParams } from './parentNestedWithMultiple/parentNestedWithMultipleClient.js';
import { ParentNestedWithPathClient } from './parentNestedWithPath/parentNestedWithPathClient.js';
import { ParentNestedWithPathClientOptionalParams } from './parentNestedWithPath/parentNestedWithPathClient.js';
import { ParentNestedWithQueryClient } from './parentNestedWithQuery/parentNestedWithQueryClient.js';
import { ParentNestedWithQueryClientOptionalParams } from './parentNestedWithQuery/parentNestedWithQueryClient.js';
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

export declare interface Input {
    name: string;
}

export declare class ParentClient {
    private _client;
    readonly pipeline: Pipeline;
    private _clientParams;
    constructor(options?: ParentClientOptionalParams);
    readonly parentNestedWithMixedClient: ParentNestedWithMixedClientOperations;
    readonly parentNestedWithMultipleClient: ParentNestedWithMultipleClientOperations;
    readonly parentNestedWithHeaderClient: ParentNestedWithHeaderClientOperations;
    readonly parentNestedWithQueryClient: ParentNestedWithQueryClientOperations;
    readonly parentNestedWithPathClient: ParentNestedWithPathClientOperations;
    getParentNestedWithPathClient(blobName: string, options?: ParentNestedWithPathClientOptionalParams): ParentNestedWithPathClient;
    getParentNestedWithQueryClient(blobName: string, options?: ParentNestedWithQueryClientOptionalParams): ParentNestedWithQueryClient;
    getParentNestedWithHeaderClient(name: string, options?: ParentNestedWithHeaderClientOptionalParams): ParentNestedWithHeaderClient;
    getParentNestedWithMultipleClient(name: string, region: string, options?: ParentNestedWithMultipleClientOptionalParams): ParentNestedWithMultipleClient;
    getParentNestedWithMixedClient(name: string, options?: ParentNestedWithMixedClientOptionalParams): ParentNestedWithMixedClient;
}

export declare interface ParentClientOptionalParams extends ClientOptions {
}

export declare class ParentHeaderParamClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(name: string, options?: ParentHeaderParamClientOptionalParams);
    withBody(input: Input, options?: WithBodyOptionalParams): Promise<void>;
    withQuery(options?: ParentHeaderParamClientWithQueryOptionalParams): Promise<void>;
}

export declare interface ParentHeaderParamClientOptionalParams extends ClientOptions {
}

export declare interface ParentHeaderParamClientWithQueryOptionalParams extends OperationOptions {
    id?: string;
}

export declare class ParentMultipleParamsClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(name: string, region: string, options?: ParentMultipleParamsClientOptionalParams);
    withBody(input: Input, options?: ParentMultipleParamsClientWithBodyOptionalParams): Promise<void>;
    withQuery(options?: ParentMultipleParamsClientWithQueryOptionalParams): Promise<void>;
}

export declare interface ParentMultipleParamsClientOptionalParams extends ClientOptions {
}

export declare interface ParentMultipleParamsClientWithBodyOptionalParams extends OperationOptions {
}

export declare interface ParentMultipleParamsClientWithQueryOptionalParams extends OperationOptions {
    id?: string;
}

export declare interface ParentNestedWithHeaderClientDeleteStandaloneOptionalParams extends OperationOptions {
}

export declare interface ParentNestedWithHeaderClientGetStandaloneOptionalParams extends OperationOptions {
}

export declare interface ParentNestedWithHeaderClientOperations {
    deleteStandalone: (options?: ParentNestedWithHeaderClientDeleteStandaloneOptionalParams) => Promise<void>;
    getStandalone: (options?: ParentNestedWithHeaderClientGetStandaloneOptionalParams) => Promise<void>;
    withQuery: (options?: ParentNestedWithHeaderClientWithQueryOptionalParams) => Promise<void>;
}

export declare interface ParentNestedWithHeaderClientWithQueryOptionalParams extends OperationOptions {
    format?: string;
}

export declare interface ParentNestedWithMixedClientDeleteStandaloneOptionalParams extends OperationOptions {
}

export declare interface ParentNestedWithMixedClientGetStandaloneOptionalParams extends OperationOptions {
}

export declare interface ParentNestedWithMixedClientOperations {
    deleteStandalone: (region: string, options?: ParentNestedWithMixedClientDeleteStandaloneOptionalParams) => Promise<void>;
    getStandalone: (region: string, options?: ParentNestedWithMixedClientGetStandaloneOptionalParams) => Promise<void>;
    withQuery: (region: string, options?: ParentNestedWithMixedClientWithQueryOptionalParams) => Promise<void>;
}

export declare interface ParentNestedWithMixedClientWithQueryOptionalParams extends OperationOptions {
    format?: string;
}

export declare interface ParentNestedWithMultipleClientDeleteStandaloneOptionalParams extends OperationOptions {
}

export declare interface ParentNestedWithMultipleClientGetStandaloneOptionalParams extends OperationOptions {
}

export declare interface ParentNestedWithMultipleClientOperations {
    deleteStandalone: (options?: ParentNestedWithMultipleClientDeleteStandaloneOptionalParams) => Promise<void>;
    getStandalone: (options?: ParentNestedWithMultipleClientGetStandaloneOptionalParams) => Promise<void>;
    withQuery: (options?: ParentNestedWithMultipleClientWithQueryOptionalParams) => Promise<void>;
}

export declare interface ParentNestedWithMultipleClientWithQueryOptionalParams extends OperationOptions {
    format?: string;
}

export declare interface ParentNestedWithPathClientDeleteStandaloneOptionalParams extends OperationOptions {
}

export declare interface ParentNestedWithPathClientGetStandaloneOptionalParams extends OperationOptions {
}

export declare interface ParentNestedWithPathClientOperations {
    deleteStandalone: (options?: ParentNestedWithPathClientDeleteStandaloneOptionalParams) => Promise<void>;
    getStandalone: (options?: ParentNestedWithPathClientGetStandaloneOptionalParams) => Promise<BlobProperties>;
    withQuery: (options?: ParentNestedWithPathClientWithQueryOptionalParams) => Promise<void>;
}

export declare interface ParentNestedWithPathClientWithQueryOptionalParams extends OperationOptions {
    format?: string;
}

export declare interface ParentNestedWithQueryClientDeleteStandaloneOptionalParams extends OperationOptions {
}

export declare interface ParentNestedWithQueryClientGetStandaloneOptionalParams extends OperationOptions {
}

export declare interface ParentNestedWithQueryClientOperations {
    deleteStandalone: (options?: ParentNestedWithQueryClientDeleteStandaloneOptionalParams) => Promise<void>;
    getStandalone: (options?: ParentNestedWithQueryClientGetStandaloneOptionalParams) => Promise<BlobProperties>;
    withQuery: (options?: ParentNestedWithQueryClientWithQueryOptionalParams) => Promise<void>;
}

export declare interface ParentNestedWithQueryClientWithQueryOptionalParams extends OperationOptions {
}

export declare class ParentPathParamClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(blobName: string, options?: ParentPathParamClientOptionalParams);
    deleteStandalone(options?: DeleteStandaloneOptionalParams): Promise<void>;
    getStandalone(options?: GetStandaloneOptionalParams): Promise<BlobProperties>;
    withQuery(options?: WithQueryOptionalParams): Promise<void>;
}

export declare interface ParentPathParamClientOptionalParams extends ClientOptions {
}

export declare interface WithBodyOptionalParams extends OperationOptions {
}

export declare interface WithQueryOptionalParams extends OperationOptions {
    format?: string;
}

export { }
