import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/clients';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  // injection du clien HTTP pour lancer les requêtes
  constructor(private http: HttpClient) { }

  // création de l'observable qui va retourner un tableau de tous les clients
  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(`${environment.apiUrl}/clients`);
  }

  getClient(id: number): Observable<Client> {
    return this.http.get<Client>(`${environment.apiUrl}/clients/${id}`)
  }

  updateClient(id: number, client: Client): Observable<Client> {
    return this.http.put<Client>(`${environment.apiUrl}/clients/${id}`, client)
  }

  createClient(client: Client): Observable<Client> {
    return this.http.post<Client>(`${environment.apiUrl}/clients`, client)
  }

  deleteClient(client: Client): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/clients/${client.id}`)
  }

  deleteClientById(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/clients/${id}`)
  }
}
