import {
  emitModularModelsFromTypeSpec,
  emitModularOperationsFromTypeSpec,
  emitModularSerializeUtilsFromTypeSpec
} from "../util/emitUtil.js";

import { assert } from "chai";
import { assertEqualContent } from "../util/testUtil.js";

// Replaced with new serializers
describe.skip("modular special union serialization", () => {
  it("shouldn't generate serialize util or as any if there's no special union variant without discriminator", async () => {
    const tspContent = `
    model WidgetData0 {
      fooProp: string;
    }
    
    model WidgetData1 {
      barProp: string;
    }
    
    model Widget {
      @key id: string;
      weight: int32;
      color: "red" | "blue";
    }
    
    model Widget1 extends Widget {
      data: WidgetData0 | WidgetData1
    }

    interface WidgetService {
      @get @route("customGet1") customGet1(@body body: Widget1): void;
    }
    `;
    const serializeUtil =
      await emitModularSerializeUtilsFromTypeSpec(tspContent);
    assert.ok(serializeUtil);
    serializeUtil?.getInterface("")
    await assertEqualContent(
      serializeUtil?.getFullText()!,
      ``
    )
    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "./index.js";
      import {
        StreamableMethod,
        PathUncheckedResponse,
        createRestError,
        operationOptionsToRequestParameters,
      } from "@azure-rest/core-client";
      
      export function _customGet1Send(
        context: Client,
        body: Widget1,
        options: CustomGet1OptionalParams = { requestOptions: {} }
      ): StreamableMethod {
        return context
          .path("/customGet1")
          .get({
              ...operationOptionsToRequestParameters(options),
              body: widget1Serializer(body),
            });
      }
      
      export async function _customGet1Deserialize(
        result: PathUncheckedResponse
      ): Promise<void> {
        const expectedStatuses = ["204"];
        if(!expectedStatuses.includes(result.status)) {
          throw createRestError(result);
        }

        return;
      }
      
      export async function customGet1(
        context: Client,
        body: Widget1,
        options: CustomGet1OptionalParams = { requestOptions: {} }
      ): Promise<void> {
        const result = await _customGet1Send(context, body, options);
        return _customGet1Deserialize(result);
      }`,
      true
    );
  });

  it("shouldn't generate serialize util or as any if there's no special union variant even with discriminator", async () => {
    const tspContent = `
    @discriminator("kind")
    union WidgetData {
      kind0: WidgetData0;
      kind1: WidgetData1;
    }
    model WidgetData0 {
      kind: "kind0";
      fooProp: string;
    }
    
    model WidgetData1 {
      kind: "kind1";
      barProp: string;
    }
    
    model Widget {
      @key id: string;
      weight: int32;
      color: "red" | "blue";
    }
    
    model Widget1 extends Widget {
      data: WidgetData
    }

    interface WidgetService {
      @get @route("customGet1") customGet1(@body body: Widget1): void;
    }
    `;
    const serializeUtil =
      await emitModularSerializeUtilsFromTypeSpec(tspContent);
    assert.ok(serializeUtil);
    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "./index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
        PathUncheckedResponse,
        createRestError,
      } from "@azure-rest/core-client";
      
      export function _customGet1Send(
        context: Client,
        body: Widget1,
        options: CustomGet1OptionalParams = { requestOptions: {} }
      ): StreamableMethod {
        return context
          .path("/customGet1")
          .get({
              ...operationOptionsToRequestParameters(options),
              body: {
                id: body["id"],
                weight: body["weight"],
                color: body["color"],
                data: body["data"],
              },
            });
      }
      
      export async function _customGet1Deserialize(
        result: PathUncheckedResponse
      ): Promise<void> {
        const expectedStatuses = ["204"];
        if(!expectedStatuses.includes(result.status)) {
          throw createRestError(result);
        }

        return;
      }
      
      export async function customGet1(
        context: Client,
        body: Widget1,
        options: CustomGet1OptionalParams = { requestOptions: {} }
      ): Promise<void> {
        const result = await _customGet1Send(context, body, options);
        return _customGet1Deserialize(result);
      }`,
      true
    );
  });

  it("should not generate serialize util but generate as any if there's a special union variant of datatime without discriminator", async () => {
    const tspContent = `
      model WidgetData0 {
        fooProp: string;
      }
      
      model Widget {
        @key id: string;
        weight: int32;
        color: "red" | "blue";
      }
      
      model Widget1 extends Widget {
        data: WidgetData0 | utcDateTime;
      }
  
      interface WidgetService {
        @get @route("customGet1") customGet1(@body body: Widget1): void;
      }
      `;

    // to test the generated deserialized utils for union variant of model with datetime properties.
    const serializeUtil =
      await emitModularSerializeUtilsFromTypeSpec(tspContent);
    assert.ok(serializeUtil);

    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "./index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
        PathUncheckedResponse,
        createRestError,
      } from "@azure-rest/core-client";
      
      export function _customGet1Send(
        context: Client,
        body: Widget1,
        options: CustomGet1OptionalParams = { requestOptions: {} }
      ): StreamableMethod {
        return context
          .path("/customGet1")
          .get({
              ...operationOptionsToRequestParameters(options),
              body: {
                id: body["id"],
                weight: body["weight"],
                color: body["color"],
                data: body["data"] as any,
              },
            });
      }
      
      export async function _customGet1Deserialize(
        result: PathUncheckedResponse
      ): Promise<void> {
        const expectedStatuses = ["204"];
        if(!expectedStatuses.includes(result.status)) {
          throw createRestError(result);
        }

        return;
      }
      
      export async function customGet1(
        context: Client,
        body: Widget1,
        options: CustomGet1OptionalParams = { requestOptions: {} }
      ): Promise<void> {
        const result = await _customGet1Send(context, body, options);
        return _customGet1Deserialize(result);
      }`,
      true
    );
  });

  it("should not generate serialize util but generate as any if there's a special union variant of bytes without discriminator", async () => {
    const tspContent = `
    model WidgetData0 {
      fooProp: string;
    }
    
    model Widget {
      @key id: string;
      weight: int32;
      color: "red" | "blue";
    }
    
    model Widget1 extends Widget {
      data: WidgetData0 | bytes;
    }

    interface WidgetService {
      @get @route("customGet1") customGet1(@body body: Widget1): void;
    }
    `;

    // to test the generated deserialized utils for union variant of model with datetime properties.
    const serializeUtil =
      await emitModularSerializeUtilsFromTypeSpec(tspContent);
    assert.ok(serializeUtil);

    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "./index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
        PathUncheckedResponse,
        createRestError,
      } from "@azure-rest/core-client";
      
      export function _customGet1Send(
        context: Client,
        body: Widget1,
        options: CustomGet1OptionalParams = { requestOptions: {} }
      ): StreamableMethod {
        return context
          .path("/customGet1")
          .get({
            ...operationOptionsToRequestParameters(options),
            body: {
              id: body["id"],
              weight: body["weight"],
              color: body["color"],
              data: body["data"] as any,
            },
          });
      }
      
      export async function _customGet1Deserialize(
        result: PathUncheckedResponse
      ): Promise<void> {
        const expectedStatuses = ["204"];
        if(!expectedStatuses.includes(result.status)) {
          throw createRestError(result);
        }
      
        return;
      }
      
      export async function customGet1(
        context: Client,
        body: Widget1,
        options: CustomGet1OptionalParams = { requestOptions: {} }
      ): Promise<void> {
        const result = await _customGet1Send(context, body, options);
        return _customGet1Deserialize(result);
      }`,
      true
    );
  });

  it("should not generate serialize util but generate as any if there's a special union variant of model with datatime property without discriminator", async () => {
    const tspContent = `
    model WidgetData0 {
      fooProp: string;
    }
    
    model WidgetData1 {
      start: utcDateTime;
      end?: utcDateTime;
    }
    
    model Widget {
      @key id: string;
      weight: int32;
      color: "red" | "blue";
    }
    
    model Widget1 extends Widget {
      data: WidgetData0 | WidgetData1
    }

    interface WidgetService {
      @get @route("customGet1") customGet1(@body body: Widget1): void;
    }
    `;

    // to test the generated deserialized utils for union variant of model with datetime properties.
    const serializeUtil =
      await emitModularSerializeUtilsFromTypeSpec(tspContent);
    assert.ok(serializeUtil);

    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "./index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
        PathUncheckedResponse,
        createRestError,
      } from "@azure-rest/core-client";
      
      export function _customGet1Send(
        context: Client,
        body: Widget1,
        options: CustomGet1OptionalParams = { requestOptions: {} }
      ): StreamableMethod {
        return context
          .path("/customGet1")
          .get({
            ...operationOptionsToRequestParameters(options),
            body: {
              id: body["id"],
              weight: body["weight"],
              color: body["color"],
              data: body["data"] as any,
            },
          });
      }
      
      export async function _customGet1Deserialize(
        result: PathUncheckedResponse
      ): Promise<void> {
        const expectedStatuses = ["204"];
        if(!expectedStatuses.includes(result.status)) {
          throw createRestError(result);
        }
      
        return;
      }
      
      export async function customGet1(
        context: Client,
        body: Widget1,
        options: CustomGet1OptionalParams = { requestOptions: {} }
      ): Promise<void> {
        const result = await _customGet1Send(context, body, options);
        return _customGet1Deserialize(result);
      }
      `,
      true
    );
  });

  it("should not generate serialize util but generate as any if there's a special union variant of model with bytes property without discriminator", async () => {
    const tspContent = `
    model WidgetData0 {
      fooProp: string;
    }
    
    model WidgetData1 {
      data: bytes;
    }
    
    model Widget {
      @key id: string;
      weight: int32;
      color: "red" | "blue";
    }
    
    model Widget1 extends Widget {
      data: WidgetData0 | WidgetData1
    }

    interface WidgetService {
      @get @route("customGet1") customGet1(@body body: Widget1): void;
    }
    `;

    // to test the generated deserialized utils for union variant of model with datetime properties.
    const serializeUtil =
      await emitModularSerializeUtilsFromTypeSpec(tspContent);
    assert.ok(serializeUtil);

    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "./index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
        PathUncheckedResponse,
        createRestError,
      } from "@azure-rest/core-client";
      
      export function _customGet1Send(
        context: Client,
        body: Widget1,
        options: CustomGet1OptionalParams = { requestOptions: {} }
      ): StreamableMethod {
        return context
          .path("/customGet1")
          .get({
            ...operationOptionsToRequestParameters(options),
            body: {
              id: body["id"],
              weight: body["weight"],
              color: body["color"],
              data: body["data"] as any,
            },
          });
      }
      
      export async function _customGet1Deserialize(
        result: PathUncheckedResponse
      ): Promise<void> {
        const expectedStatuses = ["204"];
        if(!expectedStatuses.includes(result.status)) {
          throw createRestError(result);
        }
      
        return;
      }
      
      export async function customGet1(
        context: Client,
        body: Widget1,
        options: CustomGet1OptionalParams = { requestOptions: {} }
      ): Promise<void> {
        const result = await _customGet1Send(context, body, options);
        return _customGet1Deserialize(result);
      }
      `,
      true
    );
  });

  it("should generate serialize util if there's a special discriminated union variant of model with datatime property", async () => {
    const tspContent = `
    @discriminator("kind")
    union WidgetData {
      kind0: WidgetData0;
      kind1: WidgetData1;
    }

    model WidgetData0 {
      kind: "kind0";
      fooProp: string;
    }
    
    model WidgetData1 {
      kind: "kind1";
      start: utcDateTime;
      end?: utcDateTime;
    }
    
    model Widget {
      @key id: string;
      weight: int32;
      color: "red" | "blue";
    }
    
    model Widget1 extends Widget {
      data: WidgetData
    }

    interface WidgetService {
      @get @route("customGet1") customGet1(@body body: Widget1): void;
    }
    `;

    // to test the generated deserialized utils for union variant of model with datetime properties.
    const models = await emitModularModelsFromTypeSpec(tspContent)!;
    const serializeWidgetData1 = models?.getFunction("widgetData1Serializer");
    assert.isDefined(serializeWidgetData1);

    // assert.equal(serializeUtil?.length, 1);
    await assertEqualContent(
      serializeWidgetData1?.getFullText()!,
      `
      export function widgetData1Serializer(item: WidgetData1): any {
        return {
          kind: item["kind"],
          start: item["start"].toISOString(),
          end: item["end"]?.toISOString(),
        };
      }
      `
    );

    const serializeWidgetData0 = models?.getFunction("widgetData0Serializer");
    assert.isDefined(serializeWidgetData1);

    await assertEqualContent(
      serializeWidgetData0?.getFullText()!,
      `
      export function widgetData0Serializer(item: WidgetData0): any {
        return {
          kind: item["kind"],
          fooProp: item["fooProp"],
        };
      }
      `
    );

    const serializeWidgetData = models?.getFunction("widgetDataSerializer");
    assert.isDefined(serializeWidgetData);
    await assertEqualContent(
      serializeWidgetData?.getFullText()!,
      ` export function widgetDataSerializer(item: WidgetData) {
        switch (item.kind) {
          case "kind0":
           return widgetData0Serializer(item as WidgetData0);

          case "kind1":
           return widgetData1Serializer(item as WidgetData1);

          default:
            return item;
        }
      }`
    );

    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "./index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
        PathUncheckedResponse,
        createRestError,
      } from "@azure-rest/core-client";
      export function _customGet1Send(
        context: Client,
        body: Widget1,
        options: CustomGet1OptionalParams = { requestOptions: {} }
      ): StreamableMethod {
        return context
          .path("/customGet1")
          .get({
            ...operationOptionsToRequestParameters(options),
            body: {
              id: body["id"],
              weight: body["weight"],
              color: body["color"],
              data: widgetDataSerializer(body["data"]),
            },
          });
      }
      export async function _customGet1Deserialize(
        result: PathUncheckedResponse
      ): Promise<void> {
        const expectedStatuses = ["204"];
        if(!expectedStatuses.includes(result.status)) {
          throw createRestError(result);
        }
        return;
      }
      export async function customGet1(
        context: Client,
        body: Widget1,
        options: CustomGet1OptionalParams = { requestOptions: {} }
      ): Promise<void> {
        const result = await _customGet1Send(context, body, options);
        return _customGet1Deserialize(result);
      }
      `,
      true
    );
  });

  it("should generate serialize util if there's a special discriminated union variant of model with bytes property", async () => {
    const tspContent = `
    @discriminator("kind")
    union WidgetData {
      kind0: WidgetData0;
      kind1: WidgetData1;
    }

    model WidgetData0 {
      kind: "kind0";
      fooProp: string;
    }
    
    model WidgetData1 {
      kind: "kind1";
      data: bytes;
    }
    
    model Widget {
      @key id: string;
      weight: int32;
      color: "red" | "blue";
    }
    
    model Widget1 extends Widget {
      data: WidgetData
    }

    interface WidgetService {
      @get @route("customGet1") customGet1(@body body: Widget1): void;
    }
    `;

    // to test the generated deserialized utils for union variant of model with datetime properties.
    const modelsFile = await emitModularModelsFromTypeSpec(tspContent);
    assert.ok(modelsFile);
    await assertEqualContent(
      modelsFile?.getFunction("widgetData1Serializer")?.getFullText()!,
      `
      export function widgetData1Serializer(item: WidgetData1): any {
        return { 
          kind: item["kind"],
          data: uint8ArrayToString(item["data"], "base64")
        };
      }
      `
    );

    await assertEqualContent(
      modelsFile?.getFunction("widgetDataSerializer")?.getFullText()!,
      `
      export function widgetDataSerializer(item: WidgetData) {
        switch (item.kind) {
          case "kind0":
            return widgetData0Serializer(item as WidgetData0);

          case "kind1":
            return widgetData1Serializer(item as WidgetData1);
          
          default:
            return item;
        }
      }
      `
    );

    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "./index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
        PathUncheckedResponse,
        createRestError,
      } from "@azure-rest/core-client";
      
      export function _customGet1Send(
        context: Client,
        body: Widget1,
        options: CustomGet1OptionalParams = { requestOptions: {} }
      ): StreamableMethod {
        return context
          .path("/customGet1")
          .get({
            ...operationOptionsToRequestParameters(options),
            body: {
              id: body["id"],
              weight: body["weight"],
              color: body["color"],
              data: widgetDataSerializer(body["data"]),
            },
          });
      }
      
      export async function _customGet1Deserialize(
        result: PathUncheckedResponse
      ): Promise<void> {
        const expectedStatuses = ["204"];
        if(!expectedStatuses.includes(result.status)) {
          throw createRestError(result);
        }
      
        return;
      }
      
      export async function customGet1(
        context: Client,
        body: Widget1,
        options: CustomGet1OptionalParams = { requestOptions: {} }
      ): Promise<void> {
        const result = await _customGet1Send(context, body, options);
        return _customGet1Deserialize(result);
      }
      `,
      true
    );
  });

  it("should generate serialize util if there're special discriminated union variants of model with bytes and datetime property", async () => {
    const tspContent = `
    @discriminator("kind")
    union WidgetData {
      kind0: WidgetData0;
      kind1: WidgetData1;
    }

    model WidgetData0 {
      kind: "kind0";
      fooProp: bytes;
    }
    
    model WidgetData1 {
      kind: "kind1";
      data: utcDateTime;
    }
    
    model Widget {
      @key id: string;
      weight: int32;
      color: "red" | "blue";
    }
    
    model Widget1 extends Widget {
      data: WidgetData
    }

    interface WidgetService {
      @get @route("customGet1") customGet1(@body body: Widget1): void;
    }
    `;

    // to test the generated deserialized utils for union variant of model with datetime properties.
    const modelsFile = await emitModularModelsFromTypeSpec(tspContent);
    assert.ok(modelsFile);

    await assertEqualContent(
      modelsFile?.getFunction("widgetData0Serializer")?.getFullText()!,
      `
      export function widgetData0Serializer(item: WidgetData0): any {
        return {
          kind: item["kind"],
          fooProp: uint8ArrayToString(item["fooProp"], "base64"),
        };
      }
      `
    );

    await assertEqualContent(
      modelsFile?.getFunction("widgetData1Serializer")?.getFullText()!,
      `
      export function widgetData1Serializer(item: WidgetData1): any {
        return { 
          kind: item["kind"],
          data: item["data"].toISOString()
        };
      }
      `
    );

    await assertEqualContent(
      modelsFile?.getFunction("widgetDataSerializer")?.getFullText()!,
      `
      export function widgetDataSerializer(item: WidgetData) {
        switch (item.kind) {
          case "kind0":
            return widgetData0Serializer(item as WidgetData0);

          case "kind1":
            return widgetData1Serializer(item as WidgetData1);
            
          default:
            return item;
        }
      }
      `
    );

    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "./index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
        PathUncheckedResponse,
        createRestError,
      } from "@azure-rest/core-client";
      export function _customGet1Send(
        context: Client,
        body: Widget1,
        options: CustomGet1OptionalParams = { requestOptions: {} },
      ): StreamableMethod {
        return context
          .path("/customGet1")
          .get({
            ...operationOptionsToRequestParameters(options),
            body: {
              id: body["id"],
              weight: body["weight"],
              color: body["color"],
              data: widgetDataSerializer(body["data"]),
            },
          });
      }
      export async function _customGet1Deserialize(
        result: PathUncheckedResponse,
      ): Promise<void> {
        const expectedStatuses = ["204"];
        if(!expectedStatuses.includes(result.status)) {
          throw createRestError(result);
        }
        return;
      }
      export async function customGet1(
        context: Client,
        body: Widget1,
        options: CustomGet1OptionalParams = { requestOptions: {} },
      ): Promise<void> {
        const result = await _customGet1Send(context, body, options);
        return _customGet1Deserialize(result);
      }
      `,
      true
    );
  });

  it("should generate serialize util if there're special discriminated union variants of model with bytes and bytes property", async () => {
    const tspContent = `
    @discriminator("kind")
    union WidgetData {
      kind0: WidgetData0;
      kind1: WidgetData1;
    }

    model WidgetData0 {
      kind: "kind0";
      fooProp: bytes;
    }
    
    model WidgetData1 {
      kind: "kind1";
      data: bytes;
    }
    
    model Widget {
      @key id: string;
      weight: int32;
      color: "red" | "blue";
    }
    
    model Widget1 extends Widget {
      data: WidgetData
    }

    interface WidgetService {
      @get @route("customGet1") customGet1(@body body: Widget1): void;
    }
    `;

    // to test the generated deserialized utils for union variant of model with datetime properties.
    const modelsFile = await emitModularModelsFromTypeSpec(tspContent);
    assert.ok(modelsFile);
    await assertEqualContent(
      modelsFile?.getFunction("widgetData0Serializer")?.getFullText()!,
      `
      export function widgetData0Serializer(item: WidgetData0): any {
        return {
          kind: item["kind"],
          fooProp: uint8ArrayToString(item["fooProp"], "base64"),
        };
      }
      `
    );

    await assertEqualContent(
      modelsFile?.getFunction("widgetData1Serializer")?.getFullText()!,
      `      
      export function widgetData1Serializer(item: WidgetData1): any {
        return { 
        kind: item["kind"],
        data: uint8ArrayToString(item["data"], "base64")
        };
      }
      `
    );

    await assertEqualContent(
      modelsFile?.getFunction("widgetDataSerializer")?.getFullText()!,
      `
      export function widgetDataSerializer(item: WidgetData) {
        switch (item.kind) {
          case "kind0":
            return widgetData0Serializer(item as WidgetData0);

          case "kind1":
            return widgetData1Serializer(item as WidgetData1);

          default:
            return item;
        }
      }
      `
    );

    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "./index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
        PathUncheckedResponse,
        createRestError,
      } from "@azure-rest/core-client";
      export function _customGet1Send(
        context: Client,
        body: Widget1,
        options: CustomGet1OptionalParams = { requestOptions: {} },
      ): StreamableMethod {
        return context
          .path("/customGet1")
          .get({
            ...operationOptionsToRequestParameters(options),
            body: {
              id: body["id"],
              weight: body["weight"],
              color: body["color"],
              data: widgetDataSerializer(body["data"]),
            },
          });
      }
      export async function _customGet1Deserialize(
        result: PathUncheckedResponse,
      ): Promise<void> {
        const expectedStatuses = ["204"];
        if(!expectedStatuses.includes(result.status)) {
          throw createRestError(result);
        }
        return;
      }
      export async function customGet1(
        context: Client,
        body: Widget1,
        options: CustomGet1OptionalParams = { requestOptions: {} },
      ): Promise<void> {
        const result = await _customGet1Send(context, body, options);
        return _customGet1Deserialize(result);
      }
      `,
      true
    );
  });

  it("should generate serialize util if there're special discriminated union within a anonymous model", async () => {
    const tspContent = `
    /** Options to configure a vector store static chunking strategy. */
    model VectorStoreStaticChunkingStrategyOptions {
      /** The maximum number of tokens in each chunk. The default value is 800. The minimum value is 100 and the maximum value is 4096. */
      @encodedName("application/json", "max_chunk_size_tokens")
      @minValue(100)
      @maxValue(4096)
      maxChunkSizeTokens: int32;

      /**
       * The number of tokens that overlap between chunks. The default value is 400.
       * Note that the overlap must not exceed half of max_chunk_size_tokens.     *
       */
      @encodedName("application/json", "chunk_overlap_tokens")
      chunkOverlapTokens: int32;
    }

    /** Type of chunking strategy */
    union VectorStoreChunkingStrategyRequestType {
      auto: "auto",
      static: "static",
      string,
    }

    /** An abstract representation of a vector store chunking strategy configuration. */
    @discriminator("type")
    model VectorStoreChunkingStrategyRequest {
      /** The object type. */
      type: VectorStoreChunkingStrategyRequestType;
    }

    /**
     * The default strategy. This strategy currently uses a max_chunk_size_tokens of 800 and chunk_overlap_tokens of 400.
     */
    model VectorStoreAutoChunkingStrategyRequest
      extends VectorStoreChunkingStrategyRequest {
      /** The object type, which is always 'auto'. */
      type: VectorStoreChunkingStrategyRequestType.auto;
    }

    /** A statically configured chunking strategy. */
    model VectorStoreStaticChunkingStrategyRequest
      extends VectorStoreChunkingStrategyRequest {
      /** The object type, which is always 'static'. */
      type: VectorStoreChunkingStrategyRequestType.static;

      /** The options for the static chunking strategy. */
      static: VectorStoreStaticChunkingStrategyOptions;
    }

    @route("/vector_stores/{vectorStoreId}/files")
    op createVectorStoreFile(
      /** The ID of the vector store for which to create a File. */
      @path vectorStoreId: string,

      /** A File ID that the vector store should use. Useful for tools like \`file_search\` that can access files. */
      @encodedName("application/json", "file_id")
      fileId: string,

      /** The chunking strategy used to chunk the file(s). If not set, will use the auto strategy. */
      @encodedName("application/json", "chunking_strategy")
      chunkingStrategy?: VectorStoreChunkingStrategyRequest,
    ): void;
    `;

    // to test the generated deserialized utils for union variant of model with datetime properties.
    const modelsFile = await emitModularModelsFromTypeSpec(tspContent);
    assert.ok(modelsFile);
    await assertEqualContent(
      modelsFile?.getFunction("vectorStoreChunkingStrategyRequestUnionSerializer")?.getFullText()!,
      `
      export function vectorStoreChunkingStrategyRequestUnionSerializer(
        item: VectorStoreChunkingStrategyRequestUnion,
      ) {
        switch (item.type) {
          case "auto":
            return vectorStoreAutoChunkingStrategyRequestSerializer(
              item as VectorStoreAutoChunkingStrategyRequest,
            );
      
          case "static":
            return vectorStoreStaticChunkingStrategyRequestSerializer(
              item as VectorStoreStaticChunkingStrategyRequest,
            );
      
          default:
            return vectorStoreChunkingStrategyRequestSerializer(item);
        }
      }
      `
    );

    await assertEqualContent(
      modelsFile?.getFunction("vectorStoreAutoChunkingStrategyRequestSerializer")?.getFullText()!,
      `
      export function vectorStoreAutoChunkingStrategyRequestSerializer(
        item: VectorStoreAutoChunkingStrategyRequest,
      ): any {
        return {
          type: item["type"],
        };
      }
      `
    );

    await assertEqualContent(
      modelsFile?.getFunction("vectorStoreStaticChunkingStrategyRequestSerializer")?.getFullText()!,
      `
      export function vectorStoreStaticChunkingStrategyRequestSerializer(
        item: VectorStoreStaticChunkingStrategyRequest,
      ): any {
        return {
          type: item["type"],
          static: vectorStoreStaticChunkingStrategyOptionsSerializer(item.static),
        };
      }
      `
    );

    await assertEqualContent(
      modelsFile?.getFunction("vectorStoreChunkingStrategyRequestSerializer")?.getFullText()!,
      `
      export function vectorStoreChunkingStrategyRequestSerializer(
        item: VectorStoreChunkingStrategyRequestUnion,
      ): any {
        return {
          ...vectorStoreChunkingStrategyRequestUnionSerializer(item),
        };
      }
      `
    );

    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "./index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
        PathUncheckedResponse,
        createRestError,
      } from "@azure-rest/core-client";
      export function _createVectorStoreFileSend(
        context: Client,
        vectorStoreId: string,
        fileId: string,
        options: CreateVectorStoreFileOptionalParams = { requestOptions: {} },
      ): StreamableMethod {
        return context
          .path("/vector_stores/{vectorStoreId}/files", vectorStoreId)
          .post({
            ...operationOptionsToRequestParameters(options),
            body: {
              file_id: fileId,
              chunking_strategy: vectorStoreChunkingStrategyRequestUnionSerializer(
                options?.chunkingStrategy,
              ),
            },
          });
      }
      export async function _createVectorStoreFileDeserialize(
        result: PathUncheckedResponse,
      ): Promise<void> {
        const expectedStatuses = ["204"];
        if (!expectedStatuses.includes(result.status)) {
          throw createRestError(result);
        }
        return;
      }
      export async function createVectorStoreFile(
        context: Client,
        vectorStoreId: string,
        fileId: string,
        options: CreateVectorStoreFileOptionalParams = { requestOptions: {} },
      ): Promise<void> {
        const result = await _createVectorStoreFileSend(
          context,
          vectorStoreId,
          fileId,
          options,
        );
        return _createVectorStoreFileDeserialize(result);
      }
      `,
      true
    );
  });
});

describe.skip("modular special union deserialization", () => {
  it("shouldn't generate deserialize util or as any if there's no special union variant without discriminator", async () => {
    const tspContent = `
    model WidgetData0 {
      fooProp: string;
    }
    
    model WidgetData1 {
      barProp: string;
    }
    
    model Widget {
      @key id: string;
      weight: int32;
      color: "red" | "blue";
    }
    
    model Widget1 extends Widget {
      data: WidgetData0 | WidgetData1
    }

    interface WidgetService {
      @get @route("customGet1") customGet1(): Widget1;
    }
    `;
    const serializeUtil =
      await emitModularSerializeUtilsFromTypeSpec(tspContent);
    assert.ok(serializeUtil);
    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "./index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
        PathUncheckedResponse,
        createRestError,
      } from "@azure-rest/core-client";
      export function _customGet1Send(
        context: Client,
        options: CustomGet1OptionalParams = { requestOptions: {} }
      ): StreamableMethod {
        return context
          .path("/customGet1")
          .get({ ...operationOptionsToRequestParameters(options) });
      }
      export async function _customGet1Deserialize(
        result: PathUncheckedResponse
      ): Promise<Widget1> {
        const expectedStatuses = ["200"];
        if (!expectedStatuses.includes(result.status)) {
          throw createRestError(result);
        }
        return {
          id: result.body["id"],
          weight: result.body["weight"],
          color: result.body["color"],
          data: result.body["data"],
        };
      }
      export async function customGet1(
        context: Client,
        options: CustomGet1OptionalParams = { requestOptions: {} }
      ): Promise<Widget1> {
        const result = await _customGet1Send(context, options);
        return _customGet1Deserialize(result);
      }
      `,
      true
    );
  });

  it("shouldn't generate deserialize util or as any if there's no special union variant with discriminator", async () => {
    const tspContent = `
    @discriminator("kind")
    union WidgetData {
      kind0: WidgetData0;
      kind1: WidgetData1;
    }
    model WidgetData0 {
      kind: "kind0";
      fooProp: string;
    }
    
    model WidgetData1 {
      kind: "kind1";
      barProp: string;
    }
    
    model Widget {
      @key id: string;
      weight: int32;
      color: "red" | "blue";
    }
    
    model Widget1 extends Widget {
      data: WidgetData;
    }

    interface WidgetService {
      @get @route("customGet1") customGet1(): Widget1;
    }
    `;
    const serializeUtil =
      await emitModularSerializeUtilsFromTypeSpec(tspContent);
    assert.ok(serializeUtil);
    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "./index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
        PathUncheckedResponse,
        createRestError,
      } from "@azure-rest/core-client";
      export function _customGet1Send(
        context: Client,
        options: CustomGet1OptionalParams = { requestOptions: {} }
      ): StreamableMethod {
        return context
          .path("/customGet1")
          .get({ ...operationOptionsToRequestParameters(options) });
      }
      export async function _customGet1Deserialize(
        result: PathUncheckedResponse
      ): Promise<Widget1> {
        const expectedStatuses = ["200"];
        if (!expectedStatuses.includes(result.status)) {
          throw createRestError(result);
        }
        return {
          id: result.body["id"],
          weight: result.body["weight"],
          color: result.body["color"],
          data: result.body["data"],
        };
      }
      export async function customGet1(
        context: Client,
        options: CustomGet1OptionalParams = { requestOptions: {} }
      ): Promise<Widget1> {
        const result = await _customGet1Send(context, options);
        return _customGet1Deserialize(result);
      }
      `,
      true
    );
  });

  it("should not generate deserialize util but generate as any if there's a special union variant of datatime without discriminator", async () => {
    const tspContent = `
      model WidgetData0 {
        fooProp: string;
      }
      
      model Widget {
        @key id: string;
        weight: int32;
        color: "red" | "blue";
      }
      
      model Widget1 extends Widget {
        data: WidgetData0 | utcDateTime;
      }
  
      interface WidgetService {
        @get @route("customGet1") customGet1(): Widget1;
      }
      `;

    // to test the generated deserialized utils for union variant of model with datetime properties.
    const serializeUtil =
      await emitModularSerializeUtilsFromTypeSpec(tspContent);
    assert.ok(serializeUtil);

    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "./index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
        PathUncheckedResponse,
        createRestError,
      } from "@azure-rest/core-client";
      export function _customGet1Send(
        context: Client,
        options: CustomGet1OptionalParams = { requestOptions: {} }
      ): StreamableMethod {
        return context
          .path("/customGet1")
          .get({ ...operationOptionsToRequestParameters(options) });
      }
      export async function _customGet1Deserialize(
        result: PathUncheckedResponse
      ): Promise<Widget1> {
        const expectedStatuses = ["200"];
        if (!expectedStatuses.includes(result.status)) {
          throw createRestError(result);
        }
        return {
          id: result.body["id"],
          weight: result.body["weight"],
          color: result.body["color"],
          data: result.body["data"] as any,
        };
      }
      export async function customGet1(
        context: Client,
        options: CustomGet1OptionalParams = { requestOptions: {} }
      ): Promise<Widget1> {
        const result = await _customGet1Send(context, options);
        return _customGet1Deserialize(result);
      }
      `,
      true
    );
  });

  it("should not generate deserialize util but generate as any if there's a special union variant of bytes without discriminator", async () => {
    const tspContent = `
    model WidgetData0 {
      fooProp: string;
    }
    
    model Widget {
      @key id: string;
      weight: int32;
      color: "red" | "blue";
    }
    
    model Widget1 extends Widget {
      data: WidgetData0 | bytes;
    }

    interface WidgetService {
      @get @route("customGet1") customGet1(): Widget1;
    }
    `;

    // to test the generated deserialized utils for union variant of model with datetime properties.
    const serializeUtil =
      await emitModularSerializeUtilsFromTypeSpec(tspContent);
    assert.ok(serializeUtil);

    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "./index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
        PathUncheckedResponse,
        createRestError,
      } from "@azure-rest/core-client";
      export function _customGet1Send(
        context: Client,
        options: CustomGet1OptionalParams = { requestOptions: {} }
      ): StreamableMethod {
        return context
          .path("/customGet1")
          .get({ ...operationOptionsToRequestParameters(options) });
      }
      export async function _customGet1Deserialize(
        result: PathUncheckedResponse
      ): Promise<Widget1> {
        const expectedStatuses = ["200"];
        if (!expectedStatuses.includes(result.status)) {
          throw createRestError(result);
        }
        return {
          id: result.body["id"],
          weight: result.body["weight"],
          color: result.body["color"],
          data: result.body["data"] as any,
        };
      }
      export async function customGet1(
        context: Client,
        options: CustomGet1OptionalParams = { requestOptions: {} }
      ): Promise<Widget1> {
        const result = await _customGet1Send(context, options);
        return _customGet1Deserialize(result);
      }
      `,
      true
    );
  });

  it("should not generate deserialize util but generate as any if there's a special union variant of model with datatime property without discriminator", async () => {
    const tspContent = `
    model WidgetData0 {
      fooProp: string;
    }
    
    model WidgetData1 {
      start: utcDateTime;
      end?: utcDateTime;
    }
    
    model Widget {
      @key id: string;
      weight: int32;
      color: "red" | "blue";
    }
    
    model Widget1 extends Widget {
      data: WidgetData0 | WidgetData1
    }

    interface WidgetService {
      @get @route("customGet1") customGet1(): Widget1;
    }
    `;

    // to test the generated deserialized utils for union variant of model with datetime properties.
    const serializeUtil =
      await emitModularSerializeUtilsFromTypeSpec(tspContent);
    assert.ok(serializeUtil);

    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "./index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
        PathUncheckedResponse,
        createRestError,
      } from "@azure-rest/core-client";
      export function _customGet1Send(
        context: Client,
        options: CustomGet1OptionalParams = { requestOptions: {} }
      ): StreamableMethod {
        return context
          .path("/customGet1")
          .get({ ...operationOptionsToRequestParameters(options) });
      }
      export async function _customGet1Deserialize(
        result: PathUncheckedResponse
      ): Promise<Widget1> {
        const expectedStatuses = ["200"];
        if (!expectedStatuses.includes(result.status)) {
          throw createRestError(result);
        }
        return {
          id: result.body["id"],
          weight: result.body["weight"],
          color: result.body["color"],
          data: result.body["data"] as any,
        };
      }
      export async function customGet1(
        context: Client,
        options: CustomGet1OptionalParams = { requestOptions: {} }
      ): Promise<Widget1> {
        const result = await _customGet1Send(context, options);
        return _customGet1Deserialize(result);
      }
      `,
      true
    );
  });

  it("should not generate deserialize util but generate as any if there's a special union variant of model with bytes property without discriminator", async () => {
    const tspContent = `
    model WidgetData0 {
      fooProp: string;
    }
    
    model WidgetData1 {
      data: bytes;
    }
    
    model Widget {
      @key id: string;
      weight: int32;
      color: "red" | "blue";
    }
    
    model Widget1 extends Widget {
      data: WidgetData0 | WidgetData1
    }

    interface WidgetService {
      @get @route("customGet1") customGet1(): Widget1;
    }
    `;

    // to test the generated deserialized utils for union variant of model with datetime properties.
    const serializeUtil =
      await emitModularSerializeUtilsFromTypeSpec(tspContent);
    assert.ok(serializeUtil);

    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "./index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
        PathUncheckedResponse,
        createRestError,
      } from "@azure-rest/core-client";
      export function _customGet1Send(
        context: Client,
        options: CustomGet1OptionalParams = { requestOptions: {} }
      ): StreamableMethod {
        return context
          .path("/customGet1")
          .get({ ...operationOptionsToRequestParameters(options) });
      }
      export async function _customGet1Deserialize(
        result: PathUncheckedResponse
      ): Promise<Widget1> {
        const expectedStatuses = ["200"];
        if (!expectedStatuses.includes(result.status)) {
          throw createRestError(result);
        }
        return {
          id: result.body["id"],
          weight: result.body["weight"],
          color: result.body["color"],
          data: result.body["data"] as any,
        };
      }
      export async function customGet1(
        context: Client,
        options: CustomGet1OptionalParams = { requestOptions: {} }
      ): Promise<Widget1> {
        const result = await _customGet1Send(context, options);
        return _customGet1Deserialize(result);
      }`,
      true
    );
  });

  it("should generate deserialize util if there's a special discriminated union variant of model with datatime property", async () => {
    const tspContent = `
    @discriminator("kind")
    union WidgetData {
      kind0: WidgetData0;
      kind1: WidgetData1;
    }

    model WidgetData0 {
      kind: "kind0";
      fooProp: string;
    }
    
    model WidgetData1 {
      kind: "kind1";
      start: utcDateTime;
      end?: utcDateTime;
    }
    
    model Widget {
      @key id: string;
      weight: int32;
      color: "red" | "blue";
    }
    
    model Widget1 extends Widget {
      data: WidgetData
    }

    interface WidgetService {
      @get @route("customGet1") customGet1(): Widget1;
    }
    `;

    // to test the generated deserialized utils for union variant of model with datetime properties.
    const serializeUtil =
      await emitModularSerializeUtilsFromTypeSpec(tspContent);
    assert.ok(serializeUtil);
    await assertEqualContent(
      serializeUtil?.getFullText()!,
      `
      import { WidgetData1Output, WidgetDataOutput } from "../rest/index.js";
      import { WidgetData1, WidgetData } from "../models/models.js";
      
      /** deserialize function for WidgetData1 */
      function deserializeWidgetData1(obj: WidgetData1Output): WidgetData1 {
        return {
          kind: obj["kind"],
          start: new Date(obj["start"]),
          end: obj["end"] !== undefined ? new Date(obj["end"]) : undefined,
        };
      }
      
      /** deserialize function for WidgetDataOutput */
      export function deserializeWidgetData(obj: WidgetDataOutput): WidgetData {
        switch (obj.kind) {
          case "kind1":
            return deserializeWidgetData1(obj);
          default:
            return obj;
        }
      }
      `
    );

    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "./index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
        PathUncheckedResponse,
        createRestError,
      } from "@azure-rest/core-client";
      export function _customGet1Send(
        context: Client,
        options: CustomGet1OptionalParams = { requestOptions: {} }
      ): StreamableMethod {
        return context
          .path("/customGet1")
          .get({ ...operationOptionsToRequestParameters(options) });
      }
      export async function _customGet1Deserialize(
        result: PathUncheckedResponse
      ): Promise<Widget1> {
        const expectedStatuses = ["200"];
        if (!expectedStatuses.includes(result.status)) {
          throw createRestError(result);
        }
        return {
          id: result.body["id"],
          weight: result.body["weight"],
          color: result.body["color"],
          data: deserializeWidgetData(result.body["data"]),
        };
      }
      export async function customGet1(
        context: Client,
        options: CustomGet1OptionalParams = { requestOptions: {} }
      ): Promise<Widget1> {
        const result = await _customGet1Send(context, options);
        return _customGet1Deserialize(result);
      }
      `,
      true
    );
  });

  it("should generate deserialize util if there's a special discriminated union variant of model with bytes property", async () => {
    const tspContent = `
    @discriminator("kind")
    union WidgetData {
      kind0: WidgetData0;
      kind1: WidgetData1;
    }

    model WidgetData0 {
      kind: "kind0";
      fooProp: string;
    }
    
    model WidgetData1 {
      kind: "kind1";
      data: bytes;
    }
    
    model Widget {
      @key id: string;
      weight: int32;
      color: "red" | "blue";
    }
    
    model Widget1 extends Widget {
      data: WidgetData
    }

    interface WidgetService {
      @get @route("customGet1") customGet1(): Widget1;
    }
    `;

    // to test the generated deserialized utils for union variant of model with datetime properties.
    const serializeUtil =
      await emitModularSerializeUtilsFromTypeSpec(tspContent);
    assert.ok(serializeUtil);
    await assertEqualContent(
      serializeUtil?.getFullText()!,
      `
      import { WidgetData1Output, WidgetDataOutput } from "../rest/index.js";
      import { WidgetData1, WidgetData } from "../models/models.js";
      import { stringToUint8Array } from "@azure/core-util";
      
      /** deserialize function for WidgetData1 */
      function deserializeWidgetData1(obj: WidgetData1Output): WidgetData1 {
        return {
          kind: obj["kind"],
          data:
            typeof obj["data"] === "string"
              ? stringToUint8Array(obj["data"], "base64")
              : obj["data"],
        };
      }
      
      /** deserialize function for WidgetDataOutput */
      export function deserializeWidgetData(obj: WidgetDataOutput): WidgetData {
        switch (obj.kind) {
          case "kind1":
            return deserializeWidgetData1(obj);
          default:
            return obj;
        }
      }`
    );

    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "./index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
        PathUncheckedResponse,
        createRestError,
      } from "@azure-rest/core-client";
      export function _customGet1Send(
        context: Client,
        options: CustomGet1OptionalParams = { requestOptions: {} }
      ): StreamableMethod {
        return context
          .path("/customGet1")
          .get({ ...operationOptionsToRequestParameters(options) });
      }
      export async function _customGet1Deserialize(
        result: PathUncheckedResponse
      ): Promise<Widget1> {
        const expectedStatuses = ["200"];
        if (!expectedStatuses.includes(result.status)) {
          throw createRestError(result);
        }
        return {
          id: result.body["id"],
          weight: result.body["weight"],
          color: result.body["color"],
          data: deserializeWidgetData(result.body["data"]),
        };
      }
      export async function customGet1(
        context: Client,
        options: CustomGet1OptionalParams = { requestOptions: {} }
      ): Promise<Widget1> {
        const result = await _customGet1Send(context, options);
        return _customGet1Deserialize(result);
      }
      `,
      true
    );
  });

  it("should generate serialize util if there're special discriminated union variants of model with bytes and datetime property", async () => {
    const tspContent = `
    @discriminator("kind")
    union WidgetData {
      kind0: WidgetData0;
      kind1: WidgetData1;
    }

    model WidgetData0 {
      kind: "kind0";
      fooProp: bytes;
    }
    
    model WidgetData1 {
      kind: "kind1";
      data: utcDateTime;
    }
    
    model Widget {
      @key id: string;
      weight: int32;
      color: "red" | "blue";
    }
    
    model Widget1 extends Widget {
      data: WidgetData
    }

    interface WidgetService {
      @get @route("customGet1") customGet1(): Widget1;
    }
    `;

    // to test the generated deserialized utils for union variant of model with datetime properties.
    const serializeUtil =
      await emitModularSerializeUtilsFromTypeSpec(tspContent);
    assert.ok(serializeUtil);
    await assertEqualContent(
      serializeUtil?.getFullText()!,
      `
      import {
        WidgetData0Output,
        WidgetData1Output,
        WidgetDataOutput,
      } from "../rest/index.js";
      import { WidgetData0, WidgetData1, WidgetData } from "../models/models.js";
      import { stringToUint8Array } from "@azure/core-util";
      
      /** deserialize function for WidgetData0 */
      function deserializeWidgetData0(obj: WidgetData0Output): WidgetData0 {
        return {
          kind: obj["kind"],
          fooProp:
            typeof obj["fooProp"] === "string"
              ? stringToUint8Array(obj["fooProp"], "base64")
              : obj["fooProp"],
        };
      }
      
      /** deserialize function for WidgetData1 */
      function deserializeWidgetData1(obj: WidgetData1Output): WidgetData1 {
        return { kind: obj["kind"], data: new Date(obj["data"]) };
      }
      
      /** deserialize function for WidgetDataOutput */
      export function deserializeWidgetData(obj: WidgetDataOutput): WidgetData {
        switch (obj.kind) {
          case "kind0":
            return deserializeWidgetData0(obj);
          case "kind1":
            return deserializeWidgetData1(obj);
          default:
            return obj;
        }
      }
      `
    );

    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "./index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
        PathUncheckedResponse,
        createRestError,
      } from "@azure-rest/core-client";
      export function _customGet1Send(
        context: Client,
        options: CustomGet1OptionalParams = { requestOptions: {} },
      ): StreamableMethod {
        return context
          .path("/customGet1")
          .get({ ...operationOptionsToRequestParameters(options) });
      }
      export async function _customGet1Deserialize(
        result: PathUncheckedResponse,
      ): Promise<Widget1> {
        const expectedStatuses = ["200"];
        if (!expectedStatuses.includes(result.status)) {
          throw createRestError(result);
        }
        return {
          id: result.body["id"],
          weight: result.body["weight"],
          color: result.body["color"],
          data: deserializeWidgetData(result.body["data"]),
        };
      }
      export async function customGet1(
        context: Client,
        options: CustomGet1OptionalParams = { requestOptions: {} },
      ): Promise<Widget1> {
        const result = await _customGet1Send(context, options);
        return _customGet1Deserialize(result);
      }
      `,
      true
    );
  });

  it("should generate serialize util if there're special discriminated union variants of model with bytes and bytes property", async () => {
    const tspContent = `
    @discriminator("kind")
    union WidgetData {
      kind0: WidgetData0;
      kind1: WidgetData1;
    }

    model WidgetData0 {
      kind: "kind0";
      fooProp: bytes;
    }
    
    model WidgetData1 {
      kind: "kind1";
      data: bytes;
    }
    
    model Widget {
      @key id: string;
      weight: int32;
      color: "red" | "blue";
    }
    
    model Widget1 extends Widget {
      data: WidgetData
    }

    interface WidgetService {
      @get @route("customGet1") customGet1(): Widget1;
    }
    `;

    // to test the generated deserialized utils for union variant of model with datetime properties.
    const serializeUtil =
      await emitModularSerializeUtilsFromTypeSpec(tspContent);
    assert.ok(serializeUtil);
    await assertEqualContent(
      serializeUtil?.getFullText()!,
      `
      import {
        WidgetData0Output,
        WidgetData1Output,
        WidgetDataOutput,
      } from "../rest/index.js";
      import { WidgetData0, WidgetData1, WidgetData } from "../models/models.js";
      import { stringToUint8Array } from "@azure/core-util";
      
      /** deserialize function for WidgetData0 */
      function deserializeWidgetData0(obj: WidgetData0Output): WidgetData0 {
        return {
          kind: obj["kind"],
          fooProp:
            typeof obj["fooProp"] === "string"
              ? stringToUint8Array(obj["fooProp"], "base64")
              : obj["fooProp"],
        };
      }
      
      /** deserialize function for WidgetData1 */
      function deserializeWidgetData1(obj: WidgetData1Output): WidgetData1 {
        return {
          kind: obj["kind"],
          data:
            typeof obj["data"] === "string"
              ? stringToUint8Array(obj["data"], "base64")
              : obj["data"],
        };
      }
      
      /** deserialize function for WidgetDataOutput */
      export function deserializeWidgetData(obj: WidgetDataOutput): WidgetData {
        switch (obj.kind) {
          case "kind0":
            return deserializeWidgetData0(obj);
          case "kind1":
            return deserializeWidgetData1(obj);
          default:
            return obj;
        }
      }
      `
    );

    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "./index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
        PathUncheckedResponse,
        createRestError,
      } from "@azure-rest/core-client";
      export function _customGet1Send(
        context: Client,
        options: CustomGet1OptionalParams = { requestOptions: {} },
      ): StreamableMethod {
        return context
          .path("/customGet1")
          .get({ ...operationOptionsToRequestParameters(options) });
      }
      export async function _customGet1Deserialize(
        result: PathUncheckedResponse,
      ): Promise<Widget1> {
        const expectedStatuses = ["200"];
        if (!expectedStatuses.includes(result.status)) {
          throw createRestError(result);
        }
        return {
          id: result.body["id"],
          weight: result.body["weight"],
          color: result.body["color"],
          data: deserializeWidgetData(result.body["data"]),
        };
      }
      export async function customGet1(
        context: Client,
        options: CustomGet1OptionalParams = { requestOptions: {} },
      ): Promise<Widget1> {
        const result = await _customGet1Send(context, options);
        return _customGet1Deserialize(result);
      }
      `,
      true
    );
  });

  it("should not generate deserialize util even if circular in model properties but no other special variants", async () => {
    const tspContent = `
    @discriminator("kind")
    model Pet {
      kind: string;
      name: string;
      weight?: float32;
    }
    model Cat extends Pet {
      kind: "cat";
      meow: int32;
    }
    @discriminator("type")
    model Dog extends Pet {
      kind: "dog";
      type: string;
      bark: string;
    }
    model Gold extends Dog {
      type: "gold";
      friends: Pet[];
    }
    op read(): { @body body: Pet };
    `;
    const serializeUtil =
      await emitModularSerializeUtilsFromTypeSpec(tspContent);
    assert.ok(serializeUtil);
  });

  it("should generate deserialize util even if circular in model properties but no other special variants", async () => {
    const tspContent = `
    @discriminator("kind")
    model Pet {
      kind: string;
      name: string;
      weight?: float32;
    }
    model Cat extends Pet {
      kind: "cat";
      meow: int32;
    }
    @discriminator("type")
    model Dog extends Pet {
      kind: "dog";
      type: string;
      bark: string;
    }
    model Gold extends Dog {
      type: "gold";
      friends: Pet[];
      birthDay: utcDateTime;
    }
    op read(): { @body body: Pet };
    `;
    const serializeUtil =
      await emitModularSerializeUtilsFromTypeSpec(tspContent);
    assert.ok(serializeUtil);
    await assertEqualContent(
      serializeUtil?.getFullText()!,
      `
      import { PetUnion, Gold, DogUnion } from "../models/models.js";
      import { PetOutput, GoldOutput, DogOutput } from "../rest/index.js";
      
      /** deserialize function for PetOutput */
      export function deserializePetUnion(obj: PetOutput): PetUnion {
        switch (obj.kind) {
          case "dog":
            return deserializeDogUnion(obj as DogUnion);
          default:
            return obj;
        }
      }
      
      /** deserialize function for Gold */
      function deserializeGold(obj: GoldOutput): Gold {
        return {
          kind: obj["kind"],
          type: obj["type"],
          bark: obj["bark"],
          name: obj["name"],
          weight: obj["weight"],
          friends: obj["friends"].map((p: any) => deserializePetUnion(p)),
          birthDay: new Date(obj["birthDay"]),
        };
      }
      
      /** deserialize function for DogOutput */
      export function deserializeDogUnion(obj: DogOutput): DogUnion {
        switch (obj.type) {
          case "gold":
            return deserializeGold(obj as Gold);
          default:
            return obj;
        }
      }
      `
    );
  });
});
