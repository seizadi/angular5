import { Component, OnInit } from '@angular/core';

@Component({
//  selector: 'app-servers',
//  selector: '[app-servers]',
  selector: '.app-servers',
  templateUrl: './servers.component.html',
})
export class ServersComponent implements OnInit {

  allowNewServers = false;
  serverCreationStatus = "No Server Created";
  serverName = "";
  serverCreated = false;
  servers = ["Test1", "Test2"]

  constructor() {
    setTimeout(() => {
      this.allowNewServers = true;
    }, 2000)

  }

  ngOnInit() {
  }

  onServerCreation(){
    this.serverCreationStatus = "Server " + this.serverName + " Created";
    console.log(this.serverCreationStatus);
    this.serverName = "";
    this.serverCreated = true;
    this.servers.push('this.serverName')
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
