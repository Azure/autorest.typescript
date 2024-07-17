import {
  InterfaceDeclarationStructure,
  Project,
  StructureKind
} from "ts-morph";
import { describe, it, expect, beforeEach } from "vitest";

// Import the Binder class (adjust the path as necessary)
import { addDeclaration } from "./../../../src/framework/declaration.js";
import { resolveReference } from "./../../../src/framework/reference.js";
import { useBinder } from "../../../src/framework/hooks/binder.js";

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

    expect(reference).toBe(interfaceDeclaration.name);
  });

  it("should handle declaration name conflicts", () => {
    const sourceFile = project.createSourceFile("test1.ts", "", {
      overwrite: true
    });
    const model = {
      name: "TestModel",
      properties: [{ name: "foo", type: "string" }]
    };

    const model2 = {
      name: "TestModel",
      properties: [{ name: "bar", type: "number" }]
    };

    const interfaceDeclaration: InterfaceDeclarationStructure = {
      kind: StructureKind.Interface,
      name: model.name,
      properties: model.properties.map((p) => ({ name: p.name, type: p.type }))
    };

    const interfaceDeclaration2: InterfaceDeclarationStructure = {
      kind: StructureKind.Interface,
      name: model2.name,
      properties: model2.properties.map((p) => ({ name: p.name, type: p.type }))
    };

    addDeclaration(sourceFile, interfaceDeclaration, model);
    addDeclaration(sourceFile, interfaceDeclaration2, model2);

    const reference = resolveReference(model, sourceFile);

    expect(reference).toBe(interfaceDeclaration.name);
  });

  it("should handle declaration name conflicts when referenced", () => {
    const sourceFile = project.createSourceFile("test1.ts", "", {
      overwrite: true
    });
    const model = {
      name: "TestModel",
      properties: [{ name: "foo", type: "string" }]
    };

    const model2 = {
      name: "TestModel",
      properties: [{ name: "bar", type: "number" }]
    };

    const interfaceDeclaration: InterfaceDeclarationStructure = {
      kind: StructureKind.Interface,
      name: model.name,
      properties: model.properties.map((p) => ({ name: p.name, type: p.type }))
    };

    const interfaceDeclaration2: InterfaceDeclarationStructure = {
      kind: StructureKind.Interface,
      name: model2.name,
      properties: model2.properties.map((p) => ({ name: p.name, type: p.type }))
    };

    addDeclaration(sourceFile, interfaceDeclaration, model);
    addDeclaration(sourceFile, interfaceDeclaration2, model2);

    const reference = resolveReference(model, sourceFile);
    const reference2 = resolveReference(model2, sourceFile);

    expect(reference).toBe("TestModel");
    expect(reference2).toBe("TestModel_1");
  });

  it("should resolve references across different files with correct imports", () => {
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

    const sourceFile2 = project.createSourceFile("test2.ts", "", {
      overwrite: true
    });

    const model2 = {
      name: "TestModel2",
      properties: [{ name: "baz", type: model }]
    };

    const interfaceDeclaration2: InterfaceDeclarationStructure = {
      kind: StructureKind.Interface,
      name: model2.name,
      properties: model2.properties.map((p) => ({
        name: p.name,
        type: resolveReference(p.type, sourceFile2)
      }))
    };

    const secondModel = addDeclaration(
      sourceFile2,
      interfaceDeclaration2,
      model
    );

    const bazTypeName = secondModel.getProperty("baz")?.getType().getText();

    expect(bazTypeName).toBe(model.name);
  });

  it("should handle import conflicts", () => {
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

    const sourceFile2 = project.createSourceFile("test2.ts", "", {
      overwrite: true
    });

    const model2 = {
      name: "TestModel",
      properties: [{ name: "baz", type: model }]
    };

    const interfaceDeclaration2: InterfaceDeclarationStructure = {
      kind: StructureKind.Interface,
      name: model2.name,
      properties: model2.properties.map((p) => ({
        name: p.name,
        type: resolveReference(p.type, sourceFile2)
      }))
    };

    const secondModel = addDeclaration(
      sourceFile2,
      interfaceDeclaration2,
      model
    );

    const bazTypeName = secondModel.getProperty("baz")?.getType().getText();

    expect(bazTypeName).toBe(model.name);
    const binder = useBinder();
    binder.applyImports();
  });
});
