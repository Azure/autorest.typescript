import { ClientOptions } from '@azure-rest/core-client';
import { isRestError } from '@azure/core-rest-pipeline';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';
import { RestError } from '@azure/core-rest-pipeline';

export declare interface HeaderApiVersionOptionalParams extends OperationOptions {
}

export declare class HeaderClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: HeaderClientOptionalParams);
    headerApiVersion(options?: HeaderApiVersionOptionalParams): Promise<void>;
}

export declare interface HeaderClientOptionalParams extends ClientOptions {
    endpointParam?: string;
    version?: string;
}

export { isRestError }

export declare enum KnownApiVersions {
    V20250101 = "2025-01-01"
}

export { RestError }

export { }
