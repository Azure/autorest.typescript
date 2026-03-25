import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare type ClientExtensibleEnum = "value1";

export declare interface ClientModel {
    defaultName: boolean;
}

export declare interface ClientNameAndJsonEncodedNameModel {
    clientName: boolean;
}

export declare interface ClientNameModel {
    clientName: boolean;
}

export declare interface ClientNameOptionalParams extends OperationOptions {
}

export declare type ExtensibleEnum = "value1" | "value2";

export declare interface HeaderOperations {
    response: (options?: HeaderResponseOptionalParams) => Promise<void>;
    request: (clientName: string, options?: HeaderRequestOptionalParams) => Promise<void>;
}

export declare interface HeaderRequestOptionalParams extends OperationOptions {
}

export declare interface HeaderResponseOptionalParams extends OperationOptions {
}

export declare interface LanguageClientNameModel {
    tsName: boolean;
}

export declare interface ModelClientClientOptionalParams extends OperationOptions {
}

export declare interface ModelClientLanguageOptionalParams extends OperationOptions {
}

export declare interface ModelClientOperations {
    language: (body: TSModel, options?: ModelClientLanguageOptionalParams) => Promise<void>;
    client: (body: ClientModel, options?: ModelClientClientOptionalParams) => Promise<void>;
}

export declare class NamingClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: NamingClientOptionalParams);
    parameter(clientName: string, options?: ParameterOptionalParams): Promise<void>;
    clientName(options?: ClientNameOptionalParams): Promise<void>;
    readonly unionEnum: UnionEnumOperations;
    readonly modelClient: ModelClientOperations;
    readonly header: HeaderOperations;
    readonly property: PropertyOperations;
}

export declare interface NamingClientOptionalParams extends ClientOptions {
}

export declare interface ParameterOptionalParams extends OperationOptions {
}

export declare interface PropertyClientOptionalParams extends OperationOptions {
}

export declare interface PropertyCompatibleWithEncodedNameOptionalParams extends OperationOptions {
}

export declare interface PropertyLanguageOptionalParams extends OperationOptions {
}

export declare interface PropertyOperations {
    compatibleWithEncodedName: (body: ClientNameAndJsonEncodedNameModel, options?: PropertyCompatibleWithEncodedNameOptionalParams) => Promise<void>;
    language: (body: LanguageClientNameModel, options?: PropertyLanguageOptionalParams) => Promise<void>;
    client: (body: ClientNameModel, options?: PropertyClientOptionalParams) => Promise<void>;
}

export declare interface TSModel {
    defaultName: boolean;
}

export declare interface UnionEnumOperations {
    unionEnumMemberName: (body: ExtensibleEnum, options?: UnionEnumUnionEnumMemberNameOptionalParams) => Promise<void>;
    unionEnumName: (body: ClientExtensibleEnum, options?: UnionEnumUnionEnumNameOptionalParams) => Promise<void>;
}

export declare interface UnionEnumUnionEnumMemberNameOptionalParams extends OperationOptions {
}

export declare interface UnionEnumUnionEnumNameOptionalParams extends OperationOptions {
}

export { }
