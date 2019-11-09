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

  ngOnInit() {
    console.log('child2 ngoninit');
    this.terminalService.setCurrentResult('');
    try {
      this.terminalService
        .getResultsBySubsystem(this.config.getSubsystem().name)
        .subscribe((data: Command[])=> {
          console.log(data);
          data.forEach((value)=> {
            this.terminalService.setCurrentResult(value.getCommand+'\n'+value.getResult+'\n');
          });
        });
    }
    catch (exception) {
      console.log(exception);
      this.terminalService.addCurrentResult(this.CONNECTION_ERROR_MSG);
    }
  }

  async enterPressed() {
    try {
      this.terminalService
        .postCommand(new Command(this.config.getSubsystem().id,this.inputCommand))
          .subscribe();
    } catch (exception) {
      console.log(exception);
      this.terminalService.addCurrentResult(this.CONNECTION_ERROR_MSG);
    }

    try {
      this.terminalService
        .getResultsBySubsystem(this.config.getSubsystem().name)
          .subscribe((data: Command[])=> {
            console.log(data);
            this.terminalService.setCurrentResult('');
            data.forEach((value)=> {
              this.terminalService.setCurrentResult(value.getCommand+'\n'+value.getResult+'\n');
            });
          });
    }
     catch (exception) {
      console.log(exception);
      this.terminalService.addCurrentResult(this.CONNECTION_ERROR_MSG);
    }

    this.inputCommand='';
  }

  clearText(subsystem) {
  }
}
