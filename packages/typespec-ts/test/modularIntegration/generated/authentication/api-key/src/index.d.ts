import { ClientOptions } from '@typespec/ts-http-runtime';
import { KeyCredential } from '@typespec/ts-http-runtime';
import { OperationOptions } from '@typespec/ts-http-runtime';
import { Pipeline } from '@typespec/ts-http-runtime';

export declare class ApiKeyClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(credential: KeyCredential, options?: ApiKeyClientOptionalParams);
    invalid(options?: InvalidOptionalParams): Promise<void>;
    valid(options?: ValidOptionalParams): Promise<void>;
}

export declare interface ApiKeyClientOptionalParams extends ClientOptions {
}

export declare interface InvalidOptionalParams extends OperationOptions {
}

export declare interface ValidOptionalParams extends OperationOptions {
}

export { }
