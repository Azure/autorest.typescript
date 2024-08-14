import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { HttpResponse } from '@azure-rest/core-client';
import { RequestParameters } from '@azure-rest/core-client';
import { StreamableMethod } from '@azure-rest/core-client';

export declare interface Address {
    city: string;
}

export declare interface AnonymousModel {
    post(options: FormDataAnonymousModelParameters): StreamableMethod<FormDataAnonymousModel204Response>;
}

export declare interface Basic {
    post(options: FormDataBasicParameters): StreamableMethod<FormDataBasic204Response>;
}

export declare interface BinaryArrayParts {
    post(options: FormDataBinaryArrayPartsParameters): StreamableMethod<FormDataBinaryArrayParts204Response>;
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

export declare interface CheckFileNameAndContentType {
    post(options: FormDataCheckFileNameAndContentTypeParameters): StreamableMethod<FormDataCheckFileNameAndContentType204Response>;
}

export declare interface Complex {
    post(options: FormDataComplexParameters): StreamableMethod<FormDataComplex204Response>;
}

export declare type ComplexHttpPartsModelRequest = FormData | Array<ComplexHttpPartsModelRequestIdPartDescriptor | ComplexHttpPartsModelRequestAddressPartDescriptor | ComplexHttpPartsModelRequestProfileImagePartDescriptor | ComplexHttpPartsModelRequestPreviousAddressesPartDescriptor | ComplexHttpPartsModelRequestPicturesPartDescriptor>;

export declare interface ComplexHttpPartsModelRequestAddressPartDescriptor {
    name: "address";
    body: HttpPart;
}

export declare interface ComplexHttpPartsModelRequestIdPartDescriptor {
    name: "id";
    body: HttpPart;
}

export declare interface ComplexHttpPartsModelRequestPicturesPartDescriptor {
    name: "pictures";
    body: Array<HttpPart>;
}

export declare interface ComplexHttpPartsModelRequestPreviousAddressesPartDescriptor {
    name: "previousAddresses";
    body: HttpPart;
}

export declare interface ComplexHttpPartsModelRequestProfileImagePartDescriptor {
    name: "profileImage";
    body: HttpPart;
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

export declare interface ComplexWithHttpPart {
    post(options: FormDataComplexWithHttpPartParameters): StreamableMethod<FormDataComplexWithHttpPart204Response>;
}

declare function createClient(options?: MultiPartClientOptions): MultiPartClient;
export default createClient;

export declare interface FileWithHttpPartOptionalContentType {
    post(options: FormDataFileWithHttpPartOptionalContentTypeParameters): StreamableMethod<FormDataFileWithHttpPartOptionalContentType204Response>;
}

export declare type FileWithHttpPartOptionalContentTypeRequest = FormData | Array<FileWithHttpPartOptionalContentTypeRequestProfileImagePartDescriptor>;

export declare interface FileWithHttpPartOptionalContentTypeRequestProfileImagePartDescriptor {
    name: "profileImage";
    body: HttpPart;
}

export declare interface FileWithHttpPartRequiredContentType {
    post(options: FormDataFileWithHttpPartRequiredContentTypeParameters): StreamableMethod<FormDataFileWithHttpPartRequiredContentType204Response>;
}

export declare type FileWithHttpPartRequiredContentTypeRequest = FormData | Array<FileWithHttpPartRequiredContentTypeRequestProfileImagePartDescriptor>;

export declare interface FileWithHttpPartRequiredContentTypeRequestProfileImagePartDescriptor {
    name: "profileImage";
    body: HttpPart;
}

export declare interface FileWithHttpPartSpecificContentType {
    post(options: FormDataFileWithHttpPartSpecificContentTypeParameters): StreamableMethod<FormDataFileWithHttpPartSpecificContentType204Response>;
}

export declare type FileWithHttpPartSpecificContentTypeRequest = FormData | Array<FileWithHttpPartSpecificContentTypeRequestProfileImagePartDescriptor>;

export declare interface FileWithHttpPartSpecificContentTypeRequestProfileImagePartDescriptor {
    name: "profileImage";
    body: HttpPart;
}

export declare interface FormDataAnonymousModel204Response extends HttpResponse {
    status: "204";
}

export declare interface FormDataAnonymousModelBodyParam {
    body?: FormData | Array<{
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

export declare interface FormDataComplex204Response extends HttpResponse {
    status: "204";
}

export declare interface FormDataComplexBodyParam {
    body: ComplexPartsRequest;
}

export declare interface FormDataComplexMediaTypesParam {
    contentType: "multipart/form-data";
}

export declare type FormDataComplexParameters = FormDataComplexMediaTypesParam & FormDataComplexBodyParam & RequestParameters;

export declare interface FormDataComplexWithHttpPart204Response extends HttpResponse {
    status: "204";
}

export declare interface FormDataComplexWithHttpPartBodyParam {
    body: ComplexHttpPartsModelRequest;
}

export declare interface FormDataComplexWithHttpPartMediaTypesParam {
    contentType: "multipart/form-data";
}

export declare type FormDataComplexWithHttpPartParameters = FormDataComplexWithHttpPartMediaTypesParam & FormDataComplexWithHttpPartBodyParam & RequestParameters;

export declare interface FormDataFileWithHttpPartOptionalContentType204Response extends HttpResponse {
    status: "204";
}

export declare interface FormDataFileWithHttpPartOptionalContentTypeBodyParam {
    body: FileWithHttpPartOptionalContentTypeRequest;
}

export declare interface FormDataFileWithHttpPartOptionalContentTypeMediaTypesParam {
    contentType: "multipart/form-data";
}

export declare type FormDataFileWithHttpPartOptionalContentTypeParameters = FormDataFileWithHttpPartOptionalContentTypeMediaTypesParam & FormDataFileWithHttpPartOptionalContentTypeBodyParam & RequestParameters;

export declare interface FormDataFileWithHttpPartRequiredContentType204Response extends HttpResponse {
    status: "204";
}

export declare interface FormDataFileWithHttpPartRequiredContentTypeBodyParam {
    body: FileWithHttpPartRequiredContentTypeRequest;
}

export declare interface FormDataFileWithHttpPartRequiredContentTypeMediaTypesParam {
    contentType: "multipart/form-data";
}

export declare type FormDataFileWithHttpPartRequiredContentTypeParameters = FormDataFileWithHttpPartRequiredContentTypeMediaTypesParam & FormDataFileWithHttpPartRequiredContentTypeBodyParam & RequestParameters;

export declare interface FormDataFileWithHttpPartSpecificContentType204Response extends HttpResponse {
    status: "204";
}

export declare interface FormDataFileWithHttpPartSpecificContentTypeBodyParam {
    body: FileWithHttpPartSpecificContentTypeRequest;
}

export declare interface FormDataFileWithHttpPartSpecificContentTypeMediaTypesParam {
    contentType: "multipart/form-data";
}

export declare type FormDataFileWithHttpPartSpecificContentTypeParameters = FormDataFileWithHttpPartSpecificContentTypeMediaTypesParam & FormDataFileWithHttpPartSpecificContentTypeBodyParam & RequestParameters;

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

export declare interface HttpPart {
}

export declare interface JsonPart {
    post(options: FormDataJsonPartParameters): StreamableMethod<FormDataJsonPart204Response>;
}

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

export declare interface MultiBinaryParts {
    post(options: FormDataMultiBinaryPartsParameters): StreamableMethod<FormDataMultiBinaryParts204Response>;
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
    (path: "/multipart/form-data/mixed-parts"): Basic;
    (path: "/multipart/form-data/complex-parts"): Complex;
    (path: "/multipart/form-data/json-part"): JsonPart;
    (path: "/multipart/form-data/binary-array-parts"): BinaryArrayParts;
    (path: "/multipart/form-data/multi-binary-parts"): MultiBinaryParts;
    (path: "/multipart/form-data/check-filename-and-content-type"): CheckFileNameAndContentType;
    (path: "/multipart/form-data/anonymous-model"): AnonymousModel;
    (path: "/multipart/form-data/check-filename-and-specific-content-type-with-httppart"): FileWithHttpPartSpecificContentType;
    (path: "/multipart/form-data/check-filename-and-required-content-type-with-httppart"): FileWithHttpPartRequiredContentType;
    (path: "/multipart/form-data/file-with-http-part-optional-content-type"): FileWithHttpPartOptionalContentType;
    (path: "/multipart/form-data/complex-parts-with-httppart"): ComplexWithHttpPart;
}

export { }
