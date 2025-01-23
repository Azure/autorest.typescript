import type { Client } from '@typespec/ts-http-runtime';
import type { ClientOptions } from '@typespec/ts-http-runtime';
import type { HttpResponse } from '@typespec/ts-http-runtime';
import type { KeyCredential } from '@typespec/ts-http-runtime';
import type { RequestParameters } from '@typespec/ts-http-runtime';
import type { StreamableMethod } from '@typespec/ts-http-runtime';
import type { TokenCredential } from '@typespec/ts-http-runtime';

export declare type AuthUnionClient = Client & {
    path: Routes;
};

export declare interface AuthUnionClientOptions extends ClientOptions {
}

declare function createClient(credentials: TokenCredential | KeyCredential, options?: AuthUnionClientOptions): AuthUnionClient;
export default createClient;

export declare interface Routes {
    (path: "/authentication/union/validkey"): ValidKey;
    (path: "/authentication/union/validtoken"): ValidToken;
}

export declare interface ValidKey {
    get(options?: ValidKeyParameters): StreamableMethod<ValidKey204Response>;
}

export declare interface ValidKey204Response extends HttpResponse {
    status: "204";
}

export declare type ValidKeyParameters = RequestParameters;

export declare interface ValidToken {
    get(options?: ValidTokenParameters): StreamableMethod<ValidToken204Response>;
}

export declare interface ValidToken204Response extends HttpResponse {
    status: "204";
}

export declare type ValidTokenParameters = RequestParameters;

export { }
