import { Project } from "ts-morph";
import { getAutorestOptions } from "../../autorestSession";

export function generateEnvBrowserFile(
  project: Project
) {
  const { generateTest, restLevelClient } = getAutorestOptions();
  if (!generateTest || !restLevelClient) {
    return;
  }
  project.createSourceFile("test/public/utils/env.browser.ts", "", {
    overwrite: true
  });
}
