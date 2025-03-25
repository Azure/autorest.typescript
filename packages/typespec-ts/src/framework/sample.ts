import {
  Project,
  StructureKind,
  InterfaceDeclarationStructure,
  FunctionDeclarationStructure
} from "ts-morph";
import { useBinder } from "./hooks/binder.js";
import { addDeclaration } from "./declaration.js";
import { resolveReference } from "./reference.js";

// Create a new ts-morph project
const project = new Project();

// Create a source file
const sourceFile = project.createSourceFile("test.ts", "", { overwrite: true });

// Initialize the binder
const binder = useBinder();

// Define an interface model. In practice this would be a type object (e.g. from TypeSpec, TCGC, modelerfour, etc.)
// At this framework level, we're just using a simple object, there is no coupling with the actual type system, but this is flexible so any object can be used.
const modelType = {
  name: "MyInterface",
  properties: [{ name: "id", type: "number" }]
};

// Define a function model
const functionType = {
  name: "MyFunction",
  returnType: "void",
  body: `console.log("Hello World");`
};

// Create an interface declaration structure. This illustrates a similar pattern to the one used in the emitter. Transorming a model into a structure for ts-morph.
const interfaceDeclaration: InterfaceDeclarationStructure = {
  kind: StructureKind.Interface,
  name: modelType.name,
  properties: modelType.properties.map((p) => ({
    name: p.name,
    type: p.type
  }))
};

// Create a function declaration structure
const functionDeclaration: FunctionDeclarationStructure = {
  kind: StructureKind.Function,
  name: functionType.name,
  returnType: functionType.returnType,
  statements: functionType.body
};

// Helper functions to add the declarations to the source file. These are needed to be able to leverage the binder to track the declarations.
// We'll be moving from sourceFile.addInterface(interfaceDeclaration) to addDeclaration(sourceFile, interfaceDeclaration, interfaceModel)
addDeclaration(sourceFile, interfaceDeclaration, modelType);
addDeclaration(sourceFile, functionDeclaration, functionType);

// Create another source file
const sourceFile2 = project.createSourceFile("test2.ts", "", {
  overwrite: true
});

// Add statements referencing the tracked declarations
const functionReference = resolveReference(functionType);
const modelReference = resolveReference(modelType);

sourceFile2.addStatements(`${functionReference}();`);
sourceFile2.addStatements(`let obj: ${modelReference} = { id: 1 };`);

// Apply imports to ensure correct references
binder.resolveAllReferences("/modularPackageFolder/src");

// Output the generated files
// eslint-disable-next-line no-console
console.log("// test.ts");
// eslint-disable-next-line no-console
console.log(sourceFile.getFullText());
// eslint-disable-next-line no-console
console.log("// test2.ts");
// eslint-disable-next-line no-console
console.log(sourceFile2.getFullText());

// Output
// test.ts
// interface MyInterface {
//     id: number;
// }

// function MyFunction(): void {
//     console.log("Hello World");
// }

// // test2.ts
// import { MyFunction, MyInterface } from "./test";

// MyFunction();
// let obj: MyInterface = { id: 1 };
