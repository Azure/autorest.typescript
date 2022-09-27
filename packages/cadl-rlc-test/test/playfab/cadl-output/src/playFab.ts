import { getClient, ClientOptions } from "@azure-rest/core-client";
import { PlayFabClient } from "./clientDefinitions";

/**
 * Initialize a new instance of the class PlayFabClient class.
 * @param endpoint type: string
 */
export default function createClient(
  endpoint: string,
  options: ClientOptions = {}
): PlayFabClient {
  const baseUrl = options.baseUrl ?? `${endpoint}`;
  options.apiVersion = options.apiVersion ?? "0000-00-00";

  const userAgentInfo = `azsdk-js-playfab-rest/1.0.0-beta.1`;
  const userAgentPrefix =
    options.userAgentOptions && options.userAgentOptions.userAgentPrefix
      ? `${options.userAgentOptions.userAgentPrefix} ${userAgentInfo}`
      : `${userAgentInfo}`;
  options = {
    ...options,
    userAgentOptions: {
      userAgentPrefix,
    },
  };

  const client = getClient(baseUrl, options) as PlayFabClient;

  return {
    ...client,
    playFabAuthenticationOperations: {
      getEntityToken: (options) => {
        return client.path("/Authentication/GetEntityToken").post(options);
      },
      authenticateWithAndroidDeviceId: (options) => {
        return client
          .path("/PlayerIdentity/AuthenticateWithAndroidDeviceId")
          .post(options);
      },
      authenticateWithCustomId: (options) => {
        return client
          .path("/PlayerIdentity/AuthenticateWithCustomId")
          .post(options);
      },
      authenticateWithIOSDeviceId: (options) => {
        return client
          .path("/PlayerIdentity/AuthenticateWithIOSDeviceId")
          .post(options);
      },
      authenticateWithNintendoSwitchDeviceID: (options) => {
        return client
          .path("/PlayerIdentity/AuthenticateWithNintendoSwitchDeviceID")
          .post(options);
      },
      getLinkedPlayerIdentities: (options) => {
        return client
          .path("/PlayerIdentity/GetLinkedPlayerIdentities")
          .post(options);
      },
      unlinkPlayerIdentity: (options) => {
        return client
          .path("/PlayerIdentity/UnlinkPlayerIdentity")
          .post(options);
      },
    },
    playFabFileOperations: {
      abortFileUploads: (options) => {
        return client.path("/File/AbortFileUploads").post(options);
      },
      deleteFiles: (options) => {
        return client.path("/File/DeleteFiles").post(options);
      },
      finalizeFileUploads: (options) => {
        return client.path("/File/FinalizeFileUploads").post(options);
      },
      getFiles: (options) => {
        return client.path("/File/GetFiles").post(options);
      },
      initiateFileUploads: (options) => {
        return client.path("/File/InitiateFileUploads").post(options);
      },
      getObjects: (options) => {
        return client.path("/Object/GetObjects").post(options);
      },
      setObjects: (options) => {
        return client.path("/Object/SetObjects").post(options);
      },
    },
    playFabEventsOperations: {
      writeEvents: (options) => {
        return client.path("/Event/WriteEvents").post(options);
      },
    },
    playFabProfilesOperations: {
      loginPlayer: (options) => {
        return client.path("/TitlePlayer/LoginPlayer").post(options);
      },
    },
  };
}
