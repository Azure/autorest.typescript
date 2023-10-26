// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  filesList,
  filesCreate,
  filesRetrieve,
  filesDelete,
  filesDownload,
} from "../../api/files/index.js";
import { OpenAIContext } from "../../api/OpenAIContext.js";
import {
  ListFilesResponse,
  CreateFileRequest,
  OpenAIFile,
  DeleteFileResponse,
} from "../../models/models.js";
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
    delete: (
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
    list: (options?: FilesListOptions) => filesList(context, options),
    create: (file: CreateFileRequest, options?: FilesCreateOptions) =>
      filesCreate(context, file, options),
    retrieve: (fileId: string, options?: FilesRetrieveOptions) =>
      filesRetrieve(context, fileId, options),
    delete: (fileId: string, options?: FilesDeleteOptions) =>
      filesDelete(context, fileId, options),
    download: (fileId: string, options?: FilesDownloadOptions) =>
      filesDownload(context, fileId, options),
  };
}

export function getFilesOperations(context: OpenAIContext): FilesOperations {
  return {
    files: getFiles(context),
  };
}
