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
  AndOptions,
  AsOptions,
  AssertOptions,
  AsyncOptions,
  AwaitOptions,
  BreakOptions,
  ClassOptions,
  ConstructorOptions,
  ContinueOptions,
  DefOptions,
  DelOptions,
  ElifOptions,
  ElseOptions,
  ExceptOptions,
  ExecOptions,
  FinallyOptions,
  ForOptions,
  FromOptions,
  GlobalOptions,
  IfOptions,
  ImportOptions,
  InOptions,
  IsOptions,
  LambdaOptions,
  NotOptions,
  OrOptions,
  PassOptions,
  RaiseOptions,
  ReturnOptions,
  TryOptions,
  WhileOptions,
  WithOptions,
  YieldOptions,
} from "../../models/options.js";

export interface OperationsOperations {
  and: (options?: AndOptions) => Promise<void>;
  as: (options?: AsOptions) => Promise<void>;
  assert: (options?: AssertOptions) => Promise<void>;
  async: (options?: AsyncOptions) => Promise<void>;
  await: (options?: AwaitOptions) => Promise<void>;
  break: (options?: BreakOptions) => Promise<void>;
  class: (options?: ClassOptions) => Promise<void>;
  constructor: (options?: ConstructorOptions) => Promise<void>;
  continue: (options?: ContinueOptions) => Promise<void>;
  def: (options?: DefOptions) => Promise<void>;
  del: (options?: DelOptions) => Promise<void>;
  elif: (options?: ElifOptions) => Promise<void>;
  else: (options?: ElseOptions) => Promise<void>;
  except: (options?: ExceptOptions) => Promise<void>;
  exec: (options?: ExecOptions) => Promise<void>;
  finally: (options?: FinallyOptions) => Promise<void>;
  for: (options?: ForOptions) => Promise<void>;
  from: (options?: FromOptions) => Promise<void>;
  global: (options?: GlobalOptions) => Promise<void>;
  if: (options?: IfOptions) => Promise<void>;
  import: (options?: ImportOptions) => Promise<void>;
  in: (options?: InOptions) => Promise<void>;
  is: (options?: IsOptions) => Promise<void>;
  lambda: (options?: LambdaOptions) => Promise<void>;
  not: (options?: NotOptions) => Promise<void>;
  or: (options?: OrOptions) => Promise<void>;
  pass: (options?: PassOptions) => Promise<void>;
  raise: (options?: RaiseOptions) => Promise<void>;
  return: (options?: ReturnOptions) => Promise<void>;
  try: (options?: TryOptions) => Promise<void>;
  while: (options?: WhileOptions) => Promise<void>;
  with: (options?: WithOptions) => Promise<void>;
  yield: (options?: YieldOptions) => Promise<void>;
}

export function getOperations(context: SpecialWordsContext) {
  return {
    and: (options?: AndOptions) => operationsAnd(context, options),
    as: (options?: AsOptions) => operationsAs(context, options),
    assert: (options?: AssertOptions) => operationsAssert(context, options),
    async: (options?: AsyncOptions) => operationsAsync(context, options),
    await: (options?: AwaitOptions) => operationsAwait(context, options),
    break: (options?: BreakOptions) => operationsBreak(context, options),
    class: (options?: ClassOptions) => operationsClass(context, options),
    constructor: (options?: ConstructorOptions) =>
      operationsConstructor(context, options),
    continue: (options?: ContinueOptions) =>
      operationsContinue(context, options),
    def: (options?: DefOptions) => operationsDef(context, options),
    del: (options?: DelOptions) => operationsDel(context, options),
    elif: (options?: ElifOptions) => operationsElif(context, options),
    else: (options?: ElseOptions) => operationsElse(context, options),
    except: (options?: ExceptOptions) => operationsExcept(context, options),
    exec: (options?: ExecOptions) => operationsExec(context, options),
    finally: (options?: FinallyOptions) => operationsFinally(context, options),
    for: (options?: ForOptions) => operationsFor(context, options),
    from: (options?: FromOptions) => operationsFrom(context, options),
    global: (options?: GlobalOptions) => operationsGlobal(context, options),
    if: (options?: IfOptions) => operationsIf(context, options),
    import: (options?: ImportOptions) => operationsImport(context, options),
    in: (options?: InOptions) => operationsIn(context, options),
    is: (options?: IsOptions) => operationsIs(context, options),
    lambda: (options?: LambdaOptions) => operationsLambda(context, options),
    not: (options?: NotOptions) => operationsNot(context, options),
    or: (options?: OrOptions) => operationsOr(context, options),
    pass: (options?: PassOptions) => operationsPass(context, options),
    raise: (options?: RaiseOptions) => operationsRaise(context, options),
    return: (options?: ReturnOptions) => operationsReturn(context, options),
    try: (options?: TryOptions) => operationsTry(context, options),
    while: (options?: WhileOptions) => operationsWhile(context, options),
    with: (options?: WithOptions) => operationsWith(context, options),
    yield: (options?: YieldOptions) => operationsYield(context, options),
  };
}

export function getOperationsOperations(
  context: SpecialWordsContext,
): OperationsOperations {
  return {
    ...getOperations(context),
  };
}
