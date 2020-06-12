import {
  checkForSkipCalls,
  checkForOnlyCalls,
} from "@ts-common/azure-js-dev-tools";

checkForOnlyCalls();
checkForSkipCalls({
  skipIsWarning: true,
});
