import { ClientOptions } from '@typespec/ts-http-runtime';
import { OperationOptions } from '@typespec/ts-http-runtime';
import { Pipeline } from '@typespec/ts-http-runtime';

export declare class ArrayClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: ArrayClientOptionalParams);
    readonly property: PropertyOperations;
}

export declare interface ArrayClientOptionalParams extends ClientOptions {
    endpointParam?: string;
}

export declare type Colors = "blue" | "red" | "green";

export declare type ColorsExtensibleEnum = "blue" | "red" | "green";

export declare interface CommaDelimitedArrayProperty {
    value: string[];
}

export declare interface CommaDelimitedEnumArrayProperty {
    value: Colors[];
}

export declare interface CommaDelimitedExtensibleEnumArrayProperty {
    value: ColorsExtensibleEnum[];
}

export declare interface NewlineDelimitedArrayProperty {
    value: string[];
}

export declare interface NewlineDelimitedEnumArrayProperty {
    value: Colors[];
}

export declare interface NewlineDelimitedExtensibleEnumArrayProperty {
    value: ColorsExtensibleEnum[];
}

export declare interface PipeDelimitedArrayProperty {
    value: string[];
}

export declare interface PipeDelimitedEnumArrayProperty {
    value: Colors[];
}

export declare interface PipeDelimitedExtensibleEnumArrayProperty {
    value: ColorsExtensibleEnum[];
}

declare interface PropertyCommaDelimitedOptionalParams extends OperationOptions {
}

declare interface PropertyEnumCommaDelimitedOptionalParams extends OperationOptions {
}

declare interface PropertyEnumNewlineDelimitedOptionalParams extends OperationOptions {
}

declare interface PropertyEnumPipeDelimitedOptionalParams extends OperationOptions {
}

declare interface PropertyEnumSpaceDelimitedOptionalParams extends OperationOptions {
}

declare interface PropertyExtensibleEnumCommaDelimitedOptionalParams extends OperationOptions {
}

declare interface PropertyExtensibleEnumNewlineDelimitedOptionalParams extends OperationOptions {
}

declare interface PropertyExtensibleEnumPipeDelimitedOptionalParams extends OperationOptions {
}

declare interface PropertyExtensibleEnumSpaceDelimitedOptionalParams extends OperationOptions {
}

declare interface PropertyNewlineDelimitedOptionalParams extends OperationOptions {
}

export declare interface PropertyOperations {
    extensibleEnumNewlineDelimited: (body: NewlineDelimitedExtensibleEnumArrayProperty, options?: PropertyExtensibleEnumNewlineDelimitedOptionalParams) => Promise<NewlineDelimitedExtensibleEnumArrayProperty>;
    extensibleEnumPipeDelimited: (body: PipeDelimitedExtensibleEnumArrayProperty, options?: PropertyExtensibleEnumPipeDelimitedOptionalParams) => Promise<PipeDelimitedExtensibleEnumArrayProperty>;
    extensibleEnumSpaceDelimited: (body: SpaceDelimitedExtensibleEnumArrayProperty, options?: PropertyExtensibleEnumSpaceDelimitedOptionalParams) => Promise<SpaceDelimitedExtensibleEnumArrayProperty>;
    extensibleEnumCommaDelimited: (body: CommaDelimitedExtensibleEnumArrayProperty, options?: PropertyExtensibleEnumCommaDelimitedOptionalParams) => Promise<CommaDelimitedExtensibleEnumArrayProperty>;
    enumNewlineDelimited: (body: NewlineDelimitedEnumArrayProperty, options?: PropertyEnumNewlineDelimitedOptionalParams) => Promise<NewlineDelimitedEnumArrayProperty>;
    enumPipeDelimited: (body: PipeDelimitedEnumArrayProperty, options?: PropertyEnumPipeDelimitedOptionalParams) => Promise<PipeDelimitedEnumArrayProperty>;
    enumSpaceDelimited: (body: SpaceDelimitedEnumArrayProperty, options?: PropertyEnumSpaceDelimitedOptionalParams) => Promise<SpaceDelimitedEnumArrayProperty>;
    enumCommaDelimited: (body: CommaDelimitedEnumArrayProperty, options?: PropertyEnumCommaDelimitedOptionalParams) => Promise<CommaDelimitedEnumArrayProperty>;
    newlineDelimited: (body: NewlineDelimitedArrayProperty, options?: PropertyNewlineDelimitedOptionalParams) => Promise<NewlineDelimitedArrayProperty>;
    pipeDelimited: (body: PipeDelimitedArrayProperty, options?: PropertyPipeDelimitedOptionalParams) => Promise<PipeDelimitedArrayProperty>;
    spaceDelimited: (body: SpaceDelimitedArrayProperty, options?: PropertySpaceDelimitedOptionalParams) => Promise<SpaceDelimitedArrayProperty>;
    commaDelimited: (body: CommaDelimitedArrayProperty, options?: PropertyCommaDelimitedOptionalParams) => Promise<CommaDelimitedArrayProperty>;
}

declare interface PropertyPipeDelimitedOptionalParams extends OperationOptions {
}

declare interface PropertySpaceDelimitedOptionalParams extends OperationOptions {
}

export declare interface SpaceDelimitedArrayProperty {
    value: string[];
}

export declare interface SpaceDelimitedEnumArrayProperty {
    value: Colors[];
}

export declare interface SpaceDelimitedExtensibleEnumArrayProperty {
    value: ColorsExtensibleEnum[];
}

export { }
