// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OpenAIContext } from "../../api/OpenAIContext.js";
import {
  ListFilesResponse,
  OpenAIFile,
  CreateFileRequest,
  DeleteFileResponse,
} from "../../models/models.js";
import {
  list,
  create,
  retrieve,
  deleteOperation,
  download,
} from "../../api/files/index.js";
import {
  FilesListOptions,
  FilesCreateOptions,
  FilesRetrieveOptions,
  FilesDeleteOptions,
  FilesDownloadOptions,
} from "../../models/options.js";

export interface FilesOperations {
  files: {
    list: (options?: FilesListOptions) => Promise<ListFilesResponse>;
    create: (
      file: CreateFileRequest,
      options?: FilesCreateOptions
    ) => Promise<OpenAIFile>;
    retrieve: (
      fileId: string,
      options?: FilesRetrieveOptions
    ) => Promise<OpenAIFile>;
    deleteOperation: (
      fileId: string,
      options?: FilesDeleteOptions
    ) => Promise<DeleteFileResponse>;
    download: (
      fileId: string,
      options?: FilesDownloadOptions
    ) => Promise<string>;
  };
}

export function getFiles(context: OpenAIContext) {
  return {
    list: (options?: FilesListOptions) => list(context, options),
    create: (file: CreateFileRequest, options?: FilesCreateOptions) =>
      create(context, file, options),
    retrieve: (fileId: string, options?: FilesRetrieveOptions) =>
      retrieve(context, fileId, options),
    deleteOperation: (fileId: string, options?: FilesDeleteOptions) =>
      deleteOperation(context, fileId, options),
    download: (fileId: string, options?: FilesDownloadOptions) =>
      download(context, fileId, options),
  };
}

export function getFilesOperations(context: OpenAIContext): FilesOperations {
  return {
    files: getFiles(context),
  };
}
