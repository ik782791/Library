import { Component, OnInit } from '@angular/core';
import { CredloginService } from '../services/credlogin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {


  constructor(private cred:CredloginService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
  }


  adminform ={
    user_email:'',
    password:'',
    role:''
  }

  onsubmit()
  {
    let data = {user_email:this.adminform.user_email,role:this.adminform.role}

    this.cred.getbyemail(data.user_email).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['/adminhome']);

    }
    ,(e)=>{console.log(e)})

  }






  }




