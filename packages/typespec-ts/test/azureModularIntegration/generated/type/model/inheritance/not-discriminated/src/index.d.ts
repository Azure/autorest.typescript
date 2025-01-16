import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

declare interface Cat extends Pet {
    age: number;
}

export declare interface GetValidOptionalParams extends OperationOptions {
}

export declare class NotDiscriminatedClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: NotDiscriminatedClientOptionalParams);
    putValid(input: Siamese, options?: PutValidOptionalParams): Promise<Siamese>;
    getValid(options?: GetValidOptionalParams): Promise<Siamese>;
    postValid(input: Siamese, options?: PostValidOptionalParams): Promise<void>;
}

export declare interface NotDiscriminatedClientOptionalParams extends ClientOptions {
}

declare interface Pet {
    name: string;
}

export declare interface PostValidOptionalParams extends OperationOptions {
}

export declare interface PutValidOptionalParams extends OperationOptions {
}

declare interface Siamese extends Cat {
    smart: boolean;
}

export { }
