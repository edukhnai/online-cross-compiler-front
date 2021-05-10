import {CompileExecuteRequest} from '../dto/CompileExecuteRequest';

const scriptOrKernelNotProvidedErrorMsg = 'Either script value, kernel value or both values should be provided';

export class CompileExecuteRequestUtils {
  public static createCompileExecuteRequest(
    language: string,
    scriptValue: string | null,
    kernelValue: string | null
  ): CompileExecuteRequest {
    if (scriptValue != null) {
      return new CompileExecuteRequest(language, scriptValue, kernelValue);
    } else if (kernelValue != null) {
      return new CompileExecuteRequest(language, kernelValue);
    } else {
      alert(scriptOrKernelNotProvidedErrorMsg);
      throw Error(scriptOrKernelNotProvidedErrorMsg);
    }
  }
}
