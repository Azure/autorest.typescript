import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare type DaysOfWeekExtensibleEnum = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

export declare class ExtensibleClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: ExtensibleClientOptionalParams);
    readonly string: StringModelOperations;
}

export declare interface ExtensibleClientOptionalParams extends ClientOptions {
}

export declare interface StringModelGetKnownValueOptionalParams extends OperationOptions {
}

export declare interface StringModelGetUnknownValueOptionalParams extends OperationOptions {
}

export declare interface StringModelOperations {
    getKnownValue: (options?: StringModelGetKnownValueOptionalParams) => Promise<DaysOfWeekExtensibleEnum>;
    getUnknownValue: (options?: StringModelGetUnknownValueOptionalParams) => Promise<DaysOfWeekExtensibleEnum>;
    putKnownValue: (body: DaysOfWeekExtensibleEnum, options?: StringModelPutKnownValueOptionalParams) => Promise<void>;
    putUnknownValue: (body: DaysOfWeekExtensibleEnum, options?: StringModelPutUnknownValueOptionalParams) => Promise<void>;
}

export declare interface StringModelPutKnownValueOptionalParams extends OperationOptions {
}

export declare interface StringModelPutUnknownValueOptionalParams extends OperationOptions {
}

export { }
