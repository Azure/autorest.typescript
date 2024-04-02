// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OpenAIContext } from "../../api/OpenAIContext.js";
import {
  OpenAIFile,
  ListFilesResponse,
  CreateFileRequest,
  DeleteFileResponse,
} from "../../models/models.js";
import {
  list,
  create,
  retrieve,
  $delete,
  download,
} from "../../api/files/index.js";
import {
  FilesListOptionalParams,
  FilesCreateOptionalParams,
  FilesRetrieveOptionalParams,
  FilesDeleteOptionalParams,
  FilesDownloadOptionalParams,
} from "../../models/options.js";

export interface Files {
  list: (options?: FilesListOptionalParams) => Promise<ListFilesResponse>;
  create: (
    file: CreateFileRequest,
    options?: FilesCreateOptionalParams,
  ) => Promise<OpenAIFile>;
  retrieve: (
    fileId: string,
    options?: FilesRetrieveOptionalParams,
  ) => Promise<OpenAIFile>;
  delete: (
    fileId: string,
    options?: FilesDeleteOptionalParams,
  ) => Promise<DeleteFileResponse>;
  download: (
    fileId: string,
    options?: FilesDownloadOptionalParams,
  ) => Promise<string>;
}

export function getFiles(context: OpenAIContext) {
  return {
    list: (options?: FilesListOptionalParams) => list(context, options),
    create: (file: CreateFileRequest, options?: FilesCreateOptionalParams) =>
      create(context, file, options),
    retrieve: (fileId: string, options?: FilesRetrieveOptionalParams) =>
      retrieve(context, fileId, options),
    delete: (fileId: string, options?: FilesDeleteOptionalParams) =>
      $delete(context, fileId, options),
    download: (fileId: string, options?: FilesDownloadOptionalParams) =>
      download(context, fileId, options),
  };
}

export function getFilesOperations(context: OpenAIContext): Files {
  return {
    ...getFiles(context),
  };
}
