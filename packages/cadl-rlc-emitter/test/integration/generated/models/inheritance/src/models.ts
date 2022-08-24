export interface BaseClass {
  /** An example property. */
  baseClassProperty: string;
}

export interface ModelWithPolymorphicProperty {
  /** Example base class that has a discriminator property. */
  polymorphicProperty: object;
}

export interface BaseClassWithDiscriminator extends BaseClass {
  /** Discriminator property for BaseClassWithDiscriminator. */
  discriminatorProperty?: string;
  discriminatorProperty: "B";
}
