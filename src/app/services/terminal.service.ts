import {Injectable} from '@angular/core';
import {Subsystem} from '../data/Subsystem';
import {HttpClient} from '@angular/common/http';
import {Command} from '../data/Command';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TerminalService{

  subsystem: Subsystem;
  currentResult: string;

  constructor(private httpClient: HttpClient) {}

  getSubsystems() {
    console.log('get Subsystems');
    return this.httpClient.get<Subsystem[]>('http://localhost:8080/subsystems').pipe(map(res=>console.log(res+' v map')));
  }

  getResultsBySubsystem(name: string) {
    return this.httpClient.get('http://localhost:8080/subsystems/'+name+'/result');
  }

  postCommand(command: Command) {
    return this.httpClient.post('http://localhost:8080', command).toPromise();
  }

  getSubsystem() {
    console.log('getSubsystem terminal.service invoking');
    return this.subsystem;
  }

  setSubsystem(subsystem: Subsystem) {
    console.log('setSubsystem terminal.service invoking ');
    this.subsystem=subsystem;
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
