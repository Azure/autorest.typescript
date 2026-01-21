import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { ParentNestedWithHeaderClient as ParentNestedWithHeaderClient_2 } from './parentNestedWithHeader/parentNestedWithHeaderClient.js';
import { ParentNestedWithHeaderClientOptionalParams as ParentNestedWithHeaderClientOptionalParams_2 } from './parentNestedWithHeader/parentNestedWithHeaderClient.js';
import { ParentNestedWithMixedClient as ParentNestedWithMixedClient_2 } from './parentNestedWithMixed/parentNestedWithMixedClient.js';
import { ParentNestedWithMixedClientOptionalParams as ParentNestedWithMixedClientOptionalParams_2 } from './parentNestedWithMixed/parentNestedWithMixedClient.js';
import { ParentNestedWithMultipleClient as ParentNestedWithMultipleClient_2 } from './parentNestedWithMultiple/parentNestedWithMultipleClient.js';
import { ParentNestedWithMultipleClientOptionalParams as ParentNestedWithMultipleClientOptionalParams_2 } from './parentNestedWithMultiple/parentNestedWithMultipleClient.js';
import { ParentNestedWithPathClient as ParentNestedWithPathClient_2 } from './parentNestedWithPath/parentNestedWithPathClient.js';
import { ParentNestedWithPathClientOptionalParams as ParentNestedWithPathClientOptionalParams_2 } from './parentNestedWithPath/parentNestedWithPathClient.js';
import { ParentNestedWithQueryClient as ParentNestedWithQueryClient_2 } from './parentNestedWithQuery/parentNestedWithQueryClient.js';
import { ParentNestedWithQueryClientOptionalParams as ParentNestedWithQueryClientOptionalParams_2 } from './parentNestedWithQuery/parentNestedWithQueryClient.js';
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
    getParentNestedWithPathClient(blobName: string, options?: ParentNestedWithPathClientOptionalParams_2): ParentNestedWithPathClient_2;
    getParentNestedWithQueryClient(blobName: string, options?: ParentNestedWithQueryClientOptionalParams_2): ParentNestedWithQueryClient_2;
    getParentNestedWithHeaderClient(name: string, options?: ParentNestedWithHeaderClientOptionalParams_2): ParentNestedWithHeaderClient_2;
    getParentNestedWithMultipleClient(name: string, region: string, options?: ParentNestedWithMultipleClientOptionalParams_2): ParentNestedWithMultipleClient_2;
    getParentNestedWithMixedClient(name: string, options?: ParentNestedWithMixedClientOptionalParams_2): ParentNestedWithMixedClient_2;
}

export declare interface ParentClientOptionalParams extends ClientOptions {
}

export declare interface ParentClientParentNestedWithHeaderClientDeleteStandaloneOptionalParams extends OperationOptions {
}

export declare interface ParentClientParentNestedWithHeaderClientGetStandaloneOptionalParams extends OperationOptions {
}

export declare interface ParentClientParentNestedWithHeaderClientWithQueryOptionalParams extends OperationOptions {
    format?: string;
}

export declare interface ParentClientParentNestedWithMixedClientDeleteStandaloneOptionalParams extends OperationOptions {
}

export declare interface ParentClientParentNestedWithMixedClientGetStandaloneOptionalParams extends OperationOptions {
}

export declare interface ParentClientParentNestedWithMixedClientWithQueryOptionalParams extends OperationOptions {
    format?: string;
}

export declare interface ParentClientParentNestedWithMultipleClientDeleteStandaloneOptionalParams extends OperationOptions {
}

export declare interface ParentClientParentNestedWithMultipleClientGetStandaloneOptionalParams extends OperationOptions {
}

export declare interface ParentClientParentNestedWithMultipleClientWithQueryOptionalParams extends OperationOptions {
    format?: string;
}

export declare interface ParentClientParentNestedWithQueryClientDeleteStandaloneOptionalParams extends OperationOptions {
}

export declare interface ParentClientParentNestedWithQueryClientGetStandaloneOptionalParams extends OperationOptions {
}

export declare interface ParentClientParentNestedWithQueryClientWithQueryOptionalParams extends OperationOptions {
}

export declare class ParentNestedWithHeaderClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(name: string, options?: ParentNestedWithHeaderClientOptionalParams);
    deleteStandalone(name: string, options?: ParentNestedWithHeaderClientDeleteStandaloneOptionalParams): Promise<void>;
    getStandalone(name: string, options?: ParentNestedWithHeaderClientGetStandaloneOptionalParams): Promise<void>;
    withQuery(name: string, options?: ParentNestedWithHeaderClientWithQueryOptionalParams): Promise<void>;
}

export declare interface ParentNestedWithHeaderClientDeleteStandaloneOptionalParams extends OperationOptions {
}

export declare interface ParentNestedWithHeaderClientGetStandaloneOptionalParams extends OperationOptions {
}

export declare interface ParentNestedWithHeaderClientOperations {
    deleteStandalone: (name: string, options?: ParentClientParentNestedWithHeaderClientDeleteStandaloneOptionalParams) => Promise<void>;
    getStandalone: (name: string, options?: ParentClientParentNestedWithHeaderClientGetStandaloneOptionalParams) => Promise<void>;
    withQuery: (name: string, options?: ParentClientParentNestedWithHeaderClientWithQueryOptionalParams) => Promise<void>;
}

export declare interface ParentNestedWithHeaderClientOptionalParams extends ClientOptions {
}

export declare interface ParentNestedWithHeaderClientWithQueryOptionalParams extends OperationOptions {
    format?: string;
}

export declare class ParentNestedWithMixedClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(name: string, options?: ParentNestedWithMixedClientOptionalParams);
    deleteStandalone(name: string, region: string, options?: ParentNestedWithMixedClientDeleteStandaloneOptionalParams): Promise<void>;
    getStandalone(name: string, region: string, options?: ParentNestedWithMixedClientGetStandaloneOptionalParams): Promise<void>;
    withQuery(name: string, region: string, options?: ParentNestedWithMixedClientWithQueryOptionalParams): Promise<void>;
}

export declare interface ParentNestedWithMixedClientDeleteStandaloneOptionalParams extends OperationOptions {
}

export declare interface ParentNestedWithMixedClientGetStandaloneOptionalParams extends OperationOptions {
}

export declare interface ParentNestedWithMixedClientOperations {
    deleteStandalone: (name: string, region: string, options?: ParentClientParentNestedWithMixedClientDeleteStandaloneOptionalParams) => Promise<void>;
    getStandalone: (name: string, region: string, options?: ParentClientParentNestedWithMixedClientGetStandaloneOptionalParams) => Promise<void>;
    withQuery: (name: string, region: string, options?: ParentClientParentNestedWithMixedClientWithQueryOptionalParams) => Promise<void>;
}

export declare interface ParentNestedWithMixedClientOptionalParams extends ClientOptions {
}

export declare interface ParentNestedWithMixedClientWithQueryOptionalParams extends OperationOptions {
    format?: string;
}

export declare class ParentNestedWithMultipleClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(name: string, region: string, options?: ParentNestedWithMultipleClientOptionalParams);
    deleteStandalone(name: string, region: string, options?: ParentNestedWithMultipleClientDeleteStandaloneOptionalParams): Promise<void>;
    getStandalone(name: string, region: string, options?: ParentNestedWithMultipleClientGetStandaloneOptionalParams): Promise<void>;
    withQuery(name: string, region: string, options?: ParentNestedWithMultipleClientWithQueryOptionalParams): Promise<void>;
}

export declare interface ParentNestedWithMultipleClientDeleteStandaloneOptionalParams extends OperationOptions {
}

export declare interface ParentNestedWithMultipleClientGetStandaloneOptionalParams extends OperationOptions {
}

export declare interface ParentNestedWithMultipleClientOperations {
    deleteStandalone: (name: string, region: string, options?: ParentClientParentNestedWithMultipleClientDeleteStandaloneOptionalParams) => Promise<void>;
    getStandalone: (name: string, region: string, options?: ParentClientParentNestedWithMultipleClientGetStandaloneOptionalParams) => Promise<void>;
    withQuery: (name: string, region: string, options?: ParentClientParentNestedWithMultipleClientWithQueryOptionalParams) => Promise<void>;
}

export declare interface ParentNestedWithMultipleClientOptionalParams extends ClientOptions {
}

export declare interface ParentNestedWithMultipleClientWithQueryOptionalParams extends OperationOptions {
    format?: string;
}

export declare class ParentNestedWithPathClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(blobName: string, options?: ParentNestedWithPathClientOptionalParams);
    deleteStandalone(blobName: string, options?: DeleteStandaloneOptionalParams): Promise<void>;
    getStandalone(blobName: string, options?: GetStandaloneOptionalParams): Promise<BlobProperties>;
    withQuery(blobName: string, options?: WithQueryOptionalParams): Promise<void>;
}

export declare interface ParentNestedWithPathClientDeleteStandaloneOptionalParams extends OperationOptions {
}

export declare interface ParentNestedWithPathClientGetStandaloneOptionalParams extends OperationOptions {
}

export declare interface ParentNestedWithPathClientOperations {
    deleteStandalone: (blobName: string, options?: ParentNestedWithPathClientDeleteStandaloneOptionalParams) => Promise<void>;
    getStandalone: (blobName: string, options?: ParentNestedWithPathClientGetStandaloneOptionalParams) => Promise<BlobProperties>;
    withQuery: (blobName: string, options?: ParentNestedWithPathClientWithQueryOptionalParams) => Promise<void>;
}

export declare interface ParentNestedWithPathClientOptionalParams extends ClientOptions {
}

export declare interface ParentNestedWithPathClientWithQueryOptionalParams extends OperationOptions {
    format?: string;
}

export declare class ParentNestedWithQueryClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(blobName: string, options?: ParentNestedWithQueryClientOptionalParams);
    deleteStandalone(blobName: string, options?: ParentNestedWithQueryClientDeleteStandaloneOptionalParams): Promise<void>;
    getStandalone(blobName: string, options?: ParentNestedWithQueryClientGetStandaloneOptionalParams): Promise<BlobProperties>;
    withQuery(blobName: string, options?: ParentNestedWithQueryClientWithQueryOptionalParams): Promise<void>;
}

export declare interface ParentNestedWithQueryClientDeleteStandaloneOptionalParams extends OperationOptions {
}

export declare interface ParentNestedWithQueryClientGetStandaloneOptionalParams extends OperationOptions {
}

export declare interface ParentNestedWithQueryClientOperations {
    deleteStandalone: (blobName: string, options?: ParentClientParentNestedWithQueryClientDeleteStandaloneOptionalParams) => Promise<void>;
    getStandalone: (blobName: string, options?: ParentClientParentNestedWithQueryClientGetStandaloneOptionalParams) => Promise<BlobProperties>;
    withQuery: (blobName: string, options?: ParentClientParentNestedWithQueryClientWithQueryOptionalParams) => Promise<void>;
}

export declare interface ParentNestedWithQueryClientOptionalParams extends ClientOptions {
}

export declare interface ParentNestedWithQueryClientWithQueryOptionalParams extends OperationOptions {
}

export declare interface WithQueryOptionalParams extends OperationOptions {
    format?: string;
}

export { }
