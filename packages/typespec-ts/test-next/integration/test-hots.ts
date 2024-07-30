import {
  SdkContext,
  SdkEmitterOptions,
  SdkHttpOperation,
  SdkServiceOperation,
  createSdkContext
} from "@azure-tools/typespec-client-generator-core";
import { SdkTestLibrary } from "@azure-tools/typespec-client-generator-core/testing";
import { EmitContext, Program } from "@typespec/compiler";
import {
  createTestHost,
  createTestWrapper,
  TypeSpecTestLibrary
} from "@typespec/compiler/testing";
import { HttpTestLibrary } from "@typespec/http/testing";

export async function createMyTestHost() {
  return createTestHost({
    libraries: [HttpTestLibrary, SdkTestLibrary]
  });
}

export interface CreateSdkTestRunnerOptions extends SdkEmitterOptions {
  emitterName?: string;
  librariesToAdd?: TypeSpecTestLibrary[];
  autoUsings?: string[];
  packageName?: string;
}

export async function createSdkContextFromTypespec(
  code: string,
  options: CreateSdkTestRunnerOptions = {}
): Promise<SdkContext<CreateSdkTestRunnerOptions, SdkHttpOperation>> {
  const runner = await createMyTestRunner();
  await runner.compile(code);

  return await createSdkContextTestHelper(runner.program, options);
}

export async function createSdkContextTestHelper<
  TOptions extends Record<string, any> = CreateSdkTestRunnerOptions,
  TServiceOperation extends SdkServiceOperation = SdkHttpOperation
>(
  program: Program,
  options: TOptions,
  sdkContextOption?: any
): Promise<SdkContext<TOptions, TServiceOperation>> {
  const emitContext: EmitContext<TOptions> = {
    program: program,
    emitterOutputDir: "dummy",
    options: options,
    getAssetEmitter: null as any
  };
  return await createSdkContext(
    emitContext,
    options.emitterName ?? "@azure-tools/typespec-csharp",
    sdkContextOption
  );
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
