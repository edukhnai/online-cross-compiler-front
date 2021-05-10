import {Component, Input} from '@angular/core';
import {ILanguage} from './ILanguage';
import {CompileService} from './services/CompileService';
import {CompileExecuteService} from './services/CompileExecuteService';
import {CodeModel} from '@ngstack/code-editor';
import {CompileExecuteResponse} from './services/dto/CompileExecuteResponse';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'thesis';
  selectedLanguage = 'cpp';
  @Input() readonly = false;
  languages: ILanguage [] = [
    {name: 'C', value: 'c'},
    {name: 'C++11', value: 'cpp'},
    {name: 'OpenCL 1.2 Standard C API', value: 'copencl'},
    {name: 'OpenCL 1.2 C++ API Bindings', value: 'cppopencl'},
    {name: 'OpenCL Kernel PTX for NVIDIA GeForce GTX 1050 Ti', value: 'openclptx1050ti'},
    {name: 'OpenCL Kernel PTX for NVIDIA Tesla K80', value: 'openclptxk80'},
    {name: 'OpenCL Kernel Binary for AMD Radeon RX 5700', value: 'openclamd5700'}
  ];
  scriptModel: CodeModel = {
    language: 'c++',
    uri: '',
    value: '{}'
  };
  stdOutTextArea = '';
  stdErrTextArea: string | null = '';
  kernelText = 'hahah';
  constructor(private compileService: CompileService, private compileExecuteService: CompileExecuteService) {
  }

  runCompile(): void {
    this.compileService.post(this.selectedLanguage, this.scriptModel.value, this.kernelText) // this.kernelModel.value
      .subscribe((response: CompileExecuteResponse) => {
        this.stdOutTextArea = response.stdout;
        this.stdErrTextArea = response.stderr;
      });
  }

  runCompileExecute(): void {
    this.compileExecuteService.post(this.selectedLanguage, this.scriptModel.value, this.kernelText)
      .subscribe((response: CompileExecuteResponse) => {
        this.stdOutTextArea = response.stdout;
        this.stdErrTextArea = response.stderr;
      });
  }
}
