import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Command} from '../data/command';

@Injectable({
  providedIn: 'root'
})
export class TerminalService{

  currentResult: string;

  constructor(private httpClient: HttpClient) {}

  getResultsBySubsystem(name: string) {
    return this.httpClient.get('http://localhost:8080/subsystems/'+name+'/result');
  }

  postCommand(command: Command) {
    return this.httpClient.post('http://localhost:8080', command);
  }

  getCurrentResult() {
    return this.currentResult;
  }

  setCurrentResult(result: string) {
    this.currentResult=result;
  }

  addCurrentResult(result: string) {
    this.currentResult+=result;
  }



}
