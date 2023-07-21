import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = ""
  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    }, 2000)
  }

  // event binding example
  onCreateServer() {
    this.serverCreationStatus = "Server was Created!"
  }

  onUpdateServerName(event: any){
    this.serverName = event.target.value;
  }


}
