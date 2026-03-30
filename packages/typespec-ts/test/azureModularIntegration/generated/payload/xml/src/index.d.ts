import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare interface Author {
    name: string;
}

export declare interface Book {
    title: string;
}

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

export declare interface ModelWithNamespace {
    id: number;
    title: string;
}

export declare interface ModelWithNamespaceOnProperties {
    id: number;
    title: string;
    author: string;
}

export declare interface ModelWithNamespaceOnPropertiesValueGetOptionalParams extends OperationOptions {
}

export declare interface ModelWithNamespaceOnPropertiesValueOperations {
    put: (input: ModelWithNamespaceOnProperties, options?: ModelWithNamespaceOnPropertiesValuePutOptionalParams) => Promise<void>;
    get: (options?: ModelWithNamespaceOnPropertiesValueGetOptionalParams) => Promise<ModelWithNamespaceOnProperties>;
}

export declare interface ModelWithNamespaceOnPropertiesValuePutOptionalParams extends OperationOptions {
}

export declare interface ModelWithNamespaceValueGetOptionalParams extends OperationOptions {
}

export declare interface ModelWithNamespaceValueOperations {
    put: (input: ModelWithNamespace, options?: ModelWithNamespaceValuePutOptionalParams) => Promise<void>;
    get: (options?: ModelWithNamespaceValueGetOptionalParams) => Promise<ModelWithNamespace>;
}

export declare interface ModelWithNamespaceValuePutOptionalParams extends OperationOptions {
}

export declare interface ModelWithNestedModel {
    nested: SimpleModel;
}

export declare interface ModelWithNestedModelValueGetOptionalParams extends OperationOptions {
}

export declare interface ModelWithNestedModelValueOperations {
    put: (input: ModelWithNestedModel, options?: ModelWithNestedModelValuePutOptionalParams) => Promise<void>;
    get: (options?: ModelWithNestedModelValueGetOptionalParams) => Promise<ModelWithNestedModel>;
}

export declare interface ModelWithNestedModelValuePutOptionalParams extends OperationOptions {
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

export declare interface ModelWithRenamedAttribute {
    id: number;
    title: string;
    author: string;
}

export declare interface ModelWithRenamedAttributeValueGetOptionalParams extends OperationOptions {
}

export declare interface ModelWithRenamedAttributeValueOperations {
    put: (input: ModelWithRenamedAttribute, options?: ModelWithRenamedAttributeValuePutOptionalParams) => Promise<void>;
    get: (options?: ModelWithRenamedAttributeValueGetOptionalParams) => Promise<ModelWithRenamedAttribute>;
}

export declare interface ModelWithRenamedAttributeValuePutOptionalParams extends OperationOptions {
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

export declare interface ModelWithRenamedNestedModel {
    author: Author;
}

export declare interface ModelWithRenamedNestedModelValueGetOptionalParams extends OperationOptions {
}

export declare interface ModelWithRenamedNestedModelValueOperations {
    put: (input: ModelWithRenamedNestedModel, options?: ModelWithRenamedNestedModelValuePutOptionalParams) => Promise<void>;
    get: (options?: ModelWithRenamedNestedModelValueGetOptionalParams) => Promise<ModelWithRenamedNestedModel>;
}

export declare interface ModelWithRenamedNestedModelValuePutOptionalParams extends OperationOptions {
}

export declare interface ModelWithRenamedProperty {
    title: string;
    author: string;
}

export declare interface ModelWithRenamedPropertyValueGetOptionalParams extends OperationOptions {
}

export declare interface ModelWithRenamedPropertyValueOperations {
    put: (input: ModelWithRenamedProperty, options?: ModelWithRenamedPropertyValuePutOptionalParams) => Promise<void>;
    get: (options?: ModelWithRenamedPropertyValueGetOptionalParams) => Promise<ModelWithRenamedProperty>;
}

export declare interface ModelWithRenamedPropertyValuePutOptionalParams extends OperationOptions {
}

export declare interface ModelWithRenamedUnwrappedModelArray {
    items: SimpleModel[];
}

export declare interface ModelWithRenamedUnwrappedModelArrayValueGetOptionalParams extends OperationOptions {
}

export declare interface ModelWithRenamedUnwrappedModelArrayValueOperations {
    put: (input: ModelWithRenamedUnwrappedModelArray, options?: ModelWithRenamedUnwrappedModelArrayValuePutOptionalParams) => Promise<void>;
    get: (options?: ModelWithRenamedUnwrappedModelArrayValueGetOptionalParams) => Promise<ModelWithRenamedUnwrappedModelArray>;
}

export declare interface ModelWithRenamedUnwrappedModelArrayValuePutOptionalParams extends OperationOptions {
}

export declare interface ModelWithRenamedWrappedAndItemModelArray {
    books: Book[];
}

export declare interface ModelWithRenamedWrappedAndItemModelArrayValueGetOptionalParams extends OperationOptions {
}

export declare interface ModelWithRenamedWrappedAndItemModelArrayValueOperations {
    put: (input: ModelWithRenamedWrappedAndItemModelArray, options?: ModelWithRenamedWrappedAndItemModelArrayValuePutOptionalParams) => Promise<void>;
    get: (options?: ModelWithRenamedWrappedAndItemModelArrayValueGetOptionalParams) => Promise<ModelWithRenamedWrappedAndItemModelArray>;
}

export declare interface ModelWithRenamedWrappedAndItemModelArrayValuePutOptionalParams extends OperationOptions {
}

export declare interface ModelWithRenamedWrappedModelArray {
    items: SimpleModel[];
}

export declare interface ModelWithRenamedWrappedModelArrayValueGetOptionalParams extends OperationOptions {
}

export declare interface ModelWithRenamedWrappedModelArrayValueOperations {
    put: (input: ModelWithRenamedWrappedModelArray, options?: ModelWithRenamedWrappedModelArrayValuePutOptionalParams) => Promise<void>;
    get: (options?: ModelWithRenamedWrappedModelArrayValueGetOptionalParams) => Promise<ModelWithRenamedWrappedModelArray>;
}

export declare interface ModelWithRenamedWrappedModelArrayValuePutOptionalParams extends OperationOptions {
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

export declare interface ModelWithUnwrappedModelArray {
    items: SimpleModel[];
}

export declare interface ModelWithUnwrappedModelArrayValueGetOptionalParams extends OperationOptions {
}

export declare interface ModelWithUnwrappedModelArrayValueOperations {
    put: (input: ModelWithUnwrappedModelArray, options?: ModelWithUnwrappedModelArrayValuePutOptionalParams) => Promise<void>;
    get: (options?: ModelWithUnwrappedModelArrayValueGetOptionalParams) => Promise<ModelWithUnwrappedModelArray>;
}

export declare interface ModelWithUnwrappedModelArrayValuePutOptionalParams extends OperationOptions {
}

export declare interface ModelWithWrappedPrimitiveCustomItemNames {
    tags: string[];
}

export declare interface ModelWithWrappedPrimitiveCustomItemNamesValueGetOptionalParams extends OperationOptions {
}

export declare interface ModelWithWrappedPrimitiveCustomItemNamesValueOperations {
    put: (input: ModelWithWrappedPrimitiveCustomItemNames, options?: ModelWithWrappedPrimitiveCustomItemNamesValuePutOptionalParams) => Promise<void>;
    get: (options?: ModelWithWrappedPrimitiveCustomItemNamesValueGetOptionalParams) => Promise<ModelWithWrappedPrimitiveCustomItemNames>;
}

export declare interface ModelWithWrappedPrimitiveCustomItemNamesValuePutOptionalParams extends OperationOptions {
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
