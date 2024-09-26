import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare function createTraits(options?: TraitsClientOptionalParams): TraitsContext;

export declare function repeatableAction(context: TraitsContext, id: number, body: UserActionParam, options?: RepeatableActionOptionalParams): Promise<UserActionResponse>;

export declare interface RepeatableActionOptionalParams extends OperationOptions {
    repeatabilityRequestId?: string;
    repeatabilityFirstSent?: Date;
}

export declare function smokeTest(context: TraitsContext, id: number, foo: string, options?: SmokeTestOptionalParams): Promise<User>;

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
    smokeTest(id: number, foo: string, options?: SmokeTestOptionalParams): Promise<User>;
    repeatableAction(id: number, body: UserActionParam, options?: RepeatableActionOptionalParams): Promise<UserActionResponse>;
}

export declare interface TraitsClientOptionalParams extends ClientOptions {
    apiVersion?: string;
}

export declare interface TraitsContext extends Client {
}

export declare interface User {
    readonly id: number;
    name?: string;
}

export declare interface UserActionParam {
    userActionValue: string;
}

export declare interface UserActionResponse {
    userActionResult: string;
}

export { }
