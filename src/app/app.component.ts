import {Component} from '@angular/core';

interface Language {
  name: string; value: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'thesis';
  selectedLanguage = 'cpp';
  programOrKernel = true; // true equals to program, false - to kernel
  languages: Language [] = [
    { name: 'C', value: 'c'},
    { name: 'C++11', value: 'cpp'},
    { name: 'OpenCL 1.2 Standard C API', value: 'copencl'},
    { name: 'OpenCL 1.2 C++ API Bindings', value: 'cppopencl'},
    { name: 'OpenCL Kernel PTX for NVIDIA GeForce GTX 1050 Ti', value: 'openclptx1050ti'},
    { name: 'OpenCL Kernel PTX for NVIDIA Tesla K80', value: 'openclptxk80'},
    { name: 'OpenCL Kernel Binary for AMD Radeon RX 5700', value: 'openclamd5700'}
  ];
  runCompileExecute(): void {
    alert('Compile&Execute Button clicked');
  }
  runCompile(): void {
    alert('Compile Button activated');
  }
  checkProgramOrKernel(): void {
  if (this.selectedLanguage === 'openclptx1050ti' || this.selectedLanguage === 'openclptxk80' || this.selectedLanguage === 'openclamd5700')
    {
      this.programOrKernel = false;
    }
    else {
      this.programOrKernel = true;
    }
  }
}
