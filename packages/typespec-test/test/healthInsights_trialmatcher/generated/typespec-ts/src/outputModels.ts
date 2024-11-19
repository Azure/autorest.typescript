// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ErrorModel } from "@azure-rest/core-client";

/** The response for the Trial Matcher request. */
export interface TrialMatcherResultOutput {
  /** A processing job identifier. */
  readonly jobId: string;
  /** The date and time when the processing job was created. */
  readonly createdDateTime: string;
  /** The date and time when the processing job is set to expire. */
  readonly expirationDateTime: string;
  /** The date and time when the processing job was last updated. */
  readonly lastUpdateDateTime: string;
  /** The status of the processing job. */
  readonly status: JobStatusOutput;
  /** An array of errors, if any errors occurred during the processing job. */
  readonly errors?: Array<ErrorModel>;
  /** The inference results for the Trial Matcher request. */
  readonly results?: TrialMatcherResultsOutput;
}

/** The inference results for the Trial Matcher request. */
export interface TrialMatcherResultsOutput {
  /** Results for the patients given in the request. */
  patients: Array<TrialMatcherPatientResultOutput>;
  /** The version of the model used for inference, expressed as the model date. */
  modelVersion: string;
  /** The date when the clinical trials knowledge graph was last updated. */
  knowledgeGraphLastUpdateDate?: string;
}

/** The results of the model's work for a single patient. */
export interface TrialMatcherPatientResultOutput {
  /** The identifier given for the patient in the request. */
  id: string;
  /** The model's inferences for the given patient. */
  inferences: Array<TrialMatcherInferenceOutput>;
  /** Clinical information which is needed to provide better trial matching results for the patient. */
  neededClinicalInfo?: Array<ExtendedClinicalCodedElementOutput>;
}

/** An inference made by the Trial Matcher model regarding a patient. */
export interface TrialMatcherInferenceOutput {
  /** The type of the Trial Matcher inference. */
  type: TrialMatcherInferenceTypeOutput;
  /** The value of the inference, as relevant for the given inference type. */
  value: string;
  /** The description corresponding to the inference value. */
  description?: string;
  /** Confidence score for this inference. */
  confidenceScore?: number;
  /** The evidence corresponding to the inference value. */
  evidence?: Array<TrialMatcherInferenceEvidenceOutput>;
  /** The identifier of the clinical trial. */
  id?: string;
  /** Possible sources of a clinical trial. */
  source?: ClinicalTrialSourceOutput;
  /** Trial data which is of interest to the potential participant. */
  metadata?: ClinicalTrialMetadataOutput;
}

/** A piece of evidence corresponding to a Trial Matcher inference. */
export interface TrialMatcherInferenceEvidenceOutput {
  /** A piece of evidence from the eligibility criteria text of a clinical trial. */
  eligibilityCriteriaEvidence?: string;
  /** A piece of evidence from a clinical note (text document). */
  patientDataEvidence?: ClinicalNoteEvidenceOutput;
  /**
   * A piece of clinical information, expressed as a code in a clinical coding
   * system.
   */
  patientInfoEvidence?: ClinicalCodedElementOutput;
  /** A value indicating how important this piece of evidence is for the inference. */
  importance?: number;
}

/** A piece of evidence from a clinical note (text document). */
export interface ClinicalNoteEvidenceOutput {
  /** The identifier of the document containing the evidence. */
  id: string;
  /** The actual text span which is evidence for the inference. */
  text?: string;
  /** The start index of the evidence text span in the document (0 based). */
  offset: number;
  /** The length of the evidence text span. */
  length: number;
}

/** A piece of clinical information, expressed as a code in a clinical coding system. */
export interface ClinicalCodedElementOutput {
  /** The clinical coding system, e.g. ICD-10, SNOMED-CT, UMLS. */
  system: string;
  /** The code within the given clinical coding system. */
  code: string;
  /** The name of this coded concept in the coding system. */
  name?: string;
  /** A value associated with the code within the given clinical coding system. */
  value?: string;
}

/** Trial data which is of interest to the potential participant. */
export interface ClinicalTrialMetadataOutput {
  /**
   * Phases which are relevant for the clinical trial.
   * Each clinical trial can be in a certain phase or in multiple phases.
   */
  phases?: ClinicalTrialPhaseOutput[];
  /** Possible study types of a clinical trial. */
  studyType?: ClinicalTrialStudyTypeOutput;
  /** Possible recruitment status of a clinical trial. */
  recruitmentStatus?: ClinicalTrialRecruitmentStatusOutput;
  /** Medical conditions and their synonyms which are relevant for the clinical trial, given as strings. */
  conditions: string[];
  /** Sponsors/collaborators involved with the trial. */
  sponsors?: string[];
  /** Contact details of the trial administrators, for patients that want to participate in the trial. */
  contacts?: Array<ContactDetailsOutput>;
  /** Research facilities where the clinical trial is conducted. */
  facilities?: Array<ClinicalTrialResearchFacilityOutput>;
}

/** A person's contact details. */
export interface ContactDetailsOutput {
  /** The person's name. */
  name?: string;
  /** The person's email. */
  email?: string;
  /** A person's phone number. */
  phone?: string;
}

/** Details of a research facility where a clinical trial is conducted. */
export interface ClinicalTrialResearchFacilityOutput {
  /** The facility's name. */
  name: string;
  /** City name. */
  city?: string;
  /** State name. */
  state?: string;
  /** Country/region name. */
  countryOrRegion: string;
}

/** A piece of clinical information, expressed as a code in a clinical coding system, extended by semantic information. */
export interface ExtendedClinicalCodedElementOutput {
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

/** The status of the processing job. */
export type JobStatusOutput =
  | "notStarted"
  | "running"
  | "succeeded"
  | "failed"
  | "partiallyCompleted";
/** The type of the Trial Matcher inference. */
export type TrialMatcherInferenceTypeOutput = "trialEligibility";
/** Possible sources of a clinical trial. */
export type ClinicalTrialSourceOutput = "custom" | "clinicaltrials.gov";
/** Possible phases of a clinical trial. */
export type ClinicalTrialPhaseOutput =
  | "notApplicable"
  | "earlyPhase1"
  | "phase1"
  | "phase2"
  | "phase3"
  | "phase4";
/** Possible study types of a clinical trial. */
export type ClinicalTrialStudyTypeOutput =
  | "interventional"
  | "observational"
  | "expandedAccess"
  | "patientRegistries";
/** Possible recruitment status of a clinical trial. */
export type ClinicalTrialRecruitmentStatusOutput =
  | "unknownStatus"
  | "notYetRecruiting"
  | "recruiting"
  | "enrollingByInvitation";
/** Alias for RepeatabilityResultOutput */
export type RepeatabilityResultOutput = "accepted" | "rejected";
