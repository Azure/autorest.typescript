import { Client } from '@typespec/ts-http-runtime';
import { ClientOptions } from '@typespec/ts-http-runtime';
import { HttpResponse } from '@typespec/ts-http-runtime';
import { RawHttpHeaders } from '@typespec/ts-http-runtime';
import { RawHttpHeadersInput } from '@typespec/ts-http-runtime';
import { RequestParameters } from '@typespec/ts-http-runtime';
import { StreamableMethod } from '@typespec/ts-http-runtime';

declare function createClient(options?: RepeatabilityClientOptions): RepeatabilityClient;
export default createClient;

export declare interface ImmediateSuccess {
    post(options: ImmediateSuccessParameters): StreamableMethod<ImmediateSuccess204Response>;
}

export declare interface ImmediateSuccess204Headers {
    "repeatability-result"?: "accepted" | "rejected";
}

export declare interface ImmediateSuccess204Response extends HttpResponse {
    status: "204";
    headers: RawHttpHeaders & ImmediateSuccess204Headers;
}

export declare interface ImmediateSuccessHeaderParam {
    headers: RawHttpHeadersInput & ImmediateSuccessHeaders;
}

export declare interface ImmediateSuccessHeaders {
    "Repeatability-Request-ID": string;
    "Repeatability-First-Sent": string;
}

export declare type ImmediateSuccessParameters = ImmediateSuccessHeaderParam & RequestParameters;

export declare type RepeatabilityClient = Client & {
    path: Routes;
};

export declare interface RepeatabilityClientOptions extends ClientOptions {
}

export declare interface Routes {
    (path: "/special-headers/repeatability/immediateSuccess"): ImmediateSuccess;
}

export { }
