import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reservation } from 'src/app/shared/models/reservation';
import { ReservationsService } from 'src/app/shared/services/reservations.service';

@Component({
  selector: 'app-reservation-card',
  templateUrl: './reservation-card.component.html',
  styleUrls: ['./reservation-card.component.css']
})
export class ReservationCardComponent implements OnInit {

  @Input() reservation!: Reservation;

  constructor(private reservationService: ReservationsService, private router: Router) { }

  ngOnInit(): void {
  }

}
