import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ScrollDirective } from './scroll.directive';
import { AproposComponent } from './apropos/apropos.component';
import { NosservicesComponent } from './nosservices/nosservices.component';
import { LocalisationComponent } from './localisation/localisation.component';
import { ProfessionnelComponent } from './professionnel/professionnel.component';
import { SliderComponent } from './slider/slider.component';
import { AcceuilComponent } from './acceuil/acceuil.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ScrollDirective,
    AproposComponent,
    NosservicesComponent,
    LocalisationComponent,
    SliderComponent,
    ProfessionnelComponent,
    AcceuilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
