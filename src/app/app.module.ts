import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Import Forms
import { FormsModule } from '@angular/forms';
//Import Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { environment } from 'src/environments/environment';


import { AuthService } from './services/auth.service';
import {  ToastrModule } from 'ngx-toastr'; 
import { ToastContainerModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
  
    ConfirmationComponent,
    
 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MatSliderModule,
    ToastrModule.forRoot(
      { 
        
        positionClass: 'toast-top-right',
        preventDuplicates: true,
      }
    ),
    ToastContainerModule,
    HttpClientModule  ,
    ReactiveFormsModule
    
   
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
