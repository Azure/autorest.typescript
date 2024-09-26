import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';
import { TokenCredential } from '@azure/core-auth';

export declare function createOAuth2(credential: TokenCredential, options?: OAuth2ClientOptionalParams): OAuth2Context;

export declare function invalid(context: OAuth2Context, options?: InvalidOptionalParams): Promise<void>;

export declare interface InvalidAuth {
    error: string;
}

export declare interface InvalidOptionalParams extends OperationOptions {
}

export declare class OAuth2Client {
    private _client;
    readonly pipeline: Pipeline;
    constructor(credential: TokenCredential, options?: OAuth2ClientOptionalParams);
    valid(options?: ValidOptionalParams): Promise<void>;
    invalid(options?: InvalidOptionalParams): Promise<void>;
}

export declare interface OAuth2ClientOptionalParams extends ClientOptions {
}

export declare interface OAuth2Context extends Client {
}

export declare function valid(context: OAuth2Context, options?: ValidOptionalParams): Promise<void>;

export declare interface ValidOptionalParams extends OperationOptions {
}

export { }
