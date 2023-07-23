import { Component } from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})


export class ServerComponent {
  serverId = 10;
  serverStatus='offline'
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online': 'offline'; // 50/50 the status will be either online or offline
  }

    // string interpolation using a function
  getServerStatus(){
    return this.serverStatus;
  }

  getColor () {
    return this.serverStatus === 'online'? 'green' : 'red';
  }
}
