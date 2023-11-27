import { assert } from "chai";
import { emitModularDeserializeUtilsFromTypeSpec, emitModularOperationsFromTypeSpec } from "../util/emitUtil.js";
import { assertEqualContent } from "../util/testUtil.js";

describe("modular special union serialization", () => {
  it("shouldn't generate serialize util if there's no special union variant", async () => {
    const operationUtil = await emitModularDeserializeUtilsFromTypeSpec(`
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
    assert.ok(operationUtil?.length === 0);
  });

  it.only("should generate serialize util if there's a special union variant of datatime", async () => {
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
    const operationUtil = await emitModularDeserializeUtilsFromTypeSpec(tspContent);
    assert.ok(operationUtil);
    assertEqualContent(
      operationUtil?.[0]?.getFullText()!,
      `
      import { WidgetData0Output } from "../rest/index.js";
      import { WidgetData0 } from "../models/models.js";
      
      /** type predict function for datetime from WidgetData0Output | string */
      function isDatetime(obj: WidgetData0Output | string): obj is string {
        if (typeof obj === "string") {
          return true;
        }
        return false;
      }
      
      /** serialize function for datetime */
      function serializeDatetime(obj: Date): string {
        return obj.toISOString();
      }
      
      /** serialize function for WidgetData0Output | string */
      export function serializeWidgetData0AndDateUnion(
        obj: WidgetData0Output | string
      ): WidgetData0 | Date {
        if (isDatetime(obj)) {
          return serializeDatetime(obj);
        }
        return obj;
      }`
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
                weight: body["weight"],
                color: body["color"],
                data: serializeWidgetData0AndDateUnion(body["data"]),
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

  it("should generate deserialize util if there's a special union variant of bytes", async () => {
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
    const operationUtil = await emitModularDeserializeUtilsFromTypeSpec(tspContent);
    assert.ok(operationUtil);
    assertEqualContent(
      operationUtil?.[0]?.getFullText()!,
      `
      import { WidgetData0Output } from "../rest/index.js";
      import { stringToUint8Array } from "@azure-rest/core-util";
      import { WidgetData0 } from "../models/models.js";
      
      /** type predict function for byte-array from WidgetData0Output | string */
      function isByteArray(obj: WidgetData0Output | string): obj is string {
        if (typeof obj === "string") {
          return true;
        }
        return false;
      }
      
      /** deserialize function for byte-array */
      function deserializeByteArray(obj: string): Uint8Array {
        return stringToUint8Array(obj);
      }
      
      /** deserialize function for WidgetData0Output | string */
      export function deserializeWidgetData0AndUint8ArrayUnion(
        obj: WidgetData0Output | string
      ): WidgetData0 | Uint8Array {
        if (isByteArray(obj)) {
          return deserializeByteArray(obj);
        }
        return obj;
      }`
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
          throw result.body;
        }

        return {
          id: result.body["id"],
          weight: result.body["weight"],
          color: result.body["color"],
          data: deserializeWidgetData0AndUint8ArrayUnion(result.body["data"]),
        };
      }
      
      export async function customGet1(
        context: Client,
        options: CustomGet1Options = { requestOptions: {} }
      ): Promise<Widget1> {
        const result = await _customGet1Send(context, options);
        return _customGet1Deserialize(result);
      }`
    );
  });

  it("should generate deserialize util if there's a special union variant of model with datatime property", async () => {
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
    const operationUtil = await emitModularDeserializeUtilsFromTypeSpec(tspContent);
    assert.ok(operationUtil);
    assertEqualContent(
      operationUtil?.[0]?.getFullText()!,
      `
      import { WidgetData0Output, WidgetData1Output } from "../rest/index.js";
      import { WidgetData0, WidgetData1 } from "../models/models.js";
      
      /** type predict function for WidgetData1 from WidgetData0Output | WidgetData1Output */
      function isWidgetData1(
        obj: WidgetData0Output | WidgetData1Output
      ): obj is WidgetData1Output {
        return (obj as WidgetData1Output).start !== undefined;
      }
      
      
      /** deserialize function for WidgetData1 */
      function deserializeWidgetData1(obj: WidgetData1Output): WidgetData1 {
        return {
          start: new Date(obj["start"]),
          end: obj["end"] !== undefined ? new Date(obj["end"]) : undefined,
        };
      }
      
      /** deserialize function for WidgetData0Output | WidgetData1Output */
      export function deserializeWidgetData0AndWidgetData1Union(
        obj: WidgetData0Output | WidgetData1Output
      ): WidgetData0 | WidgetData1 {
        if (isWidgetData1(obj)) {
          return deserializeWidgetData1(obj);
        }
        return obj;
      }`
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
          throw result.body;
        }

        return {
          id: result.body["id"],
          weight: result.body["weight"],
          color: result.body["color"],
          data: deserializeWidgetData0AndWidgetData1Union(result.body["data"]),
        };
      }
      
      export async function customGet1(
        context: Client,
        options: CustomGet1Options = { requestOptions: {} }
      ): Promise<Widget1> {
        const result = await _customGet1Send(context, options);
        return _customGet1Deserialize(result);
      }`
    );
  });

  it("should generate deserialize util if there's a special union variant of model with byte array property", async () => {
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
    const operationUtil = await emitModularDeserializeUtilsFromTypeSpec(tspContent);
    assert.ok(operationUtil);
    assertEqualContent(
      operationUtil?.[0]?.getFullText()!,
      `
      import { WidgetData0Output, WidgetData1Output } from "../rest/index.js";
      import { stringToUint8Array } from "@azure/core-util";
      import { WidgetData0, WidgetData1 } from "../models/models.js";
      
      /** type predict function for WidgetData1 from WidgetData0Output | WidgetData1Output */
      function isWidgetData1(
        obj: WidgetData0Output | WidgetData1Output
      ): obj is WidgetData1Output {
        return (obj as WidgetData1Output).data !== undefined;
      }
      
      
      /** deserialize function for WidgetData1 */
      function deserializeWidgetData1(obj: WidgetData1Output): WidgetData1 {
        return {
          data:
            typeof obj["data"] === "string"
              ? stringToUint8Array(obj["data"], "base64")
              : obj["data"],
        };
      }
      
      /** deserialize function for WidgetData0Output | WidgetData1Output */
      export function deserializeWidgetData0AndWidgetData1Union(
        obj: WidgetData0Output | WidgetData1Output
      ): WidgetData0 | WidgetData1 {
        if (isWidgetData1(obj)) {
          return deserializeWidgetData1(obj);
        }
        return obj;
      }`
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
          throw result.body;
        }

        return {
          id: result.body["id"],
          weight: result.body["weight"],
          color: result.body["color"],
          data: deserializeWidgetData0AndWidgetData1Union(result.body["data"]),
        };
      }
      
      export async function customGet1(
        context: Client,
        options: CustomGet1Options = { requestOptions: {} }
      ): Promise<Widget1> {
        const result = await _customGet1Send(context, options);
        return _customGet1Deserialize(result);
      }`
    );
  });

  it("should generate deserialize util if there's a special union variant of model with different property name between rest api and client", async () => {
    const tspContent = `
    model WidgetData0 {
      fooProp: string;
    }
    
    model WidgetData1 {
      @projectedName("json", "bar_prop")
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

    // to test the generated deserialized utils for union variant of model with datetime properties.
    const operationUtil = await emitModularDeserializeUtilsFromTypeSpec(tspContent);
    assert.ok(operationUtil);
    assertEqualContent(
      operationUtil?.[0]?.getFullText()!,
      `
      import { WidgetData0Output, WidgetData1Output } from "../rest/index.js";
      import { WidgetData0, WidgetData1 } from "../models/models.js";
      
      /** type predict function for WidgetData1 from WidgetData0Output | WidgetData1Output */
      function isWidgetData1(
        obj: WidgetData0Output | WidgetData1Output
      ): obj is WidgetData1Output {
        return (obj as WidgetData1Output).bar_prop !== undefined;
      }
      
      
      /** deserialize function for WidgetData1 */
      function deserializeWidgetData1(obj: WidgetData1Output): WidgetData1 {
        return { barProp: obj["bar_prop"] };
      }
      
      /** deserialize function for WidgetData0Output | WidgetData1Output */
      export function deserializeWidgetData0AndWidgetData1Union(
        obj: WidgetData0Output | WidgetData1Output
      ): WidgetData0 | WidgetData1 {
        if (isWidgetData1(obj)) {
          return deserializeWidgetData1(obj);
        }
        return obj;
      }`
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
          throw result.body;
        }

        return {
          id: result.body["id"],
          weight: result.body["weight"],
          color: result.body["color"],
          data: deserializeWidgetData0AndWidgetData1Union(result.body["data"]),
        };
      }
      
      export async function customGet1(
        context: Client,
        options: CustomGet1Options = { requestOptions: {} }
      ): Promise<Widget1> {
        const result = await _customGet1Send(context, options);
        return _customGet1Deserialize(result);
      }`
    );
  });

  it("should generate deserialize util if there's a special union variant of model with a property which is model type with byte array property", async () => {
    const tspContent = `
    model WidgetData0 {
      fooProp: string;
    }
    
    model WidgetData1 {
      data: bytes;
    }

    model WidgetData2 {
      nestedData: WidgetData1;
    }
    
    model Widget {
      @key id: string;
      weight: int32;
      color: "red" | "blue";
    }
    
    model Widget1 extends Widget {
      data: WidgetData0 | WidgetData2
    }

    interface WidgetService {
      @get @route("customGet1") customGet1(): Widget1;
    }
    `;

    // to test the generated deserialized utils for union variant of model with datetime properties.
    const operationUtil = await emitModularDeserializeUtilsFromTypeSpec(tspContent);
    assert.ok(operationUtil);
    assertEqualContent(
      operationUtil?.[0]?.getFullText()!,
      `
      import { WidgetData0Output, WidgetData2Output } from "../rest/index.js";
      import { stringToUint8Array } from "@azure/core-util";
      import { WidgetData0, WidgetData2 } from "../models/models.js";
      
      /** type predict function for WidgetData2 from WidgetData0Output | WidgetData2Output */
      function isWidgetData2(
        obj: WidgetData0Output | WidgetData2Output
      ): obj is WidgetData2Output {
        return (
          (obj as WidgetData2Output).nestedData !== undefined &&
          (obj as WidgetData2Output).nestedData.data !== undefined
        );
      }
      
      
      /** deserialize function for WidgetData2 */
      function deserializeWidgetData2(obj: WidgetData2Output): WidgetData2 {
        return {
          nestedData: {
            data:
              typeof obj.nestedData["data"] === "string"
                ? stringToUint8Array(obj.nestedData["data"], "base64")
                : obj.nestedData["data"],
            },
        };
      }
      
      /** deserialize function for WidgetData0Output | WidgetData2Output */
      export function deserializeWidgetData0AndWidgetData2Union(
        obj: WidgetData0Output | WidgetData2Output
      ): WidgetData0 | WidgetData2 {
        if (isWidgetData2(obj)) {
          return deserializeWidgetData2(obj);
        }
        return obj;
      }`
    );
  });

  it("should generate deserialize util if there's a special union variant of an array with model element which has datatime properties", async () => {
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
      data: WidgetData0 | WidgetData1[]
    }

    interface WidgetService {
      @get @route("customGet1") customGet1(): Widget1;
    }
    `;

    // to test the generated deserialized utils for union variant of model with datetime properties.
    const operationUtil = await emitModularDeserializeUtilsFromTypeSpec(tspContent);
    assert.ok(operationUtil);
    assertEqualContent(
      operationUtil?.[0]?.getFullText()!,
      `
      import { WidgetData0Output, WidgetData1Output } from "../rest/index.js";
      import { WidgetData0, WidgetData1 } from "../models/models.js";
      
      /** type predict function for WidgetData1Output array from WidgetData0Output | WidgetData1Output[] */
      function isWidgetData1Array(
        obj: WidgetData0Output | WidgetData1Output[]
      ): obj is WidgetData1Output[] {
        if (Array.isArray(obj) && obj.length > 0) {
          return (obj as WidgetData1Output[])[0].start !== undefined;
        }

        return false;
      }
      
      
      /** deserialize function for WidgetData1 array */
      function deserializeWidgetData1Array(obj: WidgetData1Output[]): WidgetData1[] {
        return (obj || []).map((item) => {
          return {
            start: new Date(item["start"]),
            end: item["end"] !== undefined ? new Date(item["end"]) : undefined,
          };
        });
      }
      
      /** deserialize function for WidgetData0Output | WidgetData1Output[] */
      export function deserializeWidgetData0AndWidgetData1ArrayUnion(
        obj: WidgetData0Output | WidgetData1Output[]
      ): WidgetData0 | WidgetData1[] {
        if (isWidgetData1Array(obj)) {
          return deserializeWidgetData1Array(obj);
        }
        return obj;
      }`
    );
  });

  it("should generate deserialize util if there's a special union variant of an array with model element which has a byte array property", async () => {
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
      data: WidgetData0 | WidgetData1[]
    }

    interface WidgetService {
      @get @route("customGet1") customGet1(): Widget1;
    }
    `;

    // to test the generated deserialized utils for union variant of model with datetime properties.
    const operationUtil = await emitModularDeserializeUtilsFromTypeSpec(tspContent);
    assert.ok(operationUtil);
    assertEqualContent(
      operationUtil?.[0]?.getFullText()!,
      `
      import { WidgetData0Output, WidgetData1Output } from "../rest/index.js";
      import { stringToUint8Array } from "@azure/core-util";
      import { WidgetData0, WidgetData1 } from "../models/models.js";
      
      /** type predict function for WidgetData1Output array from WidgetData0Output | WidgetData1Output[] */
      function isWidgetData1Array(
        obj: WidgetData0Output | WidgetData1Output[]
      ): obj is WidgetData1Output[] {
        if (Array.isArray(obj) && obj.length > 0) {
          return (obj as WidgetData1Output[])[0].data !== undefined;
        }

        return false;
      }
      
      
      /** deserialize function for WidgetData1 array */
      function deserializeWidgetData1Array(obj: WidgetData1Output[]): WidgetData1[] {
        return (obj || []).map((item) => {
          return {
            data:
              typeof item["data"] === "string"
                ? stringToUint8Array(item["data"], "base64")
                : item["data"],
          };
        });
      }
      
      /** deserialize function for WidgetData0Output | WidgetData1Output[] */
      export function deserializeWidgetData0AndWidgetData1ArrayUnion(
        obj: WidgetData0Output | WidgetData1Output[]
      ): WidgetData0 | WidgetData1[] {
        if (isWidgetData1Array(obj)) {
          return deserializeWidgetData1Array(obj);
        }
        return obj;
      }`
    );
  });

  it("should generate deserialize util if there's a special union variant of an array with model element which has different property name between rest api and client", async () => {
    const tspContent = `
    model WidgetData0 {
      fooProp: string;
    }
    
    model WidgetData1 {
      @projectedName("json", "bar_prop")
      barProp: string;
    }
    
    model Widget {
      @key id: string;
      weight: int32;
      color: "red" | "blue";
    }
    
    model Widget1 extends Widget {
      data: WidgetData0 | WidgetData1[]
    }

    interface WidgetService {
      @get @route("customGet1") customGet1(): Widget1;
    }
    `;

    // to test the generated deserialized utils for union variant of model with datetime properties.
    const operationUtil = await emitModularDeserializeUtilsFromTypeSpec(tspContent);
    assert.ok(operationUtil);
    assertEqualContent(
      operationUtil?.[0]?.getFullText()!,
      `
      import { WidgetData0Output, WidgetData1Output } from "../rest/index.js";
      import { WidgetData0, WidgetData1 } from "../models/models.js";
      
      /** type predict function for WidgetData1Output array from WidgetData0Output | WidgetData1Output[] */
      function isWidgetData1Array(
        obj: WidgetData0Output | WidgetData1Output[]
      ): obj is WidgetData1Output[] {
        if (Array.isArray(obj) && obj.length > 0) {
          return (obj as WidgetData1Output[])[0].bar_prop !== undefined;
        }
      
        return false;
      }
      
      /** deserialize function for WidgetData1 array */
      function deserializeWidgetData1Array(obj: WidgetData1Output[]): WidgetData1[] {
        return (obj || []).map((item) => {
          return { barProp: item["bar_prop"] };
        });
      }
      
      /** deserialize function for WidgetData0Output | WidgetData1Output[] */
      export function deserializeWidgetData0AndWidgetData1ArrayUnion(
        obj: WidgetData0Output | WidgetData1Output[]
      ): WidgetData0 | WidgetData1[] {
        if (isWidgetData1Array(obj)) {
          return deserializeWidgetData1Array(obj);
        }
        return obj;
      }`
    );
  });

  it("should generate deserialize util if there's a special union variant of an array with model element which has a property which is model type with byte array property", async () => {
    const tspContent = `
    model WidgetData0 {
      fooProp: string;
    }
    
    model WidgetData1 {
      data: bytes;
    }

    model WidgetData2 {
      nestedData: WidgetData1;
    }
    
    model Widget {
      @key id: string;
      weight: int32;
      color: "red" | "blue";
    }
    
    model Widget1 extends Widget {
      data: WidgetData0 | WidgetData2[]
    }

    interface WidgetService {
      @get @route("customGet1") customGet1(): Widget1;
    }
    `;

    // to test the generated deserialized utils for union variant of model with datetime properties.
    const operationUtil = await emitModularDeserializeUtilsFromTypeSpec(tspContent);
    assert.ok(operationUtil);
    assertEqualContent(
      operationUtil?.[0]?.getFullText()!,
      `
      import { WidgetData0Output, WidgetData2Output } from "../rest/index.js";
      import { stringToUint8Array } from "@azure/core-util";
      import { WidgetData0, WidgetData2 } from "../models/models.js";
      
      /** type predict function for WidgetData2Output array from WidgetData0Output | WidgetData2Output[] */
      function isWidgetData2Array(
        obj: WidgetData0Output | WidgetData2Output[]
      ): obj is WidgetData2Output[] {
        if (Array.isArray(obj) && obj.length > 0) {
          return (
            (obj as WidgetData2Output[])[0].nestedData !== undefined &&
            (obj as WidgetData2Output[])[0].nestedData.data !== undefined
          );
        }

        return false;
      }
      
      
      /** deserialize function for WidgetData2 array */
      function deserializeWidgetData2Array(obj: WidgetData2Output[]): WidgetData2[] {
        return (obj || []).map((item) => {
          return {
            nestedData: {
              data:
                typeof item.nestedData["data"] === "string"
                  ? stringToUint8Array(item.nestedData["data"], "base64")
                  : item.nestedData["data"],
              },
          };
        });
      }
      
      /** deserialize function for WidgetData0Output | WidgetData2Output[] */
      export function deserializeWidgetData0AndWidgetData2ArrayUnion(
        obj: WidgetData0Output | WidgetData2Output[]
      ): WidgetData0 | WidgetData2[] {
        if (isWidgetData2Array(obj)) {
          return deserializeWidgetData2Array(obj);
        }
        return obj;
      }`
    );
  });

  it("should generate deserialize util if there're two kinds of special union variants", async () => {
    const tspContent = `
    
    model WidgetData1 {
      @projectedName("json", "bar_prop")
      barProp: string;
    }

    model WidgetData2 {
      start: utcDateTime;
      end?: utcDateTime;
    }
    
    model Widget {
      @key id: string;
      weight: int32;
      color: "red" | "blue";
    }
    
    model Widget1 extends Widget {
      data: WidgetData1 | WidgetData2
    }

    interface WidgetService {
      @get @route("customGet1") customGet1(): Widget1;
    }
    `;

    // to test the generated deserialized utils for union variant of model with datetime properties.
    const operationUtil = await emitModularDeserializeUtilsFromTypeSpec(tspContent);
    assert.ok(operationUtil);
    assertEqualContent(
      operationUtil?.[0]?.getFullText()!,
      `
      import { WidgetData1Output, WidgetData2Output } from "../rest/index.js";
      import { WidgetData1, WidgetData2 } from "../models/models.js";
      
      /** type predict function for WidgetData1 from WidgetData1Output | WidgetData2Output */
      function isWidgetData1(
        obj: WidgetData1Output | WidgetData2Output
      ): obj is WidgetData1Output {
        return (obj as WidgetData1Output).bar_prop !== undefined;
      }
      
      /** deserialize function for WidgetData1 */
      function deserializeWidgetData1(obj: WidgetData1Output): WidgetData1 {
        return { barProp: obj["bar_prop"] };
      }

      /** type predict function for WidgetData2 from WidgetData1Output | WidgetData2Output */
      function isWidgetData2(
        obj: WidgetData1Output | WidgetData2Output
      ): obj is WidgetData2Output {
        return (obj as WidgetData2Output).start !== undefined;
      }

      /** deserialize function for WidgetData2 */
      function deserializeWidgetData2(obj: WidgetData2Output): WidgetData2 {
        return {
          start: new Date(obj["start"]),
          end: obj["end"] !== undefined ? new Date(obj["end"]) : undefined,
        };
      }
      
      /** deserialize function for WidgetData1Output | WidgetData2Output */
      export function deserializeWidgetData1AndWidgetData2Union(
        obj: WidgetData1Output | WidgetData2Output
      ): WidgetData1 | WidgetData2 {
        if (isWidgetData1(obj)) {
          return deserializeWidgetData1(obj);
        }
        if (isWidgetData2(obj)) {
          return deserializeWidgetData2(obj);
        }
        return obj;
      }`
    );
  });

  it("should generate deserialize util if there're three kinds special union variants", async () => {
    const tspContent = `
    
    model WidgetData1 {
      @projectedName("json", "bar_prop")
      barProp: string;
    }

    model WidgetData2 {
      start: utcDateTime;
      end?: utcDateTime;
    }
    
    model WidgetData3 {
      data: bytes;
    }

    model WidgetData4 {
      nestedData: WidgetData3;
    }

    model Widget {
      @key id: string;
      weight: int32;
      color: "red" | "blue";
    }
    
    model Widget1 extends Widget {
      data: WidgetData1 | WidgetData2 | WidgetData4;
    }

    interface WidgetService {
      @get @route("customGet1") customGet1(): Widget1;
    }
    `;

    // to test the generated deserialized utils for union variant of model with datetime properties.
    const operationUtil = await emitModularDeserializeUtilsFromTypeSpec(tspContent);
    assert.ok(operationUtil);
    assertEqualContent(
      operationUtil?.[0]?.getFullText()!,
      ` import {
          WidgetData1Output,
          WidgetData2Output,
          WidgetData4Output,
        } from "../rest/index.js";
        import { stringToUint8Array } from "@azure/core-util";
        import { WidgetData1, WidgetData2, WidgetData4 } from "../models/models.js";
        
        /** type predict function for WidgetData1 from WidgetData1Output | WidgetData2Output | WidgetData4Output */
        function isWidgetData1(
          obj: WidgetData1Output | WidgetData2Output | WidgetData4Output
        ): obj is WidgetData1Output {
          return (obj as WidgetData1Output).bar_prop !== undefined;
        }
        
        /** deserialize function for WidgetData1 */
        function deserializeWidgetData1(obj: WidgetData1Output): WidgetData1 {
          return { barProp: obj["bar_prop"] };
        }
        
        /** type predict function for WidgetData2 from WidgetData1Output | WidgetData2Output | WidgetData4Output */
        function isWidgetData2(
          obj: WidgetData1Output | WidgetData2Output | WidgetData4Output
        ): obj is WidgetData2Output {
          return (obj as WidgetData2Output).start !== undefined;
        }
        
        /** deserialize function for WidgetData2 */
        function deserializeWidgetData2(obj: WidgetData2Output): WidgetData2 {
          return {
            start: new Date(obj["start"]),
            end: obj["end"] !== undefined ? new Date(obj["end"]) : undefined,
          };
        }
        
        /** type predict function for WidgetData4 from WidgetData1Output | WidgetData2Output | WidgetData4Output */
        function isWidgetData4(
          obj: WidgetData1Output | WidgetData2Output | WidgetData4Output
        ): obj is WidgetData4Output {
          return (
            (obj as WidgetData4Output).nestedData !== undefined &&
            (obj as WidgetData4Output).nestedData.data !== undefined
          );
        }
        
        /** deserialize function for WidgetData4 */
        function deserializeWidgetData4(obj: WidgetData4Output): WidgetData4 {
          return {
            nestedData: {
              data:
                typeof obj.nestedData["data"] === "string"
                  ? stringToUint8Array(obj.nestedData["data"], "base64")
                  : obj.nestedData["data"],
            },
          };
        }
        
        /** deserialize function for WidgetData1Output | WidgetData2Output | WidgetData4Output */
        export function deserializeWidgetData1AndWidgetData2AndWidgetData4Union(
          obj: WidgetData1Output | WidgetData2Output | WidgetData4Output
        ): WidgetData1 | WidgetData2 | WidgetData4 {
          if (isWidgetData1(obj)) {
            return deserializeWidgetData1(obj);
          }
          if (isWidgetData2(obj)) {
            return deserializeWidgetData2(obj);
          }
          if (isWidgetData4(obj)) {
            return deserializeWidgetData4(obj);
          }
          return obj;
        }`
    );
  });

  it("should generate function overloads for type predict functions. if there's one special union variant being used in more than one unions", async () => {
    const tspContent = `
    
    model WidgetData1 {
      @projectedName("json", "bar_prop")
      barProp: string;
    }

    model WidgetData2 {
      start: utcDateTime;
      end?: utcDateTime;
    }
    
    model WidgetData3 {
      data: bytes;
    }

    model WidgetData4 {
      nestedData: WidgetData3;
    }

    model Widget {
      @key id: string;
      weight: int32;
      color: "red" | "blue";
    }
    
    model Widget1 extends Widget {
      data: WidgetData1 | WidgetData2 | WidgetData4;
    }

    model Widget2 extends Widget {
      data: WidgetData1 | WidgetData2
    }

    interface WidgetService {
      @get @route("customGet1") customGet1(): Widget1;
      @get @route("customGet2") customGet2(): Widget2;
    }
    `;

    // to test the generated deserialized utils for union variant of model with datetime properties.
    const operationUtil = await emitModularDeserializeUtilsFromTypeSpec(tspContent);
    assert.ok(operationUtil);
    assertEqualContent(
      operationUtil?.[0]?.getFullText()!,
      ` import {
          WidgetData1Output,
          WidgetData2Output,
          WidgetData4Output,
        } from "../rest/index.js";
        import { stringToUint8Array } from "@azure/core-util";
        import { WidgetData1, WidgetData2, WidgetData4 } from "../models/models.js";
        
        /** type predict function for WidgetData1 from WidgetData1Output | WidgetData2Output | WidgetData4Output */
        function isWidgetData1(
          obj: WidgetData1Output | WidgetData2Output | WidgetData4Output
        ): obj is WidgetData1Output;
        /** type predict function for WidgetData1 from WidgetData1Output | WidgetData2Output */
        function isWidgetData1(
          obj: WidgetData1Output | WidgetData2Output
        ): obj is WidgetData1Output;
        /** type predict function for WidgetData1 from WidgetData1Output | WidgetData2Output | WidgetData4Output */
        function isWidgetData1(
          obj: WidgetData1Output | WidgetData2Output | WidgetData4Output
        ): obj is WidgetData1Output {
          return (obj as WidgetData1Output).bar_prop !== undefined;
        }
        
        /** deserialize function for WidgetData1 */
        function deserializeWidgetData1(obj: WidgetData1Output): WidgetData1 {
          return { barProp: obj["bar_prop"] };
        }
        
        /** type predict function for WidgetData2 from WidgetData1Output | WidgetData2Output | WidgetData4Output */
        function isWidgetData2(
          obj: WidgetData1Output | WidgetData2Output | WidgetData4Output
        ): obj is WidgetData2Output;
        /** type predict function for WidgetData2 from WidgetData1Output | WidgetData2Output */
        function isWidgetData2(
          obj: WidgetData1Output | WidgetData2Output
        ): obj is WidgetData2Output;
        /** type predict function for WidgetData2 from WidgetData1Output | WidgetData2Output | WidgetData4Output */
        function isWidgetData2(
          obj: WidgetData1Output | WidgetData2Output | WidgetData4Output
        ): obj is WidgetData2Output {
          return (obj as WidgetData2Output).start !== undefined;
        }
        
        /** deserialize function for WidgetData2 */
        function deserializeWidgetData2(obj: WidgetData2Output): WidgetData2 {
          return {
            start: new Date(obj["start"]),
            end: obj["end"] !== undefined ? new Date(obj["end"]) : undefined,
          };
        }
        
        /** type predict function for WidgetData4 from WidgetData1Output | WidgetData2Output | WidgetData4Output */
        function isWidgetData4(
          obj: WidgetData1Output | WidgetData2Output | WidgetData4Output
        ): obj is WidgetData4Output {
          return (
            (obj as WidgetData4Output).nestedData !== undefined &&
            (obj as WidgetData4Output).nestedData.data !== undefined
          );
        }
        
        /** deserialize function for WidgetData4 */
        function deserializeWidgetData4(obj: WidgetData4Output): WidgetData4 {
          return {
            nestedData: {
              data:
                typeof obj.nestedData["data"] === "string"
                  ? stringToUint8Array(obj.nestedData["data"], "base64")
                  : obj.nestedData["data"],
            },
          };
        }
        
        /** deserialize function for WidgetData1Output | WidgetData2Output | WidgetData4Output */
        export function deserializeWidgetData1AndWidgetData2AndWidgetData4Union(
          obj: WidgetData1Output | WidgetData2Output | WidgetData4Output
        ): WidgetData1 | WidgetData2 | WidgetData4 {
          if (isWidgetData1(obj)) {
            return deserializeWidgetData1(obj);
          }
          if (isWidgetData2(obj)) {
            return deserializeWidgetData2(obj);
          }
          if (isWidgetData4(obj)) {
            return deserializeWidgetData4(obj);
          }
          return obj;
        }
        
        /** deserialize function for WidgetData1Output | WidgetData2Output */
        export function deserializeWidgetData1AndWidgetData2Union(
          obj: WidgetData1Output | WidgetData2Output
        ): WidgetData1 | WidgetData2 {
          if (isWidgetData1(obj)) {
            return deserializeWidgetData1(obj);
          }
          if (isWidgetData2(obj)) {
            return deserializeWidgetData2(obj);
          }
          return obj;
        } 
        `
    );
  });

});

describe("modular special union deserialization", () => {
  it("shouldn't generate deserialize util if there's no special union variant", async () => {
    const operationUtil = await emitModularDeserializeUtilsFromTypeSpec(`
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
      `);
    assert.ok(operationUtil?.length === 0);
  });

  it("should generate deserialize util if there's a special union variant of datatime", async () => {
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
    const operationUtil = await emitModularDeserializeUtilsFromTypeSpec(tspContent);
    assert.ok(operationUtil);
    assertEqualContent(
      operationUtil?.[0]?.getFullText()!,
      `
      import { WidgetData0Output } from "../rest/index.js";
      import { WidgetData0 } from "../models/models.js";
      
      /** type predict function for datetime from WidgetData0Output | string */
      function isDatetime(obj: WidgetData0Output | string): obj is string {
        if (typeof obj === "string") {
          return true;
        }
        return false;
      }
      
      /** deserialize function for datetime */
      function deserializeDatetime(obj: string): Date {
        return new Date(obj);
      }
      
      /** deserialize function for WidgetData0Output | string */
      export function deserializeWidgetData0AndDateUnion(
        obj: WidgetData0Output | string
      ): WidgetData0 | Date {
        if (isDatetime(obj)) {
          return deserializeDatetime(obj);
        }
        return obj;
      }`
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
          throw result.body;
        }

        return {
          id: result.body["id"],
          weight: result.body["weight"],
          color: result.body["color"],
          data: deserializeWidgetData0AndDateUnion(result.body["data"]),
        };
      }
      
      export async function customGet1(
        context: Client,
        options: CustomGet1Options = { requestOptions: {} }
      ): Promise<Widget1> {
        const result = await _customGet1Send(context, options);
        return _customGet1Deserialize(result);
      }`
    );
  });

  it("should generate deserialize util if there's a special union variant of bytes", async () => {
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
    const operationUtil = await emitModularDeserializeUtilsFromTypeSpec(tspContent);
    assert.ok(operationUtil);
    assertEqualContent(
      operationUtil?.[0]?.getFullText()!,
      `
      import { WidgetData0Output } from "../rest/index.js";
      import { stringToUint8Array } from "@azure-rest/core-util";
      import { WidgetData0 } from "../models/models.js";
      
      /** type predict function for byte-array from WidgetData0Output | string */
      function isByteArray(obj: WidgetData0Output | string): obj is string {
        if (typeof obj === "string") {
          return true;
        }
        return false;
      }
      
      /** deserialize function for byte-array */
      function deserializeByteArray(obj: string): Uint8Array {
        return stringToUint8Array(obj);
      }
      
      /** deserialize function for WidgetData0Output | string */
      export function deserializeWidgetData0AndUint8ArrayUnion(
        obj: WidgetData0Output | string
      ): WidgetData0 | Uint8Array {
        if (isByteArray(obj)) {
          return deserializeByteArray(obj);
        }
        return obj;
      }`
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
          throw result.body;
        }

        return {
          id: result.body["id"],
          weight: result.body["weight"],
          color: result.body["color"],
          data: deserializeWidgetData0AndUint8ArrayUnion(result.body["data"]),
        };
      }
      
      export async function customGet1(
        context: Client,
        options: CustomGet1Options = { requestOptions: {} }
      ): Promise<Widget1> {
        const result = await _customGet1Send(context, options);
        return _customGet1Deserialize(result);
      }`
    );
  });

  it("should generate deserialize util if there's a special union variant of model with datatime property", async () => {
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
    const operationUtil = await emitModularDeserializeUtilsFromTypeSpec(tspContent);
    assert.ok(operationUtil);
    assertEqualContent(
      operationUtil?.[0]?.getFullText()!,
      `
      import { WidgetData0Output, WidgetData1Output } from "../rest/index.js";
      import { WidgetData0, WidgetData1 } from "../models/models.js";
      
      /** type predict function for WidgetData1 from WidgetData0Output | WidgetData1Output */
      function isWidgetData1(
        obj: WidgetData0Output | WidgetData1Output
      ): obj is WidgetData1Output {
        return (obj as WidgetData1Output).start !== undefined;
      }
      
      
      /** deserialize function for WidgetData1 */
      function deserializeWidgetData1(obj: WidgetData1Output): WidgetData1 {
        return {
          start: new Date(obj["start"]),
          end: obj["end"] !== undefined ? new Date(obj["end"]) : undefined,
        };
      }
      
      /** deserialize function for WidgetData0Output | WidgetData1Output */
      export function deserializeWidgetData0AndWidgetData1Union(
        obj: WidgetData0Output | WidgetData1Output
      ): WidgetData0 | WidgetData1 {
        if (isWidgetData1(obj)) {
          return deserializeWidgetData1(obj);
        }
        return obj;
      }`
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
          throw result.body;
        }

        return {
          id: result.body["id"],
          weight: result.body["weight"],
          color: result.body["color"],
          data: deserializeWidgetData0AndWidgetData1Union(result.body["data"]),
        };
      }
      
      export async function customGet1(
        context: Client,
        options: CustomGet1Options = { requestOptions: {} }
      ): Promise<Widget1> {
        const result = await _customGet1Send(context, options);
        return _customGet1Deserialize(result);
      }`
    );
  });

  it("should generate deserialize util if there's a special union variant of model with byte array property", async () => {
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
    const operationUtil = await emitModularDeserializeUtilsFromTypeSpec(tspContent);
    assert.ok(operationUtil);
    assertEqualContent(
      operationUtil?.[0]?.getFullText()!,
      `
      import { WidgetData0Output, WidgetData1Output } from "../rest/index.js";
      import { stringToUint8Array } from "@azure/core-util";
      import { WidgetData0, WidgetData1 } from "../models/models.js";
      
      /** type predict function for WidgetData1 from WidgetData0Output | WidgetData1Output */
      function isWidgetData1(
        obj: WidgetData0Output | WidgetData1Output
      ): obj is WidgetData1Output {
        return (obj as WidgetData1Output).data !== undefined;
      }
      
      
      /** deserialize function for WidgetData1 */
      function deserializeWidgetData1(obj: WidgetData1Output): WidgetData1 {
        return {
          data:
            typeof obj["data"] === "string"
              ? stringToUint8Array(obj["data"], "base64")
              : obj["data"],
        };
      }
      
      /** deserialize function for WidgetData0Output | WidgetData1Output */
      export function deserializeWidgetData0AndWidgetData1Union(
        obj: WidgetData0Output | WidgetData1Output
      ): WidgetData0 | WidgetData1 {
        if (isWidgetData1(obj)) {
          return deserializeWidgetData1(obj);
        }
        return obj;
      }`
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
          throw result.body;
        }

        return {
          id: result.body["id"],
          weight: result.body["weight"],
          color: result.body["color"],
          data: deserializeWidgetData0AndWidgetData1Union(result.body["data"]),
        };
      }
      
      export async function customGet1(
        context: Client,
        options: CustomGet1Options = { requestOptions: {} }
      ): Promise<Widget1> {
        const result = await _customGet1Send(context, options);
        return _customGet1Deserialize(result);
      }`
    );
  });

  it("should generate deserialize util if there's a special union variant of model with different property name between rest api and client", async () => {
    const tspContent = `
    model WidgetData0 {
      fooProp: string;
    }
    
    model WidgetData1 {
      @projectedName("json", "bar_prop")
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

    // to test the generated deserialized utils for union variant of model with datetime properties.
    const operationUtil = await emitModularDeserializeUtilsFromTypeSpec(tspContent);
    assert.ok(operationUtil);
    assertEqualContent(
      operationUtil?.[0]?.getFullText()!,
      `
      import { WidgetData0Output, WidgetData1Output } from "../rest/index.js";
      import { WidgetData0, WidgetData1 } from "../models/models.js";
      
      /** type predict function for WidgetData1 from WidgetData0Output | WidgetData1Output */
      function isWidgetData1(
        obj: WidgetData0Output | WidgetData1Output
      ): obj is WidgetData1Output {
        return (obj as WidgetData1Output).bar_prop !== undefined;
      }
      
      
      /** deserialize function for WidgetData1 */
      function deserializeWidgetData1(obj: WidgetData1Output): WidgetData1 {
        return { barProp: obj["bar_prop"] };
      }
      
      /** deserialize function for WidgetData0Output | WidgetData1Output */
      export function deserializeWidgetData0AndWidgetData1Union(
        obj: WidgetData0Output | WidgetData1Output
      ): WidgetData0 | WidgetData1 {
        if (isWidgetData1(obj)) {
          return deserializeWidgetData1(obj);
        }
        return obj;
      }`
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
          throw result.body;
        }

        return {
          id: result.body["id"],
          weight: result.body["weight"],
          color: result.body["color"],
          data: deserializeWidgetData0AndWidgetData1Union(result.body["data"]),
        };
      }
      
      export async function customGet1(
        context: Client,
        options: CustomGet1Options = { requestOptions: {} }
      ): Promise<Widget1> {
        const result = await _customGet1Send(context, options);
        return _customGet1Deserialize(result);
      }`
    );
  });

  it("should generate deserialize util if there's a special union variant of model with a property which is model type with byte array property", async () => {
    const tspContent = `
    model WidgetData0 {
      fooProp: string;
    }
    
    model WidgetData1 {
      data: bytes;
    }

    model WidgetData2 {
      nestedData: WidgetData1;
    }
    
    model Widget {
      @key id: string;
      weight: int32;
      color: "red" | "blue";
    }
    
    model Widget1 extends Widget {
      data: WidgetData0 | WidgetData2
    }

    interface WidgetService {
      @get @route("customGet1") customGet1(): Widget1;
    }
    `;

    // to test the generated deserialized utils for union variant of model with datetime properties.
    const operationUtil = await emitModularDeserializeUtilsFromTypeSpec(tspContent);
    assert.ok(operationUtil);
    assertEqualContent(
      operationUtil?.[0]?.getFullText()!,
      `
      import { WidgetData0Output, WidgetData2Output } from "../rest/index.js";
      import { stringToUint8Array } from "@azure/core-util";
      import { WidgetData0, WidgetData2 } from "../models/models.js";
      
      /** type predict function for WidgetData2 from WidgetData0Output | WidgetData2Output */
      function isWidgetData2(
        obj: WidgetData0Output | WidgetData2Output
      ): obj is WidgetData2Output {
        return (
          (obj as WidgetData2Output).nestedData !== undefined &&
          (obj as WidgetData2Output).nestedData.data !== undefined
        );
      }
      
      
      /** deserialize function for WidgetData2 */
      function deserializeWidgetData2(obj: WidgetData2Output): WidgetData2 {
        return {
          nestedData: {
            data:
              typeof obj.nestedData["data"] === "string"
                ? stringToUint8Array(obj.nestedData["data"], "base64")
                : obj.nestedData["data"],
            },
        };
      }
      
      /** deserialize function for WidgetData0Output | WidgetData2Output */
      export function deserializeWidgetData0AndWidgetData2Union(
        obj: WidgetData0Output | WidgetData2Output
      ): WidgetData0 | WidgetData2 {
        if (isWidgetData2(obj)) {
          return deserializeWidgetData2(obj);
        }
        return obj;
      }`
    );
  });

  it("should generate deserialize util if there's a special union variant of an array with model element which has datatime properties", async () => {
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
      data: WidgetData0 | WidgetData1[]
    }

    interface WidgetService {
      @get @route("customGet1") customGet1(): Widget1;
    }
    `;

    // to test the generated deserialized utils for union variant of model with datetime properties.
    const operationUtil = await emitModularDeserializeUtilsFromTypeSpec(tspContent);
    assert.ok(operationUtil);
    assertEqualContent(
      operationUtil?.[0]?.getFullText()!,
      `
      import { WidgetData0Output, WidgetData1Output } from "../rest/index.js";
      import { WidgetData0, WidgetData1 } from "../models/models.js";
      
      /** type predict function for WidgetData1Output array from WidgetData0Output | WidgetData1Output[] */
      function isWidgetData1Array(
        obj: WidgetData0Output | WidgetData1Output[]
      ): obj is WidgetData1Output[] {
        if (Array.isArray(obj) && obj.length > 0) {
          return (obj as WidgetData1Output[])[0].start !== undefined;
        }

        return false;
      }
      
      
      /** deserialize function for WidgetData1 array */
      function deserializeWidgetData1Array(obj: WidgetData1Output[]): WidgetData1[] {
        return (obj || []).map((item) => {
          return {
            start: new Date(item["start"]),
            end: item["end"] !== undefined ? new Date(item["end"]) : undefined,
          };
        });
      }
      
      /** deserialize function for WidgetData0Output | WidgetData1Output[] */
      export function deserializeWidgetData0AndWidgetData1ArrayUnion(
        obj: WidgetData0Output | WidgetData1Output[]
      ): WidgetData0 | WidgetData1[] {
        if (isWidgetData1Array(obj)) {
          return deserializeWidgetData1Array(obj);
        }
        return obj;
      }`
    );
  });

  it("should generate deserialize util if there's a special union variant of an array with model element which has a byte array property", async () => {
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
      data: WidgetData0 | WidgetData1[]
    }

    interface WidgetService {
      @get @route("customGet1") customGet1(): Widget1;
    }
    `;

    // to test the generated deserialized utils for union variant of model with datetime properties.
    const operationUtil = await emitModularDeserializeUtilsFromTypeSpec(tspContent);
    assert.ok(operationUtil);
    assertEqualContent(
      operationUtil?.[0]?.getFullText()!,
      `
      import { WidgetData0Output, WidgetData1Output } from "../rest/index.js";
      import { stringToUint8Array } from "@azure/core-util";
      import { WidgetData0, WidgetData1 } from "../models/models.js";
      
      /** type predict function for WidgetData1Output array from WidgetData0Output | WidgetData1Output[] */
      function isWidgetData1Array(
        obj: WidgetData0Output | WidgetData1Output[]
      ): obj is WidgetData1Output[] {
        if (Array.isArray(obj) && obj.length > 0) {
          return (obj as WidgetData1Output[])[0].data !== undefined;
        }

        return false;
      }
      
      
      /** deserialize function for WidgetData1 array */
      function deserializeWidgetData1Array(obj: WidgetData1Output[]): WidgetData1[] {
        return (obj || []).map((item) => {
          return {
            data:
              typeof item["data"] === "string"
                ? stringToUint8Array(item["data"], "base64")
                : item["data"],
          };
        });
      }
      
      /** deserialize function for WidgetData0Output | WidgetData1Output[] */
      export function deserializeWidgetData0AndWidgetData1ArrayUnion(
        obj: WidgetData0Output | WidgetData1Output[]
      ): WidgetData0 | WidgetData1[] {
        if (isWidgetData1Array(obj)) {
          return deserializeWidgetData1Array(obj);
        }
        return obj;
      }`
    );
  });

  it("should generate deserialize util if there's a special union variant of an array with model element which has different property name between rest api and client", async () => {
    const tspContent = `
    model WidgetData0 {
      fooProp: string;
    }
    
    model WidgetData1 {
      @projectedName("json", "bar_prop")
      barProp: string;
    }
    
    model Widget {
      @key id: string;
      weight: int32;
      color: "red" | "blue";
    }
    
    model Widget1 extends Widget {
      data: WidgetData0 | WidgetData1[]
    }

    interface WidgetService {
      @get @route("customGet1") customGet1(): Widget1;
    }
    `;

    // to test the generated deserialized utils for union variant of model with datetime properties.
    const operationUtil = await emitModularDeserializeUtilsFromTypeSpec(tspContent);
    assert.ok(operationUtil);
    assertEqualContent(
      operationUtil?.[0]?.getFullText()!,
      `
      import { WidgetData0Output, WidgetData1Output } from "../rest/index.js";
      import { WidgetData0, WidgetData1 } from "../models/models.js";
      
      /** type predict function for WidgetData1Output array from WidgetData0Output | WidgetData1Output[] */
      function isWidgetData1Array(
        obj: WidgetData0Output | WidgetData1Output[]
      ): obj is WidgetData1Output[] {
        if (Array.isArray(obj) && obj.length > 0) {
          return (obj as WidgetData1Output[])[0].bar_prop !== undefined;
        }
      
        return false;
      }
      
      /** deserialize function for WidgetData1 array */
      function deserializeWidgetData1Array(obj: WidgetData1Output[]): WidgetData1[] {
        return (obj || []).map((item) => {
          return { barProp: item["bar_prop"] };
        });
      }
      
      /** deserialize function for WidgetData0Output | WidgetData1Output[] */
      export function deserializeWidgetData0AndWidgetData1ArrayUnion(
        obj: WidgetData0Output | WidgetData1Output[]
      ): WidgetData0 | WidgetData1[] {
        if (isWidgetData1Array(obj)) {
          return deserializeWidgetData1Array(obj);
        }
        return obj;
      }`
    );
  });

  it("should generate deserialize util if there's a special union variant of an array with model element which has a property which is model type with byte array property", async () => {
    const tspContent = `
    model WidgetData0 {
      fooProp: string;
    }
    
    model WidgetData1 {
      data: bytes;
    }

    model WidgetData2 {
      nestedData: WidgetData1;
    }
    
    model Widget {
      @key id: string;
      weight: int32;
      color: "red" | "blue";
    }
    
    model Widget1 extends Widget {
      data: WidgetData0 | WidgetData2[]
    }

    interface WidgetService {
      @get @route("customGet1") customGet1(): Widget1;
    }
    `;

    // to test the generated deserialized utils for union variant of model with datetime properties.
    const operationUtil = await emitModularDeserializeUtilsFromTypeSpec(tspContent);
    assert.ok(operationUtil);
    assertEqualContent(
      operationUtil?.[0]?.getFullText()!,
      `
      import { WidgetData0Output, WidgetData2Output } from "../rest/index.js";
      import { stringToUint8Array } from "@azure/core-util";
      import { WidgetData0, WidgetData2 } from "../models/models.js";
      
      /** type predict function for WidgetData2Output array from WidgetData0Output | WidgetData2Output[] */
      function isWidgetData2Array(
        obj: WidgetData0Output | WidgetData2Output[]
      ): obj is WidgetData2Output[] {
        if (Array.isArray(obj) && obj.length > 0) {
          return (
            (obj as WidgetData2Output[])[0].nestedData !== undefined &&
            (obj as WidgetData2Output[])[0].nestedData.data !== undefined
          );
        }

        return false;
      }
      
      
      /** deserialize function for WidgetData2 array */
      function deserializeWidgetData2Array(obj: WidgetData2Output[]): WidgetData2[] {
        return (obj || []).map((item) => {
          return {
            nestedData: {
              data:
                typeof item.nestedData["data"] === "string"
                  ? stringToUint8Array(item.nestedData["data"], "base64")
                  : item.nestedData["data"],
              },
          };
        });
      }
      
      /** deserialize function for WidgetData0Output | WidgetData2Output[] */
      export function deserializeWidgetData0AndWidgetData2ArrayUnion(
        obj: WidgetData0Output | WidgetData2Output[]
      ): WidgetData0 | WidgetData2[] {
        if (isWidgetData2Array(obj)) {
          return deserializeWidgetData2Array(obj);
        }
        return obj;
      }`
    );
  });

  it("should generate deserialize util if there're two kinds of special union variants", async () => {
    const tspContent = `
    
    model WidgetData1 {
      @projectedName("json", "bar_prop")
      barProp: string;
    }

    model WidgetData2 {
      start: utcDateTime;
      end?: utcDateTime;
    }
    
    model Widget {
      @key id: string;
      weight: int32;
      color: "red" | "blue";
    }
    
    model Widget1 extends Widget {
      data: WidgetData1 | WidgetData2
    }

    interface WidgetService {
      @get @route("customGet1") customGet1(): Widget1;
    }
    `;

    // to test the generated deserialized utils for union variant of model with datetime properties.
    const operationUtil = await emitModularDeserializeUtilsFromTypeSpec(tspContent);
    assert.ok(operationUtil);
    assertEqualContent(
      operationUtil?.[0]?.getFullText()!,
      `
      import { WidgetData1Output, WidgetData2Output } from "../rest/index.js";
      import { WidgetData1, WidgetData2 } from "../models/models.js";
      
      /** type predict function for WidgetData1 from WidgetData1Output | WidgetData2Output */
      function isWidgetData1(
        obj: WidgetData1Output | WidgetData2Output
      ): obj is WidgetData1Output {
        return (obj as WidgetData1Output).bar_prop !== undefined;
      }
      
      /** deserialize function for WidgetData1 */
      function deserializeWidgetData1(obj: WidgetData1Output): WidgetData1 {
        return { barProp: obj["bar_prop"] };
      }

      /** type predict function for WidgetData2 from WidgetData1Output | WidgetData2Output */
      function isWidgetData2(
        obj: WidgetData1Output | WidgetData2Output
      ): obj is WidgetData2Output {
        return (obj as WidgetData2Output).start !== undefined;
      }

      /** deserialize function for WidgetData2 */
      function deserializeWidgetData2(obj: WidgetData2Output): WidgetData2 {
        return {
          start: new Date(obj["start"]),
          end: obj["end"] !== undefined ? new Date(obj["end"]) : undefined,
        };
      }
      
      /** deserialize function for WidgetData1Output | WidgetData2Output */
      export function deserializeWidgetData1AndWidgetData2Union(
        obj: WidgetData1Output | WidgetData2Output
      ): WidgetData1 | WidgetData2 {
        if (isWidgetData1(obj)) {
          return deserializeWidgetData1(obj);
        }
        if (isWidgetData2(obj)) {
          return deserializeWidgetData2(obj);
        }
        return obj;
      }`
    );
  });

  it("should generate deserialize util if there're three kinds special union variants", async () => {
    const tspContent = `
    
    model WidgetData1 {
      @projectedName("json", "bar_prop")
      barProp: string;
    }

    model WidgetData2 {
      start: utcDateTime;
      end?: utcDateTime;
    }
    
    model WidgetData3 {
      data: bytes;
    }

    model WidgetData4 {
      nestedData: WidgetData3;
    }

    model Widget {
      @key id: string;
      weight: int32;
      color: "red" | "blue";
    }
    
    model Widget1 extends Widget {
      data: WidgetData1 | WidgetData2 | WidgetData4;
    }

    interface WidgetService {
      @get @route("customGet1") customGet1(): Widget1;
    }
    `;

    // to test the generated deserialized utils for union variant of model with datetime properties.
    const operationUtil = await emitModularDeserializeUtilsFromTypeSpec(tspContent);
    assert.ok(operationUtil);
    assertEqualContent(
      operationUtil?.[0]?.getFullText()!,
      ` import {
          WidgetData1Output,
          WidgetData2Output,
          WidgetData4Output,
        } from "../rest/index.js";
        import { stringToUint8Array } from "@azure/core-util";
        import { WidgetData1, WidgetData2, WidgetData4 } from "../models/models.js";
        
        /** type predict function for WidgetData1 from WidgetData1Output | WidgetData2Output | WidgetData4Output */
        function isWidgetData1(
          obj: WidgetData1Output | WidgetData2Output | WidgetData4Output
        ): obj is WidgetData1Output {
          return (obj as WidgetData1Output).bar_prop !== undefined;
        }
        
        /** deserialize function for WidgetData1 */
        function deserializeWidgetData1(obj: WidgetData1Output): WidgetData1 {
          return { barProp: obj["bar_prop"] };
        }
        
        /** type predict function for WidgetData2 from WidgetData1Output | WidgetData2Output | WidgetData4Output */
        function isWidgetData2(
          obj: WidgetData1Output | WidgetData2Output | WidgetData4Output
        ): obj is WidgetData2Output {
          return (obj as WidgetData2Output).start !== undefined;
        }
        
        /** deserialize function for WidgetData2 */
        function deserializeWidgetData2(obj: WidgetData2Output): WidgetData2 {
          return {
            start: new Date(obj["start"]),
            end: obj["end"] !== undefined ? new Date(obj["end"]) : undefined,
          };
        }
        
        /** type predict function for WidgetData4 from WidgetData1Output | WidgetData2Output | WidgetData4Output */
        function isWidgetData4(
          obj: WidgetData1Output | WidgetData2Output | WidgetData4Output
        ): obj is WidgetData4Output {
          return (
            (obj as WidgetData4Output).nestedData !== undefined &&
            (obj as WidgetData4Output).nestedData.data !== undefined
          );
        }
        
        /** deserialize function for WidgetData4 */
        function deserializeWidgetData4(obj: WidgetData4Output): WidgetData4 {
          return {
            nestedData: {
              data:
                typeof obj.nestedData["data"] === "string"
                  ? stringToUint8Array(obj.nestedData["data"], "base64")
                  : obj.nestedData["data"],
            },
          };
        }
        
        /** deserialize function for WidgetData1Output | WidgetData2Output | WidgetData4Output */
        export function deserializeWidgetData1AndWidgetData2AndWidgetData4Union(
          obj: WidgetData1Output | WidgetData2Output | WidgetData4Output
        ): WidgetData1 | WidgetData2 | WidgetData4 {
          if (isWidgetData1(obj)) {
            return deserializeWidgetData1(obj);
          }
          if (isWidgetData2(obj)) {
            return deserializeWidgetData2(obj);
          }
          if (isWidgetData4(obj)) {
            return deserializeWidgetData4(obj);
          }
          return obj;
        }`
    );
  });

  it("should generate function overloads for type predict functions. if there's one special union variant being used in more than one unions", async () => {
    const tspContent = `
    
    model WidgetData1 {
      @projectedName("json", "bar_prop")
      barProp: string;
    }

    model WidgetData2 {
      start: utcDateTime;
      end?: utcDateTime;
    }
    
    model WidgetData3 {
      data: bytes;
    }

    model WidgetData4 {
      nestedData: WidgetData3;
    }

    model Widget {
      @key id: string;
      weight: int32;
      color: "red" | "blue";
    }
    
    model Widget1 extends Widget {
      data: WidgetData1 | WidgetData2 | WidgetData4;
    }

    model Widget2 extends Widget {
      data: WidgetData1 | WidgetData2
    }

    interface WidgetService {
      @get @route("customGet1") customGet1(): Widget1;
      @get @route("customGet2") customGet2(): Widget2;
    }
    `;

    // to test the generated deserialized utils for union variant of model with datetime properties.
    const operationUtil = await emitModularDeserializeUtilsFromTypeSpec(tspContent);
    assert.ok(operationUtil);
    assertEqualContent(
      operationUtil?.[0]?.getFullText()!,
      ` import {
          WidgetData1Output,
          WidgetData2Output,
          WidgetData4Output,
        } from "../rest/index.js";
        import { stringToUint8Array } from "@azure/core-util";
        import { WidgetData1, WidgetData2, WidgetData4 } from "../models/models.js";
        
        /** type predict function for WidgetData1 from WidgetData1Output | WidgetData2Output | WidgetData4Output */
        function isWidgetData1(
          obj: WidgetData1Output | WidgetData2Output | WidgetData4Output
        ): obj is WidgetData1Output;
        /** type predict function for WidgetData1 from WidgetData1Output | WidgetData2Output */
        function isWidgetData1(
          obj: WidgetData1Output | WidgetData2Output
        ): obj is WidgetData1Output;
        /** type predict function for WidgetData1 from WidgetData1Output | WidgetData2Output | WidgetData4Output */
        function isWidgetData1(
          obj: WidgetData1Output | WidgetData2Output | WidgetData4Output
        ): obj is WidgetData1Output {
          return (obj as WidgetData1Output).bar_prop !== undefined;
        }
        
        /** deserialize function for WidgetData1 */
        function deserializeWidgetData1(obj: WidgetData1Output): WidgetData1 {
          return { barProp: obj["bar_prop"] };
        }
        
        /** type predict function for WidgetData2 from WidgetData1Output | WidgetData2Output | WidgetData4Output */
        function isWidgetData2(
          obj: WidgetData1Output | WidgetData2Output | WidgetData4Output
        ): obj is WidgetData2Output;
        /** type predict function for WidgetData2 from WidgetData1Output | WidgetData2Output */
        function isWidgetData2(
          obj: WidgetData1Output | WidgetData2Output
        ): obj is WidgetData2Output;
        /** type predict function for WidgetData2 from WidgetData1Output | WidgetData2Output | WidgetData4Output */
        function isWidgetData2(
          obj: WidgetData1Output | WidgetData2Output | WidgetData4Output
        ): obj is WidgetData2Output {
          return (obj as WidgetData2Output).start !== undefined;
        }
        
        /** deserialize function for WidgetData2 */
        function deserializeWidgetData2(obj: WidgetData2Output): WidgetData2 {
          return {
            start: new Date(obj["start"]),
            end: obj["end"] !== undefined ? new Date(obj["end"]) : undefined,
          };
        }
        
        /** type predict function for WidgetData4 from WidgetData1Output | WidgetData2Output | WidgetData4Output */
        function isWidgetData4(
          obj: WidgetData1Output | WidgetData2Output | WidgetData4Output
        ): obj is WidgetData4Output {
          return (
            (obj as WidgetData4Output).nestedData !== undefined &&
            (obj as WidgetData4Output).nestedData.data !== undefined
          );
        }
        
        /** deserialize function for WidgetData4 */
        function deserializeWidgetData4(obj: WidgetData4Output): WidgetData4 {
          return {
            nestedData: {
              data:
                typeof obj.nestedData["data"] === "string"
                  ? stringToUint8Array(obj.nestedData["data"], "base64")
                  : obj.nestedData["data"],
            },
          };
        }
        
        /** deserialize function for WidgetData1Output | WidgetData2Output | WidgetData4Output */
        export function deserializeWidgetData1AndWidgetData2AndWidgetData4Union(
          obj: WidgetData1Output | WidgetData2Output | WidgetData4Output
        ): WidgetData1 | WidgetData2 | WidgetData4 {
          if (isWidgetData1(obj)) {
            return deserializeWidgetData1(obj);
          }
          if (isWidgetData2(obj)) {
            return deserializeWidgetData2(obj);
          }
          if (isWidgetData4(obj)) {
            return deserializeWidgetData4(obj);
          }
          return obj;
        }
        
        /** deserialize function for WidgetData1Output | WidgetData2Output */
        export function deserializeWidgetData1AndWidgetData2Union(
          obj: WidgetData1Output | WidgetData2Output
        ): WidgetData1 | WidgetData2 {
          if (isWidgetData1(obj)) {
            return deserializeWidgetData1(obj);
          }
          if (isWidgetData2(obj)) {
            return deserializeWidgetData2(obj);
          }
          return obj;
        } 
        `
    );
  });

});
