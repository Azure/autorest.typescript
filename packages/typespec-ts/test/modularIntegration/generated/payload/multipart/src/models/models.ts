// Licensed under the MIT License.

import {
  FileContents,
  createFilePartDescriptor,
} from "../static-helpers/multipartHelpers.js";

/** model interface MultiPartRequest */
export interface MultiPartRequest {
  id: string;
  profileImage:
    | FileContents
    | { contents: FileContents; contentType?: string; filename?: string };
}

export function multiPartRequestSerializer(item: MultiPartRequest): any {
  return [
    { name: "id", body: item["id"] },
    createFilePartDescriptor("profileImage", item["profileImage"]),
  ];
}

/** model interface ComplexPartsRequest */
export interface ComplexPartsRequest {
  id: string;
  address: Address;
  profileImage:
    | FileContents
    | { contents: FileContents; contentType?: string; filename?: string };
  pictures: Array<
    | FileContents
    | { contents: FileContents; contentType?: string; filename?: string }
  >;
}

export function complexPartsRequestSerializer(item: ComplexPartsRequest): any {
  return [
    { name: "id", body: item["id"] },
    { name: "address", body: addressSerializer(item["address"]) },
    createFilePartDescriptor("profileImage", item["profileImage"]),
    ...item["pictures"].map((x: unknown) =>
      createFilePartDescriptor("pictures", x),
    ),
  ];
}

/** model interface Address */
export interface Address {
  city: string;
}

export function addressSerializer(item: Address): any {
  return { city: item["city"] };
}

/** model interface JsonPartRequest */
export interface JsonPartRequest {
  address: Address;
  profileImage:
    | FileContents
    | { contents: FileContents; contentType?: string; filename?: string };
}

export function jsonPartRequestSerializer(item: JsonPartRequest): any {
  return [
    { name: "address", body: addressSerializer(item["address"]) },
    createFilePartDescriptor("profileImage", item["profileImage"]),
  ];
}

/** model interface BinaryArrayPartsRequest */
export interface BinaryArrayPartsRequest {
  id: string;
  pictures: Array<
    | FileContents
    | { contents: FileContents; contentType?: string; filename?: string }
  >;
}

export function binaryArrayPartsRequestSerializer(
  item: BinaryArrayPartsRequest,
): any {
  return [
    { name: "id", body: item["id"] },
    ...item["pictures"].map((x: unknown) =>
      createFilePartDescriptor("pictures", x),
    ),
  ];
}

/** model interface MultiBinaryPartsRequest */
export interface MultiBinaryPartsRequest {
  profileImage:
    | FileContents
    | { contents: FileContents; contentType?: string; filename?: string };
  picture?:
    | FileContents
    | { contents: FileContents; contentType?: string; filename?: string };
}

export function multiBinaryPartsRequestSerializer(
  item: MultiBinaryPartsRequest,
): any {
  return [
    createFilePartDescriptor("profileImage", item["profileImage"]),
    ...(item["picture"] === undefined
      ? []
      : [createFilePartDescriptor("picture", item["picture"])]),
  ];
}

/** model interface ComplexHttpPartsModelRequest */
export interface ComplexHttpPartsModelRequest {
  id: string;
  address: Address;
  profileImage:
    | File
    | { contents: FileContents; contentType?: string; filename: string };
  previousAddresses: Address[];
  pictures: Array<
    File | { contents: FileContents; contentType?: string; filename: string }
  >;
}

export function complexHttpPartsModelRequestSerializer(
  item: ComplexHttpPartsModelRequest,
): any {
  return [
    { name: "id", body: item["id"] },
    { name: "address", body: addressSerializer(item["address"]) },
    createFilePartDescriptor("profileImage", item["profileImage"]),
    {
      name: "previousAddresses",
      body: addressArraySerializer(item["previousAddresses"]),
    },
    ...item["pictures"].map((x: unknown) =>
      createFilePartDescriptor("pictures", x),
    ),
  ];
}

export function addressArraySerializer(result: Array<Address>): any[] {
  return result.map((item) => {
    return addressSerializer(item);
  });
}

/** model interface FileWithHttpPartSpecificContentTypeRequest */
export interface FileWithHttpPartSpecificContentTypeRequest {
  profileImage:
    | File
    | { contents: FileContents; contentType?: "image/jpg"; filename: string };
}

export function fileWithHttpPartSpecificContentTypeRequestSerializer(
  item: FileWithHttpPartSpecificContentTypeRequest,
): any {
  return [
    createFilePartDescriptor("profileImage", item["profileImage"], "image/jpg"),
  ];
}

/** model interface FileWithHttpPartRequiredContentTypeRequest */
export interface FileWithHttpPartRequiredContentTypeRequest {
  profileImage:
    | File
    | { contents: FileContents; contentType?: string; filename: string };
}

export function fileWithHttpPartRequiredContentTypeRequestSerializer(
  item: FileWithHttpPartRequiredContentTypeRequest,
): any {
  return [createFilePartDescriptor("profileImage", item["profileImage"])];
}

/** model interface FileWithHttpPartOptionalContentTypeRequest */
export interface FileWithHttpPartOptionalContentTypeRequest {
  profileImage:
    | File
    | { contents: FileContents; contentType?: string; filename: string };
}

export function fileWithHttpPartOptionalContentTypeRequestSerializer(
  item: FileWithHttpPartOptionalContentTypeRequest,
): any {
  return [createFilePartDescriptor("profileImage", item["profileImage"])];
}
