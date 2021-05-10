export class CompileExecuteRequest {
  language: string;
  script: string;
  kernel: string | null;

  constructor(language: string, mainScript: string, additionalScript: string | null = null) {
    this.language = language;
    this.script = mainScript;
    this.kernel = additionalScript;
  }
}
