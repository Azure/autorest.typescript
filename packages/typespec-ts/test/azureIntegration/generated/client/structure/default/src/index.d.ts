import type { Client } from '@azure-rest/core-client';
import type { ClientOptions } from '@azure-rest/core-client';
import type { HttpResponse } from '@azure-rest/core-client';
import type { RequestParameters } from '@azure-rest/core-client';
import type { StreamableMethod } from '@azure-rest/core-client';

export declare type ClientType = "default" | "multi-client" | "renamed-operation" | "two-operation-group" | "client-operation-group";

declare function createClient(endpointParam: string, clientParam: ClientType, options?: ServiceClientOptions): ServiceClient;
export default createClient;

export declare interface Eight {
    post(options?: EightParameters): StreamableMethod<Eight204Response>;
}

export declare interface Eight204Response extends HttpResponse {
    status: "204";
}

export declare type EightParameters = RequestParameters;

export declare interface Five {
    post(options?: FiveParameters): StreamableMethod<Five204Response>;
}

export declare interface Five204Response extends HttpResponse {
    status: "204";
}

export declare type FiveParameters = RequestParameters;

export declare interface Four {
    post(options?: FourParameters): StreamableMethod<Four204Response>;
}

export declare interface Four204Response extends HttpResponse {
    status: "204";
}

export declare type FourParameters = RequestParameters;

export declare interface Nine {
    post(options?: NineParameters): StreamableMethod<Nine204Response>;
}

export declare interface Nine204Response extends HttpResponse {
    status: "204";
}

export declare type NineParameters = RequestParameters;

export declare interface One {
    post(options?: OneParameters): StreamableMethod<One204Response>;
}

export declare interface One204Response extends HttpResponse {
    status: "204";
}

export declare type OneParameters = RequestParameters;

export declare interface Routes {
    (path: "/one"): One;
    (path: "/two"): Two;
    (path: "/eight"): Eight;
    (path: "/three"): Three;
    (path: "/four"): Four;
    (path: "/five"): Five;
    (path: "/six"): Six;
    (path: "/seven"): Seven;
    (path: "/nine"): Nine;
}

export declare type ServiceClient = Client & {
    path: Routes;
};

export declare interface ServiceClientOptions extends ClientOptions {
}

export declare interface Seven {
    post(options?: SevenParameters): StreamableMethod<Seven204Response>;
}

export declare interface Seven204Response extends HttpResponse {
    status: "204";
}

export declare type SevenParameters = RequestParameters;

export declare interface Six {
    post(options?: SixParameters): StreamableMethod<Six204Response>;
}

export declare interface Six204Response extends HttpResponse {
    status: "204";
}

export declare type SixParameters = RequestParameters;

export declare interface Three {
    post(options?: ThreeParameters): StreamableMethod<Three204Response>;
}

export declare interface Three204Response extends HttpResponse {
    status: "204";
}

export declare type ThreeParameters = RequestParameters;

export declare interface Two {
    post(options?: TwoParameters): StreamableMethod<Two204Response>;
}

export declare interface Two204Response extends HttpResponse {
    status: "204";
}

export declare type TwoParameters = RequestParameters;

export { }
