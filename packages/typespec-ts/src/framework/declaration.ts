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
  if (binder.resolveReference(stringRefkey)) {
    stringRefkey;
  }
  const trackedDeclarationName = binder.trackDeclaration(
    stringRefkey,
    declaration.name,
    sourceFile
  );

  if (trackedDeclarationName.indexOf("_") > 0) {
    trackedDeclarationName;
  }

  // Update the declaration name to be unique
  const trackedDeclaration = { ...declaration, name: trackedDeclarationName };

  switch (trackedDeclaration.kind) {
    case StructureKind.Class:
      return sourceFile.addClass(trackedDeclaration);
    case StructureKind.Enum:
      return sourceFile.addEnum(trackedDeclaration);
    case StructureKind.Function:
      return sourceFile.addFunction(trackedDeclaration);
    case StructureKind.Interface:
      return sourceFile.addInterface(trackedDeclaration);
    case StructureKind.TypeAlias:
      return sourceFile.addTypeAlias(trackedDeclaration);
    default:
      throw new Error(
        `Unsupported declaration kind ${(trackedDeclaration as any).kind}`
      );
  }
}
