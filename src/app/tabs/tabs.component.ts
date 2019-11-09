import {Component, OnInit} from '@angular/core';
import {Subsystem} from '../data/subsystem';
import {TerminalService} from '../services/terminal.service';
import {AppConfig} from '../config/app.config';




@Component({
  selector: 'app-tabs-component',
  templateUrl: 'tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})

export class TabsComponent implements OnInit {

  subsystems: Subsystem[];
  subsystem: Subsystem;
  currentTabId;

  constructor(private config: AppConfig) {
  }

  ngOnInit() {
    console.log('child1 ngoninit');
    this.subsystems=this.config.getSubsystems();
    console.log(this.subsystems);
    this.currentTabId=0;
    this.config.setSubsystem(this.subsystems[this.currentTabId]);
    this.subsystem=this.config.getSubsystem();
    console.log(this.config.getSubsystem());
  }

  tabPressed(id) {
    this.currentTabId=id;
    this.config.setSubsystem(this.subsystems[id]);
    this.subsystem=this.config.getSubsystem();
  }

}
