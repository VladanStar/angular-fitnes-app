import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { TrainingComponent } from './components/training/training.component';
import { PreviousTrainingComponent } from './components/training/previous-training/previous-training.component';
import { CurrentTrainingComponent } from './components/training/current-training/current-training.component';
import { NewTrainingComponent } from './components/training/new-training/new-training.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import{MatDatepickerModule}from"@angular/material/datepicker";
import { MatNativeDateModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import{MatTabsModule}from"@angular/material/tabs";
import{ MatCardModule}from"@angular/material/card";
import { MatSelectModule } from '@angular/material/select';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    WelcomeComponent,
    TrainingComponent,
    PreviousTrainingComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
MatDatepickerModule,
MatNativeDateModule,
MatCheckboxModule,
MatSidenavModule,
MatToolbarModule,
MatListModule,
MatTabsModule,
MatCardModule,
MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
