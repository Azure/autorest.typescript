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

export declare interface ClientOptionalParams extends OperationOptions {
}

export declare interface CompatibleWithEncodedNameOptionalParams extends OperationOptions {
}

export declare type ExtensibleEnum = "value1" | "value2";

export declare interface LanguageClientNameModel {
    tsName: boolean;
}

export declare interface LanguageOptionalParams extends OperationOptions {
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
    response(options?: ResponseOptionalParams): Promise<void>;
    request(clientName: string, options?: RequestOptionalParams): Promise<void>;
    compatibleWithEncodedName(body: ClientNameAndJsonEncodedNameModel, options?: CompatibleWithEncodedNameOptionalParams): Promise<void>;
    language(body: LanguageClientNameModel, options?: LanguageOptionalParams): Promise<void>;
    client(body: ClientNameModel, options?: ClientOptionalParams): Promise<void>;
    parameter(clientName: string, options?: ParameterOptionalParams): Promise<void>;
    clientName(options?: ClientNameOptionalParams): Promise<void>;
    readonly unionEnum: UnionEnumOperations;
    readonly modelClient: ModelClientOperations;
}

export declare interface NamingClientOptionalParams extends ClientOptions {
}

export declare interface ParameterOptionalParams extends OperationOptions {
}

export declare interface RequestOptionalParams extends OperationOptions {
}

export declare interface ResponseOptionalParams extends OperationOptions {
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
