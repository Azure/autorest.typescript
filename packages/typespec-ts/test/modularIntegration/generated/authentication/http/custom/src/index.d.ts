import { ClientOptions } from '@typespec/ts-http-runtime';
import { KeyCredential } from '@typespec/ts-http-runtime';
import { OperationOptions } from '@typespec/ts-http-runtime';
import { Pipeline } from '@typespec/ts-http-runtime';

export declare class CustomClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(credential: KeyCredential, options?: CustomClientOptionalParams);
    invalid(options?: InvalidOptionalParams): Promise<void>;
    valid(options?: ValidOptionalParams): Promise<void>;
}

export declare interface CustomClientOptionalParams extends ClientOptions {
}

export declare interface InvalidAuth {
    error: string;
}

export declare interface InvalidOptionalParams extends OperationOptions {
}

export declare interface ValidOptionalParams extends OperationOptions {
}

export { }
