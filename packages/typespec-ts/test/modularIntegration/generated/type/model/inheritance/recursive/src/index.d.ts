import { ClientOptions } from '@typespec/ts-http-runtime';
import { OperationOptions } from '@typespec/ts-http-runtime';
import { Pipeline } from '@typespec/ts-http-runtime';

declare interface Element_2 {
    extension?: Extension[];
}
export { Element_2 as Element }

export declare interface Extension extends Element_2 {
    level: number;
}

export declare interface GetOptionalParams extends OperationOptions {
}

export declare interface PutOptionalParams extends OperationOptions {
}

export declare class RecursiveClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: RecursiveClientOptionalParams);
    get(options?: GetOptionalParams): Promise<Extension>;
    put(input: Extension, options?: PutOptionalParams): Promise<void>;
}

export declare interface RecursiveClientOptionalParams extends ClientOptions {
}

export { }
