import { assert } from "chai";
import { emitModularOperationsFromTypeSpec } from "../util/emitUtil.js";
import { Diagnostic } from "@typespec/compiler";

describe("operations", () => {
  describe("void parameter/return type", () => {
    it.skip("should throw exception if property type as void", async () => {
      try {
        const tspContent = `
        model Foo {
          param: void;
        }
        op read(...Foo): {};
          `;

        await emitModularOperationsFromTypeSpec(tspContent);
        assert.fail("Should throw diagnostic errors");
      } catch (e: any) {
        assert.equal(e[0]?.code, "@azure-tools/typespec-ts/invalid-schema");
        assert.equal(
          e[0]?.message,
          "Couldn't get schema for type Intrinsic with property param"
        );
        assert.equal(e[0]?.target?.name, "void");
      }
    });
  });
  describe("nullable header", () => {
    it("required nullable header would report diagnostic", async () => {
      try {
        const tspContent = `
        op read( @header nullableRequiredHeader: string | null): OkResponse;
        `;

        await emitModularOperationsFromTypeSpec(tspContent, {
          mustEmptyDiagnostic: true
        });
        assert.fail("Should throw diagnostic warnings");
      } catch (e) {
        const diagnostics = e as Diagnostic[];
        assert.equal(diagnostics.length, 1);
        assert.equal(
          diagnostics[0]?.code,
          "@azure-tools/typespec-ts/nullable-required-header"
        );
        assert.equal(diagnostics[0]?.severity, "warning");
      }
    });
  });

  describe("paging operations", () => {
    it("should generate paging operation with default GET method", async () => {
      const tspContent = `
        model ListTestResult {
          @pageItems
          tests: Test[];
          @nextLink
          next: string;
        }
        
        model Test {
          id: string;
        }
        
        @list
        @route("/list-get")
        @get
        op foo(): ListTestResult;
      `;

      const result = await emitModularOperationsFromTypeSpec(tspContent, {
        needAzureCore: true,
        mustEmptyDiagnostic: false
      });
      assert.ok(result);
      const operationContent =
        result?.map((f) => f.getFullText()).join("\n") ?? "";
      // Should not include nextLinkMethod for GET (which is the default)
      assert.notMatch(operationContent, /nextLinkMethod/);
      // Should include the buildPagedAsyncIterator call
      assert.match(operationContent, /buildPagedAsyncIterator/);
    });
  });
});
