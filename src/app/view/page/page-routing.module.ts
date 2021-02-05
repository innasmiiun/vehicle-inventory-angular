import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home';
import { InventoryComponent } from './inventory';
import { PageNotFoundComponent } from './page-not-found';

import { PageComponent } from './page.component';
import { VehiclePageComponent } from './vehicle-page/vehicle-page.component';

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'inventory',
        component: InventoryComponent,
      },
      {
        path: 'vdp/:id',
        component: VehiclePageComponent,
      },
      {
        path: '**',
        component: PageNotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule {}
