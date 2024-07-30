import { assert } from "chai";
import { InterfaceDeclaration, SourceFile, SyntaxKind } from "ts-morph";

export function assertGetInterfaceDeclaration(
  sourceFile: SourceFile,
  name: string
): InterfaceDeclaration {
  const interfaceDeclaration = sourceFile.getInterface(name);
  assert(interfaceDeclaration, `Interface ${name} not found`);
  return interfaceDeclaration;
}

export function assertGetFunctionDeclaration(
  sourceFile: SourceFile,
  name: string
) {
  const functionDeclaration = sourceFile.getFunction(name);
  assert(functionDeclaration, `Function ${name} not found`);
  return functionDeclaration;
}

export function assertGetInterfaceProperty(
  interfaceDeclaration: InterfaceDeclaration,
  name: string
) {
  const property = interfaceDeclaration.getProperty(name);
  assert(property, `Property ${name} not found`);
  return property;
}

export function assertGetImportStatements(
  sourceFile: SourceFile,
  moduleName: string
) {
  const importStatements = sourceFile.getImportDeclarations();
  const importStatement = importStatements.find((importStatement) =>
    importStatement.getModuleSpecifierValue().includes(moduleName)
  );
  assert(importStatement, `Import statement for ${moduleName} not found`);
  return importStatement;
}

export function assertGetVariableDeclaration(
  sourceFile: SourceFile,
  name: string
) {
  const variableDeclaration = sourceFile.getVariableStatement(name);
  assert(variableDeclaration, `Variable ${name} not found`);
  return variableDeclaration;
}
