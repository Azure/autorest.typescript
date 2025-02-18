import { ClientOptions } from '@azure-rest/core-client';
import { KeyCredential } from '@azure/core-auth';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare class ApiKeyClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(credential: KeyCredential, options?: ApiKeyClientOptionalParams);
    invalid(options?: InvalidOptionalParams): Promise<void>;
    valid(options?: ValidOptionalParams): Promise<void>;
}

export declare interface ApiKeyClientOptionalParams extends ClientOptions {
}

export declare interface InvalidAuth {
    error: string;
}

export declare interface InvalidOptionalParams extends OperationOptions {
}

export declare interface ValidOptionalParams extends OperationOptions {
}

export { }
