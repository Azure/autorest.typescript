import { TokenCredential } from "@azure/core-auth";
import {
  ServiceClientCredentials,
  Constants as MSRestConstants,
  WebResource,
} from "@azure/ms-rest-js";
import { TokenResponse } from "@azure/ms-rest-nodeauth/dist/lib/credentials/tokenClientCredentials";

const DEFAULT_AUTHORIZATION_SCHEME = "Bearer";

/**
 * This class provides a simple extension to use {@link TokenCredential} from com.azure:azure-identity library to
 * use with legacy Azure SDKs that accept {@link ServiceClientCredentials} family of credentials for authentication.
 */
export class AzureIdentityCredentialAdapter
  implements ServiceClientCredentials {
  private azureTokenCredential: TokenCredential;
  private scopes: string | string[];
  constructor(
    azureTokenCredential: TokenCredential,
    scopes: string | string[] = "https://management.azure.com/.default"
  ) {
    this.azureTokenCredential = azureTokenCredential;
    this.scopes = scopes;
  }

  public async getToken(): Promise<TokenResponse> {
    const accessToken = await this.azureTokenCredential.getToken(this.scopes);
    const result: TokenResponse = {
      accessToken: accessToken.token,
      tokenType: DEFAULT_AUTHORIZATION_SCHEME,
      expiresOn: accessToken.expiresOnTimestamp,
    };
    return result;
  }

  public async signRequest(webResource: WebResource) {
    const tokenResponse = await this.getToken();
    webResource.headers.set(
      MSRestConstants.HeaderConstants.AUTHORIZATION,
      `${tokenResponse.tokenType} ${tokenResponse.accessToken}`
    );
    return Promise.resolve(webResource);
  }
}
