// import {
//   FunctionDeclarationStructure,
//   InterfaceDeclarationStructure,
//   Project,
//   StructureKind
// } from "ts-morph";
// import { describe, it, expect, beforeEach } from "vitest";

// // Import the Binder class (adjust the path as necessary)
// import { addDeclaration } from "./../../../src/framework/declaration.js";
// import { resolveReference } from "./../../../src/framework/reference.js";
// import { useBinder } from "../../../src/framework/hooks/binder.js";

// describe("Binder", () => {
//   let project: Project;

//   beforeEach(() => {
//     project = new Project();
//   });

//   it("should track declarations correctly", () => {
//     const sourceFile = project.createSourceFile("test1.ts", "", {
//       overwrite: true
//     });
//     const model = {
//       name: "TestModel",
//       properties: [{ name: "foo", type: "string" }]
//     };

//     const interfaceDeclaration: InterfaceDeclarationStructure = {
//       kind: StructureKind.Interface,
//       name: model.name,
//       properties: model.properties.map((p) => ({ name: p.name, type: p.type }))
//     };

//     addDeclaration(sourceFile, interfaceDeclaration, model);
//     const reference = resolveReference(model, sourceFile);

//     expect(reference).toBe(interfaceDeclaration.name);
//   });

//   it("should handle declaration name conflicts", () => {
//     const sourceFile = project.createSourceFile("test1.ts", "", {
//       overwrite: true
//     });
//     const model = {
//       name: "TestModel",
//       properties: [{ name: "foo", type: "string" }]
//     };

//     const model2 = {
//       name: "TestModel",
//       properties: [{ name: "bar", type: "number" }]
//     };

//     const interfaceDeclaration: InterfaceDeclarationStructure = {
//       kind: StructureKind.Interface,
//       name: model.name,
//       properties: model.properties.map((p) => ({ name: p.name, type: p.type }))
//     };

//     const interfaceDeclaration2: InterfaceDeclarationStructure = {
//       kind: StructureKind.Interface,
//       name: model2.name,
//       properties: model2.properties.map((p) => ({ name: p.name, type: p.type }))
//     };

//     addDeclaration(sourceFile, interfaceDeclaration, model);
//     addDeclaration(sourceFile, interfaceDeclaration2, model2);

//     const reference = resolveReference(model, sourceFile);

//     expect(reference).toBe(interfaceDeclaration.name);
//   });

//   it("should handle declaration name conflicts when referenced", () => {
//     const sourceFile = project.createSourceFile("test1.ts", "", {
//       overwrite: true
//     });
//     const model = {
//       name: "TestModel",
//       properties: [{ name: "foo", type: "string" }]
//     };

//     const model2 = {
//       name: "TestModel",
//       properties: [{ name: "bar", type: "number" }]
//     };

//     const interfaceDeclaration: InterfaceDeclarationStructure = {
//       kind: StructureKind.Interface,
//       name: model.name,
//       properties: model.properties.map((p) => ({ name: p.name, type: p.type }))
//     };

//     const interfaceDeclaration2: InterfaceDeclarationStructure = {
//       kind: StructureKind.Interface,
//       name: model2.name,
//       properties: model2.properties.map((p) => ({ name: p.name, type: p.type }))
//     };

//     addDeclaration(sourceFile, interfaceDeclaration, model);
//     addDeclaration(sourceFile, interfaceDeclaration2, model2);

//     const reference = resolveReference(model, sourceFile);
//     const reference2 = resolveReference(model2, sourceFile);

//     expect(reference).toBe("TestModel");
//     expect(reference2).toBe("TestModel_1");
//   });

//   it("should defer references to declarations that don't exist", () => {
//     const sourceFile = project.createSourceFile("test1.ts", "", {
//       overwrite: true
//     });
//     const model = {
//       name: "TestModel",
//       properties: [{ name: "foo", type: "string" }]
//     };

//     const modelB = {
//       name: "TestModelB",
//       properties: [{ name: "foo", type: model }]
//     };

//     const interfaceDeclaration: InterfaceDeclarationStructure = {
//       kind: StructureKind.Interface,
//       name: model.name,
//       properties: model.properties.map((p) => ({ name: p.name, type: p.type }))
//     };

//     const interfaceDeclarationB: InterfaceDeclarationStructure = {
//       kind: StructureKind.Interface,
//       name: modelB.name,
//       properties: modelB.properties.map((p) => ({
//         name: p.name,
//         type: resolveReference(p.type, sourceFile)
//       }))
//     };

//     addDeclaration(sourceFile, interfaceDeclaration, model);
//     addDeclaration(sourceFile, interfaceDeclarationB, modelB);

//     const binder = useBinder();
//     binder.applyImports();

//     console.log("// test1.ts");
//     console.log(sourceFile.getFullText());
//   });

//   it("should handle import conflicts", () => {
//     const sourceFile = project.createSourceFile("test1.ts", "", {
//       overwrite: true
//     });
//     const model = {
//       name: "TestModel",
//       properties: [{ name: "foo", type: "string" }]
//     };

//     const modelB = {
//       name: "TestModelB",
//       properties: [{ name: "foo", type: model }]
//     };

//     const interfaceDeclaration: InterfaceDeclarationStructure = {
//       kind: StructureKind.Interface,
//       name: model.name,
//       properties: model.properties.map((p) => ({
//         name: p.name,
//         type: p.type
//       }))
//     };

//     addDeclaration(sourceFile, interfaceDeclaration, model);

//     const interfaceDeclarationB: InterfaceDeclarationStructure = {
//       kind: StructureKind.Interface,
//       name: modelB.name,
//       properties: modelB.properties.map((p) => ({
//         name: p.name,
//         type: resolveReference(p.type, sourceFile)
//       }))
//     };

//     addDeclaration(sourceFile, interfaceDeclarationB, modelB);

//     const sourceFile2 = project.createSourceFile("test2.ts", "", {
//       overwrite: true
//     });

//     const model2 = {
//       name: "TestModel",
//       properties: [{ name: "baz1", type: model }]
//     };

//     const interfaceDeclaration2: InterfaceDeclarationStructure = {
//       kind: StructureKind.Interface,
//       name: model2.name,
//       properties: model2.properties.map((p) => ({
//         name: p.name,
//         type: resolveReference(p.type, sourceFile2)
//       }))
//     };

//     addDeclaration(sourceFile2, interfaceDeclaration2, model2);

//     const sourceFile3 = project.createSourceFile("test3.ts", "", {
//       overwrite: true
//     });

//     const model3 = {
//       name: "LastModel",
//       properties: [
//         { name: "baz2", type: model },
//         { name: "baz3", type: model2 }
//       ]
//     };

//     const interfaceDeclaration3: InterfaceDeclarationStructure = {
//       kind: StructureKind.Interface,
//       name: model3.name,
//       properties: model3.properties.map((p) => ({
//         name: p.name,
//         type: resolveReference(p.type, sourceFile3)
//       }))
//     };

//     addDeclaration(sourceFile3, interfaceDeclaration3, model3);

//     const binder = useBinder();
//     binder.applyImports();

//     const baz3Prop = sourceFile3
//       .getInterface("LastModel")
//       ?.getProperty("baz3")!;

//     const imports = sourceFile3
//       .getImportDeclarations()
//       .flatMap((i) =>
//         i
//           .getNamedImports()
//           .map((i) => i.getAliasNode()?.getText() ?? i.getName())
//       );
//     expect(baz3Prop?.getType().getText()).toBe("TestModel_1");
//     expect(imports).toEqual(["TestModel", "TestModel_1"]);
//     console.log("// test1.ts");
//     console.log(sourceFile.getFullText());
//     console.log("// test2.ts");
//     console.log(sourceFile2.getFullText());
//     console.log("// test3.ts");
//     console.log(sourceFile3.getFullText());
//   });

//   it("should handle non interface types as well", () => {
//     const sourceFile = project.createSourceFile("test1.ts", "", {
//       overwrite: true
//     });

//     const fnObject = {
//       name: "testFn",
//       returnType: "string",
//       body: `console.log("hello world!");`
//     };

//     const funDeclaration: FunctionDeclarationStructure = {
//       kind: StructureKind.Function,
//       name: fnObject.name,
//       returnType: fnObject.returnType,
//       statements: fnObject.body
//     };

//     addDeclaration(sourceFile, funDeclaration, fnObject);

//     const sourceFile2 = project.createSourceFile("test2.ts", "", {
//       overwrite: true
//     });
//     sourceFile2.addStatements(`${resolveReference(fnObject, sourceFile2)}();`);

//     const binder = useBinder();
//     binder.applyImports();

//     console.log("// test1.ts");
//     console.log(sourceFile.getFullText());
//     console.log("// test2.ts");
//     console.log(sourceFile2.getFullText());
//   });
// });

import {
  FunctionDeclarationStructure,
  InterfaceDeclarationStructure,
  Project,
  StructureKind
} from "ts-morph";
import { describe, it, expect, beforeEach } from "vitest";
import { useBinder } from "../../../src/framework/hooks/binder.js";

import { addDeclaration } from "../../../src/framework/declaration.js";
import { resolveReference } from "../../../src/framework/reference.js";

describe("Binder", () => {
  let project: Project;

  beforeEach(() => {
    project = new Project();
  });

  it("should track declarations correctly", () => {
    const sourceFile = project.createSourceFile("test1.ts", "", {
      overwrite: true
    });
    const model = {
      name: "TestModel",
      properties: [{ name: "foo", type: "string" }]
    };

    const interfaceDeclaration: InterfaceDeclarationStructure = {
      kind: StructureKind.Interface,
      name: model.name,
      properties: model.properties.map((p) => ({ name: p.name, type: p.type }))
    };

    addDeclaration(sourceFile, interfaceDeclaration, model);
    const reference = resolveReference(model, sourceFile);

    expect(reference).toBe("TestModel");
    console.log("// test1.ts");
    console.log(sourceFile.getFullText());
    // test1.ts
    // interface TestModel {
    //   foo: string;
    // }
  });

  it("should handle declaration name conflicts", () => {
    const sourceFile = project.createSourceFile("test1.ts", "", {
      overwrite: true
    });
    const model1 = {
      name: "TestModel",
      properties: [{ name: "foo", type: "string" }]
    };
    const model2 = {
      name: "TestModel",
      properties: [{ name: "bar", type: "number" }]
    };

    const interfaceDeclaration1: InterfaceDeclarationStructure = {
      kind: StructureKind.Interface,
      name: model1.name,
      properties: model1.properties.map((p) => ({ name: p.name, type: p.type }))
    };

    const interfaceDeclaration2: InterfaceDeclarationStructure = {
      kind: StructureKind.Interface,
      name: model2.name,
      properties: model2.properties.map((p) => ({ name: p.name, type: p.type }))
    };

    addDeclaration(sourceFile, interfaceDeclaration1, model1);
    addDeclaration(sourceFile, interfaceDeclaration2, model2);

    const reference1 = resolveReference(model1, sourceFile);
    const reference2 = resolveReference(model2, sourceFile);

    expect(reference1).toBe("TestModel");
    expect(reference2).toBe("TestModel_1");

    console.log("// test1.ts");
    console.log(sourceFile.getFullText());

    // test1.ts
    // interface TestModel {
    //   foo: string;
    // }

    // interface TestModel_1 {
    //   bar: number;
    // }
  });

  it("should defer references to declarations that don't exist", () => {
    const sourceFile = project.createSourceFile("test1.ts", "", {
      overwrite: true
    });
    const modelA = {
      name: "TestModelA",
      properties: [{ name: "foo", type: "string" }]
    };
    const modelB = {
      name: "TestModelB",
      properties: [{ name: "foo", type: modelA }]
    };

    const interfaceDeclarationA: InterfaceDeclarationStructure = {
      kind: StructureKind.Interface,
      name: modelA.name,
      properties: modelA.properties.map((p) => ({ name: p.name, type: p.type }))
    };

    const interfaceDeclarationB: InterfaceDeclarationStructure = {
      kind: StructureKind.Interface,
      name: modelB.name,
      properties: modelB.properties.map((p) => ({
        name: p.name,
        type: resolveReference(p.type, sourceFile)
      }))
    };

    addDeclaration(sourceFile, interfaceDeclarationA, modelA);
    addDeclaration(sourceFile, interfaceDeclarationB, modelB);

    const binder = useBinder();
    binder.applyImports();

    const referenceA = resolveReference(modelA, sourceFile);
    const referenceB = resolveReference(modelB, sourceFile);

    expect(referenceA).toBe("TestModelA");
    expect(referenceB).toBe("TestModelB");

    console.log("// test1.ts");
    console.log(sourceFile.getFullText());
    // test1.ts
    // interface TestModelA {
    //   foo: string;
    // }

    // interface TestModelB {
    //   foo: TestModelA;
    // }
  });

  it("should handle import conflicts", () => {
    const sourceFile1 = project.createSourceFile("test1.ts", "", {
      overwrite: true
    });
    const sourceFile2 = project.createSourceFile("test2.ts", "", {
      overwrite: true
    });
    const sourceFile3 = project.createSourceFile("test3.ts", "", {
      overwrite: true
    });

    const model1 = {
      name: "TestModel",
      properties: [{ name: "foo", type: "string" }]
    };
    const model2 = {
      name: "TestModelB",
      properties: [{ name: "bar", type: model1 }]
    };
    const model3 = {
      name: "LastModel",
      properties: [
        { name: "baz", type: model1 },
        { name: "qux", type: model2 }
      ]
    };

    const interfaceDeclaration1: InterfaceDeclarationStructure = {
      kind: StructureKind.Interface,
      name: model1.name,
      properties: model1.properties.map((p) => ({ name: p.name, type: p.type }))
    };

    const interfaceDeclaration2: InterfaceDeclarationStructure = {
      kind: StructureKind.Interface,
      name: model2.name,
      properties: model2.properties.map((p) => ({
        name: p.name,
        type: resolveReference(p.type, sourceFile2)
      }))
    };

    const interfaceDeclaration3: InterfaceDeclarationStructure = {
      kind: StructureKind.Interface,
      name: model3.name,
      properties: model3.properties.map((p) => ({
        name: p.name,
        type: resolveReference(p.type, sourceFile3)
      }))
    };

    addDeclaration(sourceFile1, interfaceDeclaration1, model1);
    addDeclaration(sourceFile2, interfaceDeclaration2, model2);
    addDeclaration(sourceFile3, interfaceDeclaration3, model3);

    const binder = useBinder();
    binder.applyImports();

    const bazProp = sourceFile3.getInterface("LastModel")?.getProperty("baz");
    const quxProp = sourceFile3.getInterface("LastModel")?.getProperty("qux");

    expect(bazProp?.getType().getText()).toBe("TestModel");
    expect(quxProp?.getType().getText()).toBe("TestModelB");

    const imports = sourceFile3
      .getImportDeclarations()
      .flatMap((i) =>
        i
          .getNamedImports()
          .map((n) => n.getAliasNode()?.getText() ?? n.getName())
      );
    expect(imports).toEqual(["TestModel", "TestModelB"]);

    console.log("// test1.ts");
    console.log(sourceFile1.getFullText());
    console.log("// test2.ts");
    console.log(sourceFile2.getFullText());
    console.log("// test3.ts");
    console.log(sourceFile3.getFullText());
    // test1.ts
    // interface TestModel {
    //   foo: string;
    // }

    // // test2.ts
    // import { TestModel } from "./test1";

    // interface TestModelB {
    //   bar: TestModel;
    // }

    // // test3.ts
    // import { TestModel } from "./test1";
    // import { TestModelB } from "./test2";

    // interface LastModel {
    //   baz: TestModel;
    //   qux: TestModelB;
    // }
  });

  it("should handle non-interface types as well", () => {
    const sourceFile1 = project.createSourceFile("test1.ts", "", {
      overwrite: true
    });

    const fnObject = {
      name: "testFn",
      returnType: "string",
      body: `console.log("hello world!");`
    };

    const funDeclaration: FunctionDeclarationStructure = {
      kind: StructureKind.Function,
      name: fnObject.name,
      returnType: fnObject.returnType,
      statements: fnObject.body
    };

    addDeclaration(sourceFile1, funDeclaration, fnObject);

    const sourceFile2 = project.createSourceFile("test2.ts", "", {
      overwrite: true
    });
    sourceFile2.addStatements(`${resolveReference(fnObject, sourceFile2)}();`);

    const binder = useBinder();
    binder.applyImports();

    console.log("// test1.ts");
    console.log(sourceFile1.getFullText());
    console.log("// test2.ts");
    console.log(sourceFile2.getFullText());
    // test1.ts
    // function testFn(): string {
    //   console.log("hello world!");
    // }
    //
    // // test2.ts
    // import { testFn } from "./test1";
    //
    // testFn();
  });

  it("should track and resolve multiple types of declarations", () => {
    const sourceFile = project.createSourceFile("test1.ts", "", {
      overwrite: true
    });
    const model = {
      name: "TestModel",
      properties: [{ name: "foo", type: "string" }]
    };
    const functionModel = {
      name: "TestFunction",
      returnType: "void",
      body: `console.log("Hello World");`
    };

    const interfaceDeclaration: InterfaceDeclarationStructure = {
      kind: StructureKind.Interface,
      name: model.name,
      properties: model.properties.map((p) => ({ name: p.name, type: p.type }))
    };

    const functionDeclaration: FunctionDeclarationStructure = {
      kind: StructureKind.Function,
      name: functionModel.name,
      returnType: functionModel.returnType,
      statements: functionModel.body
    };

    addDeclaration(sourceFile, interfaceDeclaration, model);
    addDeclaration(sourceFile, functionDeclaration, functionModel);

    const reference1 = resolveReference(model, sourceFile);
    const reference2 = resolveReference(functionModel, sourceFile);

    expect(reference1).toBe("TestModel");
    expect(reference2).toBe("TestFunction");
    console.log("// test1.ts");
    console.log(sourceFile.getFullText());
    // test1.ts
    // interface TestModel {
    //   foo: string;
    // }

    // function TestFunction(): void {
    //   console.log("Hello World");
    // }
  });

  it("should handle cyclic references", () => {
    const sourceFile = project.createSourceFile("test1.ts", "", {
      overwrite: true
    });
    const modelA = {
      name: "ModelA",
      properties: [{ name: "propA", type: "ModelB" }]
    };
    const modelB = {
      name: "ModelB",
      properties: [{ name: "propB", type: "ModelA" }]
    };

    const interfaceDeclarationA: InterfaceDeclarationStructure = {
      kind: StructureKind.Interface,
      name: modelA.name,
      properties: modelA.properties.map((p) => ({
        name: p.name,
        type: resolveReference(modelB, sourceFile)
      }))
    };

    const interfaceDeclarationB: InterfaceDeclarationStructure = {
      kind: StructureKind.Interface,
      name: modelB.name,
      properties: modelB.properties.map((p) => ({
        name: p.name,
        type: resolveReference(modelA, sourceFile)
      }))
    };

    addDeclaration(sourceFile, interfaceDeclarationA, modelA);
    addDeclaration(sourceFile, interfaceDeclarationB, modelB);

    const binder = useBinder();
    binder.applyImports();

    const propA = sourceFile.getInterface("ModelA")?.getProperty("propA");
    const propB = sourceFile.getInterface("ModelB")?.getProperty("propB");

    expect(propA?.getType().getText()).toBe("ModelB");
    expect(propB?.getType().getText()).toBe("ModelA");

    console.log("// test1.ts");
    console.log(sourceFile.getFullText());
    // test1.ts
    // interface ModelA {
    //   propA: ModelB;
    // }
    //
    // interface ModelB {
    //   propB: ModelA;
    // }
  });

  it("should handle mixed type declarations and references", () => {
    const sourceFile = project.createSourceFile("test1.ts", "", {
      overwrite: true
    });

    const interfaceModel = {
      name: "MyInterface",
      properties: [{ name: "id", type: "number" }]
    };
    const functionModel = {
      name: "MyFunction",
      returnType: "void",
      body: `console.log("Hello World");`
    };

    const interfaceDeclaration: InterfaceDeclarationStructure = {
      kind: StructureKind.Interface,
      name: interfaceModel.name,
      properties: interfaceModel.properties.map((p) => ({
        name: p.name,
        type: p.type
      }))
    };

    const functionDeclaration: FunctionDeclarationStructure = {
      kind: StructureKind.Function,
      name: functionModel.name,
      returnType: functionModel.returnType,
      statements: functionModel.body
    };

    addDeclaration(sourceFile, interfaceDeclaration, interfaceModel);
    addDeclaration(sourceFile, functionDeclaration, functionModel);

    const sourceFile2 = project.createSourceFile("test2.ts", "", {
      overwrite: true
    });
    sourceFile2.addStatements(
      `${resolveReference(functionModel, sourceFile2)}();`
    );
    sourceFile2.addStatements(
      `let obj: ${resolveReference(interfaceModel, sourceFile2)} = { id: 1 };`
    );

    const binder = useBinder();
    binder.applyImports();

    console.log("// test1.ts");
    console.log(sourceFile.getFullText());
    console.log("// test2.ts");
    console.log(sourceFile2.getFullText());
    // test1.ts
    // interface MyInterface {
    //   id: number;
    // }

    // function MyFunction(): void {
    //   console.log("Hello World");
    // }

    // // test2.ts
    // import { MyFunction, MyInterface } from "./test1";

    // MyFunction();
    // let obj: MyInterface = { id: 1 };
  });
});
