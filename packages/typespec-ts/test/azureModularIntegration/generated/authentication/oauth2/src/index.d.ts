import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';
import { TokenCredential } from '@azure/core-auth';

export declare interface InvalidAuth {
    error: string;
}

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
