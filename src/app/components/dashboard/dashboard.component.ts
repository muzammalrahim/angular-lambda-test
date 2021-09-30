import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr'; 
import { Router } from '@angular/router';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  [x: string]: any;
  message: string = '';
  loading:boolean=false;
  auth: any;
  myform!: FormGroup;
  title ='userReg';

  constructor(private authSvs: AuthService,public toastr: ToastrService,private router: Router,private group:FormBuilder) { }

  
  ngOnInit(): void {
   

  }
  
  createuserviagoogle(){
   this.loading = true;
    this.authSvs.googleSignIn(this.message, ).then((result)=>{
      this.loading=false;
    });
    
  }
  

  
}
