import { readFileSync } from "fs";
import { getSession } from "../autorestSession";
import { extractPaginationDetails } from "../utils/extractPaginationDetails";
import * as path from "path";
import * as hbs from "handlebars";
import { Project } from "ts-morph";

interface PagingDetails {
  itemNames: string[];
  nextLinkNames: string[];
}

export function generatePagingHelper(project: Project) {
  const { nextLinkNames, itemNames } = getPagingInfo();

  const file = readFileSync(path.join(__dirname, "paging.ts.hbs"), {
    encoding: "utf-8"
  });

  const templateModel: PagingDetails = {
    itemNames,
    nextLinkNames
  };

  const readmeFileContents = hbs.compile(file, { noEscape: true });
  project.createSourceFile(
    "src/paginateHelper.ts",
    readmeFileContents(templateModel),
    {
      overwrite: true
    }
  );
}

function getPagingInfo(): PagingDetails {
  const { model } = getSession();
  let nextLinks = new Set<string>();
  let itemNames = new Set<string>();
  for (let operationGroup of model.operationGroups) {
    for (let operation of operationGroup.operations) {
      const paginationDetails = extractPaginationDetails(operation);
      if (paginationDetails) {
        const { nextLinkName, itemName } = paginationDetails;
        nextLinkName && nextLinks.add(`"${nextLinkName}"`);
        itemName && itemNames.add(`"${itemName}"`);
      }
    }
  }

  return { itemNames: [...itemNames], nextLinkNames: [...nextLinks] };
}
