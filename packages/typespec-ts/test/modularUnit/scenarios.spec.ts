import { assert } from "chai";
import { readdirSync, readFileSync, statSync, writeFileSync } from "fs";
import path from "path";
import {
  emitModularModelsFromTypeSpec,
  emitModularOperationsFromTypeSpec,
  emitSamplesFromTypeSpec
} from "../util/emitUtil.js";
import { assertEqualContent } from "../util/testUtil.js";
import { format } from "prettier";
import { prettierTypeScriptOptions } from "../../src/lib.js";

const SCENARIOS_LOCATION = "./test/modularUnit/scenarios/samples";

const SCENARIOS_UPDATE = true;

type EmitterFunction = (
  tsp: string,
  namedArgs: Record<string, string>,
  examples?: Record<string, string>
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
  "(ts|typescript) models interface {name}": async (tsp, { name }) => {
    const result = await emitModularModelsFromTypeSpec(tsp);
    return result!.getInterfaceOrThrow(name ?? "No name specified!").getText();
  },

  // Snapshot of a particular function named {name} in the models file
  "(ts|typescript) models function {name}": async (tsp, { name }) => {
    const result = await emitModularModelsFromTypeSpec(tsp);

    if (result === undefined) {
      return "// (file was not generated)";
    }

    return result.getFunctionOrThrow(name ?? "No name specified!").getText();
  },

  // Snapshot of the entire models file
  "(ts|typescript) models": async (tsp) => {
    const result = await emitModularModelsFromTypeSpec(tsp);

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
    const result = await emitModularModelsFromTypeSpec(tsp, true);

    if (result === undefined) {
      return "// (file was not generated)";
    }

    return result.getInterfaceOrThrow(name ?? "No name specified!").getText();
  },

  // Snapshot of the entire models file
  "(ts|typescript) models:withOptions": async (tsp) => {
    const result = await emitModularModelsFromTypeSpec(tsp, true);

    if (result === undefined) {
      return "// (file was not generated)";
    }

    return result.getFullText();
  },

  // Snapshot of the entire operations file for when there is only one operation group
  // If there is more than one operations group, currently we throw
  "(ts|typescript) operations": async (tsp) => {
    const result = await emitModularOperationsFromTypeSpec(tsp);
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

  // Snapshot of a specific example generation
  // Throws if more than one example generated
  "(ts|typescript) samples": async (tsp, {}, example) => {
    if (!example) {
      throw new Error("No example provided for samples");
    }
    const result = await emitSamplesFromTypeSpec(tsp, example);
    assert.equal(result?.length, 1, "Expected exactly 1 source file");
    console.log("Result: ", result![0]!.getFullText());
    return result![0]!.getFullText();
  }
};

describe.only("Scenarios", function () {
  describeScenarios(SCENARIOS_LOCATION);
});

function describeScenarios(location: string) {
  const children = readdirSync(location);
  console.log("Scenarios found: ", children, location);
  for (const child of children) {
    const fullPath = path.join(location, child);
    const stat = statSync(fullPath);
    if (stat.isDirectory()) {
      describe(child, function () {
        describeScenarios(fullPath);
      });
    } else {
      describeScenario(fullPath);
    }
  }
}

function describeScenario(scenarioFile: string) {
  let content = readFileSync(scenarioFile, { encoding: "utf-8" });

  // Reads the first line, which should be a top-level header (h1).
  // This becomes the name of the describe block for this scenario.
  const scenarioName =
    content.split("\n")[0]?.replace(/^#+\s+/, "") +
    (SCENARIOS_UPDATE ? " (UPDATING)" : "");

  // Mark the test as .only if the test title starts with "only:". Useful for
  // debuggging and updating.
  (scenarioName.toLowerCase().startsWith("only:") ? describe.only : describe)(
    scenarioName!,
    function () {
      const codeBlocks = getCodeBlocks(content);

      // Find all TypeSpec codeblocks. If there are multiple, concat them and treat them as a single TypeSpec.
      const typeSpecInput = codeBlocks
        .filter((x) => x.heading === "tsp" || x.heading === "typespec")
        .map((x) => x.content)
        .join("\n");
      const examplesInput = codeBlocks.filter((x) =>
        x.heading.startsWith("json")
      );
      const examples: Record<string, string> = {};
      for (const example of examplesInput) {
        examples[example.heading] = example.content;
      }
      console.log("TypeSpec examples: ", examplesInput);
      const testCodeBlocks = codeBlocks.filter(
        (x) => x.heading.startsWith("ts") && x.heading !== "tsp"
      );

      for (const codeBlock of testCodeBlocks) {
        let tested = false;
        for (const [template, fn] of Object.entries(OUTPUT_CODE_BLOCK_TYPES)) {
          // This regex creates a named capture group for each template argument
          const templateRegex = new RegExp(
            "^" + template.replace(/\{(\w+)\}/g, "(?<$1>\\w+)") + "$"
          );
          const match = codeBlock.heading.match(templateRegex);

          if (match !== null) {
            const namedArgs = match.groups;

            it(codeBlock.heading, async function () {
              const result = await fn(typeSpecInput, namedArgs ?? {}, examples);

              if (SCENARIOS_UPDATE) {
                content = updateCodeBlock(
                  content,
                  codeBlock.heading,
                  (await format(result, prettierTypeScriptOptions)).trim()
                );
              } else {
                await assertEqualContent(codeBlock.content, result, true);
              }
            });

            tested = true;
          }
        }

        if (!tested) {
          // Empty test case to mark it as skipped
          it.skip(codeBlock.heading, function () {});
        }
      }

      // Update after all the tests in the scenario if write mode was enabled
      afterEach(function () {
        if (SCENARIOS_UPDATE) {
          writeFileSync(scenarioFile, content);
        }
      });
    }
  );
}

interface CodeBlock {
  content: string;
  heading: string;
}

/**
 * Finds all code blocks in the input file text
 * @param fileText Full text of the input file
 * @returns List of code blocks in the source file with their heading (i.e. the language details after the first ```) and the content.
 */
function getCodeBlocks(fileText: string): CodeBlock[] {
  fileText = fileText.replace(/\r\n/g, "\n");
  const matches = fileText.matchAll(
    /^```(?<heading>[^\n]+)\n(?<content>(.|\n)*?)```$/gm
  );

  return [...matches].map((match) => ({
    content: match.groups!["content"]!,
    heading: match.groups!["heading"]!
  }));
}

/**
 * Update a code block's content in a given file, returning the updated file content.
 *
 * @param file The full text of the input file.
 * @param codeBlockHeading The heading of the code block whose content should be replaced.
 * @param newContent The content to replace the code block's content with.
 * @returns The new file content that results after replacing the content of the code block with the new content.
 */
function updateCodeBlock(
  file: string,
  codeBlockHeading: string,
  newContent: string
): string {
  const lines = file.split("\n");
  const start = lines.indexOf("```" + codeBlockHeading) + 1;
  const end = lines.indexOf("```", start);

  return [...lines.slice(0, start), newContent, ...lines.slice(end)].join("\n");
}
