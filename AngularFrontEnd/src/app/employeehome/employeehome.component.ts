import { Component, OnInit } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-employeehome',
  templateUrl: './employeehome.component.html',
  styleUrls: ['./employeehome.component.css']
})
export class EmployeehomeComponent implements OnInit {

  toggle?:boolean
  flag=0;


  constructor() { }

  ngOnInit(): void {
  }

  issue()
  {
    if(this.flag==0)
    {
      this.toggle=true;
      this.flag=1;
    }
  }
  return()
  {
    if(this.flag==1)
    {
      this.toggle=false;
      this.flag=0;
    }
  }

}
