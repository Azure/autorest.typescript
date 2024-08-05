// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { SpreadContext } from "../../api/spreadContext.js";
import {
  aliasSpreadAsRequestBody,
  aliasSpreadParameterWithInnerModel,
  aliasSpreadAsRequestParameter,
  aliasSpreadWithMultipleParameters,
  aliasSpreadParameterWithInnerAlias,
} from "../../api/alias/index.js";
import {
  AliasSpreadAsRequestBodyOptionalParams,
  AliasSpreadParameterWithInnerModelOptionalParams,
  AliasSpreadAsRequestParameterOptionalParams,
  AliasSpreadWithMultipleParametersOptionalParams,
  AliasSpreadParameterWithInnerAliasOptionalParams,
} from "../../models/options.js";

/** Interface representing a Alias operations. */
export interface AliasOperations {
  spreadAsRequestBody: (
    name: string,
    options?: AliasSpreadAsRequestBodyOptionalParams,
  ) => Promise<void>;
  spreadParameterWithInnerModel: (
    id: string,
    xMsTestHeader: string,
    name: string,
    options?: AliasSpreadParameterWithInnerModelOptionalParams,
  ) => Promise<void>;
  spreadAsRequestParameter: (
    id: string,
    xMsTestHeader: string,
    name: string,
    options?: AliasSpreadAsRequestParameterOptionalParams,
  ) => Promise<void>;
  spreadWithMultipleParameters: (
    id: string,
    xMsTestHeader: string,
    requiredString: string,
    requiredIntList: number[],
    options?: AliasSpreadWithMultipleParametersOptionalParams,
  ) => Promise<void>;
  /** spread an alias with contains another alias property as body. */
  spreadParameterWithInnerAlias: (
    id: string,
    xMsTestHeader: string,
    name: string,
    age: number,
    options?: AliasSpreadParameterWithInnerAliasOptionalParams,
  ) => Promise<void>;
}

export function getAlias(context: SpreadContext) {
  return {
    spreadAsRequestBody: (
      name: string,
      options?: AliasSpreadAsRequestBodyOptionalParams,
    ) => aliasSpreadAsRequestBody(context, name, options),
    spreadParameterWithInnerModel: (
      id: string,
      xMsTestHeader: string,
      name: string,
      options?: AliasSpreadParameterWithInnerModelOptionalParams,
    ) =>
      aliasSpreadParameterWithInnerModel(
        context,
        id,
        xMsTestHeader,
        name,
        options,
      ),
    spreadAsRequestParameter: (
      id: string,
      xMsTestHeader: string,
      name: string,
      options?: AliasSpreadAsRequestParameterOptionalParams,
    ) =>
      aliasSpreadAsRequestParameter(context, id, xMsTestHeader, name, options),
    spreadWithMultipleParameters: (
      id: string,
      xMsTestHeader: string,
      requiredString: string,
      requiredIntList: number[],
      options?: AliasSpreadWithMultipleParametersOptionalParams,
    ) =>
      aliasSpreadWithMultipleParameters(
        context,
        id,
        xMsTestHeader,
        requiredString,
        requiredIntList,
        options,
      ),
    spreadParameterWithInnerAlias: (
      id: string,
      xMsTestHeader: string,
      name: string,
      age: number,
      options?: AliasSpreadParameterWithInnerAliasOptionalParams,
    ) =>
      aliasSpreadParameterWithInnerAlias(
        context,
        id,
        xMsTestHeader,
        name,
        age,
        options,
      ),
  };
}

export function getAliasOperations(context: SpreadContext): AliasOperations {
  return {
    ...getAlias(context),
  };
}
