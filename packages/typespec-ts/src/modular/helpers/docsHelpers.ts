export function getFixmeForMultilineDocs(fixme: string[]): string[] {
  return fixme.map((fixme) => ` @fixme ${fixme}`);
}

export function getDocsFromDescription(description?: string): string[] {
  if (!description || description.trim().length === 0) {
    return [];
  }
  return [description];
}
