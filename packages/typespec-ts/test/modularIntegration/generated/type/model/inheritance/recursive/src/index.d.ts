import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare function createRecursive(options?: RecursiveClientOptionalParams): RecursiveContext;

declare interface Element_2 {
    extension?: Extension[];
}
export { Element_2 as Element }

export declare interface Extension extends Element_2 {
    level: number;
}

export declare function get(context: RecursiveContext, options?: GetOptionalParams): Promise<Extension>;

export declare interface GetOptionalParams extends OperationOptions {
}

export declare function put(context: RecursiveContext, input: Extension, options?: PutOptionalParams): Promise<void>;

export declare interface PutOptionalParams extends OperationOptions {
}

export declare class RecursiveClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: RecursiveClientOptionalParams);
    put(input: Extension, options?: PutOptionalParams): Promise<void>;
    get(options?: GetOptionalParams): Promise<Extension>;
}

export declare interface RecursiveClientOptionalParams extends ClientOptions {
}

export declare interface RecursiveContext extends Client {
}

export { }
