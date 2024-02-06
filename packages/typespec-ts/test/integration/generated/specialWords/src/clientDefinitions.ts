// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ModelsWithAndParameters,
  ModelsWithAsParameters,
  ModelsWithAssertParameters,
  ModelsWithAsyncParameters,
  ModelsWithAwaitParameters,
  ModelsWithBreakParameters,
  ModelsWithClassParameters,
  ModelsWithConstructorParameters,
  ModelsWithContinueParameters,
  ModelsWithDefParameters,
  ModelsWithDelParameters,
  ModelsWithElifParameters,
  ModelsWithElseParameters,
  ModelsWithExceptParameters,
  ModelsWithExecParameters,
  ModelsWithFinallyParameters,
  ModelsWithForParameters,
  ModelsWithFromParameters,
  ModelsWithGlobalParameters,
  ModelsWithIfParameters,
  ModelsWithImportParameters,
  ModelsWithInParameters,
  ModelsWithIsParameters,
  ModelsWithLambdaParameters,
  ModelsWithNotParameters,
  ModelsWithOrParameters,
  ModelsWithPassParameters,
  ModelsWithRaiseParameters,
  ModelsWithReturnParameters,
  ModelsWithTryParameters,
  ModelsWithWhileParameters,
  ModelsWithWithParameters,
  ModelsWithYieldParameters,
  ModelPropertiesSameAsModelParameters,
  OperationsAndParameters,
  OperationsAsParameters,
  OperationsAssertParameters,
  OperationsAsyncParameters,
  OperationsAwaitParameters,
  OperationsBreakParameters,
  OperationsClassParameters,
  OperationsConstructorParameters,
  OperationsContinueParameters,
  OperationsDefParameters,
  OperationsDelParameters,
  OperationsElifParameters,
  OperationsElseParameters,
  OperationsExceptParameters,
  OperationsExecParameters,
  OperationsFinallyParameters,
  OperationsForParameters,
  OperationsFromParameters,
  OperationsGlobalParameters,
  OperationsIfParameters,
  OperationsImportParameters,
  OperationsInParameters,
  OperationsIsParameters,
  OperationsLambdaParameters,
  OperationsNotParameters,
  OperationsOrParameters,
  OperationsPassParameters,
  OperationsRaiseParameters,
  OperationsReturnParameters,
  OperationsTryParameters,
  OperationsWhileParameters,
  OperationsWithParameters,
  OperationsYieldParameters,
  ParametersWithAndParameters,
  ParametersWithAsParameters,
  ParametersWithAssertParameters,
  ParametersWithAsyncParameters,
  ParametersWithAwaitParameters,
  ParametersWithBreakParameters,
  ParametersWithClassParameters,
  ParametersWithConstructorParameters,
  ParametersWithContinueParameters,
  ParametersWithDefParameters,
  ParametersWithDelParameters,
  ParametersWithElifParameters,
  ParametersWithElseParameters,
  ParametersWithExceptParameters,
  ParametersWithExecParameters,
  ParametersWithFinallyParameters,
  ParametersWithForParameters,
  ParametersWithFromParameters,
  ParametersWithGlobalParameters,
  ParametersWithIfParameters,
  ParametersWithImportParameters,
  ParametersWithInParameters,
  ParametersWithIsParameters,
  ParametersWithLambdaParameters,
  ParametersWithNotParameters,
  ParametersWithOrParameters,
  ParametersWithPassParameters,
  ParametersWithRaiseParameters,
  ParametersWithReturnParameters,
  ParametersWithTryParameters,
  ParametersWithWhileParameters,
  ParametersWithWithParameters,
  ParametersWithYieldParameters,
  ParametersWithCancellationTokenParameters,
} from "./parameters";
import {
  ModelsWithAnd204Response,
  ModelsWithAs204Response,
  ModelsWithAssert204Response,
  ModelsWithAsync204Response,
  ModelsWithAwait204Response,
  ModelsWithBreak204Response,
  ModelsWithClass204Response,
  ModelsWithConstructor204Response,
  ModelsWithContinue204Response,
  ModelsWithDef204Response,
  ModelsWithDel204Response,
  ModelsWithElif204Response,
  ModelsWithElse204Response,
  ModelsWithExcept204Response,
  ModelsWithExec204Response,
  ModelsWithFinally204Response,
  ModelsWithFor204Response,
  ModelsWithFrom204Response,
  ModelsWithGlobal204Response,
  ModelsWithIf204Response,
  ModelsWithImport204Response,
  ModelsWithIn204Response,
  ModelsWithIs204Response,
  ModelsWithLambda204Response,
  ModelsWithNot204Response,
  ModelsWithOr204Response,
  ModelsWithPass204Response,
  ModelsWithRaise204Response,
  ModelsWithReturn204Response,
  ModelsWithTry204Response,
  ModelsWithWhile204Response,
  ModelsWithWith204Response,
  ModelsWithYield204Response,
  ModelPropertiesSameAsModel204Response,
  OperationsAnd204Response,
  OperationsAs204Response,
  OperationsAssert204Response,
  OperationsAsync204Response,
  OperationsAwait204Response,
  OperationsBreak204Response,
  OperationsClass204Response,
  OperationsConstructor204Response,
  OperationsContinue204Response,
  OperationsDef204Response,
  OperationsDel204Response,
  OperationsElif204Response,
  OperationsElse204Response,
  OperationsExcept204Response,
  OperationsExec204Response,
  OperationsFinally204Response,
  OperationsFor204Response,
  OperationsFrom204Response,
  OperationsGlobal204Response,
  OperationsIf204Response,
  OperationsImport204Response,
  OperationsIn204Response,
  OperationsIs204Response,
  OperationsLambda204Response,
  OperationsNot204Response,
  OperationsOr204Response,
  OperationsPass204Response,
  OperationsRaise204Response,
  OperationsReturn204Response,
  OperationsTry204Response,
  OperationsWhile204Response,
  OperationsWith204Response,
  OperationsYield204Response,
  ParametersWithAnd204Response,
  ParametersWithAs204Response,
  ParametersWithAssert204Response,
  ParametersWithAsync204Response,
  ParametersWithAwait204Response,
  ParametersWithBreak204Response,
  ParametersWithClass204Response,
  ParametersWithConstructor204Response,
  ParametersWithContinue204Response,
  ParametersWithDef204Response,
  ParametersWithDel204Response,
  ParametersWithElif204Response,
  ParametersWithElse204Response,
  ParametersWithExcept204Response,
  ParametersWithExec204Response,
  ParametersWithFinally204Response,
  ParametersWithFor204Response,
  ParametersWithFrom204Response,
  ParametersWithGlobal204Response,
  ParametersWithIf204Response,
  ParametersWithImport204Response,
  ParametersWithIn204Response,
  ParametersWithIs204Response,
  ParametersWithLambda204Response,
  ParametersWithNot204Response,
  ParametersWithOr204Response,
  ParametersWithPass204Response,
  ParametersWithRaise204Response,
  ParametersWithReturn204Response,
  ParametersWithTry204Response,
  ParametersWithWhile204Response,
  ParametersWithWith204Response,
  ParametersWithYield204Response,
  ParametersWithCancellationToken204Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface ModelsWithAnd {
  post(
    options: ModelsWithAndParameters,
  ): StreamableMethod<ModelsWithAnd204Response>;
}

export interface ModelsWithAs {
  post(
    options: ModelsWithAsParameters,
  ): StreamableMethod<ModelsWithAs204Response>;
}

export interface ModelsWithAssert {
  post(
    options: ModelsWithAssertParameters,
  ): StreamableMethod<ModelsWithAssert204Response>;
}

export interface ModelsWithAsync {
  post(
    options: ModelsWithAsyncParameters,
  ): StreamableMethod<ModelsWithAsync204Response>;
}

export interface ModelsWithAwait {
  post(
    options: ModelsWithAwaitParameters,
  ): StreamableMethod<ModelsWithAwait204Response>;
}

export interface ModelsWithBreak {
  post(
    options: ModelsWithBreakParameters,
  ): StreamableMethod<ModelsWithBreak204Response>;
}

export interface ModelsWithClass {
  post(
    options: ModelsWithClassParameters,
  ): StreamableMethod<ModelsWithClass204Response>;
}

export interface ModelsWithConstructor {
  post(
    options: ModelsWithConstructorParameters,
  ): StreamableMethod<ModelsWithConstructor204Response>;
}

export interface ModelsWithContinue {
  post(
    options: ModelsWithContinueParameters,
  ): StreamableMethod<ModelsWithContinue204Response>;
}

export interface ModelsWithDef {
  post(
    options: ModelsWithDefParameters,
  ): StreamableMethod<ModelsWithDef204Response>;
}

export interface ModelsWithDel {
  post(
    options: ModelsWithDelParameters,
  ): StreamableMethod<ModelsWithDel204Response>;
}

export interface ModelsWithElif {
  post(
    options: ModelsWithElifParameters,
  ): StreamableMethod<ModelsWithElif204Response>;
}

export interface ModelsWithElse {
  post(
    options: ModelsWithElseParameters,
  ): StreamableMethod<ModelsWithElse204Response>;
}

export interface ModelsWithExcept {
  post(
    options: ModelsWithExceptParameters,
  ): StreamableMethod<ModelsWithExcept204Response>;
}

export interface ModelsWithExec {
  post(
    options: ModelsWithExecParameters,
  ): StreamableMethod<ModelsWithExec204Response>;
}

export interface ModelsWithFinally {
  post(
    options: ModelsWithFinallyParameters,
  ): StreamableMethod<ModelsWithFinally204Response>;
}

export interface ModelsWithFor {
  post(
    options: ModelsWithForParameters,
  ): StreamableMethod<ModelsWithFor204Response>;
}

export interface ModelsWithFrom {
  post(
    options: ModelsWithFromParameters,
  ): StreamableMethod<ModelsWithFrom204Response>;
}

export interface ModelsWithGlobal {
  post(
    options: ModelsWithGlobalParameters,
  ): StreamableMethod<ModelsWithGlobal204Response>;
}

export interface ModelsWithIf {
  post(
    options: ModelsWithIfParameters,
  ): StreamableMethod<ModelsWithIf204Response>;
}

export interface ModelsWithImport {
  post(
    options: ModelsWithImportParameters,
  ): StreamableMethod<ModelsWithImport204Response>;
}

export interface ModelsWithIn {
  post(
    options: ModelsWithInParameters,
  ): StreamableMethod<ModelsWithIn204Response>;
}

export interface ModelsWithIs {
  post(
    options: ModelsWithIsParameters,
  ): StreamableMethod<ModelsWithIs204Response>;
}

export interface ModelsWithLambda {
  post(
    options: ModelsWithLambdaParameters,
  ): StreamableMethod<ModelsWithLambda204Response>;
}

export interface ModelsWithNot {
  post(
    options: ModelsWithNotParameters,
  ): StreamableMethod<ModelsWithNot204Response>;
}

export interface ModelsWithOr {
  post(
    options: ModelsWithOrParameters,
  ): StreamableMethod<ModelsWithOr204Response>;
}

export interface ModelsWithPass {
  post(
    options: ModelsWithPassParameters,
  ): StreamableMethod<ModelsWithPass204Response>;
}

export interface ModelsWithRaise {
  post(
    options: ModelsWithRaiseParameters,
  ): StreamableMethod<ModelsWithRaise204Response>;
}

export interface ModelsWithReturn {
  post(
    options: ModelsWithReturnParameters,
  ): StreamableMethod<ModelsWithReturn204Response>;
}

export interface ModelsWithTry {
  post(
    options: ModelsWithTryParameters,
  ): StreamableMethod<ModelsWithTry204Response>;
}

export interface ModelsWithWhile {
  post(
    options: ModelsWithWhileParameters,
  ): StreamableMethod<ModelsWithWhile204Response>;
}

export interface ModelsWithWith {
  post(
    options: ModelsWithWithParameters,
  ): StreamableMethod<ModelsWithWith204Response>;
}

export interface ModelsWithYield {
  post(
    options: ModelsWithYieldParameters,
  ): StreamableMethod<ModelsWithYield204Response>;
}

export interface ModelPropertiesSameAsModel {
  post(
    options: ModelPropertiesSameAsModelParameters,
  ): StreamableMethod<ModelPropertiesSameAsModel204Response>;
}

export interface OperationsAnd {
  get(
    options?: OperationsAndParameters,
  ): StreamableMethod<OperationsAnd204Response>;
}

export interface OperationsAs {
  get(
    options?: OperationsAsParameters,
  ): StreamableMethod<OperationsAs204Response>;
}

export interface OperationsAssert {
  get(
    options?: OperationsAssertParameters,
  ): StreamableMethod<OperationsAssert204Response>;
}

export interface OperationsAsync {
  get(
    options?: OperationsAsyncParameters,
  ): StreamableMethod<OperationsAsync204Response>;
}

export interface OperationsAwait {
  get(
    options?: OperationsAwaitParameters,
  ): StreamableMethod<OperationsAwait204Response>;
}

export interface OperationsBreak {
  get(
    options?: OperationsBreakParameters,
  ): StreamableMethod<OperationsBreak204Response>;
}

export interface OperationsClass {
  get(
    options?: OperationsClassParameters,
  ): StreamableMethod<OperationsClass204Response>;
}

export interface OperationsConstructor {
  get(
    options?: OperationsConstructorParameters,
  ): StreamableMethod<OperationsConstructor204Response>;
}

export interface OperationsContinue {
  get(
    options?: OperationsContinueParameters,
  ): StreamableMethod<OperationsContinue204Response>;
}

export interface OperationsDef {
  get(
    options?: OperationsDefParameters,
  ): StreamableMethod<OperationsDef204Response>;
}

export interface OperationsDel {
  get(
    options?: OperationsDelParameters,
  ): StreamableMethod<OperationsDel204Response>;
}

export interface OperationsElif {
  get(
    options?: OperationsElifParameters,
  ): StreamableMethod<OperationsElif204Response>;
}

export interface OperationsElse {
  get(
    options?: OperationsElseParameters,
  ): StreamableMethod<OperationsElse204Response>;
}

export interface OperationsExcept {
  get(
    options?: OperationsExceptParameters,
  ): StreamableMethod<OperationsExcept204Response>;
}

export interface OperationsExec {
  get(
    options?: OperationsExecParameters,
  ): StreamableMethod<OperationsExec204Response>;
}

export interface OperationsFinally {
  get(
    options?: OperationsFinallyParameters,
  ): StreamableMethod<OperationsFinally204Response>;
}

export interface OperationsFor {
  get(
    options?: OperationsForParameters,
  ): StreamableMethod<OperationsFor204Response>;
}

export interface OperationsFrom {
  get(
    options?: OperationsFromParameters,
  ): StreamableMethod<OperationsFrom204Response>;
}

export interface OperationsGlobal {
  get(
    options?: OperationsGlobalParameters,
  ): StreamableMethod<OperationsGlobal204Response>;
}

export interface OperationsIf {
  get(
    options?: OperationsIfParameters,
  ): StreamableMethod<OperationsIf204Response>;
}

export interface OperationsImport {
  get(
    options?: OperationsImportParameters,
  ): StreamableMethod<OperationsImport204Response>;
}

export interface OperationsIn {
  get(
    options?: OperationsInParameters,
  ): StreamableMethod<OperationsIn204Response>;
}

export interface OperationsIs {
  get(
    options?: OperationsIsParameters,
  ): StreamableMethod<OperationsIs204Response>;
}

export interface OperationsLambda {
  get(
    options?: OperationsLambdaParameters,
  ): StreamableMethod<OperationsLambda204Response>;
}

export interface OperationsNot {
  get(
    options?: OperationsNotParameters,
  ): StreamableMethod<OperationsNot204Response>;
}

export interface OperationsOr {
  get(
    options?: OperationsOrParameters,
  ): StreamableMethod<OperationsOr204Response>;
}

export interface OperationsPass {
  get(
    options?: OperationsPassParameters,
  ): StreamableMethod<OperationsPass204Response>;
}

export interface OperationsRaise {
  get(
    options?: OperationsRaiseParameters,
  ): StreamableMethod<OperationsRaise204Response>;
}

export interface OperationsReturn {
  get(
    options?: OperationsReturnParameters,
  ): StreamableMethod<OperationsReturn204Response>;
}

export interface OperationsTry {
  get(
    options?: OperationsTryParameters,
  ): StreamableMethod<OperationsTry204Response>;
}

export interface OperationsWhile {
  get(
    options?: OperationsWhileParameters,
  ): StreamableMethod<OperationsWhile204Response>;
}

export interface OperationsWith {
  get(
    options?: OperationsWithParameters,
  ): StreamableMethod<OperationsWith204Response>;
}

export interface OperationsYield {
  get(
    options?: OperationsYieldParameters,
  ): StreamableMethod<OperationsYield204Response>;
}

export interface ParametersWithAnd {
  get(
    options: ParametersWithAndParameters,
  ): StreamableMethod<ParametersWithAnd204Response>;
}

export interface ParametersWithAs {
  get(
    options: ParametersWithAsParameters,
  ): StreamableMethod<ParametersWithAs204Response>;
}

export interface ParametersWithAssert {
  get(
    options: ParametersWithAssertParameters,
  ): StreamableMethod<ParametersWithAssert204Response>;
}

export interface ParametersWithAsync {
  get(
    options: ParametersWithAsyncParameters,
  ): StreamableMethod<ParametersWithAsync204Response>;
}

export interface ParametersWithAwait {
  get(
    options: ParametersWithAwaitParameters,
  ): StreamableMethod<ParametersWithAwait204Response>;
}

export interface ParametersWithBreak {
  get(
    options: ParametersWithBreakParameters,
  ): StreamableMethod<ParametersWithBreak204Response>;
}

export interface ParametersWithClass {
  get(
    options: ParametersWithClassParameters,
  ): StreamableMethod<ParametersWithClass204Response>;
}

export interface ParametersWithConstructor {
  get(
    options: ParametersWithConstructorParameters,
  ): StreamableMethod<ParametersWithConstructor204Response>;
}

export interface ParametersWithContinue {
  get(
    options: ParametersWithContinueParameters,
  ): StreamableMethod<ParametersWithContinue204Response>;
}

export interface ParametersWithDef {
  get(
    options: ParametersWithDefParameters,
  ): StreamableMethod<ParametersWithDef204Response>;
}

export interface ParametersWithDel {
  get(
    options: ParametersWithDelParameters,
  ): StreamableMethod<ParametersWithDel204Response>;
}

export interface ParametersWithElif {
  get(
    options: ParametersWithElifParameters,
  ): StreamableMethod<ParametersWithElif204Response>;
}

export interface ParametersWithElse {
  get(
    options: ParametersWithElseParameters,
  ): StreamableMethod<ParametersWithElse204Response>;
}

export interface ParametersWithExcept {
  get(
    options: ParametersWithExceptParameters,
  ): StreamableMethod<ParametersWithExcept204Response>;
}

export interface ParametersWithExec {
  get(
    options: ParametersWithExecParameters,
  ): StreamableMethod<ParametersWithExec204Response>;
}

export interface ParametersWithFinally {
  get(
    options: ParametersWithFinallyParameters,
  ): StreamableMethod<ParametersWithFinally204Response>;
}

export interface ParametersWithFor {
  get(
    options: ParametersWithForParameters,
  ): StreamableMethod<ParametersWithFor204Response>;
}

export interface ParametersWithFrom {
  get(
    options: ParametersWithFromParameters,
  ): StreamableMethod<ParametersWithFrom204Response>;
}

export interface ParametersWithGlobal {
  get(
    options: ParametersWithGlobalParameters,
  ): StreamableMethod<ParametersWithGlobal204Response>;
}

export interface ParametersWithIf {
  get(
    options: ParametersWithIfParameters,
  ): StreamableMethod<ParametersWithIf204Response>;
}

export interface ParametersWithImport {
  get(
    options: ParametersWithImportParameters,
  ): StreamableMethod<ParametersWithImport204Response>;
}

export interface ParametersWithIn {
  get(
    options: ParametersWithInParameters,
  ): StreamableMethod<ParametersWithIn204Response>;
}

export interface ParametersWithIs {
  get(
    options: ParametersWithIsParameters,
  ): StreamableMethod<ParametersWithIs204Response>;
}

export interface ParametersWithLambda {
  get(
    options: ParametersWithLambdaParameters,
  ): StreamableMethod<ParametersWithLambda204Response>;
}

export interface ParametersWithNot {
  get(
    options: ParametersWithNotParameters,
  ): StreamableMethod<ParametersWithNot204Response>;
}

export interface ParametersWithOr {
  get(
    options: ParametersWithOrParameters,
  ): StreamableMethod<ParametersWithOr204Response>;
}

export interface ParametersWithPass {
  get(
    options: ParametersWithPassParameters,
  ): StreamableMethod<ParametersWithPass204Response>;
}

export interface ParametersWithRaise {
  get(
    options: ParametersWithRaiseParameters,
  ): StreamableMethod<ParametersWithRaise204Response>;
}

export interface ParametersWithReturn {
  get(
    options: ParametersWithReturnParameters,
  ): StreamableMethod<ParametersWithReturn204Response>;
}

export interface ParametersWithTry {
  get(
    options: ParametersWithTryParameters,
  ): StreamableMethod<ParametersWithTry204Response>;
}

export interface ParametersWithWhile {
  get(
    options: ParametersWithWhileParameters,
  ): StreamableMethod<ParametersWithWhile204Response>;
}

export interface ParametersWithWith {
  get(
    options: ParametersWithWithParameters,
  ): StreamableMethod<ParametersWithWith204Response>;
}

export interface ParametersWithYield {
  get(
    options: ParametersWithYieldParameters,
  ): StreamableMethod<ParametersWithYield204Response>;
}

export interface ParametersWithCancellationToken {
  get(
    options: ParametersWithCancellationTokenParameters,
  ): StreamableMethod<ParametersWithCancellationToken204Response>;
}

export interface Routes {
  /** Resource for '/special-words/models/and' has methods for the following verbs: post */
  (path: "/special-words/models/and"): ModelsWithAnd;
  /** Resource for '/special-words/models/as' has methods for the following verbs: post */
  (path: "/special-words/models/as"): ModelsWithAs;
  /** Resource for '/special-words/models/assert' has methods for the following verbs: post */
  (path: "/special-words/models/assert"): ModelsWithAssert;
  /** Resource for '/special-words/models/async' has methods for the following verbs: post */
  (path: "/special-words/models/async"): ModelsWithAsync;
  /** Resource for '/special-words/models/await' has methods for the following verbs: post */
  (path: "/special-words/models/await"): ModelsWithAwait;
  /** Resource for '/special-words/models/break' has methods for the following verbs: post */
  (path: "/special-words/models/break"): ModelsWithBreak;
  /** Resource for '/special-words/models/class' has methods for the following verbs: post */
  (path: "/special-words/models/class"): ModelsWithClass;
  /** Resource for '/special-words/models/constructor' has methods for the following verbs: post */
  (path: "/special-words/models/constructor"): ModelsWithConstructor;
  /** Resource for '/special-words/models/continue' has methods for the following verbs: post */
  (path: "/special-words/models/continue"): ModelsWithContinue;
  /** Resource for '/special-words/models/def' has methods for the following verbs: post */
  (path: "/special-words/models/def"): ModelsWithDef;
  /** Resource for '/special-words/models/del' has methods for the following verbs: post */
  (path: "/special-words/models/del"): ModelsWithDel;
  /** Resource for '/special-words/models/elif' has methods for the following verbs: post */
  (path: "/special-words/models/elif"): ModelsWithElif;
  /** Resource for '/special-words/models/else' has methods for the following verbs: post */
  (path: "/special-words/models/else"): ModelsWithElse;
  /** Resource for '/special-words/models/except' has methods for the following verbs: post */
  (path: "/special-words/models/except"): ModelsWithExcept;
  /** Resource for '/special-words/models/exec' has methods for the following verbs: post */
  (path: "/special-words/models/exec"): ModelsWithExec;
  /** Resource for '/special-words/models/finally' has methods for the following verbs: post */
  (path: "/special-words/models/finally"): ModelsWithFinally;
  /** Resource for '/special-words/models/for' has methods for the following verbs: post */
  (path: "/special-words/models/for"): ModelsWithFor;
  /** Resource for '/special-words/models/from' has methods for the following verbs: post */
  (path: "/special-words/models/from"): ModelsWithFrom;
  /** Resource for '/special-words/models/global' has methods for the following verbs: post */
  (path: "/special-words/models/global"): ModelsWithGlobal;
  /** Resource for '/special-words/models/if' has methods for the following verbs: post */
  (path: "/special-words/models/if"): ModelsWithIf;
  /** Resource for '/special-words/models/import' has methods for the following verbs: post */
  (path: "/special-words/models/import"): ModelsWithImport;
  /** Resource for '/special-words/models/in' has methods for the following verbs: post */
  (path: "/special-words/models/in"): ModelsWithIn;
  /** Resource for '/special-words/models/is' has methods for the following verbs: post */
  (path: "/special-words/models/is"): ModelsWithIs;
  /** Resource for '/special-words/models/lambda' has methods for the following verbs: post */
  (path: "/special-words/models/lambda"): ModelsWithLambda;
  /** Resource for '/special-words/models/not' has methods for the following verbs: post */
  (path: "/special-words/models/not"): ModelsWithNot;
  /** Resource for '/special-words/models/or' has methods for the following verbs: post */
  (path: "/special-words/models/or"): ModelsWithOr;
  /** Resource for '/special-words/models/pass' has methods for the following verbs: post */
  (path: "/special-words/models/pass"): ModelsWithPass;
  /** Resource for '/special-words/models/raise' has methods for the following verbs: post */
  (path: "/special-words/models/raise"): ModelsWithRaise;
  /** Resource for '/special-words/models/return' has methods for the following verbs: post */
  (path: "/special-words/models/return"): ModelsWithReturn;
  /** Resource for '/special-words/models/try' has methods for the following verbs: post */
  (path: "/special-words/models/try"): ModelsWithTry;
  /** Resource for '/special-words/models/while' has methods for the following verbs: post */
  (path: "/special-words/models/while"): ModelsWithWhile;
  /** Resource for '/special-words/models/with' has methods for the following verbs: post */
  (path: "/special-words/models/with"): ModelsWithWith;
  /** Resource for '/special-words/models/yield' has methods for the following verbs: post */
  (path: "/special-words/models/yield"): ModelsWithYield;
  /** Resource for '/special-words/model-properties/same-as-model' has methods for the following verbs: post */
  (
    path: "/special-words/model-properties/same-as-model",
  ): ModelPropertiesSameAsModel;
  /** Resource for '/special-words/operations/and' has methods for the following verbs: get */
  (path: "/special-words/operations/and"): OperationsAnd;
  /** Resource for '/special-words/operations/as' has methods for the following verbs: get */
  (path: "/special-words/operations/as"): OperationsAs;
  /** Resource for '/special-words/operations/assert' has methods for the following verbs: get */
  (path: "/special-words/operations/assert"): OperationsAssert;
  /** Resource for '/special-words/operations/async' has methods for the following verbs: get */
  (path: "/special-words/operations/async"): OperationsAsync;
  /** Resource for '/special-words/operations/await' has methods for the following verbs: get */
  (path: "/special-words/operations/await"): OperationsAwait;
  /** Resource for '/special-words/operations/break' has methods for the following verbs: get */
  (path: "/special-words/operations/break"): OperationsBreak;
  /** Resource for '/special-words/operations/class' has methods for the following verbs: get */
  (path: "/special-words/operations/class"): OperationsClass;
  /** Resource for '/special-words/operations/constructor' has methods for the following verbs: get */
  (path: "/special-words/operations/constructor"): OperationsConstructor;
  /** Resource for '/special-words/operations/continue' has methods for the following verbs: get */
  (path: "/special-words/operations/continue"): OperationsContinue;
  /** Resource for '/special-words/operations/def' has methods for the following verbs: get */
  (path: "/special-words/operations/def"): OperationsDef;
  /** Resource for '/special-words/operations/del' has methods for the following verbs: get */
  (path: "/special-words/operations/del"): OperationsDel;
  /** Resource for '/special-words/operations/elif' has methods for the following verbs: get */
  (path: "/special-words/operations/elif"): OperationsElif;
  /** Resource for '/special-words/operations/else' has methods for the following verbs: get */
  (path: "/special-words/operations/else"): OperationsElse;
  /** Resource for '/special-words/operations/except' has methods for the following verbs: get */
  (path: "/special-words/operations/except"): OperationsExcept;
  /** Resource for '/special-words/operations/exec' has methods for the following verbs: get */
  (path: "/special-words/operations/exec"): OperationsExec;
  /** Resource for '/special-words/operations/finally' has methods for the following verbs: get */
  (path: "/special-words/operations/finally"): OperationsFinally;
  /** Resource for '/special-words/operations/for' has methods for the following verbs: get */
  (path: "/special-words/operations/for"): OperationsFor;
  /** Resource for '/special-words/operations/from' has methods for the following verbs: get */
  (path: "/special-words/operations/from"): OperationsFrom;
  /** Resource for '/special-words/operations/global' has methods for the following verbs: get */
  (path: "/special-words/operations/global"): OperationsGlobal;
  /** Resource for '/special-words/operations/if' has methods for the following verbs: get */
  (path: "/special-words/operations/if"): OperationsIf;
  /** Resource for '/special-words/operations/import' has methods for the following verbs: get */
  (path: "/special-words/operations/import"): OperationsImport;
  /** Resource for '/special-words/operations/in' has methods for the following verbs: get */
  (path: "/special-words/operations/in"): OperationsIn;
  /** Resource for '/special-words/operations/is' has methods for the following verbs: get */
  (path: "/special-words/operations/is"): OperationsIs;
  /** Resource for '/special-words/operations/lambda' has methods for the following verbs: get */
  (path: "/special-words/operations/lambda"): OperationsLambda;
  /** Resource for '/special-words/operations/not' has methods for the following verbs: get */
  (path: "/special-words/operations/not"): OperationsNot;
  /** Resource for '/special-words/operations/or' has methods for the following verbs: get */
  (path: "/special-words/operations/or"): OperationsOr;
  /** Resource for '/special-words/operations/pass' has methods for the following verbs: get */
  (path: "/special-words/operations/pass"): OperationsPass;
  /** Resource for '/special-words/operations/raise' has methods for the following verbs: get */
  (path: "/special-words/operations/raise"): OperationsRaise;
  /** Resource for '/special-words/operations/return' has methods for the following verbs: get */
  (path: "/special-words/operations/return"): OperationsReturn;
  /** Resource for '/special-words/operations/try' has methods for the following verbs: get */
  (path: "/special-words/operations/try"): OperationsTry;
  /** Resource for '/special-words/operations/while' has methods for the following verbs: get */
  (path: "/special-words/operations/while"): OperationsWhile;
  /** Resource for '/special-words/operations/with' has methods for the following verbs: get */
  (path: "/special-words/operations/with"): OperationsWith;
  /** Resource for '/special-words/operations/yield' has methods for the following verbs: get */
  (path: "/special-words/operations/yield"): OperationsYield;
  /** Resource for '/special-words/parameters/and' has methods for the following verbs: get */
  (path: "/special-words/parameters/and"): ParametersWithAnd;
  /** Resource for '/special-words/parameters/as' has methods for the following verbs: get */
  (path: "/special-words/parameters/as"): ParametersWithAs;
  /** Resource for '/special-words/parameters/assert' has methods for the following verbs: get */
  (path: "/special-words/parameters/assert"): ParametersWithAssert;
  /** Resource for '/special-words/parameters/async' has methods for the following verbs: get */
  (path: "/special-words/parameters/async"): ParametersWithAsync;
  /** Resource for '/special-words/parameters/await' has methods for the following verbs: get */
  (path: "/special-words/parameters/await"): ParametersWithAwait;
  /** Resource for '/special-words/parameters/break' has methods for the following verbs: get */
  (path: "/special-words/parameters/break"): ParametersWithBreak;
  /** Resource for '/special-words/parameters/class' has methods for the following verbs: get */
  (path: "/special-words/parameters/class"): ParametersWithClass;
  /** Resource for '/special-words/parameters/constructor' has methods for the following verbs: get */
  (path: "/special-words/parameters/constructor"): ParametersWithConstructor;
  /** Resource for '/special-words/parameters/continue' has methods for the following verbs: get */
  (path: "/special-words/parameters/continue"): ParametersWithContinue;
  /** Resource for '/special-words/parameters/def' has methods for the following verbs: get */
  (path: "/special-words/parameters/def"): ParametersWithDef;
  /** Resource for '/special-words/parameters/del' has methods for the following verbs: get */
  (path: "/special-words/parameters/del"): ParametersWithDel;
  /** Resource for '/special-words/parameters/elif' has methods for the following verbs: get */
  (path: "/special-words/parameters/elif"): ParametersWithElif;
  /** Resource for '/special-words/parameters/else' has methods for the following verbs: get */
  (path: "/special-words/parameters/else"): ParametersWithElse;
  /** Resource for '/special-words/parameters/except' has methods for the following verbs: get */
  (path: "/special-words/parameters/except"): ParametersWithExcept;
  /** Resource for '/special-words/parameters/exec' has methods for the following verbs: get */
  (path: "/special-words/parameters/exec"): ParametersWithExec;
  /** Resource for '/special-words/parameters/finally' has methods for the following verbs: get */
  (path: "/special-words/parameters/finally"): ParametersWithFinally;
  /** Resource for '/special-words/parameters/for' has methods for the following verbs: get */
  (path: "/special-words/parameters/for"): ParametersWithFor;
  /** Resource for '/special-words/parameters/from' has methods for the following verbs: get */
  (path: "/special-words/parameters/from"): ParametersWithFrom;
  /** Resource for '/special-words/parameters/global' has methods for the following verbs: get */
  (path: "/special-words/parameters/global"): ParametersWithGlobal;
  /** Resource for '/special-words/parameters/if' has methods for the following verbs: get */
  (path: "/special-words/parameters/if"): ParametersWithIf;
  /** Resource for '/special-words/parameters/import' has methods for the following verbs: get */
  (path: "/special-words/parameters/import"): ParametersWithImport;
  /** Resource for '/special-words/parameters/in' has methods for the following verbs: get */
  (path: "/special-words/parameters/in"): ParametersWithIn;
  /** Resource for '/special-words/parameters/is' has methods for the following verbs: get */
  (path: "/special-words/parameters/is"): ParametersWithIs;
  /** Resource for '/special-words/parameters/lambda' has methods for the following verbs: get */
  (path: "/special-words/parameters/lambda"): ParametersWithLambda;
  /** Resource for '/special-words/parameters/not' has methods for the following verbs: get */
  (path: "/special-words/parameters/not"): ParametersWithNot;
  /** Resource for '/special-words/parameters/or' has methods for the following verbs: get */
  (path: "/special-words/parameters/or"): ParametersWithOr;
  /** Resource for '/special-words/parameters/pass' has methods for the following verbs: get */
  (path: "/special-words/parameters/pass"): ParametersWithPass;
  /** Resource for '/special-words/parameters/raise' has methods for the following verbs: get */
  (path: "/special-words/parameters/raise"): ParametersWithRaise;
  /** Resource for '/special-words/parameters/return' has methods for the following verbs: get */
  (path: "/special-words/parameters/return"): ParametersWithReturn;
  /** Resource for '/special-words/parameters/try' has methods for the following verbs: get */
  (path: "/special-words/parameters/try"): ParametersWithTry;
  /** Resource for '/special-words/parameters/while' has methods for the following verbs: get */
  (path: "/special-words/parameters/while"): ParametersWithWhile;
  /** Resource for '/special-words/parameters/with' has methods for the following verbs: get */
  (path: "/special-words/parameters/with"): ParametersWithWith;
  /** Resource for '/special-words/parameters/yield' has methods for the following verbs: get */
  (path: "/special-words/parameters/yield"): ParametersWithYield;
  /** Resource for '/special-words/parameters/cancellationToken' has methods for the following verbs: get */
  (
    path: "/special-words/parameters/cancellationToken",
  ): ParametersWithCancellationToken;
}

export type SpecialWordsClient = Client & {
  path: Routes;
};
