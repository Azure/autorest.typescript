import {
  FunctionDeclarationStructure,
  InterfaceDeclarationStructure,
  Project,
  StructureKind
} from "ts-morph";
import { describe, it, expect, beforeEach, assert } from "vitest";
import {
  useBinder,
  provideBinder,
  Binder
} from "../../../src/framework/hooks/binder.js";

import { addDeclaration } from "../../../src/framework/declaration.js";
import { resolveReference } from "../../../src/framework/reference.js";
import {
  assertGetFunctionDeclaration,
  assertGetImportStatements,
  assertGetInterfaceDeclaration,
  assertGetInterfaceProperty,
  assertGetVariableDeclaration
} from "../../utils/tsmorph-utils.js";
import { useDependencies } from "../../../src/framework/hooks/useDependencies.js";
import { ExternalDependencies } from "../../../src/framework/dependency.js";

describe("Binder", () => {
  let project: Project;
  let binder: Binder;
  let Dependencies: ExternalDependencies;

  beforeEach(() => {
    project = new Project();
    provideBinder(project);
    binder = useBinder();
    Dependencies = useDependencies();
  });

  describe("External Dependencies Override", () => {
    beforeEach(() => {
      const customDependencies = {
        ClientOptions: {
          kind: "externalDependency",
          name: "ClientOptions",
          module: "@azure-rest/core-client"
        }
      };
      provideBinder(project, { dependencies: customDependencies });
      binder = useBinder();
      Dependencies = useDependencies();
    });

    it("should track declarations and dependencies correctly", () => {
      const sourceFile = project.createSourceFile("test1.ts", "", {
        overwrite: true
      });
      const model = {
        name: "Client",
        properties: [
          { name: "foo", type: resolveReference(Dependencies.Client) },
          {
            name: "bar",
            type: resolveReference(Dependencies.ClientOptions)
          }
        ]
      };

      const interfaceDeclaration: InterfaceDeclarationStructure = {
        kind: StructureKind.Interface,
        name: model.name,
        properties: model.properties.map((p) => ({
          name: p.name,
          type: p.type
        }))
      };

      addDeclaration(sourceFile, interfaceDeclaration, model);
      binder.resolveAllReferences();

      const ifaceDeclaration = assertGetInterfaceDeclaration(
        sourceFile,
        "Client"
      );
      const fooProperty = assertGetInterfaceProperty(ifaceDeclaration, "foo");
      const barProperty = assertGetInterfaceProperty(ifaceDeclaration, "bar");

      expect(fooProperty.getText()).toBe("foo: Client_1;");
      expect(barProperty.getText()).toBe("bar: ClientOptions;");

      const customImport = assertGetImportStatements(
        sourceFile,
        "@azure-rest/core-client"
      );
      const defaultImport = assertGetImportStatements(
        sourceFile,
        "@typespec/ts-http-runtime"
      );

      expect(customImport.getNamedImports()[0].getName()).equal(
        "ClientOptions"
      );

      expect(defaultImport.getNamedImports()[0].getName()).equal("Client");

      console.log("// test1.ts");
      console.log(sourceFile.getFullText());
      // test1.ts
      // interface Client {
      //   foo: Client_1;
      // }
    });
  });

  describe("External Dependencies", () => {
    it("should track declarations and dependencies correctly", () => {
      const sourceFile = project.createSourceFile("test1.ts", "", {
        overwrite: true
      });
      const model = {
        name: "Client",
        properties: [
          { name: "foo", type: resolveReference(Dependencies.Client) },
          {
            name: "bar",
            type: resolveReference(Dependencies.ClientOptions)
          }
        ]
      };

      const interfaceDeclaration: InterfaceDeclarationStructure = {
        kind: StructureKind.Interface,
        name: model.name,
        properties: model.properties.map((p) => ({
          name: p.name,
          type: p.type
        }))
      };

      addDeclaration(sourceFile, interfaceDeclaration, model);
      binder.resolveAllReferences();

      const ifaceDeclaration = assertGetInterfaceDeclaration(
        sourceFile,
        "Client"
      );
      const fooProperty = assertGetInterfaceProperty(ifaceDeclaration, "foo");
      const barProperty = assertGetInterfaceProperty(ifaceDeclaration, "bar");

      expect(fooProperty.getText()).toBe("foo: Client_1;");
      expect(barProperty.getText()).toBe("bar: ClientOptions;");

      const defaultImport = assertGetImportStatements(
        sourceFile,
        "@typespec/ts-http-runtime"
      );

      expect(
        defaultImport
          .getNamedImports()
          .map((i) => i.getAliasNode()?.getText() ?? i.getName())
      ).to.deep.equal(["Client_1", "ClientOptions"]);

      console.log("// test1.ts");
      console.log(sourceFile.getFullText());
      // test1.ts
      // interface Client {
      //   foo: Client_1;
      // }
    });

    it("should handle name collision with external dependency", () => {
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
        properties: model.properties.map((p) => ({
          name: p.name,
          type: resolveReference(Dependencies.Client)
        }))
      };

      addDeclaration(sourceFile, interfaceDeclaration, model);
      binder.resolveAllReferences();

      const ifaceDeclaration = assertGetInterfaceDeclaration(
        sourceFile,
        "TestModel"
      );
      const fooProperty = assertGetInterfaceProperty(ifaceDeclaration, "foo");

      expect(fooProperty.getText()).toBe("foo: Client;");

      console.log("// test1.ts");
      console.log(sourceFile.getFullText());
      // test1.ts
      // interface TestModel {
      //   foo: Client;
      // }
    });
  });

  describe("Declarations", () => {
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
        properties: model.properties.map((p) => ({
          name: p.name,
          type: p.type
        }))
      };

      addDeclaration(sourceFile, interfaceDeclaration, model);
      binder.resolveAllReferences();

      assertGetInterfaceDeclaration(sourceFile, "TestModel");

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
        properties: model1.properties.map((p) => ({
          name: p.name,
          type: p.type
        }))
      };

      const interfaceDeclaration2: InterfaceDeclarationStructure = {
        kind: StructureKind.Interface,
        name: model2.name,
        properties: model2.properties.map((p) => ({
          name: p.name,
          type: p.type
        }))
      };

      addDeclaration(sourceFile, interfaceDeclaration1, model1);
      addDeclaration(sourceFile, interfaceDeclaration2, model2);
      binder.resolveAllReferences();

      assertGetInterfaceDeclaration(sourceFile, "TestModel");
      assertGetInterfaceDeclaration(sourceFile, "TestModel_1");

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
        properties: modelA.properties.map((p) => ({
          name: p.name,
          type: p.type
        }))
      };

      const interfaceDeclarationB: InterfaceDeclarationStructure = {
        kind: StructureKind.Interface,
        name: modelB.name,
        properties: modelB.properties.map((p) => ({
          name: p.name,
          type: resolveReference(p.type)
        }))
      };

      addDeclaration(sourceFile, interfaceDeclarationA, modelA);
      addDeclaration(sourceFile, interfaceDeclarationB, modelB);
      binder.resolveAllReferences();

      assertGetInterfaceDeclaration(sourceFile, "TestModelA");
      const modelBInterface = assertGetInterfaceDeclaration(
        sourceFile,
        "TestModelB"
      );

      const fooProp = assertGetInterfaceProperty(modelBInterface, "foo");

      assert.equal(fooProp.getText(), "foo: TestModelA;");

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
        properties: model1.properties.map((p) => ({
          name: p.name,
          type: p.type
        }))
      };

      const interfaceDeclaration2: InterfaceDeclarationStructure = {
        kind: StructureKind.Interface,
        name: model2.name,
        properties: model2.properties.map((p) => ({
          name: p.name,
          type: resolveReference(p.type)
        }))
      };

      const interfaceDeclaration3: InterfaceDeclarationStructure = {
        kind: StructureKind.Interface,
        name: model3.name,
        properties: model3.properties.map((p) => ({
          name: p.name,
          type: resolveReference(p.type)
        }))
      };

      addDeclaration(sourceFile1, interfaceDeclaration1, model1);
      addDeclaration(sourceFile2, interfaceDeclaration2, model2);
      addDeclaration(sourceFile3, interfaceDeclaration3, model3);

      binder.resolveAllReferences();

      const lasModelInterface = assertGetInterfaceDeclaration(
        sourceFile3,
        "LastModel"
      );

      const bazProp = assertGetInterfaceProperty(lasModelInterface, "baz");
      const quxProp = assertGetInterfaceProperty(lasModelInterface, "qux");

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
      sourceFile2.addStatements(`${resolveReference(fnObject)}();`);

      const binder = useBinder();
      binder.resolveAllReferences();

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
        properties: model.properties.map((p) => ({
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

      addDeclaration(sourceFile, interfaceDeclaration, model);
      addDeclaration(sourceFile, functionDeclaration, functionModel);

      binder.resolveAllReferences();

      assertGetInterfaceDeclaration(sourceFile, "TestModel");
      assertGetFunctionDeclaration(sourceFile, "TestFunction");
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
          type: resolveReference(modelB)
        }))
      };

      const interfaceDeclarationB: InterfaceDeclarationStructure = {
        kind: StructureKind.Interface,
        name: modelB.name,
        properties: modelB.properties.map((p) => ({
          name: p.name,
          type: resolveReference(modelA)
        }))
      };

      addDeclaration(sourceFile, interfaceDeclarationA, modelA);
      addDeclaration(sourceFile, interfaceDeclarationB, modelB);

      const binder = useBinder();
      binder.resolveAllReferences();

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
      sourceFile2.addStatements(`${resolveReference(functionModel)}();`);
      sourceFile2.addStatements(
        `let obj: ${resolveReference(interfaceModel)} = { id: 1 };`
      );

      const binder = useBinder();
      binder.resolveAllReferences();

      const variableDeclaration = assertGetVariableDeclaration(
        sourceFile2,
        "obj"
      );
      assert.equal(
        variableDeclaration.getText(),
        "let obj: MyInterface = { id: 1 };"
      );

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

    it("should defer references to declarations that don't exist", () => {
      const sourceFile = project.createSourceFile("test1.ts", "", {
        overwrite: true
      });
      const model = {
        name: "TestModel",
        properties: [{ name: "foo", type: "string" }]
      };

      const modelB = {
        name: "TestModelB",
        properties: [{ name: "foo", type: model }]
      };

      const interfaceDeclaration: InterfaceDeclarationStructure = {
        kind: StructureKind.Interface,
        name: model.name,
        properties: model.properties.map((p) => ({
          name: p.name,
          type: p.type
        }))
      };

      const interfaceDeclarationB: InterfaceDeclarationStructure = {
        kind: StructureKind.Interface,
        name: modelB.name,
        properties: modelB.properties.map((p) => ({
          name: p.name,
          type: resolveReference(p.type)
        }))
      };

      addDeclaration(sourceFile, interfaceDeclaration, model);
      addDeclaration(sourceFile, interfaceDeclarationB, modelB);

      const binder = useBinder();
      binder.resolveAllReferences();

      assertGetInterfaceDeclaration(sourceFile, "TestModel");
      const modelBInterface = assertGetInterfaceDeclaration(
        sourceFile,
        "TestModelB"
      );

      const fooProp = assertGetInterfaceProperty(modelBInterface, "foo");

      assert.equal(fooProp.getText(), "foo: TestModel;");

      console.log("// test1.ts");
      console.log(sourceFile.getFullText());
      // test1.ts
      // interface TestModel {
      //   foo: string;
      // }

      // interface TestModelB {
      //   foo: TestModel;
      // }
    });
  });
});
