import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare enum KnownApiVersions {
    V20250101 = "2025-01-01"
}

export declare interface PathApiVersionOptionalParams extends OperationOptions {
}

export declare class PathClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: PathClientOptionalParams);
    pathApiVersion(options?: PathApiVersionOptionalParams): Promise<void>;
}

export declare interface PathClientOptionalParams extends ClientOptions {
    version?: string;
}

export { }
