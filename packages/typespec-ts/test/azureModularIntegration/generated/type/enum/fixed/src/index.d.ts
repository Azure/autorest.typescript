import { ClientOptions } from '@azure-rest/core-client';
import { isRestError } from '@azure/core-rest-pipeline';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';
import { RestError } from '@azure/core-rest-pipeline';

export declare type DaysOfWeekEnum = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

export declare class FixedClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: FixedClientOptionalParams);
    readonly string: StringOperations;
}

export declare interface FixedClientOptionalParams extends ClientOptions {
    endpointParam?: string;
}

export { isRestError }

export { RestError }

declare interface StringGetKnownValueOptionalParams extends OperationOptions {
}

export declare type StringGetKnownValueResponse = {
    body: DaysOfWeekEnum;
};

export declare interface StringOperations {
    putUnknownValue: (body: DaysOfWeekEnum, options?: StringPutUnknownValueOptionalParams) => Promise<void>;
    putKnownValue: (body: DaysOfWeekEnum, options?: StringPutKnownValueOptionalParams) => Promise<void>;
    getKnownValue: (options?: StringGetKnownValueOptionalParams) => Promise<StringGetKnownValueResponse>;
}

declare interface StringPutKnownValueOptionalParams extends OperationOptions {
}

declare interface StringPutUnknownValueOptionalParams extends OperationOptions {
}

export { }
