import {
  emitModularModelsFromTypeSpec,
  emitModularOperationsFromTypeSpec
} from "../util/emitUtil.js";
import { assertEqualContent } from "../util/testUtil.js";
import { assert } from "chai";

describe("header parameters", () => {
  describe("named union", async () => {
    describe("fixed", async () => {
      it("as contentType", async () => {
        const tspDefinition = `
        import "@typespec/http";
        import "@typespec/rest";
    
        @service({
          title: "Widget Service",
        })
        namespace DemoService;
        
        using TypeSpec.Http;
        using TypeSpec.Rest;
        
        union SchemaContentTypeValues {
          avro: "application/json; serialization=Avro",
          json: "application/json; serialization=json",
          custom: "text/plain; charset=utf-8",
          protobuf: "text/vnd.ms.protobuf",
        }
        
        op get(
          @header("Content-Type") contentType: SchemaContentTypeValues,
          @body body: string,
        ): NoContentResponse;
        `;
        const schemaOutput = await emitModularModelsFromTypeSpec(
          tspDefinition,
          false,
          true
        );
        assert.ok(schemaOutput);
        await assertEqualContent(
          schemaOutput?.getFullText()!,
          `
          /** Type of SchemaContentTypeValues */
          /** */
          export type SchemaContentTypeValues =
            | "application/json; serialization=Avro"
            | "application/json; serialization=json"
            | "text/plain; charset=utf-8"
            | "text/vnd.ms.protobuf";
          `
        );
        const paramOutput = await emitModularOperationsFromTypeSpec(
          tspDefinition,
          false,
          false,
          false,
          true
        );
        assert.ok(paramOutput);
        assert.strictEqual(paramOutput?.length, 1);
        await assertEqualContent(
          paramOutput?.[0]?.getFullText()!,
          `
          import { DemoServiceContext as Client } from "../rest/index.js";
          import {
            StreamableMethod,
            operationOptionsToRequestParameters,
            createRestError,
          } from "@azure-rest/core-client";
          
          export function _getSend(
            context: Client,
            contentType: SchemaContentTypeValues,
            body: string,
            options: GetOptionalParams = { requestOptions: {} },
          ): StreamableMethod<Get204Response> {
              return context
                .path("/")
                .post({
                  ...operationOptionsToRequestParameters(options),
                  contentType: contentType,
                  body: body
                });
          }
          
          export async function _getDeserialize(result: Get204Response): Promise<void> {
            if (result.status !== "204") {
              throw createRestError(result);
            }
          
            return;
          }
          
          export async function get(
            context: Client,
            contentType: SchemaContentTypeValues,
            body: string,
            options: GetOptionalParams = { requestOptions: {} },
          ): Promise<void> {
            const result = await _getSend(context, contentType, body, options);
            return _getDeserialize(result);
          }
          `,
          true
        );
      });

      it("in regular headers", async () => {
        const tspDefinition = `
        import "@typespec/http";
        import "@typespec/rest";
    
        @service({
          title: "Widget Service",
        })
        namespace DemoService;
        
        using TypeSpec.Http;
        using TypeSpec.Rest;
        
        union SchemaContentTypeValues {
          avro: "application/json; serialization=Avro",
          json: "application/json; serialization=json",
          custom: "text/plain; charset=utf-8",
          protobuf: "text/vnd.ms.protobuf",
        }
        
        op get(
          @header("test-header") testHeader: SchemaContentTypeValues,
          @body body: string,
        ): { @header("test-header") testHeader: SchemaContentTypeValues };
        `;
        const schemaOutput = await emitModularModelsFromTypeSpec(
          tspDefinition,
          false,
          true
        );
        assert.ok(schemaOutput);
        await assertEqualContent(
          schemaOutput?.getFullText()!,
          `
          /** Type of SchemaContentTypeValues */
          /** */
          export type SchemaContentTypeValues =
            | "application/json; serialization=Avro"
            | "application/json; serialization=json"
            | "text/plain; charset=utf-8"
            | "text/vnd.ms.protobuf";
          `
        );
      });
    });
    describe("extensible", async () => {
      it("union with string as extensible enum", async () => {
        const tspDefinition = `
        import "@typespec/http";
        import "@typespec/rest";
    
        @service({
          title: "Widget Service",
        })
        namespace DemoService;
        
        using TypeSpec.Http;
        using TypeSpec.Rest;
        
        union SchemaContentTypeValues {
          custom: "text/plain; charset=utf-8",
          protobuf: "text/vnd.ms.protobuf",
          others: string,
        }
        
        op get(
          @header("test-header") testHeader: SchemaContentTypeValues,
          @body body: string,
        ): NoContentResponse;
        `;
        const schemaOutput = await emitModularModelsFromTypeSpec(
          tspDefinition,
          false,
          true
        );
        assert.ok(schemaOutput);
        await assertEqualContent(
          schemaOutput?.getFullText()!,
          `
          /** Type of SchemaContentTypeValues */
          /** "text/plain; charset=utf-8", "text/vnd.ms.protobuf" */
          export type SchemaContentTypeValues = string;
          `
        );
      });
      it("union contains union with string element", async () => {
        const tspDefinition = `
        import "@typespec/http";
        import "@typespec/rest";
    
        @service({
          title: "Widget Service",
        })
        namespace DemoService;
        
        using TypeSpec.Http;
        using TypeSpec.Rest;

        union JsonContentType {
          avro: "application/json; serialization=Avro",
          json: "application/json; serialization=json",
        }
        
        union SchemaContentTypeValues {
          JsonContentType,
          custom: "text/plain; charset=utf-8",
          protobuf: "text/vnd.ms.protobuf",
          others: string,
        }
        
        op get(
          @header("test-header") testHeader: SchemaContentTypeValues,
          @body body: string,
        ): NoContentResponse;
        `;
        const schemaOutput = await emitModularModelsFromTypeSpec(
          tspDefinition,
          false,
          true
        );
        assert.ok(schemaOutput);
        await assertEqualContent(
          schemaOutput?.getFullText()!,
          `
          /** Type of JsonContentType */
          /** */
          export type JsonContentType = "application/json; serialization=Avro" | "application/json; serialization=json";
          /** Alias for SchemaContentTypeValues */
          export type SchemaContentTypeValues = JsonContentType | "text/plain; charset=utf-8" | "text/vnd.ms.protobuf" | string;
          `
        );
      });
      it("union contains enum with string element", async () => {
        const tspDefinition = `
        import "@typespec/http";
        import "@typespec/rest";
    
        @service({
          title: "Widget Service",
        })
        namespace DemoService;
        
        using TypeSpec.Http;
        using TypeSpec.Rest;

        enum JsonContentType {
          avro: "application/json; serialization=Avro",
          json: "application/json; serialization=json",
        }
        
        union SchemaContentTypeValues {
          JsonContentType,
          custom: "text/plain; charset=utf-8",
          protobuf: "text/vnd.ms.protobuf",
          others: string,
        }
        
        op get(
          @header("test-header") testHeader: SchemaContentTypeValues,
          @body body: string,
        ): NoContentResponse;
        `;
        const schemaOutput = await emitModularModelsFromTypeSpec(
          tspDefinition,
          false,
          true
        );

        assert.ok(schemaOutput);
        await assertEqualContent(
          schemaOutput?.getFullText()!,
          `
          /** */
          export type JsonContentType = "application/json; serialization=Avro" | "application/json; serialization=json";
          /** Alias for SchemaContentTypeValues */
          export type SchemaContentTypeValues = JsonContentType | "text/plain; charset=utf-8" | "text/vnd.ms.protobuf" | string;
          `
        );
      });
    });
  });

  describe("anonymous union with `|` ", async () => {
    describe("fixed", async () => {
      it("in regular headers", async () => {
        const tspDefinition = `
        import "@typespec/http";
        import "@typespec/rest";
    
        @service({
          title: "Widget Service",
        })
        namespace DemoService;
        
        using TypeSpec.Http;
        using TypeSpec.Rest;
        
        op get(
          @header("test-header") testHeader: "A" | "B",
          @body body: string,
        ): { @header("test-header") testHeader: "A" | "B" };
        `;
        const schemaOutput = await emitModularModelsFromTypeSpec(
          tspDefinition,
          false,
          true
        );
        assert.isUndefined(schemaOutput);

        const paramOutput = await emitModularOperationsFromTypeSpec(
          tspDefinition,
          true,
          false,
          false,
          true
        );
        assert.ok(paramOutput);
        assert.strictEqual(paramOutput?.length, 1);
        const operationContent = paramOutput?.[0]?.getFullText()!;
        await assertEqualContent(
          operationContent,
          `
          import { DemoServiceContext as Client } from "../rest/index.js";
          import {
            StreamableMethod,
            operationOptionsToRequestParameters,
            createRestError,
          } from "@azure-rest/core-client";
          export function _getSend(
            context: Client,
            testHeader: "A" | "B",
            body: string,
            options: GetOptionalParams = { requestOptions: {} },
          ): StreamableMethod<Get204Response> {
            return context
              .path("/")
              .post({
                ...operationOptionsToRequestParameters(options),
                headers: { "test-header": testHeader },
                body: body
              });
          }
          export async function _getDeserialize(result: Get204Response): Promise<void> {
            if (result.status !== "204") {
              throw createRestError(result);
            }
            return;
          }
          export async function get(
            context: Client,
            testHeader: "A" | "B",
            body: string,
            options: GetOptionalParams = { requestOptions: {} },
          ): Promise<void> {
            const result = await _getSend(context, testHeader, body, options);
            return _getDeserialize(result);
          }
          `,
          true
        );
      });
    });
    describe("extensible", async () => {
      it("in regular headers", async () => {
        const tspDefinition = `
        import "@typespec/http";
        import "@typespec/rest";
    
        @service({
          title: "Widget Service",
        })
        namespace DemoService;
        
        using TypeSpec.Http;
        using TypeSpec.Rest;
        
        op get(
          @header("test-header") testHeader: "A" | "B" | string,
          @body body: string,
        ): { @header("test-header") testHeader: "A" | "B" | string };
        `;
        const schemaOutput = await emitModularModelsFromTypeSpec(
          tspDefinition,
          false,
          true
        );
        assert.isUndefined(schemaOutput);

        const paramOutput = await emitModularOperationsFromTypeSpec(
          tspDefinition,
          true,
          false,
          false,
          true
        );
        assert.ok(paramOutput);
        assert.strictEqual(paramOutput?.length, 1);
        const operationContent = paramOutput?.[0]?.getFullText()!;
        await assertEqualContent(
          operationContent,
          `
          import { DemoServiceContext as Client } from "../rest/index.js";
          import {
            StreamableMethod,
            operationOptionsToRequestParameters,
            createRestError,
          } from "@azure-rest/core-client";
          export function _getSend(
            context: Client,
            testHeader: string | "A" | "B",
            body: string,
            options: GetOptionalParams = { requestOptions: {} },
          ): StreamableMethod<Get204Response> {
            return context
              .path("/")
              .post({
                ...operationOptionsToRequestParameters(options),
                headers: { "test-header": testHeader },
                body: body
              });
          }
          export async function _getDeserialize(result: Get204Response): Promise<void> {
            if (result.status !== "204") {
              throw createRestError(result);
            }
            return;
          }
          export async function get(
            context: Client,
            testHeader: string | "A" | "B",
            body: string,
            options: GetOptionalParams = { requestOptions: {} },
          ): Promise<void> {
            const result = await _getSend(context, testHeader, body, options);
            return _getDeserialize(result);
          }
          `,
          true
        );
      });
    });
  });

  describe("enum", async () => {
    describe("with @fixed", async () => {
      it("should be taken as fixed enum", async () => {
        const tspDefinition = `
        import "@typespec/http";
        import "@typespec/rest";
        import "@azure-tools/typespec-azure-core";
    
        @service({
          title: "Widget Service",
        })
        namespace DemoService;
        
        using TypeSpec.Http;
        using TypeSpec.Rest;
        using Azure.Core;
        
        @fixed
        enum SchemaContentTypeValues {
          avro: "application/json; serialization=Avro",
          json: "application/json; serialization=json",
          custom: "text/plain; charset=utf-8",
          protobuf: "text/vnd.ms.protobuf",
        }
        
        op get(
          @header("test-header") testHeader: SchemaContentTypeValues,
          @body body: string,
        ): NoContentResponse;
        `;
        const schemaOutput = await emitModularModelsFromTypeSpec(
          tspDefinition,
          false,
          true
        );
        assert.ok(schemaOutput);
        await assertEqualContent(
          schemaOutput?.getFullText()!,
          `
          /** */
          export type SchemaContentTypeValues = "application/json; serialization=Avro" | "application/json; serialization=json" | "text/plain; charset=utf-8" | "text/vnd.ms.protobuf";`
        );
      });
    });
    describe("without @fixed", async () => {
      it("should be taken as fixed enum", async () => {
        const tspDefinition = `
        import "@typespec/http";
        import "@typespec/rest";
        import "@azure-tools/typespec-azure-core";
    
        @service({
          title: "Widget Service",
        })
        namespace DemoService;
        
        using TypeSpec.Http;
        using TypeSpec.Rest;
        using Azure.Core;
        
        enum SchemaContentTypeValues {
          avro: "application/json; serialization=Avro",
          json: "application/json; serialization=json",
          custom: "text/plain; charset=utf-8",
          protobuf: "text/vnd.ms.protobuf",
        }
        
        op get(
          @header("test-header") testHeader: SchemaContentTypeValues,
          @body body: string,
        ): NoContentResponse;
        `;
        const schemaOutput = await emitModularModelsFromTypeSpec(
          tspDefinition,
          false,
          true
        );
        assert.ok(schemaOutput);
        await assertEqualContent(
          schemaOutput?.getFullText()!,
          `
          /** */
          export type SchemaContentTypeValues = "application/json; serialization=Avro" | "application/json; serialization=json" | "text/plain; charset=utf-8" | "text/vnd.ms.protobuf";`
        );
      });
    });
  });

  describe("number extensible enum + mixed types union", async () => {
    it("number extensible enum should be generated correctly", async () => {
      const tspDefinition = `
      import "@typespec/http";
      import "@typespec/rest";
      import "@azure-tools/typespec-azure-core";
  
      @service({
        title: "Widget Service",
      })
      namespace DemoService;
      
      using TypeSpec.Http;
      using TypeSpec.Rest;
      using Azure.Core;
      
      union EnumTest  {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        others: int32
      }
      
      op get(
        @header("test-header") testHeader: EnumTest,
        @body body: string,
      ): NoContentResponse;
      `;
      const schemaOutput = await emitModularModelsFromTypeSpec(
        tspDefinition,
        false,
        true
      );
      assert.ok(schemaOutput);
      await assertEqualContent(
        schemaOutput?.getFullText()!,
        `
        /** Type of EnumTest */
        /** 1, 2, 3, 4 */
        export type EnumTest = number;
`
      );
    });

    it("mixed union types should be generated correctly", async () => {
      const tspDefinition = `
      import "@typespec/http";
      import "@typespec/rest";
      import "@azure-tools/typespec-azure-core";
  
      @service({
        title: "Widget Service",
      })
      namespace DemoService;
      
      using TypeSpec.Http;
      using TypeSpec.Rest;
      using Azure.Core;
      
      enum EnumTest  {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
      }

      model Foo {}

      union MixedTypes {
        EnumTest,
        string,
        Foo
      }
      
      op get(
        @header("test-header") testHeader: MixedTypes,
        @body body: string,
      ): NoContentResponse;
      `;
      const schemaOutput = await emitModularModelsFromTypeSpec(
        tspDefinition,
        false,
        true
      );
      assert.ok(schemaOutput);
      await assertEqualContent(
        schemaOutput?.getFullText()!,
        `
        /** */
        export type EnumTest = 1 | 2 | 3 | 4;
        
        export interface Foo {
        }
        
        /** Alias for MixedTypes */
        export type MixedTypes = EnumTest | string | Foo;
      `
      );
    });
  });
});

describe("model type", () => {
  describe("string | string literal | nullable", () => {
    it("string enum", async () => {
      const modelFile = await emitModularModelsFromTypeSpec(`
        model Test {
          color: "red" | "blue";
        }
        op read(@body body: Test): void;
        `);
      assert.ok(modelFile);
      await assertEqualContent(
        modelFile!.getFullText()!,
        `
        export interface Test {
          color: "red" | "blue";
        }`
      );
    });

    it("string enum member", async () => {
      const modelFile = await emitModularModelsFromTypeSpec(`
        enum Color {
          Red: "red",
          Blue: "blue"
        }
        model Test {
          color: Color.Red;
        }
        op read(@body body: Test): void;
        `);
      assert.ok(modelFile);
      await assertEqualContent(
        modelFile!.getFullText()!,
        `
        export interface Test {
          color: "red";
        }

        /** */
        export type Color = "red" | "blue";  
        `
      );
    });

    it("nullable string literal", async () => {
      const modelFile = await emitModularModelsFromTypeSpec(`
        model Test {
          content: "red" | null;
        }
        op read(@body body: Test): void;
        `);
      assert.ok(modelFile);
      await assertEqualContent(
        modelFile!.getFullText()!,
        `
        export interface Test {
          content: "red" | null;
        }`
      );
    });

    it("nullable string", async () => {
      const modelFile = await emitModularModelsFromTypeSpec(`
        model Test {
          content: string | null;
        }
        op read(@body body: Test): void;
        `);
      assert.ok(modelFile);
      await assertEqualContent(
        modelFile!.getFullText()!,
        `
        export interface Test {
          content: string | null;
        }`
      );
    });
  });

  describe("number | numeric literal | nullable", () => {
    it("number enum", async () => {
      const modelFile = await emitModularModelsFromTypeSpec(`
        model Test {
          color: 1 | 2;
        }
        op read(@body body: Test): void;
        `);
      assert.ok(modelFile);
      await assertEqualContent(
        modelFile!.getFullText()!,
        `
        export interface Test {
          color: 1 | 2;
        }`
      );
    });

    it("number enum member", async () => {
      const modelFile = await emitModularModelsFromTypeSpec(`
        enum Color {
          Color1: 1,
          Color2: 2
        }
        model Test {
          color: Color.Color1;
        }
        op read(@body body: Test): void;
        `);
      assert.ok(modelFile);
      await assertEqualContent(
        modelFile!.getFullText()!,
        `
        export interface Test {
          color: 1;
        }

        /** */
        export type Color = 1 | 2;
        `
      );
    });

    it("nullable enum without @fixed would be interpreted as non-branded enum which is fixed", async () => {
      const modelFile = await emitModularModelsFromTypeSpec(`
        enum Color {
          Color1: 1,
          Color2: 2
        }
        model Test {
          color: Color | null;
        }
        op read(@body body: Test): void;
        `);
      assert.ok(modelFile);
      await assertEqualContent(
        modelFile!.getFullText()!,
        `
        export interface Test {
          color: Color | null;
        }

        /** Type of Color */
        /** */
        export type Color = 1 | 2;
        `
      );
    });

    it("nullable @fixed enum would be interpreted as azure enum which is fixed", async () => {
      const modelFile = await emitModularModelsFromTypeSpec(
        `
        @fixed
        enum Color {
          Color1: 1,
          Color2: 2
        }
        model Test {
          color: Color | null;
        }
        op read(@body body: Test): void;
        `,
        undefined,
        undefined,
        true
      );
      assert.ok(modelFile);
      await assertEqualContent(
        modelFile!.getFullText()!,
        `
        export interface Test {
          color: Color | null;
        }

        /** Type of Color */
        /** */
        export type Color = 1 | 2;
        `
      );
    });

    it("union of enum", async () => {
      const modelFile = await emitModularModelsFromTypeSpec(`
      enum LR {
        left,
        right,
      }
      enum UD {
        up,
        down,
      }

      model Test {
        color: LR | UD;
      }
      op read(@body body: Test): void;
        `);
      assert.ok(modelFile);
      await assertEqualContent(
        modelFile!.getFullText()!,
        `
        export interface Test {
          color: Lr | Ud;
        }

        /** */
        export type Lr = "left" | "right";
        /** */
        export type Ud = "up" | "down";
        `
      );
    });

    it("nullable numeric literal", async () => {
      const modelFile = await emitModularModelsFromTypeSpec(`
        model Test {
          content: 1 | null;
        }
        op read(@body body: Test): void;
        `);
      assert.ok(modelFile);
      await assertEqualContent(
        modelFile!.getFullText()!,
        `
        export interface Test {
          content: 1 | null;
        }`
      );
    });

    it("nullable number", async () => {
      const modelFile = await emitModularModelsFromTypeSpec(`
        model Test {
          content: int32 | null;
        }
        op read(@body body: Test): void;
        `);
      assert.ok(modelFile);
      await assertEqualContent(
        modelFile!.getFullText()!,
        `
        export interface Test {
          content: number | null;
        }`
      );
    });
  });
});
