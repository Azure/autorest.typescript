import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare type DaysOfWeekEnum = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

export declare class FixedClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: FixedClientOptionalParams);
    readonly string: StringModelOperations;
}

export declare interface FixedClientOptionalParams extends ClientOptions {
}

export declare interface StringModelGetKnownValueOptionalParams extends OperationOptions {
}

export declare interface StringModelOperations {
    getKnownValue: (options?: StringModelGetKnownValueOptionalParams) => Promise<DaysOfWeekEnum>;
    putKnownValue: (body: DaysOfWeekEnum, options?: StringModelPutKnownValueOptionalParams) => Promise<void>;
    putUnknownValue: (body: DaysOfWeekEnum, options?: StringModelPutUnknownValueOptionalParams) => Promise<void>;
}

export declare interface StringModelPutKnownValueOptionalParams extends OperationOptions {
}

export declare interface StringModelPutUnknownValueOptionalParams extends OperationOptions {
}

export { }
