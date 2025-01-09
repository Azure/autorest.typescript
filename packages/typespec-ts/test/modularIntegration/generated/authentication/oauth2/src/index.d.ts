import { ClientOptions } from '@typespec/ts-http-runtime';
import { OperationOptions } from '@typespec/ts-http-runtime';
import { Pipeline } from '@typespec/ts-http-runtime';
import { TokenCredential } from '@typespec/ts-http-runtime';

export declare interface InvalidOptionalParams extends OperationOptions {
}

export declare class OAuth2Client {
    private _client;
    readonly pipeline: Pipeline;
    constructor(credential: TokenCredential, options?: OAuth2ClientOptionalParams);
    invalid(options?: InvalidOptionalParams): Promise<void>;
    valid(options?: ValidOptionalParams): Promise<void>;
}

export declare interface OAuth2ClientOptionalParams extends ClientOptions {
}

export declare interface ValidOptionalParams extends OperationOptions {
}

export { }
