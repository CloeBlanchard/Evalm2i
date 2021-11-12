import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Reservation } from 'src/app/shared/models/reservation';
import { ReservationsService } from 'src/app/shared/services/reservations.service';

@Component({
  selector: 'app-reservation-page',
  templateUrl: './reservation-page.component.html',
  styleUrls: ['./reservation-page.component.css']
})
export class ReservationPageComponent implements OnInit {

  id?: number = undefined
  reservations: Reservation[] = []

  constructor(private route: ActivatedRoute, private reservationService: ReservationsService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.reservationService.getReservations()
    .subscribe()
    this.refreshSalles();
  }

  refreshSalles(): Subscription {
    return this.reservationService.getReservations()
    .subscribe((reservations: Reservation[]) => {
      this.reservations = reservations
    })
  }

}
