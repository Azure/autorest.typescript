import {
  SourceFile,
  ClassDeclarationStructure,
  EnumDeclarationStructure,
  FunctionDeclarationStructure,
  InterfaceDeclarationStructure,
  TypeAliasDeclarationStructure,
  StatementStructures,
  StructureKind,
  ClassDeclaration,
  EnumDeclaration,
  FunctionDeclaration,
  InterfaceDeclaration,
  TypeAliasDeclaration
} from "ts-morph";
import { useBinder } from "./hooks/binder.js";
import { refkey as getRefKey } from "./refkey.js";
import { enqueueStatement } from "./sourceFileBatch.js";
export type DeclarationStructures =
  | ClassDeclarationStructure
  | EnumDeclarationStructure
  | FunctionDeclarationStructure
  | InterfaceDeclarationStructure
  | TypeAliasDeclarationStructure;

export type Declarations =
  | ClassDeclaration
  | EnumDeclaration
  | FunctionDeclaration
  | InterfaceDeclaration
  | TypeAliasDeclaration;

export function addDeclaration(
  sourceFile: SourceFile,
  declaration: ClassDeclarationStructure,
  refkey: unknown
): void;

export function addDeclaration(
  sourceFile: SourceFile,
  declaration: EnumDeclarationStructure,
  refkey: unknown
): void;

export function addDeclaration(
  sourceFile: SourceFile,
  declaration: FunctionDeclarationStructure,
  refkey: unknown
): void;

export function addDeclaration(
  sourceFile: SourceFile,
  declaration: InterfaceDeclarationStructure,
  refkey: unknown
): void;

export function addDeclaration(
  sourceFile: SourceFile,
  declaration: TypeAliasDeclarationStructure,
  refkey: unknown
): void;
export function addDeclaration(
  sourceFile: SourceFile,
  declaration: string,
  refkey: unknown
): void;
export function addDeclaration(
  sourceFile: SourceFile,
  input: DeclarationStructures | string,
  refkey: unknown
): void {
  const binder = useBinder();
  const declaration: DeclarationStructures =
    typeof input === "string"
      ? ({ name: input, kind: StructureKind.TypeAlias } as any)
      : input;
  if (!declaration.name) {
    throw new Error(
      `Declaration must have a name ${JSON.stringify(declaration)}`
    );
  }

  const stringRefkey = typeof refkey === "string" ? refkey : getRefKey(refkey);
  const trackedDeclarationName = binder.trackDeclaration(
    stringRefkey,
    declaration.name,
    sourceFile
  );

  // Update the declaration name to be unique
  const trackedDeclaration = { ...declaration, name: trackedDeclarationName };

  // Skip empty type aliases (they have no body to emit). Done before
  // dispatching so behaviour is identical whether batching or not.
  if (
    trackedDeclaration.kind === StructureKind.TypeAlias &&
    !trackedDeclaration.type
  ) {
    return;
  }

  enqueueStatement(sourceFile, trackedDeclaration as StatementStructures);
}
