import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from '../models/clients';
import { Salle } from '../models/salles';

@Injectable({
  providedIn: 'root'
})
export class SalleService {

  constructor(private http: HttpClient) { }

  getSalles(): Observable<Salle[]> {
    return this.http.get<Salle[]>(`${environment.apiUrl}/salles`)
  }

  getSalle(id: number): Observable<Salle> {
    return this.http.get<Salle>(`${environment.apiUrl}/salles/${id}`)
  }

  getClientSalle(salleId: number): Observable<Client[]> {
    return this.http.get<Client[]>(`${environment.apiUrl}/salles/${salleId}/clients`)
  }
}
