import { assert } from "chai";
import { readdirSync, readFileSync, writeFileSync } from "fs";
import path from "path";
import {
  emitModularClientContextFromTypeSpec,
  emitModularClientFromTypeSpec,
  emitModularModelsFromTypeSpec,
  emitModularOperationsFromTypeSpec,
  emitRootIndexFromTypeSpec,
  emitSamplesFromTypeSpec
} from "../util/emitUtil.js";
import { assertEqualContent, ExampleJson } from "../util/testUtil.js";
import { format } from "prettier";
import { prettierTypeScriptOptions } from "../../src/lib.js";
import { load as loadYaml } from "js-yaml";
import { getDirname } from "../../src/utils/dirname.js";

const { __dirname } = getDirname(import.meta.url);
const SCENARIOS_LOCATION = path.resolve(__dirname, "scenarios");
const SCENARIOS_UPDATE = process.env["SCENARIOS_UPDATE"] === "true";

type EmitterFunction = (
  tsp: string,
  namedStringArgs: Record<string, string>,
  namedUnknownArgs?: Record<string, unknown>
) => Promise<string>;

const OUTPUT_CODE_BLOCK_TYPES: Record<string, EmitterFunction> = {
  "(ts|typescript) models interface {name}": async (
    tsp,
    { name },
    namedUnknownArgs
  ) => {
    const configs = namedUnknownArgs
      ? (namedUnknownArgs["configs"] as Record<string, string>)
      : {};
    const result = await emitModularModelsFromTypeSpec(tsp, configs);
    return result!
      .getInterfaceOrThrow(name ?? "No name specified!")
      .getFullText();
  },

  "(ts|typescript) models alias {name}": async (
    tsp,
    { name },
    namedUnknownArgs
  ) => {
    const configs = namedUnknownArgs
      ? (namedUnknownArgs["configs"] as Record<string, string>)
      : {};
    const result = await emitModularModelsFromTypeSpec(tsp, configs);
    return result!.getTypeAlias(name ?? "No name specified!")!.getFullText();
  },

  "(ts|typescript) models enum {name}": async (
    tsp,
    { name },
    namedUnknownArgs
  ) => {
    const configs = namedUnknownArgs
      ? (namedUnknownArgs["configs"] as Record<string, string>)
      : {};
    const result = await emitModularModelsFromTypeSpec(tsp, configs);
    if (result === undefined) {
      return "// (file was not generated)";
    }
    return result!.getEnum(name ?? "No name specified!")!.getFullText();
  },

  "(ts|typescript) models function {name}": async (
    tsp,
    { name },
    namedUnknownArgs
  ) => {
    const configs = namedUnknownArgs
      ? (namedUnknownArgs["configs"] as Record<string, string>)
      : {};
    const result = await emitModularModelsFromTypeSpec(tsp, configs);

    if (result === undefined) {
      return "// (file was not generated)";
    }

    return result.getFunctionOrThrow(name ?? "No name specified!").getText();
  },

  "(ts|typescript) models": async (tsp, {}, namedUnknownArgs) => {
    const configs = namedUnknownArgs
      ? (namedUnknownArgs["configs"] as Record<string, string>)
      : {};
    const result = await emitModularModelsFromTypeSpec(tsp, configs);

    if (result === undefined) {
      return "// (file was not generated)";
    }

    return result.getFullText();
  },

  "(ts|typescript) root index": async (tsp, {}, namedUnknownArgs) => {
    const configs = namedUnknownArgs
      ? (namedUnknownArgs["configs"] as Record<string, string>)
      : {};
    const result = await emitRootIndexFromTypeSpec(tsp, configs);

    if (result === undefined) {
      return "// (file was not generated)";
    }

    return result.getFullText();
  },

  "(ts|typescript) models:withOptions interface {name}": async (
    tsp,
    { name },
    namedUnknownArgs
  ) => {
    const configs = namedUnknownArgs
      ? (namedUnknownArgs["configs"] as Record<string, string>)
      : {};
    const result = await emitModularModelsFromTypeSpec(tsp, {
      needOptions: true,
      ...configs
    });

    if (result === undefined) {
      return "// (file was not generated)";
    }

    return result.getInterfaceOrThrow(name ?? "No name specified!").getText();
  },

  "(ts|typescript) models:withOptions": async (tsp, {}, namedUnknownArgs) => {
    const configs = namedUnknownArgs
      ? (namedUnknownArgs["configs"] as Record<string, string>)
      : {};
    const result = await emitModularModelsFromTypeSpec(tsp, {
      needOptions: true,
      ...configs
    });

    if (result === undefined) {
      return "// (file was not generated)";
    }

    return result.getFullText();
  },

  "(ts|typescript) operations": async (tsp, {}, namedUnknownArgs) => {
    const configs = namedUnknownArgs
      ? (namedUnknownArgs["configs"] as Record<string, string>)
      : {};
    const result = await emitModularOperationsFromTypeSpec(tsp, configs);
    assert.equal(result?.length, 1, "Expected exactly 1 source file");
    return result![0]!.getFullText();
  },

  "(ts|typescript) operations function {name}": async (
    tsp,
    { name },
    namedUnknownArgs
  ) => {
    const configs = namedUnknownArgs
      ? (namedUnknownArgs["configs"] as Record<string, string>)
      : {};
    const result = await emitModularOperationsFromTypeSpec(tsp, configs);
    assert.equal(result?.length, 1, "Expected exactly 1 source file");
    return result![0]!.getFunctionOrThrow(name!).getText();
  },

  "(ts|typescript) samples": async (tsp, {}, namedUnknownArgs) => {
    if (!namedUnknownArgs || !namedUnknownArgs["examples"]) {
      throw new Error(`Expected 'examples' to be passed in as an argument`);
    }
    const configs = namedUnknownArgs["configs"] as Record<string, string>;
    const examples = namedUnknownArgs["examples"] as ExampleJson[];
    const result = await emitSamplesFromTypeSpec(tsp, examples, configs);
    return result
      .map(
        (x) =>
          `/** This file path is ${x.getFilePath()} */\n ${x.getFullText()}`
      )
      .join("\n");
  },

  "(ts|typescript) clientContext": async (tsp, {}, namedUnknownArgs) => {
    const configs = namedUnknownArgs
      ? (namedUnknownArgs["configs"] as Record<string, string>)
      : {};
    const result = await emitModularClientContextFromTypeSpec(tsp, configs);
    return result!.getFullText()!;
  },

  "(ts|typescript) classicClient": async (tsp, {}, namedUnknownArgs) => {
    const configs = namedUnknownArgs
      ? (namedUnknownArgs["configs"] as Record<string, string>)
      : {};
    const result = await emitModularClientFromTypeSpec(tsp, configs);
    return result ? result.getFullText()! : "";
  }
};

export function registerScenarioDirectoryTests(
  scenarioDirectory: string
): void {
  const fullDirectory = path.resolve(SCENARIOS_LOCATION, scenarioDirectory);
  const relativeDirectory = path.relative(SCENARIOS_LOCATION, fullDirectory);
  const children = readdirSync(fullDirectory)
    .filter((child) => child.endsWith(".md"))
    .sort();

  describe(relativeDirectory, function () {
    for (const child of children) {
      describeScenarioFile(path.join(fullDirectory, child));
    }
  });
}

interface Scenario {
  only: boolean;
  heading: string;
  skip: boolean;
  parts: ScenarioPart[];
}

type ScenarioFile = Scenario[];

interface TextScenarioPart {
  kind: "text";
  text: string;
}

interface CodeScenarioPart {
  kind: "code";
  content: string;
  heading: string;
}

type ScenarioPart = TextScenarioPart | CodeScenarioPart;

function describeScenarioFile(scenarioFile: string): void {
  describe(path.basename(scenarioFile), function () {
    const scenarios = readScenarios(readFileSync(scenarioFile, "utf-8"));
    for (const scenario of scenarios) {
      if (scenario.skip) {
        describe.skip(scenario.heading, function () {});
        continue;
      }

      (scenario.only ? describe.only : describe)(scenario.heading, function () {
        const codeBlocks = scenario.parts.filter((x) => x.kind === "code");
        const tspBlocks = codeBlocks.filter(
          (x) => x.heading.startsWith("tsp") || x.heading.startsWith("typespec")
        );
        const jsonBlocks = codeBlocks.filter((x) =>
          x.heading.startsWith("json")
        );
        const allExamples: ExampleJson[] = jsonBlocks.map((block) => ({
          filename: block.heading.trim().replace(/ /g, "_"),
          rawContent: block.content
        }));
        const yamlConfigs = codeBlocks.filter((x) =>
          x.heading.startsWith("yaml")
        );
        const configs = parseYaml(yamlConfigs.map((x) => x.content));
        const outputCodeBlocks = codeBlocks.filter(
          (x) =>
            !tspBlocks.includes(x) &&
            !jsonBlocks.includes(x) &&
            !yamlConfigs.includes(x)
        );

        const inputTsp = tspBlocks.map((x) => x.content).join("\n");

        const testCases: {
          block: CodeScenarioPart;
          fn: (examples?: ExampleJson[]) => Promise<string>;
        }[] = outputCodeBlocks
          .map((x) => {
            for (const [template, fn] of Object.entries(
              OUTPUT_CODE_BLOCK_TYPES
            )) {
              const templateRegex = new RegExp(
                "^" + template.replace(/\{(\w+)\}/g, "(?<$1>\\w+)") + "$"
              );

              const match = x.heading
                .replace(/(\r\n|\n|\r)/gm, "")
                .match(templateRegex);
              if (match !== null) {
                return {
                  block: x,
                  fn: (examples?: ExampleJson[]) =>
                    fn(inputTsp, match.groups! ?? {}, {
                      examples,
                      configs
                    })
                };
              }
            }

            return undefined;
          })
          .filter((x): x is NonNullable<typeof x> => x !== undefined);

        let index = 0;
        for (const testCase of testCases) {
          it(testCase.block.heading, async () => {
            const examples =
              allExamples.length === testCases.length
                ? [allExamples[index++]!]
                : allExamples;
            const result = await testCase.fn(examples);

            if (SCENARIOS_UPDATE && !scenario.skip) {
              testCase.block.content = await format(
                result,
                prettierTypeScriptOptions
              );
              writeFileSync(scenarioFile, writeScenarios(scenarios));
            }

            await assertEqualContent(
              result,
              testCase.block.content,
              configs["ignoreWeirdLine"] === false ? false : true
            );
          });
        }
      });
    }
  });
}

function readScenarios(fileContent: string): ScenarioFile {
  const [, ...rawParts] = fileContent.split(/^# /gm);
  const scenarios: Scenario[] = [];

  for (const part of rawParts) {
    const [rawHeading, ...lines] = part.split("\n");
    const isOnly = rawHeading!.startsWith("only: ");
    const isSkip = rawHeading!.startsWith("skip: ");

    const heading = isOnly
      ? rawHeading!.substring("only: ".length)
      : rawHeading!;
    const content = lines.join("\n");

    const partStrings = content.split(/^```/gm);
    let inCodeBlock = false;
    const parts: ScenarioPart[] = [];
    for (const contentPart of partStrings) {
      if (inCodeBlock) {
        const [codeBlockHeading, ...codeLines] = contentPart.split("\n");
        parts.push({
          kind: "code",
          heading: codeBlockHeading ?? "",
          content: codeLines.join("\n")
        });
      } else {
        parts.push({
          kind: "text",
          text: contentPart
        });
      }

      inCodeBlock = !inCodeBlock;
    }

    scenarios.push({
      only: Boolean(isOnly),
      skip: Boolean(isSkip),
      heading,
      parts
    });
  }

  return scenarios;
}

function writeScenarios(file: ScenarioFile): string {
  let output = "";
  for (const scenario of file) {
    output += `# ${scenario.only ? "only: " : ""}${scenario.heading}\n`;
    for (const part of scenario.parts) {
      if (part.kind === "text") {
        output += part.text;
      } else {
        output += `\`\`\`${part.heading}\n${part.content}\`\`\``;
      }
    }
  }

  return output;
}

function parseYaml(yamlConfigs: string[]): Record<string, unknown> {
  let record: Record<string, unknown> = {};
  for (const yaml of yamlConfigs) {
    const each = loadYaml(yaml) as Record<string, unknown>;
    record = { ...record, ...each };
  }
  return record;
}
