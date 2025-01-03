import { Client } from '@typespec/ts-http-runtime';
import { ClientOptions } from '@typespec/ts-http-runtime';
import { HttpResponse } from '@typespec/ts-http-runtime';
import { RequestParameters } from '@typespec/ts-http-runtime';
import { StreamableMethod } from '@typespec/ts-http-runtime';

export declare type BasicClient = Client & {
    path: Routes;
};

export declare interface BasicClientOptions extends ClientOptions {
}

declare function createClient(options?: BasicClientOptions): BasicClient;
export default createClient;

export declare interface ExplicitBodySimple {
    put(options: ExplicitBodySimpleParameters): StreamableMethod<ExplicitBodySimple204Response>;
}

export declare interface ExplicitBodySimple204Response extends HttpResponse {
    status: "204";
}

export declare interface ExplicitBodySimpleBodyParam {
    body: User;
}

export declare type ExplicitBodySimpleParameters = ExplicitBodySimpleBodyParam & RequestParameters;

export declare interface ImplicitBodySimple {
    put(options: ImplicitBodySimpleParameters): StreamableMethod<ImplicitBodySimple204Response>;
}

export declare interface ImplicitBodySimple204Response extends HttpResponse {
    status: "204";
}

export declare interface ImplicitBodySimpleBodyParam {
    body: {
        name: string;
    };
}

export declare type ImplicitBodySimpleParameters = ImplicitBodySimpleBodyParam & RequestParameters;

export declare interface Routes {
    (path: "/parameters/basic/explicit-body/simple"): ExplicitBodySimple;
    (path: "/parameters/basic/implicit-body/simple"): ImplicitBodySimple;
}

export declare interface User {
    name: string;
}

export { }
