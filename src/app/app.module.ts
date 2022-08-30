import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/user/login/login.component';
import { ForgotPasswordComponent } from './pages/user/forgot-password/forgot-password.component';
import { RegisterComponent } from './pages/user/register/register.component';
import { MainComponent } from './main/main.component';
import { NavBarComponent } from './components/common/nav-bar/nav-bar.component';
import { SideBarComponent } from './components/common/side-bar/side-bar.component';

import { DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailCompanyComponent } from './pages/company/detail-company/detail-company.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    RegisterComponent,
    MainComponent,
    NavBarComponent,
    SideBarComponent,
    DetailCompanyComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
  ],
  providers: [DialogService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
