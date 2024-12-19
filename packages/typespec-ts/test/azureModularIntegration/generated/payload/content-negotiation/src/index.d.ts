import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare class ContentNegotiationClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: ContentNegotiationClientOptionalParams);
    readonly sameBody: SameBodyOperations;
    readonly differentBody: DifferentBodyOperations;
}

export declare interface ContentNegotiationClientOptionalParams extends ClientOptions {
}

export declare interface DifferentBodyGetAvatarAsJsonOptionalParams extends OperationOptions {
    accept?: "application/json";
}

export declare interface DifferentBodyGetAvatarAsPngOptionalParams extends OperationOptions {
    accept?: "image/png";
}

export declare interface DifferentBodyOperations {
    getAvatarAsPng: (options?: DifferentBodyGetAvatarAsPngOptionalParams) => Promise<Uint8Array>;
    getAvatarAsJson: (options?: DifferentBodyGetAvatarAsJsonOptionalParams) => Promise<PngImageAsJson>;
}

export declare interface PngImageAsJson {
    content: Uint8Array;
}

export declare interface SameBodyGetAvatarAsJpegOptionalParams extends OperationOptions {
    accept?: "image/jpeg";
}

export declare interface SameBodyGetAvatarAsPngOptionalParams extends OperationOptions {
    accept?: "image/png";
}

export declare interface SameBodyOperations {
    getAvatarAsPng: (options?: SameBodyGetAvatarAsPngOptionalParams) => Promise<Uint8Array>;
    getAvatarAsJpeg: (options?: SameBodyGetAvatarAsJpegOptionalParams) => Promise<Uint8Array>;
}

export { }
