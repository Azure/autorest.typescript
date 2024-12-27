import type { Client } from '@azure-rest/core-client';
import type { ClientOptions } from '@azure-rest/core-client';
import type { HttpResponse } from '@azure-rest/core-client';
import type { KeyCredential } from '@azure/core-auth';
import type { RequestParameters } from '@azure-rest/core-client';
import type { StreamableMethod } from '@azure-rest/core-client';

export declare type AuthHttpCustomClient = Client & {
    path: Routes;
};

export declare interface AuthHttpCustomClientOptions extends ClientOptions {
}

declare function createClient(credentials: KeyCredential, options?: AuthHttpCustomClientOptions): AuthHttpCustomClient;
export default createClient;

export declare interface Invalid {
    get(options?: InvalidParameters): StreamableMethod<Invalid204Response | Invalid403Response>;
}

export declare interface Invalid204Response extends HttpResponse {
    status: "204";
}

export declare interface Invalid403Response extends HttpResponse {
    status: "403";
    body: InvalidAuthOutput;
}

export declare interface InvalidAuthOutput {
    error: string;
}

export declare type InvalidParameters = RequestParameters;

export declare interface Routes {
    (path: "/authentication/http/custom/valid"): Valid;
    (path: "/authentication/http/custom/invalid"): Invalid;
}

export declare interface Valid {
    get(options?: ValidParameters): StreamableMethod<Valid204Response>;
}

export declare interface Valid204Response extends HttpResponse {
    status: "204";
}

export declare type ValidParameters = RequestParameters;

export { }
