import { CodeModel } from "@autorest/codemodel";
import { Session } from "@autorest/extension-base";

export interface Logger {
  info: (message: string) => void;
  error: (message: string) => void;
  warning: (message: string) => void;
  debug: (message: string) => void;
  verbose: (message: string) => void;
}

let _session: Session<CodeModel>;

export function setSession(session: Session<CodeModel>): void {
  _session = session;
}

export function getSession(): Session<CodeModel> {
  return _session;
}

export function getLogger(scope: string) {
  const { error, warning, debug, verbose } = _session;

  return {
    info: function (message: string) {
      _session.info(`${scope}: ${message}`);
    },
    error: (message: string) => error(`${scope}: ${message}`, []),
    warning: (message: string) => warning(`${scope}: ${message}`, []),
    debug: (message: string) => debug(`${scope}: ${message}`),
    verbose: (message: string) => verbose(`${scope}: ${message}`),
  };
}
