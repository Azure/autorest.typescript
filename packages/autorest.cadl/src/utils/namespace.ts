import { CadlProgram } from "../interfaces";

export function getNamespace(program: CadlProgram) {
  return `namespace ${program.serviceInformation.name.replace(/ /g, "")};`;
}
