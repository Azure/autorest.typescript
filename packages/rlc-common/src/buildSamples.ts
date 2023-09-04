import { RLCModel, RLCSampleGroup, File as RLCFile } from "./interfaces";
import { sampleTemplate } from "./static/sampleTemplate";
// @ts-ignore: to fix the handlebars issue
import hbs from "handlebars";

export function buildSamples(model: RLCModel) {
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
