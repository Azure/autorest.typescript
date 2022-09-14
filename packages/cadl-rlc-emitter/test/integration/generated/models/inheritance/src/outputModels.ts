/** Example base type. */
export interface BaseClassOutput {
  /** An example property. */
  baseClassProperty: string;
}

export interface DerivedFromBaseClassAOutput extends BaseClassOutput {
  /** An example property on a derived type */
  derivedClassAProperty: string;
}

export interface DerivedFromBaseClassBOutput extends BaseClassOutput {
  /** An example property on a derived type */
  derivedClassBProperty: string;
}

/** Example base class that has a discriminator property. */
export interface BaseClassWithDiscriminatorOutputParent
  extends BaseClassOutput {
  discriminatorProperty: "BaseClassWithDiscriminator" | "A" | "B";
}

export interface DerivedFromBaseClassWithDiscriminatorAOutput
  extends BaseClassWithDiscriminatorOutputParent {
  discriminatorProperty: "A";
}

export interface DerivedFromBaseClassWithDiscriminatorBOutput
  extends BaseClassWithDiscriminatorOutputParent {
  discriminatorProperty: "B";
}

/** Illustrates case where a basic model has polymorphic properties. */
export interface ModelWithPolymorphicPropertyOutput {
  /** Example polymorphic type property. */
  polymorphicProperty: BaseClassWithDiscriminatorOutput;
}

/** Example base class that has a discriminator property. */
export type BaseClassWithDiscriminatorOutput =
  | DerivedFromBaseClassWithDiscriminatorAOutput
  | DerivedFromBaseClassWithDiscriminatorBOutput;
