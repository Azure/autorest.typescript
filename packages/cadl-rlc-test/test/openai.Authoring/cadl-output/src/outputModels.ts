// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/**
 * Deployments manage the reserved quota for Azure OpenAI models and make them
 * available for inference requests.
 */
export interface DeploymentOutput {
  /** Defines the type of an object. */
  readonly object?: string;
  /**
   * The state of a job or item.
   *
   * Possible values: notRunning, running, succeeded, canceled, failed, deleted
   */
  readonly status: string;
  /** A timestamp when this job or item was created (in unix epochs). */
  readonly created_at: number;
  /** A timestamp when this job or item was modified last (in unix epochs). */
  readonly updated_at: number;
  /** The identifier of the deployment */
  readonly id: string;
  /** The OpenAI model to deploy. Can be a base model or a fine tune. */
  model: string;
  /**
   * The owner of this deployment. For Azure OpenAI only "organization-owner" is
   * supported.
   */
  readonly owner?: string;
  /**
   * The scale settings of a deployment. It defines the modes for scaling and the
   * reserved capacity.
   */
  scale_settings: ScaleSettingsOutput;
}

/**
 * The scale settings of a deployment. It defines the modes for scaling and the
 * reserved capacity.
 */
export interface ScaleSettingsOutputParent {
  scale_type: "ScaleSettings" | "manual" | "standard";
}

/** Settings for the manual scale type. */
export interface ManualScaleSettingsOutput extends ScaleSettingsOutputParent {
  /** The constant reserved capacity of the inference endpoint for this deployment. */
  capacity: number;
  /** Defines how scaling operations will be executed. */
  scale_type: "manual";
}

/** Settings for the standard scale type. */
export interface StandardScaleSettingsOutput extends ScaleSettingsOutputParent {
  /** Defines how scaling operations will be executed. */
  scale_type: "standard";
}

export interface DeploymentListOutput {
  /** Defines the type of this object */
  object?: "deployment";
  /** The list of Deployments */
  data?: Array<DeploymentOutput>;
}

/** A response containing error details. */
export interface ErrorResponseOutput {
  /** The error object. */
  error: ErrorModelOutput;
}

/** The error object. */
export interface ErrorModelOutput {
  /** One of a server-defined set of error codes. */
  code: string;
  /** A human-readable representation of the error. */
  message: string;
  /** The target of the error. */
  target?: string;
  /** An array of details about specific errors that led to this reported error. */
  details: Array<ErrorModelOutput>;
  /** An object containing more specific information than the current object about the error. */
  innererror?: InnerErrorOutput;
}

/** An object containing more specific information about the error. As per Microsoft One API guidelines - https://github.com/Microsoft/api-guidelines/blob/vNext/Guidelines.md#7102-error-condition-responses. */
export interface InnerErrorOutput {
  /** One of a server-defined set of error codes. */
  code: string;
  /** Inner error. */
  innererror?: InnerErrorOutput;
}

export interface CustomResponseFieldsOutput {
  /** Defines the type of an object. */
  readonly object?: string;
  /**
   * The state of a job or item.
   *
   * Possible values: notRunning, running, succeeded, canceled, failed, deleted
   */
  readonly status: string;
  /** A timestamp when this job or item was created (in unix epochs). */
  readonly created_at: number;
  /** A timestamp when this job or item was modified last (in unix epochs). */
  readonly updated_at: number;
  /** The identifier of the deployment */
  readonly id: string;
  /** The OpenAI model to deploy. Can be a base model or a fine tune. */
  model: string;
  /**
   * The owner of this deployment. For Azure OpenAI only "organization-owner" is
   * supported.
   */
  readonly owner?: string;
  /**
   * The scale settings of a deployment. It defines the modes for scaling and the
   * reserved capacity.
   */
  scale_settings: ScaleSettingsOutput;
}

/**
 * A file is a document usable for training and validation. It can also be a
 * service generated document with result details.
 */
export interface FileOutput {
  /** Defines the type of an object. */
  readonly object?: string;
  /**
   * The state of a job or item.
   *
   * Possible values: notRunning, running, succeeded, canceled, failed, deleted
   */
  readonly status?: string;
  /** A timestamp when this job or item was created (in unix epochs). */
  readonly created_at?: number;
  /** A timestamp when this job or item was modified last (in unix epochs). */
  readonly updated_at?: number;
  /** The identity of this item. */
  readonly id: string;
  /**
   * The size of this file when available (can be null). File sizes larger than
   * 2^53-1 are not supported to ensure compatibility
   * with JavaScript integers.
   */
  readonly bytes?: number;
  /**
   * The intended purpose of the uploaded documents. Use "fine-tune" for
   * fine-tuning. This allows us to validate the format of the uploaded file.
   */
  purpose: string;
  /** The name of the file. */
  filename: string;
}

export interface FileListOutput {
  /** Defines the type of this object */
  object?: "file";
  /** The list of Files */
  data?: Array<FileOutput>;
}

export interface CustomResponseFieldsOutput {
  /** Defines the type of an object. */
  readonly object?: string;
  /**
   * The state of a job or item.
   *
   * Possible values: notRunning, running, succeeded, canceled, failed, deleted
   */
  readonly status?: string;
  /** A timestamp when this job or item was created (in unix epochs). */
  readonly created_at?: number;
  /** A timestamp when this job or item was modified last (in unix epochs). */
  readonly updated_at?: number;
  /** The identity of this item. */
  readonly id: string;
  /**
   * The size of this file when available (can be null). File sizes larger than
   * 2^53-1 are not supported to ensure compatibility
   * with JavaScript integers.
   */
  readonly bytes?: number;
  /**
   * The intended purpose of the uploaded documents. Use "fine-tune" for
   * fine-tuning. This allows us to validate the format of the uploaded file.
   */
  purpose: string;
  /** The name of the file. */
  filename: string;
}

/** content of uploaded file */
export interface FileContentOutput {
  /**
   * The intended purpose of the uploaded documents. Use "fine-tune" for
   * fine-tuning. This allows us to validate the format of the uploaded file.
   */
  purpose: string;
  /** Gets or sets the file to upload into Azure OpenAI. */
  file: string;
}

/** Fine tuning is a job to tailor a model to specific training data. */
export interface FineTuneOutput {
  /** Defines the type of an object. */
  readonly object?: string;
  /**
   * The state of a job or item.
   *
   * Possible values: notRunning, running, succeeded, canceled, failed, deleted
   */
  readonly status?: string;
  /** A timestamp when this job or item was created (in unix epochs). */
  readonly created_at?: number;
  /** A timestamp when this job or item was modified last (in unix epochs). */
  readonly updated_at?: number;
  /** The identity of this item. */
  readonly id: string;
  /** The identifier of the base model used for the fine-tune. */
  model: string;
  /**
   * The identifier of the resulting fine tuned model. This property is only
   * populated for successfully completed fine-tune runs.
   * Use this identifier to
   * create a deployment for inferencing.
   */
  readonly fine_tuned_model?: string;
  /** The files that are used for training the fine tuned model. */
  training_files: Array<FileOutput>;
  /** The files that are used to evaluate the fine tuned model during training. */
  validation_files?: Array<FileOutput>;
  /**
   * The result files containing training and evaluation metrics in csv format.
   * The
   * file is only available for successfully completed fine-tune runs.
   */
  readonly result_files?: Array<FileOutput>;
  /**
   * The events that show the progress of the fine-tune run including queued,
   * running and completed.
   */
  readonly events?: Array<EventOutput>;
  /**
   * The organisation id of this fine tune job. Unused on Azure OpenAI;
   * compatibility for OpenAI only.
   */
  readonly organisation_id?: string;
  /**
   * The user id of this fine tune job. Unused on Azure OpenAI; compatibility for
   * OpenAI only.
   */
  readonly user_id?: string;
  /** The hyper parameter settings used in a fine tune job. */
  hyperparams?: HyperParametersOutput;
}

/** Event */
export interface EventOutput {
  /** Defines the type of an object. */
  readonly object?: string;
  /** A timestamp when this event was created (in unix epochs). */
  readonly created_at?: number;
  /**
   * The verbosity level of an event.
   *
   * Possible values: info, warning, error
   */
  readonly level?: string;
  /**
   * The message describing the event. This can be a change of state, e.g.,
   * enqueued, started, failed or completed, or other events like uploaded results.
   */
  readonly message?: string;
}

/** The hyper parameter settings used in a fine tune job. */
export interface HyperParametersOutput {
  /**
   * The batch size to use for training. The batch size is the number of training
   * examples used to train a single forward and backward pass.
   * In general, we've
   * found that larger batch sizes tend to work better for larger datasets.
   * The
   * default value as well as the maximum value for this property are specific to a
   * base model.
   */
  batch_size?: number;
  /**
   * The learning rate multiplier to use for training. The fine-tuning learning rate
   * is the original learning rate used for pre-training multiplied by this
   * value.
   * Larger learning rates tend to perform better with larger batch
   * sizes.
   * We recommend experimenting with values in the range 0.02 to 0.2 to see
   * what produces the best results.
   */
  learning_rate_multiplier?: number;
  /**
   * The number of epochs to train the model for. An epoch refers to one full cycle
   * through the training dataset.
   */
  n_epochs?: number;
  /**
   * The weight to use for loss on the prompt tokens. This controls how much the
   * model tries to learn to generate the prompt
   * (as compared to the completion
   * which always has a weight of 1.0), and can add a stabilizing effect to training
   * when completions are short.
   * If prompts are extremely long (relative to
   * completions), it may make sense to reduce this weight so as to avoid
   * over-prioritizing learning the prompt.
   */
  prompt_loss_weight?: number;
  /**
   * A value indicating whether to compute classification metrics.
   * If set, we
   * calculate classification-specific metrics such as accuracy and F-1 score using
   * the validation set at the end of every epoch.
   * These metrics can be viewed in
   * the results file. In order to compute classification metrics, you must provide
   * a validation_file.Additionally,
   * you must specify classification_n_classes for
   * multiclass classification or classification_positive_class for binary
   * classification.
   */
  compute_classification_metrics?: boolean;
  /**
   * The number of classes in a classification task.
   * This parameter is required for
   * multiclass classification.
   */
  classification_n_classes?: number;
  /**
   * The positive class in binary classification.
   * This parameter is needed to
   * generate precision, recall, and F1 metrics when doing binary classification.
   */
  classification_positive_class?: string;
  /**
   * The classification beta values. If this is provided, we calculate F-beta scores
   * at the specified beta values.
   * The F-beta score is a generalization of F-1
   * score. This is only used for binary classification.
   * With a beta of 1 (i.e.the
   * F-1 score), precision and recall are given the same weight.
   * A larger beta
   * score puts more weight on recall and less on precision. A smaller beta score
   * puts more weight on precision and less on recall.
   */
  classification_betas?: number[];
}

export interface FineTuneListOutput {
  /** Defines the type of this object */
  object?: "fine-tune";
  /** The list of FineTunes */
  data?: Array<FineTuneOutput>;
}

export interface EventListOutput {
  /** Defines the type of this object */
  object?: string;
  /** The list of Events */
  data?: Array<EventOutput>;
}

/** A model is either a base model or the result of a successful fine tune job. */
export interface ModelOutput {
  /** Defines the type of an object. */
  readonly object?: string;
  /**
   * The state of a job or item.
   *
   * Possible values: notRunning, running, succeeded, canceled, failed, deleted
   */
  readonly status?: string;
  /** A timestamp when this job or item was created (in unix epochs). */
  readonly created_at?: number;
  /** A timestamp when this job or item was modified last (in unix epochs). */
  readonly updated_at?: number;
  /** The identity of this item. */
  readonly id: string;
  /** The base model ID if this is a fine tune model; otherwise `null`. */
  readonly model?: string;
  /** The fine tune job ID if this is a fine tune model; otherwise `null`. */
  readonly fine_tune?: string;
  /** The capabilities of a base or fine tune model. */
  capabilities?: CapabilitiesOutput;
  /**
   * Defines the dates of deprecation for the different use cases of a
   * model.
   * Usually base models support 1 year of fine tuning after creation.
   * Inference is typically supported 2 years after creation of base or
   * fine tuned
   * models. The exact dates are specified in the properties.
   */
  deprecation?: DeprecationOutput;
}

/** The capabilities of a base or fine tune model. */
export interface CapabilitiesOutput {
  /** A value indicating whether a model can be used for fine tuning. */
  readonly fine_tune?: boolean;
  /** A value indicating whether a model can be deployed. */
  readonly inference?: boolean;
  /** A value indicating whether a model supports completion. */
  readonly completion?: boolean;
  /** A value indicating whether a model supports embeddings. */
  readonly embeddings?: boolean;
  /** The supported scale types for deployments of this model. */
  readonly scale_types?: string[];
}

/**
 * Defines the dates of deprecation for the different use cases of a
 * model.
 * Usually base models support 1 year of fine tuning after creation.
 * Inference is typically supported 2 years after creation of base or
 * fine tuned
 * models. The exact dates are specified in the properties.
 */
export interface DeprecationOutput {
  /**
   * The end date of fine tune support of this model. Will be `null` for fine tune
   * models.
   */
  readonly fine_tune_end_date?: number;
  /** The end date of inference support of this model. */
  readonly inference?: number;
}

export interface ModelListOutput {
  /** Defines the type of this object */
  object?: "model";
  /** The list of Models */
  data?: Array<ModelOutput>;
}

/**
 * The scale settings of a deployment. It defines the modes for scaling and the
 * reserved capacity.
 */
export type ScaleSettingsOutput =
  | ManualScaleSettingsOutput
  | StandardScaleSettingsOutput;
