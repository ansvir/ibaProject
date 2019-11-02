import {Component, OnInit, Injectable, Output, EventEmitter, Input} from '@angular/core';
import {GetService} from '../services/get.service';
import {Subsystem} from '../data/Subsystem';
import {TerminalService} from "../services/terminal.service";

@Component({
  selector: 'app-tabs-component',
  templateUrl: 'tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})

@Injectable()
export class TabsComponent implements OnInit {

  subsystems: Subsystem[];
  currentTabId;

  constructor(private getService: GetService, private terminalService: TerminalService) { }
  ngOnInit() {
    try {
      this.getService.getSubsystems().subscribe((data: []) => {
        this.subsystems=data;
        this.currentTabId='0';
        this.terminalService.setSubsystem(this.subsystems[this.currentTabId]);
      });
    } catch (exception) {
      console.log(exception);

    }
  }

  tabPressed(id) {
    this.currentTabId=id;
    this.terminalService.setSubsystem(this.subsystems[id]);
  }
}
