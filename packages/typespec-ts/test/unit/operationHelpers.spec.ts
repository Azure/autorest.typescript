import { assert } from "chai";
import { getParameterMap } from "../../src/modular/helpers/operationHelpers.js";
import { SdkContext } from "../../src/utils/interfaces.js";

describe("operationHelpers", () => {
  describe("getParameterMap", () => {
    let mockContext: SdkContext;

    beforeEach(() => {
      // Create a mock context with minimal program structure for testing
      const mockProgram = {
        diagnostics: [],
        reportDiagnostic: () => {} // Mock reportDiagnostic function
      };

      mockContext = {
        program: mockProgram
      } as unknown as SdkContext;
    });

    it("should report diagnostic with correct format for unsupported parameter", () => {
      // This test captures the diagnostic information to verify the reportDiagnostic call
      let capturedDiagnostic: any = null;
      const mockProgram = {
        diagnostics: [],
        reportDiagnostic: (diagnostic: any) => {
          capturedDiagnostic = diagnostic;
        }
      };

      mockContext = {
        program: mockProgram
      } as unknown as SdkContext;

      // Create an unsupported parameter
      const unsupportedParam = {
        name: "testParam",
        kind: "header", // Use a different kind to test
        type: {
          kind: "model" // Non-constant type
        },
        serializedName: "test-param",
        correspondingMethodParams: [],
        isGeneratedName: false,
        onClient: false,
        collectionFormat: undefined
      } as any;

      // Make both isOptional and isRequired return false using the same technique
      let optionalCallCount = 0;
      Object.defineProperty(unsupportedParam, "optional", {
        get: function () {
          optionalCallCount++;
          return optionalCallCount === 1 ? false : true;
        },
        configurable: true
      });

      // Call the function
      const result = getParameterMap(mockContext, unsupportedParam);

      console.log(capturedDiagnostic.code);
      console.log(capturedDiagnostic.message);
      // Verify the diagnostic was captured and has the correct format
      assert.isNotNull(
        capturedDiagnostic,
        "Expected diagnostic to be reported"
      );
      assert.isTrue(
        capturedDiagnostic.code.endsWith("unsupported-parameter-type"),
        "Expected diagnostic code to end with 'unsupported-parameter-type'"
      );

      // Verify the message contains the parameter name and kind (format has been applied to message)
      assert.include(
        capturedDiagnostic.message,
        "testParam",
        "Expected message to contain parameter name"
      );
      assert.include(
        capturedDiagnostic.message,
        "header",
        "Expected message to contain parameter kind"
      );
      assert.include(
        capturedDiagnostic.message,
        "is not supported",
        "Expected message to contain error description"
      );

      // Verify the fallback value
      assert.equal(result, `"testParam": undefined`);
    });
  });
});
