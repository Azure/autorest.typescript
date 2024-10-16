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

export declare interface ModelPropertiesOperations {
    sameAsModel: (body: SameAsModel, options?: ModelPropertiesSameAsModelOptionalParams) => Promise<void>;
}

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
    withGlobal: (body: GlobalModel, options?: ModelsWithGlobalOptionalParams) => Promise<void>;
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

export declare interface ModelsWithAndOptionalParams extends OperationOptions {
}

export declare interface ModelsWithAsOptionalParams extends OperationOptions {
}

export declare interface ModelsWithAssertOptionalParams extends OperationOptions {
}

export declare interface ModelsWithAsyncOptionalParams extends OperationOptions {
}

export declare interface ModelsWithAwaitOptionalParams extends OperationOptions {
}

export declare interface ModelsWithBreakOptionalParams extends OperationOptions {
}

export declare interface ModelsWithClassOptionalParams extends OperationOptions {
}

export declare interface ModelsWithConstructorOptionalParams extends OperationOptions {
}

export declare interface ModelsWithContinueOptionalParams extends OperationOptions {
}

export declare interface ModelsWithDefOptionalParams extends OperationOptions {
}

export declare interface ModelsWithDelOptionalParams extends OperationOptions {
}

export declare interface ModelsWithElifOptionalParams extends OperationOptions {
}

export declare interface ModelsWithElseOptionalParams extends OperationOptions {
}

export declare interface ModelsWithExceptOptionalParams extends OperationOptions {
}

export declare interface ModelsWithExecOptionalParams extends OperationOptions {
}

export declare interface ModelsWithFinallyOptionalParams extends OperationOptions {
}

export declare interface ModelsWithForOptionalParams extends OperationOptions {
}

export declare interface ModelsWithFromOptionalParams extends OperationOptions {
}

export declare interface ModelsWithGlobalOptionalParams extends OperationOptions {
}

export declare interface ModelsWithIfOptionalParams extends OperationOptions {
}

export declare interface ModelsWithImportOptionalParams extends OperationOptions {
}

export declare interface ModelsWithInOptionalParams extends OperationOptions {
}

export declare interface ModelsWithIsOptionalParams extends OperationOptions {
}

export declare interface ModelsWithLambdaOptionalParams extends OperationOptions {
}

export declare interface ModelsWithNotOptionalParams extends OperationOptions {
}

export declare interface ModelsWithOrOptionalParams extends OperationOptions {
}

export declare interface ModelsWithPassOptionalParams extends OperationOptions {
}

export declare interface ModelsWithRaiseOptionalParams extends OperationOptions {
}

export declare interface ModelsWithReturnOptionalParams extends OperationOptions {
}

export declare interface ModelsWithTryOptionalParams extends OperationOptions {
}

export declare interface ModelsWithWhileOptionalParams extends OperationOptions {
}

export declare interface ModelsWithWithOptionalParams extends OperationOptions {
}

export declare interface ModelsWithYieldOptionalParams extends OperationOptions {
}

export declare interface Not {
    name: string;
}

export declare interface OperationsAndOptionalParams extends OperationOptions {
}

export declare interface OperationsAsOptionalParams extends OperationOptions {
}

export declare interface OperationsAssertOptionalParams extends OperationOptions {
}

export declare interface OperationsAsyncOptionalParams extends OperationOptions {
}

export declare interface OperationsAwaitOptionalParams extends OperationOptions {
}

export declare interface OperationsBreakOptionalParams extends OperationOptions {
}

export declare interface OperationsClassOptionalParams extends OperationOptions {
}

export declare interface OperationsConstructorOptionalParams extends OperationOptions {
}

export declare interface OperationsContinueOptionalParams extends OperationOptions {
}

export declare interface OperationsDefOptionalParams extends OperationOptions {
}

export declare interface OperationsDelOptionalParams extends OperationOptions {
}

export declare interface OperationsElifOptionalParams extends OperationOptions {
}

export declare interface OperationsElseOptionalParams extends OperationOptions {
}

export declare interface OperationsExceptOptionalParams extends OperationOptions {
}

export declare interface OperationsExecOptionalParams extends OperationOptions {
}

export declare interface OperationsFinallyOptionalParams extends OperationOptions {
}

export declare interface OperationsForOptionalParams extends OperationOptions {
}

export declare interface OperationsFromOptionalParams extends OperationOptions {
}

export declare interface OperationsGlobalOptionalParams extends OperationOptions {
}

export declare interface OperationsIfOptionalParams extends OperationOptions {
}

export declare interface OperationsImportOptionalParams extends OperationOptions {
}

export declare interface OperationsInOptionalParams extends OperationOptions {
}

export declare interface OperationsIsOptionalParams extends OperationOptions {
}

export declare interface OperationsLambdaOptionalParams extends OperationOptions {
}

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

export declare interface OperationsOrOptionalParams extends OperationOptions {
}

export declare interface OperationsPassOptionalParams extends OperationOptions {
}

export declare interface OperationsRaiseOptionalParams extends OperationOptions {
}

export declare interface OperationsReturnOptionalParams extends OperationOptions {
}

export declare interface OperationsTryOptionalParams extends OperationOptions {
}

export declare interface OperationsWhileOptionalParams extends OperationOptions {
}

export declare interface OperationsWithOptionalParams extends OperationOptions {
}

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

export declare interface ParametersWithAndOptionalParams extends OperationOptions {
}

export declare interface ParametersWithAsOptionalParams extends OperationOptions {
}

export declare interface ParametersWithAssertOptionalParams extends OperationOptions {
}

export declare interface ParametersWithAsyncOptionalParams extends OperationOptions {
}

export declare interface ParametersWithAwaitOptionalParams extends OperationOptions {
}

export declare interface ParametersWithBreakOptionalParams extends OperationOptions {
}

export declare interface ParametersWithCancellationTokenOptionalParams extends OperationOptions {
}

export declare interface ParametersWithClassOptionalParams extends OperationOptions {
}

export declare interface ParametersWithConstructorOptionalParams extends OperationOptions {
}

export declare interface ParametersWithContinueOptionalParams extends OperationOptions {
}

export declare interface ParametersWithDefOptionalParams extends OperationOptions {
}

export declare interface ParametersWithDelOptionalParams extends OperationOptions {
}

export declare interface ParametersWithElifOptionalParams extends OperationOptions {
}

export declare interface ParametersWithElseOptionalParams extends OperationOptions {
}

export declare interface ParametersWithExceptOptionalParams extends OperationOptions {
}

export declare interface ParametersWithExecOptionalParams extends OperationOptions {
}

export declare interface ParametersWithFinallyOptionalParams extends OperationOptions {
}

export declare interface ParametersWithForOptionalParams extends OperationOptions {
}

export declare interface ParametersWithFromOptionalParams extends OperationOptions {
}

export declare interface ParametersWithGlobalOptionalParams extends OperationOptions {
}

export declare interface ParametersWithIfOptionalParams extends OperationOptions {
}

export declare interface ParametersWithImportOptionalParams extends OperationOptions {
}

export declare interface ParametersWithInOptionalParams extends OperationOptions {
}

export declare interface ParametersWithIsOptionalParams extends OperationOptions {
}

export declare interface ParametersWithLambdaOptionalParams extends OperationOptions {
}

export declare interface ParametersWithNotOptionalParams extends OperationOptions {
}

export declare interface ParametersWithOrOptionalParams extends OperationOptions {
}

export declare interface ParametersWithPassOptionalParams extends OperationOptions {
}

export declare interface ParametersWithRaiseOptionalParams extends OperationOptions {
}

export declare interface ParametersWithReturnOptionalParams extends OperationOptions {
}

export declare interface ParametersWithTryOptionalParams extends OperationOptions {
}

export declare interface ParametersWithWhileOptionalParams extends OperationOptions {
}

export declare interface ParametersWithWithOptionalParams extends OperationOptions {
}

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
    sameAsModel: string;
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
