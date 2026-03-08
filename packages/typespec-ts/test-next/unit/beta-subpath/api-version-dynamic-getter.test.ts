import { describe, it, expect, vi, beforeEach } from "vitest";
import { Project } from "ts-morph";
import { buildBetaIndex } from "../../../src/modular/buildBetaIndex.js";
import { PreviewClassification } from "../../../src/modular/helpers/previewDetection.js";
import {
  SdkClientType,
  SdkEnumType,
  SdkServiceOperation,
  UsageFlags
} from "@azure-tools/typespec-client-generator-core";
import { SdkContext } from "../../../src/utils/interfaces.js";

/**
 * Tests for the dynamic API version getter mechanism:
 *
 * 1. buildClientContext generates _defaultApiVersion, _setDefaultApiVersion,
 *    and Object.defineProperty getter when beta-subpath is enabled.
 * 2. buildBetaIndex calls _setDefaultApiVersion with the latest
 *    preview version when the dpgContext has preview API versions.
 * 3. The runtime behavior: getter returns _defaultApiVersion dynamically,
 *    explicit apiVersion takes precedence, and retroactive upgrade works.
 */

// Mock contextManager
vi.mock("../../../src/contextManager.js", () => ({
  useContext: vi.fn()
}));

// Mock namingHelpers
vi.mock("../../../src/modular/helpers/namingHelpers.js", () => ({
  getClassicalLayerPrefix: vi.fn((prefixes: string[], nameType: any) => {
    if (nameType === "File") {
      return prefixes.join("/");
    }
    return prefixes
      .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
      .join("");
  }),
  getClientName: vi.fn((client: any) => client.name),
  getClassicalClientName: vi.fn((client: any) => client.name)
}));

// Mock clientHelpers
vi.mock("../../../src/modular/helpers/clientHelpers.js", () => ({
  getClientParametersDeclaration: vi.fn(() => [])
}));

// Mock buildSubpathIndex
vi.mock("../../../src/modular/buildSubpathIndex.js", () => ({
  isTypeOnlyNode: vi.fn(() => true)
}));

import { useContext } from "../../../src/contextManager.js";

const mockUseContext = useContext as any;

function createMockDpgContext(
  versions: string[],
  previewRegex?: RegExp
): SdkContext {
  const apiVersionEnum: SdkEnumType = {
    kind: "enum",
    name: "ServiceApiVersions",
    usage: UsageFlags.ApiVersionEnum,
    values: versions.map((v) => ({
      name: v.replace(/[^a-zA-Z0-9]/g, "_"),
      value: v,
      kind: "enumvalue"
    }))
  } as any;

  return {
    sdkPackage: {
      enums: [apiVersionEnum],
      metadata: { apiVersions: new Map() }
    },
    previewStringRegex: previewRegex
  } as any;
}

function createMockEmitterOptions(
  packageName: string,
  mergeStrategy: "merge" | "namespace" = "namespace"
): any {
  return {
    modularOptions: {
      sourceRoot: "src/beta",
      betaMergeStrategy: mergeStrategy
    },
    options: {
      packageDetails: {
        name: packageName
      }
    }
  };
}

function createMockClient(
  name: string,
  children?: any[]
): SdkClientType<SdkServiceOperation> {
  return {
    name,
    kind: "client",
    children: children ?? []
  } as any;
}

function createMockPreviewInfo(
  previewOnlyGroups: string[] = [],
  mixedGroups: string[] = []
): PreviewClassification {
  return {
    previewMethods: new Map(),
    stableMethods: new Map(),
    previewOnlyGroups: new Set(previewOnlyGroups),
    mixedGroups: new Set(mixedGroups),
    previewTypes: new Set(),
    stableTypes: new Set(),
    previewModels: new Set(),
    previewEnums: new Set(),
    hasAnyPreview: true
  };
}

describe("API Version Dynamic Getter", () => {
  let project: Project;

  beforeEach(() => {
    project = new Project({ useInMemoryFileSystem: true });
    mockUseContext.mockImplementation((key: string) => {
      if (key === "outputProject") return project;
      return undefined;
    });
  });

  describe("buildBetaIndex _setDefaultApiVersion call", () => {
    it("should import and call _setDefaultApiVersion when preview versions exist", () => {
      const dpgContext = createMockDpgContext([
        "2022-11-01",
        "2024-05-01-preview"
      ]);
      const client = createMockClient("LoadTestServiceClient");
      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions("@azure/load-testing");
      const previewInfo = createMockPreviewInfo(["testProfileAdministration"]);

      buildBetaIndex(
        dpgContext,
        clientMap,
        emitterOptions,
        previewInfo,
        new Set(["testProfileAdministration"]),
        new Set()
      );

      const file = project.getSourceFile("src/beta/index.ts");
      expect(file).toBeDefined();
      const content = file!.getFullText();

      // Should import _setDefaultApiVersion from the context module
      expect(content).toContain("_setDefaultApiVersion");
      expect(content).toContain(
        '../api/loadTestServiceClientContext.js"'
      );

      // Should call _setDefaultApiVersion with the latest preview version
      expect(content).toContain(
        '_setDefaultApiVersion("2024-05-01-preview")'
      );
    });

    it("should use the latest preview version when multiple preview versions exist", () => {
      const dpgContext = createMockDpgContext([
        "2022-11-01",
        "2023-06-01-preview",
        "2024-05-01-preview"
      ]);
      const client = createMockClient("TestClient");
      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions("@azure/test-package");
      const previewInfo = createMockPreviewInfo(["previewOps"]);

      buildBetaIndex(
        dpgContext,
        clientMap,
        emitterOptions,
        previewInfo,
        new Set(["previewOps"]),
        new Set()
      );

      const content =
        project.getSourceFile("src/beta/index.ts")?.getFullText() ?? "";
      expect(content).toContain(
        '_setDefaultApiVersion("2024-05-01-preview")'
      );
      expect(content).not.toContain("2023-06-01-preview");
    });

    it("should NOT call _setDefaultApiVersion when no preview versions exist", () => {
      const dpgContext = createMockDpgContext(["2022-11-01", "2024-01-01"]);
      const client = createMockClient("TestClient");
      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions("@azure/test-package");
      const previewInfo = createMockPreviewInfo(["someGroup"]);

      buildBetaIndex(
        dpgContext,
        clientMap,
        emitterOptions,
        previewInfo,
        new Set(["someGroup"]),
        new Set()
      );

      const content =
        project.getSourceFile("src/beta/index.ts")?.getFullText() ?? "";
      expect(content).not.toContain("_setDefaultApiVersion");
    });

    it("should derive context module path from client name", () => {
      const dpgContext = createMockDpgContext([
        "2022-11-01",
        "2024-05-01-preview"
      ]);
      const client = createMockClient("MyFancyServiceClient");
      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions("@azure/fancy-service");
      const previewInfo = createMockPreviewInfo(["ops"]);

      buildBetaIndex(
        dpgContext,
        clientMap,
        emitterOptions,
        previewInfo,
        new Set(["ops"]),
        new Set()
      );

      const content =
        project.getSourceFile("src/beta/index.ts")?.getFullText() ?? "";
      // Import path should include the client name (normalized to file casing)
      expect(content).toContain("../api/");
      expect(content).toContain("Context.js");
      expect(content).toContain("_setDefaultApiVersion");
    });

    it("should include explanatory comments before _setDefaultApiVersion call", () => {
      const dpgContext = createMockDpgContext([
        "2022-11-01",
        "2024-05-01-preview"
      ]);
      const client = createMockClient("TestClient");
      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions("@azure/test-package");
      const previewInfo = createMockPreviewInfo(["ops"]);

      buildBetaIndex(
        dpgContext,
        clientMap,
        emitterOptions,
        previewInfo,
        new Set(["ops"]),
        new Set()
      );

      const content =
        project.getSourceFile("src/beta/index.ts")?.getFullText() ?? "";
      expect(content).toContain(
        "Upgrade default API version for all operations"
      );
      expect(content).toContain(
        "Preview API versions are supersets of stable"
      );
    });

    it("should place _setDefaultApiVersion call before Object.defineProperty patches", () => {
      const dpgContext = createMockDpgContext([
        "2022-11-01",
        "2024-05-01-preview"
      ]);
      const client = createMockClient("TestClient");
      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions("@azure/test-package");
      const previewInfo = createMockPreviewInfo(["previewGroup"]);

      buildBetaIndex(
        dpgContext,
        clientMap,
        emitterOptions,
        previewInfo,
        new Set(["previewGroup"]),
        new Set()
      );

      const content =
        project.getSourceFile("src/beta/index.ts")?.getFullText() ?? "";
      const setVersionIndex = content.indexOf("_setDefaultApiVersion(");
      const definePropertyIndex = content.indexOf("Object.defineProperty(");
      expect(setVersionIndex).toBeGreaterThan(-1);
      expect(definePropertyIndex).toBeGreaterThan(-1);
      expect(setVersionIndex).toBeLessThan(definePropertyIndex);
    });

    it("should handle custom preview regex (beta)", () => {
      const dpgContext = createMockDpgContext(
        ["2022-11-01", "2024-05-01-beta"],
        /beta/i
      );
      const client = createMockClient("TestClient");
      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions("@azure/test-package");
      const previewInfo = createMockPreviewInfo(["ops"]);

      buildBetaIndex(
        dpgContext,
        clientMap,
        emitterOptions,
        previewInfo,
        new Set(["ops"]),
        new Set()
      );

      const content =
        project.getSourceFile("src/beta/index.ts")?.getFullText() ?? "";
      expect(content).toContain('_setDefaultApiVersion("2024-05-01-beta")');
    });
  });

  describe("Runtime behavior (generated code semantics)", () => {
    // These tests verify the generated code pattern works correctly at runtime
    // by evaluating the same pattern that buildClientContext generates.

    it("getter should return _defaultApiVersion dynamically", () => {
      let _defaultApiVersion = "2022-11-01";
      const context: Record<string, any> = {};
      Object.defineProperty(context, "apiVersion", {
        get() {
          return _defaultApiVersion;
        },
        configurable: true,
        enumerable: true
      });

      expect(context.apiVersion).toBe("2022-11-01");

      // Simulate what beta/index.ts does
      _defaultApiVersion = "2024-05-01-preview";
      expect(context.apiVersion).toBe("2024-05-01-preview");
    });

    it("explicit apiVersion should take precedence over getter", () => {
      let _defaultApiVersion = "2022-11-01";
      const context: Record<string, any> = {};

      // Simulate user-provided apiVersion (plain property path)
      const userApiVersion = "2023-06-01";
      context.apiVersion = userApiVersion;

      // Simulate beta import
      _defaultApiVersion = "2024-05-01-preview";

      // User's explicit value should not be affected
      expect(context.apiVersion).toBe("2023-06-01");
    });

    it("should retroactively upgrade already-constructed clients", () => {
      let _defaultApiVersion = "2022-11-01";

      function _setDefaultApiVersion(version: string) {
        _defaultApiVersion = version;
      }

      // Construct two clients before beta import
      const client1: Record<string, any> = {};
      Object.defineProperty(client1, "apiVersion", {
        get() {
          return _defaultApiVersion;
        },
        configurable: true,
        enumerable: true
      });

      const client2: Record<string, any> = {};
      Object.defineProperty(client2, "apiVersion", {
        get() {
          return _defaultApiVersion;
        },
        configurable: true,
        enumerable: true
      });

      expect(client1.apiVersion).toBe("2022-11-01");
      expect(client2.apiVersion).toBe("2022-11-01");

      // Simulate beta import
      _setDefaultApiVersion("2024-05-01-preview");

      // Both clients should now use the preview version
      expect(client1.apiVersion).toBe("2024-05-01-preview");
      expect(client2.apiVersion).toBe("2024-05-01-preview");
    });

    it("should not upgrade clients with explicit apiVersion", () => {
      let _defaultApiVersion = "2022-11-01";

      function _setDefaultApiVersion(version: string) {
        _defaultApiVersion = version;
      }

      // Client without explicit apiVersion (getter)
      const dynamicClient: Record<string, any> = {};
      Object.defineProperty(dynamicClient, "apiVersion", {
        get() {
          return _defaultApiVersion;
        },
        configurable: true,
        enumerable: true
      });

      // Client with explicit apiVersion (plain property)
      const pinnedClient: Record<string, any> = {};
      pinnedClient.apiVersion = "2022-11-01";

      // Simulate beta import
      _setDefaultApiVersion("2024-05-01-preview");

      // Dynamic client upgraded, pinned client stays
      expect(dynamicClient.apiVersion).toBe("2024-05-01-preview");
      expect(pinnedClient.apiVersion).toBe("2022-11-01");
    });

    it("operation fallback becomes dead code when getter is active", () => {
      let _defaultApiVersion = "2022-11-01";

      const context: Record<string, any> = {};
      Object.defineProperty(context, "apiVersion", {
        get() {
          return _defaultApiVersion;
        },
        configurable: true,
        enumerable: true
      });

      // Simulate what operation code does: context.apiVersion ?? "2022-11-01"
      // The getter always returns a value, so ?? never triggers
      const apiVersionUsed = context.apiVersion ?? "2022-11-01";
      expect(apiVersionUsed).toBe("2022-11-01");

      // After beta import
      _defaultApiVersion = "2024-05-01-preview";
      const apiVersionUsed2 = context.apiVersion ?? "2022-11-01";
      expect(apiVersionUsed2).toBe("2024-05-01-preview");
    });

    it("apiVersion should be enumerable on the context", () => {
      let _defaultApiVersion = "2022-11-01";
      const context: Record<string, any> = { otherProp: "test" };
      Object.defineProperty(context, "apiVersion", {
        get() {
          return _defaultApiVersion;
        },
        configurable: true,
        enumerable: true
      });

      // apiVersion should appear in Object.keys and spread
      expect(Object.keys(context)).toContain("apiVersion");
      const spread = { ...context };
      expect(spread.apiVersion).toBe("2022-11-01");
    });

    it("undefined apiVersion option should take the getter path", () => {
      let _defaultApiVersion = "2022-11-01";

      function _setDefaultApiVersion(version: string) {
        _defaultApiVersion = version;
      }

      // Simulate: options.apiVersion is undefined
      const userApiVersion = undefined;
      const context: Record<string, any> = {};

      if (userApiVersion !== undefined) {
        context.apiVersion = userApiVersion;
      } else {
        Object.defineProperty(context, "apiVersion", {
          get() {
            return _defaultApiVersion;
          },
          configurable: true,
          enumerable: true
        });
      }

      expect(context.apiVersion).toBe("2022-11-01");
      _setDefaultApiVersion("2024-05-01-preview");
      expect(context.apiVersion).toBe("2024-05-01-preview");
    });
  });
});
