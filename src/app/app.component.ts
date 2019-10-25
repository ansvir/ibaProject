
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TabsComponent} from './tabs/tabs.component';

export let tabs =
  {
    IMS: {
      title:'IMS',
      result:''
    },
    CICS: {
      title:'CICS',
      result:''
    },
    MQ: {
      title:'CICS',
      result:''
    },
    DB2: {
      title:'CICS',
      result:''
    },
    FTP: {
      title:'CICS',
      result:''
    }
  };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent{

  constructor(private httpClient: HttpClient) { }

  userInput='';
  // currentTab='IMS';
  currentRes='';
  currentTab;
  commands;
  subsystems;

  receiveFromChild(event){
    this.subsystems = event;
  }

  enterButtonPressed() {

    // this.httpClient.post('http://localhost:8080/subsystems/commands',this.commands )
    //   .subscribe();

    this.enterPressed();
  }

  keyPressed(event) {
    if(event.key==='Enter') {
      this.enterPressed();
    }
  }

  enterPressed() {
    console.log(this.subsystems);

    this.currentRes+=this.subsystems.name+'\n';


    // if(this.userInput!=='') {
    //   switch (this.currentTab) {
    //     case 'IMS': {
    //       tabs.IMS += this.userInput + '\n';
    //       this.currentRes = tabs.IMS;
    //       break;
    //     }
    //     case 'CICS': {
    //       tabs.CICS += this.userInput + '\n';
    //       this.currentRes = tabs.CICS;
    //       break;
    //     }
    //     case 'MQ': {
    //       tabs.MQ += this.userInput + '\n';
    //       this.currentRes = tabs.MQ;
    //       break;
    //     }
    //     case 'DB2': {
    //       tabs.DB2 += this.userInput + '\n';
    //       this.currentRes = tabs.DB2;
    //       break;
    //     }
    //     case 'FTP': {
    //       tabs.FTP += this.userInput + '\n';
    //       this.currentRes = tabs.FTP;
    //       break;
    //     }
    //   }
    //   this.userInput = '';
    // }
  }

  clearText() {
    // switch (this.currentTab) {
    //   case 'IMS': {
    //     tabs.IMS='';
    //     this.currentRes=tabs.IMS;
    //     break;
    //   }
    //   case 'CICS': {
    //     tabs.CICS='';
    //     this.currentRes=tabs.CICS;
    //     break;
    //   }
    //   case 'MQ': {
    //     tabs.MQ='';
    //     this.currentRes=tabs.MQ;
    //     break;
    //   }
    //   case 'DB2': {
    //     tabs.DB2='';
    //     this.currentRes=tabs.DB2;
    //     break;
    //   }
    //   case 'FTP': {
    //     tabs.FTP='';
    //     this.currentRes=tabs.FTP;
    //     break;
    //   }
    // }
  }
}
