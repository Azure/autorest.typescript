var cmd = require("node-cmd");
const { equal } = require("assert");
const waitPort = require("wait-port");
const { ping } = require("./testClient");

const signalTestServer = async isStart => {
  return new Promise((resolve, reject) => {
    const command = isStart ? "start" : "stop";
    cmd.get(`${command}-autorest-testserver`, (err, data) => {
      if (err) {
        console.error(`Error starting server: ${err}`);
        reject(false);
      } else {
        resolve(true);
      }
    });
  });
};

/**
 * Root-Level hook that makes sure that the autorest test-server is up and running
 * this hook will execute once before the test suite is executed
 */
before(async function() {
  const params = {
    host: "localhost",
    port: 3000,
    output: "silent"
  };
  console.log("Starting the testServer");
  await signalTestServer(true);
  console.log("Waiting for testServer to be ready");
  const started = await waitPort(params);
  if (!started) {
    console.error("Server couldn't be started");
  } else {
    console.log("Test server is ready");
  }
});

/**
 * Root-Level hook that makes sure that the autorest test-server is shutdown
 * this hook will execute once after the test suite is executed
 */
after(async () => {
  console.log("Stopping the test server");
  await signalTestServer(false);
});

/**
 * Basic test suite that verifies that the Test Server is up and running
 */
describe("TestServer", () => {
  it("should get true as response", async () => {
    const result = await ping(true);
    equal(result, true);
  });

  it("should get false as response", async () => {
    const result = await ping(false);
    equal(result, false);
  });
});
