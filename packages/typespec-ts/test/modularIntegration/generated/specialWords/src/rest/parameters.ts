// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import {
  And,
  As,
  Assert,
  Async,
  Await,
  Break,
  Class,
  Constructor,
  Continue,
  Def,
  Del,
  Elif,
  Else,
  Except,
  Exec,
  Finally,
  For,
  From,
  Global,
  If,
  Import,
  In,
  Is,
  Lambda,
  Not,
  Or,
  Pass,
  Raise,
  Return,
  Try,
  While,
  With,
  Yield,
  SameAsModel,
} from "./models.js";

export interface ModelsWithAndBodyParam {
  body: And;
}

export type ModelsWithAndParameters = ModelsWithAndBodyParam &
  RequestParameters;

export interface ModelsWithAsBodyParam {
  body: As;
}

export type ModelsWithAsParameters = ModelsWithAsBodyParam & RequestParameters;

export interface ModelsWithAssertBodyParam {
  body: Assert;
}

export type ModelsWithAssertParameters = ModelsWithAssertBodyParam &
  RequestParameters;

export interface ModelsWithAsyncBodyParam {
  body: Async;
}

export type ModelsWithAsyncParameters = ModelsWithAsyncBodyParam &
  RequestParameters;

export interface ModelsWithAwaitBodyParam {
  body: Await;
}

export type ModelsWithAwaitParameters = ModelsWithAwaitBodyParam &
  RequestParameters;

export interface ModelsWithBreakBodyParam {
  body: Break;
}

export type ModelsWithBreakParameters = ModelsWithBreakBodyParam &
  RequestParameters;

export interface ModelsWithClassBodyParam {
  body: Class;
}

export type ModelsWithClassParameters = ModelsWithClassBodyParam &
  RequestParameters;

export interface ModelsWithConstructorBodyParam {
  body: Constructor;
}

export type ModelsWithConstructorParameters = ModelsWithConstructorBodyParam &
  RequestParameters;

export interface ModelsWithContinueBodyParam {
  body: Continue;
}

export type ModelsWithContinueParameters = ModelsWithContinueBodyParam &
  RequestParameters;

export interface ModelsWithDefBodyParam {
  body: Def;
}

export type ModelsWithDefParameters = ModelsWithDefBodyParam &
  RequestParameters;

export interface ModelsWithDelBodyParam {
  body: Del;
}

export type ModelsWithDelParameters = ModelsWithDelBodyParam &
  RequestParameters;

export interface ModelsWithElifBodyParam {
  body: Elif;
}

export type ModelsWithElifParameters = ModelsWithElifBodyParam &
  RequestParameters;

export interface ModelsWithElseBodyParam {
  body: Else;
}

export type ModelsWithElseParameters = ModelsWithElseBodyParam &
  RequestParameters;

export interface ModelsWithExceptBodyParam {
  body: Except;
}

export type ModelsWithExceptParameters = ModelsWithExceptBodyParam &
  RequestParameters;

export interface ModelsWithExecBodyParam {
  body: Exec;
}

export type ModelsWithExecParameters = ModelsWithExecBodyParam &
  RequestParameters;

export interface ModelsWithFinallyBodyParam {
  body: Finally;
}

export type ModelsWithFinallyParameters = ModelsWithFinallyBodyParam &
  RequestParameters;

export interface ModelsWithForBodyParam {
  body: For;
}

export type ModelsWithForParameters = ModelsWithForBodyParam &
  RequestParameters;

export interface ModelsWithFromBodyParam {
  body: From;
}

export type ModelsWithFromParameters = ModelsWithFromBodyParam &
  RequestParameters;

export interface ModelsWithGlobalBodyParam {
  body: Global;
}

export type ModelsWithGlobalParameters = ModelsWithGlobalBodyParam &
  RequestParameters;

export interface ModelsWithIfBodyParam {
  body: If;
}

export type ModelsWithIfParameters = ModelsWithIfBodyParam & RequestParameters;

export interface ModelsWithImportBodyParam {
  body: Import;
}

export type ModelsWithImportParameters = ModelsWithImportBodyParam &
  RequestParameters;

export interface ModelsWithInBodyParam {
  body: In;
}

export type ModelsWithInParameters = ModelsWithInBodyParam & RequestParameters;

export interface ModelsWithIsBodyParam {
  body: Is;
}

export type ModelsWithIsParameters = ModelsWithIsBodyParam & RequestParameters;

export interface ModelsWithLambdaBodyParam {
  body: Lambda;
}

export type ModelsWithLambdaParameters = ModelsWithLambdaBodyParam &
  RequestParameters;

export interface ModelsWithNotBodyParam {
  body: Not;
}

export type ModelsWithNotParameters = ModelsWithNotBodyParam &
  RequestParameters;

export interface ModelsWithOrBodyParam {
  body: Or;
}

export type ModelsWithOrParameters = ModelsWithOrBodyParam & RequestParameters;

export interface ModelsWithPassBodyParam {
  body: Pass;
}

export type ModelsWithPassParameters = ModelsWithPassBodyParam &
  RequestParameters;

export interface ModelsWithRaiseBodyParam {
  body: Raise;
}

export type ModelsWithRaiseParameters = ModelsWithRaiseBodyParam &
  RequestParameters;

export interface ModelsWithReturnBodyParam {
  body: Return;
}

export type ModelsWithReturnParameters = ModelsWithReturnBodyParam &
  RequestParameters;

export interface ModelsWithTryBodyParam {
  body: Try;
}

export type ModelsWithTryParameters = ModelsWithTryBodyParam &
  RequestParameters;

export interface ModelsWithWhileBodyParam {
  body: While;
}

export type ModelsWithWhileParameters = ModelsWithWhileBodyParam &
  RequestParameters;

export interface ModelsWithWithBodyParam {
  body: With;
}

export type ModelsWithWithParameters = ModelsWithWithBodyParam &
  RequestParameters;

export interface ModelsWithYieldBodyParam {
  body: Yield;
}

export type ModelsWithYieldParameters = ModelsWithYieldBodyParam &
  RequestParameters;

export interface ModelPropertiesSameAsModelBodyParam {
  body: SameAsModel;
}

export type ModelPropertiesSameAsModelParameters =
  ModelPropertiesSameAsModelBodyParam & RequestParameters;
export type OperationsAndParameters = RequestParameters;
export type OperationsAsParameters = RequestParameters;
export type OperationsAssertParameters = RequestParameters;
export type OperationsAsyncParameters = RequestParameters;
export type OperationsAwaitParameters = RequestParameters;
export type OperationsBreakParameters = RequestParameters;
export type OperationsClassParameters = RequestParameters;
export type OperationsConstructorParameters = RequestParameters;
export type OperationsContinueParameters = RequestParameters;
export type OperationsDefParameters = RequestParameters;
export type OperationsDelParameters = RequestParameters;
export type OperationsElifParameters = RequestParameters;
export type OperationsElseParameters = RequestParameters;
export type OperationsExceptParameters = RequestParameters;
export type OperationsExecParameters = RequestParameters;
export type OperationsFinallyParameters = RequestParameters;
export type OperationsForParameters = RequestParameters;
export type OperationsFromParameters = RequestParameters;
export type OperationsGlobalParameters = RequestParameters;
export type OperationsIfParameters = RequestParameters;
export type OperationsImportParameters = RequestParameters;
export type OperationsInParameters = RequestParameters;
export type OperationsIsParameters = RequestParameters;
export type OperationsLambdaParameters = RequestParameters;
export type OperationsNotParameters = RequestParameters;
export type OperationsOrParameters = RequestParameters;
export type OperationsPassParameters = RequestParameters;
export type OperationsRaiseParameters = RequestParameters;
export type OperationsReturnParameters = RequestParameters;
export type OperationsTryParameters = RequestParameters;
export type OperationsWhileParameters = RequestParameters;
export type OperationsWithParameters = RequestParameters;
export type OperationsYieldParameters = RequestParameters;

export interface ParametersWithAndQueryParamProperties {
  and: string;
}

export interface ParametersWithAndQueryParam {
  queryParameters: ParametersWithAndQueryParamProperties;
}

export type ParametersWithAndParameters = ParametersWithAndQueryParam &
  RequestParameters;

export interface ParametersWithAsQueryParamProperties {
  as: string;
}

export interface ParametersWithAsQueryParam {
  queryParameters: ParametersWithAsQueryParamProperties;
}

export type ParametersWithAsParameters = ParametersWithAsQueryParam &
  RequestParameters;

export interface ParametersWithAssertQueryParamProperties {
  assert: string;
}

export interface ParametersWithAssertQueryParam {
  queryParameters: ParametersWithAssertQueryParamProperties;
}

export type ParametersWithAssertParameters = ParametersWithAssertQueryParam &
  RequestParameters;

export interface ParametersWithAsyncQueryParamProperties {
  async: string;
}

export interface ParametersWithAsyncQueryParam {
  queryParameters: ParametersWithAsyncQueryParamProperties;
}

export type ParametersWithAsyncParameters = ParametersWithAsyncQueryParam &
  RequestParameters;

export interface ParametersWithAwaitQueryParamProperties {
  await: string;
}

export interface ParametersWithAwaitQueryParam {
  queryParameters: ParametersWithAwaitQueryParamProperties;
}

export type ParametersWithAwaitParameters = ParametersWithAwaitQueryParam &
  RequestParameters;

export interface ParametersWithBreakQueryParamProperties {
  break: string;
}

export interface ParametersWithBreakQueryParam {
  queryParameters: ParametersWithBreakQueryParamProperties;
}

export type ParametersWithBreakParameters = ParametersWithBreakQueryParam &
  RequestParameters;

export interface ParametersWithClassQueryParamProperties {
  class: string;
}

export interface ParametersWithClassQueryParam {
  queryParameters: ParametersWithClassQueryParamProperties;
}

export type ParametersWithClassParameters = ParametersWithClassQueryParam &
  RequestParameters;

export interface ParametersWithConstructorQueryParamProperties {
  constructor: string;
}

export interface ParametersWithConstructorQueryParam {
  queryParameters: ParametersWithConstructorQueryParamProperties;
}

export type ParametersWithConstructorParameters =
  ParametersWithConstructorQueryParam & RequestParameters;

export interface ParametersWithContinueQueryParamProperties {
  continue: string;
}

export interface ParametersWithContinueQueryParam {
  queryParameters: ParametersWithContinueQueryParamProperties;
}

export type ParametersWithContinueParameters =
  ParametersWithContinueQueryParam & RequestParameters;

export interface ParametersWithDefQueryParamProperties {
  def: string;
}

export interface ParametersWithDefQueryParam {
  queryParameters: ParametersWithDefQueryParamProperties;
}

export type ParametersWithDefParameters = ParametersWithDefQueryParam &
  RequestParameters;

export interface ParametersWithDelQueryParamProperties {
  del: string;
}

export interface ParametersWithDelQueryParam {
  queryParameters: ParametersWithDelQueryParamProperties;
}

export type ParametersWithDelParameters = ParametersWithDelQueryParam &
  RequestParameters;

export interface ParametersWithElifQueryParamProperties {
  elif: string;
}

export interface ParametersWithElifQueryParam {
  queryParameters: ParametersWithElifQueryParamProperties;
}

export type ParametersWithElifParameters = ParametersWithElifQueryParam &
  RequestParameters;

export interface ParametersWithElseQueryParamProperties {
  else: string;
}

export interface ParametersWithElseQueryParam {
  queryParameters: ParametersWithElseQueryParamProperties;
}

export type ParametersWithElseParameters = ParametersWithElseQueryParam &
  RequestParameters;

export interface ParametersWithExceptQueryParamProperties {
  except: string;
}

export interface ParametersWithExceptQueryParam {
  queryParameters: ParametersWithExceptQueryParamProperties;
}

export type ParametersWithExceptParameters = ParametersWithExceptQueryParam &
  RequestParameters;

export interface ParametersWithExecQueryParamProperties {
  exec: string;
}

export interface ParametersWithExecQueryParam {
  queryParameters: ParametersWithExecQueryParamProperties;
}

export type ParametersWithExecParameters = ParametersWithExecQueryParam &
  RequestParameters;

export interface ParametersWithFinallyQueryParamProperties {
  finally: string;
}

export interface ParametersWithFinallyQueryParam {
  queryParameters: ParametersWithFinallyQueryParamProperties;
}

export type ParametersWithFinallyParameters = ParametersWithFinallyQueryParam &
  RequestParameters;

export interface ParametersWithForQueryParamProperties {
  for: string;
}

export interface ParametersWithForQueryParam {
  queryParameters: ParametersWithForQueryParamProperties;
}

export type ParametersWithForParameters = ParametersWithForQueryParam &
  RequestParameters;

export interface ParametersWithFromQueryParamProperties {
  from: string;
}

export interface ParametersWithFromQueryParam {
  queryParameters: ParametersWithFromQueryParamProperties;
}

export type ParametersWithFromParameters = ParametersWithFromQueryParam &
  RequestParameters;

export interface ParametersWithGlobalQueryParamProperties {
  global: string;
}

export interface ParametersWithGlobalQueryParam {
  queryParameters: ParametersWithGlobalQueryParamProperties;
}

export type ParametersWithGlobalParameters = ParametersWithGlobalQueryParam &
  RequestParameters;

export interface ParametersWithIfQueryParamProperties {
  if: string;
}

export interface ParametersWithIfQueryParam {
  queryParameters: ParametersWithIfQueryParamProperties;
}

export type ParametersWithIfParameters = ParametersWithIfQueryParam &
  RequestParameters;

export interface ParametersWithImportQueryParamProperties {
  import: string;
}

export interface ParametersWithImportQueryParam {
  queryParameters: ParametersWithImportQueryParamProperties;
}

export type ParametersWithImportParameters = ParametersWithImportQueryParam &
  RequestParameters;

export interface ParametersWithInQueryParamProperties {
  in: string;
}

export interface ParametersWithInQueryParam {
  queryParameters: ParametersWithInQueryParamProperties;
}

export type ParametersWithInParameters = ParametersWithInQueryParam &
  RequestParameters;

export interface ParametersWithIsQueryParamProperties {
  is: string;
}

export interface ParametersWithIsQueryParam {
  queryParameters: ParametersWithIsQueryParamProperties;
}

export type ParametersWithIsParameters = ParametersWithIsQueryParam &
  RequestParameters;

export interface ParametersWithLambdaQueryParamProperties {
  lambda: string;
}

export interface ParametersWithLambdaQueryParam {
  queryParameters: ParametersWithLambdaQueryParamProperties;
}

export type ParametersWithLambdaParameters = ParametersWithLambdaQueryParam &
  RequestParameters;

export interface ParametersWithNotQueryParamProperties {
  not: string;
}

export interface ParametersWithNotQueryParam {
  queryParameters: ParametersWithNotQueryParamProperties;
}

export type ParametersWithNotParameters = ParametersWithNotQueryParam &
  RequestParameters;

export interface ParametersWithOrQueryParamProperties {
  or: string;
}

export interface ParametersWithOrQueryParam {
  queryParameters: ParametersWithOrQueryParamProperties;
}

export type ParametersWithOrParameters = ParametersWithOrQueryParam &
  RequestParameters;

export interface ParametersWithPassQueryParamProperties {
  pass: string;
}

export interface ParametersWithPassQueryParam {
  queryParameters: ParametersWithPassQueryParamProperties;
}

export type ParametersWithPassParameters = ParametersWithPassQueryParam &
  RequestParameters;

export interface ParametersWithRaiseQueryParamProperties {
  raise: string;
}

export interface ParametersWithRaiseQueryParam {
  queryParameters: ParametersWithRaiseQueryParamProperties;
}

export type ParametersWithRaiseParameters = ParametersWithRaiseQueryParam &
  RequestParameters;

export interface ParametersWithReturnQueryParamProperties {
  return: string;
}

export interface ParametersWithReturnQueryParam {
  queryParameters: ParametersWithReturnQueryParamProperties;
}

export type ParametersWithReturnParameters = ParametersWithReturnQueryParam &
  RequestParameters;

export interface ParametersWithTryQueryParamProperties {
  try: string;
}

export interface ParametersWithTryQueryParam {
  queryParameters: ParametersWithTryQueryParamProperties;
}

export type ParametersWithTryParameters = ParametersWithTryQueryParam &
  RequestParameters;

export interface ParametersWithWhileQueryParamProperties {
  while: string;
}

export interface ParametersWithWhileQueryParam {
  queryParameters: ParametersWithWhileQueryParamProperties;
}

export type ParametersWithWhileParameters = ParametersWithWhileQueryParam &
  RequestParameters;

export interface ParametersWithWithQueryParamProperties {
  with: string;
}

export interface ParametersWithWithQueryParam {
  queryParameters: ParametersWithWithQueryParamProperties;
}

export type ParametersWithWithParameters = ParametersWithWithQueryParam &
  RequestParameters;

export interface ParametersWithYieldQueryParamProperties {
  yield: string;
}

export interface ParametersWithYieldQueryParam {
  queryParameters: ParametersWithYieldQueryParamProperties;
}

export type ParametersWithYieldParameters = ParametersWithYieldQueryParam &
  RequestParameters;

export interface ParametersWithCancellationTokenQueryParamProperties {
  cancellationToken: string;
}

export interface ParametersWithCancellationTokenQueryParam {
  queryParameters: ParametersWithCancellationTokenQueryParamProperties;
}

export type ParametersWithCancellationTokenParameters =
  ParametersWithCancellationTokenQueryParam & RequestParameters;
