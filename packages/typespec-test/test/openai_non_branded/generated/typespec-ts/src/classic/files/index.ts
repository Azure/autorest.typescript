// Licensed under the MIT License.

import { OpenAIContext } from "../../api/openAIContext.js";
import {
  download,
  $delete,
  retrieve,
  create,
  list,
  FilesDownloadOptionalParams,
  FilesDeleteOptionalParams,
  FilesRetrieveOptionalParams,
  FilesCreateOptionalParams,
  FilesListOptionalParams,
} from "../../api/files/index.js";
import {
  ListFilesResponse,
  OpenAIFile,
  CreateFileRequest,
  DeleteFileResponse,
} from "../../models/models.js";

/** Interface representing a Files operations. */
export interface FilesOperations {
  download: (
    fileId: string,
    options?: FilesDownloadOptionalParams,
  ) => Promise<string>;
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    fileId: string,
    options?: FilesDeleteOptionalParams,
  ) => Promise<DeleteFileResponse>;
  retrieve: (
    fileId: string,
    options?: FilesRetrieveOptionalParams,
  ) => Promise<OpenAIFile>;
  create: (
    file: CreateFileRequest,
    options?: FilesCreateOptionalParams,
  ) => Promise<OpenAIFile>;
  list: (options?: FilesListOptionalParams) => Promise<ListFilesResponse>;
}

function _getFiles(context: OpenAIContext) {
  return {
    download: (fileId: string, options?: FilesDownloadOptionalParams) =>
      download(context, fileId, options),
    delete: (fileId: string, options?: FilesDeleteOptionalParams) =>
      $delete(context, fileId, options),
    retrieve: (fileId: string, options?: FilesRetrieveOptionalParams) =>
      retrieve(context, fileId, options),
    create: (file: CreateFileRequest, options?: FilesCreateOptionalParams) =>
      create(context, file, options),
    list: (options?: FilesListOptionalParams) => list(context, options),
  };
}

export function _getFilesOperations(context: OpenAIContext): FilesOperations {
  return {
    ..._getFiles(context),
  };
}
