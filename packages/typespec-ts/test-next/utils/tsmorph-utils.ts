import { assert } from "chai";
import exp from "constants";
import {
  FunctionDeclaration,
  InterfaceDeclaration,
  SourceFile,
  TypeAliasDeclaration
} from "ts-morph";

export function assertGetInterfaceDeclaration(
  sourceFile: SourceFile,
  name: string
): InterfaceDeclaration {
  const interfaceDeclaration = sourceFile.getInterface(name);
  assert(interfaceDeclaration, `Interface ${name} not found`);
  return interfaceDeclaration;
}

export function assertGetTypealiasDeclaration(
  sourceFile: SourceFile,
  name: string
): TypeAliasDeclaration {
  const typeAliasDeclaration = sourceFile.getTypeAlias(name);
  assert(typeAliasDeclaration, `Type alias ${name} not found`);
  return typeAliasDeclaration;
}

export function assertGetFunctionDeclaration(
  sourceFile: SourceFile,
  name: string
) {
  const functionDeclaration = sourceFile.getFunction(name);
  assert(functionDeclaration, `Function ${name} not found`);
  return functionDeclaration;
}

export function assertGetFunctionParameter(
  functionDeclaration: FunctionDeclaration,
  name: string
) {
  const parameter = functionDeclaration.getParameter(name);
  assert(parameter, `Parameter ${name} not found`);
  return parameter;
}

export function assertGetFunctionReturnType(
  functionDeclaration: FunctionDeclaration,
  expected: string
) {
  const returnType = functionDeclaration.getReturnType().getText();
  assert.equal(returnType, expected);
}

export function assertGetStatement(sourceFile: SourceFile, expected: string) {
  const statement = sourceFile
    .getStatements()
    .find((statement) => statement.getText() === expected);

  assert(statement, `Statement \`${expected}\` not found`);
  return statement;
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
