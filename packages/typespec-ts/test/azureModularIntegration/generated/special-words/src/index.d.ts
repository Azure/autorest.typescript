import { ClientOptions } from '@azure-rest/core-client';
import { isRestError } from '@azure/core-rest-pipeline';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';
import { RestError } from '@azure/core-rest-pipeline';

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

export declare type ExtensibleString = "and" | "as" | "assert" | "async" | "await" | "break" | "class" | "constructor" | "continue" | "def" | "del" | "elif" | "else" | "except" | "exec" | "finally" | "for" | "from" | "global" | "if" | "import" | "in" | "is" | "lambda" | "not" | "or" | "pass" | "raise" | "return" | "try" | "while" | "with" | "yield";

export declare interface ExtensibleStringsOperations {
    putExtensibleStringValue: (body: ExtensibleString, options?: ExtensibleStringsPutExtensibleStringValueOptionalParams) => Promise<ExtensibleStringsPutExtensibleStringValueResponse>;
}

declare interface ExtensibleStringsPutExtensibleStringValueOptionalParams extends OperationOptions {
}

export declare type ExtensibleStringsPutExtensibleStringValueResponse = {
    body: ExtensibleString;
};

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

export { isRestError }

export declare interface Lambda {
    name: string;
}

declare interface ModelPropertiesDictMethodsOptionalParams extends OperationOptions {
}

export declare interface ModelPropertiesOperations {
    withList: (body: ModelWithList, options?: ModelPropertiesWithListOptionalParams) => Promise<void>;
    dictMethods: (body: DictMethods, options?: ModelPropertiesDictMethodsOptionalParams) => Promise<void>;
    sameAsModel: (body: SameAsModel, options?: ModelPropertiesSameAsModelOptionalParams) => Promise<void>;
}

declare interface ModelPropertiesSameAsModelOptionalParams extends OperationOptions {
}

declare interface ModelPropertiesWithListOptionalParams extends OperationOptions {
}

export declare interface ModelsOperations {
    withYield: (body: Yield, options?: ModelsWithYieldOptionalParams) => Promise<void>;
    withWith: (body: With, options?: ModelsWithWithOptionalParams) => Promise<void>;
    withWhile: (body: While, options?: ModelsWithWhileOptionalParams) => Promise<void>;
    withTry: (body: Try, options?: ModelsWithTryOptionalParams) => Promise<void>;
    withReturn: (body: Return, options?: ModelsWithReturnOptionalParams) => Promise<void>;
    withRaise: (body: Raise, options?: ModelsWithRaiseOptionalParams) => Promise<void>;
    withPass: (body: Pass, options?: ModelsWithPassOptionalParams) => Promise<void>;
    withOr: (body: Or, options?: ModelsWithOrOptionalParams) => Promise<void>;
    withNot: (body: Not, options?: ModelsWithNotOptionalParams) => Promise<void>;
    withLambda: (body: Lambda, options?: ModelsWithLambdaOptionalParams) => Promise<void>;
    withIs: (body: Is, options?: ModelsWithIsOptionalParams) => Promise<void>;
    withIn: (body: In, options?: ModelsWithInOptionalParams) => Promise<void>;
    withImport: (body: Import, options?: ModelsWithImportOptionalParams) => Promise<void>;
    withIf: (body: If, options?: ModelsWithIfOptionalParams) => Promise<void>;
    withGlobal: (body: GlobalModel, options?: ModelsWithGlobalOptionalParams) => Promise<void>;
    withFrom: (body: From, options?: ModelsWithFromOptionalParams) => Promise<void>;
    withFor: (body: For, options?: ModelsWithForOptionalParams) => Promise<void>;
    withFinally: (body: Finally, options?: ModelsWithFinallyOptionalParams) => Promise<void>;
    withExec: (body: Exec, options?: ModelsWithExecOptionalParams) => Promise<void>;
    withExcept: (body: Except, options?: ModelsWithExceptOptionalParams) => Promise<void>;
    withElse: (body: Else, options?: ModelsWithElseOptionalParams) => Promise<void>;
    withElif: (body: Elif, options?: ModelsWithElifOptionalParams) => Promise<void>;
    withDel: (body: Del, options?: ModelsWithDelOptionalParams) => Promise<void>;
    withDef: (body: Def, options?: ModelsWithDefOptionalParams) => Promise<void>;
    withContinue: (body: Continue, options?: ModelsWithContinueOptionalParams) => Promise<void>;
    withConstructor: (body: Constructor, options?: ModelsWithConstructorOptionalParams) => Promise<void>;
    withClass: (body: Class, options?: ModelsWithClassOptionalParams) => Promise<void>;
    withBreak: (body: Break, options?: ModelsWithBreakOptionalParams) => Promise<void>;
    withAwait: (body: Await, options?: ModelsWithAwaitOptionalParams) => Promise<void>;
    withAsync: (body: Async, options?: ModelsWithAsyncOptionalParams) => Promise<void>;
    withAssert: (body: Assert, options?: ModelsWithAssertOptionalParams) => Promise<void>;
    withAs: (body: As, options?: ModelsWithAsOptionalParams) => Promise<void>;
    withAnd: (body: And, options?: ModelsWithAndOptionalParams) => Promise<void>;
}

declare interface ModelsWithAndOptionalParams extends OperationOptions {
}

declare interface ModelsWithAsOptionalParams extends OperationOptions {
}

declare interface ModelsWithAssertOptionalParams extends OperationOptions {
}

declare interface ModelsWithAsyncOptionalParams extends OperationOptions {
}

declare interface ModelsWithAwaitOptionalParams extends OperationOptions {
}

declare interface ModelsWithBreakOptionalParams extends OperationOptions {
}

declare interface ModelsWithClassOptionalParams extends OperationOptions {
}

declare interface ModelsWithConstructorOptionalParams extends OperationOptions {
}

declare interface ModelsWithContinueOptionalParams extends OperationOptions {
}

declare interface ModelsWithDefOptionalParams extends OperationOptions {
}

declare interface ModelsWithDelOptionalParams extends OperationOptions {
}

declare interface ModelsWithElifOptionalParams extends OperationOptions {
}

declare interface ModelsWithElseOptionalParams extends OperationOptions {
}

declare interface ModelsWithExceptOptionalParams extends OperationOptions {
}

declare interface ModelsWithExecOptionalParams extends OperationOptions {
}

declare interface ModelsWithFinallyOptionalParams extends OperationOptions {
}

declare interface ModelsWithForOptionalParams extends OperationOptions {
}

declare interface ModelsWithFromOptionalParams extends OperationOptions {
}

declare interface ModelsWithGlobalOptionalParams extends OperationOptions {
}

declare interface ModelsWithIfOptionalParams extends OperationOptions {
}

declare interface ModelsWithImportOptionalParams extends OperationOptions {
}

declare interface ModelsWithInOptionalParams extends OperationOptions {
}

declare interface ModelsWithIsOptionalParams extends OperationOptions {
}

declare interface ModelsWithLambdaOptionalParams extends OperationOptions {
}

declare interface ModelsWithNotOptionalParams extends OperationOptions {
}

declare interface ModelsWithOrOptionalParams extends OperationOptions {
}

declare interface ModelsWithPassOptionalParams extends OperationOptions {
}

declare interface ModelsWithRaiseOptionalParams extends OperationOptions {
}

declare interface ModelsWithReturnOptionalParams extends OperationOptions {
}

declare interface ModelsWithTryOptionalParams extends OperationOptions {
}

declare interface ModelsWithWhileOptionalParams extends OperationOptions {
}

declare interface ModelsWithWithOptionalParams extends OperationOptions {
}

declare interface ModelsWithYieldOptionalParams extends OperationOptions {
}

export declare interface ModelWithList {
    list: string;
}

export declare interface Not {
    name: string;
}

declare interface OperationsAndOptionalParams extends OperationOptions {
}

declare interface OperationsAsOptionalParams extends OperationOptions {
}

declare interface OperationsAssertOptionalParams extends OperationOptions {
}

declare interface OperationsAsyncOptionalParams extends OperationOptions {
}

declare interface OperationsAwaitOptionalParams extends OperationOptions {
}

declare interface OperationsBreakOptionalParams extends OperationOptions {
}

declare interface OperationsClassOptionalParams extends OperationOptions {
}

declare interface OperationsConstructorOptionalParams extends OperationOptions {
}

declare interface OperationsContinueOptionalParams extends OperationOptions {
}

declare interface OperationsDefOptionalParams extends OperationOptions {
}

declare interface OperationsDelOptionalParams extends OperationOptions {
}

declare interface OperationsElifOptionalParams extends OperationOptions {
}

declare interface OperationsElseOptionalParams extends OperationOptions {
}

declare interface OperationsExceptOptionalParams extends OperationOptions {
}

declare interface OperationsExecOptionalParams extends OperationOptions {
}

declare interface OperationsFinallyOptionalParams extends OperationOptions {
}

declare interface OperationsForOptionalParams extends OperationOptions {
}

declare interface OperationsFromOptionalParams extends OperationOptions {
}

declare interface OperationsGlobalOptionalParams extends OperationOptions {
}

declare interface OperationsIfOptionalParams extends OperationOptions {
}

declare interface OperationsImportOptionalParams extends OperationOptions {
}

declare interface OperationsInOptionalParams extends OperationOptions {
}

declare interface OperationsIsOptionalParams extends OperationOptions {
}

declare interface OperationsLambdaOptionalParams extends OperationOptions {
}

declare interface OperationsNotOptionalParams extends OperationOptions {
}

export declare interface OperationsOperations {
    yield: (options?: OperationsYieldOptionalParams) => Promise<void>;
    with: (options?: OperationsWithOptionalParams) => Promise<void>;
    while: (options?: OperationsWhileOptionalParams) => Promise<void>;
    try: (options?: OperationsTryOptionalParams) => Promise<void>;
    return: (options?: OperationsReturnOptionalParams) => Promise<void>;
    raise: (options?: OperationsRaiseOptionalParams) => Promise<void>;
    pass: (options?: OperationsPassOptionalParams) => Promise<void>;
    or: (options?: OperationsOrOptionalParams) => Promise<void>;
    not: (options?: OperationsNotOptionalParams) => Promise<void>;
    lambda: (options?: OperationsLambdaOptionalParams) => Promise<void>;
    is: (options?: OperationsIsOptionalParams) => Promise<void>;
    in: (options?: OperationsInOptionalParams) => Promise<void>;
    import: (options?: OperationsImportOptionalParams) => Promise<void>;
    if: (options?: OperationsIfOptionalParams) => Promise<void>;
    global: (options?: OperationsGlobalOptionalParams) => Promise<void>;
    from: (options?: OperationsFromOptionalParams) => Promise<void>;
    for: (options?: OperationsForOptionalParams) => Promise<void>;
    finally: (options?: OperationsFinallyOptionalParams) => Promise<void>;
    exec: (options?: OperationsExecOptionalParams) => Promise<void>;
    except: (options?: OperationsExceptOptionalParams) => Promise<void>;
    else: (options?: OperationsElseOptionalParams) => Promise<void>;
    elif: (options?: OperationsElifOptionalParams) => Promise<void>;
    del: (options?: OperationsDelOptionalParams) => Promise<void>;
    def: (options?: OperationsDefOptionalParams) => Promise<void>;
    continue: (options?: OperationsContinueOptionalParams) => Promise<void>;
    constructor: (options?: OperationsConstructorOptionalParams) => Promise<void>;
    class: (options?: OperationsClassOptionalParams) => Promise<void>;
    break: (options?: OperationsBreakOptionalParams) => Promise<void>;
    await: (options?: OperationsAwaitOptionalParams) => Promise<void>;
    async: (options?: OperationsAsyncOptionalParams) => Promise<void>;
    assert: (options?: OperationsAssertOptionalParams) => Promise<void>;
    as: (options?: OperationsAsOptionalParams) => Promise<void>;
    and: (options?: OperationsAndOptionalParams) => Promise<void>;
}

declare interface OperationsOrOptionalParams extends OperationOptions {
}

declare interface OperationsPassOptionalParams extends OperationOptions {
}

declare interface OperationsRaiseOptionalParams extends OperationOptions {
}

declare interface OperationsReturnOptionalParams extends OperationOptions {
}

declare interface OperationsTryOptionalParams extends OperationOptions {
}

declare interface OperationsWhileOptionalParams extends OperationOptions {
}

declare interface OperationsWithOptionalParams extends OperationOptions {
}

declare interface OperationsYieldOptionalParams extends OperationOptions {
}

export declare interface Or {
    name: string;
}

export declare interface ParametersOperations {
    withCancellationToken: (cancellationToken: string, options?: ParametersWithCancellationTokenOptionalParams) => Promise<void>;
    withYield: (yieldParam: string, options?: ParametersWithYieldOptionalParams) => Promise<void>;
    withWith: (withParam: string, options?: ParametersWithWithOptionalParams) => Promise<void>;
    withWhile: (whileParam: string, options?: ParametersWithWhileOptionalParams) => Promise<void>;
    withTry: (tryParam: string, options?: ParametersWithTryOptionalParams) => Promise<void>;
    withReturn: (returnParam: string, options?: ParametersWithReturnOptionalParams) => Promise<void>;
    withRaise: (raise: string, options?: ParametersWithRaiseOptionalParams) => Promise<void>;
    withPass: (pass: string, options?: ParametersWithPassOptionalParams) => Promise<void>;
    withOr: (or: string, options?: ParametersWithOrOptionalParams) => Promise<void>;
    withNot: (not: string, options?: ParametersWithNotOptionalParams) => Promise<void>;
    withLambda: (lambda: string, options?: ParametersWithLambdaOptionalParams) => Promise<void>;
    withIs: (is: string, options?: ParametersWithIsOptionalParams) => Promise<void>;
    withIn: (inParam: string, options?: ParametersWithInOptionalParams) => Promise<void>;
    withImport: (importParam: string, options?: ParametersWithImportOptionalParams) => Promise<void>;
    withIf: (ifParam: string, options?: ParametersWithIfOptionalParams) => Promise<void>;
    withGlobal: (global: string, options?: ParametersWithGlobalOptionalParams) => Promise<void>;
    withFrom: (fromParam: string, options?: ParametersWithFromOptionalParams) => Promise<void>;
    withFor: (forParam: string, options?: ParametersWithForOptionalParams) => Promise<void>;
    withFinally: (finallyParam: string, options?: ParametersWithFinallyOptionalParams) => Promise<void>;
    withExec: (exec: string, options?: ParametersWithExecOptionalParams) => Promise<void>;
    withExcept: (except: string, options?: ParametersWithExceptOptionalParams) => Promise<void>;
    withElse: (elseParam: string, options?: ParametersWithElseOptionalParams) => Promise<void>;
    withElif: (elif: string, options?: ParametersWithElifOptionalParams) => Promise<void>;
    withDel: (del: string, options?: ParametersWithDelOptionalParams) => Promise<void>;
    withDef: (def: string, options?: ParametersWithDefOptionalParams) => Promise<void>;
    withContinue: (continueParam: string, options?: ParametersWithContinueOptionalParams) => Promise<void>;
    withConstructor: (constructorParam: string, options?: ParametersWithConstructorOptionalParams) => Promise<void>;
    withClass: (classParam: string, options?: ParametersWithClassOptionalParams) => Promise<void>;
    withBreak: (breakParam: string, options?: ParametersWithBreakOptionalParams) => Promise<void>;
    withAwait: (awaitParam: string, options?: ParametersWithAwaitOptionalParams) => Promise<void>;
    withAsync: (asyncParam: string, options?: ParametersWithAsyncOptionalParams) => Promise<void>;
    withAssert: (assertParam: string, options?: ParametersWithAssertOptionalParams) => Promise<void>;
    withAs: (asParam: string, options?: ParametersWithAsOptionalParams) => Promise<void>;
    withAnd: (and: string, options?: ParametersWithAndOptionalParams) => Promise<void>;
}

declare interface ParametersWithAndOptionalParams extends OperationOptions {
}

declare interface ParametersWithAsOptionalParams extends OperationOptions {
}

declare interface ParametersWithAssertOptionalParams extends OperationOptions {
}

declare interface ParametersWithAsyncOptionalParams extends OperationOptions {
}

declare interface ParametersWithAwaitOptionalParams extends OperationOptions {
}

declare interface ParametersWithBreakOptionalParams extends OperationOptions {
}

declare interface ParametersWithCancellationTokenOptionalParams extends OperationOptions {
}

declare interface ParametersWithClassOptionalParams extends OperationOptions {
}

declare interface ParametersWithConstructorOptionalParams extends OperationOptions {
}

declare interface ParametersWithContinueOptionalParams extends OperationOptions {
}

declare interface ParametersWithDefOptionalParams extends OperationOptions {
}

declare interface ParametersWithDelOptionalParams extends OperationOptions {
}

declare interface ParametersWithElifOptionalParams extends OperationOptions {
}

declare interface ParametersWithElseOptionalParams extends OperationOptions {
}

declare interface ParametersWithExceptOptionalParams extends OperationOptions {
}

declare interface ParametersWithExecOptionalParams extends OperationOptions {
}

declare interface ParametersWithFinallyOptionalParams extends OperationOptions {
}

declare interface ParametersWithForOptionalParams extends OperationOptions {
}

declare interface ParametersWithFromOptionalParams extends OperationOptions {
}

declare interface ParametersWithGlobalOptionalParams extends OperationOptions {
}

declare interface ParametersWithIfOptionalParams extends OperationOptions {
}

declare interface ParametersWithImportOptionalParams extends OperationOptions {
}

declare interface ParametersWithInOptionalParams extends OperationOptions {
}

declare interface ParametersWithIsOptionalParams extends OperationOptions {
}

declare interface ParametersWithLambdaOptionalParams extends OperationOptions {
}

declare interface ParametersWithNotOptionalParams extends OperationOptions {
}

declare interface ParametersWithOrOptionalParams extends OperationOptions {
}

declare interface ParametersWithPassOptionalParams extends OperationOptions {
}

declare interface ParametersWithRaiseOptionalParams extends OperationOptions {
}

declare interface ParametersWithReturnOptionalParams extends OperationOptions {
}

declare interface ParametersWithTryOptionalParams extends OperationOptions {
}

declare interface ParametersWithWhileOptionalParams extends OperationOptions {
}

declare interface ParametersWithWithOptionalParams extends OperationOptions {
}

declare interface ParametersWithYieldOptionalParams extends OperationOptions {
}

export declare interface Pass {
    name: string;
}

export declare interface Raise {
    name: string;
}

export declare interface ReservedOperationBodyParamsOperations {
    withItems: (items: string[], options?: ReservedOperationBodyParamsWithItemsOptionalParams) => Promise<void>;
}

declare interface ReservedOperationBodyParamsWithItemsOptionalParams extends OperationOptions {
}

export { RestError }

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
    readonly parameters: ParametersOperations;
    readonly operations: OperationsOperations;
    readonly extensibleStrings: ExtensibleStringsOperations;
    readonly reservedOperationBodyParams: ReservedOperationBodyParamsOperations;
    readonly modelProperties: ModelPropertiesOperations;
    readonly models: ModelsOperations;
}

export declare interface SpecialWordsClientOptionalParams extends ClientOptions {
    endpointParam?: string;
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
