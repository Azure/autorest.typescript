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

export interface ComplexPartsRequestPreviousAddressesPartDescriptor {
  name: "previousAddresses";
  body: Array<Address>;
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

export interface JsonArrayPartsRequestProfileImagePartDescriptor {
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

export interface JsonArrayPartsRequestPreviousAddressesPartDescriptor {
  name: "previousAddresses";
  body: Array<Address>;
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
      | ComplexPartsRequestPreviousAddressesPartDescriptor
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
export type JsonArrayPartsRequest =
  | FormData
  | Array<
      | JsonArrayPartsRequestProfileImagePartDescriptor
      | JsonArrayPartsRequestPreviousAddressesPartDescriptor
    >;
export type MultiBinaryPartsRequest =
  | FormData
  | Array<
      | MultiBinaryPartsRequestProfileImagePartDescriptor
      | MultiBinaryPartsRequestPicturePartDescriptor
    >;
