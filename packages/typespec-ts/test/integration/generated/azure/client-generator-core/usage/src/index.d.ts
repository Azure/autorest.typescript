import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { HttpResponse } from '@azure-rest/core-client';
import { RequestParameters } from '@azure-rest/core-client';
import { StreamableMethod } from '@azure-rest/core-client';

declare function createClient(options?: UsageClientOptions): UsageClient;
export default createClient;

export declare interface InputModel {
    name: string;
}

export declare interface InputToInputOutput {
    post(options: InputToInputOutputParameters): StreamableMethod<InputToInputOutput204Response>;
}

export declare interface InputToInputOutput204Response extends HttpResponse {
    status: "204";
}

export declare interface InputToInputOutputBodyParam {
    body: InputModel;
}

export declare type InputToInputOutputParameters = InputToInputOutputBodyParam & RequestParameters;

export declare interface ModelInReadOnlyProperty {
    put(options: ModelInReadOnlyPropertyParameters): StreamableMethod<ModelInReadOnlyProperty200Response>;
}

export declare interface ModelInReadOnlyProperty200Response extends HttpResponse {
    status: "200";
    body: RoundTripModelOutput;
}

export declare interface ModelInReadOnlyPropertyBodyParam {
    body: RoundTripModel;
}

export declare type ModelInReadOnlyPropertyParameters = ModelInReadOnlyPropertyBodyParam & RequestParameters;

export declare interface OutputModelOutput {
    name: string;
}

export declare interface OutputToInputOutput {
    get(options?: OutputToInputOutputParameters): StreamableMethod<OutputToInputOutput200Response>;
}

export declare interface OutputToInputOutput200Response extends HttpResponse {
    status: "200";
    body: OutputModelOutput;
}

export declare type OutputToInputOutputParameters = RequestParameters;

export declare interface ResultModel {
    name: string;
}

export declare interface ResultModelOutput {
    name: string;
}

export declare interface RoundTripModel {
}

export declare interface RoundTripModelOutput {
    readonly result: ResultModelOutput;
}

export declare interface Routes {
    (path: "/azure/client-generator-core/usage/inputToInputOutput"): InputToInputOutput;
    (path: "/azure/client-generator-core/usage/outputToInputOutput"): OutputToInputOutput;
    (path: "/azure/client-generator-core/usage/modelInReadOnlyProperty"): ModelInReadOnlyProperty;
}

export declare type UsageClient = Client & {
    path: Routes;
};

export declare interface UsageClientOptions extends ClientOptions {
}

export { }
