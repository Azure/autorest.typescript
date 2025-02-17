import type { Client } from '@typespec/ts-http-runtime';
import type { ClientOptions } from '@typespec/ts-http-runtime';
import type { HttpResponse } from '@typespec/ts-http-runtime';
import type { RequestParameters } from '@typespec/ts-http-runtime';
import type { StreamableMethod } from '@typespec/ts-http-runtime';

declare function createClient(options?: ExtensibleClientOptions): ExtensibleClient;
export default createClient;

export declare type DaysOfWeekExtensibleEnum = string;

export declare type DaysOfWeekExtensibleEnumOutput = string;

export declare type ExtensibleClient = Client & {
    path: Routes;
};

export declare interface ExtensibleClientOptions extends ClientOptions {
}

export declare interface GetKnownValue {
    get(options?: GetKnownValueParameters): StreamableMethod<GetKnownValue200Response>;
    put(options: PutKnownValueParameters): StreamableMethod<PutKnownValue204Response>;
}

export declare interface GetKnownValue200Response extends HttpResponse {
    status: "200";
    body: DaysOfWeekExtensibleEnumOutput;
}

export declare type GetKnownValueParameters = RequestParameters;

export declare interface GetUnknownValue {
    get(options?: GetUnknownValueParameters): StreamableMethod<GetUnknownValue200Response>;
    put(options: PutUnknownValueParameters): StreamableMethod<PutUnknownValue204Response>;
}

export declare interface GetUnknownValue200Response extends HttpResponse {
    status: "200";
    body: DaysOfWeekExtensibleEnumOutput;
}

export declare type GetUnknownValueParameters = RequestParameters;

export declare interface PutKnownValue204Response extends HttpResponse {
    status: "204";
}

export declare interface PutKnownValueBodyParam {
    body: DaysOfWeekExtensibleEnum;
}

export declare type PutKnownValueParameters = PutKnownValueBodyParam & RequestParameters;

export declare interface PutUnknownValue204Response extends HttpResponse {
    status: "204";
}

export declare interface PutUnknownValueBodyParam {
    body: DaysOfWeekExtensibleEnum;
}

export declare type PutUnknownValueParameters = PutUnknownValueBodyParam & RequestParameters;

export declare interface Routes {
    (path: "/type/enum/extensible/string/known-value"): GetKnownValue;
    (path: "/type/enum/extensible/string/unknown-value"): GetUnknownValue;
}

export { }
