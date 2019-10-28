
import {Component} from '@angular/core';
import {Subsystem} from './data/Subsystem';
import {PostService} from './services/post.service';
import {Command} from './data/Command';
import {GetService} from './services/get.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent{

  constructor(private postService: PostService, private getService: GetService) { }

  currentRes='';
  command: string;
  subsystem: Subsystem;
  connectionError='Error while connecting to localhost:8080';

  enterButtonPressed(command) {
    this.enterPressed(command);
  }

  keyPressed(event, command) {
    if(event.key==='Enter') {
      this.enterPressed(command);
    }
  }

  enterPressed(command) {
    const cmd = new Command(this.subsystem.id, command);
    console.log(cmd);
    try {
      this.postService.postCommand(cmd)
        .subscribe(
          (data: Command) => {console.log(data);
          },
          error => console.log(error)
        );
    } catch (exception) {
      this.currentRes+=this.connectionError;
    }
    try {
      this.getService.getCommand().subscribe((data: Command) => {
      });
      this.currentRes+=this.subsystem.name+' '+command+' command result must be here\n';
    } catch (exception) {
      this.currentRes+=this.connectionError+'\n';
    }
  }

  clearText(subsystem) {
  }

  receiveSubsFromChild(event){
    this.subsystem = event;
  }

}
