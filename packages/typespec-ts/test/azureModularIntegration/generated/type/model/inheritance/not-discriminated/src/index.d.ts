import { ClientOptions } from '@azure-rest/core-client';
import { isRestError } from '@azure/core-rest-pipeline';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';
import { RestError } from '@azure/core-rest-pipeline';

export declare interface Cat extends Pet {
    age: number;
}

export declare interface GetValidOptionalParams extends OperationOptions {
}

export { isRestError }

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

export declare interface Pet {
    name: string;
}

export declare interface PostValidOptionalParams extends OperationOptions {
}

export declare interface PutValidOptionalParams extends OperationOptions {
}

export { RestError }

export declare interface Siamese extends Cat {
    smart: boolean;
}

export { }
