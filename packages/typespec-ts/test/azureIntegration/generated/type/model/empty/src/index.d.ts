import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { HttpResponse } from '@azure-rest/core-client';
import { RequestParameters } from '@azure-rest/core-client';
import { StreamableMethod } from '@azure-rest/core-client';

declare function createClient(options?: EmptyClientOptions): EmptyClient;
export default createClient;

export declare type EmptyClient = Client & {
    path: Routes;
};

export declare interface EmptyClientOptions extends ClientOptions {
}

export declare interface EmptyInput {
}

export declare interface EmptyInputOutput {
}

export declare interface EmptyInputOutputOutput {
}

export declare interface EmptyOutputOutput {
}

export declare interface GetEmpty200Response extends HttpResponse {
    status: "200";
    body: EmptyOutputOutput;
}

export declare type GetEmptyParameters = RequestParameters;

export declare interface PostRoundTripEmpty {
    post(options: PostRoundTripEmptyParameters): StreamableMethod<PostRoundTripEmpty200Response>;
}

export declare interface PostRoundTripEmpty200Response extends HttpResponse {
    status: "200";
    body: EmptyInputOutputOutput;
}

export declare interface PostRoundTripEmptyBodyParam {
    body: EmptyInputOutput;
}

export declare type PostRoundTripEmptyParameters = PostRoundTripEmptyBodyParam & RequestParameters;

export declare interface PutEmpty {
    put(options: PutEmptyParameters): StreamableMethod<PutEmpty204Response>;
    get(options?: GetEmptyParameters): StreamableMethod<GetEmpty200Response>;
}

export declare interface PutEmpty204Response extends HttpResponse {
    status: "204";
}

export declare interface PutEmptyBodyParam {
    body: EmptyInput;
}

export declare type PutEmptyParameters = PutEmptyBodyParam & RequestParameters;

export declare interface Routes {
    (path: "/type/model/empty/alone"): PutEmpty;
    (path: "/type/model/empty/round-trip"): PostRoundTripEmpty;
}

export { }
