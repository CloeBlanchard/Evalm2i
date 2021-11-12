import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/shared/models/clients';
import { ClientsService } from 'src/app/shared/services/clients.service';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  client!: Client;
  clientId!: number

  clientForm: FormGroup

  constructor(private clientService: ClientsService, private router: Router, private route: ActivatedRoute) {
    this.clientForm = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(2)]),
    })
  }

  ngOnInit(): void {
    this.clientId = this.route.snapshot.params['id'];
    this.clientService.getClient(this.clientId)
    .subscribe((client: Client) => {
      this.client = client
      // delete client.id;
      this.clientForm.setValue({...client})
    })
  }

  editClient(): void {
    if (this.clientForm.valid) {
      this.clientService.updateClient(this.clientId, this.clientForm.value)
      .subscribe(() => {
        this.router.navigate(['../clients']);
      })
    }
  }

}
