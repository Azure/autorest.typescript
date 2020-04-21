import { createClientLogger, setLogLevel } from "@azure/logger";
setLogLevel("verbose");
export const logger = createClientLogger("Autorest.Typescript");
