// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  resourceArraySerializer,
  Resource,
  CodeableConcept,
  codeableConceptSerializer,
  codeableConceptDeserializer,
  extensionArraySerializer,
  extensionArrayDeserializer,
  Period,
  periodDeserializer,
  Extendible,
  codeableConceptArrayDeserializer,
  Observation,
  observationDeserializer,
} from "./fhir/r4/models.js";

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
    start: !item["start"] ? item["start"] : item["start"].toISOString(),
    end: !item["end"] ? item["end"] : item["end"].toISOString(),
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
    createdDateTime: !item["createdDateTime"]
      ? item["createdDateTime"]
      : item["createdDateTime"].toISOString(),
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
/** Repeatability Result header options */
export type RepeatabilityResult = "accepted" | "rejected";

/** Known values of {@link ApiVersion} that the service accepts. */
export enum KnownApiVersion {
  V20230901Preview = "2023-09-01-preview",
}

/** Alias for _AzureHealthInsightsEndpoint */
export type _AzureHealthInsightsEndpoint = string | string;
