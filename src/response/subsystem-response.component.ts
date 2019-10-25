import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-subsystem-component',
  templateUrl: 'subsystem-response.component.html',
  styleUrls: ['./subsystem-response.component.css']
})

@Injectable()
export class SubsystemResponseComponent implements OnInit {
  subsystems: any;
  json;
  tabId: string;

  constructor(private httpClient: HttpClient) { }
  ngOnInit() {
    this.httpClient.get('http://localhost:8080/subsystems/subsystems')
      .subscribe((data) => {
        this.subsystems = data;
        console.log(data);
        this.json=JSON.parse(JSON.stringify(data));
      });

  }

  tabPressed(id) {
    this.tabId=id;
  }

}
