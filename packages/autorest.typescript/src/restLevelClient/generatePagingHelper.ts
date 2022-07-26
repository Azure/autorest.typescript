import { readFileSync } from "fs";
import { getAutorestOptions, getSession } from "../autorestSession";
import { extractPaginationDetails } from "../utils/extractPaginationDetails";
import * as path from "path";
import * as hbs from "handlebars";
import { Project } from "ts-morph";

interface PagingDetails {
  itemNames: string[];
  nextLinkNames: string[];
  isComplexPaging: boolean;
}

export function generatePagingHelper(project: Project) {
  const pagingInfo = getPagingInfo();
  let file: string = "";

  file = readFileSync(path.join(__dirname, "paginateHelper.ts.hbs"), {
    encoding: "utf-8"
  });

  hbs.registerHelper("quoteWrap", function(
    value: string | number | boolean | string[]
  ) {
    if (Array.isArray(value)) {
      return value.map(element => `"${element}"`).join();
    }

    return `"${value}"`;
  });

  const { srcPath } = getAutorestOptions();
  const readmeFileContents = hbs.compile(file, { noEscape: true });
  project.createSourceFile(
    path.join(srcPath, "paginateHelper.ts"),
    readmeFileContents(pagingInfo),
    {
      overwrite: true
    }
  );
}

function getPagingInfo(): PagingDetails {
  const { model } = getSession();
  const nextLinks = new Set<string>();
  const itemNames = new Set<string>();
  // Add default values
  nextLinks.add("nextLink");
  itemNames.add("value");
  for (let operationGroup of model.operationGroups) {
    for (let operation of operationGroup.operations) {
      const paginationDetails = extractPaginationDetails(operation);
      if (paginationDetails) {
        const { nextLinkName, itemName } = paginationDetails;
        nextLinkName && nextLinks.add(`${nextLinkName}`);
        itemName && itemNames.add(`${itemName}`);
      }
    }
  }

  // If there are more than one options for nextLink and item names we need to generate a
  // more complex pagination helper.
  const isComplexPaging = nextLinks.size > 1 || itemNames.size > 1;
  return {
    itemNames: [...itemNames],
    nextLinkNames: [...nextLinks],
    isComplexPaging
  };
}
