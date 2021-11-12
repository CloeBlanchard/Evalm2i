import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Film } from '../models/films';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private http: HttpClient) { }

  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(`${environment.apiUrl}/films`);
  }
  getFilm(id: number): Observable<Film> {
    return this.http.get<Film>(`${environment.apiUrl}/films/${id}`);
  }

  /**
   * récupère les reservations d'un article
   * @param filmId id du film
   * @returns observable avec les commentaires
   */
  // récupère les réservations du film
  getResaFilm(filmId: number): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${environment.apiUrl}/films/${filmId}/reservations`)
  }
}
