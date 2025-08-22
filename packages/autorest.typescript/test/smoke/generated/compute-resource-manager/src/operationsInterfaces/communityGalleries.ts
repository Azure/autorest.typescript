// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  CommunityGalleriesGetOptionalParams,
  CommunityGalleriesGetResponse,
} from "../models/index.js";

/** Interface representing a CommunityGalleries. */
export interface CommunityGalleries {
  /**
   * Get a community gallery by gallery public name.
   * @param location Resource location.
   * @param publicGalleryName The public name of the community gallery.
   * @param options The options parameters.
   */
  get(
    location: string,
    publicGalleryName: string,
    options?: CommunityGalleriesGetOptionalParams,
  ): Promise<CommunityGalleriesGetResponse>;
}
