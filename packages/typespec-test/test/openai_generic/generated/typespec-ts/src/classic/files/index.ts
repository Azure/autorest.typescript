// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  listFiles,
  createFile,
  retrieveFile,
  deleteFile,
  downloadFile,
} from "../../api/files/index.js";
import { OpenAIContext } from "../../api/OpenAIContext.js";
import {
  ListFilesResponse,
  CreateFileRequest,
  OpenAIFile,
  DeleteFileResponse,
} from "../../models/models.js";
import {
  ListFilesOptions,
  CreateFileOptions,
  RetrieveFileOptions,
  DeleteFileOptions,
  DownloadFileOptions,
} from "../../models/options.js";

export interface FilesOperations {
  files: {
    listFiles: (options?: ListFilesOptions) => Promise<ListFilesResponse>;
    createFile: (
      file: CreateFileRequest,
      options?: CreateFileOptions
    ) => Promise<OpenAIFile>;
    retrieveFile: (
      fileId: string,
      options?: RetrieveFileOptions
    ) => Promise<OpenAIFile>;
    deleteFile: (
      fileId: string,
      options?: DeleteFileOptions
    ) => Promise<DeleteFileResponse>;
    downloadFile: (
      fileId: string,
      options?: DownloadFileOptions
    ) => Promise<string>;
  };
}

export function getFiles(context: OpenAIContext) {
  return {
    listFiles: (options?: ListFilesOptions) => listFiles(context, options),
    createFile: (file: CreateFileRequest, options?: CreateFileOptions) =>
      createFile(context, file, options),
    retrieveFile: (fileId: string, options?: RetrieveFileOptions) =>
      retrieveFile(context, fileId, options),
    deleteFile: (fileId: string, options?: DeleteFileOptions) =>
      deleteFile(context, fileId, options),
    downloadFile: (fileId: string, options?: DownloadFileOptions) =>
      downloadFile(context, fileId, options),
  };
}

export function getFilesOperations(context: OpenAIContext): FilesOperations {
  return {
    files: getFiles(context),
  };
}
