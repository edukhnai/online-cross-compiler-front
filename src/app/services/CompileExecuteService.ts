import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CompileExecuteRequestUtils} from './utils/CompileExecuteRequestUtils';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompileExecuteService {

  constructor(private httpClient: HttpClient) {
  }

  public post(language: string, scriptValue: string | null, kernelValue: string | null): Observable<any> {
    return this.httpClient.post(
      `${environment.API_URL}/compile-execute`,
      CompileExecuteRequestUtils.createCompileExecuteRequest(language, scriptValue, kernelValue)
    );
  }
}
