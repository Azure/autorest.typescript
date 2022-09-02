/** Example base type. */
export interface BaseClass {
  /** An example property. */
  baseClassProperty: string;
}

export interface DerivedFromBaseClassA extends BaseClass {
  /** An example property on a derived type */
  derivedClassAProperty: string;
}

export interface DerivedFromBaseClassB extends BaseClass {
  /** An example property on a derived type */
  derivedClassBProperty: string;
}

/** Example base class that has a discriminator property. */
export interface BaseClassWithDiscriminatorParent extends BaseClass {
  discriminatorProperty: "BaseClassWithDiscriminator" | "A" | "B";
}

export interface DerivedFromBaseClassWithDiscriminatorA
  extends BaseClassWithDiscriminatorParent {
  discriminatorProperty: "A";
}

export interface DerivedFromBaseClassWithDiscriminatorB
  extends BaseClassWithDiscriminatorParent {
  discriminatorProperty: "B";
}

/** Illustrates case where a basic model has polymorphic properties. */
export interface ModelWithPolymorphicProperty {
  /** Example polymorphic type property. */
  polymorphicProperty: BaseClassWithDiscriminator;
}

/** Example base class that has a discriminator property. */
export type BaseClassWithDiscriminator =
  | DerivedFromBaseClassWithDiscriminatorA
  | DerivedFromBaseClassWithDiscriminatorB;
