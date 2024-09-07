// Licensed under the MIT License.

import { OpenAIContext } from "../../api/openAIContext.js";
import {
  list,
  create,
  retrieve,
  $delete,
  download,
} from "../../api/files/index.js";
import {
  ListFilesResponse,
  CreateFileRequest,
  OpenAIFile,
  DeleteFileResponse,
} from "../../models/models.js";
import {
  FilesListOptionalParams,
  FilesCreateOptionalParams,
  FilesRetrieveOptionalParams,
  FilesDeleteOptionalParams,
  FilesDownloadOptionalParams,
} from "../../models/options.js";

/** Interface representing a Files operations. */
export interface FilesOperations {
  list: (options?: FilesListOptionalParams) => Promise<ListFilesResponse>;
  create: (
    file: CreateFileRequest,
    options?: FilesCreateOptionalParams,
  ) => Promise<OpenAIFile>;
  retrieve: (
    fileId: string,
    options?: FilesRetrieveOptionalParams,
  ) => Promise<OpenAIFile>;
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
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

export function getFilesOperations(context: OpenAIContext): FilesOperations {
  return {
    ...getFiles(context),
  };
}
