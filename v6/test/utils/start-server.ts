const cmd = require("node-cmd");
const waitPort = require("wait-port");
type OutputType = "silent" | "dots";

/**
 * Function that starts the test server with retries
 */
const startTestServer = () => retry(startServer, 4);

/**
 * Function that starts the tests server and verifies it is ready to receive requests
 */
const startServer = async (): Promise<boolean> => {
  const isStarted = await signalServer(true);

  if (!isStarted) {
    return Promise.reject(new Error("Could not start server"));
  }

  const output: OutputType = "silent";
  const timeout = 5000;
  const params = {
    host: "localhost",
    port: 3000,
    output,
    timeout
  };

  const isReady = await waitPort(params);

  if (!isReady) {
    return Promise.reject(
      new Error(
        `Couldn't get server ready for testing, not responding on port ${params.port}`
      )
    );
  }

  return Promise.resolve(true);
};

/**
 * Signals the test server to start or stop
 * @param isStart whether the signal is to start
 */
const signalServer = (isStart: boolean): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    const command = isStart ? "start" : "stop";
    cmd.get(`${command}-autorest-testserver`, (err: Error) => {
      if (err) {
        const error = `Error starting server: ${err}`;
        console.error(error);
        reject(new Error(error));
      } else {
        resolve(true);
      }
    });
  });
};

/**
 * Function to pause the retries and allow for exponential backoff
 * @param timeInMs time to pause
 */
const pause = (timeInMs: number) =>
  new Promise(resolve => setTimeout(resolve, timeInMs));

/**
 * Helper for retrying a given function with exponential backoff
 * @param fn Function to retry
 * @param maxTries Max number of attempts
 * @param delay Time in ms to wait before retrying
 */
const retry = (
  fn: () => Promise<boolean>,
  maxTries: number,
  delay = 1000
): Promise<Boolean> =>
  fn().catch((error: Error) => {
    return maxTries > 1
      ? pause(delay).then(() => retry(fn, maxTries - 1, delay * 2))
      : Promise.reject(error);
  });

startTestServer()
  .then(result => {
    console.log(`Server ready: ${result}`);
  })
  .catch(error => {
    console.error(`Couldn't start server ${error}`);
  });
