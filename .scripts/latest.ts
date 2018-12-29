import { changeClonedDependenciesTo } from "@ts-common/azure-js-dev-tools";
import { dependenciesOptions } from "./dependenciesOptions";

changeClonedDependenciesTo(__dirname, "latest", dependenciesOptions); 