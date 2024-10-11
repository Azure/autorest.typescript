import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare type DaysOfWeekExtensibleEnum = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

export declare class ExtensibleClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: ExtensibleClientOptionalParams);
    readonly string: StringOperations;
}

export declare interface ExtensibleClientOptionalParams extends ClientOptions {
}

export declare interface ExtensibleContext extends Client {
}

export declare interface StringGetKnownValueOptionalParams extends OperationOptions {
}

export declare interface StringGetUnknownValueOptionalParams extends OperationOptions {
}

export declare interface StringOperations {
    getKnownValue: (options?: StringGetKnownValueOptionalParams) => Promise<DaysOfWeekExtensibleEnum>;
    getUnknownValue: (options?: StringGetUnknownValueOptionalParams) => Promise<DaysOfWeekExtensibleEnum>;
    putKnownValue: (body: DaysOfWeekExtensibleEnum, options?: StringPutKnownValueOptionalParams) => Promise<void>;
    putUnknownValue: (body: DaysOfWeekExtensibleEnum, options?: StringPutUnknownValueOptionalParams) => Promise<void>;
}

export declare interface StringPutKnownValueOptionalParams extends OperationOptions {
}

export declare interface StringPutUnknownValueOptionalParams extends OperationOptions {
}

export { }
