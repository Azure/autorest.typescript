import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare interface TestModel {
    prop: string;
    changedProp: string;
}

export declare interface TestOptionalParams extends OperationOptions {
}

export declare class TypeChangedFromClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(endpointParam: string, options?: TypeChangedFromClientOptionalParams);
    test(body: TestModel, param: string, options?: TestOptionalParams): Promise<TestModel>;
}

export declare interface TypeChangedFromClientOptionalParams extends ClientOptions {
    version?: Versions;
}

export declare type Versions = "v1" | "v2";

export { }
