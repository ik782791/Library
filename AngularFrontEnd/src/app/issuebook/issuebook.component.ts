import { Component, OnInit } from '@angular/core';
import { CredloginService } from '../services/credlogin.service';
import { books } from '../models/books';
import { bookdet } from '../models/bookdet';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-issuebook',
  templateUrl: './issuebook.component.html',
  styleUrls: ['./issuebook.component.css']
})
export class IssuebookComponent implements OnInit {

bk?:books[] |any
bkid?:number[]=[]

data={}

isdate = new Date().toDateString

issuebook={
    transid:0,
    bkids:0,
    studentname:'',
    fine:0,
    returndate:Date,
    issuedate:Date
}


  constructor(private cred:CredloginService,private route: ActivatedRoute,private router: Router) { }


  ngOnInit(): void {

  this.cred.getallbooks().subscribe((res)=>{this.bk=res;
    for(let b of this.bk)
    {
      if(b["status"]=="Available")
            this.bkid?.push(b["bkid"])
    }
  },(e)=>{console.log(e)})

  }


  onsubmit(event?:any)
  {

      this.data ={
        bkids:this.issuebook.bkids,
        studentname:this.issuebook.studentname,
        fine:0,
        returndate:this.issuebook.returndate,
        issuedate:this.issuebook.issuedate
      }

      console.log(this.issuebook.bkids)

      this.cred.postIssueBook(this.data).subscribe(
        (res)=>{console.log(true); alert ("Book is Issued....")
        this.issuebook.studentname=''    
        this.issuebook.returndate=Date
        this.issuebook.issuedate=Date 
      },(e)=>{console.log(e)}
      )

  }


}
