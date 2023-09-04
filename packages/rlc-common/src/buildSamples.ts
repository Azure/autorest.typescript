import { RLCModel, RLCSampleGroup, File as RLCFile } from "./interfaces";
import { sampleTemplate } from "./static/sampleTemplate";
// @ts-ignore: to fix the handlebars issue
import hbs from "handlebars";

export function buildSamples(model: RLCModel) {
  if (!model.options || !model.options.packageDetails) {
    return;
  }
  let { generateSample } = model.options;
  generateSample =
    generateSample === true ||
    (generateSample === undefined && (model.sampleGroups ?? []).length > 0);
  if (generateSample) {
    return;
  }
  const sampleGroups: RLCSampleGroup[] | undefined = model.sampleGroups;
  if (!sampleGroups || sampleGroups.length === 0) {
    return;
  }
  const sampleFiles: RLCFile[] = [];
  for (const sampleGroup of sampleGroups) {
    const sampleGroupFileContents = hbs.compile(sampleTemplate, {
      noEscape: true
    });
    sampleFiles.push({
      path: `samples-dev/${sampleGroup.filename}.ts`,
      content: sampleGroupFileContents(sampleGroup)
    });
  }
  return sampleFiles;
}

export function buildSamplesOnFakeContent(model: RLCModel) {
  // TODO: build samples based model with fake values
  return [];
}
