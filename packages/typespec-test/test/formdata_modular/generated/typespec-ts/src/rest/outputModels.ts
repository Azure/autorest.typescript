// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** The `File` object represents a document that has been uploaded to OpenAI. */
export interface OpenAIFileOutput {
  /** The file identifier, which can be referenced in the API endpoints. */
  id: string;
  /** The object type, which is always "file". */
  object: "file";
  /** The size of the file in bytes. */
  bytes: number;
  /** The Unix timestamp (in seconds) for when the file was created. */
  createdAt: number;
  /** The name of the file. */
  filename: string;
  /** The intended purpose of the file. Currently, only "fine-tune" is supported. */
  purpose: string;
  /**
   * The current status of the file, which can be either `uploaded`, `processed`, `pending`,
   * `error`, `deleting` or `deleted`.
   */
  status:
    | "uploaded"
    | "processed"
    | "pending"
    | "error"
    | "deleting"
    | "deleted";
  /**
   * Additional details about the status of the file. If the file is in the `error` state, this will
   * include a message describing the error.
   */
  status_details?: string | null;
}
