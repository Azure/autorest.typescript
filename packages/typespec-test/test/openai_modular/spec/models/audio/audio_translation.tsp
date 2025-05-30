import "@typespec/versioning";
import "@azure-tools/typespec-client-generator-core";
import "./common.tsp";

namespace Azure.OpenAI;

using TypeSpec.Http;
using TypeSpec.Versioning;
using Azure.ClientGenerator.Core;

@doc("Defines available options for the underlying response format of output translation information.")
@added(ServiceApiVersions.v2024_02_15_Preview)
union AudioTranslationFormat {
  string,

  @doc("Use a response body that is a JSON object containing a single 'text' field for the translation.")
  json: "json",

  @doc("""
    Use a response body that is a JSON object containing translation text along with timing, segments, and other
    metadata.
    """)
  verbose_json: "verbose_json",

  @doc("Use a response body that is plain text containing the raw, unannotated translation.")
  text: "text",

  @doc("Use a response body that is plain text in SubRip (SRT) format that also includes timing information.")
  srt: "srt",

  @doc("""
    Use a response body that is plain text in Web Video Text Tracks (VTT) format that also includes timing information.
    """)
  vtt: "vtt",
}

@doc("""
  The configuration information for an audio translation request.
  """)
@added(ServiceApiVersions.v2024_02_15_Preview)
model AudioTranslationOptions {
  @doc("""
    The audio data to translate. This must be the binary content of a file in one of the supported media formats:
     flac, mp3, mp4, mpeg, mpga, m4a, ogg, wav, webm.
    """)
  @clientName("AudioData", "csharp")
  file: HttpPart<bytes>;

  @doc("""
    The optional filename or descriptive identifier to associate with with the audio data.
    """)
  // Note: although this isn't explicitly part of the request schema per documentation, it is present via the encoded
  // content-disposition header for the binary section of the multipart/form-data content.
  filename?: HttpPart<string>;

  @doc("""
    The requested format of the translation response data, which will influence the content and detail of the result.
    """)
  @encodedName("application/json", "response_format")
  responseFormat?: HttpPart<AudioTranslationFormat>;

  @doc("""
    An optional hint to guide the model's style or continue from a prior audio segment. The written language of the
    prompt should match the primary spoken language of the audio data.
    """)
  prompt?: HttpPart<string>;

  @doc("""
    The sampling temperature, between 0 and 1.
    Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.
    If set to 0, the model will use log probability to automatically increase the temperature until certain thresholds are hit.
    """)
  temperature?: HttpPart<float32>;

  @doc("""
    The model to use for this translation request.
    """)
  // Implementation note: developer-facing specification of deployment or model by clients should be controlled either
  // via an operation parameter or by this request body field -- but only one of those. This field should be hidden by
  // clients if operation parameters are used and populated into the request body on an as-needed basis.
  @clientName("DeploymentName", "csharp")
  `model`?: HttpPart<string>;
}

@doc("""
  Extended information about a single segment of translated audio data.
  Segments generally represent roughly 5-10 seconds of speech. Segment boundaries typically occur between words but not
  necessarily sentences.
  """)
@added(ServiceApiVersions.v2024_02_15_Preview)
model AudioTranslationSegment {
  @doc("The 0-based index of this segment within a translation.")
  id: int32;

  @doc("The time at which this segment started relative to the beginning of the translated audio.")
  @encode("seconds", float32)
  start: duration;

  @doc("The time at which this segment ended relative to the beginning of the translated audio.")
  @encode("seconds", float32)
  end: duration;

  @doc("The translated text that was part of this audio segment.")
  text: string;

  @doc("The temperature score associated with this audio segment.")
  temperature: float32;

  @doc("The average log probability associated with this audio segment.")
  @encodedName("application/json", "avg_logprob")
  @clientName("AverageLogProbability", "csharp")
  avgLogprob: float32;

  @doc("The compression ratio of this audio segment.")
  @encodedName("application/json", "compression_ratio")
  compressionRatio: float32;

  @doc("The probability of no speech detection within this audio segment.")
  @encodedName("application/json", "no_speech_prob")
  @clientName("NoSpeechProbability", "csharp")
  noSpeechProb: float32;

  @doc("The token IDs matching the translated text in this audio segment.")
  tokens: int32[];

  @doc("""
    The seek position associated with the processing of this audio segment.
    Seek positions are expressed as hundredths of seconds.
    The model may process several segments from a single seek position, so while the seek position will never represent
    a later time than the segment's start, the segment's start may represent a significantly later time than the
    segment's associated seek position.
    """)
  seek: int32;
}

@doc("Result information for an operation that translated spoken audio into written text.")
@added(ServiceApiVersions.v2024_02_15_Preview)
model AudioTranslation {
  @doc("The translated text for the provided audio data.")
  text: string;

  @doc("The label that describes which operation type generated the accompanying response data.")
  @clientName("InternalAudioTaskLabel", "csharp")
  task?: AudioTaskLabel;

  @doc("""
    The spoken language that was detected in the translated audio data.
    This is expressed as a two-letter ISO-639-1 language code like 'en' or 'fr'.
    """)
  language?: string;

  @doc("The total duration of the audio processed to produce accompanying translation information.")
  @encode("seconds", float32)
  duration?: duration;

  @doc("""
    A collection of information about the timing, probabilities, and other detail of each processed audio segment.
    """)
  segments?: AudioTranslationSegment[];
}

/**
 * Get audio translation body.
 */
@added(ServiceApiVersions.v2024_02_15_Preview)
model GetAudioTranslationBody {
  /**
   * The configuration information for an audio translation request.
   */
  @multipartBody
  body: AudioTranslationOptions;
}
