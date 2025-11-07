// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { serializeRecord } from "../../../static-helpers/serialization/serialize-record.js";

/**
 * This file contains only generated model types and their (de)serializers.
 * Disable the following rules for internal models with '_' prefix and deserializers which require 'any' for raw JSON input.
 */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export function resourceArraySerializer(result: Array<Resource>): any[] {
  return result.map((item) => {
    return resourceSerializer(item);
  });
}

export function resourceArrayDeserializer(result: Array<Resource>): any[] {
  return result.map((item) => {
    return resourceDeserializer(item);
  });
}

/**
 * Resource is the ancestor of DomainResource from which most resources are derived. Bundle, Parameters, and Binary extend Resource directly.
 * Based on [FHIR Resource](https://www.hl7.org/fhir/r4/resource.html
 */
export interface Resource {
  /** The type of resource */
  resourceType: string;
  /** Resource Id */
  id?: string;
  /** Metadata about the resource */
  meta?: Meta;
  /** A set of rules under which this content was created */
  implicitRules?: string;
  /** Language of the resource content */
  language?: string;
  /** Additional properties */
  additionalProperties?: Record<string, any>;
}

export function resourceSerializer(item: Resource): any {
  return {
    ...serializeRecord(item.additionalProperties ?? {}),
    resourceType: item["resourceType"],
    id: item["id"],
    meta: !item["meta"] ? item["meta"] : metaSerializer(item["meta"]),
    implicitRules: item["implicitRules"],
    language: item["language"],
  };
}

export function resourceDeserializer(item: any): Resource {
  return {
    additionalProperties: serializeRecord(item, [
      "resourceType",
      "id",
      "meta",
      "implicitRules",
      "language",
    ]),
    resourceType: item["resourceType"],
    id: item["id"],
    meta: !item["meta"] ? item["meta"] : metaDeserializer(item["meta"]),
    implicitRules: item["implicitRules"],
    language: item["language"],
  };
}

/**
 * Metadata about a resource
 * Based on [FHIR Meta](https://www.hl7.org/fhir/R4/resource.html#Meta)
 */
export interface Meta {
  /** The version specific identifier, as it appears in the version portion of the URL. This value changes when the resource is created, updated, or deleted. */
  versionId?: string;
  /** When the resource last changed - e.g. when the version changed. */
  lastUpdated?: string;
  /** A uri that identifies the source system of the resource. This provides a minimal amount of Provenance information that can be used to track or differentiate the source of information in the resource. The source may identify another FHIR server, document, message, database, etc. */
  source?: string;
  /** A list of profiles (references to [StructureDefinition](https://www.hl7.org/fhir/structuredefinition.html) resources) that this resource claims to conform to. The URL is a reference to [StructureDefinition.url](https://www.hl7.org/fhir/structuredefinition-definitions.html#StructureDefinition.url). */
  profile?: string[];
  /** Security labels applied to this resource. These tags connect specific resources to the overall security policy and infrastructure. */
  security?: Coding[];
  /** Tags applied to this resource. Tags are intended to be used to identify and relate resources to process and workflow, and applications are not required to consider the tags when interpreting the meaning of a resource. */
  tag?: Coding[];
}

export function metaSerializer(item: Meta): any {
  return {
    versionId: item["versionId"],
    lastUpdated: item["lastUpdated"],
    source: item["source"],
    profile: !item["profile"]
      ? item["profile"]
      : item["profile"].map((p: any) => {
          return p;
        }),
    security: !item["security"]
      ? item["security"]
      : codingArraySerializer(item["security"]),
    tag: !item["tag"] ? item["tag"] : codingArraySerializer(item["tag"]),
  };
}

export function metaDeserializer(item: any): Meta {
  return {
    versionId: item["versionId"],
    lastUpdated: item["lastUpdated"],
    source: item["source"],
    profile: !item["profile"]
      ? item["profile"]
      : item["profile"].map((p: any) => {
          return p;
        }),
    security: !item["security"]
      ? item["security"]
      : codingArrayDeserializer(item["security"]),
    tag: !item["tag"] ? item["tag"] : codingArrayDeserializer(item["tag"]),
  };
}

export function codingArraySerializer(result: Array<Coding>): any[] {
  return result.map((item) => {
    return codingSerializer(item);
  });
}

export function codingArrayDeserializer(result: Array<Coding>): any[] {
  return result.map((item) => {
    return codingDeserializer(item);
  });
}

/**
 * A Coding is a representation of a defined concept using a symbol from a defined "code system".
 * Based on [FHIR Coding](https://www.hl7.org/fhir/R4/datatypes.html#Coding)
 */
export interface Coding extends Element {
  /** Identity of the terminology system */
  system?: string;
  /** Version of the system - if relevant */
  version?: string;
  /** Symbol in syntax defined by the system */
  code?: string;
  /** Representation defined by the system */
  display?: string;
}

export function codingSerializer(item: Coding): any {
  return {
    id: item["id"],
    extension: !item["extension"]
      ? item["extension"]
      : extensionArraySerializer(item["extension"]),
    system: item["system"],
    version: item["version"],
    code: item["code"],
    display: item["display"],
  };
}

export function codingDeserializer(item: any): Coding {
  return {
    id: item["id"],
    extension: !item["extension"]
      ? item["extension"]
      : extensionArrayDeserializer(item["extension"]),
    system: item["system"],
    version: item["version"],
    code: item["code"],
    display: item["display"],
  };
}

/**
 * Concept - reference to a terminology or just text
 * Based on [FHIR CodeableConcept](https://www.hl7.org/fhir/R4/datatypes.html#CodeableConcept)
 */
export interface CodeableConcept extends Element {
  /** Code defined by a terminology system */
  coding?: Coding[];
  /** Plain text representation of the concept */
  text?: string;
}

export function codeableConceptSerializer(item: CodeableConcept): any {
  return {
    id: item["id"],
    extension: !item["extension"]
      ? item["extension"]
      : extensionArraySerializer(item["extension"]),
    coding: !item["coding"]
      ? item["coding"]
      : codingArraySerializer(item["coding"]),
    text: item["text"],
  };
}

export function codeableConceptDeserializer(item: any): CodeableConcept {
  return {
    id: item["id"],
    extension: !item["extension"]
      ? item["extension"]
      : extensionArrayDeserializer(item["extension"]),
    coding: !item["coding"]
      ? item["coding"]
      : codingArrayDeserializer(item["coding"]),
    text: item["text"],
  };
}

/**
 * The base definition for all elements contained inside a resource.
 * Based on [FHIR Element](https://www.hl7.org/fhir/R4/element.html)
 */
export interface Element {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Additional Content defined by implementations */
  extension?: Extension[];
}

export function elementSerializer(item: Element): any {
  return {
    id: item["id"],
    extension: !item["extension"]
      ? item["extension"]
      : extensionArraySerializer(item["extension"]),
  };
}

export function elementDeserializer(item: any): Element {
  return {
    id: item["id"],
    extension: !item["extension"]
      ? item["extension"]
      : extensionArrayDeserializer(item["extension"]),
  };
}

export function extensionArraySerializer(result: Array<Extension>): any[] {
  return result.map((item) => {
    return extensionSerializer(item);
  });
}

export function extensionArrayDeserializer(result: Array<Extension>): any[] {
  return result.map((item) => {
    return extensionDeserializer(item);
  });
}

/**
 * Base for all elements
 * Based on [FHIR Element](https://www.hl7.org/fhir/datatypes.html#Element)
 */
export interface Extension extends Element {
  /** Source of the definition for the extension code - a logical name or a URL. */
  url: string;
  /** Value as Quantity */
  valueQuantity?: Quantity;
  /** Value as CodeableConcept */
  valueCodeableConcept?: CodeableConcept;
  /** Value as string */
  valueString?: string;
  /** Value as boolean */
  valueBoolean?: boolean;
  /** Value as integer */
  valueInteger?: number;
  /** Value as Range. */
  valueRange?: Range;
  /** Value as Ratio. */
  valueRatio?: Ratio;
  /** Value as SampledData. */
  valueSampledData?: SampledData;
  /** Value as time (hh:mm:ss) */
  valueTime?: string;
  /** Value as dateTime. */
  valueDateTime?: string;
  /** Value as Period. */
  valuePeriod?: Period;
  /** Value as reference. */
  valueReference?: Reference;
}

export function extensionSerializer(item: Extension): any {
  return {
    id: item["id"],
    extension: !item["extension"]
      ? item["extension"]
      : extensionArraySerializer(item["extension"]),
    url: item["url"],
    valueQuantity: !item["valueQuantity"]
      ? item["valueQuantity"]
      : quantitySerializer(item["valueQuantity"]),
    valueCodeableConcept: !item["valueCodeableConcept"]
      ? item["valueCodeableConcept"]
      : codeableConceptSerializer(item["valueCodeableConcept"]),
    valueString: item["valueString"],
    valueBoolean: item["valueBoolean"],
    valueInteger: item["valueInteger"],
    valueRange: !item["valueRange"]
      ? item["valueRange"]
      : rangeSerializer(item["valueRange"]),
    valueRatio: !item["valueRatio"]
      ? item["valueRatio"]
      : ratioSerializer(item["valueRatio"]),
    valueSampledData: !item["valueSampledData"]
      ? item["valueSampledData"]
      : sampledDataSerializer(item["valueSampledData"]),
    valueTime: item["valueTime"],
    valueDateTime: item["valueDateTime"],
    valuePeriod: !item["valuePeriod"]
      ? item["valuePeriod"]
      : periodSerializer(item["valuePeriod"]),
    valueReference: !item["valueReference"]
      ? item["valueReference"]
      : referenceSerializer(item["valueReference"]),
  };
}

export function extensionDeserializer(item: any): Extension {
  return {
    id: item["id"],
    extension: !item["extension"]
      ? item["extension"]
      : extensionArrayDeserializer(item["extension"]),
    url: item["url"],
    valueQuantity: !item["valueQuantity"]
      ? item["valueQuantity"]
      : quantityDeserializer(item["valueQuantity"]),
    valueCodeableConcept: !item["valueCodeableConcept"]
      ? item["valueCodeableConcept"]
      : codeableConceptDeserializer(item["valueCodeableConcept"]),
    valueString: item["valueString"],
    valueBoolean: item["valueBoolean"],
    valueInteger: item["valueInteger"],
    valueRange: !item["valueRange"]
      ? item["valueRange"]
      : rangeDeserializer(item["valueRange"]),
    valueRatio: !item["valueRatio"]
      ? item["valueRatio"]
      : ratioDeserializer(item["valueRatio"]),
    valueSampledData: !item["valueSampledData"]
      ? item["valueSampledData"]
      : sampledDataDeserializer(item["valueSampledData"]),
    valueTime: item["valueTime"],
    valueDateTime: item["valueDateTime"],
    valuePeriod: !item["valuePeriod"]
      ? item["valuePeriod"]
      : periodDeserializer(item["valuePeriod"]),
    valueReference: !item["valueReference"]
      ? item["valueReference"]
      : referenceDeserializer(item["valueReference"]),
  };
}

/**
 * A measured or measurable amount
 * Based on [FHIR Quantity](https://www.hl7.org/fhir/R4/datatypes.html#Quantity)
 */
export interface Quantity extends Element {
  /** Numerical value (with implicit precision) */
  value?: number;
  /** < | <= | >= | > - how to understand the value */
  comparator?: string;
  /** Unit representation */
  unit?: string;
  /** System that defines coded unit form */
  system?: string;
  /** Coded form of the unit */
  code?: string;
}

export function quantitySerializer(item: Quantity): any {
  return {
    id: item["id"],
    extension: !item["extension"]
      ? item["extension"]
      : extensionArraySerializer(item["extension"]),
    value: item["value"],
    comparator: item["comparator"],
    unit: item["unit"],
    system: item["system"],
    code: item["code"],
  };
}

export function quantityDeserializer(item: any): Quantity {
  return {
    id: item["id"],
    extension: !item["extension"]
      ? item["extension"]
      : extensionArrayDeserializer(item["extension"]),
    value: item["value"],
    comparator: item["comparator"],
    unit: item["unit"],
    system: item["system"],
    code: item["code"],
  };
}

/**
 * A set of ordered Quantities defined by a low and high limit
 * Based on [FHIR Range](https://www.hl7.org/fhir/R4/datatypes.html#Range)
 */
export interface Range extends Element {
  /** Low limit */
  low?: Quantity;
  /** High limit */
  high?: Quantity;
}

export function rangeSerializer(item: Range): any {
  return {
    id: item["id"],
    extension: !item["extension"]
      ? item["extension"]
      : extensionArraySerializer(item["extension"]),
    low: !item["low"] ? item["low"] : quantitySerializer(item["low"]),
    high: !item["high"] ? item["high"] : quantitySerializer(item["high"]),
  };
}

export function rangeDeserializer(item: any): Range {
  return {
    id: item["id"],
    extension: !item["extension"]
      ? item["extension"]
      : extensionArrayDeserializer(item["extension"]),
    low: !item["low"] ? item["low"] : quantityDeserializer(item["low"]),
    high: !item["high"] ? item["high"] : quantityDeserializer(item["high"]),
  };
}

/**
 * A ratio of two Quantity values - a numerator and a denominator
 * Based on [FHIR Ratio](https://www.hl7.org/fhir/R4/datatypes.html#Ratio)
 */
export interface Ratio extends Element {
  /** Numerator value */
  numerator?: Quantity;
  /** Denominator value */
  denominator?: Quantity;
}

export function ratioSerializer(item: Ratio): any {
  return {
    id: item["id"],
    extension: !item["extension"]
      ? item["extension"]
      : extensionArraySerializer(item["extension"]),
    numerator: !item["numerator"]
      ? item["numerator"]
      : quantitySerializer(item["numerator"]),
    denominator: !item["denominator"]
      ? item["denominator"]
      : quantitySerializer(item["denominator"]),
  };
}

export function ratioDeserializer(item: any): Ratio {
  return {
    id: item["id"],
    extension: !item["extension"]
      ? item["extension"]
      : extensionArrayDeserializer(item["extension"]),
    numerator: !item["numerator"]
      ? item["numerator"]
      : quantityDeserializer(item["numerator"]),
    denominator: !item["denominator"]
      ? item["denominator"]
      : quantityDeserializer(item["denominator"]),
  };
}

/**
 * A series of measurements taken by a device
 * Based on [FHIR SampledData](https://www.hl7.org/fhir/R4/datatypes.html#SampledData)
 */
export interface SampledData extends Element {
  /** Zero value and units */
  origin: Quantity;
  /** Number of milliseconds between samples */
  period: number;
  /** Multiply data by this before adding to origin */
  factor?: number;
  /** Lower limit of detection */
  lowerLimit?: number;
  /** Upper limit of detection */
  upperLimit?: number;
  /** Number of sample points at each time point */
  dimensions: number;
  /** Decimal values with spaces, or "E" | "U" | "L" */
  data?: string;
}

export function sampledDataSerializer(item: SampledData): any {
  return {
    id: item["id"],
    extension: !item["extension"]
      ? item["extension"]
      : extensionArraySerializer(item["extension"]),
    origin: quantitySerializer(item["origin"]),
    period: item["period"],
    factor: item["factor"],
    lowerLimit: item["lowerLimit"],
    upperLimit: item["upperLimit"],
    dimensions: item["dimensions"],
    data: item["data"],
  };
}

export function sampledDataDeserializer(item: any): SampledData {
  return {
    id: item["id"],
    extension: !item["extension"]
      ? item["extension"]
      : extensionArrayDeserializer(item["extension"]),
    origin: quantityDeserializer(item["origin"]),
    period: item["period"],
    factor: item["factor"],
    lowerLimit: item["lowerLimit"],
    upperLimit: item["upperLimit"],
    dimensions: item["dimensions"],
    data: item["data"],
  };
}

/**
 * A time period defined by a start and end date and optionally time
 * Based on [FHIR Period](https://www.hl7.org/fhir/R4/datatypes.html#Period)
 */
export interface Period extends Element {
  /** Starting time with inclusive boundary */
  start?: string;
  /** End time with inclusive boundary, if not ongoing */
  end?: string;
}

export function periodSerializer(item: Period): any {
  return {
    id: item["id"],
    extension: !item["extension"]
      ? item["extension"]
      : extensionArraySerializer(item["extension"]),
    start: item["start"],
    end: item["end"],
  };
}

export function periodDeserializer(item: any): Period {
  return {
    id: item["id"],
    extension: !item["extension"]
      ? item["extension"]
      : extensionArrayDeserializer(item["extension"]),
    start: item["start"],
    end: item["end"],
  };
}

/**
 * A reference from one resource to another
 * Based on [FHIR Reference](https://www.hl7.org/fhir/R4/references.html)
 */
export interface Reference extends Element {
  /** Literal reference, Relative, internal or absolute URL */
  reference?: string;
  /** Type the reference refers to (e.g. "Patient") */
  type?: string;
  /** Logical reference, when literal reference is not known */
  identifier?: Identifier;
  /** Text alternative for the resource */
  display?: string;
}

export function referenceSerializer(item: Reference): any {
  return {
    id: item["id"],
    extension: !item["extension"]
      ? item["extension"]
      : extensionArraySerializer(item["extension"]),
    reference: item["reference"],
    type: item["type"],
    identifier: !item["identifier"]
      ? item["identifier"]
      : identifierSerializer(item["identifier"]),
    display: item["display"],
  };
}

export function referenceDeserializer(item: any): Reference {
  return {
    id: item["id"],
    extension: !item["extension"]
      ? item["extension"]
      : extensionArrayDeserializer(item["extension"]),
    reference: item["reference"],
    type: item["type"],
    identifier: !item["identifier"]
      ? item["identifier"]
      : identifierDeserializer(item["identifier"]),
    display: item["display"],
  };
}

/**
 * An identifier intended for computation
 * Based on [FHIR Identifier](https://www.hl7.org/fhir/R4/identifier.html)
 */
export interface Identifier extends Element {
  /** usual | official | temp | secondary | old (If known) */
  use?: string;
  /** Description of identifier */
  type?: CodeableConcept;
  /** The namespace for the identifier value */
  system?: string;
  /** The value that is unique */
  value?: string;
  /** Time period when id is/was valid for use */
  period?: Period;
  /** Organization that issued id (may be just text) */
  assigner?: Reference;
}

export function identifierSerializer(item: Identifier): any {
  return {
    id: item["id"],
    extension: !item["extension"]
      ? item["extension"]
      : extensionArraySerializer(item["extension"]),
    use: item["use"],
    type: !item["type"]
      ? item["type"]
      : codeableConceptSerializer(item["type"]),
    system: item["system"],
    value: item["value"],
    period: !item["period"] ? item["period"] : periodSerializer(item["period"]),
    assigner: !item["assigner"]
      ? item["assigner"]
      : referenceSerializer(item["assigner"]),
  };
}

export function identifierDeserializer(item: any): Identifier {
  return {
    id: item["id"],
    extension: !item["extension"]
      ? item["extension"]
      : extensionArrayDeserializer(item["extension"]),
    use: item["use"],
    type: !item["type"]
      ? item["type"]
      : codeableConceptDeserializer(item["type"]),
    system: item["system"],
    value: item["value"],
    period: !item["period"]
      ? item["period"]
      : periodDeserializer(item["period"]),
    assigner: !item["assigner"]
      ? item["assigner"]
      : referenceDeserializer(item["assigner"]),
  };
}

/** FHIR extendible element */
export interface Extendible {
  /** Additional Content defined by implementations */
  extension?: Extension[];
}

export function extendibleSerializer(item: Extendible): any {
  return {
    extension: !item["extension"]
      ? item["extension"]
      : extensionArraySerializer(item["extension"]),
  };
}

export function extendibleDeserializer(item: any): Extendible {
  return {
    extension: !item["extension"]
      ? item["extension"]
      : extensionArrayDeserializer(item["extension"]),
  };
}

export function codeableConceptArraySerializer(
  result: Array<CodeableConcept>,
): any[] {
  return result.map((item) => {
    return codeableConceptSerializer(item);
  });
}

export function codeableConceptArrayDeserializer(
  result: Array<CodeableConcept>,
): any[] {
  return result.map((item) => {
    return codeableConceptDeserializer(item);
  });
}

/**
 * Detailed information about observations
 * Based on [FHIR Observation](https://www.hl7.org/fhir/R4/observation.html)
 */
export interface Observation extends DomainResource {
  /** resourceType */
  resourceType: "Observation";
  /** Business Identifier for observation */
  identifier?: Identifier[];
  /** registered | preliminary | final | amended + */
  status: ObservationStatusCodeType;
  /** Classification of  type of observation */
  category?: CodeableConcept[];
  /** Type of observation (code / type) */
  code: CodeableConcept;
  /** Who and/or what the observation is about */
  subject?: Reference;
  /** Healthcare event during which this observation is made */
  encounter?: Reference;
  /** Clinically relevant time/time-period for observation */
  effectiveDateTime?: string;
  /** Clinically relevant time/time-period for observation */
  effectivePeriod?: Period;
  /** Clinically relevant time/time-period for observation */
  effectiveInstant?: string;
  /** Date/Time this version was made available */
  issued?: string;
  /** Actual result */
  valueQuantity?: Quantity;
  /** Actual result */
  valueCodeableConcept?: CodeableConcept;
  /** Actual result */
  valueString?: string;
  /** Actual result */
  valueBoolean?: boolean;
  /** Actual result */
  valueInteger?: number;
  /** Actual result */
  valueRange?: Range;
  /** Actual result */
  valueRatio?: Ratio;
  /** Actual result */
  valueSampledData?: SampledData;
  /** Actual result */
  valueTime?: string;
  /** Actual result */
  valueDateTime?: string;
  /** Actual result */
  valuePeriod?: Period;
  /** Why the result is missing */
  dataAbsentReason?: CodeableConcept;
  /** High, low, normal, etc. */
  interpretation?: CodeableConcept[];
  /** Comments about the observation */
  note?: Annotation[];
  /** Observed body part */
  bodySite?: CodeableConcept;
  /** How it was done */
  method?: CodeableConcept;
  /** Provides guide for interpretation */
  referenceRange?: ObservationReferenceRange[];
  /** Related resource that belongs to the Observation group */
  hasMember?: Reference[];
  /** Related measurements the observation is made from */
  derivedFrom?: Reference[];
  /** Component results */
  component?: ObservationComponent[];
}

export function observationDeserializer(item: any): Observation {
  return {
    additionalProperties: serializeRecord(item, [
      "resourceType",
      "text",
      "contained",
      "extension",
      "modifierExtension",
      "id",
      "meta",
      "implicitRules",
      "language",
      "identifier",
      "status",
      "category",
      "code",
      "subject",
      "encounter",
      "effectiveDateTime",
      "effectivePeriod",
      "effectiveInstant",
      "issued",
      "valueQuantity",
      "valueCodeableConcept",
      "valueString",
      "valueBoolean",
      "valueInteger",
      "valueRange",
      "valueRatio",
      "valueSampledData",
      "valueTime",
      "valueDateTime",
      "valuePeriod",
      "dataAbsentReason",
      "interpretation",
      "note",
      "bodySite",
      "method",
      "referenceRange",
      "hasMember",
      "derivedFrom",
      "component",
    ]),
    resourceType: item["resourceType"],
    text: !item["text"] ? item["text"] : narrativeDeserializer(item["text"]),
    contained: !item["contained"]
      ? item["contained"]
      : resourceArrayDeserializer(item["contained"]),
    extension: !item["extension"]
      ? item["extension"]
      : extensionArrayDeserializer(item["extension"]),
    modifierExtension: !item["modifierExtension"]
      ? item["modifierExtension"]
      : extensionArrayDeserializer(item["modifierExtension"]),
    id: item["id"],
    meta: !item["meta"] ? item["meta"] : metaDeserializer(item["meta"]),
    implicitRules: item["implicitRules"],
    language: item["language"],
    identifier: !item["identifier"]
      ? item["identifier"]
      : identifierArrayDeserializer(item["identifier"]),
    status: item["status"],
    category: !item["category"]
      ? item["category"]
      : codeableConceptArrayDeserializer(item["category"]),
    code: codeableConceptDeserializer(item["code"]),
    subject: !item["subject"]
      ? item["subject"]
      : referenceDeserializer(item["subject"]),
    encounter: !item["encounter"]
      ? item["encounter"]
      : referenceDeserializer(item["encounter"]),
    effectiveDateTime: item["effectiveDateTime"],
    effectivePeriod: !item["effectivePeriod"]
      ? item["effectivePeriod"]
      : periodDeserializer(item["effectivePeriod"]),
    effectiveInstant: item["effectiveInstant"],
    issued: item["issued"],
    valueQuantity: !item["valueQuantity"]
      ? item["valueQuantity"]
      : quantityDeserializer(item["valueQuantity"]),
    valueCodeableConcept: !item["valueCodeableConcept"]
      ? item["valueCodeableConcept"]
      : codeableConceptDeserializer(item["valueCodeableConcept"]),
    valueString: item["valueString"],
    valueBoolean: item["valueBoolean"],
    valueInteger: item["valueInteger"],
    valueRange: !item["valueRange"]
      ? item["valueRange"]
      : rangeDeserializer(item["valueRange"]),
    valueRatio: !item["valueRatio"]
      ? item["valueRatio"]
      : ratioDeserializer(item["valueRatio"]),
    valueSampledData: !item["valueSampledData"]
      ? item["valueSampledData"]
      : sampledDataDeserializer(item["valueSampledData"]),
    valueTime: item["valueTime"],
    valueDateTime: item["valueDateTime"],
    valuePeriod: !item["valuePeriod"]
      ? item["valuePeriod"]
      : periodDeserializer(item["valuePeriod"]),
    dataAbsentReason: !item["dataAbsentReason"]
      ? item["dataAbsentReason"]
      : codeableConceptDeserializer(item["dataAbsentReason"]),
    interpretation: !item["interpretation"]
      ? item["interpretation"]
      : codeableConceptArrayDeserializer(item["interpretation"]),
    note: !item["note"]
      ? item["note"]
      : annotationArrayDeserializer(item["note"]),
    bodySite: !item["bodySite"]
      ? item["bodySite"]
      : codeableConceptDeserializer(item["bodySite"]),
    method: !item["method"]
      ? item["method"]
      : codeableConceptDeserializer(item["method"]),
    referenceRange: !item["referenceRange"]
      ? item["referenceRange"]
      : observationReferenceRangeArrayDeserializer(item["referenceRange"]),
    hasMember: !item["hasMember"]
      ? item["hasMember"]
      : referenceArrayDeserializer(item["hasMember"]),
    derivedFrom: !item["derivedFrom"]
      ? item["derivedFrom"]
      : referenceArrayDeserializer(item["derivedFrom"]),
    component: !item["component"]
      ? item["component"]
      : observationComponentArrayDeserializer(item["component"]),
  };
}

export function identifierArraySerializer(result: Array<Identifier>): any[] {
  return result.map((item) => {
    return identifierSerializer(item);
  });
}

export function identifierArrayDeserializer(result: Array<Identifier>): any[] {
  return result.map((item) => {
    return identifierDeserializer(item);
  });
}

/**
 * Observation Status
 * Based on [FHIR ObservationStatus](https://www.hl7.org/fhir/R4/valueset-observation-status.html)
 */
export type ObservationStatusCodeType =
  | "registered"
  | "preliminary"
  | "final"
  | "amended"
  | "corrected"
  | "cancelled"
  | "entered-in-error"
  | "unknown";

export function annotationArrayDeserializer(result: Array<Annotation>): any[] {
  return result.map((item) => {
    return annotationDeserializer(item);
  });
}

/**
 * A text note which also  contains information about who made the statement and when
 * Based on [FHIR Annotation](https://www.hl7.org/fhir/R4/datatypes.html#Annotation)
 */
export interface Annotation extends Element {
  /** Individual responsible for the annotation */
  authorString?: string;
  /** When the annotation was made */
  time?: string;
  /** The annotation - text content (as markdown) */
  text: string;
}

export function annotationDeserializer(item: any): Annotation {
  return {
    id: item["id"],
    extension: !item["extension"]
      ? item["extension"]
      : extensionArrayDeserializer(item["extension"]),
    authorString: item["authorString"],
    time: item["time"],
    text: item["text"],
  };
}

export function observationReferenceRangeArrayDeserializer(
  result: Array<ObservationReferenceRange>,
): any[] {
  return result.map((item) => {
    return observationReferenceRangeDeserializer(item);
  });
}

/**
 * Provides guide for interpretation of component result
 * Based on [FHIR Observation.referenceRange](https://www.hl7.org/fhir/R4/observation.html)
 */
export interface ObservationReferenceRange {
  /** Low Range, if relevant */
  low?: Quantity;
  /** High Range, if relevant */
  high?: Quantity;
  /** Reference range qualifier */
  type?: CodeableConcept;
  /** Reference range population */
  appliesTo?: CodeableConcept[];
  /** Applicable age range, if relevant */
  age?: Range;
  /** Text based reference range in an observation */
  text?: string;
}

export function observationReferenceRangeDeserializer(
  item: any,
): ObservationReferenceRange {
  return {
    low: !item["low"] ? item["low"] : quantityDeserializer(item["low"]),
    high: !item["high"] ? item["high"] : quantityDeserializer(item["high"]),
    type: !item["type"]
      ? item["type"]
      : codeableConceptDeserializer(item["type"]),
    appliesTo: !item["appliesTo"]
      ? item["appliesTo"]
      : codeableConceptArrayDeserializer(item["appliesTo"]),
    age: !item["age"] ? item["age"] : rangeDeserializer(item["age"]),
    text: item["text"],
  };
}

export function referenceArraySerializer(result: Array<Reference>): any[] {
  return result.map((item) => {
    return referenceSerializer(item);
  });
}

export function referenceArrayDeserializer(result: Array<Reference>): any[] {
  return result.map((item) => {
    return referenceDeserializer(item);
  });
}

export function observationComponentArrayDeserializer(
  result: Array<ObservationComponent>,
): any[] {
  return result.map((item) => {
    return observationComponentDeserializer(item);
  });
}

/**
 * Component results
 * Based on [FHIR Observation.component](https://www.hl7.org/fhir/R4/observation.html)
 */
export interface ObservationComponent extends Element {
  /** Type of component observation (code / type) */
  code: CodeableConcept;
  /** Value as Quantity */
  valueQuantity?: Quantity;
  /** Value as CodeableConcept */
  valueCodeableConcept?: CodeableConcept;
  /** Value as string */
  valueString?: string;
  /** Value as boolean */
  valueBoolean?: boolean;
  /** Value as integer */
  valueInteger?: number;
  /** Value as Range. */
  valueRange?: Range;
  /** Value as Ratio. */
  valueRatio?: Ratio;
  /** Value as SampledData. */
  valueSampledData?: SampledData;
  /** Value as time (hh:mm:ss) */
  valueTime?: string;
  /** Value as dateTime. */
  valueDateTime?: string;
  /** Value as Period. */
  valuePeriod?: Period;
  /** Value as reference. */
  valueReference?: Reference;
  /** Why the component result is missing */
  dataAbsentReason?: CodeableConcept;
  /** High, low, normal, etc. */
  interpretation?: CodeableConcept[];
  /** Provides guide for interpretation of component result */
  referenceRange?: ObservationReferenceRange[];
}

export function observationComponentDeserializer(
  item: any,
): ObservationComponent {
  return {
    id: item["id"],
    extension: !item["extension"]
      ? item["extension"]
      : extensionArrayDeserializer(item["extension"]),
    code: codeableConceptDeserializer(item["code"]),
    valueQuantity: !item["valueQuantity"]
      ? item["valueQuantity"]
      : quantityDeserializer(item["valueQuantity"]),
    valueCodeableConcept: !item["valueCodeableConcept"]
      ? item["valueCodeableConcept"]
      : codeableConceptDeserializer(item["valueCodeableConcept"]),
    valueString: item["valueString"],
    valueBoolean: item["valueBoolean"],
    valueInteger: item["valueInteger"],
    valueRange: !item["valueRange"]
      ? item["valueRange"]
      : rangeDeserializer(item["valueRange"]),
    valueRatio: !item["valueRatio"]
      ? item["valueRatio"]
      : ratioDeserializer(item["valueRatio"]),
    valueSampledData: !item["valueSampledData"]
      ? item["valueSampledData"]
      : sampledDataDeserializer(item["valueSampledData"]),
    valueTime: item["valueTime"],
    valueDateTime: item["valueDateTime"],
    valuePeriod: !item["valuePeriod"]
      ? item["valuePeriod"]
      : periodDeserializer(item["valuePeriod"]),
    valueReference: !item["valueReference"]
      ? item["valueReference"]
      : referenceDeserializer(item["valueReference"]),
    dataAbsentReason: !item["dataAbsentReason"]
      ? item["dataAbsentReason"]
      : codeableConceptDeserializer(item["dataAbsentReason"]),
    interpretation: !item["interpretation"]
      ? item["interpretation"]
      : codeableConceptArrayDeserializer(item["interpretation"]),
    referenceRange: !item["referenceRange"]
      ? item["referenceRange"]
      : observationReferenceRangeArrayDeserializer(item["referenceRange"]),
  };
}

/**
 * A resource with narrative, extensions, and contained resources
 * Based on [FHIR DomainResource](https://www.hl7.org/fhir/domainresource.html)
 */
export interface DomainResource extends Resource {
  /** Discriminator property for DomainResource. */
  /** The discriminator possible values: Observation, Condition, ResearchStudy */
  resourceType: string;
  /** Text summary of the resource, for human interpretation */
  text?: Narrative;
  /** Contained, inline Resources */
  contained?: Resource[];
  /** Additional Content defined by implementations */
  extension?: Extension[];
  /** Extensions that cannot be ignored */
  modifierExtension?: Extension[];
}

export function domainResourceDeserializer(item: any): DomainResource {
  return {
    additionalProperties: serializeRecord(item, [
      "resourceType",
      "id",
      "meta",
      "implicitRules",
      "language",
      "text",
      "contained",
      "extension",
      "modifierExtension",
    ]),
    resourceType: item["resourceType"],
    id: item["id"],
    meta: !item["meta"] ? item["meta"] : metaDeserializer(item["meta"]),
    implicitRules: item["implicitRules"],
    language: item["language"],
    text: !item["text"] ? item["text"] : narrativeDeserializer(item["text"]),
    contained: !item["contained"]
      ? item["contained"]
      : resourceArrayDeserializer(item["contained"]),
    extension: !item["extension"]
      ? item["extension"]
      : extensionArrayDeserializer(item["extension"]),
    modifierExtension: !item["modifierExtension"]
      ? item["modifierExtension"]
      : extensionArrayDeserializer(item["modifierExtension"]),
  };
}

/** Alias for DomainResourceUnion */
export type DomainResourceUnion = Observation | DomainResource;

export function domainResourceUnionDeserializer(
  item: any,
): DomainResourceUnion {
  switch (item.resourceType) {
    case "Observation":
      return observationDeserializer(item as Observation);

    default:
      return domainResourceDeserializer(item);
  }
}

/**
 * Any resource that is a [DomainResource](https://www.hl7.org/fhir/domainresource.html) may include a human-readable narrative that contains a summary of the resource and may be used to represent the content of the resource to a human.
 * Based on [FHIR Narrative](https://www.hl7.org/fhir/R4/narrative.html#Narrative)
 */
export interface Narrative extends Element {
  /** generated, extensions, additional, empty */
  status: string;
  /** xhtml */
  div: string;
}

export function narrativeDeserializer(item: any): Narrative {
  return {
    id: item["id"],
    extension: !item["extension"]
      ? item["extension"]
      : extensionArrayDeserializer(item["extension"]),
    status: item["status"],
    div: item["div"],
  };
}
