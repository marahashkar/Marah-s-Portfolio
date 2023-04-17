import { CountUpModule } from 'ngx-countup';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages/pages.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ExperienceComponent } from './experience/experience.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { MapsComponent } from './maps/maps.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProjectsService } from '../core/projects.service';
@NgModule({
  declarations: [
    PagesComponent,
    NavbarComponent,
    HeaderComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent,
    MapsComponent,
    FooterComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NgxTypedJsModule,
    CountUpModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers:[ProjectsService]
})
export class PagesModule { }
