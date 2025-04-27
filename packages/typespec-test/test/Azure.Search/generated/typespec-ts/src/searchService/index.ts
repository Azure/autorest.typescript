// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export { SearchServiceClient } from "./searchServiceClient.js";
export {
  GetIndexStatsSummaryOptionalParams,
  GetServiceStatisticsOptionalParams,
  SearchServiceContext,
  SearchServiceClientOptionalParams,
} from "./api/index.js";
export {
  AliasesCreateOptionalParams,
  AliasesListOptionalParams,
  AliasesGetOptionalParams,
  AliasesDeleteOptionalParams,
  AliasesCreateOrUpdateOptionalParams,
} from "./api/aliases/index.js";
export {
  DataSourcesCreateOptionalParams,
  DataSourcesListOptionalParams,
  DataSourcesGetOptionalParams,
  DataSourcesDeleteOptionalParams,
  DataSourcesCreateOrUpdateOptionalParams,
} from "./api/dataSources/index.js";
export {
  IndexersGetStatusOptionalParams,
  IndexersCreateOptionalParams,
  IndexersListOptionalParams,
  IndexersGetOptionalParams,
  IndexersDeleteOptionalParams,
  IndexersCreateOrUpdateOptionalParams,
  IndexersRunOptionalParams,
  IndexersResetDocsOptionalParams,
  IndexersResetOptionalParams,
} from "./api/indexers/index.js";
export {
  IndexesAnalyzeOptionalParams,
  IndexesGetStatisticsOptionalParams,
  IndexesCreateOptionalParams,
  IndexesListOptionalParams,
  IndexesGetOptionalParams,
  IndexesDeleteOptionalParams,
  IndexesCreateOrUpdateOptionalParams,
} from "./api/indexes/index.js";
export {
  SkillsetsResetSkillsOptionalParams,
  SkillsetsCreateOptionalParams,
  SkillsetsListOptionalParams,
  SkillsetsGetOptionalParams,
  SkillsetsDeleteOptionalParams,
  SkillsetsCreateOrUpdateOptionalParams,
} from "./api/skillsets/index.js";
export {
  SynonymMapsCreateOptionalParams,
  SynonymMapsListOptionalParams,
  SynonymMapsGetOptionalParams,
  SynonymMapsDeleteOptionalParams,
  SynonymMapsCreateOrUpdateOptionalParams,
} from "./api/synonymMaps/index.js";
export {
  AliasesOperations,
  DataSourcesOperations,
  IndexersOperations,
  IndexesOperations,
  SkillsetsOperations,
  SynonymMapsOperations,
} from "./classic/index.js";
