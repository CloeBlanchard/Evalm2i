import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientsService } from 'src/app/shared/services/clients.service';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {

  clientForm: FormGroup;

  constructor(private clientService: ClientsService, private router: Router) {
    this.clientForm = new FormGroup({
      name: new FormControl("Bary", Validators.required),
    })
  }

  ngOnInit(): void {
  }

  sendForm(): void {
    if (this.clientForm.valid) {
      this.clientService.createClient(this.clientForm.value)
      .subscribe(() => {
        this.router.navigate(['../client'])
      })
    }
  }

}
