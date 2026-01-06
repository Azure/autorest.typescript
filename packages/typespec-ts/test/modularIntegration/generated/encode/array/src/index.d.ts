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
}

export declare interface CommaDelimitedArrayProperty {
    value: string[];
}

export declare interface NewlineDelimitedArrayProperty {
    value: string[];
}

export declare interface PipeDelimitedArrayProperty {
    value: string[];
}

export declare interface PropertyCommaDelimitedOptionalParams extends OperationOptions {
}

export declare interface PropertyNewlineDelimitedOptionalParams extends OperationOptions {
}

export declare interface PropertyOperations {
    newlineDelimited: (body: NewlineDelimitedArrayProperty, options?: PropertyNewlineDelimitedOptionalParams) => Promise<NewlineDelimitedArrayProperty>;
    pipeDelimited: (body: PipeDelimitedArrayProperty, options?: PropertyPipeDelimitedOptionalParams) => Promise<PipeDelimitedArrayProperty>;
    spaceDelimited: (body: SpaceDelimitedArrayProperty, options?: PropertySpaceDelimitedOptionalParams) => Promise<SpaceDelimitedArrayProperty>;
    commaDelimited: (body: CommaDelimitedArrayProperty, options?: PropertyCommaDelimitedOptionalParams) => Promise<CommaDelimitedArrayProperty>;
}

export declare interface PropertyPipeDelimitedOptionalParams extends OperationOptions {
}

export declare interface PropertySpaceDelimitedOptionalParams extends OperationOptions {
}

export declare interface SpaceDelimitedArrayProperty {
    value: string[];
}

export { }
