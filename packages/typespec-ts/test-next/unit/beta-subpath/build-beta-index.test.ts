import { describe, it, expect, vi, beforeEach } from "vitest";
import { Project } from "ts-morph";
import { buildBetaIndex } from "../../../src/modular/buildBetaIndex.js";
import { PreviewClassification } from "../../../src/modular/helpers/previewDetection.js";
import {
  SdkClientType,
  SdkServiceOperation,
  InitializedByFlags
} from "@azure-tools/typespec-client-generator-core";
import { SdkContext } from "../../../src/utils/interfaces.js";

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
    return prefixes.map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join("");
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

function createMockEmitterOptions(packageName: string, mergeStrategy: "merge" | "namespace" = "namespace"): any {
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

function createMockClient(name: string, children?: any[]): SdkClientType<SdkServiceOperation> {
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

describe("Build Beta Index", () => {
  let project: Project;

  beforeEach(() => {
    project = new Project({ useInMemoryFileSystem: true });
    
    // Create mock source files for type re-exports
    project.createSourceFile("src/beta/classic/index.ts", "export type Foo = string;");
    project.createSourceFile("src/beta/api/index.ts", "export type Bar = number;");
    project.createSourceFile("src/beta/models/index.ts", "export type Baz = boolean;");
    
    mockUseContext.mockReturnValue(project);
  });

  describe("buildBetaIndex structure", () => {
    it("should create index.ts with augmentation side-effect import", () => {
      const dpgContext = { sdkPackage: { enums: [], metadata: { apiVersions: new Map() } } } as unknown as SdkContext;
      const client = createMockClient("TestClient");
      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions("@azure/test-package");
      const previewInfo = createMockPreviewInfo(["operations"]);
      const previewOnlyTopLevel = new Set(["operations"]);

      buildBetaIndex(
        dpgContext,
        clientMap,
        emitterOptions,
        previewInfo,
        previewOnlyTopLevel,
        new Set()
      );

      const file = project.getSourceFile("src/beta/index.ts");
      expect(file).toBeDefined();

      const content = file?.getFullText() ?? "";
      expect(content).toContain('import "./augmentations.js"');
    });

    it("should import client from main package", () => {
      const dpgContext = { sdkPackage: { enums: [], metadata: { apiVersions: new Map() } } } as unknown as SdkContext;
      const client = createMockClient("TestClient");
      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions("@azure/test-package");
      const previewInfo = createMockPreviewInfo(["operations"]);
      const previewOnlyTopLevel = new Set(["operations"]);

      buildBetaIndex(
        dpgContext,
        clientMap,
        emitterOptions,
        previewInfo,
        previewOnlyTopLevel,
        new Set()
      );

      const file = project.getSourceFile("src/beta/index.ts");
      const content = file?.getFullText() ?? "";

      expect(content).toContain('"../index.js"');
      expect(content).toContain('TestClient');
    });

    it("should import operation factories from classic layer", () => {
      const dpgContext = { sdkPackage: { enums: [], metadata: { apiVersions: new Map() } } } as unknown as SdkContext;
      const client = createMockClient("TestClient");
      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions("@azure/test-package");
      const previewInfo = createMockPreviewInfo(["operations"]);
      const previewOnlyTopLevel = new Set(["operations"]);

      buildBetaIndex(
        dpgContext,
        clientMap,
        emitterOptions,
        previewInfo,
        previewOnlyTopLevel,
        new Set()
      );

      const file = project.getSourceFile("src/beta/index.ts");
      const content = file?.getFullText() ?? "";

      // Capitalized due to mock implementation
      expect(content).toContain("./classic/Operations/index.js");
      expect(content).toContain("_getOperationsOperations");
    });

    it("should generate Object.defineProperty for preview-only top-level groups", () => {
      const dpgContext = { sdkPackage: { enums: [], metadata: { apiVersions: new Map() } } } as unknown as SdkContext;
      const client = createMockClient("TestClient");
      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions("@azure/test-package");
      const previewInfo = createMockPreviewInfo(["operations"]);
      const previewOnlyTopLevel = new Set(["operations"]);

      buildBetaIndex(
        dpgContext,
        clientMap,
        emitterOptions,
        previewInfo,
        previewOnlyTopLevel,
        new Set()
      );

      const file = project.getSourceFile("src/beta/index.ts");
      const content = file?.getFullText() ?? "";

      expect(content).toContain("Object.defineProperty");
      expect(content).toContain("TestClient.prototype");
      expect(content).toContain("operations");
    });

    it("should use Symbol.for for lazy initialization", () => {
      const dpgContext = { sdkPackage: { enums: [], metadata: { apiVersions: new Map() } } } as unknown as SdkContext;
      const client = createMockClient("TestClient");
      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions("@azure/test-package");
      const previewInfo = createMockPreviewInfo(["operations"]);
      const previewOnlyTopLevel = new Set(["operations"]);

      buildBetaIndex(
        dpgContext,
        clientMap,
        emitterOptions,
        previewInfo,
        previewOnlyTopLevel,
        new Set()
      );

      const file = project.getSourceFile("src/beta/index.ts");
      const content = file?.getFullText() ?? "";

      expect(content).toContain("Symbol.for");
      expect(content).toContain('"__beta"');
      expect(content).toContain("_getOperationsOperations");
    });

    it("should include mixed groups in single beta getter (namespace strategy)", () => {
      const dpgContext = { sdkPackage: { enums: [], metadata: { apiVersions: new Map() } } } as unknown as SdkContext;
      const client = createMockClient("TestClient");
      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions("@azure/test-package", "namespace");
      const previewInfo = createMockPreviewInfo([], ["mixedGroup"]);

      buildBetaIndex(
        dpgContext,
        clientMap,
        emitterOptions,
        previewInfo,
        new Set(),
        new Set()
      );

      const file = project.getSourceFile("src/beta/index.ts");
      const content = file?.getFullText() ?? "";

      // Namespace strategy: mixed groups go inside single beta getter
      expect(content).toContain('"beta"');
      expect(content).toContain("_getMixedGroupOperations");
      expect(content).not.toContain("set(this: TestClient, value)");
    });

    it("should generate setter-based patches for mixed groups with merge strategy", () => {
      const dpgContext = { sdkPackage: { enums: [], metadata: { apiVersions: new Map() } } } as unknown as SdkContext;
      const client = createMockClient("TestClient");
      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions("@azure/test-package", "merge");
      const previewInfo = createMockPreviewInfo([], ["mixedGroup"]);

      buildBetaIndex(
        dpgContext,
        clientMap,
        emitterOptions,
        previewInfo,
        new Set(),
        new Set()
      );

      const file = project.getSourceFile("src/beta/index.ts");
      const content = file?.getFullText() ?? "";

      expect(content).toContain("set(this: TestClient, value)");
      expect(content).toContain("Object.assign");
    });

    it("should handle nested preview-only groups", () => {
      const dpgContext = { sdkPackage: { enums: [], metadata: { apiVersions: new Map() } } } as unknown as SdkContext;
      const client = createMockClient("TestClient");
      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions("@azure/test-package");
      const previewInfo = createMockPreviewInfo();
      const previewOnlyNested = new Set(["parent/child"]);

      buildBetaIndex(
        dpgContext,
        clientMap,
        emitterOptions,
        previewInfo,
        new Set(),
        previewOnlyNested
      );

      const file = project.getSourceFile("src/beta/index.ts");
      const content = file?.getFullText() ?? "";

      // Capitalized due to mock implementation
      expect(content).toContain("./classic/ParentChild/index.js");
      expect(content).toContain("_getParentChildOperations");
    });

    it("should generate child client prototype methods", () => {
      const dpgContext = { sdkPackage: { enums: [], metadata: { apiVersions: new Map() } } } as unknown as SdkContext;
      const childClient = {
        name: "ChildClient",
        kind: "client",
        clientInitialization: {
          initializedBy: InitializedByFlags.Parent
        }
      } as any;
      const client = createMockClient("ParentClient", [childClient]);
      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions("@azure/test-package");
      const previewInfo = createMockPreviewInfo();
      const previewChildClients = new Set(["ChildClient"]);

      buildBetaIndex(
        dpgContext,
        clientMap,
        emitterOptions,
        previewInfo,
        new Set(),
        new Set(),
        previewChildClients
      );

      const file = project.getSourceFile("src/beta/index.ts");
      const content = file?.getFullText() ?? "";

      // Namespace strategy: child client methods are inside beta getter
      expect(content).toContain("getChildClient");
      expect(content).toContain("new ChildClient");
      expect(content).toContain('"beta"');
      expect(content).not.toContain("ParentClient.prototype.getChildClient");
    });

    it("should export type-only declarations from classic/api/models indexes", () => {
      const dpgContext = { sdkPackage: { enums: [], metadata: { apiVersions: new Map() } } } as unknown as SdkContext;
      const client = createMockClient("TestClient");
      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions("@azure/test-package");
      const previewInfo = createMockPreviewInfo(["operations"]);
      const previewOnlyTopLevel = new Set(["operations"]);

      buildBetaIndex(
        dpgContext,
        clientMap,
        emitterOptions,
        previewInfo,
        previewOnlyTopLevel,
        new Set()
      );

      const file = project.getSourceFile("src/beta/index.ts");
      const content = file?.getFullText() ?? "";

      expect(content).toContain("export type");
      expect(content).toContain("./classic/index.js");
      expect(content).toContain("./api/index.js");
      expect(content).toContain("./models/index.js");
    });

    it("should handle multiple preview-only groups", () => {
      const dpgContext = { sdkPackage: { enums: [], metadata: { apiVersions: new Map() } } } as unknown as SdkContext;
      const client = createMockClient("TestClient");
      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions("@azure/test-package");
      const previewInfo = createMockPreviewInfo([
        "operations",
        "admin",
        "diagnostics"
      ]);
      const previewOnlyTopLevel = new Set([
        "operations",
        "admin",
        "diagnostics"
      ]);

      buildBetaIndex(
        dpgContext,
        clientMap,
        emitterOptions,
        previewInfo,
        previewOnlyTopLevel,
        new Set()
      );

      const file = project.getSourceFile("src/beta/index.ts");
      const content = file?.getFullText() ?? "";

      // Namespace strategy: single "beta" getter containing all groups
      const definePropertyCount = (content.match(/Object\.defineProperty/g) || []).length;
      expect(definePropertyCount).toBe(1);
      expect(content).toContain("_getOperationsOperations");
      expect(content).toContain("_getAdminOperations");
      expect(content).toContain("_getDiagnosticsOperations");
    });

    it("should not generate setter for top-level preview-only groups", () => {
      const dpgContext = { sdkPackage: { enums: [], metadata: { apiVersions: new Map() } } } as unknown as SdkContext;
      const client = createMockClient("TestClient");
      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions("@azure/test-package");
      const previewInfo = createMockPreviewInfo(["operations"]);
      const previewOnlyTopLevel = new Set(["operations"]);

      buildBetaIndex(
        dpgContext,
        clientMap,
        emitterOptions,
        previewInfo,
        previewOnlyTopLevel,
        new Set()
      );

      const file = project.getSourceFile("src/beta/index.ts");
      const content = file?.getFullText() ?? "";

      // Preview-only groups should have getter only, no setter
      const operationsBlock = content.match(
        /Object\.defineProperty\(TestClient\.prototype, "operations"[\s\S]*?\}\);/
      );
      expect(operationsBlock).toBeDefined();
      
      if (operationsBlock) {
        // Should have get
        expect(operationsBlock[0]).toContain("get(this: TestClient)");
        // Should NOT have set
        expect(operationsBlock[0]).not.toContain("set(this: TestClient");
      }
    });

    it("should handle mixed top-level groups with nested children", () => {
      const dpgContext = { sdkPackage: { enums: [], metadata: { apiVersions: new Map() } } } as unknown as SdkContext;
      const client = createMockClient("TestClient");
      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions("@azure/test-package");
      const previewInfo = createMockPreviewInfo([], ["mixedGroup"]);
      const previewOnlyNested = new Set(["mixedGroup/nested"]);

      buildBetaIndex(
        dpgContext,
        clientMap,
        emitterOptions,
        previewInfo,
        new Set(),
        previewOnlyNested
      );

      const file = project.getSourceFile("src/beta/index.ts");
      const content = file?.getFullText() ?? "";

      // Namespace strategy: nested groups are inside single beta getter
      expect(content).toContain('"beta"');
      expect(content).toContain("_getMixedGroupNestedOperations");
      expect(content).not.toContain("set(this: TestClient, value)");
    });

    it("should skip child clients not initialized by parent", () => {
      const dpgContext = { sdkPackage: { enums: [], metadata: { apiVersions: new Map() } } } as unknown as SdkContext;
      const childClient = {
        name: "ChildClient",
        kind: "client",
        clientInitialization: {
          initializedBy: InitializedByFlags.Individually
        }
      } as any;
      const client = createMockClient("ParentClient", [childClient]);
      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions("@azure/test-package");
      const previewInfo = createMockPreviewInfo();
      const previewChildClients = new Set(["ChildClient"]);

      buildBetaIndex(
        dpgContext,
        clientMap,
        emitterOptions,
        previewInfo,
        new Set(),
        new Set(),
        previewChildClients
      );

      const file = project.getSourceFile("src/beta/index.ts");
      const content = file?.getFullText() ?? "";

      expect(content).not.toContain("getChildClient");
    });

    it("should handle empty package name gracefully", () => {
      const dpgContext = { sdkPackage: { enums: [], metadata: { apiVersions: new Map() } } } as unknown as SdkContext;
      const client = createMockClient("TestClient");
      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = {
        modularOptions: { sourceRoot: "src/beta" },
        options: { packageDetails: { name: "" } }
      };
      const previewInfo = createMockPreviewInfo(["operations"]);
      const previewOnlyTopLevel = new Set(["operations"]);

      buildBetaIndex(
        dpgContext,
        clientMap,
        emitterOptions as any,
        previewInfo,
        previewOnlyTopLevel,
        new Set()
      );

      const file = project.getSourceFile("src/beta/index.ts");
      
      // Should still create the file but may have issues with imports
      expect(file).toBeDefined();
    });

    it("should group operation imports by module", () => {
      const dpgContext = { sdkPackage: { enums: [], metadata: { apiVersions: new Map() } } } as unknown as SdkContext;
      const client = createMockClient("TestClient");
      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions("@azure/test-package");
      const previewInfo = createMockPreviewInfo(
        ["operations", "admin"],
        []
      );
      const previewOnlyTopLevel = new Set(["operations", "admin"]);

      buildBetaIndex(
        dpgContext,
        clientMap,
        emitterOptions,
        previewInfo,
        previewOnlyTopLevel,
        new Set()
      );

      const file = project.getSourceFile("src/beta/index.ts");
      const content = file?.getFullText() ?? "";

      // Should have separate imports for different modules (capitalized due to mock)
      expect(content).toContain("./classic/Operations/index.js");
      expect(content).toContain("./classic/Admin/index.js");
    });

    it("should handle deeply nested groups", () => {
      const dpgContext = { sdkPackage: { enums: [], metadata: { apiVersions: new Map() } } } as unknown as SdkContext;
      const client = createMockClient("TestClient");
      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions("@azure/test-package");
      const previewInfo = createMockPreviewInfo();
      const previewOnlyNested = new Set(["parent/child/grandchild"]);

      buildBetaIndex(
        dpgContext,
        clientMap,
        emitterOptions,
        previewInfo,
        new Set(),
        previewOnlyNested
      );

      const file = project.getSourceFile("src/beta/index.ts");
      const content = file?.getFullText() ?? "";

      // Capitalized due to mock implementation
      expect(content).toContain("./classic/ParentChildGrandchild/index.js");
      expect(content).toContain("_getParentChildGrandchildOperations");
      // Namespace strategy: nested in beta object, no setter patching
      expect(content).toContain('"beta"');
    });

    it("should mark properties as enumerable and configurable", () => {
      const dpgContext = { sdkPackage: { enums: [], metadata: { apiVersions: new Map() } } } as unknown as SdkContext;
      const client = createMockClient("TestClient");
      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions("@azure/test-package");
      const previewInfo = createMockPreviewInfo(["operations"]);
      const previewOnlyTopLevel = new Set(["operations"]);

      buildBetaIndex(
        dpgContext,
        clientMap,
        emitterOptions,
        previewInfo,
        previewOnlyTopLevel,
        new Set()
      );

      const file = project.getSourceFile("src/beta/index.ts");
      const content = file?.getFullText() ?? "";

      expect(content).toContain("enumerable: true");
      expect(content).toContain("configurable: true");
    });

    it("should handle empty preview groups gracefully", () => {
      const dpgContext = { sdkPackage: { enums: [], metadata: { apiVersions: new Map() } } } as unknown as SdkContext;
      const client = createMockClient("TestClient");
      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions("@azure/test-package");
      const previewInfo = createMockPreviewInfo();

      buildBetaIndex(
        dpgContext,
        clientMap,
        emitterOptions,
        previewInfo,
        new Set(),
        new Set()
      );

      const file = project.getSourceFile("src/beta/index.ts");
      
      // Should still create file with augmentation import and type exports
      expect(file).toBeDefined();
      const content = file?.getFullText() ?? "";
      expect(content).toContain('import "./augmentations.js"');
    });
  });
});
