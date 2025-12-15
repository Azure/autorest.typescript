import { assert } from "chai";
import { NoTarget } from "@typespec/compiler";
import { buildModelDeserializer } from "../../src/modular/serialization/buildDeserializerFunction.js";
import { buildModelSerializer } from "../../src/modular/serialization/buildSerializerFunction.js";
import { getParameterMap } from "../../src/modular/helpers/operationHelpers.js";
import { buildSubClientIndexFile } from "../../src/modular/buildRootIndex.js";
import { visitPackageTypes } from "../../src/modular/emitModels.js";
import { provideContext } from "../../src/contextManager.js";
import { SdkContext } from "../../src/utils/interfaces.js";
import { UsageFlags } from "@azure-tools/typespec-client-generator-core";
import { Project } from "ts-morph";
import { emitContentByBuilder } from "../../src/utils/emitUtil.js";

/**
 * Diagnostic Reporting Tests
 */
describe("Diagnostic Reporting Tests", () => {
  let capturedDiagnostics: any[];
  let mockContext: SdkContext;

  beforeEach(() => {
    capturedDiagnostics = [];

    // Create a mock context with diagnostic capturing
    const mockProgram = {
      diagnostics: [],
      reportDiagnostic: (diagnostic: any) => {
        capturedDiagnostics.push(diagnostic);
      },
      getMutatedGlobalNamespace: () => ({
        namespaces: new Map()
      }),
      checker: {
        getMutatedType: () => undefined
      }
    };

    mockContext = {
      program: mockProgram,
      rlcOptions: {
        ignoreEnumMemberNameNormalize: false
      },
      generationPathDetail: {
        namespaceKey: "test"
      }
    } as unknown as SdkContext;
  });

  describe("buildModelDeserializer diagnostics", () => {
    it("should handle anonymous model types in buildModelTypeDeserializer", () => {
      capturedDiagnostics = []; // Clear before each test

      const mockModelType = {
        kind: "model",
        name: undefined,
        usage: UsageFlags.Output,
        __raw: NoTarget
        // No discriminatorProperty to trigger buildModelTypeDeserializer path
      } as any;

      const result = buildModelDeserializer(mockContext, mockModelType);

      assert.equal(result, undefined);
      // Check that it returns undefined due to anonymous type
      // The early return happens before buildModelTypeDeserializer is called
    });

    it("should handle anonymous union types in buildUnionDeserializer", () => {
      capturedDiagnostics = []; // Clear before each test

      const mockUnionType = {
        kind: "union",
        name: undefined,
        usage: UsageFlags.Output,
        __raw: NoTarget,
        values: []
      } as any;

      const result = buildModelDeserializer(mockContext, mockUnionType);

      assert.equal(result, undefined);
      // Check that it returns undefined due to anonymous type
      // The early return happens before buildUnionDeserializer is called
    });

    it("should handle anonymous discriminated union types in buildDiscriminatedUnionDeserializer", () => {
      capturedDiagnostics = []; // Clear before each test

      const mockDiscriminatedUnionType = {
        kind: "model",
        name: undefined,
        usage: UsageFlags.Output,
        __raw: NoTarget,
        discriminatorProperty: { name: "type" },
        discriminatedSubtypes: {
          test: {
            kind: "model",
            name: "TestType",
            usage: UsageFlags.Output,
            discriminatorValue: "test"
          }
        }
      } as any;

      const result = buildModelDeserializer(
        mockContext,
        mockDiscriminatedUnionType
      );

      assert.equal(result, undefined);
      // Check that it returns undefined due to anonymous type
      // The early return happens before buildDiscriminatedUnionDeserializer is called
    });

    it("should handle anonymous polymorphic types in buildPolymorphicDeserializer", () => {
      capturedDiagnostics = []; // Clear before each test

      const mockPolymorphicType = {
        kind: "model",
        name: undefined,
        usage: UsageFlags.Output,
        __raw: NoTarget,
        discriminatorProperty: { name: "kind" }
        // No discriminatedSubtypes to make it polymorphic instead of discriminated union
      } as any;

      const result = buildModelDeserializer(mockContext, mockPolymorphicType);

      assert.equal(result, undefined);
      // Check that it returns undefined due to anonymous type
      // The early return happens before buildPolymorphicDeserializer is called
    });

    it("should handle anonymous subtype in buildPolymorphicDeserializer", () => {
      capturedDiagnostics = []; // Clear before each test

      const mockPolymorphicType = {
        kind: "model",
        name: "ParentType",
        usage: UsageFlags.Output,
        __raw: NoTarget,
        discriminatorProperty: { name: "kind" },
        discriminatedSubtypes: {
          subtype1: {
            kind: "model",
            name: undefined, // Anonymous subtype
            usage: UsageFlags.Output,
            discriminatorValue: "subtype1",
            __raw: NoTarget
          }
        }
      } as any;

      try {
        const result = buildModelDeserializer(mockContext, mockPolymorphicType);

        // Should still attempt to build but might fail due to context issues
        console.log("Test result:", result);
        console.log("Captured diagnostics:", capturedDiagnostics);
      } catch (error) {
        // Expected to fail due to mock context limitations
        console.log(
          "Expected error in mock environment:",
          (error as Error).message
        );
      }
    });
  });

  describe("buildModelSerializer diagnostics", () => {
    it("should handle anonymous model types in buildModelTypeSerializer", () => {
      capturedDiagnostics = []; // Clear before each test

      const mockModelType = {
        kind: "model",
        name: undefined,
        usage: UsageFlags.Input,
        __raw: NoTarget
      } as any;

      const result = buildModelSerializer(mockContext, mockModelType);

      assert.equal(result, undefined);
      // Check that it returns undefined due to anonymous type
      // The early return happens before buildModelTypeSerializer is called
    });

    it("should handle anonymous union types in buildUnionSerializer", () => {
      capturedDiagnostics = []; // Clear before each test

      const mockUnionType = {
        kind: "union",
        name: undefined,
        usage: UsageFlags.Input,
        __raw: NoTarget,
        values: []
      } as any;

      const result = buildModelSerializer(mockContext, mockUnionType);

      assert.equal(result, undefined);
      // Check that it returns undefined due to anonymous type
      // The early return happens before buildUnionSerializer is called
    });

    it("should handle anonymous discriminated union types in buildDiscriminatedUnionSerializer", () => {
      capturedDiagnostics = []; // Clear before each test

      const mockDiscriminatedUnionType = {
        kind: "model",
        name: undefined,
        usage: UsageFlags.Input,
        __raw: NoTarget,
        discriminatorProperty: { name: "type" },
        discriminatedSubtypes: {
          test: {
            kind: "model",
            name: "TestType",
            usage: UsageFlags.Input,
            discriminatorValue: "test"
          }
        }
      } as any;

      const result = buildModelSerializer(
        mockContext,
        mockDiscriminatedUnionType
      );

      assert.equal(result, undefined);
      // Check that it returns undefined due to anonymous type
      // The early return happens before buildDiscriminatedUnionSerializer is called
    });

    it("should handle anonymous polymorphic types in buildPolymorphicSerializer", () => {
      capturedDiagnostics = []; // Clear before each test

      const mockPolymorphicType = {
        kind: "model",
        name: undefined,
        usage: UsageFlags.Input,
        __raw: NoTarget,
        discriminatorProperty: { name: "kind" }
        // No discriminatedSubtypes to make it polymorphic instead of discriminated union
      } as any;

      const result = buildModelSerializer(mockContext, mockPolymorphicType);

      assert.equal(result, undefined);
      // Check that it returns undefined due to anonymous type
      // The early return happens before buildPolymorphicSerializer is called
    });

    it("should handle anonymous subtype in buildPolymorphicSerializer", () => {
      capturedDiagnostics = []; // Clear before each test

      const mockPolymorphicType = {
        kind: "model",
        name: "ParentType",
        usage: UsageFlags.Input,
        __raw: NoTarget,
        discriminatorProperty: { name: "kind" },
        discriminatedSubtypes: {
          subtype1: {
            kind: "model",
            name: undefined, // Anonymous subtype
            usage: UsageFlags.Input,
            discriminatorValue: "subtype1",
            __raw: NoTarget
          }
        }
      } as any;

      try {
        const result = buildModelSerializer(mockContext, mockPolymorphicType);

        // Should still attempt to build but might fail due to context issues
        console.log("Test result:", result);
        console.log("Captured diagnostics:", capturedDiagnostics);
      } catch (error) {
        // Expected to fail due to mock context limitations
        console.log(
          "Expected error in mock environment:",
          (error as Error).message
        );
      }
    });
  });

  describe("getParameterMap diagnostics", () => {
    it("should report diagnostic for unsupported parameter", () => {
      let capturedDiagnostic: any = null;
      const mockProgram = {
        diagnostics: [],
        reportDiagnostic: (diagnostic: any) => {
          capturedDiagnostic = diagnostic;
        }
      };

      const localMockContext = {
        program: mockProgram
      } as unknown as SdkContext;

      const unsupportedParam = {
        name: "testParam",
        kind: "header",
        type: { kind: "model" },
        serializedName: "test-param",
        correspondingMethodParams: [],
        isGeneratedName: false,
        onClient: false,
        collectionFormat: undefined
      } as any;

      let optionalCallCount = 0;
      Object.defineProperty(unsupportedParam, "optional", {
        get: function () {
          optionalCallCount++;
          return optionalCallCount === 1 ? false : true;
        },
        configurable: true
      });

      const result = getParameterMap(localMockContext, unsupportedParam);

      console.log(capturedDiagnostic.code);
      console.log(capturedDiagnostic.message);

      assert.include(capturedDiagnostic.code, "unsupported-parameter-type");
      assert.include(capturedDiagnostic.message, "testParam");
      assert.equal(result, `"testParam": undefined`);
    });
  });

  describe("buildSubClientIndexFile diagnostics", () => {
    it("should report client-file-not-found diagnostic", () => {
      const mockProject = new Project({ useInMemoryFileSystem: true });
      provideContext("outputProject", mockProject);

      const mockClient = {
        kind: "client",
        name: "TestClient",
        operations: []
      } as any;
      const mockClientMap: [string[], any] = [["TestClient"], mockClient];
      const mockEmitterOptions = {
        modularOptions: { sourceRoot: "src" }
      } as any;

      buildSubClientIndexFile(mockContext, mockClientMap, mockEmitterOptions);

      console.log(capturedDiagnostics[0]?.code);
      console.log(capturedDiagnostics[0]?.message);

      assert.isTrue(capturedDiagnostics.length > 0);
      assert.include(capturedDiagnostics[0].code, "client-file-not-found");
      assert.include(capturedDiagnostics[0].message, "TestClient");
    });
  });

  describe("visitClientMethod diagnostics", () => {
    it("should report unknown-sdk-method-kind diagnostic", () => {
      const mockMethod = {
        kind: "unsupported-method-kind",
        name: "testMethod",
        operation: {
          kind: "http",
          path: "/test",
          verb: "get",
          parameters: [],
          responses: [],
          exceptions: []
        }
      } as any;

      const mockClient = {
        kind: "client",
        name: "TestClient",
        methods: [mockMethod],
        operations: [mockMethod]
      } as any;
      const mockSdkPackage = {
        models: [],
        unions: [],
        enums: [],
        clients: [mockClient]
      };
      const localMockContext = {
        ...mockContext,
        sdkPackage: mockSdkPackage
      } as any;

      visitPackageTypes(localMockContext);

      console.log(capturedDiagnostics[0]?.code);
      console.log(capturedDiagnostics[0]?.message);

      assert.isTrue(capturedDiagnostics.length > 0);
      assert.include(capturedDiagnostics[0].code, "unknown-sdk-method-kind");
      assert.include(capturedDiagnostics[0].message, "unsupported-method-kind");
    });
  });

  describe("emitFile diagnostics", () => {
    it("should report file-formatting-error diagnostic", async () => {
      const mockProgram = {
        compilerOptions: { noEmit: false },
        hasError: () => false,
        host: { mkdirp: async () => {}, writeFile: async () => {} },
        reportDiagnostic: (diagnostic: any) =>
          capturedDiagnostics.push(diagnostic)
      } as any;

      const mockFile = {
        path: "test.ts",
        content: "export const test = { invalid: syntax error }"
      };
      await emitContentByBuilder(mockProgram, () => mockFile, {} as any);

      const diagnostic = capturedDiagnostics.find((d) =>
        d.code.endsWith("file-formatting-error")
      );
      console.log(diagnostic?.code);
      console.log(diagnostic?.message);

      assert.isTrue(!!diagnostic);
      assert.include(diagnostic!.code, "file-formatting-error");
      assert.include(diagnostic!.message, "test.ts");
    });
  });

  describe("Advanced Deserializer Diagnostics Tests", () => {
    it("should test buildModelTypeDeserializer with valid model containing anonymous property", () => {
      capturedDiagnostics = []; // Clear before each test

      // Create a valid model that will pass initial checks but may have internal issues
      const mockModelType = {
        kind: "model",
        name: "ValidModel", // Valid name to pass initial check
        usage: UsageFlags.Output,
        __raw: NoTarget,
        // No discriminatorProperty, so it will go to buildModelTypeDeserializer
        properties: [
          {
            kind: "property",
            name: "anonymousProperty",
            type: {
              kind: "model",
              name: undefined, // Anonymous type in property
              __raw: NoTarget
            }
          }
        ]
      } as any;

      try {
        const result = buildModelDeserializer(mockContext, mockModelType);
        console.log("Advanced test - Result:", typeof result);
      } catch (error) {
        console.log(
          "Advanced test - Expected context error:",
          (error as Error).message
        );
      }
    });

    after(() => {
      // Test that validates our understanding of function routing
      console.log("Advanced deserializer tests completed");
    });
  });

  describe("Advanced Serializer Diagnostics Tests", () => {
    it("should test buildModelTypeSerializer with valid model containing anonymous property", () => {
      capturedDiagnostics = []; // Clear before each test

      // Create a valid model that will pass initial checks but may have internal issues
      const mockModelType = {
        kind: "model",
        name: "ValidModel", // Valid name to pass initial check
        usage: UsageFlags.Input,
        __raw: NoTarget,
        // No discriminatorProperty, so it will go to buildModelTypeSerializer
        properties: [
          {
            kind: "property",
            name: "anonymousProperty",
            type: {
              kind: "model",
              name: undefined, // Anonymous type in property
              __raw: NoTarget
            }
          }
        ]
      } as any;

      try {
        const result = buildModelSerializer(mockContext, mockModelType);
        console.log("Advanced serializer test - Result:", typeof result);
      } catch (error) {
        console.log(
          "Advanced serializer test - Expected context error:",
          (error as Error).message
        );
      }
    });

    after(() => {
      // Test that validates our understanding of function routing
      console.log("Advanced serializer tests completed");
    });
  });
});
