import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { HttpResponse } from '@azure-rest/core-client';
import { RequestParameters } from '@azure-rest/core-client';
import { StreamableMethod } from '@azure-rest/core-client';

declare function createClient(options?: UsageClientOptions): UsageClient;
export default createClient;

export declare interface Input {
    post(options: InputParameters): StreamableMethod<Input204Response>;
}

export declare interface Input204Response extends HttpResponse {
    status: "204";
}

export declare interface InputAndOutput {
    post(options: InputAndOutputParameters): StreamableMethod<InputAndOutput200Response>;
}

export declare interface InputAndOutput200Response extends HttpResponse {
    status: "200";
    body: InputOutputRecordOutput;
}

export declare interface InputAndOutputBodyParam {
    body: InputOutputRecord;
}

export declare type InputAndOutputParameters = InputAndOutputBodyParam & RequestParameters;

export declare interface InputBodyParam {
    body: InputRecord;
}

export declare interface InputOutputRecord {
    requiredProp: string;
}

export declare interface InputOutputRecordOutput {
    requiredProp: string;
}

export declare type InputParameters = InputBodyParam & RequestParameters;

export declare interface InputRecord {
    requiredProp: string;
}

export declare interface Output {
    get(options?: OutputParameters): StreamableMethod<Output200Response>;
}

export declare interface Output200Response extends HttpResponse {
    status: "200";
    body: OutputRecordOutput;
}

export declare type OutputParameters = RequestParameters;

export declare interface OutputRecordOutput {
    requiredProp: string;
}

export declare interface Routes {
    (path: "/type/model/usage/input"): Input;
    (path: "/type/model/usage/output"): Output;
    (path: "/type/model/usage/input-output"): InputAndOutput;
}

export declare type UsageClient = Client & {
    path: Routes;
};

export declare interface UsageClientOptions extends ClientOptions {
}

export { }
