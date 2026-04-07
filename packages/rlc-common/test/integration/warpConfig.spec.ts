// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { describe, it, expect } from "vitest";

import { buildWarpConfig } from "../../src/metadata/buildWarpConfig.js";
import { createMockModel } from "./mockHelper.js";

describe("warp.config.yml generation", () => {
  describe("azure monorepo", () => {
    it("should generate a self-contained config with polyfillSuffix", () => {
      const model = createMockModel({
        moduleKind: "esm",
        isMonorepo: true,
        flavor: "azure"
      });

      const result = buildWarpConfig(model);
      expect(result).toBeDefined();
      expect(result!.path).toBe("warp.config.yml");
      // Must NOT extend the base config — warp replaces targets entirely
      // (no per-name merge), so extending would lose our polyfillSuffix
      // unless we redefine every target anyway.
      expect(result!.content).not.toContain("extends:");
      // polyfillSuffix ensures browser polyfill files (e.g.,
      // get-binary-response-browser.mts) are substituted during the warp
      // build. Without this, browser builds include Node.js-specific code
      // (asNodeStream, Buffer from node:buffer) that crashes at runtime.
      expect(result!.content).toContain('polyfillSuffix: "-browser"');
      expect(result!.content).toContain('polyfillSuffix: "-react-native"');
      // All four targets with tsconfig paths
      expect(result!.content).toContain("name: browser");
      expect(result!.content).toContain("name: react-native");
      expect(result!.content).toContain("name: esm");
      expect(result!.content).toContain("name: commonjs");
      expect(result!.content).toContain("tsconfig:");
      // Base exports should be included
      expect(result!.content).toContain('"./package.json"');
      expect(result!.content).toContain('"."');
    });

    it("should include custom exports alongside base exports", () => {
      const model = createMockModel({
        moduleKind: "esm",
        isMonorepo: true,
        flavor: "azure"
      });

      const result = buildWarpConfig(model, {
        exports: {
          ".": "./src/index.ts",
          "./models": "./src/models/index.ts"
        }
      });
      expect(result).toBeDefined();
      expect(result!.content).not.toContain("extends:");
      expect(result!.content).toContain('polyfillSuffix: "-browser"');
      expect(result!.content).toContain('polyfillSuffix: "-react-native"');
      expect(result!.content).toContain("./models");
      expect(result!.content).toContain("./package.json");
      expect(result!.content).toContain("moduleType: commonjs");
    });

    it("should not return config for non-esm module kind", () => {
      const model = createMockModel({
        moduleKind: "cjs",
        isMonorepo: true,
        flavor: "azure"
      });

      const result = buildWarpConfig(model);
      expect(result).toBeUndefined();
    });
  });

  describe("non-monorepo", () => {
    it("should generate a self-contained config with polyfillSuffix", () => {
      const model = createMockModel({
        moduleKind: "esm",
        isMonorepo: false
      });

      const result = buildWarpConfig(model);
      expect(result).toBeDefined();
      expect(result!.path).toBe("warp.config.yml");
      expect(result!.content).not.toContain("extends:");
      expect(result!.content).toContain('polyfillSuffix: "-browser"');
      expect(result!.content).toContain('polyfillSuffix: "-react-native"');
    });

    it("should include all target definitions", () => {
      const model = createMockModel({
        moduleKind: "esm",
        isMonorepo: false
      });

      const result = buildWarpConfig(model);
      expect(result).toBeDefined();
      expect(result!.content).toContain("name: browser");
      expect(result!.content).toContain("name: react-native");
      expect(result!.content).toContain("name: esm");
      expect(result!.content).toContain("name: commonjs");
    });
  });
});
