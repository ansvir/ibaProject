import { Component, OnInit, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-subsystem-component',
  templateUrl: 'subsystem-response.component.html',
  styleUrls: ['./subsystem-response.component.css']
})
@Injectable()
export class SubsystemResponseComponent implements OnInit {
  subsystems: any;
  constructor(private httpClient: HttpClient) { }
  ngOnInit() {
    this.httpClient.get('http://localhost:8080/subsystems/subsystems')
      .subscribe(data => this.subsystems = data);
  }
}
