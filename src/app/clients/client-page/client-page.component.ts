import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Client } from 'src/app/shared/models/clients';
import { ClientsService } from 'src/app/shared/services/clients.service';

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.css']
})
export class ClientPageComponent implements OnInit {

  id?: number = undefined
  clients: Client[] = []
  constructor(private route: ActivatedRoute, private clientService: ClientsService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.clientService.getClients()
    .subscribe()
    this.refreshClients();
  }

  refreshClients(): Subscription {
    return this.clientService.getClients()
    .subscribe((clients: Client[]) => {
      this.clients = clients;
    })
  }

}
