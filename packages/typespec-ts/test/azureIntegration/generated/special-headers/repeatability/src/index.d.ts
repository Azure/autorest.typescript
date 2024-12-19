import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { HttpResponse } from '@azure-rest/core-client';
import { RawHttpHeaders } from '@azure/core-rest-pipeline';
import { RawHttpHeadersInput } from '@azure/core-rest-pipeline';
import { RequestParameters } from '@azure-rest/core-client';
import { StreamableMethod } from '@azure-rest/core-client';

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
