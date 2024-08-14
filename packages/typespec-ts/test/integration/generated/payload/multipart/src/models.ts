// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface MultiPartRequestIdPartDescriptor {
  name: "id";
  body: string;
}

export interface MultiPartRequestProfileImagePartDescriptor {
  name: "profileImage";
  body:
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream
    | File;
  filename?: string;
  contentType?: string;
}

export interface ComplexPartsRequestIdPartDescriptor {
  name: "id";
  body: string;
}

export interface ComplexPartsRequestAddressPartDescriptor {
  name: "address";
  body: Address;
}

export interface ComplexPartsRequestProfileImagePartDescriptor {
  name: "profileImage";
  body:
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream
    | File;
  filename?: string;
  contentType?: string;
}

export interface ComplexPartsRequestPicturesPartDescriptor {
  name: "pictures";
  body:
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream
    | File;
  filename?: string;
  contentType?: string;
}

export interface Address {
  city: string;
}

export interface JsonPartRequestAddressPartDescriptor {
  name: "address";
  body: Address;
}

export interface JsonPartRequestProfileImagePartDescriptor {
  name: "profileImage";
  body:
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream
    | File;
  filename?: string;
  contentType?: string;
}

export interface BinaryArrayPartsRequestIdPartDescriptor {
  name: "id";
  body: string;
}

export interface BinaryArrayPartsRequestPicturesPartDescriptor {
  name: "pictures";
  body:
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream
    | File;
  filename?: string;
  contentType?: string;
}

export interface MultiBinaryPartsRequestProfileImagePartDescriptor {
  name: "profileImage";
  body:
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream
    | File;
  filename?: string;
  contentType?: string;
}

export interface MultiBinaryPartsRequestPicturePartDescriptor {
  name: "picture";
  body:
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream
    | File;
  filename?: string;
  contentType?: string;
}

export interface FileWithHttpPartSpecificContentTypeRequestProfileImagePartDescriptor {
  name: "profileImage";
  body: HttpPart;
}

export interface HttpPart {}

export interface FileWithHttpPartRequiredContentTypeRequestProfileImagePartDescriptor {
  name: "profileImage";
  body: HttpPart;
}

export interface FileWithHttpPartOptionalContentTypeRequestProfileImagePartDescriptor {
  name: "profileImage";
  body: HttpPart;
}

export interface ComplexHttpPartsModelRequestIdPartDescriptor {
  name: "id";
  body: HttpPart;
}

export interface ComplexHttpPartsModelRequestAddressPartDescriptor {
  name: "address";
  body: HttpPart;
}

export interface ComplexHttpPartsModelRequestProfileImagePartDescriptor {
  name: "profileImage";
  body: HttpPart;
}

export interface ComplexHttpPartsModelRequestPreviousAddressesPartDescriptor {
  name: "previousAddresses";
  body: HttpPart;
}

export interface ComplexHttpPartsModelRequestPicturesPartDescriptor {
  name: "pictures";
  body: Array<HttpPart>;
}

export type MultiPartRequest =
  | FormData
  | Array<
      | MultiPartRequestIdPartDescriptor
      | MultiPartRequestProfileImagePartDescriptor
    >;
export type ComplexPartsRequest =
  | FormData
  | Array<
      | ComplexPartsRequestIdPartDescriptor
      | ComplexPartsRequestAddressPartDescriptor
      | ComplexPartsRequestProfileImagePartDescriptor
      | ComplexPartsRequestPicturesPartDescriptor
    >;
export type JsonPartRequest =
  | FormData
  | Array<
      | JsonPartRequestAddressPartDescriptor
      | JsonPartRequestProfileImagePartDescriptor
    >;
export type BinaryArrayPartsRequest =
  | FormData
  | Array<
      | BinaryArrayPartsRequestIdPartDescriptor
      | BinaryArrayPartsRequestPicturesPartDescriptor
    >;
export type MultiBinaryPartsRequest =
  | FormData
  | Array<
      | MultiBinaryPartsRequestProfileImagePartDescriptor
      | MultiBinaryPartsRequestPicturePartDescriptor
    >;
export type FileWithHttpPartSpecificContentTypeRequest =
  | FormData
  | Array<FileWithHttpPartSpecificContentTypeRequestProfileImagePartDescriptor>;
export type FileWithHttpPartRequiredContentTypeRequest =
  | FormData
  | Array<FileWithHttpPartRequiredContentTypeRequestProfileImagePartDescriptor>;
export type FileWithHttpPartOptionalContentTypeRequest =
  | FormData
  | Array<FileWithHttpPartOptionalContentTypeRequestProfileImagePartDescriptor>;
export type ComplexHttpPartsModelRequest =
  | FormData
  | Array<
      | ComplexHttpPartsModelRequestIdPartDescriptor
      | ComplexHttpPartsModelRequestAddressPartDescriptor
      | ComplexHttpPartsModelRequestProfileImagePartDescriptor
      | ComplexHttpPartsModelRequestPreviousAddressesPartDescriptor
      | ComplexHttpPartsModelRequestPicturesPartDescriptor
    >;
