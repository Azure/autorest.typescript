// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  GetLanguagesResult,
  TranslationLanguage,
  TransliterationLanguage,
  TransliterableScript,
  CommonScriptModel,
  SourceDictionaryLanguage,
  TargetDictionaryLanguage,
  MtErrorResponse,
  ErrorDetails,
  TextTypes,
  ProfanityActions,
  ProfanityMarkers,
  InputTextElement,
  TranslatedTextElement,
  DetectedLanguage,
  Translation,
  Transliteration,
  Alignment,
  SentenceLength,
  SourceText,
  TransliteratedText,
  DetectedLanguageWithAlternatives,
  DetectedLanguageElement,
  BreakSentenceElement,
  DictionaryLookupElement,
  DictionaryTranslation,
  BackTranslation,
  DictionaryExampleTextElement,
  DictionaryExampleElement,
  Example,
  APIVersion,
} from "../models/models.js";
import {
  GetLanguagesResultOutput as GetLanguagesResultRest,
  TranslationLanguageOutput as TranslationLanguageRest,
  TransliterationLanguageOutput as TransliterationLanguageRest,
  TransliterableScriptOutput as TransliterableScriptRest,
  CommonScriptModelOutput as CommonScriptModelRest,
  SourceDictionaryLanguageOutput as SourceDictionaryLanguageRest,
  TargetDictionaryLanguageOutput as TargetDictionaryLanguageRest,
  MtErrorResponseOutput as MtErrorResponseRest,
  ErrorDetailsOutput as ErrorDetailsRest,
  TextTypes as TextTypesRest,
  ProfanityActions as ProfanityActionsRest,
  ProfanityMarkers as ProfanityMarkersRest,
  InputTextElement as InputTextElementRest,
  TranslatedTextElementOutput as TranslatedTextElementRest,
  DetectedLanguageOutput as DetectedLanguageRest,
  TranslationOutput as TranslationRest,
  TransliterationOutput as TransliterationRest,
  AlignmentOutput as AlignmentRest,
  SentenceLengthOutput as SentenceLengthRest,
  SourceTextOutput as SourceTextRest,
  TransliteratedTextOutput as TransliteratedTextRest,
  DetectedLanguageWithAlternativesOutput as DetectedLanguageWithAlternativesRest,
  DetectedLanguageElementOutput as DetectedLanguageElementRest,
  BreakSentenceElementOutput as BreakSentenceElementRest,
  DictionaryLookupElementOutput as DictionaryLookupElementRest,
  DictionaryTranslationOutput as DictionaryTranslationRest,
  BackTranslationOutput as BackTranslationRest,
  DictionaryExampleTextElement as DictionaryExampleTextElementRest,
  DictionaryExampleElementOutput as DictionaryExampleElementRest,
  ExampleOutput as ExampleRest,
} from "../rest/index.js";

export function serializeGetLanguagesResult(
  o: GetLanguagesResult,
): GetLanguagesResultRest {
  return {
    ...o,
    translation: (() => {
      throw Error("Not implemented.");
    })(),
    transliteration: (() => {
      throw Error("Not implemented.");
    })(),
    dictionary: (() => {
      throw Error("Not implemented.");
    })(),
  };
}

export function deserializeGetLanguagesResult(
  o: GetLanguagesResultRest,
): GetLanguagesResult {
  return {
    ...o,
    translation: (() => {
      throw Error("Not implemented.");
    })(),
    transliteration: (() => {
      throw Error("Not implemented.");
    })(),
    dictionary: (() => {
      throw Error("Not implemented.");
    })(),
  };
}

export function serializeTranslationLanguage(
  o: TranslationLanguage,
): TranslationLanguageRest {
  return { ...o, name: o["name"], nativeName: o["nativeName"], dir: o["dir"] };
}

export function deserializeTranslationLanguage(
  o: TranslationLanguageRest,
): TranslationLanguage {
  return { ...o, name: o["name"], nativeName: o["nativeName"], dir: o["dir"] };
}

export function serializeTransliterationLanguage(
  o: TransliterationLanguage,
): TransliterationLanguageRest {
  return {
    ...o,
    name: o["name"],
    nativeName: o["nativeName"],
    scripts: o["scripts"].map((e) => serializeTransliterableScript(e)),
  };
}

export function deserializeTransliterationLanguage(
  o: TransliterationLanguageRest,
): TransliterationLanguage {
  return {
    ...o,
    name: o["name"],
    nativeName: o["nativeName"],
    scripts: o["scripts"].map((e) => deserializeTransliterableScript(e)),
  };
}

export function serializeTransliterableScript(
  o: TransliterableScript,
): TransliterableScriptRest {
  return {
    ...o,
    ...serializeCommonScriptModel(o),
    toScripts: o["toScripts"].map((e) => serializeCommonScriptModel(e)),
  };
}

export function deserializeTransliterableScript(
  o: TransliterableScriptRest,
): TransliterableScript {
  return {
    ...o,
    ...deserializeCommonScriptModel(o),
    toScripts: o["toScripts"].map((e) => deserializeCommonScriptModel(e)),
  };
}

export function serializeCommonScriptModel(
  o: CommonScriptModel,
): CommonScriptModelRest {
  return {
    ...o,
    code: o["code"],
    name: o["name"],
    nativeName: o["nativeName"],
    dir: o["dir"],
  };
}

export function deserializeCommonScriptModel(
  o: CommonScriptModelRest,
): CommonScriptModel {
  return {
    ...o,
    code: o["code"],
    name: o["name"],
    nativeName: o["nativeName"],
    dir: o["dir"],
  };
}

export function serializeSourceDictionaryLanguage(
  o: SourceDictionaryLanguage,
): SourceDictionaryLanguageRest {
  return {
    ...o,
    name: o["name"],
    nativeName: o["nativeName"],
    dir: o["dir"],
    translations: o["translations"].map((e) =>
      serializeTargetDictionaryLanguage(e),
    ),
  };
}

export function deserializeSourceDictionaryLanguage(
  o: SourceDictionaryLanguageRest,
): SourceDictionaryLanguage {
  return {
    ...o,
    name: o["name"],
    nativeName: o["nativeName"],
    dir: o["dir"],
    translations: o["translations"].map((e) =>
      deserializeTargetDictionaryLanguage(e),
    ),
  };
}

export function serializeTargetDictionaryLanguage(
  o: TargetDictionaryLanguage,
): TargetDictionaryLanguageRest {
  return {
    ...o,
    name: o["name"],
    nativeName: o["nativeName"],
    dir: o["dir"],
    code: o["code"],
  };
}

export function deserializeTargetDictionaryLanguage(
  o: TargetDictionaryLanguageRest,
): TargetDictionaryLanguage {
  return {
    ...o,
    name: o["name"],
    nativeName: o["nativeName"],
    dir: o["dir"],
    code: o["code"],
  };
}

export function serializeMtErrorResponse(
  o: MtErrorResponse,
): MtErrorResponseRest {
  return { ...o, error: serializeErrorDetails(o["error"]) };
}

export function deserializeMtErrorResponse(
  o: MtErrorResponseRest,
): MtErrorResponse {
  return { ...o, error: deserializeErrorDetails(o["error"]) };
}

export function serializeErrorDetails(o: ErrorDetails): ErrorDetailsRest {
  return { ...o, code: o["code"], message: o["message"] };
}

export function deserializeErrorDetails(o: ErrorDetailsRest): ErrorDetails {
  return { ...o, code: o["code"], message: o["message"] };
}

export function serializeTextTypes(o: TextTypes): TextTypesRest {
  return o;
}

export function deserializeTextTypes(o: TextTypesRest): TextTypes {
  return o;
}

export function serializeProfanityActions(
  o: ProfanityActions,
): ProfanityActionsRest {
  return o;
}

export function deserializeProfanityActions(
  o: ProfanityActionsRest,
): ProfanityActions {
  return o;
}

export function serializeProfanityMarkers(
  o: ProfanityMarkers,
): ProfanityMarkersRest {
  return o;
}

export function deserializeProfanityMarkers(
  o: ProfanityMarkersRest,
): ProfanityMarkers {
  return o;
}

export function serializeInputTextElement(
  o: InputTextElement,
): InputTextElementRest {
  return { ...o, text: o["text"] };
}

export function deserializeInputTextElement(
  o: InputTextElementRest,
): InputTextElement {
  return { ...o, text: o["text"] };
}

export function serializeTranslatedTextElement(
  o: TranslatedTextElement,
): TranslatedTextElementRest {
  return {
    ...o,
    ...(o["detectedLanguage"] === undefined
      ? {}
      : { detectedLanguage: serializeDetectedLanguage(o["detectedLanguage"]) }),
    translations: o["translations"].map((e) => serializeTranslation(e)),
    sourceText: serializeSourceText(o["sourceText"]),
  };
}

export function deserializeTranslatedTextElement(
  o: TranslatedTextElementRest,
): TranslatedTextElement {
  return {
    ...o,
    ...(o["detectedLanguage"] === undefined
      ? {}
      : {
          detectedLanguage: deserializeDetectedLanguage(o["detectedLanguage"]),
        }),
    translations: o["translations"].map((e) => deserializeTranslation(e)),
    sourceText: deserializeSourceText(o["sourceText"]),
  };
}

export function serializeDetectedLanguage(
  o: DetectedLanguage,
): DetectedLanguageRest {
  return { ...o, language: o["language"], score: o["score"] };
}

export function deserializeDetectedLanguage(
  o: DetectedLanguageRest,
): DetectedLanguage {
  return { ...o, language: o["language"], score: o["score"] };
}

export function serializeTranslation(o: Translation): TranslationRest {
  return {
    ...o,
    to: o["to"],
    text: o["text"],
    transliteration: serializeTransliteration(o["transliteration"]),
    alignment: serializeAlignment(o["alignment"]),
    sentLen: serializeSentenceLength(o["sentLen"]),
  };
}

export function deserializeTranslation(o: TranslationRest): Translation {
  return {
    ...o,
    to: o["to"],
    text: o["text"],
    transliteration: deserializeTransliteration(o["transliteration"]),
    alignment: deserializeAlignment(o["alignment"]),
    sentLen: deserializeSentenceLength(o["sentLen"]),
  };
}

export function serializeTransliteration(
  o: Transliteration,
): TransliterationRest {
  return { ...o, script: o["script"], text: o["text"] };
}

export function deserializeTransliteration(
  o: TransliterationRest,
): Transliteration {
  return { ...o, script: o["script"], text: o["text"] };
}

export function serializeAlignment(o: Alignment): AlignmentRest {
  return { ...o, proj: o["proj"] };
}

export function deserializeAlignment(o: AlignmentRest): Alignment {
  return { ...o, proj: o["proj"] };
}

export function serializeSentenceLength(o: SentenceLength): SentenceLengthRest {
  return { ...o, srcSentLen: o["srcSentLen"], transSentLen: o["transSentLen"] };
}

export function deserializeSentenceLength(
  o: SentenceLengthRest,
): SentenceLength {
  return { ...o, srcSentLen: o["srcSentLen"], transSentLen: o["transSentLen"] };
}

export function serializeSourceText(o: SourceText): SourceTextRest {
  return { ...o, text: o["text"] };
}

export function deserializeSourceText(o: SourceTextRest): SourceText {
  return { ...o, text: o["text"] };
}

export function serializeTransliteratedText(
  o: TransliteratedText,
): TransliteratedTextRest {
  return { ...o, text: o["text"], script: o["script"] };
}

export function deserializeTransliteratedText(
  o: TransliteratedTextRest,
): TransliteratedText {
  return { ...o, text: o["text"], script: o["script"] };
}

export function serializeDetectedLanguageWithAlternatives(
  o: DetectedLanguageWithAlternatives,
): DetectedLanguageWithAlternativesRest {
  return {
    ...o,
    ...serializeDetectedLanguageElement(o),
    alternatives: o["alternatives"].map((e) => serializeDetectedLanguage(e)),
  };
}

export function deserializeDetectedLanguageWithAlternatives(
  o: DetectedLanguageWithAlternativesRest,
): DetectedLanguageWithAlternatives {
  return {
    ...o,
    ...deserializeDetectedLanguageElement(o),
    alternatives: o["alternatives"].map((e) => deserializeDetectedLanguage(e)),
  };
}

export function serializeDetectedLanguageElement(
  o: DetectedLanguageElement,
): DetectedLanguageElementRest {
  return {
    ...o,
    language: o["language"],
    score: o["score"],
    isTranslationSupported: o["isTranslationSupported"],
    isTransliterationSupported: o["isTransliterationSupported"],
  };
}

export function deserializeDetectedLanguageElement(
  o: DetectedLanguageElementRest,
): DetectedLanguageElement {
  return {
    ...o,
    language: o["language"],
    score: o["score"],
    isTranslationSupported: o["isTranslationSupported"],
    isTransliterationSupported: o["isTransliterationSupported"],
  };
}

export function serializeBreakSentenceElement(
  o: BreakSentenceElement,
): BreakSentenceElementRest {
  return {
    ...o,
    ...(o["detectedLanguage"] === undefined
      ? {}
      : { detectedLanguage: serializeDetectedLanguage(o["detectedLanguage"]) }),
    sentLen: serializeSentenceLength(o["sentLen"]),
  };
}

export function deserializeBreakSentenceElement(
  o: BreakSentenceElementRest,
): BreakSentenceElement {
  return {
    ...o,
    ...(o["detectedLanguage"] === undefined
      ? {}
      : {
          detectedLanguage: deserializeDetectedLanguage(o["detectedLanguage"]),
        }),
    sentLen: deserializeSentenceLength(o["sentLen"]),
  };
}

export function serializeDictionaryLookupElement(
  o: DictionaryLookupElement,
): DictionaryLookupElementRest {
  return {
    ...o,
    normalizedSource: o["normalizedSource"],
    displaySource: o["displaySource"],
    translations: o["translations"].map((e) =>
      serializeDictionaryTranslation(e),
    ),
  };
}

export function deserializeDictionaryLookupElement(
  o: DictionaryLookupElementRest,
): DictionaryLookupElement {
  return {
    ...o,
    normalizedSource: o["normalizedSource"],
    displaySource: o["displaySource"],
    translations: o["translations"].map((e) =>
      deserializeDictionaryTranslation(e),
    ),
  };
}

export function serializeDictionaryTranslation(
  o: DictionaryTranslation,
): DictionaryTranslationRest {
  return {
    ...o,
    normalizedTarget: o["normalizedTarget"],
    displayTarget: o["displayTarget"],
    posTag: o["posTag"],
    confidence: o["confidence"],
    prefixWord: o["prefixWord"],
    backTranslations: o["backTranslations"].map((e) =>
      serializeBackTranslation(e),
    ),
  };
}

export function deserializeDictionaryTranslation(
  o: DictionaryTranslationRest,
): DictionaryTranslation {
  return {
    ...o,
    normalizedTarget: o["normalizedTarget"],
    displayTarget: o["displayTarget"],
    posTag: o["posTag"],
    confidence: o["confidence"],
    prefixWord: o["prefixWord"],
    backTranslations: o["backTranslations"].map((e) =>
      deserializeBackTranslation(e),
    ),
  };
}

export function serializeBackTranslation(
  o: BackTranslation,
): BackTranslationRest {
  return {
    ...o,
    normalizedText: o["normalizedText"],
    displayText: o["displayText"],
    numExamples: o["numExamples"],
    frequencyCount: o["frequencyCount"],
  };
}

export function deserializeBackTranslation(
  o: BackTranslationRest,
): BackTranslation {
  return {
    ...o,
    normalizedText: o["normalizedText"],
    displayText: o["displayText"],
    numExamples: o["numExamples"],
    frequencyCount: o["frequencyCount"],
  };
}

export function serializeDictionaryExampleTextElement(
  o: DictionaryExampleTextElement,
): DictionaryExampleTextElementRest {
  return {
    ...o,
    ...serializeInputTextElement(o),
    translation: o["translation"],
  };
}

export function deserializeDictionaryExampleTextElement(
  o: DictionaryExampleTextElementRest,
): DictionaryExampleTextElement {
  return {
    ...o,
    ...deserializeInputTextElement(o),
    translation: o["translation"],
  };
}

export function serializeDictionaryExampleElement(
  o: DictionaryExampleElement,
): DictionaryExampleElementRest {
  return {
    ...o,
    normalizedSource: o["normalizedSource"],
    normalizedTarget: o["normalizedTarget"],
    examples: o["examples"].map((e) => serializeExample(e)),
  };
}

export function deserializeDictionaryExampleElement(
  o: DictionaryExampleElementRest,
): DictionaryExampleElement {
  return {
    ...o,
    normalizedSource: o["normalizedSource"],
    normalizedTarget: o["normalizedTarget"],
    examples: o["examples"].map((e) => deserializeExample(e)),
  };
}

export function serializeExample(o: Example): ExampleRest {
  return {
    ...o,
    sourcePrefix: o["sourcePrefix"],
    sourceTerm: o["sourceTerm"],
    sourceSuffix: o["sourceSuffix"],
    targetPrefix: o["targetPrefix"],
    targetTerm: o["targetTerm"],
    targetSuffix: o["targetSuffix"],
  };
}

export function deserializeExample(o: ExampleRest): Example {
  return {
    ...o,
    sourcePrefix: o["sourcePrefix"],
    sourceTerm: o["sourceTerm"],
    sourceSuffix: o["sourceSuffix"],
    targetPrefix: o["targetPrefix"],
    targetTerm: o["targetTerm"],
    targetSuffix: o["targetSuffix"],
  };
}

export function serializeAPIVersion(o: APIVersion): FIXMYNAME {
  return o;
}

export function deserializeAPIVersion(o: FIXMYNAME): APIVersion {
  return o;
}
