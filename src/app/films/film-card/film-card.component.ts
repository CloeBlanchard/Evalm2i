import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from 'src/app/shared/models/films';
import { FilmsService } from 'src/app/shared/services/films.service';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css']
})
export class FilmCardComponent implements OnInit {

  @Input() film!: Film;

  constructor(private filmService: FilmsService, private router: Router) { }

  ngOnInit(): void {
  }

}
