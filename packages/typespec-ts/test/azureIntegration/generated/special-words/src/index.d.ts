import type { Client } from '@azure-rest/core-client';
import type { ClientOptions } from '@azure-rest/core-client';
import type { HttpResponse } from '@azure-rest/core-client';
import type { RequestParameters } from '@azure-rest/core-client';
import type { StreamableMethod } from '@azure-rest/core-client';

export declare interface And {
    name: string;
}

export declare interface As {
    name: string;
}

export declare interface Assert {
    name: string;
}

export declare interface Async {
    name: string;
}

export declare interface Await {
    name: string;
}

export declare interface Break {
    name: string;
}

export declare interface Class {
    name: string;
}

export declare interface Constructor {
    name: string;
}

export declare interface Continue {
    name: string;
}

declare function createClient(options?: SpecialWordsClientOptions): SpecialWordsClient;
export default createClient;

export declare interface Def {
    name: string;
}

export declare interface Del {
    name: string;
}

export declare interface DictMethods {
    keys: string;
    items: string;
    values: string;
    popitem: string;
    clear: string;
    update: string;
    setdefault: string;
    pop: string;
    get: string;
    copy: string;
}

export declare interface Elif {
    name: string;
}

export declare interface Else {
    name: string;
}

export declare interface Except {
    name: string;
}

export declare interface Exec {
    name: string;
}

export declare interface Finally {
    name: string;
}

export declare interface For {
    name: string;
}

export declare interface From {
    name: string;
}

export declare interface GlobalModel {
    name: string;
}

export declare interface If {
    name: string;
}

export declare interface Import {
    name: string;
}

export declare interface In {
    name: string;
}

export declare interface Is {
    name: string;
}

export declare interface Lambda {
    name: string;
}

export declare interface ModelPropertiesDictMethods {
    post(options: ModelPropertiesDictMethodsParameters): StreamableMethod<ModelPropertiesDictMethods204Response>;
}

export declare interface ModelPropertiesDictMethods204Response extends HttpResponse {
    status: "204";
}

export declare interface ModelPropertiesDictMethodsBodyParam {
    body: DictMethods;
}

export declare type ModelPropertiesDictMethodsParameters = ModelPropertiesDictMethodsBodyParam & RequestParameters;

export declare interface ModelPropertiesSameAsModel {
    post(options: ModelPropertiesSameAsModelParameters): StreamableMethod<ModelPropertiesSameAsModel204Response>;
}

export declare interface ModelPropertiesSameAsModel204Response extends HttpResponse {
    status: "204";
}

export declare interface ModelPropertiesSameAsModelBodyParam {
    body: SameAsModel;
}

export declare type ModelPropertiesSameAsModelParameters = ModelPropertiesSameAsModelBodyParam & RequestParameters;

export declare interface ModelPropertiesWithList {
    post(options: ModelPropertiesWithListParameters): StreamableMethod<ModelPropertiesWithList204Response>;
}

export declare interface ModelPropertiesWithList204Response extends HttpResponse {
    status: "204";
}

export declare interface ModelPropertiesWithListBodyParam {
    body: ModelWithList;
}

export declare type ModelPropertiesWithListParameters = ModelPropertiesWithListBodyParam & RequestParameters;

export declare interface ModelsWithAnd {
    post(options: ModelsWithAndParameters): StreamableMethod<ModelsWithAnd204Response>;
}

export declare interface ModelsWithAnd204Response extends HttpResponse {
    status: "204";
}

export declare interface ModelsWithAndBodyParam {
    body: And;
}

export declare type ModelsWithAndParameters = ModelsWithAndBodyParam & RequestParameters;

export declare interface ModelsWithAs {
    post(options: ModelsWithAsParameters): StreamableMethod<ModelsWithAs204Response>;
}

export declare interface ModelsWithAs204Response extends HttpResponse {
    status: "204";
}

export declare interface ModelsWithAsBodyParam {
    body: As;
}

export declare type ModelsWithAsParameters = ModelsWithAsBodyParam & RequestParameters;

export declare interface ModelsWithAssert {
    post(options: ModelsWithAssertParameters): StreamableMethod<ModelsWithAssert204Response>;
}

export declare interface ModelsWithAssert204Response extends HttpResponse {
    status: "204";
}

export declare interface ModelsWithAssertBodyParam {
    body: Assert;
}

export declare type ModelsWithAssertParameters = ModelsWithAssertBodyParam & RequestParameters;

export declare interface ModelsWithAsync {
    post(options: ModelsWithAsyncParameters): StreamableMethod<ModelsWithAsync204Response>;
}

export declare interface ModelsWithAsync204Response extends HttpResponse {
    status: "204";
}

export declare interface ModelsWithAsyncBodyParam {
    body: Async;
}

export declare type ModelsWithAsyncParameters = ModelsWithAsyncBodyParam & RequestParameters;

export declare interface ModelsWithAwait {
    post(options: ModelsWithAwaitParameters): StreamableMethod<ModelsWithAwait204Response>;
}

export declare interface ModelsWithAwait204Response extends HttpResponse {
    status: "204";
}

export declare interface ModelsWithAwaitBodyParam {
    body: Await;
}

export declare type ModelsWithAwaitParameters = ModelsWithAwaitBodyParam & RequestParameters;

export declare interface ModelsWithBreak {
    post(options: ModelsWithBreakParameters): StreamableMethod<ModelsWithBreak204Response>;
}

export declare interface ModelsWithBreak204Response extends HttpResponse {
    status: "204";
}

export declare interface ModelsWithBreakBodyParam {
    body: Break;
}

export declare type ModelsWithBreakParameters = ModelsWithBreakBodyParam & RequestParameters;

export declare interface ModelsWithClass {
    post(options: ModelsWithClassParameters): StreamableMethod<ModelsWithClass204Response>;
}

export declare interface ModelsWithClass204Response extends HttpResponse {
    status: "204";
}

export declare interface ModelsWithClassBodyParam {
    body: Class;
}

export declare type ModelsWithClassParameters = ModelsWithClassBodyParam & RequestParameters;

export declare interface ModelsWithConstructor {
    post(options: ModelsWithConstructorParameters): StreamableMethod<ModelsWithConstructor204Response>;
}

export declare interface ModelsWithConstructor204Response extends HttpResponse {
    status: "204";
}

export declare interface ModelsWithConstructorBodyParam {
    body: Constructor;
}

export declare type ModelsWithConstructorParameters = ModelsWithConstructorBodyParam & RequestParameters;

export declare interface ModelsWithContinue {
    post(options: ModelsWithContinueParameters): StreamableMethod<ModelsWithContinue204Response>;
}

export declare interface ModelsWithContinue204Response extends HttpResponse {
    status: "204";
}

export declare interface ModelsWithContinueBodyParam {
    body: Continue;
}

export declare type ModelsWithContinueParameters = ModelsWithContinueBodyParam & RequestParameters;

export declare interface ModelsWithDef {
    post(options: ModelsWithDefParameters): StreamableMethod<ModelsWithDef204Response>;
}

export declare interface ModelsWithDef204Response extends HttpResponse {
    status: "204";
}

export declare interface ModelsWithDefBodyParam {
    body: Def;
}

export declare type ModelsWithDefParameters = ModelsWithDefBodyParam & RequestParameters;

export declare interface ModelsWithDel {
    post(options: ModelsWithDelParameters): StreamableMethod<ModelsWithDel204Response>;
}

export declare interface ModelsWithDel204Response extends HttpResponse {
    status: "204";
}

export declare interface ModelsWithDelBodyParam {
    body: Del;
}

export declare type ModelsWithDelParameters = ModelsWithDelBodyParam & RequestParameters;

export declare interface ModelsWithElif {
    post(options: ModelsWithElifParameters): StreamableMethod<ModelsWithElif204Response>;
}

export declare interface ModelsWithElif204Response extends HttpResponse {
    status: "204";
}

export declare interface ModelsWithElifBodyParam {
    body: Elif;
}

export declare type ModelsWithElifParameters = ModelsWithElifBodyParam & RequestParameters;

export declare interface ModelsWithElse {
    post(options: ModelsWithElseParameters): StreamableMethod<ModelsWithElse204Response>;
}

export declare interface ModelsWithElse204Response extends HttpResponse {
    status: "204";
}

export declare interface ModelsWithElseBodyParam {
    body: Else;
}

export declare type ModelsWithElseParameters = ModelsWithElseBodyParam & RequestParameters;

export declare interface ModelsWithExcept {
    post(options: ModelsWithExceptParameters): StreamableMethod<ModelsWithExcept204Response>;
}

export declare interface ModelsWithExcept204Response extends HttpResponse {
    status: "204";
}

export declare interface ModelsWithExceptBodyParam {
    body: Except;
}

export declare type ModelsWithExceptParameters = ModelsWithExceptBodyParam & RequestParameters;

export declare interface ModelsWithExec {
    post(options: ModelsWithExecParameters): StreamableMethod<ModelsWithExec204Response>;
}

export declare interface ModelsWithExec204Response extends HttpResponse {
    status: "204";
}

export declare interface ModelsWithExecBodyParam {
    body: Exec;
}

export declare type ModelsWithExecParameters = ModelsWithExecBodyParam & RequestParameters;

export declare interface ModelsWithFinally {
    post(options: ModelsWithFinallyParameters): StreamableMethod<ModelsWithFinally204Response>;
}

export declare interface ModelsWithFinally204Response extends HttpResponse {
    status: "204";
}

export declare interface ModelsWithFinallyBodyParam {
    body: Finally;
}

export declare type ModelsWithFinallyParameters = ModelsWithFinallyBodyParam & RequestParameters;

export declare interface ModelsWithFor {
    post(options: ModelsWithForParameters): StreamableMethod<ModelsWithFor204Response>;
}

export declare interface ModelsWithFor204Response extends HttpResponse {
    status: "204";
}

export declare interface ModelsWithForBodyParam {
    body: For;
}

export declare type ModelsWithForParameters = ModelsWithForBodyParam & RequestParameters;

export declare interface ModelsWithFrom {
    post(options: ModelsWithFromParameters): StreamableMethod<ModelsWithFrom204Response>;
}

export declare interface ModelsWithFrom204Response extends HttpResponse {
    status: "204";
}

export declare interface ModelsWithFromBodyParam {
    body: From;
}

export declare type ModelsWithFromParameters = ModelsWithFromBodyParam & RequestParameters;

export declare interface ModelsWithGlobal {
    post(options: ModelsWithGlobalParameters): StreamableMethod<ModelsWithGlobal204Response>;
}

export declare interface ModelsWithGlobal204Response extends HttpResponse {
    status: "204";
}

export declare interface ModelsWithGlobalBodyParam {
    body: GlobalModel;
}

export declare type ModelsWithGlobalParameters = ModelsWithGlobalBodyParam & RequestParameters;

export declare interface ModelsWithIf {
    post(options: ModelsWithIfParameters): StreamableMethod<ModelsWithIf204Response>;
}

export declare interface ModelsWithIf204Response extends HttpResponse {
    status: "204";
}

export declare interface ModelsWithIfBodyParam {
    body: If;
}

export declare type ModelsWithIfParameters = ModelsWithIfBodyParam & RequestParameters;

export declare interface ModelsWithImport {
    post(options: ModelsWithImportParameters): StreamableMethod<ModelsWithImport204Response>;
}

export declare interface ModelsWithImport204Response extends HttpResponse {
    status: "204";
}

export declare interface ModelsWithImportBodyParam {
    body: Import;
}

export declare type ModelsWithImportParameters = ModelsWithImportBodyParam & RequestParameters;

export declare interface ModelsWithIn {
    post(options: ModelsWithInParameters): StreamableMethod<ModelsWithIn204Response>;
}

export declare interface ModelsWithIn204Response extends HttpResponse {
    status: "204";
}

export declare interface ModelsWithInBodyParam {
    body: In;
}

export declare type ModelsWithInParameters = ModelsWithInBodyParam & RequestParameters;

export declare interface ModelsWithIs {
    post(options: ModelsWithIsParameters): StreamableMethod<ModelsWithIs204Response>;
}

export declare interface ModelsWithIs204Response extends HttpResponse {
    status: "204";
}

export declare interface ModelsWithIsBodyParam {
    body: Is;
}

export declare type ModelsWithIsParameters = ModelsWithIsBodyParam & RequestParameters;

export declare interface ModelsWithLambda {
    post(options: ModelsWithLambdaParameters): StreamableMethod<ModelsWithLambda204Response>;
}

export declare interface ModelsWithLambda204Response extends HttpResponse {
    status: "204";
}

export declare interface ModelsWithLambdaBodyParam {
    body: Lambda;
}

export declare type ModelsWithLambdaParameters = ModelsWithLambdaBodyParam & RequestParameters;

export declare interface ModelsWithNot {
    post(options: ModelsWithNotParameters): StreamableMethod<ModelsWithNot204Response>;
}

export declare interface ModelsWithNot204Response extends HttpResponse {
    status: "204";
}

export declare interface ModelsWithNotBodyParam {
    body: Not;
}

export declare type ModelsWithNotParameters = ModelsWithNotBodyParam & RequestParameters;

export declare interface ModelsWithOr {
    post(options: ModelsWithOrParameters): StreamableMethod<ModelsWithOr204Response>;
}

export declare interface ModelsWithOr204Response extends HttpResponse {
    status: "204";
}

export declare interface ModelsWithOrBodyParam {
    body: Or;
}

export declare type ModelsWithOrParameters = ModelsWithOrBodyParam & RequestParameters;

export declare interface ModelsWithPass {
    post(options: ModelsWithPassParameters): StreamableMethod<ModelsWithPass204Response>;
}

export declare interface ModelsWithPass204Response extends HttpResponse {
    status: "204";
}

export declare interface ModelsWithPassBodyParam {
    body: Pass;
}

export declare type ModelsWithPassParameters = ModelsWithPassBodyParam & RequestParameters;

export declare interface ModelsWithRaise {
    post(options: ModelsWithRaiseParameters): StreamableMethod<ModelsWithRaise204Response>;
}

export declare interface ModelsWithRaise204Response extends HttpResponse {
    status: "204";
}

export declare interface ModelsWithRaiseBodyParam {
    body: Raise;
}

export declare type ModelsWithRaiseParameters = ModelsWithRaiseBodyParam & RequestParameters;

export declare interface ModelsWithReturn {
    post(options: ModelsWithReturnParameters): StreamableMethod<ModelsWithReturn204Response>;
}

export declare interface ModelsWithReturn204Response extends HttpResponse {
    status: "204";
}

export declare interface ModelsWithReturnBodyParam {
    body: Return;
}

export declare type ModelsWithReturnParameters = ModelsWithReturnBodyParam & RequestParameters;

export declare interface ModelsWithTry {
    post(options: ModelsWithTryParameters): StreamableMethod<ModelsWithTry204Response>;
}

export declare interface ModelsWithTry204Response extends HttpResponse {
    status: "204";
}

export declare interface ModelsWithTryBodyParam {
    body: Try;
}

export declare type ModelsWithTryParameters = ModelsWithTryBodyParam & RequestParameters;

export declare interface ModelsWithWhile {
    post(options: ModelsWithWhileParameters): StreamableMethod<ModelsWithWhile204Response>;
}

export declare interface ModelsWithWhile204Response extends HttpResponse {
    status: "204";
}

export declare interface ModelsWithWhileBodyParam {
    body: While;
}

export declare type ModelsWithWhileParameters = ModelsWithWhileBodyParam & RequestParameters;

export declare interface ModelsWithWith {
    post(options: ModelsWithWithParameters): StreamableMethod<ModelsWithWith204Response>;
}

export declare interface ModelsWithWith204Response extends HttpResponse {
    status: "204";
}

export declare interface ModelsWithWithBodyParam {
    body: With;
}

export declare type ModelsWithWithParameters = ModelsWithWithBodyParam & RequestParameters;

export declare interface ModelsWithYield {
    post(options: ModelsWithYieldParameters): StreamableMethod<ModelsWithYield204Response>;
}

export declare interface ModelsWithYield204Response extends HttpResponse {
    status: "204";
}

export declare interface ModelsWithYieldBodyParam {
    body: Yield;
}

export declare type ModelsWithYieldParameters = ModelsWithYieldBodyParam & RequestParameters;

export declare interface ModelWithList {
    list: string;
}

export declare interface Not {
    name: string;
}

export declare interface OperationsAnd {
    get(options?: OperationsAndParameters): StreamableMethod<OperationsAnd204Response>;
}

export declare interface OperationsAnd204Response extends HttpResponse {
    status: "204";
}

export declare type OperationsAndParameters = RequestParameters;

export declare interface OperationsAs {
    get(options?: OperationsAsParameters): StreamableMethod<OperationsAs204Response>;
}

export declare interface OperationsAs204Response extends HttpResponse {
    status: "204";
}

export declare type OperationsAsParameters = RequestParameters;

export declare interface OperationsAssert {
    get(options?: OperationsAssertParameters): StreamableMethod<OperationsAssert204Response>;
}

export declare interface OperationsAssert204Response extends HttpResponse {
    status: "204";
}

export declare type OperationsAssertParameters = RequestParameters;

export declare interface OperationsAsync {
    get(options?: OperationsAsyncParameters): StreamableMethod<OperationsAsync204Response>;
}

export declare interface OperationsAsync204Response extends HttpResponse {
    status: "204";
}

export declare type OperationsAsyncParameters = RequestParameters;

export declare interface OperationsAwait {
    get(options?: OperationsAwaitParameters): StreamableMethod<OperationsAwait204Response>;
}

export declare interface OperationsAwait204Response extends HttpResponse {
    status: "204";
}

export declare type OperationsAwaitParameters = RequestParameters;

export declare interface OperationsBreak {
    get(options?: OperationsBreakParameters): StreamableMethod<OperationsBreak204Response>;
}

export declare interface OperationsBreak204Response extends HttpResponse {
    status: "204";
}

export declare type OperationsBreakParameters = RequestParameters;

export declare interface OperationsClass {
    get(options?: OperationsClassParameters): StreamableMethod<OperationsClass204Response>;
}

export declare interface OperationsClass204Response extends HttpResponse {
    status: "204";
}

export declare type OperationsClassParameters = RequestParameters;

export declare interface OperationsConstructor {
    get(options?: OperationsConstructorParameters): StreamableMethod<OperationsConstructor204Response>;
}

export declare interface OperationsConstructor204Response extends HttpResponse {
    status: "204";
}

export declare type OperationsConstructorParameters = RequestParameters;

export declare interface OperationsContinue {
    get(options?: OperationsContinueParameters): StreamableMethod<OperationsContinue204Response>;
}

export declare interface OperationsContinue204Response extends HttpResponse {
    status: "204";
}

export declare type OperationsContinueParameters = RequestParameters;

export declare interface OperationsDef {
    get(options?: OperationsDefParameters): StreamableMethod<OperationsDef204Response>;
}

export declare interface OperationsDef204Response extends HttpResponse {
    status: "204";
}

export declare type OperationsDefParameters = RequestParameters;

export declare interface OperationsDel {
    get(options?: OperationsDelParameters): StreamableMethod<OperationsDel204Response>;
}

export declare interface OperationsDel204Response extends HttpResponse {
    status: "204";
}

export declare type OperationsDelParameters = RequestParameters;

export declare interface OperationsElif {
    get(options?: OperationsElifParameters): StreamableMethod<OperationsElif204Response>;
}

export declare interface OperationsElif204Response extends HttpResponse {
    status: "204";
}

export declare type OperationsElifParameters = RequestParameters;

export declare interface OperationsElse {
    get(options?: OperationsElseParameters): StreamableMethod<OperationsElse204Response>;
}

export declare interface OperationsElse204Response extends HttpResponse {
    status: "204";
}

export declare type OperationsElseParameters = RequestParameters;

export declare interface OperationsExcept {
    get(options?: OperationsExceptParameters): StreamableMethod<OperationsExcept204Response>;
}

export declare interface OperationsExcept204Response extends HttpResponse {
    status: "204";
}

export declare type OperationsExceptParameters = RequestParameters;

export declare interface OperationsExec {
    get(options?: OperationsExecParameters): StreamableMethod<OperationsExec204Response>;
}

export declare interface OperationsExec204Response extends HttpResponse {
    status: "204";
}

export declare type OperationsExecParameters = RequestParameters;

export declare interface OperationsFinally {
    get(options?: OperationsFinallyParameters): StreamableMethod<OperationsFinally204Response>;
}

export declare interface OperationsFinally204Response extends HttpResponse {
    status: "204";
}

export declare type OperationsFinallyParameters = RequestParameters;

export declare interface OperationsFor {
    get(options?: OperationsForParameters): StreamableMethod<OperationsFor204Response>;
}

export declare interface OperationsFor204Response extends HttpResponse {
    status: "204";
}

export declare type OperationsForParameters = RequestParameters;

export declare interface OperationsFrom {
    get(options?: OperationsFromParameters): StreamableMethod<OperationsFrom204Response>;
}

export declare interface OperationsFrom204Response extends HttpResponse {
    status: "204";
}

export declare type OperationsFromParameters = RequestParameters;

export declare interface OperationsGlobalModel {
    get(options?: OperationsGlobalModelParameters): StreamableMethod<OperationsGlobalModel204Response>;
}

export declare interface OperationsGlobalModel204Response extends HttpResponse {
    status: "204";
}

export declare type OperationsGlobalModelParameters = RequestParameters;

export declare interface OperationsIf {
    get(options?: OperationsIfParameters): StreamableMethod<OperationsIf204Response>;
}

export declare interface OperationsIf204Response extends HttpResponse {
    status: "204";
}

export declare type OperationsIfParameters = RequestParameters;

export declare interface OperationsImport {
    get(options?: OperationsImportParameters): StreamableMethod<OperationsImport204Response>;
}

export declare interface OperationsImport204Response extends HttpResponse {
    status: "204";
}

export declare type OperationsImportParameters = RequestParameters;

export declare interface OperationsIn {
    get(options?: OperationsInParameters): StreamableMethod<OperationsIn204Response>;
}

export declare interface OperationsIn204Response extends HttpResponse {
    status: "204";
}

export declare type OperationsInParameters = RequestParameters;

export declare interface OperationsIs {
    get(options?: OperationsIsParameters): StreamableMethod<OperationsIs204Response>;
}

export declare interface OperationsIs204Response extends HttpResponse {
    status: "204";
}

export declare type OperationsIsParameters = RequestParameters;

export declare interface OperationsLambda {
    get(options?: OperationsLambdaParameters): StreamableMethod<OperationsLambda204Response>;
}

export declare interface OperationsLambda204Response extends HttpResponse {
    status: "204";
}

export declare type OperationsLambdaParameters = RequestParameters;

export declare interface OperationsNot {
    get(options?: OperationsNotParameters): StreamableMethod<OperationsNot204Response>;
}

export declare interface OperationsNot204Response extends HttpResponse {
    status: "204";
}

export declare type OperationsNotParameters = RequestParameters;

export declare interface OperationsOr {
    get(options?: OperationsOrParameters): StreamableMethod<OperationsOr204Response>;
}

export declare interface OperationsOr204Response extends HttpResponse {
    status: "204";
}

export declare type OperationsOrParameters = RequestParameters;

export declare interface OperationsPass {
    get(options?: OperationsPassParameters): StreamableMethod<OperationsPass204Response>;
}

export declare interface OperationsPass204Response extends HttpResponse {
    status: "204";
}

export declare type OperationsPassParameters = RequestParameters;

export declare interface OperationsRaise {
    get(options?: OperationsRaiseParameters): StreamableMethod<OperationsRaise204Response>;
}

export declare interface OperationsRaise204Response extends HttpResponse {
    status: "204";
}

export declare type OperationsRaiseParameters = RequestParameters;

export declare interface OperationsReturn {
    get(options?: OperationsReturnParameters): StreamableMethod<OperationsReturn204Response>;
}

export declare interface OperationsReturn204Response extends HttpResponse {
    status: "204";
}

export declare type OperationsReturnParameters = RequestParameters;

export declare interface OperationsTry {
    get(options?: OperationsTryParameters): StreamableMethod<OperationsTry204Response>;
}

export declare interface OperationsTry204Response extends HttpResponse {
    status: "204";
}

export declare type OperationsTryParameters = RequestParameters;

export declare interface OperationsWhile {
    get(options?: OperationsWhileParameters): StreamableMethod<OperationsWhile204Response>;
}

export declare interface OperationsWhile204Response extends HttpResponse {
    status: "204";
}

export declare type OperationsWhileParameters = RequestParameters;

export declare interface OperationsWith {
    get(options?: OperationsWithParameters): StreamableMethod<OperationsWith204Response>;
}

export declare interface OperationsWith204Response extends HttpResponse {
    status: "204";
}

export declare type OperationsWithParameters = RequestParameters;

export declare interface OperationsYield {
    get(options?: OperationsYieldParameters): StreamableMethod<OperationsYield204Response>;
}

export declare interface OperationsYield204Response extends HttpResponse {
    status: "204";
}

export declare type OperationsYieldParameters = RequestParameters;

export declare interface Or {
    name: string;
}

export declare interface ParametersWithAnd {
    get(options: ParametersWithAndParameters): StreamableMethod<ParametersWithAnd204Response>;
}

export declare interface ParametersWithAnd204Response extends HttpResponse {
    status: "204";
}

export declare type ParametersWithAndParameters = ParametersWithAndQueryParam & RequestParameters;

export declare interface ParametersWithAndQueryParam {
    queryParameters: ParametersWithAndQueryParamProperties;
}

export declare interface ParametersWithAndQueryParamProperties {
    and: string;
}

export declare interface ParametersWithAs {
    get(options: ParametersWithAsParameters): StreamableMethod<ParametersWithAs204Response>;
}

export declare interface ParametersWithAs204Response extends HttpResponse {
    status: "204";
}

export declare type ParametersWithAsParameters = ParametersWithAsQueryParam & RequestParameters;

export declare interface ParametersWithAsQueryParam {
    queryParameters: ParametersWithAsQueryParamProperties;
}

export declare interface ParametersWithAsQueryParamProperties {
    as: string;
}

export declare interface ParametersWithAssert {
    get(options: ParametersWithAssertParameters): StreamableMethod<ParametersWithAssert204Response>;
}

export declare interface ParametersWithAssert204Response extends HttpResponse {
    status: "204";
}

export declare type ParametersWithAssertParameters = ParametersWithAssertQueryParam & RequestParameters;

export declare interface ParametersWithAssertQueryParam {
    queryParameters: ParametersWithAssertQueryParamProperties;
}

export declare interface ParametersWithAssertQueryParamProperties {
    assert: string;
}

export declare interface ParametersWithAsync {
    get(options: ParametersWithAsyncParameters): StreamableMethod<ParametersWithAsync204Response>;
}

export declare interface ParametersWithAsync204Response extends HttpResponse {
    status: "204";
}

export declare type ParametersWithAsyncParameters = ParametersWithAsyncQueryParam & RequestParameters;

export declare interface ParametersWithAsyncQueryParam {
    queryParameters: ParametersWithAsyncQueryParamProperties;
}

export declare interface ParametersWithAsyncQueryParamProperties {
    async: string;
}

export declare interface ParametersWithAwait {
    get(options: ParametersWithAwaitParameters): StreamableMethod<ParametersWithAwait204Response>;
}

export declare interface ParametersWithAwait204Response extends HttpResponse {
    status: "204";
}

export declare type ParametersWithAwaitParameters = ParametersWithAwaitQueryParam & RequestParameters;

export declare interface ParametersWithAwaitQueryParam {
    queryParameters: ParametersWithAwaitQueryParamProperties;
}

export declare interface ParametersWithAwaitQueryParamProperties {
    await: string;
}

export declare interface ParametersWithBreak {
    get(options: ParametersWithBreakParameters): StreamableMethod<ParametersWithBreak204Response>;
}

export declare interface ParametersWithBreak204Response extends HttpResponse {
    status: "204";
}

export declare type ParametersWithBreakParameters = ParametersWithBreakQueryParam & RequestParameters;

export declare interface ParametersWithBreakQueryParam {
    queryParameters: ParametersWithBreakQueryParamProperties;
}

export declare interface ParametersWithBreakQueryParamProperties {
    break: string;
}

export declare interface ParametersWithCancellationToken {
    get(options: ParametersWithCancellationTokenParameters): StreamableMethod<ParametersWithCancellationToken204Response>;
}

export declare interface ParametersWithCancellationToken204Response extends HttpResponse {
    status: "204";
}

export declare type ParametersWithCancellationTokenParameters = ParametersWithCancellationTokenQueryParam & RequestParameters;

export declare interface ParametersWithCancellationTokenQueryParam {
    queryParameters: ParametersWithCancellationTokenQueryParamProperties;
}

export declare interface ParametersWithCancellationTokenQueryParamProperties {
    cancellationToken: string;
}

export declare interface ParametersWithClass {
    get(options: ParametersWithClassParameters): StreamableMethod<ParametersWithClass204Response>;
}

export declare interface ParametersWithClass204Response extends HttpResponse {
    status: "204";
}

export declare type ParametersWithClassParameters = ParametersWithClassQueryParam & RequestParameters;

export declare interface ParametersWithClassQueryParam {
    queryParameters: ParametersWithClassQueryParamProperties;
}

export declare interface ParametersWithClassQueryParamProperties {
    class: string;
}

export declare interface ParametersWithConstructor {
    get(options: ParametersWithConstructorParameters): StreamableMethod<ParametersWithConstructor204Response>;
}

export declare interface ParametersWithConstructor204Response extends HttpResponse {
    status: "204";
}

export declare type ParametersWithConstructorParameters = ParametersWithConstructorQueryParam & RequestParameters;

export declare interface ParametersWithConstructorQueryParam {
    queryParameters: ParametersWithConstructorQueryParamProperties;
}

export declare interface ParametersWithConstructorQueryParamProperties {
    constructor: string;
}

export declare interface ParametersWithContinue {
    get(options: ParametersWithContinueParameters): StreamableMethod<ParametersWithContinue204Response>;
}

export declare interface ParametersWithContinue204Response extends HttpResponse {
    status: "204";
}

export declare type ParametersWithContinueParameters = ParametersWithContinueQueryParam & RequestParameters;

export declare interface ParametersWithContinueQueryParam {
    queryParameters: ParametersWithContinueQueryParamProperties;
}

export declare interface ParametersWithContinueQueryParamProperties {
    continue: string;
}

export declare interface ParametersWithDef {
    get(options: ParametersWithDefParameters): StreamableMethod<ParametersWithDef204Response>;
}

export declare interface ParametersWithDef204Response extends HttpResponse {
    status: "204";
}

export declare type ParametersWithDefParameters = ParametersWithDefQueryParam & RequestParameters;

export declare interface ParametersWithDefQueryParam {
    queryParameters: ParametersWithDefQueryParamProperties;
}

export declare interface ParametersWithDefQueryParamProperties {
    def: string;
}

export declare interface ParametersWithDel {
    get(options: ParametersWithDelParameters): StreamableMethod<ParametersWithDel204Response>;
}

export declare interface ParametersWithDel204Response extends HttpResponse {
    status: "204";
}

export declare type ParametersWithDelParameters = ParametersWithDelQueryParam & RequestParameters;

export declare interface ParametersWithDelQueryParam {
    queryParameters: ParametersWithDelQueryParamProperties;
}

export declare interface ParametersWithDelQueryParamProperties {
    del: string;
}

export declare interface ParametersWithElif {
    get(options: ParametersWithElifParameters): StreamableMethod<ParametersWithElif204Response>;
}

export declare interface ParametersWithElif204Response extends HttpResponse {
    status: "204";
}

export declare type ParametersWithElifParameters = ParametersWithElifQueryParam & RequestParameters;

export declare interface ParametersWithElifQueryParam {
    queryParameters: ParametersWithElifQueryParamProperties;
}

export declare interface ParametersWithElifQueryParamProperties {
    elif: string;
}

export declare interface ParametersWithElse {
    get(options: ParametersWithElseParameters): StreamableMethod<ParametersWithElse204Response>;
}

export declare interface ParametersWithElse204Response extends HttpResponse {
    status: "204";
}

export declare type ParametersWithElseParameters = ParametersWithElseQueryParam & RequestParameters;

export declare interface ParametersWithElseQueryParam {
    queryParameters: ParametersWithElseQueryParamProperties;
}

export declare interface ParametersWithElseQueryParamProperties {
    else: string;
}

export declare interface ParametersWithExcept {
    get(options: ParametersWithExceptParameters): StreamableMethod<ParametersWithExcept204Response>;
}

export declare interface ParametersWithExcept204Response extends HttpResponse {
    status: "204";
}

export declare type ParametersWithExceptParameters = ParametersWithExceptQueryParam & RequestParameters;

export declare interface ParametersWithExceptQueryParam {
    queryParameters: ParametersWithExceptQueryParamProperties;
}

export declare interface ParametersWithExceptQueryParamProperties {
    except: string;
}

export declare interface ParametersWithExec {
    get(options: ParametersWithExecParameters): StreamableMethod<ParametersWithExec204Response>;
}

export declare interface ParametersWithExec204Response extends HttpResponse {
    status: "204";
}

export declare type ParametersWithExecParameters = ParametersWithExecQueryParam & RequestParameters;

export declare interface ParametersWithExecQueryParam {
    queryParameters: ParametersWithExecQueryParamProperties;
}

export declare interface ParametersWithExecQueryParamProperties {
    exec: string;
}

export declare interface ParametersWithFinally {
    get(options: ParametersWithFinallyParameters): StreamableMethod<ParametersWithFinally204Response>;
}

export declare interface ParametersWithFinally204Response extends HttpResponse {
    status: "204";
}

export declare type ParametersWithFinallyParameters = ParametersWithFinallyQueryParam & RequestParameters;

export declare interface ParametersWithFinallyQueryParam {
    queryParameters: ParametersWithFinallyQueryParamProperties;
}

export declare interface ParametersWithFinallyQueryParamProperties {
    finally: string;
}

export declare interface ParametersWithFor {
    get(options: ParametersWithForParameters): StreamableMethod<ParametersWithFor204Response>;
}

export declare interface ParametersWithFor204Response extends HttpResponse {
    status: "204";
}

export declare type ParametersWithForParameters = ParametersWithForQueryParam & RequestParameters;

export declare interface ParametersWithForQueryParam {
    queryParameters: ParametersWithForQueryParamProperties;
}

export declare interface ParametersWithForQueryParamProperties {
    for: string;
}

export declare interface ParametersWithFrom {
    get(options: ParametersWithFromParameters): StreamableMethod<ParametersWithFrom204Response>;
}

export declare interface ParametersWithFrom204Response extends HttpResponse {
    status: "204";
}

export declare type ParametersWithFromParameters = ParametersWithFromQueryParam & RequestParameters;

export declare interface ParametersWithFromQueryParam {
    queryParameters: ParametersWithFromQueryParamProperties;
}

export declare interface ParametersWithFromQueryParamProperties {
    from: string;
}

export declare interface ParametersWithGlobal {
    get(options: ParametersWithGlobalParameters): StreamableMethod<ParametersWithGlobal204Response>;
}

export declare interface ParametersWithGlobal204Response extends HttpResponse {
    status: "204";
}

export declare type ParametersWithGlobalParameters = ParametersWithGlobalQueryParam & RequestParameters;

export declare interface ParametersWithGlobalQueryParam {
    queryParameters: ParametersWithGlobalQueryParamProperties;
}

export declare interface ParametersWithGlobalQueryParamProperties {
    global: string;
}

export declare interface ParametersWithIf {
    get(options: ParametersWithIfParameters): StreamableMethod<ParametersWithIf204Response>;
}

export declare interface ParametersWithIf204Response extends HttpResponse {
    status: "204";
}

export declare type ParametersWithIfParameters = ParametersWithIfQueryParam & RequestParameters;

export declare interface ParametersWithIfQueryParam {
    queryParameters: ParametersWithIfQueryParamProperties;
}

export declare interface ParametersWithIfQueryParamProperties {
    if: string;
}

export declare interface ParametersWithImport {
    get(options: ParametersWithImportParameters): StreamableMethod<ParametersWithImport204Response>;
}

export declare interface ParametersWithImport204Response extends HttpResponse {
    status: "204";
}

export declare type ParametersWithImportParameters = ParametersWithImportQueryParam & RequestParameters;

export declare interface ParametersWithImportQueryParam {
    queryParameters: ParametersWithImportQueryParamProperties;
}

export declare interface ParametersWithImportQueryParamProperties {
    import: string;
}

export declare interface ParametersWithIn {
    get(options: ParametersWithInParameters): StreamableMethod<ParametersWithIn204Response>;
}

export declare interface ParametersWithIn204Response extends HttpResponse {
    status: "204";
}

export declare type ParametersWithInParameters = ParametersWithInQueryParam & RequestParameters;

export declare interface ParametersWithInQueryParam {
    queryParameters: ParametersWithInQueryParamProperties;
}

export declare interface ParametersWithInQueryParamProperties {
    in: string;
}

export declare interface ParametersWithIs {
    get(options: ParametersWithIsParameters): StreamableMethod<ParametersWithIs204Response>;
}

export declare interface ParametersWithIs204Response extends HttpResponse {
    status: "204";
}

export declare type ParametersWithIsParameters = ParametersWithIsQueryParam & RequestParameters;

export declare interface ParametersWithIsQueryParam {
    queryParameters: ParametersWithIsQueryParamProperties;
}

export declare interface ParametersWithIsQueryParamProperties {
    is: string;
}

export declare interface ParametersWithLambda {
    get(options: ParametersWithLambdaParameters): StreamableMethod<ParametersWithLambda204Response>;
}

export declare interface ParametersWithLambda204Response extends HttpResponse {
    status: "204";
}

export declare type ParametersWithLambdaParameters = ParametersWithLambdaQueryParam & RequestParameters;

export declare interface ParametersWithLambdaQueryParam {
    queryParameters: ParametersWithLambdaQueryParamProperties;
}

export declare interface ParametersWithLambdaQueryParamProperties {
    lambda: string;
}

export declare interface ParametersWithNot {
    get(options: ParametersWithNotParameters): StreamableMethod<ParametersWithNot204Response>;
}

export declare interface ParametersWithNot204Response extends HttpResponse {
    status: "204";
}

export declare type ParametersWithNotParameters = ParametersWithNotQueryParam & RequestParameters;

export declare interface ParametersWithNotQueryParam {
    queryParameters: ParametersWithNotQueryParamProperties;
}

export declare interface ParametersWithNotQueryParamProperties {
    not: string;
}

export declare interface ParametersWithOr {
    get(options: ParametersWithOrParameters): StreamableMethod<ParametersWithOr204Response>;
}

export declare interface ParametersWithOr204Response extends HttpResponse {
    status: "204";
}

export declare type ParametersWithOrParameters = ParametersWithOrQueryParam & RequestParameters;

export declare interface ParametersWithOrQueryParam {
    queryParameters: ParametersWithOrQueryParamProperties;
}

export declare interface ParametersWithOrQueryParamProperties {
    or: string;
}

export declare interface ParametersWithPass {
    get(options: ParametersWithPassParameters): StreamableMethod<ParametersWithPass204Response>;
}

export declare interface ParametersWithPass204Response extends HttpResponse {
    status: "204";
}

export declare type ParametersWithPassParameters = ParametersWithPassQueryParam & RequestParameters;

export declare interface ParametersWithPassQueryParam {
    queryParameters: ParametersWithPassQueryParamProperties;
}

export declare interface ParametersWithPassQueryParamProperties {
    pass: string;
}

export declare interface ParametersWithRaise {
    get(options: ParametersWithRaiseParameters): StreamableMethod<ParametersWithRaise204Response>;
}

export declare interface ParametersWithRaise204Response extends HttpResponse {
    status: "204";
}

export declare type ParametersWithRaiseParameters = ParametersWithRaiseQueryParam & RequestParameters;

export declare interface ParametersWithRaiseQueryParam {
    queryParameters: ParametersWithRaiseQueryParamProperties;
}

export declare interface ParametersWithRaiseQueryParamProperties {
    raise: string;
}

export declare interface ParametersWithReturn {
    get(options: ParametersWithReturnParameters): StreamableMethod<ParametersWithReturn204Response>;
}

export declare interface ParametersWithReturn204Response extends HttpResponse {
    status: "204";
}

export declare type ParametersWithReturnParameters = ParametersWithReturnQueryParam & RequestParameters;

export declare interface ParametersWithReturnQueryParam {
    queryParameters: ParametersWithReturnQueryParamProperties;
}

export declare interface ParametersWithReturnQueryParamProperties {
    return: string;
}

export declare interface ParametersWithTry {
    get(options: ParametersWithTryParameters): StreamableMethod<ParametersWithTry204Response>;
}

export declare interface ParametersWithTry204Response extends HttpResponse {
    status: "204";
}

export declare type ParametersWithTryParameters = ParametersWithTryQueryParam & RequestParameters;

export declare interface ParametersWithTryQueryParam {
    queryParameters: ParametersWithTryQueryParamProperties;
}

export declare interface ParametersWithTryQueryParamProperties {
    try: string;
}

export declare interface ParametersWithWhile {
    get(options: ParametersWithWhileParameters): StreamableMethod<ParametersWithWhile204Response>;
}

export declare interface ParametersWithWhile204Response extends HttpResponse {
    status: "204";
}

export declare type ParametersWithWhileParameters = ParametersWithWhileQueryParam & RequestParameters;

export declare interface ParametersWithWhileQueryParam {
    queryParameters: ParametersWithWhileQueryParamProperties;
}

export declare interface ParametersWithWhileQueryParamProperties {
    while: string;
}

export declare interface ParametersWithWith {
    get(options: ParametersWithWithParameters): StreamableMethod<ParametersWithWith204Response>;
}

export declare interface ParametersWithWith204Response extends HttpResponse {
    status: "204";
}

export declare type ParametersWithWithParameters = ParametersWithWithQueryParam & RequestParameters;

export declare interface ParametersWithWithQueryParam {
    queryParameters: ParametersWithWithQueryParamProperties;
}

export declare interface ParametersWithWithQueryParamProperties {
    with: string;
}

export declare interface ParametersWithYield {
    get(options: ParametersWithYieldParameters): StreamableMethod<ParametersWithYield204Response>;
}

export declare interface ParametersWithYield204Response extends HttpResponse {
    status: "204";
}

export declare type ParametersWithYieldParameters = ParametersWithYieldQueryParam & RequestParameters;

export declare interface ParametersWithYieldQueryParam {
    queryParameters: ParametersWithYieldQueryParamProperties;
}

export declare interface ParametersWithYieldQueryParamProperties {
    yield: string;
}

export declare interface Pass {
    name: string;
}

export declare interface Raise {
    name: string;
}

export declare interface Return {
    name: string;
}

export declare interface Routes {
    (path: "/special-words/models/and"): ModelsWithAnd;
    (path: "/special-words/models/as"): ModelsWithAs;
    (path: "/special-words/models/assert"): ModelsWithAssert;
    (path: "/special-words/models/async"): ModelsWithAsync;
    (path: "/special-words/models/await"): ModelsWithAwait;
    (path: "/special-words/models/break"): ModelsWithBreak;
    (path: "/special-words/models/class"): ModelsWithClass;
    (path: "/special-words/models/constructor"): ModelsWithConstructor;
    (path: "/special-words/models/continue"): ModelsWithContinue;
    (path: "/special-words/models/def"): ModelsWithDef;
    (path: "/special-words/models/del"): ModelsWithDel;
    (path: "/special-words/models/elif"): ModelsWithElif;
    (path: "/special-words/models/else"): ModelsWithElse;
    (path: "/special-words/models/except"): ModelsWithExcept;
    (path: "/special-words/models/exec"): ModelsWithExec;
    (path: "/special-words/models/finally"): ModelsWithFinally;
    (path: "/special-words/models/for"): ModelsWithFor;
    (path: "/special-words/models/from"): ModelsWithFrom;
    (path: "/special-words/models/global"): ModelsWithGlobal;
    (path: "/special-words/models/if"): ModelsWithIf;
    (path: "/special-words/models/import"): ModelsWithImport;
    (path: "/special-words/models/in"): ModelsWithIn;
    (path: "/special-words/models/is"): ModelsWithIs;
    (path: "/special-words/models/lambda"): ModelsWithLambda;
    (path: "/special-words/models/not"): ModelsWithNot;
    (path: "/special-words/models/or"): ModelsWithOr;
    (path: "/special-words/models/pass"): ModelsWithPass;
    (path: "/special-words/models/raise"): ModelsWithRaise;
    (path: "/special-words/models/return"): ModelsWithReturn;
    (path: "/special-words/models/try"): ModelsWithTry;
    (path: "/special-words/models/while"): ModelsWithWhile;
    (path: "/special-words/models/with"): ModelsWithWith;
    (path: "/special-words/models/yield"): ModelsWithYield;
    (path: "/special-words/model-properties/same-as-model"): ModelPropertiesSameAsModel;
    (path: "/special-words/model-properties/dict-methods"): ModelPropertiesDictMethods;
    (path: "/special-words/model-properties/list"): ModelPropertiesWithList;
    (path: "/special-words/operations/and"): OperationsAnd;
    (path: "/special-words/operations/as"): OperationsAs;
    (path: "/special-words/operations/assert"): OperationsAssert;
    (path: "/special-words/operations/async"): OperationsAsync;
    (path: "/special-words/operations/await"): OperationsAwait;
    (path: "/special-words/operations/break"): OperationsBreak;
    (path: "/special-words/operations/class"): OperationsClass;
    (path: "/special-words/operations/constructor"): OperationsConstructor;
    (path: "/special-words/operations/continue"): OperationsContinue;
    (path: "/special-words/operations/def"): OperationsDef;
    (path: "/special-words/operations/del"): OperationsDel;
    (path: "/special-words/operations/elif"): OperationsElif;
    (path: "/special-words/operations/else"): OperationsElse;
    (path: "/special-words/operations/except"): OperationsExcept;
    (path: "/special-words/operations/exec"): OperationsExec;
    (path: "/special-words/operations/finally"): OperationsFinally;
    (path: "/special-words/operations/for"): OperationsFor;
    (path: "/special-words/operations/from"): OperationsFrom;
    (path: "/special-words/operations/global"): OperationsGlobalModel;
    (path: "/special-words/operations/if"): OperationsIf;
    (path: "/special-words/operations/import"): OperationsImport;
    (path: "/special-words/operations/in"): OperationsIn;
    (path: "/special-words/operations/is"): OperationsIs;
    (path: "/special-words/operations/lambda"): OperationsLambda;
    (path: "/special-words/operations/not"): OperationsNot;
    (path: "/special-words/operations/or"): OperationsOr;
    (path: "/special-words/operations/pass"): OperationsPass;
    (path: "/special-words/operations/raise"): OperationsRaise;
    (path: "/special-words/operations/return"): OperationsReturn;
    (path: "/special-words/operations/try"): OperationsTry;
    (path: "/special-words/operations/while"): OperationsWhile;
    (path: "/special-words/operations/with"): OperationsWith;
    (path: "/special-words/operations/yield"): OperationsYield;
    (path: "/special-words/parameters/and"): ParametersWithAnd;
    (path: "/special-words/parameters/as"): ParametersWithAs;
    (path: "/special-words/parameters/assert"): ParametersWithAssert;
    (path: "/special-words/parameters/async"): ParametersWithAsync;
    (path: "/special-words/parameters/await"): ParametersWithAwait;
    (path: "/special-words/parameters/break"): ParametersWithBreak;
    (path: "/special-words/parameters/class"): ParametersWithClass;
    (path: "/special-words/parameters/constructor"): ParametersWithConstructor;
    (path: "/special-words/parameters/continue"): ParametersWithContinue;
    (path: "/special-words/parameters/def"): ParametersWithDef;
    (path: "/special-words/parameters/del"): ParametersWithDel;
    (path: "/special-words/parameters/elif"): ParametersWithElif;
    (path: "/special-words/parameters/else"): ParametersWithElse;
    (path: "/special-words/parameters/except"): ParametersWithExcept;
    (path: "/special-words/parameters/exec"): ParametersWithExec;
    (path: "/special-words/parameters/finally"): ParametersWithFinally;
    (path: "/special-words/parameters/for"): ParametersWithFor;
    (path: "/special-words/parameters/from"): ParametersWithFrom;
    (path: "/special-words/parameters/global"): ParametersWithGlobal;
    (path: "/special-words/parameters/if"): ParametersWithIf;
    (path: "/special-words/parameters/import"): ParametersWithImport;
    (path: "/special-words/parameters/in"): ParametersWithIn;
    (path: "/special-words/parameters/is"): ParametersWithIs;
    (path: "/special-words/parameters/lambda"): ParametersWithLambda;
    (path: "/special-words/parameters/not"): ParametersWithNot;
    (path: "/special-words/parameters/or"): ParametersWithOr;
    (path: "/special-words/parameters/pass"): ParametersWithPass;
    (path: "/special-words/parameters/raise"): ParametersWithRaise;
    (path: "/special-words/parameters/return"): ParametersWithReturn;
    (path: "/special-words/parameters/try"): ParametersWithTry;
    (path: "/special-words/parameters/while"): ParametersWithWhile;
    (path: "/special-words/parameters/with"): ParametersWithWith;
    (path: "/special-words/parameters/yield"): ParametersWithYield;
    (path: "/special-words/parameters/cancellationToken"): ParametersWithCancellationToken;
}

export declare interface SameAsModel {
    SameAsModel: string;
}

export declare type SpecialWordsClient = Client & {
    path: Routes;
};

export declare interface SpecialWordsClientOptions extends ClientOptions {
}

export declare interface Try {
    name: string;
}

export declare interface While {
    name: string;
}

export declare interface With {
    name: string;
}

export declare interface Yield {
    name: string;
}

export { }
