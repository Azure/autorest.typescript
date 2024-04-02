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
  FilesListOptions,
  FilesCreateOptions,
  FilesRetrieveOptions,
  FilesDeleteOptions,
  FilesDownloadOptions,
} from "../../models/options.js";

export interface FilesOperations {
  list: (options?: FilesListOptions) => Promise<ListFilesResponse>;
  create: (
    file: CreateFileRequest,
    options?: FilesCreateOptions,
  ) => Promise<OpenAIFile>;
  retrieve: (
    fileId: string,
    options?: FilesRetrieveOptions,
  ) => Promise<OpenAIFile>;
  delete: (
    fileId: string,
    options?: FilesDeleteOptions,
  ) => Promise<DeleteFileResponse>;
  download: (fileId: string, options?: FilesDownloadOptions) => Promise<string>;
}

export function getFiles(context: OpenAIContext) {
  return {
    list: (options?: FilesListOptions) => list(context, options),
    create: (file: CreateFileRequest, options?: FilesCreateOptions) =>
      create(context, file, options),
    retrieve: (fileId: string, options?: FilesRetrieveOptions) =>
      retrieve(context, fileId, options),
    delete: (fileId: string, options?: FilesDeleteOptions) =>
      $delete(context, fileId, options),
    download: (fileId: string, options?: FilesDownloadOptions) =>
      download(context, fileId, options),
  };
}

export function getFilesOperations(context: OpenAIContext): FilesOperations {
  return {
    ...getFiles(context),
  };
}
