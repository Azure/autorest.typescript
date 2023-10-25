// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Client } from "@azure-rest/core-client";
import {
  listFiles,
  createFile,
  retrieveFile,
  deleteFile,
  downloadFile,
} from "../../api/files";
import {
  ListFilesOptions,
  ListFilesResponse,
  CreateFileRequest,
  CreateFileOptions,
  OpenAIFile,
  RetrieveFileOptions,
  DeleteFileOptions,
  DeleteFileResponse,
  DownloadFileOptions,
} from "../../models";

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

export function getFiles(context: Client) {
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

export function getFilesOperations(): FilesOperations {
  return {
    files: getFiles,
  };
}
