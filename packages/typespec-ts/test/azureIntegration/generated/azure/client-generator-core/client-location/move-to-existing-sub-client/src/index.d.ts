import type { Client } from '@azure-rest/core-client';
import type { ClientOptions } from '@azure-rest/core-client';
import type { HttpResponse } from '@azure-rest/core-client';
import type { RequestParameters } from '@azure-rest/core-client';
import type { StreamableMethod } from '@azure-rest/core-client';

declare function createClient(options?: MoveToExistingSubClientClientOptions): MoveToExistingSubClientClient;
export default createClient;

export declare interface DeleteUser204Response extends HttpResponse {
    status: "204";
}

export declare type DeleteUserParameters = RequestParameters;

export declare interface GetAdminInfo {
    get(options?: GetAdminInfoParameters): StreamableMethod<GetAdminInfo204Response>;
}

export declare interface GetAdminInfo204Response extends HttpResponse {
    status: "204";
}

export declare type GetAdminInfoParameters = RequestParameters;

export declare interface GetUser {
    get(options?: GetUserParameters): StreamableMethod<GetUser204Response>;
    delete(options?: DeleteUserParameters): StreamableMethod<DeleteUser204Response>;
}

export declare interface GetUser204Response extends HttpResponse {
    status: "204";
}

export declare type GetUserParameters = RequestParameters;

export declare type MoveToExistingSubClientClient = Client & {
    path: Routes;
};

export declare interface MoveToExistingSubClientClientOptions extends ClientOptions {
}

export declare interface Routes {
    (path: "/azure/client-generator-core/client-location/move-to-existing-sub-client/admin"): GetAdminInfo;
    (path: "/azure/client-generator-core/client-location/move-to-existing-sub-client/user"): GetUser;
}

export { }
