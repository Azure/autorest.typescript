import { ClientOptions } from '@azure-rest/core-client';
import { isRestError } from '@azure/core-rest-pipeline';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';
import { RestError } from '@azure/core-rest-pipeline';

export declare interface HeadAsBooleanExistsOptionalParams extends OperationOptions {
}

export declare type HeadAsBooleanExistsResponse = {
    body: boolean;
};

export declare interface HeadAsBooleanNotExistsOptionalParams extends OperationOptions {
}

export declare type HeadAsBooleanNotExistsResponse = {
    body: boolean;
};

export declare interface HeadAsBooleanOperations {
    notExists: (options?: HeadAsBooleanNotExistsOptionalParams) => Promise<HeadAsBooleanNotExistsResponse>;
    exists: (options?: HeadAsBooleanExistsOptionalParams) => Promise<HeadAsBooleanExistsResponse>;
}

export { isRestError }

export declare class ResponseAsBoolClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: ResponseAsBoolClientOptionalParams);
    readonly headAsBoolean: HeadAsBooleanOperations;
}

export declare interface ResponseAsBoolClientOptionalParams extends ClientOptions {
}

export { RestError }

export { }
