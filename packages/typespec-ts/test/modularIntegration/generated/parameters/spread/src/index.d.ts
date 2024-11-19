import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare interface AliasOperations {
    spreadAsRequestBody: (name: string, options?: AliasSpreadAsRequestBodyOptionalParams) => Promise<void>;
    spreadParameterWithInnerModel: (id: string, xMsTestHeader: string, name: string, options?: AliasSpreadParameterWithInnerModelOptionalParams) => Promise<void>;
    spreadAsRequestParameter: (id: string, xMsTestHeader: string, name: string, options?: AliasSpreadAsRequestParameterOptionalParams) => Promise<void>;
    spreadWithMultipleParameters: (id: string, xMsTestHeader: string, requiredString: string, requiredIntList: number[], options?: AliasSpreadWithMultipleParametersOptionalParams) => Promise<void>;
    spreadParameterWithInnerAlias: (id: string, xMsTestHeader: string, name: string, age: number, options?: AliasSpreadParameterWithInnerAliasOptionalParams) => Promise<void>;
}

export declare interface AliasSpreadAsRequestBodyOptionalParams extends OperationOptions {
}

export declare interface AliasSpreadAsRequestParameterOptionalParams extends OperationOptions {
}

export declare interface AliasSpreadParameterWithInnerAliasOptionalParams extends OperationOptions {
}

export declare interface AliasSpreadParameterWithInnerModelOptionalParams extends OperationOptions {
}

export declare interface AliasSpreadWithMultipleParametersOptionalParams extends OperationOptions {
    optionalInt?: number;
    optionalStringList?: string[];
}

export declare interface BodyParameter {
    name: string;
}

export declare interface ModelOperations {
    spreadAsRequestBody: (name: string, options?: ModelSpreadAsRequestBodyOptionalParams) => Promise<void>;
    spreadCompositeRequestOnlyWithBody: (body: BodyParameter, options?: ModelSpreadCompositeRequestOnlyWithBodyOptionalParams) => Promise<void>;
    spreadCompositeRequestWithoutBody: (name: string, testHeader: string, options?: ModelSpreadCompositeRequestWithoutBodyOptionalParams) => Promise<void>;
    spreadCompositeRequest: (name: string, testHeader: string, body: BodyParameter, options?: ModelSpreadCompositeRequestOptionalParams) => Promise<void>;
    spreadCompositeRequestMix: (name: string, testHeader: string, prop: string, options?: ModelSpreadCompositeRequestMixOptionalParams) => Promise<void>;
}

export declare interface ModelSpreadAsRequestBodyOptionalParams extends OperationOptions {
}

export declare interface ModelSpreadCompositeRequestMixOptionalParams extends OperationOptions {
}

export declare interface ModelSpreadCompositeRequestOnlyWithBodyOptionalParams extends OperationOptions {
}

export declare interface ModelSpreadCompositeRequestOptionalParams extends OperationOptions {
}

export declare interface ModelSpreadCompositeRequestWithoutBodyOptionalParams extends OperationOptions {
}

export declare class SpreadClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: SpreadClientOptionalParams);
    readonly model: ModelOperations;
    readonly alias: AliasOperations;
}

export declare interface SpreadClientOptionalParams extends ClientOptions {
}

export { }
