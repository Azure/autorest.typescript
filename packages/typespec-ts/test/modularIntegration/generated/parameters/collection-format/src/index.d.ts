import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare class CollectionFormatClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: CollectionFormatClientOptionalParams);
    readonly query: QueryOperations;
    readonly header: HeaderOperations;
}

export declare interface CollectionFormatClientOptionalParams extends ClientOptions {
}

export declare interface CollectionFormatContext extends Client {
}

export declare interface HeaderCsvOptionalParams extends OperationOptions {
}

export declare interface HeaderOperations {
    csv: (colors: string[], options?: HeaderCsvOptionalParams) => Promise<void>;
}

export declare interface QueryCsvOptionalParams extends OperationOptions {
}

export declare interface QueryMultiOptionalParams extends OperationOptions {
}

export declare interface QueryOperations {
    multi: (colors: string[], options?: QueryMultiOptionalParams) => Promise<void>;
    ssv: (colors: string[], options?: QuerySsvOptionalParams) => Promise<void>;
    tsv: (colors: string[], options?: QueryTsvOptionalParams) => Promise<void>;
    pipes: (colors: string[], options?: QueryPipesOptionalParams) => Promise<void>;
    csv: (colors: string[], options?: QueryCsvOptionalParams) => Promise<void>;
}

export declare interface QueryPipesOptionalParams extends OperationOptions {
}

export declare interface QuerySsvOptionalParams extends OperationOptions {
}

export declare interface QueryTsvOptionalParams extends OperationOptions {
}

export { }
