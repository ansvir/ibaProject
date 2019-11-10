import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Command} from '../data/command';
import {Subsystem} from '../data/subsystem';

@Injectable({
  providedIn: 'root'
})
export class TerminalService{

  private currentResult: string;
  private command: Command=null;
  private subsystem: Subsystem=null;
  private subsystems: Subsystem[]=null;
  CONNECTION_ERROR_MSG='Error while connecting to localhost:8080\n\n';
  DELETING_ERROR_MSG='Error while deleting\n\n';

  constructor(private httpClient: HttpClient) {
  }

  getSubsystemsRequest() {
    return this.httpClient.get('http://localhost:8080/subsystems');
  }

  getResultsBySubsystemNameRequest() {
    return this.httpClient.get('http://localhost:8080/subsystems/results?name='+this.subsystem.name);
  }

  async deleteResultsBySubsystemIdRequest() {
    await this.httpClient.delete('http://localhost:8080/subsystems/results/delete?id='+this.subsystem.id).toPromise();
  }

  async loadResultsToOutput() {
    this.setCurrentResult('');
    try {
      await this.getResultsBySubsystemNameRequest()
        .toPromise()
          .then((data: Command[]) => {
            for (const value of data) {
              this.command = Object.assign(new Command(), value);
              this.addCurrentResult(
                this.command.command + '\n' +
                this.command.result + '\n' +
                this.command.timestamp + '\n\n'
              );
            }
            this.command = null;
          });


    } catch (exception) {
      console.log(exception);
      this.addCurrentResult(this.CONNECTION_ERROR_MSG);
    }
  }

  async postCommand(inputCommand) {
    try {
      this.command=new Command(this.subsystem.id,inputCommand);
      await this.httpClient.post('http://localhost:8080/subsystems/results/create', this.command)
        .toPromise()
          .then(() =>{
            this.addCurrentResult(
              this.command.command + '\n'+
              this.command.result+'\n'+
              this.command.timestamp+'\n\n'
            );
            this.command=null;
          });
    } catch (exception) {
      console.log(exception);
      this.addCurrentResult(this.CONNECTION_ERROR_MSG);
    }
  }

  async deleteResultsBySubsystemId() {
    try {
      await this.deleteResultsBySubsystemIdRequest();
      this.setCurrentResult('Results deleted\n\n');
    }
    catch (exception) {
      console.log(exception);
      this.addCurrentResult(this.DELETING_ERROR_MSG);
      }
    }

  getSubsystem() {
    return this.subsystem;
  }

  setSubsystem(subsystem) {
    this.subsystem=subsystem;
  }

  getSubsystems() {
    return this.subsystems;
  }

  setSubsystems(subsystems) {
    this.subsystems=subsystems;
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
