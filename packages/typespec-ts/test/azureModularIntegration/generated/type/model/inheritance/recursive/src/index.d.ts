import { ClientOptions } from '@azure-rest/core-client';
import { isRestError } from '@azure/core-rest-pipeline';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';
import { RestError } from '@azure/core-rest-pipeline';

declare interface Element_2 {
    extension?: Extension[];
}
export { Element_2 as Element }

export declare interface Extension extends Element_2 {
    level: number;
}

export declare interface GetOptionalParams extends OperationOptions {
}

export { isRestError }

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
    endpointParam?: string;
}

export { RestError }

export { }
