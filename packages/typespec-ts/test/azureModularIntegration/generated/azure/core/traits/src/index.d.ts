import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare interface RepeatableActionOptionalParams extends OperationOptions {
    repeatabilityRequestId?: string;
    repeatabilityFirstSent?: Date;
}

export declare interface SmokeTestOptionalParams extends OperationOptions {
    ifMatch?: string;
    ifNoneMatch?: string;
    ifUnmodifiedSince?: Date;
    ifModifiedSince?: Date;
    clientRequestId?: string;
}

export declare class TraitsClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: TraitsClientOptionalParams);
    repeatableAction(id: number, body: UserActionParam, options?: RepeatableActionOptionalParams): Promise<UserActionResponse>;
    smokeTest(id: number, foo: string, options?: SmokeTestOptionalParams): Promise<User>;
}

export declare interface TraitsClientOptionalParams extends ClientOptions {
    apiVersion?: string;
}

declare interface User {
    readonly id: number;
    name?: string;
}

declare interface UserActionParam {
    userActionValue: string;
}

declare interface UserActionResponse {
    userActionResult: string;
}

export { }
