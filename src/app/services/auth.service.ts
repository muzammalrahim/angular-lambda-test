import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { ToastrService } from 'ngx-toastr';  
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

  
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  [x: string]: any;
  data: any;

  constructor(
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    private toastr: ToastrService,
    private http:HttpClient,
    private router: Router,
  
    ) { }

  // Auth logic to run auth providers
  googleSignIn(message: any,) {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.afAuth.signInWithPopup(provider)
    .then((result) => {
      const user = firebase.auth().currentUser;
      if (user !== null) {
        user.getIdToken(true).then((idToken) => {
          this.data = {
            displayName:user.displayName,
            email: user.email,
            token: idToken,
            message: message ,
          }
          this.submit(this.data).subscribe((res) => {
              console.log('after submit', res)
          });
          this.router.navigate(['/success'])
          this.toastr.success("Successfully SignIn", "Success",{timeOut:60000})
          
        }).catch(function(error) {
          console.log('error', error);
        });
      }
        return result
    }).catch((error) => {
        console.log('FIREBASE', error)
        this.toastr.error("Something went wrong", "Error",{timeOut:3000})
        return undefined
    })
  }
   // Sign out
   SignOut() {
    return this.afAuth.signOut().then(() => {
      console.log('signout')
    })
  }

  submit(data: any) { 
    let headers = new HttpHeaders({
      'authorizationToken': 'abc123' });
    let options = { headers: headers };
    console.log('data to submit', data);
     return this.http.post<any>('https://0bbxnxko3l.execute-api.us-east-2.amazonaws.com/demo/user', data,options);
      
  }
  // showSuccess(message:any, title:any){
  //   this.toastr.success(message, title)

  // }
}

function res(arg0: string, res: any) {
  throw new Error('Function not implemented.');
}
