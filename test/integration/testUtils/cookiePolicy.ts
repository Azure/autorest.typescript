import { PipelinePolicy } from "@azure/core-rest-pipeline";
import { CookieJar } from "tough-cookie";

export const getCookiePolicy: () => PipelinePolicy = () => {
  const cookieJar = new CookieJar(undefined);
  return {
    name: "TestCookiePolicy",
    sendRequest: async (req, next) => {
      if (!req.headers.get("Cookie")) {
        const cookieString = await new Promise<string>((resolve, reject) => {
          cookieJar.getCookieString(req.url, (err, cookie) => {
            if (err) {
              reject(err);
            } else {
              resolve(cookie);
            }
          });
        });
        req.headers.set("Cookie", cookieString);
      }

      const response = await next(req);

      const setCookieHeader = response.headers.get("Set-Cookie");
      if (setCookieHeader !== undefined) {
        await new Promise<void>((resolve, reject) => {
          cookieJar.setCookie(
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

      return response;
    }
  };
};
