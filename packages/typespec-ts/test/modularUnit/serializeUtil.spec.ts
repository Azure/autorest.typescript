import { assert } from "chai";
import {
  emitModularSerializeUtilsFromTypeSpec,
  emitModularOperationsFromTypeSpec
} from "../util/emitUtil.js";
import { assertEqualContent } from "../util/testUtil.js";

describe("modular special union serialization", () => {
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
    const serializeUtil = await emitModularSerializeUtilsFromTypeSpec(
      tspContent
    );
    assert.ok(serializeUtil?.length === 0);
    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "../rest/index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
        createRestError,
      } from "@azure-rest/core-client";
      
      export function _customGet1Send(
        context: Client,
        body: Widget1,
        options: CustomGet1Options = { requestOptions: {} }
      ): StreamableMethod<CustomGet1204Response> {
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
        result: CustomGet1204Response
      ): Promise<void> {
        if (result.status !== "204") {
          throw createRestError(result);
        }

        return;
      }
      
      export async function customGet1(
        context: Client,
        body: Widget1,
        options: CustomGet1Options = { requestOptions: {} }
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
    const serializeUtil = await emitModularSerializeUtilsFromTypeSpec(
      tspContent
    );
    assert.ok(serializeUtil?.length === 0);
    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "../rest/index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
        createRestError,
      } from "@azure-rest/core-client";
      
      export function _customGet1Send(
        context: Client,
        body: Widget1,
        options: CustomGet1Options = { requestOptions: {} }
      ): StreamableMethod<CustomGet1204Response> {
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
        result: CustomGet1204Response
      ): Promise<void> {
        if (result.status !== "204") {
          throw createRestError(result);
        }

        return;
      }
      
      export async function customGet1(
        context: Client,
        body: Widget1,
        options: CustomGet1Options = { requestOptions: {} }
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
    const serializeUtil = await emitModularSerializeUtilsFromTypeSpec(
      tspContent
    );
    assert.ok(serializeUtil?.length === 0);

    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "../rest/index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
        createRestError,
      } from "@azure-rest/core-client";
      
      export function _customGet1Send(
        context: Client,
        body: Widget1,
        options: CustomGet1Options = { requestOptions: {} }
      ): StreamableMethod<CustomGet1204Response> {
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
        result: CustomGet1204Response
      ): Promise<void> {
        if (result.status !== "204") {
          throw createRestError(result);
        }

        return;
      }
      
      export async function customGet1(
        context: Client,
        body: Widget1,
        options: CustomGet1Options = { requestOptions: {} }
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
    const serializeUtil = await emitModularSerializeUtilsFromTypeSpec(
      tspContent
    );
    assert.ok(serializeUtil?.length === 0);

    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "../rest/index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
        createRestError,
      } from "@azure-rest/core-client";
      
      export function _customGet1Send(
        context: Client,
        body: Widget1,
        options: CustomGet1Options = { requestOptions: {} }
      ): StreamableMethod<CustomGet1204Response> {
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
        result: CustomGet1204Response
      ): Promise<void> {
        if (result.status !== "204") {
          throw createRestError(result);
        }
      
        return;
      }
      
      export async function customGet1(
        context: Client,
        body: Widget1,
        options: CustomGet1Options = { requestOptions: {} }
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
    const serializeUtil = await emitModularSerializeUtilsFromTypeSpec(
      tspContent
    );
    assert.ok(serializeUtil?.length === 0);

    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "../rest/index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
        createRestError,
      } from "@azure-rest/core-client";
      
      export function _customGet1Send(
        context: Client,
        body: Widget1,
        options: CustomGet1Options = { requestOptions: {} }
      ): StreamableMethod<CustomGet1204Response> {
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
        result: CustomGet1204Response
      ): Promise<void> {
        if (result.status !== "204") {
          throw createRestError(result);
        }
      
        return;
      }
      
      export async function customGet1(
        context: Client,
        body: Widget1,
        options: CustomGet1Options = { requestOptions: {} }
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
    const serializeUtil = await emitModularSerializeUtilsFromTypeSpec(
      tspContent
    );
    assert.ok(serializeUtil?.length === 0);

    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "../rest/index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
        createRestError,
      } from "@azure-rest/core-client";
      
      export function _customGet1Send(
        context: Client,
        body: Widget1,
        options: CustomGet1Options = { requestOptions: {} }
      ): StreamableMethod<CustomGet1204Response> {
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
        result: CustomGet1204Response
      ): Promise<void> {
        if (result.status !== "204") {
          throw createRestError(result);
        }
      
        return;
      }
      
      export async function customGet1(
        context: Client,
        body: Widget1,
        options: CustomGet1Options = { requestOptions: {} }
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
    const serializeUtil = await emitModularSerializeUtilsFromTypeSpec(
      tspContent
    );
    assert.equal(serializeUtil?.length, 1);
    await assertEqualContent(
      serializeUtil?.[0]?.getFullText()!,
      `
      import {
        WidgetData1 as WidgetData1Rest,
        WidgetData as WidgetDataRest,
      } from "../rest/index.js";
      import { WidgetData1, WidgetData } from "../models/models.js";
      
      /** serialize function for WidgetData1 */
      function serializeWidgetData1(obj: WidgetData1): WidgetData1Rest {
        return {
          kind: obj["kind"],
          start: obj["start"].toISOString(),
          end: obj["end"]?.toISOString(),
        };
      }
      
      /** serialize function for WidgetData */
      export function serializeWidgetData(obj: WidgetData): WidgetDataRest {
        switch (obj.kind) {
          case "kind1":
            return serializeWidgetData1(obj);
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
      import { TestingContext as Client } from "../rest/index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
        createRestError,
      } from "@azure-rest/core-client";
      export function _customGet1Send(
        context: Client,
        body: Widget1,
        options: CustomGet1Options = { requestOptions: {} }
      ): StreamableMethod<CustomGet1204Response> {
        return context
          .path("/customGet1")
          .get({
            ...operationOptionsToRequestParameters(options),
            body: {
              id: body["id"],
              weight: body["weight"],
              color: body["color"],
              data: serializeWidgetData(body["data"]),
            },
          });
      }
      export async function _customGet1Deserialize(
        result: CustomGet1204Response
      ): Promise<void> {
        if (result.status !== "204") {
          throw createRestError(result);
        }
        return;
      }
      export async function customGet1(
        context: Client,
        body: Widget1,
        options: CustomGet1Options = { requestOptions: {} }
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
    const serializeUtil = await emitModularSerializeUtilsFromTypeSpec(
      tspContent
    );
    assert.ok(serializeUtil);
    await assertEqualContent(
      serializeUtil?.[0]?.getFullText()!,
      `
      import { uint8ArrayToString } from "@azure/core-util";
      import {
        WidgetData1 as WidgetData1Rest,
        WidgetData as WidgetDataRest,
      } from "../rest/index.js";
      import { WidgetData1, WidgetData } from "../models/models.js";
      
      /** serialize function for WidgetData1 */
      function serializeWidgetData1(obj: WidgetData1): WidgetData1Rest {
        return { kind: obj["kind"], data: uint8ArrayToString(obj["data"], "base64") };
      }
      
      /** serialize function for WidgetData */
      export function serializeWidgetData(obj: WidgetData): WidgetDataRest {
        switch (obj.kind) {
          case "kind1":
            return serializeWidgetData1(obj);
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
      import { TestingContext as Client } from "../rest/index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
        createRestError,
      } from "@azure-rest/core-client";
      
      export function _customGet1Send(
        context: Client,
        body: Widget1,
        options: CustomGet1Options = { requestOptions: {} }
      ): StreamableMethod<CustomGet1204Response> {
        return context
          .path("/customGet1")
          .get({
            ...operationOptionsToRequestParameters(options),
            body: {
              id: body["id"],
              weight: body["weight"],
              color: body["color"],
              data: serializeWidgetData(body["data"]),
            },
          });
      }
      
      export async function _customGet1Deserialize(
        result: CustomGet1204Response
      ): Promise<void> {
        if (result.status !== "204") {
          throw createRestError(result);
        }
      
        return;
      }
      
      export async function customGet1(
        context: Client,
        body: Widget1,
        options: CustomGet1Options = { requestOptions: {} }
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
    const serializeUtil = await emitModularSerializeUtilsFromTypeSpec(
      tspContent
    );
    assert.ok(serializeUtil);
    await assertEqualContent(
      serializeUtil?.[0]?.getFullText()!,
      `
      import { uint8ArrayToString } from "@azure/core-util";
      import {
        WidgetData0 as WidgetData0Rest,
        WidgetData1 as WidgetData1Rest,
        WidgetData as WidgetDataRest,
      } from "../rest/index.js";
      import { WidgetData0, WidgetData1, WidgetData } from "../models/models.js";
      
      /** serialize function for WidgetData0 */
      function serializeWidgetData0(obj: WidgetData0): WidgetData0Rest {
        return {
          kind: obj["kind"],
          fooProp: uint8ArrayToString(obj["fooProp"], "base64"),
        };
      }
      
      /** serialize function for WidgetData1 */
      function serializeWidgetData1(obj: WidgetData1): WidgetData1Rest {
        return { kind: obj["kind"], data: obj["data"].toISOString() };
      }
      
      /** serialize function for WidgetData */
      export function serializeWidgetData(obj: WidgetData): WidgetDataRest {
        switch (obj.kind) {
          case "kind0":
            return serializeWidgetData0(obj);
          case "kind1":
            return serializeWidgetData1(obj);
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
      import { TestingContext as Client } from "../rest/index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
        createRestError,
      } from "@azure-rest/core-client";
      export function _customGet1Send(
        context: Client,
        body: Widget1,
        options: CustomGet1Options = { requestOptions: {} },
      ): StreamableMethod<CustomGet1204Response> {
        return context
          .path("/customGet1")
          .get({
            ...operationOptionsToRequestParameters(options),
            body: {
              id: body["id"],
              weight: body["weight"],
              color: body["color"],
              data: serializeWidgetData(body["data"]),
            },
          });
      }
      export async function _customGet1Deserialize(
        result: CustomGet1204Response,
      ): Promise<void> {
        if (result.status !== "204") {
          throw createRestError(result);
        }
        return;
      }
      export async function customGet1(
        context: Client,
        body: Widget1,
        options: CustomGet1Options = { requestOptions: {} },
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
    const serializeUtil = await emitModularSerializeUtilsFromTypeSpec(
      tspContent
    );
    assert.ok(serializeUtil);
    await assertEqualContent(
      serializeUtil?.[0]?.getFullText()!,
      `
      import { uint8ArrayToString } from "@azure/core-util";
      import {
        WidgetData0 as WidgetData0Rest,
        WidgetData1 as WidgetData1Rest,
        WidgetData as WidgetDataRest,
      } from "../rest/index.js";
      import { WidgetData0, WidgetData1, WidgetData } from "../models/models.js";
      
      /** serialize function for WidgetData0 */
      function serializeWidgetData0(obj: WidgetData0): WidgetData0Rest {
        return {
          kind: obj["kind"],
          fooProp: uint8ArrayToString(obj["fooProp"], "base64"),
        };
      }
      
      /** serialize function for WidgetData1 */
      function serializeWidgetData1(obj: WidgetData1): WidgetData1Rest {
        return { kind: obj["kind"], data: uint8ArrayToString(obj["data"], "base64") };
      }
      
      /** serialize function for WidgetData */
      export function serializeWidgetData(obj: WidgetData): WidgetDataRest {
        switch (obj.kind) {
          case "kind0":
            return serializeWidgetData0(obj);
          case "kind1":
            return serializeWidgetData1(obj);
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
      import { TestingContext as Client } from "../rest/index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
        createRestError,
      } from "@azure-rest/core-client";
      export function _customGet1Send(
        context: Client,
        body: Widget1,
        options: CustomGet1Options = { requestOptions: {} },
      ): StreamableMethod<CustomGet1204Response> {
        return context
          .path("/customGet1")
          .get({
            ...operationOptionsToRequestParameters(options),
            body: {
              id: body["id"],
              weight: body["weight"],
              color: body["color"],
              data: serializeWidgetData(body["data"]),
            },
          });
      }
      export async function _customGet1Deserialize(
        result: CustomGet1204Response,
      ): Promise<void> {
        if (result.status !== "204") {
          throw createRestError(result);
        }
        return;
      }
      export async function customGet1(
        context: Client,
        body: Widget1,
        options: CustomGet1Options = { requestOptions: {} },
      ): Promise<void> {
        const result = await _customGet1Send(context, body, options);
        return _customGet1Deserialize(result);
      }
      `,
      true
    );
  });
});

describe("modular special union deserialization", () => {
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
    const serializeUtil = await emitModularSerializeUtilsFromTypeSpec(
      tspContent
    );
    assert.ok(serializeUtil?.length === 0);
    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "../rest/index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
        createRestError,
      } from "@azure-rest/core-client";
      export function _customGet1Send(
        context: Client,
        options: CustomGet1Options = { requestOptions: {} }
      ): StreamableMethod<CustomGet1200Response> {
        return context
          .path("/customGet1")
          .get({ ...operationOptionsToRequestParameters(options) });
      }
      export async function _customGet1Deserialize(
        result: CustomGet1200Response
      ): Promise<Widget1> {
        if (result.status !== "200") {
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
        options: CustomGet1Options = { requestOptions: {} }
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
    const serializeUtil = await emitModularSerializeUtilsFromTypeSpec(
      tspContent
    );
    assert.ok(serializeUtil?.length === 0);
    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "../rest/index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
        createRestError,
      } from "@azure-rest/core-client";
      export function _customGet1Send(
        context: Client,
        options: CustomGet1Options = { requestOptions: {} }
      ): StreamableMethod<CustomGet1200Response> {
        return context
          .path("/customGet1")
          .get({ ...operationOptionsToRequestParameters(options) });
      }
      export async function _customGet1Deserialize(
        result: CustomGet1200Response
      ): Promise<Widget1> {
        if (result.status !== "200") {
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
        options: CustomGet1Options = { requestOptions: {} }
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
    const serializeUtil = await emitModularSerializeUtilsFromTypeSpec(
      tspContent
    );
    assert.ok(serializeUtil?.length === 0);

    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "../rest/index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
        createRestError,
      } from "@azure-rest/core-client";
      export function _customGet1Send(
        context: Client,
        options: CustomGet1Options = { requestOptions: {} }
      ): StreamableMethod<CustomGet1200Response> {
        return context
          .path("/customGet1")
          .get({ ...operationOptionsToRequestParameters(options) });
      }
      export async function _customGet1Deserialize(
        result: CustomGet1200Response
      ): Promise<Widget1> {
        if (result.status !== "200") {
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
        options: CustomGet1Options = { requestOptions: {} }
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
    const serializeUtil = await emitModularSerializeUtilsFromTypeSpec(
      tspContent
    );
    assert.ok(serializeUtil?.length === 0);

    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "../rest/index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
        createRestError,
      } from "@azure-rest/core-client";
      export function _customGet1Send(
        context: Client,
        options: CustomGet1Options = { requestOptions: {} }
      ): StreamableMethod<CustomGet1200Response> {
        return context
          .path("/customGet1")
          .get({ ...operationOptionsToRequestParameters(options) });
      }
      export async function _customGet1Deserialize(
        result: CustomGet1200Response
      ): Promise<Widget1> {
        if (result.status !== "200") {
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
        options: CustomGet1Options = { requestOptions: {} }
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
    const serializeUtil = await emitModularSerializeUtilsFromTypeSpec(
      tspContent
    );
    assert.ok(serializeUtil?.length === 0);

    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "../rest/index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
        createRestError,
      } from "@azure-rest/core-client";
      export function _customGet1Send(
        context: Client,
        options: CustomGet1Options = { requestOptions: {} }
      ): StreamableMethod<CustomGet1200Response> {
        return context
          .path("/customGet1")
          .get({ ...operationOptionsToRequestParameters(options) });
      }
      export async function _customGet1Deserialize(
        result: CustomGet1200Response
      ): Promise<Widget1> {
        if (result.status !== "200") {
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
        options: CustomGet1Options = { requestOptions: {} }
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
    const serializeUtil = await emitModularSerializeUtilsFromTypeSpec(
      tspContent
    );
    assert.ok(serializeUtil?.length === 0);

    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "../rest/index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
        createRestError,
      } from "@azure-rest/core-client";
      export function _customGet1Send(
        context: Client,
        options: CustomGet1Options = { requestOptions: {} }
      ): StreamableMethod<CustomGet1200Response> {
        return context
          .path("/customGet1")
          .get({ ...operationOptionsToRequestParameters(options) });
      }
      export async function _customGet1Deserialize(
        result: CustomGet1200Response
      ): Promise<Widget1> {
        if (result.status !== "200") {
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
        options: CustomGet1Options = { requestOptions: {} }
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
    const serializeUtil = await emitModularSerializeUtilsFromTypeSpec(
      tspContent
    );
    assert.equal(serializeUtil?.length, 1);
    await assertEqualContent(
      serializeUtil?.[0]?.getFullText()!,
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
      import { TestingContext as Client } from "../rest/index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
        createRestError,
      } from "@azure-rest/core-client";
      export function _customGet1Send(
        context: Client,
        options: CustomGet1Options = { requestOptions: {} }
      ): StreamableMethod<CustomGet1200Response> {
        return context
          .path("/customGet1")
          .get({ ...operationOptionsToRequestParameters(options) });
      }
      export async function _customGet1Deserialize(
        result: CustomGet1200Response
      ): Promise<Widget1> {
        if (result.status !== "200") {
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
        options: CustomGet1Options = { requestOptions: {} }
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
    const serializeUtil = await emitModularSerializeUtilsFromTypeSpec(
      tspContent
    );
    assert.ok(serializeUtil);
    await assertEqualContent(
      serializeUtil?.[0]?.getFullText()!,
      `
      import { stringToUint8Array } from "@azure/core-util";
      import { WidgetData1Output, WidgetDataOutput } from "../rest/index.js";
      import { WidgetData1, WidgetData } from "../models/models.js";
      
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
      import { TestingContext as Client } from "../rest/index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
        createRestError,
      } from "@azure-rest/core-client";
      export function _customGet1Send(
        context: Client,
        options: CustomGet1Options = { requestOptions: {} }
      ): StreamableMethod<CustomGet1200Response> {
        return context
          .path("/customGet1")
          .get({ ...operationOptionsToRequestParameters(options) });
      }
      export async function _customGet1Deserialize(
        result: CustomGet1200Response
      ): Promise<Widget1> {
        if (result.status !== "200") {
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
        options: CustomGet1Options = { requestOptions: {} }
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
    const serializeUtil = await emitModularSerializeUtilsFromTypeSpec(
      tspContent
    );
    assert.ok(serializeUtil);
    await assertEqualContent(
      serializeUtil?.[0]?.getFullText()!,
      `
      import { stringToUint8Array } from "@azure/core-util";
      import {
        WidgetData0Output,
        WidgetData1Output,
        WidgetDataOutput,
      } from "../rest/index.js";
      import { WidgetData0, WidgetData1, WidgetData } from "../models/models.js";
      
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
      import { TestingContext as Client } from "../rest/index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
        createRestError,
      } from "@azure-rest/core-client";
      export function _customGet1Send(
        context: Client,
        options: CustomGet1Options = { requestOptions: {} },
      ): StreamableMethod<CustomGet1200Response> {
        return context
          .path("/customGet1")
          .get({ ...operationOptionsToRequestParameters(options) });
      }
      export async function _customGet1Deserialize(
        result: CustomGet1200Response,
      ): Promise<Widget1> {
        if (result.status !== "200") {
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
        options: CustomGet1Options = { requestOptions: {} },
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
    const serializeUtil = await emitModularSerializeUtilsFromTypeSpec(
      tspContent
    );
    assert.ok(serializeUtil);
    await assertEqualContent(
      serializeUtil?.[0]?.getFullText()!,
      `
      import { stringToUint8Array } from "@azure/core-util";
      import {
        WidgetData0Output,
        WidgetData1Output,
        WidgetDataOutput,
      } from "../rest/index.js";
      import { WidgetData0, WidgetData1, WidgetData } from "../models/models.js";
      
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
      import { TestingContext as Client } from "../rest/index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
        createRestError,
      } from "@azure-rest/core-client";
      export function _customGet1Send(
        context: Client,
        options: CustomGet1Options = { requestOptions: {} },
      ): StreamableMethod<CustomGet1200Response> {
        return context
          .path("/customGet1")
          .get({ ...operationOptionsToRequestParameters(options) });
      }
      export async function _customGet1Deserialize(
        result: CustomGet1200Response,
      ): Promise<Widget1> {
        if (result.status !== "200") {
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
        options: CustomGet1Options = { requestOptions: {} },
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
    const serializeUtil = await emitModularSerializeUtilsFromTypeSpec(
      tspContent
    );
    assert.ok(serializeUtil?.length === 0);
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
    const serializeUtil = await emitModularSerializeUtilsFromTypeSpec(
      tspContent
    );
    assert.equal(serializeUtil?.length, 1);
    await assertEqualContent(
      serializeUtil?.[0]?.getFullText()!,
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
          friends: obj["friends"].map((p) => deserializePetUnion(p)),
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
