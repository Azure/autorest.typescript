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

  switch (trackedDeclaration.kind) {
    case StructureKind.Class:
      sourceFile.addClass(trackedDeclaration);
      break;
    case StructureKind.Enum:
      sourceFile.addEnum(trackedDeclaration);
      break;
    case StructureKind.Function:
      sourceFile.addFunction(trackedDeclaration);
      break;
    case StructureKind.Interface:
      sourceFile.addInterface(trackedDeclaration);
      break;
    case StructureKind.TypeAlias:
      if (trackedDeclaration.type) {
        sourceFile.addTypeAlias(trackedDeclaration);
      }
      break;
    default:
      throw new Error(
        `Unsupported declaration kind ${(trackedDeclaration as any).kind}`
      );
  }
}
