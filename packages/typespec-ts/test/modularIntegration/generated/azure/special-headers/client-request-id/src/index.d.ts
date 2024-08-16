import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare interface GetOptionalParams extends OperationOptions {
    clientRequestId?: string;
}

export declare class XmsRequestIdClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: XmsRequestIdClientOptionalParams);
    get(options?: GetOptionalParams): Promise<void>;
}

export declare interface XmsRequestIdClientOptionalParams extends ClientOptions {
}

export { }
