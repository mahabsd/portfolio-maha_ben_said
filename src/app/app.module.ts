import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    NavbarComponent,
    SidebarComponent,
    AboutMeComponent,
    SkillsComponent,
    ProjectsComponent,
    WorkComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
