import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

declare interface ActionRequest {
    stringProperty: string;
    modelProperty?: Model;
    arrayProperty?: string[];
    recordProperty?: Record<string, string>;
}

declare interface ActionResponse {
    stringProperty: string;
    modelProperty?: Model;
    arrayProperty?: string[];
    recordProperty?: Record<string, string>;
}

export declare class AzureExampleClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: AzureExampleClientOptionalParams);
    basicAction(queryParam: string, headerParam: string, body: ActionRequest, options?: BasicActionOptionalParams): Promise<ActionResponse>;
}

export declare interface AzureExampleClientOptionalParams extends ClientOptions {
    apiVersion?: string;
}

export declare interface BasicActionOptionalParams extends OperationOptions {
}

declare type Enum = "EnumValue1";

declare interface Model {
    int32Property?: number;
    float32Property?: number;
    enumProperty?: Enum;
}

export { }
