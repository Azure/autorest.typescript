import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare class ConditionalRequestClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: ConditionalRequestClientOptionalParams);
    postIfUnmodifiedSince(options?: PostIfUnmodifiedSinceOptionalParams): Promise<void>;
    headIfModifiedSince(options?: HeadIfModifiedSinceOptionalParams): Promise<void>;
    postIfNoneMatch(options?: PostIfNoneMatchOptionalParams): Promise<void>;
    postIfMatch(options?: PostIfMatchOptionalParams): Promise<void>;
}

export declare interface ConditionalRequestClientOptionalParams extends ClientOptions {
}

export declare interface HeadIfModifiedSinceOptionalParams extends OperationOptions {
    ifModifiedSince?: Date;
}

export declare interface PostIfMatchOptionalParams extends OperationOptions {
    ifMatch?: string;
}

export declare interface PostIfNoneMatchOptionalParams extends OperationOptions {
    ifNoneMatch?: string;
}

export declare interface PostIfUnmodifiedSinceOptionalParams extends OperationOptions {
    ifUnmodifiedSince?: Date;
}

export { }
