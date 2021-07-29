import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
// import { ClientsComponent } from './clients/clients.component';



const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'about', component: AboutComponent},
  { path:'service', component: ServiceComponent},
  // { path:'clients', component: ClientsComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
