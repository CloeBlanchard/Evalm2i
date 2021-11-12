import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Salle } from 'src/app/shared/models/salles';
import { FilmsService } from 'src/app/shared/services/films.service';

@Component({
  selector: 'app-salle-card',
  templateUrl: './salle-card.component.html',
  styleUrls: ['./salle-card.component.css']
})
export class SalleCardComponent implements OnInit {

  @Input() salle!: Salle;

  constructor(private filmService: FilmsService, private router: Router) { }

  ngOnInit(): void {
  }

}
