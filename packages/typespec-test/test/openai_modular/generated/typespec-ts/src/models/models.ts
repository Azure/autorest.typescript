// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  FileContents,
  createFilePartDescriptor,
} from "../static-helpers/multipartHelpers.js";
import { ErrorModel } from "@azure-rest/core-client";

/** The configuration information for an audio transcription request. */
export interface AudioTranscriptionOptions {
  /**
   * The audio data to transcribe. This must be the binary content of a file in one of the supported media formats:
   *  flac, mp3, mp4, mpeg, mpga, m4a, ogg, wav, webm.
   */
  file:
    | FileContents
    | { contents: FileContents; contentType?: string; filename?: string };
  /** The optional filename or descriptive identifier to associate with with the audio data. */
  filename?: string;
  /** The requested format of the transcription response data, which will influence the content and detail of the result. */
  responseFormat?: AudioTranscriptionFormat;
  /**
   * The primary spoken language of the audio data to be transcribed, supplied as a two-letter ISO-639-1 language code
   * such as 'en' or 'fr'.
   * Providing this known input language is optional but may improve the accuracy and/or latency of transcription.
   */
  language?: string;
  /**
   * An optional hint to guide the model's style or continue from a prior audio segment. The written language of the
   * prompt should match the primary spoken language of the audio data.
   */
  prompt?: string;
  /**
   * The sampling temperature, between 0 and 1.
   * Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.
   * If set to 0, the model will use log probability to automatically increase the temperature until certain thresholds are hit.
   */
  temperature?: number;
  /**
   * The timestamp granularities to populate for this transcription.
   * `response_format` must be set `verbose_json` to use timestamp granularities.
   * Either or both of these options are supported: `word`, or `segment`.
   * Note: There is no additional latency for segment timestamps, but generating word timestamps incurs additional latency.
   */
  timestampGranularities?: AudioTranscriptionTimestampGranularity[];
  /** The model to use for this transcription request. */
  model?: string;
}

export function audioTranscriptionOptionsSerializer(
  item: AudioTranscriptionOptions,
): any {
  return [
    createFilePartDescriptor("file", item["file"], "application/octet-stream"),
    ...(item["filename"] === undefined
      ? []
      : [{ name: "filename", body: item["filename"] }]),
    ...(item["responseFormat"] === undefined
      ? []
      : [{ name: "response_format", body: item["responseFormat"] }]),
    ...(item["language"] === undefined
      ? []
      : [{ name: "language", body: item["language"] }]),
    ...(item["prompt"] === undefined
      ? []
      : [{ name: "prompt", body: item["prompt"] }]),
    ...(item["temperature"] === undefined
      ? []
      : [{ name: "temperature", body: item["temperature"] }]),
    ...(item["timestampGranularities"] === undefined
      ? []
      : [
          ...(!item["timestampGranularities"]
            ? item["timestampGranularities"]
            : item["timestampGranularities"].map((p: any) => {
                return p;
              })
          ).map((x: unknown) => ({ name: "timestamp_granularities", body: x })),
        ]),
    ...(item["model"] === undefined
      ? []
      : [{ name: "model", body: item["model"] }]),
  ];
}

/** Defines available options for the underlying response format of output transcription information. */
export type AudioTranscriptionFormat =
  | "json"
  | "verbose_json"
  | "text"
  | "srt"
  | "vtt";
/** Defines the timestamp granularities that can be requested on a verbose transcription response. */
export type AudioTranscriptionTimestampGranularity = "word" | "segment";

/** Result information for an operation that transcribed spoken audio into written text. */
export interface AudioTranscription {
  /** The transcribed text for the provided audio data. */
  text: string;
  /** The label that describes which operation type generated the accompanying response data. */
  task?: AudioTaskLabel;
  /**
   * The spoken language that was detected in the transcribed audio data.
   * This is expressed as a two-letter ISO-639-1 language code like 'en' or 'fr'.
   */
  language?: string;
  /** The total duration of the audio processed to produce accompanying transcription information. */
  duration?: number;
  /** A collection of information about the timing, probabilities, and other detail of each processed audio segment. */
  segments?: AudioTranscriptionSegment[];
  /** A collection of information about the timing of each processed word. */
  words?: AudioTranscriptionWord[];
}

export function audioTranscriptionDeserializer(item: any): AudioTranscription {
  return {
    text: item["text"],
    task: item["task"],
    language: item["language"],
    duration: item["duration"],
    segments: !item["segments"]
      ? item["segments"]
      : audioTranscriptionSegmentArrayDeserializer(item["segments"]),
    words: !item["words"]
      ? item["words"]
      : audioTranscriptionWordArrayDeserializer(item["words"]),
  };
}

/** Defines the possible descriptors for available audio operation responses. */
export type AudioTaskLabel = "transcribe" | "translate";

export function audioTranscriptionSegmentArrayDeserializer(
  result: Array<AudioTranscriptionSegment>,
): any[] {
  return result.map((item) => {
    return audioTranscriptionSegmentDeserializer(item);
  });
}

/**
 * Extended information about a single segment of transcribed audio data.
 * Segments generally represent roughly 5-10 seconds of speech. Segment boundaries typically occur between words but not
 * necessarily sentences.
 */
export interface AudioTranscriptionSegment {
  /** The 0-based index of this segment within a transcription. */
  id: number;
  /** The time at which this segment started relative to the beginning of the transcribed audio. */
  start: number;
  /** The time at which this segment ended relative to the beginning of the transcribed audio. */
  end: number;
  /** The transcribed text that was part of this audio segment. */
  text: string;
  /** The temperature score associated with this audio segment. */
  temperature: number;
  /** The average log probability associated with this audio segment. */
  avgLogprob: number;
  /** The compression ratio of this audio segment. */
  compressionRatio: number;
  /** The probability of no speech detection within this audio segment. */
  noSpeechProb: number;
  /** The token IDs matching the transcribed text in this audio segment. */
  tokens: number[];
  /**
   * The seek position associated with the processing of this audio segment.
   * Seek positions are expressed as hundredths of seconds.
   * The model may process several segments from a single seek position, so while the seek position will never represent
   * a later time than the segment's start, the segment's start may represent a significantly later time than the
   * segment's associated seek position.
   */
  seek: number;
}

export function audioTranscriptionSegmentDeserializer(
  item: any,
): AudioTranscriptionSegment {
  return {
    id: item["id"],
    start: item["start"],
    end: item["end"],
    text: item["text"],
    temperature: item["temperature"],
    avgLogprob: item["avg_logprob"],
    compressionRatio: item["compression_ratio"],
    noSpeechProb: item["no_speech_prob"],
    tokens: item["tokens"].map((p: any) => {
      return p;
    }),
    seek: item["seek"],
  };
}

export function audioTranscriptionWordArrayDeserializer(
  result: Array<AudioTranscriptionWord>,
): any[] {
  return result.map((item) => {
    return audioTranscriptionWordDeserializer(item);
  });
}

/** Extended information about a single transcribed word, as provided on responses when the 'word' timestamp granularity is provided. */
export interface AudioTranscriptionWord {
  /** The textual content of the word. */
  word: string;
  /** The start time of the word relative to the beginning of the audio, expressed in seconds. */
  start: number;
  /** The end time of the word relative to the beginning of the audio, expressed in seconds. */
  end: number;
}

export function audioTranscriptionWordDeserializer(
  item: any,
): AudioTranscriptionWord {
  return {
    word: item["word"],
    start: item["start"],
    end: item["end"],
  };
}

/** The configuration information for an audio translation request. */
export interface AudioTranslationOptions {
  /**
   * The audio data to translate. This must be the binary content of a file in one of the supported media formats:
   *  flac, mp3, mp4, mpeg, mpga, m4a, ogg, wav, webm.
   */
  file:
    | FileContents
    | { contents: FileContents; contentType?: string; filename?: string };
  /** The optional filename or descriptive identifier to associate with with the audio data. */
  filename?: string;
  /** The requested format of the translation response data, which will influence the content and detail of the result. */
  responseFormat?: AudioTranslationFormat;
  /**
   * An optional hint to guide the model's style or continue from a prior audio segment. The written language of the
   * prompt should match the primary spoken language of the audio data.
   */
  prompt?: string;
  /**
   * The sampling temperature, between 0 and 1.
   * Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.
   * If set to 0, the model will use log probability to automatically increase the temperature until certain thresholds are hit.
   */
  temperature?: number;
  /** The model to use for this translation request. */
  model?: string;
}

export function audioTranslationOptionsSerializer(
  item: AudioTranslationOptions,
): any {
  return [
    createFilePartDescriptor("file", item["file"], "application/octet-stream"),
    ...(item["filename"] === undefined
      ? []
      : [{ name: "filename", body: item["filename"] }]),
    ...(item["responseFormat"] === undefined
      ? []
      : [{ name: "response_format", body: item["responseFormat"] }]),
    ...(item["prompt"] === undefined
      ? []
      : [{ name: "prompt", body: item["prompt"] }]),
    ...(item["temperature"] === undefined
      ? []
      : [{ name: "temperature", body: item["temperature"] }]),
    ...(item["model"] === undefined
      ? []
      : [{ name: "model", body: item["model"] }]),
  ];
}

/** Defines available options for the underlying response format of output translation information. */
export type AudioTranslationFormat =
  | "json"
  | "verbose_json"
  | "text"
  | "srt"
  | "vtt";

/** Result information for an operation that translated spoken audio into written text. */
export interface AudioTranslation {
  /** The translated text for the provided audio data. */
  text: string;
  /** The label that describes which operation type generated the accompanying response data. */
  task?: AudioTaskLabel;
  /**
   * The spoken language that was detected in the translated audio data.
   * This is expressed as a two-letter ISO-639-1 language code like 'en' or 'fr'.
   */
  language?: string;
  /** The total duration of the audio processed to produce accompanying translation information. */
  duration?: number;
  /** A collection of information about the timing, probabilities, and other detail of each processed audio segment. */
  segments?: AudioTranslationSegment[];
}

export function audioTranslationDeserializer(item: any): AudioTranslation {
  return {
    text: item["text"],
    task: item["task"],
    language: item["language"],
    duration: item["duration"],
    segments: !item["segments"]
      ? item["segments"]
      : audioTranslationSegmentArrayDeserializer(item["segments"]),
  };
}

export function audioTranslationSegmentArrayDeserializer(
  result: Array<AudioTranslationSegment>,
): any[] {
  return result.map((item) => {
    return audioTranslationSegmentDeserializer(item);
  });
}

/**
 * Extended information about a single segment of translated audio data.
 * Segments generally represent roughly 5-10 seconds of speech. Segment boundaries typically occur between words but not
 * necessarily sentences.
 */
export interface AudioTranslationSegment {
  /** The 0-based index of this segment within a translation. */
  id: number;
  /** The time at which this segment started relative to the beginning of the translated audio. */
  start: number;
  /** The time at which this segment ended relative to the beginning of the translated audio. */
  end: number;
  /** The translated text that was part of this audio segment. */
  text: string;
  /** The temperature score associated with this audio segment. */
  temperature: number;
  /** The average log probability associated with this audio segment. */
  avgLogprob: number;
  /** The compression ratio of this audio segment. */
  compressionRatio: number;
  /** The probability of no speech detection within this audio segment. */
  noSpeechProb: number;
  /** The token IDs matching the translated text in this audio segment. */
  tokens: number[];
  /**
   * The seek position associated with the processing of this audio segment.
   * Seek positions are expressed as hundredths of seconds.
   * The model may process several segments from a single seek position, so while the seek position will never represent
   * a later time than the segment's start, the segment's start may represent a significantly later time than the
   * segment's associated seek position.
   */
  seek: number;
}

export function audioTranslationSegmentDeserializer(
  item: any,
): AudioTranslationSegment {
  return {
    id: item["id"],
    start: item["start"],
    end: item["end"],
    text: item["text"],
    temperature: item["temperature"],
    avgLogprob: item["avg_logprob"],
    compressionRatio: item["compression_ratio"],
    noSpeechProb: item["no_speech_prob"],
    tokens: item["tokens"].map((p: any) => {
      return p;
    }),
    seek: item["seek"],
  };
}

/**
 * The configuration information for a completions request.
 * Completions support a wide variety of tasks and generate text that continues from or "completes"
 * provided prompt data.
 */
export interface CompletionsOptions {
  /** The prompts to generate completions from. */
  prompt: string[];
  /** The maximum number of tokens to generate. */
  maxTokens?: number;
  /**
   * The sampling temperature to use that controls the apparent creativity of generated completions.
   * Higher values will make output more random while lower values will make results more focused
   * and deterministic.
   * It is not recommended to modify temperature and top_p for the same completions request as the
   * interaction of these two settings is difficult to predict.
   */
  temperature?: number;
  /**
   * An alternative to sampling with temperature called nucleus sampling. This value causes the
   * model to consider the results of tokens with the provided probability mass. As an example, a
   * value of 0.15 will cause only the tokens comprising the top 15% of probability mass to be
   * considered.
   * It is not recommended to modify temperature and top_p for the same completions request as the
   * interaction of these two settings is difficult to predict.
   */
  topP?: number;
  /**
   * A map between GPT token IDs and bias scores that influences the probability of specific tokens
   * appearing in a completions response. Token IDs are computed via external tokenizer tools, while
   * bias scores reside in the range of -100 to 100 with minimum and maximum values corresponding to
   * a full ban or exclusive selection of a token, respectively. The exact behavior of a given bias
   * score varies by model.
   */
  logitBias?: Record<string, number>;
  /**
   * An identifier for the caller or end user of the operation. This may be used for tracking
   * or rate-limiting purposes.
   */
  user?: string;
  /**
   * The number of completions choices that should be generated per provided prompt as part of an
   * overall completions response.
   * Because this setting can generate many completions, it may quickly consume your token quota.
   * Use carefully and ensure reasonable settings for max_tokens and stop.
   */
  n?: number;
  /**
   * A value that controls the emission of log probabilities for the provided number of most likely
   * tokens within a completions response.
   */
  logprobs?: number;
  /** The suffix that comes after a completion of inserted text */
  suffix?: string;
  /**
   * A value specifying whether completions responses should include input prompts as prefixes to
   * their generated output.
   */
  echo?: boolean;
  /** A collection of textual sequences that will end completions generation. */
  stop?: string[];
  /**
   * A value that influences the probability of generated tokens appearing based on their existing
   * presence in generated text.
   * Positive values will make tokens less likely to appear when they already exist and increase the
   * model's likelihood to output new topics.
   */
  presencePenalty?: number;
  /**
   * A value that influences the probability of generated tokens appearing based on their cumulative
   * frequency in generated text.
   * Positive values will make tokens less likely to appear as their frequency increases and
   * decrease the likelihood of the model repeating the same statements verbatim.
   */
  frequencyPenalty?: number;
  /**
   * A value that controls how many completions will be internally generated prior to response
   * formulation.
   * When used together with n, best_of controls the number of candidate completions and must be
   * greater than n.
   * Because this setting can generate many completions, it may quickly consume your token quota.
   * Use carefully and ensure reasonable settings for max_tokens and stop.
   */
  bestOf?: number;
  /** A value indicating whether chat completions should be streamed for this request. */
  stream?: boolean;
  /**
   * The model name to provide as part of this completions request.
   * Not applicable to Azure OpenAI, where deployment information should be included in the Azure
   * resource URI that's connected to.
   */
  model?: string;
}

export function completionsOptionsSerializer(item: CompletionsOptions): any {
  return {
    prompt: item["prompt"].map((p: any) => {
      return p;
    }),
    max_tokens: item["maxTokens"],
    temperature: item["temperature"],
    top_p: item["topP"],
    logit_bias: item["logitBias"],
    user: item["user"],
    n: item["n"],
    logprobs: item["logprobs"],
    suffix: item["suffix"],
    echo: item["echo"],
    stop: !item["stop"]
      ? item["stop"]
      : item["stop"].map((p: any) => {
          return p;
        }),
    presence_penalty: item["presencePenalty"],
    frequency_penalty: item["frequencyPenalty"],
    best_of: item["bestOf"],
    stream: item["stream"],
    model: item["model"],
  };
}

/**
 * Representation of the response data from a completions request.
 * Completions support a wide variety of tasks and generate text that continues from or "completes"
 * provided prompt data.
 */
export interface Completions {
  /** A unique identifier associated with this completions response. */
  id: string;
  /**
   * The first timestamp associated with generation activity for this completions response,
   * represented as seconds since the beginning of the Unix epoch of 00:00 on 1 Jan 1970.
   */
  created: Date;
  /**
   * Content filtering results for zero or more prompts in the request. In a streaming request,
   * results for different prompts may arrive at different times or in different orders.
   */
  promptFilterResults?: ContentFilterResultsForPrompt[];
  /**
   * The collection of completions choices associated with this completions response.
   * Generally, `n` choices are generated per provided prompt with a default value of 1.
   * Token limits and other settings may limit the number of choices generated.
   */
  choices: Choice[];
  /** Usage information for tokens processed and generated as part of this completions operation. */
  usage: CompletionsUsage;
}

export function completionsDeserializer(item: any): Completions {
  return {
    id: item["id"],
    created: new Date(item["created"] * 1000),
    promptFilterResults: !item["prompt_filter_results"]
      ? item["prompt_filter_results"]
      : contentFilterResultsForPromptArrayDeserializer(
          item["prompt_filter_results"],
        ),
    choices: choiceArrayDeserializer(item["choices"]),
    usage: completionsUsageDeserializer(item["usage"]),
  };
}

export function contentFilterResultsForPromptArrayDeserializer(
  result: Array<ContentFilterResultsForPrompt>,
): any[] {
  return result.map((item) => {
    return contentFilterResultsForPromptDeserializer(item);
  });
}

/** Content filtering results for a single prompt in the request. */
export interface ContentFilterResultsForPrompt {
  /** The index of this prompt in the set of prompt results */
  promptIndex: number;
  /** Content filtering results for this prompt */
  contentFilterResults: ContentFilterResultDetailsForPrompt;
}

export function contentFilterResultsForPromptDeserializer(
  item: any,
): ContentFilterResultsForPrompt {
  return {
    promptIndex: item["prompt_index"],
    contentFilterResults: contentFilterResultDetailsForPromptDeserializer(
      item["content_filter_results"],
    ),
  };
}

/** Information about content filtering evaluated against input data to Azure OpenAI. */
export interface ContentFilterResultDetailsForPrompt {
  /**
   * Describes language related to anatomical organs and genitals, romantic relationships,
   *  acts portrayed in erotic or affectionate terms, physical sexual acts, including
   *  those portrayed as an assault or a forced sexual violent act against one’s will,
   *  prostitution, pornography, and abuse.
   */
  sexual?: ContentFilterResult;
  /**
   * Describes language related to physical actions intended to hurt, injure, damage, or
   * kill someone or something; describes weapons, etc.
   */
  violence?: ContentFilterResult;
  /**
   * Describes language attacks or uses that include pejorative or discriminatory language
   * with reference to a person or identity group on the basis of certain differentiating
   * attributes of these groups including but not limited to race, ethnicity, nationality,
   * gender identity and expression, sexual orientation, religion, immigration status, ability
   * status, personal appearance, and body size.
   */
  hate?: ContentFilterResult;
  /**
   * Describes language related to physical actions intended to purposely hurt, injure,
   * or damage one’s body, or kill oneself.
   */
  selfHarm?: ContentFilterResult;
  /** Describes whether profanity was detected. */
  profanity?: ContentFilterDetectionResult;
  /** Describes detection results against configured custom blocklists. */
  customBlocklists?: ContentFilterDetailedResults;
  /**
   * Describes an error returned if the content filtering system is
   * down or otherwise unable to complete the operation in time.
   */
  error?: ErrorModel;
  /** Whether a jailbreak attempt was detected in the prompt. */
  jailbreak?: ContentFilterDetectionResult;
  /** Whether an indirect attack was detected in the prompt. */
  indirectAttack?: ContentFilterDetectionResult;
}

export function contentFilterResultDetailsForPromptDeserializer(
  item: any,
): ContentFilterResultDetailsForPrompt {
  return {
    sexual: !item["sexual"]
      ? item["sexual"]
      : contentFilterResultDeserializer(item["sexual"]),
    violence: !item["violence"]
      ? item["violence"]
      : contentFilterResultDeserializer(item["violence"]),
    hate: !item["hate"]
      ? item["hate"]
      : contentFilterResultDeserializer(item["hate"]),
    selfHarm: !item["self_harm"]
      ? item["self_harm"]
      : contentFilterResultDeserializer(item["self_harm"]),
    profanity: !item["profanity"]
      ? item["profanity"]
      : contentFilterDetectionResultDeserializer(item["profanity"]),
    customBlocklists: !item["custom_blocklists"]
      ? item["custom_blocklists"]
      : contentFilterDetailedResultsDeserializer(item["custom_blocklists"]),
    error: !item["error"] ? item["error"] : item["error"],
    jailbreak: !item["jailbreak"]
      ? item["jailbreak"]
      : contentFilterDetectionResultDeserializer(item["jailbreak"]),
    indirectAttack: !item["indirect_attack"]
      ? item["indirect_attack"]
      : contentFilterDetectionResultDeserializer(item["indirect_attack"]),
  };
}

/** Information about filtered content severity level and if it has been filtered or not. */
export interface ContentFilterResult {
  /** A value indicating whether or not the content has been filtered. */
  filtered: boolean;
  /** Ratings for the intensity and risk level of filtered content. */
  severity: ContentFilterSeverity;
}

export function contentFilterResultDeserializer(
  item: any,
): ContentFilterResult {
  return {
    filtered: item["filtered"],
    severity: item["severity"],
  };
}

/** Ratings for the intensity and risk level of harmful content. */
export type ContentFilterSeverity = "safe" | "low" | "medium" | "high";

/** Represents the outcome of a detection operation performed by content filtering. */
export interface ContentFilterDetectionResult {
  /** A value indicating whether or not the content has been filtered. */
  filtered: boolean;
  /** A value indicating whether detection occurred, irrespective of severity or whether the content was filtered. */
  detected: boolean;
}

export function contentFilterDetectionResultDeserializer(
  item: any,
): ContentFilterDetectionResult {
  return {
    filtered: item["filtered"],
    detected: item["detected"],
  };
}

/** Represents a structured collection of result details for content filtering. */
export interface ContentFilterDetailedResults {
  /** A value indicating whether or not the content has been filtered. */
  filtered: boolean;
  /** The collection of detailed blocklist result information. */
  details: ContentFilterBlocklistIdResult[];
}

export function contentFilterDetailedResultsDeserializer(
  item: any,
): ContentFilterDetailedResults {
  return {
    filtered: item["filtered"],
    details: contentFilterBlocklistIdResultArrayDeserializer(item["details"]),
  };
}

export function contentFilterBlocklistIdResultArrayDeserializer(
  result: Array<ContentFilterBlocklistIdResult>,
): any[] {
  return result.map((item) => {
    return contentFilterBlocklistIdResultDeserializer(item);
  });
}

/** Represents the outcome of an evaluation against a custom blocklist as performed by content filtering. */
export interface ContentFilterBlocklistIdResult {
  /** A value indicating whether or not the content has been filtered. */
  filtered: boolean;
  /** The ID of the custom blocklist evaluated. */
  id: string;
}

export function contentFilterBlocklistIdResultDeserializer(
  item: any,
): ContentFilterBlocklistIdResult {
  return {
    filtered: item["filtered"],
    id: item["id"],
  };
}

export function choiceArrayDeserializer(result: Array<Choice>): any[] {
  return result.map((item) => {
    return choiceDeserializer(item);
  });
}

/**
 * The representation of a single prompt completion as part of an overall completions request.
 * Generally, `n` choices are generated per provided prompt with a default value of 1.
 * Token limits and other settings may limit the number of choices generated.
 */
export interface Choice {
  /** The generated text for a given completions prompt. */
  text: string;
  /** The ordered index associated with this completions choice. */
  index: number;
  /**
   * Information about the content filtering category (hate, sexual, violence, self_harm), if it
   * has been detected, as well as the severity level (very_low, low, medium, high-scale that
   * determines the intensity and risk level of harmful content) and if it has been filtered or not.
   */
  contentFilterResults?: ContentFilterResultsForChoice;
  /** The log probabilities model for tokens associated with this completions choice. */
  logprobs: CompletionsLogProbabilityModel | null;
  /** Reason for finishing */
  finishReason: CompletionsFinishReason | null;
}

export function choiceDeserializer(item: any): Choice {
  return {
    text: item["text"],
    index: item["index"],
    contentFilterResults: !item["content_filter_results"]
      ? item["content_filter_results"]
      : contentFilterResultsForChoiceDeserializer(
          item["content_filter_results"],
        ),
    logprobs: !item["logprobs"]
      ? item["logprobs"]
      : completionsLogProbabilityModelDeserializer(item["logprobs"]),
    finishReason: item["finish_reason"],
  };
}

/** Information about content filtering evaluated against generated model output. */
export interface ContentFilterResultsForChoice {
  /**
   * Describes language related to anatomical organs and genitals, romantic relationships,
   *  acts portrayed in erotic or affectionate terms, physical sexual acts, including
   *  those portrayed as an assault or a forced sexual violent act against one’s will,
   *  prostitution, pornography, and abuse.
   */
  sexual?: ContentFilterResult;
  /**
   * Describes language related to physical actions intended to hurt, injure, damage, or
   * kill someone or something; describes weapons, etc.
   */
  violence?: ContentFilterResult;
  /**
   * Describes language attacks or uses that include pejorative or discriminatory language
   * with reference to a person or identity group on the basis of certain differentiating
   * attributes of these groups including but not limited to race, ethnicity, nationality,
   * gender identity and expression, sexual orientation, religion, immigration status, ability
   * status, personal appearance, and body size.
   */
  hate?: ContentFilterResult;
  /**
   * Describes language related to physical actions intended to purposely hurt, injure,
   * or damage one’s body, or kill oneself.
   */
  selfHarm?: ContentFilterResult;
  /** Describes whether profanity was detected. */
  profanity?: ContentFilterDetectionResult;
  /** Describes detection results against configured custom blocklists. */
  customBlocklists?: ContentFilterDetailedResults;
  /**
   * Describes an error returned if the content filtering system is
   * down or otherwise unable to complete the operation in time.
   */
  error?: ErrorModel;
  /** Information about detection of protected text material. */
  protectedMaterialText?: ContentFilterDetectionResult;
  /** Information about detection of protected code material. */
  protectedMaterialCode?: ContentFilterCitedDetectionResult;
}

export function contentFilterResultsForChoiceDeserializer(
  item: any,
): ContentFilterResultsForChoice {
  return {
    sexual: !item["sexual"]
      ? item["sexual"]
      : contentFilterResultDeserializer(item["sexual"]),
    violence: !item["violence"]
      ? item["violence"]
      : contentFilterResultDeserializer(item["violence"]),
    hate: !item["hate"]
      ? item["hate"]
      : contentFilterResultDeserializer(item["hate"]),
    selfHarm: !item["self_harm"]
      ? item["self_harm"]
      : contentFilterResultDeserializer(item["self_harm"]),
    profanity: !item["profanity"]
      ? item["profanity"]
      : contentFilterDetectionResultDeserializer(item["profanity"]),
    customBlocklists: !item["custom_blocklists"]
      ? item["custom_blocklists"]
      : contentFilterDetailedResultsDeserializer(item["custom_blocklists"]),
    error: !item["error"] ? item["error"] : item["error"],
    protectedMaterialText: !item["protected_material_text"]
      ? item["protected_material_text"]
      : contentFilterDetectionResultDeserializer(
          item["protected_material_text"],
        ),
    protectedMaterialCode: !item["protected_material_code"]
      ? item["protected_material_code"]
      : contentFilterCitedDetectionResultDeserializer(
          item["protected_material_code"],
        ),
  };
}

/** Represents the outcome of a detection operation against protected resources as performed by content filtering. */
export interface ContentFilterCitedDetectionResult {
  /** A value indicating whether or not the content has been filtered. */
  filtered: boolean;
  /** A value indicating whether detection occurred, irrespective of severity or whether the content was filtered. */
  detected: boolean;
  /** The internet location associated with the detection. */
  url?: string;
  /** The license description associated with the detection. */
  license: string;
}

export function contentFilterCitedDetectionResultDeserializer(
  item: any,
): ContentFilterCitedDetectionResult {
  return {
    filtered: item["filtered"],
    detected: item["detected"],
    url: item["URL"],
    license: item["license"],
  };
}

/** Representation of a log probabilities model for a completions generation. */
export interface CompletionsLogProbabilityModel {
  /** The textual forms of tokens evaluated in this probability model. */
  tokens: string[];
  /** A collection of log probability values for the tokens in this completions data. */
  tokenLogprobs: (number | null)[];
  /** A mapping of tokens to maximum log probability values in this completions data. */
  topLogprobs: Record<string, number | null>[];
  /** The text offsets associated with tokens in this completions data. */
  textOffset: number[];
}

export function completionsLogProbabilityModelDeserializer(
  item: any,
): CompletionsLogProbabilityModel {
  return {
    tokens: item["tokens"].map((p: any) => {
      return p;
    }),
    tokenLogprobs: item["token_logprobs"].map((p: any) => {
      return !p ? p : p;
    }),
    topLogprobs: item["top_logprobs"].map((p: any) => {
      return p;
    }),
    textOffset: item["text_offset"].map((p: any) => {
      return p;
    }),
  };
}

/** Representation of the manner in which a completions response concluded. */
export type CompletionsFinishReason =
  | "stop"
  | "length"
  | "content_filter"
  | "function_call"
  | "tool_calls";

/**
 * Representation of the token counts processed for a completions request.
 * Counts consider all tokens across prompts, choices, choice alternates, best_of generations, and
 * other consumers.
 */
export interface CompletionsUsage {
  /** The number of tokens generated across all completions emissions. */
  completionTokens: number;
  /** The number of tokens in the provided prompts for the completions request. */
  promptTokens: number;
  /** The total number of tokens processed for the completions request and response. */
  totalTokens: number;
}

export function completionsUsageDeserializer(item: any): CompletionsUsage {
  return {
    completionTokens: item["completion_tokens"],
    promptTokens: item["prompt_tokens"],
    totalTokens: item["total_tokens"],
  };
}

/**
 * The configuration information for a chat completions request.
 * Completions support a wide variety of tasks and generate text that continues from or "completes"
 * provided prompt data.
 */
export interface ChatCompletionsOptions {
  /**
   * The collection of context messages associated with this chat completions request.
   * Typical usage begins with a chat message for the System role that provides instructions for
   * the behavior of the assistant, followed by alternating messages between the User and
   * Assistant roles.
   */
  messages: ChatRequestMessageUnion[];
  /** A list of functions the model may generate JSON inputs for. */
  functions?: FunctionDefinition[];
  /**
   * Controls how the model responds to function calls. "none" means the model does not call a function,
   * and responds to the end-user. "auto" means the model can pick between an end-user or calling a function.
   *  Specifying a particular function via `{"name": "my_function"}` forces the model to call that function.
   *  "none" is the default when no functions are present. "auto" is the default if functions are present.
   */
  functionCall?: FunctionCallPreset | FunctionName;
  /** The maximum number of tokens to generate. */
  maxTokens?: number;
  /**
   * The sampling temperature to use that controls the apparent creativity of generated completions.
   * Higher values will make output more random while lower values will make results more focused
   * and deterministic.
   * It is not recommended to modify temperature and top_p for the same completions request as the
   * interaction of these two settings is difficult to predict.
   */
  temperature?: number;
  /**
   * An alternative to sampling with temperature called nucleus sampling. This value causes the
   * model to consider the results of tokens with the provided probability mass. As an example, a
   * value of 0.15 will cause only the tokens comprising the top 15% of probability mass to be
   * considered.
   * It is not recommended to modify temperature and top_p for the same completions request as the
   * interaction of these two settings is difficult to predict.
   */
  topP?: number;
  /**
   * A map between GPT token IDs and bias scores that influences the probability of specific tokens
   * appearing in a completions response. Token IDs are computed via external tokenizer tools, while
   * bias scores reside in the range of -100 to 100 with minimum and maximum values corresponding to
   * a full ban or exclusive selection of a token, respectively. The exact behavior of a given bias
   * score varies by model.
   */
  logitBias?: Record<string, number>;
  /**
   * An identifier for the caller or end user of the operation. This may be used for tracking
   * or rate-limiting purposes.
   */
  user?: string;
  /**
   * The number of chat completions choices that should be generated for a chat completions
   * response.
   * Because this setting can generate many completions, it may quickly consume your token quota.
   * Use carefully and ensure reasonable settings for max_tokens and stop.
   */
  n?: number;
  /** A collection of textual sequences that will end completions generation. */
  stop?: string[];
  /**
   * A value that influences the probability of generated tokens appearing based on their existing
   * presence in generated text.
   * Positive values will make tokens less likely to appear when they already exist and increase the
   * model's likelihood to output new topics.
   */
  presencePenalty?: number;
  /**
   * A value that influences the probability of generated tokens appearing based on their cumulative
   * frequency in generated text.
   * Positive values will make tokens less likely to appear as their frequency increases and
   * decrease the likelihood of the model repeating the same statements verbatim.
   */
  frequencyPenalty?: number;
  /** A value indicating whether chat completions should be streamed for this request. */
  stream?: boolean;
  /**
   * The model name to provide as part of this completions request.
   * Not applicable to Azure OpenAI, where deployment information should be included in the Azure
   * resource URI that's connected to.
   */
  model?: string;
  /**
   *   The configuration entries for Azure OpenAI chat extensions that use them.
   *   This additional specification is only compatible with Azure OpenAI.
   */
  dataSources?: AzureChatExtensionConfigurationUnion[];
  /** If provided, the configuration options for available Azure OpenAI chat enhancements. */
  enhancements?: AzureChatEnhancementConfiguration;
  /**
   * If specified, the system will make a best effort to sample deterministically such that repeated requests with the
   * same seed and parameters should return the same result. Determinism is not guaranteed, and you should refer to the
   * system_fingerprint response parameter to monitor changes in the backend."
   */
  seed?: number;
  /** Whether to return log probabilities of the output tokens or not. If true, returns the log probabilities of each output token returned in the `content` of `message`. This option is currently not available on the `gpt-4-vision-preview` model. */
  logprobs?: boolean | null;
  /** An integer between 0 and 5 specifying the number of most likely tokens to return at each token position, each with an associated log probability. `logprobs` must be set to `true` if this parameter is used. */
  topLogprobs?: number | null;
  /** An object specifying the format that the model must output. Used to enable JSON mode. */
  responseFormat?: ChatCompletionsResponseFormatUnion;
  /** The available tool definitions that the chat completions request can use, including caller-defined functions. */
  tools?: ChatCompletionsToolDefinitionUnion[];
  /** If specified, the model will configure which of the provided tools it can use for the chat completions response. */
  toolChoice?:
    | ChatCompletionsToolSelectionPreset
    | ChatCompletionsNamedToolSelectionUnion;
}

export function chatCompletionsOptionsSerializer(
  item: ChatCompletionsOptions,
): any {
  return {
    messages: chatRequestMessageUnionArraySerializer(item["messages"]),
    functions: !item["functions"]
      ? item["functions"]
      : functionDefinitionArraySerializer(item["functions"]),
    function_call: !item["functionCall"]
      ? item["functionCall"]
      : _chatCompletionsOptionsFunctionCallSerializer(item["functionCall"]),
    max_tokens: item["maxTokens"],
    temperature: item["temperature"],
    top_p: item["topP"],
    logit_bias: item["logitBias"],
    user: item["user"],
    n: item["n"],
    stop: !item["stop"]
      ? item["stop"]
      : item["stop"].map((p: any) => {
          return p;
        }),
    presence_penalty: item["presencePenalty"],
    frequency_penalty: item["frequencyPenalty"],
    stream: item["stream"],
    model: item["model"],
    data_sources: !item["dataSources"]
      ? item["dataSources"]
      : azureChatExtensionConfigurationUnionArraySerializer(
          item["dataSources"],
        ),
    enhancements: !item["enhancements"]
      ? item["enhancements"]
      : azureChatEnhancementConfigurationSerializer(item["enhancements"]),
    seed: item["seed"],
    logprobs: item["logprobs"],
    top_logprobs: item["topLogprobs"],
    response_format: !item["responseFormat"]
      ? item["responseFormat"]
      : chatCompletionsResponseFormatUnionSerializer(item["responseFormat"]),
    tools: !item["tools"]
      ? item["tools"]
      : chatCompletionsToolDefinitionUnionArraySerializer(item["tools"]),
    tool_choice: !item["toolChoice"]
      ? item["toolChoice"]
      : _chatCompletionsOptionsToolChoiceSerializer(item["toolChoice"]),
  };
}

export function chatRequestMessageUnionArraySerializer(
  result: Array<ChatRequestMessageUnion>,
): any[] {
  return result.map((item) => {
    return chatRequestMessageUnionSerializer(item);
  });
}

/** An abstract representation of a chat message as provided in a request. */
export interface ChatRequestMessage {
  /** The chat role associated with this message. */
  /** The discriminator possible values: system, user, assistant, tool, function */
  role: ChatRole;
}

export function chatRequestMessageSerializer(item: ChatRequestMessage): any {
  return { role: item["role"] };
}

/** Alias for ChatRequestMessageUnion */
export type ChatRequestMessageUnion =
  | ChatRequestSystemMessage
  | ChatRequestUserMessage
  | ChatRequestAssistantMessage
  | ChatRequestToolMessage
  | ChatRequestFunctionMessage
  | ChatRequestMessage;

export function chatRequestMessageUnionSerializer(
  item: ChatRequestMessageUnion,
): any {
  switch (item.role) {
    case "system":
      return chatRequestSystemMessageSerializer(
        item as ChatRequestSystemMessage,
      );

    case "user":
      return chatRequestUserMessageSerializer(item as ChatRequestUserMessage);

    case "assistant":
      return chatRequestAssistantMessageSerializer(
        item as ChatRequestAssistantMessage,
      );

    case "tool":
      return chatRequestToolMessageSerializer(item as ChatRequestToolMessage);

    case "function":
      return chatRequestFunctionMessageSerializer(
        item as ChatRequestFunctionMessage,
      );

    default:
      return chatRequestMessageSerializer(item);
  }
}

/** A description of the intended purpose of a message within a chat completions interaction. */
export type ChatRole = "system" | "assistant" | "user" | "function" | "tool";

/**
 * A request chat message containing system instructions that influence how the model will generate a chat completions
 * response.
 */
export interface ChatRequestSystemMessage extends ChatRequestMessage {
  /** The chat role associated with this message, which is always 'system' for system messages. */
  role: "system";
  /** The contents of the system message. */
  content: string;
  /** An optional name for the participant. */
  name?: string;
}

export function chatRequestSystemMessageSerializer(
  item: ChatRequestSystemMessage,
): any {
  return { role: item["role"], content: item["content"], name: item["name"] };
}

/** A request chat message representing user input to the assistant. */
export interface ChatRequestUserMessage extends ChatRequestMessage {
  /** The chat role associated with this message, which is always 'user' for user messages. */
  role: "user";
  /** The contents of the user message, with available input types varying by selected model. */
  content: string | ChatMessageContentItemUnion[];
  /** An optional name for the participant. */
  name?: string;
}

export function chatRequestUserMessageSerializer(
  item: ChatRequestUserMessage,
): any {
  return {
    role: item["role"],
    content: _chatRequestUserMessageContentSerializer(item["content"]),
    name: item["name"],
  };
}

/** Alias for _ChatRequestUserMessageContent */
export type _ChatRequestUserMessageContent =
  | string
  | ChatMessageContentItemUnion[];

export function _chatRequestUserMessageContentSerializer(
  item: _ChatRequestUserMessageContent,
): any {
  return item;
}

export function chatMessageContentItemUnionArraySerializer(
  result: Array<ChatMessageContentItemUnion>,
): any[] {
  return result.map((item) => {
    return chatMessageContentItemUnionSerializer(item);
  });
}

/** An abstract representation of a structured content item within a chat message. */
export interface ChatMessageContentItem {
  /** The discriminated object type. */
  /** The discriminator possible values: text, image_url */
  type: string;
}

export function chatMessageContentItemSerializer(
  item: ChatMessageContentItem,
): any {
  return { type: item["type"] };
}

/** Alias for ChatMessageContentItemUnion */
export type ChatMessageContentItemUnion =
  | ChatMessageTextContentItem
  | ChatMessageImageContentItem
  | ChatMessageContentItem;

export function chatMessageContentItemUnionSerializer(
  item: ChatMessageContentItemUnion,
): any {
  switch (item.type) {
    case "text":
      return chatMessageTextContentItemSerializer(
        item as ChatMessageTextContentItem,
      );

    case "image_url":
      return chatMessageImageContentItemSerializer(
        item as ChatMessageImageContentItem,
      );

    default:
      return chatMessageContentItemSerializer(item);
  }
}

/** A structured chat content item containing plain text. */
export interface ChatMessageTextContentItem extends ChatMessageContentItem {
  /** The discriminated object type: always 'text' for this type. */
  type: "text";
  /** The content of the message. */
  text: string;
}

export function chatMessageTextContentItemSerializer(
  item: ChatMessageTextContentItem,
): any {
  return { type: item["type"], text: item["text"] };
}

/** A structured chat content item containing an image reference. */
export interface ChatMessageImageContentItem extends ChatMessageContentItem {
  /** The discriminated object type: always 'image_url' for this type. */
  type: "image_url";
  /** An internet location, which must be accessible to the model,from which the image may be retrieved. */
  imageUrl: ChatMessageImageUrl;
}

export function chatMessageImageContentItemSerializer(
  item: ChatMessageImageContentItem,
): any {
  return {
    type: item["type"],
    image_url: chatMessageImageUrlSerializer(item["imageUrl"]),
  };
}

/** An internet location from which the model may retrieve an image. */
export interface ChatMessageImageUrl {
  /** The URL of the image. */
  url: string;
  /**
   * The evaluation quality setting to use, which controls relative prioritization of speed, token consumption, and
   * accuracy.
   */
  detail?: ChatMessageImageDetailLevel;
}

export function chatMessageImageUrlSerializer(item: ChatMessageImageUrl): any {
  return { url: item["url"], detail: item["detail"] };
}

/** A representation of the possible image detail levels for image-based chat completions message content. */
export type ChatMessageImageDetailLevel = "auto" | "low" | "high";

/** A request chat message representing response or action from the assistant. */
export interface ChatRequestAssistantMessage extends ChatRequestMessage {
  /** The chat role associated with this message, which is always 'assistant' for assistant messages. */
  role: "assistant";
  /** The content of the message. */
  content: string | null;
  /** An optional name for the participant. */
  name?: string;
  /**
   * The tool calls that must be resolved and have their outputs appended to subsequent input messages for the chat
   * completions request to resolve as configured.
   */
  toolCalls?: ChatCompletionsToolCallUnion[];
  /**
   * The function call that must be resolved and have its output appended to subsequent input messages for the chat
   * completions request to resolve as configured.
   */
  functionCall?: FunctionCall;
}

export function chatRequestAssistantMessageSerializer(
  item: ChatRequestAssistantMessage,
): any {
  return {
    role: item["role"],
    content: item["content"],
    name: item["name"],
    tool_calls: !item["toolCalls"]
      ? item["toolCalls"]
      : chatCompletionsToolCallUnionArraySerializer(item["toolCalls"]),
    function_call: !item["functionCall"]
      ? item["functionCall"]
      : functionCallSerializer(item["functionCall"]),
  };
}

export function chatCompletionsToolCallUnionArraySerializer(
  result: Array<ChatCompletionsToolCallUnion>,
): any[] {
  return result.map((item) => {
    return chatCompletionsToolCallUnionSerializer(item);
  });
}

export function chatCompletionsToolCallUnionArrayDeserializer(
  result: Array<ChatCompletionsToolCallUnion>,
): any[] {
  return result.map((item) => {
    return chatCompletionsToolCallUnionDeserializer(item);
  });
}

/**
 * An abstract representation of a tool call that must be resolved in a subsequent request to perform the requested
 * chat completion.
 */
export interface ChatCompletionsToolCall {
  /** The object type. */
  /** The discriminator possible values: function */
  type: string;
  /** The ID of the tool call. */
  id: string;
}

export function chatCompletionsToolCallSerializer(
  item: ChatCompletionsToolCall,
): any {
  return { type: item["type"], id: item["id"] };
}

export function chatCompletionsToolCallDeserializer(
  item: any,
): ChatCompletionsToolCall {
  return {
    type: item["type"],
    id: item["id"],
  };
}

/** Alias for ChatCompletionsToolCallUnion */
export type ChatCompletionsToolCallUnion =
  | ChatCompletionsFunctionToolCall
  | ChatCompletionsToolCall;

export function chatCompletionsToolCallUnionSerializer(
  item: ChatCompletionsToolCallUnion,
): any {
  switch (item.type) {
    case "function":
      return chatCompletionsFunctionToolCallSerializer(
        item as ChatCompletionsFunctionToolCall,
      );

    default:
      return chatCompletionsToolCallSerializer(item);
  }
}

export function chatCompletionsToolCallUnionDeserializer(
  item: any,
): ChatCompletionsToolCallUnion {
  switch (item.type) {
    case "function":
      return chatCompletionsFunctionToolCallDeserializer(
        item as ChatCompletionsFunctionToolCall,
      );

    default:
      return chatCompletionsToolCallDeserializer(item);
  }
}

/**
 * A tool call to a function tool, issued by the model in evaluation of a configured function tool, that represents
 * a function invocation needed for a subsequent chat completions request to resolve.
 */
export interface ChatCompletionsFunctionToolCall
  extends ChatCompletionsToolCall {
  /** The type of tool call, in this case always 'function'. */
  type: "function";
  /** The details of the function invocation requested by the tool call. */
  function: FunctionCall;
}

export function chatCompletionsFunctionToolCallSerializer(
  item: ChatCompletionsFunctionToolCall,
): any {
  return {
    type: item["type"],
    id: item["id"],
    function: functionCallSerializer(item["function"]),
  };
}

export function chatCompletionsFunctionToolCallDeserializer(
  item: any,
): ChatCompletionsFunctionToolCall {
  return {
    type: item["type"],
    id: item["id"],
    function: functionCallDeserializer(item["function"]),
  };
}

/** The name and arguments of a function that should be called, as generated by the model. */
export interface FunctionCall {
  /** The name of the function to call. */
  name: string;
  /**
   * The arguments to call the function with, as generated by the model in JSON format.
   * Note that the model does not always generate valid JSON, and may hallucinate parameters
   * not defined by your function schema. Validate the arguments in your code before calling
   * your function.
   */
  arguments: string;
}

export function functionCallSerializer(item: FunctionCall): any {
  return { name: item["name"], arguments: item["arguments"] };
}

export function functionCallDeserializer(item: any): FunctionCall {
  return {
    name: item["name"],
    arguments: item["arguments"],
  };
}

/** A request chat message representing requested output from a configured tool. */
export interface ChatRequestToolMessage extends ChatRequestMessage {
  /** The chat role associated with this message, which is always 'tool' for tool messages. */
  role: "tool";
  /** The content of the message. */
  content: string | null;
  /** The ID of the tool call resolved by the provided content. */
  toolCallId: string;
}

export function chatRequestToolMessageSerializer(
  item: ChatRequestToolMessage,
): any {
  return {
    role: item["role"],
    content: item["content"],
    tool_call_id: item["toolCallId"],
  };
}

/** A request chat message representing requested output from a configured function. */
export interface ChatRequestFunctionMessage extends ChatRequestMessage {
  /** The chat role associated with this message, which is always 'function' for function messages. */
  role: "function";
  /** The name of the function that was called to produce output. */
  name: string;
  /** The output of the function as requested by the function call. */
  content: string | null;
}

export function chatRequestFunctionMessageSerializer(
  item: ChatRequestFunctionMessage,
): any {
  return { role: item["role"], name: item["name"], content: item["content"] };
}

export function functionDefinitionArraySerializer(
  result: Array<FunctionDefinition>,
): any[] {
  return result.map((item) => {
    return functionDefinitionSerializer(item);
  });
}

/** The definition of a caller-specified function that chat completions may invoke in response to matching user input. */
export interface FunctionDefinition {
  /** The name of the function to be called. */
  name: string;
  /**
   * A description of what the function does. The model will use this description when selecting the function and
   * interpreting its parameters.
   */
  description?: string;
  /** The parameters the function accepts, described as a JSON Schema object. */
  parameters?: any;
}

export function functionDefinitionSerializer(item: FunctionDefinition): any {
  return {
    name: item["name"],
    description: item["description"],
    parameters: item["parameters"],
  };
}

/** Alias for _ChatCompletionsOptionsFunctionCall */
export type _ChatCompletionsOptionsFunctionCall =
  | FunctionCallPreset
  | FunctionName;

export function _chatCompletionsOptionsFunctionCallSerializer(
  item: _ChatCompletionsOptionsFunctionCall,
): any {
  return item;
}

/**
 * The collection of predefined behaviors for handling request-provided function information in a chat completions
 * operation.
 */
export type FunctionCallPreset = "auto" | "none";

/**
 * A structure that specifies the exact name of a specific, request-provided function to use when processing a chat
 * completions operation.
 */
export interface FunctionName {
  /** The name of the function to call. */
  name: string;
}

export function functionNameSerializer(item: FunctionName): any {
  return { name: item["name"] };
}

export function azureChatExtensionConfigurationUnionArraySerializer(
  result: Array<AzureChatExtensionConfigurationUnion>,
): any[] {
  return result.map((item) => {
    return azureChatExtensionConfigurationUnionSerializer(item);
  });
}

/**
 *   A representation of configuration data for a single Azure OpenAI chat extension. This will be used by a chat
 *   completions request that should use Azure OpenAI chat extensions to augment the response behavior.
 *   The use of this configuration is compatible only with Azure OpenAI.
 */
export interface AzureChatExtensionConfiguration {
  /**
   *   The label for the type of an Azure chat extension. This typically corresponds to a matching Azure resource.
   *   Azure chat extensions are only compatible with Azure OpenAI.
   */
  /** The discriminator possible values: azure_search, azure_ml_index, azure_cosmos_db, elasticsearch, pinecone */
  type: AzureChatExtensionType;
}

export function azureChatExtensionConfigurationSerializer(
  item: AzureChatExtensionConfiguration,
): any {
  return { type: item["type"] };
}

/** Alias for AzureChatExtensionConfigurationUnion */
export type AzureChatExtensionConfigurationUnion =
  | AzureSearchChatExtensionConfiguration
  | AzureMachineLearningIndexChatExtensionConfiguration
  | AzureCosmosDBChatExtensionConfiguration
  | ElasticsearchChatExtensionConfiguration
  | PineconeChatExtensionConfiguration
  | AzureChatExtensionConfiguration;

export function azureChatExtensionConfigurationUnionSerializer(
  item: AzureChatExtensionConfigurationUnion,
): any {
  switch (item.type) {
    case "azure_search":
      return azureSearchChatExtensionConfigurationSerializer(
        item as AzureSearchChatExtensionConfiguration,
      );

    case "azure_ml_index":
      return azureMachineLearningIndexChatExtensionConfigurationSerializer(
        item as AzureMachineLearningIndexChatExtensionConfiguration,
      );

    case "azure_cosmos_db":
      return azureCosmosDBChatExtensionConfigurationSerializer(
        item as AzureCosmosDBChatExtensionConfiguration,
      );

    case "elasticsearch":
      return elasticsearchChatExtensionConfigurationSerializer(
        item as ElasticsearchChatExtensionConfiguration,
      );

    case "pinecone":
      return pineconeChatExtensionConfigurationSerializer(
        item as PineconeChatExtensionConfiguration,
      );

    default:
      return azureChatExtensionConfigurationSerializer(item);
  }
}

/**
 *   A representation of configuration data for a single Azure OpenAI chat extension. This will be used by a chat
 *   completions request that should use Azure OpenAI chat extensions to augment the response behavior.
 *   The use of this configuration is compatible only with Azure OpenAI.
 */
export type AzureChatExtensionType =
  | "azure_search"
  | "azure_ml_index"
  | "azure_cosmos_db"
  | "elasticsearch"
  | "pinecone";

/**
 * A specific representation of configurable options for Azure Search when using it as an Azure OpenAI chat
 * extension.
 */
export interface AzureSearchChatExtensionConfiguration
  extends AzureChatExtensionConfiguration {
  /**
   * The type label to use when configuring Azure OpenAI chat extensions. This should typically not be changed from its
   * default value for Azure Cognitive Search.
   */
  type: "azure_search";
  /** The parameters to use when configuring Azure Search. */
  parameters: AzureSearchChatExtensionParameters;
}

export function azureSearchChatExtensionConfigurationSerializer(
  item: AzureSearchChatExtensionConfiguration,
): any {
  return {
    type: item["type"],
    parameters: azureSearchChatExtensionParametersSerializer(
      item["parameters"],
    ),
  };
}

/** Parameters for Azure Cognitive Search when used as an Azure OpenAI chat extension. The supported authentication types are APIKey, SystemAssignedManagedIdentity and UserAssignedManagedIdentity. */
export interface AzureSearchChatExtensionParameters {
  /**
   * The authentication method to use when accessing the defined data source.
   * Each data source type supports a specific set of available authentication methods; please see the documentation of
   * the data source for supported mechanisms.
   * If not otherwise provided, On Your Data will attempt to use System Managed Identity (default credential)
   * authentication.
   */
  authentication?: OnYourDataAuthenticationOptionsUnion;
  /** The configured top number of documents to feature for the configured query. */
  topNDocuments?: number;
  /** Whether queries should be restricted to use of indexed data. */
  inScope?: boolean;
  /** The configured strictness of the search relevance filtering. The higher of strictness, the higher of the precision but lower recall of the answer. */
  strictness?: number;
  /** Give the model instructions about how it should behave and any context it should reference when generating a response. You can describe the assistant's personality and tell it how to format responses. There's a 100 token limit for it, and it counts against the overall token limit. */
  roleInformation?: string;
  /**
   * The max number of rewritten queries should be send to search provider for one user message. If not specified,
   * the system will decide the number of queries to send.
   */
  maxSearchQueries?: number;
  /**
   * If specified as true, the system will allow partial search results to be used and the request fails if all the queries fail.
   * If not specified, or specified as false, the request will fail if any search query fails.
   */
  allowPartialResult?: boolean;
  /** The included properties of the output context. If not specified, the default value is `citations` and `intent`. */
  includeContexts?: OnYourDataContextProperty[];
  /** The absolute endpoint path for the Azure Cognitive Search resource to use. */
  endpoint: string;
  /** The name of the index to use as available in the referenced Azure Cognitive Search resource. */
  indexName: string;
  /** Customized field mapping behavior to use when interacting with the search index. */
  fieldsMapping?: AzureSearchIndexFieldMappingOptions;
  /** The query type to use with Azure Cognitive Search. */
  queryType?: AzureSearchQueryType;
  /** The additional semantic configuration for the query. */
  semanticConfiguration?: string;
  /** Search filter. */
  filter?: string;
  /** The embedding dependency for vector search. */
  embeddingDependency?: OnYourDataVectorizationSourceUnion;
}

export function azureSearchChatExtensionParametersSerializer(
  item: AzureSearchChatExtensionParameters,
): any {
  return {
    authentication: !item["authentication"]
      ? item["authentication"]
      : onYourDataAuthenticationOptionsUnionSerializer(item["authentication"]),
    top_n_documents: item["topNDocuments"],
    in_scope: item["inScope"],
    strictness: item["strictness"],
    role_information: item["roleInformation"],
    max_search_queries: item["maxSearchQueries"],
    allow_partial_result: item["allowPartialResult"],
    include_contexts: !item["includeContexts"]
      ? item["includeContexts"]
      : item["includeContexts"].map((p: any) => {
          return p;
        }),
    endpoint: item["endpoint"],
    index_name: item["indexName"],
    fields_mapping: !item["fieldsMapping"]
      ? item["fieldsMapping"]
      : azureSearchIndexFieldMappingOptionsSerializer(item["fieldsMapping"]),
    query_type: item["queryType"],
    semantic_configuration: item["semanticConfiguration"],
    filter: item["filter"],
    embedding_dependency: !item["embeddingDependency"]
      ? item["embeddingDependency"]
      : onYourDataVectorizationSourceUnionSerializer(
          item["embeddingDependency"],
        ),
  };
}

/** The authentication options for Azure OpenAI On Your Data. */
export interface OnYourDataAuthenticationOptions {
  /** The authentication type. */
  /** The discriminator possible values: api_key, connection_string, key_and_key_id, encoded_api_key, access_token, system_assigned_managed_identity, user_assigned_managed_identity */
  type: OnYourDataAuthenticationType;
}

export function onYourDataAuthenticationOptionsSerializer(
  item: OnYourDataAuthenticationOptions,
): any {
  return { type: item["type"] };
}

/** Alias for OnYourDataAuthenticationOptionsUnion */
export type OnYourDataAuthenticationOptionsUnion =
  | OnYourDataApiKeyAuthenticationOptions
  | OnYourDataConnectionStringAuthenticationOptions
  | OnYourDataKeyAndKeyIdAuthenticationOptions
  | OnYourDataEncodedApiKeyAuthenticationOptions
  | OnYourDataAccessTokenAuthenticationOptions
  | OnYourDataSystemAssignedManagedIdentityAuthenticationOptions
  | OnYourDataUserAssignedManagedIdentityAuthenticationOptions
  | OnYourDataAuthenticationOptions;

export function onYourDataAuthenticationOptionsUnionSerializer(
  item: OnYourDataAuthenticationOptionsUnion,
): any {
  switch (item.type) {
    case "api_key":
      return onYourDataApiKeyAuthenticationOptionsSerializer(
        item as OnYourDataApiKeyAuthenticationOptions,
      );

    case "connection_string":
      return onYourDataConnectionStringAuthenticationOptionsSerializer(
        item as OnYourDataConnectionStringAuthenticationOptions,
      );

    case "key_and_key_id":
      return onYourDataKeyAndKeyIdAuthenticationOptionsSerializer(
        item as OnYourDataKeyAndKeyIdAuthenticationOptions,
      );

    case "encoded_api_key":
      return onYourDataEncodedApiKeyAuthenticationOptionsSerializer(
        item as OnYourDataEncodedApiKeyAuthenticationOptions,
      );

    case "access_token":
      return onYourDataAccessTokenAuthenticationOptionsSerializer(
        item as OnYourDataAccessTokenAuthenticationOptions,
      );

    case "system_assigned_managed_identity":
      return onYourDataSystemAssignedManagedIdentityAuthenticationOptionsSerializer(
        item as OnYourDataSystemAssignedManagedIdentityAuthenticationOptions,
      );

    case "user_assigned_managed_identity":
      return onYourDataUserAssignedManagedIdentityAuthenticationOptionsSerializer(
        item as OnYourDataUserAssignedManagedIdentityAuthenticationOptions,
      );

    default:
      return onYourDataAuthenticationOptionsSerializer(item);
  }
}

/** The authentication types supported with Azure OpenAI On Your Data. */
export type OnYourDataAuthenticationType =
  | "api_key"
  | "connection_string"
  | "key_and_key_id"
  | "encoded_api_key"
  | "access_token"
  | "system_assigned_managed_identity"
  | "user_assigned_managed_identity";

/** The authentication options for Azure OpenAI On Your Data when using an API key. */
export interface OnYourDataApiKeyAuthenticationOptions
  extends OnYourDataAuthenticationOptions {
  /** The authentication type of API key. */
  type: "api_key";
  /** The API key to use for authentication. */
  key: string;
}

export function onYourDataApiKeyAuthenticationOptionsSerializer(
  item: OnYourDataApiKeyAuthenticationOptions,
): any {
  return { type: item["type"], key: item["key"] };
}

/** The authentication options for Azure OpenAI On Your Data when using a connection string. */
export interface OnYourDataConnectionStringAuthenticationOptions
  extends OnYourDataAuthenticationOptions {
  /** The authentication type of connection string. */
  type: "connection_string";
  /** The connection string to use for authentication. */
  connectionString: string;
}

export function onYourDataConnectionStringAuthenticationOptionsSerializer(
  item: OnYourDataConnectionStringAuthenticationOptions,
): any {
  return { type: item["type"], connection_string: item["connectionString"] };
}

/** The authentication options for Azure OpenAI On Your Data when using an Elasticsearch key and key ID pair. */
export interface OnYourDataKeyAndKeyIdAuthenticationOptions
  extends OnYourDataAuthenticationOptions {
  /** The authentication type of Elasticsearch key and key ID pair. */
  type: "key_and_key_id";
  /** The key to use for authentication. */
  key: string;
  /** The key ID to use for authentication. */
  keyId: string;
}

export function onYourDataKeyAndKeyIdAuthenticationOptionsSerializer(
  item: OnYourDataKeyAndKeyIdAuthenticationOptions,
): any {
  return { type: item["type"], key: item["key"], key_id: item["keyId"] };
}

/** The authentication options for Azure OpenAI On Your Data when using an Elasticsearch encoded API key. */
export interface OnYourDataEncodedApiKeyAuthenticationOptions
  extends OnYourDataAuthenticationOptions {
  /** The authentication type of Elasticsearch encoded API Key. */
  type: "encoded_api_key";
  /** The encoded API key to use for authentication. */
  encodedApiKey: string;
}

export function onYourDataEncodedApiKeyAuthenticationOptionsSerializer(
  item: OnYourDataEncodedApiKeyAuthenticationOptions,
): any {
  return { type: item["type"], encoded_api_key: item["encodedApiKey"] };
}

/** The authentication options for Azure OpenAI On Your Data when using access token. */
export interface OnYourDataAccessTokenAuthenticationOptions
  extends OnYourDataAuthenticationOptions {
  /** The authentication type of access token. */
  type: "access_token";
  /** The access token to use for authentication. */
  accessToken: string;
}

export function onYourDataAccessTokenAuthenticationOptionsSerializer(
  item: OnYourDataAccessTokenAuthenticationOptions,
): any {
  return { type: item["type"], access_token: item["accessToken"] };
}

/** The authentication options for Azure OpenAI On Your Data when using a system-assigned managed identity. */
export interface OnYourDataSystemAssignedManagedIdentityAuthenticationOptions
  extends OnYourDataAuthenticationOptions {
  /** The authentication type of system-assigned managed identity. */
  type: "system_assigned_managed_identity";
}

export function onYourDataSystemAssignedManagedIdentityAuthenticationOptionsSerializer(
  item: OnYourDataSystemAssignedManagedIdentityAuthenticationOptions,
): any {
  return { type: item["type"] };
}

/** The authentication options for Azure OpenAI On Your Data when using a user-assigned managed identity. */
export interface OnYourDataUserAssignedManagedIdentityAuthenticationOptions
  extends OnYourDataAuthenticationOptions {
  /** The authentication type of user-assigned managed identity. */
  type: "user_assigned_managed_identity";
  /** The resource ID of the user-assigned managed identity to use for authentication. */
  managedIdentityResourceId: string;
}

export function onYourDataUserAssignedManagedIdentityAuthenticationOptionsSerializer(
  item: OnYourDataUserAssignedManagedIdentityAuthenticationOptions,
): any {
  return {
    type: item["type"],
    managed_identity_resource_id: item["managedIdentityResourceId"],
  };
}

/** The context property. */
export type OnYourDataContextProperty =
  | "citations"
  | "intent"
  | "all_retrieved_documents";

/** Optional settings to control how fields are processed when using a configured Azure Search resource. */
export interface AzureSearchIndexFieldMappingOptions {
  /** The name of the index field to use as a title. */
  titleField?: string;
  /** The name of the index field to use as a URL. */
  urlField?: string;
  /** The name of the index field to use as a filepath. */
  filepathField?: string;
  /** The names of index fields that should be treated as content. */
  contentFields?: string[];
  /** The separator pattern that content fields should use. */
  contentFieldsSeparator?: string;
  /** The names of fields that represent vector data. */
  vectorFields?: string[];
  /** The names of fields that represent image vector data. */
  imageVectorFields?: string[];
}

export function azureSearchIndexFieldMappingOptionsSerializer(
  item: AzureSearchIndexFieldMappingOptions,
): any {
  return {
    title_field: item["titleField"],
    url_field: item["urlField"],
    filepath_field: item["filepathField"],
    content_fields: !item["contentFields"]
      ? item["contentFields"]
      : item["contentFields"].map((p: any) => {
          return p;
        }),
    content_fields_separator: item["contentFieldsSeparator"],
    vector_fields: !item["vectorFields"]
      ? item["vectorFields"]
      : item["vectorFields"].map((p: any) => {
          return p;
        }),
    image_vector_fields: !item["imageVectorFields"]
      ? item["imageVectorFields"]
      : item["imageVectorFields"].map((p: any) => {
          return p;
        }),
  };
}

/** The type of Azure Search retrieval query that should be executed when using it as an Azure OpenAI chat extension. */
export type AzureSearchQueryType =
  | "simple"
  | "semantic"
  | "vector"
  | "vector_simple_hybrid"
  | "vector_semantic_hybrid";

/** An abstract representation of a vectorization source for Azure OpenAI On Your Data with vector search. */
export interface OnYourDataVectorizationSource {
  /** The type of vectorization source to use. */
  /** The discriminator possible values: endpoint, deployment_name, model_id */
  type: OnYourDataVectorizationSourceType;
}

export function onYourDataVectorizationSourceSerializer(
  item: OnYourDataVectorizationSource,
): any {
  return { type: item["type"] };
}

/** Alias for OnYourDataVectorizationSourceUnion */
export type OnYourDataVectorizationSourceUnion =
  | OnYourDataEndpointVectorizationSource
  | OnYourDataDeploymentNameVectorizationSource
  | OnYourDataModelIdVectorizationSource
  | OnYourDataVectorizationSource;

export function onYourDataVectorizationSourceUnionSerializer(
  item: OnYourDataVectorizationSourceUnion,
): any {
  switch (item.type) {
    case "endpoint":
      return onYourDataEndpointVectorizationSourceSerializer(
        item as OnYourDataEndpointVectorizationSource,
      );

    case "deployment_name":
      return onYourDataDeploymentNameVectorizationSourceSerializer(
        item as OnYourDataDeploymentNameVectorizationSource,
      );

    case "model_id":
      return onYourDataModelIdVectorizationSourceSerializer(
        item as OnYourDataModelIdVectorizationSource,
      );

    default:
      return onYourDataVectorizationSourceSerializer(item);
  }
}

/**
 * Represents the available sources Azure OpenAI On Your Data can use to configure vectorization of data for use with
 * vector search.
 */
export type OnYourDataVectorizationSourceType =
  | "endpoint"
  | "deployment_name"
  | "model_id";

/**
 * The details of a a vectorization source, used by Azure OpenAI On Your Data when applying vector search, that is based
 * on a public Azure OpenAI endpoint call for embeddings.
 */
export interface OnYourDataEndpointVectorizationSource
  extends OnYourDataVectorizationSource {
  /** The type of vectorization source to use. Always 'Endpoint' for this type. */
  type: "endpoint";
  /** Specifies the resource endpoint URL from which embeddings should be retrieved. It should be in the format of https://YOUR_RESOURCE_NAME.openai.azure.com/openai/deployments/YOUR_DEPLOYMENT_NAME/embeddings. The api-version query parameter is not allowed. */
  endpoint: string;
  /** Specifies the authentication options to use when retrieving embeddings from the specified endpoint. */
  authentication: OnYourDataVectorSearchAuthenticationOptionsUnion;
}

export function onYourDataEndpointVectorizationSourceSerializer(
  item: OnYourDataEndpointVectorizationSource,
): any {
  return {
    type: item["type"],
    endpoint: item["endpoint"],
    authentication: onYourDataVectorSearchAuthenticationOptionsUnionSerializer(
      item["authentication"],
    ),
  };
}

/** The authentication options for Azure OpenAI On Your Data vector search. */
export interface OnYourDataVectorSearchAuthenticationOptions {
  /** The type of authentication to use. */
  /** The discriminator possible values: api_key, access_token */
  type: OnYourDataVectorSearchAuthenticationType;
}

export function onYourDataVectorSearchAuthenticationOptionsSerializer(
  item: OnYourDataVectorSearchAuthenticationOptions,
): any {
  return { type: item["type"] };
}

/** Alias for OnYourDataVectorSearchAuthenticationOptionsUnion */
export type OnYourDataVectorSearchAuthenticationOptionsUnion =
  | OnYourDataVectorSearchApiKeyAuthenticationOptions
  | OnYourDataVectorSearchAccessTokenAuthenticationOptions
  | OnYourDataVectorSearchAuthenticationOptions;

export function onYourDataVectorSearchAuthenticationOptionsUnionSerializer(
  item: OnYourDataVectorSearchAuthenticationOptionsUnion,
): any {
  switch (item.type) {
    case "api_key":
      return onYourDataVectorSearchApiKeyAuthenticationOptionsSerializer(
        item as OnYourDataVectorSearchApiKeyAuthenticationOptions,
      );

    case "access_token":
      return onYourDataVectorSearchAccessTokenAuthenticationOptionsSerializer(
        item as OnYourDataVectorSearchAccessTokenAuthenticationOptions,
      );

    default:
      return onYourDataVectorSearchAuthenticationOptionsSerializer(item);
  }
}

/** The authentication types supported with Azure OpenAI On Your Data vector search. */
export type OnYourDataVectorSearchAuthenticationType =
  | "api_key"
  | "access_token";

/** The authentication options for Azure OpenAI On Your Data when using an API key. */
export interface OnYourDataVectorSearchApiKeyAuthenticationOptions
  extends OnYourDataVectorSearchAuthenticationOptions {
  /** The authentication type of API key. */
  type: "api_key";
  /** The API key to use for authentication. */
  key: string;
}

export function onYourDataVectorSearchApiKeyAuthenticationOptionsSerializer(
  item: OnYourDataVectorSearchApiKeyAuthenticationOptions,
): any {
  return { type: item["type"], key: item["key"] };
}

/** The authentication options for Azure OpenAI On Your Data vector search when using access token. */
export interface OnYourDataVectorSearchAccessTokenAuthenticationOptions
  extends OnYourDataVectorSearchAuthenticationOptions {
  /** The authentication type of access token. */
  type: "access_token";
  /** The access token to use for authentication. */
  accessToken: string;
}

export function onYourDataVectorSearchAccessTokenAuthenticationOptionsSerializer(
  item: OnYourDataVectorSearchAccessTokenAuthenticationOptions,
): any {
  return { type: item["type"], access_token: item["accessToken"] };
}

/**
 * The details of a a vectorization source, used by Azure OpenAI On Your Data when applying vector search, that is based
 * on an internal embeddings model deployment name in the same Azure OpenAI resource.
 */
export interface OnYourDataDeploymentNameVectorizationSource
  extends OnYourDataVectorizationSource {
  /** The type of vectorization source to use. Always 'DeploymentName' for this type. */
  type: "deployment_name";
  /** The embedding model deployment name within the same Azure OpenAI resource. This enables you to use vector search without Azure OpenAI api-key and without Azure OpenAI public network access. */
  deploymentName: string;
  /** The number of dimensions the embeddings should have. Only supported in `text-embedding-3` and later models. */
  dimensions?: number;
}

export function onYourDataDeploymentNameVectorizationSourceSerializer(
  item: OnYourDataDeploymentNameVectorizationSource,
): any {
  return {
    type: item["type"],
    deployment_name: item["deploymentName"],
    dimensions: item["dimensions"],
  };
}

/**
 * The details of a a vectorization source, used by Azure OpenAI On Your Data when applying vector search, that is based
 * on a search service model ID. Currently only supported by Elasticsearch®.
 */
export interface OnYourDataModelIdVectorizationSource
  extends OnYourDataVectorizationSource {
  /** The type of vectorization source to use. Always 'ModelId' for this type. */
  type: "model_id";
  /** The embedding model ID build inside the search service. Currently only supported by Elasticsearch®. */
  modelId: string;
}

export function onYourDataModelIdVectorizationSourceSerializer(
  item: OnYourDataModelIdVectorizationSource,
): any {
  return { type: item["type"], model_id: item["modelId"] };
}

/**
 * A specific representation of configurable options for Azure Machine Learning vector index when using it as an Azure
 * OpenAI chat extension.
 */
export interface AzureMachineLearningIndexChatExtensionConfiguration
  extends AzureChatExtensionConfiguration {
  /**
   * The type label to use when configuring Azure OpenAI chat extensions. This should typically not be changed from its
   * default value for Azure Machine Learning vector index.
   */
  type: "azure_ml_index";
  /** The parameters for the Azure Machine Learning vector index chat extension. */
  parameters: AzureMachineLearningIndexChatExtensionParameters;
}

export function azureMachineLearningIndexChatExtensionConfigurationSerializer(
  item: AzureMachineLearningIndexChatExtensionConfiguration,
): any {
  return {
    type: item["type"],
    parameters: azureMachineLearningIndexChatExtensionParametersSerializer(
      item["parameters"],
    ),
  };
}

/** Parameters for the Azure Machine Learning vector index chat extension. The supported authentication types are AccessToken, SystemAssignedManagedIdentity and UserAssignedManagedIdentity. */
export interface AzureMachineLearningIndexChatExtensionParameters {
  /**
   * The authentication method to use when accessing the defined data source.
   * Each data source type supports a specific set of available authentication methods; please see the documentation of
   * the data source for supported mechanisms.
   * If not otherwise provided, On Your Data will attempt to use System Managed Identity (default credential)
   * authentication.
   */
  authentication?: OnYourDataAuthenticationOptionsUnion;
  /** The configured top number of documents to feature for the configured query. */
  topNDocuments?: number;
  /** Whether queries should be restricted to use of indexed data. */
  inScope?: boolean;
  /** The configured strictness of the search relevance filtering. The higher of strictness, the higher of the precision but lower recall of the answer. */
  strictness?: number;
  /** Give the model instructions about how it should behave and any context it should reference when generating a response. You can describe the assistant's personality and tell it how to format responses. There's a 100 token limit for it, and it counts against the overall token limit. */
  roleInformation?: string;
  /**
   * The max number of rewritten queries should be send to search provider for one user message. If not specified,
   * the system will decide the number of queries to send.
   */
  maxSearchQueries?: number;
  /**
   * If specified as true, the system will allow partial search results to be used and the request fails if all the queries fail.
   * If not specified, or specified as false, the request will fail if any search query fails.
   */
  allowPartialResult?: boolean;
  /** The included properties of the output context. If not specified, the default value is `citations` and `intent`. */
  includeContexts?: OnYourDataContextProperty[];
  /** The resource ID of the Azure Machine Learning project. */
  projectResourceId: string;
  /** The Azure Machine Learning vector index name. */
  name: string;
  /** The version of the Azure Machine Learning vector index. */
  version: string;
  /** Search filter. Only supported if the Azure Machine Learning vector index is of type AzureSearch. */
  filter?: string;
}

export function azureMachineLearningIndexChatExtensionParametersSerializer(
  item: AzureMachineLearningIndexChatExtensionParameters,
): any {
  return {
    authentication: !item["authentication"]
      ? item["authentication"]
      : onYourDataAuthenticationOptionsUnionSerializer(item["authentication"]),
    top_n_documents: item["topNDocuments"],
    in_scope: item["inScope"],
    strictness: item["strictness"],
    role_information: item["roleInformation"],
    max_search_queries: item["maxSearchQueries"],
    allow_partial_result: item["allowPartialResult"],
    include_contexts: !item["includeContexts"]
      ? item["includeContexts"]
      : item["includeContexts"].map((p: any) => {
          return p;
        }),
    project_resource_id: item["projectResourceId"],
    name: item["name"],
    version: item["version"],
    filter: item["filter"],
  };
}

/**
 * A specific representation of configurable options for Azure Cosmos DB when using it as an Azure OpenAI chat
 * extension.
 */
export interface AzureCosmosDBChatExtensionConfiguration
  extends AzureChatExtensionConfiguration {
  /**
   * The type label to use when configuring Azure OpenAI chat extensions. This should typically not be changed from its
   * default value for Azure Cosmos DB.
   */
  type: "azure_cosmos_db";
  /** The parameters to use when configuring Azure OpenAI CosmosDB chat extensions. */
  parameters: AzureCosmosDBChatExtensionParameters;
}

export function azureCosmosDBChatExtensionConfigurationSerializer(
  item: AzureCosmosDBChatExtensionConfiguration,
): any {
  return {
    type: item["type"],
    parameters: azureCosmosDBChatExtensionParametersSerializer(
      item["parameters"],
    ),
  };
}

/**
 * Parameters to use when configuring Azure OpenAI On Your Data chat extensions when using Azure Cosmos DB for
 * MongoDB vCore. The supported authentication type is ConnectionString.
 */
export interface AzureCosmosDBChatExtensionParameters {
  /**
   * The authentication method to use when accessing the defined data source.
   * Each data source type supports a specific set of available authentication methods; please see the documentation of
   * the data source for supported mechanisms.
   * If not otherwise provided, On Your Data will attempt to use System Managed Identity (default credential)
   * authentication.
   */
  authentication?: OnYourDataAuthenticationOptionsUnion;
  /** The configured top number of documents to feature for the configured query. */
  topNDocuments?: number;
  /** Whether queries should be restricted to use of indexed data. */
  inScope?: boolean;
  /** The configured strictness of the search relevance filtering. The higher of strictness, the higher of the precision but lower recall of the answer. */
  strictness?: number;
  /** Give the model instructions about how it should behave and any context it should reference when generating a response. You can describe the assistant's personality and tell it how to format responses. There's a 100 token limit for it, and it counts against the overall token limit. */
  roleInformation?: string;
  /**
   * The max number of rewritten queries should be send to search provider for one user message. If not specified,
   * the system will decide the number of queries to send.
   */
  maxSearchQueries?: number;
  /**
   * If specified as true, the system will allow partial search results to be used and the request fails if all the queries fail.
   * If not specified, or specified as false, the request will fail if any search query fails.
   */
  allowPartialResult?: boolean;
  /** The included properties of the output context. If not specified, the default value is `citations` and `intent`. */
  includeContexts?: OnYourDataContextProperty[];
  /** The MongoDB vCore database name to use with Azure Cosmos DB. */
  databaseName: string;
  /** The name of the Azure Cosmos DB resource container. */
  containerName: string;
  /** The MongoDB vCore index name to use with Azure Cosmos DB. */
  indexName: string;
  /** Customized field mapping behavior to use when interacting with the search index. */
  fieldsMapping: AzureCosmosDBFieldMappingOptions;
  /** The embedding dependency for vector search. */
  embeddingDependency: OnYourDataVectorizationSourceUnion;
}

export function azureCosmosDBChatExtensionParametersSerializer(
  item: AzureCosmosDBChatExtensionParameters,
): any {
  return {
    authentication: !item["authentication"]
      ? item["authentication"]
      : onYourDataAuthenticationOptionsUnionSerializer(item["authentication"]),
    top_n_documents: item["topNDocuments"],
    in_scope: item["inScope"],
    strictness: item["strictness"],
    role_information: item["roleInformation"],
    max_search_queries: item["maxSearchQueries"],
    allow_partial_result: item["allowPartialResult"],
    include_contexts: !item["includeContexts"]
      ? item["includeContexts"]
      : item["includeContexts"].map((p: any) => {
          return p;
        }),
    database_name: item["databaseName"],
    container_name: item["containerName"],
    index_name: item["indexName"],
    fields_mapping: azureCosmosDBFieldMappingOptionsSerializer(
      item["fieldsMapping"],
    ),
    embedding_dependency: onYourDataVectorizationSourceUnionSerializer(
      item["embeddingDependency"],
    ),
  };
}

/** Optional settings to control how fields are processed when using a configured Azure Cosmos DB resource. */
export interface AzureCosmosDBFieldMappingOptions {
  /** The name of the index field to use as a title. */
  titleField?: string;
  /** The name of the index field to use as a URL. */
  urlField?: string;
  /** The name of the index field to use as a filepath. */
  filepathField?: string;
  /** The names of index fields that should be treated as content. */
  contentFields: string[];
  /** The separator pattern that content fields should use. */
  contentFieldsSeparator?: string;
  /** The names of fields that represent vector data. */
  vectorFields: string[];
}

export function azureCosmosDBFieldMappingOptionsSerializer(
  item: AzureCosmosDBFieldMappingOptions,
): any {
  return {
    title_field: item["titleField"],
    url_field: item["urlField"],
    filepath_field: item["filepathField"],
    content_fields: item["contentFields"].map((p: any) => {
      return p;
    }),
    content_fields_separator: item["contentFieldsSeparator"],
    vector_fields: item["vectorFields"].map((p: any) => {
      return p;
    }),
  };
}

/**
 * A specific representation of configurable options for Elasticsearch when using it as an Azure OpenAI chat
 * extension.
 */
export interface ElasticsearchChatExtensionConfiguration
  extends AzureChatExtensionConfiguration {
  /**
   * The type label to use when configuring Azure OpenAI chat extensions. This should typically not be changed from its
   * default value for Elasticsearch®.
   */
  type: "elasticsearch";
  /** The parameters to use when configuring Elasticsearch®. */
  parameters: ElasticsearchChatExtensionParameters;
}

export function elasticsearchChatExtensionConfigurationSerializer(
  item: ElasticsearchChatExtensionConfiguration,
): any {
  return {
    type: item["type"],
    parameters: elasticsearchChatExtensionParametersSerializer(
      item["parameters"],
    ),
  };
}

/** Parameters to use when configuring Elasticsearch® as an Azure OpenAI chat extension. The supported authentication types are KeyAndKeyId and EncodedAPIKey. */
export interface ElasticsearchChatExtensionParameters {
  /**
   * The authentication method to use when accessing the defined data source.
   * Each data source type supports a specific set of available authentication methods; please see the documentation of
   * the data source for supported mechanisms.
   * If not otherwise provided, On Your Data will attempt to use System Managed Identity (default credential)
   * authentication.
   */
  authentication?: OnYourDataAuthenticationOptionsUnion;
  /** The configured top number of documents to feature for the configured query. */
  topNDocuments?: number;
  /** Whether queries should be restricted to use of indexed data. */
  inScope?: boolean;
  /** The configured strictness of the search relevance filtering. The higher of strictness, the higher of the precision but lower recall of the answer. */
  strictness?: number;
  /** Give the model instructions about how it should behave and any context it should reference when generating a response. You can describe the assistant's personality and tell it how to format responses. There's a 100 token limit for it, and it counts against the overall token limit. */
  roleInformation?: string;
  /**
   * The max number of rewritten queries should be send to search provider for one user message. If not specified,
   * the system will decide the number of queries to send.
   */
  maxSearchQueries?: number;
  /**
   * If specified as true, the system will allow partial search results to be used and the request fails if all the queries fail.
   * If not specified, or specified as false, the request will fail if any search query fails.
   */
  allowPartialResult?: boolean;
  /** The included properties of the output context. If not specified, the default value is `citations` and `intent`. */
  includeContexts?: OnYourDataContextProperty[];
  /** The endpoint of Elasticsearch®. */
  endpoint: string;
  /** The index name of Elasticsearch®. */
  indexName: string;
  /** The index field mapping options of Elasticsearch®. */
  fieldsMapping?: ElasticsearchIndexFieldMappingOptions;
  /** The query type of Elasticsearch®. */
  queryType?: ElasticsearchQueryType;
  /** The embedding dependency for vector search. */
  embeddingDependency?: OnYourDataVectorizationSourceUnion;
}

export function elasticsearchChatExtensionParametersSerializer(
  item: ElasticsearchChatExtensionParameters,
): any {
  return {
    authentication: !item["authentication"]
      ? item["authentication"]
      : onYourDataAuthenticationOptionsUnionSerializer(item["authentication"]),
    top_n_documents: item["topNDocuments"],
    in_scope: item["inScope"],
    strictness: item["strictness"],
    role_information: item["roleInformation"],
    max_search_queries: item["maxSearchQueries"],
    allow_partial_result: item["allowPartialResult"],
    include_contexts: !item["includeContexts"]
      ? item["includeContexts"]
      : item["includeContexts"].map((p: any) => {
          return p;
        }),
    endpoint: item["endpoint"],
    index_name: item["indexName"],
    fields_mapping: !item["fieldsMapping"]
      ? item["fieldsMapping"]
      : elasticsearchIndexFieldMappingOptionsSerializer(item["fieldsMapping"]),
    query_type: item["queryType"],
    embedding_dependency: !item["embeddingDependency"]
      ? item["embeddingDependency"]
      : onYourDataVectorizationSourceUnionSerializer(
          item["embeddingDependency"],
        ),
  };
}

/** Optional settings to control how fields are processed when using a configured Elasticsearch® resource. */
export interface ElasticsearchIndexFieldMappingOptions {
  /** The name of the index field to use as a title. */
  titleField?: string;
  /** The name of the index field to use as a URL. */
  urlField?: string;
  /** The name of the index field to use as a filepath. */
  filepathField?: string;
  /** The names of index fields that should be treated as content. */
  contentFields?: string[];
  /** The separator pattern that content fields should use. */
  contentFieldsSeparator?: string;
  /** The names of fields that represent vector data. */
  vectorFields?: string[];
}

export function elasticsearchIndexFieldMappingOptionsSerializer(
  item: ElasticsearchIndexFieldMappingOptions,
): any {
  return {
    title_field: item["titleField"],
    url_field: item["urlField"],
    filepath_field: item["filepathField"],
    content_fields: !item["contentFields"]
      ? item["contentFields"]
      : item["contentFields"].map((p: any) => {
          return p;
        }),
    content_fields_separator: item["contentFieldsSeparator"],
    vector_fields: !item["vectorFields"]
      ? item["vectorFields"]
      : item["vectorFields"].map((p: any) => {
          return p;
        }),
  };
}

/** The type of Elasticsearch® retrieval query that should be executed when using it as an Azure OpenAI chat extension. */
export type ElasticsearchQueryType = "simple" | "vector";

/**
 * A specific representation of configurable options for Pinecone when using it as an Azure OpenAI chat
 * extension.
 */
export interface PineconeChatExtensionConfiguration
  extends AzureChatExtensionConfiguration {
  /**
   * The type label to use when configuring Azure OpenAI chat extensions. This should typically not be changed from its
   * default value for Pinecone.
   */
  type: "pinecone";
  /** The parameters to use when configuring Azure OpenAI chat extensions. */
  parameters: PineconeChatExtensionParameters;
}

export function pineconeChatExtensionConfigurationSerializer(
  item: PineconeChatExtensionConfiguration,
): any {
  return {
    type: item["type"],
    parameters: pineconeChatExtensionParametersSerializer(item["parameters"]),
  };
}

/** Parameters for configuring Azure OpenAI Pinecone chat extensions. The supported authentication type is APIKey. */
export interface PineconeChatExtensionParameters {
  /**
   * The authentication method to use when accessing the defined data source.
   * Each data source type supports a specific set of available authentication methods; please see the documentation of
   * the data source for supported mechanisms.
   * If not otherwise provided, On Your Data will attempt to use System Managed Identity (default credential)
   * authentication.
   */
  authentication?: OnYourDataAuthenticationOptionsUnion;
  /** The configured top number of documents to feature for the configured query. */
  topNDocuments?: number;
  /** Whether queries should be restricted to use of indexed data. */
  inScope?: boolean;
  /** The configured strictness of the search relevance filtering. The higher of strictness, the higher of the precision but lower recall of the answer. */
  strictness?: number;
  /** Give the model instructions about how it should behave and any context it should reference when generating a response. You can describe the assistant's personality and tell it how to format responses. There's a 100 token limit for it, and it counts against the overall token limit. */
  roleInformation?: string;
  /**
   * The max number of rewritten queries should be send to search provider for one user message. If not specified,
   * the system will decide the number of queries to send.
   */
  maxSearchQueries?: number;
  /**
   * If specified as true, the system will allow partial search results to be used and the request fails if all the queries fail.
   * If not specified, or specified as false, the request will fail if any search query fails.
   */
  allowPartialResult?: boolean;
  /** The included properties of the output context. If not specified, the default value is `citations` and `intent`. */
  includeContexts?: OnYourDataContextProperty[];
  /** The environment name of Pinecone. */
  environment: string;
  /** The name of the Pinecone database index. */
  indexName: string;
  /** Customized field mapping behavior to use when interacting with the search index. */
  fieldsMapping: PineconeFieldMappingOptions;
  /** The embedding dependency for vector search. */
  embeddingDependency: OnYourDataVectorizationSourceUnion;
}

export function pineconeChatExtensionParametersSerializer(
  item: PineconeChatExtensionParameters,
): any {
  return {
    authentication: !item["authentication"]
      ? item["authentication"]
      : onYourDataAuthenticationOptionsUnionSerializer(item["authentication"]),
    top_n_documents: item["topNDocuments"],
    in_scope: item["inScope"],
    strictness: item["strictness"],
    role_information: item["roleInformation"],
    max_search_queries: item["maxSearchQueries"],
    allow_partial_result: item["allowPartialResult"],
    include_contexts: !item["includeContexts"]
      ? item["includeContexts"]
      : item["includeContexts"].map((p: any) => {
          return p;
        }),
    environment: item["environment"],
    index_name: item["indexName"],
    fields_mapping: pineconeFieldMappingOptionsSerializer(
      item["fieldsMapping"],
    ),
    embedding_dependency: onYourDataVectorizationSourceUnionSerializer(
      item["embeddingDependency"],
    ),
  };
}

/** Optional settings to control how fields are processed when using a configured Pinecone resource. */
export interface PineconeFieldMappingOptions {
  /** The name of the index field to use as a title. */
  titleField?: string;
  /** The name of the index field to use as a URL. */
  urlField?: string;
  /** The name of the index field to use as a filepath. */
  filepathField?: string;
  /** The names of index fields that should be treated as content. */
  contentFields: string[];
  /** The separator pattern that content fields should use. */
  contentFieldsSeparator?: string;
}

export function pineconeFieldMappingOptionsSerializer(
  item: PineconeFieldMappingOptions,
): any {
  return {
    title_field: item["titleField"],
    url_field: item["urlField"],
    filepath_field: item["filepathField"],
    content_fields: item["contentFields"].map((p: any) => {
      return p;
    }),
    content_fields_separator: item["contentFieldsSeparator"],
  };
}

/** A representation of the available Azure OpenAI enhancement configurations. */
export interface AzureChatEnhancementConfiguration {
  /** A representation of the available options for the Azure OpenAI grounding enhancement. */
  grounding?: AzureChatGroundingEnhancementConfiguration;
  /** A representation of the available options for the Azure OpenAI optical character recognition (OCR) enhancement. */
  ocr?: AzureChatOCREnhancementConfiguration;
}

export function azureChatEnhancementConfigurationSerializer(
  item: AzureChatEnhancementConfiguration,
): any {
  return {
    grounding: !item["grounding"]
      ? item["grounding"]
      : azureChatGroundingEnhancementConfigurationSerializer(item["grounding"]),
    ocr: !item["ocr"]
      ? item["ocr"]
      : azureChatOCREnhancementConfigurationSerializer(item["ocr"]),
  };
}

/** A representation of the available options for the Azure OpenAI grounding enhancement. */
export interface AzureChatGroundingEnhancementConfiguration {
  /** Specifies whether the enhancement is enabled. */
  enabled: boolean;
}

export function azureChatGroundingEnhancementConfigurationSerializer(
  item: AzureChatGroundingEnhancementConfiguration,
): any {
  return { enabled: item["enabled"] };
}

/** A representation of the available options for the Azure OpenAI optical character recognition (OCR) enhancement. */
export interface AzureChatOCREnhancementConfiguration {
  /** Specifies whether the enhancement is enabled. */
  enabled: boolean;
}

export function azureChatOCREnhancementConfigurationSerializer(
  item: AzureChatOCREnhancementConfiguration,
): any {
  return { enabled: item["enabled"] };
}

/**
 * An abstract representation of a response format configuration usable by Chat Completions. Can be used to enable JSON
 * mode.
 */
export interface ChatCompletionsResponseFormat {
  /** The discriminated type for the response format. */
  /** The discriminator possible values: text, json_object */
  type: string;
}

export function chatCompletionsResponseFormatSerializer(
  item: ChatCompletionsResponseFormat,
): any {
  return { type: item["type"] };
}

/** Alias for ChatCompletionsResponseFormatUnion */
export type ChatCompletionsResponseFormatUnion =
  | ChatCompletionsTextResponseFormat
  | ChatCompletionsJsonResponseFormat
  | ChatCompletionsResponseFormat;

export function chatCompletionsResponseFormatUnionSerializer(
  item: ChatCompletionsResponseFormatUnion,
): any {
  switch (item.type) {
    case "text":
      return chatCompletionsTextResponseFormatSerializer(
        item as ChatCompletionsTextResponseFormat,
      );

    case "json_object":
      return chatCompletionsJsonResponseFormatSerializer(
        item as ChatCompletionsJsonResponseFormat,
      );

    default:
      return chatCompletionsResponseFormatSerializer(item);
  }
}

/**
 * The standard Chat Completions response format that can freely generate text and is not guaranteed to produce response
 * content that adheres to a specific schema.
 */
export interface ChatCompletionsTextResponseFormat
  extends ChatCompletionsResponseFormat {
  /** The discriminated object type, which is always 'text' for this format. */
  type: "text";
}

export function chatCompletionsTextResponseFormatSerializer(
  item: ChatCompletionsTextResponseFormat,
): any {
  return { type: item["type"] };
}

/** A response format for Chat Completions that restricts responses to emitting valid JSON objects. */
export interface ChatCompletionsJsonResponseFormat
  extends ChatCompletionsResponseFormat {
  /** The discriminated object type, which is always 'json_object' for this format. */
  type: "json_object";
}

export function chatCompletionsJsonResponseFormatSerializer(
  item: ChatCompletionsJsonResponseFormat,
): any {
  return { type: item["type"] };
}

export function chatCompletionsToolDefinitionUnionArraySerializer(
  result: Array<ChatCompletionsToolDefinitionUnion>,
): any[] {
  return result.map((item) => {
    return chatCompletionsToolDefinitionUnionSerializer(item);
  });
}

/** An abstract representation of a tool that can be used by the model to improve a chat completions response. */
export interface ChatCompletionsToolDefinition {
  /** The object type. */
  /** The discriminator possible values: function */
  type: string;
}

export function chatCompletionsToolDefinitionSerializer(
  item: ChatCompletionsToolDefinition,
): any {
  return { type: item["type"] };
}

/** Alias for ChatCompletionsToolDefinitionUnion */
export type ChatCompletionsToolDefinitionUnion =
  | ChatCompletionsFunctionToolDefinition
  | ChatCompletionsToolDefinition;

export function chatCompletionsToolDefinitionUnionSerializer(
  item: ChatCompletionsToolDefinitionUnion,
): any {
  switch (item.type) {
    case "function":
      return chatCompletionsFunctionToolDefinitionSerializer(
        item as ChatCompletionsFunctionToolDefinition,
      );

    default:
      return chatCompletionsToolDefinitionSerializer(item);
  }
}

/** The definition information for a chat completions function tool that can call a function in response to a tool call. */
export interface ChatCompletionsFunctionToolDefinition
  extends ChatCompletionsToolDefinition {
  /** The object name, which is always 'function'. */
  type: "function";
  /** The function definition details for the function tool. */
  function: FunctionDefinition;
}

export function chatCompletionsFunctionToolDefinitionSerializer(
  item: ChatCompletionsFunctionToolDefinition,
): any {
  return {
    type: item["type"],
    function: functionDefinitionSerializer(item["function"]),
  };
}

/** Alias for _ChatCompletionsOptionsToolChoice */
export type _ChatCompletionsOptionsToolChoice =
  | ChatCompletionsToolSelectionPreset
  | ChatCompletionsNamedToolSelectionUnion;

export function _chatCompletionsOptionsToolChoiceSerializer(
  item: _ChatCompletionsOptionsToolChoice,
): any {
  return item;
}

/** Represents a generic policy for how a chat completions tool may be selected. */
export type ChatCompletionsToolSelectionPreset = "auto" | "none";

/** An abstract representation of an explicit, named tool selection to use for a chat completions request. */
export interface ChatCompletionsNamedToolSelection {
  /** The object type. */
  /** The discriminator possible values: function */
  type: string;
}

export function chatCompletionsNamedToolSelectionSerializer(
  item: ChatCompletionsNamedToolSelection,
): any {
  return { type: item["type"] };
}

/** Alias for ChatCompletionsNamedToolSelectionUnion */
export type ChatCompletionsNamedToolSelectionUnion =
  | ChatCompletionsNamedFunctionToolSelection
  | ChatCompletionsNamedToolSelection;

export function chatCompletionsNamedToolSelectionUnionSerializer(
  item: ChatCompletionsNamedToolSelectionUnion,
): any {
  switch (item.type) {
    case "function":
      return chatCompletionsNamedFunctionToolSelectionSerializer(
        item as ChatCompletionsNamedFunctionToolSelection,
      );

    default:
      return chatCompletionsNamedToolSelectionSerializer(item);
  }
}

/** A tool selection of a specific, named function tool that will limit chat completions to using the named function. */
export interface ChatCompletionsNamedFunctionToolSelection
  extends ChatCompletionsNamedToolSelection {
  /** The object type, which is always 'function'. */
  type: "function";
  /** The function that should be called. */
  function: ChatCompletionsFunctionToolSelection;
}

export function chatCompletionsNamedFunctionToolSelectionSerializer(
  item: ChatCompletionsNamedFunctionToolSelection,
): any {
  return {
    type: item["type"],
    function: chatCompletionsFunctionToolSelectionSerializer(item["function"]),
  };
}

/** A tool selection of a specific, named function tool that will limit chat completions to using the named function. */
export interface ChatCompletionsFunctionToolSelection {
  /** The name of the function that should be called. */
  name: string;
}

export function chatCompletionsFunctionToolSelectionSerializer(
  item: ChatCompletionsFunctionToolSelection,
): any {
  return { name: item["name"] };
}

/**
 * Representation of the response data from a chat completions request.
 * Completions support a wide variety of tasks and generate text that continues from or "completes"
 * provided prompt data.
 */
export interface ChatCompletions {
  /** A unique identifier associated with this chat completions response. */
  id: string;
  /**
   * The first timestamp associated with generation activity for this completions response,
   * represented as seconds since the beginning of the Unix epoch of 00:00 on 1 Jan 1970.
   */
  created: Date;
  /**
   * The collection of completions choices associated with this completions response.
   * Generally, `n` choices are generated per provided prompt with a default value of 1.
   * Token limits and other settings may limit the number of choices generated.
   */
  choices: ChatChoice[];
  /** The model name used for this completions request. */
  model?: string;
  /**
   * Content filtering results for zero or more prompts in the request. In a streaming request,
   * results for different prompts may arrive at different times or in different orders.
   */
  promptFilterResults?: ContentFilterResultsForPrompt[];
  /**
   * Can be used in conjunction with the `seed` request parameter to understand when backend changes have been made that
   * might impact determinism.
   */
  systemFingerprint?: string;
  /** Usage information for tokens processed and generated as part of this completions operation. */
  usage: CompletionsUsage;
}

export function chatCompletionsDeserializer(item: any): ChatCompletions {
  return {
    id: item["id"],
    created: new Date(item["created"] * 1000),
    choices: chatChoiceArrayDeserializer(item["choices"]),
    model: item["model"],
    promptFilterResults: !item["prompt_filter_results"]
      ? item["prompt_filter_results"]
      : contentFilterResultsForPromptArrayDeserializer(
          item["prompt_filter_results"],
        ),
    systemFingerprint: item["system_fingerprint"],
    usage: completionsUsageDeserializer(item["usage"]),
  };
}

export function chatChoiceArrayDeserializer(result: Array<ChatChoice>): any[] {
  return result.map((item) => {
    return chatChoiceDeserializer(item);
  });
}

/**
 * The representation of a single prompt completion as part of an overall chat completions request.
 * Generally, `n` choices are generated per provided prompt with a default value of 1.
 * Token limits and other settings may limit the number of choices generated.
 */
export interface ChatChoice {
  /** The chat message for a given chat completions prompt. */
  message?: ChatResponseMessage;
  /** The log probability information for this choice, as enabled via the 'logprobs' request option. */
  logprobs: ChatChoiceLogProbabilityInfo | null;
  /** The ordered index associated with this chat completions choice. */
  index: number;
  /** The reason that this chat completions choice completed its generated. */
  finishReason: CompletionsFinishReason | null;
  /**
   * The reason the model stopped generating tokens, together with any applicable details.
   * This structured representation replaces 'finish_reason' for some models.
   */
  finishDetails?: ChatFinishDetailsUnion;
  /** The delta message content for a streaming response. */
  delta?: ChatResponseMessage;
  /**
   * Information about the content filtering category (hate, sexual, violence, self_harm), if it
   * has been detected, as well as the severity level (very_low, low, medium, high-scale that
   * determines the intensity and risk level of harmful content) and if it has been filtered or not.
   */
  contentFilterResults?: ContentFilterResultsForChoice;
  /**
   * Represents the output results of Azure OpenAI enhancements to chat completions, as configured via the matching input
   * provided in the request. This supplementary information is only available when using Azure OpenAI and only when the
   * request is configured to use enhancements.
   */
  enhancements?: AzureChatEnhancements;
}

export function chatChoiceDeserializer(item: any): ChatChoice {
  return {
    message: !item["message"]
      ? item["message"]
      : chatResponseMessageDeserializer(item["message"]),
    logprobs: !item["logprobs"]
      ? item["logprobs"]
      : chatChoiceLogProbabilityInfoDeserializer(item["logprobs"]),
    index: item["index"],
    finishReason: item["finish_reason"],
    finishDetails: !item["finish_details"]
      ? item["finish_details"]
      : chatFinishDetailsUnionDeserializer(item["finish_details"]),
    delta: !item["delta"]
      ? item["delta"]
      : chatResponseMessageDeserializer(item["delta"]),
    contentFilterResults: !item["content_filter_results"]
      ? item["content_filter_results"]
      : contentFilterResultsForChoiceDeserializer(
          item["content_filter_results"],
        ),
    enhancements: !item["enhancements"]
      ? item["enhancements"]
      : azureChatEnhancementsDeserializer(item["enhancements"]),
  };
}

/** A representation of a chat message as received in a response. */
export interface ChatResponseMessage {
  /** The chat role associated with the message. */
  role: ChatRole;
  /** The content of the message. */
  content: string | null;
  /**
   * The tool calls that must be resolved and have their outputs appended to subsequent input messages for the chat
   * completions request to resolve as configured.
   */
  toolCalls?: ChatCompletionsToolCallUnion[];
  /**
   * The function call that must be resolved and have its output appended to subsequent input messages for the chat
   * completions request to resolve as configured.
   */
  functionCall?: FunctionCall;
  /**
   * If Azure OpenAI chat extensions are configured, this array represents the incremental steps performed by those
   * extensions while processing the chat completions request.
   */
  context?: AzureChatExtensionsMessageContext;
}

export function chatResponseMessageDeserializer(
  item: any,
): ChatResponseMessage {
  return {
    role: item["role"],
    content: item["content"],
    toolCalls: !item["tool_calls"]
      ? item["tool_calls"]
      : chatCompletionsToolCallUnionArrayDeserializer(item["tool_calls"]),
    functionCall: !item["function_call"]
      ? item["function_call"]
      : functionCallDeserializer(item["function_call"]),
    context: !item["context"]
      ? item["context"]
      : azureChatExtensionsMessageContextDeserializer(item["context"]),
  };
}

/**
 *   A representation of the additional context information available when Azure OpenAI chat extensions are involved
 *   in the generation of a corresponding chat completions response. This context information is only populated when
 *   using an Azure OpenAI request configured to use a matching extension.
 */
export interface AzureChatExtensionsMessageContext {
  /**
   *   The contextual information associated with the Azure chat extensions used for a chat completions request.
   *   These messages describe the data source retrievals, plugin invocations, and other intermediate steps taken in the
   *   course of generating a chat completions response that was augmented by capabilities from Azure OpenAI chat
   *   extensions.
   */
  citations?: AzureChatExtensionDataSourceResponseCitation[];
  /** The detected intent from the chat history, used to pass to the next turn to carry over the context. */
  intent?: string;
  /** All the retrieved documents. */
  allRetrievedDocuments?: AzureChatExtensionRetrievedDocument[];
}

export function azureChatExtensionsMessageContextDeserializer(
  item: any,
): AzureChatExtensionsMessageContext {
  return {
    citations: !item["citations"]
      ? item["citations"]
      : azureChatExtensionDataSourceResponseCitationArrayDeserializer(
          item["citations"],
        ),
    intent: item["intent"],
    allRetrievedDocuments: !item["all_retrieved_documents"]
      ? item["all_retrieved_documents"]
      : azureChatExtensionRetrievedDocumentArrayDeserializer(
          item["all_retrieved_documents"],
        ),
  };
}

export function azureChatExtensionDataSourceResponseCitationArrayDeserializer(
  result: Array<AzureChatExtensionDataSourceResponseCitation>,
): any[] {
  return result.map((item) => {
    return azureChatExtensionDataSourceResponseCitationDeserializer(item);
  });
}

/**
 * A single instance of additional context information available when Azure OpenAI chat extensions are involved
 * in the generation of a corresponding chat completions response. This context information is only populated when
 * using an Azure OpenAI request configured to use a matching extension.
 */
export interface AzureChatExtensionDataSourceResponseCitation {
  /** The content of the citation. */
  content: string;
  /** The title of the citation. */
  title?: string;
  /** The URL of the citation. */
  url?: string;
  /** The file path of the citation. */
  filepath?: string;
  /** The chunk ID of the citation. */
  chunkId?: string;
}

export function azureChatExtensionDataSourceResponseCitationDeserializer(
  item: any,
): AzureChatExtensionDataSourceResponseCitation {
  return {
    content: item["content"],
    title: item["title"],
    url: item["url"],
    filepath: item["filepath"],
    chunkId: item["chunk_id"],
  };
}

export function azureChatExtensionRetrievedDocumentArrayDeserializer(
  result: Array<AzureChatExtensionRetrievedDocument>,
): any[] {
  return result.map((item) => {
    return azureChatExtensionRetrievedDocumentDeserializer(item);
  });
}

/** The retrieved document. */
export interface AzureChatExtensionRetrievedDocument {
  /** The content of the citation. */
  content: string;
  /** The title of the citation. */
  title?: string;
  /** The URL of the citation. */
  url?: string;
  /** The file path of the citation. */
  filepath?: string;
  /** The chunk ID of the citation. */
  chunkId?: string;
  /** The search queries used to retrieve the document. */
  searchQueries: string[];
  /** The index of the data source. */
  dataSourceIndex: number;
  /** The original search score of the retrieved document. */
  originalSearchScore?: number;
  /** The rerank score of the retrieved document. */
  rerankScore?: number;
  /**
   * Represents the rationale for filtering the document. If the document does not undergo filtering,
   * this field will remain unset.
   */
  filterReason?: AzureChatExtensionRetrieveDocumentFilterReason;
}

export function azureChatExtensionRetrievedDocumentDeserializer(
  item: any,
): AzureChatExtensionRetrievedDocument {
  return {
    content: item["content"],
    title: item["title"],
    url: item["url"],
    filepath: item["filepath"],
    chunkId: item["chunk_id"],
    searchQueries: item["search_queries"].map((p: any) => {
      return p;
    }),
    dataSourceIndex: item["data_source_index"],
    originalSearchScore: item["original_search_score"],
    rerankScore: item["rerank_score"],
    filterReason: item["filter_reason"],
  };
}

/** The reason for filtering the retrieved document. */
export type AzureChatExtensionRetrieveDocumentFilterReason = "score" | "rerank";

/** Log probability information for a choice, as requested via 'logprobs' and 'top_logprobs'. */
export interface ChatChoiceLogProbabilityInfo {
  /** The list of log probability information entries for the choice's message content tokens, as requested via the 'logprobs' option. */
  content: ChatTokenLogProbabilityResult[] | null;
}

export function chatChoiceLogProbabilityInfoDeserializer(
  item: any,
): ChatChoiceLogProbabilityInfo {
  return {
    content: !item["content"]
      ? item["content"]
      : chatTokenLogProbabilityResultArrayDeserializer(item["content"]),
  };
}

export function chatTokenLogProbabilityResultArrayDeserializer(
  result: Array<ChatTokenLogProbabilityResult>,
): any[] {
  return result.map((item) => {
    return chatTokenLogProbabilityResultDeserializer(item);
  });
}

/** A representation of the log probability information for a single content token, including a list of most likely tokens if 'top_logprobs' were requested. */
export interface ChatTokenLogProbabilityResult {
  /** The message content token. */
  token: string;
  /** The log probability of the message content token. */
  logprob: number;
  /** A list of integers representing the UTF-8 bytes representation of the token. Useful in instances where characters are represented by multiple tokens and their byte representations must be combined to generate the correct text representation. Can be null if there is no bytes representation for the token. */
  bytes: number[] | null;
  /** The list of most likely tokens and their log probability information, as requested via 'top_logprobs'. */
  topLogprobs: ChatTokenLogProbabilityInfo[] | null;
}

export function chatTokenLogProbabilityResultDeserializer(
  item: any,
): ChatTokenLogProbabilityResult {
  return {
    token: item["token"],
    logprob: item["logprob"],
    bytes: !item["bytes"]
      ? item["bytes"]
      : item["bytes"].map((p: any) => {
          return p;
        }),
    topLogprobs: !item["top_logprobs"]
      ? item["top_logprobs"]
      : chatTokenLogProbabilityInfoArrayDeserializer(item["top_logprobs"]),
  };
}

export function chatTokenLogProbabilityInfoArrayDeserializer(
  result: Array<ChatTokenLogProbabilityInfo>,
): any[] {
  return result.map((item) => {
    return chatTokenLogProbabilityInfoDeserializer(item);
  });
}

/** A representation of the log probability information for a single message content token. */
export interface ChatTokenLogProbabilityInfo {
  /** The message content token. */
  token: string;
  /** The log probability of the message content token. */
  logprob: number;
  /** A list of integers representing the UTF-8 bytes representation of the token. Useful in instances where characters are represented by multiple tokens and their byte representations must be combined to generate the correct text representation. Can be null if there is no bytes representation for the token. */
  bytes: number[] | null;
}

export function chatTokenLogProbabilityInfoDeserializer(
  item: any,
): ChatTokenLogProbabilityInfo {
  return {
    token: item["token"],
    logprob: item["logprob"],
    bytes: !item["bytes"]
      ? item["bytes"]
      : item["bytes"].map((p: any) => {
          return p;
        }),
  };
}

/** An abstract representation of structured information about why a chat completions response terminated. */
export interface ChatFinishDetails {
  /** The object type. */
  /** The discriminator possible values: stop, max_tokens */
  type: string;
}

export function chatFinishDetailsDeserializer(item: any): ChatFinishDetails {
  return {
    type: item["type"],
  };
}

/** Alias for ChatFinishDetailsUnion */
export type ChatFinishDetailsUnion =
  | StopFinishDetails
  | MaxTokensFinishDetails
  | ChatFinishDetails;

export function chatFinishDetailsUnionDeserializer(
  item: any,
): ChatFinishDetailsUnion {
  switch (item.type) {
    case "stop":
      return stopFinishDetailsDeserializer(item as StopFinishDetails);

    case "max_tokens":
      return maxTokensFinishDetailsDeserializer(item as MaxTokensFinishDetails);

    default:
      return chatFinishDetailsDeserializer(item);
  }
}

/** A structured representation of a stop reason that signifies natural termination by the model. */
export interface StopFinishDetails extends ChatFinishDetails {
  /** The object type, which is always 'stop' for this object. */
  type: "stop";
  /** The token sequence that the model terminated with. */
  stop: string;
}

export function stopFinishDetailsDeserializer(item: any): StopFinishDetails {
  return {
    type: item["type"],
    stop: item["stop"],
  };
}

/**
 * A structured representation of a stop reason that signifies a token limit was reached before the model could naturally
 * complete.
 */
export interface MaxTokensFinishDetails extends ChatFinishDetails {
  /** The object type, which is always 'max_tokens' for this object. */
  type: "max_tokens";
}

export function maxTokensFinishDetailsDeserializer(
  item: any,
): MaxTokensFinishDetails {
  return {
    type: item["type"],
  };
}

/**
 * Represents the output results of Azure enhancements to chat completions, as configured via the matching input provided
 * in the request.
 */
export interface AzureChatEnhancements {
  /** The grounding enhancement that returns the bounding box of the objects detected in the image. */
  grounding?: AzureGroundingEnhancement;
}

export function azureChatEnhancementsDeserializer(
  item: any,
): AzureChatEnhancements {
  return {
    grounding: !item["grounding"]
      ? item["grounding"]
      : azureGroundingEnhancementDeserializer(item["grounding"]),
  };
}

/** The grounding enhancement that returns the bounding box of the objects detected in the image. */
export interface AzureGroundingEnhancement {
  /** The lines of text detected by the grounding enhancement. */
  lines: AzureGroundingEnhancementLine[];
}

export function azureGroundingEnhancementDeserializer(
  item: any,
): AzureGroundingEnhancement {
  return {
    lines: azureGroundingEnhancementLineArrayDeserializer(item["lines"]),
  };
}

export function azureGroundingEnhancementLineArrayDeserializer(
  result: Array<AzureGroundingEnhancementLine>,
): any[] {
  return result.map((item) => {
    return azureGroundingEnhancementLineDeserializer(item);
  });
}

/** A content line object consisting of an adjacent sequence of content elements, such as words and selection marks. */
export interface AzureGroundingEnhancementLine {
  /** The text within the line. */
  text: string;
  /** An array of spans that represent detected objects and its bounding box information. */
  spans: AzureGroundingEnhancementLineSpan[];
}

export function azureGroundingEnhancementLineDeserializer(
  item: any,
): AzureGroundingEnhancementLine {
  return {
    text: item["text"],
    spans: azureGroundingEnhancementLineSpanArrayDeserializer(item["spans"]),
  };
}

export function azureGroundingEnhancementLineSpanArrayDeserializer(
  result: Array<AzureGroundingEnhancementLineSpan>,
): any[] {
  return result.map((item) => {
    return azureGroundingEnhancementLineSpanDeserializer(item);
  });
}

/** A span object that represents a detected object and its bounding box information. */
export interface AzureGroundingEnhancementLineSpan {
  /** The text content of the span that represents the detected object. */
  text: string;
  /**
   * The character offset within the text where the span begins. This offset is defined as the position of the first
   * character of the span, counting from the start of the text as Unicode codepoints.
   */
  offset: number;
  /** The length of the span in characters, measured in Unicode codepoints. */
  length: number;
  /** An array of objects representing points in the polygon that encloses the detected object. */
  polygon: AzureGroundingEnhancementCoordinatePoint[];
}

export function azureGroundingEnhancementLineSpanDeserializer(
  item: any,
): AzureGroundingEnhancementLineSpan {
  return {
    text: item["text"],
    offset: item["offset"],
    length: item["length"],
    polygon: azureGroundingEnhancementCoordinatePointArrayDeserializer(
      item["polygon"],
    ),
  };
}

export function azureGroundingEnhancementCoordinatePointArrayDeserializer(
  result: Array<AzureGroundingEnhancementCoordinatePoint>,
): any[] {
  return result.map((item) => {
    return azureGroundingEnhancementCoordinatePointDeserializer(item);
  });
}

/** A representation of a single polygon point as used by the Azure grounding enhancement. */
export interface AzureGroundingEnhancementCoordinatePoint {
  /** The x-coordinate (horizontal axis) of the point. */
  x: number;
  /** The y-coordinate (vertical axis) of the point. */
  y: number;
}

export function azureGroundingEnhancementCoordinatePointDeserializer(
  item: any,
): AzureGroundingEnhancementCoordinatePoint {
  return {
    x: item["x"],
    y: item["y"],
  };
}

/** Represents the request data used to generate images. */
export interface ImageGenerationOptions {
  /**
   * The model name or Azure OpenAI model deployment name to use for image generation. If not specified, dall-e-2 will be
   * inferred as a default.
   */
  model?: string;
  /** A description of the desired images. */
  prompt: string;
  /**
   * The number of images to generate.
   * Dall-e-2 models support values between 1 and 10.
   * Dall-e-3 models only support a value of 1.
   */
  n?: number;
  /**
   * The desired dimensions for generated images.
   * Dall-e-2 models support 256x256, 512x512, or 1024x1024.
   * Dall-e-3 models support 1024x1024, 1792x1024, or 1024x1792.
   */
  size?: ImageSize;
  /** The format in which image generation response items should be presented. */
  responseFormat?: ImageGenerationResponseFormat;
  /**
   * The desired image generation quality level to use.
   * Only configurable with dall-e-3 models.
   */
  quality?: ImageGenerationQuality;
  /**
   * The desired image generation style to use.
   * Only configurable with dall-e-3 models.
   */
  style?: ImageGenerationStyle;
  /** A unique identifier representing your end-user, which can help to monitor and detect abuse. */
  user?: string;
}

export function imageGenerationOptionsSerializer(
  item: ImageGenerationOptions,
): any {
  return {
    model: item["model"],
    prompt: item["prompt"],
    n: item["n"],
    size: item["size"],
    response_format: item["responseFormat"],
    quality: item["quality"],
    style: item["style"],
    user: item["user"],
  };
}

export function imageGenerationOptionsDeserializer(
  item: any,
): ImageGenerationOptions {
  return {
    model: item["model"],
    prompt: item["prompt"],
    n: item["n"],
    size: item["size"],
    responseFormat: item["response_format"],
    quality: item["quality"],
    style: item["style"],
    user: item["user"],
  };
}

/** The desired size of generated images. */
export type ImageSize =
  | "256x256"
  | "512x512"
  | "1024x1024"
  | "1792x1024"
  | "1024x1792";
/** The format in which the generated images are returned. */
export type ImageGenerationResponseFormat = "url" | "b64_json";
/**
 * An image generation configuration that specifies how the model should prioritize quality, cost, and speed.
 * Only configurable with dall-e-3 models.
 */
export type ImageGenerationQuality = "standard" | "hd";
/**
 * An image generation configuration that specifies how the model should incorporate realism and other visual characteristics.
 * Only configurable with dall-e-3 models.
 */
export type ImageGenerationStyle = "natural" | "vivid";

/** The result of a successful image generation operation. */
export interface ImageGenerations {
  /**
   * A timestamp representing when this operation was started.
   * Expressed in seconds since the Unix epoch of 1970-01-01T00:00:00+0000.
   */
  created: Date;
  /** The images generated by the operation. */
  data: ImageGenerationData[];
}

export function imageGenerationsDeserializer(item: any): ImageGenerations {
  return {
    created: new Date(item["created"] * 1000),
    data: imageGenerationDataArrayDeserializer(item["data"]),
  };
}

export function imageGenerationDataArrayDeserializer(
  result: Array<ImageGenerationData>,
): any[] {
  return result.map((item) => {
    return imageGenerationDataDeserializer(item);
  });
}

/**
 * A representation of a single generated image, provided as either base64-encoded data or as a URL from which the image
 * may be retrieved.
 */
export interface ImageGenerationData {
  /** The URL that provides temporary access to download the generated image. */
  url?: string;
  /** The complete data for an image, represented as a base64-encoded string. */
  base64Data?: string;
  /** Information about the content filtering results. */
  contentFilterResults?: ImageGenerationContentFilterResults;
  /**
   * The final prompt used by the model to generate the image.
   * Only provided with dall-3-models and only when revisions were made to the prompt.
   */
  revisedPrompt?: string;
  /**
   * Information about the content filtering category (hate, sexual, violence, self_harm), if
   * it has been detected, as well as the severity level (very_low, low, medium, high-scale
   * that determines the intensity and risk level of harmful content) and if it has been
   * filtered or not. Information about jailbreak content and profanity, if it has been detected,
   * and if it has been filtered or not. And information about customer block list, if it has
   * been filtered and its id.
   */
  promptFilterResults?: ImageGenerationPromptFilterResults;
}

export function imageGenerationDataDeserializer(
  item: any,
): ImageGenerationData {
  return {
    url: item["url"],
    base64Data: item["b64_json"],
    contentFilterResults: !item["content_filter_results"]
      ? item["content_filter_results"]
      : imageGenerationContentFilterResultsDeserializer(
          item["content_filter_results"],
        ),
    revisedPrompt: item["revised_prompt"],
    promptFilterResults: !item["prompt_filter_results"]
      ? item["prompt_filter_results"]
      : imageGenerationPromptFilterResultsDeserializer(
          item["prompt_filter_results"],
        ),
  };
}

/** Describes the content filtering result for the image generation request. */
export interface ImageGenerationContentFilterResults {
  /**
   * Describes language related to anatomical organs and genitals, romantic relationships,
   *  acts portrayed in erotic or affectionate terms, physical sexual acts, including
   *  those portrayed as an assault or a forced sexual violent act against one’s will,
   *  prostitution, pornography, and abuse.
   */
  sexual?: ContentFilterResult;
  /**
   * Describes language related to physical actions intended to hurt, injure, damage, or
   * kill someone or something; describes weapons, etc.
   */
  violence?: ContentFilterResult;
  /**
   * Describes language attacks or uses that include pejorative or discriminatory language
   * with reference to a person or identity group on the basis of certain differentiating
   * attributes of these groups including but not limited to race, ethnicity, nationality,
   * gender identity and expression, sexual orientation, religion, immigration status, ability
   * status, personal appearance, and body size.
   */
  hate?: ContentFilterResult;
  /**
   * Describes language related to physical actions intended to purposely hurt, injure,
   * or damage one’s body, or kill oneself.
   */
  selfHarm?: ContentFilterResult;
}

export function imageGenerationContentFilterResultsDeserializer(
  item: any,
): ImageGenerationContentFilterResults {
  return {
    sexual: !item["sexual"]
      ? item["sexual"]
      : contentFilterResultDeserializer(item["sexual"]),
    violence: !item["violence"]
      ? item["violence"]
      : contentFilterResultDeserializer(item["violence"]),
    hate: !item["hate"]
      ? item["hate"]
      : contentFilterResultDeserializer(item["hate"]),
    selfHarm: !item["self_harm"]
      ? item["self_harm"]
      : contentFilterResultDeserializer(item["self_harm"]),
  };
}

/** Describes the content filtering results for the prompt of a image generation request. */
export interface ImageGenerationPromptFilterResults {
  /**
   * Describes language related to anatomical organs and genitals, romantic relationships,
   *  acts portrayed in erotic or affectionate terms, physical sexual acts, including
   *  those portrayed as an assault or a forced sexual violent act against one’s will,
   *  prostitution, pornography, and abuse.
   */
  sexual?: ContentFilterResult;
  /**
   * Describes language related to physical actions intended to hurt, injure, damage, or
   * kill someone or something; describes weapons, etc.
   */
  violence?: ContentFilterResult;
  /**
   * Describes language attacks or uses that include pejorative or discriminatory language
   * with reference to a person or identity group on the basis of certain differentiating
   * attributes of these groups including but not limited to race, ethnicity, nationality,
   * gender identity and expression, sexual orientation, religion, immigration status, ability
   * status, personal appearance, and body size.
   */
  hate?: ContentFilterResult;
  /**
   * Describes language related to physical actions intended to purposely hurt, injure,
   * or damage one’s body, or kill oneself.
   */
  selfHarm?: ContentFilterResult;
  /** Describes whether profanity was detected. */
  profanity?: ContentFilterDetectionResult;
  /** Whether a jailbreak attempt was detected in the prompt. */
  jailbreak?: ContentFilterDetectionResult;
  /** Information about customer block lists and if something was detected the associated list ID. */
  customBlocklists?: ContentFilterDetailedResults;
}

export function imageGenerationPromptFilterResultsDeserializer(
  item: any,
): ImageGenerationPromptFilterResults {
  return {
    sexual: !item["sexual"]
      ? item["sexual"]
      : contentFilterResultDeserializer(item["sexual"]),
    violence: !item["violence"]
      ? item["violence"]
      : contentFilterResultDeserializer(item["violence"]),
    hate: !item["hate"]
      ? item["hate"]
      : contentFilterResultDeserializer(item["hate"]),
    selfHarm: !item["self_harm"]
      ? item["self_harm"]
      : contentFilterResultDeserializer(item["self_harm"]),
    profanity: !item["profanity"]
      ? item["profanity"]
      : contentFilterDetectionResultDeserializer(item["profanity"]),
    jailbreak: !item["jailbreak"]
      ? item["jailbreak"]
      : contentFilterDetectionResultDeserializer(item["jailbreak"]),
    customBlocklists: !item["custom_blocklists"]
      ? item["custom_blocklists"]
      : contentFilterDetailedResultsDeserializer(item["custom_blocklists"]),
  };
}

/** A representation of the request options that control the behavior of a text-to-speech operation. */
export interface SpeechGenerationOptions {
  /** The text to generate audio for. The maximum length is 4096 characters. */
  input: string;
  /** The voice to use for text-to-speech. */
  voice: SpeechVoice;
  /** The audio output format for the spoken text. By default, the MP3 format will be used. */
  responseFormat?: SpeechGenerationResponseFormat;
  /** The speed of speech for generated audio. Values are valid in the range from 0.25 to 4.0, with 1.0 the default and higher values corresponding to faster speech. */
  speed?: number;
  /** The model to use for this text-to-speech request. */
  model?: string;
}

export function speechGenerationOptionsSerializer(
  item: SpeechGenerationOptions,
): any {
  return {
    input: item["input"],
    voice: item["voice"],
    response_format: item["responseFormat"],
    speed: item["speed"],
    model: item["model"],
  };
}

/** The available voices for text-to-speech. */
export type SpeechVoice =
  | "alloy"
  | "echo"
  | "fable"
  | "onyx"
  | "nova"
  | "shimmer";
/** The supported audio output formats for text-to-speech. */
export type SpeechGenerationResponseFormat =
  | "mp3"
  | "opus"
  | "aac"
  | "flac"
  | "wav"
  | "pcm";

/**
 * The configuration information for an embeddings request.
 * Embeddings measure the relatedness of text strings and are commonly used for search, clustering,
 * recommendations, and other similar scenarios.
 */
export interface EmbeddingsOptions {
  /**
   * An identifier for the caller or end user of the operation. This may be used for tracking
   * or rate-limiting purposes.
   */
  user?: string;
  /**
   * The model name to provide as part of this embeddings request.
   * Not applicable to Azure OpenAI, where deployment information should be included in the Azure
   * resource URI that's connected to.
   */
  model?: string;
  /**
   * Input texts to get embeddings for, encoded as a an array of strings.
   * Each input must not exceed 2048 tokens in length.
   *
   * Unless you are embedding code, we suggest replacing newlines (\n) in your input with a single space,
   * as we have observed inferior results when newlines are present.
   */
  input: string[];
  /** The response encoding format to use for embedding data. */
  encodingFormat?: EmbeddingEncodingFormat;
  /** The number of dimensions the resulting output embeddings should have. Only supported in `text-embedding-3` and later models. */
  dimensions?: number;
  /** When using Azure OpenAI, specifies the input type to use for embedding search. */
  inputType?: string;
}

export function embeddingsOptionsSerializer(item: EmbeddingsOptions): any {
  return {
    user: item["user"],
    model: item["model"],
    input: item["input"].map((p: any) => {
      return p;
    }),
    encoding_format: item["encodingFormat"],
    dimensions: item["dimensions"],
    input_type: item["inputType"],
  };
}

/** Represents the available formats for embeddings data on responses. */
export type EmbeddingEncodingFormat = "float" | "base64";

/**
 * Representation of the response data from an embeddings request.
 * Embeddings measure the relatedness of text strings and are commonly used for search, clustering,
 * recommendations, and other similar scenarios.
 */
export interface Embeddings {
  /** Embedding values for the prompts submitted in the request. */
  data: EmbeddingItem[];
  /** Usage counts for tokens input using the embeddings API. */
  usage: EmbeddingsUsage;
}

export function embeddingsDeserializer(item: any): Embeddings {
  return {
    data: embeddingItemArrayDeserializer(item["data"]),
    usage: embeddingsUsageDeserializer(item["usage"]),
  };
}

export function embeddingItemArrayDeserializer(
  result: Array<EmbeddingItem>,
): any[] {
  return result.map((item) => {
    return embeddingItemDeserializer(item);
  });
}

/** Representation of a single embeddings relatedness comparison. */
export interface EmbeddingItem {
  /**
   * List of embeddings value for the input prompt. These represent a measurement of the
   * vector-based relatedness of the provided input.
   */
  embedding: number[];
  /** Index of the prompt to which the EmbeddingItem corresponds. */
  index: number;
}

export function embeddingItemDeserializer(item: any): EmbeddingItem {
  return {
    embedding: item["embedding"].map((p: any) => {
      return p;
    }),
    index: item["index"],
  };
}

/** Measurement of the amount of tokens used in this request and response. */
export interface EmbeddingsUsage {
  /** Number of tokens sent in the original request. */
  promptTokens: number;
  /** Total number of tokens transacted in this request/response. */
  totalTokens: number;
}

export function embeddingsUsageDeserializer(item: any): EmbeddingsUsage {
  return {
    promptTokens: item["prompt_tokens"],
    totalTokens: item["total_tokens"],
  };
}

/** Known values of {@link ServiceApiVersions} that the service accepts. */
export enum KnownServiceApiVersions {
  V20221201 = "2022-12-01",
  V20230515 = "2023-05-15",
  V20240201 = "2024-02-01",
  V20240601 = "2024-06-01",
}
