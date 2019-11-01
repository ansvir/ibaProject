
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

  constructor(private postService: PostService, private getService: GetService) {

  }

  currentRes='';
  command: string;
  subsystem: Subsystem;
  connectionError='Error while connecting to localhost:8080\n';
  firstLoad=false;
  results=[
    {
      subsystem:'IMS',
      id:1,
      result:''
    },
    {
      subsystem:'CICS',
      id:2,
      result:''
    },
    {
      subsystem:'MQ',
      id:3,
      result:''
    },
    {
      subsystem:'DB2',
      id:4,
      result:''
    },
    {
      subsystem:'FTP',
      id:5,
      result:''
    }
  ];

  enterButtonPressed() {
    this.enterPressed();
  }

  keyPressed(event) {
    if(event.key==='Enter') {
      this.enterPressed();
    }
  }

  enterPressed() {
    const cmd = new Command(this.subsystem.id, this.command);
    console.log(cmd);
    try {
      this.postService.postCommand(cmd)
        .subscribe(
          (data: Command) => {},
          error => console.log(error)
        );
      this.currentRes+=this.subsystem.name+' '+this.command+' command result must be here\n';
    } catch (exception) {
      console.log(exception);
      this.currentRes+=this.connectionError;
    }

    this.command='';
  }

  clearText(subsystem) {
  }

  receiveSubFromChild(event){
    this.subsystem = event;
    if(this.firstLoad===false) {
      this.firstLoad=true;
      try {
        this.getService.getResultsBySubsystem(this.subsystem.name)
          .subscribe(
            (data: Command[]) => {
              // data.forEach((command)=> {
              //   this.currentRes=command.getCommand()+'\n'+command.getResult();
              // });
              console.log('v firstload');
              console.log(data);
            },
            error => console.log(error)
          );
      } catch (exception) {
        console.log(exception);
        this.currentRes += this.connectionError;
      }
    }
  }

}
