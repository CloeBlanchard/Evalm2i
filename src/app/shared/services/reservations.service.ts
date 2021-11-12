import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from '../models/clients';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  constructor(private http: HttpClient) { }

  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${environment.apiUrl}/reservations`)
  }

  getReservation(id: number): Observable<Reservation> {
    return this.http.get<Reservation>(`${environment.apiUrl}/reservations/${id}`)
  }

  getClientResa(reservationId: number): Observable<Client[]> {
    return this.http.get<Client[]>(`${environment.apiUrl}/reservations/${reservationId}/clients`)
  }
}
