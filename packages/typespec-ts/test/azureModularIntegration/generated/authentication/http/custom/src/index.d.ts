import { ClientOptions } from '@azure-rest/core-client';
import { KeyCredential } from '@azure/core-auth';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare class CustomClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(credential: KeyCredential, options?: CustomClientOptionalParams);
    valid(options?: ValidOptionalParams): Promise<void>;
    invalid(options?: InvalidOptionalParams): Promise<void>;
}

export declare interface CustomClientOptionalParams extends ClientOptions {
}

export declare interface InvalidOptionalParams extends OperationOptions {
}

export declare interface ValidOptionalParams extends OperationOptions {
}

export { }
