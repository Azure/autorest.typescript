import { assert } from "chai";
import {
  emitModularSerializeUtilsFromTypeSpec,
  emitModularOperationsFromTypeSpec
} from "../util/emitUtil.js";
import { assertEqualContent } from "../util/testUtil.js";

describe.only("modular special union serialization", () => {
  it("shouldn't generate serialize util or as any if there's no special union variant without discriminator", async () => {
    const serializeUtil = await emitModularSerializeUtilsFromTypeSpec(`
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
      `);
    assert.ok(serializeUtil?.length === 0);
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
    assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "../rest/index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
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
          throw result.body;
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
    assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "../rest/index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
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
          throw result.body;
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
    assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "../rest/index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
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
          throw result.body;
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
    assert.ok(serializeUtil);
    assertEqualContent(
      serializeUtil?.[0]?.getFullText()!,
      `
      import { WidgetData0, WidgetData1 } from "../models/models.js";
      import { uint8ArrayToString } from "@azure/core-util";
      import {
        WidgetData0 as WidgetData0Rest,
        WidgetData1 as WidgetData1Rest,
      } from "../rest/index.js";
      
      /** type predict function for WidgetData1 from WidgetData0 | WidgetData1 */
      function isWidgetData1(obj: WidgetData0 | WidgetData1): obj is WidgetData1 {
        return (obj as WidgetData1).data !== undefined;
      }
      
      /** serialize function for WidgetData1 */
      function serializeWidgetData1(obj: WidgetData1): WidgetData1Rest {
        return { data: uint8ArrayToString(obj["data"], "base64") };
      }
      
      /** serialize function for WidgetData0 | WidgetData1 */
      export function serializeWidgetData0AndWidgetData1Union(
        obj: WidgetData0 | WidgetData1
      ): WidgetData0Rest | WidgetData1Rest {
        if (isWidgetData1(obj)) {
          return serializeWidgetData1(obj);
        }
        return obj;
      }
      `
    );

    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "../rest/index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
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
              data: serializeWidgetData0AndWidgetData1Union(body["data"]),
            },
          });
      }
      
      export async function _customGet1Deserialize(
        result: CustomGet1204Response
      ): Promise<void> {
        if (result.status !== "204") {
          throw result.body;
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

  it("should generate serialize util but generate as any if there's a special discriminated union variant of model with datatime property", async () => {
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
    assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "../rest/index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
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
          throw result.body;
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

  it.only("should generate serialize util but generate as any if there's a special discriminated union variant of model with bytes property", async () => {
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
    assertEqualContent(
      serializeUtil?.[0]?.getFullText()!,
      `
      import { WidgetData0, WidgetData1 } from "../models/models.js";
      import { uint8ArrayToString } from "@azure/core-util";
      import {
        WidgetData0 as WidgetData0Rest,
        WidgetData1 as WidgetData1Rest,
      } from "../rest/index.js";
      
      /** type predict function for WidgetData1 from WidgetData0 | WidgetData1 */
      function isWidgetData1(obj: WidgetData0 | WidgetData1): obj is WidgetData1 {
        return (obj as WidgetData1).data !== undefined;
      }
      
      /** serialize function for WidgetData1 */
      function serializeWidgetData1(obj: WidgetData1): WidgetData1Rest {
        return { data: uint8ArrayToString(obj["data"], "base64") };
      }
      
      /** serialize function for WidgetData0 | WidgetData1 */
      export function serializeWidgetData0AndWidgetData1Union(
        obj: WidgetData0 | WidgetData1
      ): WidgetData0Rest | WidgetData1Rest {
        if (isWidgetData1(obj)) {
          return serializeWidgetData1(obj);
        }
        return obj;
      }
      `
    );

    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "../rest/index.js";
      import {
        StreamableMethod,
        operationOptionsToRequestParameters,
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
              data: serializeWidgetData0AndWidgetData1Union(body["data"]),
            },
          });
      }
      
      export async function _customGet1Deserialize(
        result: CustomGet1204Response
      ): Promise<void> {
        if (result.status !== "204") {
          throw result.body;
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
});
