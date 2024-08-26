import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { HttpResponse } from '@azure-rest/core-client';
import { RawHttpHeadersInput } from '@azure/core-rest-pipeline';
import { RequestParameters } from '@azure-rest/core-client';
import { StreamableMethod } from '@azure-rest/core-client';

export declare interface ActionRequest {
    stringProperty: string;
    modelProperty?: Model;
    arrayProperty?: string[];
    recordProperty?: Record<string, string>;
}

export declare interface ActionResponseOutput {
    stringProperty: string;
    modelProperty?: ModelOutput;
    arrayProperty?: string[];
    recordProperty?: Record<string, string>;
}

export declare interface Basic {
    post(options: BasicParameters): StreamableMethod<Basic200Response>;
}

export declare interface Basic200Response extends HttpResponse {
    status: "200";
    body: ActionResponseOutput;
}

export declare interface BasicBodyParam {
    body: ActionRequest;
}

export declare type BasicClient = Client & {
    path: Routes;
};

export declare interface BasicClientOptions extends ClientOptions {
    apiVersion?: string;
}

export declare interface BasicHeaderParam {
    headers: RawHttpHeadersInput & BasicHeaders;
}

export declare interface BasicHeaders {
    "header-param": string;
}

export declare type BasicParameters = BasicQueryParam & BasicHeaderParam & BasicBodyParam & RequestParameters;

export declare interface BasicQueryParam {
    queryParameters: BasicQueryParamProperties;
}

export declare interface BasicQueryParamProperties {
    "query-param": string;
}

declare function createClient({ apiVersion, ...options }?: BasicClientOptions): BasicClient;
export default createClient;

export declare type Enum = string;

export declare type EnumOutput = string;

export declare interface Model {
    int32Property?: number;
    float32Property?: number;
    enumProperty?: Enum;
}

export declare interface ModelOutput {
    int32Property?: number;
    float32Property?: number;
    enumProperty?: EnumOutput;
}

export declare interface Routes {
    (path: "/azure/example/basic/azure/example/basic/basic"): Basic;
}

export { }
