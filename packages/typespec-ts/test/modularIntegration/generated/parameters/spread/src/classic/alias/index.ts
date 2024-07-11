// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { SpreadContext } from "../../api/spreadContext.js";
import {
  aliasSpreadAsRequestBody,
  aliasSpreadAsRequestParameter,
  aliasSpreadWithMultipleParameters,
} from "../../api/alias/index.js";
import {
  AliasSpreadAsRequestBodyOptionalParams,
  AliasSpreadAsRequestParameterOptionalParams,
  AliasSpreadWithMultipleParametersOptionalParams,
} from "../../api/options.js";

/** Interface representing a Alias operations. */
export interface AliasOperations {
  spreadAsRequestBody: (
    name: string,
    options?: AliasSpreadAsRequestBodyOptionalParams,
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
    prop1: string,
    prop2: string,
    prop3: string,
    prop4: string,
    prop5: string,
    prop6: string,
    options?: AliasSpreadWithMultipleParametersOptionalParams,
  ) => Promise<void>;
}

export function getAlias(context: SpreadContext) {
  return {
    spreadAsRequestBody: (
      name: string,
      options?: AliasSpreadAsRequestBodyOptionalParams,
    ) => aliasSpreadAsRequestBody(context, name, options),
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
      prop1: string,
      prop2: string,
      prop3: string,
      prop4: string,
      prop5: string,
      prop6: string,
      options?: AliasSpreadWithMultipleParametersOptionalParams,
    ) =>
      aliasSpreadWithMultipleParameters(
        context,
        id,
        xMsTestHeader,
        prop1,
        prop2,
        prop3,
        prop4,
        prop5,
        prop6,
        options,
      ),
  };
}

export function getAliasOperations(context: SpreadContext): AliasOperations {
  return {
    ...getAlias(context),
  };
}
