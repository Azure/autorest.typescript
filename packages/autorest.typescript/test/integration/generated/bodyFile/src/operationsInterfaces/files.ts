// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  FilesGetFileOptionalParams,
  FilesGetFileResponse,
  FilesGetFileLargeOptionalParams,
  FilesGetFileLargeResponse,
  FilesGetEmptyFileOptionalParams,
  FilesGetEmptyFileResponse,
} from "../models";

/** Interface representing a Files. */
export interface Files {
  /**
   * Get file
   * @param options The options parameters.
   */
  getFile(options?: FilesGetFileOptionalParams): Promise<FilesGetFileResponse>;
  /**
   * Get a large file
   * @param options The options parameters.
   */
  getFileLarge(
    options?: FilesGetFileLargeOptionalParams,
  ): Promise<FilesGetFileLargeResponse>;
  /**
   * Get empty file
   * @param options The options parameters.
   */
  getEmptyFile(
    options?: FilesGetEmptyFileOptionalParams,
  ): Promise<FilesGetEmptyFileResponse>;
}
