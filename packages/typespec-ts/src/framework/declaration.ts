import {
  SourceFile,
  ClassDeclarationStructure,
  EnumDeclarationStructure,
  FunctionDeclarationStructure,
  InterfaceDeclarationStructure,
  TypeAliasDeclarationStructure,
  StructureKind,
  ClassDeclaration,
  EnumDeclaration,
  FunctionDeclaration,
  InterfaceDeclaration,
  TypeAliasDeclaration
} from "ts-morph";
import { useBinder } from "./hooks/binder.js";
import { refkey as getRefKey } from "./refkey.js";
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
): ClassDeclaration;

export function addDeclaration(
  sourceFile: SourceFile,
  declaration: EnumDeclarationStructure,
  refkey: unknown
): EnumDeclaration;

export function addDeclaration(
  sourceFile: SourceFile,
  declaration: FunctionDeclarationStructure,
  refkey: unknown
): FunctionDeclaration;

export function addDeclaration(
  sourceFile: SourceFile,
  declaration: InterfaceDeclarationStructure,
  refkey: unknown
): InterfaceDeclaration;

export function addDeclaration(
  sourceFile: SourceFile,
  declaration: TypeAliasDeclarationStructure,
  refkey: unknown
): TypeAliasDeclaration;
export function addDeclaration(
  sourceFile: SourceFile,
  declaration: DeclarationStructures,
  refkey: unknown
): Declarations {
  const binder = useBinder();

  if (!declaration.name) {
    throw new Error(
      `Declaration must have a name ${JSON.stringify(declaration)}`
    );
  }

  const stringRefkey = typeof refkey === "string" ? refkey : getRefKey(refkey);

  const declarationInfo = binder.trackDeclaration(
    stringRefkey,
    declaration.name,
    sourceFile
  );

  // Update the declaration name to be unique
  declaration.name = declarationInfo.name;

  switch (declaration.kind) {
    case StructureKind.Class:
      return sourceFile.addClass(declaration);
    case StructureKind.Enum:
      return sourceFile.addEnum(declaration);
    case StructureKind.Function:
      return sourceFile.addFunction(declaration);
    case StructureKind.Interface:
      return sourceFile.addInterface(declaration);
    case StructureKind.TypeAlias:
      return sourceFile.addTypeAlias(declaration);
    default:
      throw new Error(
        `Unsupported declaration kind ${(declaration as any).kind}`
      );
  }
}
