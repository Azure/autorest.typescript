import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare interface DefaultError {
    code: string;
}

export declare interface ErrorInRange {
    code: string;
    message: string;
}

export declare interface ErrorResponseStatusCode404OptionalParams extends OperationOptions {
}

export declare interface ErrorResponseStatusCodeInRangeOptionalParams extends OperationOptions {
}

export declare interface NotFoundError {
    code: string;
    resourceId: string;
}

export declare interface Standard4XXError {
    code: string;
}

export declare class StatusCodeRangeClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: StatusCodeRangeClientOptionalParams);
    errorResponseStatusCode404(options?: ErrorResponseStatusCode404OptionalParams): Promise<void>;
    errorResponseStatusCodeInRange(options?: ErrorResponseStatusCodeInRangeOptionalParams): Promise<void>;
}

export declare interface StatusCodeRangeClientOptionalParams extends ClientOptions {
}

export { }
