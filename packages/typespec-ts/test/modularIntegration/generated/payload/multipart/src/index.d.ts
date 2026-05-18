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

declare type FileContents = string | NodeReadableStream | ReadableStream<Uint8Array> | Uint8Array | Blob;

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

declare interface FormDataAnonymousModelOptionalParams extends OperationOptions {
}

declare interface FormDataBasicOptionalParams extends OperationOptions {
}

declare interface FormDataBinaryArrayPartsOptionalParams extends OperationOptions {
}

declare interface FormDataCheckFileNameAndContentTypeOptionalParams extends OperationOptions {
}

declare interface FormDataFileArrayAndBasicOptionalParams extends OperationOptions {
}

export declare interface FormDataFileOperations {
    uploadFileArray: (body: {
        files: Array<FileContents | {
            contents: FileContents;
            contentType?: "image/png";
            filename?: string;
        }>;
    }, options?: FormDataFileUploadFileArrayOptionalParams) => Promise<void>;
    uploadFileRequiredFilename: (body: {
        file: File | {
            contents: FileContents;
            contentType?: "image/png";
            filename: string;
        };
    }, options?: FormDataFileUploadFileRequiredFilenameOptionalParams) => Promise<void>;
    uploadFileSpecificContentType: (body: {
        file: FileContents | {
            contents: FileContents;
            contentType?: "image/png";
            filename?: string;
        };
    }, options?: FormDataFileUploadFileSpecificContentTypeOptionalParams) => Promise<void>;
}

declare interface FormDataFileUploadFileArrayOptionalParams extends OperationOptions {
}

declare interface FormDataFileUploadFileRequiredFilenameOptionalParams extends OperationOptions {
}

declare interface FormDataFileUploadFileSpecificContentTypeOptionalParams extends OperationOptions {
}

declare interface FormDataHttpPartsContentTypeImageJpegContentTypeOptionalParams extends OperationOptions {
}

export declare interface FormDataHttpPartsContentTypeOperations {
    optionalContentType: (body: FileWithHttpPartOptionalContentTypeRequest, options?: FormDataHttpPartsContentTypeOptionalContentTypeOptionalParams) => Promise<void>;
    requiredContentType: (body: FileWithHttpPartRequiredContentTypeRequest, options?: FormDataHttpPartsContentTypeRequiredContentTypeOptionalParams) => Promise<void>;
    imageJpegContentType: (body: FileWithHttpPartSpecificContentTypeRequest, options?: FormDataHttpPartsContentTypeImageJpegContentTypeOptionalParams) => Promise<void>;
}

declare interface FormDataHttpPartsContentTypeOptionalContentTypeOptionalParams extends OperationOptions {
}

declare interface FormDataHttpPartsContentTypeRequiredContentTypeOptionalParams extends OperationOptions {
}

declare interface FormDataHttpPartsJsonArrayAndFileArrayOptionalParams extends OperationOptions {
}

declare interface FormDataHttpPartsNonStringFloatOptionalParams extends OperationOptions {
}

export declare interface FormDataHttpPartsNonStringOperations {
    float: (body: {
        temperature: number;
    }, options?: FormDataHttpPartsNonStringFloatOptionalParams) => Promise<void>;
}

export declare interface FormDataHttpPartsOperations {
    contentType: FormDataHttpPartsContentTypeOperations;
    nonString: FormDataHttpPartsNonStringOperations;
    jsonArrayAndFileArray: (body: ComplexHttpPartsModelRequest, options?: FormDataHttpPartsJsonArrayAndFileArrayOptionalParams) => Promise<void>;
}

declare interface FormDataJsonPartOptionalParams extends OperationOptions {
}

declare interface FormDataMultiBinaryPartsOptionalParams extends OperationOptions {
}

export declare interface FormDataOperations {
    file: FormDataFileOperations;
    httpParts: FormDataHttpPartsOperations;
    anonymousModel: (body: {
        profileImage: FileContents | {
            contents: FileContents;
            contentType?: string;
            filename?: string;
        };
    }, options?: FormDataAnonymousModelOptionalParams) => Promise<void>;
    checkFileNameAndContentType: (body: MultiPartRequest, options?: FormDataCheckFileNameAndContentTypeOptionalParams) => Promise<void>;
    multiBinaryParts: (body: MultiBinaryPartsRequest, options?: FormDataMultiBinaryPartsOptionalParams) => Promise<void>;
    binaryArrayParts: (body: BinaryArrayPartsRequest, options?: FormDataBinaryArrayPartsOptionalParams) => Promise<void>;
    jsonPart: (body: JsonPartRequest, options?: FormDataJsonPartOptionalParams) => Promise<void>;
    fileArrayAndBasic: (body: ComplexPartsRequest, options?: FormDataFileArrayAndBasicOptionalParams) => Promise<void>;
    optionalParts: (body: MultiPartOptionalRequest, options?: FormDataOptionalPartsOptionalParams) => Promise<void>;
    withWireName: (body: MultiPartRequestWithWireName, options?: FormDataWithWireNameOptionalParams) => Promise<void>;
    basic: (body: MultiPartRequest, options?: FormDataBasicOptionalParams) => Promise<void>;
}

declare interface FormDataOptionalPartsOptionalParams extends OperationOptions {
}

declare interface FormDataWithWireNameOptionalParams extends OperationOptions {
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
    endpointParam?: string;
}

export declare interface MultiPartOptionalRequest {
    id?: string;
    profileImage?: FileContents | {
        contents: FileContents;
        contentType?: string;
        filename?: string;
    };
}

export declare interface MultiPartRequest {
    id: string;
    profileImage: FileContents | {
        contents: FileContents;
        contentType?: string;
        filename?: string;
    };
}

export declare interface MultiPartRequestWithWireName {
    identifier: string;
    image: FileContents | {
        contents: FileContents;
        contentType?: string;
        filename?: string;
    };
}

declare type NodeReadableStream = NodeJS.ReadableStream;

export { }
