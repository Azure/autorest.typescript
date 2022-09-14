import { RLCModel } from "./interfaces.js";
import { readFileSync } from "fs";
import * as path from "path";
import * as hbs from "handlebars";

export function buildPaginateHelper(model: RLCModel) {
  const pagingInfo = model.pageInfo;
  // return directly if paging info
  if (!pagingInfo || pagingInfo.hasPaging !== true || !pagingInfo.pageDetails) {
    return;
  }
  let file: string = readFileSync(
    path.join(__dirname, "static", "paginateHelper.ts.hbs"),
    {
      encoding: "utf-8"
    }
  );

  hbs.registerHelper(
    "quoteWrap",
    function (value: string | number | boolean | string[]) {
      if (Array.isArray(value)) {
        return value.map((element) => `"${element}"`).join();
      }

      return `"${value}"`;
    }
  );

  const { srcPath } = model;
  const paginateHelperContents = hbs.compile(file, { noEscape: true });
  return {
    path: path.join(srcPath, "paginateHelper.ts"),
    content: paginateHelperContents(pagingInfo.pageDetails)
  };
}
