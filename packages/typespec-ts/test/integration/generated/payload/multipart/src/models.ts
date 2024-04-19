// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface Address {
  city: string;
}

export type MultiPartRequest =
  | FormData
  | Array<
      | { name: "id"; body: string }
      | {
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
    >;
export type ComplexPartsRequest =
  | FormData
  | Array<
      | { name: "id"; body: string }
      | { name: "address"; body: Address }
      | {
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
      | { name: Address; body: Address }
      | {
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
    >;
export type JsonPartRequest =
  | FormData
  | Array<
      | { name: "address"; body: Address }
      | {
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
    >;
export type BinaryArrayPartsRequest =
  | FormData
  | Array<
      | { name: "id"; body: string }
      | {
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
    >;
export type JsonArrayPartsRequest =
  | FormData
  | Array<
      | {
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
      | { name: Address; body: Address }
    >;
export type MultiBinaryPartsRequest =
  | FormData
  | Array<
      | {
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
      | {
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
    >;
