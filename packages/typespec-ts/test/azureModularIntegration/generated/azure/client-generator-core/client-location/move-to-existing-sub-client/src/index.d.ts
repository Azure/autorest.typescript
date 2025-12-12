import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare interface AdminOperationsDeleteUserOptionalParams extends OperationOptions {
}

export declare interface AdminOperationsGetAdminInfoOptionalParams extends OperationOptions {
}

export declare interface AdminOperationsOperations {
    deleteUser: (options?: AdminOperationsDeleteUserOptionalParams) => Promise<void>;
    getAdminInfo: (options?: AdminOperationsGetAdminInfoOptionalParams) => Promise<void>;
}

export declare class MoveToExistingSubClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: MoveToExistingSubClientOptionalParams);
    readonly userOperations: UserOperationsOperations;
    readonly adminOperations: AdminOperationsOperations;
}

export declare interface MoveToExistingSubClientOptionalParams extends ClientOptions {
}

export declare interface UserOperationsGetUserOptionalParams extends OperationOptions {
}

export declare interface UserOperationsOperations {
    getUser: (options?: UserOperationsGetUserOptionalParams) => Promise<void>;
}

export { }
