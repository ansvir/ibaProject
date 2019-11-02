import {Component} from '@angular/core';
import {Command} from '../data/Command';
import {GetService} from '../services/get.service';
import {PostService} from '../services/post.service';
import {TerminalService} from '../services/terminal.service';

@Component({
  selector: 'app-io',
  templateUrl: './io.component.html',
  styleUrls: ['./io.component.css']
})

export class IoComponent{

  constructor(private getService: GetService, private postService: PostService, private terminalService: TerminalService) { }

  inputCommand: string;
  currentRes=this.terminalService.currentResult;

  keyPressed(event) {
    if(event.key==='Enter') {
      this.enterPressed();
    }
  }

  enterPressed() {
    try {
      this.postService.postCommand(new Command(this.terminalService.getSubsystem().id,this.inputCommand))
        .subscribe(
          (data: Command) => {},
          error => console.log(error)
        );
    } catch (exception) {
      console.log(exception);
      this.terminalService.addCurrentResult(TerminalService.CONNECTION_ERROR_MSG);
    }

    try {
      this.getService.getResultsBySubsystem(this.terminalService.getSubsystem().name)
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
      this.terminalService.addCurrentResult(TerminalService.CONNECTION_ERROR_MSG);
    }

    this.inputCommand='';
  }

  clearText(subsystem) {
  }
}
