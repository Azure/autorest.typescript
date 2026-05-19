import { ClientOptions } from '@azure-rest/core-client';
import { isRestError } from '@azure/core-rest-pipeline';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';
import { RestError } from '@azure/core-rest-pipeline';

export declare class DurationClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: DurationClientOptionalParams);
    durationConstant(body: DurationModel, options?: DurationConstantOptionalParams): Promise<void>;
}

export declare interface DurationClientOptionalParams extends ClientOptions {
}

export declare interface DurationConstantOptionalParams extends OperationOptions {
}

export declare interface DurationModel {
    input: string;
}

export { isRestError }

export { RestError }

export { }
