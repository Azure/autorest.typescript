import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { HttpResponse } from '@azure-rest/core-client';
import { RawHttpHeaders } from '@azure/core-rest-pipeline';
import { RequestParameters } from '@azure-rest/core-client';
import { StreamableMethod } from '@azure-rest/core-client';

declare function createClient(options?: MediaTypeClientOptions): MediaTypeClient;
export default createClient;

export declare interface GetAsJson {
    get(options?: StringBodyGetAsJsonParameters): StreamableMethod<StringBodyGetAsJson200Response>;
}

export declare interface GetAsText {
    get(options?: StringBodyGetAsTextParameters): StreamableMethod<StringBodyGetAsText200Response>;
}

export declare type MediaTypeClient = Client & {
    path: Routes;
};

export declare interface MediaTypeClientOptions extends ClientOptions {
}

export declare interface Routes {
    (path: "/payload/media-type/string-body/sendAsText"): SendAsText;
    (path: "/payload/media-type/string-body/getAsText"): GetAsText;
    (path: "/payload/media-type/string-body/sendAsJson"): SendAsJson;
    (path: "/payload/media-type/string-body/getAsJson"): GetAsJson;
}

export declare interface SendAsJson {
    post(options: StringBodySendAsJsonParameters): StreamableMethod<StringBodySendAsJson200Response>;
}

export declare interface SendAsText {
    post(options: StringBodySendAsTextParameters): StreamableMethod<StringBodySendAsText200Response>;
}

export declare interface StringBodyGetAsJson200Headers {
    "content-type": "application/json";
}

export declare interface StringBodyGetAsJson200Response extends HttpResponse {
    status: "200";
    body: string;
    headers: RawHttpHeaders & StringBodyGetAsJson200Headers;
}

export declare type StringBodyGetAsJsonParameters = RequestParameters;

export declare interface StringBodyGetAsText200Headers {
    "content-type": "text/plain";
}

export declare interface StringBodyGetAsText200Response extends HttpResponse {
    status: "200";
    body: string;
    headers: RawHttpHeaders & StringBodyGetAsText200Headers;
}

export declare type StringBodyGetAsTextParameters = RequestParameters;

export declare interface StringBodySendAsJson200Response extends HttpResponse {
    status: "200";
}

export declare interface StringBodySendAsJsonBodyParam {
    body: string;
}

export declare interface StringBodySendAsJsonMediaTypesParam {
    contentType: "application/json";
}

export declare type StringBodySendAsJsonParameters = StringBodySendAsJsonMediaTypesParam & StringBodySendAsJsonBodyParam & RequestParameters;

export declare interface StringBodySendAsText200Response extends HttpResponse {
    status: "200";
}

export declare interface StringBodySendAsTextBodyParam {
    body: string;
}

export declare interface StringBodySendAsTextMediaTypesParam {
    contentType: "text/plain";
}

export declare type StringBodySendAsTextParameters = StringBodySendAsTextMediaTypesParam & StringBodySendAsTextBodyParam & RequestParameters;

export { }
