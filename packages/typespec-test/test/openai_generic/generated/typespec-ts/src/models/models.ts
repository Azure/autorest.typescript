// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { serializeRecord } from "../helpers/serializerHelpers.js";
import { uint8ArrayToString } from "@azure/core-util";

export interface CreateModerationRequest {
  /** The input text to classify */
  input: string | string[];
  /**
   * Two content moderations models are available: `text-moderation-stable` and
   * `text-moderation-latest`. The default is `text-moderation-latest` which will be automatically
   * upgraded over time. This ensures you are always using our most accurate model. If you use
   * `text-moderation-stable`, we will provide advanced notice before updating the model. Accuracy
   * of `text-moderation-stable` may be slightly lower than for `text-moderation-latest`.
   */
  model?: "text-moderation-latest" | "text-moderation-stable";
}

export function createModerationRequestSerializer(
  item: CreateModerationRequest,
): any {
  return { input: item["input"], model: item["model"] };
}

export type CreateModerationRequestInput = string | string[];

export function createModerationRequestInputSerializer(
  item: CreateModerationRequestInput,
): any {
  return item;
}

export function createModerationRequestInputDeserializer(
  item: any,
): CreateModerationRequestInput {
  return item;
}

export type CreateModerationRequestModel =
  | "text-moderation-latest"
  | "text-moderation-stable";

export function createModerationRequestModelSerializer(
  item: CreateModerationRequestModel,
): any {
  return item;
}

export function createModerationRequestModelDeserializer(
  item: any,
): CreateModerationRequestModel {
  return item;
}

export interface CreateModerationResponse {
  /** The unique identifier for the moderation request. */
  id: string;
  /** The model used to generate the moderation results. */
  model: string;
  /** A list of moderation objects. */
  results: {
    flagged: boolean;
    categories: {
      hate: boolean;
      "hate/threatening": boolean;
      harassment: boolean;
      "harassment/threatening": boolean;
      "self-harm": boolean;
      "self-harm/intent": boolean;
      "self-harm/instructive": boolean;
      sexual: boolean;
      "sexual/minors": boolean;
      violence: boolean;
      "violence/graphic": boolean;
    };
    category_scores: {
      hate: number;
      "hate/threatening": number;
      harassment: number;
      "harassment/threatening": number;
      "self-harm": number;
      "self-harm/intent": number;
      "self-harm/instructive": number;
      sexual: number;
      "sexual/minors": number;
      violence: number;
      "violence/graphic": number;
    };
  }[];
}

export function createModerationResponseDeserializer(
  item: any,
): CreateModerationResponse {
  return {
    id: item["id"],
    model: item["model"],
    results: createModerationResponseResultArrayDeserializer(item["results"]),
  };
}

export interface CreateModerationResponseResult {
  /** Whether the content violates [OpenAI's usage policies](/policies/usage-policies). */
  flagged: boolean;
  /** A list of the categories, and whether they are flagged or not. */
  categories: {
    hate: boolean;
    "hate/threatening": boolean;
    harassment: boolean;
    "harassment/threatening": boolean;
    "self-harm": boolean;
    "self-harm/intent": boolean;
    "self-harm/instructive": boolean;
    sexual: boolean;
    "sexual/minors": boolean;
    violence: boolean;
    "violence/graphic": boolean;
  };
  /** A list of the categories along with their scores as predicted by model. */
  category_scores: {
    hate: number;
    "hate/threatening": number;
    harassment: number;
    "harassment/threatening": number;
    "self-harm": number;
    "self-harm/intent": number;
    "self-harm/instructive": number;
    sexual: number;
    "sexual/minors": number;
    violence: number;
    "violence/graphic": number;
  };
}

export function createModerationResponseResultDeserializer(
  item: any,
): CreateModerationResponseResult {
  return {
    flagged: item["flagged"],
    categories: createModerationResponseResultCategoriesDeserializer(
      item.categories,
    ),
    category_scores: createModerationResponseResultCategoryScoresDeserializer(
      item.category_scores,
    ),
  };
}

export interface CreateModerationResponseResultCategories {
  /**
   * Content that expresses, incites, or promotes hate based on race, gender, ethnicity,
   * religion, nationality, sexual orientation, disability status, or caste. Hateful content
   * aimed at non-protected groups (e.g., chess players) is harrassment.
   */
  hate: boolean;
  /**
   * Hateful content that also includes violence or serious harm towards the targeted group
   * based on race, gender, ethnicity, religion, nationality, sexual orientation, disability
   * status, or caste.
   */
  "hate/threatening": boolean;
  /** Content that expresses, incites, or promotes harassing language towards any target. */
  harassment: boolean;
  /** Harassment content that also includes violence or serious harm towards any target. */
  "harassment/threatening": boolean;
  /**
   * Content that promotes, encourages, or depicts acts of self-harm, such as suicide, cutting,
   * and eating disorders.
   */
  "self-harm": boolean;
  /**
   * Content where the speaker expresses that they are engaging or intend to engage in acts of
   * self-harm, such as suicide, cutting, and eating disorders.
   */
  "self-harm/intent": boolean;
  /**
   * Content that encourages performing acts of self-harm, such as suicide, cutting, and eating
   * disorders, or that gives instructions or advice on how to commit such acts.
   */
  "self-harm/instructive": boolean;
  /**
   * Content meant to arouse sexual excitement, such as the description of sexual activity, or
   * that promotes sexual services (excluding sex education and wellness).
   */
  sexual: boolean;
  /** Sexual content that includes an individual who is under 18 years old. */
  "sexual/minors": boolean;
  /** Content that depicts death, violence, or physical injury. */
  violence: boolean;
  /** Content that depicts death, violence, or physical injury in graphic detail. */
  "violence/graphic": boolean;
}

export function createModerationResponseResultCategoriesDeserializer(
  item: any,
): CreateModerationResponseResultCategories {
  return {
    hate: item["hate"],
    "hate/threatening": item["hate/threatening"],
    harassment: item["harassment"],
    "harassment/threatening": item["harassment/threatening"],
    "self-harm": item["self-harm"],
    "self-harm/intent": item["self-harm/intent"],
    "self-harm/instructive": item["self-harm/instructive"],
    sexual: item["sexual"],
    "sexual/minors": item["sexual/minors"],
    violence: item["violence"],
    "violence/graphic": item["violence/graphic"],
  };
}

export interface CreateModerationResponseResultCategoryScores {
  /** The score for the category 'hate'. */
  hate: number;
  /** The score for the category 'hate/threatening'. */
  "hate/threatening": number;
  /** The score for the category 'harassment'. */
  harassment: number;
  /** The score for the category 'harassment/threatening'. */
  "harassment/threatening": number;
  /** The score for the category 'self-harm'. */
  "self-harm": number;
  /** The score for the category 'self-harm/intent'. */
  "self-harm/intent": number;
  /** The score for the category 'self-harm/instructive'. */
  "self-harm/instructive": number;
  /** The score for the category 'sexual'. */
  sexual: number;
  /** The score for the category 'sexual/minors'. */
  "sexual/minors": number;
  /** The score for the category 'violence'. */
  violence: number;
  /** The score for the category 'violence/graphic'. */
  "violence/graphic": number;
}

export function createModerationResponseResultCategoryScoresDeserializer(
  item: any,
): CreateModerationResponseResultCategoryScores {
  return {
    hate: item["hate"],
    "hate/threatening": item["hate/threatening"],
    harassment: item["harassment"],
    "harassment/threatening": item["harassment/threatening"],
    "self-harm": item["self-harm"],
    "self-harm/intent": item["self-harm/intent"],
    "self-harm/instructive": item["self-harm/instructive"],
    sexual: item["sexual"],
    "sexual/minors": item["sexual/minors"],
    violence: item["violence"],
    "violence/graphic": item["violence/graphic"],
  };
}

export function createModerationResponseResultArrayDeserializer(
  result: Array<CreateModerationResponseResult>,
): any[] {
  return result.map((item) => {
    createModerationResponseResultDeserializer(item);
  });
}

export interface ErrorResponse {
  error: Error;
}

export function errorResponseDeserializer(item: any): ErrorResponse {
  return {
    error: errorDeserializer(item.error),
  };
}

export interface Error {
  type: string;
  message: string;
  param: string | null;
  code: string | null;
}

export function errorDeserializer(item: any): Error {
  return {
    type: item["type"],
    message: item["message"],
    param: item["param"],
    code: item["code"],
  };
}

export interface CreateImageRequest {
  /** A text description of the desired image(s). The maximum length is 1000 characters. */
  prompt: string;
  /** The number of images to generate. Must be between 1 and 10. */
  n?: number | null;
  /** The size of the generated images. Must be one of `256x256`, `512x512`, or `1024x1024`. */
  size?: ("256x256" | "512x512" | "1024x1024") | null;
  /** The format in which the generated images are returned. Must be one of `url` or `b64_json`. */
  response_format?: ("url" | "b64_json") | null;
  user?: string;
}

export function createImageRequestSerializer(item: CreateImageRequest): any {
  return {
    prompt: item["prompt"],
    n: item["n"],
    size: item["size"],
    response_format: item["response_format"],
    user: item["user"],
  };
}

export type CreateImageRequestSize = "256x256" | "512x512" | "1024x1024";

export function createImageRequestSizeSerializer(
  item: CreateImageRequestSize,
): any {
  return item;
}

export function createImageRequestSizeDeserializer(
  item: any,
): CreateImageRequestSize {
  return item;
}

export type CreateImageRequestResponseFormat = "url" | "b64_json";

export function createImageRequestResponseFormatSerializer(
  item: CreateImageRequestResponseFormat,
): any {
  return item;
}

export function createImageRequestResponseFormatDeserializer(
  item: any,
): CreateImageRequestResponseFormat {
  return item;
}

export interface ImagesResponse {
  created: Date;
  data: Image[];
}

export function imagesResponseDeserializer(item: any): ImagesResponse {
  return {
    created: item["created"],
    data: imageArrayDeserializer(item["data"]),
  };
}

/** Represents the url or the content of an image generated by the OpenAI API. */
export interface Image {
  /** The URL of the generated image, if `response_format` is `url` (default). */
  url?: string;
  /** The base64-encoded JSON of the generated image, if `response_format` is `b64_json`. */
  b64_json?: Uint8Array;
}

export function imageDeserializer(item: any): Image {
  return {
    url: item["url"],
    b64_json: item["b64_json"],
  };
}

export function imageArrayDeserializer(result: Array<Image>): any[] {
  return result.map((item) => {
    imageDeserializer(item);
  });
}

export interface CreateImageEditRequest {
  /** A text description of the desired image(s). The maximum length is 1000 characters. */
  prompt: string;
  /**
   * The image to edit. Must be a valid PNG file, less than 4MB, and square. If mask is not
   * provided, image must have transparency, which will be used as the mask.
   */
  image: Uint8Array;
  /**
   * An additional image whose fully transparent areas (e.g. where alpha is zero) indicate where
   * `image` should be edited. Must be a valid PNG file, less than 4MB, and have the same dimensions
   * as `image`.
   */
  mask?: Uint8Array;
  /** The number of images to generate. Must be between 1 and 10. */
  n?: number | null;
  /** The size of the generated images. Must be one of `256x256`, `512x512`, or `1024x1024`. */
  size?: ("256x256" | "512x512" | "1024x1024") | null;
  /** The format in which the generated images are returned. Must be one of `url` or `b64_json`. */
  response_format?: ("url" | "b64_json") | null;
  user?: string;
}

export function createImageEditRequestSerializer(
  item: CreateImageEditRequest,
): any {
  return {
    prompt: item["prompt"],
    image: uint8ArrayToString(item["image"], "base64"),
    mask:
      item["mask"] !== undefined
        ? uint8ArrayToString(item["mask"], "base64")
        : undefined,
    n: item["n"],
    size: item["size"],
    response_format: item["response_format"],
    user: item["user"],
  };
}

export interface CreateImageVariationRequest {
  /**
   * The image to use as the basis for the variation(s). Must be a valid PNG file, less than 4MB,
   * and square.
   */
  image: Uint8Array;
  /** The number of images to generate. Must be between 1 and 10. */
  n?: number | null;
  /** The size of the generated images. Must be one of `256x256`, `512x512`, or `1024x1024`. */
  size?: ("256x256" | "512x512" | "1024x1024") | null;
  /** The format in which the generated images are returned. Must be one of `url` or `b64_json`. */
  response_format?: ("url" | "b64_json") | null;
  user?: string;
}

export function createImageVariationRequestSerializer(
  item: CreateImageVariationRequest,
): any {
  return {
    image: uint8ArrayToString(item["image"], "base64"),
    n: item["n"],
    size: item["size"],
    response_format: item["response_format"],
    user: item["user"],
  };
}

export interface ListModelsResponse {
  object: string;
  data: Model[];
}

export function listModelsResponseDeserializer(item: any): ListModelsResponse {
  return {
    object: item["object"],
    data: modelArrayDeserializer(item["data"]),
  };
}

/** Describes an OpenAI model offering that can be used with the API. */
export interface Model {
  /** The model identifier, which can be referenced in the API endpoints. */
  id: string;
  /** The object type, which is always "model". */
  object: "model";
  /** The Unix timestamp (in seconds) when the model was created. */
  created: Date;
  /** The organization that owns the model. */
  owned_by: string;
}

export function modelDeserializer(item: any): Model {
  return {
    id: item["id"],
    object: item["object"],
    created: item["created"],
    owned_by: item["owned_by"],
  };
}

export function modelArrayDeserializer(result: Array<Model>): any[] {
  return result.map((item) => {
    modelDeserializer(item);
  });
}

export interface DeleteModelResponse {
  id: string;
  object: string;
  deleted: boolean;
}

export function deleteModelResponseDeserializer(
  item: any,
): DeleteModelResponse {
  return {
    id: item["id"],
    object: item["object"],
    deleted: item["deleted"],
  };
}

export interface CreateFineTuneRequest {
  /**
   * The ID of an uploaded file that contains training data.
   *
   * See [upload file](/docs/api-reference/files/upload) for how to upload a file.
   *
   * Your dataset must be formatted as a JSONL file, where each training example is a JSON object
   * with the keys "prompt" and "completion". Additionally, you must upload your file with the
   * purpose `fine-tune`.
   *
   * See the [fine-tuning guide](/docs/guides/legacy-fine-tuning/creating-training-data) for more
   * details.
   */
  training_file: string;
  /**
   * The ID of an uploaded file that contains validation data.
   *
   * If you provide this file, the data is used to generate validation metrics periodically during
   * fine-tuning. These metrics can be viewed in the
   * [fine-tuning results file](/docs/guides/legacy-fine-tuning/analyzing-your-fine-tuned-model).
   * Your train and validation data should be mutually exclusive.
   *
   * Your dataset must be formatted as a JSONL file, where each validation example is a JSON object
   * with the keys "prompt" and "completion". Additionally, you must upload your file with the
   * purpose `fine-tune`.
   *
   * See the [fine-tuning guide](/docs/guides/legacy-fine-tuning/creating-training-data) for more
   * details.
   */
  validation_file?: string | null;
  /**
   * The name of the base model to fine-tune. You can select one of "ada", "babbage", "curie",
   * "davinci", or a fine-tuned model created after 2022-04-21 and before 2023-08-22. To learn more
   * about these models, see the [Models](/docs/models) documentation.
   */
  model?: ("ada" | "babbage" | "curie" | "davinci") | null;
  /**
   * The number of epochs to train the model for. An epoch refers to one full cycle through the
   * training dataset.
   */
  n_epochs?: number | null;
  /**
   * The batch size to use for training. The batch size is the number of training examples used to
   * train a single forward and backward pass.
   *
   * By default, the batch size will be dynamically configured to be ~0.2% of the number of examples
   * in the training set, capped at 256 - in general, we've found that larger batch sizes tend to
   * work better for larger datasets.
   */
  batch_size?: number | null;
  /**
   * The learning rate multiplier to use for training. The fine-tuning learning rate is the original
   * learning rate used for pretraining multiplied by this value.
   *
   * By default, the learning rate multiplier is the 0.05, 0.1, or 0.2 depending on final
   * `batch_size` (larger learning rates tend to perform better with larger batch sizes). We
   * recommend experimenting with values in the range 0.02 to 0.2 to see what produces the best
   * results.
   */
  learning_rate_multiplier?: number | null;
  /**
   * The weight to use for loss on the prompt tokens. This controls how much the model tries to
   * learn to generate the prompt (as compared to the completion which always has a weight of 1.0),
   * and can add a stabilizing effect to training when completions are short.
   *
   * If prompts are extremely long (relative to completions), it may make sense to reduce this
   * weight so as to avoid over-prioritizing learning the prompt.
   */
  prompt_loss_rate?: number | null;
  /**
   * If set, we calculate classification-specific metrics such as accuracy and F-1 score using the
   * validation set at the end of every epoch. These metrics can be viewed in the
   * [results file](/docs/guides/legacy-fine-tuning/analyzing-your-fine-tuned-model).
   *
   * In order to compute classification metrics, you must provide a `validation_file`. Additionally,
   * you must specify `classification_n_classes` for multiclass classification or
   * `classification_positive_class` for binary classification.
   */
  compute_classification_metrics?: boolean | null;
  /**
   * The number of classes in a classification task.
   *
   * This parameter is required for multiclass classification.
   */
  classification_n_classes?: number | null;
  /**
   * The positive class in binary classification.
   *
   * This parameter is needed to generate precision, recall, and F1 metrics when doing binary
   * classification.
   */
  classification_positive_class?: string | null;
  /**
   * If this is provided, we calculate F-beta scores at the specified beta values. The F-beta score
   * is a generalization of F-1 score. This is only used for binary classification.
   *
   * With a beta of 1 (i.e. the F-1 score), precision and recall are given the same weight. A larger
   * beta score puts more weight on recall and less on precision. A smaller beta score puts more
   * weight on precision and less on recall.
   */
  classification_betas?: number[] | null;
  /**
   * A string of up to 18 characters that will be added to your fine-tuned model name.
   *
   * For example, a `suffix` of "custom-model-name" would produce a model name like
   * `ada:ft-your-org:custom-model-name-2022-02-15-04-21-04`.
   */
  suffix?: string | null;
}

export function createFineTuneRequestSerializer(
  item: CreateFineTuneRequest,
): any {
  return {
    training_file: item["training_file"],
    validation_file: item["validation_file"],
    model: item["model"],
    n_epochs: item["n_epochs"],
    batch_size: item["batch_size"],
    learning_rate_multiplier: item["learning_rate_multiplier"],
    prompt_loss_rate: item["prompt_loss_rate"],
    compute_classification_metrics: item["compute_classification_metrics"],
    classification_n_classes: item["classification_n_classes"],
    classification_positive_class: item["classification_positive_class"],
    classification_betas: item["classification_betas"],
    suffix: item["suffix"],
  };
}

export type CreateFineTuneRequestModel =
  | "ada"
  | "babbage"
  | "curie"
  | "davinci";

export function createFineTuneRequestModelSerializer(
  item: CreateFineTuneRequestModel,
): any {
  return item;
}

export function createFineTuneRequestModelDeserializer(
  item: any,
): CreateFineTuneRequestModel {
  return item;
}

/** The `FineTune` object represents a legacy fine-tune job that has been created through the API. */
export interface FineTune {
  /** The object identifier, which can be referenced in the API endpoints. */
  id: string;
  /** The object type, which is always "fine-tune". */
  object: "fine-tune";
  /** The Unix timestamp (in seconds) for when the fine-tuning job was created. */
  created_at: Date;
  /** The Unix timestamp (in seconds) for when the fine-tuning job was last updated. */
  updated_at: Date;
  /** The base model that is being fine-tuned. */
  model: string;
  /** The name of the fine-tuned model that is being created. */
  fine_tuned_model: string | null;
  /** The organization that owns the fine-tuning job. */
  organization_id: string;
  /**
   * The current status of the fine-tuning job, which can be either `created`, `running`,
   * `succeeded`, `failed`, or `cancelled`.
   */
  status: "created" | "running" | "succeeded" | "failed" | "cancelled";
  /**
   * The hyperparameters used for the fine-tuning job. See the
   * [fine-tuning guide](/docs/guides/legacy-fine-tuning/hyperparameters) for more details.
   */
  hyperparams: {
    n_epochs: number;
    batch_size: number;
    prompt_loss_weight: number;
    learning_rate_multiplier: number;
    compute_classification_metrics?: boolean;
    classification_positive_class?: string;
    classification_n_classes?: number;
  };
  /** The list of files used for training. */
  training_files: OpenAIFile[];
  /** The list of files used for validation. */
  validation_files: OpenAIFile[];
  /** The compiled results files for the fine-tuning job. */
  result_files: OpenAIFile[];
  /** The list of events that have been observed in the lifecycle of the FineTune job. */
  events?: FineTuneEvent[];
}

export function fineTuneDeserializer(item: any): FineTune {
  return {
    id: item["id"],
    object: item["object"],
    created_at: item["created_at"],
    updated_at: item["updated_at"],
    model: item["model"],
    fine_tuned_model: item["fine_tuned_model"],
    organization_id: item["organization_id"],
    status: fineTuneStatusDeserializer(item["status"]),
    hyperparams: fineTuneHyperparamsDeserializer(item.hyperparams),
    training_files: openAIFileArrayDeserializer(item["training_files"]),
    validation_files: openAIFileArrayDeserializer(item["validation_files"]),
    result_files: openAIFileArrayDeserializer(item["result_files"]),
    events: fineTuneEventArrayDeserializer(item["events"]),
  };
}

export type FineTuneStatus =
  | "created"
  | "running"
  | "succeeded"
  | "failed"
  | "cancelled";

export function fineTuneStatusSerializer(item: FineTuneStatus): any {
  return item;
}

export function fineTuneStatusDeserializer(item: any): FineTuneStatus {
  return item;
}

export interface FineTuneHyperparams {
  /**
   * The number of epochs to train the model for. An epoch refers to one full cycle through the
   * training dataset.
   */
  n_epochs: number;
  /**
   * The batch size to use for training. The batch size is the number of training examples used to
   * train a single forward and backward pass.
   */
  batch_size: number;
  /** The weight to use for loss on the prompt tokens. */
  prompt_loss_weight: number;
  /** The learning rate multiplier to use for training. */
  learning_rate_multiplier: number;
  /** The classification metrics to compute using the validation dataset at the end of every epoch. */
  compute_classification_metrics?: boolean;
  /** The positive class to use for computing classification metrics. */
  classification_positive_class?: string;
  /** The number of classes to use for computing classification metrics. */
  classification_n_classes?: number;
}

export function fineTuneHyperparamsDeserializer(
  item: any,
): FineTuneHyperparams {
  return {
    n_epochs: item["n_epochs"],
    batch_size: item["batch_size"],
    prompt_loss_weight: item["prompt_loss_weight"],
    learning_rate_multiplier: item["learning_rate_multiplier"],
    compute_classification_metrics: item["compute_classification_metrics"],
    classification_positive_class: item["classification_positive_class"],
    classification_n_classes: item["classification_n_classes"],
  };
}

/** The `File` object represents a document that has been uploaded to OpenAI. */
export interface OpenAIFile {
  /** The file identifier, which can be referenced in the API endpoints. */
  id: string;
  /** The object type, which is always "file". */
  object: "file";
  /** The size of the file in bytes. */
  bytes: number;
  /** The Unix timestamp (in seconds) for when the file was created. */
  createdAt: Date;
  /** The name of the file. */
  filename: string;
  /** The intended purpose of the file. Currently, only "fine-tune" is supported. */
  purpose: string;
  /**
   * The current status of the file, which can be either `uploaded`, `processed`, `pending`,
   * `error`, `deleting` or `deleted`.
   */
  status:
    | "uploaded"
    | "processed"
    | "pending"
    | "error"
    | "deleting"
    | "deleted";
  /**
   * Additional details about the status of the file. If the file is in the `error` state, this will
   * include a message describing the error.
   */
  status_details?: string | null;
}

export function openAIFileDeserializer(item: any): OpenAIFile {
  return {
    id: item["id"],
    object: item["object"],
    bytes: item["bytes"],
    createdAt: item["createdAt"],
    filename: item["filename"],
    purpose: item["purpose"],
    status: openAIFileStatusDeserializer(item["status"]),
    status_details: item["status_details"],
  };
}

export type OpenAIFileStatus =
  | "uploaded"
  | "processed"
  | "pending"
  | "error"
  | "deleting"
  | "deleted";

export function openAIFileStatusSerializer(item: OpenAIFileStatus): any {
  return item;
}

export function openAIFileStatusDeserializer(item: any): OpenAIFileStatus {
  return item;
}

export function openAIFileArrayDeserializer(result: Array<OpenAIFile>): any[] {
  return result.map((item) => {
    openAIFileDeserializer(item);
  });
}

export interface FineTuneEvent {
  object: string;
  created_at: Date;
  level: string;
  message: string;
}

export function fineTuneEventDeserializer(item: any): FineTuneEvent {
  return {
    object: item["object"],
    created_at: item["created_at"],
    level: item["level"],
    message: item["message"],
  };
}

export function fineTuneEventArrayDeserializer(
  result: Array<FineTuneEvent>,
): any[] {
  return result.map((item) => {
    fineTuneEventDeserializer(item);
  });
}

export interface ListFineTunesResponse {
  object: string;
  data: FineTune[];
}

export function listFineTunesResponseDeserializer(
  item: any,
): ListFineTunesResponse {
  return {
    object: item["object"],
    data: fineTuneArrayDeserializer(item["data"]),
  };
}

export function fineTuneArrayDeserializer(result: Array<FineTune>): any[] {
  return result.map((item) => {
    fineTuneDeserializer(item);
  });
}

export interface ListFineTuneEventsResponse {
  object: string;
  data: FineTuneEvent[];
}

export function listFineTuneEventsResponseDeserializer(
  item: any,
): ListFineTuneEventsResponse {
  return {
    object: item["object"],
    data: fineTuneEventArrayDeserializer(item["data"]),
  };
}

export interface ListFilesResponse {
  object: string;
  data: OpenAIFile[];
}

export function listFilesResponseDeserializer(item: any): ListFilesResponse {
  return {
    object: item["object"],
    data: openAIFileArrayDeserializer(item["data"]),
  };
}

export interface CreateFileRequest {
  /**
   * Name of the [JSON Lines](https://jsonlines.readthedocs.io/en/latest/) file to be uploaded.
   *
   * If the `purpose` is set to "fine-tune", the file will be used for fine-tuning.
   */
  file: Uint8Array;
  /**
   * The intended purpose of the uploaded documents. Use "fine-tune" for
   * [fine-tuning](/docs/api-reference/fine-tuning). This allows us to validate the format of the
   * uploaded file.
   */
  purpose: string;
}

export function createFileRequestSerializer(item: CreateFileRequest): any {
  return {
    file: uint8ArrayToString(item["file"], "base64"),
    purpose: item["purpose"],
  };
}

export interface DeleteFileResponse {
  id: string;
  object: string;
  deleted: boolean;
}

export function deleteFileResponseDeserializer(item: any): DeleteFileResponse {
  return {
    id: item["id"],
    object: item["object"],
    deleted: item["deleted"],
  };
}

export interface CreateEmbeddingRequest {
  /** ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](/docs/models/overview) for descriptions of them. */
  model: "text-embedding-ada-002";
  /**
   * Input text to embed, encoded as a string or array of tokens. To embed multiple inputs in a
   * single request, pass an array of strings or array of token arrays. Each input must not exceed
   * the max input tokens for the model (8191 tokens for `text-embedding-ada-002`) and cannot be an empty string.
   * [Example Python code](https://github.com/openai/openai-cookbook/blob/main/examples/How_to_count_tokens_with_tiktoken.ipynb)
   * for counting tokens.
   */
  input: string | string[] | number[] | number[][];
  user?: string;
}

export function createEmbeddingRequestSerializer(
  item: CreateEmbeddingRequest,
): any {
  return { model: item["model"], input: item["input"], user: item["user"] };
}

export type CreateEmbeddingRequestModel = "text-embedding-ada-002";

export function createEmbeddingRequestModelSerializer(
  item: CreateEmbeddingRequestModel,
): any {
  return item;
}

export function createEmbeddingRequestModelDeserializer(
  item: any,
): CreateEmbeddingRequestModel {
  return item;
}

export type CreateEmbeddingRequestInput =
  | string
  | string[]
  | number[]
  | number[][];

export function createEmbeddingRequestInputSerializer(
  item: CreateEmbeddingRequestInput,
): any {
  return item;
}

export function createEmbeddingRequestInputDeserializer(
  item: any,
): CreateEmbeddingRequestInput {
  return item;
}

export interface CreateEmbeddingResponse {
  /** The object type, which is always "embedding". */
  object: "embedding";
  /** The name of the model used to generate the embedding. */
  model: string;
  /** The list of embeddings generated by the model. */
  data: Embedding[];
  /** The usage information for the request. */
  usage: {
    prompt_tokens: number;
    total_tokens: number;
  };
}

export function createEmbeddingResponseDeserializer(
  item: any,
): CreateEmbeddingResponse {
  return {
    object: item["object"],
    model: item["model"],
    data: embeddingArrayDeserializer(item["data"]),
    usage: createEmbeddingResponseUsageDeserializer(item.usage),
  };
}

/** Represents an embedding vector returned by embedding endpoint. */
export interface Embedding {
  /** The index of the embedding in the list of embeddings. */
  index: number;
  /** The object type, which is always "embedding". */
  object: "embedding";
  /**
   * The embedding vector, which is a list of floats. The length of vector depends on the model as\
   * listed in the [embedding guide](/docs/guides/embeddings).
   */
  embedding: number[];
}

export function embeddingDeserializer(item: any): Embedding {
  return {
    index: item["index"],
    object: item["object"],
    embedding: item["embedding"],
  };
}

export function embeddingArrayDeserializer(result: Array<Embedding>): any[] {
  return result.map((item) => {
    embeddingDeserializer(item);
  });
}

export interface CreateEmbeddingResponseUsage {
  /** The number of tokens used by the prompt. */
  prompt_tokens: number;
  /** The total number of tokens used by the request. */
  total_tokens: number;
}

export function createEmbeddingResponseUsageDeserializer(
  item: any,
): CreateEmbeddingResponseUsage {
  return {
    prompt_tokens: item["prompt_tokens"],
    total_tokens: item["total_tokens"],
  };
}

export interface CreateEditRequest {
  /**
   * ID of the model to use. You can use the `text-davinci-edit-001` or `code-davinci-edit-001`
   * model with this endpoint.
   */
  model: "text-davinci-edit-001" | "code-davinci-edit-001";
  /** The input text to use as a starting point for the edit. */
  input?: string | null;
  /** The instruction that tells the model how to edit the prompt. */
  instruction: string;
  /** How many edits to generate for the input and instruction. */
  n?: number | null;
  /**
   * What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output
   * more random, while lower values like 0.2 will make it more focused and deterministic.
   *
   * We generally recommend altering this or `top_p` but not both.
   */
  temperature?: number | null;
  /**
   * An alternative to sampling with temperature, called nucleus sampling, where the model considers
   * the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising
   * the top 10% probability mass are considered.
   *
   * We generally recommend altering this or `temperature` but not both.
   */
  top_p?: number | null;
}

export function createEditRequestSerializer(item: CreateEditRequest): any {
  return {
    model: item["model"],
    input: item["input"],
    instruction: item["instruction"],
    n: item["n"],
    temperature: item["temperature"],
    top_p: item["top_p"],
  };
}

export type CreateEditRequestModel =
  | "text-davinci-edit-001"
  | "code-davinci-edit-001";

export function createEditRequestModelSerializer(
  item: CreateEditRequestModel,
): any {
  return item;
}

export function createEditRequestModelDeserializer(
  item: any,
): CreateEditRequestModel {
  return item;
}

export interface CreateEditResponse {
  /** The object type, which is always `edit`. */
  object: "edit";
  /** The Unix timestamp (in seconds) of when the edit was created. */
  created: Date;
  /** description: A list of edit choices. Can be more than one if `n` is greater than 1. */
  choices: {
    text: string;
    index: number;
    finish_reason: "stop" | "length";
  }[];
  usage: CompletionUsage;
}

export function createEditResponseDeserializer(item: any): CreateEditResponse {
  return {
    object: item["object"],
    created: item["created"],
    choices: createEditResponseChoiceArrayDeserializer(item["choices"]),
    usage: completionUsageDeserializer(item.usage),
  };
}

export interface CreateEditResponseChoice {
  /** The edited result. */
  text: string;
  /** The index of the choice in the list of choices. */
  index: number;
  /**
   * The reason the model stopped generating tokens. This will be `stop` if the model hit a
   * natural stop point or a provided stop sequence, or `length` if the maximum number of tokens
   * specified in the request was reached.
   */
  finish_reason: "stop" | "length";
}

export function createEditResponseChoiceDeserializer(
  item: any,
): CreateEditResponseChoice {
  return {
    text: item["text"],
    index: item["index"],
    finish_reason: createEditResponseChoiceFinishReasonDeserializer(
      item["finish_reason"],
    ),
  };
}

export type CreateEditResponseChoiceFinishReason = "stop" | "length";

export function createEditResponseChoiceFinishReasonSerializer(
  item: CreateEditResponseChoiceFinishReason,
): any {
  return item;
}

export function createEditResponseChoiceFinishReasonDeserializer(
  item: any,
): CreateEditResponseChoiceFinishReason {
  return item;
}

export function createEditResponseChoiceArrayDeserializer(
  result: Array<CreateEditResponseChoice>,
): any[] {
  return result.map((item) => {
    createEditResponseChoiceDeserializer(item);
  });
}

/** Usage statistics for the completion request. */
export interface CompletionUsage {
  /** Number of tokens in the prompt. */
  prompt_tokens: number;
  /** Number of tokens in the generated completion */
  completion_tokens: number;
  /** Total number of tokens used in the request (prompt + completion). */
  total_tokens: number;
}

export function completionUsageDeserializer(item: any): CompletionUsage {
  return {
    prompt_tokens: item["prompt_tokens"],
    completion_tokens: item["completion_tokens"],
    total_tokens: item["total_tokens"],
  };
}

export interface CreateCompletionRequest {
  /**
   * ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to
   * see all of your available models, or see our [Model overview](/docs/models/overview) for
   * descriptions of them.
   */
  model:
    | "babbage-002"
    | "davinci-002"
    | "text-davinci-003"
    | "text-davinci-002"
    | "text-davinci-001"
    | "code-davinci-002"
    | "text-curie-001"
    | "text-babbage-001"
    | "text-ada-001";
  /**
   * The prompt(s) to generate completions for, encoded as a string, array of strings, array of
   * tokens, or array of token arrays.
   *
   * Note that <|endoftext|> is the document separator that the model sees during training, so if a
   * prompt is not specified the model will generate as if from the beginning of a new document.
   */
  prompt: Prompt | null;
  /** The suffix that comes after a completion of inserted text. */
  suffix?: string | null;
  /**
   * What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output
   * more random, while lower values like 0.2 will make it more focused and deterministic.
   *
   * We generally recommend altering this or `top_p` but not both.
   */
  temperature?: number | null;
  /**
   * An alternative to sampling with temperature, called nucleus sampling, where the model considers
   * the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising
   * the top 10% probability mass are considered.
   *
   * We generally recommend altering this or `temperature` but not both.
   */
  top_p?: number | null;
  /**
   * How many completions to generate for each prompt.
   * **Note:** Because this parameter generates many completions, it can quickly consume your token
   * quota. Use carefully and ensure that you have reasonable settings for `max_tokens` and `stop`.
   */
  n?: number | null;
  /**
   * The maximum number of [tokens](/tokenizer) to generate in the completion.
   *
   * The token count of your prompt plus `max_tokens` cannot exceed the model's context length.
   * [Example Python code](https://github.com/openai/openai-cookbook/blob/main/examples/How_to_count_tokens_with_tiktoken.ipynb)
   * for counting tokens.
   */
  max_tokens?: number | null;
  /** Up to 4 sequences where the API will stop generating further tokens. */
  stop?: Stop | null;
  /**
   * Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear
   * in the text so far, increasing the model's likelihood to talk about new topics.
   *
   * [See more information about frequency and presence penalties.](/docs/guides/gpt/parameter-details)
   */
  presence_penalty?: number | null;
  /**
   * Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing
   * frequency in the text so far, decreasing the model's likelihood to repeat the same line
   * verbatim.
   *
   * [See more information about frequency and presence penalties.](/docs/guides/gpt/parameter-details)
   */
  frequency_penalty?: number | null;
  /**
   * Modify the likelihood of specified tokens appearing in the completion.
   * Accepts a json object that maps tokens (specified by their token ID in the tokenizer) to an
   * associated bias value from -100 to 100. Mathematically, the bias is added to the logits
   * generated by the model prior to sampling. The exact effect will vary per model, but values
   * between -1 and 1 should decrease or increase likelihood of selection; values like -100 or 100
   * should result in a ban or exclusive selection of the relevant token.
   */
  logit_bias?: Record<string, number> | null;
  /**
   * A unique identifier representing your end-user, which can help OpenAI to monitor and detect
   * abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids).
   */
  user?: string;
  /**
   * If set, partial message deltas will be sent, like in ChatGPT. Tokens will be sent as data-only
   * [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format)
   * as they become available, with the stream terminated by a `data: [DONE]` message.
   * [Example Python code](https://github.com/openai/openai-cookbook/blob/main/examples/How_to_stream_completions.ipynb).
   */
  stream?: boolean | null;
  /**
   * Include the log probabilities on the `logprobs` most likely tokens, as well the chosen tokens.
   * For example, if `logprobs` is 5, the API will return a list of the 5 most likely tokens. The
   * API will always return the `logprob` of the sampled token, so there may be up to `logprobs+1`
   * elements in the response.
   *
   * The maximum value for `logprobs` is 5.
   */
  logprobs?: number | null;
  /** Echo back the prompt in addition to the completion */
  echo?: boolean | null;
  /**
   * Generates `best_of` completions server-side and returns the "best" (the one with the highest
   * log probability per token). Results cannot be streamed.
   *
   * When used with `n`, `best_of` controls the number of candidate completions and `n` specifies
   * how many to return – `best_of` must be greater than `n`.
   *
   * **Note:** Because this parameter generates many completions, it can quickly consume your token
   * quota. Use carefully and ensure that you have reasonable settings for `max_tokens` and `stop`.
   */
  best_of?: number | null;
}

export function createCompletionRequestSerializer(
  item: CreateCompletionRequest,
): any {
  return {
    model: item["model"],
    prompt: item["prompt"],
    suffix: item["suffix"],
    temperature: item["temperature"],
    top_p: item["top_p"],
    n: item["n"],
    max_tokens: item["max_tokens"],
    stop: item["stop"],
    presence_penalty: item["presence_penalty"],
    frequency_penalty: item["frequency_penalty"],
    logit_bias: !item.logit_bias
      ? item.logit_bias
      : (serializeRecord(item.logit_bias as any) as any),
    user: item["user"],
    stream: item["stream"],
    logprobs: item["logprobs"],
    echo: item["echo"],
    best_of: item["best_of"],
  };
}

export type CreateCompletionRequestModel =
  | "babbage-002"
  | "davinci-002"
  | "text-davinci-003"
  | "text-davinci-002"
  | "text-davinci-001"
  | "code-davinci-002"
  | "text-curie-001"
  | "text-babbage-001"
  | "text-ada-001";

export function createCompletionRequestModelSerializer(
  item: CreateCompletionRequestModel,
): any {
  return item;
}

export function createCompletionRequestModelDeserializer(
  item: any,
): CreateCompletionRequestModel {
  return item;
}

export type Prompt = string | string[] | number[] | number[][];

export function promptSerializer(item: Prompt): any {
  return item;
}

export function promptDeserializer(item: any): Prompt {
  return item;
}

export type Stop = string | string[];

export function stopSerializer(item: Stop): any {
  return item;
}

export function stopDeserializer(item: any): Stop {
  return item;
}

/**
 * Represents a completion response from the API. Note: both the streamed and non-streamed response
 * objects share the same shape (unlike the chat endpoint).
 */
export interface CreateCompletionResponse {
  /** A unique identifier for the completion. */
  id: string;
  /** The object type, which is always `text_completion`. */
  object: string;
  /** The Unix timestamp (in seconds) of when the completion was created. */
  created: Date;
  /** The model used for the completion. */
  model: string;
  /** The list of completion choices the model generated for the input. */
  choices: {
    index: number;
    text: string;
    logprobs: {
      tokens: string[];
      token_logprobs: number[];
      top_logprobs: Record<string, number>[];
      text_offset: number[];
    } | null;
    finish_reason: "stop" | "length" | "content_filter";
  }[];
  usage?: CompletionUsage;
}

export function createCompletionResponseDeserializer(
  item: any,
): CreateCompletionResponse {
  return {
    id: item["id"],
    object: item["object"],
    created: item["created"],
    model: item["model"],
    choices: createCompletionResponseChoiceArrayDeserializer(item["choices"]),
    usage: !item.usage ? undefined : completionUsageDeserializer(item.usage),
  };
}

export interface CreateCompletionResponseChoice {
  index: number;
  text: string;
  logprobs: {
    tokens: string[];
    token_logprobs: number[];
    top_logprobs: Record<string, number>[];
    text_offset: number[];
  } | null;
  /**
   * The reason the model stopped generating tokens. This will be `stop` if the model hit a
   * natural stop point or a provided stop sequence, or `content_filter` if content was omitted
   * due to a flag from our content filters, `length` if the maximum number of tokens specified
   * in the request was reached, or `content_filter` if content was omitted due to a flag from our
   * content filters.
   */
  finish_reason: "stop" | "length" | "content_filter";
}

export function createCompletionResponseChoiceDeserializer(
  item: any,
): CreateCompletionResponseChoice {
  return {
    index: item["index"],
    text: item["text"],
    logprobs: item.logprobs === null ? null : item.logprobs,
    finish_reason: createCompletionResponseChoiceFinishReasonDeserializer(
      item["finish_reason"],
    ),
  };
}

export interface CreateCompletionResponseChoiceLogprobs {
  tokens: string[];
  token_logprobs: number[];
  top_logprobs: Record<string, number>[];
  text_offset: number[];
}

export function createCompletionResponseChoiceLogprobsDeserializer(
  item: any,
): CreateCompletionResponseChoiceLogprobs {
  return {
    tokens: item["tokens"],
    token_logprobs: item["token_logprobs"],
    top_logprobs: item["top_logprobs"],
    text_offset: item["text_offset"],
  };
}

export type CreateCompletionResponseChoiceFinishReason =
  | "stop"
  | "length"
  | "content_filter";

export function createCompletionResponseChoiceFinishReasonSerializer(
  item: CreateCompletionResponseChoiceFinishReason,
): any {
  return item;
}

export function createCompletionResponseChoiceFinishReasonDeserializer(
  item: any,
): CreateCompletionResponseChoiceFinishReason {
  return item;
}

export function createCompletionResponseChoiceArrayDeserializer(
  result: Array<CreateCompletionResponseChoice>,
): any[] {
  return result.map((item) => {
    createCompletionResponseChoiceDeserializer(item);
  });
}

export interface CreateFineTuningJobRequest {
  /**
   * The ID of an uploaded file that contains training data.
   *
   * See [upload file](/docs/api-reference/files/upload) for how to upload a file.
   *
   * Your dataset must be formatted as a JSONL file. Additionally, you must upload your file with
   * the purpose `fine-tune`.
   *
   * See the [fine-tuning guide](/docs/guides/fine-tuning) for more details.
   */
  training_file: string;
  /**
   * The ID of an uploaded file that contains validation data.
   *
   * If you provide this file, the data is used to generate validation metrics periodically during
   * fine-tuning. These metrics can be viewed in the fine-tuning results file. The same data should
   * not be present in both train and validation files.
   *
   * Your dataset must be formatted as a JSONL file. You must upload your file with the purpose
   * `fine-tune`.
   *
   * See the [fine-tuning guide](/docs/guides/fine-tuning) for more details.
   */
  validation_file?: string | null;
  /**
   * The name of the model to fine-tune. You can select one of the
   * [supported models](/docs/guides/fine-tuning/what-models-can-be-fine-tuned).
   */
  model: "babbage-002" | "davinci-002" | "gpt-3.5-turbo";
  /** The hyperparameters used for the fine-tuning job. */
  hyperparameters?: {
    n_epochs?: "auto" | number;
  };
  /**
   * A string of up to 18 characters that will be added to your fine-tuned model name.
   *
   * For example, a `suffix` of "custom-model-name" would produce a model name like
   * `ft:gpt-3.5-turbo:openai:custom-model-name:7p4lURel`.
   */
  suffix?: string | null;
}

export function createFineTuningJobRequestSerializer(
  item: CreateFineTuningJobRequest,
): any {
  return {
    training_file: item["training_file"],
    validation_file: item["validation_file"],
    model: item["model"],
    hyperparameters: !item.hyperparameters
      ? undefined
      : { n_epochs: item.hyperparameters?.["n_epochs"] },
    suffix: item["suffix"],
  };
}

export type CreateFineTuningJobRequestModel =
  | "babbage-002"
  | "davinci-002"
  | "gpt-3.5-turbo";

export function createFineTuningJobRequestModelSerializer(
  item: CreateFineTuningJobRequestModel,
): any {
  return item;
}

export function createFineTuningJobRequestModelDeserializer(
  item: any,
): CreateFineTuningJobRequestModel {
  return item;
}

export interface CreateFineTuningJobRequestHyperparameters {
  /**
   * The number of epochs to train the model for. An epoch refers to one full cycle through the
   * training dataset.
   */
  n_epochs?: "auto" | number;
}

export function createFineTuningJobRequestHyperparametersSerializer(
  item: CreateFineTuningJobRequestHyperparameters,
): any {
  return { n_epochs: item["n_epochs"] };
}

export type CreateFineTuningJobRequestHyperparametersNEpochs = "auto" | number;

export function createFineTuningJobRequestHyperparametersNEpochsSerializer(
  item: CreateFineTuningJobRequestHyperparametersNEpochs,
): any {
  return item;
}

export function createFineTuningJobRequestHyperparametersNEpochsDeserializer(
  item: any,
): CreateFineTuningJobRequestHyperparametersNEpochs {
  return item;
}

export interface FineTuningJob {
  /** The object identifier, which can be referenced in the API endpoints. */
  id: string;
  /** The object type, which is always "fine_tuning.job". */
  object: "fine_tuning.job";
  /** The Unix timestamp (in seconds) for when the fine-tuning job was created. */
  created_at: Date;
  /**
   * The Unix timestamp (in seconds) for when the fine-tuning job was finished. The value will be
   * null if the fine-tuning job is still running.
   */
  finished_at: Date | null;
  /** The base model that is being fine-tuned. */
  model: string;
  /**
   * The name of the fine-tuned model that is being created. The value will be null if the
   * fine-tuning job is still running.
   */
  fine_tuned_model: string | null;
  /** The organization that owns the fine-tuning job. */
  organization_id: string;
  /**
   * The current status of the fine-tuning job, which can be either `created`, `pending`, `running`,
   * `succeeded`, `failed`, or `cancelled`.
   */
  status:
    | "created"
    | "pending"
    | "running"
    | "succeeded"
    | "failed"
    | "cancelled";
  /**
   * The hyperparameters used for the fine-tuning job. See the
   * [fine-tuning guide](/docs/guides/fine-tuning) for more details.
   */
  hyperparameters: {
    n_epochs?: "auto" | number;
  };
  /**
   * The file ID used for training. You can retrieve the training data with the
   * [Files API](/docs/api-reference/files/retrieve-contents).
   */
  training_file: string;
  /**
   * The file ID used for validation. You can retrieve the validation results with the
   * [Files API](/docs/api-reference/files/retrieve-contents).
   */
  validation_file: string | null;
  /**
   * The compiled results file ID(s) for the fine-tuning job. You can retrieve the results with the
   * [Files API](/docs/api-reference/files/retrieve-contents).
   */
  result_files: string[];
  /**
   * The total number of billable tokens processed by this fine tuning job. The value will be null
   * if the fine-tuning job is still running.
   */
  trained_tokens: number | null;
  /**
   * For fine-tuning jobs that have `failed`, this will contain more information on the cause of the
   * failure.
   */
  error: {
    message?: string;
    code?: string;
    param?: string | null;
  } | null;
}

export function fineTuningJobDeserializer(item: any): FineTuningJob {
  return {
    id: item["id"],
    object: item["object"],
    created_at: item["created_at"],
    finished_at: item["finished_at"],
    model: item["model"],
    fine_tuned_model: item["fine_tuned_model"],
    organization_id: item["organization_id"],
    status: fineTuningJobStatusDeserializer(item["status"]),
    hyperparameters: fineTuningJobHyperparametersDeserializer(
      item.hyperparameters,
    ),
    training_file: item["training_file"],
    validation_file: item["validation_file"],
    result_files: item["result_files"],
    trained_tokens: item["trained_tokens"],
    error: item.error === null ? null : item.error,
  };
}

export type FineTuningJobStatus =
  | "created"
  | "pending"
  | "running"
  | "succeeded"
  | "failed"
  | "cancelled";

export function fineTuningJobStatusSerializer(item: FineTuningJobStatus): any {
  return item;
}

export function fineTuningJobStatusDeserializer(
  item: any,
): FineTuningJobStatus {
  return item;
}

export interface FineTuningJobHyperparameters {
  /**
   * The number of epochs to train the model for. An epoch refers to one full cycle through the
   * training dataset.
   *
   * "Auto" decides the optimal number of epochs based on the size of the dataset. If setting the
   * number manually, we support any number between 1 and 50 epochs.
   */
  n_epochs?: "auto" | number;
}

export function fineTuningJobHyperparametersDeserializer(
  item: any,
): FineTuningJobHyperparameters {
  return {
    n_epochs: fineTuningJobHyperparametersNEpochsDeserializer(item["n_epochs"]),
  };
}

export type FineTuningJobHyperparametersNEpochs = "auto" | number;

export function fineTuningJobHyperparametersNEpochsSerializer(
  item: FineTuningJobHyperparametersNEpochs,
): any {
  return item;
}

export function fineTuningJobHyperparametersNEpochsDeserializer(
  item: any,
): FineTuningJobHyperparametersNEpochs {
  return item;
}

export interface FineTuningJobError {
  /** A human-readable error message. */
  message?: string;
  /** A machine-readable error code. */
  code?: string;
  /**
   * The parameter that was invalid, usually `training_file` or `validation_file`. This field
   * will be null if the failure was not parameter-specific.
   */
  param?: string | null;
}

export function fineTuningJobErrorDeserializer(item: any): FineTuningJobError {
  return {
    message: item["message"],
    code: item["code"],
    param: item["param"],
  };
}

export interface ListPaginatedFineTuningJobsResponse {
  object: string;
  data: FineTuningJob[];
  has_more: boolean;
}

export function listPaginatedFineTuningJobsResponseDeserializer(
  item: any,
): ListPaginatedFineTuningJobsResponse {
  return {
    object: item["object"],
    data: fineTuningJobArrayDeserializer(item["data"]),
    has_more: item["has_more"],
  };
}

export function fineTuningJobArrayDeserializer(
  result: Array<FineTuningJob>,
): any[] {
  return result.map((item) => {
    fineTuningJobDeserializer(item);
  });
}

export interface ListFineTuningJobEventsResponse {
  object: string;
  data: FineTuningJobEvent[];
}

export function listFineTuningJobEventsResponseDeserializer(
  item: any,
): ListFineTuningJobEventsResponse {
  return {
    object: item["object"],
    data: fineTuningJobEventArrayDeserializer(item["data"]),
  };
}

export interface FineTuningJobEvent {
  id: string;
  object: string;
  created_at: Date;
  level: "info" | "warn" | "error";
  message: string;
}

export function fineTuningJobEventDeserializer(item: any): FineTuningJobEvent {
  return {
    id: item["id"],
    object: item["object"],
    created_at: item["created_at"],
    level: fineTuningJobEventLevelDeserializer(item["level"]),
    message: item["message"],
  };
}

export type FineTuningJobEventLevel = "info" | "warn" | "error";

export function fineTuningJobEventLevelSerializer(
  item: FineTuningJobEventLevel,
): any {
  return item;
}

export function fineTuningJobEventLevelDeserializer(
  item: any,
): FineTuningJobEventLevel {
  return item;
}

export function fineTuningJobEventArrayDeserializer(
  result: Array<FineTuningJobEvent>,
): any[] {
  return result.map((item) => {
    fineTuningJobEventDeserializer(item);
  });
}

export interface CreateChatCompletionRequest {
  /**
   * ID of the model to use. See the [model endpoint compatibility](/docs/models/model-endpoint-compatibility)
   * table for details on which models work with the Chat API.
   */
  model:
    | "gpt4"
    | "gpt-4-0314"
    | "gpt-4-0613"
    | "gpt-4-32k"
    | "gpt-4-32k-0314"
    | "gpt-4-32k-0613"
    | "gpt-3.5-turbo"
    | "gpt-3.5-turbo-16k"
    | "gpt-3.5-turbo-0301"
    | "gpt-3.5-turbo-0613"
    | "gpt-3.5-turbo-16k-0613";
  /**
   * A list of messages comprising the conversation so far.
   * [Example Python code](https://github.com/openai/openai-cookbook/blob/main/examples/How_to_format_inputs_to_ChatGPT_models.ipynb).
   */
  messages: ChatCompletionRequestMessage[];
  /** A list of functions the model may generate JSON inputs for. */
  functions?: ChatCompletionFunctions[];
  /**
   * Controls how the model responds to function calls. `none` means the model does not call a
   * function, and responds to the end-user. `auto` means the model can pick between an end-user or
   * calling a function.  Specifying a particular function via `{\"name":\ \"my_function\"}` forces the
   * model to call that function. `none` is the default when no functions are present. `auto` is the
   * default if functions are present.
   */
  function_call?: "none" | "auto" | ChatCompletionFunctionCallOption;
  /**
   * What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output
   * more random, while lower values like 0.2 will make it more focused and deterministic.
   *
   * We generally recommend altering this or `top_p` but not both.
   */
  temperature?: number | null;
  /**
   * An alternative to sampling with temperature, called nucleus sampling, where the model considers
   * the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising
   * the top 10% probability mass are considered.
   *
   * We generally recommend altering this or `temperature` but not both.
   */
  top_p?: number | null;
  /**
   * How many completions to generate for each prompt.
   * **Note:** Because this parameter generates many completions, it can quickly consume your token
   * quota. Use carefully and ensure that you have reasonable settings for `max_tokens` and `stop`.
   */
  n?: number | null;
  /**
   * The maximum number of [tokens](/tokenizer) to generate in the completion.
   *
   * The token count of your prompt plus `max_tokens` cannot exceed the model's context length.
   * [Example Python code](https://github.com/openai/openai-cookbook/blob/main/examples/How_to_count_tokens_with_tiktoken.ipynb)
   * for counting tokens.
   */
  max_tokens?: number | null;
  /** Up to 4 sequences where the API will stop generating further tokens. */
  stop?: Stop_1 | null;
  /**
   * Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear
   * in the text so far, increasing the model's likelihood to talk about new topics.
   *
   * [See more information about frequency and presence penalties.](/docs/guides/gpt/parameter-details)
   */
  presence_penalty?: number | null;
  /**
   * Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing
   * frequency in the text so far, decreasing the model's likelihood to repeat the same line
   * verbatim.
   *
   * [See more information about frequency and presence penalties.](/docs/guides/gpt/parameter-details)
   */
  frequency_penalty?: number | null;
  /**
   * Modify the likelihood of specified tokens appearing in the completion.
   * Accepts a json object that maps tokens (specified by their token ID in the tokenizer) to an
   * associated bias value from -100 to 100. Mathematically, the bias is added to the logits
   * generated by the model prior to sampling. The exact effect will vary per model, but values
   * between -1 and 1 should decrease or increase likelihood of selection; values like -100 or 100
   * should result in a ban or exclusive selection of the relevant token.
   */
  logit_bias?: Record<string, number> | null;
  /**
   * A unique identifier representing your end-user, which can help OpenAI to monitor and detect
   * abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids).
   */
  user?: string;
  /**
   * If set, partial message deltas will be sent, like in ChatGPT. Tokens will be sent as data-only
   * [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format)
   * as they become available, with the stream terminated by a `data: [DONE]` message.
   * [Example Python code](https://github.com/openai/openai-cookbook/blob/main/examples/How_to_stream_completions.ipynb).
   */
  stream?: boolean | null;
}

export function createChatCompletionRequestSerializer(
  item: CreateChatCompletionRequest,
): any {
  return {
    model: item["model"],
    messages: item["messages"].map(chatCompletionRequestMessageSerializer),
    functions:
      item["functions"] === undefined
        ? item["functions"]
        : item["functions"].map(chatCompletionFunctionsSerializer),
    function_call: item["function_call"],
    temperature: item["temperature"],
    top_p: item["top_p"],
    n: item["n"],
    max_tokens: item["max_tokens"],
    stop: item["stop"],
    presence_penalty: item["presence_penalty"],
    frequency_penalty: item["frequency_penalty"],
    logit_bias: !item.logit_bias
      ? item.logit_bias
      : (serializeRecord(item.logit_bias as any) as any),
    user: item["user"],
    stream: item["stream"],
  };
}

export type CreateChatCompletionRequestModel =
  | "gpt4"
  | "gpt-4-0314"
  | "gpt-4-0613"
  | "gpt-4-32k"
  | "gpt-4-32k-0314"
  | "gpt-4-32k-0613"
  | "gpt-3.5-turbo"
  | "gpt-3.5-turbo-16k"
  | "gpt-3.5-turbo-0301"
  | "gpt-3.5-turbo-0613"
  | "gpt-3.5-turbo-16k-0613";

export function createChatCompletionRequestModelSerializer(
  item: CreateChatCompletionRequestModel,
): any {
  return item;
}

export function createChatCompletionRequestModelDeserializer(
  item: any,
): CreateChatCompletionRequestModel {
  return item;
}

export interface ChatCompletionRequestMessage {
  /** The role of the messages author. One of `system`, `user`, `assistant`, or `function`. */
  role: "system" | "user" | "assistant" | "function";
  /**
   * The contents of the message. `content` is required for all messages, and may be null for
   * assistant messages with function calls.
   */
  content: string | null;
  /**
   * The name of the author of this message. `name` is required if role is `function`, and it
   * should be the name of the function whose response is in the `content`. May contain a-z,
   * A-Z, 0-9, and underscores, with a maximum length of 64 characters.
   */
  name?: string;
  /** The name and arguments of a function that should be called, as generated by the model. */
  function_call?: {
    name: string;
    arguments: string;
  };
}

export function chatCompletionRequestMessageSerializer(
  item: ChatCompletionRequestMessage,
): any {
  return {
    role: item["role"],
    content: item["content"],
    name: item["name"],
    function_call: !item.function_call
      ? undefined
      : {
          name: item.function_call?.["name"],
          arguments: item.function_call?.["arguments"],
        },
  };
}

export type ChatCompletionRequestMessageRole =
  | "system"
  | "user"
  | "assistant"
  | "function";

export function chatCompletionRequestMessageRoleSerializer(
  item: ChatCompletionRequestMessageRole,
): any {
  return item;
}

export function chatCompletionRequestMessageRoleDeserializer(
  item: any,
): ChatCompletionRequestMessageRole {
  return item;
}

export interface ChatCompletionRequestMessageFunctionCall {
  /** The name of the function to call. */
  name: string;
  /**
   * The arguments to call the function with, as generated by the model in JSON format. Note that
   * the model does not always generate valid JSON, and may hallucinate parameters not defined by
   * your function schema. Validate the arguments in your code before calling your function.
   */
  arguments: string;
}

export function chatCompletionRequestMessageFunctionCallSerializer(
  item: ChatCompletionRequestMessageFunctionCall,
): any {
  return { name: item["name"], arguments: item["arguments"] };
}

export function chatCompletionRequestMessageArraySerializer(
  result: Array<ChatCompletionRequestMessage>,
): any[] {
  return result.map((item) => {
    chatCompletionRequestMessageSerializer(item);
  });
}

export interface ChatCompletionFunctions {
  /**
   * The name of the function to be called. Must be a-z, A-Z, 0-9, or contain underscores and
   * dashes, with a maximum length of 64.
   */
  name: string;
  /**
   * A description of what the function does, used by the model to choose when and how to call the
   * function.
   */
  description?: string;
  /**
   * The parameters the functions accepts, described as a JSON Schema object. See the
   * [guide](/docs/guides/gpt/function-calling) for examples, and the
   * [JSON Schema reference](https://json-schema.org/understanding-json-schema/) for documentation
   * about the format.\n\nTo describe a function that accepts no parameters, provide the value
   * `{\"type\": \"object\", \"properties\": {}}`.
   */
  parameters: ChatCompletionFunctionParameters;
}

export function chatCompletionFunctionsSerializer(
  item: ChatCompletionFunctions,
): any {
  return {
    name: item["name"],
    description: item["description"],
    parameters: serializeRecord(item.parameters as any) as any,
  };
}

export interface ChatCompletionFunctionParameters {}

export function chatCompletionFunctionParametersSerializer(
  item: ChatCompletionFunctionParameters,
): any {
  return { ...item };
}

export function chatCompletionFunctionsArraySerializer(
  result: Array<ChatCompletionFunctions>,
): any[] {
  return result.map((item) => {
    chatCompletionFunctionsSerializer(item);
  });
}

export type CreateChatCompletionRequestFunctionCall1 =
  | "none"
  | "auto"
  | ChatCompletionFunctionCallOption;

export function createChatCompletionRequestFunctionCall1Serializer(
  item: CreateChatCompletionRequestFunctionCall1,
): any {
  return item;
}

export function createChatCompletionRequestFunctionCall1Deserializer(
  item: any,
): CreateChatCompletionRequestFunctionCall1 {
  return item;
}

export interface ChatCompletionFunctionCallOption {
  /** The name of the function to call. */
  name: string;
}

export function chatCompletionFunctionCallOptionSerializer(
  item: ChatCompletionFunctionCallOption,
): any {
  return { name: item["name"] };
}

export type Stop_1 = string | string[];

/** Represents a chat completion response returned by model, based on the provided input. */
export interface CreateChatCompletionResponse {
  /** A unique identifier for the chat completion. */
  id: string;
  /** The object type, which is always `chat.completion`. */
  object: string;
  /** The Unix timestamp (in seconds) of when the chat completion was created. */
  created: Date;
  /** The model used for the chat completion. */
  model: string;
  /** A list of chat completion choices. Can be more than one if `n` is greater than 1. */
  choices: {
    index: number;
    message: ChatCompletionResponseMessage;
    finish_reason: "stop" | "length" | "function_call" | "content_filter";
  }[];
  usage?: CompletionUsage;
}

export function createChatCompletionResponseDeserializer(
  item: any,
): CreateChatCompletionResponse {
  return {
    id: item["id"],
    object: item["object"],
    created: item["created"],
    model: item["model"],
    choices: createChatCompletionResponseChoiceArrayDeserializer(
      item["choices"],
    ),
    usage: !item.usage ? undefined : completionUsageDeserializer(item.usage),
  };
}

export interface CreateChatCompletionResponseChoice {
  /** The index of the choice in the list of choices. */
  index: number;
  message: ChatCompletionResponseMessage;
  /**
   * The reason the model stopped generating tokens. This will be `stop` if the model hit a
   * natural stop point or a provided stop sequence, `length` if the maximum number of tokens
   * specified in the request was reached, `content_filter` if the content was omitted due to
   * a flag from our content filters, or `function_call` if the model called a function.
   */
  finish_reason: "stop" | "length" | "function_call" | "content_filter";
}

export function createChatCompletionResponseChoiceDeserializer(
  item: any,
): CreateChatCompletionResponseChoice {
  return {
    index: item["index"],
    message: chatCompletionResponseMessageDeserializer(item.message),
    finish_reason: createChatCompletionResponseChoiceFinishReasonDeserializer(
      item["finish_reason"],
    ),
  };
}

export interface ChatCompletionResponseMessage {
  /** The role of the author of this message. */
  role: "system" | "user" | "assistant" | "function";
  /** The contents of the message. */
  content: string | null;
  /** The name and arguments of a function that should be called, as generated by the model. */
  function_call?: {
    name: string;
    arguments: string;
  };
}

export function chatCompletionResponseMessageDeserializer(
  item: any,
): ChatCompletionResponseMessage {
  return {
    role: chatCompletionResponseMessageRoleDeserializer(item["role"]),
    content: item["content"],
    function_call: !item.function_call
      ? undefined
      : chatCompletionResponseMessageFunctionCallDeserializer(
          item.function_call,
        ),
  };
}

export type ChatCompletionResponseMessageRole =
  | "system"
  | "user"
  | "assistant"
  | "function";

export function chatCompletionResponseMessageRoleSerializer(
  item: ChatCompletionResponseMessageRole,
): any {
  return item;
}

export function chatCompletionResponseMessageRoleDeserializer(
  item: any,
): ChatCompletionResponseMessageRole {
  return item;
}

export interface ChatCompletionResponseMessageFunctionCall {
  /** The name of the function to call. */
  name: string;
  /**
   * The arguments to call the function with, as generated by the model in JSON format. Note that
   * the model does not always generate valid JSON, and may hallucinate parameters not defined by
   * your function schema. Validate the arguments in your code before calling your function.
   */
  arguments: string;
}

export function chatCompletionResponseMessageFunctionCallDeserializer(
  item: any,
): ChatCompletionResponseMessageFunctionCall {
  return {
    name: item["name"],
    arguments: item["arguments"],
  };
}

export type CreateChatCompletionResponseChoiceFinishReason =
  | "stop"
  | "length"
  | "function_call"
  | "content_filter";

export function createChatCompletionResponseChoiceFinishReasonSerializer(
  item: CreateChatCompletionResponseChoiceFinishReason,
): any {
  return item;
}

export function createChatCompletionResponseChoiceFinishReasonDeserializer(
  item: any,
): CreateChatCompletionResponseChoiceFinishReason {
  return item;
}

export function createChatCompletionResponseChoiceArrayDeserializer(
  result: Array<CreateChatCompletionResponseChoice>,
): any[] {
  return result.map((item) => {
    createChatCompletionResponseChoiceDeserializer(item);
  });
}

export interface CreateTranslationRequest {
  /**
   * The audio file object (not file name) to translate, in one of these formats: flac, mp3, mp4,
   * mpeg, mpga, m4a, ogg, wav, or webm.
   */
  file: Uint8Array;
  /** ID of the model to use. Only `whisper-1` is currently available. */
  model: "whisper-1";
  /**
   * An optional text to guide the model's style or continue a previous audio segment. The
   * [prompt](/docs/guides/speech-to-text/prompting) should match the audio language.
   */
  prompt?: string;
  /**
   * The format of the transcript output, in one of these options: json, text, srt, verbose_json, or
   * vtt.
   */
  response_format?: "json" | "text" | "srt" | "verbose_json" | "vtt";
  /**
   * The sampling temperature, between 0 and 1. Higher values like 0.8 will make the output more
   * random, while lower values like 0.2 will make it more focused and deterministic. If set to 0,
   * the model will use [log probability](https://en.wikipedia.org/wiki/Log_probability) to
   * automatically increase the temperature until certain thresholds are hit.
   */
  temperature?: number;
}

export function createTranslationRequestSerializer(
  item: CreateTranslationRequest,
): any {
  return {
    file: uint8ArrayToString(item["file"], "base64"),
    model: item["model"],
    prompt: item["prompt"],
    response_format: item["response_format"],
    temperature: item["temperature"],
  };
}

export type CreateTranslationRequestModel = "whisper-1";

export function createTranslationRequestModelSerializer(
  item: CreateTranslationRequestModel,
): any {
  return item;
}

export function createTranslationRequestModelDeserializer(
  item: any,
): CreateTranslationRequestModel {
  return item;
}

export type CreateTranslationRequestResponseFormat =
  | "json"
  | "text"
  | "srt"
  | "verbose_json"
  | "vtt";

export function createTranslationRequestResponseFormatSerializer(
  item: CreateTranslationRequestResponseFormat,
): any {
  return item;
}

export function createTranslationRequestResponseFormatDeserializer(
  item: any,
): CreateTranslationRequestResponseFormat {
  return item;
}

export interface CreateTranslationResponse {
  text: string;
}

export function createTranslationResponseDeserializer(
  item: any,
): CreateTranslationResponse {
  return {
    text: item["text"],
  };
}

export interface CreateTranscriptionRequest {
  /**
   * The audio file object (not file name) to transcribe, in one of these formats: flac, mp3, mp4,
   * mpeg, mpga, m4a, ogg, wav, or webm.
   */
  file: Uint8Array;
  /** ID of the model to use. Only `whisper-1` is currently available. */
  model: "whisper-1";
  /**
   * An optional text to guide the model's style or continue a previous audio segment. The
   * [prompt](/docs/guides/speech-to-text/prompting) should match the audio language.
   */
  prompt?: string;
  /**
   * The format of the transcript output, in one of these options: json, text, srt, verbose_json, or
   * vtt.
   */
  response_format?: "json" | "text" | "srt" | "verbose_json" | "vtt";
  /**
   * The sampling temperature, between 0 and 1. Higher values like 0.8 will make the output more
   * random, while lower values like 0.2 will make it more focused and deterministic. If set to 0,
   * the model will use [log probability](https://en.wikipedia.org/wiki/Log_probability) to
   * automatically increase the temperature until certain thresholds are hit.
   */
  temperature?: number;
  /**
   * The language of the input audio. Supplying the input language in
   * [ISO-639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format will improve accuracy
   * and latency.
   */
  language?: string;
}

export function createTranscriptionRequestSerializer(
  item: CreateTranscriptionRequest,
): any {
  return {
    file: uint8ArrayToString(item["file"], "base64"),
    model: item["model"],
    prompt: item["prompt"],
    response_format: item["response_format"],
    temperature: item["temperature"],
    language: item["language"],
  };
}

export type CreateTranscriptionRequestModel = "whisper-1";

export function createTranscriptionRequestModelSerializer(
  item: CreateTranscriptionRequestModel,
): any {
  return item;
}

export function createTranscriptionRequestModelDeserializer(
  item: any,
): CreateTranscriptionRequestModel {
  return item;
}

export type CreateTranscriptionRequestResponseFormat =
  | "json"
  | "text"
  | "srt"
  | "verbose_json"
  | "vtt";

export function createTranscriptionRequestResponseFormatSerializer(
  item: CreateTranscriptionRequestResponseFormat,
): any {
  return item;
}

export function createTranscriptionRequestResponseFormatDeserializer(
  item: any,
): CreateTranscriptionRequestResponseFormat {
  return item;
}

export interface CreateTranscriptionResponse {
  text: string;
}

export function createTranscriptionResponseDeserializer(
  item: any,
): CreateTranscriptionResponse {
  return {
    text: item["text"],
  };
}
