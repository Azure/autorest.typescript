import {
  SdkContext,
  createSdkContext
} from "@azure-tools/typespec-client-generator-core";
import { SdkTestLibrary } from "@azure-tools/typespec-client-generator-core/testing";
import { EmitContext } from "@typespec/compiler";
import { createTestHost, createTestWrapper } from "@typespec/compiler/testing";
import { HttpTestLibrary } from "@typespec/http/testing";

export async function createMyTestHost() {
  return createTestHost({
    libraries: [HttpTestLibrary, SdkTestLibrary]
  });
}

export async function createMyTestRunner() {
  const host = await createMyTestHost();
  return createTestWrapper(host, {
    autoUsings: ["TypeSpec.Http", "Azure.ClientGenerator.Core"]
  });
}

export function createTcgcContext(
  context: EmitContext<Record<string, any>>
): SdkContext {
  const tcgcSettings = {
    "generate-protocol-methods": true,
    "generate-convenience-methods": true,
    "flatten-union-as-enum": false,
    emitters: [
      {
        main: "@azure-tools/typespec-ts",
        metadata: { name: "@azure-tools/typespec-ts" }
      }
    ]
  };

  const contextForTcgc = {
    ...context,
    options: {
      ...context.options,
      ...tcgcSettings
    }
  };

  return createSdkContext(contextForTcgc);
}
