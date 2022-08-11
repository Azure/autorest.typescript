import { WithSummary } from "../interfaces";

interface WithDocs {
  doc?: string | string[];
}

export function generateDocs({ doc }: WithDocs): string {
  if (isEmptyDoc(doc)) {
    return `// TODO: Add documentation `;
  }

  const docString = Array.isArray(doc) ? doc.join("\n") : doc;
  return `@doc("${docString}")`;
}

export function generateSummary({ summary }: WithSummary): string {
  if (isEmptyDoc(summary)) {
    return "";
  }

  return `@summary("${summary}")`;
}

function isEmptyDoc(doc?: string | string[]): doc is undefined {
  if (!doc) {
    return true;
  }

  if (Array.isArray(doc) && !doc.length) {
    return true;
  }

  return false;
}
