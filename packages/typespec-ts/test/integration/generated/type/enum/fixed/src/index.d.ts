import type { Client } from '@typespec/ts-http-runtime';
import type { ClientOptions } from '@typespec/ts-http-runtime';
import type { HttpResponse } from '@typespec/ts-http-runtime';
import type { RequestParameters } from '@typespec/ts-http-runtime';
import type { StreamableMethod } from '@typespec/ts-http-runtime';

declare function createClient(options?: FixedClientOptions): FixedClient;
export default createClient;

export declare type DaysOfWeekEnum = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

export declare type DaysOfWeekEnumOutput = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

export declare type FixedClient = Client & {
    path: Routes;
};

export declare interface FixedClientOptions extends ClientOptions {
}

export declare interface GetKnownValue {
    get(options?: GetKnownValueParameters): StreamableMethod<GetKnownValue200Response>;
    put(options: PutKnownValueParameters): StreamableMethod<PutKnownValue204Response>;
}

export declare interface GetKnownValue200Response extends HttpResponse {
    status: "200";
    body: DaysOfWeekEnumOutput;
}

export declare type GetKnownValueParameters = RequestParameters;

export declare interface PutKnownValue204Response extends HttpResponse {
    status: "204";
}

export declare interface PutKnownValueBodyParam {
    body: DaysOfWeekEnum;
}

export declare type PutKnownValueParameters = PutKnownValueBodyParam & RequestParameters;

export declare interface PutUnknownValue {
    put(options: PutUnknownValueParameters): StreamableMethod<PutUnknownValue204Response>;
}

export declare interface PutUnknownValue204Response extends HttpResponse {
    status: "204";
}

export declare interface PutUnknownValueBodyParam {
    body: DaysOfWeekEnum;
}

export declare type PutUnknownValueParameters = PutUnknownValueBodyParam & RequestParameters;

export declare interface Routes {
    (path: "/type/enum/fixed/string/known-value"): GetKnownValue;
    (path: "/type/enum/fixed/string/unknown-value"): PutUnknownValue;
}

export { }
