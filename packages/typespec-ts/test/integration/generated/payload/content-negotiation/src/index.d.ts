import { Client } from '@typespec/ts-http-runtime';
import { ClientOptions } from '@typespec/ts-http-runtime';
import { HttpResponse } from '@typespec/ts-http-runtime';
import { RawHttpHeaders } from '@typespec/ts-http-runtime';
import { RawHttpHeadersInput } from '@typespec/ts-http-runtime';
import { RequestParameters } from '@typespec/ts-http-runtime';
import { StreamableMethod } from '@typespec/ts-http-runtime';

export declare type ContentNegotiationClient = Client & {
    path: Routes;
};

export declare interface ContentNegotiationClientOptions extends ClientOptions {
}

declare function createClient(options?: ContentNegotiationClientOptions): ContentNegotiationClient;
export default createClient;

export declare interface DifferentBodyGetAvatarAsJson200Headers {
    "content-type": "application/json";
}

export declare interface DifferentBodyGetAvatarAsJson200Response extends HttpResponse {
    status: "200";
    body: PngImageAsJsonOutput;
    headers: RawHttpHeaders & DifferentBodyGetAvatarAsJson200Headers;
}

export declare interface DifferentBodyGetAvatarAsJsonHeaderParam {
    headers: RawHttpHeadersInput & DifferentBodyGetAvatarAsJsonHeaders;
}

export declare interface DifferentBodyGetAvatarAsJsonHeaders {
    accept: "application/json";
}

export declare type DifferentBodyGetAvatarAsJsonParameters = DifferentBodyGetAvatarAsJsonHeaderParam & RequestParameters;

export declare interface DifferentBodyGetAvatarAsPng {
    get(options: DifferentBodyGetAvatarAsPngParameters): StreamableMethod<DifferentBodyGetAvatarAsPng200Response>;
    get(options: DifferentBodyGetAvatarAsJsonParameters): StreamableMethod<DifferentBodyGetAvatarAsJson200Response>;
}

export declare interface DifferentBodyGetAvatarAsPng200Headers {
    "content-type": "image/png";
}

export declare interface DifferentBodyGetAvatarAsPng200Response extends HttpResponse {
    status: "200";
    body: Uint8Array;
    headers: RawHttpHeaders & DifferentBodyGetAvatarAsPng200Headers;
}

export declare interface DifferentBodyGetAvatarAsPngHeaderParam {
    headers: RawHttpHeadersInput & DifferentBodyGetAvatarAsPngHeaders;
}

export declare interface DifferentBodyGetAvatarAsPngHeaders {
    accept: "image/png";
}

export declare type DifferentBodyGetAvatarAsPngParameters = DifferentBodyGetAvatarAsPngHeaderParam & RequestParameters;

export declare interface PngImageAsJsonOutput {
    content: string;
}

export declare interface Routes {
    (path: "/content-negotiation/same-body"): SameBodyGetAvatarAsPng;
    (path: "/content-negotiation/different-body"): DifferentBodyGetAvatarAsPng;
}

export declare interface SameBodyGetAvatarAsJpeg200Headers {
    "content-type": "image/jpeg";
}

export declare interface SameBodyGetAvatarAsJpeg200Response extends HttpResponse {
    status: "200";
    body: Uint8Array;
    headers: RawHttpHeaders & SameBodyGetAvatarAsJpeg200Headers;
}

export declare interface SameBodyGetAvatarAsJpegHeaderParam {
    headers: RawHttpHeadersInput & SameBodyGetAvatarAsJpegHeaders;
}

export declare interface SameBodyGetAvatarAsJpegHeaders {
    accept: "image/jpeg";
}

export declare type SameBodyGetAvatarAsJpegParameters = SameBodyGetAvatarAsJpegHeaderParam & RequestParameters;

export declare interface SameBodyGetAvatarAsPng {
    get(options: SameBodyGetAvatarAsPngParameters): StreamableMethod<SameBodyGetAvatarAsPng200Response>;
    get(options: SameBodyGetAvatarAsJpegParameters): StreamableMethod<SameBodyGetAvatarAsJpeg200Response>;
}

export declare interface SameBodyGetAvatarAsPng200Headers {
    "content-type": "image/png";
}

export declare interface SameBodyGetAvatarAsPng200Response extends HttpResponse {
    status: "200";
    body: Uint8Array;
    headers: RawHttpHeaders & SameBodyGetAvatarAsPng200Headers;
}

export declare interface SameBodyGetAvatarAsPngHeaderParam {
    headers: RawHttpHeadersInput & SameBodyGetAvatarAsPngHeaders;
}

export declare interface SameBodyGetAvatarAsPngHeaders {
    accept: "image/png";
}

export declare type SameBodyGetAvatarAsPngParameters = SameBodyGetAvatarAsPngHeaderParam & RequestParameters;

export { }
