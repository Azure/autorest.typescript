import { ClientOptions } from '@azure-rest/core-client';
import { isRestError } from '@azure/core-rest-pipeline';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';
import { RestError } from '@azure/core-rest-pipeline';

export declare type BulletPointsEnum = "Simple" | "Bold" | "Italic";

export declare interface BulletPointsModel {
    prop: BulletPointsEnum;
}

export declare class DocumentationClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: DocumentationClientOptionalParams);
    readonly textFormatting: TextFormattingOperations;
    readonly lists: ListsOperations;
}

export declare interface DocumentationClientOptionalParams extends ClientOptions {
    endpointParam?: string;
}

export { isRestError }

declare interface ListsBulletPointsModelOptionalParams extends OperationOptions {
}

declare interface ListsBulletPointsOpOptionalParams extends OperationOptions {
}

declare interface ListsNumberedOptionalParams extends OperationOptions {
}

export declare interface ListsOperations {
    numbered: (options?: ListsNumberedOptionalParams) => Promise<void>;
    bulletPointsModel: (input: BulletPointsModel, options?: ListsBulletPointsModelOptionalParams) => Promise<void>;
    bulletPointsOp: (options?: ListsBulletPointsOpOptionalParams) => Promise<void>;
}

export { RestError }

declare interface TextFormattingBoldTextOptionalParams extends OperationOptions {
}

declare interface TextFormattingCombinedFormattingOptionalParams extends OperationOptions {
}

declare interface TextFormattingItalicTextOptionalParams extends OperationOptions {
}

export declare interface TextFormattingOperations {
    combinedFormatting: (options?: TextFormattingCombinedFormattingOptionalParams) => Promise<void>;
    italicText: (options?: TextFormattingItalicTextOptionalParams) => Promise<void>;
    boldText: (options?: TextFormattingBoldTextOptionalParams) => Promise<void>;
}

export { }
