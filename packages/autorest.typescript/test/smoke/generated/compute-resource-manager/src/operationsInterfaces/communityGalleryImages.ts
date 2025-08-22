// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  CommunityGalleryImagesGetOptionalParams,
  CommunityGalleryImagesGetResponse,
} from "../models/index.js";

/** Interface representing a CommunityGalleryImages. */
export interface CommunityGalleryImages {
  /**
   * Get a community gallery image.
   * @param location Resource location.
   * @param publicGalleryName The public name of the community gallery.
   * @param galleryImageName The name of the community gallery image definition.
   * @param options The options parameters.
   */
  get(
    location: string,
    publicGalleryName: string,
    galleryImageName: string,
    options?: CommunityGalleryImagesGetOptionalParams,
  ): Promise<CommunityGalleryImagesGetResponse>;
}
