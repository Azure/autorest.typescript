import {
  emitModularModelsFromTypeSpec,
  emitModularOperationsFromTypeSpec
} from "../util/emitUtil.js";

import { assert } from "chai";
import { assertEqualContent } from "../util/testUtil.js";

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
          {
            needOptions: false,
            withRawContent: true
          }
        );
        assert.ok(schemaOutput);
        await assertEqualContent(
          schemaOutput?.getFullText()!,
          `
          /** Type of SchemaContentTypeValues */
          export type SchemaContentTypeValues =
            | "application/json; serialization=Avro"
            | "application/json; serialization=json"
            | "text/plain; charset=utf-8"
            | "text/vnd.ms.protobuf";
          `
        );
        const paramOutput = await emitModularOperationsFromTypeSpec(
          tspDefinition,
          {
            mustEmptyDiagnostic: false,
            needNamespaces: false,
            needAzureCore: false,
            withRawContent: true,
          }
        );
        assert.ok(paramOutput);
        assert.strictEqual(paramOutput?.length, 1);
        await assertEqualContent(
          paramOutput?.[0]?.getFullText()!,
          `
          import { DemoServiceContext as Client } from "./index.js";
          import {
            StreamableMethod,
            PathUncheckedResponse,
            createRestError,
            operationOptionsToRequestParameters,
          } from "@azure-rest/core-client";
          
          export function _getSend(
            context: Client,
            contentType: SchemaContentTypeValues,
            body: string,
            options: GetOptionalParams = { requestOptions: {} },
          ): StreamableMethod {
              return context
                .path("/")
                .post({
                  ...operationOptionsToRequestParameters(options),
                  contentType: contentType,
                  body: body
                });
          }
          
          export async function _getDeserialize(result: PathUncheckedResponse): Promise<void> {
            const expectedStatuses = ["204"];
            if(!expectedStatuses.includes(result.status)) {
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
        ): { @header("test-header") testHeader: SchemaContentTypeValues; @statusCode _: 204; };
        `;
        const schemaOutput = await emitModularModelsFromTypeSpec(
          tspDefinition,
          {
            needOptions: false,
            withRawContent: true,
          }
        );
        assert.ok(schemaOutput);
        await assertEqualContent(
          schemaOutput?.getFullText()!,
          `
          /** Type of SchemaContentTypeValues */
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
      it("union with string as extensible enum is exhaustive", async () => {
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
          {
            needOptions: false,
            withRawContent: true,
          }
        );
        assert.ok(schemaOutput);
        await assertEqualContent(
          schemaOutput?.getFullText()!,
          `
          /** Type of SchemaContentTypeValues */
          export type SchemaContentTypeValues = 
            | "text/plain; charset=utf-8"
            | "text/vnd.ms.protobuf";
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
          {
            needOptions: false,
            withRawContent: true,
          }
        );
        assert.ok(schemaOutput);
        await assertEqualContent(
          schemaOutput?.getFullText()!,
          `
          /** Alias for SchemaContentTypeValues */
          export type SchemaContentTypeValues = JsonContentType | "text/plain; charset=utf-8" | "text/vnd.ms.protobuf" | string;
          
          export function schemaContentTypeValuesSerializer(
            item: SchemaContentTypeValues,
          ): any {
            return item;
          }
          
          /** Type of JsonContentType */
          export type JsonContentType = "application/json; serialization=Avro" | "application/json; serialization=json";
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
          {
            needOptions: false,
            withRawContent: true,
          }
        );

        assert.ok(schemaOutput);
        await assertEqualContent(
          schemaOutput?.getFullText()!,
          `
          /** Alias for SchemaContentTypeValues */
          export type SchemaContentTypeValues = JsonContentType | "text/plain; charset=utf-8" | "text/vnd.ms.protobuf" | string;
           
           export function schemaContentTypeValuesSerializer(
             item: SchemaContentTypeValues,
           ): any {
             return item;
           }
           
          /** Type of JsonContentType */
          export type JsonContentType = "application/json; serialization=Avro" | "application/json; serialization=json";
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
          {
            needOptions: false,
            withRawContent: true,
          }
        );
        assert.ok(schemaOutput);
        await assertEqualContent(
          schemaOutput?.getFullText()!,
          `
          /** Type of SchemaContentTypeValues */
          export type SchemaContentTypeValues = 
            | "text/plain; charset=utf-8"
            | "text/vnd.ms.protobuf";
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
          {
            needOptions: false,
            withRawContent: true,
          }
        );
        assert.ok(schemaOutput);
        await assertEqualContent(
          schemaOutput?.getFullText()!,
          `
          /** Alias for SchemaContentTypeValues */
          export type SchemaContentTypeValues = JsonContentType | "text/plain; charset=utf-8" | "text/vnd.ms.protobuf" | string;
          
          export function schemaContentTypeValuesSerializer(
            item: SchemaContentTypeValues,
          ): any {
            return item;
          }
          
          /** Type of JsonContentType */
          export type JsonContentType = "application/json; serialization=Avro" | "application/json; serialization=json";
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
          {
            needOptions: false,
            withRawContent: true,
          }
        );

        assert.ok(schemaOutput);
        await assertEqualContent(
          schemaOutput?.getFullText()!,
          `
          /** Alias for SchemaContentTypeValues */
          export type SchemaContentTypeValues = JsonContentType | "text/plain; charset=utf-8" | "text/vnd.ms.protobuf" | string;
          
          export function schemaContentTypeValuesSerializer(
            item: SchemaContentTypeValues,
          ): any {
            return item;
          }
          
          /** Type of JsonContentType */
          export type JsonContentType = "application/json; serialization=Avro" | "application/json; serialization=json";
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
        ): { @header("test-header") testHeader: "A" | "B"; @statusCode _: 204; };
        `;
        const schemaOutput = await emitModularModelsFromTypeSpec(
          tspDefinition,
          {
            needOptions: false,
            withRawContent: true,
          }
        );
        assert.isUndefined(schemaOutput);
        const paramOutput = await emitModularOperationsFromTypeSpec(
          tspDefinition,
          {
            mustEmptyDiagnostic: true,
            needNamespaces: false,
            needAzureCore: false,
            withRawContent: true,
          }
        );
        assert.ok(paramOutput);
        assert.strictEqual(paramOutput?.length, 1);
        const operationContent = paramOutput?.[0]?.getFullText()!;
        await assertEqualContent(
          operationContent,
          `
          import { DemoServiceContext as Client } from "./index.js";
          import {
            StreamableMethod,
            PathUncheckedResponse,
            createRestError,
            operationOptionsToRequestParameters,
          } from "@azure-rest/core-client";
          export function _getSend(
            context: Client,
            testHeader: "A" | "B",
            body: string,
            options: GetOptionalParams = { requestOptions: {} },
          ): StreamableMethod {
            return context
              .path("/")
              .post({
                ...operationOptionsToRequestParameters(options),
                headers: { "test-header": testHeader },
                body: body
              });
          }
          export async function _getDeserialize(result: PathUncheckedResponse): Promise<void> {
            const expectedStatuses = ["204"];
            if(!expectedStatuses.includes(result.status)) {
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
        ): { @header("test-header") testHeader: "A" | "B" | string; @statusCode _: 204; };
        `;
        const schemaOutput = await emitModularModelsFromTypeSpec(
          tspDefinition,
          {
            needOptions: false,
            withRawContent: true,
          }
        );
        assert.isUndefined(schemaOutput);

        const paramOutput = await emitModularOperationsFromTypeSpec(
          tspDefinition,
          {
            mustEmptyDiagnostic: true,
            needNamespaces: false,
            needAzureCore: false,
            withRawContent: true,
          }
        );
        assert.ok(paramOutput);
        assert.strictEqual(paramOutput?.length, 1);
        const operationContent = paramOutput?.[0]?.getFullText()!;
        await assertEqualContent(
          operationContent,
          `
          import { DemoServiceContext as Client } from "./index.js";
          import {
            StreamableMethod,
            PathUncheckedResponse,
            createRestError,
            operationOptionsToRequestParameters,
          } from "@azure-rest/core-client";
          export function _getSend(
            context: Client,
            testHeader: string | "A" | "B",
            body: string,
            options: GetOptionalParams = { requestOptions: {} },
          ): StreamableMethod {
            return context
              .path("/")
              .post({
                ...operationOptionsToRequestParameters(options),
                headers: { "test-header": testHeader },
                body: body
              });
          }
          export async function _getDeserialize(result: PathUncheckedResponse): Promise<void> {
            const expectedStatuses = ["204"];
            if(!expectedStatuses.includes(result.status)) {
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
          {
            needOptions: false,
            withRawContent: true
          }
        );
        assert.ok(schemaOutput);
        await assertEqualContent(
          schemaOutput?.getFullText()!,
          `
          /** Type of SchemaContentTypeValues */
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
          {
            needOptions: false,
            withRawContent: true
          }
        );
        assert.ok(schemaOutput);
        await assertEqualContent(
          schemaOutput?.getFullText()!,
          `
          /** Type of SchemaContentTypeValues */
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
        {
          needOptions: false,
          withRawContent: true
        }
      );
      assert.ok(schemaOutput);
      await assertEqualContent(
        schemaOutput?.getFullText()!,
        `
        /** Type of EnumTest */
        export type EnumTest = 1 | 2 | 3 | 4;
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
        {
          needOptions: false,
          withRawContent: true,
          needAzureCore: false,
          compatibilityMode: false,
          mustEmptyDiagnostic: false,
        }
      );
      assert.ok(schemaOutput);
      await assertEqualContent(
        schemaOutput?.getFullText()!,
        `
        /** model interface Foo */
        export interface Foo {}
        
        export function fooSerializer(item: Foo): any {
          return item;
        }
               

        /** Alias for MixedTypes */
        export type MixedTypes = EnumTest | string | Foo;
      
        export function mixedTypesSerializer(item: MixedTypes): any {
          return item;
        }
        
        /** Type of EnumTest */
        export type EnumTest = 1 | 2 | 3 | 4;
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
        modelFile!.getInterface("Test")?.getFullText()!,
        `
        /** model interface Test */
        export interface Test {
          color: "red" | "blue";
        }`
      );

      const serializer = modelFile?.getFunction("testSerializer")?.getText();
      await assertEqualContent(
        serializer!,
        `
        export function testSerializer(item: Test): any {
          return { color: item["color"] };
        };`,
        true
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
        modelFile!.getInterface("Test")?.getFullText()!,
        `
        /** model interface Test */
        export interface Test {
          color: "red";
        }
        `
      );

      await assertEqualContent(
        modelFile!.getTypeAlias("Color")?.getFullText()!,
        `
        /** Type of Color */
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
        modelFile!.getInterface("Test")?.getFullText()!,
        `
        /** model interface Test */
        export interface Test {
          content: "red" | null;
        }`
      );

      const serializer = modelFile?.getFunction("testSerializer")?.getText();
      await assertEqualContent(
        serializer!,
        `
        export function testSerializer(item: Test): any {
          return {
            content: item["content"],
          }
        };`,
        true
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
        modelFile!.getInterface("Test")?.getFullText()!,
        `
        /** model interface Test */
        export interface Test {
          content: string | null;
        }`
      );

      const serializer = modelFile?.getFunction("testSerializer")?.getText();
      await assertEqualContent(
        serializer!,
        `
        export function testSerializer(item: Test): any {
          return {
            content: item["content"],
          }
        };`,
        true
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
        modelFile!.getInterface("Test")?.getFullText()!,
        `
        /** model interface Test */
        export interface Test {
          color: 1 | 2;
        }`
      );

      const serializer = modelFile?.getFunction("testSerializer")?.getText();
      await assertEqualContent(
        serializer!,
        `
        export function testSerializer(item: Test): any {
          return { color: item["color"] };
        };`,
        true
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
        modelFile!.getInterface("Test")?.getFullText()!,
        `
        /** model interface Test */
        export interface Test {
          color: 1;
        }
        `
      );

      await assertEqualContent(
        modelFile!.getTypeAlias("Color")?.getFullText()!,
        `
        /** Type of Color */
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
        modelFile!.getInterface("Test")?.getFullText()!,
        `
        /** model interface Test */
        export interface Test {
          color: Color | null;
        }
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
        {
          needOptions: false,
          withRawContent: false,
          needAzureCore: true,
        }
      );
      assert.ok(modelFile);
      await assertEqualContent(
        modelFile!.getInterface("Test")?.getFullText()!,
        `
        /** model interface Test */
        export interface Test {
          color: Color | null;
        }
        `
      );

      await assertEqualContent(
        modelFile!.getTypeAlias("Color")?.getFullText()!,
        `
        /** Type of Color */
        export type Color = 1 | 2;
        `
      );
    });

    it("union of enum with experimental extensible enum flags", async () => {
      const modelFile = await emitModularModelsFromTypeSpec(`
      union ImageSize {
        string,

        @doc("""
          Very small image size of 256x256 pixels.
          Only supported with dall-e-2 models.
          """)
        size256x256: "256x256",

        @doc("""
          A smaller image size of 512x512 pixels.
          Only supported with dall-e-2 models.
          """)
        size512x512: "512x512",

        @doc("""
          A standard, square image size of 1024x1024 pixels.
          Supported by both dall-e-2 and dall-e-3 models.
          """)
        size1024x1024: "1024x1024",

        @doc("""
          A wider image size of 1024x1792 pixels.
          Only supported with dall-e-3 models.
          """)
        size1792x1024: "1792x1024",

        @doc("""
          A taller image size of 1792x1024 pixels.
          Only supported with dall-e-3 models.
          """)
        size1024x1792: "1024x1792",
      }
      model Test {
        color: ImageSize;
      }
      op read(@body body: Test): void;
        `,
        {
          needOptions: false,
          withRawContent: false,
          needAzureCore: false,
          compatibilityMode: false,
          mustEmptyDiagnostic: true,
          experimentalExtensibleEnums: true
        }
      );
      assert.ok(modelFile);
      await assertEqualContent(
        modelFile!.getInterface("Test")!.getFullText()!,
        `
        /** model interface Test */
        export interface Test {
          color: ImageSize;
        }
        `
      );
      await assertEqualContent(
        modelFile!.getEnum("KnownImageSize")!.getFullText()!,
        `
        /** Known values of {@link ImageSize} that the service accepts. */
        export enum KnownImageSize {
         /**
          * Very small image size of 256x256 pixels.
          * Only supported with dall-e-2 models.
          */
          size256x256 = "256x256",
         /**
          * A smaller image size of 512x512 pixels.
          * Only supported with dall-e-2 models.
          */
          size512x512 = "512x512",
         /**
          * A standard, square image size of 1024x1024 pixels.
          * Supported by both dall-e-2 and dall-e-3 models.
          */
          size1024x1024 = "1024x1024",
         /**
          * A wider image size of 1024x1792 pixels.
          * Only supported with dall-e-3 models.
          */
          size1792x1024 = "1792x1024",
         /**
          * A taller image size of 1792x1024 pixels.
          * Only supported with dall-e-3 models.
          */
          size1024x1792 = "1024x1792",
        }
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
        modelFile!.getInterface("Test")?.getFullText()!,
        `
        /** model interface Test */
        export interface Test {
          color: Lr | Ud;
        }
        `
      );
      await assertEqualContent(
        modelFile!.getTypeAlias("Lr")?.getFullText()!,
        `
        /** Type of Lr */
        export type Lr = "left" | "right";
        `
      );
      await assertEqualContent(
        modelFile!.getTypeAlias("Ud")?.getFullText()!,
        `
        /** Type of Ud */
        export type Ud = "up" | "down";
        `
      );
    });
    it("non-standard enum/union name", async () => {
      const modelFile = await emitModularModelsFromTypeSpec(`
      union leftAndRight {
        "left",
        "right",
      }
      enum upAndDown {
        up,
        down,
      }

      model Test {
        color: leftAndRight | upAndDown;
      }
      op read(@body body: Test): void;
        `);
      assert.ok(modelFile);
      await assertEqualContent(
        modelFile!.getInterface("Test")?.getFullText()!,
        `
        /** model interface Test */
        export interface Test {
          color: LeftAndRight | UpAndDown;
        }
        `
      );
      await assertEqualContent(
        modelFile!.getTypeAlias("LeftAndRight")?.getFullText()!,
        `
        /** Type of LeftAndRight */
        export type LeftAndRight = "left" | "right";
        `
      );
      await assertEqualContent(
        modelFile!.getTypeAlias("UpAndDown")?.getFullText()!,
        `
        /** Type of UpAndDown */
        export type UpAndDown = "up" | "down";
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
        modelFile!.getInterface("Test")?.getFullText()!,
        `
        /** model interface Test */
        export interface Test {
          content: 1 | null;
        }`
      );

      const serializer = modelFile?.getFunction("testSerializer")?.getText();
      await assertEqualContent(
        serializer!,
        `
        export function testSerializer(item: Test): any {
          return {
            content: item["content"],
          }
        };`,
        true
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
        modelFile!.getInterface("Test")?.getFullText()!,
        `
        /** model interface Test */
        export interface Test {
          content: number | null;
        }`
      );

      const serializer = modelFile?.getFunction("testSerializer")?.getText();
      await assertEqualContent(
        serializer!,
        `
        export function testSerializer(item: Test): any {
          return {
            content: item["content"],
          }
        };`,
        true
      );
    });
  });
});
