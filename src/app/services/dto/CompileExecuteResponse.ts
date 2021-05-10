export class CompileExecuteResponse {
  stdout: string;
  stderr: string | null;

  constructor(stdOut: string, stdErr: string | null = null) {
    this.stdout = stdOut;
    this.stderr = stdErr;
  }
}
