// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { ErrorModel } from "@azure-rest/core-client";

/** The response for the Radiology Insights request. */
export interface RadiologyInsightsResultOutput {
  /** The unique ID of the operation. */
  readonly id: string;
  /**
   * The status of the operation
   *
   * Possible values: "notStarted", "running", "succeeded", "failed", "canceled"
   */
  readonly status: string;
  /** The date and time when the processing job was created. */
  readonly createdDateTime?: string;
  /** The date and time when the processing job is set to expire. */
  readonly expirationDateTime?: string;
  /** The date and time when the processing job was last updated. */
  readonly lastUpdateDateTime?: string;
  /** Error object that describes the error when status is "Failed". */
  error?: ErrorModel;
  /** The result of the operation. */
  result?: RadiologyInsightsInferenceResultOutput;
}

/** The inference results for the Radiology Insights request. */
export interface RadiologyInsightsInferenceResultOutput {
  /** Results for the patients given in the request. */
  patientResults: Array<RadiologyInsightsPatientResultOutput>;
  /** The version of the model used for inference, expressed as the model date. */
  modelVersion: string;
}

/** The results of the model's work for a single patient. */
export interface RadiologyInsightsPatientResultOutput {
  /** The identifier given for the patient in the request. */
  patientId: string;
  /** The model's inferences for the given patient. */
  inferences: Array<RadiologyInsightsInferenceOutput>;
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
export interface RadiologyInsightsInferenceOutputParent
  extends ExtendibleOutput {
  kind: string;
}

/** FHIR extendible element */
export interface ExtendibleOutput {
  /** Additional Content defined by implementations */
  extension?: Array<ExtensionOutput>;
}

/**
 * Base for all elements
 * Based on [FHIR Element](https://www.hl7.org/fhir/datatypes.html#Element)
 */
export interface ExtensionOutput extends ElementOutput {
  /** Source of the definition for the extension code - a logical name or a URL. */
  url: string;
  /** Value as Quantity */
  valueQuantity?: QuantityOutput;
  /** Value as CodeableConcept */
  valueCodeableConcept?: CodeableConceptOutput;
  /** Value as string */
  valueString?: string;
  /** Value as boolean */
  valueBoolean?: boolean;
  /** Value as integer */
  valueInteger?: number;
  /** Value as Range. */
  valueRange?: RangeOutput;
  /** Value as Ratio. */
  valueRatio?: RatioOutput;
  /** Value as SampledData. */
  valueSampledData?: SampledDataOutput;
  /** Value as time (hh:mm:ss) */
  valueTime?: string;
  /** Value as dateTime. */
  valueDateTime?: string;
  /** Value as Period. */
  valuePeriod?: PeriodOutput;
  /** Value as reference. */
  valueReference?: ReferenceOutput;
}

/**
 * A measured or measurable amount
 * Based on [FHIR Quantity](https://www.hl7.org/fhir/R4/datatypes.html#Quantity)
 */
export interface QuantityOutput extends ElementOutput {
  /**
   * Numerical value (with implicit precision)
   *
   * NOTE: This property is represented as a 'number' in JavaScript, but it corresponds to a 'decimal' type in other languages.
   * Due to the inherent limitations of floating-point arithmetic in JavaScript, precision issues may arise when performing arithmetic operations.
   * If your application requires high precision for arithmetic operations or when round-tripping data back to other languages, consider using a library like decimal.js, which provides an arbitrary-precision Decimal type.
   * For simpler cases, where you need to control the number of decimal places for display purposes, you can use the 'toFixed()' method. However, be aware that 'toFixed()' returns a string and may not be suitable for all arithmetic precision requirements.
   * Always be cautious with direct arithmetic operations and consider implementing appropriate rounding strategies to maintain accuracy.
   *
   */
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
 * The base definition for all elements contained inside a resource.
 * Based on [FHIR Element](https://www.hl7.org/fhir/R4/element.html)
 */
export interface ElementOutput {
  /** Unique id for inter-element referencing */
  id?: string;
  /** Additional Content defined by implementations */
  extension?: Array<ExtensionOutput>;
}

/**
 * Concept - reference to a terminology or just text
 * Based on [FHIR CodeableConcept](https://www.hl7.org/fhir/R4/datatypes.html#CodeableConcept)
 */
export interface CodeableConceptOutput extends ElementOutput {
  /** Code defined by a terminology system */
  coding?: Array<CodingOutput>;
  /** Plain text representation of the concept */
  text?: string;
}

/**
 * A Coding is a representation of a defined concept using a symbol from a defined "code system".
 * Based on [FHIR Coding](https://www.hl7.org/fhir/R4/datatypes.html#Coding)
 */
export interface CodingOutput extends ElementOutput {
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
export interface RangeOutput extends ElementOutput {
  /** Low limit */
  low?: QuantityOutput;
  /** High limit */
  high?: QuantityOutput;
}

/**
 * A ratio of two Quantity values - a numerator and a denominator
 * Based on [FHIR Ratio](https://www.hl7.org/fhir/R4/datatypes.html#Ratio)
 */
export interface RatioOutput extends ElementOutput {
  /** Numerator value */
  numerator?: QuantityOutput;
  /** Denominator value */
  denominator?: QuantityOutput;
}

/**
 * A series of measurements taken by a device
 * Based on [FHIR SampledData](https://www.hl7.org/fhir/R4/datatypes.html#SampledData)
 */
export interface SampledDataOutput extends ElementOutput {
  /** Zero value and units */
  origin: QuantityOutput;
  /**
   * Number of milliseconds between samples
   *
   * NOTE: This property is represented as a 'number' in JavaScript, but it corresponds to a 'decimal' type in other languages.
   * Due to the inherent limitations of floating-point arithmetic in JavaScript, precision issues may arise when performing arithmetic operations.
   * If your application requires high precision for arithmetic operations or when round-tripping data back to other languages, consider using a library like decimal.js, which provides an arbitrary-precision Decimal type.
   * For simpler cases, where you need to control the number of decimal places for display purposes, you can use the 'toFixed()' method. However, be aware that 'toFixed()' returns a string and may not be suitable for all arithmetic precision requirements.
   * Always be cautious with direct arithmetic operations and consider implementing appropriate rounding strategies to maintain accuracy.
   *
   */
  period: number;
  /**
   * Multiply data by this before adding to origin
   *
   * NOTE: This property is represented as a 'number' in JavaScript, but it corresponds to a 'decimal' type in other languages.
   * Due to the inherent limitations of floating-point arithmetic in JavaScript, precision issues may arise when performing arithmetic operations.
   * If your application requires high precision for arithmetic operations or when round-tripping data back to other languages, consider using a library like decimal.js, which provides an arbitrary-precision Decimal type.
   * For simpler cases, where you need to control the number of decimal places for display purposes, you can use the 'toFixed()' method. However, be aware that 'toFixed()' returns a string and may not be suitable for all arithmetic precision requirements.
   * Always be cautious with direct arithmetic operations and consider implementing appropriate rounding strategies to maintain accuracy.
   *
   */
  factor?: number;
  /**
   * Lower limit of detection
   *
   * NOTE: This property is represented as a 'number' in JavaScript, but it corresponds to a 'decimal' type in other languages.
   * Due to the inherent limitations of floating-point arithmetic in JavaScript, precision issues may arise when performing arithmetic operations.
   * If your application requires high precision for arithmetic operations or when round-tripping data back to other languages, consider using a library like decimal.js, which provides an arbitrary-precision Decimal type.
   * For simpler cases, where you need to control the number of decimal places for display purposes, you can use the 'toFixed()' method. However, be aware that 'toFixed()' returns a string and may not be suitable for all arithmetic precision requirements.
   * Always be cautious with direct arithmetic operations and consider implementing appropriate rounding strategies to maintain accuracy.
   *
   */
  lowerLimit?: number;
  /**
   * Upper limit of detection
   *
   * NOTE: This property is represented as a 'number' in JavaScript, but it corresponds to a 'decimal' type in other languages.
   * Due to the inherent limitations of floating-point arithmetic in JavaScript, precision issues may arise when performing arithmetic operations.
   * If your application requires high precision for arithmetic operations or when round-tripping data back to other languages, consider using a library like decimal.js, which provides an arbitrary-precision Decimal type.
   * For simpler cases, where you need to control the number of decimal places for display purposes, you can use the 'toFixed()' method. However, be aware that 'toFixed()' returns a string and may not be suitable for all arithmetic precision requirements.
   * Always be cautious with direct arithmetic operations and consider implementing appropriate rounding strategies to maintain accuracy.
   *
   */
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
export interface PeriodOutput extends ElementOutput {
  /** Starting time with inclusive boundary */
  start?: string;
  /** End time with inclusive boundary, if not ongoing */
  end?: string;
}

/**
 * A reference from one resource to another
 * Based on [FHIR Reference](https://www.hl7.org/fhir/R4/references.html)
 */
export interface ReferenceOutput extends ElementOutput {
  /** Literal reference, Relative, internal or absolute URL */
  reference?: string;
  /** Type the reference refers to (e.g. "Patient") */
  type?: string;
  /** Logical reference, when literal reference is not known */
  identifier?: IdentifierOutput;
  /** Text alternative for the resource */
  display?: string;
}

/**
 * An identifier intended for computation
 * Based on [FHIR Identifier](https://www.hl7.org/fhir/R4/identifier.html)
 */
export interface IdentifierOutput extends ElementOutput {
  /** usual | official | temp | secondary | old (If known) */
  use?: string;
  /** Description of identifier */
  type?: CodeableConceptOutput;
  /** The namespace for the identifier value */
  system?: string;
  /** The value that is unique */
  value?: string;
  /** Time period when id is/was valid for use */
  period?: PeriodOutput;
  /** Organization that issued id (may be just text) */
  assigner?: ReferenceOutput;
}

/**
 * Any resource that is a [DomainResource](https://www.hl7.org/fhir/domainresource.html) may include a human-readable narrative that contains a summary of the resource and may be used to represent the content of the resource to a human.
 * Based on [FHIR Narrative](https://www.hl7.org/fhir/R4/narrative.html#Narrative)
 */
export interface NarrativeOutput extends ElementOutput {
  /** generated, extensions, additional, empty */
  status: string;
  /** xhtml */
  div: string;
}

/**
 * A text note which also  contains information about who made the statement and when
 * Based on [FHIR Annotation](https://www.hl7.org/fhir/R4/datatypes.html#Annotation)
 */
export interface AnnotationOutput extends ElementOutput {
  /** Individual responsible for the annotation */
  authorString?: string;
  /** When the annotation was made */
  time?: string;
  /** The annotation - text content (as markdown) */
  text: string;
}

/**
 * Component results
 * Based on [FHIR Observation.component](https://www.hl7.org/fhir/R4/observation.html)
 */
export interface ObservationComponentOutput extends ElementOutput {
  /** Type of component observation (code / type) */
  code: CodeableConceptOutput;
  /** Value as Quantity */
  valueQuantity?: QuantityOutput;
  /** Value as CodeableConcept */
  valueCodeableConcept?: CodeableConceptOutput;
  /** Value as string */
  valueString?: string;
  /** Value as boolean */
  valueBoolean?: boolean;
  /** Value as integer */
  valueInteger?: number;
  /** Value as Range. */
  valueRange?: RangeOutput;
  /** Value as Ratio. */
  valueRatio?: RatioOutput;
  /** Value as SampledData. */
  valueSampledData?: SampledDataOutput;
  /** Value as time (hh:mm:ss) */
  valueTime?: string;
  /** Value as dateTime. */
  valueDateTime?: string;
  /** Value as Period. */
  valuePeriod?: PeriodOutput;
  /** Value as reference. */
  valueReference?: ReferenceOutput;
  /** Why the component result is missing */
  dataAbsentReason?: CodeableConceptOutput;
  /** High, low, normal, etc. */
  interpretation?: Array<CodeableConceptOutput>;
  /** Provides guide for interpretation of component result */
  referenceRange?: Array<ObservationReferenceRangeOutput>;
}

/**
 * Provides guide for interpretation of component result
 * Based on [FHIR Observation.referenceRange](https://www.hl7.org/fhir/R4/observation.html)
 */
export interface ObservationReferenceRangeOutput {
  /** Low Range, if relevant */
  low?: QuantityOutput;
  /** High Range, if relevant */
  high?: QuantityOutput;
  /** Reference range qualifier */
  type?: CodeableConceptOutput;
  /** Reference range population */
  appliesTo?: Array<CodeableConceptOutput>;
  /** Applicable age range, if relevant */
  age?: RangeOutput;
  /** Text based reference range in an observation */
  text?: string;
}

/** Contact details (See: https://www.hl7.org/fhir/R4/metadatatypes.html#ContactDetail) */
export interface ContactDetailOutput extends ElementOutput {
  /** Name of an individual to contact */
  name?: string;
  /** Contact details for individual or organization */
  telecom?: Array<ContactPointOutput>;
}

/**
 * Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc.
 * See https://www.hl7.org/fhir/R4/datatypes.html#ContactPoint
 */
export interface ContactPointOutput {
  /**
   * phone | fax | email | pager | url | sms | other
   *
   * Possible values: "phone", "fax", "email", "pager", "url", "sms", "other"
   */
  system?: string;
  /** The actual contact point details */
  value?: string;
  /**
   * home | work | temp | old | mobile - purpose of this contact point
   *
   * Possible values: "home", "work", "temp", "old", "mobile"
   */
  use?: string;
  /** Specify preferred order of use (1 = highest) */
  rank?: number;
  /** Time period when the contact point was/is in use */
  period?: PeriodOutput;
}

/** Procedure information */
export interface OrderedProcedureOutput extends ExtendibleOutput {
  /** Procedure code */
  code?: CodeableConceptOutput;
  /** Procedure description */
  description?: string;
}

/** Recommendation Finding - finding reference for recommendation */
export interface RecommendationFindingOutput extends ExtendibleOutput {
  /** finding inference */
  finding?: ObservationOutput;
  /** critical finding inference */
  criticalFinding?: CriticalResultOutput;
  /**
   * recommendation finding status
   *
   * Possible values: "present", "differential", "ruleOut", "conditional"
   */
  recommendationFindingStatus: string;
}

/**
 * Detailed information about observations
 * Based on [FHIR Observation](https://www.hl7.org/fhir/R4/observation.html)
 */
export interface ObservationOutput extends DomainResourceOutputParent {
  /** resourceType */
  resourceType: "Observation";
  /** Business Identifier for observation */
  identifier?: Array<IdentifierOutput>;
  /**
   * registered | preliminary | final | amended +
   *
   * Possible values: "registered", "preliminary", "final", "amended", "corrected", "cancelled", "entered-in-error", "unknown"
   */
  status: string;
  /** Classification of  type of observation */
  category?: Array<CodeableConceptOutput>;
  /** Type of observation (code / type) */
  code: CodeableConceptOutput;
  /** Who and/or what the observation is about */
  subject?: ReferenceOutput;
  /** Healthcare event during which this observation is made */
  encounter?: ReferenceOutput;
  /** Clinically relevant time/time-period for observation */
  effectiveDateTime?: string;
  /** Clinically relevant time/time-period for observation */
  effectivePeriod?: PeriodOutput;
  /** Clinically relevant time/time-period for observation */
  effectiveInstant?: string;
  /** Date/Time this version was made available */
  issued?: string;
  /** Actual result */
  valueQuantity?: QuantityOutput;
  /** Actual result */
  valueCodeableConcept?: CodeableConceptOutput;
  /** Actual result */
  valueString?: string;
  /** Actual result */
  valueBoolean?: boolean;
  /** Actual result */
  valueInteger?: number;
  /** Actual result */
  valueRange?: RangeOutput;
  /** Actual result */
  valueRatio?: RatioOutput;
  /** Actual result */
  valueSampledData?: SampledDataOutput;
  /** Actual result */
  valueTime?: string;
  /** Actual result */
  valueDateTime?: string;
  /** Actual result */
  valuePeriod?: PeriodOutput;
  /** Why the result is missing */
  dataAbsentReason?: CodeableConceptOutput;
  /** High, low, normal, etc. */
  interpretation?: Array<CodeableConceptOutput>;
  /** Comments about the observation */
  note?: Array<AnnotationOutput>;
  /** Observed body part */
  bodySite?: CodeableConceptOutput;
  /** How it was done */
  method?: CodeableConceptOutput;
  /** Provides guide for interpretation */
  referenceRange?: Array<ObservationReferenceRangeOutput>;
  /** Related resource that belongs to the Observation group */
  hasMember?: Array<ReferenceOutput>;
  /** Related measurements the observation is made from */
  derivedFrom?: Array<ReferenceOutput>;
  /** Component results */
  component?: Array<ObservationComponentOutput>;
}

/**
 * A resource with narrative, extensions, and contained resources
 * Based on [FHIR DomainResource](https://www.hl7.org/fhir/domainresource.html)
 */
export interface DomainResourceOutputParent extends ResourceOutput {
  /** Text summary of the resource, for human interpretation */
  text?: NarrativeOutput;
  /** Contained, inline Resources */
  contained?: Array<ResourceOutput>;
  /** Additional Content defined by implementations */
  extension?: Array<ExtensionOutput>;
  /** Extensions that cannot be ignored */
  modifierExtension?: Array<ExtensionOutput>;
  resourceType: string;
}

/**
 * Resource is the ancestor of DomainResource from which most resources are derived. Bundle, Parameters, and Binary extend Resource directly.
 * Based on [FHIR Resource](https://www.hl7.org/fhir/r4/resource.html
 */
export interface ResourceOutput extends Record<string, any> {
  /** The type of resource */
  resourceType: string;
  /** Resource Id */
  id?: string;
  /** Metadata about the resource */
  meta?: MetaOutput;
  /** A set of rules under which this content was created */
  implicitRules?: string;
  /** Language of the resource content */
  language?: string;
}

/**
 * Metadata about a resource
 * Based on [FHIR Meta](https://www.hl7.org/fhir/R4/resource.html#Meta)
 */
export interface MetaOutput {
  /** The version specific identifier, as it appears in the version portion of the URL. This value changes when the resource is created, updated, or deleted. */
  versionId?: string;
  /** When the resource last changed - e.g. when the version changed. */
  lastUpdated?: string;
  /** A uri that identifies the source system of the resource. This provides a minimal amount of Provenance information that can be used to track or differentiate the source of information in the resource. The source may identify another FHIR server, document, message, database, etc. */
  source?: string;
  /** A list of profiles (references to [StructureDefinition](https://www.hl7.org/fhir/structuredefinition.html) resources) that this resource claims to conform to. The URL is a reference to [StructureDefinition.url](https://www.hl7.org/fhir/structuredefinition-definitions.html#StructureDefinition.url). */
  profile?: string[];
  /** Security labels applied to this resource. These tags connect specific resources to the overall security policy and infrastructure. */
  security?: Array<CodingOutput>;
  /** Tags applied to this resource. Tags are intended to be used to identify and relate resources to process and workflow, and applications are not required to consider the tags when interpreting the meaning of a resource. */
  tag?: Array<CodingOutput>;
}

/**
 * Detailed information about conditions, problems or diagnoses
 * Based on [FHIR Condition](https://www.hl7.org/fhir/R4/condition.html)
 */
export interface ConditionOutput extends DomainResourceOutputParent {
  /** resourceType */
  resourceType: "Condition";
  /** External Ids for this condition */
  identifier?: Array<IdentifierOutput>;
  /** active | recurrence | relapse | inactive | remission | resolved */
  clinicalStatus?: CodeableConceptOutput;
  /** unconfirmed | provisional | differential | confirmed | refuted | entered-in-error */
  verificationStatus?: CodeableConceptOutput;
  /** problem-list-item | encounter-diagnosis */
  category?: Array<CodeableConceptOutput>;
  /** Subjective severity of condition */
  severity?: CodeableConceptOutput;
  /** Identification of the condition, problem or diagnosis */
  code?: CodeableConceptOutput;
  /** Anatomical location, if relevant */
  bodySite?: Array<CodeableConceptOutput>;
  /** Encounter created as part of */
  encounter?: ReferenceOutput;
  /** Estimated or actual date,  date-time, or age */
  onsetDateTime?: string;
  /** Estimated or actual date,  date-time, or age */
  onsetAge?: QuantityOutput;
  /** Estimated or actual date,  date-time, or age */
  onsetPeriod?: PeriodOutput;
  /** Estimated or actual date,  date-time, or age */
  onsetRange?: RangeOutput;
  /** Estimated or actual date,  date-time, or age */
  onsetString?: string;
  /** When in resolution/remission */
  abatementDateTime?: string;
  /** When in resolution/remission */
  abatementAge?: QuantityOutput;
  /** When in resolution/remission */
  abatementPeriod?: PeriodOutput;
  /** When in resolution/remission */
  abatementRange?: RangeOutput;
  /** When in resolution/remission */
  abatementString?: string;
  /** Date record was first recorded */
  recordedDate?: string;
  /** stge/grade, usually assessed formally */
  stage?: Array<ConditionStageOutput>;
  /** Additional information about the Condition */
  note?: Array<AnnotationOutput>;
}

/**
 * Stage/grade, usually assessed formally
 * Based on [FHIR Condition.Stage](https://www.hl7.org/fhir/R4/condition.html)
 */
export interface ConditionStageOutput {
  /** Simple summary (disease specific) */
  summary?: CodeableConceptOutput;
  /** Kind of staging */
  type?: CodeableConceptOutput;
}

/**
 * Detailed information about Research Study
 * Based on [FHIR ResearchStudy](https://www.hl7.org/fhir/R4/researchstudy.html)
 */
export interface ResearchStudyOutput extends DomainResourceOutputParent {
  /** resourceType */
  resourceType: "ResearchStudy";
  /** Business Identifier for study */
  identifier?: Array<IdentifierOutput>;
  /** Name for this study */
  title?: string;
  /** Steps followed in executing study */
  protocol?: Array<ReferenceOutput>;
  /** Part of larger study */
  partOf?: Array<ReferenceOutput>;
  /**
   * active | administratively-completed | approved | closed-to-accrual | closed-to-accrual-and-intervention | completed | disapproved | in-review | temporarily-closed-to-accrual | temporarily-closed-to-accrual-and-intervention | withdrawn
   *
   * Possible values: "active", "administratively-completed", "approved", "closed-to-accrual", "closed-to-accrual-and-intervention", "completed", "disapproved", "in-review", "temporarily-closed-to-accrual", "temporarily-closed-to-accrual-and-intervention", "withdrawn"
   */
  status: string;
  /** treatment | prevention | diagnostic | supportive-care | screening | health-services-research | basic-science | device-feasibility */
  primaryPurposeType?: CodeableConceptOutput;
  /** n-a | early-phase-1 | phase-1 | phase-1-phase-2 | phase-2 | phase-2-phase-3 | phase-3 | phase-4 */
  phase?: CodeableConceptOutput;
  /** Classifications for the study */
  category?: Array<CodeableConceptOutput>;
  /** Drugs, devices, etc. under study */
  focus?: Array<CodeableConceptOutput>;
  /** Condition being studied */
  condition?: Array<CodeableConceptOutput>;
  /** Contact details for the study */
  contact?: Array<ContactDetailOutput>;
  /** Used to search for the study */
  keyword?: Array<CodeableConceptOutput>;
  /** Geographic region(s) for study */
  location?: Array<CodeableConceptOutput>;
  /** What this is study doing */
  description?: string;
  /** Inclusion & exclusion criteria */
  enrollment?: Array<ReferenceOutput>;
  /** When the study began and ended */
  period?: PeriodOutput;
  /** Organization that initiates and is legally responsible for the study */
  sponsor?: ReferenceOutput;
  /** Researcher who oversees multiple aspects of the study */
  principalInvestigator?: ReferenceOutput;
  /** Facility where study activities are conducted */
  site?: Array<ReferenceOutput>;
  /** accrual-goal-met | closed-due-to-toxicity | closed-due-to-lack-of-study-progress | temporarily-closed-per-study-design */
  reasonStopped?: CodeableConceptOutput;
  /** Comments made about the study */
  note?: Array<AnnotationOutput>;
  /** Defined path through the study for a subject */
  arm?: { name: string; type?: CodeableConceptOutput; description?: string }[];
  /** A goal for the study */
  objective?: { name: string; type?: CodeableConceptOutput }[];
}

/** Critical Result */
export interface CriticalResultOutput {
  /** description of the critical result */
  description: string;
  /** finding inference */
  finding?: ObservationOutput;
}

/**
 * Age mismatch returns when there is a conflict between an age that mentioned in the clinical note and the age of the patient.
 * The age of the patient is calculated by the date of birth that is set in the patient information along with the time of the service that is being documented.
 * EvidenceExtension with DocumentReference evidence may be added to this inference as an extension.
 */
export interface AgeMismatchInferenceOutput
  extends RadiologyInsightsInferenceOutputParent {
  /** The type of the inference. */
  kind: "ageMismatch";
}

/** Sex mismatch returns when there is a conflict between the patient references (female/male, he/she/his/her), documented clinical procedures, or documented body parts to the patient Sex that mentioned in the patient info. */
export interface SexMismatchInferenceOutput
  extends RadiologyInsightsInferenceOutputParent {
  /** The type of the inference. */
  kind: "sexMismatch";
  /** sex indication */
  sexIndication: CodeableConceptOutput;
}

/**
 * Laterality discrepancy, returns in 3 different cases:
 * OrderLateralityMismatch: there is a discrepancy between the text and the procedure/order related to the clinical document.
 * TextLateralityContradiction: there is a contradiction within the text of the clinical document.
 * TextLateralityMissing: laterality is missing/not mentioned in the clinical document.
 */
export interface LateralityDiscrepancyInferenceOutput
  extends RadiologyInsightsInferenceOutputParent {
  /** The type of the inference. */
  kind: "lateralityDiscrepancy";
  /** laterality indication */
  lateralityIndication?: CodeableConceptOutput;
  /**
   * mismatch type
   *
   * Possible values: "orderLateralityMismatch", "textLateralityContradiction", "textLateralityMissing"
   */
  discrepancyType: string;
}

/**
 * Completed Order mismatch
 * A complete order requires that all the body parts listed in the order will be document (some body parts requires measurements).
 * This inference is relevant only for ultrasound procedure/order of type US ABDOMEN, US RETROPERITONEAL, US PELVIS, or US BREAST.
 * This inference returns when there is a missing body part or a missing measurement of a body part that is required by the order.
 */
export interface CompleteOrderDiscrepancyInferenceOutput
  extends RadiologyInsightsInferenceOutputParent {
  /** The type of the inference. */
  kind: "completeOrderDiscrepancy";
  /** Order Type. */
  orderType: CodeableConceptOutput;
  /** List of missing body parts required by a complete order. */
  missingBodyParts?: Array<CodeableConceptOutput>;
  /** List of missing body parts that require measurement by a complete order. */
  missingBodyPartMeasurements?: Array<CodeableConceptOutput>;
}

/**
 * Limited Order mismatch
 * A limited order requires that not all the body parts listed in the order will be document.
 * This inference is relevant only for ultrasound procedure/order of type US ABDOMEN, US RETROPERITONEAL, US PELVIS, or US BREAST.
 * This inference returns when all body parts and measurement of a body part required by the order, mentioned in the text.
 */
export interface LimitedOrderDiscrepancyInferenceOutput
  extends RadiologyInsightsInferenceOutputParent {
  /** The type of the inference. */
  kind: "limitedOrderDiscrepancy";
  /** Order Type. */
  orderType: CodeableConceptOutput;
  /** Complete list of body parts found in the document. */
  presentBodyParts?: Array<CodeableConceptOutput>;
  /** Complete list of body parts that require measurement by a complete order. */
  presentBodyPartMeasurements?: Array<CodeableConceptOutput>;
}

/**
 * Finding Inference
 * Clinical Finding can be an observation or condition that is mentioned in the clinical document.
 */
export interface FindingInferenceOutput
  extends RadiologyInsightsInferenceOutputParent {
  /** The type of the inference. */
  kind: "finding";
  /** The finding data */
  finding: ObservationOutput;
}

/** Identifies and highlights potential Critical Findings found in a clinical document. */
export interface CriticalResultInferenceOutput
  extends RadiologyInsightsInferenceOutputParent {
  /** The type of the inference. */
  kind: "criticalResult";
  /** Critical Result */
  result: CriticalResultOutput;
}

/** Procedures found in the document text or associated with the document administrative metadata. */
export interface RadiologyProcedureInferenceOutput
  extends RadiologyInsightsInferenceOutputParent {
  /** The type of the inference. */
  kind: "radiologyProcedure";
  /** The LOINC codes for the procedure. */
  procedureCodes?: Array<CodeableConceptOutput>;
  /** Imaging procedure. */
  imagingProcedures: Array<ImagingProcedureOutput>;
  /** The related procedure information from the document administration information or as extracted from the document. */
  orderedProcedure: OrderedProcedureOutput;
}

/** Order Procedure - is this always a radiology procedure? */
export interface ImagingProcedureOutput {
  /** The procedure modality */
  modality: CodeableConceptOutput;
  /** The procedure anatomy */
  anatomy: CodeableConceptOutput;
  /** The procedure laterality */
  laterality?: CodeableConceptOutput;
  /** The procedure contrast */
  contrast?: RadiologyCodeWithTypesOutput;
  /** The procedure view */
  view?: RadiologyCodeWithTypesOutput;
}

/** Code with types */
export interface RadiologyCodeWithTypesOutput {
  /** Code */
  code: CodeableConceptOutput;
  /** Collection of types */
  types: Array<CodeableConceptOutput>;
}

/** Recommendation Inference */
export interface FollowupRecommendationInferenceOutput
  extends RadiologyInsightsInferenceOutputParent {
  /** The type of the inference. */
  kind: "followupRecommendation";
  /** Clinically relevant time/time-period for recommendation */
  effectiveDateTime?: string;
  /** Clinically relevant time/time-period for recommendation */
  effectivePeriod?: PeriodOutput;
  /** Findings related to this recommendation. */
  findings?: Array<RecommendationFindingOutput>;
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
  recommendedProcedure: ProcedureRecommendationOutput;
}

/** Radiology Insights abstract procedure. */
export interface ProcedureRecommendationOutputParent {
  kind: string;
}

/** Generic procedure information. */
export interface GenericProcedureRecommendationOutput
  extends ProcedureRecommendationOutputParent {
  /** The type of the procedure. */
  kind: "genericProcedureRecommendation";
  /** The procedure modality */
  code: CodeableConceptOutput;
  /** The procedure description */
  description?: string;
}

/** Radiology procedure. */
export interface ImagingProcedureRecommendationOutput
  extends ProcedureRecommendationOutputParent {
  /** The type of the procedure. */
  kind: "imagingProcedureRecommendation";
  /** The LOINC codes for the procedure. */
  procedureCodes?: Array<CodeableConceptOutput>;
  /** Imaging procedure. */
  imagingProcedures: Array<ImagingProcedureOutput>;
}

/** Communication Inference */
export interface FollowupCommunicationInferenceOutput
  extends RadiologyInsightsInferenceOutputParent {
  /** The type of the inference. */
  kind: "followupCommunication";
  /** The communication date/time. */
  dateTime?: string[];
  /** The recipient of the communication. */
  recipient?: string[];
  /** Communication was acknowledged */
  wasAcknowledged: boolean;
}

/** The body of the Radiology Insights request. */
export interface RadiologyInsightsDataOutput {
  /** The list of patients, including their clinical information and data. */
  patients: Array<PatientRecordOutput>;
  /** Configuration affecting the Radiology Insights model's inference. */
  configuration?: RadiologyInsightsModelConfigurationOutput;
}

/** A patient record, including their clinical information and data. */
export interface PatientRecordOutput {
  /** A given identifier for the patient. Has to be unique across all patients in a single request. */
  id: string;
  /** Patient structured information, including demographics and known structured clinical information. */
  info?: PatientInfoOutput;
  /** Patient encounters/visits. */
  encounters?: Array<EncounterOutput>;
  /** Patient unstructured clinical data, given as documents. */
  patientDocuments?: Array<PatientDocumentOutput>;
}

/** Patient structured information, including demographics and known structured clinical information. */
export interface PatientInfoOutput {
  /**
   * The patient's sex.
   *
   * Possible values: "female", "male", "unspecified"
   */
  sex?: string;
  /** The patient's date of birth. */
  birthDate?: string;
  /** Known clinical information for the patient, structured. */
  clinicalInfo?: Array<ResourceOutput>;
}

/** visit/encounter information */
export interface EncounterOutput {
  /** The id of the visit. */
  id: string;
  /**
   * Time period of the visit.
   * In case of admission, use timePeriod.start to indicate the admission time and timePeriod.end to indicate the discharge time.
   */
  period?: TimePeriodOutput;
  /**
   * The class of the encounter.
   *
   * Possible values: "inpatient", "ambulatory", "observation", "emergency", "virtual", "healthHome"
   */
  class?: string;
}

/** A duration of time during which an event is happening */
export interface TimePeriodOutput {
  /** Starting time with inclusive boundary */
  start?: string;
  /** End time with inclusive boundary, if not ongoing */
  end?: string;
}

/** A clinical document related to a patient. Document here is in the wide sense - not just a text document (note). */
export interface PatientDocumentOutput {
  /**
   * The type of the patient document, such as 'note' (text document) or 'fhirBundle' (FHIR JSON document).
   *
   * Possible values: "note", "fhirBundle", "dicom", "genomicSequencing"
   */
  type: string;
  /**
   * The type of the clinical document.
   *
   * Possible values: "consultation", "dischargeSummary", "historyAndPhysical", "radiologyReport", "procedure", "progress", "laboratory", "pathologyReport"
   */
  clinicalType?: string;
  /** A given identifier for the document. Has to be unique across all documents for a single patient. */
  id: string;
  /** A 2 letter ISO 639-1 representation of the language of the document. */
  language?: string;
  /** The date and time when the document was created. */
  createdDateTime?: string;
  /** Document author(s) */
  authors?: Array<DocumentAuthorOutput>;
  /**
   * specialty type the document
   *
   * Possible values: "pathology", "radiology"
   */
  specialtyType?: string;
  /** Administrative metadata for the document. */
  administrativeMetadata?: DocumentAdministrativeMetadataOutput;
  /** The content of the patient document. */
  content: DocumentContentOutput;
}

/** Document author */
export interface DocumentAuthorOutput {
  /** author id */
  id?: string;
  /** Text representation of the full name */
  fullName?: string;
}

/** Document administrative metadata */
export interface DocumentAdministrativeMetadataOutput {
  /** List of procedure information associated with the document. */
  orderedProcedures?: Array<OrderedProcedureOutput>;
  /** Reference to the encounter associated with the document. */
  encounterId?: string;
}

/** The content of the patient document. */
export interface DocumentContentOutput {
  /**
   * The type of the content's source.
   * In case the source type is 'inline', the content is given as a string (for instance, text).
   * In case the source type is 'reference', the content is given as a URI.
   *
   * Possible values: "inline", "reference"
   */
  sourceType: string;
  /** The content of the document, given either inline (as a string) or as a reference (URI). */
  value: string;
}

/** Configuration affecting the Radiology Insights model's inference. */
export interface RadiologyInsightsModelConfigurationOutput {
  /** An indication whether the model should produce verbose output. */
  verbose?: boolean;
  /** An indication whether the model's output should include evidence for the inferences. */
  includeEvidence?: boolean;
  /**
   * A list of inference types to be inferred for the current request.
   * This could be used if only part of the Radiology Insights inferences are required.
   * If this list is omitted or empty, the model will return all the inference types.
   */
  inferenceTypes?: string[];
  /** The options for the Radiology Insights Inferences */
  inferenceOptions?: RadiologyInsightsInferenceOptionsOutput;
  /** Local for the model to use. If not specified, the model will use the default locale */
  locale?: string;
}

/** The options for the Radiology Insights Inferences */
export interface RadiologyInsightsInferenceOptionsOutput {
  /** Followup Recommendation Options */
  followupRecommendation?: FollowupRecommendationOptionsOutput;
  /** Finding Options */
  finding?: FindingOptionsOutput;
}

/** Followup Recommendation Options */
export interface FollowupRecommendationOptionsOutput {
  /** Include/Exclude followup recommendations with no specific radiologic modality, default is false. */
  includeRecommendationsWithNoSpecifiedModality?: boolean;
  /** Include/Exclude followup recommendations in references to a guideline or article, default is false. */
  includeRecommendationsInReferences?: boolean;
  /** Provide a single focused sentence as evidence for the recommendation, default is false. */
  provideFocusedSentenceEvidence?: boolean;
}

/** Finding Options */
export interface FindingOptionsOutput {
  /** Provide a single focused sentence as evidence for the finding, default is false. */
  provideFocusedSentenceEvidence?: boolean;
}

/** Provides status details for long running operations. */
export interface HealthInsightsOperationStatusOutput {
  /** The unique ID of the operation. */
  readonly id: string;
  /**
   * The status of the operation
   *
   * Possible values: "notStarted", "running", "succeeded", "failed", "canceled"
   */
  readonly status: string;
  /** The date and time when the processing job was created. */
  readonly createdDateTime?: string;
  /** The date and time when the processing job is set to expire. */
  readonly expirationDateTime?: string;
  /** The date and time when the processing job was last updated. */
  readonly lastUpdateDateTime?: string;
  /** Error object that describes the error when status is "Failed". */
  error?: ErrorModel;
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
export type RadiologyInsightsInferenceOutput =
  | RadiologyInsightsInferenceOutputParent
  | AgeMismatchInferenceOutput
  | SexMismatchInferenceOutput
  | LateralityDiscrepancyInferenceOutput
  | CompleteOrderDiscrepancyInferenceOutput
  | LimitedOrderDiscrepancyInferenceOutput
  | FindingInferenceOutput
  | CriticalResultInferenceOutput
  | RadiologyProcedureInferenceOutput
  | FollowupRecommendationInferenceOutput
  | FollowupCommunicationInferenceOutput;
/**
 * A resource with narrative, extensions, and contained resources
 * Based on [FHIR DomainResource](https://www.hl7.org/fhir/domainresource.html)
 */
export type DomainResourceOutput =
  | DomainResourceOutputParent
  | ObservationOutput
  | ConditionOutput
  | ResearchStudyOutput;
/** Radiology Insights abstract procedure. */
export type ProcedureRecommendationOutput =
  | ProcedureRecommendationOutputParent
  | GenericProcedureRecommendationOutput
  | ImagingProcedureRecommendationOutput;
/** Alias for RepeatabilityResultOutput */
export type RepeatabilityResultOutput = "accepted" | "rejected";
