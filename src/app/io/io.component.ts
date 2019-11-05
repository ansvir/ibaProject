import {Component, OnInit} from '@angular/core';
import {Command} from '../data/Command';
import {GetService} from '../services/get.service';
import {PostService} from '../services/post.service';
import {TerminalService} from '../services/terminal.service';

@Component({
  selector: 'app-io',
  templateUrl: './io.component.html',
  styleUrls: ['./io.component.css']
})

export class IoComponent implements OnInit{

  constructor(private getService: GetService,
              private postService: PostService,
              private terminalService: TerminalService
              ) {}

  CONNECTION_ERROR_MSG='Error while connecting to localhost:8080\n';
  inputCommand: string;
  currentResult: string;

  ngOnInit() {
    this.currentResult='';
    try {
      this.getService
        .getResultsBySubsystem(this.terminalService.getSubsystem().name).toPromise()
        .then((data: Command[])=> {
          console.log(data);
          data.forEach((value)=> {
            this.setCurrentResult(value.getCommand+'\n'+value.getResult+'\n');
          });
        });
    }
    catch (exception) {
      console.log(exception);
      this.addCurrentResult(this.CONNECTION_ERROR_MSG);
    }
  }

  keyPressed(event) {
    if(event.key==='Enter') {
      this.enterPressed();
    }
  }

  enterPressed() {
    try {
      this.postService
        .postCommand(new Command(this.terminalService.getSubsystem().id,this.inputCommand))
          .then();
    } catch (exception) {
      console.log(exception);
      this.addCurrentResult(this.CONNECTION_ERROR_MSG);
    }

    try {
      this.getService
        .getResultsBySubsystem(this.terminalService.getSubsystem().name).toPromise()
          .then((data: Command[])=> {
            console.log(data);
            this.setCurrentResult('');
            data.forEach((value)=> {
              this.setCurrentResult(value.getCommand+'\n'+value.getResult+'\n');
            });
          });
    }
     catch (exception) {
      console.log(exception);
      this.addCurrentResult(this.CONNECTION_ERROR_MSG);
    }

    this.inputCommand='';
  }

  clearText(subsystem) {
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
