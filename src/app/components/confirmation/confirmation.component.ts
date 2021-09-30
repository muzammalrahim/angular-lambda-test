import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  constructor( private authSvs: AuthService,public toastr: ToastrService, private router: Router ) { }

  ngOnInit(): void {
    setTimeout(()=>{                           // <<<---using ()=> syntax
      this.router.navigate(['/'])
  }, 60000);
    
  }
  

}
