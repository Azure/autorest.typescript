import { fileURLToPath } from "url";
import { dirname, join as joinPath } from "path";
import {
  Extractor,
  ExtractorConfig,
  ExtractorLogLevel,
  IExtractorConfigPrepareOptions
} from "@microsoft/api-extractor";
import { npxCommand } from "./runCommand.js";
import * as fs from "fs/promises";
import { createTaskLogger } from "./logger.js";
import { createProgram, CompilerOptions } from "typescript";
import lodash from "lodash";

interface GenEnv {
  readonly logger: () => any;
  readonly mode: () => any;
  readonly sourceTypespec: () => any;
  readonly targetFolder: () => any;
  readonly scriptDir: () => string;
  readonly declarationSubpath: () => string;
}

function genEnv(config: any, mode: any): GenEnv {
  const { inputPath: sourceTypespec, outputPath: targetFolder } = config;

  const __filename = fileURLToPath(import.meta.url);
  const testRoot = dirname(__filename);

  const logger = createTaskLogger();

  const declarationDir = "types";

  return {
    logger: () => logger,
    mode: () => mode,
    sourceTypespec: () => sourceTypespec,
    targetFolder: () => targetFolder,
    scriptDir: () => testRoot,
    declarationSubpath: () => declarationDir
  } as const;
}

export async function runTypespec(config: any, mode: any) {
  const env = genEnv(config, mode);
  await runTypespecHelper(env);
}

async function runTypespecHelper(env: GenEnv): Promise<void> {
  await (async () => {
    let error;
    const logger = env.logger();
    logger.log(`=== Start ${env.targetFolder()} ===`);
    try {
      await emitClient();
      logger.log("=== Emitting gitignore ===");
      await emitGitignore();
      logger.log("=== Emitting declaration files ===");
      await emitDeclarationFiles();
      logger.log("=== Emitting API summary ===");
      await emitDeclarationRollup();
      logger.log(`=== End ${env.targetFolder()} ===`);
    } catch (e: any) {
      logger.error(e.toString());
      error = e;
    } finally {
      logger.flush();
      if (error) {
        throw error;
      }
    }
  })();

  async function emitClient() {
    const logger = env.logger();

    const workingDir = outputPath();
    const commandArguments = [
      "compile",
      `${await entryPath()}`,
      "--config tspconfig.yaml "
    ];

    await npxCommand("tsp", commandArguments, workingDir, logger);
  }

  async function emitGitignore(): Promise<void> {
    const gitignorePath = joinPath(outputPath(), "./.gitignore");
    await fs.writeFile(
      gitignorePath,
      `/**
!/src
/src/**
!/src/index.d.ts
!/.gitignore
!/tspconfig.yaml
`
    );
  }

  async function emitDeclarationFiles(): Promise<void> {
    const logger = env.logger();
    const program = createProgram({
      options: tsconfig().compilerOptions,
      rootNames: [joinPath(outputPath(), "src/index.ts")]
    });

    // side effect: loads source files into memory
    // nothing will be emitted if this is omitted
    program.getSourceFiles();

    const { diagnostics } = program.emit();

    if (diagnostics.length) {
      logger.log(`Compiler diagnostics for ${outputPath()}`);
      diagnostics.forEach((diagnostic) => logger.log(diagnostic.messageText));
    }
  }

  async function emitDeclarationRollup(): Promise<void> {
    const logger = env.logger();
    Extractor.invoke(extractorConfig(), {
      localBuild: true,
      messageCallback: (message) => {
        switch (message.logLevel) {
          case ExtractorLogLevel.None:
            break;
          default:
            logger.log(message.formatMessageWithLocation(outputPath()));
        }
        message.handled = true;
      }
    });
  }

  function extractorConfig(): ExtractorConfig {
    const projectFolder = outputPath();
    const mainEntryPointFilePath = joinPath(
      "<projectFolder>",
      env.declarationSubpath(),
      "src/index.d.ts"
    );
    const untrimmedFilePath = joinPath("<projectFolder>", "src/index.d.ts");
    const packageJsonFullPath = joinPath(projectFolder, "package.json");

    const baseConfigObject = {
      apiReport: {
        enabled: false
      },
      docModel: {
        enabled: true
      },
      dtsRollup: {
        enabled: true,
        untrimmedFilePath
      },
      compiler: {
        overrideTsconfig: tsconfig()
      },
      mainEntryPointFilePath,
      messages: {
        compilerMessageReporting: {
          default: {
            logLevel: ExtractorLogLevel.None
          }
        },
        extractorMessageReporting: {
          default: {
            logLevel: ExtractorLogLevel.None
          }
        },
        tsdocMessageReporting: {
          default: {
            logLevel: ExtractorLogLevel.None
          }
        }
      },
      newlineKind: "lf",
      projectFolder
    };

    // Defaults are merged in api-extractor when the config file is read from disk with
    // `ExtractorConfig.loadFile`. This is derived from that method.
    // https://github.com/microsoft/rushstack/blob/1a92f17fa537b55529adbec80203bd99afd8cd24/apps/api-extractor/src/api/ExtractorConfig.ts#L624-L627
    const configObject = lodash.merge(
      lodash.cloneDeep((ExtractorConfig as any)._defaultConfig),
      baseConfigObject
    );
    ExtractorConfig.jsonSchema.validateObject(
      configObject,
      "api extractor config object"
    );

    const config: IExtractorConfigPrepareOptions = {
      configObject,
      packageJsonFullPath,
      configObjectFullPath: null as unknown as undefined
    };

    return ExtractorConfig.prepare(config);
  }

  function tsconfig(): Record<"compilerOptions", CompilerOptions> {
    return {
      compilerOptions: {
        declaration: true,
        emitDeclarationOnly: true,
        declarationMap: true,
        removeComments: true,
        declarationDir: joinPath(outputPath(), env.declarationSubpath()),
        rootDir: outputPath()
      }
    };
  }

  async function entryPath(): Promise<string> {
    const specPath = joinPath(
      emitterRoot(),
      "./temp/http",
      env.sourceTypespec()
    );
    const possibleEntryPaths = ["client.tsp", "main.tsp"].map((filename) =>
      joinPath(specPath, filename)
    );
    const entryPath =
      (await findAsync(possibleEntryPaths, entryFileExists)) ??
      // if find fails, specPath should point to the entry file itself
      specPath;

    return entryPath;

    async function entryFileExists(entryFilePath: string): Promise<boolean> {
      const fileExists = await exists(entryFilePath);
      if (fileExists) {
        env.logger().log(`Existing the entry file: ${entryFilePath}`);
      }
      return fileExists;
    }
  }

  function flavor() {
    return env.mode().includes("non-branded") ? "non-branded" : "branded";
  }
  function clientType() {
    return env.mode().includes("modular") ? "modular" : "rlc";
  }

  function outputPath() {
    const subPath = {
      "non-branded": {
        modular: "nonBrandedIntegration/modular",
        rlc: "nonBrandedIntegration/rlc"
      },
      branded: { modular: "modularIntegration", rlc: "integration" }
    }[flavor()][clientType()];

    const outputPath = joinPath(
      testRoot(),
      subPath,
      "generated",
      env.targetFolder()
    );

    return outputPath;
  }

  function testRoot() {
    return joinPath(env.scriptDir(), "..");
  }

  function emitterRoot() {
    return joinPath(testRoot(), "..");
  }
}

async function exists(filePath: any) {
  try {
    await fs.access(filePath);
    return true;
  } catch (err) {
    return false;
  }
}

async function findAsync<T>(
  array: T[],
  predicate: (x: T) => Promise<boolean>
): Promise<T | undefined> {
  for (const x of array) {
    if (await predicate(x)) {
      return x;
    }
  }
  return;
}
