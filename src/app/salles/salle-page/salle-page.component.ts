import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Salle } from 'src/app/shared/models/salles';
import { SalleService } from 'src/app/shared/services/salle.service';

@Component({
  selector: 'app-salle-page',
  templateUrl: './salle-page.component.html',
  styleUrls: ['./salle-page.component.css']
})
export class SallePageComponent implements OnInit {

  id?: number = undefined
  salles: Salle[] = []

  constructor(private route: ActivatedRoute, private salleService: SalleService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.salleService.getSalles()
    .subscribe()
    this.refreshSalles();
  }

  refreshSalles(): Subscription {
    return this.salleService.getSalles()
    .subscribe((salles: Salle[]) => {
      this.salles = salles
    })
  }

}
