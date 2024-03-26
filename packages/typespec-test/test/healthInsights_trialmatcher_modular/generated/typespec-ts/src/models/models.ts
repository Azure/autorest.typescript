// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** The body of the Trial Matcher request. */
export interface TrialMatcherData {
  /** The list of patients, including their clinical information and data. */
  patients: PatientRecord[];
  /** Configuration affecting the Trial Matcher model's inference. */
  configuration?: TrialMatcherModelConfiguration;
}

/** A patient record, including their clinical information and data. */
export interface PatientRecord {
  /** A given identifier for the patient. Has to be unique across all patients in a single request. */
  id: string;
  /** Patient structured information, including demographics and known structured clinical information. */
  info?: PatientInfo;
  /** Patient unstructured clinical data, given as documents. */
  data?: PatientDocument[];
}

/** Patient structured information, including demographics and known structured clinical information. */
export interface PatientInfo {
  /** The patient's sex. */
  sex?: PatientInfoSex;
  /** The patient's date of birth. */
  birthDate?: Date;
  /** Known clinical information for the patient, structured. */
  clinicalInfo?: ClinicalCodedElement[];
}

/** The patient's sex. */
/** "female", "male", "unspecified" */
export type PatientInfoSex = string;

/** A piece of clinical information, expressed as a code in a clinical coding system. */
export interface ClinicalCodedElement {
  /** The clinical coding system, e.g. ICD-10, SNOMED-CT, UMLS. */
  system: string;
  /** The code within the given clinical coding system. */
  code: string;
  /** The name of this coded concept in the coding system. */
  name?: string;
  /** A value associated with the code within the given clinical coding system. */
  value?: string;
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
  /** The content of the patient document. */
  content: DocumentContent;
}

/** The type of the patient document, such as 'note' (text document) or 'fhirBundle' (FHIR JSON document). */
/** "note", "fhirBundle", "dicom", "genomicSequencing" */
export type DocumentType = string;
/** The type of the clinical document. */
/** "consultation", "dischargeSummary", "historyAndPhysical", "procedure", "progress", "imaging", "laboratory", "pathology" */
export type ClinicalDocumentType = string;

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
/** "inline", "reference" */
export type DocumentContentSourceType = string;

/** Configuration affecting the Trial Matcher model's inference. */
export interface TrialMatcherModelConfiguration {
  /** An indication whether the model should produce verbose output. */
  verbose?: boolean;
  /** An indication whether the model's output should include evidence for the inferences. */
  includeEvidence?: boolean;
  /**
   * The clinical trials that the patient(s) should be matched to. <br />The trial
   * selection can be given as a list of custom clinical trials and/or a list of
   * filters to known clinical trial registries. In case both are given, the
   * resulting trial set is a union of the two sets.
   */
  clinicalTrials: ClinicalTrials;
}

/**
 * The clinical trials that the patient(s) should be matched to.
 * The trial selection can be given as a list of custom clinical trials and/or a list of filters to known clinical trial registries.
 * In case both are given, the resulting trial set is a union of the two sets.
 */
export interface ClinicalTrials {
  /** A list of clinical trials. */
  customTrials?: ClinicalTrialDetails[];
  /**
   * A list of filters, each one creating a selection of trials from a given
   * clinical trial registry.
   */
  registryFilters?: ClinicalTrialRegistryFilter[];
}

/** A description of a clinical trial. */
export interface ClinicalTrialDetails {
  /** A given identifier for the clinical trial. Has to be unique within a list of clinical trials. */
  id: string;
  /** The eligibility criteria of the clinical trial (inclusion and exclusion), given as text. */
  eligibilityCriteriaText?: string;
  /** Demographic criteria for a clinical trial. */
  demographics?: ClinicalTrialDemographics;
  /** Trial data which is of interest to the potential participant. */
  metadata: ClinicalTrialMetadata;
}

/** Demographic criteria for a clinical trial. */
export interface ClinicalTrialDemographics {
  /** Indication of the sex of people who may participate in the clinical trial. */
  acceptedSex?: ClinicalTrialAcceptedSex;
  /** A definition of the range of ages accepted by a clinical trial. Contains a minimum age and/or a maximum age. */
  acceptedAgeRange?: AcceptedAgeRange;
}

/** Possible values for the Sex eligibility criterion as accepted by clinical trials, which indicates the sex of people who may participate in a clinical study. */
/** "all", "female", "male" */
export type ClinicalTrialAcceptedSex = string;

/** A definition of the range of ages accepted by a clinical trial. Contains a minimum age and/or a maximum age. */
export interface AcceptedAgeRange {
  /** A person's age, given as a number (value) and a unit (e.g. years, months) */
  minimumAge?: AcceptedAge;
  /** A person's age, given as a number (value) and a unit (e.g. years, months) */
  maximumAge?: AcceptedAge;
}

/** A person's age, given as a number (value) and a unit (e.g. years, months) */
export interface AcceptedAge {
  /** Possible units for a person's age. */
  unit: AgeUnit;
  /** The number of years/months/days that represents the person's age. */
  value: number;
}

/** Possible units for a person's age. */
/** "years", "months", "days" */
export type AgeUnit = string;

/** Trial data which is of interest to the potential participant. */
export interface ClinicalTrialMetadata {
  /**
   * Phases which are relevant for the clinical trial.
   * Each clinical trial can be in a certain phase or in multiple phases.
   */
  phases?: ClinicalTrialPhase[];
  /** Possible study types of a clinical trial. */
  studyType?: ClinicalTrialStudyType;
  /** Possible recruitment status of a clinical trial. */
  recruitmentStatus?: ClinicalTrialRecruitmentStatus;
  /** Medical conditions and their synonyms which are relevant for the clinical trial, given as strings. */
  conditions: string[];
  /** Sponsors/collaborators involved with the trial. */
  sponsors?: string[];
  /** Contact details of the trial administrators, for patients that want to participate in the trial. */
  contacts?: ContactDetails[];
  /** Research facilities where the clinical trial is conducted. */
  facilities?: ClinicalTrialResearchFacility[];
}

/** Possible phases of a clinical trial. */
/** "notApplicable", "earlyPhase1", "phase1", "phase2", "phase3", "phase4" */
export type ClinicalTrialPhase = string;
/** Possible study types of a clinical trial. */
/** "interventional", "observational", "expandedAccess", "patientRegistries" */
export type ClinicalTrialStudyType = string;
/** Possible recruitment status of a clinical trial. */
/** "unknownStatus", "notYetRecruiting", "recruiting", "enrollingByInvitation" */
export type ClinicalTrialRecruitmentStatus = string;

/** A person's contact details. */
export interface ContactDetails {
  /** The person's name. */
  name?: string;
  /** The person's email. */
  email?: string;
  /** A person's phone number. */
  phone?: string;
}

/** Details of a research facility where a clinical trial is conducted. */
export interface ClinicalTrialResearchFacility {
  /** The facility's name. */
  name: string;
  /** City name. */
  city?: string;
  /** State name. */
  state?: string;
  /** Country/region name. */
  countryOrRegion: string;
}

/** A filter defining a subset of clinical trials from a given clinical trial registry (e.g. clinicaltrials.gov). */
export interface ClinicalTrialRegistryFilter {
  /**
   * Trials with any of the given medical conditions will be included in the selection (provided that other limitations are satisfied).
   * Leaving this list empty will not limit the medical conditions.
   */
  conditions?: string[];
  /**
   * Trials with any of the given study types will be included in the selection (provided that other limitations are satisfied).
   * Leaving this list empty will not limit the study types.
   */
  studyTypes?: ClinicalTrialStudyType[];
  /**
   * Trials with any of the given recruitment statuses will be included in the selection (provided that other limitations are satisfied).
   * Leaving this list empty will not limit the recruitment statuses.
   */
  recruitmentStatuses?: ClinicalTrialRecruitmentStatus[];
  /**
   * Trials with any of the given sponsors will be included in the selection (provided that other limitations are satisfied).
   * Leaving this list empty will not limit the sponsors.
   */
  sponsors?: string[];
  /**
   * Trials with any of the given phases will be included in the selection (provided that other limitations are satisfied).
   * Leaving this list empty will not limit the phases.
   */
  phases?: ClinicalTrialPhase[];
  /**
   * Trials with any of the given purposes will be included in the selection (provided that other limitations are satisfied).
   * Leaving this list empty will not limit the purposes.
   */
  purposes?: ClinicalTrialPurpose[];
  /**
   * Trials with any of the given identifiers will be included in the selection (provided that other limitations are satisfied).
   * Leaving this list empty will not limit the trial identifiers.
   */
  ids?: string[];
  /**
   * Trials with any of the given sources will be included in the selection (provided that other limitations are satisfied).
   * Leaving this list empty will not limit the sources.
   */
  sources?: ClinicalTrialSource[];
  /**
   * Trials with any of the given facility names will be included in the selection (provided that other limitations are satisfied).
   * Leaving this list empty will not limit the trial facility names.
   */
  facilityNames?: string[];
  /**
   * Trials with any of the given facility locations will be included in the selection (provided that other limitations are satisfied).
   * Leaving this list empty will not limit the trial facility locations.
   */
  facilityLocations?: GeographicLocation[];
  /**
   * Trials with any of the given facility area boundaries will be included in the selection (provided that other limitations are satisfied).
   * Leaving this list empty will not limit the trial facility area boundaries.
   */
  facilityAreas?: GeographicArea[];
}

/** Possible purposes of a clinical trial. */
/** "notApplicable", "screening", "diagnostic", "prevention", "healthServicesResearch", "treatment", "deviceFeasibility", "supportiveCare", "basicScience", "other" */
export type ClinicalTrialPurpose = string;
/** Possible sources of a clinical trial. */
/** "custom", "clinicaltrials.gov" */
export type ClinicalTrialSource = string;

/**
 * A location given as a combination of city, state and country/region. It could specify a city, a state or a country/region.
 * In case a city is specified, either state +country/region or country/region (for countries/regions where there are no states) should be added.
 * In case a state is specified (without a city), country/region should be added.
 */
export interface GeographicLocation {
  /** City name. */
  city?: string;
  /** State name. */
  state?: string;
  /** Country/region name. */
  countryOrRegion: string;
}

/** A geographic area, expressed as a `Circle` geometry represented using a `GeoJSON Feature` (see [GeoJSON spec](https://tools.ietf.org/html/rfc7946)). */
export interface GeographicArea {
  /** `GeoJSON` type. */
  type: GeoJsonType;
  /** `GeoJSON` geometry, representing the area circle's center. */
  geometry: AreaGeometry;
  /** `GeoJSON` object properties. */
  properties: AreaProperties;
}

/** `GeoJSON` type. */
/** "Feature" */
export type GeoJsonType = string;

/** `GeoJSON` geometry, representing the area circle's center. */
export interface AreaGeometry {
  /** `GeoJSON` geometry type. */
  type: GeoJsonGeometryType;
  /**
   * Coordinates of the area circle's center, represented according to the `GeoJSON` standard.
   * This is an array of 2 decimal numbers, longitude and latitude (precisely in this order).
   */
  coordinates: number[];
}

/** `GeoJSON` geometry type. */
/** "Point" */
export type GeoJsonGeometryType = string;

/** `GeoJSON` object properties. */
export interface AreaProperties {
  /** `GeoJSON` object sub-type. */
  subType: GeoJsonPropertiesSubType;
  /** The radius of the area's circle, in meters. */
  radius: number;
}

/** `GeoJSON` object sub-type. */
/** "Circle" */
export type GeoJsonPropertiesSubType = string;
/** The status of the processing job. */
/** "notStarted", "running", "succeeded", "failed", "partiallyCompleted" */
export type JobStatus = string;

/** The inference results for the Trial Matcher request. */
export interface TrialMatcherResults {
  /** Results for the patients given in the request. */
  patients: TrialMatcherPatientResult[];
  /** The version of the model used for inference, expressed as the model date. */
  modelVersion: string;
  /** The date when the clinical trials knowledge graph was last updated. */
  knowledgeGraphLastUpdateDate?: Date;
}

/** The results of the model's work for a single patient. */
export interface TrialMatcherPatientResult {
  /** The identifier given for the patient in the request. */
  id: string;
  /** The model's inferences for the given patient. */
  inferences: TrialMatcherInference[];
  /** Clinical information which is needed to provide better trial matching results for the patient. */
  neededClinicalInfo?: ExtendedClinicalCodedElement[];
}

/** An inference made by the Trial Matcher model regarding a patient. */
export interface TrialMatcherInference {
  /** The type of the Trial Matcher inference. */
  type: TrialMatcherInferenceType;
  /** The value of the inference, as relevant for the given inference type. */
  value: string;
  /** The description corresponding to the inference value. */
  description?: string;
  /** Confidence score for this inference. */
  confidenceScore?: number;
  /** The evidence corresponding to the inference value. */
  evidence?: TrialMatcherInferenceEvidence[];
  /** The identifier of the clinical trial. */
  id?: string;
  /** Possible sources of a clinical trial. */
  source?: ClinicalTrialSource;
  /** Trial data which is of interest to the potential participant. */
  metadata?: ClinicalTrialMetadata;
}

/** The type of the Trial Matcher inference. */
/** "trialEligibility" */
export type TrialMatcherInferenceType = string;

/** A piece of evidence corresponding to a Trial Matcher inference. */
export interface TrialMatcherInferenceEvidence {
  /** A piece of evidence from the eligibility criteria text of a clinical trial. */
  eligibilityCriteriaEvidence?: string;
  /** A piece of evidence from a clinical note (text document). */
  patientDataEvidence?: ClinicalNoteEvidence;
  /**
   * A piece of clinical information, expressed as a code in a clinical coding
   * system.
   */
  patientInfoEvidence?: ClinicalCodedElement;
  /** A value indicating how important this piece of evidence is for the inference. */
  importance?: number;
}

/** A piece of evidence from a clinical note (text document). */
export interface ClinicalNoteEvidence {
  /** The identifier of the document containing the evidence. */
  id: string;
  /** The actual text span which is evidence for the inference. */
  text?: string;
  /** The start index of the evidence text span in the document (0 based). */
  offset: number;
  /** The length of the evidence text span. */
  length: number;
}

/** A piece of clinical information, expressed as a code in a clinical coding system, extended by semantic information. */
export interface ExtendedClinicalCodedElement {
  /** The clinical coding system, e.g. ICD-10, SNOMED-CT, UMLS. */
  system: string;
  /** The code within the given clinical coding system. */
  code: string;
  /** The name of this coded concept in the coding system. */
  name?: string;
  /** A value associated with the code within the given clinical coding system. */
  value?: string;
  /** The [UMLS semantic type](https://www.nlm.nih.gov/research/umls/META3_current_semantic_types.html) associated with the coded concept. */
  semanticType?: string;
  /** The bio-medical category related to the coded concept, e.g. Diagnosis, Symptom, Medication, Examination. */
  category?: string;
}

/** Repeatability Result header options */
/** */
export type RepeatabilityResult = "accepted" | "rejected";
