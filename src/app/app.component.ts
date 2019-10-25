
import { Component } from '@angular/core';

export let tabs =
  {
    IMS: '',
    CICS: '',
    MQ: '',
    DB2: '',
    FTP: ''
  };

const tabNames = ['IMS','CICS','MQ','DB2','FTP'];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  userInput='';
  currentTab='IMS';
  currentRes='';

  enterButtonPressed() {
    this.enterPressed();
  }

  keyPressed(event) {
    if(event.key==='Enter') {
      this.enterPressed();
    }
  }

  enterPressed() {
    if(this.userInput!=='') {
      switch (this.currentTab) {
        case 'IMS': {
          tabs.IMS += this.userInput + '\n';
          this.currentRes = tabs.IMS;
          break;
        }
        case 'CICS': {
          tabs.CICS += this.userInput + '\n';
          this.currentRes = tabs.CICS;
          break;
        }
        case 'MQ': {
          tabs.MQ += this.userInput + '\n';
          this.currentRes = tabs.MQ;
          break;
        }
        case 'DB2': {
          tabs.DB2 += this.userInput + '\n';
          this.currentRes = tabs.DB2;
          break;
        }
        case 'FTP': {
          tabs.FTP += this.userInput + '\n';
          this.currentRes = tabs.FTP;
          break;
        }
      }
      this.userInput = '';
    }
  }

  // tabPressed(tab: string) {
  //
  //   tabNames.forEach((element)=> {
  //     document.getElementById(element).classList.remove('tabsButtonClicked');
  //   });
  //
  //   switch (tab) {
  //     case 'IMS': {
  //       this.currentTab='IMS';
  //       this.currentRes=tabs.IMS;
  //       break;
  //     }
  //     case 'CICS': {
  //       this.currentTab='CICS';
  //       this.currentRes=tabs.CICS;
  //       break;
  //     }
  //     case 'MQ': {
  //       this.currentTab='MQ';
  //       this.currentRes=tabs.MQ;
  //       break;
  //     }
  //     case 'DB2': {
  //       this.currentTab='DB2';
  //       this.currentRes=tabs.DB2;
  //       break;
  //     }
  //     case 'FTP': {
  //       this.currentTab='FTP';
  //       this.currentRes=tabs.FTP;
  //       break;
  //     }
  //   }
  //   document.getElementById(this.currentTab).classList.add('tabsButtonClicked');
  // }

  clearText() {
    switch (this.currentTab) {
      case 'IMS': {
        tabs.IMS='';
        this.currentRes=tabs.IMS;
        break;
      }
      case 'CICS': {
        tabs.CICS='';
        this.currentRes=tabs.CICS;
        break;
      }
      case 'MQ': {
        tabs.MQ='';
        this.currentRes=tabs.MQ;
        break;
      }
      case 'DB2': {
        tabs.DB2='';
        this.currentRes=tabs.DB2;
        break;
      }
      case 'FTP': {
        tabs.FTP='';
        this.currentRes=tabs.FTP;
        break;
      }
    }
  }
}
