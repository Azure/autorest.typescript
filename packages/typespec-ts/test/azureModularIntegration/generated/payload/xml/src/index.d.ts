import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare interface ModelWithArrayOfModel {
    items: SimpleModel[];
}

export declare interface ModelWithArrayOfModelValueGetOptionalParams extends OperationOptions {
}

export declare interface ModelWithArrayOfModelValueOperations {
    put: (input: ModelWithArrayOfModel, options?: ModelWithArrayOfModelValuePutOptionalParams) => Promise<void>;
    get: (options?: ModelWithArrayOfModelValueGetOptionalParams) => Promise<ModelWithArrayOfModel>;
}

export declare interface ModelWithArrayOfModelValuePutOptionalParams extends OperationOptions {
}

export declare interface ModelWithAttributes {
    id1: number;
    id2: string;
    enabled: boolean;
}

export declare interface ModelWithAttributesValueGetOptionalParams extends OperationOptions {
}

export declare interface ModelWithAttributesValueOperations {
    put: (input: ModelWithAttributes, options?: ModelWithAttributesValuePutOptionalParams) => Promise<void>;
    get: (options?: ModelWithAttributesValueGetOptionalParams) => Promise<ModelWithAttributes>;
}

export declare interface ModelWithAttributesValuePutOptionalParams extends OperationOptions {
}

export declare interface ModelWithDatetime {
    rfc3339: Date;
    rfc7231: Date;
}

export declare interface ModelWithDatetimeValueGetOptionalParams extends OperationOptions {
}

export declare interface ModelWithDatetimeValueOperations {
    put: (input: ModelWithDatetime, options?: ModelWithDatetimeValuePutOptionalParams) => Promise<void>;
    get: (options?: ModelWithDatetimeValueGetOptionalParams) => Promise<ModelWithDatetime>;
}

export declare interface ModelWithDatetimeValuePutOptionalParams extends OperationOptions {
}

export declare interface ModelWithDictionary {
    metadata: Record<string, string>;
}

export declare interface ModelWithDictionaryValueGetOptionalParams extends OperationOptions {
}

export declare interface ModelWithDictionaryValueOperations {
    put: (input: ModelWithDictionary, options?: ModelWithDictionaryValuePutOptionalParams) => Promise<void>;
    get: (options?: ModelWithDictionaryValueGetOptionalParams) => Promise<ModelWithDictionary>;
}

export declare interface ModelWithDictionaryValuePutOptionalParams extends OperationOptions {
}

export declare interface ModelWithEmptyArray {
    items: SimpleModel[];
}

export declare interface ModelWithEmptyArrayValueGetOptionalParams extends OperationOptions {
}

export declare interface ModelWithEmptyArrayValueOperations {
    put: (input: ModelWithEmptyArray, options?: ModelWithEmptyArrayValuePutOptionalParams) => Promise<void>;
    get: (options?: ModelWithEmptyArrayValueGetOptionalParams) => Promise<ModelWithEmptyArray>;
}

export declare interface ModelWithEmptyArrayValuePutOptionalParams extends OperationOptions {
}

export declare interface ModelWithEncodedNames {
    modelData: SimpleModel;
    colors: string[];
}

export declare interface ModelWithEncodedNamesValueGetOptionalParams extends OperationOptions {
}

export declare interface ModelWithEncodedNamesValueOperations {
    put: (input: ModelWithEncodedNames, options?: ModelWithEncodedNamesValuePutOptionalParams) => Promise<void>;
    get: (options?: ModelWithEncodedNamesValueGetOptionalParams) => Promise<ModelWithEncodedNames>;
}

export declare interface ModelWithEncodedNamesValuePutOptionalParams extends OperationOptions {
}

export declare interface ModelWithEnum {
    status: Status;
}

export declare interface ModelWithEnumValueGetOptionalParams extends OperationOptions {
}

export declare interface ModelWithEnumValueOperations {
    put: (input: ModelWithEnum, options?: ModelWithEnumValuePutOptionalParams) => Promise<void>;
    get: (options?: ModelWithEnumValueGetOptionalParams) => Promise<ModelWithEnum>;
}

export declare interface ModelWithEnumValuePutOptionalParams extends OperationOptions {
}

export declare interface ModelWithOptionalField {
    item: string;
    value?: number;
}

export declare interface ModelWithOptionalFieldValueGetOptionalParams extends OperationOptions {
}

export declare interface ModelWithOptionalFieldValueOperations {
    put: (input: ModelWithOptionalField, options?: ModelWithOptionalFieldValuePutOptionalParams) => Promise<void>;
    get: (options?: ModelWithOptionalFieldValueGetOptionalParams) => Promise<ModelWithOptionalField>;
}

export declare interface ModelWithOptionalFieldValuePutOptionalParams extends OperationOptions {
}

export declare interface ModelWithRenamedArrays {
    colors: string[];
    counts: number[];
}

export declare interface ModelWithRenamedArraysValueGetOptionalParams extends OperationOptions {
}

export declare interface ModelWithRenamedArraysValueOperations {
    put: (input: ModelWithRenamedArrays, options?: ModelWithRenamedArraysValuePutOptionalParams) => Promise<void>;
    get: (options?: ModelWithRenamedArraysValueGetOptionalParams) => Promise<ModelWithRenamedArrays>;
}

export declare interface ModelWithRenamedArraysValuePutOptionalParams extends OperationOptions {
}

export declare interface ModelWithRenamedFields {
    inputData: SimpleModel;
    outputData: SimpleModel;
}

export declare interface ModelWithRenamedFieldsValueGetOptionalParams extends OperationOptions {
}

export declare interface ModelWithRenamedFieldsValueOperations {
    put: (input: ModelWithRenamedFields, options?: ModelWithRenamedFieldsValuePutOptionalParams) => Promise<void>;
    get: (options?: ModelWithRenamedFieldsValueGetOptionalParams) => Promise<ModelWithRenamedFields>;
}

export declare interface ModelWithRenamedFieldsValuePutOptionalParams extends OperationOptions {
}

export declare interface ModelWithSimpleArrays {
    colors: string[];
    counts: number[];
}

export declare interface ModelWithSimpleArraysValueGetOptionalParams extends OperationOptions {
}

export declare interface ModelWithSimpleArraysValueOperations {
    put: (input: ModelWithSimpleArrays, options?: ModelWithSimpleArraysValuePutOptionalParams) => Promise<void>;
    get: (options?: ModelWithSimpleArraysValueGetOptionalParams) => Promise<ModelWithSimpleArrays>;
}

export declare interface ModelWithSimpleArraysValuePutOptionalParams extends OperationOptions {
}

export declare interface ModelWithText {
    language: string;
    content: string;
}

export declare interface ModelWithTextValueGetOptionalParams extends OperationOptions {
}

export declare interface ModelWithTextValueOperations {
    put: (input: ModelWithText, options?: ModelWithTextValuePutOptionalParams) => Promise<void>;
    get: (options?: ModelWithTextValueGetOptionalParams) => Promise<ModelWithText>;
}

export declare interface ModelWithTextValuePutOptionalParams extends OperationOptions {
}

export declare interface ModelWithUnwrappedArray {
    colors: string[];
    counts: number[];
}

export declare interface ModelWithUnwrappedArrayValueGetOptionalParams extends OperationOptions {
}

export declare interface ModelWithUnwrappedArrayValueOperations {
    put: (input: ModelWithUnwrappedArray, options?: ModelWithUnwrappedArrayValuePutOptionalParams) => Promise<void>;
    get: (options?: ModelWithUnwrappedArrayValueGetOptionalParams) => Promise<ModelWithUnwrappedArray>;
}

export declare interface ModelWithUnwrappedArrayValuePutOptionalParams extends OperationOptions {
}

export declare interface SimpleModel {
    name: string;
    age: number;
}

export declare interface SimpleModelValueGetOptionalParams extends OperationOptions {
}

export declare interface SimpleModelValueOperations {
    put: (input: SimpleModel, options?: SimpleModelValuePutOptionalParams) => Promise<void>;
    get: (options?: SimpleModelValueGetOptionalParams) => Promise<SimpleModel>;
}

export declare interface SimpleModelValuePutOptionalParams extends OperationOptions {
}

export declare type Status = "pending" | "success" | "error";

export declare class XmlClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: XmlClientOptionalParams);
    readonly xmlErrorValue: XmlErrorValueOperations;
    readonly modelWithDatetimeValue: ModelWithDatetimeValueOperations;
    readonly modelWithEnumValue: ModelWithEnumValueOperations;
    readonly modelWithEncodedNamesValue: ModelWithEncodedNamesValueOperations;
    readonly modelWithDictionaryValue: ModelWithDictionaryValueOperations;
    readonly modelWithTextValue: ModelWithTextValueOperations;
    readonly modelWithEmptyArrayValue: ModelWithEmptyArrayValueOperations;
    readonly modelWithRenamedFieldsValue: ModelWithRenamedFieldsValueOperations;
    readonly modelWithRenamedArraysValue: ModelWithRenamedArraysValueOperations;
    readonly modelWithUnwrappedArrayValue: ModelWithUnwrappedArrayValueOperations;
    readonly modelWithAttributesValue: ModelWithAttributesValueOperations;
    readonly modelWithOptionalFieldValue: ModelWithOptionalFieldValueOperations;
    readonly modelWithArrayOfModelValue: ModelWithArrayOfModelValueOperations;
    readonly modelWithSimpleArraysValue: ModelWithSimpleArraysValueOperations;
    readonly simpleModelValue: SimpleModelValueOperations;
}

export declare interface XmlClientOptionalParams extends ClientOptions {
}

export declare interface XmlErrorBody {
    message: string;
    code: number;
}

export declare interface XmlErrorValueGetOptionalParams extends OperationOptions {
}

export declare interface XmlErrorValueOperations {
    get: (options?: XmlErrorValueGetOptionalParams) => Promise<SimpleModel>;
}

export { }
