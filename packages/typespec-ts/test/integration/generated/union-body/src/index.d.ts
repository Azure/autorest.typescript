import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { HttpResponse } from '@azure-rest/core-client';
import { RequestParameters } from '@azure-rest/core-client';
import { StreamableMethod } from '@azure-rest/core-client';

export declare interface CommonRegistrationRequest {
    payMethod: PaymentMethods;
}

export declare interface CommonRegistrationRequestOutput {
    payMethod: PaymentMethodsOutput;
}

declare function createClient(endpointParam: string, options?: UnionBodyClientOptions): UnionBodyClient;
export default createClient;

export declare type PaymentMethods = "01";

export declare type PaymentMethodsOutput = "01";

export declare interface RequestRegisterCC extends CommonRegistrationRequest {
    payMethod: "01";
}

export declare interface RequestRegisterCCOutput extends CommonRegistrationRequestOutput {
    payMethod: "01";
}

export declare interface RequestRegisterVA {
    prop: string;
}

export declare interface RequestRegisterVAOutput {
    prop: string;
}

export declare interface RequestUnionBody {
    post(options: RequestUnionBodyParameters): StreamableMethod<RequestUnionBody200Response>;
}

export declare interface RequestUnionBody200Response extends HttpResponse {
    status: "200";
    body: Record<string, any>;
}

export declare interface RequestUnionBodyBodyParam {
    body: RequestRegisterCC | RequestRegisterVA;
}

export declare type RequestUnionBodyParameters = RequestUnionBodyBodyParam & RequestParameters;

export declare interface ResponseUnionBody {
    get(options?: ResponseUnionBodyParameters): StreamableMethod<ResponseUnionBody200Response>;
}

export declare interface ResponseUnionBody200Response extends HttpResponse {
    status: "200";
    body: RequestRegisterCCOutput | RequestRegisterVAOutput;
}

export declare type ResponseUnionBodyParameters = RequestParameters;

export declare interface Routes {
    (path: "/request-union-body"): RequestUnionBody;
    (path: "/response-union-body"): ResponseUnionBody;
}

export declare type UnionBodyClient = Client & {
    path: Routes;
};

export declare interface UnionBodyClientOptions extends ClientOptions {
}

export { }
