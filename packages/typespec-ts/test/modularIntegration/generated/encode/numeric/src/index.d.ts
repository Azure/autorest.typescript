import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare class NumericClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: NumericClientOptionalParams);
    readonly property: PropertyOperations;
}

export declare interface NumericClientOptionalParams extends ClientOptions {
}

export declare interface PropertyOperations {
    uint8AsString: (value: Uint8AsStringProperty, options?: PropertyUint8AsStringOptionalParams) => Promise<Uint8AsStringProperty>;
    uint32AsStringOptional: (value: Uint32AsStringProperty, options?: PropertyUint32AsStringOptionalOptionalParams) => Promise<Uint32AsStringProperty>;
    safeintAsString: (value: SafeintAsStringProperty, options?: PropertySafeintAsStringOptionalParams) => Promise<SafeintAsStringProperty>;
}

export declare interface PropertySafeintAsStringOptionalParams extends OperationOptions {
}

export declare interface PropertyUint32AsStringOptionalOptionalParams extends OperationOptions {
}

export declare interface PropertyUint8AsStringOptionalParams extends OperationOptions {
}

export declare interface SafeintAsStringProperty {
    value: string;
}

export declare interface Uint32AsStringProperty {
    value?: string;
}

export declare interface Uint8AsStringProperty {
    value: string;
}

export { }
