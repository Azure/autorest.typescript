import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare interface BooleanGetOptionalParams extends OperationOptions {
}

export declare type BooleanGetResponse = {
    body: boolean;
};

export declare interface BooleanOperations {
    put: (body: boolean, options?: BooleanPutOptionalParams) => Promise<void>;
    get: (options?: BooleanGetOptionalParams) => Promise<BooleanGetResponse>;
}

export declare interface BooleanPutOptionalParams extends OperationOptions {
}

export declare interface Decimal128TypeOperations {
    requestParameter: (value: number, options?: Decimal128TypeRequestParameterOptionalParams) => Promise<void>;
    requestBody: (body: number, options?: Decimal128TypeRequestBodyOptionalParams) => Promise<void>;
    responseBody: (options?: Decimal128TypeResponseBodyOptionalParams) => Promise<Decimal128TypeResponseBodyResponse>;
}

export declare interface Decimal128TypeRequestBodyOptionalParams extends OperationOptions {
}

export declare interface Decimal128TypeRequestParameterOptionalParams extends OperationOptions {
}

export declare interface Decimal128TypeResponseBodyOptionalParams extends OperationOptions {
}

export declare type Decimal128TypeResponseBodyResponse = {
    body: number;
};

export declare interface Decimal128VerifyOperations {
    verify: (body: number, options?: Decimal128VerifyVerifyOptionalParams) => Promise<void>;
    prepareVerify: (options?: Decimal128VerifyPrepareVerifyOptionalParams) => Promise<Decimal128VerifyPrepareVerifyResponse>;
}

export declare interface Decimal128VerifyPrepareVerifyOptionalParams extends OperationOptions {
}

export declare type Decimal128VerifyPrepareVerifyResponse = {
    body: number[];
};

export declare interface Decimal128VerifyVerifyOptionalParams extends OperationOptions {
}

export declare interface DecimalTypeOperations {
    requestParameter: (value: number, options?: DecimalTypeRequestParameterOptionalParams) => Promise<void>;
    requestBody: (body: number, options?: DecimalTypeRequestBodyOptionalParams) => Promise<void>;
    responseBody: (options?: DecimalTypeResponseBodyOptionalParams) => Promise<DecimalTypeResponseBodyResponse>;
}

export declare interface DecimalTypeRequestBodyOptionalParams extends OperationOptions {
}

export declare interface DecimalTypeRequestParameterOptionalParams extends OperationOptions {
}

export declare interface DecimalTypeResponseBodyOptionalParams extends OperationOptions {
}

export declare type DecimalTypeResponseBodyResponse = {
    body: number;
};

export declare interface DecimalVerifyOperations {
    verify: (body: number, options?: DecimalVerifyVerifyOptionalParams) => Promise<void>;
    prepareVerify: (options?: DecimalVerifyPrepareVerifyOptionalParams) => Promise<DecimalVerifyPrepareVerifyResponse>;
}

export declare interface DecimalVerifyPrepareVerifyOptionalParams extends OperationOptions {
}

export declare type DecimalVerifyPrepareVerifyResponse = {
    body: number[];
};

export declare interface DecimalVerifyVerifyOptionalParams extends OperationOptions {
}

export declare class ScalarClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: ScalarClientOptionalParams);
    readonly decimal128Verify: Decimal128VerifyOperations;
    readonly decimalVerify: DecimalVerifyOperations;
    readonly decimal128Type: Decimal128TypeOperations;
    readonly decimalType: DecimalTypeOperations;
    readonly unknown: UnknownOperations;
    readonly boolean: BooleanOperations;
    readonly string: StringOperations;
}

export declare interface ScalarClientOptionalParams extends ClientOptions {
}

export declare interface StringGetOptionalParams extends OperationOptions {
}

export declare type StringGetResponse = {
    body: string;
};

export declare interface StringOperations {
    put: (body: string, options?: StringPutOptionalParams) => Promise<void>;
    get: (options?: StringGetOptionalParams) => Promise<StringGetResponse>;
}

export declare interface StringPutOptionalParams extends OperationOptions {
}

export declare interface UnknownGetOptionalParams extends OperationOptions {
}

export declare type UnknownGetResponse = {
    body: any;
};

export declare interface UnknownOperations {
    put: (body: any, options?: UnknownPutOptionalParams) => Promise<void>;
    get: (options?: UnknownGetOptionalParams) => Promise<UnknownGetResponse>;
}

export declare interface UnknownPutOptionalParams extends OperationOptions {
}

export { }
