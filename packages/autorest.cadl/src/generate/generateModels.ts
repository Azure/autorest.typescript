import { CadlEnum } from "../interfaces";
import { generateEnums } from "../generate/generateEnums";
// import { createWriteStream, WriteStream } from "fs";

// export function generateModels(model: CadlProgram) {
//   const stream = createWriteStream("models.ts");
//   // writeEnums(stream, model.models.enums);
// }

export function writeEnums(enums: CadlEnum[]) {
  return enums.reduce<string[]>((a, c) => {
    return [...a, ...generateEnums(c)];
  }, []);
}
