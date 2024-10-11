import { Client } from '@azure-rest/core-client';
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

export declare interface FixedContext extends Client {
}

export declare interface StringGetKnownValueOptionalParams extends OperationOptions {
}

export declare interface StringOperations {
    getKnownValue: (options?: StringGetKnownValueOptionalParams) => Promise<DaysOfWeekEnum>;
    putKnownValue: (body: DaysOfWeekEnum, options?: StringPutKnownValueOptionalParams) => Promise<void>;
    putUnknownValue: (body: DaysOfWeekEnum, options?: StringPutUnknownValueOptionalParams) => Promise<void>;
}

export declare interface StringPutKnownValueOptionalParams extends OperationOptions {
}

export declare interface StringPutUnknownValueOptionalParams extends OperationOptions {
}

export { }
