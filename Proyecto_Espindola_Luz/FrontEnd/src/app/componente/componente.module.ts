import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LogoAPComponent } from './logo-ap/logo-ap.component';
import { BannerComponent } from './banner/banner.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';
import { HyssComponent } from './hyss/hyss.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    HeaderComponent,
    LogoAPComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HyssComponent,
    ProyectoComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    NgCircleProgressModule.forRoot({})
  ],
  exports: [ 
    HeaderComponent,LogoAPComponent, BannerComponent,AcercaDeComponent,ExperienciaComponent,EducacionComponent,HyssComponent,ProyectoComponent,FooterComponent
  ]
})
export class ComponenteModule { }
