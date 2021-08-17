import { readFileSync } from "fs";
import { getSession } from "../autorestSession";
import { PaginationDetails } from "../models/operationDetails";
import { extractPaginationDetails } from "../utils/extractPaginationDetails";
import * as path from "path";
import * as hbs from "handlebars";
import { Project } from "ts-morph";
import { isEqual, uniqWith } from "lodash";

interface PaginationTemplateModel {
  itemName?: string;
  nextLinkName?: string;
}

export function generatePagingHelper(project: Project) {
  const paginationDetails = getPagingInfo();
  if (!paginationDetails) {
    return;
  }

  const file = readFileSync(path.join(__dirname, "paging.ts.hbs"), {
    encoding: "utf-8"
  });

  // Setup a helper to check if an object is defined. This is to be used in the
  // Handlebars template
  hbs.registerHelper("isDefined", function(value) {
    return value !== undefined;
  });

  let templateModel: PaginationTemplateModel = {};

  if (paginationDetails.length === 1) {
    templateModel = {
      itemName: `"${paginationDetails[0].itemName}"`,
      nextLinkName: `"${paginationDetails[0].nextLinkName}"`
    };
  } else {
    const itemNames = new Set<string>(
      paginationDetails.map(detalils => `"${detalils.itemName}"`)
    );
    const nextLinkNames = new Set<string>(
      paginationDetails
        .filter(d => Boolean(d.nextLinkName))
        .map(detalils => `"${detalils.nextLinkName}"`)
    );
    templateModel = {
      itemName: [...itemNames].join(","),
      nextLinkName: [...nextLinkNames].join(",")
    };
  }

  const readmeFileContents = hbs.compile(file, { noEscape: true });
  project.createSourceFile(
    "src/paginateHelper.ts",
    readmeFileContents(templateModel),
    {
      overwrite: true
    }
  );
}

function getPagingInfo(): PaginationDetails[] | undefined {
  const { model } = getSession();
  let details: PaginationDetails[] | undefined;
  for (let operationGroup of model.operationGroups) {
    for (let operation of operationGroup.operations) {
      const paginationDetails = extractPaginationDetails(operation);
      if (paginationDetails) {
        details = details || [];
        const { nextLinkName, itemName } = paginationDetails;
        details.push({
          nextLinkName,
          itemName,
          itemTypes: [],
          isNextLinkMethod: false
        });
      }
    }
  }

  details = uniqWith(details, isEqual);

  return details;
}
