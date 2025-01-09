import type { Client } from '@typespec/ts-http-runtime';
import type { ClientOptions } from '@typespec/ts-http-runtime';
import type { HttpResponse } from '@typespec/ts-http-runtime';
import type { RequestParameters } from '@typespec/ts-http-runtime';
import type { StreamableMethod } from '@typespec/ts-http-runtime';

export declare interface BodyModel {
    name: string;
}

export declare type BodyOptionalityClient = Client & {
    path: Routes;
};

export declare interface BodyOptionalityClientOptions extends ClientOptions {
}

declare function createClient(options?: BodyOptionalityClientOptions): BodyOptionalityClient;
export default createClient;

declare interface Omit_2 {
    post(options?: OptionalExplicitOmitParameters): StreamableMethod<OptionalExplicitOmit204Response>;
}
export { Omit_2 as Omit }

export declare interface OptionalExplicitOmit204Response extends HttpResponse {
    status: "204";
}

export declare interface OptionalExplicitOmitBodyParam {
    body?: BodyModel;
}

export declare type OptionalExplicitOmitParameters = OptionalExplicitOmitBodyParam & RequestParameters;

export declare interface OptionalExplicitSetModel204Response extends HttpResponse {
    status: "204";
}

export declare interface OptionalExplicitSetModelBodyParam {
    body?: BodyModel;
}

export declare type OptionalExplicitSetModelParameters = OptionalExplicitSetModelBodyParam & RequestParameters;

export declare interface RequiredExplicit {
    post(options: RequiredExplicitParameters): StreamableMethod<RequiredExplicit204Response>;
}

export declare interface RequiredExplicit204Response extends HttpResponse {
    status: "204";
}

export declare interface RequiredExplicitBodyParam {
    body: BodyModel;
}

export declare type RequiredExplicitParameters = RequiredExplicitBodyParam & RequestParameters;

export declare interface RequiredImplicit {
    post(options: RequiredImplicitParameters): StreamableMethod<RequiredImplicit204Response>;
}

export declare interface RequiredImplicit204Response extends HttpResponse {
    status: "204";
}

export declare interface RequiredImplicitBodyParam {
    body: BodyModel;
}

export declare type RequiredImplicitParameters = RequiredImplicitBodyParam & RequestParameters;

export declare interface Routes {
    (path: "/parameters/body-optionality/required-explicit"): RequiredExplicit;
    (path: "/parameters/body-optionality/required-implicit"): RequiredImplicit;
    (path: "/parameters/body-optionality/optional-explicit/set"): SetModel;
    (path: "/parameters/body-optionality/optional-explicit/omit"): Omit_2;
}

export declare interface SetModel {
    post(options?: OptionalExplicitSetModelParameters): StreamableMethod<OptionalExplicitSetModel204Response>;
}

export { }
