import { Project } from "ts-morph";
import { getAutorestOptions } from "../../autorestSession";

const nodeConfig = `
import viteConfig from "../../../vitest.shared.config.ts";

export default viteConfig;`;

const browserConfig = `
import viteConfig from "../../../vitest.browser.shared.config.ts";

export default viteConfig;`;

export function generateVitestConfig(
  project: Project,
  platform: "browser" | "node"
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
      break;
    case "node":
      project.createSourceFile("vitest.config.ts", nodeConfig, {
        overwrite: true
      });
      break;
  }
}