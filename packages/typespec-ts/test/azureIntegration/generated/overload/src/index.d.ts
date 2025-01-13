import type { Client } from '@azure-rest/core-client';
import type { ClientOptions } from '@azure-rest/core-client';
import type { HttpResponse } from '@azure-rest/core-client';
import type { RequestParameters } from '@azure-rest/core-client';
import type { StreamableMethod } from '@azure-rest/core-client';

declare function createClient(host: string, options?: OveralodClientOptions): OveralodClient;
export default createClient;

export declare interface GetThing {
    post(options: GetThingParameters): StreamableMethod<GetThing200Response>;
}

export declare interface GetThing200Response extends HttpResponse {
    status: "200";
    body: string | number;
}

export declare interface GetThingBodyParam {
    body: string | number;
}

export declare type GetThingParameters = GetThingBodyParam & RequestParameters;

export declare type OveralodClient = Client & {
    path: Routes;
};

export declare interface OveralodClientOptions extends ClientOptions {
}

export declare interface Process {
    put(options: ProcessParameters): StreamableMethod<Process204Response>;
}

export declare interface Process204Response extends HttpResponse {
    status: "204";
}

export declare interface ProcessBodyParam {
    body: {
        data: string | string;
    };
}

export declare interface ProcessMediaTypesParam {
    contentType: "text/plain" | "application/octet-stream";
}

export declare type ProcessParameters = ProcessMediaTypesParam & ProcessBodyParam & RequestParameters;

export declare interface Routes {
    (path: "/get"): GetThing;
    (path: "/changed-routes"): Upload;
    (path: "/changed-actions"): Process;
}

export declare interface Upload {
    put(options: UploadParameters): StreamableMethod<Upload204Response>;
}

export declare interface Upload204Response extends HttpResponse {
    status: "204";
}

export declare interface UploadBodyParam {
    body: string | string | Uint8Array | ReadableStream<Uint8Array> | NodeJS.ReadableStream;
}

export declare interface UploadMediaTypesParam {
    contentType: "text/plain" | "application/octet-stream";
}

export declare type UploadParameters = UploadMediaTypesParam & UploadBodyParam & RequestParameters;

export { }
