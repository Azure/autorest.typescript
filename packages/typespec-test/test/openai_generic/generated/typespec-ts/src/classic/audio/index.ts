// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Client } from "@azure-rest/core-client";
import { createTranscription } from "../../api/audio/transcriptions";
import { createTranslation } from "../../api/audio/translations";
import {
  CreateTranscriptionRequest,
  CreateTranscriptionOptions,
  CreateTranscriptionResponse,
  CreateTranslationOptions,
  CreateTranslationRequest,
  CreateTranslationResponse,
} from "../../models";

export interface AudioTranscriptionsOperations {
  transcriptions: {
    createTranscription: (
      audio: CreateTranscriptionRequest,
      options?: CreateTranscriptionOptions
    ) => Promise<CreateTranscriptionResponse>;
  };
}

export function getAudioTranscriptions(context: Client) {
  return {
    createTranscription: (
      audio: CreateTranscriptionRequest,
      options?: CreateTranscriptionOptions
    ) => createTranscription(context, audio, options),
  };
}

export function getAudioTranscriptionsOperations(): AudioTranscriptionsOperations {
  return {
    transcriptions: getAudioTranscriptions,
  };
}

export interface AudioTranslationsOperations {
  translations: {
    createTranslation: (
      audio: CreateTranslationRequest,
      options?: CreateTranslationOptions
    ) => Promise<CreateTranslationResponse>;
  };
}

export function getAudioTranslations(context: Client) {
  return {
    createTranslation: (
      audio: CreateTranslationRequest,
      options?: CreateTranslationOptions
    ) => createTranslation(context, audio, options),
  };
}

export function getAudioTranslationsOperations(): AudioTranslationsOperations {
  return {
    translations: getAudioTranslations,
  };
}
