class CompileExecuteScriptRequest {
  private script: string;

  constructor(script: string) {
    this.script = script;
  }

  getScript(): string {
    return this.script;
  }

  setScript(script: string): void {
    this.script = script;
  }
}
