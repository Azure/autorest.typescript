import { Program } from "@cadl-lang/compiler";
import { createTestHost } from "@cadl-lang/compiler/testing";
import { TestHost } from "@cadl-lang/compiler/testing";
import { RestTestLibrary } from "@cadl-lang/rest/testing";
import { assert } from "chai";
import { prettierTypeScriptOptions } from "../../src/lib.js";
import { format } from "prettier";

export async function createRLCEmitterTestHost() {
  return createTestHost({
    libraries: [RestTestLibrary]
  });
}

export async function rlcEmitterFor(code: string): Promise<Program> {
  const host: TestHost = await createRLCEmitterTestHost();
  host.addCadlFile(
    "main.cadl",
    `
  import "@cadl-lang/rest";
  using Cadl.Rest; 
  using Cadl.Http;
  ${code}
  `
  );
  await host.compile("./");
  return host.program;
}

export function assertEqualContent(actual: string, expected: string) {
  assert.strictEqual(
    format(actual, prettierTypeScriptOptions),
    format(expected, prettierTypeScriptOptions)
  );
}
