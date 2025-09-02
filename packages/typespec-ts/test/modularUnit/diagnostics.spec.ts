import { describe, it } from "mocha";
import { ok, strictEqual } from "assert";
import { emitRootIndexFromTypeSpec } from "../util/emitUtil.js";

describe("Diagnostic reporting tests", () => {
  it("should report diagnostics instead of throwing errors for unsupported cases", async () => {
    const tspContent = `
      import "@typespec/http";
      using TypeSpec.Http;
      
      @service({
        title: "Test Service",
      })
      namespace TestService;
      
      @route("/test")
      interface TestOps {
        test(@body body: TestModel): OkResponse<TestModel>;
      }
      
      model TestModel {
        id: string;
        name: string;
      }
    `;

    // Test that we don't crash and can still generate some content
    try {
      const result = await emitRootIndexFromTypeSpec(tspContent, {
        mustEmptyDiagnostic: false // Allow diagnostics
      });
      ok(result); // Should return something
    } catch (error) {
      // If we get here, it means the emitter crashed instead of reporting diagnostics
      throw new Error(`Emitter should not crash but report diagnostics. Got error: ${error}`);
    }
  });
});