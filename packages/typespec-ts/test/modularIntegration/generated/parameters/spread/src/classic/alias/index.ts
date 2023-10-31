// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { SpreadContext } from "../../api/SpreadContext.js";
import {
  aliasSpreadAsRequestBody,
  aliasSpreadAsRequestParameter,
  aliasSpreadWithMultipleParameters,
} from "../../api/alias/index.js";
import {
  AliasAliasSpreadAsRequestBodyOptions,
  AliasAliasSpreadAsRequestParameterOptions,
  AliasAliasSpreadWithMultipleParametersOptions,
} from "../../models/options.js";

export interface AliasOperations {
  spreadAsRequestBody: (
    name: string,
    options?: AliasAliasSpreadAsRequestBodyOptions
  ) => Promise<void>;
  spreadAsRequestParameter: (
    id: string,
    xMsTestHeader: string,
    name: string,
    options?: AliasAliasSpreadAsRequestParameterOptions
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
    options?: AliasAliasSpreadWithMultipleParametersOptions
  ) => Promise<void>;
}

export function getAlias(context: SpreadContext) {
  return {
    spreadAsRequestBody: (
      name: string,
      options?: AliasAliasSpreadAsRequestBodyOptions
    ) => aliasSpreadAsRequestBody(context, name, options),
    spreadAsRequestParameter: (
      id: string,
      xMsTestHeader: string,
      name: string,
      options?: AliasAliasSpreadAsRequestParameterOptions
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
      options?: AliasAliasSpreadWithMultipleParametersOptions
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
        options
      ),
  };
}

export function getAliasOperations(context: SpreadContext): AliasOperations {
  return {
    ...getAlias(context),
  };
}
