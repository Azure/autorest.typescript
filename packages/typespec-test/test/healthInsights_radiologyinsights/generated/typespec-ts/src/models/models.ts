// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ErrorModel } from "@azure-rest/core-client";

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

/** Patient structured information, including demographics and known structured clinical information. */
export interface PatientInfo {
  /** The patient's sex. */
  sex?: PatientInfoSex;
  /** The patient's date of birth. */
  birthDate?: Date;
  /** Known clinical information for the patient, structured. */
  clinicalInfo?: Resource[];
}

/** The patient's sex. */
/** */
export type PatientInfoSex = "female" | "male" | "unspecified";

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

/**
 * The base definition for all elements contained inside a resource.
 * Based on [FHIR Element](https://www.hl7.org/fhir/R4/element.html)
 */
export interface Element {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Additional Content defined by implementations */
  extension?: Array<Extension>;
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
  valueTime?: Date;
  /** Value as dateTime. */
  valueDateTime?: string;
  /** Value as Period. */
  valuePeriod?: Period;
  /** Value as reference. */
  valueReference?: Reference;
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

/**
 * Concept - reference to a terminology or just text
 * Based on [FHIR CodeableConcept](https://www.hl7.org/fhir/R4/datatypes.html#CodeableConcept)
 */
export interface CodeableConcept extends Element {
  /** Code defined by a terminology system */
  coding?: Array<Coding>;
  /** Plain text representation of the concept */
  text?: string;
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

/** A duration of time during which an event is happening */
export interface TimePeriod {
  /** Starting time with inclusive boundary */
  start?: Date;
  /** End time with inclusive boundary, if not ongoing */
  end?: Date;
}

/** Known values codes that can be used to indicate the class of encounter (TODO://Based on FHIR value set--http://....). */
/** */
export type EncounterClass =
  | "inpatient"
  | "ambulatory"
  | "observation"
  | "emergency"
  | "virtual"
  | "healthHome";

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
  authors?: Array<DocumentAuthor>;
  /** specialty type the document */
  specialtyType?: SpecialtyType;
  /** Administrative metadata for the document. */
  administrativeMetadata?: DocumentAdministrativeMetadata;
  /** The content of the patient document. */
  content: DocumentContent;
}

/** The type of the patient document, such as 'note' (text document) or 'fhirBundle' (FHIR JSON document). */
/** */
export type DocumentType =
  | "note"
  | "fhirBundle"
  | "dicom"
  | "genomicSequencing";
/** The type of the clinical document. */
/** */
export type ClinicalDocumentType =
  | "consultation"
  | "dischargeSummary"
  | "historyAndPhysical"
  | "radiologyReport"
  | "procedure"
  | "progress"
  | "laboratory"
  | "pathologyReport";

/** Document author */
export interface DocumentAuthor {
  /** author id */
  id?: string;
  /** Text representation of the full name */
  fullName?: string;
}

/** Known values codes that can be used to indicate the type of the Specialty. */
/** */
export type SpecialtyType = "pathology" | "radiology";

/** Document administrative metadata */
export interface DocumentAdministrativeMetadata {
  /** List of procedure information associated with the document. */
  orderedProcedures?: OrderedProcedure[];
  /** Reference to the encounter associated with the document. */
  encounterId?: string;
}

/** FHIR extendible element */
export interface Extendible {
  /** Additional Content defined by implementations */
  extension?: Extension[];
}

/** Procedure information */
export interface OrderedProcedure extends Extendible {
  /** Procedure code */
  code?: CodeableConcept;
  /** Procedure description */
  description?: string;
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

/**
 * The type of the content's source.
 * In case the source type is 'inline', the content is given as a string (for instance, text).
 * In case the source type is 'reference', the content is given as a URI.
 */
/** */
export type DocumentContentSourceType = "inline" | "reference";

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

/** A Radiology Insights inference types. */
/** */
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

/** Followup Recommendation Options */
export interface FollowupRecommendationOptions {
  /** Include/Exclude followup recommendations with no specific radiologic modality, default is false. */
  includeRecommendationsWithNoSpecifiedModality?: boolean;
  /** Include/Exclude followup recommendations in references to a guideline or article, default is false. */
  includeRecommendationsInReferences?: boolean;
  /** Provide a single focused sentence as evidence for the recommendation, default is false. */
  provideFocusedSentenceEvidence?: boolean;
}

/** Finding Options */
export interface FindingOptions {
  /** Provide a single focused sentence as evidence for the finding, default is false. */
  provideFocusedSentenceEvidence?: boolean;
}

/** The body of the Radiology Insights request. */
export interface RadiologyInsightsData {
  /** The list of patients, including their clinical information and data. */
  patients: Array<PatientRecord>;
  /** Configuration affecting the Radiology Insights model's inference. */
  configuration?: RadiologyInsightsModelConfiguration;
}

/** Provides status details for long running operations. */
export interface HealthInsightsOperationStatusError {
  /** The unique ID of the operation. */
  readonly id: string;
  /** The status of the operation */
  readonly status: JobStatus;
  /** The date and time when the processing job was created. */
  readonly createdDateTime?: Date;
  /** The date and time when the processing job is set to expire. */
  readonly expirationDateTime?: Date;
  /** The date and time when the processing job was last updated. */
  readonly lastUpdateDateTime?: Date;
  /** Error object that describes the error when status is "Failed". */
  error?: ErrorModel;
}

/** The status of the processing job. */
/** */
export type JobStatus =
  | "notStarted"
  | "running"
  | "succeeded"
  | "failed"
  | "canceled";

/** The inference results for the Radiology Insights request. */
export interface RadiologyInsightsInferenceResult {
  /** Results for the patients given in the request. */
  patientResults: Array<RadiologyInsightsPatientResult>;
  /** The version of the model used for inference, expressed as the model date. */
  modelVersion: string;
}

/** The results of the model's work for a single patient. */
export interface RadiologyInsightsPatientResult {
  /** The identifier given for the patient in the request. */
  patientId: string;
  /** The model's inferences for the given patient. */
  inferences: Array<RadiologyInsightsInferenceUnion>;
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
  /** the discriminator possible values: ageMismatch, sexMismatch, lateralityDiscrepancy, completeOrderDiscrepancy, limitedOrderDiscrepancy, finding, criticalResult, radiologyProcedure, followupRecommendation, followupCommunication */
  kind: string;
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

/** Sex mismatch returns when there is a conflict between the patient references (female/male, he/she/his/her), documented clinical procedures, or documented body parts to the patient Sex that mentioned in the patient info. */
export interface SexMismatchInference extends RadiologyInsightsInference {
  /** The type of the inference. */
  kind: "sexMismatch";
  /** sex indication */
  sexIndication: CodeableConcept;
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

/** Laterality discrepancy type */
/** */
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
  missingBodyParts?: Array<CodeableConcept>;
  /** List of missing body parts that require measurement by a complete order. */
  missingBodyPartMeasurements?: Array<CodeableConcept>;
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
  presentBodyParts?: Array<CodeableConcept>;
  /** Complete list of body parts that require measurement by a complete order. */
  presentBodyPartMeasurements?: Array<CodeableConcept>;
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

/**
 * A resource with narrative, extensions, and contained resources
 * Based on [FHIR DomainResource](https://www.hl7.org/fhir/domainresource.html)
 */
export interface DomainResource extends Resource {
  /** Text summary of the resource, for human interpretation */
  text?: Narrative;
  /** Contained, inline Resources */
  contained?: Array<Resource>;
  /** Additional Content defined by implementations */
  extension?: Array<Extension>;
  /** Extensions that cannot be ignored */
  modifierExtension?: Array<Extension>;
  /** the discriminator possible values: Observation, Condition, ResearchStudy */
  resourceType: string;
}

/**
 * Detailed information about observations
 * Based on [FHIR Observation](https://www.hl7.org/fhir/R4/observation.html)
 */
export interface Observation extends DomainResource {
  /** resourceType */
  resourceType: "Observation";
  /** Business Identifier for observation */
  identifier?: Array<Identifier>;
  /** registered | preliminary | final | amended + */
  status: ObservationStatusCodeType;
  /** Classification of  type of observation */
  category?: Array<CodeableConcept>;
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
  valueTime?: Date;
  /** Actual result */
  valueDateTime?: string;
  /** Actual result */
  valuePeriod?: Period;
  /** Why the result is missing */
  dataAbsentReason?: CodeableConcept;
  /** High, low, normal, etc. */
  interpretation?: Array<CodeableConcept>;
  /** Comments about the observation */
  note?: Array<Annotation>;
  /** Observed body part */
  bodySite?: CodeableConcept;
  /** How it was done */
  method?: CodeableConcept;
  /** Provides guide for interpretation */
  referenceRange?: Array<ObservationReferenceRange>;
  /** Related resource that belongs to the Observation group */
  hasMember?: Array<Reference>;
  /** Related measurements the observation is made from */
  derivedFrom?: Array<Reference>;
  /** Component results */
  component?: Array<ObservationComponent>;
}

/**
 * Observation Status
 * Based on [FHIR ObservationStatus](https://www.hl7.org/fhir/R4/valueset-observation-status.html)
 */
/** */
export type ObservationStatusCodeType =
  | "registered"
  | "preliminary"
  | "final"
  | "amended"
  | "corrected"
  | "cancelled"
  | "entered-in-error"
  | "unknown";

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
  appliesTo?: Array<CodeableConcept>;
  /** Applicable age range, if relevant */
  age?: Range;
  /** Text based reference range in an observation */
  text?: string;
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
  valueTime?: Date;
  /** Value as dateTime. */
  valueDateTime?: string;
  /** Value as Period. */
  valuePeriod?: Period;
  /** Value as reference. */
  valueReference?: Reference;
  /** Why the component result is missing */
  dataAbsentReason?: CodeableConcept;
  /** High, low, normal, etc. */
  interpretation?: Array<CodeableConcept>;
  /** Provides guide for interpretation of component result */
  referenceRange?: Array<ObservationReferenceRange>;
}

/**
 * Detailed information about conditions, problems or diagnoses
 * Based on [FHIR Condition](https://www.hl7.org/fhir/R4/condition.html)
 */
export interface Condition extends DomainResource {
  /** resourceType */
  resourceType: "Condition";
  /** External Ids for this condition */
  identifier?: Array<Identifier>;
  /** active | recurrence | relapse | inactive | remission | resolved */
  clinicalStatus?: CodeableConcept;
  /** unconfirmed | provisional | differential | confirmed | refuted | entered-in-error */
  verificationStatus?: CodeableConcept;
  /** problem-list-item | encounter-diagnosis */
  category?: Array<CodeableConcept>;
  /** Subjective severity of condition */
  severity?: CodeableConcept;
  /** Identification of the condition, problem or diagnosis */
  code?: CodeableConcept;
  /** Anatomical location, if relevant */
  bodySite?: Array<CodeableConcept>;
  /** Encounter created as part of */
  encounter?: Reference;
  /** Estimated or actual date,  date-time, or age */
  onsetDateTime?: string;
  /** Estimated or actual date,  date-time, or age */
  onsetAge?: Quantity;
  /** Estimated or actual date,  date-time, or age */
  onsetPeriod?: Period;
  /** Estimated or actual date,  date-time, or age */
  onsetRange?: Range;
  /** Estimated or actual date,  date-time, or age */
  onsetString?: string;
  /** When in resolution/remission */
  abatementDateTime?: string;
  /** When in resolution/remission */
  abatementAge?: Quantity;
  /** When in resolution/remission */
  abatementPeriod?: Period;
  /** When in resolution/remission */
  abatementRange?: Range;
  /** When in resolution/remission */
  abatementString?: string;
  /** Date record was first recorded */
  recordedDate?: string;
  /** stge/grade, usually assessed formally */
  stage?: Array<ConditionStage>;
  /** Additional information about the Condition */
  note?: Array<Annotation>;
}

/**
 * Stage/grade, usually assessed formally
 * Based on [FHIR Condition.Stage](https://www.hl7.org/fhir/R4/condition.html)
 */
export interface ConditionStage {
  /** Simple summary (disease specific) */
  summary?: CodeableConcept;
  /** Kind of staging */
  type?: CodeableConcept;
}

/**
 * Detailed information about Research Study
 * Based on [FHIR ResearchStudy](https://www.hl7.org/fhir/R4/researchstudy.html)
 */
export interface ResearchStudy extends DomainResource {
  /** resourceType */
  resourceType: "ResearchStudy";
  /** Business Identifier for study */
  identifier?: Array<Identifier>;
  /** Name for this study */
  title?: string;
  /** Steps followed in executing study */
  protocol?: Array<Reference>;
  /** Part of larger study */
  partOf?: Array<Reference>;
  /** active | administratively-completed | approved | closed-to-accrual | closed-to-accrual-and-intervention | completed | disapproved | in-review | temporarily-closed-to-accrual | temporarily-closed-to-accrual-and-intervention | withdrawn */
  status: ResearchStudyStatusCodeType;
  /** treatment | prevention | diagnostic | supportive-care | screening | health-services-research | basic-science | device-feasibility */
  primaryPurposeType?: CodeableConcept;
  /** n-a | early-phase-1 | phase-1 | phase-1-phase-2 | phase-2 | phase-2-phase-3 | phase-3 | phase-4 */
  phase?: CodeableConcept;
  /** Classifications for the study */
  category?: Array<CodeableConcept>;
  /** Drugs, devices, etc. under study */
  focus?: Array<CodeableConcept>;
  /** Condition being studied */
  condition?: Array<CodeableConcept>;
  /** Contact details for the study */
  contact?: Array<ContactDetail>;
  /** Used to search for the study */
  keyword?: Array<CodeableConcept>;
  /** Geographic region(s) for study */
  location?: Array<CodeableConcept>;
  /** What this is study doing */
  description?: string;
  /** Inclusion & exclusion criteria */
  enrollment?: Array<Reference>;
  /** When the study began and ended */
  period?: Period;
  /** Organization that initiates and is legally responsible for the study */
  sponsor?: Reference;
  /** Researcher who oversees multiple aspects of the study */
  principalInvestigator?: Reference;
  /** Facility where study activities are conducted */
  site?: Array<Reference>;
  /** accrual-goal-met | closed-due-to-toxicity | closed-due-to-lack-of-study-progress | temporarily-closed-per-study-design */
  reasonStopped?: CodeableConcept;
  /** Comments made about the study */
  note?: Array<Annotation>;
  /** Defined path through the study for a subject */
  arm?: { name: string; type?: CodeableConcept; description?: string }[];
  /** A goal for the study */
  objective?: { name: string; type?: CodeableConcept }[];
}

/** https://www.hl7.org/fhir/R4/codesystem-research-study-status.html */
/** */
export type ResearchStudyStatusCodeType =
  | "active"
  | "administratively-completed"
  | "approved"
  | "closed-to-accrual"
  | "closed-to-accrual-and-intervention"
  | "completed"
  | "disapproved"
  | "in-review"
  | "temporarily-closed-to-accrual"
  | "temporarily-closed-to-accrual-and-intervention"
  | "withdrawn";

/** Contact details (See: https://www.hl7.org/fhir/R4/metadatatypes.html#ContactDetail) */
export interface ContactDetail extends Element {
  /** Name of an individual to contact */
  name?: string;
  /** Contact details for individual or organization */
  telecom?: Array<ContactPoint>;
}

/**
 * Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc.
 * See https://www.hl7.org/fhir/R4/datatypes.html#ContactPoint
 */
export interface ContactPoint {
  /** phone | fax | email | pager | url | sms | other */
  system?: ContactPointSystem;
  /** The actual contact point details */
  value?: string;
  /** home | work | temp | old | mobile - purpose of this contact point */
  use?: ContactPointUse;
  /** Specify preferred order of use (1 = highest) */
  rank?: number;
  /** Time period when the contact point was/is in use */
  period?: Period;
}

/**
 * Contact Point System
 * see https://www.hl7.org/fhir/R4/valueset-contact-point-system.html
 */
/** */
export type ContactPointSystem =
  | "phone"
  | "fax"
  | "email"
  | "pager"
  | "url"
  | "sms"
  | "other";
/**
 * Contact Point Use
 * See: 	http://hl7.org/fhir/ValueSet/contact-point-use
 */
/** */
export type ContactPointUse = "home" | "work" | "temp" | "old" | "mobile";

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

/** Identifies and highlights potential Critical Findings found in a clinical document. */
export interface CriticalResultInference extends RadiologyInsightsInference {
  /** The type of the inference. */
  kind: "criticalResult";
  /** Critical Result */
  result: CriticalResult;
}

/** Critical Result */
export interface CriticalResult {
  /** description of the critical result */
  description: string;
  /** finding inference */
  finding?: Observation;
}

/** Procedures found in the document text or associated with the document administrative metadata. */
export interface RadiologyProcedureInference
  extends RadiologyInsightsInference {
  /** The type of the inference. */
  kind: "radiologyProcedure";
  /** The LOINC codes for the procedure. */
  procedureCodes?: Array<CodeableConcept>;
  /** Imaging procedure. */
  imagingProcedures: Array<ImagingProcedure>;
  /** The related procedure information from the document administration information or as extracted from the document. */
  orderedProcedure: OrderedProcedure;
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

/** Code with types */
export interface RadiologyCodeWithTypes {
  /** Code */
  code: CodeableConcept;
  /** Collection of types */
  types: Array<CodeableConcept>;
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
  findings?: Array<RecommendationFinding>;
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

/** Recommendation Finding - finding reference for recommendation */
export interface RecommendationFinding extends Extendible {
  /** finding inference */
  finding?: Observation;
  /** critical finding inference */
  criticalFinding?: CriticalResult;
  /** recommendation finding status */
  recommendationFindingStatus: RecommendationFindingStatusType;
}

/** Recommendation finding status */
/** */
export type RecommendationFindingStatusType =
  | "present"
  | "differential"
  | "ruleOut"
  | "conditional";

/** Radiology Insights abstract procedure. */
export interface ProcedureRecommendation {
  /** the discriminator possible values: genericProcedureRecommendation, imagingProcedureRecommendation */
  kind: string;
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

/** Radiology procedure. */
export interface ImagingProcedureRecommendation
  extends ProcedureRecommendation {
  /** The type of the procedure. */
  kind: "imagingProcedureRecommendation";
  /** The LOINC codes for the procedure. */
  procedureCodes?: Array<CodeableConcept>;
  /** Imaging procedure. */
  imagingProcedures: Array<ImagingProcedure>;
}

/** Communication Inference */
export interface FollowupCommunicationInference
  extends RadiologyInsightsInference {
  /** The type of the inference. */
  kind: "followupCommunication";
  /** The communication date/time. */
  dateTime?: Date[];
  /** The recipient of the communication. */
  recipient?: Array<MedicalProfessionalType>;
  /** Communication was acknowledged */
  wasAcknowledged: boolean;
}

/** Medical Professional Type */
/** */
export type MedicalProfessionalType =
  | "unknown"
  | "doctor"
  | "nurse"
  | "midwife"
  | "physicianAssistant";

/** The response for the Radiology Insights request. */
export interface RadiologyInsightsResult {
  /** The unique ID of the operation. */
  readonly id: string;
  /** The status of the operation */
  readonly status: JobStatus;
  /** The date and time when the processing job was created. */
  readonly createdDateTime?: Date;
  /** The date and time when the processing job is set to expire. */
  readonly expirationDateTime?: Date;
  /** The date and time when the processing job was last updated. */
  readonly lastUpdateDateTime?: Date;
  /** Error object that describes the error when status is "Failed". */
  error?: ErrorModel;
  /** The result of the operation. */
  result?: RadiologyInsightsInferenceResult;
}

/** */
export type ApiVersion = "2023-09-01-preview";
/** Repeatability Result header options */
/** */
export type RepeatabilityResult = "accepted" | "rejected";
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
/** Alias for DomainResourceUnion */
export type DomainResourceUnion =
  | Observation
  | Condition
  | ResearchStudy
  | DomainResource;
/** Alias for ProcedureRecommendationUnion */
export type ProcedureRecommendationUnion =
  | GenericProcedureRecommendation
  | ImagingProcedureRecommendation
  | ProcedureRecommendation;
