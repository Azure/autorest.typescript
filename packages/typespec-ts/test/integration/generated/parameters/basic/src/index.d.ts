import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { HttpResponse } from '@azure-rest/core-client';
import { RequestParameters } from '@azure-rest/core-client';
import { StreamableMethod } from '@azure-rest/core-client';

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
    put(options?: ImplicitBodySimpleParameters): StreamableMethod<ImplicitBodySimple204Response>;
}

export declare interface ImplicitBodySimple204Response extends HttpResponse {
    status: "204";
}

export declare interface ImplicitBodySimpleBodyParam {
    body?: {
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
