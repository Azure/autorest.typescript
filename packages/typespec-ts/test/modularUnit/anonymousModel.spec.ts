import { assert } from "chai";
import {
  emitModularModelsFromTypeSpec,
  emitModularOperationsFromTypeSpec
} from "../util/emitUtil.js";
import { assertEqualContent } from "../util/testUtil.js";
import {
  ImportDeclaration,
  OptionalKind,
  ParameterDeclarationStructure,
  SourceFile
} from "ts-morph";

async function assertImports(imports?: ImportDeclaration[]): Promise<void> {
  if (!imports) {
    assert.fail("No imports in a file with expected imports");
  }

  const expectImports = [
    {
      namedImports: [{ name: "TestingContext", alias: "Client" }],
      moduleSpecifier: "@azure-rest/core-client"
    },
    {
      namedImports: ["StreamableMethod", "operationOptionsToRequestParameters"],
      moduleSpecifier: "@azure-rest/core-client"
    }
  ];
  assert.includeDeepMembers(
    imports
      .map((importDecl) => importDecl.getStructure())
      .map(({ namedImports, moduleSpecifier }) => {
        return { namedImports, moduleSpecifier };
      }),
    expectImports
  );
}

function verifyReturnType(
  sourceFile: SourceFile | undefined,
  returnType: string
) {
  if (!sourceFile) {
    assert.fail();
  }
  assertImports(sourceFile?.getImportDeclarations());
  const actualReturnType = sourceFile
    ?.getFunction("read")
    ?.getStructure().returnType;
  assert.deepEqual(actualReturnType, `Promise<${returnType}>`);
}

describe.only("anonymous model", () => {
  describe.only("in request", async () => {
    describe.only("happens at body parameter", async () => {
      it("should flatten alias if spread in the payload with required parameters", async () => {
        const tspContent = `
      alias Foo = {
        prop1: string;
        prop2: int64;
        prop3: utcDateTime;
        prop4: offsetDateTime;
        prop5: Bar;
      };
      model Bar {
        prop1: string;
        prop2: int64;
      }
      op read(@path pathParam: string, @query queryParam: string, ...Foo): OkResponse;
        `;
        const modelFile = await emitModularModelsFromTypeSpec(tspContent);
        assert.ok(modelFile);
        assertEqualContent(
          modelFile?.getFullText()!,
          `
          export interface Bar {
            prop1: string;
            prop2: number;
          }`
        );
        const operationFiles = await emitModularOperationsFromTypeSpec(
          tspContent
        );
        assert.ok(operationFiles);
        assert.equal(operationFiles?.length, 1);

        assertImports(operationFiles?.[0]?.getImportDeclarations());
        const expectParameters = [
          { name: "context", type: "Client", initializer: undefined },
          { name: "prop1", type: "string" },
          { name: "prop2", type: "number" },
          { name: "prop3", type: "Date" },
          { name: "prop4", type: "string" },
          { name: "prop5", type: "Bar" },
          {
            name: "options",
            type: "ReadOptions",
            initializer: "{ requestOptions: {} }"
          }
        ];
        const actualParameters = operationFiles?.[0]
          ?.getFunction("read")
          ?.getParameters()
          .map(
            (p) =>
              p.getStructure() as OptionalKind<ParameterDeclarationStructure>
          )
          .map(({ name, type }) => {
            return { name, type };
          });
        assert.deepNestedInclude(actualParameters, expectParameters);
      });

      it("should flatten alias if spread in the payload with optional parameters", async () => {
        const tspContent = `
      alias Foo = {
        prop1: string;
        prop2: int64;
        prop3?: utcDateTime;
        prop4: offsetDateTime;
        prop5?: Bar;
      };
      model Bar {
        prop1: string;
        prop2: int64;
      }
      op read(@path pathParam: string, @query queryParam: string, ...Foo): OkResponse;
        `;
        const modelFile = await emitModularModelsFromTypeSpec(tspContent);
        assert.ok(modelFile);
        assertEqualContent(
          modelFile?.getFullText()!,
          `
          export interface Bar {
            prop1: string;
            prop2: number;
          }`
        );
        const optionFile = await emitModularModelsFromTypeSpec(
          tspContent,
          true
        );
        assert.ok(optionFile);
        assertImports(optionFile?.getImportDeclarations());
        const expectParameters = [
          { name: "Context", type: "Client" },
          { name: "pathParam", type: "string" },
          { name: "queryParam", type: "string" },
          { name: "prop1", type: "string" },
          { name: "prop2", type: "number" },
          { name: "prop4", type: "string" },
          {
            name: "options",
            type: "ReadOptions",
            initializer: "{ requestOptions: {} }"
          }
        ];
        const actualParameters = optionFile
          ?.getFunction("read")
          ?.getParameters()
          .map(
            (p) =>
              p.getStructure() as OptionalKind<ParameterDeclarationStructure>
          )
          .map(({ name, type }) => {
            return { name, type };
          });
        assert.deepEqual(actualParameters, expectParameters);
      });

      it("should flatten alias if spread in the payload with optional parameters with orders", async () => {
        const tspContent = `
      alias Foo = {
        @path
        prop1: string;
        prop2: int64;
        prop3?: utcDateTime;
        @query
        prop4: offsetDateTime;
        prop5?: Bar;
      };
      model Bar {
        prop1: string;
        prop2: int64;
      }
      op read(@path pathParam: string, ...Foo, @query queryParam: string): OkResponse;
        `;
        const modelFile = await emitModularModelsFromTypeSpec(tspContent);
        assert.ok(modelFile);
        assertEqualContent(
          modelFile?.getFullText()!,
          `
          export interface Bar {
            prop1: string;
            prop2: number;
          }`
        );
        const optionFile = await emitModularModelsFromTypeSpec(
          tspContent,
          true
        );
        assert.ok(optionFile);
        assertEqualContent(
          optionFile?.getFullText()!,
          `
        import { OperationOptions } from "@azure-rest/core-client";
        
        export interface ReadOptions extends OperationOptions {
          prop3?: Date;
          prop5?: Bar;
        }`
        );
        const operationFiles = await emitModularOperationsFromTypeSpec(
          tspContent
        );
        assert.ok(operationFiles);
        assert.equal(operationFiles?.length, 1);
        assertImports(optionFile?.getImportDeclarations());
        const expectParameters: Array<{
          name: string;
          type: string;
          initializer: string | undefined;
        }> = [
          { name: "context", type: "Client", initializer: undefined },
          { name: "pathParam", type: "string", initializer: undefined },
          { name: "prop1", type: "string", initializer: undefined },
          { name: "prop4", type: "string", initializer: undefined },
          { name: "queryParam", type: "string", initializer: undefined },
          { name: "prop2", type: "number", initializer: undefined },
          {
            name: "options",
            type: "ReadOptions",
            initializer: "{ requestOptions: {} }"
          }
        ];
        const actualParameters = optionFile
          ?.getFunction("read")
          ?.getParameters()
          .map(
            (p) =>
              p.getStructure() as OptionalKind<ParameterDeclarationStructure>
          )
          .map(({ name, type, initializer }) => {
            return {
              name: name,
              type: type?.toString(),
              initializer: initializer?.toString()
            };
          });
        assert.deepEqual(actualParameters, expectParameters);
      });

      it("should not flatten model if spread in the payload with required parameters", async () => {
        const tspContent = `
      model Foo {
        prop1: string;
        prop2: int64;
        prop3: utcDateTime;
        prop4: offsetDateTime;
        prop5: Bar;
      }
      model Bar {
        prop1: string;
        prop2: int64;
      }
      op read(@path pathParam: string, @query queryParam: string, ...Foo): OkResponse;
        `;
        const modelFile = await emitModularModelsFromTypeSpec(tspContent);
        assert.ok(modelFile);
        assertEqualContent(
          modelFile?.getFullText()!,
          `
        export interface Foo {
          prop1: string;
          prop2: number;
          prop3: Date;
          prop4: string;
          prop5: Bar;
        }
  
        export interface Bar {
          prop1: string;
          prop2: number;
        }`
        );
        const operationFiles = await emitModularOperationsFromTypeSpec(
          tspContent
        );
        assert.ok(operationFiles);
        assert.equal(operationFiles?.length, 1);
        assertImports(operationFiles?.[0]?.getImportDeclarations());
        const expectParameters: Array<{
          name: string;
          type: string;
          initializer: string | undefined;
        }> = [
          { name: "context", type: "Client", initializer: undefined },
          { name: "pathParam", type: "string", initializer: undefined },
          { name: "queryParam", type: "string", initializer: undefined },
          { name: "body", type: "Foo", initializer: undefined },
          {
            name: "options",
            type: "ReadOptions",
            initializer: "{ requestOptions: {} }"
          }
        ];
        const actualParameters = operationFiles?.[0]
          ?.getFunction("read")
          ?.getParameters()
          .map(
            (p) =>
              p.getStructure() as OptionalKind<ParameterDeclarationStructure>
          )
          .map(({ name, type, initializer }) => {
            return {
              name: name,
              type: type?.toString(),
              initializer: initializer?.toString()
            };
          });
        assert.deepEqual(actualParameters, expectParameters);
      });

      it("should not flatten if body is empty anonymous model({})", async () => {
        const tspContent = `
      op read(@path pathParam: string, @query queryParam: string, @body body: {}): OkResponse;
        `;
        const modelFile = await emitModularModelsFromTypeSpec(tspContent);
        assert.isUndefined(modelFile);
        const operationFiles = await emitModularOperationsFromTypeSpec(
          tspContent
        );
        assert.ok(operationFiles);
        assert.equal(operationFiles?.length, 1);
        assertImports(operationFiles?.[0]?.getImportDeclarations());
        const expectParameters: Array<{
          name: string;
          type: string;
          initializer: string | undefined;
        }> = [
          { name: "context", type: "Client", initializer: undefined },
          { name: "pathParam", type: "string", initializer: undefined },
          { name: "queryParam", type: "string", initializer: undefined },
          { name: "body", type: "Record<string, any>", initializer: undefined },
          {
            name: "options",
            type: "ReadOptions",
            initializer: "{ requestOptions: {} }"
          }
        ];
        const actualParameters = operationFiles?.[0]
          ?.getFunction("read")
          ?.getParameters()
          .map(
            (p) =>
              p.getStructure() as OptionalKind<ParameterDeclarationStructure>
          )
          .map(({ name, type, initializer }) => {
            return {
              name: name,
              type: type?.toString(),
              initializer: initializer?.toString()
            };
          });
        assert.deepEqual(actualParameters, expectParameters);
      });

      it("should flatten non-empty anonymous  model({ ... })", async () => {
        const tspContent = `
      model Bar {
        prop1: string;
        prop2: int64;
      }
      op read(@path pathParam: string, @query queryParam: string, @body test: {
        prop1: string;
        prop2: Bar;
      }): OkResponse;
        `;
        const modelFile = await emitModularModelsFromTypeSpec(tspContent);
        assert.ok(modelFile);
        assertEqualContent(
          modelFile?.getFullText()!,
          `
          export interface Bar {
            prop1: string;
            prop2: number;
          }`
        );
        const operationFiles = await emitModularOperationsFromTypeSpec(
          tspContent
        );
        assert.ok(operationFiles);
        assert.equal(operationFiles?.length, 1);
        assertImports(operationFiles?.[0]?.getImportDeclarations());
        const expectParameters: Array<{
          name: string;
          type: string;
          initializer: string | undefined;
        }> = [
          { name: "context", type: "Client", initializer: undefined },
          { name: "pathParam", type: "string", initializer: undefined },
          { name: "queryParam", type: "string", initializer: undefined },
          { name: "prop1", type: "string", initializer: undefined },
          { name: "prop2", type: "Bar", initializer: undefined },
          {
            name: "options",
            type: "ReadOptions",
            initializer: "{ requestOptions: {} }"
          }
        ];
        const actualParameters = operationFiles?.[0]
          ?.getFunction("read")
          ?.getParameters()
          .map(
            (p) =>
              p.getStructure() as OptionalKind<ParameterDeclarationStructure>
          )
          .map(({ name, type, initializer }) => {
            return {
              name: name,
              type: type?.toString(),
              initializer: initializer?.toString()
            };
          });
        assert.deepEqual(actualParameters, expectParameters);
      });
    });

    describe.only("happens as a property in body", async () => {
      it("should generate empty anonymous model({}) as Record<string, any>", async () => {
        const tspContent = `
        model Test {
          color: {};
        }
        op read(@body body: Test): void;
        `;
        const modelFile = await emitModularModelsFromTypeSpec(tspContent);
        assert.ok(modelFile);
        assertEqualContent(
          modelFile!.getFullText()!,
          `
        export interface Test {
          color: Record<string, any>;
        }`
        );

        const operationFiles = await emitModularOperationsFromTypeSpec(
          tspContent
        );
        assert.ok(operationFiles);
        assert.equal(operationFiles?.length, 1);
        assertImports(operationFiles?.[0]?.getImportDeclarations());
        const expectParameters: Array<{
          name: string;
          type: string;
          initializer: string | undefined;
        }> = [
          { name: "context", type: "Client", initializer: undefined },
          { name: "body", type: "Test", initializer: undefined },
          {
            name: "options",
            type: "ReadOptions",
            initializer: "{ requestOptions: {} }"
          }
        ];
        const actualParameters = operationFiles?.[0]
          ?.getFunction("read")
          ?.getParameters()
          .map(
            (p) =>
              p.getStructure() as OptionalKind<ParameterDeclarationStructure>
          )
          .map(({ name, type, initializer }) => {
            return {
              name: name,
              type: type?.toString(),
              initializer: initializer?.toString()
            };
          });
        assert.deepEqual(actualParameters, expectParameters);
      });

      it("should generate non-empty anonymous  model({ ... })", async () => {
        const tspContent = `
        model Test {
          color: {
            foo?: string;
          };
        }
        op read(@body body: Test): void;
        `;
        const modelFile = await emitModularModelsFromTypeSpec(tspContent);
        assert.ok(modelFile);
        assertEqualContent(
          modelFile!.getFullText()!,
          `
        export interface Test {
          color: { foo?: string };
        }`
        );

        const operationFiles = await emitModularOperationsFromTypeSpec(
          tspContent
        );
        assert.ok(operationFiles);
        assert.equal(operationFiles?.length, 1);
        assertImports(operationFiles?.[0]?.getImportDeclarations());
        const expectParameters: Array<{
          name: string;
          type: string;
          initializer: string | undefined;
        }> = [
          { name: "context", type: "Client", initializer: undefined },
          { name: "body", type: "Test", initializer: undefined },
          {
            name: "options",
            type: "ReadOptions",
            initializer: "{ requestOptions: {} }"
          }
        ];
        const actualParameters = operationFiles?.[0]
          ?.getFunction("read")
          ?.getParameters()
          .map(
            (p) =>
              p.getStructure() as OptionalKind<ParameterDeclarationStructure>
          )
          .map(({ name, type, initializer }) => {
            return {
              name: name,
              type: type?.toString(),
              initializer: initializer?.toString()
            };
          });
        assert.deepEqual(actualParameters, expectParameters);
      });
    });
  });

  describe.only("in response", async () => {
    describe.only("happens at body parameter", async () => {
      it("should map empty anonymous model({}) => Record<string, any>", async () => {
        const tspContent = `
        op read(): {};
        `;
        // No models.ts file generated
        assert.isUndefined(await emitModularModelsFromTypeSpec(tspContent));
        const operationFiles = await emitModularOperationsFromTypeSpec(
          tspContent
        );
        assert.equal(operationFiles?.length, 1);
        // Generate the operations.ts file with empty model
        verifyReturnType(operationFiles?.[0], "Record<string, any>");
      });

      it("should map empty named model(PublishResult {}) => PublishResult", async () => {
        const tspContent = `
        model PublishResult {
        }
        op read(): PublishResult;
        `;
        const modelFile = await emitModularModelsFromTypeSpec(tspContent);
        assertEqualContent(
          modelFile?.getFullText()!,
          `
          export interface PublishResult {}
        `
        );
        const operationFiles = await emitModularOperationsFromTypeSpec(
          tspContent
        );
        assert.ok(operationFiles);
        assert.equal(operationFiles?.length, 1);
        // Model name referred in operations.ts
        verifyReturnType(operationFiles?.[0], "PublishResult");
      });

      it("should return non-empty anonymous  model({ ... })", async () => {
        const tspContent = `
        op read(): { foo?: {bar: string | null}};
        `;
        // No models.ts file generated
        assert.isUndefined(await emitModularModelsFromTypeSpec(tspContent));
        const operationFiles = await emitModularOperationsFromTypeSpec(
          tspContent
        );
        assert.equal(operationFiles?.length, 1);
        // Generate the operations.ts file with empty model
        verifyReturnType(
          operationFiles?.[0],
          `{"foo"?: {"bar": (string | null);};}`
        );
      });
    });
    describe.only("happens as a property in response body", async () => {
      it("should map empty anonymous  model({}) => Record<string, any> & empty named model(A {}) => Record<string, any>", async () => {
        const tspContent = `
        model EmptyModel {
        }
        model ReturnBody {
          emptyAnomyous: {};
          emptyAnomyousArray: {}[];
          emptyAnomyousDict: Record<{}>;
          emptyModel: EmptyModel;
          emptyModelArray: EmptyModel[];
          emptyModelDict: Record<EmptyModel>;
        }
        op read(): ReturnBody;
        `;
        const modelFile = await emitModularModelsFromTypeSpec(tspContent);
        assertEqualContent(
          modelFile?.getFullText()!,
          `
        export interface ReturnBody {
          emptyAnomyous: Record<string, any>;
          emptyAnomyousArray: Record<string, any>[];
          emptyAnomyousDict: Record<string, Record<string, any>>;
          emptyModel: EmptyModel;
          emptyModelArray: EmptyModel[];
          emptyModelDict: Record<string, EmptyModel>;
        }

        export interface EmptyModel {}
        `
        );
        const operationFiles = await emitModularOperationsFromTypeSpec(
          tspContent
        );
        assert.equal(operationFiles?.length, 1);
        verifyReturnType(operationFiles?.[0], "ReturnBody");
        const deserializerBody = operationFiles?.[0]
          ?.getFunction("_readDeserialize")
          ?.getBody()
          ?.getText();
        const expectDeserialize = `return {
            emptyAnomyous: result.body["emptyAnomyous"],
            emptyAnomyousArray: result.body["emptyAnomyousArray"],
            emptyAnomyousDict: result.body["emptyAnomyousDict"],
            emptyModel: {},
            emptyModelArray: result.body["emptyModelArray"].map(() => ({})),
            emptyModelDict: result.body["emptyModelDict"],
        }`;
        assert.include(
          deserializerBody,
          expectDeserialize,
          `The function body ${deserializerBody} does not contain the text ${expectDeserialize}`
        );
      });

      it("should map non-empty anonymous model({ ... }) => { ... }", async () => {
        const tspContent = `
        model SimpleModel {
          test: string;
        }
        model Foz {
          baz: {
            foo: int32[];
            bas: string;
            @projectedName("json", "test")
            bar?: SimpleModel[];
            nonemptyAnomyous: { a: string };
            nonemptyAnomyousArray: { b?: Record<string> }[];
            nonemptyAnomyousDict: Record<{ c: int32[]; }>;
          }
        }
        op read(): Foz;
        `;
        const modelFile = await emitModularModelsFromTypeSpec(tspContent);
        assertEqualContent(
          modelFile?.getFullText()!,
          `
          export interface Foz {
            baz: {
                foo: number[];
                bas: string;
                bar?: SimpleModel[];
                nonemptyAnomyous: { a: string };
                nonemptyAnomyousArray: { b?: Record<string, string> }[];
                nonemptyAnomyousDict: Record<string, { c: number[] }>;
              };
          }
          
          export interface SimpleModel {
            test: string;
          }
        `
        );

        const operationFiles = await emitModularOperationsFromTypeSpec(
          tspContent
        );
        assert.equal(operationFiles?.length, 1);
        verifyReturnType(operationFiles?.[0], "Foz");
        const deserializerBody = operationFiles?.[0]
          ?.getFunction("_readDeserialize")
          ?.getBody()
          ?.getText();
        const expectDeserialize = `{
              baz: {
                foo: result.body.baz["foo"],
                bas: result.body.baz["bas"],
                bar: !result.body.baz["test"] ? result.body.baz["test"] : result.body.baz["test"].map((p) => ({ test: p["test"] })),
                nonemptyAnomyous: { a: result.body.baz.nonemptyAnomyous["a"] },
                nonemptyAnomyousArray: result.body.baz["nonemptyAnomyousArray"].map((p) => ({ b: p["b"] })),
                nonemptyAnomyousDict: result.body.baz["nonemptyAnomyousDict"],
              },
        }`;
        assert.include(
          deserializerBody,
          expectDeserialize,
          `The function body ${deserializerBody} does not contain the text ${expectDeserialize}`
        );
      });
    });
  });
});
