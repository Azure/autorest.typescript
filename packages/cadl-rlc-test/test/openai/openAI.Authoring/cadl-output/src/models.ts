// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/**
 * Deployments manage the reserved quota for Azure OpenAI models and make them
 * available for inference requests.
 */
export interface Deployment {
  /** The OpenAI model to deploy. Can be a base model or a fine tune. */
  model: string;
  /**
   * The scale settings of a deployment. It defines the modes for scaling and the
   * reserved capacity.
   */
  scale_settings: ScaleSettings;
}

/**
 * The scale settings of a deployment. It defines the modes for scaling and the
 * reserved capacity.
 */
export interface ScaleSettingsParent {
  scale_type: "ScaleSettings" | "manual" | "standard";
}

/** Settings for the manual scale type. */
export interface ManualScaleSettings extends ScaleSettingsParent {
  /** The constant reserved capacity of the inference endpoint for this deployment. */
  capacity: number;
  /** Defines how scaling operations will be executed. */
  scale_type: "manual";
}

/** Settings for the standard scale type. */
export interface StandardScaleSettings extends ScaleSettingsParent {
  /** Defines how scaling operations will be executed. */
  scale_type: "standard";
}

/**
 * A file is a document usable for training and validation. It can also be a
 * service generated document with result details.
 */
export interface File {
  /**
   * The intended purpose of the uploaded documents. Use "fine-tune" for
   * fine-tuning. This allows us to validate the format of the uploaded file.
   */
  purpose: string;
  /** The name of the file. */
  filename: string;
}

/**
 * Defines a document to import from an external content url to be usable with
 * Azure OpenAI.
 */
export interface FileImport {
  /**
   * The intended purpose of the uploaded documents. Use "fine-tune" for
   * fine-tuning. This allows us to validate the format of the uploaded file.
   */
  purpose: string;
  /**
   * The name of the [JSON Lines](https://jsonlines.readthedocs.io/en/latest/) file
   * to be uploaded.
   * If the `purpose` is set to "fine-tune", each line is a JSON
   * record with "prompt" and "completion" fields representing your training
   * examples.
   */
  filename: string;
  /**
   * The url to download the document from (can be SAS url of a blob or any other
   * external url accessible with a GET request).
   */
  content_url: string;
}

/** The hyper parameter settings used in a fine tune job. */
export interface HyperParameters {
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

/** Defines the values of a fine tune job. */
export interface FineTuneCreation {
  /** The identifier of the base model used for this fine-tune. */
  model: string;
  /** The file that is used for training this fine tuned model. */
  training_file: string;
  /** The file that is used to evaluate the fine tuned model during training. */
  validation_file?: string;
  /** The hyper parameter settings used in a fine tune job. */
  hyperparams?: object;
}

/**
 * The scale settings of a deployment. It defines the modes for scaling and the
 * reserved capacity.
 */
export type ScaleSettings = ManualScaleSettings | StandardScaleSettings;
