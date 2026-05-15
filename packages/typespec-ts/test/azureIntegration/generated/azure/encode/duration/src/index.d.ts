import type { Client } from '@azure-rest/core-client';
import type { ClientOptions } from '@azure-rest/core-client';
import type { HttpResponse } from '@azure-rest/core-client';
import { isRestError } from '@azure/core-rest-pipeline';
import type { RequestParameters } from '@azure-rest/core-client';
import { RestError } from '@azure/core-rest-pipeline';
import type { StreamableMethod } from '@azure-rest/core-client';

declare function createClient(options?: DurationClientOptions): DurationClient;
export default createClient;

export declare type DurationClient = Client & {
    path: Routes;
};

export declare interface DurationClientOptions extends ClientOptions {
}

export declare interface DurationConstant {
    put(options: DurationConstantParameters): StreamableMethod<DurationConstant204Response>;
}

export declare interface DurationConstant204Response extends HttpResponse {
    status: "204";
}

export declare interface DurationConstantBodyParam {
    body: DurationModel;
}

export declare type DurationConstantParameters = DurationConstantBodyParam & RequestParameters;

export declare interface DurationModel {
    input: string;
}

export { isRestError }

export { RestError }

export declare interface Routes {
    (path: "/azure/encode/duration/duration-constant"): DurationConstant;
}

export { }
