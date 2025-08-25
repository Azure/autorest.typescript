// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  PathItemsGetAllWithValuesOptionalParams,
  PathItemsGetGlobalQueryNullOptionalParams,
  PathItemsGetGlobalAndLocalQueryNullOptionalParams,
  PathItemsGetLocalPathItemQueryNullOptionalParams,
} from "../models";

/** Interface representing a PathItems. */
export interface PathItems {
  /**
   * send globalStringPath='globalStringPath', pathItemStringPath='pathItemStringPath',
   * localStringPath='localStringPath', globalStringQuery='globalStringQuery',
   * pathItemStringQuery='pathItemStringQuery', localStringQuery='localStringQuery'
   * @param pathItemStringPath A string value 'pathItemStringPath' that appears in the path
   * @param localStringPath should contain value 'localStringPath'
   * @param options The options parameters.
   */
  getAllWithValues(
    pathItemStringPath: string,
    localStringPath: string,
    options?: PathItemsGetAllWithValuesOptionalParams,
  ): Promise<void>;
  /**
   * send globalStringPath='globalStringPath', pathItemStringPath='pathItemStringPath',
   * localStringPath='localStringPath', globalStringQuery=null,
   * pathItemStringQuery='pathItemStringQuery', localStringQuery='localStringQuery'
   * @param pathItemStringPath A string value 'pathItemStringPath' that appears in the path
   * @param localStringPath should contain value 'localStringPath'
   * @param options The options parameters.
   */
  getGlobalQueryNull(
    pathItemStringPath: string,
    localStringPath: string,
    options?: PathItemsGetGlobalQueryNullOptionalParams,
  ): Promise<void>;
  /**
   * send globalStringPath=globalStringPath, pathItemStringPath='pathItemStringPath',
   * localStringPath='localStringPath', globalStringQuery=null,
   * pathItemStringQuery='pathItemStringQuery', localStringQuery=null
   * @param pathItemStringPath A string value 'pathItemStringPath' that appears in the path
   * @param localStringPath should contain value 'localStringPath'
   * @param options The options parameters.
   */
  getGlobalAndLocalQueryNull(
    pathItemStringPath: string,
    localStringPath: string,
    options?: PathItemsGetGlobalAndLocalQueryNullOptionalParams,
  ): Promise<void>;
  /**
   * send globalStringPath='globalStringPath', pathItemStringPath='pathItemStringPath',
   * localStringPath='localStringPath', globalStringQuery='globalStringQuery', pathItemStringQuery=null,
   * localStringQuery=null
   * @param pathItemStringPath A string value 'pathItemStringPath' that appears in the path
   * @param localStringPath should contain value 'localStringPath'
   * @param options The options parameters.
   */
  getLocalPathItemQueryNull(
    pathItemStringPath: string,
    localStringPath: string,
    options?: PathItemsGetLocalPathItemQueryNullOptionalParams,
  ): Promise<void>;
}
