import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

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

export declare function createSpecialWords(options?: SpecialWordsClientOptionalParams): SpecialWordsContext;

export declare interface Def {
    name: string;
}

export declare interface Del {
    name: string;
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

declare interface Global_2 {
    name: string;
}
export { Global_2 as Global }

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

export declare interface ModelPropertiesOperations {
    sameAsModel: (body: SameAsModel, options?: ModelPropertiesSameAsModelOptionalParams) => Promise<void>;
}

export declare function modelPropertiesSameAsModel(context: SpecialWordsContext, body: SameAsModel, options?: ModelPropertiesSameAsModelOptionalParams): Promise<void>;

export declare interface ModelPropertiesSameAsModelOptionalParams extends OperationOptions {
}

export declare interface ModelsOperations {
    withAnd: (body: And, options?: ModelsWithAndOptionalParams) => Promise<void>;
    withAs: (body: As, options?: ModelsWithAsOptionalParams) => Promise<void>;
    withAssert: (body: Assert, options?: ModelsWithAssertOptionalParams) => Promise<void>;
    withAsync: (body: Async, options?: ModelsWithAsyncOptionalParams) => Promise<void>;
    withAwait: (body: Await, options?: ModelsWithAwaitOptionalParams) => Promise<void>;
    withBreak: (body: Break, options?: ModelsWithBreakOptionalParams) => Promise<void>;
    withClass: (body: Class, options?: ModelsWithClassOptionalParams) => Promise<void>;
    withConstructor: (body: Constructor, options?: ModelsWithConstructorOptionalParams) => Promise<void>;
    withContinue: (body: Continue, options?: ModelsWithContinueOptionalParams) => Promise<void>;
    withDef: (body: Def, options?: ModelsWithDefOptionalParams) => Promise<void>;
    withDel: (body: Del, options?: ModelsWithDelOptionalParams) => Promise<void>;
    withElif: (body: Elif, options?: ModelsWithElifOptionalParams) => Promise<void>;
    withElse: (body: Else, options?: ModelsWithElseOptionalParams) => Promise<void>;
    withExcept: (body: Except, options?: ModelsWithExceptOptionalParams) => Promise<void>;
    withExec: (body: Exec, options?: ModelsWithExecOptionalParams) => Promise<void>;
    withFinally: (body: Finally, options?: ModelsWithFinallyOptionalParams) => Promise<void>;
    withFor: (body: For, options?: ModelsWithForOptionalParams) => Promise<void>;
    withFrom: (body: From, options?: ModelsWithFromOptionalParams) => Promise<void>;
    withGlobal: (body: Global, options?: ModelsWithGlobalOptionalParams) => Promise<void>;
    withIf: (body: If, options?: ModelsWithIfOptionalParams) => Promise<void>;
    withImport: (body: Import, options?: ModelsWithImportOptionalParams) => Promise<void>;
    withIn: (body: In, options?: ModelsWithInOptionalParams) => Promise<void>;
    withIs: (body: Is, options?: ModelsWithIsOptionalParams) => Promise<void>;
    withLambda: (body: Lambda, options?: ModelsWithLambdaOptionalParams) => Promise<void>;
    withNot: (body: Not, options?: ModelsWithNotOptionalParams) => Promise<void>;
    withOr: (body: Or, options?: ModelsWithOrOptionalParams) => Promise<void>;
    withPass: (body: Pass, options?: ModelsWithPassOptionalParams) => Promise<void>;
    withRaise: (body: Raise, options?: ModelsWithRaiseOptionalParams) => Promise<void>;
    withReturn: (body: Return, options?: ModelsWithReturnOptionalParams) => Promise<void>;
    withTry: (body: Try, options?: ModelsWithTryOptionalParams) => Promise<void>;
    withWhile: (body: While, options?: ModelsWithWhileOptionalParams) => Promise<void>;
    withWith: (body: With, options?: ModelsWithWithOptionalParams) => Promise<void>;
    withYield: (body: Yield, options?: ModelsWithYieldOptionalParams) => Promise<void>;
}

export declare function modelsWithAnd(context: SpecialWordsContext, body: And, options?: ModelsWithAndOptionalParams): Promise<void>;

export declare interface ModelsWithAndOptionalParams extends OperationOptions {
}

export declare function modelsWithAs(context: SpecialWordsContext, body: As, options?: ModelsWithAsOptionalParams): Promise<void>;

export declare interface ModelsWithAsOptionalParams extends OperationOptions {
}

export declare function modelsWithAssert(context: SpecialWordsContext, body: Assert, options?: ModelsWithAssertOptionalParams): Promise<void>;

export declare interface ModelsWithAssertOptionalParams extends OperationOptions {
}

export declare function modelsWithAsync(context: SpecialWordsContext, body: Async, options?: ModelsWithAsyncOptionalParams): Promise<void>;

export declare interface ModelsWithAsyncOptionalParams extends OperationOptions {
}

export declare function modelsWithAwait(context: SpecialWordsContext, body: Await, options?: ModelsWithAwaitOptionalParams): Promise<void>;

export declare interface ModelsWithAwaitOptionalParams extends OperationOptions {
}

export declare function modelsWithBreak(context: SpecialWordsContext, body: Break, options?: ModelsWithBreakOptionalParams): Promise<void>;

export declare interface ModelsWithBreakOptionalParams extends OperationOptions {
}

export declare function modelsWithClass(context: SpecialWordsContext, body: Class, options?: ModelsWithClassOptionalParams): Promise<void>;

export declare interface ModelsWithClassOptionalParams extends OperationOptions {
}

export declare function modelsWithConstructor(context: SpecialWordsContext, body: Constructor, options?: ModelsWithConstructorOptionalParams): Promise<void>;

export declare interface ModelsWithConstructorOptionalParams extends OperationOptions {
}

export declare function modelsWithContinue(context: SpecialWordsContext, body: Continue, options?: ModelsWithContinueOptionalParams): Promise<void>;

export declare interface ModelsWithContinueOptionalParams extends OperationOptions {
}

export declare function modelsWithDef(context: SpecialWordsContext, body: Def, options?: ModelsWithDefOptionalParams): Promise<void>;

export declare interface ModelsWithDefOptionalParams extends OperationOptions {
}

export declare function modelsWithDel(context: SpecialWordsContext, body: Del, options?: ModelsWithDelOptionalParams): Promise<void>;

export declare interface ModelsWithDelOptionalParams extends OperationOptions {
}

export declare function modelsWithElif(context: SpecialWordsContext, body: Elif, options?: ModelsWithElifOptionalParams): Promise<void>;

export declare interface ModelsWithElifOptionalParams extends OperationOptions {
}

export declare function modelsWithElse(context: SpecialWordsContext, body: Else, options?: ModelsWithElseOptionalParams): Promise<void>;

export declare interface ModelsWithElseOptionalParams extends OperationOptions {
}

export declare function modelsWithExcept(context: SpecialWordsContext, body: Except, options?: ModelsWithExceptOptionalParams): Promise<void>;

export declare interface ModelsWithExceptOptionalParams extends OperationOptions {
}

export declare function modelsWithExec(context: SpecialWordsContext, body: Exec, options?: ModelsWithExecOptionalParams): Promise<void>;

export declare interface ModelsWithExecOptionalParams extends OperationOptions {
}

export declare function modelsWithFinally(context: SpecialWordsContext, body: Finally, options?: ModelsWithFinallyOptionalParams): Promise<void>;

export declare interface ModelsWithFinallyOptionalParams extends OperationOptions {
}

export declare function modelsWithFor(context: SpecialWordsContext, body: For, options?: ModelsWithForOptionalParams): Promise<void>;

export declare interface ModelsWithForOptionalParams extends OperationOptions {
}

export declare function modelsWithFrom(context: SpecialWordsContext, body: From, options?: ModelsWithFromOptionalParams): Promise<void>;

export declare interface ModelsWithFromOptionalParams extends OperationOptions {
}

export declare function modelsWithGlobal(context: SpecialWordsContext, body: Global_2, options?: ModelsWithGlobalOptionalParams): Promise<void>;

export declare interface ModelsWithGlobalOptionalParams extends OperationOptions {
}

export declare function modelsWithIf(context: SpecialWordsContext, body: If, options?: ModelsWithIfOptionalParams): Promise<void>;

export declare interface ModelsWithIfOptionalParams extends OperationOptions {
}

export declare function modelsWithImport(context: SpecialWordsContext, body: Import, options?: ModelsWithImportOptionalParams): Promise<void>;

export declare interface ModelsWithImportOptionalParams extends OperationOptions {
}

export declare function modelsWithIn(context: SpecialWordsContext, body: In, options?: ModelsWithInOptionalParams): Promise<void>;

export declare interface ModelsWithInOptionalParams extends OperationOptions {
}

export declare function modelsWithIs(context: SpecialWordsContext, body: Is, options?: ModelsWithIsOptionalParams): Promise<void>;

export declare interface ModelsWithIsOptionalParams extends OperationOptions {
}

export declare function modelsWithLambda(context: SpecialWordsContext, body: Lambda, options?: ModelsWithLambdaOptionalParams): Promise<void>;

export declare interface ModelsWithLambdaOptionalParams extends OperationOptions {
}

export declare function modelsWithNot(context: SpecialWordsContext, body: Not, options?: ModelsWithNotOptionalParams): Promise<void>;

export declare interface ModelsWithNotOptionalParams extends OperationOptions {
}

export declare function modelsWithOr(context: SpecialWordsContext, body: Or, options?: ModelsWithOrOptionalParams): Promise<void>;

export declare interface ModelsWithOrOptionalParams extends OperationOptions {
}

export declare function modelsWithPass(context: SpecialWordsContext, body: Pass, options?: ModelsWithPassOptionalParams): Promise<void>;

export declare interface ModelsWithPassOptionalParams extends OperationOptions {
}

export declare function modelsWithRaise(context: SpecialWordsContext, body: Raise, options?: ModelsWithRaiseOptionalParams): Promise<void>;

export declare interface ModelsWithRaiseOptionalParams extends OperationOptions {
}

export declare function modelsWithReturn(context: SpecialWordsContext, body: Return, options?: ModelsWithReturnOptionalParams): Promise<void>;

export declare interface ModelsWithReturnOptionalParams extends OperationOptions {
}

export declare function modelsWithTry(context: SpecialWordsContext, body: Try, options?: ModelsWithTryOptionalParams): Promise<void>;

export declare interface ModelsWithTryOptionalParams extends OperationOptions {
}

export declare function modelsWithWhile(context: SpecialWordsContext, body: While, options?: ModelsWithWhileOptionalParams): Promise<void>;

export declare interface ModelsWithWhileOptionalParams extends OperationOptions {
}

export declare function modelsWithWith(context: SpecialWordsContext, body: With, options?: ModelsWithWithOptionalParams): Promise<void>;

export declare interface ModelsWithWithOptionalParams extends OperationOptions {
}

export declare function modelsWithYield(context: SpecialWordsContext, body: Yield, options?: ModelsWithYieldOptionalParams): Promise<void>;

export declare interface ModelsWithYieldOptionalParams extends OperationOptions {
}

export declare interface Not {
    name: string;
}

export declare function operationsAnd(context: SpecialWordsContext, options?: OperationsAndOptionalParams): Promise<void>;

export declare interface OperationsAndOptionalParams extends OperationOptions {
}

export declare function operationsAs(context: SpecialWordsContext, options?: OperationsAsOptionalParams): Promise<void>;

export declare interface OperationsAsOptionalParams extends OperationOptions {
}

export declare function operationsAssert(context: SpecialWordsContext, options?: OperationsAssertOptionalParams): Promise<void>;

export declare interface OperationsAssertOptionalParams extends OperationOptions {
}

export declare function operationsAsync(context: SpecialWordsContext, options?: OperationsAsyncOptionalParams): Promise<void>;

export declare interface OperationsAsyncOptionalParams extends OperationOptions {
}

export declare function operationsAwait(context: SpecialWordsContext, options?: OperationsAwaitOptionalParams): Promise<void>;

export declare interface OperationsAwaitOptionalParams extends OperationOptions {
}

export declare function operationsBreak(context: SpecialWordsContext, options?: OperationsBreakOptionalParams): Promise<void>;

export declare interface OperationsBreakOptionalParams extends OperationOptions {
}

export declare function operationsClass(context: SpecialWordsContext, options?: OperationsClassOptionalParams): Promise<void>;

export declare interface OperationsClassOptionalParams extends OperationOptions {
}

export declare function operationsConstructor(context: SpecialWordsContext, options?: OperationsConstructorOptionalParams): Promise<void>;

export declare interface OperationsConstructorOptionalParams extends OperationOptions {
}

export declare function operationsContinue(context: SpecialWordsContext, options?: OperationsContinueOptionalParams): Promise<void>;

export declare interface OperationsContinueOptionalParams extends OperationOptions {
}

export declare function operationsDef(context: SpecialWordsContext, options?: OperationsDefOptionalParams): Promise<void>;

export declare interface OperationsDefOptionalParams extends OperationOptions {
}

export declare function operationsDel(context: SpecialWordsContext, options?: OperationsDelOptionalParams): Promise<void>;

export declare interface OperationsDelOptionalParams extends OperationOptions {
}

export declare function operationsElif(context: SpecialWordsContext, options?: OperationsElifOptionalParams): Promise<void>;

export declare interface OperationsElifOptionalParams extends OperationOptions {
}

export declare function operationsElse(context: SpecialWordsContext, options?: OperationsElseOptionalParams): Promise<void>;

export declare interface OperationsElseOptionalParams extends OperationOptions {
}

export declare function operationsExcept(context: SpecialWordsContext, options?: OperationsExceptOptionalParams): Promise<void>;

export declare interface OperationsExceptOptionalParams extends OperationOptions {
}

export declare function operationsExec(context: SpecialWordsContext, options?: OperationsExecOptionalParams): Promise<void>;

export declare interface OperationsExecOptionalParams extends OperationOptions {
}

export declare function operationsFinally(context: SpecialWordsContext, options?: OperationsFinallyOptionalParams): Promise<void>;

export declare interface OperationsFinallyOptionalParams extends OperationOptions {
}

export declare function operationsFor(context: SpecialWordsContext, options?: OperationsForOptionalParams): Promise<void>;

export declare interface OperationsForOptionalParams extends OperationOptions {
}

export declare function operationsFrom(context: SpecialWordsContext, options?: OperationsFromOptionalParams): Promise<void>;

export declare interface OperationsFromOptionalParams extends OperationOptions {
}

export declare function operationsGlobal(context: SpecialWordsContext, options?: OperationsGlobalOptionalParams): Promise<void>;

export declare interface OperationsGlobalOptionalParams extends OperationOptions {
}

export declare function operationsIf(context: SpecialWordsContext, options?: OperationsIfOptionalParams): Promise<void>;

export declare interface OperationsIfOptionalParams extends OperationOptions {
}

export declare function operationsImport(context: SpecialWordsContext, options?: OperationsImportOptionalParams): Promise<void>;

export declare interface OperationsImportOptionalParams extends OperationOptions {
}

export declare function operationsIn(context: SpecialWordsContext, options?: OperationsInOptionalParams): Promise<void>;

export declare interface OperationsInOptionalParams extends OperationOptions {
}

export declare function operationsIs(context: SpecialWordsContext, options?: OperationsIsOptionalParams): Promise<void>;

export declare interface OperationsIsOptionalParams extends OperationOptions {
}

export declare function operationsLambda(context: SpecialWordsContext, options?: OperationsLambdaOptionalParams): Promise<void>;

export declare interface OperationsLambdaOptionalParams extends OperationOptions {
}

export declare function operationsNot(context: SpecialWordsContext, options?: OperationsNotOptionalParams): Promise<void>;

export declare interface OperationsNotOptionalParams extends OperationOptions {
}

export declare interface OperationsOperations {
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

export declare function operationsOr(context: SpecialWordsContext, options?: OperationsOrOptionalParams): Promise<void>;

export declare interface OperationsOrOptionalParams extends OperationOptions {
}

export declare function operationsPass(context: SpecialWordsContext, options?: OperationsPassOptionalParams): Promise<void>;

export declare interface OperationsPassOptionalParams extends OperationOptions {
}

export declare function operationsRaise(context: SpecialWordsContext, options?: OperationsRaiseOptionalParams): Promise<void>;

export declare interface OperationsRaiseOptionalParams extends OperationOptions {
}

export declare function operationsReturn(context: SpecialWordsContext, options?: OperationsReturnOptionalParams): Promise<void>;

export declare interface OperationsReturnOptionalParams extends OperationOptions {
}

export declare function operationsTry(context: SpecialWordsContext, options?: OperationsTryOptionalParams): Promise<void>;

export declare interface OperationsTryOptionalParams extends OperationOptions {
}

export declare function operationsWhile(context: SpecialWordsContext, options?: OperationsWhileOptionalParams): Promise<void>;

export declare interface OperationsWhileOptionalParams extends OperationOptions {
}

export declare function operationsWith(context: SpecialWordsContext, options?: OperationsWithOptionalParams): Promise<void>;

export declare interface OperationsWithOptionalParams extends OperationOptions {
}

export declare function operationsYield(context: SpecialWordsContext, options?: OperationsYieldOptionalParams): Promise<void>;

export declare interface OperationsYieldOptionalParams extends OperationOptions {
}

export declare interface Or {
    name: string;
}

export declare interface ParametersOperations {
    withAnd: (and: string, options?: ParametersWithAndOptionalParams) => Promise<void>;
    withAs: (asParam: string, options?: ParametersWithAsOptionalParams) => Promise<void>;
    withAssert: (assertParam: string, options?: ParametersWithAssertOptionalParams) => Promise<void>;
    withAsync: (asyncParam: string, options?: ParametersWithAsyncOptionalParams) => Promise<void>;
    withAwait: (awaitParam: string, options?: ParametersWithAwaitOptionalParams) => Promise<void>;
    withBreak: (breakParam: string, options?: ParametersWithBreakOptionalParams) => Promise<void>;
    withClass: (classParam: string, options?: ParametersWithClassOptionalParams) => Promise<void>;
    withConstructor: (constructorParam: string, options?: ParametersWithConstructorOptionalParams) => Promise<void>;
    withContinue: (continueParam: string, options?: ParametersWithContinueOptionalParams) => Promise<void>;
    withDef: (def: string, options?: ParametersWithDefOptionalParams) => Promise<void>;
    withDel: (del: string, options?: ParametersWithDelOptionalParams) => Promise<void>;
    withElif: (elif: string, options?: ParametersWithElifOptionalParams) => Promise<void>;
    withElse: (elseParam: string, options?: ParametersWithElseOptionalParams) => Promise<void>;
    withExcept: (except: string, options?: ParametersWithExceptOptionalParams) => Promise<void>;
    withExec: (exec: string, options?: ParametersWithExecOptionalParams) => Promise<void>;
    withFinally: (finallyParam: string, options?: ParametersWithFinallyOptionalParams) => Promise<void>;
    withFor: (forParam: string, options?: ParametersWithForOptionalParams) => Promise<void>;
    withFrom: (fromParam: string, options?: ParametersWithFromOptionalParams) => Promise<void>;
    withGlobal: (global: string, options?: ParametersWithGlobalOptionalParams) => Promise<void>;
    withIf: (ifParam: string, options?: ParametersWithIfOptionalParams) => Promise<void>;
    withImport: (importParam: string, options?: ParametersWithImportOptionalParams) => Promise<void>;
    withIn: (inParam: string, options?: ParametersWithInOptionalParams) => Promise<void>;
    withIs: (is: string, options?: ParametersWithIsOptionalParams) => Promise<void>;
    withLambda: (lambda: string, options?: ParametersWithLambdaOptionalParams) => Promise<void>;
    withNot: (not: string, options?: ParametersWithNotOptionalParams) => Promise<void>;
    withOr: (or: string, options?: ParametersWithOrOptionalParams) => Promise<void>;
    withPass: (pass: string, options?: ParametersWithPassOptionalParams) => Promise<void>;
    withRaise: (raise: string, options?: ParametersWithRaiseOptionalParams) => Promise<void>;
    withReturn: (returnParam: string, options?: ParametersWithReturnOptionalParams) => Promise<void>;
    withTry: (tryParam: string, options?: ParametersWithTryOptionalParams) => Promise<void>;
    withWhile: (whileParam: string, options?: ParametersWithWhileOptionalParams) => Promise<void>;
    withWith: (withParam: string, options?: ParametersWithWithOptionalParams) => Promise<void>;
    withYield: (yieldParam: string, options?: ParametersWithYieldOptionalParams) => Promise<void>;
    withCancellationToken: (cancellationToken: string, options?: ParametersWithCancellationTokenOptionalParams) => Promise<void>;
}

export declare function parametersWithAnd(context: SpecialWordsContext, and: string, options?: ParametersWithAndOptionalParams): Promise<void>;

export declare interface ParametersWithAndOptionalParams extends OperationOptions {
}

export declare function parametersWithAs(context: SpecialWordsContext, asParam: string, options?: ParametersWithAsOptionalParams): Promise<void>;

export declare interface ParametersWithAsOptionalParams extends OperationOptions {
}

export declare function parametersWithAssert(context: SpecialWordsContext, assertParam: string, options?: ParametersWithAssertOptionalParams): Promise<void>;

export declare interface ParametersWithAssertOptionalParams extends OperationOptions {
}

export declare function parametersWithAsync(context: SpecialWordsContext, asyncParam: string, options?: ParametersWithAsyncOptionalParams): Promise<void>;

export declare interface ParametersWithAsyncOptionalParams extends OperationOptions {
}

export declare function parametersWithAwait(context: SpecialWordsContext, awaitParam: string, options?: ParametersWithAwaitOptionalParams): Promise<void>;

export declare interface ParametersWithAwaitOptionalParams extends OperationOptions {
}

export declare function parametersWithBreak(context: SpecialWordsContext, breakParam: string, options?: ParametersWithBreakOptionalParams): Promise<void>;

export declare interface ParametersWithBreakOptionalParams extends OperationOptions {
}

export declare function parametersWithCancellationToken(context: SpecialWordsContext, cancellationToken: string, options?: ParametersWithCancellationTokenOptionalParams): Promise<void>;

export declare interface ParametersWithCancellationTokenOptionalParams extends OperationOptions {
}

export declare function parametersWithClass(context: SpecialWordsContext, classParam: string, options?: ParametersWithClassOptionalParams): Promise<void>;

export declare interface ParametersWithClassOptionalParams extends OperationOptions {
}

export declare function parametersWithConstructor(context: SpecialWordsContext, constructorParam: string, options?: ParametersWithConstructorOptionalParams): Promise<void>;

export declare interface ParametersWithConstructorOptionalParams extends OperationOptions {
}

export declare function parametersWithContinue(context: SpecialWordsContext, continueParam: string, options?: ParametersWithContinueOptionalParams): Promise<void>;

export declare interface ParametersWithContinueOptionalParams extends OperationOptions {
}

export declare function parametersWithDef(context: SpecialWordsContext, def: string, options?: ParametersWithDefOptionalParams): Promise<void>;

export declare interface ParametersWithDefOptionalParams extends OperationOptions {
}

export declare function parametersWithDel(context: SpecialWordsContext, del: string, options?: ParametersWithDelOptionalParams): Promise<void>;

export declare interface ParametersWithDelOptionalParams extends OperationOptions {
}

export declare function parametersWithElif(context: SpecialWordsContext, elif: string, options?: ParametersWithElifOptionalParams): Promise<void>;

export declare interface ParametersWithElifOptionalParams extends OperationOptions {
}

export declare function parametersWithElse(context: SpecialWordsContext, elseParam: string, options?: ParametersWithElseOptionalParams): Promise<void>;

export declare interface ParametersWithElseOptionalParams extends OperationOptions {
}

export declare function parametersWithExcept(context: SpecialWordsContext, except: string, options?: ParametersWithExceptOptionalParams): Promise<void>;

export declare interface ParametersWithExceptOptionalParams extends OperationOptions {
}

export declare function parametersWithExec(context: SpecialWordsContext, exec: string, options?: ParametersWithExecOptionalParams): Promise<void>;

export declare interface ParametersWithExecOptionalParams extends OperationOptions {
}

export declare function parametersWithFinally(context: SpecialWordsContext, finallyParam: string, options?: ParametersWithFinallyOptionalParams): Promise<void>;

export declare interface ParametersWithFinallyOptionalParams extends OperationOptions {
}

export declare function parametersWithFor(context: SpecialWordsContext, forParam: string, options?: ParametersWithForOptionalParams): Promise<void>;

export declare interface ParametersWithForOptionalParams extends OperationOptions {
}

export declare function parametersWithFrom(context: SpecialWordsContext, fromParam: string, options?: ParametersWithFromOptionalParams): Promise<void>;

export declare interface ParametersWithFromOptionalParams extends OperationOptions {
}

export declare function parametersWithGlobal(context: SpecialWordsContext, global: string, options?: ParametersWithGlobalOptionalParams): Promise<void>;

export declare interface ParametersWithGlobalOptionalParams extends OperationOptions {
}

export declare function parametersWithIf(context: SpecialWordsContext, ifParam: string, options?: ParametersWithIfOptionalParams): Promise<void>;

export declare interface ParametersWithIfOptionalParams extends OperationOptions {
}

export declare function parametersWithImport(context: SpecialWordsContext, importParam: string, options?: ParametersWithImportOptionalParams): Promise<void>;

export declare interface ParametersWithImportOptionalParams extends OperationOptions {
}

export declare function parametersWithIn(context: SpecialWordsContext, inParam: string, options?: ParametersWithInOptionalParams): Promise<void>;

export declare interface ParametersWithInOptionalParams extends OperationOptions {
}

export declare function parametersWithIs(context: SpecialWordsContext, is: string, options?: ParametersWithIsOptionalParams): Promise<void>;

export declare interface ParametersWithIsOptionalParams extends OperationOptions {
}

export declare function parametersWithLambda(context: SpecialWordsContext, lambda: string, options?: ParametersWithLambdaOptionalParams): Promise<void>;

export declare interface ParametersWithLambdaOptionalParams extends OperationOptions {
}

export declare function parametersWithNot(context: SpecialWordsContext, not: string, options?: ParametersWithNotOptionalParams): Promise<void>;

export declare interface ParametersWithNotOptionalParams extends OperationOptions {
}

export declare function parametersWithOr(context: SpecialWordsContext, or: string, options?: ParametersWithOrOptionalParams): Promise<void>;

export declare interface ParametersWithOrOptionalParams extends OperationOptions {
}

export declare function parametersWithPass(context: SpecialWordsContext, pass: string, options?: ParametersWithPassOptionalParams): Promise<void>;

export declare interface ParametersWithPassOptionalParams extends OperationOptions {
}

export declare function parametersWithRaise(context: SpecialWordsContext, raise: string, options?: ParametersWithRaiseOptionalParams): Promise<void>;

export declare interface ParametersWithRaiseOptionalParams extends OperationOptions {
}

export declare function parametersWithReturn(context: SpecialWordsContext, returnParam: string, options?: ParametersWithReturnOptionalParams): Promise<void>;

export declare interface ParametersWithReturnOptionalParams extends OperationOptions {
}

export declare function parametersWithTry(context: SpecialWordsContext, tryParam: string, options?: ParametersWithTryOptionalParams): Promise<void>;

export declare interface ParametersWithTryOptionalParams extends OperationOptions {
}

export declare function parametersWithWhile(context: SpecialWordsContext, whileParam: string, options?: ParametersWithWhileOptionalParams): Promise<void>;

export declare interface ParametersWithWhileOptionalParams extends OperationOptions {
}

export declare function parametersWithWith(context: SpecialWordsContext, withParam: string, options?: ParametersWithWithOptionalParams): Promise<void>;

export declare interface ParametersWithWithOptionalParams extends OperationOptions {
}

export declare function parametersWithYield(context: SpecialWordsContext, yieldParam: string, options?: ParametersWithYieldOptionalParams): Promise<void>;

export declare interface ParametersWithYieldOptionalParams extends OperationOptions {
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

export declare interface SameAsModel {
    SameAsModel: string;
}

export declare class SpecialWordsClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: SpecialWordsClientOptionalParams);
    readonly models: ModelsOperations;
    readonly modelProperties: ModelPropertiesOperations;
    readonly operations: OperationsOperations;
    readonly parameters: ParametersOperations;
}

export declare interface SpecialWordsClientOptionalParams extends ClientOptions {
}

export declare interface SpecialWordsContext extends Client {
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
