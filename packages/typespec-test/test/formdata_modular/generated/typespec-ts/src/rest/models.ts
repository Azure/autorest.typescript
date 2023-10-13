// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface CreateFileRequest {
  /**
   * Name of the [JSON Lines](https://jsonlines.readthedocs.io/en/latest/) file to be uploaded.
   *
   * If the `purpose` is set to "fine-tune", the file will be used for fine-tuning.
   */
  file:
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream;
  /**
   * The intended purpose of the uploaded documents. Use "fine-tune" for
   * [fine-tuning](/docs/api-reference/fine-tuning). This allows us to validate the format of the
   * uploaded file.
   */
  purpose: string;
}
