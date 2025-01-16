import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare class MadeOptionalClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(endpointParam: string, version: Versions, options?: MadeOptionalClientOptionalParams);
    test(body: TestModel, options?: TestOptionalParams): Promise<TestModel>;
}

export declare interface MadeOptionalClientOptionalParams extends ClientOptions {
}

declare interface TestModel {
    prop: string;
    changedProp?: string;
}

export declare interface TestOptionalParams extends OperationOptions {
    param?: string;
}

declare type Versions = "v1" | "v2";

export { }
