import { assert } from "chai";
import { readdirSync, readFileSync, statSync, writeFileSync } from "fs";
import path from "path";
import {
  emitModularClientContextFromTypeSpec,
  emitModularClientFromTypeSpec,
  emitModularModelsFromTypeSpec,
  emitModularOperationsFromTypeSpec,
  emitSamplesFromTypeSpec
} from "../util/emitUtil.js";
import { assertEqualContent, ExampleJson } from "../util/testUtil.js";
import { format } from "prettier";
import { prettierTypeScriptOptions } from "../../src/lib.js";

const SCENARIOS_LOCATION = "./test/modularUnit/scenarios";

const SCENARIOS_UPDATE = process.env["SCENARIOS_UPDATE"] === "true";

type EmitterFunction = (
  tsp: string,
  namedStringArgs: Record<string, string>,
  namedUnknownArgs?: Record<string, unknown>
) => Promise<string>;

/**
 * Mapping of different snapshot types to how to get them.
 * Snapshot types can take single-word string arguments templated in curly braces {} and are otherwise regex
 *
 * TODO: trying to figure out the best syntax for this; the existing "emit" functions have a lot of positional boolean options.
 * It would be good to make it easy to specify what options you want in a clear way.
 */
const OUTPUT_CODE_BLOCK_TYPES: Record<string, EmitterFunction> = {
  // Snapshot of a particular interface named {name} in the models file
  "(ts|typescript) models interface {name}": async (tsp, { name }, namedUnknownArgs) => {
    const configs = namedUnknownArgs ? (namedUnknownArgs["configs"] as Record<string, string>) : {};
    const result = await emitModularModelsFromTypeSpec(tsp, configs);
    return result!.getInterfaceOrThrow(name ?? "No name specified!").getFullText();
  },

  // Snapshot of a particular class named {name} in the models file
  "(ts|typescript) models alias {name}": async (tsp, { name }, namedUnknownArgs) => {
    const configs = namedUnknownArgs ? (namedUnknownArgs["configs"] as Record<string, string>) : {};
    const result = await emitModularModelsFromTypeSpec(tsp, configs);
    return result!.getTypeAlias(name ?? "No name specified!")!.getFullText();
  },

  // Snapshot of a particular enum named {name} in the models file
  "(ts|typescript) models enum {name}": async (tsp, { name }, namedUnknownArgs) => {
    const configs = namedUnknownArgs ? (namedUnknownArgs["configs"] as Record<string, string>) : {};
    const result = await emitModularModelsFromTypeSpec(tsp, configs);
    return result!.getEnum(name ?? "No name specified!")!.getFullText();
  },

  // Snapshot of a particular function named {name} in the models file
  "(ts|typescript) models function {name}": async (tsp, { name }, namedUnknownArgs) => {
    const configs = namedUnknownArgs ? (namedUnknownArgs["configs"] as Record<string, string>) : {};
    const result = await emitModularModelsFromTypeSpec(tsp, configs);

    if (result === undefined) {
      return "// (file was not generated)";
    }

    return result.getFunctionOrThrow(name ?? "No name specified!").getText();
  },

  // Snapshot of the entire models file
  "(ts|typescript) models": async (tsp, { }, namedUnknownArgs) => {
    const configs = namedUnknownArgs ? (namedUnknownArgs["configs"] as Record<string, string>) : {};
    const result = await emitModularModelsFromTypeSpec(tsp, configs);

    if (result === undefined) {
      return "// (file was not generated)";
    }

    return result.getFullText();
  },

  // Snapshot of the options
  "(ts|typescript) models:withOptions interface {name}": async (
    tsp,
    { name }
  ) => {
    const result = await emitModularModelsFromTypeSpec(tsp, {
      needOptions: true
    });

    if (result === undefined) {
      return "// (file was not generated)";
    }

    return result.getInterfaceOrThrow(name ?? "No name specified!").getText();
  },

  // Snapshot of the entire models file
  "(ts|typescript) models:withOptions": async (tsp) => {
    const result = await emitModularModelsFromTypeSpec(tsp, {
      needOptions: true
    });

    if (result === undefined) {
      return "// (file was not generated)";
    }

    return result.getFullText();
  },

  // Snapshot of the entire operations file for when there is only one operation group
  // If there is more than one operations group, currently we throw
  "(ts|typescript) operations": async (tsp, { }, namedUnknownArgs) => {
    const configs = namedUnknownArgs ? (namedUnknownArgs["configs"] as Record<string, string>) : {};
    const result = await emitModularOperationsFromTypeSpec(tsp, configs);
    assert.equal(result?.length, 1, "Expected exactly 1 source file");
    return result![0]!.getFullText();
  },

  // Snapshot of a specific function in the operations definitions
  // Throws if more than one operations group generated
  "(ts|typescript) operations function {name}": async (tsp, { name }) => {
    const result = await emitModularOperationsFromTypeSpec(tsp);
    assert.equal(result?.length, 1, "Expected exactly 1 source file");
    return result![0]!.getFunctionOrThrow(name!).getText();
  },

  "(ts|typescript) samples": async (tsp, { }, namedUnknownArgs) => {
    if (!namedUnknownArgs || !namedUnknownArgs["examples"]) {
      throw new Error(`Expected 'examples' to be passed in as an argument`);
    }
    const configs = namedUnknownArgs["configs"] as Record<string, string>;
    const examples = namedUnknownArgs["examples"] as ExampleJson[];
    const result = await emitSamplesFromTypeSpec(tsp, examples, configs);
    const text = result
      .map(
        (x) =>
          `/** This file path is ${x.getFilePath()} */\n ${x.getFullText()}`
      )
      .join("\n");
    return text;
  },

  //Snapshot of the clientContext file for a given typespec
  "(ts|typescript) clientContext": async (tsp, { }, namedUnknownArgs) => {
    const configs = namedUnknownArgs ? (namedUnknownArgs["configs"] as Record<string, string>) : {};
    const result = await emitModularClientContextFromTypeSpec(tsp, configs);
    return result!.getFullText()!;
  },

  //Snapshot of the classicClient file for a given typespec
  "(ts|typescript) classicClient": async (tsp, { }, namedUnknownArgs) => {
    const configs = namedUnknownArgs ? (namedUnknownArgs["configs"] as Record<string, string>) : {};
    const result = await emitModularClientFromTypeSpec(tsp, configs);
    return result!.getFullText()!;
  }
};

describe("Scenarios", function () {
  describeScenarios(SCENARIOS_LOCATION);
});

function describeScenarios(location: string): void {
  const children = readdirSync(location);
  for (const child of children) {
    const fullPath = path.join(location, child);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      describeScenarios(fullPath);
    } else {
      describeScenarioFile(fullPath);
    }
  }
}

function describeScenarioFile(scenarioFile: string): void {
  describe(path.basename(scenarioFile), function () {
    const scenarios = readScenarios(readFileSync(scenarioFile, "utf-8"));
    for (const scenario of scenarios) {
      (scenario.only ? describe.only : describe)(scenario.heading, function () {
        const codeBlocks = scenario.parts.filter((x) => x.kind === "code");
        const tspBlocks = codeBlocks.filter(
          (x) => x.heading.startsWith("tsp") || x.heading.startsWith("typespec")
        );
        const jsonBlocks = codeBlocks.filter((x) =>
          x.heading.startsWith("json")
        );
        const allExamples: ExampleJson[] = [];
        for (const block of jsonBlocks) {
          allExamples.push({
            filename: block.heading.trim().replace(/ /g, "_"),
            rawContent: block.content
          });
        }
        const yamlConfigs = codeBlocks.filter((x) =>
          x.heading.startsWith("yaml")
        );
        const configs = parseSimpleYaml(yamlConfigs.map((x) => x.content));
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
          .filter((x) => x !== undefined);

        let index = 0;
        for (const testCase of testCases) {
          it(testCase.block.heading, async () => {
            const examples =
              Object.entries(allExamples).length === testCases.length
                ? [allExamples[index++]!]
                : allExamples;
            const result = await testCase.fn!(examples);

            if (SCENARIOS_UPDATE) {
              // Update the content; this makes the tests pass
              // This update also updates the `scenarios` object
              testCase.block.content = await format(
                result,
                prettierTypeScriptOptions
              );
              // Also update the file in the test
              writeFileSync(scenarioFile, writeScenarios(scenarios));
            }

            await assertEqualContent(result, testCase.block.content, configs["ignoreWeirdLine"] as any === false ? false : true);
          });
        }
      });
    }
  });
}

type ScenarioFile = Scenario[];

interface Scenario {
  only: boolean;
  heading: string;
  parts: ScenarioPart[];
}

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

function readScenarios(fileContent: string): ScenarioFile {
  // Ignore first part of split since this is before the first h1
  const [, ...rawParts] = fileContent.split(/^# /gm);

  const scenarios: Scenario[] = [];

  for (const part of rawParts) {
    const [rawHeading, ...lines] = part.split("\n");
    const isOnly = rawHeading!.startsWith("only: ");
    const isSkip = rawHeading!.startsWith("skip: ");
    if (isSkip) {
      console.log("Skipping scenario: ", rawHeading);
      continue;
    }
    const heading = isOnly
      ? rawHeading!.substring("only: ".length)
      : rawHeading!;

    const content = lines.join("\n");

    const partStrings = content.split(/^```/gm);
    let inCodeBlock = false;
    const parts: ScenarioPart[] = [];
    for (const contentPart of partStrings) {
      if (inCodeBlock) {
        const [codeBlockHeading, ...lines] = contentPart.split("\n");
        parts.push({
          kind: "code",
          heading: codeBlockHeading ?? "",
          content: lines?.join("\n")
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

function parseSimpleYaml(yamlConfigs: string[]): Record<string, string> {
  // This is a simple yaml parser that assumes that there are no nested objects.
  // It splits the yaml into lines, then splits each line by the colon and
  // creates a record from the key-value pairs.
  // This is a very simple parser and will not work for all yaml files.
  let record: Record<string, string> = {};
  for (const yaml of yamlConfigs) {
    const each = yaml
      .split("\n")
      .map((x) => x.split(":"))
      .filter((x) => x.length === 2)
      .reduce(
        (acc, [key, value]) => {
          acc[key!] = JSON.parse(value!);
          return acc;
        },
        {} as Record<string, string>
      );
    record = { ...record, ...each };
  }
  return record;
}
