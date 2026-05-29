import { ClientOptions } from '@azure-rest/core-client';
import { isRestError } from '@azure/core-rest-pipeline';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';
import { RestError } from '@azure/core-rest-pipeline';

export declare interface ContentTypeHeaderInResponseOptionalParams extends OperationOptions {
}

export declare class HeadClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: HeadClientOptionalParams);
    contentTypeHeaderInResponse(options?: ContentTypeHeaderInResponseOptionalParams): Promise<void>;
}

export declare interface HeadClientOptionalParams extends ClientOptions {
}

export { isRestError }

export { RestError }

export { }
