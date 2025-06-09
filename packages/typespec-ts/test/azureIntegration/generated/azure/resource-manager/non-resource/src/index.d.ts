import type { Client } from '@azure-rest/core-client';
import type { ClientOptions } from '@azure-rest/core-client';
import type { HttpResponse } from '@azure-rest/core-client';
import type { RequestParameters } from '@azure-rest/core-client';
import type { StreamableMethod } from '@azure-rest/core-client';

export declare type AzureArmNonResourceClient = Client & {
    path: Routes;
};

export declare interface AzureArmNonResourceClientOptions extends ClientOptions {
    apiVersion?: string;
}

export declare interface Create200Response extends HttpResponse {
    status: "200";
    body: NonResourceOutput;
}

export declare interface CreateBodyParam {
    body: NonResource;
}

declare function createClient({ apiVersion, ...options }?: AzureArmNonResourceClientOptions): AzureArmNonResourceClient;
export default createClient;

export declare interface CreateDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare type CreateParameters = CreateBodyParam & RequestParameters;

export declare interface ErrorAdditionalInfoOutput {
    readonly type?: string;
    readonly info?: any;
}

export declare interface ErrorDetailOutput {
    readonly code?: string;
    readonly message?: string;
    readonly target?: string;
    readonly details?: Array<ErrorDetailOutput>;
    readonly additionalInfo?: Array<ErrorAdditionalInfoOutput>;
}

export declare interface ErrorResponseOutput {
    error?: ErrorDetailOutput;
}

export declare interface Get {
    get(options?: GetParameters): StreamableMethod<Get200Response | GetDefaultResponse>;
    put(options: CreateParameters): StreamableMethod<Create200Response | CreateDefaultResponse>;
}

export declare interface Get200Response extends HttpResponse {
    status: "200";
    body: NonResourceOutput;
}

export declare interface GetDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponseOutput;
}

export declare type GetParameters = RequestParameters;

export declare function isUnexpected(response: Get200Response | GetDefaultResponse): response is GetDefaultResponse;

export declare function isUnexpected(response: Create200Response | CreateDefaultResponse): response is CreateDefaultResponse;

export declare interface NonResource {
    id?: string;
    name?: string;
    type?: string;
}

export declare interface NonResourceOutput {
    id?: string;
    name?: string;
    type?: string;
}

export declare interface Routes {
    (path: "/subscriptions/{subscriptionId}/providers/Microsoft.NonResource/locations/{location}/otherParameters/{parameter}", subscriptionId: string, location: string, parameter: string): Get;
}

export { }
