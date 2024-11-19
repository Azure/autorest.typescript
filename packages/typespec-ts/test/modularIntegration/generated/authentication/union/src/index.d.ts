import { ClientOptions } from '@azure-rest/core-client';
import { KeyCredential } from '@azure/core-auth';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';
import { TokenCredential } from '@azure/core-auth';

export declare class UnionClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(credential: KeyCredential | TokenCredential, options?: UnionClientOptionalParams);
    validKey(options?: ValidKeyOptionalParams): Promise<void>;
    validToken(options?: ValidTokenOptionalParams): Promise<void>;
}

export declare interface UnionClientOptionalParams extends ClientOptions {
}

export declare interface ValidKeyOptionalParams extends OperationOptions {
}

export declare interface ValidTokenOptionalParams extends OperationOptions {
}

export { }
