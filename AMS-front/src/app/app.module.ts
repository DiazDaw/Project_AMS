import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HeaderModule } from './components/header/header.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { BackgroundColorDirective } from './directives/background-color.directive';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { EmailService } from './services/email.service';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatSortModule } from '@angular/material/sort';
import { PrivacyComponent } from './pages/privacy/privacy.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ActivitiesComponent,
    BackgroundColorDirective,
    NotfoundComponent,
    PrivacyComponent
  ],
  imports: [
    CommonModule,
    NoopAnimationsModule, 
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatMenuModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    HeaderModule,
    MatDialogModule,
    FullCalendarModule,
    MatSnackBarModule,
    MatInputModule,
    MatSortModule
  ],
  providers: [EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
