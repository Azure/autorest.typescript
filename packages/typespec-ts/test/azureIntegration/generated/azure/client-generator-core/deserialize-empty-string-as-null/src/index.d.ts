import type { Client } from '@azure-rest/core-client';
import type { ClientOptions } from '@azure-rest/core-client';
import type { HttpResponse } from '@azure-rest/core-client';
import { isRestError } from '@azure/core-rest-pipeline';
import type { RequestParameters } from '@azure-rest/core-client';
import { RestError } from '@azure/core-rest-pipeline';
import type { StreamableMethod } from '@azure-rest/core-client';

declare function createClient(options?: DeserializeEmptyStringAsNullClientOptions): DeserializeEmptyStringAsNullClient;
export default createClient;

export declare type DeserializeEmptyStringAsNullClient = Client & {
    path: Routes;
};

export declare interface DeserializeEmptyStringAsNullClientOptions extends ClientOptions {
}

export declare interface Get {
    get(options?: GetParameters): StreamableMethod<Get200Response>;
}

export declare interface Get200Response extends HttpResponse {
    status: "200";
    body: ResponseModelOutput;
}

export declare type GetParameters = RequestParameters;

export { isRestError }

export declare interface ResponseModelOutput {
    sampleUrl: string;
}

export { RestError }

export declare interface Routes {
    (path: "/azure/client-generator-core/deserialize-empty-string-as-null/responseModel"): Get;
}

export { }
