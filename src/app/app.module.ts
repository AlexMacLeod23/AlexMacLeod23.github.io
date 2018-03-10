import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CareerComponent } from './career/career.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HomeComponent } from './home/home.component';
import { OutsideTheOfficeComponent } from './outside-the-office/outside-the-office.component';
import { ContactService } from './contact.service';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { HangmanComponent } from './hangman/hangman.component';
import { HangmanService } from './hangman.service';


@NgModule({
  declarations: [
    AppComponent,
    CareerComponent,
    ContactComponent,
    PortfolioComponent,
    HomeComponent,
    OutsideTheOfficeComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    HangmanComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    ContactService,
    HangmanService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
