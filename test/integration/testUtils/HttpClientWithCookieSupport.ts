import {
  createDefaultHttpClient,
  HttpClient,
  PipelineRequest,
  PipelineResponse
} from "@azure/core-rest-pipeline";
import { CookieJar } from "tough-cookie";

export class HttpClientWithCookieSupport implements HttpClient {
  private _client = createDefaultHttpClient();
  private cookieJar = new CookieJar(undefined);
  async sendRequest(request: PipelineRequest): Promise<PipelineResponse> {
    if (this.cookieJar && !request.headers.get("Cookie")) {
      const cookieString = await new Promise<string>((resolve, reject) => {
        this.cookieJar!.getCookieString(request.url, (err, cookie) => {
          if (err) {
            reject(err);
          } else {
            resolve(cookie);
          }
        });
      });
      request.headers.set("Cookie", cookieString);
    }
    const response = await this._client.sendRequest(request);
    if (this.cookieJar) {
      const setCookieHeader = response.headers.get("Set-Cookie");
      if (setCookieHeader !== undefined) {
        await new Promise<void>((resolve, reject) => {
          this.cookieJar!.setCookie(
            setCookieHeader,
            response.request.url,
            { ignoreError: true },
            err => {
              if (err) {
                reject(err);
              } else {
                resolve();
              }
            }
          );
        });
      }
    }
    return response;
  }
}
