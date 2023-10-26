// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OpenAIContext } from "../../api/OpenAIContext.js";
import {
  list,
  create,
  retrieve,
  deleteOperation,
  download,
  ListOptions,
  CreateOptions,
  RetrieveOptions,
  DeleteOptions,
  DownloadOptions,
} from "../../api/files/index.js";
import {
  ListFilesResponse,
  CreateFileRequest,
  OpenAIFile,
  DeleteFileResponse,
} from "../../models/models.js";

export interface FilesOperations {
  files: {
    list: (options?: ListOptions) => Promise<ListFilesResponse>;
    create: (
      file: CreateFileRequest,
      options?: CreateOptions
    ) => Promise<OpenAIFile>;
    retrieve: (
      fileId: string,
      options?: RetrieveOptions
    ) => Promise<OpenAIFile>;
    deleteOperation: (
      fileId: string,
      options?: DeleteOptions
    ) => Promise<DeleteFileResponse>;
    download: (fileId: string, options?: DownloadOptions) => Promise<string>;
  };
}

export function getFiles(context: OpenAIContext) {
  return {
    list: (options?: ListOptions) => list(context, options),
    create: (file: CreateFileRequest, options?: CreateOptions) =>
      create(context, file, options),
    retrieve: (fileId: string, options?: RetrieveOptions) =>
      retrieve(context, fileId, options),
    deleteOperation: (fileId: string, options?: DeleteOptions) =>
      deleteOperation(context, fileId, options),
    download: (fileId: string, options?: DownloadOptions) =>
      download(context, fileId, options),
  };
}

export function getFilesOperations(context: OpenAIContext): FilesOperations {
  return {
    files: getFiles(context),
  };
}
