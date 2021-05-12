export const successStates = ["succeeded"];
export const failureStates = ["failed", "canceled", "cancelled"];
export const terminalStates = successStates.concat(failureStates);
