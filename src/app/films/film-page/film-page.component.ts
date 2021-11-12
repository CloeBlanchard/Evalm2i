import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Film } from 'src/app/shared/models/films';
import { FilmsService } from 'src/app/shared/services/films.service';

@Component({
  selector: 'app-film-page',
  templateUrl: './film-page.component.html',
  styleUrls: ['./film-page.component.css']
})
export class FilmPageComponent implements OnInit {

  id?: number = undefined
  films: Film[] = []

  constructor(private route: ActivatedRoute, private filmService: FilmsService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.filmService.getFilms()
    .subscribe()
    this.refreshFilms();
  }

  refreshFilms(): Subscription {
    return this.filmService.getFilms()
    .subscribe((films: Film[]) => {
      this.films = films;
    })
  }

}
