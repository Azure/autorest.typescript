import { ClientOptions } from '@azure-rest/core-client';
import { isRestError } from '@azure/core-rest-pipeline';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';
import { RestError } from '@azure/core-rest-pipeline';

export declare class ConditionalRequestClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: ConditionalRequestClientOptionalParams);
    postCustomIfNoneMatch(options?: PostCustomIfNoneMatchOptionalParams): Promise<void>;
    postCustomIfMatch(options?: PostCustomIfMatchOptionalParams): Promise<void>;
    postIfNoneMatch(options?: PostIfNoneMatchOptionalParams): Promise<void>;
    postIfMatch(options?: PostIfMatchOptionalParams): Promise<void>;
}

export declare interface ConditionalRequestClientOptionalParams extends ClientOptions {
}

export { isRestError }

export declare interface PostCustomIfMatchOptionalParams extends OperationOptions {
    ifMatch?: string;
}

export declare interface PostCustomIfNoneMatchOptionalParams extends OperationOptions {
    ifNoneMatch?: string;
}

export declare interface PostIfMatchOptionalParams extends OperationOptions {
    ifMatch?: string;
}

export declare interface PostIfNoneMatchOptionalParams extends OperationOptions {
    ifNoneMatch?: string;
}

export { RestError }

export { }
