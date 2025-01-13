import type { Client } from '@azure-rest/core-client';
import type { ClientOptions } from '@azure-rest/core-client';
import type { HttpResponse } from '@azure-rest/core-client';
import type { RequestParameters } from '@azure-rest/core-client';
import type { StreamableMethod } from '@azure-rest/core-client';

declare function createClient(options?: SerializationEncodedNameJsonClientOptions): SerializationEncodedNameJsonClient;
export default createClient;

export declare interface JsonEncodedNameModel {
    wireName: boolean;
}

export declare interface JsonEncodedNameModelOutput {
    wireName: boolean;
}

export declare interface PropertyGet200Response extends HttpResponse {
    status: "200";
    body: JsonEncodedNameModelOutput;
}

export declare type PropertyGetParameters = RequestParameters;

export declare interface PropertySend204Response extends HttpResponse {
    status: "204";
}

export declare interface PropertySendBodyParam {
    body: JsonEncodedNameModel;
}

export declare type PropertySendParameters = PropertySendBodyParam & RequestParameters;

export declare interface Routes {
    (path: "/serialization/encoded-name/json/property"): Send;
}

export declare interface Send {
    post(options: PropertySendParameters): StreamableMethod<PropertySend204Response>;
    get(options?: PropertyGetParameters): StreamableMethod<PropertyGet200Response>;
}

export declare type SerializationEncodedNameJsonClient = Client & {
    path: Routes;
};

export declare interface SerializationEncodedNameJsonClientOptions extends ClientOptions {
}

export { }
