import { ClientOptions } from '@typespec/ts-http-runtime';
import { OperationOptions } from '@typespec/ts-http-runtime';
import { Pipeline } from '@typespec/ts-http-runtime';

export declare interface Address {
    city: string;
}

export declare interface BinaryArrayPartsRequest {
    id: string;
    pictures: Array<FileContents | {
        contents: FileContents;
        contentType?: string;
        filename?: string;
    }>;
}

export declare interface ComplexHttpPartsModelRequest {
    id: string;
    address: Address;
    profileImage: File | {
        contents: FileContents;
        contentType?: string;
        filename: string;
    };
    previousAddresses: Address[];
    pictures: Array<File | {
        contents: FileContents;
        contentType?: string;
        filename: string;
    }>;
}

export declare interface ComplexPartsRequest {
    id: string;
    address: Address;
    profileImage: FileContents | {
        contents: FileContents;
        contentType?: string;
        filename?: string;
    };
    pictures: Array<FileContents | {
        contents: FileContents;
        contentType?: string;
        filename?: string;
    }>;
}

export declare type FileContents = string | NodeJS.ReadableStream | ReadableStream<Uint8Array> | Uint8Array | Blob;

export declare interface FileWithHttpPartOptionalContentTypeRequest {
    profileImage: File | {
        contents: FileContents;
        contentType?: string;
        filename: string;
    };
}

export declare interface FileWithHttpPartRequiredContentTypeRequest {
    profileImage: File | {
        contents: FileContents;
        contentType?: string;
        filename: string;
    };
}

export declare interface FileWithHttpPartSpecificContentTypeRequest {
    profileImage: File | {
        contents: FileContents;
        contentType?: "image/jpg";
        filename: string;
    };
}

export declare interface FormDataAnonymousModelOptionalParams extends OperationOptions {
}

export declare interface FormDataBasicOptionalParams extends OperationOptions {
}

export declare interface FormDataBinaryArrayPartsOptionalParams extends OperationOptions {
}

export declare interface FormDataCheckFileNameAndContentTypeOptionalParams extends OperationOptions {
}

export declare interface FormDataFileArrayAndBasicOptionalParams extends OperationOptions {
}

export declare interface FormDataHttpPartsContentTypeImageJpegContentTypeOptionalParams extends OperationOptions {
}

export declare interface FormDataHttpPartsContentTypeOperations {
    optionalContentType: (body: FileWithHttpPartOptionalContentTypeRequest, options?: FormDataHttpPartsContentTypeOptionalContentTypeOptionalParams) => Promise<void>;
    requiredContentType: (body: FileWithHttpPartRequiredContentTypeRequest, options?: FormDataHttpPartsContentTypeRequiredContentTypeOptionalParams) => Promise<void>;
    imageJpegContentType: (body: FileWithHttpPartSpecificContentTypeRequest, options?: FormDataHttpPartsContentTypeImageJpegContentTypeOptionalParams) => Promise<void>;
}

export declare interface FormDataHttpPartsContentTypeOptionalContentTypeOptionalParams extends OperationOptions {
}

export declare interface FormDataHttpPartsContentTypeRequiredContentTypeOptionalParams extends OperationOptions {
}

export declare interface FormDataHttpPartsJsonArrayAndFileArrayOptionalParams extends OperationOptions {
}

export declare interface FormDataHttpPartsNonStringFloatOptionalParams extends OperationOptions {
}

export declare interface FormDataHttpPartsNonStringOperations {
    float: (body: {
        temperature: number;
    }, options?: FormDataHttpPartsNonStringFloatOptionalParams) => Promise<void>;
}

export declare interface FormDataHttpPartsOperations {
    jsonArrayAndFileArray: (body: ComplexHttpPartsModelRequest, options?: FormDataHttpPartsJsonArrayAndFileArrayOptionalParams) => Promise<void>;
    nonString: FormDataHttpPartsNonStringOperations;
    contentType: FormDataHttpPartsContentTypeOperations;
}

export declare interface FormDataJsonPartOptionalParams extends OperationOptions {
}

export declare interface FormDataMultiBinaryPartsOptionalParams extends OperationOptions {
}

export declare interface FormDataOperations {
    anonymousModel: (body: {
        profileImage: Uint8Array;
    }, options?: FormDataAnonymousModelOptionalParams) => Promise<void>;
    checkFileNameAndContentType: (body: MultiPartRequest, options?: FormDataCheckFileNameAndContentTypeOptionalParams) => Promise<void>;
    multiBinaryParts: (body: MultiBinaryPartsRequest, options?: FormDataMultiBinaryPartsOptionalParams) => Promise<void>;
    binaryArrayParts: (body: BinaryArrayPartsRequest, options?: FormDataBinaryArrayPartsOptionalParams) => Promise<void>;
    jsonPart: (body: JsonPartRequest, options?: FormDataJsonPartOptionalParams) => Promise<void>;
    fileArrayAndBasic: (body: ComplexPartsRequest, options?: FormDataFileArrayAndBasicOptionalParams) => Promise<void>;
    basic: (body: MultiPartRequest, options?: FormDataBasicOptionalParams) => Promise<void>;
    httpParts: FormDataHttpPartsOperations;
}

export declare interface JsonPartRequest {
    address: Address;
    profileImage: FileContents | {
        contents: FileContents;
        contentType?: string;
        filename?: string;
    };
}

export declare interface MultiBinaryPartsRequest {
    profileImage: FileContents | {
        contents: FileContents;
        contentType?: string;
        filename?: string;
    };
    picture?: FileContents | {
        contents: FileContents;
        contentType?: string;
        filename?: string;
    };
}

export declare class MultiPartClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: MultiPartClientOptionalParams);
    readonly formData: FormDataOperations;
}

export declare interface MultiPartClientOptionalParams extends ClientOptions {
}

export declare interface MultiPartRequest {
    id: string;
    profileImage: FileContents | {
        contents: FileContents;
        contentType?: string;
        filename?: string;
    };
}

export { }
