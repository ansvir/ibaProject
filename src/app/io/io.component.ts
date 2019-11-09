import {Component, OnInit} from '@angular/core';
import {Command} from '../data/command';
import {TerminalService} from '../services/terminal.service';
import {AppConfig} from '../config/app.config';



@Component({
  selector: 'app-io',
  templateUrl: './io.component.html',
  styleUrls: ['./io.component.css'],
})

export class IoComponent implements OnInit{

  constructor(private terminalService: TerminalService, private config: AppConfig) {}

  CONNECTION_ERROR_MSG='Error while connecting to localhost:8080\n';
  inputCommand: string;
  command: Command;

  ngOnInit() {
    this.terminalService.setCurrentResult('');
    try {
      this.terminalService
        .getResultsBySubsystem(this.config.getSubsystem().name)
          .subscribe((data: Command[])=> {
            for(const value of data) {
              this.command=Object.assign(new Command(), value);
              this.terminalService.addCurrentResult(
                this.command.getCommand()+ '\n'+
                this.command.getResult()+'\n'+
                this.command.getTimestamp()+'\n\n'
              );
            }
            this.command=null;
          });


    }
    catch (exception) {
      console.log(exception);
      this.terminalService.addCurrentResult(this.CONNECTION_ERROR_MSG);
    }
  }

  async enterPressed() {
    try {
      this.command=new Command(this.config.getSubsystem().id,this.inputCommand);
      await this.terminalService
        .postCommand(this.command)
          .subscribe(() =>{
            this.terminalService.addCurrentResult(
              this.command.getCommand()+ '\n'+
              this.command.getResult()+'\n'+
              this.command.getTimestamp()+'\n\n'
            );
            this.command=null;
          });
    } catch (exception) {
      console.log(exception);
      this.terminalService.addCurrentResult(this.CONNECTION_ERROR_MSG);
    }

    this.inputCommand='';
  }

  clearText(subsystem) {
  }
}
