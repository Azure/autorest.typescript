import type { Client } from '@azure-rest/core-client';
import type { ClientOptions } from '@azure-rest/core-client';
import type { HttpResponse } from '@azure-rest/core-client';
import type { RawHttpHeadersInput } from '@azure/core-rest-pipeline';
import type { RequestParameters } from '@azure-rest/core-client';
import type { StreamableMethod } from '@azure-rest/core-client';

declare function createClient(options?: OverrideClientOptions): OverrideClient;
export default createClient;

export declare interface Group {
    get(options: GroupParameters): StreamableMethod<Group204Response>;
}

export declare interface Group204Response extends HttpResponse {
    status: "204";
}

export declare type GroupParameters = GroupQueryParam & RequestParameters;

export declare interface GroupQueryParam {
    queryParameters: GroupQueryParamProperties;
}

export declare interface GroupQueryParamProperties {
    param1: string;
    param2: string;
}

export declare type OverrideClient = Client & {
    path: Routes;
};

export declare interface OverrideClientOptions extends ClientOptions {
}

export declare interface RemoveOptional {
    get(options?: RemoveOptionalParameters): StreamableMethod<RemoveOptional204Response>;
}

export declare interface RemoveOptional204Response extends HttpResponse {
    status: "204";
}

export declare interface RemoveOptionalHeaderParam {
    headers?: RawHttpHeadersInput & RemoveOptionalHeaders;
}

export declare interface RemoveOptionalHeaders {
    param4?: string;
}

export declare type RemoveOptionalParameters = RemoveOptionalQueryParam & RemoveOptionalHeaderParam & RequestParameters;

export declare interface RemoveOptionalQueryParam {
    queryParameters?: RemoveOptionalQueryParamProperties;
}

export declare interface RemoveOptionalQueryParamProperties {
    param2?: string;
    param3?: string;
}

export declare interface Reorder {
    get(options?: ReorderParameters): StreamableMethod<Reorder204Response>;
}

export declare interface Reorder204Response extends HttpResponse {
    status: "204";
}

export declare type ReorderParameters = RequestParameters;

export declare interface RequireOptional {
    get(options?: RequireOptionalParameters): StreamableMethod<RequireOptional204Response>;
}

export declare interface RequireOptional204Response extends HttpResponse {
    status: "204";
}

export declare type RequireOptionalParameters = RequestParameters;

export declare interface Routes {
    (path: "/azure/client-generator-core/override/reorder/{param2}/{param1}", param2: string, param1: string): Reorder;
    (path: "/azure/client-generator-core/override/group"): Group;
    (path: "/azure/client-generator-core/override/require-optional/{param1}/{param2}", param1: string, param2: string): RequireOptional;
    (path: "/azure/client-generator-core/override/remove-optional/{param1}", param1: string): RemoveOptional;
}

export { }
