import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LogoAPComponent } from './logo-ap/logo-ap.component';
import { SocialesComponent } from './sociales/sociales.component';
import { BannerComponent } from './banner/banner.component';



@NgModule({
  declarations: [
    HeaderComponent,
    LogoAPComponent,
    SocialesComponent,
    BannerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ 
    HeaderComponent,LogoAPComponent, SocialesComponent, BannerComponent
  ]
})
export class ComponenteModule { }
