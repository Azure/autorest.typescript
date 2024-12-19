import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare interface BooleanGetOptionalParams extends OperationOptions {
}

export declare interface BooleanOperations {
    get: (options?: BooleanGetOptionalParams) => Promise<boolean>;
    put: (body: boolean, options?: BooleanPutOptionalParams) => Promise<void>;
}

export declare interface BooleanPutOptionalParams extends OperationOptions {
}

export declare interface Decimal128TypeOperations {
    responseBody: (options?: Decimal128TypeResponseBodyOptionalParams) => Promise<number>;
    requestBody: (body: number, options?: Decimal128TypeRequestBodyOptionalParams) => Promise<void>;
    requestParameter: (value: number, options?: Decimal128TypeRequestParameterOptionalParams) => Promise<void>;
}

export declare interface Decimal128TypeRequestBodyOptionalParams extends OperationOptions {
}

export declare interface Decimal128TypeRequestParameterOptionalParams extends OperationOptions {
}

export declare interface Decimal128TypeResponseBodyOptionalParams extends OperationOptions {
}

export declare interface Decimal128VerifyOperations {
    prepareVerify: (options?: Decimal128VerifyPrepareVerifyOptionalParams) => Promise<number[]>;
    verify: (body: number, options?: Decimal128VerifyVerifyOptionalParams) => Promise<void>;
}

export declare interface Decimal128VerifyPrepareVerifyOptionalParams extends OperationOptions {
}

export declare interface Decimal128VerifyVerifyOptionalParams extends OperationOptions {
}

export declare interface DecimalTypeOperations {
    responseBody: (options?: DecimalTypeResponseBodyOptionalParams) => Promise<number>;
    requestBody: (body: number, options?: DecimalTypeRequestBodyOptionalParams) => Promise<void>;
    requestParameter: (value: number, options?: DecimalTypeRequestParameterOptionalParams) => Promise<void>;
}

export declare interface DecimalTypeRequestBodyOptionalParams extends OperationOptions {
}

export declare interface DecimalTypeRequestParameterOptionalParams extends OperationOptions {
}

export declare interface DecimalTypeResponseBodyOptionalParams extends OperationOptions {
}

export declare interface DecimalVerifyOperations {
    prepareVerify: (options?: DecimalVerifyPrepareVerifyOptionalParams) => Promise<number[]>;
    verify: (body: number, options?: DecimalVerifyVerifyOptionalParams) => Promise<void>;
}

export declare interface DecimalVerifyPrepareVerifyOptionalParams extends OperationOptions {
}

export declare interface DecimalVerifyVerifyOptionalParams extends OperationOptions {
}

export declare class ScalarClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: ScalarClientOptionalParams);
    readonly string: StringOperations;
    readonly boolean: BooleanOperations;
    readonly unknown: UnknownOperations;
    readonly decimalType: DecimalTypeOperations;
    readonly decimal128Type: Decimal128TypeOperations;
    readonly decimalVerify: DecimalVerifyOperations;
    readonly decimal128Verify: Decimal128VerifyOperations;
}

export declare interface ScalarClientOptionalParams extends ClientOptions {
}

export declare interface StringGetOptionalParams extends OperationOptions {
}

export declare interface StringOperations {
    get: (options?: StringGetOptionalParams) => Promise<string>;
    put: (body: string, options?: StringPutOptionalParams) => Promise<void>;
}

export declare interface StringPutOptionalParams extends OperationOptions {
}

export declare interface UnknownGetOptionalParams extends OperationOptions {
}

export declare interface UnknownOperations {
    get: (options?: UnknownGetOptionalParams) => Promise<any>;
    put: (body: any, options?: UnknownPutOptionalParams) => Promise<void>;
}

export declare interface UnknownPutOptionalParams extends OperationOptions {
}

export { }
