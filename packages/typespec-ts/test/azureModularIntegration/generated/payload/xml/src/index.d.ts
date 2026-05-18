import { ClientOptions } from '@azure-rest/core-client';
import { isRestError } from '@azure/core-rest-pipeline';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';
import { RestError } from '@azure/core-rest-pipeline';

export declare interface Author {
    name: string;
}

export declare interface Book {
    title: string;
}

export { isRestError }

export declare interface ModelWithArrayOfModel {
    items: SimpleModel[];
}

declare interface ModelWithArrayOfModelValueGetOptionalParams extends OperationOptions {
}

export declare interface ModelWithArrayOfModelValueOperations {
    put: (input: ModelWithArrayOfModel, options?: ModelWithArrayOfModelValuePutOptionalParams) => Promise<void>;
    get: (options?: ModelWithArrayOfModelValueGetOptionalParams) => Promise<ModelWithArrayOfModel>;
}

declare interface ModelWithArrayOfModelValuePutOptionalParams extends OperationOptions {
}

export declare interface ModelWithAttributes {
    id1: number;
    id2: string;
    enabled: boolean;
}

declare interface ModelWithAttributesValueGetOptionalParams extends OperationOptions {
}

export declare interface ModelWithAttributesValueOperations {
    put: (input: ModelWithAttributes, options?: ModelWithAttributesValuePutOptionalParams) => Promise<void>;
    get: (options?: ModelWithAttributesValueGetOptionalParams) => Promise<ModelWithAttributes>;
}

declare interface ModelWithAttributesValuePutOptionalParams extends OperationOptions {
}

export declare interface ModelWithDatetime {
    rfc3339: Date;
    rfc7231: Date;
}

declare interface ModelWithDatetimeValueGetOptionalParams extends OperationOptions {
}

export declare interface ModelWithDatetimeValueOperations {
    put: (input: ModelWithDatetime, options?: ModelWithDatetimeValuePutOptionalParams) => Promise<void>;
    get: (options?: ModelWithDatetimeValueGetOptionalParams) => Promise<ModelWithDatetime>;
}

declare interface ModelWithDatetimeValuePutOptionalParams extends OperationOptions {
}

export declare interface ModelWithDictionary {
    metadata: Record<string, string>;
}

declare interface ModelWithDictionaryValueGetOptionalParams extends OperationOptions {
}

export declare interface ModelWithDictionaryValueOperations {
    put: (input: ModelWithDictionary, options?: ModelWithDictionaryValuePutOptionalParams) => Promise<void>;
    get: (options?: ModelWithDictionaryValueGetOptionalParams) => Promise<ModelWithDictionary>;
}

declare interface ModelWithDictionaryValuePutOptionalParams extends OperationOptions {
}

export declare interface ModelWithEmptyArray {
    items: SimpleModel[];
}

declare interface ModelWithEmptyArrayValueGetOptionalParams extends OperationOptions {
}

export declare interface ModelWithEmptyArrayValueOperations {
    put: (input: ModelWithEmptyArray, options?: ModelWithEmptyArrayValuePutOptionalParams) => Promise<void>;
    get: (options?: ModelWithEmptyArrayValueGetOptionalParams) => Promise<ModelWithEmptyArray>;
}

declare interface ModelWithEmptyArrayValuePutOptionalParams extends OperationOptions {
}

export declare interface ModelWithEncodedNames {
    modelData: SimpleModel;
    colors: string[];
}

declare interface ModelWithEncodedNamesValueGetOptionalParams extends OperationOptions {
}

export declare interface ModelWithEncodedNamesValueOperations {
    put: (input: ModelWithEncodedNames, options?: ModelWithEncodedNamesValuePutOptionalParams) => Promise<void>;
    get: (options?: ModelWithEncodedNamesValueGetOptionalParams) => Promise<ModelWithEncodedNames>;
}

declare interface ModelWithEncodedNamesValuePutOptionalParams extends OperationOptions {
}

export declare interface ModelWithEnum {
    status: Status;
}

declare interface ModelWithEnumValueGetOptionalParams extends OperationOptions {
}

export declare interface ModelWithEnumValueOperations {
    put: (input: ModelWithEnum, options?: ModelWithEnumValuePutOptionalParams) => Promise<void>;
    get: (options?: ModelWithEnumValueGetOptionalParams) => Promise<ModelWithEnum>;
}

declare interface ModelWithEnumValuePutOptionalParams extends OperationOptions {
}

export declare interface ModelWithNamespace {
    id: number;
    title: string;
}

export declare interface ModelWithNamespaceOnProperties {
    id: number;
    title: string;
    author: string;
}

declare interface ModelWithNamespaceOnPropertiesValueGetOptionalParams extends OperationOptions {
}

export declare interface ModelWithNamespaceOnPropertiesValueOperations {
    put: (input: ModelWithNamespaceOnProperties, options?: ModelWithNamespaceOnPropertiesValuePutOptionalParams) => Promise<void>;
    get: (options?: ModelWithNamespaceOnPropertiesValueGetOptionalParams) => Promise<ModelWithNamespaceOnProperties>;
}

declare interface ModelWithNamespaceOnPropertiesValuePutOptionalParams extends OperationOptions {
}

declare interface ModelWithNamespaceValueGetOptionalParams extends OperationOptions {
}

export declare interface ModelWithNamespaceValueOperations {
    put: (input: ModelWithNamespace, options?: ModelWithNamespaceValuePutOptionalParams) => Promise<void>;
    get: (options?: ModelWithNamespaceValueGetOptionalParams) => Promise<ModelWithNamespace>;
}

declare interface ModelWithNamespaceValuePutOptionalParams extends OperationOptions {
}

export declare interface ModelWithNestedModel {
    nested: SimpleModel;
}

declare interface ModelWithNestedModelValueGetOptionalParams extends OperationOptions {
}

export declare interface ModelWithNestedModelValueOperations {
    put: (input: ModelWithNestedModel, options?: ModelWithNestedModelValuePutOptionalParams) => Promise<void>;
    get: (options?: ModelWithNestedModelValueGetOptionalParams) => Promise<ModelWithNestedModel>;
}

declare interface ModelWithNestedModelValuePutOptionalParams extends OperationOptions {
}

export declare interface ModelWithOptionalField {
    item: string;
    value?: number;
}

declare interface ModelWithOptionalFieldValueGetOptionalParams extends OperationOptions {
}

export declare interface ModelWithOptionalFieldValueOperations {
    put: (input: ModelWithOptionalField, options?: ModelWithOptionalFieldValuePutOptionalParams) => Promise<void>;
    get: (options?: ModelWithOptionalFieldValueGetOptionalParams) => Promise<ModelWithOptionalField>;
}

declare interface ModelWithOptionalFieldValuePutOptionalParams extends OperationOptions {
}

export declare interface ModelWithRenamedArrays {
    colors: string[];
    counts: number[];
}

declare interface ModelWithRenamedArraysValueGetOptionalParams extends OperationOptions {
}

export declare interface ModelWithRenamedArraysValueOperations {
    put: (input: ModelWithRenamedArrays, options?: ModelWithRenamedArraysValuePutOptionalParams) => Promise<void>;
    get: (options?: ModelWithRenamedArraysValueGetOptionalParams) => Promise<ModelWithRenamedArrays>;
}

declare interface ModelWithRenamedArraysValuePutOptionalParams extends OperationOptions {
}

export declare interface ModelWithRenamedAttribute {
    id: number;
    title: string;
    author: string;
}

declare interface ModelWithRenamedAttributeValueGetOptionalParams extends OperationOptions {
}

export declare interface ModelWithRenamedAttributeValueOperations {
    put: (input: ModelWithRenamedAttribute, options?: ModelWithRenamedAttributeValuePutOptionalParams) => Promise<void>;
    get: (options?: ModelWithRenamedAttributeValueGetOptionalParams) => Promise<ModelWithRenamedAttribute>;
}

declare interface ModelWithRenamedAttributeValuePutOptionalParams extends OperationOptions {
}

export declare interface ModelWithRenamedFields {
    inputData: SimpleModel;
    outputData: SimpleModel;
}

declare interface ModelWithRenamedFieldsValueGetOptionalParams extends OperationOptions {
}

export declare interface ModelWithRenamedFieldsValueOperations {
    put: (input: ModelWithRenamedFields, options?: ModelWithRenamedFieldsValuePutOptionalParams) => Promise<void>;
    get: (options?: ModelWithRenamedFieldsValueGetOptionalParams) => Promise<ModelWithRenamedFields>;
}

declare interface ModelWithRenamedFieldsValuePutOptionalParams extends OperationOptions {
}

export declare interface ModelWithRenamedNestedModel {
    author: Author;
}

declare interface ModelWithRenamedNestedModelValueGetOptionalParams extends OperationOptions {
}

export declare interface ModelWithRenamedNestedModelValueOperations {
    put: (input: ModelWithRenamedNestedModel, options?: ModelWithRenamedNestedModelValuePutOptionalParams) => Promise<void>;
    get: (options?: ModelWithRenamedNestedModelValueGetOptionalParams) => Promise<ModelWithRenamedNestedModel>;
}

declare interface ModelWithRenamedNestedModelValuePutOptionalParams extends OperationOptions {
}

export declare interface ModelWithRenamedProperty {
    title: string;
    author: string;
}

declare interface ModelWithRenamedPropertyValueGetOptionalParams extends OperationOptions {
}

export declare interface ModelWithRenamedPropertyValueOperations {
    put: (input: ModelWithRenamedProperty, options?: ModelWithRenamedPropertyValuePutOptionalParams) => Promise<void>;
    get: (options?: ModelWithRenamedPropertyValueGetOptionalParams) => Promise<ModelWithRenamedProperty>;
}

declare interface ModelWithRenamedPropertyValuePutOptionalParams extends OperationOptions {
}

export declare interface ModelWithRenamedUnwrappedModelArray {
    items: SimpleModel[];
}

declare interface ModelWithRenamedUnwrappedModelArrayValueGetOptionalParams extends OperationOptions {
}

export declare interface ModelWithRenamedUnwrappedModelArrayValueOperations {
    put: (input: ModelWithRenamedUnwrappedModelArray, options?: ModelWithRenamedUnwrappedModelArrayValuePutOptionalParams) => Promise<void>;
    get: (options?: ModelWithRenamedUnwrappedModelArrayValueGetOptionalParams) => Promise<ModelWithRenamedUnwrappedModelArray>;
}

declare interface ModelWithRenamedUnwrappedModelArrayValuePutOptionalParams extends OperationOptions {
}

export declare interface ModelWithRenamedWrappedAndItemModelArray {
    books: Book[];
}

declare interface ModelWithRenamedWrappedAndItemModelArrayValueGetOptionalParams extends OperationOptions {
}

export declare interface ModelWithRenamedWrappedAndItemModelArrayValueOperations {
    put: (input: ModelWithRenamedWrappedAndItemModelArray, options?: ModelWithRenamedWrappedAndItemModelArrayValuePutOptionalParams) => Promise<void>;
    get: (options?: ModelWithRenamedWrappedAndItemModelArrayValueGetOptionalParams) => Promise<ModelWithRenamedWrappedAndItemModelArray>;
}

declare interface ModelWithRenamedWrappedAndItemModelArrayValuePutOptionalParams extends OperationOptions {
}

export declare interface ModelWithRenamedWrappedModelArray {
    items: SimpleModel[];
}

declare interface ModelWithRenamedWrappedModelArrayValueGetOptionalParams extends OperationOptions {
}

export declare interface ModelWithRenamedWrappedModelArrayValueOperations {
    put: (input: ModelWithRenamedWrappedModelArray, options?: ModelWithRenamedWrappedModelArrayValuePutOptionalParams) => Promise<void>;
    get: (options?: ModelWithRenamedWrappedModelArrayValueGetOptionalParams) => Promise<ModelWithRenamedWrappedModelArray>;
}

declare interface ModelWithRenamedWrappedModelArrayValuePutOptionalParams extends OperationOptions {
}

export declare interface ModelWithSimpleArrays {
    colors: string[];
    counts: number[];
}

declare interface ModelWithSimpleArraysValueGetOptionalParams extends OperationOptions {
}

export declare interface ModelWithSimpleArraysValueOperations {
    put: (input: ModelWithSimpleArrays, options?: ModelWithSimpleArraysValuePutOptionalParams) => Promise<void>;
    get: (options?: ModelWithSimpleArraysValueGetOptionalParams) => Promise<ModelWithSimpleArrays>;
}

declare interface ModelWithSimpleArraysValuePutOptionalParams extends OperationOptions {
}

export declare interface ModelWithText {
    language: string;
    content: string;
}

declare interface ModelWithTextValueGetOptionalParams extends OperationOptions {
}

export declare interface ModelWithTextValueOperations {
    put: (input: ModelWithText, options?: ModelWithTextValuePutOptionalParams) => Promise<void>;
    get: (options?: ModelWithTextValueGetOptionalParams) => Promise<ModelWithText>;
}

declare interface ModelWithTextValuePutOptionalParams extends OperationOptions {
}

export declare interface ModelWithUnwrappedArray {
    colors: string[];
    counts: number[];
}

declare interface ModelWithUnwrappedArrayValueGetOptionalParams extends OperationOptions {
}

export declare interface ModelWithUnwrappedArrayValueOperations {
    put: (input: ModelWithUnwrappedArray, options?: ModelWithUnwrappedArrayValuePutOptionalParams) => Promise<void>;
    get: (options?: ModelWithUnwrappedArrayValueGetOptionalParams) => Promise<ModelWithUnwrappedArray>;
}

declare interface ModelWithUnwrappedArrayValuePutOptionalParams extends OperationOptions {
}

export declare interface ModelWithUnwrappedModelArray {
    items: SimpleModel[];
}

declare interface ModelWithUnwrappedModelArrayValueGetOptionalParams extends OperationOptions {
}

export declare interface ModelWithUnwrappedModelArrayValueOperations {
    put: (input: ModelWithUnwrappedModelArray, options?: ModelWithUnwrappedModelArrayValuePutOptionalParams) => Promise<void>;
    get: (options?: ModelWithUnwrappedModelArrayValueGetOptionalParams) => Promise<ModelWithUnwrappedModelArray>;
}

declare interface ModelWithUnwrappedModelArrayValuePutOptionalParams extends OperationOptions {
}

export declare interface ModelWithWrappedPrimitiveCustomItemNames {
    tags: string[];
}

declare interface ModelWithWrappedPrimitiveCustomItemNamesValueGetOptionalParams extends OperationOptions {
}

export declare interface ModelWithWrappedPrimitiveCustomItemNamesValueOperations {
    put: (input: ModelWithWrappedPrimitiveCustomItemNames, options?: ModelWithWrappedPrimitiveCustomItemNamesValuePutOptionalParams) => Promise<void>;
    get: (options?: ModelWithWrappedPrimitiveCustomItemNamesValueGetOptionalParams) => Promise<ModelWithWrappedPrimitiveCustomItemNames>;
}

declare interface ModelWithWrappedPrimitiveCustomItemNamesValuePutOptionalParams extends OperationOptions {
}

export { RestError }

export declare interface SimpleModel {
    name: string;
    age: number;
}

declare interface SimpleModelValueGetOptionalParams extends OperationOptions {
}

export declare interface SimpleModelValueOperations {
    put: (input: SimpleModel, options?: SimpleModelValuePutOptionalParams) => Promise<void>;
    get: (options?: SimpleModelValueGetOptionalParams) => Promise<SimpleModel>;
}

declare interface SimpleModelValuePutOptionalParams extends OperationOptions {
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
    readonly modelWithEmptyArrayValue: ModelWithEmptyArrayValueOperations;
    readonly modelWithOptionalFieldValue: ModelWithOptionalFieldValueOperations;
    readonly modelWithTextValue: ModelWithTextValueOperations;
    readonly modelWithNamespaceOnPropertiesValue: ModelWithNamespaceOnPropertiesValueOperations;
    readonly modelWithNamespaceValue: ModelWithNamespaceValueOperations;
    readonly modelWithRenamedAttributeValue: ModelWithRenamedAttributeValueOperations;
    readonly modelWithAttributesValue: ModelWithAttributesValueOperations;
    readonly modelWithRenamedWrappedAndItemModelArrayValue: ModelWithRenamedWrappedAndItemModelArrayValueOperations;
    readonly modelWithRenamedUnwrappedModelArrayValue: ModelWithRenamedUnwrappedModelArrayValueOperations;
    readonly modelWithRenamedWrappedModelArrayValue: ModelWithRenamedWrappedModelArrayValueOperations;
    readonly modelWithUnwrappedModelArrayValue: ModelWithUnwrappedModelArrayValueOperations;
    readonly modelWithArrayOfModelValue: ModelWithArrayOfModelValueOperations;
    readonly modelWithWrappedPrimitiveCustomItemNamesValue: ModelWithWrappedPrimitiveCustomItemNamesValueOperations;
    readonly modelWithRenamedArraysValue: ModelWithRenamedArraysValueOperations;
    readonly modelWithUnwrappedArrayValue: ModelWithUnwrappedArrayValueOperations;
    readonly modelWithSimpleArraysValue: ModelWithSimpleArraysValueOperations;
    readonly modelWithRenamedNestedModelValue: ModelWithRenamedNestedModelValueOperations;
    readonly modelWithNestedModelValue: ModelWithNestedModelValueOperations;
    readonly modelWithRenamedFieldsValue: ModelWithRenamedFieldsValueOperations;
    readonly modelWithRenamedPropertyValue: ModelWithRenamedPropertyValueOperations;
    readonly simpleModelValue: SimpleModelValueOperations;
}

export declare interface XmlClientOptionalParams extends ClientOptions {
    endpointParam?: string;
}

export declare interface XmlErrorBody {
    message: string;
    code: number;
}

declare interface XmlErrorValueGetOptionalParams extends OperationOptions {
}

export declare interface XmlErrorValueOperations {
    get: (options?: XmlErrorValueGetOptionalParams) => Promise<SimpleModel>;
}

export { }
