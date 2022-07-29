import { CompilerHost, Program } from "@cadl-lang/compiler";
import { buildClientDefinitions, Paths } from "@azure-tools/rlc-codegen";
import { dirname, join } from "path";
import { transformPaths } from "./transformPaths";

export async function $onEmit(program: Program) {
  const paths: Paths = transformPaths(program);
  const clientDefinitionsFile = buildClientDefinitions(
    { paths, libraryName: "Foo", srcPath: "src" },
    {
      clientImports: new Set(),
      importedParameters: new Set(),
      importedResponses: new Set()
    }
  );

  const filePath = program.compilerOptions.outputPath
    ? join(program.compilerOptions.outputPath, clientDefinitionsFile.path)
    : clientDefinitionsFile.path;
  await emitFile(filePath, clientDefinitionsFile.content, program.host);
}

async function emitFile(path: string, content: string, host: CompilerHost) {
  await host.mkdirp(dirname(path));
  await host.writeFile(path, content);
}
