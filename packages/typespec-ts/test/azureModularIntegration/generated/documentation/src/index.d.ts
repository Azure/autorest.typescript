import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

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
}

export declare interface ListsBulletPointsModelOptionalParams extends OperationOptions {
}

export declare interface ListsBulletPointsOpOptionalParams extends OperationOptions {
}

export declare interface ListsNumberedOptionalParams extends OperationOptions {
}

export declare interface ListsOperations {
    numbered: (options?: ListsNumberedOptionalParams) => Promise<void>;
    bulletPointsModel: (input: BulletPointsModel, options?: ListsBulletPointsModelOptionalParams) => Promise<void>;
    bulletPointsOp: (options?: ListsBulletPointsOpOptionalParams) => Promise<void>;
}

export declare interface TextFormattingBoldTextOptionalParams extends OperationOptions {
}

export declare interface TextFormattingCombinedFormattingOptionalParams extends OperationOptions {
}

export declare interface TextFormattingItalicTextOptionalParams extends OperationOptions {
}

export declare interface TextFormattingOperations {
    combinedFormatting: (options?: TextFormattingCombinedFormattingOptionalParams) => Promise<void>;
    italicText: (options?: TextFormattingItalicTextOptionalParams) => Promise<void>;
    boldText: (options?: TextFormattingBoldTextOptionalParams) => Promise<void>;
}

export { }
