import {CompileExecuteRequest} from '../dto/CompileExecuteRequest';

const scriptOrKernelNotProvidedErrorMsg = 'Either script value, kernel value or both values should be provided';

export class CompileExecuteRequestUtils {
  public static createCompileExecuteRequest(
    language: string,
    scriptValue: string | null,
    kernelValue: string | null
  ): CompileExecuteRequest {
    if (kernelValue != null && scriptValue != null) {
      return new CompileExecuteRequest(language, scriptValue, kernelValue);
    } else if (scriptValue != null) {
      return new CompileExecuteRequest(language, scriptValue);
    } else {
      alert(scriptOrKernelNotProvidedErrorMsg);
      throw Error(scriptOrKernelNotProvidedErrorMsg);
    }
  }
}
