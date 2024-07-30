import { fileURLToPath } from "url";
import { dirname, join as joinPath } from "path";
import { Extractor, ExtractorConfig, ExtractorLogLevel } from "@microsoft/api-extractor";
import { npxCommand } from "./runCommand.js";
import * as fs from "fs/promises";
import { createTaskLogger } from "./logger.js";
import { createProgram } from "typescript";
export async function runTypespec(config, mode) {
    await run(createContext());
    function createContext() {
        const { inputPath: sourceTypespec, outputPath: targetFolder } = config;
        const __filename = fileURLToPath(import.meta.url);
        const testRoot = dirname(__filename);
        const logger = createTaskLogger();
        return {
            logger: () => logger,
            mode: () => mode,
            sourceTypespec: () => sourceTypespec,
            targetFolder: () => targetFolder,
            testRoot: () => testRoot
        };
    }
}
async function run(ctx) {
    await (async () => {
        const logger = ctx.logger();
        logger.log(`=== Start ${ctx.targetFolder()} ===`);
        try {
            await emitClient();
            logger.log("=== Emitting declaration files ===");
            await emitDeclarationFiles();
            logger.log("=== Emitting API summary ===");
            await emitAPISummary();
            logger.log(`=== End ${ctx.targetFolder()} ===`);
        }
        catch (e) {
            logger.error(e.toString());
            logger.flush();
            throw e;
        }
        finally {
            logger.flush();
        }
    })();
    async function emitClient() {
        const logger = ctx.logger();
        const workingDir = outputPath();
        const commandArguments = [
            "compile",
            `${await entryPath()}`,
            "--config tspconfig.yaml "
        ];
        logger.flush();
        await npxCommand("tsp", commandArguments, workingDir, logger);
    }
    async function emitDeclarationFiles() {
        const logger = ctx.logger();
        const program = createProgram({
            options: {
                declaration: true,
                emitDeclarationOnly: true,
                declarationMap: true,
                removeComments: true,
                rootDir: outputPath()
            },
            rootNames: [joinPath(outputPath(), "src/index.ts")]
        });
        // side effect loads source files into memory
        // nothing will be emitted if this is omitted
        program.getSourceFiles();
        logger.flush();
        const { diagnostics } = program.emit();
        if (diagnostics.length) {
            logger.log(`Compiler diagnostics for ${outputPath()}`);
            diagnostics.forEach((diagnostic) => logger.log(diagnostic.messageText));
        }
    }
    async function emitAPISummary() {
        const projectFolder = outputPath();
        const config = {
            configObject: {
                apiReport: {
                    enabled: true,
                    reportFolder: "<projectFolder>"
                },
                compiler: {
                    overrideTsconfig: {
                        compilerOptions: {
                            declaration: true,
                            declarationMap: true,
                            emitDeclarationOnly: true,
                            removeComments: true
                        }
                    }
                },
                docModel: {
                    enabled: false
                },
                dtsRollup: {
                    enabled: false
                },
                mainEntryPointFilePath: "<projectFolder>/src/index.d.ts",
                messages: {
                    compilerMessageReporting: {
                        default: {
                            addToApiReportFile: true,
                            logLevel: ExtractorLogLevel.None
                        }
                    },
                    extractorMessageReporting: {
                        default: {
                            addToApiReportFile: true,
                            logLevel: ExtractorLogLevel.None
                        },
                        "ae-missing-release-tag": {
                            addToApiReportFile: false,
                            logLevel: ExtractorLogLevel.None
                        }
                    },
                    tsdocMessageReporting: {
                        default: {
                            addToApiReportFile: true,
                            logLevel: ExtractorLogLevel.None
                        }
                    }
                },
                newlineKind: "lf",
                projectFolder
            },
            packageJsonFullPath: joinPath(projectFolder, "package.json"),
            configObjectFullPath: undefined
        };
        ctx.logger().flush();
        Extractor.invoke(ExtractorConfig.prepare(config), {});
    }
    async function entryPath() {
        const typespecPath = joinPath(`${ctx.testRoot()}`, "..", "..", `./temp/http/${ctx.sourceTypespec()}`);
        const possibleEntryPaths = ["client.tsp", "main.tsp"].map((filename) => joinPath(typespecPath, filename));
        const entryPath = (await findAsync(possibleEntryPaths, entryFileExists)) ?? typespecPath;
        return entryPath;
        async function entryFileExists(entryFilePath) {
            const fileExists = await exists(entryFilePath);
            if (fileExists) {
                ctx.logger().log(`Existing the entry file: ${entryFilePath}`);
            }
            return fileExists;
        }
    }
    function outputPath() {
        const flavor = ctx.mode().includes("non-branded")
            ? "non-branded"
            : "branded";
        const clientType = ctx.mode().includes("modular") ? "modular" : "rlc";
        const subPath = {
            "non-branded": {
                modular: "nonBrandedIntegration/modular",
                rlc: "nonBrandedIntegration/rlc"
            },
            branded: { modular: "modularIntegration", rlc: "integration" }
        }[flavor][clientType];
        const outputPath = joinPath(ctx.testRoot(), "..", subPath, "generated", ctx.targetFolder());
        return outputPath;
    }
}
async function exists(filePath) {
    try {
        await fs.access(filePath);
        return true;
    }
    catch (err) {
        return false;
    }
}
async function findAsync(array, callback) {
    for (const x of array) {
        if (await callback(x)) {
            return x;
        }
    }
    return;
}
