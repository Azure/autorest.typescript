// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { SpecialWordsContext } from "../../api/SpecialWordsContext.js";
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
  OperationsAndOptions,
  OperationsAsOptions,
  OperationsAssertOptions,
  OperationsAsyncOptions,
  OperationsAwaitOptions,
  OperationsBreakOptions,
  OperationsClassOptions,
  OperationsConstructorOptions,
  OperationsContinueOptions,
  OperationsDefOptions,
  OperationsDelOptions,
  OperationsElifOptions,
  OperationsElseOptions,
  OperationsExceptOptions,
  OperationsExecOptions,
  OperationsFinallyOptions,
  OperationsForOptions,
  OperationsFromOptions,
  OperationsGlobalOptions,
  OperationsIfOptions,
  OperationsImportOptions,
  OperationsInOptions,
  OperationsIsOptions,
  OperationsLambdaOptions,
  OperationsNotOptions,
  OperationsOrOptions,
  OperationsPassOptions,
  OperationsRaiseOptions,
  OperationsReturnOptions,
  OperationsTryOptions,
  OperationsWhileOptions,
  OperationsWithOptions,
  OperationsYieldOptions,
} from "../../models/options.js";

export interface OperationsOperations {
  and: (options?: OperationsAndOptions) => Promise<void>;
  as: (options?: OperationsAsOptions) => Promise<void>;
  assert: (options?: OperationsAssertOptions) => Promise<void>;
  async: (options?: OperationsAsyncOptions) => Promise<void>;
  await: (options?: OperationsAwaitOptions) => Promise<void>;
  break: (options?: OperationsBreakOptions) => Promise<void>;
  class: (options?: OperationsClassOptions) => Promise<void>;
  constructor: (options?: OperationsConstructorOptions) => Promise<void>;
  continue: (options?: OperationsContinueOptions) => Promise<void>;
  def: (options?: OperationsDefOptions) => Promise<void>;
  del: (options?: OperationsDelOptions) => Promise<void>;
  elif: (options?: OperationsElifOptions) => Promise<void>;
  else: (options?: OperationsElseOptions) => Promise<void>;
  except: (options?: OperationsExceptOptions) => Promise<void>;
  exec: (options?: OperationsExecOptions) => Promise<void>;
  finally: (options?: OperationsFinallyOptions) => Promise<void>;
  for: (options?: OperationsForOptions) => Promise<void>;
  from: (options?: OperationsFromOptions) => Promise<void>;
  global: (options?: OperationsGlobalOptions) => Promise<void>;
  if: (options?: OperationsIfOptions) => Promise<void>;
  import: (options?: OperationsImportOptions) => Promise<void>;
  in: (options?: OperationsInOptions) => Promise<void>;
  is: (options?: OperationsIsOptions) => Promise<void>;
  lambda: (options?: OperationsLambdaOptions) => Promise<void>;
  not: (options?: OperationsNotOptions) => Promise<void>;
  or: (options?: OperationsOrOptions) => Promise<void>;
  pass: (options?: OperationsPassOptions) => Promise<void>;
  raise: (options?: OperationsRaiseOptions) => Promise<void>;
  return: (options?: OperationsReturnOptions) => Promise<void>;
  try: (options?: OperationsTryOptions) => Promise<void>;
  while: (options?: OperationsWhileOptions) => Promise<void>;
  with: (options?: OperationsWithOptions) => Promise<void>;
  yield: (options?: OperationsYieldOptions) => Promise<void>;
}

export function getOperations(context: SpecialWordsContext) {
  return {
    and: (options?: OperationsAndOptions) => operationsAnd(context, options),
    as: (options?: OperationsAsOptions) => operationsAs(context, options),
    assert: (options?: OperationsAssertOptions) =>
      operationsAssert(context, options),
    async: (options?: OperationsAsyncOptions) =>
      operationsAsync(context, options),
    await: (options?: OperationsAwaitOptions) =>
      operationsAwait(context, options),
    break: (options?: OperationsBreakOptions) =>
      operationsBreak(context, options),
    class: (options?: OperationsClassOptions) =>
      operationsClass(context, options),
    constructor: (options?: OperationsConstructorOptions) =>
      operationsConstructor(context, options),
    continue: (options?: OperationsContinueOptions) =>
      operationsContinue(context, options),
    def: (options?: OperationsDefOptions) => operationsDef(context, options),
    del: (options?: OperationsDelOptions) => operationsDel(context, options),
    elif: (options?: OperationsElifOptions) => operationsElif(context, options),
    else: (options?: OperationsElseOptions) => operationsElse(context, options),
    except: (options?: OperationsExceptOptions) =>
      operationsExcept(context, options),
    exec: (options?: OperationsExecOptions) => operationsExec(context, options),
    finally: (options?: OperationsFinallyOptions) =>
      operationsFinally(context, options),
    for: (options?: OperationsForOptions) => operationsFor(context, options),
    from: (options?: OperationsFromOptions) => operationsFrom(context, options),
    global: (options?: OperationsGlobalOptions) =>
      operationsGlobal(context, options),
    if: (options?: OperationsIfOptions) => operationsIf(context, options),
    import: (options?: OperationsImportOptions) =>
      operationsImport(context, options),
    in: (options?: OperationsInOptions) => operationsIn(context, options),
    is: (options?: OperationsIsOptions) => operationsIs(context, options),
    lambda: (options?: OperationsLambdaOptions) =>
      operationsLambda(context, options),
    not: (options?: OperationsNotOptions) => operationsNot(context, options),
    or: (options?: OperationsOrOptions) => operationsOr(context, options),
    pass: (options?: OperationsPassOptions) => operationsPass(context, options),
    raise: (options?: OperationsRaiseOptions) =>
      operationsRaise(context, options),
    return: (options?: OperationsReturnOptions) =>
      operationsReturn(context, options),
    try: (options?: OperationsTryOptions) => operationsTry(context, options),
    while: (options?: OperationsWhileOptions) =>
      operationsWhile(context, options),
    with: (options?: OperationsWithOptions) => operationsWith(context, options),
    yield: (options?: OperationsYieldOptions) =>
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
