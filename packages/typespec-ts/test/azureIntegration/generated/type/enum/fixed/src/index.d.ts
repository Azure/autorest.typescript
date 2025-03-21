import type { Client } from '@azure-rest/core-client';
import type { ClientOptions } from '@azure-rest/core-client';
import type { HttpResponse } from '@azure-rest/core-client';
import type { RawHttpHeaders } from '@azure/core-rest-pipeline';
import type { RequestParameters } from '@azure-rest/core-client';
import type { StreamableMethod } from '@azure-rest/core-client';

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

export declare interface GetKnownValue200Headers {
    "content-type": "application/json";
}

export declare interface GetKnownValue200Response extends HttpResponse {
    status: "200";
    body: DaysOfWeekEnumOutput;
    headers: RawHttpHeaders & GetKnownValue200Headers;
}

export declare type GetKnownValueParameters = RequestParameters;

export declare interface PutKnownValue204Response extends HttpResponse {
    status: "204";
}

export declare interface PutKnownValueBodyParam {
    body: DaysOfWeekEnum;
}

export declare interface PutKnownValueMediaTypesParam {
    contentType: "application/json";
}

export declare type PutKnownValueParameters = PutKnownValueMediaTypesParam & PutKnownValueBodyParam & RequestParameters;

export declare interface PutUnknownValue {
    put(options: PutUnknownValueParameters): StreamableMethod<PutUnknownValue204Response>;
}

export declare interface PutUnknownValue204Response extends HttpResponse {
    status: "204";
}

export declare interface PutUnknownValueBodyParam {
    body: DaysOfWeekEnum;
}

export declare interface PutUnknownValueMediaTypesParam {
    contentType: "application/json";
}

export declare type PutUnknownValueParameters = PutUnknownValueMediaTypesParam & PutUnknownValueBodyParam & RequestParameters;

export declare interface Routes {
    (path: "/type/enum/fixed/string/known-value"): GetKnownValue;
    (path: "/type/enum/fixed/string/unknown-value"): PutUnknownValue;
}

export { }
