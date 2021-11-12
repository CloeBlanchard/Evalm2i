import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientCreateComponent } from './clients/client-create/client-create.component';
import { ClientPageComponent } from './clients/client-page/client-page.component';
import { EditClientComponent } from './clients/edit-client/edit-client.component';
import { FilmPageComponent } from './films/film-page/film-page.component';
import { ReservationPageComponent } from './reservations/reservation-page/reservation-page.component';
import { SallePageComponent } from './salles/salle-page/salle-page.component';

const routes: Routes = [
  { path: "", redirectTo: "client", pathMatch: "full"},
  { path: "client", 
    children: [
      {path: "", component: ClientPageComponent, pathMatch: "full"},
      {path: "new", component: ClientCreateComponent, pathMatch: "full"},
      {path: ":id", component: ClientPageComponent, pathMatch: "prefix"},
      {path: ":id/post", component: ClientPageComponent, pathMatch: "prefix"},
      {path: ":id/profil", component: ClientPageComponent, pathMatch: "prefix"},
      {path: ":id/edit", component: EditClientComponent, pathMatch: "prefix"},
    ]
  },
  { path: "film",
    children: [
      { path: "", component: FilmPageComponent, pathMatch: "prefix"}
    ]
  },
  { path: "salle",
    children: [
      { path: "", component: SallePageComponent, pathMatch: "prefix" }
    ]
  },
  { path: "reservation",
    children: [
      { path: "", component: ReservationPageComponent, pathMatch: "prefix"}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
