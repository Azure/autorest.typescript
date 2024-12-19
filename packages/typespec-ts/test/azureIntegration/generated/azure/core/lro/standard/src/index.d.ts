import { AbortSignalLike } from '@azure/abort-controller';
import { CancelOnProgress } from '@azure/core-lro';
import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { CreateHttpPollerOptions } from '@azure/core-lro';
import { ErrorModel } from '@azure-rest/core-client';
import { ErrorResponse } from '@azure-rest/core-client';
import { HttpResponse } from '@azure-rest/core-client';
import { OperationState } from '@azure/core-lro';
import { RawHttpHeaders } from '@azure/core-rest-pipeline';
import { RequestParameters } from '@azure-rest/core-client';
import { StreamableMethod } from '@azure-rest/core-client';

declare function createClient({ apiVersion, ...options }?: StandardClientOptions): StandardClient;
export default createClient;

export declare interface CreateOrReplace {
    put(options: CreateOrReplaceParameters): StreamableMethod<CreateOrReplace200Response | CreateOrReplace201Response | CreateOrReplaceDefaultResponse>;
    delete(options?: DeleteParameters): StreamableMethod<Delete202Response | DeleteDefaultResponse>;
}

export declare interface CreateOrReplace200Headers {
    "operation-location": string;
}

export declare interface CreateOrReplace200Response extends HttpResponse {
    status: "200";
    body: UserOutput;
    headers: RawHttpHeaders & CreateOrReplace200Headers;
}

export declare interface CreateOrReplace201Headers {
    "operation-location": string;
}

export declare interface CreateOrReplace201Response extends HttpResponse {
    status: "201";
    body: UserOutput;
    headers: RawHttpHeaders & CreateOrReplace201Headers;
}

export declare interface CreateOrReplaceBodyParam {
    body: User;
}

export declare interface CreateOrReplaceDefaultHeaders {
    "x-ms-error-code"?: string;
}

export declare interface CreateOrReplaceDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponse;
    headers: RawHttpHeaders & CreateOrReplaceDefaultHeaders;
}

export declare interface CreateOrReplaceLogicalResponse extends HttpResponse {
    status: "200";
    body: UserOutput;
}

export declare type CreateOrReplaceParameters = CreateOrReplaceBodyParam & RequestParameters;

export declare interface Delete202Headers {
    "operation-location": string;
}

export declare interface Delete202Response extends HttpResponse {
    status: "202";
    body: OperationStatusOutput;
    headers: RawHttpHeaders & Delete202Headers;
}

export declare interface DeleteDefaultHeaders {
    "x-ms-error-code"?: string;
}

export declare interface DeleteDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponse;
    headers: RawHttpHeaders & DeleteDefaultHeaders;
}

export declare interface DeleteLogicalResponse extends HttpResponse {
    status: "200";
    body: OperationStatusOutput;
}

export declare type DeleteParameters = RequestParameters;

export declare interface Export {
    post(options: ExportParameters): StreamableMethod<Export202Response | ExportDefaultResponse>;
}

export declare interface Export202Headers {
    "operation-location": string;
}

export declare interface Export202Response extends HttpResponse {
    status: "202";
    body: ResourceOperationStatusOutput;
    headers: RawHttpHeaders & Export202Headers;
}

export declare interface ExportDefaultHeaders {
    "x-ms-error-code"?: string;
}

export declare interface ExportDefaultResponse extends HttpResponse {
    status: string;
    body: ErrorResponse;
    headers: RawHttpHeaders & ExportDefaultHeaders;
}

export declare interface ExportedUserOutput {
    name: string;
    resourceUri: string;
}

export declare interface ExportLogicalResponse extends HttpResponse {
    status: "200";
    body: ResourceOperationStatusOutput;
}

export declare type ExportParameters = ExportQueryParam & RequestParameters;

export declare interface ExportQueryParam {
    queryParameters: ExportQueryParamProperties;
}

export declare interface ExportQueryParamProperties {
    format: string;
}

export declare function getLongRunningPoller<TResult extends ExportLogicalResponse | ExportDefaultResponse>(client: Client, initialResponse: Export202Response | ExportDefaultResponse, options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;

export declare function getLongRunningPoller<TResult extends CreateOrReplaceLogicalResponse | CreateOrReplaceDefaultResponse>(client: Client, initialResponse: CreateOrReplace200Response | CreateOrReplace201Response | CreateOrReplaceDefaultResponse, options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;

export declare function getLongRunningPoller<TResult extends DeleteLogicalResponse | DeleteDefaultResponse>(client: Client, initialResponse: Delete202Response | DeleteDefaultResponse, options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;

export declare function isUnexpected(response: CreateOrReplace200Response | CreateOrReplace201Response | CreateOrReplaceLogicalResponse | CreateOrReplaceDefaultResponse): response is CreateOrReplaceDefaultResponse;

export declare function isUnexpected(response: Delete202Response | DeleteLogicalResponse | DeleteDefaultResponse): response is DeleteDefaultResponse;

export declare function isUnexpected(response: Export202Response | ExportLogicalResponse | ExportDefaultResponse): response is ExportDefaultResponse;

export declare type OperationStateOutput = string;

export declare interface OperationStatusOutput {
    id: string;
    status: OperationStateOutput;
    error?: ErrorModel;
}

export declare interface ResourceOperationStatusOutput {
    id: string;
    status: OperationStateOutput;
    error?: ErrorModel;
    result?: ExportedUserOutput;
}

export declare interface Routes {
    (path: "/azure/core/lro/standard/users/{name}", name: string): CreateOrReplace;
    (path: "/azure/core/lro/standard/users/{name}:export", name: string): Export;
}

export declare interface SimplePollerLike<TState extends OperationState<TResult>, TResult> {
    isDone(): boolean;
    getOperationState(): TState;
    getResult(): TResult | undefined;
    poll(options?: {
        abortSignal?: AbortSignalLike;
    }): Promise<TState>;
    pollUntilDone(pollOptions?: {
        abortSignal?: AbortSignalLike;
    }): Promise<TResult>;
    onProgress(callback: (state: TState) => void): CancelOnProgress;
    serialize(): Promise<string>;
    submitted(): Promise<void>;
    toString(): string;
    stopPolling(): void;
    isStopped(): boolean;
}

export declare type StandardClient = Client & {
    path: Routes;
};

export declare interface StandardClientOptions extends ClientOptions {
    apiVersion?: string;
}

export declare interface User {
    role: string;
}

export declare interface UserOutput {
    readonly name: string;
    role: string;
}

export { }
