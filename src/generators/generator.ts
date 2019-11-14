export interface Generator {
  process(): void;
  getTemplate(): string;
  templateName: string;
}