// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { describe, it, expect } from "vitest";

import { buildWarpConfig } from "../../src/metadata/buildWarpConfig.js";
import { createMockModel } from "./mockHelper.js";

describe("warp.config.yml generation", () => {
  describe("azure monorepo (extends-based config)", () => {
    it("should include polyfillSuffix for browser and react-native targets", () => {
      const model = createMockModel({
        moduleKind: "esm",
        isMonorepo: true,
        flavor: "azure"
      });

      const result = buildWarpConfig(model);
      expect(result).toBeDefined();
      expect(result!.path).toBe("warp.config.yml");
      expect(result!.content).toContain("extends:");
      // The warp config must include polyfillSuffix so that browser polyfill
      // files (e.g., get-binary-response-browser.mts) are substituted during
      // the warp build. Without this, browser builds would include Node.js-
      // specific code (asNodeStream, Buffer from node:buffer) which crashes
      // at runtime in browsers.
      expect(result!.content).toContain('polyfillSuffix: "-browser"');
      expect(result!.content).toContain('polyfillSuffix: "-react-native"');
      // Warp's extends replaces targets entirely (no per-name merge), so all
      // four targets must be present with their tsconfig paths.
      expect(result!.content).toContain("name: browser");
      expect(result!.content).toContain("name: react-native");
      expect(result!.content).toContain("name: esm");
      expect(result!.content).toContain("name: commonjs");
      expect(result!.content).toContain("tsconfig:");
    });

    it("should include polyfillSuffix even with custom exports", () => {
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
      expect(result!.content).toContain("extends:");
      expect(result!.content).toContain('polyfillSuffix: "-browser"');
      expect(result!.content).toContain('polyfillSuffix: "-react-native"');
      // Custom exports should be present but base exports filtered out
      expect(result!.content).toContain("./models");
      // All four targets must still be present (warp replaces, not merges)
      expect(result!.content).toContain("name: browser");
      expect(result!.content).toContain("name: commonjs");
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

  describe("non-monorepo (inline config)", () => {
    it("should include polyfillSuffix for browser and react-native targets", () => {
      const model = createMockModel({
        moduleKind: "esm",
        isMonorepo: false
      });

      const result = buildWarpConfig(model);
      expect(result).toBeDefined();
      expect(result!.path).toBe("warp.config.yml");
      // Inline config template already includes polyfillSuffix
      expect(result!.content).toContain('polyfillSuffix: "-browser"');
      expect(result!.content).toContain('polyfillSuffix: "-react-native"');
    });

    it("should include all target definitions inline", () => {
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
