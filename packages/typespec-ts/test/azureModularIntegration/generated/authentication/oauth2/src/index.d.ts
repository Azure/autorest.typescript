import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';
import { TokenCredential } from '@azure/core-auth';

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

export declare interface ValidOptionalParams extends OperationOptions {
}

export { }
