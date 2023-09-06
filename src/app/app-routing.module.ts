import { FooterComponent } from './footer/footer.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { AproposComponent } from './apropos/apropos.component';
import { LocalisationComponent } from './localisation/localisation.component';
import { NosservicesComponent } from './nosservices/nosservices.component';
import { SliderComponent } from './slider/slider.component';
import { ProfessionnelComponent } from './professionnel/professionnel.component';
import { AcceuilComponent } from './acceuil/acceuil.component';

const routes: Routes = [
  {path :'home',component:AppComponent},
  {path :'acceuil',component:AcceuilComponent},
  {path :'navbar',component:NavbarComponent},
  {path :'footer',component:FooterComponent},
  {path :'apropos',component:AproposComponent},
  {path :'slider',component:SliderComponent},
  {path :'localisation',component:LocalisationComponent},
  {path :'nosservices',component:NosservicesComponent},
  {path :'pro',component:ProfessionnelComponent},






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
