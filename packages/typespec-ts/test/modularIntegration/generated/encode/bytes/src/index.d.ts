import { ClientOptions } from '@typespec/ts-http-runtime';
import { OperationOptions } from '@typespec/ts-http-runtime';
import { Pipeline } from '@typespec/ts-http-runtime';

export declare interface Base64BytesProperty {
    value: Uint8Array;
}

export declare interface Base64UrlArrayBytesProperty {
    value: Uint8Array[];
}

export declare interface Base64UrlBytesProperty {
    value: Uint8Array;
}

export declare class BytesClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: BytesClientOptionalParams);
    readonly responseBody: ResponseBodyOperations;
    readonly requestBody: RequestBodyOperations;
    readonly header: HeaderOperations;
    readonly property: PropertyOperations;
    readonly query: QueryOperations;
}

export declare interface BytesClientOptionalParams extends ClientOptions {
}

export declare interface DefaultBytesProperty {
    value: Uint8Array;
}

export declare interface HeaderBase64OptionalParams extends OperationOptions {
}

export declare interface HeaderBase64urlArrayOptionalParams extends OperationOptions {
}

export declare interface HeaderBase64urlOptionalParams extends OperationOptions {
}

export declare interface HeaderDefaultOptionalParams extends OperationOptions {
}

export declare interface HeaderOperations {
    base64UrlArray: (value: Uint8Array[], options?: HeaderBase64urlArrayOptionalParams) => Promise<void>;
    base64Url: (value: Uint8Array, options?: HeaderBase64urlOptionalParams) => Promise<void>;
    base64: (value: Uint8Array, options?: HeaderBase64OptionalParams) => Promise<void>;
    default: (value: Uint8Array, options?: HeaderDefaultOptionalParams) => Promise<void>;
}

export declare interface PropertyBase64OptionalParams extends OperationOptions {
}

export declare interface PropertyBase64urlArrayOptionalParams extends OperationOptions {
}

export declare interface PropertyBase64urlOptionalParams extends OperationOptions {
}

export declare interface PropertyDefaultOptionalParams extends OperationOptions {
}

export declare interface PropertyOperations {
    base64UrlArray: (body: Base64UrlArrayBytesProperty, options?: PropertyBase64urlArrayOptionalParams) => Promise<Base64UrlArrayBytesProperty>;
    base64Url: (body: Base64UrlBytesProperty, options?: PropertyBase64urlOptionalParams) => Promise<Base64UrlBytesProperty>;
    base64: (body: Base64BytesProperty, options?: PropertyBase64OptionalParams) => Promise<Base64BytesProperty>;
    default: (body: DefaultBytesProperty, options?: PropertyDefaultOptionalParams) => Promise<DefaultBytesProperty>;
}

export declare interface QueryBase64OptionalParams extends OperationOptions {
}

export declare interface QueryBase64urlArrayOptionalParams extends OperationOptions {
}

export declare interface QueryBase64urlOptionalParams extends OperationOptions {
}

export declare interface QueryDefaultOptionalParams extends OperationOptions {
}

export declare interface QueryOperations {
    base64UrlArray: (value: Uint8Array[], options?: QueryBase64urlArrayOptionalParams) => Promise<void>;
    base64Url: (value: Uint8Array, options?: QueryBase64urlOptionalParams) => Promise<void>;
    base64: (value: Uint8Array, options?: QueryBase64OptionalParams) => Promise<void>;
    default: (value: Uint8Array, options?: QueryDefaultOptionalParams) => Promise<void>;
}

export declare interface RequestBodyBase64OptionalParams extends OperationOptions {
}

export declare interface RequestBodyBase64urlOptionalParams extends OperationOptions {
}

export declare interface RequestBodyCustomContentTypeOptionalParams extends OperationOptions {
}

export declare interface RequestBodyDefaultOptionalParams extends OperationOptions {
}

export declare interface RequestBodyOctetStreamOptionalParams extends OperationOptions {
}

export declare interface RequestBodyOperations {
    base64Url: (value: Uint8Array, options?: RequestBodyBase64urlOptionalParams) => Promise<void>;
    base64: (value: Uint8Array, options?: RequestBodyBase64OptionalParams) => Promise<void>;
    customContentType: (value: Uint8Array, options?: RequestBodyCustomContentTypeOptionalParams) => Promise<void>;
    octetStream: (value: Uint8Array, options?: RequestBodyOctetStreamOptionalParams) => Promise<void>;
    default: (value: Uint8Array, options?: RequestBodyDefaultOptionalParams) => Promise<void>;
}

export declare interface ResponseBodyBase64OptionalParams extends OperationOptions {
}

export declare interface ResponseBodyBase64urlOptionalParams extends OperationOptions {
}

export declare interface ResponseBodyCustomContentTypeOptionalParams extends OperationOptions {
}

export declare interface ResponseBodyDefaultOptionalParams extends OperationOptions {
}

export declare interface ResponseBodyOctetStreamOptionalParams extends OperationOptions {
}

export declare interface ResponseBodyOperations {
    base64Url: (options?: ResponseBodyBase64urlOptionalParams) => Promise<Uint8Array>;
    base64: (options?: ResponseBodyBase64OptionalParams) => Promise<Uint8Array>;
    customContentType: (options?: ResponseBodyCustomContentTypeOptionalParams) => Promise<Uint8Array>;
    octetStream: (options?: ResponseBodyOctetStreamOptionalParams) => Promise<Uint8Array>;
    default: (options?: ResponseBodyDefaultOptionalParams) => Promise<Uint8Array>;
}

export { }
