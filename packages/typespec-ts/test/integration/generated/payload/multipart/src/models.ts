// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface MultiPartRequest {
  id: string;
  /**
   * NOTE: The following type 'File' is part of WebAPI and available since Node 20. If your Node version is lower than Node 20.
   * You could leverage our helpers 'createFile' or 'createFileFromStream' to create a File object. They could help you specify filename, type, and others.
   */
  profileImage:
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream
    | File;
}

export interface ComplexPartsRequest {
  id: string;
  address: Address;
  /**
   * NOTE: The following type 'File' is part of WebAPI and available since Node 20. If your Node version is lower than Node 20.
   * You could leverage our helpers 'createFile' or 'createFileFromStream' to create a File object. They could help you specify filename, type, and others.
   */
  profileImage:
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream
    | File;
  previousAddresses: Array<Address>;
  /**
   * NOTE: The following type 'File' is part of WebAPI and available since Node 20. If your Node version is lower than Node 20.
   * You could leverage our helpers 'createFile' or 'createFileFromStream' to create a File object. They could help you specify filename, type, and others.
   */
  pictures: (
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream
    | File
  )[];
}

export interface Address {
  city: string;
}

export interface JsonPartRequest {
  address: Address;
  /**
   * NOTE: The following type 'File' is part of WebAPI and available since Node 20. If your Node version is lower than Node 20.
   * You could leverage our helpers 'createFile' or 'createFileFromStream' to create a File object. They could help you specify filename, type, and others.
   */
  profileImage:
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream
    | File;
}

export interface BinaryArrayPartsRequest {
  id: string;
  /**
   * NOTE: The following type 'File' is part of WebAPI and available since Node 20. If your Node version is lower than Node 20.
   * You could leverage our helpers 'createFile' or 'createFileFromStream' to create a File object. They could help you specify filename, type, and others.
   */
  pictures: (
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream
    | File
  )[];
}

export interface JsonArrayPartsRequest {
  /**
   * NOTE: The following type 'File' is part of WebAPI and available since Node 20. If your Node version is lower than Node 20.
   * You could leverage our helpers 'createFile' or 'createFileFromStream' to create a File object. They could help you specify filename, type, and others.
   */
  profileImage:
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream
    | File;
  previousAddresses: Array<Address>;
}

export interface MultiBinaryPartsRequest {
  /**
   * NOTE: The following type 'File' is part of WebAPI and available since Node 20. If your Node version is lower than Node 20.
   * You could leverage our helpers 'createFile' or 'createFileFromStream' to create a File object. They could help you specify filename, type, and others.
   */
  profileImage:
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream
    | File;
  /**
   * NOTE: The following type 'File' is part of WebAPI and available since Node 20. If your Node version is lower than Node 20.
   * You could leverage our helpers 'createFile' or 'createFileFromStream' to create a File object. They could help you specify filename, type, and others.
   */
  picture?:
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream
    | File;
}
