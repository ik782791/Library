import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CredloginService } from '../services/credlogin.service';

@Component({
  selector: 'app-employeelogin',
  templateUrl: './employeelogin.component.html',
  styleUrls: ['./employeelogin.component.css']
})
export class EmployeeloginComponent implements OnInit {

  constructor(private cred:CredloginService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
  }

  empform ={
    user_email:'',
    password:'',
    role:''
  }

  onsubmit()
  {
    let data = {user_email:this.empform.user_email,role:this.empform.role}

    this.cred.getbyemail(data.user_email).subscribe((res)=>{
      console.log(res);
      this.router.navigate(['/employeehome']);

    }
    ,(e)=>{console.log(e)})

  }





}
