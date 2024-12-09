// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** A patient record, including their clinical information and data. */
export interface PatientRecord {
  /** A given identifier for the patient. Has to be unique across all patients in a single request. */
  id: string;
  /** Patient structured information, including demographics and known structured clinical information. */
  info?: PatientInfo;
  /** Patient encounters/visits. */
  encounters?: Encounter[];
  /** Patient unstructured clinical data, given as documents. */
  patientDocuments?: PatientDocument[];
}

export function patientRecordSerializer(item: PatientRecord): any {
  return {
    id: item["id"],
    info: !item["info"] ? item["info"] : patientInfoSerializer(item["info"]),
    encounters: !item["encounters"]
      ? item["encounters"]
      : encounterArraySerializer(item["encounters"]),
    patientDocuments: !item["patientDocuments"]
      ? item["patientDocuments"]
      : patientDocumentArraySerializer(item["patientDocuments"]),
  };
}

/** Patient structured information, including demographics and known structured clinical information. */
export interface PatientInfo {
  /** The patient's sex. */
  sex?: PatientInfoSex;
  /** The patient's date of birth. */
  birthDate?: string;
  /** Known clinical information for the patient, structured. */
  clinicalInfo?: Resource[];
}

export function patientInfoSerializer(item: PatientInfo): any {
  return {
    sex: item["sex"],
    birthDate: item["birthDate"],
    clinicalInfo: !item["clinicalInfo"]
      ? item["clinicalInfo"]
      : resourceArraySerializer(item["clinicalInfo"]),
  };
}

/** The patient's sex. */
export type PatientInfoSex = "female" | "male" | "unspecified";

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
    ...item,
    resourceType: item["resourceType"],
    id: item["id"],
    meta: !item["meta"] ? item["meta"] : metaSerializer(item["meta"]),
    implicitRules: item["implicitRules"],
    language: item["language"],
  };
}

export function resourceDeserializer(item: any): Resource {
  return {
    ...item,
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

export function encounterArraySerializer(result: Array<Encounter>): any[] {
  return result.map((item) => {
    return encounterSerializer(item);
  });
}

/** visit/encounter information */
export interface Encounter {
  /** The id of the visit. */
  id: string;
  /**
   * Time period of the visit.
   * In case of admission, use timePeriod.start to indicate the admission time and timePeriod.end to indicate the discharge time.
   */
  period?: TimePeriod;
  /** The class of the encounter. */
  class?: EncounterClass;
}

export function encounterSerializer(item: Encounter): any {
  return {
    id: item["id"],
    period: !item["period"]
      ? item["period"]
      : timePeriodSerializer(item["period"]),
    class: item["class"],
  };
}

/** A duration of time during which an event is happening */
export interface TimePeriod {
  /** Starting time with inclusive boundary */
  start?: Date;
  /** End time with inclusive boundary, if not ongoing */
  end?: Date;
}

export function timePeriodSerializer(item: TimePeriod): any {
  return {
    start: item["start"]?.toISOString(),
    end: item["end"]?.toISOString(),
  };
}

/** Known values codes that can be used to indicate the class of encounter (TODO://Based on FHIR value set--http://....). */
export type EncounterClass =
  | "inpatient"
  | "ambulatory"
  | "observation"
  | "emergency"
  | "virtual"
  | "healthHome";

export function patientDocumentArraySerializer(
  result: Array<PatientDocument>,
): any[] {
  return result.map((item) => {
    return patientDocumentSerializer(item);
  });
}

/** A clinical document related to a patient. Document here is in the wide sense - not just a text document (note). */
export interface PatientDocument {
  /** The type of the patient document, such as 'note' (text document) or 'fhirBundle' (FHIR JSON document). */
  type: DocumentType;
  /** The type of the clinical document. */
  clinicalType?: ClinicalDocumentType;
  /** A given identifier for the document. Has to be unique across all documents for a single patient. */
  id: string;
  /** A 2 letter ISO 639-1 representation of the language of the document. */
  language?: string;
  /** The date and time when the document was created. */
  createdDateTime?: Date;
  /** Document author(s) */
  authors?: DocumentAuthor[];
  /** specialty type the document */
  specialtyType?: SpecialtyType;
  /** Administrative metadata for the document. */
  administrativeMetadata?: DocumentAdministrativeMetadata;
  /** The content of the patient document. */
  content: DocumentContent;
}

export function patientDocumentSerializer(item: PatientDocument): any {
  return {
    type: item["type"],
    clinicalType: item["clinicalType"],
    id: item["id"],
    language: item["language"],
    createdDateTime: item["createdDateTime"]?.toISOString(),
    authors: !item["authors"]
      ? item["authors"]
      : documentAuthorArraySerializer(item["authors"]),
    specialtyType: item["specialtyType"],
    administrativeMetadata: !item["administrativeMetadata"]
      ? item["administrativeMetadata"]
      : documentAdministrativeMetadataSerializer(
          item["administrativeMetadata"],
        ),
    content: documentContentSerializer(item["content"]),
  };
}

/** The type of the patient document, such as 'note' (text document) or 'fhirBundle' (FHIR JSON document). */
export type DocumentType =
  | "note"
  | "fhirBundle"
  | "dicom"
  | "genomicSequencing";
/** The type of the clinical document. */
export type ClinicalDocumentType =
  | "consultation"
  | "dischargeSummary"
  | "historyAndPhysical"
  | "radiologyReport"
  | "procedure"
  | "progress"
  | "laboratory"
  | "pathologyReport";

export function documentAuthorArraySerializer(
  result: Array<DocumentAuthor>,
): any[] {
  return result.map((item) => {
    return documentAuthorSerializer(item);
  });
}

/** Document author */
export interface DocumentAuthor {
  /** author id */
  id?: string;
  /** Text representation of the full name */
  fullName?: string;
}

export function documentAuthorSerializer(item: DocumentAuthor): any {
  return { id: item["id"], fullName: item["fullName"] };
}

/** Known values codes that can be used to indicate the type of the Specialty. */
export type SpecialtyType = "pathology" | "radiology";

/** Document administrative metadata */
export interface DocumentAdministrativeMetadata {
  /** List of procedure information associated with the document. */
  orderedProcedures?: OrderedProcedure[];
  /** Reference to the encounter associated with the document. */
  encounterId?: string;
}

export function documentAdministrativeMetadataSerializer(
  item: DocumentAdministrativeMetadata,
): any {
  return {
    orderedProcedures: !item["orderedProcedures"]
      ? item["orderedProcedures"]
      : orderedProcedureArraySerializer(item["orderedProcedures"]),
    encounterId: item["encounterId"],
  };
}

export function orderedProcedureArraySerializer(
  result: Array<OrderedProcedure>,
): any[] {
  return result.map((item) => {
    return orderedProcedureSerializer(item);
  });
}

export function orderedProcedureArrayDeserializer(
  result: Array<OrderedProcedure>,
): any[] {
  return result.map((item) => {
    return orderedProcedureDeserializer(item);
  });
}

/** Procedure information */
export interface OrderedProcedure extends Extendible {
  /** Procedure code */
  code?: CodeableConcept;
  /** Procedure description */
  description?: string;
}

export function orderedProcedureSerializer(item: OrderedProcedure): any {
  return {
    extension: !item["extension"]
      ? item["extension"]
      : extensionArraySerializer(item["extension"]),
    code: !item["code"]
      ? item["code"]
      : codeableConceptSerializer(item["code"]),
    description: item["description"],
  };
}

export function orderedProcedureDeserializer(item: any): OrderedProcedure {
  return {
    extension: !item["extension"]
      ? item["extension"]
      : extensionArrayDeserializer(item["extension"]),
    code: !item["code"]
      ? item["code"]
      : codeableConceptDeserializer(item["code"]),
    description: item["description"],
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

/** The content of the patient document. */
export interface DocumentContent {
  /**
   * The type of the content's source.
   * In case the source type is 'inline', the content is given as a string (for instance, text).
   * In case the source type is 'reference', the content is given as a URI.
   */
  sourceType: DocumentContentSourceType;
  /** The content of the document, given either inline (as a string) or as a reference (URI). */
  value: string;
}

export function documentContentSerializer(item: DocumentContent): any {
  return { sourceType: item["sourceType"], value: item["value"] };
}

/**
 * The type of the content's source.
 * In case the source type is 'inline', the content is given as a string (for instance, text).
 * In case the source type is 'reference', the content is given as a URI.
 */
export type DocumentContentSourceType = "inline" | "reference";

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

/** Configuration affecting the Radiology Insights model's inference. */
export interface RadiologyInsightsModelConfiguration {
  /** An indication whether the model should produce verbose output. */
  verbose?: boolean;
  /** An indication whether the model's output should include evidence for the inferences. */
  includeEvidence?: boolean;
  /**
   * A list of inference types to be inferred for the current request.
   * This could be used if only part of the Radiology Insights inferences are required.
   * If this list is omitted or empty, the model will return all the inference types.
   */
  inferenceTypes?: RadiologyInsightsInferenceType[];
  /** The options for the Radiology Insights Inferences */
  inferenceOptions?: RadiologyInsightsInferenceOptions;
  /** Local for the model to use. If not specified, the model will use the default locale */
  locale?: string;
}

export function radiologyInsightsModelConfigurationSerializer(
  item: RadiologyInsightsModelConfiguration,
): any {
  return {
    verbose: item["verbose"],
    includeEvidence: item["includeEvidence"],
    inferenceTypes: !item["inferenceTypes"]
      ? item["inferenceTypes"]
      : item["inferenceTypes"].map((p: any) => {
          return p;
        }),
    inferenceOptions: !item["inferenceOptions"]
      ? item["inferenceOptions"]
      : radiologyInsightsInferenceOptionsSerializer(item["inferenceOptions"]),
    locale: item["locale"],
  };
}

/** A Radiology Insights inference types. */
export type RadiologyInsightsInferenceType =
  | "ageMismatch"
  | "lateralityDiscrepancy"
  | "sexMismatch"
  | "completeOrderDiscrepancy"
  | "limitedOrderDiscrepancy"
  | "finding"
  | "criticalResult"
  | "followupRecommendation"
  | "followupCommunication"
  | "radiologyProcedure";

/** The options for the Radiology Insights Inferences */
export interface RadiologyInsightsInferenceOptions {
  /** Followup Recommendation Options */
  followupRecommendation?: FollowupRecommendationOptions;
  /** Finding Options */
  finding?: FindingOptions;
}

export function radiologyInsightsInferenceOptionsSerializer(
  item: RadiologyInsightsInferenceOptions,
): any {
  return {
    followupRecommendation: !item["followupRecommendation"]
      ? item["followupRecommendation"]
      : followupRecommendationOptionsSerializer(item["followupRecommendation"]),
    finding: !item["finding"]
      ? item["finding"]
      : findingOptionsSerializer(item["finding"]),
  };
}

/** Followup Recommendation Options */
export interface FollowupRecommendationOptions {
  /** Include/Exclude followup recommendations with no specific radiologic modality, default is false. */
  includeRecommendationsWithNoSpecifiedModality?: boolean;
  /** Include/Exclude followup recommendations in references to a guideline or article, default is false. */
  includeRecommendationsInReferences?: boolean;
  /** Provide a single focused sentence as evidence for the recommendation, default is false. */
  provideFocusedSentenceEvidence?: boolean;
}

export function followupRecommendationOptionsSerializer(
  item: FollowupRecommendationOptions,
): any {
  return {
    includeRecommendationsWithNoSpecifiedModality:
      item["includeRecommendationsWithNoSpecifiedModality"],
    includeRecommendationsInReferences:
      item["includeRecommendationsInReferences"],
    provideFocusedSentenceEvidence: item["provideFocusedSentenceEvidence"],
  };
}

/** Finding Options */
export interface FindingOptions {
  /** Provide a single focused sentence as evidence for the finding, default is false. */
  provideFocusedSentenceEvidence?: boolean;
}

export function findingOptionsSerializer(item: FindingOptions): any {
  return {
    provideFocusedSentenceEvidence: item["provideFocusedSentenceEvidence"],
  };
}

export function patientRecordArraySerializer(
  result: Array<PatientRecord>,
): any[] {
  return result.map((item) => {
    return patientRecordSerializer(item);
  });
}

/** The inference results for the Radiology Insights request. */
export interface RadiologyInsightsInferenceResult {
  /** Results for the patients given in the request. */
  patientResults: RadiologyInsightsPatientResult[];
  /** The version of the model used for inference, expressed as the model date. */
  modelVersion: string;
}

export function radiologyInsightsInferenceResultDeserializer(
  item: any,
): RadiologyInsightsInferenceResult {
  return {
    patientResults: radiologyInsightsPatientResultArrayDeserializer(
      item["patientResults"],
    ),
    modelVersion: item["modelVersion"],
  };
}

export function radiologyInsightsPatientResultArrayDeserializer(
  result: Array<RadiologyInsightsPatientResult>,
): any[] {
  return result.map((item) => {
    return radiologyInsightsPatientResultDeserializer(item);
  });
}

/** The results of the model's work for a single patient. */
export interface RadiologyInsightsPatientResult {
  /** The identifier given for the patient in the request. */
  patientId: string;
  /** The model's inferences for the given patient. */
  inferences: RadiologyInsightsInferenceUnion[];
}

export function radiologyInsightsPatientResultDeserializer(
  item: any,
): RadiologyInsightsPatientResult {
  return {
    patientId: item["patientId"],
    inferences: radiologyInsightsInferenceUnionArrayDeserializer(
      item["inferences"],
    ),
  };
}

export function radiologyInsightsInferenceUnionArrayDeserializer(
  result: Array<RadiologyInsightsInferenceUnion>,
): any[] {
  return result.map((item) => {
    return radiologyInsightsInferenceUnionDeserializer(item);
  });
}

/**
 * An inference made by the Radiology Insights model regarding a patient.
 *   - AgeMismatch
 *   - SexMismatch
 *   - LateralityDiscrepancy
 *   - CompleteOrderDiscrepancy
 *   - LimitedOrderDiscrepancy
 *   - Finding
 *   - CriticalResult
 *   - FollowupRecommendation
 *   - RadiologyProcedure
 *   - FollowupCommunication
 */
export interface RadiologyInsightsInference extends Extendible {
  /** Discriminator property for RadiologyInsightsInference. */
  /** The discriminator possible values: ageMismatch, sexMismatch, lateralityDiscrepancy, completeOrderDiscrepancy, limitedOrderDiscrepancy, finding, criticalResult, radiologyProcedure, followupRecommendation, followupCommunication */
  kind: RadiologyInsightsInferenceType;
}

export function radiologyInsightsInferenceDeserializer(
  item: any,
): RadiologyInsightsInference {
  return {
    extension: !item["extension"]
      ? item["extension"]
      : extensionArrayDeserializer(item["extension"]),
    kind: item["kind"],
  };
}

/** Alias for RadiologyInsightsInferenceUnion */
export type RadiologyInsightsInferenceUnion =
  | AgeMismatchInference
  | SexMismatchInference
  | LateralityDiscrepancyInference
  | CompleteOrderDiscrepancyInference
  | LimitedOrderDiscrepancyInference
  | FindingInference
  | CriticalResultInference
  | RadiologyProcedureInference
  | FollowupRecommendationInference
  | FollowupCommunicationInference
  | RadiologyInsightsInference;

export function radiologyInsightsInferenceUnionDeserializer(
  item: any,
): RadiologyInsightsInferenceUnion {
  switch (item.kind) {
    case "ageMismatch":
      return ageMismatchInferenceDeserializer(item as AgeMismatchInference);

    case "sexMismatch":
      return sexMismatchInferenceDeserializer(item as SexMismatchInference);

    case "lateralityDiscrepancy":
      return lateralityDiscrepancyInferenceDeserializer(
        item as LateralityDiscrepancyInference,
      );

    case "completeOrderDiscrepancy":
      return completeOrderDiscrepancyInferenceDeserializer(
        item as CompleteOrderDiscrepancyInference,
      );

    case "limitedOrderDiscrepancy":
      return limitedOrderDiscrepancyInferenceDeserializer(
        item as LimitedOrderDiscrepancyInference,
      );

    case "finding":
      return findingInferenceDeserializer(item as FindingInference);

    case "criticalResult":
      return criticalResultInferenceDeserializer(
        item as CriticalResultInference,
      );

    case "radiologyProcedure":
      return radiologyProcedureInferenceDeserializer(
        item as RadiologyProcedureInference,
      );

    case "followupRecommendation":
      return followupRecommendationInferenceDeserializer(
        item as FollowupRecommendationInference,
      );

    case "followupCommunication":
      return followupCommunicationInferenceDeserializer(
        item as FollowupCommunicationInference,
      );

    default:
      return radiologyInsightsInferenceDeserializer(item);
  }
}

/**
 * Age mismatch returns when there is a conflict between an age that mentioned in the clinical note and the age of the patient.
 * The age of the patient is calculated by the date of birth that is set in the patient information along with the time of the service that is being documented.
 * EvidenceExtension with DocumentReference evidence may be added to this inference as an extension.
 */
export interface AgeMismatchInference extends RadiologyInsightsInference {
  /** The type of the inference. */
  kind: "ageMismatch";
}

export function ageMismatchInferenceDeserializer(
  item: any,
): AgeMismatchInference {
  return {
    kind: item["kind"],
    extension: !item["extension"]
      ? item["extension"]
      : extensionArrayDeserializer(item["extension"]),
  };
}

/** Sex mismatch returns when there is a conflict between the patient references (female/male, he/she/his/her), documented clinical procedures, or documented body parts to the patient Sex that mentioned in the patient info. */
export interface SexMismatchInference extends RadiologyInsightsInference {
  /** The type of the inference. */
  kind: "sexMismatch";
  /** sex indication */
  sexIndication: CodeableConcept;
}

export function sexMismatchInferenceDeserializer(
  item: any,
): SexMismatchInference {
  return {
    kind: item["kind"],
    extension: !item["extension"]
      ? item["extension"]
      : extensionArrayDeserializer(item["extension"]),
    sexIndication: codeableConceptDeserializer(item["sexIndication"]),
  };
}

/**
 * Laterality discrepancy, returns in 3 different cases:
 * OrderLateralityMismatch: there is a discrepancy between the text and the procedure/order related to the clinical document.
 * TextLateralityContradiction: there is a contradiction within the text of the clinical document.
 * TextLateralityMissing: laterality is missing/not mentioned in the clinical document.
 */
export interface LateralityDiscrepancyInference
  extends RadiologyInsightsInference {
  /** The type of the inference. */
  kind: "lateralityDiscrepancy";
  /** laterality indication */
  lateralityIndication?: CodeableConcept;
  /** mismatch type */
  discrepancyType: LateralityDiscrepancyType;
}

export function lateralityDiscrepancyInferenceDeserializer(
  item: any,
): LateralityDiscrepancyInference {
  return {
    kind: item["kind"],
    extension: !item["extension"]
      ? item["extension"]
      : extensionArrayDeserializer(item["extension"]),
    lateralityIndication: !item["lateralityIndication"]
      ? item["lateralityIndication"]
      : codeableConceptDeserializer(item["lateralityIndication"]),
    discrepancyType: item["discrepancyType"],
  };
}

/** Laterality discrepancy type */
export type LateralityDiscrepancyType =
  | "orderLateralityMismatch"
  | "textLateralityContradiction"
  | "textLateralityMissing";

/**
 * Completed Order mismatch
 * A complete order requires that all the body parts listed in the order will be document (some body parts requires measurements).
 * This inference is relevant only for ultrasound procedure/order of type US ABDOMEN, US RETROPERITONEAL, US PELVIS, or US BREAST.
 * This inference returns when there is a missing body part or a missing measurement of a body part that is required by the order.
 */
export interface CompleteOrderDiscrepancyInference
  extends RadiologyInsightsInference {
  /** The type of the inference. */
  kind: "completeOrderDiscrepancy";
  /** Order Type. */
  orderType: CodeableConcept;
  /** List of missing body parts required by a complete order. */
  missingBodyParts?: CodeableConcept[];
  /** List of missing body parts that require measurement by a complete order. */
  missingBodyPartMeasurements?: CodeableConcept[];
}

export function completeOrderDiscrepancyInferenceDeserializer(
  item: any,
): CompleteOrderDiscrepancyInference {
  return {
    kind: item["kind"],
    extension: !item["extension"]
      ? item["extension"]
      : extensionArrayDeserializer(item["extension"]),
    orderType: codeableConceptDeserializer(item["orderType"]),
    missingBodyParts: !item["missingBodyParts"]
      ? item["missingBodyParts"]
      : codeableConceptArrayDeserializer(item["missingBodyParts"]),
    missingBodyPartMeasurements: !item["missingBodyPartMeasurements"]
      ? item["missingBodyPartMeasurements"]
      : codeableConceptArrayDeserializer(item["missingBodyPartMeasurements"]),
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
 * Limited Order mismatch
 * A limited order requires that not all the body parts listed in the order will be document.
 * This inference is relevant only for ultrasound procedure/order of type US ABDOMEN, US RETROPERITONEAL, US PELVIS, or US BREAST.
 * This inference returns when all body parts and measurement of a body part required by the order, mentioned in the text.
 */
export interface LimitedOrderDiscrepancyInference
  extends RadiologyInsightsInference {
  /** The type of the inference. */
  kind: "limitedOrderDiscrepancy";
  /** Order Type. */
  orderType: CodeableConcept;
  /** Complete list of body parts found in the document. */
  presentBodyParts?: CodeableConcept[];
  /** Complete list of body parts that require measurement by a complete order. */
  presentBodyPartMeasurements?: CodeableConcept[];
}

export function limitedOrderDiscrepancyInferenceDeserializer(
  item: any,
): LimitedOrderDiscrepancyInference {
  return {
    kind: item["kind"],
    extension: !item["extension"]
      ? item["extension"]
      : extensionArrayDeserializer(item["extension"]),
    orderType: codeableConceptDeserializer(item["orderType"]),
    presentBodyParts: !item["presentBodyParts"]
      ? item["presentBodyParts"]
      : codeableConceptArrayDeserializer(item["presentBodyParts"]),
    presentBodyPartMeasurements: !item["presentBodyPartMeasurements"]
      ? item["presentBodyPartMeasurements"]
      : codeableConceptArrayDeserializer(item["presentBodyPartMeasurements"]),
  };
}

/**
 * Finding Inference
 * Clinical Finding can be an observation or condition that is mentioned in the clinical document.
 */
export interface FindingInference extends RadiologyInsightsInference {
  /** The type of the inference. */
  kind: "finding";
  /** The finding data */
  finding: Observation;
}

export function findingInferenceDeserializer(item: any): FindingInference {
  return {
    kind: item["kind"],
    extension: !item["extension"]
      ? item["extension"]
      : extensionArrayDeserializer(item["extension"]),
    finding: observationDeserializer(item["finding"]),
  };
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
    ...item,
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
    resourceType: item["resourceType"],
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

/** Identifies and highlights potential Critical Findings found in a clinical document. */
export interface CriticalResultInference extends RadiologyInsightsInference {
  /** The type of the inference. */
  kind: "criticalResult";
  /** Critical Result */
  result: CriticalResult;
}

export function criticalResultInferenceDeserializer(
  item: any,
): CriticalResultInference {
  return {
    kind: item["kind"],
    extension: !item["extension"]
      ? item["extension"]
      : extensionArrayDeserializer(item["extension"]),
    result: criticalResultDeserializer(item["result"]),
  };
}

/** Critical Result */
export interface CriticalResult {
  /** description of the critical result */
  description: string;
  /** finding inference */
  finding?: Observation;
}

export function criticalResultDeserializer(item: any): CriticalResult {
  return {
    description: item["description"],
    finding: !item["finding"]
      ? item["finding"]
      : observationDeserializer(item["finding"]),
  };
}

/** Procedures found in the document text or associated with the document administrative metadata. */
export interface RadiologyProcedureInference
  extends RadiologyInsightsInference {
  /** The type of the inference. */
  kind: "radiologyProcedure";
  /** The LOINC codes for the procedure. */
  procedureCodes?: CodeableConcept[];
  /** Imaging procedure. */
  imagingProcedures: ImagingProcedure[];
  /** The related procedure information from the document administration information or as extracted from the document. */
  orderedProcedure: OrderedProcedure;
}

export function radiologyProcedureInferenceDeserializer(
  item: any,
): RadiologyProcedureInference {
  return {
    kind: item["kind"],
    extension: !item["extension"]
      ? item["extension"]
      : extensionArrayDeserializer(item["extension"]),
    procedureCodes: !item["procedureCodes"]
      ? item["procedureCodes"]
      : codeableConceptArrayDeserializer(item["procedureCodes"]),
    imagingProcedures: imagingProcedureArrayDeserializer(
      item["imagingProcedures"],
    ),
    orderedProcedure: orderedProcedureDeserializer(item["orderedProcedure"]),
  };
}

export function imagingProcedureArrayDeserializer(
  result: Array<ImagingProcedure>,
): any[] {
  return result.map((item) => {
    return imagingProcedureDeserializer(item);
  });
}

/** Order Procedure - is this always a radiology procedure? */
export interface ImagingProcedure {
  /** The procedure modality */
  modality: CodeableConcept;
  /** The procedure anatomy */
  anatomy: CodeableConcept;
  /** The procedure laterality */
  laterality?: CodeableConcept;
  /** The procedure contrast */
  contrast?: RadiologyCodeWithTypes;
  /** The procedure view */
  view?: RadiologyCodeWithTypes;
}

export function imagingProcedureDeserializer(item: any): ImagingProcedure {
  return {
    modality: codeableConceptDeserializer(item["modality"]),
    anatomy: codeableConceptDeserializer(item["anatomy"]),
    laterality: !item["laterality"]
      ? item["laterality"]
      : codeableConceptDeserializer(item["laterality"]),
    contrast: !item["contrast"]
      ? item["contrast"]
      : radiologyCodeWithTypesDeserializer(item["contrast"]),
    view: !item["view"]
      ? item["view"]
      : radiologyCodeWithTypesDeserializer(item["view"]),
  };
}

/** Code with types */
export interface RadiologyCodeWithTypes {
  /** Code */
  code: CodeableConcept;
  /** Collection of types */
  types: CodeableConcept[];
}

export function radiologyCodeWithTypesDeserializer(
  item: any,
): RadiologyCodeWithTypes {
  return {
    code: codeableConceptDeserializer(item["code"]),
    types: codeableConceptArrayDeserializer(item["types"]),
  };
}

/** Recommendation Inference */
export interface FollowupRecommendationInference
  extends RadiologyInsightsInference {
  /** The type of the inference. */
  kind: "followupRecommendation";
  /** Clinically relevant time/time-period for recommendation */
  effectiveDateTime?: string;
  /** Clinically relevant time/time-period for recommendation */
  effectivePeriod?: Period;
  /** Findings related to this recommendation. */
  findings?: RecommendationFinding[];
  /**
   * Indicate that the sentence with the recommendation holds a conditional statement.
   * Examples of conditional phrases: If the patient remains clinically symptomatic, Unless otherwise indicated clinically in the interim.
   */
  isConditional: boolean;
  /**
   * Indicate that the sentence with the recommendation holds an optional statement.
   * Examples of Optional phrases: 'If there is suspicion for a fracture, recommend a dedicated x-ray of the right clavicle.
   * Consider F/U exam in 6-12 months if patient has severe primary hyperparathyroidism, is being treated with high dose steroids or in any medical condition where rapid and severe loss of bone mass could occur.
   * If the patient is high risk, follow-up CT thorax is recommended in 12 months to ensure stability.
   */
  isOption: boolean;
  /** Recommendation is a guideline section describing all the recommendations for the follow-up of a particular finding. */
  isGuideline: boolean;
  /**
   * Ambiguous, vague, or imprecise language, that can be considered a Hedging Statement within the sentence of the recommendation.
   * Examples of hedging: 'can be considered', 'may be further evaluated', 'correlate clinically', 'as clinically indicated'.
   */
  isHedging: boolean;
  /** Recommended procedure. */
  recommendedProcedure: ProcedureRecommendationUnion;
}

export function followupRecommendationInferenceDeserializer(
  item: any,
): FollowupRecommendationInference {
  return {
    kind: item["kind"],
    extension: !item["extension"]
      ? item["extension"]
      : extensionArrayDeserializer(item["extension"]),
    effectiveDateTime: item["effectiveDateTime"],
    effectivePeriod: !item["effectivePeriod"]
      ? item["effectivePeriod"]
      : periodDeserializer(item["effectivePeriod"]),
    findings: !item["findings"]
      ? item["findings"]
      : recommendationFindingArrayDeserializer(item["findings"]),
    isConditional: item["isConditional"],
    isOption: item["isOption"],
    isGuideline: item["isGuideline"],
    isHedging: item["isHedging"],
    recommendedProcedure: procedureRecommendationUnionDeserializer(
      item["recommendedProcedure"],
    ),
  };
}

export function recommendationFindingArrayDeserializer(
  result: Array<RecommendationFinding>,
): any[] {
  return result.map((item) => {
    return recommendationFindingDeserializer(item);
  });
}

/** Recommendation Finding - finding reference for recommendation */
export interface RecommendationFinding extends Extendible {
  /** finding inference */
  finding?: Observation;
  /** critical finding inference */
  criticalFinding?: CriticalResult;
  /** recommendation finding status */
  recommendationFindingStatus: RecommendationFindingStatusType;
}

export function recommendationFindingDeserializer(
  item: any,
): RecommendationFinding {
  return {
    extension: !item["extension"]
      ? item["extension"]
      : extensionArrayDeserializer(item["extension"]),
    finding: !item["finding"]
      ? item["finding"]
      : observationDeserializer(item["finding"]),
    criticalFinding: !item["criticalFinding"]
      ? item["criticalFinding"]
      : criticalResultDeserializer(item["criticalFinding"]),
    recommendationFindingStatus: item["recommendationFindingStatus"],
  };
}

/** Recommendation finding status */
export type RecommendationFindingStatusType =
  | "present"
  | "differential"
  | "ruleOut"
  | "conditional";

/** Radiology Insights abstract procedure. */
export interface ProcedureRecommendation {
  /** Discriminator property for ProcedureRecommendation. */
  /** The discriminator possible values: genericProcedureRecommendation, imagingProcedureRecommendation */
  kind: string;
}

export function procedureRecommendationDeserializer(
  item: any,
): ProcedureRecommendation {
  return {
    kind: item["kind"],
  };
}

/** Alias for ProcedureRecommendationUnion */
export type ProcedureRecommendationUnion =
  | GenericProcedureRecommendation
  | ImagingProcedureRecommendation
  | ProcedureRecommendation;

export function procedureRecommendationUnionDeserializer(
  item: any,
): ProcedureRecommendationUnion {
  switch (item.kind) {
    case "genericProcedureRecommendation":
      return genericProcedureRecommendationDeserializer(
        item as GenericProcedureRecommendation,
      );

    case "imagingProcedureRecommendation":
      return imagingProcedureRecommendationDeserializer(
        item as ImagingProcedureRecommendation,
      );

    default:
      return procedureRecommendationDeserializer(item);
  }
}

/** Generic procedure information. */
export interface GenericProcedureRecommendation
  extends ProcedureRecommendation {
  /** The type of the procedure. */
  kind: "genericProcedureRecommendation";
  /** The procedure modality */
  code: CodeableConcept;
  /** The procedure description */
  description?: string;
}

export function genericProcedureRecommendationDeserializer(
  item: any,
): GenericProcedureRecommendation {
  return {
    kind: item["kind"],
    code: codeableConceptDeserializer(item["code"]),
    description: item["description"],
  };
}

/** Radiology procedure. */
export interface ImagingProcedureRecommendation
  extends ProcedureRecommendation {
  /** The type of the procedure. */
  kind: "imagingProcedureRecommendation";
  /** The LOINC codes for the procedure. */
  procedureCodes?: CodeableConcept[];
  /** Imaging procedure. */
  imagingProcedures: ImagingProcedure[];
}

export function imagingProcedureRecommendationDeserializer(
  item: any,
): ImagingProcedureRecommendation {
  return {
    kind: item["kind"],
    procedureCodes: !item["procedureCodes"]
      ? item["procedureCodes"]
      : codeableConceptArrayDeserializer(item["procedureCodes"]),
    imagingProcedures: imagingProcedureArrayDeserializer(
      item["imagingProcedures"],
    ),
  };
}

/** Communication Inference */
export interface FollowupCommunicationInference
  extends RadiologyInsightsInference {
  /** The type of the inference. */
  kind: "followupCommunication";
  /** The communication date/time. */
  dateTime?: Date[];
  /** The recipient of the communication. */
  recipient?: MedicalProfessionalType[];
  /** Communication was acknowledged */
  wasAcknowledged: boolean;
}

export function followupCommunicationInferenceDeserializer(
  item: any,
): FollowupCommunicationInference {
  return {
    kind: item["kind"],
    extension: !item["extension"]
      ? item["extension"]
      : extensionArrayDeserializer(item["extension"]),
    dateTime: !item["dateTime"]
      ? item["dateTime"]
      : item["dateTime"].map((p: any) => {
          return new Date(p);
        }),
    recipient: !item["recipient"]
      ? item["recipient"]
      : item["recipient"].map((p: any) => {
          return p;
        }),
    wasAcknowledged: item["wasAcknowledged"],
  };
}

/** Medical Professional Type */
export type MedicalProfessionalType =
  | "unknown"
  | "doctor"
  | "nurse"
  | "midwife"
  | "physicianAssistant";

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
    ...item,
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

/** Repeatability Result header options */
export type RepeatabilityResult = "accepted" | "rejected";

/** Known values of {@link ApiVersion} that the service accepts. */
export enum KnownApiVersion {
  v2023_09_01_Preview = "2023-09-01-preview",
}
