// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { SpecialWordsContext } from "../../api/specialWordsContext.js";
import {
  operationsAnd,
  operationsAs,
  operationsAssert,
  operationsAsync,
  operationsAwait,
  operationsBreak,
  operationsClass,
  operationsConstructor,
  operationsContinue,
  operationsDef,
  operationsDel,
  operationsElif,
  operationsElse,
  operationsExcept,
  operationsExec,
  operationsFinally,
  operationsFor,
  operationsFrom,
  operationsGlobal,
  operationsIf,
  operationsImport,
  operationsIn,
  operationsIs,
  operationsLambda,
  operationsNot,
  operationsOr,
  operationsPass,
  operationsRaise,
  operationsReturn,
  operationsTry,
  operationsWhile,
  operationsWith,
  operationsYield,
} from "../../api/operations/index.js";
import {
  OperationsAndOptionalParams,
  OperationsAsOptionalParams,
  OperationsAssertOptionalParams,
  OperationsAsyncOptionalParams,
  OperationsAwaitOptionalParams,
  OperationsBreakOptionalParams,
  OperationsClassOptionalParams,
  OperationsConstructorOptionalParams,
  OperationsContinueOptionalParams,
  OperationsDefOptionalParams,
  OperationsDelOptionalParams,
  OperationsElifOptionalParams,
  OperationsElseOptionalParams,
  OperationsExceptOptionalParams,
  OperationsExecOptionalParams,
  OperationsFinallyOptionalParams,
  OperationsForOptionalParams,
  OperationsFromOptionalParams,
  OperationsGlobalOptionalParams,
  OperationsIfOptionalParams,
  OperationsImportOptionalParams,
  OperationsInOptionalParams,
  OperationsIsOptionalParams,
  OperationsLambdaOptionalParams,
  OperationsNotOptionalParams,
  OperationsOrOptionalParams,
  OperationsPassOptionalParams,
  OperationsRaiseOptionalParams,
  OperationsReturnOptionalParams,
  OperationsTryOptionalParams,
  OperationsWhileOptionalParams,
  OperationsWithOptionalParams,
  OperationsYieldOptionalParams,
} from "../../models/options.js";

export interface OperationsOperations {
  and: (options?: OperationsAndOptionalParams) => Promise<void>;
  as: (options?: OperationsAsOptionalParams) => Promise<void>;
  assert: (options?: OperationsAssertOptionalParams) => Promise<void>;
  async: (options?: OperationsAsyncOptionalParams) => Promise<void>;
  await: (options?: OperationsAwaitOptionalParams) => Promise<void>;
  break: (options?: OperationsBreakOptionalParams) => Promise<void>;
  class: (options?: OperationsClassOptionalParams) => Promise<void>;
  constructor: (options?: OperationsConstructorOptionalParams) => Promise<void>;
  continue: (options?: OperationsContinueOptionalParams) => Promise<void>;
  def: (options?: OperationsDefOptionalParams) => Promise<void>;
  del: (options?: OperationsDelOptionalParams) => Promise<void>;
  elif: (options?: OperationsElifOptionalParams) => Promise<void>;
  else: (options?: OperationsElseOptionalParams) => Promise<void>;
  except: (options?: OperationsExceptOptionalParams) => Promise<void>;
  exec: (options?: OperationsExecOptionalParams) => Promise<void>;
  finally: (options?: OperationsFinallyOptionalParams) => Promise<void>;
  for: (options?: OperationsForOptionalParams) => Promise<void>;
  from: (options?: OperationsFromOptionalParams) => Promise<void>;
  global: (options?: OperationsGlobalOptionalParams) => Promise<void>;
  if: (options?: OperationsIfOptionalParams) => Promise<void>;
  import: (options?: OperationsImportOptionalParams) => Promise<void>;
  in: (options?: OperationsInOptionalParams) => Promise<void>;
  is: (options?: OperationsIsOptionalParams) => Promise<void>;
  lambda: (options?: OperationsLambdaOptionalParams) => Promise<void>;
  not: (options?: OperationsNotOptionalParams) => Promise<void>;
  or: (options?: OperationsOrOptionalParams) => Promise<void>;
  pass: (options?: OperationsPassOptionalParams) => Promise<void>;
  raise: (options?: OperationsRaiseOptionalParams) => Promise<void>;
  return: (options?: OperationsReturnOptionalParams) => Promise<void>;
  try: (options?: OperationsTryOptionalParams) => Promise<void>;
  while: (options?: OperationsWhileOptionalParams) => Promise<void>;
  with: (options?: OperationsWithOptionalParams) => Promise<void>;
  yield: (options?: OperationsYieldOptionalParams) => Promise<void>;
}

export function getOperations(context: SpecialWordsContext) {
  return {
    and: (options?: OperationsAndOptionalParams) =>
      operationsAnd(context, options),
    as: (options?: OperationsAsOptionalParams) =>
      operationsAs(context, options),
    assert: (options?: OperationsAssertOptionalParams) =>
      operationsAssert(context, options),
    async: (options?: OperationsAsyncOptionalParams) =>
      operationsAsync(context, options),
    await: (options?: OperationsAwaitOptionalParams) =>
      operationsAwait(context, options),
    break: (options?: OperationsBreakOptionalParams) =>
      operationsBreak(context, options),
    class: (options?: OperationsClassOptionalParams) =>
      operationsClass(context, options),
    constructor: (options?: OperationsConstructorOptionalParams) =>
      operationsConstructor(context, options),
    continue: (options?: OperationsContinueOptionalParams) =>
      operationsContinue(context, options),
    def: (options?: OperationsDefOptionalParams) =>
      operationsDef(context, options),
    del: (options?: OperationsDelOptionalParams) =>
      operationsDel(context, options),
    elif: (options?: OperationsElifOptionalParams) =>
      operationsElif(context, options),
    else: (options?: OperationsElseOptionalParams) =>
      operationsElse(context, options),
    except: (options?: OperationsExceptOptionalParams) =>
      operationsExcept(context, options),
    exec: (options?: OperationsExecOptionalParams) =>
      operationsExec(context, options),
    finally: (options?: OperationsFinallyOptionalParams) =>
      operationsFinally(context, options),
    for: (options?: OperationsForOptionalParams) =>
      operationsFor(context, options),
    from: (options?: OperationsFromOptionalParams) =>
      operationsFrom(context, options),
    global: (options?: OperationsGlobalOptionalParams) =>
      operationsGlobal(context, options),
    if: (options?: OperationsIfOptionalParams) =>
      operationsIf(context, options),
    import: (options?: OperationsImportOptionalParams) =>
      operationsImport(context, options),
    in: (options?: OperationsInOptionalParams) =>
      operationsIn(context, options),
    is: (options?: OperationsIsOptionalParams) =>
      operationsIs(context, options),
    lambda: (options?: OperationsLambdaOptionalParams) =>
      operationsLambda(context, options),
    not: (options?: OperationsNotOptionalParams) =>
      operationsNot(context, options),
    or: (options?: OperationsOrOptionalParams) =>
      operationsOr(context, options),
    pass: (options?: OperationsPassOptionalParams) =>
      operationsPass(context, options),
    raise: (options?: OperationsRaiseOptionalParams) =>
      operationsRaise(context, options),
    return: (options?: OperationsReturnOptionalParams) =>
      operationsReturn(context, options),
    try: (options?: OperationsTryOptionalParams) =>
      operationsTry(context, options),
    while: (options?: OperationsWhileOptionalParams) =>
      operationsWhile(context, options),
    with: (options?: OperationsWithOptionalParams) =>
      operationsWith(context, options),
    yield: (options?: OperationsYieldOptionalParams) =>
      operationsYield(context, options),
  };
}

export function getOperationsOperations(
  context: SpecialWordsContext,
): OperationsOperations {
  return {
    ...getOperations(context),
  };
}
