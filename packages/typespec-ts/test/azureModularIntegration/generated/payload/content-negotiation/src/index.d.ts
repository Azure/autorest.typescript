import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare class ContentNegotiationClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: ContentNegotiationClientOptionalParams);
    readonly differentBody: DifferentBodyOperations;
    readonly sameBody: SameBodyOperations;
}

export declare interface ContentNegotiationClientOptionalParams extends ClientOptions {
}

export declare interface DifferentBodyGetAvatarAsJsonOptionalParams extends OperationOptions {
}

export declare interface DifferentBodyGetAvatarAsPngOptionalParams extends OperationOptions {
}

export declare type DifferentBodyGetAvatarAsPngResponse = {
    blobBody?: Promise<Blob>;
    readableStreamBody?: NodeReadableStream;
};

export declare interface DifferentBodyOperations {
    getAvatarAsJson: (options?: DifferentBodyGetAvatarAsJsonOptionalParams) => Promise<PngImageAsJson>;
    getAvatarAsPng: (options?: DifferentBodyGetAvatarAsPngOptionalParams) => Promise<DifferentBodyGetAvatarAsPngResponse>;
}

declare type NodeReadableStream = NodeJS.ReadableStream;

export declare interface PngImageAsJson {
    content: Uint8Array;
}

export declare interface SameBodyGetAvatarAsJpegOptionalParams extends OperationOptions {
}

export declare type SameBodyGetAvatarAsJpegResponse = {
    blobBody?: Promise<Blob>;
    readableStreamBody?: NodeReadableStream;
};

export declare interface SameBodyGetAvatarAsPngOptionalParams extends OperationOptions {
}

export declare type SameBodyGetAvatarAsPngResponse = {
    blobBody?: Promise<Blob>;
    readableStreamBody?: NodeReadableStream;
};

export declare interface SameBodyOperations {
    getAvatarAsJpeg: (options?: SameBodyGetAvatarAsJpegOptionalParams) => Promise<SameBodyGetAvatarAsJpegResponse>;
    getAvatarAsPng: (options?: SameBodyGetAvatarAsPngOptionalParams) => Promise<SameBodyGetAvatarAsPngResponse>;
}

export { }
