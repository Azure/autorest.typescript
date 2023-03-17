import { Project } from "ts-morph";

export function buildRootIndex(project: Project, srcPath: string) {
  project.createSourceFile(
    `${srcPath}/src/index.ts`,
    "export const foo = `bar`;",
    {
      overwrite: true
    }
  );
}
