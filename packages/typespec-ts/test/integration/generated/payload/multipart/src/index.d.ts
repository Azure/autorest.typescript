import type { Client } from '@typespec/ts-http-runtime';
import type { ClientOptions } from '@typespec/ts-http-runtime';
import type { HttpResponse } from '@typespec/ts-http-runtime';
import type { RequestParameters } from '@typespec/ts-http-runtime';
import type { StreamableMethod } from '@typespec/ts-http-runtime';

export declare interface Address {
    city: string;
}

export declare type BinaryArrayPartsRequest = FormData | Array<BinaryArrayPartsRequestIdPartDescriptor | BinaryArrayPartsRequestPicturesPartDescriptor>;

export declare interface BinaryArrayPartsRequestIdPartDescriptor {
    name: "id";
    body: string;
}

export declare interface BinaryArrayPartsRequestPicturesPartDescriptor {
    name: "pictures";
    body: string | Uint8Array | ReadableStream<Uint8Array> | NodeJS.ReadableStream | File;
    filename?: string;
    contentType?: string;
}

export declare type ComplexHttpPartsModelRequest = FormData | Array<ComplexHttpPartsModelRequestIdPartDescriptor | ComplexHttpPartsModelRequestAddressPartDescriptor | ComplexHttpPartsModelRequestProfileImagePartDescriptor | ComplexHttpPartsModelRequestPreviousAddressesPartDescriptor | ComplexHttpPartsModelRequestPicturesPartDescriptor>;

export declare interface ComplexHttpPartsModelRequestAddressPartDescriptor {
    name: "address";
    body: Address;
}

export declare interface ComplexHttpPartsModelRequestIdPartDescriptor {
    name: "id";
    body: string;
}

export declare interface ComplexHttpPartsModelRequestPicturesPartDescriptor {
    name: "pictures";
    body: string | Uint8Array | ReadableStream<Uint8Array> | NodeJS.ReadableStream | File;
    filename?: string;
    contentType?: string;
}

export declare interface ComplexHttpPartsModelRequestPreviousAddressesPartDescriptor {
    name: "previousAddresses";
    body: Array<Address>;
}

export declare interface ComplexHttpPartsModelRequestProfileImagePartDescriptor {
    name: "profileImage";
    body: string | Uint8Array | ReadableStream<Uint8Array> | NodeJS.ReadableStream | File;
    filename: string;
    contentType: string;
}

export declare type ComplexPartsRequest = FormData | Array<ComplexPartsRequestIdPartDescriptor | ComplexPartsRequestAddressPartDescriptor | ComplexPartsRequestProfileImagePartDescriptor | ComplexPartsRequestPicturesPartDescriptor>;

export declare interface ComplexPartsRequestAddressPartDescriptor {
    name: "address";
    body: Address;
}

export declare interface ComplexPartsRequestIdPartDescriptor {
    name: "id";
    body: string;
}

export declare interface ComplexPartsRequestPicturesPartDescriptor {
    name: "pictures";
    body: string | Uint8Array | ReadableStream<Uint8Array> | NodeJS.ReadableStream | File;
    filename?: string;
    contentType?: string;
}

export declare interface ComplexPartsRequestProfileImagePartDescriptor {
    name: "profileImage";
    body: string | Uint8Array | ReadableStream<Uint8Array> | NodeJS.ReadableStream | File;
    filename?: string;
    contentType?: string;
}

declare function createClient(options?: MultiPartClientOptions): MultiPartClient;
export default createClient;

export declare type FileWithHttpPartOptionalContentTypeRequest = FormData | Array<FileWithHttpPartOptionalContentTypeRequestProfileImagePartDescriptor>;

export declare interface FileWithHttpPartOptionalContentTypeRequestProfileImagePartDescriptor {
    name: "profileImage";
    body: string | Uint8Array | ReadableStream<Uint8Array> | NodeJS.ReadableStream | File;
    filename: string;
    contentType?: string;
}

export declare type FileWithHttpPartRequiredContentTypeRequest = FormData | Array<FileWithHttpPartRequiredContentTypeRequestProfileImagePartDescriptor>;

export declare interface FileWithHttpPartRequiredContentTypeRequestProfileImagePartDescriptor {
    name: "profileImage";
    body: string | Uint8Array | ReadableStream<Uint8Array> | NodeJS.ReadableStream | File;
    filename: string;
    contentType: string;
}

export declare type FileWithHttpPartSpecificContentTypeRequest = FormData | Array<FileWithHttpPartSpecificContentTypeRequestProfileImagePartDescriptor>;

export declare interface FileWithHttpPartSpecificContentTypeRequestProfileImagePartDescriptor {
    name: "profileImage";
    body: string | Uint8Array | ReadableStream<Uint8Array> | NodeJS.ReadableStream | File;
    filename: string;
    contentType: "image/jpg";
}

export declare interface FormDataAnonymousModel {
    post(options: FormDataAnonymousModelParameters): StreamableMethod<FormDataAnonymousModel204Response>;
}

export declare interface FormDataAnonymousModel204Response extends HttpResponse {
    status: "204";
}

export declare interface FormDataAnonymousModelBodyParam {
    body: FormData | Array<{
        name: "profileImage";
        body: string | Uint8Array | ReadableStream<Uint8Array> | NodeJS.ReadableStream | File;
        filename?: string;
        contentType?: string;
    }>;
}

export declare interface FormDataAnonymousModelMediaTypesParam {
    contentType: "multipart/form-data";
}

export declare type FormDataAnonymousModelParameters = FormDataAnonymousModelMediaTypesParam & FormDataAnonymousModelBodyParam & RequestParameters;

export declare interface FormDataBasic {
    post(options: FormDataBasicParameters): StreamableMethod<FormDataBasic204Response>;
}

export declare interface FormDataBasic204Response extends HttpResponse {
    status: "204";
}

export declare interface FormDataBasicBodyParam {
    body: MultiPartRequest;
}

export declare interface FormDataBasicMediaTypesParam {
    contentType: "multipart/form-data";
}

export declare type FormDataBasicParameters = FormDataBasicMediaTypesParam & FormDataBasicBodyParam & RequestParameters;

export declare interface FormDataBinaryArrayParts {
    post(options: FormDataBinaryArrayPartsParameters): StreamableMethod<FormDataBinaryArrayParts204Response>;
}

export declare interface FormDataBinaryArrayParts204Response extends HttpResponse {
    status: "204";
}

export declare interface FormDataBinaryArrayPartsBodyParam {
    body: BinaryArrayPartsRequest;
}

export declare interface FormDataBinaryArrayPartsMediaTypesParam {
    contentType: "multipart/form-data";
}

export declare type FormDataBinaryArrayPartsParameters = FormDataBinaryArrayPartsMediaTypesParam & FormDataBinaryArrayPartsBodyParam & RequestParameters;

export declare interface FormDataCheckFileNameAndContentType {
    post(options: FormDataCheckFileNameAndContentTypeParameters): StreamableMethod<FormDataCheckFileNameAndContentType204Response>;
}

export declare interface FormDataCheckFileNameAndContentType204Response extends HttpResponse {
    status: "204";
}

export declare interface FormDataCheckFileNameAndContentTypeBodyParam {
    body: MultiPartRequest;
}

export declare interface FormDataCheckFileNameAndContentTypeMediaTypesParam {
    contentType: "multipart/form-data";
}

export declare type FormDataCheckFileNameAndContentTypeParameters = FormDataCheckFileNameAndContentTypeMediaTypesParam & FormDataCheckFileNameAndContentTypeBodyParam & RequestParameters;

export declare interface FormDataFileArrayAndBasic {
    post(options: FormDataFileArrayAndBasicParameters): StreamableMethod<FormDataFileArrayAndBasic204Response>;
}

export declare interface FormDataFileArrayAndBasic204Response extends HttpResponse {
    status: "204";
}

export declare interface FormDataFileArrayAndBasicBodyParam {
    body: ComplexPartsRequest;
}

export declare interface FormDataFileArrayAndBasicMediaTypesParam {
    contentType: "multipart/form-data";
}

export declare type FormDataFileArrayAndBasicParameters = FormDataFileArrayAndBasicMediaTypesParam & FormDataFileArrayAndBasicBodyParam & RequestParameters;

export declare interface FormDataHttpPartsContentTypeImageJpegContentType {
    post(options: FormDataHttpPartsContentTypeImageJpegContentTypeParameters): StreamableMethod<FormDataHttpPartsContentTypeImageJpegContentType204Response>;
}

export declare interface FormDataHttpPartsContentTypeImageJpegContentType204Response extends HttpResponse {
    status: "204";
}

export declare interface FormDataHttpPartsContentTypeImageJpegContentTypeBodyParam {
    body: FileWithHttpPartSpecificContentTypeRequest;
}

export declare interface FormDataHttpPartsContentTypeImageJpegContentTypeMediaTypesParam {
    contentType: "multipart/form-data";
}

export declare type FormDataHttpPartsContentTypeImageJpegContentTypeParameters = FormDataHttpPartsContentTypeImageJpegContentTypeMediaTypesParam & FormDataHttpPartsContentTypeImageJpegContentTypeBodyParam & RequestParameters;

export declare interface FormDataHttpPartsContentTypeOptionalContentType {
    post(options: FormDataHttpPartsContentTypeOptionalContentTypeParameters): StreamableMethod<FormDataHttpPartsContentTypeOptionalContentType204Response>;
}

export declare interface FormDataHttpPartsContentTypeOptionalContentType204Response extends HttpResponse {
    status: "204";
}

export declare interface FormDataHttpPartsContentTypeOptionalContentTypeBodyParam {
    body: FileWithHttpPartOptionalContentTypeRequest;
}

export declare interface FormDataHttpPartsContentTypeOptionalContentTypeMediaTypesParam {
    contentType: "multipart/form-data";
}

export declare type FormDataHttpPartsContentTypeOptionalContentTypeParameters = FormDataHttpPartsContentTypeOptionalContentTypeMediaTypesParam & FormDataHttpPartsContentTypeOptionalContentTypeBodyParam & RequestParameters;

export declare interface FormDataHttpPartsContentTypeRequiredContentType {
    post(options: FormDataHttpPartsContentTypeRequiredContentTypeParameters): StreamableMethod<FormDataHttpPartsContentTypeRequiredContentType204Response>;
}

export declare interface FormDataHttpPartsContentTypeRequiredContentType204Response extends HttpResponse {
    status: "204";
}

export declare interface FormDataHttpPartsContentTypeRequiredContentTypeBodyParam {
    body: FileWithHttpPartRequiredContentTypeRequest;
}

export declare interface FormDataHttpPartsContentTypeRequiredContentTypeMediaTypesParam {
    contentType: "multipart/form-data";
}

export declare type FormDataHttpPartsContentTypeRequiredContentTypeParameters = FormDataHttpPartsContentTypeRequiredContentTypeMediaTypesParam & FormDataHttpPartsContentTypeRequiredContentTypeBodyParam & RequestParameters;

export declare interface FormDataHttpPartsJsonArrayAndFileArray {
    post(options: FormDataHttpPartsJsonArrayAndFileArrayParameters): StreamableMethod<FormDataHttpPartsJsonArrayAndFileArray204Response>;
}

export declare interface FormDataHttpPartsJsonArrayAndFileArray204Response extends HttpResponse {
    status: "204";
}

export declare interface FormDataHttpPartsJsonArrayAndFileArrayBodyParam {
    body: ComplexHttpPartsModelRequest;
}

export declare interface FormDataHttpPartsJsonArrayAndFileArrayMediaTypesParam {
    contentType: "multipart/form-data";
}

export declare type FormDataHttpPartsJsonArrayAndFileArrayParameters = FormDataHttpPartsJsonArrayAndFileArrayMediaTypesParam & FormDataHttpPartsJsonArrayAndFileArrayBodyParam & RequestParameters;

export declare interface FormDataHttpPartsNonStringFloat {
    post(options: FormDataHttpPartsNonStringFloatParameters): StreamableMethod<FormDataHttpPartsNonStringFloat204Response>;
}

export declare interface FormDataHttpPartsNonStringFloat204Response extends HttpResponse {
    status: "204";
}

export declare interface FormDataHttpPartsNonStringFloatBodyParam {
    body: FormData | Array<{
        name: "temperature";
        body: number;
    }>;
}

export declare interface FormDataHttpPartsNonStringFloatMediaTypesParam {
    contentType: "multipart/form-data";
}

export declare type FormDataHttpPartsNonStringFloatParameters = FormDataHttpPartsNonStringFloatMediaTypesParam & FormDataHttpPartsNonStringFloatBodyParam & RequestParameters;

export declare interface FormDataJsonPart {
    post(options: FormDataJsonPartParameters): StreamableMethod<FormDataJsonPart204Response>;
}

export declare interface FormDataJsonPart204Response extends HttpResponse {
    status: "204";
}

export declare interface FormDataJsonPartBodyParam {
    body: JsonPartRequest;
}

export declare interface FormDataJsonPartMediaTypesParam {
    contentType: "multipart/form-data";
}

export declare type FormDataJsonPartParameters = FormDataJsonPartMediaTypesParam & FormDataJsonPartBodyParam & RequestParameters;

export declare interface FormDataMultiBinaryParts {
    post(options: FormDataMultiBinaryPartsParameters): StreamableMethod<FormDataMultiBinaryParts204Response>;
}

export declare interface FormDataMultiBinaryParts204Response extends HttpResponse {
    status: "204";
}

export declare interface FormDataMultiBinaryPartsBodyParam {
    body: MultiBinaryPartsRequest;
}

export declare interface FormDataMultiBinaryPartsMediaTypesParam {
    contentType: "multipart/form-data";
}

export declare type FormDataMultiBinaryPartsParameters = FormDataMultiBinaryPartsMediaTypesParam & FormDataMultiBinaryPartsBodyParam & RequestParameters;

export declare type JsonPartRequest = FormData | Array<JsonPartRequestAddressPartDescriptor | JsonPartRequestProfileImagePartDescriptor>;

export declare interface JsonPartRequestAddressPartDescriptor {
    name: "address";
    body: Address;
}

export declare interface JsonPartRequestProfileImagePartDescriptor {
    name: "profileImage";
    body: string | Uint8Array | ReadableStream<Uint8Array> | NodeJS.ReadableStream | File;
    filename?: string;
    contentType?: string;
}

export declare type MultiBinaryPartsRequest = FormData | Array<MultiBinaryPartsRequestProfileImagePartDescriptor | MultiBinaryPartsRequestPicturePartDescriptor>;

export declare interface MultiBinaryPartsRequestPicturePartDescriptor {
    name: "picture";
    body: string | Uint8Array | ReadableStream<Uint8Array> | NodeJS.ReadableStream | File;
    filename?: string;
    contentType?: string;
}

export declare interface MultiBinaryPartsRequestProfileImagePartDescriptor {
    name: "profileImage";
    body: string | Uint8Array | ReadableStream<Uint8Array> | NodeJS.ReadableStream | File;
    filename?: string;
    contentType?: string;
}

export declare type MultiPartClient = Client & {
    path: Routes;
};

export declare interface MultiPartClientOptions extends ClientOptions {
}

export declare type MultiPartRequest = FormData | Array<MultiPartRequestIdPartDescriptor | MultiPartRequestProfileImagePartDescriptor>;

export declare interface MultiPartRequestIdPartDescriptor {
    name: "id";
    body: string;
}

export declare interface MultiPartRequestProfileImagePartDescriptor {
    name: "profileImage";
    body: string | Uint8Array | ReadableStream<Uint8Array> | NodeJS.ReadableStream | File;
    filename?: string;
    contentType?: string;
}

export declare interface Routes {
    (path: "/multipart/form-data/mixed-parts"): FormDataBasic;
    (path: "/multipart/form-data/complex-parts"): FormDataFileArrayAndBasic;
    (path: "/multipart/form-data/json-part"): FormDataJsonPart;
    (path: "/multipart/form-data/binary-array-parts"): FormDataBinaryArrayParts;
    (path: "/multipart/form-data/multi-binary-parts"): FormDataMultiBinaryParts;
    (path: "/multipart/form-data/check-filename-and-content-type"): FormDataCheckFileNameAndContentType;
    (path: "/multipart/form-data/anonymous-model"): FormDataAnonymousModel;
    (path: "/multipart/form-data/complex-parts-with-httppart"): FormDataHttpPartsJsonArrayAndFileArray;
    (path: "/multipart/form-data/check-filename-and-specific-content-type-with-httppart"): FormDataHttpPartsContentTypeImageJpegContentType;
    (path: "/multipart/form-data/check-filename-and-required-content-type-with-httppart"): FormDataHttpPartsContentTypeRequiredContentType;
    (path: "/multipart/form-data/file-with-http-part-optional-content-type"): FormDataHttpPartsContentTypeOptionalContentType;
    (path: "/multipart/form-data/non-string-float"): FormDataHttpPartsNonStringFloat;
}

export { }
