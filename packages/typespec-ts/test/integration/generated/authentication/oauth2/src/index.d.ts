import type { Client } from '@typespec/ts-http-runtime';
import type { ClientOptions } from '@typespec/ts-http-runtime';
import type { HttpResponse } from '@typespec/ts-http-runtime';
import type { RequestParameters } from '@typespec/ts-http-runtime';
import type { StreamableMethod } from '@typespec/ts-http-runtime';
import type { TokenCredential } from '@typespec/ts-http-runtime';

export declare type AuthOauth2Client = Client & {
    path: Routes;
};

export declare interface AuthOauth2ClientOptions extends ClientOptions {
}

declare function createClient(credentials: TokenCredential, options?: AuthOauth2ClientOptions): AuthOauth2Client;
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
    (path: "/authentication/oauth2/valid"): Valid;
    (path: "/authentication/oauth2/invalid"): Invalid;
}

export declare interface Valid {
    get(options?: ValidParameters): StreamableMethod<Valid204Response>;
}

export declare interface Valid204Response extends HttpResponse {
    status: "204";
}

export declare type ValidParameters = RequestParameters;

export { }
