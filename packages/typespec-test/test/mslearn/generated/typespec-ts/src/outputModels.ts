// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Paged } from "@azure/core-paging";

export interface LearningPathOutput {
  type: "learningPath";
  id: string;
  title: string;
  durationInMinutes: number;
  readonly url: string;
  summary: string;
  iconUrl: string;
  levels: Array<TaxonomyOutput>;
  roles: Array<TaxonomyOutput>;
  products: Array<TaxonomyOutput>;
  subjects?: Array<TaxonomyOutput>;
  modules: Array<ModuleOutput>;
  readonly rating?: RatingOutput;
  readonly popularity?: number;
  studyGuide: StudyGuideOutput;
}

/** A localizable classification */
export interface TaxonomyOutput {
  /** Taxonomy unique identifier, such as data-ai */
  id: string;
  /** Localized taxonomy display name, such as "Data and AI" */
  name: string;
}

export interface ModuleOutput {
  type: "module";
  id: string;
  title: string;
  durationInMinutes: number;
  readonly url: string;
  summary: string;
  iconUrl: string;
  levels: Array<TaxonomyOutput>;
  roles: Array<TaxonomyOutput>;
  products: Array<TaxonomyOutput>;
  subjects?: Array<TaxonomyOutput>;
  units: Array<UnitOutput>;
  readonly rating?: RatingOutput;
  readonly popularity?: number;
}

export interface UnitOutput {
  type: "unit";
  id: string;
  title: string;
  durationInMinutes: number;
  readonly url: string;
}

/** Aggregated user rating */
export interface RatingOutput {
  /** Average rating out of 1 to 5 */
  average: number;
  /** Number of rates */
  count: number;
}

export interface StudyGuideOutput {
  /** Possible values: learningPath, module, unit */
  type: string;
  /** The unique identifier of this entity */
  id: string;
}

/** Describes a page of resource object */
export type LearningPathListOutput = Paged<LearningPathOutput>;
/** Describes a page of resource object */
export type ModuleListOutput = Paged<ModuleOutput>;
