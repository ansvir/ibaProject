import {Component, OnInit, Injectable, Output, EventEmitter} from '@angular/core';
import {GetService} from '../services/get.service';
import {Subsystem} from '../data/Subsystem';

@Component({
  selector: 'app-tabs-component',
  templateUrl: 'tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})

@Injectable()
export class TabsComponent implements OnInit {

  @Output()
  subsOutToParent = new EventEmitter<Subsystem>();

  subsystems: Subsystem[];
  currentTabId;

  constructor(private gs: GetService) { }
  ngOnInit() {
    try {
      this.gs.getSubsystems().subscribe((data: []) => {
        this.subsystems = data;
        this.currentTabId='0';
        this.subsOutToParent.emit(this.subsystems[this.currentTabId]);
      });
    } catch (exception) {
      console.log(exception);
    }
    finally {
      this.currentTabId='0';
    }
  }

  tabPressed(id) {
    this.currentTabId=id;
    this.subsOutToParent.emit(this.subsystems[id]);
  }
}
