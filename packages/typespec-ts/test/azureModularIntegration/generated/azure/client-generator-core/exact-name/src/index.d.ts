import { ClientOptions } from '@azure-rest/core-client';
import { isRestError } from '@azure/core-rest-pipeline';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';
import { RestError } from '@azure/core-rest-pipeline';

export declare class ExactNameClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: ExactNameClientOptionalParams);
    readonly property: PropertyOperations;
    readonly model: ModelOperations;
}

export declare interface ExactNameClientOptionalParams extends ClientOptions {
}

export { isRestError }

export declare interface ModelOperations {
    send: (body: MyModel, options?: ModelSendOptionalParams) => Promise<MyModel>;
}

export declare interface ModelSendOptionalParams extends OperationOptions {
}

export declare interface MyModel {
    name: string;
}

export declare interface PropertyOperations {
    send: (body: ScopedModel, options?: PropertySendOptionalParams) => Promise<ScopedModel>;
}

export declare interface PropertySendOptionalParams extends OperationOptions {
}

export { RestError }

export declare interface ScopedModel {
    myName: string;
}

export { }
