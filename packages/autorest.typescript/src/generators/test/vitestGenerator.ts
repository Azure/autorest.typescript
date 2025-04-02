import { Project } from "ts-morph";
import { getAutorestOptions } from "../../autorestSession";

const nodeConfig = `
import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "../../../vitest.shared.config.ts";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      testTimeout: 1200000,
      hookTimeout: 1200000,
    },
  }),
);`;

const browserConfig = `
import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "../../../vitest.browser.shared.config.ts";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      include: ["dist-test/browser/test/**/*.spec.js"],
      testTimeout: 1200000,
      hookTimeout: 1200000,
    },
  }),
);`;

const esmConfig = `
import { mergeConfig } from "vitest/config";
import vitestConfig from "./vitest.config.ts";
import vitestEsmConfig from "../../../vitest.esm.shared.config.ts";

export default mergeConfig(vitestConfig, vitestEsmConfig);`;

export function generateVitestConfig(
  project: Project,
  platform: "browser" | "node" | "esm"
) {
  const { generateTest, generateMetadata, azureSdkForJs } = getAutorestOptions();
  if (
    azureSdkForJs === false ||
    generateMetadata === false ||
    generateTest === false
  ) {
    return;
  }
  switch (platform) {
    case "browser":
      project.createSourceFile("vitest.browser.config.ts", browserConfig, {
        overwrite: true
      });
    case "node":
      project.createSourceFile("vitest.config.ts", nodeConfig, {
        overwrite: true
      });
    case "esm":
      project.createSourceFile("vitest.esm.config.ts", esmConfig, {
        overwrite: true
      });
  }
}