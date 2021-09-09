import { promises as fs } from "fs";
import * as path from "path";
import { uniqWith, isEqual, flatten, isWeakMap } from "lodash";

async function getSwaggers(directory: string, results: string[] = []) {
  const contents = await fs.readdir(directory);
  for (const file of contents) {
    if (!file) {
      continue;
    }
    const resolvedFile = path.resolve(directory, file);
    const fileStats = await fs.stat(resolvedFile);
    if (fileStats.isDirectory()) {
      await getSwaggers(resolvedFile, results);
    } else {
      results.push(resolvedFile);
    }
  }

  return results.filter(f => f.endsWith(".json"));
}

interface PagingExtension {
  itemName?: string;
  nextLinkName?: string;
  operationName?: string;
}

function hasMultiplePaging(file: string) {
  let json: any;
  try {
    json = require(file);
  } catch (e) {
    console.error(`Failed loading ${file}`);
    return false;
  }

  const paths = json.paths;

  if (!paths) {
    return false;
  }

  const pagingExtensions: PagingExtension[] = [];

  for (const path in paths) {
    const operations = paths[path];
    for (const operation in operations) {
      const pagingExtension: PagingExtension =
        operations[operation]["x-ms-pageable"];
      if (
        pagingExtension &&
        !isEqual(pagingExtension, {
          nextLinkName: null
        })
      ) {
        pagingExtensions.push(pagingExtension);
      }
    }
  }

  const uniqueExtensions = uniqWith(pagingExtensions, isEqual);

  return uniqueExtensions.length > 1;
}

function hasNextOperation(file: string) {
  let json: any;
  try {
    json = require(file);
  } catch (e) {
    console.error(`Failed loading ${file}`);
    return false;
  }

  const paths = json.paths;

  if (!paths) {
    return false;
  }

  const pagingExtensions: PagingExtension[] = [];

  for (const path in paths) {
    const operations = paths[path];
    for (const operation in operations) {
      const pagingExtension: PagingExtension =
        operations[operation]["x-ms-pageable"];
      if (pagingExtension?.operationName) {
        pagingExtensions.push(pagingExtension);
      }
    }
  }

  const uniqueExtensions = uniqWith(pagingExtensions, isEqual);

  return uniqueExtensions.length > 1;
}

async function countPagingExtensions(path: string) {
  // console.time("Discover");
  // const swaggers = await getSwaggers(path);
  // fs.writeFile("allSwaggers.json", JSON.stringify(swaggers));
  // console.timeEnd("Discover");
  const nested: any = require("./allSwaggers.json");
  const swaggers: string[] = flatten(nested);
  console.time("Process");
  const multiplePaging = swaggers.filter(f => hasMultiplePaging(f));
  console.timeEnd("Process");

  console.time("ProcessNextOperation");
  const nextOperation = swaggers.filter(f => hasNextOperation(f));
  console.timeEnd("ProcessNextOperation");
  console.log(`Total Swaggers: ${swaggers.length}`);
  console.log(`Swaggers with multiple paging: ${multiplePaging.length}`);
  console.log(`Swaggers with NextOperation paging: ${nextOperation.length}`);
  fs.writeFile("multipagingSwaggers.json", JSON.stringify(multiplePaging));
}

countPagingExtensions("./.tmp").catch(console.error);
