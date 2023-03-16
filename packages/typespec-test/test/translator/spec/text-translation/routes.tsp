import "@typespec/rest";
import "@azure-tools/typespec-azure-core";
import "./models-languages.tsp";
import "./models-translate.tsp";
import "./models-transliterate.tsp";
import "./models-detect.tsp";
import "./models-breaksentence.tsp";
import "./models-dictionary.tsp";

using Azure.Core;
using TypeSpec.Rest;
using TypeSpec.Http;

namespace Translator.TextTranslation;

op CustomOperation<TParams, TResponse, Traits = {}, TError = MtErrorResponse>(
    ...TParams,
    @query("api-version")
    apiVersion: string): TResponse | TError;

@get
@route("languages")
@summary("Gets the set of languages currently supported by other operations of the Translator.")
@doc("Gets the set of languages currently supported by other operations of the Translator.")
op GetLanguages is CustomOperation<GetLanguageParameters, GetLanguagesResult, {}, MtErrorResponse>;

@post
@route("translate")
@summary("Translate Text")
@doc("Translate Text")
op Translate is CustomOperation<TranslateParameters, TranslationResult, {}, MtErrorResponse>;

@post
@route("transliterate")
@summary("Transliterate Text")
@doc("Transliterate Text")
op Transliterate is CustomOperation<TransliterateParameters, TransliterateResult, {}, MtErrorResponse>;

@post
@route("detect")
@summary("Detect Languages")
@doc("Detect Languages")
op Detect is CustomOperation<DetectParameters, DetectedLanguagesResult, {}, MtErrorResponse>;

@post
@route("breaksentence")
@summary("Break Sentence")
@doc("Break Sentence")
op BreakSentence is CustomOperation<BreakSentenceParameters, BreakSentenceResult, {}, MtErrorResponse>;

@post
@route("dictionary/lookup")
@summary("Dictionary Lookup")
@doc("Dictionary Lookup")
op DictionaryLookup is CustomOperation<DictionaryLookupParamters, DictionaryLookupResult, {}, MtErrorResponse>;

@post
@route("dictionary/examples")
@summary("Dictionary Examples")
@doc("Dictionary Examples")
op DictionaryExamples is CustomOperation<DictionaryExamplesParamters, DictionaryExamplesResult, {}, MtErrorResponse>;
