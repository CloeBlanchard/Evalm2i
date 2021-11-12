import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientPageComponent } from './clients/client-page/client-page.component';
import { NavbarComponent } from './componant/navbar/navbar.component';
import { ClientCardComponent } from './clients/client-card/client-card.component';
import { HttpClientModule } from '@angular/common/http';
import { FilmPageComponent } from './films/film-page/film-page.component';
import { FilmCardComponent } from './films/film-card/film-card.component';
import { SalleCardComponent } from './salles/salle-card/salle-card.component';
import { SallePageComponent } from './salles/salle-page/salle-page.component';
import { ReservationCardComponent } from './reservations/reservation-card/reservation-card.component';
import { ReservationPageComponent } from './reservations/reservation-page/reservation-page.component';
import { ClientCreateComponent } from './clients/client-create/client-create.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditClientComponent } from './clients/edit-client/edit-client.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientPageComponent,
    NavbarComponent,
    ClientCardComponent,
    FilmPageComponent,
    FilmCardComponent,
    SalleCardComponent,
    SallePageComponent,
    ReservationCardComponent,
    ReservationPageComponent,
    ClientCreateComponent,
    EditClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
