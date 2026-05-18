import { ClientOptions } from '@azure-rest/core-client';
import { isRestError } from '@azure/core-rest-pipeline';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';
import { RestError } from '@azure/core-rest-pipeline';

export { isRestError }

export declare interface NormalOptionalParams extends OperationOptions {
}

export declare interface OptionalOptionalParams extends OperationOptions {
    name?: string;
}

export declare class PathClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: PathClientOptionalParams);
    optional(options?: OptionalOptionalParams): Promise<void>;
    normal(name: string, options?: NormalOptionalParams): Promise<void>;
}

export declare interface PathClientOptionalParams extends ClientOptions {
    endpointParam?: string;
}

export { RestError }

export { }
