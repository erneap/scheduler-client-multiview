import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material/material.module';
import { HeaderMenuComponent } from './header/header-menu/header-menu.component';
import { AppStateService } from './services/app-state.service';
import { AuthService } from './services/auth.service';
import { DialogService } from './services/dialog-service.service';
import { WaitDialogComponent } from './dialog/wait-dialog/wait-dialog.component';
import { SiteService } from './services/site.service';
import { TeamService } from './services/team.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './header/login/login.component';
import { EmployeeService } from './services/employee.service';
import { LogsService } from './services/logs.service';
import { QueryService } from './services/query.service';
import { interceptorProviders } from './services/spin-interceptor.interceptor';
import { PasswordExpireDialogComponent } from './header/password-expire-dialog/password-expire-dialog.component';
import { NotFoundComponent } from './header/not-found/not-found.component';
import { ForgotPasswordComponent } from './header/forgot-password/forgot-password.component';
import { ForgotPasswordResetComponent } from './header/forgot-password-reset/forgot-password-reset.component';
import { PtoHolidayBelowDialogComponent } from './header/pto-holiday-below-dialog/pto-holiday-below-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderMenuComponent,
    WaitDialogComponent,
    LoginComponent,
    PasswordExpireDialogComponent,
    NotFoundComponent,
    ForgotPasswordComponent,
    ForgotPasswordResetComponent,
    PtoHolidayBelowDialogComponent,
    HomeComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [
    AppStateService,
    AuthService,
    DialogService,
    EmployeeService,
    LogsService,
    QueryService,
    SiteService,
    TeamService,
    interceptorProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
