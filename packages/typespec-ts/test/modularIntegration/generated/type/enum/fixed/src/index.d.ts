import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare type DaysOfWeekEnum = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

export declare class FixedClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: FixedClientOptionalParams);
    readonly string: StringOperations;
}

export declare interface FixedClientOptionalParams extends ClientOptions {
}

export declare interface StringGetKnownValueOptionalParams extends OperationOptions {
}

export declare interface StringOperations {
    putUnknownValue: (body: DaysOfWeekEnum, options?: StringPutUnknownValueOptionalParams) => Promise<void>;
    putKnownValue: (body: DaysOfWeekEnum, options?: StringPutKnownValueOptionalParams) => Promise<void>;
    getKnownValue: (options?: StringGetKnownValueOptionalParams) => Promise<DaysOfWeekEnum>;
}

export declare interface StringPutKnownValueOptionalParams extends OperationOptions {
    contentType?: "application/json";
}

export declare interface StringPutUnknownValueOptionalParams extends OperationOptions {
    contentType?: "application/json";
}

export { }
