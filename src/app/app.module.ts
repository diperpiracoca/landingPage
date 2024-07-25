import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './commons/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WordChangerComponent } from './home/components/word-changer/word-changer.component';
import { FooterComponent } from './commons/footer/footer.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { LinkComponent } from './home/components/link/link.component';
import { ViewProjectsComponent } from './home/components/view-projects/view-projects.component';
import { TecnologiasComponent } from './commons/tecnologias/tecnologias.component';
import { TermsComponent } from './about/terms/terms.component';
import { PoliticaPrivacidadComponent } from './about/politica-privacidad/politica-privacidad.component';
import { HowWorkComponent } from './about/how-work/how-work.component';
import { PageProjectComponent } from './proyect/page-project/page-project.component';
import { FullComponent } from './core/full/full.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    WordChangerComponent,
    FooterComponent,
    HomePageComponent,
    LinkComponent,
    ViewProjectsComponent,
    TecnologiasComponent,
    TermsComponent,
    PoliticaPrivacidadComponent,
    HowWorkComponent,
    PageProjectComponent,
    FullComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    NgbCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
