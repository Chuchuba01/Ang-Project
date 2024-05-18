import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightDetailComponent } from './_components/flight-detail/flight-detail.component';
import { FlightsComponent } from './_components/flights/flights.component';
import { FooterComponent } from './_components/footer/footer.component';
import { HomeComponent } from './_components/home/home.component';
import { LoginComponent } from './_components/login/login.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { SignUpComponent } from './_components/sign-up/sign-up.component';
import { FlightModelComponent } from './backend/_models/flight.model/flight.model.component';
import { UserModelComponent } from './backend/_models/user.model/user.model.component';
import { BookingComponent } from './backend/_models/booking.js/booking.component';
import { FlightComponent } from './backend/_models/booking.js/flight.model';
import { AuthInterceptorComponent } from './auth.interceptor/auth.interceptor.component';




@NgModule({
  declarations: [
    AppComponent,
    FlightDetailComponent,
    FlightsComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    SignUpComponent,
    BookingComponent,
    FlightModelComponent,
    UserModelComponent,
    BookingComponent,
    FlightComponent,
    UserModelComponent,
    AuthInterceptorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
