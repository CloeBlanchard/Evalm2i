import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/shared/models/clients';
import { ClientsService } from 'src/app/shared/services/clients.service';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.css']
})
export class ClientCardComponent implements OnInit {

  @Input() client!: Client;

  constructor(private clientServer: ClientsService, private router: Router) { }

  ngOnInit(): void {
  }

}
