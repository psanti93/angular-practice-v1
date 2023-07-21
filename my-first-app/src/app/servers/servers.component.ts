import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false; //property binding
  serverCreationStatus = 'No server was created'; //string interpolation
  serverName = "Test Server" //two way binding
  someMessage = "TYPE HERE" // one way binding
  constructor() {
    // property binding example
    setTimeout(()=>{
      this.allowNewServer = true;
    }, 2000)
  }


  // Event binding
  onCreateServer() {
    this.serverCreationStatus = 'Server was created! server name is ' + this.serverName;
  }

  // Event Binding - one way
  onUpdateServerName(event: Event){
    this.someMessage = (<HTMLInputElement>event.target).value;
  }

}
