// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export { FaceAdministrationClient } from "./faceAdministrationClient.js";
export { restorePoller, RestorePollerOptions } from "./restorePollerHelpers.js";
export { FaceAdministrationContext, FaceAdministrationClientOptionalParams } from "./api/index.js";
export {
  LargeFaceListGetFacesOptionalParams,
  LargeFaceListUpdateFaceOptionalParams,
  LargeFaceListGetFaceOptionalParams,
  LargeFaceListDeleteFaceOptionalParams,
  LargeFaceListAddFaceOptionalParams,
  LargeFaceListAddFaceFromUrlOptionalParams,
  LargeFaceListTrainOptionalParams,
  LargeFaceListGetTrainingStatusOptionalParams,
  LargeFaceListGetLargeFaceListsOptionalParams,
  LargeFaceListUpdateOptionalParams,
  LargeFaceListGetOptionalParams,
  LargeFaceListDeleteOptionalParams,
  LargeFaceListCreateOptionalParams,
} from "./api/largeFaceList/index.js";
export {
  LargePersonGroupUpdateFaceOptionalParams,
  LargePersonGroupGetFaceOptionalParams,
  LargePersonGroupDeleteFaceOptionalParams,
  LargePersonGroupAddFaceOptionalParams,
  LargePersonGroupAddFaceFromUrlOptionalParams,
  LargePersonGroupGetPersonsOptionalParams,
  LargePersonGroupUpdatePersonOptionalParams,
  LargePersonGroupGetPersonOptionalParams,
  LargePersonGroupDeletePersonOptionalParams,
  LargePersonGroupCreatePersonOptionalParams,
  LargePersonGroupTrainOptionalParams,
  LargePersonGroupGetTrainingStatusOptionalParams,
  LargePersonGroupGetLargePersonGroupsOptionalParams,
  LargePersonGroupUpdateOptionalParams,
  LargePersonGroupGetOptionalParams,
  LargePersonGroupDeleteOptionalParams,
  LargePersonGroupCreateOptionalParams,
} from "./api/largePersonGroup/index.js";
export { LargeFaceListOperations, LargePersonGroupOperations } from "./classic/index.js";
