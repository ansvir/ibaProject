import {Component, OnInit, Injectable, Output, EventEmitter, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tabs-component',
  templateUrl: 'tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})

@Injectable()
export class TabsComponent implements OnInit {

  @Output()
  outToParent = new EventEmitter<string>();

  subsystems: [];

  commands;
  tabId='0';


  constructor(private httpClient: HttpClient) { }
  ngOnInit() {
    this.httpClient.get('http://localhost:8080/subsystems/subsystems')
      .subscribe((data) => {
        this.subsystems=data as [];
      });
  }

  tabPressed(id) {
    this.tabId=id;
    this.outToParent.emit(this.subsystems[id]);
  }
}
