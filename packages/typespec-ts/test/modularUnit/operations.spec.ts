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
  
  describe("binary payload with application/cose", () => {
    it("should handle binary response with application/cose content type without crashing", async () => {
      const tspContent = `
        @doc("Signed statement")
        model SignedStatement {
          @doc("The MIME content type a Cose body is application/cose")
          @header("Content-Type")
          contentType: "application/cose";

          @doc("CoseSign1 signature envelope")
          @bodyRoot
          body: bytes;
        }

        @doc("Response with COSE binary content")
        model CoseResponse {
          @doc("Status code")
          @statusCode
          statusCode: 201;

          @doc("The MIME content type a Cose body is application/cose")
          @header("Content-Type")
          contentType: "application/cose";

          @doc("Receipt body in COSE format")
          @bodyRoot
          body: bytes;
        }

        @post
        op createEntry(...SignedStatement): CoseResponse;
      `;

      // This should not throw an error - previously would crash with "Cannot read properties of undefined (reading 'kind')"
      const result = await emitModularOperationsFromTypeSpec(tspContent);
      assert.ok(result);
      // Verify that operations were generated successfully
      assert.ok(result!.length > 0);
    });
  });
});
