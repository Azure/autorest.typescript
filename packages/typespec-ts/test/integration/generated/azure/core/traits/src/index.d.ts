import type { Client } from '@azure-rest/core-client';
import type { ClientOptions } from '@azure-rest/core-client';
import type { ErrorResponse } from '@azure-rest/core-client';
import type { HttpResponse } from '@azure-rest/core-client';
import type { RawHttpHeaders } from '@azure/core-rest-pipeline';
import type { RawHttpHeadersInput } from '@azure/core-rest-pipeline';
import type { RequestParameters } from '@azure-rest/core-client';
import type { StreamableMethod } from '@azure-rest/core-client';

export declare type AzureCoreTraitsClient = Client & {
    path: Routes;
};

export declare interface AzureCoreTraitsClientOptions extends ClientOptions {
    apiVersion?: string;
}

declare function createClient({ apiVersion, ...options }?: AzureCoreTraitsClientOptions): AzureCoreTraitsClient;
export default createClient;

export declare function isUnexpected(response: SmokeTest200Response | SmokeTestDefaultResponse): response is SmokeTestDefaultResponse;

export declare function isUnexpected(response: RepeatableAction200Response | RepeatableActionDefaultResponse): response is RepeatableActionDefaultResponse;

export declare type RepeatabilityResultOutput = "accepted" | "rejected";

export declare interface RepeatableAction {
    post(options: RepeatableActionParameters): StreamableMethod<RepeatableAction200Response | RepeatableActionDefaultResponse>;
}

export declare interface RepeatableAction200Headers {
    "repeatability-result"?: RepeatabilityResultOutput;
}

export declare interface RepeatableAction200Response extends HttpResponse {
    status: "200";
    body: UserActionResponseOutput;
    headers: RawHttpHeaders & RepeatableAction200Headers;
}

export declare interface RepeatableActionBodyParam {
    body: UserActionParam;
}

export declare interface RepeatableActionDefaultHeaders {
    "x-ms-error-code"?: string;
}

export declare interface RepeatableActionDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponse;
    headers: RawHttpHeaders & RepeatableActionDefaultHeaders;
}

export declare interface RepeatableActionHeaderParam {
    headers?: RawHttpHeadersInput & RepeatableActionHeaders;
}

export declare interface RepeatableActionHeaders {
    "Repeatability-Request-ID"?: string;
    "Repeatability-First-Sent"?: string;
}

export declare type RepeatableActionParameters = RepeatableActionHeaderParam & RepeatableActionBodyParam & RequestParameters;

export declare interface Routes {
    (path: "/azure/core/traits/user/{id}", id: number): SmokeTest;
    (path: "/azure/core/traits/user/{id}:repeatableAction", id: number): RepeatableAction;
}

export declare interface SmokeTest {
    get(options: SmokeTestParameters): StreamableMethod<SmokeTest200Response | SmokeTestDefaultResponse>;
}

export declare interface SmokeTest200Headers {
    bar: string;
    etag?: string;
    "x-ms-client-request-id"?: string;
}

export declare interface SmokeTest200Response extends HttpResponse {
    status: "200";
    body: UserOutput;
    headers: RawHttpHeaders & SmokeTest200Headers;
}

export declare interface SmokeTestDefaultHeaders {
    "x-ms-error-code"?: string;
}

export declare interface SmokeTestDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponse;
    headers: RawHttpHeaders & SmokeTestDefaultHeaders;
}

export declare interface SmokeTestHeaderParam {
    headers: RawHttpHeadersInput & SmokeTestHeaders;
}

export declare interface SmokeTestHeaders {
    foo: string;
    "If-Match"?: string;
    "If-None-Match"?: string;
    "If-Unmodified-Since"?: string;
    "If-Modified-Since"?: string;
    "x-ms-client-request-id"?: string;
}

export declare type SmokeTestParameters = SmokeTestHeaderParam & RequestParameters;

export declare interface UserActionParam {
    userActionValue: string;
}

export declare interface UserActionResponseOutput {
    userActionResult: string;
}

export declare interface UserOutput {
    readonly id: number;
    name?: string;
}

export { }
