import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare class UnionClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: UnionClientOptionalParams);
    validToken(options?: ValidTokenOptionalParams): Promise<void>;
    validNoAuth(options?: ValidNoAuthOptionalParams): Promise<void>;
}

export declare interface UnionClientOptionalParams extends ClientOptions {
}

export declare interface ValidNoAuthOptionalParams extends OperationOptions {
}

export declare interface ValidTokenOptionalParams extends OperationOptions {
}

export { }
